"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[39194],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(i,".").concat(u)]||m[u]||h[u]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"How to make a Crate",sidebar_position:1},i=void 0,p={unversionedId:"ecocrates/how-to-make-a-custom-crate",id:"ecocrates/how-to-make-a-custom-crate",title:"How to make a Crate",description:"Default configs",source:"@site/docs/ecocrates/how-to-make-a-custom-crate.md",sourceDirName:"ecocrates",slug:"/ecocrates/how-to-make-a-custom-crate",permalink:"/ecocrates/how-to-make-a-custom-crate",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecocrates/how-to-make-a-custom-crate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to make a Crate",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoCrates",permalink:"/ecocrates/"},next:{title:"How to configure Rewards",permalink:"/ecocrates/rewards"}},c={},h=[{value:"Default configs",id:"default-configs",level:2},{value:"How to add crates",id:"how-to-add-crates",level:2},{value:"Example Crate Config",id:"example-crate-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Preview",id:"preview",level:3},{value:"Pages",id:"pages",level:5},{value:"Rewards",id:"rewards",level:5},{value:"Key",id:"key",level:3},{value:"Key GUI",id:"key-gui",level:3},{value:"Pay To Open",id:"pay-to-open",level:3},{value:"Placed",id:"placed",level:3},{value:"random-reward",id:"random-reward",level:4},{value:"particles",id:"particles",level:4},{value:"hologram",id:"hologram",level:4},{value:"frames",id:"frames",level:5},{value:"Opening/Finish opening crate effects config",id:"openingfinish-opening-crate-effects-config",level:3},{value:"Fireworks:",id:"fireworks",level:4},{value:"Sounds",id:"sounds",level:4},{value:"Rewards",id:"rewards-1",level:3},{value:"Internal Placeholders",id:"internal-placeholders",level:2}],m={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-configs"},"Default configs"),(0,o.kt)("p",null,"The default configs can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoCrates/tree/master/eco-core/core-plugin/src/main/resources/crates"},"here"),"."),(0,o.kt)("h2",{id:"how-to-add-crates"},"How to add crates"),(0,o.kt)("p",null,"Each crate is its own config file, placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/mobs/")," folder, and you can add or remove them as you please. There's an example config called ",(0,o.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,o.kt)("p",null,"The ID of the crate is the file name. This is what you use in commands and in the ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),".\nID's must be lowercase letters, numbers, and underscores only."),(0,o.kt)("h2",{id:"example-crate-config"},"Example Crate Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Demo Crate" # The display name of the crate\nroll: csgo # The opening style, check here: https://plugins.auxilor.io/ecocrates/animations-rolls\ncan-reroll: true # If once you win a reward, you can choose to reroll\n\npreview: # The preview GUI, when left-clicking a crate or using /crates preview\n  title: Demo Crate # The GUI title\n  rows: 6 # The amount of rows for the gui, between 1 and 6\n  forwards-arrow: # The arrow for switching between pages. If on the last page, this will not show up.\n    item: arrow name:"&fNext Page"\n    row: 6\n    column: 6\n  backwards-arrow: # The arrow for switching between pages. If on the first page, this will not show up.\n    item: arrow name:"&fPrevious Page"\n    row: 6\n    column: 4\n  pages: # All the pages in the preview GUI. You can add as many pages as you want.\n    - page: 1\n      mask: # Filler items for decoration\n        items: # Add as many items as you want\n          - gray_stained_glass_pane # Item 1\n          - black_stained_glass_pane # Item 2\n        pattern:\n          - "222222222"\n          - "211111112"\n          - "211011112"\n          - "211110112"\n          - "211111112"\n          - "222222222"\n      rewards: # Where to put rewards in the GUI\n        - id: diamond_sword # The reward ID\n          row: 3 # The row\n          column: 4 # The column\n        - id: stack_of_emeralds\n          row: 4\n          column: 6\n    - page: 2\n      mask: # Filler items for decoration\n        items: # Add as many items as you want\n          - gray_stained_glass_pane # Item 1\n          - black_stained_glass_pane # Item 2\n        pattern:\n          - "222222222"\n          - "211111112"\n          - "211110112"\n          - "211011112"\n          - "211111112"\n          - "222222222"\n      rewards: # Where to put rewards in the GUI\n        - id: bedrock\n          row: 3\n          column: 6\n        - id: 1000_coins\n          row: 4\n          column: 4\n\nkey: # The physical key to be given to players\n  item: tripwire_hook unbreaking:1 hide_enchants name:"&aDemo Crate Key" # The item\n  lore: # Lore for the key to have\n    - "&fUse this key to open"\n    - "&fthe <g:#56ab2f>Demo Crate</g:#a8e063>"\n  use-custom-item: false # Set this to true in order to use a custom item as the key;\n  # For example making all ecoitems:blue_shards function as keys. This will prevent lore from being applied.\n\nkeygui: # Options for showing up in /crate keys\n  enabled: true # If the crate should be in the key gui\n  item: tripwire_hook unbreaking:1 hide_enchants name:"Demo Crate" # The item in the gui\n  lore: # The GUI lore\n    - "<g:#56ab2f>Demo Crate</g:#a8e063>"\n    - "&fYou have %keys% keys"\n    - "&fGet more at &astore.example.net"\n  row: 2 # The position in the gui\n  column: 3\n  right-click-previews: true # If right click opens the preview\n  left-click-opens: true # If left click open the crate virtually\n  shift-left-click-messsage: # The messages to send on shift-left-click\n    - "Buy a Demo Crate key here! &astore.example.net"\n\npay-to-open: # If people can pay to open if they have no keys\n  enabled: false # If it should be allowed\n  price: 5000 # The price to buy the crate\n\nplaced: # Options for physically placed crates\n  random-reward: # The random reward hologram, shows an item\n    enabled: true # If the random reward should be shown\n    height: 1.5 # The height above the crate at which to show the reward\n    delay: 30 # The ticks between showing a new item\n    name: "&fYou could win:" # The text above the item\n  particles: # The particle effects around the crate, add as many as you want\n    - particle: flame # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html\n      animation: spiral # spiral, double_spiral, circle, or twirl\n  hologram: # The text hologram, requires a hologram plugin to be installed\n    height: 1.5 # The height above the crate\n    ticks: 200 # The total ticks to cycle all frames\n    frames:\n      - tick: 0 # The starting tick to show this frame\n        lines:\n          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n          - "&b&lLeft Click to Preview"\n          - \'&a&lRight click to Open\'\n      - tick: 100\n        lines:\n          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n          - "&a&lLeft Click to Preview"\n          - \'&b&lRight click to Open\'\n\nopen: # Effects when opening the crate, before rewards are given - right when the player clicks\n  messages: # The messages to send the player\n    - "Good luck!"\n  broadcasts: # The messages to send to everyone\n    - "%player%&f is opening the Demo Crate!"\n  commands: [ ] # Commands to execute, use %player% as a placeholder\n  sounds: # The sounds to play\n    - sound: entity_villager_yes # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html\n      volume: 10 # Essentially the distance at which the sound should be heard\n      pitch: 1 # Between 0.5 and 2\n\nfinish: # Effects once the crate rewards have been given\n  messages: # The messages to send the player\n    - "You won %reward%&f!"\n  broadcasts: # The messages to send to everyone\n    - "%player%&f won %reward%&f from the Demo Crate!"\n  commands: [ ] # Commands to execute, use %player% as a placeholder\n  fireworks: # The fireworks to launch, add as many as you want\n    - power: 2 # The duration of the firework, set to 0 for instant explosion\n      type: ball_large # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html\n      colors: # Any hex colors\n        - 00ffff\n        - 00ff00\n      fade-colors: # Any hex colors\n        - ffffff\n        - 999999\n      trail: true\n      flicker: true\n  sounds: # The sounds to play, ad ass many as you want\n    - sound: entity_generic_explode # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html\n      volume: 10 # Essentially the distance at which the sound should be heard\n      pitch: 1 # Between 0.5 and 2\n\nrewards: # The rewards to give, configure in rewards.yml\n  - diamond_sword\n  - stack_of_emeralds\n  - bedrock\n  - 1000_coin\n')),(0,o.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name:")," The name of the crate, shown to the player."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"roll:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/animationsandrolls#list-of-rolls"},"Roll")," type for this crate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"can-reroll:")," Enable/disable reroll feature for this crate."),(0,o.kt)("h3",{id:"preview"},"Preview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'preview:\n  title: Demo Crate\n  rows: 6\n  forwards-arrow:\n    item: arrow name:"&fNext Page"\n    row: 6\n    column: 6\n  backwards-arrow:\n    item: arrow name:"&fPrevious Page"\n    row: 6\n    column: 4\n  pages:\n    - page: 1\n      mask:\n        items:\n          - gray_stained_glass_pane\n          - black_stained_glass_pane\n        pattern:\n          - "222222222"\n          - "211111112"\n          - "211011112"\n          - "211110112"\n          - "211111112"\n          - "222222222"\n      rewards:\n        - id: diamond_sword # The reward ID\n          row: 3\n          column: 4\n        - id: stack_of_emeralds\n          row: 4\n          column: 6\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"title:")," The title of preview GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rows:")," The amount of rows in the preview GUI (1-6)."),(0,o.kt)("h5",{id:"pages"},"Pages"),(0,o.kt)("p",null,"To configure a pattern and mask, read here for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/pages"},"Pages")),(0,o.kt)("h5",{id:"rewards"},"Rewards"),(0,o.kt)("p",null,"Where you set where crate rewards are placed in the preview GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"id:")," The ID of a ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/rewards"},"Reward"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"row/column:")," The location of this item in the crate"),(0,o.kt)("h3",{id:"key"},"Key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'key:\n  item: tripwire_hook unbreaking:1 hide_enchants name:"&aDemo Crate Key"\n  lore:\n    - "&fUse this key to open"\n    - "&fthe <g:#56ab2f>Demo Crate</g:#a8e063>"\n  use-custom-item: false\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item:")," This is the item shown in the GUI, read here for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lore:")," The item lore shown in-game. Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"lore: []")," to remove all lore lines."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"is-custom-item")," If the key should be the exact item provided, rather than using it as a base for it's own key item - enable this to have custom items as your keys, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"ecoitems:fuschium_shard")," would be the key, so ",(0,o.kt)("strong",{parentName:"p"},"all")," Fuschium Shards would open the crate."),(0,o.kt)("h3",{id:"key-gui"},"Key GUI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'keygui:\n  enabled: true\n  item: tripwire_hook unbreaking:1 hide_enchants name:"Demo Crate"\n  lore:\n    - "<g:#56ab2f>Demo Crate</g:#a8e063>"\n    - "&fYou have %keys% keys"\n    - "&fGet more at &astore.example.net"\n  row: 2\n  column: 3\n  right-click-previews: true\n  left-click-opens: true\n  shift-left-click-messsage:\n    - "Buy a Demo Crate key here! &astore.example.net"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enabled:")," If the crate should be in ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/commands-and-permissions#crate-keys-view-your-keys"},"/crate keys")," (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item:")," This is the item shown in the GUI, read here for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lore:")," The item lore shown in-game. Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"lore: []")," to remove all lore lines."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"row/column:")," The location of this item in the GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"right-click-previews:")," If right click opens up crate preview (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"left-click-opens:")," If left click should open the crate (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"shift-left-click-message:")," A message to be sent on shift-left-click."),(0,o.kt)("h3",{id:"pay-to-open"},"Pay To Open"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enabled:")," Enable/Disable pay-to-open feature for this crate (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"price:")," The price to open this crate (works only if enabled: is set to true)."),(0,o.kt)("h3",{id:"placed"},"Placed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'placed:\n  random-reward:\n    enabled: true\n    height: 1.5\n    delay: 30\n    name: "&fYou could win:"\n  particles:\n    - particle: flame\n      animation: spiral\n  hologram:\n    height: 1.5\n    ticks: 200\n    frames:\n      - tick: 0\n        lines:\n          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n          - "&b&lLeft Click to Preview"\n          - \'&a&lRight click to Open\'\n      - tick: 100\n        lines:\n          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n          - "&a&lLeft Click to Preview"\n          - \'&b&lRight click to Open\'\n')),(0,o.kt)("h4",{id:"random-reward"},"random-reward"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enabled:")," If a random item shows in the hologram."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"height:")," The height above the crate to show the rewards."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"delay:")," The ticks between changing the displayed item."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name:")," The text shown above the display item."),(0,o.kt)("h4",{id:"particles"},"particles"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"particle:")," The particle, read here for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-particle-lookup-system"},"Particles"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"animation:")," The particle animation (",(0,o.kt)("inlineCode",{parentName:"p"},"spiral"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"double_spiral"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"circle"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"twirl"),")."),(0,o.kt)("h4",{id:"hologram"},"hologram"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"height:")," The Y offset for the hologram from the crate block."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ticks:")," The total ticks in the hologram animation."),(0,o.kt)("h5",{id:"frames"},"frames"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tick:")," The starting tick for this frame to be shown."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lines:")," A list of hologram text lines on this frame."),(0,o.kt)("h3",{id:"openingfinish-opening-crate-effects-config"},"Opening/Finish opening crate effects config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'open:\n    messages:\n      - "Good luck!"\n    broadcasts:\n      - "%player%&f is opening the Demo Crate!"\n    commands: [ ]\n    sounds:\n      - sound: entity_villager_yes\n        volume: 10\n        pitch: 1 \n\nfinish:\n    messages:\n      - "You won %reward%&f!"\n    broadcasts:\n      - "%player%&f won %reward%&f from the Demo Crate!"\n    commands: [ ]\n    fireworks:\n      - power: 2\n        type: ball_large\n          - 00ffff\n          - 00ff00\n        fade-colors:\n          - ffffff\n          - 999999\n        trail: true\n        flicker: true\n    sounds:\n      - sound: entity_generic_explode\n        volume: 10 \n        pitch: 1\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"messages:")," A list of messages sent to the player when he starts/finishes opening the crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"broadcasts:")," A list of messages sent to the whole server when a player starts/finishes opening the crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"commands:")," A list of commands to be executed when a player starts/finishes opening the crate (%player% for a player name)"),(0,o.kt)("h4",{id:"fireworks"},"Fireworks:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"power:")," The duration of the firework, set to 0 for instant explosion."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"type:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html"},"Firework Effect Type"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"colors:")," A list of the firework colors (any HEX color of ",(0,o.kt)("inlineCode",{parentName:"p"},"#ffffff")," format)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"fade-colors:")," A list of the firework fade colors (any HEX color of ",(0,o.kt)("inlineCode",{parentName:"p"},"#ffffff")," format)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"trail")," Enable/Disable the trail for this firework (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"flicker")," Enable/Disable the flicker for this firework (true/false)."),(0,o.kt)("h4",{id:"sounds"},"Sounds"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"sound:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html"},"Sound Name"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"volume:")," Essentially the distance at which the sound should be heard."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"pitch:")," The pitch for that sound (between 0.5 and 2)."),(0,o.kt)("h3",{id:"rewards-1"},"Rewards"),(0,o.kt)("p",null,"A list of rewards winnable in the crate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rewards:\n  - diamond_sword\n")),(0,o.kt)("h2",{id:"internal-placeholders"},"Internal Placeholders"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%keys%")),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of virtual keys for this crate the player has.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%reward%")),(0,o.kt)("td",{parentName:"tr",align:null},"The display name of the reward.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%player%")),(0,o.kt)("td",{parentName:"tr",align:null},"The player who won the reward.")))))}u.isMDXComponent=!0}}]);