"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[50618],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,j=p["".concat(l,".").concat(b)]||p[b]||f[b]||c;return n?o.createElement(j,i(i({ref:t},u),{},{components:n})):o.createElement(j,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return f}});var o=n(87462),r=n(63366),c=(n(67294),n(3905)),i=["components"],a={},l="has_job_level",s={unversionedId:"ecojobs/ecojobs-effects/conditions/has_job_level",id:"ecojobs/ecojobs-effects/conditions/has_job_level",title:"has_job_level",description:"Requires a player to have a certain job level",source:"@site/docs/ecojobs/ecojobs-effects/conditions/has_job_level.md",sourceDirName:"ecojobs/ecojobs-effects/conditions",slug:"/ecojobs/ecojobs-effects/conditions/has_job_level",permalink:"/ecojobs/ecojobs-effects/conditions/has_job_level",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecojobs/ecojobs-effects/conditions/has_job_level.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"has_active_job",permalink:"/ecojobs/ecojobs-effects/conditions/has_active_job"},next:{title:"job",permalink:"/ecojobs/ecojobs-effects/filters/job"}},u={},f=[],p={toc:f};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"has_job_level"},(0,c.kt)("inlineCode",{parentName:"h1"},"has_job_level")),(0,c.kt)("p",null,"Requires a player to have a certain job level"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Requires EcoJobs")),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: has_job_level\n  args:\n    job: miner # The job ID\n    level: 30 # The minimum level\n")))}b.isMDXComponent=!0}}]);