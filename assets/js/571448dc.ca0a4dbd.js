"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[71868],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.createContext({}),l=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(f,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return f},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},f="has_potion_effect",l={unversionedId:"effects/all-conditions/has_potion_effect",id:"effects/all-conditions/has_potion_effect",title:"has_potion_effect",description:"Requires a player to have a potion effect active",source:"@site/docs/effects/all-conditions/has_potion_effect.md",sourceDirName:"effects/all-conditions",slug:"/effects/all-conditions/has_potion_effect",permalink:"/effects/all-conditions/has_potion_effect",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-conditions/has_potion_effect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"has_pet_level",permalink:"/effects/all-conditions/has_pet_level"},next:{title:"has_quest_active",permalink:"/effects/all-conditions/has_quest_active"}},s={},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"has_potion_effect"},(0,i.kt)("inlineCode",{parentName:"h1"},"has_potion_effect")),(0,i.kt)("p",null,"Requires a player to have a potion effect active"),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: has_potion_effect\n  args:\n    effect: confusion # The potion effect\n")))}d.isMDXComponent=!0}}]);