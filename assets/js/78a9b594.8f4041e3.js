"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[81574],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(m,s(s({ref:t},f),{},{components:r})):n.createElement(m,s({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},22457:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],c={},l="add_stat",i={unversionedId:"ecoskills/ecoskills-effects/effects/add_stat",id:"ecoskills/ecoskills-effects/effects/add_stat",title:"add_stat",description:"Permanent Effect",source:"@site/docs/ecoskills/ecoskills-effects/effects/add_stat.md",sourceDirName:"ecoskills/ecoskills-effects/effects",slug:"/ecoskills/ecoskills-effects/effects/add_stat",permalink:"/ecoskills/ecoskills-effects/effects/add_stat",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/ecoskills-effects/effects/add_stat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to make a Skill",permalink:"/ecoskills/how-to-make-a-skill"},next:{title:"add_stat_temporarily",permalink:"/ecoskills/ecoskills-effects/effects/add_stat_temporarily"}},f={},u=[{value:"Permanent Effect",id:"permanent-effect",level:4}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add_stat"},(0,o.kt)("inlineCode",{parentName:"h1"},"add_stat")),(0,o.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,o.kt)("p",null,"Adds a value to a specific stat"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires EcoSkills / Aurelium Skills")),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: add_stat\n  args:\n    stat: strength # The name of the stat\n    amount: 10 # The amount to add (or subtract, allows negative values)\n")))}d.isMDXComponent=!0}}]);