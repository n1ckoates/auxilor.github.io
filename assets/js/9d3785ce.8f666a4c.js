"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2570],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return s}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),m=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=m(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=m(r),s=i,d=u["".concat(a,".").concat(s)]||u[s]||p[s]||l;return r?n.createElement(d,o(o({ref:t},f),{},{components:r})):n.createElement(d,o({ref:t},f))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=u;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77102:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var n=r(87462),i=r(63366),l=(r(67294),r(3905)),o=["components"],c={},a="mcmmo_xp_multiplier",m={unversionedId:"effects/all-effects/mcmmo_xp_multiplier",id:"effects/all-effects/mcmmo_xp_multiplier",title:"mcmmo_xp_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/mcmmo_xp_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/mcmmo_xp_multiplier",permalink:"/effects/all-effects/mcmmo_xp_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/mcmmo_xp_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"magic_regen_multiplier",permalink:"/effects/all-effects/magic_regen_multiplier"},next:{title:"mine_radius",permalink:"/effects/all-effects/mine_radius"}},f={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],u={toc:p};function s(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mcmmo_xp_multiplier"},(0,l.kt)("inlineCode",{parentName:"h1"},"mcmmo_xp_multiplier")),(0,l.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,l.kt)("p",null,"Multiplies mcMMO skill xp gain"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires mcMMO")),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: mcmmo_xp_multiplier\n  args:\n    multiplier: 1.5 # The experience multiplier\n    skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.\n      - mining\n      - combat \n")))}s.isMDXComponent=!0}}]);