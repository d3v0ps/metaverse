"use strict";(self.webpackChunk_central_factory_metaverse=self.webpackChunk_central_factory_metaverse||[]).push([[1163],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3351:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>l,default:()=>f});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"queries",title:"Queries",sidebar_label:"Queries",slug:"/framework/apps/queries"},p=void 0,c={unversionedId:"framework/apps/queries",id:"framework/apps/queries",isDocsHomePage:!1,title:"Queries",description:"Queries",source:"@site/developers/framework/apps/queries.md",sourceDirName:"framework/apps",slug:"/framework/apps/queries",permalink:"/metaverse/apps/codex/developers/framework/apps/queries",tags:[],version:"current",frontMatter:{id:"queries",title:"Queries",sidebar_label:"Queries",slug:"/framework/apps/queries"},sidebar:"developersSidebar",previous:{title:"Commands",permalink:"/metaverse/apps/codex/developers/framework/apps/commands"},next:{title:"Async API",permalink:"/metaverse/apps/codex/developers/framework/api-definitions/async-api"}},l=[],u={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Queries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class GetAvatarDetailsQuery extends Query<AvatarDetails> {\n  execute(public id: string) {\n  }\n}\n")))}f.isMDXComponent=!0}}]);