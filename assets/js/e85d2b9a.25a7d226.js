"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[91248],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),f=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=f(r),m=i,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var f=2;f<o;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46871:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return f},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],a={},s="give_permission",f={unversionedId:"effects/all-effects/give_permission",id:"effects/all-effects/give_permission",title:"give_permission",description:"Permanent Effect",source:"@site/docs/effects/all-effects/give_permission.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/give_permission",permalink:"/effects/all-effects/give_permission",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/give_permission.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"give_oxygen",permalink:"/effects/all-effects/give_oxygen"},next:{title:"give_pet_xp",permalink:"/effects/all-effects/give_pet_xp"}},l={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],u={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"give_permission"},(0,o.kt)("inlineCode",{parentName:"h1"},"give_permission")),(0,o.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,o.kt)("p",null,"Gives a permission while active"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires Vault")),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: give_permission\n  args:\n    permission: ecocrates.reroll.mythic # The permission to give\n")))}m.isMDXComponent=!0}}]);