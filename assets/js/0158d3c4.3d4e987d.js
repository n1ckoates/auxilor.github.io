"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[8662],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),f=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=f(r),d=a,g=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var f=2;f<o;f++)l[f]=r[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},39050:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],c={},i="replace_near",f={unversionedId:"effects/all-effects/replace_near",id:"effects/all-effects/replace_near",title:"replace_near",description:"Triggered Effect",source:"@site/docs/effects/all-effects/replace_near.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/replace_near",permalink:"/effects/all-effects/replace_near",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/replace_near.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"repair_item",permalink:"/effects/all-effects/repair_item"},next:{title:"rotate",permalink:"/effects/all-effects/rotate"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"replace_near"},(0,o.kt)("inlineCode",{parentName:"h1"},"replace_near")),(0,o.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,o.kt)("p",null,"Replaces nearby blocks with other blocks"),(0,o.kt)("h1",{id:"example-configs"},"Example Configs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: replace_near\n  args:\n    radius: 5 # The horizontal radius to replace\n    radius_y: 5 # The vertical radius to replace\n    replace_to: obsidian # The block to replace to\n    duration: 40 # (Optional) The duration to replace for before returning back to the original state\n    whitelist: # (Optional) A list of blocks to replace\n      - lava\n    exposed_only: true # (Optional) If only blocks with air above them should be replaced\n    source_only: true # (Optional) If only source blocks should be replaced (for liquids)\n    disable_on_sneak: true # If the effect should not activate while sneaking\n  ...other config (eg triggers, filters, mutators, etc)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: replace_near\n  args:\n    radius: 5 # The horizontal radius to replace\n    radius_y: 5 # The vertical radius to replace\n    replace_to: gold_block # The block to replace to\n    blacklist: # (Optional) A list of blocks to not replace\n      - gold_ore\n  ...other config (eg triggers, filters, mutators, etc)\n")))}d.isMDXComponent=!0}}]);