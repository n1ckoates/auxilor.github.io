"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[45626],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54488:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"The Particle Lookup System",sidebar_position:5},s=void 0,p={unversionedId:"all-plugins/the-particle-lookup-system",id:"all-plugins/the-particle-lookup-system",title:"The Particle Lookup System",description:"What is the Particle Lookup System?",source:"@site/docs/all-plugins/the-particle-lookup-system.md",sourceDirName:"all-plugins",slug:"/all-plugins/the-particle-lookup-system",permalink:"/all-plugins/the-particle-lookup-system",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/the-particle-lookup-system.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"The Particle Lookup System",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"The Entity Lookup System",permalink:"/all-plugins/the-entity-lookup-system"},next:{title:"Prices",permalink:"/all-plugins/prices"}},c={},u=[{value:"What is the Particle Lookup System?",id:"what-is-the-particle-lookup-system",level:2},{value:"Keys Explained",id:"keys-explained",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-the-particle-lookup-system"},"What is the Particle Lookup System?"),(0,i.kt)("p",null,"In minecraft, there are more particles than meet the eye. While there are the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"},"default particles"),", there are also colored particles. The particle lookup system exists to give a unified way of getting both default and these custom colored particles."),(0,i.kt)("h2",{id:"keys-explained"},"Keys Explained"),(0,i.kt)("p",null,"Particle keys are much simpler than entity or item keys. There are no arguments, no modifiers, nothing like that. (After all, they're just particles). Instead, there are two ways of specifying a particle:"),(0,i.kt)("p",null,"Default particle names, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"magic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"end_rod"),", etc. You can find a list of all default particles ",(0,i.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"},"here"),"."),(0,i.kt)("p",null,"Custom colored particles, written as ",(0,i.kt)("inlineCode",{parentName:"p"},"rgb:0faab5")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"color:15fe2f"),". You can pass in any valid hex code."))}f.isMDXComponent=!0}}]);