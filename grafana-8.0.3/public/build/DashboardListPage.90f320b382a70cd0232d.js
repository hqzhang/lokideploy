(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{v2PB:function(e,n,r){"use strict";function a(e){const n={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards and permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:"folder-dashboards-"+e.uid,text:"Dashboards",url:e.url}]};return n.children.push({active:!1,icon:"library-panel",id:"folder-library-panels-"+e.uid,text:"Panels",url:e.url+"/library-panels"}),e.canAdmin&&n.children.push({active:!1,icon:"lock",id:"folder-permissions-"+e.uid,text:"Permissions",url:e.url+"/permissions"}),e.canSave&&n.children.push({active:!1,icon:"cog",id:"folder-settings-"+e.uid,text:"Settings",url:e.url+"/settings"}),n}function t(e){const n=a({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return n.children[e].active=!0,{main:n,node:n.children[e]}}r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return t}))},zD1S:function(e,n,r){"use strict";r.r(n);var a=r("q1tI"),t=r("Y8YH"),i=r("/MKj"),o=r("Obii"),d=r("t8hP"),s=r("lzJ5"),l=r("ZGyg"),c=r("NXk7"),u=r("v2PB");var h=r("jbKi"),v=r("nKUr");function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(n,"DashboardListPage",(function(){return p}));const p=Object(a.memo)(({navModel:e,match:n,location:r})=>{var a;const{loading:i,value:s}=Object(t.a)(()=>{const a=n.params.uid,t=r.pathname;return a&&t.startsWith("/dashboards")?(e=>c.b.getFolderByUid(e).then(e=>{const n=Object(u.a)(e);return n.children[0].active=!0,{folder:e,folderNav:n}}))(a).then(({folder:n,folderNav:a})=>{const t=o.locationUtil.stripBaseFromUrl(n.url);return t!==r.pathname&&d.locationService.push(t),{folder:n,pageNavModel:b({},e,{main:a})}}):Promise.resolve({pageNavModel:e})},[n.params.uid]);return Object(v.jsx)(l.a,{navModel:null!==(a=null==s?void 0:s.pageNavModel)&&void 0!==a?a:e,children:Object(v.jsx)(l.a.Contents,{isLoading:i,children:Object(v.jsx)(h.a,{folder:null==s?void 0:s.folder})})})});p.displayName="DashboardListPage";n.default=Object(i.connect)(e=>({navModel:Object(s.a)(e.navIndex,"manage-dashboards")}))(p)}}]);
//# sourceMappingURL=DashboardListPage.90f320b382a70cd0232d.js.map