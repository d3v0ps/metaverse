"use strict";(self.webpackChunkcentral_factory=self.webpackChunkcentral_factory||[]).push([[507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6533:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>u,toc:()=>s,default:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"value-objects",title:"Value Objects",sidebar_label:"Value Objects",slug:"/framework/domain/value-objects"},c=void 0,u={unversionedId:"framework/domain/value-objects",id:"framework/domain/value-objects",isDocsHomePage:!1,title:"Value Objects",description:"A Value Object is a simple object that represents a value.",source:"@site/developers/framework/domain/value-objects.md",sourceDirName:"framework/domain",slug:"/framework/domain/value-objects",permalink:"/developers/framework/domain/value-objects",tags:[],version:"current",frontMatter:{id:"value-objects",title:"Value Objects",sidebar_label:"Value Objects",slug:"/framework/domain/value-objects"},sidebar:"developersSidebar",previous:{title:"Offline-first Domain Driven Development",permalink:"/developers/framework/oddd"},next:{title:"Domain Entity",permalink:"/developers/framework/domain/entity"}},s=[],p={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Value Object is a simple object that represents a value."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class UUIDValueObject {\n\n  constructor(public readonly value: string) {}\n\n  static create(value: string): UUIDValueObject {\n    return new UUIDValueObject(value);\n  }\n\n  static generate(): UUIDValueObject {\n    return new UUIDValueObject(uuid());\n  }\n\n  static validate(value: string): ValidationResult<UUIDValueObject> {\n    return validateUUID(value);\n  }\n\n  toString(): string {\n    return this.value;\n  }\n\n  toJSON(): string {\n    return this.value;\n  }\n}\n")))}m.isMDXComponent=!0}}]);