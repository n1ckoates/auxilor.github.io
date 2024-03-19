"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[43828],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):f(f({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,m=d["".concat(i,".").concat(p)]||d[p]||s[p]||o;return r?n.createElement(m,f(f({ref:t},u),{},{components:r})):n.createElement(m,f({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,f=new Array(o);f[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,f[1]=c;for(var l=2;l<o;l++)f[l]=r[l];return n.createElement.apply(null,f)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43051:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),f=["components"],c={},i="damage_offhand",l={unversionedId:"effects/all-effects/damage_offhand",id:"effects/all-effects/damage_offhand",title:"damage_offhand",description:"Triggered Effect",source:"@site/docs/effects/all-effects/damage_offhand.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/damage_offhand",permalink:"/effects/all-effects/damage_offhand",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/damage_offhand.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"damage_nearby_entities",permalink:"/effects/all-effects/damage_nearby_entities"},next:{title:"damage_twice",permalink:"/effects/all-effects/damage_twice"}},u={},s=[{value:"Triggered Effect",id:"triggered-effect",level:4}],d={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"damage_offhand"},(0,o.kt)("inlineCode",{parentName:"h1"},"damage_offhand")),(0,o.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,o.kt)("p",null,"Damage a victim's offhand item"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: damage_offhand\n  args:\n    damage: 1 # The amount of damage to deal\n  ...other config (eg triggers, filters, mutators, etc)\n")))}p.isMDXComponent=!0}}]);