"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[14035],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(n),f=r,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36090:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c="minecraft:ranged_bow_attack",u={unversionedId:"all-plugins/custom-entity-ai/all-entity-goals/ranged_bow_attack",id:"all-plugins/custom-entity-ai/all-entity-goals/ranged_bow_attack",title:"minecraft:ranged_bow_attack",description:"Perform a ranged bow attack, can only be applied to mobs that have bow attacks",source:"@site/docs/all-plugins/custom-entity-ai/all-entity-goals/ranged_bow_attack.md",sourceDirName:"all-plugins/custom-entity-ai/all-entity-goals",slug:"/all-plugins/custom-entity-ai/all-entity-goals/ranged_bow_attack",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/ranged_bow_attack",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/custom-entity-ai/all-entity-goals/ranged_bow_attack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minecraft:ranged_attack",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/ranged_attack"},next:{title:"minecraft:ranged_crossbow_attack",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/ranged_crossbow_attack"}},s={},p=[],m={toc:p};function f(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"minecraftranged_bow_attack"},(0,o.kt)("inlineCode",{parentName:"h1"},"minecraft:ranged_bow_attack")),(0,o.kt)("p",null,"Perform a ranged bow attack, can only be applied to mobs that have bow attacks"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- key: minecraft:ranged_attack\n  priority: 0\n  args:\n    speed: 1.2 # The speed\n    interval: 40 # The average interval between attacks (in ticks)\n    maxRange: 30 # The maximum range at which to attack from\n")))}f.isMDXComponent=!0}}]);