"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[44636],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),f=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=f(r),m=o,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var f=2;f<c;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64765:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return u}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),a=["components"],l={},i="set_block",f={unversionedId:"effects/all-effects/set_block",id:"effects/all-effects/set_block",title:"set_block",description:"Triggered Effect",source:"@site/docs/effects/all-effects/set_block.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/set_block",permalink:"/effects/all-effects/set_block",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/set_block.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set_armor_trim",permalink:"/effects/all-effects/set_armor_trim"},next:{title:"set_custom_model_data",permalink:"/effects/all-effects/set_custom_model_data"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"set_block"},(0,c.kt)("inlineCode",{parentName:"h1"},"set_block")),(0,c.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,c.kt)("p",null,"Set a block"),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: set_block\n  args:\n    block: diamond_ore # The block to set to\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);