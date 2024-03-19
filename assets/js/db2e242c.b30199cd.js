"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[45314],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),f=u(n),m=a,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(y,o(o({ref:e},p),{},{components:n})):r.createElement(y,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18952:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},c="minecraft:leap_at_target",u={unversionedId:"all-plugins/custom-entity-ai/all-entity-goals/leap_at_target",id:"all-plugins/custom-entity-ai/all-entity-goals/leap_at_target",title:"minecraft:leap_at_target",description:"Allows an entity to jump towards a target",source:"@site/docs/all-plugins/custom-entity-ai/all-entity-goals/leap_at_target.md",sourceDirName:"all-plugins/custom-entity-ai/all-entity-goals",slug:"/all-plugins/custom-entity-ai/all-entity-goals/leap_at_target",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/leap_at_target",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/custom-entity-ai/all-entity-goals/leap_at_target.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minecraft:interact",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/interact"},next:{title:"minecraft:look_at_player",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/look_at_player"}},p={},s=[],f={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"minecraftleap_at_target"},(0,l.kt)("inlineCode",{parentName:"h1"},"minecraft:leap_at_target")),(0,l.kt)("p",null,"Allows an entity to jump towards a target"),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- key: minecraft:leap_at_target\n  priority: 0\n  args:\n    velocity: 2 # The leap velocity\n")))}m.isMDXComponent=!0}}]);