(()=>{"use strict";var n={24:(n,e,t)=>{t.d(e,{Z:()=>c});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const c=a},28:(n,e,t)=>{t.d(e,{Z:()=>c});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,'html,\nbody {\n  margin: 0px;\n  height: 100%;\n  overflow: hidden;\n}\n\n#content {\n  width: 100%;\n  min-height: 100vh;\n  font-size: 1vw;\n  position: relative;\n  overflow: hidden;\n  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.1);\n}\n\nfooter > img {\n  max-width: 5vw;\n  height: 10vh;\n  position: absolute;\n  left: 10%;\n  bottom: 1px;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 10vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin-left: auto;\n  margin-right: auto;\n  gap: 1vh;\n  color: white;\n  background-color: transparent;\n  overflow: hidden;\n}\n\nfooter p {\n  margin: 0;\n  padding: 0;\n}\n\nfooter p:hover {\n  color: black;\n  opacity: 0.7;\n}\n\n#githubLogo {\n  width: 1.5em;\n  height: auto;\n}\n\n#githubLogo:hover {\n  transform: rotate(360deg);\n  transition: 1000ms;\n}\n\n.sunny {\n  background-size: cover;\n}\n\nheader {\n  position: relative;\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 1vh;\n  color: white;\n  background-color: transparent;\n  overflow: hidden;\n}\n\ninput,\nbutton {\n  border-radius: 10px;\n}\n\ninput {\n  box-sizing: border-box;\n  background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg");\n  background-size: 1em 1em;\n  background-repeat: no-repeat;\n  background-position: right;\n  padding: 5px;\n  border: none;\n  opacity: 0.7;\n}\n\ninput:focus {\n  opacity: 1;\n  outline: none;\n  box-shadow: 5px 5px 5px black;\n}\n\n#vrijeme {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  align-items: center;\n}\n\n#vrijeme p {\n  margin: 0;\n}\n\n#vrijeme {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n\n#vrijeme img {\n  width: 100px;\n  height: 100px;\n  align-self: center;\n}\n\n#current {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 120px 120px 120px;\n  gap: 5vh;\n  text-align: center;\n  justify-content: center;\n  font-size: 1em;\n}\n\n#current div {\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  font-size: 2em;\n}\n\n#current span {\n  display: block;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 400;\n  /* font-size: 1em; */\n}\n\n#location-info :nth-child(1) {\n  font-size: 2em;\n}\n#location-info :nth-child(2) {\n  font-size: 1em;\n}\n\n#hourly {\n  margin-top: 10vh;\n  font-size: 2em;\n  gap: 5vw;\n  justify-content: center;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n#hourly span {\n  display: flex;\n  color: rgba(0, 0, 0, 1);\n}\n\n#hourly div :nth-child(1) {\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: underline;\n}\n\n#hourly div :nth-child(odd) {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n#hourly img {\n  display: block;\n  align-self: center;\n  max-height: 3em;\n  max-width: 3em;\n}\n\n#hourly div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1vh;\n  flex-grow: 0;\n  flex-shrink: 1;\n  flex-wrap: wrap;\n  align-items: center;\n  min-width: 7vw;\n}\n\n#hourly svg {\n  height: 1em;\n  width: 1em;\n  display: inline-block;\n  opacity: 0.7;\n}\n\n#units-div {\n  position: absolute;\n  right: 10%;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vh;\n  color: red;\n  width: 5vw;\n}\n\n#units-div p {\n  margin: 0;\n}\n\n/* switch */\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 84px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: red;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(50px);\n  -ms-transform: translateX(50px);\n  transform: translateX(50px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],c=0;c<n.length;c++){var s=n[c],l=i.base?s[0]+i.base:s[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,i);i.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var s=i(n,o),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!n;)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"sunny.jpg",e=t.p+"night.jpg",i=t.p+"rain.jpg",o=t.p+"snow.jpg";async function r(n){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=02e62c481b0f42a08d755821231011&q=${n}&days=3`);return await e.json()}async function a(n){const e=document.querySelector("#current");e.innerHTML="";let t=document.createElement("div");t.innerHTML=`<span>Temperature</span> ${await n.current.temp_c}°C`;let i=document.createElement("div");i.innerHTML=`<span>Feels like</span> ${await n.current.feelslike_c}°C`;let o=document.createElement("div"),r=document.createElement("span");r.innerHTML=await n.current.condition.text;let a=document.createElement("img");a.src=await n.current.condition.icon,o.appendChild(r),o.appendChild(a);let c=document.createElement("div");c.innerHTML=`<span>Chance of rain</span> ${await n.forecast.forecastday[0].day.daily_chance_of_rain}%`;let s=document.createElement("div");s.innerHTML=`<span>Wind</span> ${await n.current.wind_kph}km/h`;let l=document.createElement("div");l.innerHTML=`<span>Humidity</span> ${await n.current.humidity}%`,e.appendChild(t),e.appendChild(i),e.appendChild(o),e.appendChild(c),e.appendChild(s),e.appendChild(l)}async function c(n){const e=document.querySelector("#current");e.innerHTML="";let t=document.createElement("div");t.innerHTML=`<span>Temperature</span> ${await n.current.temp_f}°F`;let i=document.createElement("div");i.innerHTML=`<span>Feels like</span> ${await n.current.feelslike_f}°F`;let o=document.createElement("div"),r=document.createElement("span");r.innerHTML=await n.current.condition.text;let a=document.createElement("img");a.src=await n.current.condition.icon,o.appendChild(r),o.appendChild(a);let c=document.createElement("div");c.innerHTML=`<span>Chance of rain</span> ${await n.forecast.forecastday[0].day.daily_chance_of_rain}%`;let s=document.createElement("div");s.innerHTML=`<span>Wind</span> ${await n.current.wind_mph}mph`;let l=document.createElement("div");l.innerHTML=`<span>Humidity</span> ${await n.current.humidity}%`,e.appendChild(t),e.appendChild(i),e.appendChild(o),e.appendChild(c),e.appendChild(s),e.appendChild(l)}async function s(n){const e=document.querySelector("#hourly");e.innerHTML="";let t=[];await n.forecast.forecastday[0].hour.forEach((n=>{t.push(n)})),await n.forecast.forecastday[1].hour.forEach((n=>{t.push(n)})),t=t.filter((e=>new Date(e.time)>new Date(n.location.localtime)));for(let n=0;n<6;n++){const i=document.querySelector("#unit-p");let o=document.createElement("div"),r=document.createElement("img");r.src=t[n].condition.icon,"Metric"===i.innerHTML?o.innerHTML=`<span>${t[n].time.split(" ")[1]}</span> <span>${t[n].temp_c}°C</span> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg> ${t[n].chance_of_rain}% </span>`:o.innerHTML=`<span>${t[n].time.split(" ")[1]}</span> <span>${t[n].temp_f}°F</span> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg> ${t[n].chance_of_rain}% </span>`,o.appendChild(r),e.appendChild(o)}}async function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"banja_luka";try{const l=await r(t);console.log(l);const d=document.querySelector("#content"),u=document.createElement("div"),p=document.querySelector("#unit-p");return document.querySelector("#checkbox"),async function(n){const e=document.querySelector("#location-info");e.innerHTML="";let t=document.createElement("div");t.innerHTML=`${await n.location.name}, ${await n.location.country}`;let i=document.createElement("div");i.innerHTML=`${new Date(n.location.localtime).toLocaleString()}`,e.appendChild(t),e.appendChild(i)}(l),"Metric"===p.innerHTML?await a(l):await c(l),s(l),d.classList.add("sunny"),d.style.backgroundImage=`url(${n})`,(await l.current.condition.text).includes("rain")?d.style.backgroundImage=`url(${i})`:(await l.current.condition.text).includes("snow")?d.style.backgroundImage=`url(${o})`:0==await l.current.is_day&&(d.style.backgroundImage=`url(${e})`),u}catch(n){alert("Invalid location, returning default"),l()}}function d(){return document.querySelector("#search").value?(console.log(document.querySelector("#search").value),document.querySelector("#search").value):"banja_luka"}function u(){const n=document.createElement("header");return n.appendChild(function(){const n=document.createElement("input");return n.type="text",n.name="search",n.id="search",n.placeholder="Enter location",n.addEventListener("keypress",(function(n){"Enter"===n.key&&async function(){document.querySelector("#search").value?(console.log("ima neka vrijednost"),console.log(document.querySelector("#search").value),await l(document.querySelector("#search").value)):(await l(),console.log("ima neka vrijednost 2"))}()})),n}()),n.appendChild(function(){const n=document.createElement("button");return n.value="Submit",n.innerHTML="Submit",n.addEventListener("click",(async function(){document.querySelector("#search").value?await l(document.querySelector("#search").value):await l()})),n}()),n.appendChild(function(){const n=document.createElement("div");n.setAttribute("id","units-div");const e=document.createElement("label");e.classList.add("switch");const t=document.createElement("input");t.setAttribute("type","checkbox"),t.setAttribute("id","checkbox");const i=document.createElement("span");i.classList.add("slider"),i.classList.add("round");const o=document.createElement("p");return o.setAttribute("id","unit-p"),o.innerHTML="Metric",t.addEventListener("click",(async function(){console.log("sranje radi"),"Metric"===o.innerHTML?(c(await r(d())),console.log(await d()),o.innerHTML="Imperial"):(console.log(await d()),a(await r(d())),o.innerHTML="Metric"),s(await r(d()))})),e.appendChild(t),e.appendChild(i),n.appendChild(e),n.appendChild(o),n}()),n}const p=t.p+"github-mark-white.png";var m=t(379),h=t.n(m),f=t(795),g=t.n(f),b=t(569),v=t.n(b),y=t(565),w=t.n(y),x=t(216),C=t.n(x),E=t(589),k=t.n(E),L=t(24),M={};M.styleTagTransform=k(),M.setAttributes=w(),M.insert=v().bind(null,"head"),M.domAPI=g(),M.insertStyleElement=C(),h()(L.Z,M),L.Z&&L.Z.locals&&L.Z.locals;var T=t(28),S={};S.styleTagTransform=k(),S.setAttributes=w(),S.insert=v().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=C(),h()(T.Z,S),T.Z&&T.Z.locals&&T.Z.locals,async function(){const n=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","vrijeme"),n.appendChild(u()),n.appendChild(e);const t=document.createElement("div");t.setAttribute("id","location-info"),e.appendChild(t);const i=document.createElement("div");i.setAttribute("id","current"),e.appendChild(i);const o=document.createElement("div");o.setAttribute("id","hourly"),e.appendChild(o),e.appendChild(await l()),n.appendChild(function(){const n=document.createElement("footer");return n.innerHTML='<p>Created by Djotajo</p>\n    <a href="https://github.com/Djotajo">\n      <img id="githubLogo"/>\n    </a>',n}()),document.getElementById("githubLogo").src=p}()})()})();