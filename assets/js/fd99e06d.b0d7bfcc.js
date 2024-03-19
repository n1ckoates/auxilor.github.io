"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[43014],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54565:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"How to make a custom tier",sidebar_position:5},s=void 0,l={unversionedId:"ecoarmor/how-to-make-a-custom-tier",id:"ecoarmor/how-to-make-a-custom-tier",title:"How to make a custom tier",description:"Default config",source:"@site/docs/ecoarmor/how-to-make-a-custom-tier.md",sourceDirName:"ecoarmor",slug:"/ecoarmor/how-to-make-a-custom-tier",permalink:"/ecoarmor/how-to-make-a-custom-tier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoarmor/how-to-make-a-custom-tier.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to make a custom tier",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to make a custom set",permalink:"/ecoarmor/how-to-make-a-custom-set"},next:{title:"API",permalink:"/ecoarmor/api"}},p={},u=[{value:"Default config",id:"default-config",level:2},{value:"How to add tiers",id:"how-to-add-tiers",level:2},{value:"Example Armor Set Config",id:"example-armor-set-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Tier Config",id:"tier-config",level:3},{value:"Crystal",id:"crystal",level:3},{value:"Properties",id:"properties",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-config"},"Default config"),(0,o.kt)("p",null,"The default configs can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoArmor/tree/master/eco-core/core-plugin/src/main/resources/tiers"},"here"),"."),(0,o.kt)("h2",{id:"how-to-add-tiers"},"How to add tiers"),(0,o.kt)("p",null,"Each tier is its own config file, placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/tiers/")," folder, and you can add or remove them as you please. There's an example config called ",(0,o.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,o.kt)("p",null,"The ID of the Tier is the file name. This is what you use in commands and the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultTier")," section of the set configs.\nID's must be lowercase letters, numbers, and underscores only."),(0,o.kt)("h2",{id:"example-armor-set-config"},"Example Armor Set Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'display: "&c&lNETHERITE" # The display in-game\nrequiresTiers: # If this tier requires a prior tier\n  - diamond # Tier ID\n  - iron\ncrystal:\n  item: end_crystal # The crystal item, read more here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system\n  name: "&cNetherite Upgrade Crystal" # The name shown in-game.\n  lore: # The lore shown in-game. Set to `lore: []` to remove lore.\n    - "&8Drop this onto an armor piece"\n    - "&8to set its tier to:"\n    - "&c&lNETHERITE"\n    - \'\'\n    - "&8&oRequires the armor to already have Diamond tier"\n  craftable: true # If the armor piece is craftable\n  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes\n    - air\n    - netherite_ingot\n    - air\n    - netherite_ingot\n    - ecoarmor:upgrade_crystal_diamond\n    - netherite_ingot\n    - air\n    - netherite_ingot\n    - air\n  giveAmount: 1 # Optional, set the amount of items to give in the recipe\nproperties:\n  helmet:\n    armor: 3 # The armor attribute\n    toughness: 3 # the toughness attribute\n    knockbackResistance: 1 # The knockback resistance attribute\n    speedPercentage: 0 # The movement speed attribute\n    attackSpeedPercentage: 0 # The attack speed attribute\n    attackDamagePercentage: 0 # The damage attribute\n    attackKnockbackPercentage: 0 # The knockback attribute\n  chestplate:\n    armor: 8\n    toughness: 3\n    knockbackResistance: 1\n    speedPercentage: 0\n    attackSpeedPercentage: 0\n    attackDamagePercentage: 0\n    attackKnockbackPercentage: 0\n  elytra:\n    armor: 3\n    toughness: 0\n    knockbackResistance: 1\n    speedPercentage: 0\n    attackSpeedPercentage: 0\n    attackDamagePercentage: 0\n    attackKnockbackPercentage: 0\n  leggings:\n    armor: 6\n    toughness: 3\n    knockbackResistance: 1\n    speedPercentage: 0\n    attackSpeedPercentage: 0\n    attackDamagePercentage: 0\n    attackKnockbackPercentage: 0\n  boots:\n    armor: 3\n    toughness: 3\n    knockbackResistance: 1\n    speedPercentage: 0\n    attackSpeedPercentage: 0\n    attackDamagePercentage: 0\n    attackKnockbackPercentage: 0\n')),(0,o.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,o.kt)("h3",{id:"tier-config"},"Tier Config"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"display")," How the tier will show up on armor pieces"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"requiresTiers")," A list of tiers that the item must be in order to apply the crystal."),(0,o.kt)("p",null,"To explain this, here is an example progression:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'display: "&c&lNETHERITE" # The display in-game\nrequiresTiers: # If this tier requires a prior tier\n  - diamond # Tier ID\n  - iron \n')),(0,o.kt)("p",null,'The "Netherite" Tier can only be applied to armor pieces that have the "Diamond" or "Iron" tier.'),(0,o.kt)("h3",{id:"crystal"},"Crystal"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item:")," The base item, read here for more: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name:")," The item name in-game."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lore:")," the item lore shown in-game. Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"lore: []")," to remove all lore lines."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"craftable:")," If the item should be craftable (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"recipe:")," The recipe, read here for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes"},"Crafting Recipes")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"giveAmount:")," The amount of items to give when crafted."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"properties:")," are the actual attributes given to an armor piece with that tier. You can find default attributes on the ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Damage#Dealing_damage"},"Minecraft Wiki")))}d.isMDXComponent=!0}}]);