"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[19084],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),u=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},s=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(r),m=n,y=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?o.createElement(y,c(c({ref:e},s),{},{components:r})):o.createElement(y,c({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62393:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),c=["components"],i={},l="location_to_cursor",u={unversionedId:"effects/all-mutators/location_to_cursor",id:"effects/all-mutators/location_to_cursor",title:"location_to_cursor",description:"Move the location to where you or the victim are looking",source:"@site/docs/effects/all-mutators/location_to_cursor.md",sourceDirName:"effects/all-mutators",slug:"/effects/all-mutators/location_to_cursor",permalink:"/effects/all-mutators/location_to_cursor",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-mutators/location_to_cursor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"location_to_block",permalink:"/effects/all-mutators/location_to_block"},next:{title:"location_to_drop",permalink:"/effects/all-mutators/location_to_drop"}},s={},f=[],p={toc:f};function m(t){var e=t.components,r=(0,n.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"location_to_cursor"},(0,a.kt)("inlineCode",{parentName:"h1"},"location_to_cursor")),(0,a.kt)("p",null,"Move the location to where you or the victim are looking"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: location_to_cursor\n  args:\n    target: block # The target location (either block or entity)\n    start: player # Where to raytrace from (either player or victim)\n")))}m.isMDXComponent=!0}}]);