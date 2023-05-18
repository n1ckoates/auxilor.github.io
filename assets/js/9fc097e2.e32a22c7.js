"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4202],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},c="particle_animation",p={unversionedId:"effects/all-effects/particle_animation",id:"effects/all-effects/particle_animation",title:"particle_animation",description:"Triggered Effect",source:"@site/docs/effects/all-effects/particle_animation.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/particle_animation",permalink:"/effects/all-effects/particle_animation",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/particle_animation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"open_ender_chest",permalink:"/effects/all-effects/open_ender_chest"},next:{title:"particle_line",permalink:"/effects/all-effects/particle_line"}},d={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4},{value:"List of Animations",id:"list-of-animations",level:2}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"particle_animation"},(0,i.kt)("inlineCode",{parentName:"h1"},"particle_animation")),(0,i.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,i.kt)("p",null,"Plays a particle animation"),(0,i.kt)("h2",{id:"list-of-animations"},"List of Animations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Args"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"trace")),(0,i.kt)("td",{parentName:"tr",align:null},"Draw a line from the location to the player"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spacing")," The spacing between particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ground_spiral")),(0,i.kt)("td",{parentName:"tr",align:null},"Create a spiral of particles on the ground"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scalar")," The x/y scalar ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"distance-scalar")," The distance scalar ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," The duration of the animation, in ticks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"circle")),(0,i.kt)("td",{parentName:"tr",align:null},"Draw a circle of particles"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"radius")," The circle's radius ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," The time taken to draw the circle, in ticks ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"height")," The height above the location to draw the cricle ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"pitch")," The circle's pitch (in degrees) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"roll")," The roll of the circle (in degrees)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"helix")),(0,i.kt)("td",{parentName:"tr",align:null},"Draw a helix of particles"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"height")," The height to draw the helix ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," The time taken to draw the helix, in ticks ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"speed")," The speed at which to draw the helix ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"radius")," The radius of the helix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"double_helix")),(0,i.kt)("td",{parentName:"tr",align:null},"Draw a double helix of particles"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"height")," The height to draw the helix ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," The time taken to draw the helix, in ticks ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"speed")," The speed at which to draw the helix ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"radius")," The radius of the helix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twirl")),(0,i.kt)("td",{parentName:"tr",align:null},"Twirl particles (double expanding spiral)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"small-radius")," The small radius ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"large-radius")," The large radius ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," The animation duration, in ticks ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"start-height")," The start height ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"end-height")," The end height ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"speed")," The speed at which to draw the animation")))),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: particle_animation\n  args:\n    particle: soul # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)\n    particle-amount: 1 # The amount of particles to spawn on each point\n    animation: ground_spiral # The ID of the animation\n    tick-multiplier: 1 # (Optional) increases the speed of the animation by some multiplier\n    entity: player # (Optional) specifies the entity to have the animation activate around (player, victim, projectile)\n    use-eye-location: true # (Optional) Sets the entity location to be at eye level rather than ground level\n    particle_args: # Arguments for the animation\n      scalar: 1.618\n      distance-scalar: 0.5\n      duration: 20\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);