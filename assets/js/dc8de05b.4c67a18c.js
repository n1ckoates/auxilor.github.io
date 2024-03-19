"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[27060],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=u(r),g=o,m=l["".concat(a,".").concat(g)]||l[g]||p[g]||s;return r?n.createElement(m,c(c({ref:t},f),{},{components:r})):n.createElement(m,c({ref:t},f))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,c=new Array(s);c[0]=l;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<s;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},59514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),c=["components"],i={},a="give_task_xp",u={unversionedId:"ecoquests/ecoquests-effects/effects/give_task_xp",id:"ecoquests/ecoquests-effects/effects/give_task_xp",title:"give_task_xp",description:"Triggered Effect",source:"@site/docs/ecoquests/ecoquests-effects/effects/give_task_xp.md",sourceDirName:"ecoquests/ecoquests-effects/effects",slug:"/ecoquests/ecoquests-effects/effects/give_task_xp",permalink:"/ecoquests/ecoquests-effects/effects/give_task_xp",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoquests/ecoquests-effects/effects/give_task_xp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gain_task_xp",permalink:"/ecoquests/ecoquests-effects/effects/gain_task_xp"},next:{title:"quest_xp_multiplier",permalink:"/ecoquests/ecoquests-effects/effects/quest_xp_multiplier"}},f={},p=[{value:"Triggered Effect",id:"triggered-effect",level:4}],l={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"give_task_xp"},(0,s.kt)("inlineCode",{parentName:"h1"},"give_task_xp")),(0,s.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,s.kt)("p",null,"Gives experience points for a task in a quest, excluding multipliers."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Requires EcoQuests")),(0,s.kt)("h1",{id:"example-config"},"Example Config"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: give_task_xp\n  args:\n    quest: magic_miner # The quest ID\n    task: mine_gold # The task ID\n    xp: 100 # The amount of xp to give\n  ...other config (eg triggers, filters, mutators, etc)\n")))}g.isMDXComponent=!0}}]);