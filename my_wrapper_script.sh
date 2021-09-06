#!/bin/bash

sudo firewall-cmd --permanent --zone=public --add-port=3000/tcp
sudo firewall-cmd --permanent --zone=public --add-port=3100/tcp
sudo firewall-cmd --permanent --zone=public --add-port=9080/tcp

cd grafana-8.0.3/bin
./grafana-server > /dev/null 2>&1
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start grafana process: $status"
  exit $status
fi

cd ../..
./loki-linux-amd64 -config.file=loki-local-config.yaml > /dev/null 2>&1
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start loki: $status"
  exit $status
fi

./promtail-linux-amd64 -config.file=promtail-local-config.yaml > /dev/null 2>&1
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start promtail : $status"
  exit $status
fi

# more than one service in a container. The container exits with an error
# if it detects that either of the processes has exited.
# Otherwise it loops forever, waking up every 60 seconds

while sleep 60; do
  ps aux |grep grafana |grep -q -v grep
  PROCESS_1_STATUS=$?
  ps aux |grep loki-linux-amd64 |grep -q -v grep
  PROCESS_2_STATUS=$?
  ps aux |grep promtail-linux-amd64 |grep -q -v grep
  PROCESS_3_STATUS=$?
  # If the greps above find anything, they exit with 0 status
  # If they are not both 0, then something is wrong
  if [ $PROCESS_1_STATUS -ne 0 -o $PROCESS_2_STATUS -ne 0 -o $PROCESS_3_STATUS -ne 0]; then
    echo "One of the processes has already exited."
    exit 1
  fi
done
