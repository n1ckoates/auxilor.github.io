"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[74417],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(t),d=o,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=t[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},57939:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},l="can_afford_price",f={unversionedId:"effects/all-conditions/can_afford_price",id:"effects/all-conditions/can_afford_price",title:"can_afford_price",description:"Requires a player to be able to afford a certain price",source:"@site/docs/effects/all-conditions/can_afford_price.md",sourceDirName:"effects/all-conditions",slug:"/effects/all-conditions/can_afford_price",permalink:"/effects/all-conditions/can_afford_price",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-conditions/can_afford_price.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"below_y",permalink:"/effects/all-conditions/below_y"},next:{title:"global_points_equal",permalink:"/effects/all-conditions/global_points_equal"}},p={},u=[],s={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"can_afford_price"},(0,a.kt)("inlineCode",{parentName:"h1"},"can_afford_price")),(0,a.kt)("p",null,"Requires a player to be able to afford a certain ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/prices"},"price")),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: can_afford_price\n  args:\n    value: 1000 # The value of the price\n    type: coins # The price type\n")))}d.isMDXComponent=!0}}]);