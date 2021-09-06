(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"5gaU":function(e,t,i){"use strict";i.d(t,"d",(function(){return l})),i.d(t,"g",(function(){return u})),i.d(t,"c",(function(){return p})),i.d(t,"e",(function(){return f})),i.d(t,"h",(function(){return b})),i.d(t,"f",(function(){return m})),i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return v}));var n=i("Obii"),s=i("t8hP"),r=i("NXk7"),o=i("3SGO"),a=i("v2PB"),d=i("Xmxp"),c=i("BAXh");function l(e){return async t=>{const i=await r.b.getFolderByUid(e);t(Object(c.b)(i)),t(Object(o.d)(Object(a.a)(i)))}}function u(e){return async t=>{const i=await r.b.put("/api/folders/"+e.uid,{title:e.title,version:e.version});d.b.emit(n.AppEvents.alertSuccess,["Folder saved"]),s.locationService.push(i.url+"/settings")}}function p(e){return async t=>{await r.b.delete("/api/folders/"+e),s.locationService.push("/dashboards")}}function f(e){return async t=>{const i=await r.b.get(`/api/folders/${e}/permissions`);t(Object(c.c)(i))}}function h(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function b(e,t){return async(i,n)=>{const s=n().folder,o=[];for(const i of s.permissions){if(i.inherited)continue;const n=h(i);e===i&&(n.permission=t),o.push(n)}await r.b.post(`/api/folders/${s.uid}/permissions`,{items:o}),await i(f(s.uid))}}function m(e){return async(t,i)=>{const n=i().folder,s=[];for(const t of n.permissions)t.inherited||t===e||s.push(h(t));await r.b.post(`/api/folders/${n.uid}/permissions`,{items:s}),await t(f(n.uid))}}function g(e){return async(t,i)=>{const n=i().folder,s=[];for(const e of n.permissions)e.inherited||s.push(h(e));s.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),await r.b.post(`/api/folders/${n.uid}/permissions`,{items:s}),await t(f(n.uid))}}function v(e){return async()=>{const t=await Object(s.getBackendSrv)().post("/api/folders",{title:e});d.b.emit(n.AppEvents.alertSuccess,["Folder Created","OK"]),s.locationService.push(n.locationUtil.stripBaseFromUrl(t.url))}}},kzsD:function(e,t,i){"use strict";i.r(t),i.d(t,"FolderSettingsPage",(function(){return j}));var n,s,r=i("q1tI"),o=i("/MKj"),a=i("kDLi"),d=i("ZGyg"),c=i("Xmxp"),l=i("lzJ5"),u=i("5gaU"),p=i("v2PB"),f=i("BAXh"),h=i("xAj+"),b=i("nKUr");const{Input:m}=a.LegacyForms,g={getFolderByUid:u.d,saveFolder:u.g,setFolderTitle:f.d,deleteFolder:u.c},v=Object(o.connect)((e,t)=>{const i=t.match.params.uid;return{navModel:Object(l.a)(e.navIndex,"folder-settings-"+i,Object(p.b)(2)),folderUid:i,folder:e.folder}},g);class j extends r.PureComponent{constructor(e){super(e),this.onTitleChange=e=>{this.props.setFolderTitle(e.target.value)},this.onSave=async e=>{e.preventDefault(),e.stopPropagation(),this.setState({isLoading:!0}),await this.props.saveFolder(this.props.folder),this.setState({isLoading:!1})},this.onDelete=e=>{e.stopPropagation(),e.preventDefault(),c.b.publish(new h.ShowConfirmModalEvent({title:"Delete",text:"Do you want to delete this folder and all its dashboards?",icon:"trash-alt",yesText:"Delete",onConfirm:()=>{this.props.deleteFolder(this.props.folder.uid)}}))},this.state={isLoading:!1}}componentDidMount(){this.props.getFolderByUid(this.props.folderUid)}render(){const{navModel:e,folder:t}=this.props;return Object(b.jsx)(d.a,{navModel:e,children:Object(b.jsxs)(d.a.Contents,{isLoading:this.state.isLoading,children:[n||(n=Object(b.jsx)("h3",{className:"page-sub-heading",children:"Folder settings"})),Object(b.jsx)("div",{className:"section gf-form-group",children:Object(b.jsxs)("form",{name:"folderSettingsForm",onSubmit:this.onSave,children:[Object(b.jsxs)("div",{className:"gf-form",children:[s||(s=Object(b.jsx)("label",{className:"gf-form-label width-7",children:"Name"})),Object(b.jsx)(m,{type:"text",className:"gf-form-input width-30",value:t.title,onChange:this.onTitleChange})]}),Object(b.jsxs)("div",{className:"gf-form-button-row",children:[Object(b.jsx)(a.Button,{type:"submit",disabled:!t.canSave||!t.hasChanged,children:"Save"}),Object(b.jsx)(a.Button,{variant:"destructive",onClick:this.onDelete,disabled:!t.canSave,children:"Delete"})]})]})})]})})}}t.default=v(j)},v2PB:function(e,t,i){"use strict";function n(e){const t={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards and permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:"folder-dashboards-"+e.uid,text:"Dashboards",url:e.url}]};return t.children.push({active:!1,icon:"library-panel",id:"folder-library-panels-"+e.uid,text:"Panels",url:e.url+"/library-panels"}),e.canAdmin&&t.children.push({active:!1,icon:"lock",id:"folder-permissions-"+e.uid,text:"Permissions",url:e.url+"/permissions"}),e.canSave&&t.children.push({active:!1,icon:"cog",id:"folder-settings-"+e.uid,text:"Settings",url:e.url+"/settings"}),t}function s(e){const t=n({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return t.children[e].active=!0,{main:t,node:t.children[e]}}i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}))}}]);
//# sourceMappingURL=FolderSettingsPage.90f320b382a70cd0232d.js.map