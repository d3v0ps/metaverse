"use strict";(self.webpackChunkcentral_factory=self.webpackChunkcentral_factory||[]).push([[8672],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(v,s(s({ref:r},l),{},{components:t})):n.createElement(v,s({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6569:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>p,toc:()=>l,default:()=>u});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],c={id:"services",title:"Services",sidebar_label:"Services",slug:"/framework/apps/services"},i=void 0,p={unversionedId:"framework/apps/services",id:"framework/apps/services",isDocsHomePage:!1,title:"Services",description:"Services are different ways to interact with the framework.",source:"@site/developers/framework/apps/services.md",sourceDirName:"framework/apps",slug:"/framework/apps/services",permalink:"/developers/framework/apps/services",tags:[],version:"current",frontMatter:{id:"services",title:"Services",sidebar_label:"Services",slug:"/framework/apps/services"},sidebar:"developersSidebar",previous:{title:"Features",permalink:"/developers/framework/apps/features"},next:{title:"Scenes",permalink:"/developers/framework/apps/scenes"}},l=[],f={toc:l};function u(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Services are different ways to interact with the framework."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class AvatarsService {\n\n  createAvatar() {\n\n  }\n\n  sendMessage() {\n\n  }\n\n}\n")))}u.isMDXComponent=!0}}]);