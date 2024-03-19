"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[63282],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={},c="has_job_level",s={unversionedId:"effects/all-conditions/has_job_level",id:"effects/all-conditions/has_job_level",title:"has_job_level",description:"Requires a player to have a certain job level",source:"@site/docs/effects/all-conditions/has_job_level.md",sourceDirName:"effects/all-conditions",slug:"/effects/all-conditions/has_job_level",permalink:"/effects/all-conditions/has_job_level",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-conditions/has_job_level.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"has_item_data",permalink:"/effects/all-conditions/has_item_data"},next:{title:"has_mana",permalink:"/effects/all-conditions/has_mana"}},u={},f=[],p={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"has_job_level"},(0,a.kt)("inlineCode",{parentName:"h1"},"has_job_level")),(0,a.kt)("p",null,"Requires a player to have a certain job level"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires EcoJobs")),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: has_job_level\n  args:\n    job: miner # The job ID\n    level: 30 # The minimum level\n")))}m.isMDXComponent=!0}}]);