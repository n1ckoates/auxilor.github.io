"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[40159],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,p=function(e,t){if(null==e)return{};var n,i,p={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),u=p,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?i.createElement(v,r(r({ref:t},c),{},{components:n})):i.createElement(v,r({ref:t},c))}));function u(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,r=new Array(o);r[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:p,r[1]=a;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58384:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return m}});var i=n(87462),p=n(63366),o=(n(67294),n(3905)),r=["components"],a={title:"Commands and Permissions",sidebar_position:4},s=void 0,l={unversionedId:"ecopets/commands-and-permissions",id:"ecopets/commands-and-permissions",title:"Commands and Permissions",description:"/ecopets give (Give a pet)",source:"@site/docs/ecopets/commands-and-permissions.md",sourceDirName:"ecopets",slug:"/ecopets/commands-and-permissions",permalink:"/ecopets/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecopets/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Commands and Permissions",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"PlaceholderAPI",permalink:"/ecopets/placeholderapi"},next:{title:"API",permalink:"/ecopets/api"}},c={},m=[{value:"<code>/ecopets give</code> (Give a pet)",id:"ecopets-give-give-a-pet",level:2},{value:"<code>/ecopets giveegg</code> (Give a pet egg)",id:"ecopets-giveegg-give-a-pet-egg",level:2},{value:"<code>/ecopets reset</code> (Reset a pet)",id:"ecopets-reset-reset-a-pet",level:2},{value:"<code>/ecopets givexp</code> (Give xp to a pet)",id:"ecopets-givexp-give-xp-to-a-pet",level:2},{value:"<code>/pets</code> (Open the pets menu)",id:"pets-open-the-pets-menu",level:2},{value:"<code>/pets activate</code> (Activate a pet)",id:"pets-activate-activate-a-pet",level:2},{value:"<code>/pets deactivate</code> (Deactivate a pet)",id:"pets-deactivate-deactivate-a-pet",level:2},{value:"<code>/ecopets import</code> (Import a pet from lrcdb)",id:"ecopets-import-import-a-pet-from-lrcdb",level:2},{value:"<code>/ecopets export</code> (Export a pet to lrcdb)",id:"ecopets-export-export-a-pet-to-lrcdb",level:2},{value:"XP multiplier permission",id:"xp-multiplier-permission",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,p.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ecopets-give-give-a-pet"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecopets give")," (Give a pet)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.give")),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecopets give <player> <pet>")),(0,o.kt)("h2",{id:"ecopets-giveegg-give-a-pet-egg"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecopets giveegg")," (Give a pet egg)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.give")),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecopets giveegg <player> <pet>")),(0,o.kt)("h2",{id:"ecopets-reset-reset-a-pet"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecopets reset")," (Reset a pet)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.reset")),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecopets reset <player> <pet>")),(0,o.kt)("h2",{id:"ecopets-givexp-give-xp-to-a-pet"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecopets givexp")," (Give xp to a pet)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.givexp")),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecopets givexp <player> <pet> <amount>")),(0,o.kt)("h2",{id:"pets-open-the-pets-menu"},(0,o.kt)("inlineCode",{parentName:"h2"},"/pets")," (Open the pets menu)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.pets")),(0,o.kt)("h2",{id:"pets-activate-activate-a-pet"},(0,o.kt)("inlineCode",{parentName:"h2"},"/pets activate")," (Activate a pet)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.activate")),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/pets activate <pet>")),(0,o.kt)("h2",{id:"pets-deactivate-deactivate-a-pet"},(0,o.kt)("inlineCode",{parentName:"h2"},"/pets deactivate")," (Deactivate a pet)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.deactivate")),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/pets deactivate")),(0,o.kt)("h2",{id:"ecopets-import-import-a-pet-from-lrcdb"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecopets import")," (Import a pet from ",(0,o.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.import")),(0,o.kt)("p",null,"General Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecopets import <id>")),(0,o.kt)("p",null,"Find pets on ",(0,o.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb")),(0,o.kt)("h2",{id:"ecopets-export-export-a-pet-to-lrcdb"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecopets export")," (Export a pet to ",(0,o.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.command.export")),(0,o.kt)("p",null,"General Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecopets export <id>")),(0,o.kt)("h3",{id:"xp-multiplier-permission"},"XP multiplier permission"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.xpmultiplier.<%increase>")),(0,o.kt)("p",null,"General Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.xpmultiplier.200")," would give 200% more skill XP (3x) to anyone with the permission. The backend math is ",(0,o.kt)("inlineCode",{parentName:"p"},"1 + (<%increase> / 100)")," so "),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.xpmultiplier.50percent\nPermission: "),"ecopets.xpmultiplier.double",(0,o.kt)("inlineCode",{parentName:"p"},"Permission:"),"ecopets.xpmultiplier.triple",(0,o.kt)("inlineCode",{parentName:"p"},"Permission:"),"ecopets.xpmultiplier.quadruple`"),(0,o.kt)("p",null,"General Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecopets.xpmultiplier.50percent")," would give 50% more skill XP (1.5x)"))}u.isMDXComponent=!0}}]);