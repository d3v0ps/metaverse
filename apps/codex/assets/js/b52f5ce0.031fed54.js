"use strict";(self.webpackChunk_central_factory_metaverse=self.webpackChunk_central_factory_metaverse||[]).push([[3415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(d,s(s({ref:t},l),{},{components:r})):a.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},558:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>i,toc:()=>l,default:()=>u});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],p={id:"states",title:"States",sidebar_label:"States",slug:"/framework/apps/states"},c=void 0,i={unversionedId:"framework/apps/states",id:"framework/apps/states",isDocsHomePage:!1,title:"States",description:"States are different ways to interact with the framework.",source:"@site/developers/framework/apps/states.md",sourceDirName:"framework/apps",slug:"/framework/apps/states",permalink:"/metaverse/apps/codex/developers/framework/apps/states",tags:[],version:"current",frontMatter:{id:"states",title:"States",sidebar_label:"States",slug:"/framework/apps/states"},sidebar:"developersSidebar",previous:{title:"Managing Dependencies",permalink:"/metaverse/apps/codex/developers/framework/apps/managing-dependencies"},next:{title:"Scenes",permalink:"/metaverse/apps/codex/developers/framework/apps/scenes"}},l=[],f={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"States are different ways to interact with the framework."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class SelectedAvatarState {\n\n  avatar$: Observable<Avatar>;\n\n  selectAvatar(avatar: Avatar);\n\n  unseletAvatar();\n\n}\n")))}u.isMDXComponent=!0}}]);