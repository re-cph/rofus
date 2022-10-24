/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$5=Symbol(),n$5=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$2&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$4=t=>new s$3("string"==typeof t?t:t+"",e$5),i$3=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$4=window.trustedTypes,r$1=e$4?e$4.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$3={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$3,reflect:!1,hasChanged:n$4};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$3.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$3.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$2=globalThis.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$3=`lit$${(Math.random()+"").slice(9)}$`,o$2="?"+e$3,n$3=`<${o$2}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$3:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$3+y):s+e$3+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$3),s=t.length-1;if(s>0){l.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$2)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$3,t+1));)c.push({type:7,index:r}),t+=e$3.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h()),this.A(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$2?i$2.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$2(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$1(e,n)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=w,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===w||null==r)return this.ft=void 0,this.it=r;if(r===b)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this.ft;this.it=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var hasOwnProperty = Object.hasOwnProperty,
    setPrototypeOf = Object.setPrototypeOf,
    isFrozen = Object.isFrozen,
    getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze,
    seal = Object.seal,
    create = Object.create; // eslint-disable-line import/no-mutable-exports

var _ref = typeof Reflect !== 'undefined' && Reflect,
    apply = _ref.apply,
    construct = _ref.construct;

if (!apply) {
  apply = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

if (!freeze) {
  freeze = function freeze(x) {
    return x;
  };
}

if (!seal) {
  seal = function seal(x) {
    return x;
  };
}

if (!construct) {
  construct = function construct(Func, args) {
    return _construct(Func, _toConsumableArray(args));
  };
}

var arrayForEach = unapply(Array.prototype.forEach);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function (thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return construct(func, args);
  };
}
/* Add properties to a lookup table */

function addToSet(set, array) {
  if (setPrototypeOf) {
    // Make 'in' and truthy checks like Boolean(set.constructor)
    // independent of any properties defined on Object.prototype.
    // Prevent prototype setters from intercepting set as a this value.
    setPrototypeOf(set, null);
  }

  var l = array.length;

  while (l--) {
    var element = array[l];

    if (typeof element === 'string') {
      var lcElement = stringToLowerCase(element);

      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }

        element = lcElement;
      }
    }

    set[element] = true;
  }

  return set;
}
/* Shallow clone an object */

function clone(object) {
  var newObject = create(null);
  var property;

  for (property in object) {
    if (apply(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }

  return newObject;
}
/* IE10 doesn't support __lookupGetter__ so lets'
 * simulate it. It also automatically checks
 * if the prop is function or getter and behaves
 * accordingly. */

function lookupGetter(object, prop) {
  while (object !== null) {
    var desc = getOwnPropertyDescriptor(object, prop);

    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }

      if (typeof desc.value === 'function') {
        return unapply(desc.value);
      }
    }

    object = getPrototypeOf(object);
  }

  function fallbackValue(element) {
    console.warn('fallback value for', element);
    return null;
  }

  return fallbackValue;
}

var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.

var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.

var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
var text = freeze(['#text']);

var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};
/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
 * @param {Document} document The document object (to determine policy name suffix)
 * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
 * are not supported).
 */


var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
  if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
    return null;
  } // Allow the callers to control the unique policy name
  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
  // Policy creation with duplicate names throws in Trusted Types.


  var suffix = null;
  var ATTR_NAME = 'data-tt-policy-suffix';

  if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document.currentScript.getAttribute(ATTR_NAME);
  }

  var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html) {
        return html;
      }
    });
  } catch (_) {
    // Policy creation failed (most likely another DOMPurify script has
    // already run). Skip creating the policy, as this will only cause errors
    // if TT are enforced.
    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
    return null;
  }
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };
  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */


  DOMPurify.version = '2.3.8';
  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */

  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;
    return DOMPurify;
  }

  var originalDocument = window.document;
  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      Element = window.Element,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      HTMLFormElement = window.HTMLFormElement,
      DOMParser = window.DOMParser,
      trustedTypes = window.trustedTypes;
  var ElementPrototype = Element.prototype;
  var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
  var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
  var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
  var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');

    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

  var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      createDocumentFragment = _document.createDocumentFragment,
      getElementsByTagName = _document.getElementsByTagName;
  var importNode = originalDocument.importNode;
  var documentMode = {};

  try {
    documentMode = clone(document).documentMode ? document.documentMode : {};
  } catch (_) {}

  var hooks = {};
  /**
   * Expose whether this browser supports running the full DOMPurify.
   */

  DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;
  var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
      ERB_EXPR$1 = ERB_EXPR,
      DATA_ATTR$1 = DATA_ATTR,
      ARIA_ATTR$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */

  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
  /* Allowed attribute names */

  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
  /*
   * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
   * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
   * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
   * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
   */

  var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

  var FORBID_TAGS = null;
  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

  var FORBID_ATTR = null;
  /* Decide if ARIA attributes are okay */

  var ALLOW_ARIA_ATTR = true;
  /* Decide if custom data attributes are okay */

  var ALLOW_DATA_ATTR = true;
  /* Decide if unknown protocols are okay */

  var ALLOW_UNKNOWN_PROTOCOLS = false;
  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */

  var SAFE_FOR_TEMPLATES = false;
  /* Decide if document with <html>... should be returned */

  var WHOLE_DOCUMENT = false;
  /* Track whether config is already set on this instance of DOMPurify. */

  var SET_CONFIG = false;
  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */

  var FORCE_BODY = false;
  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */

  var RETURN_DOM = false;
  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */

  var RETURN_DOM_FRAGMENT = false;
  /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */

  var RETURN_TRUSTED_TYPE = false;
  /* Output should be free from DOM clobbering attacks? */

  var SANITIZE_DOM = true;
  /* Keep element content when removing element? */

  var KEEP_CONTENT = true;
  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */

  var IN_PLACE = false;
  /* Allow usage of profiles like html, svg and mathMl */

  var USE_PROFILES = {};
  /* Tags to ignore content of when KEEP_CONTENT is true */

  var FORBID_CONTENTS = null;
  var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
  /* Tags that are safe for data: URIs */

  var DATA_URI_TAGS = null;
  var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
  /* Attributes safe for values like "javascript:" */

  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
  var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
  /* Document namespace */

  var NAMESPACE = HTML_NAMESPACE;
  var IS_EMPTY_INPUT = false;
  /* Parsing of strict XHTML documents */

  var PARSER_MEDIA_TYPE;
  var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
  var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
  var transformCaseFunc;
  /* Keep a reference to config to pass to hooks */

  var CONFIG = null;
  /* Ideally, do not touch anything below this line */

  /* ______________________________________________ */

  var formElement = document.createElement('form');

  var isRegexOrFunction = function isRegexOrFunction(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */
  // eslint-disable-next-line complexity


  var _parseConfig = function _parseConfig(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    /* Shield configuration object from tampering */


    if (!cfg || _typeof(cfg) !== 'object') {
      cfg = {};
    }
    /* Shield configuration object from prototype pollution */


    cfg = clone(cfg);
    /* Set configuration parameters */

    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

    RETURN_DOM = cfg.RETURN_DOM || false; // Default false

    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

    FORCE_BODY = cfg.FORCE_BODY || false; // Default false

    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

    IN_PLACE = cfg.IN_PLACE || false; // Default false

    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }

    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }

    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }

    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

    transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? function (x) {
      return x;
    } : stringToLowerCase;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    /* Parse profile info */


    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
      ALLOWED_ATTR = [];

      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }

      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    /* Merge configuration parameters */


    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }

      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }

    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }

      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }

    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }

      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
    }
    /* Add #text in case KEEP_CONTENT is set to true */


    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }
    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }
    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
      delete FORBID_TAGS.tbody;
    } // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.


    if (freeze) {
      freeze(cfg);
    }

    CONFIG = cfg;
  };

  var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
  var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
  // namespace. We need to specify them explicitly
  // so that they don't get erroneously deleted from
  // HTML namespace.

  var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
  /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */

  var ALL_SVG_TAGS = addToSet({}, svg$1);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);
  var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
  /**
   *
   *
   * @param  {Element} element a DOM element whose namespace is being checked
   * @returns {boolean} Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */

  var _checkValidNamespace = function _checkValidNamespace(element) {
    var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
    // can be null. We just simulate parent in this case.

    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: HTML_NAMESPACE,
        tagName: 'template'
      };
    }

    var tagName = stringToLowerCase(element.tagName);
    var parentTagName = stringToLowerCase(parent.tagName);

    if (element.namespaceURI === SVG_NAMESPACE) {
      // The only way to switch from HTML namespace to SVG
      // is via <svg>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'svg';
      } // The only way to switch from MathML to SVG is via
      // svg if parent is either <annotation-xml> or MathML
      // text integration points.


      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      } // We only allow elements that are defined in SVG
      // spec. All others are disallowed in SVG namespace.


      return Boolean(ALL_SVG_TAGS[tagName]);
    }

    if (element.namespaceURI === MATHML_NAMESPACE) {
      // The only way to switch from HTML namespace to MathML
      // is via <math>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'math';
      } // The only way to switch from SVG to MathML is via
      // <math> and HTML integration points


      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
      } // We only allow elements that are defined in MathML
      // spec. All others are disallowed in MathML namespace.


      return Boolean(ALL_MATHML_TAGS[tagName]);
    }

    if (element.namespaceURI === HTML_NAMESPACE) {
      // The only way to switch from SVG to HTML is via
      // HTML integration points, and from MathML to HTML
      // is via MathML text integration points
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }

      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      } // We disallow tags that are specific for MathML
      // or SVG and should never appear in HTML namespace


      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    } // The code should never reach this place (this means
    // that the element somehow got namespace that is not
    // HTML, SVG or MathML). Return false just in case.


    return false;
  };
  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */


  var _forceRemove = function _forceRemove(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });

    try {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      node.parentNode.removeChild(node);
    } catch (_) {
      try {
        node.outerHTML = emptyHTML;
      } catch (_) {
        node.remove();
      }
    }
  };
  /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */


  var _removeAttribute = function _removeAttribute(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }

    node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

    if (name === 'is' && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {}
      } else {
        try {
          node.setAttribute(name, '');
        } catch (_) {}
      }
    }
  };
  /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */


  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc;
    var leadingWhitespace;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      var matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }

    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml') {
      // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
    }

    var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */

    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {}
    }
    /* Use createHTMLDocument in case DOMParser is not available */


    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, 'template', null);

      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
      } catch (_) {// Syntax error if dirtyPayload is invalid xml
      }
    }

    var body = doc.body || doc.documentElement;

    if (dirty && leadingWhitespace) {
      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    /* Work on whole document or just its body */


    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    }

    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  /**
   * _createIterator
   *
   * @param  {Document} root document/fragment to create iterator for
   * @return {Iterator} iterator instance
   */


  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
  };
  /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */


  var _isClobbered = function _isClobbered(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function');
  };
  /**
   * _isNode
   *
   * @param  {Node} obj object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */


  var _isNode = function _isNode(object) {
    return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
  };
  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */


  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    arrayForEach(hooks[entryPoint], function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */


  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content;
    /* Execute a hook if present */

    _executeHook('beforeSanitizeElements', currentNode, null);
    /* Check if element is clobbered or can clobber */


    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Check if tagname contains Unicode */


    if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Now let's check the element's type and name */


    var tagName = transformCaseFunc(currentNode.nodeName);
    /* Execute a hook if present */

    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });
    /* Detect mXSS attempts abusing namespace confusion */


    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Mitigate a problem with templates inside select */


    if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Remove element if anything forbids its presence */


    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Check if we have a custom element to handle */
      if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
      }
      /* Keep content except for bad-listed elements */


      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        var parentNode = getParentNode(currentNode) || currentNode.parentNode;
        var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

        if (childNodes && parentNode) {
          var childCount = childNodes.length;

          for (var i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }

      _forceRemove(currentNode);

      return true;
    }
    /* Check whether element has a valid namespace */


    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);

      return true;
    }

    if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Sanitize element content to be template-safe */


    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
      content = stringReplace(content, ERB_EXPR$1, ' ');

      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    /* Execute a hook if present */


    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };
  /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */
  // eslint-disable-next-line complexity


  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }
    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */


    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
      // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
      // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
      _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
      // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
      lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
        return false;
      }
      /* Check value is safe. First, is attr inert? If so, is safe */

    } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (!value) ; else {
      return false;
    }

    return true;
  };
  /**
   * _basicCustomElementCheck
   * checks if at least one dash is included in tagName, and it's not the first char
   * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
   * @param {string} tagName name of the tag of the node to sanitize
   */


  var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
    return tagName.indexOf('-') > 0;
  };
  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} currentNode to sanitize
   */


  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr;
    var value;
    var lcName;
    var l;
    /* Execute a hook if present */

    _executeHook('beforeSanitizeAttributes', currentNode, null);

    var attributes = currentNode.attributes;
    /* Check if we have attributes; if not we might have a text node */

    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;
    /* Go backwards over all attributes; safely remove bad ones */

    while (l--) {
      attr = attributes[l];
      var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;
      value = name === 'value' ? attr.value : stringTrim(attr.value);
      lcName = transformCaseFunc(name);
      /* Execute a hook if present */

      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

      value = hookEvent.attrValue;
      /* Did the hooks approve of the attribute? */

      if (hookEvent.forceKeepAttr) {
        continue;
      }
      /* Remove attribute */


      _removeAttribute(name, currentNode);
      /* Did the hooks approve of the attribute? */


      if (!hookEvent.keepAttr) {
        continue;
      }
      /* Work around a security issue in jQuery 3.0 */


      if (regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);

        continue;
      }
      /* Sanitize attribute content to be template-safe */


      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
        value = stringReplace(value, ERB_EXPR$1, ' ');
      }
      /* Is `value` valid for this attribute? */


      var lcTag = transformCaseFunc(currentNode.nodeName);

      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      /* Handle invalid data-* attribute set by try-catching it */


      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
          currentNode.setAttribute(name, value);
        }

        arrayPop(DOMPurify.removed);
      } catch (_) {}
    }
    /* Execute a hook if present */


    _executeHook('afterSanitizeAttributes', currentNode, null);
  };
  /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */


  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode;

    var shadowIterator = _createIterator(fragment);
    /* Execute a hook if present */


    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);
      /* Sanitize tags and elements */


      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      /* Deep shadow DOM detected */


      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }
      /* Check attributes, sanitize if necessary */


      _sanitizeAttributes(shadowNode);
    }
    /* Execute a hook if present */


    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };
  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity


  DOMPurify.sanitize = function (dirty, cfg) {
    var body;
    var importedNode;
    var currentNode;
    var oldNode;
    var returnNode;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */

    IS_EMPTY_INPUT = !dirty;

    if (IS_EMPTY_INPUT) {
      dirty = '<!-->';
    }
    /* Stringify, in case dirty is an object */


    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw typeErrorCreate('toString is not a function');
      } else {
        dirty = dirty.toString();

        if (typeof dirty !== 'string') {
          throw typeErrorCreate('dirty is not a string, aborting');
        }
      }
    }
    /* Check we can run. Otherwise fall back or ignore */


    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        }

        if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }

      return dirty;
    }
    /* Assign config vars */


    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    /* Clean up removed elements */


    DOMPurify.removed = [];
    /* Check if dirty is correctly typed for IN_PLACE */

    if (typeof dirty === 'string') {
      IN_PLACE = false;
    }

    if (IN_PLACE) {
      /* Do some early pre-sanitization to avoid unsafe root nodes */
      if (dirty.nodeName) {
        var tagName = transformCaseFunc(dirty.nodeName);

        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
        }
      }
    } else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!---->');
      importedNode = body.ownerDocument.importNode(dirty, true);

      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else if (importedNode.nodeName === 'HTML') {
        body = importedNode;
      } else {
        // eslint-disable-next-line unicorn/prefer-dom-node-append
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf('<') === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      /* Initialize the document to work on */


      body = _initDocument(dirty);
      /* Check we have a DOM node from the data */

      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
      }
    }
    /* Remove first element node (ours) if FORCE_BODY is set */


    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    /* Get node iterator */


    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
    /* Now start iterating over the created document */


    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }
      /* Sanitize tags and elements */


      if (_sanitizeElements(currentNode)) {
        continue;
      }
      /* Shadow DOM detected, sanitize it */


      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      /* Check attributes, sanitize if necessary */


      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    oldNode = null;
    /* If we sanitized `dirty` in-place, return it. */

    if (IN_PLACE) {
      return dirty;
    }
    /* Return sanitized string or DOM */


    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (ALLOWED_ATTR.shadowroot) {
        /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    /* Serialize doctype if allowed */

    if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
    }
    /* Sanitize final string template-safe */


    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
    }

    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */


  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);

    SET_CONFIG = true;
  };
  /**
   * Public method to remove the configuration
   * clearConfig
   *
   */


  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };
  /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {string} tag Tag name of containing element.
   * @param  {string} attr Attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */


  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }

    var lcTag = transformCaseFunc(tag);
    var lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */


  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }

    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   * @return {Function} removed(popped) hook
   */


  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */


  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   */


  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

var Config = {
    environment: 'staging',
    baseurl: 'https://rofusdemo.spillemyndigheden.dk',
    baseproject: 'nemlogin',
    texturlDa: 'https://www.spillemyndigheden.dk/json/rofus/cms?_format=json',
    texturlKl: 'https://www.spillemyndigheden.dk/kl/json/rofus/cms?_format=json',
};

let SpmRofus = class SpmRofus extends s {
    constructor() {
        super();
        this.dateFormatter = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        this.dateTimeFormatter = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
        };
        this.timeFormatter = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
        };
        this.init();
    }
    init() {
        this.state = undefined;
        this.texts = {};
        this.authenticated = undefined;
    }
    firstUpdated() {
        var _a;
        this.language = (_a = this.language) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        switch (this.language) {
            case 'da':
                this.languageCode = 'da-DK';
                break;
            case 'kl':
                this.languageCode = 'da-DK';
                break;
            default:
                this.language = 'da';
                this.languageCode = 'da-DK';
                break;
        }
        this.loadTexts();
        this.getAuthenticated();
    }
    getTestUser(state) {
        let final = false;
        let exclusiontime = '24H';
        if (this.state === 'CONFIRM_PERM' ||
            this.state === 'CONFIRMATION_PERM' ||
            this.state === 'REGISTERED_PERM') {
            final = true;
            exclusiontime = '';
        }
        const user = {
            cpr: '1212121111',
            firstname: 'Benny',
            lastname: 'Bingo',
            fullname: 'Benny Bingo',
            registered: false,
            exclusionfinal: final,
            exclusiontimeout: exclusiontime,
            exclusiondate: new Date(),
            reopendate: new Date(),
        };
        this.authenticated = user;
        this.next(state);
        console.log(`${this.state} == ${JSON.stringify(this.authenticated)}`);
    }
    createRenderRoot() {
        return this;
    }
    async getAuthenticated() {
        await fetch(`${Config.baseurl}/${Config.baseproject}/api/rofus/user`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            else {
                return response.json();
            }
        })
            .then((response) => {
            this.authenticated = response;
            // typescript not converting - WTF ???
            if (typeof this.authenticated.exclusiondate === 'string') {
                this.authenticated.exclusiondate = new Date(this.authenticated.exclusiondate);
            }
            if (typeof this.authenticated.reopendate === 'string') {
                this.authenticated.reopendate = new Date(this.authenticated.reopendate);
            }
        })
            .finally(() => {
            if (this.authenticated !== undefined) {
                if (this.authenticated.registered) {
                    if (this.authenticated.exclusionfinal) {
                        this.state = 'REGISTERED_PERM';
                    }
                    else {
                        this.state = 'REGISTERED_TEMP';
                    }
                }
                else {
                    this.state = 'UNREGISTERED';
                }
            }
            console.log(this.authenticated);
            this.requestUpdate();
        })
            .catch(() => {
            console.error('User not authenticated - login required');
        });
    }
    logout() {
        window.location.href = `${Config.baseurl}/${Config.baseproject}/saml/logout`;
    }
    async deleteUser() {
        await fetch(`${Config.baseurl}/${Config.baseproject}/api/rofus/user/delete`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(() => {
            this.getAuthenticated();
        });
    }
    async register() {
        await fetch(`${Config.baseurl}/${Config.baseproject}/api/rofus/user/register`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: `${JSON.stringify(this.authenticated)}`,
        });
    }
    async loadTexts() {
        let url;
        switch (this.language) {
            case 'da':
                url = Config.texturlDa;
                break;
            case 'kl':
                url = Config.texturlKl;
                break;
            default:
                url = Config.texturlDa;
        }
        try {
            await fetch(`${url}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then((res) => {
                this.texts = res;
            })
                .finally(() => this.requestUpdate());
        }
        catch (error) {
            console.error(`unable to load text files: ${error}`);
        }
    }
    getCurrentTexts() {
        switch (this.state) {
            case undefined:
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'login')[0];
            case 'UNREGISTERED':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'register')[0];
            case 'UNREGISTERED_PERM':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'Register perm')[0];
            case 'CONFIRM_TEMP':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'confirm temp')[0];
            case 'CONFIRM_PERM':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'confirm perm')[0];
            case 'CONFIRMATION_TEMP':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'confirmation temp')[0];
            case 'CONFIRMATION_PERM':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'confirmation perm')[0];
            case 'REGISTERED_TEMP':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'already_registered temp')[0];
            case 'REGISTERED_PERM':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'already_registered perm')[0];
            case 'REQUESTDELETE':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'request_delete')[0];
            case 'REQUESTDELETECONFIRM':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'request_delete_confirm')[0];
            case 'DELETE':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'Delete')[0];
            case 'DELETECONFIRM':
                return Object.values(this.texts).filter(text => text.field_rofus_cms_machine_name === 'delete_confirm')[0];
            default:
                return {};
        }
    }
    getText(value) {
        const texts = this.getCurrentTexts();
        let textEntry;
        if (texts !== undefined) {
            textEntry = Object.entries(texts).filter(entry => entry[0] === value);
        }
        if (textEntry === undefined || textEntry.length === 0) {
            return value;
        }
        return purify.sanitize(this.replaceTextVariables(textEntry[0][1]).toString());
    }
    replaceTextVariables(text) {
        var _a, _b;
        if (typeof text === 'string') {
            if (text.includes('{name}') || text.includes('{cpr}')) {
                text = text
                    .replaceAll('{name}', (_a = this.authenticated) === null || _a === void 0 ? void 0 : _a.fullname)
                    .replaceAll('{cpr}', (_b = this.authenticated) === null || _b === void 0 ? void 0 : _b.cpr);
            }
            if (text.includes('{reopen}')) {
                text = text.replaceAll('{reopen}', new Intl.DateTimeFormat(this.languageCode, this.dateFormatter).format(this.authenticated.reopendate));
            }
            if (text.includes('{registered_from_date}')) {
                text = text.replace('{registered_from_date}', new Intl.DateTimeFormat(this.languageCode, this.dateFormatter).format(this.authenticated.exclusiondate));
            }
            if (text.includes('{registered_from_time}')) {
                text = text.replace('{registered_from_time}', new Intl.DateTimeFormat(this.languageCode, this.timeFormatter).format(this.authenticated.exclusiondate));
            }
            if (text.includes('{expiration_date}')) {
                text = text.replaceAll('{expiration_date}', new Intl.DateTimeFormat(this.languageCode, this.dateFormatter).format(this.authenticated.reopendate));
            }
            if (text.includes('{expiration_time}')) {
                text = text.replaceAll('{expiration_time}', new Intl.DateTimeFormat(this.languageCode, this.timeFormatter).format(this.authenticated.reopendate));
            }
        }
        return text;
    }
    next(state) {
        var _a;
        this.state = state;
        if (this.state === 'CONFIRM_TEMP') {
            this.authenticated.exclusiondate = new Date();
            this.authenticated.reopendate = new Date();
            // months selected in dropdown
            switch ((_a = this.authenticated) === null || _a === void 0 ? void 0 : _a.exclusiontimeout) {
                case '24H':
                    this.authenticated.reopendate.setDate(this.authenticated.exclusiondate.getDate() + 1);
                    break;
                case '1M':
                    this.authenticated.reopendate.setMonth(this.authenticated.exclusiondate.getMonth() + 1);
                    break;
                case '3M':
                    this.authenticated.reopendate.setMonth(this.authenticated.exclusiondate.getMonth() + 3);
                    break;
                case '6M':
                    this.authenticated.reopendate.setMonth(this.authenticated.exclusiondate.getMonth() + 6);
                    break;
            }
        }
        if (this.state === 'CONFIRM_PERM') {
            this.authenticated.exclusiondate = new Date();
            this.authenticated.reopendate = new Date();
            // 1 year 7 days
            this.authenticated.reopendate.setFullYear(this.authenticated.reopendate.getFullYear() + 1);
            this.authenticated.reopendate.setDate(this.authenticated.exclusiondate.getDate() + 7);
        }
        if (this.state === 'CONFIRMATION_TEMP') {
            this.register();
        }
        if (this.state === 'CONFIRMATION_PERM') {
            this.register();
        }
        if (this.state === 'UNREGISTERED' && this.authenticated) {
            this.authenticated.exclusionfinal = false;
        }
        this.requestUpdate();
    }
    previous(state) {
        this.state = state;
        if (this.state === 'UNREGISTERED') {
            this.authenticated.exclusionfinal = false;
        }
        this.requestUpdate();
    }
    render() {
        const machineName = this.getText('field_rofus_cms_machine_name').replace(/\s+/g, '-').toLowerCase();
        return $ `
      <div id="${machineName}" class="page-content page-content--name--${machineName}">
        ${this.showPage()}
    </div>
    `;
    }
    showPage() {
        switch (this.state) {
            case undefined:
                return this.showAnonymous();
            case 'UNREGISTERED':
                return this.showAuthenticatedUnregistered();
            case 'UNREGISTERED_PERM':
                return this.showAuthenticatedRenewPerm();
            case 'CONFIRM_TEMP':
                return this.showAuthenticatedConfirmTemp();
            case 'CONFIRM_PERM':
                return this.showAuthenticatedConfirmPerm();
            case 'CONFIRMATION_TEMP':
                return this.showAuthenticatedConfirmation();
            case 'CONFIRMATION_PERM':
                return this.showAuthenticatedConfirmation();
            case 'REGISTERED_TEMP':
                return this.showAuthenticatedRegisteredTemp();
            case 'REGISTERED_PERM':
                return this.showAuthenticatedRegisteredPerm();
            case 'REQUESTDELETE':
                return this.showAuthenticatedRequestDelete();
            case 'REQUESTDELETECONFIRM':
                return this.showAuthenticatedRequestDeleteConfirm();
            case 'DELETE':
                return this.showAuthenticatedDelete();
            case 'DELETECONFIRM':
                return this.showAuthenticatedDeleteConfirm();
            default:
                return $ `internal error`;
        }
    }
    showTestHeader() {
        return $ `
      <div style="border: 1px solid coral !important; border: 2px;">
        <button @click="${() => this.getTestUser(undefined)}">Login</button>
        <button @click="${() => this.getTestUser('UNREGISTERED')}">
          Register
        </button>
        <button @click="${() => this.getTestUser('UNREGISTERED_PERM')}">
          Register perm
        </button>
        <button @click="${() => this.getTestUser('CONFIRM_TEMP')}">
          Confirm temp
        </button>
        <button @click="${() => this.getTestUser('CONFIRM_PERM')}">
          Confirm perm
        </button>
        <button @click="${() => this.getTestUser('CONFIRMATION_TEMP')}">
          Confirmation temp
        </button>
        <button @click="${() => this.getTestUser('CONFIRMATION_PERM')}">
          Confirmation perm
        </button>
        <button @click="${() => this.getTestUser('REGISTERED_TEMP')}">
          Already_registered temp
        </button>
        <button @click="${() => this.getTestUser('REGISTERED_PERM')}">
          Already_registered perm
        </button>
        <button @click="${() => this.getTestUser('REQUESTDELETE')}">
          Request_delete
        </button>
        <button @click="${() => this.getTestUser('REQUESTDELETECONFIRM')}">
          Request_delete_confirm
        </button>
        <button @click="${() => this.getTestUser('DELETE')}">Delete</button>
        <button @click="${() => this.getTestUser('DELETECONFIRM')}">
          Delete_confirm
        </button>
      </div>
    `;
    }
    showAnonymous() {
      return $ `
        ${this.showTestHeader()}
        <div class="title">
          <div class="title__category">
            ${o(this.getText('field_rofus_cms_secondary_title'))}
          </div>
          <h1 class"title__heading">
            ${o(this.getText('title'))}
          </h1>
        </div>
        <a class="button page-content__button" href="https://rofusdemo.spillemyndigheden.dk/nemlogin/low/">
          ${this.getText('field_rofus_cms_button_logout')}
        </a>
        <div class="formatted-content">
          ${o(this.getText('body'))}
        </div>
    `;
    }
    showAuthenticatedUnregistered() {
        return $ `
      <div class="header-content">
        <div class="header-content__column">
          ${o(this.getText('field_rofus_cms_personal_informa'))}
        </div>
        <button class="button button--sm button--subtle header-content__column" @click="${() => this.logout()}">
          ${o(this.getText('field_rofus_cms_button_logout'))}
        </button>
      </div>

      <p>${o(this.getText('body'))}</p>

      <div class="columns columns--amount--2 columns--gap--md">
        <div class="action-box">
          <div class="action-box__content">
            <h3>${o(this.getText('field_rofus_cms_secondary_title'))}</h3>
            <p>${o(this.getText('field_rofus_cms_checkbox_title'))}</p>
            <p class="paragraph--sm">
              <input
                type="checkbox"
                @change=${(e) => {
                  this.authenticated.exclusionfinal = e.target.checked;
              }}
                .checked=${this.authenticated.exclusionfinal}
              />
              <label for="final">
                ${o(this.getText('field_rofus_cms_checkbox_descrip'))}
              </label>
            </p>
            <p class="paragraph--sm">
              ${o(this.getText('field_rofus_cms_button_desc'))}
            <p>
          </div>
          <div class="action-box__actions">
            <button
              class="button button--disabled"
              @click="${() => {
                  var _a;
                  if ((_a = this.authenticated) === null || _a === void 0 ? void 0 : _a.exclusionfinal) {
                      this.authenticated.exclusiontimeout = '';
                      this.next('CONFIRM_PERM');
                  }
              }}"
            >
              ${o(this.getText('field_rofus_cms_button_text'))}
            </button>
          </div>
        </div>

        <div class="action-box">
          <div class="action-box__content">
            <h3>${o(this.getText('field_rofus_cms_secondary_title_2'))}</h3>
            <label for="timeout">
              ${o(this.getText('field_rofus_cms_options_label'))}
            </label>
            <select
              class="dropdown dropdown--width--full"
              name="timeout"
              id="timeout"
              @change=${(e) => {
                  this.authenticated.exclusiontimeout = e.target.value;
              }}
            >
              <option class="dropdown__option" value="" selected disabled hidden>
                ${o(this.getText('field_rofus_cms_options_default'))}
              </option>
              <option class="dropdown__option" value="24H">
                ${o(this.getText('field_rofus_cms_options_24h'))}
              </option>
              <option class="dropdown__option" value="1M">
                ${o(this.getText('field_rofus_cms_options_1m'))}
              </option>
              <option class="dropdown__option" value="3M">
                ${o(this.getText('field_rofus_cms_options_3m'))}
              </option>
              <option class="dropdown__option" value="6M">
                ${o(this.getText('field_rofus_cms_options_6m'))}
              </option>
            </select>
            <p class="paragraph--sm">
              ${o(this.getText('text_2'))}
            </p>
            <p class="paragraph--sm">
              ${o(this.getText('field_rofus_cms_button_desc'))}
            </p>
          </div>
          <div class="action-box__actions">
            <button
              class="button button--disabled"
              @click="${() => {
                  var _a;
                  if (((_a = this.authenticated) === null || _a === void 0 ? void 0 : _a.exclusiontimeout) !== '') {
                      this.authenticated.exclusionfinal = false;
                      this.next('CONFIRM_TEMP');
                  }
              }}"
            >
              ${o(this.getText('field_rofus_cms_button_text_2'))}
            </button>
          </div>
        </div>
      </div>
    `;
    }
    showAuthenticatedRenewPerm() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <h3>${o(this.getText('field_rofus_cms_secondary_title'))}</h3>
      <p>${o(this.getText('field_rofus_cms_checkbox_title'))}</p>
      <p>
        <input
          type="checkbox"
          @change=${(e) => {
            this.authenticated.exclusionfinal = e.target.checked;
        }}
          .checked=${this.authenticated.exclusionfinal}
        />
        <label for="final">
          ${o(this.getText('field_rofus_cms_checkbox_descrip'))}
        </label>
      </p>
      <button
        @click="${() => {
            var _a;
            if ((_a = this.authenticated) === null || _a === void 0 ? void 0 : _a.exclusionfinal) {
                this.next('CONFIRM_PERM');
            }
        }}"
      >
        ${o(this.getText('field_rofus_cms_button_text'))}
      </button>
      <br />
      <br />
      ${o(this.getText('field_rofus_cms_button_desc'))}
      <br />
      <br />
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
      <button @click="${() => this.previous('REGISTERED_PERM')}">
        ${o(this.getText('field_rofus_cms_button_previous'))}
      </button>
    `;
    }
    showAuthenticatedConfirmTemp() {
        return $ `
      <div class="header-content">
        <div class="header-content__column">
          ${o(this.getText('field_rofus_cms_personal_informa'))}
        </div>
        <button class="button button--sm button--subtle header-content__column" @click="${() => this.logout()}">
          ${o(this.getText('field_rofus_cms_button_logout'))}
        </button>
      </div>
      <div class="formatted-content">
        ${o(this.getText('body'))}
      </div>
      <button class="button page-content__button" @click="${() => this.next('CONFIRMATION_TEMP')}">
        ${o(this.getText('field_rofus_cms_button_next'))}
      </button>
      <div class="action-box">
        <div class="action-box__content">
          <h2>${o(this.getText('field_rofus_cms_secondary_title'))}</h2>
          <p>
            <input type="checkbox" name="commercials" checked disabled />
            <label for="commercials">
              ${o(this.getText('field_rofus_cms_checkbox_descrip'))}
            </label>
          </p>
        </div>
      </div>
      <button class="button button--subtle button--sm page-content__button" @click="${() => this.previous('UNREGISTERED')}">
        ${o(this.getText('field_rofus_cms_button_previous'))}
      </button>
    `;
    }
    showAuthenticatedConfirmPerm() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <h3>${o(this.getText('field_rofus_cms_secondary_title'))}</h3>
      <p>
        <input type="checkbox" name="commercials" checked disabled />
        <label for="commercials">
          ${o(this.getText('field_rofus_cms_checkbox_descrip'))}
        </label>
      </p>
      <br />
      <br />
      <button @click="${() => this.previous('UNREGISTERED')}">
        ${o(this.getText('field_rofus_cms_button_previous'))}
      </button>
      <button @click="${() => this.next('CONFIRMATION_PERM')}">
        ${o(this.getText('field_rofus_cms_button_next'))}
      </button>
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
    `;
    }
    showAuthenticatedConfirmation() {
        return $ `
      ${this.showTestHeader()}
      <h3>${o(this.getText('field_rofus_cms_secondary_title'))}</h3>
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <br />
      <br />
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
    `;
    }
    showAuthenticatedRegisteredTemp() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <h3>${o(this.getText('field_rofus_cms_secondary_title'))}</h3>
      <p>
        <input type="checkbox" name="commercials" checked disabled />
        <label for="commercials">
          ${o(this.getText('field_rofus_cms_checkbox_descrip'))}
        </label>
      </p>
      <br />
      <br />
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
      <button @click="${() => this.next('UNREGISTERED')}">
        ${o(this.getText('field_rofus_cms_button_text'))}
      </button>
    `;
    }
    showAuthenticatedRegisteredPerm() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <h3>${o(this.getText('field_rofus_cms_secondary_title'))}</h3>
      <p>
        <input type="checkbox" name="commercials" checked disabled />
        <label for="commercials">
          ${o(this.getText('field_rofus_cms_checkbox_descrip'))}
        </label>
      </p>
      <br />
      <br />
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
      <button @click="${() => this.next('UNREGISTERED_PERM')}">
        ${o(this.getText('field_rofus_cms_button_text'))}
      </button>
      <button @click="${() => this.next('REQUESTDELETE')}">
        ${o(this.getText('field_rofus_cms_button_previous'))}
      </button>
    `;
    }
    showAuthenticatedRequestDelete() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <button @click="${() => this.next('REQUESTDELETECONFIRM')}">
        ${o(this.getText('field_rofus_cms_button_text'))}
      </button>
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
    `;
    }
    showAuthenticatedRequestDeleteConfirm() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
    `;
    }
    showAuthenticatedDelete() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <button @click="${() => this.next('DELETECONFIRM')}">
        ${o(this.getText('field_rofus_cms_button_text'))}
      </button>
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
      <button @click="${() => this.next('UNREGISTERED_PERM')}">
        ${o(this.getText('field_rofus_cms_button_previous'))}
      </button>
    `;
    }
    showAuthenticatedDeleteConfirm() {
        return $ `
      ${this.showTestHeader()}
      <p>${o(this.getText('field_rofus_cms_personal_informa'))}</p>
      <p>${o(this.getText('body'))}</p>
      <button @click="${() => this.next('UNREGISTERED')}">
        ${o(this.getText('field_rofus_cms_button_previous'))}
      </button>
      <button @click="${() => this.logout()}">
        ${o(this.getText('field_rofus_cms_button_logout'))}
      </button>
    `;
    }
};
__decorate([
    e$2({ type: String })
], SpmRofus.prototype, "language", void 0);
SpmRofus = __decorate([
    n$1('spm-rofus')
], SpmRofus);

export { SpmRofus };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BtLXJvZnVzLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9jc3MtdGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9yZWFjdGl2ZS1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9kaXN0L3B1cmlmeS5lcy5qcyIsInNyYy9jb25maWcvY29uZmlnLXN0YWdpbmcuanMiLCJzcmMvc3BtLXJvZnVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCB0PXdpbmRvdy5TaGFkb3dSb290JiYodm9pZCAwPT09d2luZG93LlNoYWR5Q1NTfHx3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSYmXCJhZG9wdGVkU3R5bGVTaGVldHNcImluIERvY3VtZW50LnByb3RvdHlwZSYmXCJyZXBsYWNlXCJpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxlPVN5bWJvbCgpLG49bmV3IE1hcDtjbGFzcyBze2NvbnN0cnVjdG9yKHQsbil7aWYodGhpcy5fJGNzc1Jlc3VsdCQ9ITAsbiE9PWUpdGhyb3cgRXJyb3IoXCJDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLlwiKTt0aGlzLmNzc1RleHQ9dH1nZXQgc3R5bGVTaGVldCgpe2xldCBlPW4uZ2V0KHRoaXMuY3NzVGV4dCk7cmV0dXJuIHQmJnZvaWQgMD09PWUmJihuLnNldCh0aGlzLmNzc1RleHQsZT1uZXcgQ1NTU3R5bGVTaGVldCksZS5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpKSxlfXRvU3RyaW5nKCl7cmV0dXJuIHRoaXMuY3NzVGV4dH19Y29uc3Qgbz10PT5uZXcgcyhcInN0cmluZ1wiPT10eXBlb2YgdD90OnQrXCJcIixlKSxyPSh0LC4uLm4pPT57Y29uc3Qgbz0xPT09dC5sZW5ndGg/dFswXTpuLnJlZHVjZSgoKGUsbixzKT0+ZSsodD0+e2lmKCEwPT09dC5fJGNzc1Jlc3VsdCQpcmV0dXJuIHQuY3NzVGV4dDtpZihcIm51bWJlclwiPT10eXBlb2YgdClyZXR1cm4gdDt0aHJvdyBFcnJvcihcIlZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBcIit0K1wiLiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuXCIpfSkobikrdFtzKzFdKSx0WzBdKTtyZXR1cm4gbmV3IHMobyxlKX0saT0oZSxuKT0+e3Q/ZS5hZG9wdGVkU3R5bGVTaGVldHM9bi5tYXAoKHQ9PnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0P3Q6dC5zdHlsZVNoZWV0KSk6bi5mb3JFYWNoKCh0PT57Y29uc3Qgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikscz13aW5kb3cubGl0Tm9uY2U7dm9pZCAwIT09cyYmbi5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLHMpLG4udGV4dENvbnRlbnQ9dC5jc3NUZXh0LGUuYXBwZW5kQ2hpbGQobil9KSl9LFM9dD90PT50OnQ9PnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0Pyh0PT57bGV0IGU9XCJcIjtmb3IoY29uc3QgbiBvZiB0LmNzc1J1bGVzKWUrPW4uY3NzVGV4dDtyZXR1cm4gbyhlKX0pKHQpOnQ7ZXhwb3J0e3MgYXMgQ1NTUmVzdWx0LGkgYXMgYWRvcHRTdHlsZXMsciBhcyBjc3MsUyBhcyBnZXRDb21wYXRpYmxlU3R5bGUsdCBhcyBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsbyBhcyB1bnNhZmVDU1N9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXBcbiIsImltcG9ydHtnZXRDb21wYXRpYmxlU3R5bGUgYXMgdCxhZG9wdFN0eWxlcyBhcyBpfWZyb21cIi4vY3NzLXRhZy5qc1wiO2V4cG9ydHtDU1NSZXN1bHQsYWRvcHRTdHlsZXMsY3NzLGdldENvbXBhdGlibGVTdHlsZSxzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsdW5zYWZlQ1NTfWZyb21cIi4vY3NzLXRhZy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIHM7Y29uc3QgZT13aW5kb3cudHJ1c3RlZFR5cGVzLHI9ZT9lLmVtcHR5U2NyaXB0OlwiXCIsaD13aW5kb3cucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0LG89e3RvQXR0cmlidXRlKHQsaSl7c3dpdGNoKGkpe2Nhc2UgQm9vbGVhbjp0PXQ/cjpudWxsO2JyZWFrO2Nhc2UgT2JqZWN0OmNhc2UgQXJyYXk6dD1udWxsPT10P3Q6SlNPTi5zdHJpbmdpZnkodCl9cmV0dXJuIHR9LGZyb21BdHRyaWJ1dGUodCxpKXtsZXQgcz10O3N3aXRjaChpKXtjYXNlIEJvb2xlYW46cz1udWxsIT09dDticmVhaztjYXNlIE51bWJlcjpzPW51bGw9PT10P251bGw6TnVtYmVyKHQpO2JyZWFrO2Nhc2UgT2JqZWN0OmNhc2UgQXJyYXk6dHJ5e3M9SlNPTi5wYXJzZSh0KX1jYXRjaCh0KXtzPW51bGx9fXJldHVybiBzfX0sbj0odCxpKT0+aSE9PXQmJihpPT1pfHx0PT10KSxsPXthdHRyaWJ1dGU6ITAsdHlwZTpTdHJpbmcsY29udmVydGVyOm8scmVmbGVjdDohMSxoYXNDaGFuZ2VkOm59O2NsYXNzIGEgZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fJEV0PW5ldyBNYXAsdGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITEsdGhpcy5oYXNVcGRhdGVkPSExLHRoaXMuXyRFaT1udWxsLHRoaXMubygpfXN0YXRpYyBhZGRJbml0aWFsaXplcih0KXt2YXIgaTtudWxsIT09KGk9dGhpcy5sKSYmdm9pZCAwIT09aXx8KHRoaXMubD1bXSksdGhpcy5sLnB1c2godCl9c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXt0aGlzLmZpbmFsaXplKCk7Y29uc3QgdD1bXTtyZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCgoaSxzKT0+e2NvbnN0IGU9dGhpcy5fJEVoKHMsaSk7dm9pZCAwIT09ZSYmKHRoaXMuXyRFdS5zZXQoZSxzKSx0LnB1c2goZSkpfSkpLHR9c3RhdGljIGNyZWF0ZVByb3BlcnR5KHQsaT1sKXtpZihpLnN0YXRlJiYoaS5hdHRyaWJ1dGU9ITEpLHRoaXMuZmluYWxpemUoKSx0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldCh0LGkpLCFpLm5vQWNjZXNzb3ImJiF0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSh0KSl7Y29uc3Qgcz1cInN5bWJvbFwiPT10eXBlb2YgdD9TeW1ib2woKTpcIl9fXCIrdCxlPXRoaXMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQscyxpKTt2b2lkIDAhPT1lJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsdCxlKX19c3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcih0LGkscyl7cmV0dXJue2dldCgpe3JldHVybiB0aGlzW2ldfSxzZXQoZSl7Y29uc3Qgcj10aGlzW3RdO3RoaXNbaV09ZSx0aGlzLnJlcXVlc3RVcGRhdGUodCxyLHMpfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH19c3RhdGljIGdldFByb3BlcnR5T3B0aW9ucyh0KXtyZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQodCl8fGx9c3RhdGljIGZpbmFsaXplKCl7aWYodGhpcy5oYXNPd25Qcm9wZXJ0eShcImZpbmFsaXplZFwiKSlyZXR1cm4hMTt0aGlzLmZpbmFsaXplZD0hMDtjb25zdCB0PU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtpZih0LmZpbmFsaXplKCksdGhpcy5lbGVtZW50UHJvcGVydGllcz1uZXcgTWFwKHQuZWxlbWVudFByb3BlcnRpZXMpLHRoaXMuXyRFdT1uZXcgTWFwLHRoaXMuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpKXtjb25zdCB0PXRoaXMucHJvcGVydGllcyxpPVsuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KSwuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpXTtmb3IoY29uc3QgcyBvZiBpKXRoaXMuY3JlYXRlUHJvcGVydHkocyx0W3NdKX1yZXR1cm4gdGhpcy5lbGVtZW50U3R5bGVzPXRoaXMuZmluYWxpemVTdHlsZXModGhpcy5zdHlsZXMpLCEwfXN0YXRpYyBmaW5hbGl6ZVN0eWxlcyhpKXtjb25zdCBzPVtdO2lmKEFycmF5LmlzQXJyYXkoaSkpe2NvbnN0IGU9bmV3IFNldChpLmZsYXQoMS8wKS5yZXZlcnNlKCkpO2Zvcihjb25zdCBpIG9mIGUpcy51bnNoaWZ0KHQoaSkpfWVsc2Ugdm9pZCAwIT09aSYmcy5wdXNoKHQoaSkpO3JldHVybiBzfXN0YXRpYyBfJEVoKHQsaSl7Y29uc3Qgcz1pLmF0dHJpYnV0ZTtyZXR1cm4hMT09PXM/dm9pZCAwOlwic3RyaW5nXCI9PXR5cGVvZiBzP3M6XCJzdHJpbmdcIj09dHlwZW9mIHQ/dC50b0xvd2VyQ2FzZSgpOnZvaWQgMH1vKCl7dmFyIHQ7dGhpcy5fJEVwPW5ldyBQcm9taXNlKCh0PT50aGlzLmVuYWJsZVVwZGF0aW5nPXQpKSx0aGlzLl8kQUw9bmV3IE1hcCx0aGlzLl8kRW0oKSx0aGlzLnJlcXVlc3RVcGRhdGUoKSxudWxsPT09KHQ9dGhpcy5jb25zdHJ1Y3Rvci5sKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT50KHRoaXMpKSl9YWRkQ29udHJvbGxlcih0KXt2YXIgaSxzOyhudWxsIT09KGk9dGhpcy5fJEVnKSYmdm9pZCAwIT09aT9pOnRoaXMuXyRFZz1bXSkucHVzaCh0KSx2b2lkIDAhPT10aGlzLnJlbmRlclJvb3QmJnRoaXMuaXNDb25uZWN0ZWQmJihudWxsPT09KHM9dC5ob3N0Q29ubmVjdGVkKXx8dm9pZCAwPT09c3x8cy5jYWxsKHQpKX1yZW1vdmVDb250cm9sbGVyKHQpe3ZhciBpO251bGw9PT0oaT10aGlzLl8kRWcpfHx2b2lkIDA9PT1pfHxpLnNwbGljZSh0aGlzLl8kRWcuaW5kZXhPZih0KT4+PjAsMSl9XyRFbSgpe3RoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoKHQsaSk9Pnt0aGlzLmhhc093blByb3BlcnR5KGkpJiYodGhpcy5fJEV0LnNldChpLHRoaXNbaV0pLGRlbGV0ZSB0aGlzW2ldKX0pKX1jcmVhdGVSZW5kZXJSb290KCl7dmFyIHQ7Y29uc3Qgcz1udWxsIT09KHQ9dGhpcy5zaGFkb3dSb290KSYmdm9pZCAwIT09dD90OnRoaXMuYXR0YWNoU2hhZG93KHRoaXMuY29uc3RydWN0b3Iuc2hhZG93Um9vdE9wdGlvbnMpO3JldHVybiBpKHMsdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKSxzfWNvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7dm9pZCAwPT09dGhpcy5yZW5kZXJSb290JiYodGhpcy5yZW5kZXJSb290PXRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpKSx0aGlzLmVuYWJsZVVwZGF0aW5nKCEwKSxudWxsPT09KHQ9dGhpcy5fJEVnKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3RDb25uZWN0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSl9ZW5hYmxlVXBkYXRpbmcodCl7fWRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7bnVsbD09PSh0PXRoaXMuXyRFZyl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0RGlzY29ubmVjdGVkKXx8dm9pZCAwPT09aT92b2lkIDA6aS5jYWxsKHQpfSkpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0LGkscyl7dGhpcy5fJEFLKHQscyl9XyRFUyh0LGkscz1sKXt2YXIgZSxyO2NvbnN0IGg9dGhpcy5jb25zdHJ1Y3Rvci5fJEVoKHQscyk7aWYodm9pZCAwIT09aCYmITA9PT1zLnJlZmxlY3Qpe2NvbnN0IG49KG51bGwhPT0ocj1udWxsPT09KGU9cy5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnRvQXR0cmlidXRlKSYmdm9pZCAwIT09cj9yOm8udG9BdHRyaWJ1dGUpKGkscy50eXBlKTt0aGlzLl8kRWk9dCxudWxsPT1uP3RoaXMucmVtb3ZlQXR0cmlidXRlKGgpOnRoaXMuc2V0QXR0cmlidXRlKGgsbiksdGhpcy5fJEVpPW51bGx9fV8kQUsodCxpKXt2YXIgcyxlLHI7Y29uc3QgaD10aGlzLmNvbnN0cnVjdG9yLG49aC5fJEV1LmdldCh0KTtpZih2b2lkIDAhPT1uJiZ0aGlzLl8kRWkhPT1uKXtjb25zdCB0PWguZ2V0UHJvcGVydHlPcHRpb25zKG4pLGw9dC5jb252ZXJ0ZXIsYT1udWxsIT09KHI9bnVsbCE9PShlPW51bGw9PT0ocz1sKXx8dm9pZCAwPT09cz92b2lkIDA6cy5mcm9tQXR0cmlidXRlKSYmdm9pZCAwIT09ZT9lOlwiZnVuY3Rpb25cIj09dHlwZW9mIGw/bDpudWxsKSYmdm9pZCAwIT09cj9yOm8uZnJvbUF0dHJpYnV0ZTt0aGlzLl8kRWk9bix0aGlzW25dPWEoaSx0LnR5cGUpLHRoaXMuXyRFaT1udWxsfX1yZXF1ZXN0VXBkYXRlKHQsaSxzKXtsZXQgZT0hMDt2b2lkIDAhPT10JiYoKChzPXN8fHRoaXMuY29uc3RydWN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKHQpKS5oYXNDaGFuZ2VkfHxuKSh0aGlzW3RdLGkpPyh0aGlzLl8kQUwuaGFzKHQpfHx0aGlzLl8kQUwuc2V0KHQsaSksITA9PT1zLnJlZmxlY3QmJnRoaXMuXyRFaSE9PXQmJih2b2lkIDA9PT10aGlzLl8kRUMmJih0aGlzLl8kRUM9bmV3IE1hcCksdGhpcy5fJEVDLnNldCh0LHMpKSk6ZT0hMSksIXRoaXMuaXNVcGRhdGVQZW5kaW5nJiZlJiYodGhpcy5fJEVwPXRoaXMuXyRFXygpKX1hc3luYyBfJEVfKCl7dGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITA7dHJ5e2F3YWl0IHRoaXMuXyRFcH1jYXRjaCh0KXtQcm9taXNlLnJlamVjdCh0KX1jb25zdCB0PXRoaXMuc2NoZWR1bGVVcGRhdGUoKTtyZXR1cm4gbnVsbCE9dCYmYXdhaXQgdCwhdGhpcy5pc1VwZGF0ZVBlbmRpbmd9c2NoZWR1bGVVcGRhdGUoKXtyZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCl9cGVyZm9ybVVwZGF0ZSgpe3ZhciB0O2lmKCF0aGlzLmlzVXBkYXRlUGVuZGluZylyZXR1cm47dGhpcy5oYXNVcGRhdGVkLHRoaXMuXyRFdCYmKHRoaXMuXyRFdC5mb3JFYWNoKCgodCxpKT0+dGhpc1tpXT10KSksdGhpcy5fJEV0PXZvaWQgMCk7bGV0IGk9ITE7Y29uc3Qgcz10aGlzLl8kQUw7dHJ5e2k9dGhpcy5zaG91bGRVcGRhdGUocyksaT8odGhpcy53aWxsVXBkYXRlKHMpLG51bGw9PT0odD10aGlzLl8kRWcpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZSl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKSx0aGlzLnVwZGF0ZShzKSk6dGhpcy5fJEVVKCl9Y2F0Y2godCl7dGhyb3cgaT0hMSx0aGlzLl8kRVUoKSx0fWkmJnRoaXMuXyRBRShzKX13aWxsVXBkYXRlKHQpe31fJEFFKHQpe3ZhciBpO251bGw9PT0oaT10aGlzLl8kRWcpfHx2b2lkIDA9PT1pfHxpLmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSksdGhpcy5oYXNVcGRhdGVkfHwodGhpcy5oYXNVcGRhdGVkPSEwLHRoaXMuZmlyc3RVcGRhdGVkKHQpKSx0aGlzLnVwZGF0ZWQodCl9XyRFVSgpe3RoaXMuXyRBTD1uZXcgTWFwLHRoaXMuaXNVcGRhdGVQZW5kaW5nPSExfWdldCB1cGRhdGVDb21wbGV0ZSgpe3JldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCl9Z2V0VXBkYXRlQ29tcGxldGUoKXtyZXR1cm4gdGhpcy5fJEVwfXNob3VsZFVwZGF0ZSh0KXtyZXR1cm4hMH11cGRhdGUodCl7dm9pZCAwIT09dGhpcy5fJEVDJiYodGhpcy5fJEVDLmZvckVhY2goKCh0LGkpPT50aGlzLl8kRVMoaSx0aGlzW2ldLHQpKSksdGhpcy5fJEVDPXZvaWQgMCksdGhpcy5fJEVVKCl9dXBkYXRlZCh0KXt9Zmlyc3RVcGRhdGVkKHQpe319YS5maW5hbGl6ZWQ9ITAsYS5lbGVtZW50UHJvcGVydGllcz1uZXcgTWFwLGEuZWxlbWVudFN0eWxlcz1bXSxhLnNoYWRvd1Jvb3RPcHRpb25zPXttb2RlOlwib3BlblwifSxudWxsPT1ofHxoKHtSZWFjdGl2ZUVsZW1lbnQ6YX0pLChudWxsIT09KHM9Z2xvYmFsVGhpcy5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykmJnZvaWQgMCE9PXM/czpnbG9iYWxUaGlzLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zPVtdKS5wdXNoKFwiMS4zLjBcIik7ZXhwb3J0e2EgYXMgUmVhY3RpdmVFbGVtZW50LG8gYXMgZGVmYXVsdENvbnZlcnRlcixuIGFzIG5vdEVxdWFsfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciB0O2NvbnN0IGk9Z2xvYmFsVGhpcy50cnVzdGVkVHlwZXMscz1pP2kuY3JlYXRlUG9saWN5KFwibGl0LWh0bWxcIix7Y3JlYXRlSFRNTDp0PT50fSk6dm9pZCAwLGU9YGxpdCQkeyhNYXRoLnJhbmRvbSgpK1wiXCIpLnNsaWNlKDkpfSRgLG89XCI/XCIrZSxuPWA8JHtvfT5gLGw9ZG9jdW1lbnQsaD0odD1cIlwiKT0+bC5jcmVhdGVDb21tZW50KHQpLHI9dD0+bnVsbD09PXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LGQ9QXJyYXkuaXNBcnJheSx1PXQ9Pnt2YXIgaTtyZXR1cm4gZCh0KXx8XCJmdW5jdGlvblwiPT10eXBlb2YobnVsbD09PShpPXQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppW1N5bWJvbC5pdGVyYXRvcl0pfSxjPS88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZyx2PS8tLT4vZyxhPS8+L2csZj0vPnxbIFx0XFxuXGZcXHJdKD86KFteXFxzXCInPj0vXSspKFsgXHRcXG5cZlxccl0qPVsgXHRcXG5cZlxccl0qKD86W14gXHRcXG5cZlxcclwiJ2A8Pj1dfChcInwnKXwpKXwkKS9nLF89LycvZyxtPS9cIi9nLGc9L14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pLHA9dD0+KGksLi4ucyk9Pih7XyRsaXRUeXBlJDp0LHN0cmluZ3M6aSx2YWx1ZXM6c30pLCQ9cCgxKSx5PXAoMiksYj1TeW1ib2wuZm9yKFwibGl0LW5vQ2hhbmdlXCIpLHc9U3ltYm9sLmZvcihcImxpdC1ub3RoaW5nXCIpLFQ9bmV3IFdlYWtNYXAseD0odCxpLHMpPT57dmFyIGUsbztjb25zdCBuPW51bGwhPT0oZT1udWxsPT1zP3ZvaWQgMDpzLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PWU/ZTppO2xldCBsPW4uXyRsaXRQYXJ0JDtpZih2b2lkIDA9PT1sKXtjb25zdCB0PW51bGwhPT0obz1udWxsPT1zP3ZvaWQgMDpzLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PW8/bzpudWxsO24uXyRsaXRQYXJ0JD1sPW5ldyBOKGkuaW5zZXJ0QmVmb3JlKGgoKSx0KSx0LHZvaWQgMCxudWxsIT1zP3M6e30pfXJldHVybiBsLl8kQUkodCksbH0sQT1sLmNyZWF0ZVRyZWVXYWxrZXIobCwxMjksbnVsbCwhMSksQz0odCxpKT0+e2NvbnN0IG89dC5sZW5ndGgtMSxsPVtdO2xldCBoLHI9Mj09PWk/XCI8c3ZnPlwiOlwiXCIsZD1jO2ZvcihsZXQgaT0wO2k8bztpKyspe2NvbnN0IHM9dFtpXTtsZXQgbyx1LHA9LTEsJD0wO2Zvcig7JDxzLmxlbmd0aCYmKGQubGFzdEluZGV4PSQsdT1kLmV4ZWMocyksbnVsbCE9PXUpOykkPWQubGFzdEluZGV4LGQ9PT1jP1wiIS0tXCI9PT11WzFdP2Q9djp2b2lkIDAhPT11WzFdP2Q9YTp2b2lkIDAhPT11WzJdPyhnLnRlc3QodVsyXSkmJihoPVJlZ0V4cChcIjwvXCIrdVsyXSxcImdcIikpLGQ9Zik6dm9pZCAwIT09dVszXSYmKGQ9Zik6ZD09PWY/XCI+XCI9PT11WzBdPyhkPW51bGwhPWg/aDpjLHA9LTEpOnZvaWQgMD09PXVbMV0/cD0tMjoocD1kLmxhc3RJbmRleC11WzJdLmxlbmd0aCxvPXVbMV0sZD12b2lkIDA9PT11WzNdP2Y6J1wiJz09PXVbM10/bTpfKTpkPT09bXx8ZD09PV8/ZD1mOmQ9PT12fHxkPT09YT9kPWM6KGQ9ZixoPXZvaWQgMCk7Y29uc3QgeT1kPT09ZiYmdFtpKzFdLnN0YXJ0c1dpdGgoXCIvPlwiKT9cIiBcIjpcIlwiO3IrPWQ9PT1jP3MrbjpwPj0wPyhsLnB1c2gobykscy5zbGljZSgwLHApK1wiJGxpdCRcIitzLnNsaWNlKHApK2UreSk6cytlKygtMj09PXA/KGwucHVzaCh2b2lkIDApLGkpOnkpfWNvbnN0IHU9cisodFtvXXx8XCI8Pz5cIikrKDI9PT1pP1wiPC9zdmc+XCI6XCJcIik7aWYoIUFycmF5LmlzQXJyYXkodCl8fCF0Lmhhc093blByb3BlcnR5KFwicmF3XCIpKXRocm93IEVycm9yKFwiaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XCIpO3JldHVyblt2b2lkIDAhPT1zP3MuY3JlYXRlSFRNTCh1KTp1LGxdfTtjbGFzcyBFe2NvbnN0cnVjdG9yKHtzdHJpbmdzOnQsXyRsaXRUeXBlJDpzfSxuKXtsZXQgbDt0aGlzLnBhcnRzPVtdO2xldCByPTAsZD0wO2NvbnN0IHU9dC5sZW5ndGgtMSxjPXRoaXMucGFydHMsW3YsYV09Qyh0LHMpO2lmKHRoaXMuZWw9RS5jcmVhdGVFbGVtZW50KHYsbiksQS5jdXJyZW50Tm9kZT10aGlzLmVsLmNvbnRlbnQsMj09PXMpe2NvbnN0IHQ9dGhpcy5lbC5jb250ZW50LGk9dC5maXJzdENoaWxkO2kucmVtb3ZlKCksdC5hcHBlbmQoLi4uaS5jaGlsZE5vZGVzKX1mb3IoO251bGwhPT0obD1BLm5leHROb2RlKCkpJiZjLmxlbmd0aDx1Oyl7aWYoMT09PWwubm9kZVR5cGUpe2lmKGwuaGFzQXR0cmlidXRlcygpKXtjb25zdCB0PVtdO2Zvcihjb25zdCBpIG9mIGwuZ2V0QXR0cmlidXRlTmFtZXMoKSlpZihpLmVuZHNXaXRoKFwiJGxpdCRcIil8fGkuc3RhcnRzV2l0aChlKSl7Y29uc3Qgcz1hW2QrK107aWYodC5wdXNoKGkpLHZvaWQgMCE9PXMpe2NvbnN0IHQ9bC5nZXRBdHRyaWJ1dGUocy50b0xvd2VyQ2FzZSgpK1wiJGxpdCRcIikuc3BsaXQoZSksaT0vKFsuP0BdKT8oLiopLy5leGVjKHMpO2MucHVzaCh7dHlwZToxLGluZGV4OnIsbmFtZTppWzJdLHN0cmluZ3M6dCxjdG9yOlwiLlwiPT09aVsxXT9NOlwiP1wiPT09aVsxXT9IOlwiQFwiPT09aVsxXT9JOlN9KX1lbHNlIGMucHVzaCh7dHlwZTo2LGluZGV4OnJ9KX1mb3IoY29uc3QgaSBvZiB0KWwucmVtb3ZlQXR0cmlidXRlKGkpfWlmKGcudGVzdChsLnRhZ05hbWUpKXtjb25zdCB0PWwudGV4dENvbnRlbnQuc3BsaXQoZSkscz10Lmxlbmd0aC0xO2lmKHM+MCl7bC50ZXh0Q29udGVudD1pP2kuZW1wdHlTY3JpcHQ6XCJcIjtmb3IobGV0IGk9MDtpPHM7aSsrKWwuYXBwZW5kKHRbaV0saCgpKSxBLm5leHROb2RlKCksYy5wdXNoKHt0eXBlOjIsaW5kZXg6KytyfSk7bC5hcHBlbmQodFtzXSxoKCkpfX19ZWxzZSBpZig4PT09bC5ub2RlVHlwZSlpZihsLmRhdGE9PT1vKWMucHVzaCh7dHlwZToyLGluZGV4OnJ9KTtlbHNle2xldCB0PS0xO2Zvcig7LTEhPT0odD1sLmRhdGEuaW5kZXhPZihlLHQrMSkpOyljLnB1c2goe3R5cGU6NyxpbmRleDpyfSksdCs9ZS5sZW5ndGgtMX1yKyt9fXN0YXRpYyBjcmVhdGVFbGVtZW50KHQsaSl7Y29uc3Qgcz1sLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtyZXR1cm4gcy5pbm5lckhUTUw9dCxzfX1mdW5jdGlvbiBQKHQsaSxzPXQsZSl7dmFyIG8sbixsLGg7aWYoaT09PWIpcmV0dXJuIGk7bGV0IGQ9dm9pZCAwIT09ZT9udWxsPT09KG89cy5fJENsKXx8dm9pZCAwPT09bz92b2lkIDA6b1tlXTpzLl8kQ3U7Y29uc3QgdT1yKGkpP3ZvaWQgMDppLl8kbGl0RGlyZWN0aXZlJDtyZXR1cm4obnVsbD09ZD92b2lkIDA6ZC5jb25zdHJ1Y3RvcikhPT11JiYobnVsbD09PShuPW51bGw9PWQ/dm9pZCAwOmQuXyRBTyl8fHZvaWQgMD09PW58fG4uY2FsbChkLCExKSx2b2lkIDA9PT11P2Q9dm9pZCAwOihkPW5ldyB1KHQpLGQuXyRBVCh0LHMsZSkpLHZvaWQgMCE9PWU/KG51bGwhPT0obD0oaD1zKS5fJENsKSYmdm9pZCAwIT09bD9sOmguXyRDbD1bXSlbZV09ZDpzLl8kQ3U9ZCksdm9pZCAwIT09ZCYmKGk9UCh0LGQuXyRBUyh0LGkudmFsdWVzKSxkLGUpKSxpfWNsYXNzIFZ7Y29uc3RydWN0b3IodCxpKXt0aGlzLnY9W10sdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUQ9dCx0aGlzLl8kQU09aX1nZXQgcGFyZW50Tm9kZSgpe3JldHVybiB0aGlzLl8kQU0ucGFyZW50Tm9kZX1nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1wKHQpe3ZhciBpO2NvbnN0e2VsOntjb250ZW50OnN9LHBhcnRzOmV9PXRoaXMuXyRBRCxvPShudWxsIT09KGk9bnVsbD09dD92b2lkIDA6dC5jcmVhdGlvblNjb3BlKSYmdm9pZCAwIT09aT9pOmwpLmltcG9ydE5vZGUocywhMCk7QS5jdXJyZW50Tm9kZT1vO2xldCBuPUEubmV4dE5vZGUoKSxoPTAscj0wLGQ9ZVswXTtmb3IoO3ZvaWQgMCE9PWQ7KXtpZihoPT09ZC5pbmRleCl7bGV0IGk7Mj09PWQudHlwZT9pPW5ldyBOKG4sbi5uZXh0U2libGluZyx0aGlzLHQpOjE9PT1kLnR5cGU/aT1uZXcgZC5jdG9yKG4sZC5uYW1lLGQuc3RyaW5ncyx0aGlzLHQpOjY9PT1kLnR5cGUmJihpPW5ldyBMKG4sdGhpcyx0KSksdGhpcy52LnB1c2goaSksZD1lWysrcl19aCE9PShudWxsPT1kP3ZvaWQgMDpkLmluZGV4KSYmKG49QS5uZXh0Tm9kZSgpLGgrKyl9cmV0dXJuIG99bSh0KXtsZXQgaT0wO2Zvcihjb25zdCBzIG9mIHRoaXMudil2b2lkIDAhPT1zJiYodm9pZCAwIT09cy5zdHJpbmdzPyhzLl8kQUkodCxzLGkpLGkrPXMuc3RyaW5ncy5sZW5ndGgtMik6cy5fJEFJKHRbaV0pKSxpKyt9fWNsYXNzIE57Y29uc3RydWN0b3IodCxpLHMsZSl7dmFyIG87dGhpcy50eXBlPTIsdGhpcy5fJEFIPXcsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUE9dCx0aGlzLl8kQUI9aSx0aGlzLl8kQU09cyx0aGlzLm9wdGlvbnM9ZSx0aGlzLl8kQ2c9bnVsbD09PShvPW51bGw9PWU/dm9pZCAwOmUuaXNDb25uZWN0ZWQpfHx2b2lkIDA9PT1vfHxvfWdldCBfJEFVKCl7dmFyIHQsaTtyZXR1cm4gbnVsbCE9PShpPW51bGw9PT0odD10aGlzLl8kQU0pfHx2b2lkIDA9PT10P3ZvaWQgMDp0Ll8kQVUpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJENnfWdldCBwYXJlbnROb2RlKCl7bGV0IHQ9dGhpcy5fJEFBLnBhcmVudE5vZGU7Y29uc3QgaT10aGlzLl8kQU07cmV0dXJuIHZvaWQgMCE9PWkmJjExPT09dC5ub2RlVHlwZSYmKHQ9aS5wYXJlbnROb2RlKSx0fWdldCBzdGFydE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFBfWdldCBlbmROb2RlKCl7cmV0dXJuIHRoaXMuXyRBQn1fJEFJKHQsaT10aGlzKXt0PVAodGhpcyx0LGkpLHIodCk/dD09PXd8fG51bGw9PXR8fFwiXCI9PT10Pyh0aGlzLl8kQUghPT13JiZ0aGlzLl8kQVIoKSx0aGlzLl8kQUg9dyk6dCE9PXRoaXMuXyRBSCYmdCE9PWImJnRoaXMuJCh0KTp2b2lkIDAhPT10Ll8kbGl0VHlwZSQ/dGhpcy5UKHQpOnZvaWQgMCE9PXQubm9kZVR5cGU/dGhpcy5rKHQpOnUodCk/dGhpcy5TKHQpOnRoaXMuJCh0KX1BKHQsaT10aGlzLl8kQUIpe3JldHVybiB0aGlzLl8kQUEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxpKX1rKHQpe3RoaXMuXyRBSCE9PXQmJih0aGlzLl8kQVIoKSx0aGlzLl8kQUg9dGhpcy5BKHQpKX0kKHQpe3RoaXMuXyRBSCE9PXcmJnIodGhpcy5fJEFIKT90aGlzLl8kQUEubmV4dFNpYmxpbmcuZGF0YT10OnRoaXMuayhsLmNyZWF0ZVRleHROb2RlKHQpKSx0aGlzLl8kQUg9dH1UKHQpe3ZhciBpO2NvbnN0e3ZhbHVlczpzLF8kbGl0VHlwZSQ6ZX09dCxvPVwibnVtYmVyXCI9PXR5cGVvZiBlP3RoaXMuXyRBQyh0KToodm9pZCAwPT09ZS5lbCYmKGUuZWw9RS5jcmVhdGVFbGVtZW50KGUuaCx0aGlzLm9wdGlvbnMpKSxlKTtpZigobnVsbD09PShpPXRoaXMuXyRBSCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuXyRBRCk9PT1vKXRoaXMuXyRBSC5tKHMpO2Vsc2V7Y29uc3QgdD1uZXcgVihvLHRoaXMpLGk9dC5wKHRoaXMub3B0aW9ucyk7dC5tKHMpLHRoaXMuayhpKSx0aGlzLl8kQUg9dH19XyRBQyh0KXtsZXQgaT1ULmdldCh0LnN0cmluZ3MpO3JldHVybiB2b2lkIDA9PT1pJiZULnNldCh0LnN0cmluZ3MsaT1uZXcgRSh0KSksaX1TKHQpe2QodGhpcy5fJEFIKXx8KHRoaXMuXyRBSD1bXSx0aGlzLl8kQVIoKSk7Y29uc3QgaT10aGlzLl8kQUg7bGV0IHMsZT0wO2Zvcihjb25zdCBvIG9mIHQpZT09PWkubGVuZ3RoP2kucHVzaChzPW5ldyBOKHRoaXMuQShoKCkpLHRoaXMuQShoKCkpLHRoaXMsdGhpcy5vcHRpb25zKSk6cz1pW2VdLHMuXyRBSShvKSxlKys7ZTxpLmxlbmd0aCYmKHRoaXMuXyRBUihzJiZzLl8kQUIubmV4dFNpYmxpbmcsZSksaS5sZW5ndGg9ZSl9XyRBUih0PXRoaXMuXyRBQS5uZXh0U2libGluZyxpKXt2YXIgcztmb3IobnVsbD09PShzPXRoaXMuXyRBUCl8fHZvaWQgMD09PXN8fHMuY2FsbCh0aGlzLCExLCEwLGkpO3QmJnQhPT10aGlzLl8kQUI7KXtjb25zdCBpPXQubmV4dFNpYmxpbmc7dC5yZW1vdmUoKSx0PWl9fXNldENvbm5lY3RlZCh0KXt2YXIgaTt2b2lkIDA9PT10aGlzLl8kQU0mJih0aGlzLl8kQ2c9dCxudWxsPT09KGk9dGhpcy5fJEFQKXx8dm9pZCAwPT09aXx8aS5jYWxsKHRoaXMsdCkpfX1jbGFzcyBTe2NvbnN0cnVjdG9yKHQsaSxzLGUsbyl7dGhpcy50eXBlPTEsdGhpcy5fJEFIPXcsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLmVsZW1lbnQ9dCx0aGlzLm5hbWU9aSx0aGlzLl8kQU09ZSx0aGlzLm9wdGlvbnM9byxzLmxlbmd0aD4yfHxcIlwiIT09c1swXXx8XCJcIiE9PXNbMV0/KHRoaXMuXyRBSD1BcnJheShzLmxlbmd0aC0xKS5maWxsKG5ldyBTdHJpbmcpLHRoaXMuc3RyaW5ncz1zKTp0aGlzLl8kQUg9d31nZXQgdGFnTmFtZSgpe3JldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZX1nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1fJEFJKHQsaT10aGlzLHMsZSl7Y29uc3Qgbz10aGlzLnN0cmluZ3M7bGV0IG49ITE7aWYodm9pZCAwPT09byl0PVAodGhpcyx0LGksMCksbj0hcih0KXx8dCE9PXRoaXMuXyRBSCYmdCE9PWIsbiYmKHRoaXMuXyRBSD10KTtlbHNle2NvbnN0IGU9dDtsZXQgbCxoO2Zvcih0PW9bMF0sbD0wO2w8by5sZW5ndGgtMTtsKyspaD1QKHRoaXMsZVtzK2xdLGksbCksaD09PWImJihoPXRoaXMuXyRBSFtsXSksbnx8KG49IXIoaCl8fGghPT10aGlzLl8kQUhbbF0pLGg9PT13P3Q9dzp0IT09dyYmKHQrPShudWxsIT1oP2g6XCJcIikrb1tsKzFdKSx0aGlzLl8kQUhbbF09aH1uJiYhZSYmdGhpcy5DKHQpfUModCl7dD09PXc/dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpOnRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLG51bGwhPXQ/dDpcIlwiKX19Y2xhc3MgTSBleHRlbmRzIFN7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudHlwZT0zfUModCl7dGhpcy5lbGVtZW50W3RoaXMubmFtZV09dD09PXc/dm9pZCAwOnR9fWNvbnN0IGs9aT9pLmVtcHR5U2NyaXB0OlwiXCI7Y2xhc3MgSCBleHRlbmRzIFN7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudHlwZT00fUModCl7dCYmdCE9PXc/dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsayk6dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpfX1jbGFzcyBJIGV4dGVuZHMgU3tjb25zdHJ1Y3Rvcih0LGkscyxlLG8pe3N1cGVyKHQsaSxzLGUsbyksdGhpcy50eXBlPTV9XyRBSSh0LGk9dGhpcyl7dmFyIHM7aWYoKHQ9bnVsbCE9PShzPVAodGhpcyx0LGksMCkpJiZ2b2lkIDAhPT1zP3M6dyk9PT1iKXJldHVybjtjb25zdCBlPXRoaXMuXyRBSCxvPXQ9PT13JiZlIT09d3x8dC5jYXB0dXJlIT09ZS5jYXB0dXJlfHx0Lm9uY2UhPT1lLm9uY2V8fHQucGFzc2l2ZSE9PWUucGFzc2l2ZSxuPXQhPT13JiYoZT09PXd8fG8pO28mJnRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSx0aGlzLGUpLG4mJnRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSx0aGlzLHQpLHRoaXMuXyRBSD10fWhhbmRsZUV2ZW50KHQpe3ZhciBpLHM7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fJEFIP3RoaXMuXyRBSC5jYWxsKG51bGwhPT0ocz1udWxsPT09KGk9dGhpcy5vcHRpb25zKXx8dm9pZCAwPT09aT92b2lkIDA6aS5ob3N0KSYmdm9pZCAwIT09cz9zOnRoaXMuZWxlbWVudCx0KTp0aGlzLl8kQUguaGFuZGxlRXZlbnQodCl9fWNsYXNzIEx7Y29uc3RydWN0b3IodCxpLHMpe3RoaXMuZWxlbWVudD10LHRoaXMudHlwZT02LHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFNPWksdGhpcy5vcHRpb25zPXN9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9XyRBSSh0KXtQKHRoaXMsdCl9fWNvbnN0IFI9e1A6XCIkbGl0JFwiLEw6ZSxWOm8sSToxLE46QyxSOlYsRDp1LGo6UCxIOk4sTzpTLEY6SCxCOkksVzpNLFo6TH0sej13aW5kb3cubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtudWxsPT16fHx6KEUsTiksKG51bGwhPT0odD1nbG9iYWxUaGlzLmxpdEh0bWxWZXJzaW9ucykmJnZvaWQgMCE9PXQ/dDpnbG9iYWxUaGlzLmxpdEh0bWxWZXJzaW9ucz1bXSkucHVzaChcIjIuMi4wXCIpO2V4cG9ydHtSIGFzIF8kTEgsJCBhcyBodG1sLGIgYXMgbm9DaGFuZ2UsdyBhcyBub3RoaW5nLHggYXMgcmVuZGVyLHkgYXMgc3ZnfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcFxuIiwiaW1wb3J0e1JlYWN0aXZlRWxlbWVudCBhcyB0fWZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnR7cmVuZGVyIGFzIGUsbm9DaGFuZ2UgYXMgaX1mcm9tXCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtaHRtbFwiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIGwsbztjb25zdCByPXQ7Y2xhc3MgcyBleHRlbmRzIHR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMucmVuZGVyT3B0aW9ucz17aG9zdDp0aGlzfSx0aGlzLl8kRHQ9dm9pZCAwfWNyZWF0ZVJlbmRlclJvb3QoKXt2YXIgdCxlO2NvbnN0IGk9c3VwZXIuY3JlYXRlUmVuZGVyUm9vdCgpO3JldHVybiBudWxsIT09KHQ9KGU9dGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpJiZ2b2lkIDAhPT10fHwoZS5yZW5kZXJCZWZvcmU9aS5maXJzdENoaWxkKSxpfXVwZGF0ZSh0KXtjb25zdCBpPXRoaXMucmVuZGVyKCk7dGhpcy5oYXNVcGRhdGVkfHwodGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkPXRoaXMuaXNDb25uZWN0ZWQpLHN1cGVyLnVwZGF0ZSh0KSx0aGlzLl8kRHQ9ZShpLHRoaXMucmVuZGVyUm9vdCx0aGlzLnJlbmRlck9wdGlvbnMpfWNvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7c3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKSxudWxsPT09KHQ9dGhpcy5fJER0KXx8dm9pZCAwPT09dHx8dC5zZXRDb25uZWN0ZWQoITApfWRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7c3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKSxudWxsPT09KHQ9dGhpcy5fJER0KXx8dm9pZCAwPT09dHx8dC5zZXRDb25uZWN0ZWQoITEpfXJlbmRlcigpe3JldHVybiBpfX1zLmZpbmFsaXplZD0hMCxzLl8kbGl0RWxlbWVudCQ9ITAsbnVsbD09PShsPWdsb2JhbFRoaXMubGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0KXx8dm9pZCAwPT09bHx8bC5jYWxsKGdsb2JhbFRoaXMse0xpdEVsZW1lbnQ6c30pO2NvbnN0IG49Z2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0O251bGw9PW58fG4oe0xpdEVsZW1lbnQ6c30pO2NvbnN0IGg9e18kQUs6KHQsZSxpKT0+e3QuXyRBSyhlLGkpfSxfJEFMOnQ9PnQuXyRBTH07KG51bGwhPT0obz1nbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucykmJnZvaWQgMCE9PW8/bzpnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucz1bXSkucHVzaChcIjMuMi4wXCIpO2V4cG9ydHtzIGFzIExpdEVsZW1lbnQsciBhcyBVcGRhdGluZ0VsZW1lbnQsaCBhcyBfJExFfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBuPW49PmU9PlwiZnVuY3Rpb25cIj09dHlwZW9mIGU/KChuLGUpPT4od2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShuLGUpLGUpKShuLGUpOigobixlKT0+e2NvbnN0e2tpbmQ6dCxlbGVtZW50czppfT1lO3JldHVybntraW5kOnQsZWxlbWVudHM6aSxmaW5pc2hlcihlKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKG4sZSl9fX0pKG4sZSk7ZXhwb3J0e24gYXMgY3VzdG9tRWxlbWVudH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZWxlbWVudC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgaT0oaSxlKT0+XCJtZXRob2RcIj09PWUua2luZCYmZS5kZXNjcmlwdG9yJiYhKFwidmFsdWVcImluIGUuZGVzY3JpcHRvcik/ey4uLmUsZmluaXNoZXIobil7bi5jcmVhdGVQcm9wZXJ0eShlLmtleSxpKX19OntraW5kOlwiZmllbGRcIixrZXk6U3ltYm9sKCkscGxhY2VtZW50Olwib3duXCIsZGVzY3JpcHRvcjp7fSxvcmlnaW5hbEtleTplLmtleSxpbml0aWFsaXplcigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUuaW5pdGlhbGl6ZXImJih0aGlzW2Uua2V5XT1lLmluaXRpYWxpemVyLmNhbGwodGhpcykpfSxmaW5pc2hlcihuKXtuLmNyZWF0ZVByb3BlcnR5KGUua2V5LGkpfX07ZnVuY3Rpb24gZShlKXtyZXR1cm4obix0KT0+dm9pZCAwIT09dD8oKGksZSxuKT0+e2UuY29uc3RydWN0b3IuY3JlYXRlUHJvcGVydHkobixpKX0pKGUsbix0KTppKGUsbil9ZXhwb3J0e2UgYXMgcHJvcGVydHl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcGVydHkuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBvfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIG47Y29uc3QgZT1udWxsIT0obnVsbD09PShuPXdpbmRvdy5IVE1MU2xvdEVsZW1lbnQpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnByb3RvdHlwZS5hc3NpZ25lZEVsZW1lbnRzKT8obyxuKT0+by5hc3NpZ25lZEVsZW1lbnRzKG4pOihvLG4pPT5vLmFzc2lnbmVkTm9kZXMobikuZmlsdGVyKChvPT5vLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpKTtmdW5jdGlvbiBsKG4pe2NvbnN0e3Nsb3Q6bCxzZWxlY3Rvcjp0fT1udWxsIT1uP246e307cmV0dXJuIG8oe2Rlc2NyaXB0b3I6bz0+KHtnZXQoKXt2YXIgbztjb25zdCByPVwic2xvdFwiKyhsP2BbbmFtZT0ke2x9XWA6XCI6bm90KFtuYW1lXSlcIiksaT1udWxsPT09KG89dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09bz92b2lkIDA6by5xdWVyeVNlbGVjdG9yKHIpLHM9bnVsbCE9aT9lKGksbik6W107cmV0dXJuIHQ/cy5maWx0ZXIoKG89Pm8ubWF0Y2hlcyh0KSkpOnN9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7bCBhcyBxdWVyeUFzc2lnbmVkRWxlbWVudHN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHQ9e0FUVFJJQlVURToxLENISUxEOjIsUFJPUEVSVFk6MyxCT09MRUFOX0FUVFJJQlVURTo0LEVWRU5UOjUsRUxFTUVOVDo2fSxlPXQ9PiguLi5lKT0+KHtfJGxpdERpcmVjdGl2ZSQ6dCx2YWx1ZXM6ZX0pO2NsYXNzIGl7Y29uc3RydWN0b3IodCl7fWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQVQodCxlLGkpe3RoaXMuXyRDdD10LHRoaXMuXyRBTT1lLHRoaXMuXyRDaT1pfV8kQVModCxlKXtyZXR1cm4gdGhpcy51cGRhdGUodCxlKX11cGRhdGUodCxlKXtyZXR1cm4gdGhpcy5yZW5kZXIoLi4uZSl9fWV4cG9ydHtpIGFzIERpcmVjdGl2ZSx0IGFzIFBhcnRUeXBlLGUgYXMgZGlyZWN0aXZlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXBcbiIsImltcG9ydHtub3RoaW5nIGFzIHQsbm9DaGFuZ2UgYXMgaX1mcm9tXCIuLi9saXQtaHRtbC5qc1wiO2ltcG9ydHtEaXJlY3RpdmUgYXMgcixQYXJ0VHlwZSBhcyBzLGRpcmVjdGl2ZSBhcyBufWZyb21cIi4uL2RpcmVjdGl2ZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovY2xhc3MgZSBleHRlbmRzIHJ7Y29uc3RydWN0b3IoaSl7aWYoc3VwZXIoaSksdGhpcy5pdD10LGkudHlwZSE9PXMuQ0hJTEQpdGhyb3cgRXJyb3IodGhpcy5jb25zdHJ1Y3Rvci5kaXJlY3RpdmVOYW1lK1wiKCkgY2FuIG9ubHkgYmUgdXNlZCBpbiBjaGlsZCBiaW5kaW5nc1wiKX1yZW5kZXIocil7aWYocj09PXR8fG51bGw9PXIpcmV0dXJuIHRoaXMuZnQ9dm9pZCAwLHRoaXMuaXQ9cjtpZihyPT09aSlyZXR1cm4gcjtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBFcnJvcih0aGlzLmNvbnN0cnVjdG9yLmRpcmVjdGl2ZU5hbWUrXCIoKSBjYWxsZWQgd2l0aCBhIG5vbi1zdHJpbmcgdmFsdWVcIik7aWYocj09PXRoaXMuaXQpcmV0dXJuIHRoaXMuZnQ7dGhpcy5pdD1yO2NvbnN0IHM9W3JdO3JldHVybiBzLnJhdz1zLHRoaXMuZnQ9e18kbGl0VHlwZSQ6dGhpcy5jb25zdHJ1Y3Rvci5yZXN1bHRUeXBlLHN0cmluZ3M6cyx2YWx1ZXM6W119fX1lLmRpcmVjdGl2ZU5hbWU9XCJ1bnNhZmVIVE1MXCIsZS5yZXN1bHRUeXBlPTE7Y29uc3Qgbz1uKGUpO2V4cG9ydHtlIGFzIFVuc2FmZUhUTUxEaXJlY3RpdmUsbyBhcyB1bnNhZmVIVE1MfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuc2FmZS1odG1sLmpzLm1hcFxuIiwiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAyLjMuOCB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMi4zLjgvTElDRU5TRSAqL1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHksXG4gICAgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YsXG4gICAgaXNGcm96ZW4gPSBPYmplY3QuaXNGcm96ZW4sXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBmcmVlemUgPSBPYmplY3QuZnJlZXplLFxuICAgIHNlYWwgPSBPYmplY3Quc2VhbCxcbiAgICBjcmVhdGUgPSBPYmplY3QuY3JlYXRlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcblxudmFyIF9yZWYgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdCxcbiAgICBhcHBseSA9IF9yZWYuYXBwbHksXG4gICAgY29uc3RydWN0ID0gX3JlZi5jb25zdHJ1Y3Q7XG5cbmlmICghYXBwbHkpIHtcbiAgYXBwbHkgPSBmdW5jdGlvbiBhcHBseShmdW4sIHRoaXNWYWx1ZSwgYXJncykge1xuICAgIHJldHVybiBmdW4uYXBwbHkodGhpc1ZhbHVlLCBhcmdzKTtcbiAgfTtcbn1cblxuaWYgKCFmcmVlemUpIHtcbiAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuaWYgKCFzZWFsKSB7XG4gIHNlYWwgPSBmdW5jdGlvbiBzZWFsKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuaWYgKCFjb25zdHJ1Y3QpIHtcbiAgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KEZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gX2NvbnN0cnVjdChGdW5jLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICB9O1xufVxuXG52YXIgYXJyYXlGb3JFYWNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCk7XG52YXIgYXJyYXlQb3AgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wb3ApO1xudmFyIGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xudmFyIHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbnZhciBzdHJpbmdNYXRjaCA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5tYXRjaCk7XG52YXIgc3RyaW5nUmVwbGFjZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xudmFyIHN0cmluZ1RyaW0gPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudHJpbSk7XG52YXIgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcbnZhciB0eXBlRXJyb3JDcmVhdGUgPSB1bmNvbnN0cnVjdChUeXBlRXJyb3IpO1xuZnVuY3Rpb24gdW5hcHBseShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhpc0FyZykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHVuY29uc3RydWN0KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0KGZ1bmMsIGFyZ3MpO1xuICB9O1xufVxuLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cblxuZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSkge1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAvLyBNYWtlICdpbicgYW5kIHRydXRoeSBjaGVja3MgbGlrZSBCb29sZWFuKHNldC5jb25zdHJ1Y3RvcilcbiAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgIHNldFByb3RvdHlwZU9mKHNldCwgbnVsbCk7XG4gIH1cblxuICB2YXIgbCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAobC0tKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBhcnJheVtsXTtcblxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBsY0VsZW1lbnQgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50KTtcblxuICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAvLyBDb25maWcgcHJlc2V0cyAoZS5nLiB0YWdzLmpzLCBhdHRycy5qcykgYXJlIGltbXV0YWJsZS5cbiAgICAgICAgaWYgKCFpc0Zyb3plbihhcnJheSkpIHtcbiAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQgPSBsY0VsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0W2VsZW1lbnRdID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzZXQ7XG59XG4vKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdCAqL1xuXG5mdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgdmFyIG5ld09iamVjdCA9IGNyZWF0ZShudWxsKTtcbiAgdmFyIHByb3BlcnR5O1xuXG4gIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKGFwcGx5KGhhc093blByb3BlcnR5LCBvYmplY3QsIFtwcm9wZXJ0eV0pKSB7XG4gICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqZWN0O1xufVxuLyogSUUxMCBkb2Vzbid0IHN1cHBvcnQgX19sb29rdXBHZXR0ZXJfXyBzbyBsZXRzJ1xuICogc2ltdWxhdGUgaXQuIEl0IGFsc28gYXV0b21hdGljYWxseSBjaGVja3NcbiAqIGlmIHRoZSBwcm9wIGlzIGZ1bmN0aW9uIG9yIGdldHRlciBhbmQgYmVoYXZlc1xuICogYWNjb3JkaW5nbHkuICovXG5cbmZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgd2hpbGUgKG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciBkZXNjID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG5cbiAgICBpZiAoZGVzYykge1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MuZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBmYWxsYmFja1ZhbHVlKGVsZW1lbnQpIHtcbiAgICBjb25zb2xlLndhcm4oJ2ZhbGxiYWNrIHZhbHVlIGZvcicsIGVsZW1lbnQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XG59XG5cbnZhciBodG1sJDEgPSBmcmVlemUoWydhJywgJ2FiYnInLCAnYWNyb255bScsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2JsaW5rJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2VudGVyJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnY29udGVudCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlY29yYXRvcicsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGVyJywgJ25hdicsICdub2JyJywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NoYWRvdycsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhY2VyJywgJ3NwYW4nLCAnc3RyaWtlJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGVtcGxhdGUnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0cicsICd0cmFjaycsICd0dCcsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInXSk7IC8vIFNWR1xuXG52YXIgc3ZnJDEgPSBmcmVlemUoWydzdmcnLCAnYScsICdhbHRnbHlwaCcsICdhbHRnbHlwaGRlZicsICdhbHRnbHlwaGl0ZW0nLCAnYW5pbWF0ZWNvbG9yJywgJ2FuaW1hdGVtb3Rpb24nLCAnYW5pbWF0ZXRyYW5zZm9ybScsICdjaXJjbGUnLCAnY2xpcHBhdGgnLCAnZGVmcycsICdkZXNjJywgJ2VsbGlwc2UnLCAnZmlsdGVyJywgJ2ZvbnQnLCAnZycsICdnbHlwaCcsICdnbHlwaHJlZicsICdoa2VybicsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhcmdyYWRpZW50JywgJ21hcmtlcicsICdtYXNrJywgJ21ldGFkYXRhJywgJ21wYXRoJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbGdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdHlsZScsICdzd2l0Y2gnLCAnc3ltYm9sJywgJ3RleHQnLCAndGV4dHBhdGgnLCAndGl0bGUnLCAndHJlZicsICd0c3BhbicsICd2aWV3JywgJ3ZrZXJuJ10pO1xudmFyIHN2Z0ZpbHRlcnMgPSBmcmVlemUoWydmZUJsZW5kJywgJ2ZlQ29sb3JNYXRyaXgnLCAnZmVDb21wb25lbnRUcmFuc2ZlcicsICdmZUNvbXBvc2l0ZScsICdmZUNvbnZvbHZlTWF0cml4JywgJ2ZlRGlmZnVzZUxpZ2h0aW5nJywgJ2ZlRGlzcGxhY2VtZW50TWFwJywgJ2ZlRGlzdGFudExpZ2h0JywgJ2ZlRmxvb2QnLCAnZmVGdW5jQScsICdmZUZ1bmNCJywgJ2ZlRnVuY0cnLCAnZmVGdW5jUicsICdmZUdhdXNzaWFuQmx1cicsICdmZUltYWdlJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZSddKTsgLy8gTGlzdCBvZiBTVkcgZWxlbWVudHMgdGhhdCBhcmUgZGlzYWxsb3dlZCBieSBkZWZhdWx0LlxuLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4vLyBjaGVja3MgcHJvcGVybHkgaW4gY2FzZSBvbmUgd2FudHMgdG8gYWRkIHRoZW0gdG9cbi8vIGFsbG93LWxpc3QuXG5cbnZhciBzdmdEaXNhbGxvd2VkID0gZnJlZXplKFsnYW5pbWF0ZScsICdjb2xvci1wcm9maWxlJywgJ2N1cnNvcicsICdkaXNjYXJkJywgJ2ZlZHJvcHNoYWRvdycsICdmb250LWZhY2UnLCAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2Utc3JjJywgJ2ZvbnQtZmFjZS11cmknLCAnZm9yZWlnbm9iamVjdCcsICdoYXRjaCcsICdoYXRjaHBhdGgnLCAnbWVzaCcsICdtZXNoZ3JhZGllbnQnLCAnbWVzaHBhdGNoJywgJ21lc2hyb3cnLCAnbWlzc2luZy1nbHlwaCcsICdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAndW5rbm93bicsICd1c2UnXSk7XG52YXIgbWF0aE1sJDEgPSBmcmVlemUoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInXSk7IC8vIFNpbWlsYXJseSB0byBTVkcsIHdlIHdhbnQgdG8ga25vdyBhbGwgTWF0aE1MIGVsZW1lbnRzLFxuLy8gZXZlbiB0aG9zZSB0aGF0IHdlIGRpc2FsbG93IGJ5IGRlZmF1bHQuXG5cbnZhciBtYXRoTWxEaXNhbGxvd2VkID0gZnJlZXplKFsnbWFjdGlvbicsICdtYWxpZ25ncm91cCcsICdtYWxpZ25tYXJrJywgJ21sb25nZGl2JywgJ21zY2FycmllcycsICdtc2NhcnJ5JywgJ21zZ3JvdXAnLCAnbXN0YWNrJywgJ21zbGluZScsICdtc3JvdycsICdzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbicsICdhbm5vdGF0aW9uLXhtbCcsICdtcHJlc2NyaXB0cycsICdub25lJ10pO1xudmFyIHRleHQgPSBmcmVlemUoWycjdGV4dCddKTtcblxudmFyIGh0bWwgPSBmcmVlemUoWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjYXB0dXJlJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29udHJvbHNsaXN0JywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWNvZGluZycsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJywgJ2VuY3R5cGUnLCAnZW50ZXJrZXloaW50JywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW5wdXRtb2RlJywgJ2ludGVncml0eScsICdpc21hcCcsICdraW5kJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb2FkaW5nJywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbmFtZScsICdub25jZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3BsYXlzaW5saW5lJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHJhbnNsYXRlJywgJ3R5cGUnLCAndXNlbWFwJywgJ3ZhbGlnbicsICd2YWx1ZScsICd3aWR0aCcsICd4bWxucycsICdzbG90J10pO1xudmFyIHN2ZyA9IGZyZWV6ZShbJ2FjY2VudC1oZWlnaHQnLCAnYWNjdW11bGF0ZScsICdhZGRpdGl2ZScsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXNjZW50JywgJ2F0dHJpYnV0ZW5hbWUnLCAnYXR0cmlidXRldHlwZScsICdhemltdXRoJywgJ2Jhc2VmcmVxdWVuY3knLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmVnaW4nLCAnYmlhcycsICdieScsICdjbGFzcycsICdjbGlwJywgJ2NsaXBwYXRodW5pdHMnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuaW5nJywgJ2tleXBvaW50cycsICdrZXlzcGxpbmVzJywgJ2tleXRpbWVzJywgJ2xhbmcnLCAnbGVuZ3RoYWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2tlcm5lbG1hdHJpeCcsICdrZXJuZWx1bml0bGVuZ3RoJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xvY2FsJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VyaGVpZ2h0JywgJ21hcmtlcnVuaXRzJywgJ21hcmtlcndpZHRoJywgJ21hc2tjb250ZW50dW5pdHMnLCAnbWFza3VuaXRzJywgJ21heCcsICdtYXNrJywgJ21lZGlhJywgJ21ldGhvZCcsICdtb2RlJywgJ21pbicsICduYW1lJywgJ251bW9jdGF2ZXMnLCAnb2Zmc2V0JywgJ29wZXJhdG9yJywgJ29wYWNpdHknLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdwYWludC1vcmRlcicsICdwYXRoJywgJ3BhdGhsZW5ndGgnLCAncGF0dGVybmNvbnRlbnR1bml0cycsICdwYXR0ZXJudHJhbnNmb3JtJywgJ3BhdHRlcm51bml0cycsICdwb2ludHMnLCAncHJlc2VydmVhbHBoYScsICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJ3ByaW1pdGl2ZXVuaXRzJywgJ3InLCAncngnLCAncnknLCAncmFkaXVzJywgJ3JlZngnLCAncmVmeScsICdyZXBlYXRjb3VudCcsICdyZXBlYXRkdXInLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NwZWN1bGFyY29uc3RhbnQnLCAnc3BlY3VsYXJleHBvbmVudCcsICdzcHJlYWRtZXRob2QnLCAnc3RhcnRvZmZzZXQnLCAnc3RkZGV2aWF0aW9uJywgJ3N0aXRjaHRpbGVzJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZScsICdzdHJva2Utd2lkdGgnLCAnc3R5bGUnLCAnc3VyZmFjZXNjYWxlJywgJ3N5c3RlbWxhbmd1YWdlJywgJ3RhYmluZGV4JywgJ3RhcmdldHgnLCAndGFyZ2V0eScsICd0cmFuc2Zvcm0nLCAndHJhbnNmb3JtLW9yaWdpbicsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd3cmFwJywgJ3dyaXRpbmctbW9kZScsICd4Y2hhbm5lbHNlbGVjdG9yJywgJ3ljaGFubmVsc2VsZWN0b3InLCAneCcsICd4MScsICd4MicsICd4bWxucycsICd5JywgJ3kxJywgJ3kyJywgJ3onLCAnem9vbWFuZHBhbiddKTtcbnZhciBtYXRoTWwgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xudmFyIHhtbCA9IGZyZWV6ZShbJ3hsaW5rOmhyZWYnLCAneG1sOmlkJywgJ3hsaW5rOnRpdGxlJywgJ3htbDpzcGFjZScsICd4bWxuczp4bGluayddKTtcblxudmFyIE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFx3XFxXXSp8W1xcd1xcV10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG5cbnZhciBFUkJfRVhQUiA9IHNlYWwoLzwlW1xcd1xcV10qfFtcXHdcXFddKiU+L2dtKTtcbnZhciBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuXG52YXIgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5cbnZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuKTtcbnZhciBJU19TQ1JJUFRfT1JfREFUQSA9IHNlYWwoL14oPzpcXHcrc2NyaXB0fGRhdGEpOi9pKTtcbnZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4pO1xudmFyIERPQ1RZUEVfTkFNRSA9IHNlYWwoL15odG1sJC9pKTtcblxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdztcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAqIEBwYXJhbSB7P1RydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX0gdHJ1c3RlZFR5cGVzIFRoZSBwb2xpY3kgZmFjdG9yeS5cbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpXG4gKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxuICovXG5cblxudmFyIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kgPSBmdW5jdGlvbiBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgZG9jdW1lbnQpIHtcbiAgaWYgKF90eXBlb2YodHJ1c3RlZFR5cGVzKSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cblxuXG4gIHZhciBzdWZmaXggPSBudWxsO1xuICB2YXIgQVRUUl9OQU1FID0gJ2RhdGEtdHQtcG9saWN5LXN1ZmZpeCc7XG5cbiAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5oYXNBdHRyaWJ1dGUoQVRUUl9OQU1FKSkge1xuICAgIHN1ZmZpeCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gIH1cblxuICB2YXIgcG9saWN5TmFtZSA9ICdkb21wdXJpZnknICsgKHN1ZmZpeCA/ICcjJyArIHN1ZmZpeCA6ICcnKTtcblxuICB0cnkge1xuICAgIHJldHVybiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KHBvbGljeU5hbWUsIHtcbiAgICAgIGNyZWF0ZUhUTUw6IGZ1bmN0aW9uIGNyZWF0ZUhUTUwoaHRtbCkge1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIFBvbGljeSBjcmVhdGlvbiBmYWlsZWQgKG1vc3QgbGlrZWx5IGFub3RoZXIgRE9NUHVyaWZ5IHNjcmlwdCBoYXNcbiAgICAvLyBhbHJlYWR5IHJ1bikuIFNraXAgY3JlYXRpbmcgdGhlIHBvbGljeSwgYXMgdGhpcyB3aWxsIG9ubHkgY2F1c2UgZXJyb3JzXG4gICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgIGNvbnNvbGUud2FybignVHJ1c3RlZFR5cGVzIHBvbGljeSAnICsgcG9saWN5TmFtZSArICcgY291bGQgbm90IGJlIGNyZWF0ZWQuJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTVB1cmlmeSgpIHtcbiAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG5cbiAgdmFyIERPTVB1cmlmeSA9IGZ1bmN0aW9uIERPTVB1cmlmeShyb290KSB7XG4gICAgcmV0dXJuIGNyZWF0ZURPTVB1cmlmeShyb290KTtcbiAgfTtcbiAgLyoqXG4gICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XG4gICAqL1xuXG5cbiAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMi4zLjgnO1xuICAvKipcbiAgICogQXJyYXkgb2YgZWxlbWVudHMgdGhhdCBET01QdXJpZnkgcmVtb3ZlZCBkdXJpbmcgc2FuaXRhdGlvbi5cbiAgICogRW1wdHkgaWYgbm90aGluZyB3YXMgcmVtb3ZlZC5cbiAgICovXG5cbiAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgIC8vIE5vdCBydW5uaW5nIGluIGEgYnJvd3NlciwgcHJvdmlkZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgdmFyIERvY3VtZW50RnJhZ21lbnQgPSB3aW5kb3cuRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgIE5vZGUgPSB3aW5kb3cuTm9kZSxcbiAgICAgIEVsZW1lbnQgPSB3aW5kb3cuRWxlbWVudCxcbiAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgIF93aW5kb3ckTmFtZWROb2RlTWFwID0gd2luZG93Lk5hbWVkTm9kZU1hcCxcbiAgICAgIE5hbWVkTm9kZU1hcCA9IF93aW5kb3ckTmFtZWROb2RlTWFwID09PSB2b2lkIDAgPyB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXAgOiBfd2luZG93JE5hbWVkTm9kZU1hcCxcbiAgICAgIEhUTUxGb3JtRWxlbWVudCA9IHdpbmRvdy5IVE1MRm9ybUVsZW1lbnQsXG4gICAgICBET01QYXJzZXIgPSB3aW5kb3cuRE9NUGFyc2VyLFxuICAgICAgdHJ1c3RlZFR5cGVzID0gd2luZG93LnRydXN0ZWRUeXBlcztcbiAgdmFyIEVsZW1lbnRQcm90b3R5cGUgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgdmFyIGNsb25lTm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2xvbmVOb2RlJyk7XG4gIHZhciBnZXROZXh0U2libGluZyA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnbmV4dFNpYmxpbmcnKTtcbiAgdmFyIGdldENoaWxkTm9kZXMgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2NoaWxkTm9kZXMnKTtcbiAgdmFyIGdldFBhcmVudE5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ3BhcmVudE5vZGUnKTsgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gIC8vIG5ldyBkb2N1bWVudCBjcmVhdGVkIHZpYSBjcmVhdGVIVE1MRG9jdW1lbnQuIEFzIHBlciB0aGUgc3BlY1xuICAvLyAoaHR0cDovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3JlYXRpbmctYW5kLXBhc3NpbmctcmVnaXN0cmllcylcbiAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgLy8gZG9jdW1lbnQsIHNvIHdlIHVzZSB0aGF0IGFzIG91ciBwYXJlbnQgZG9jdW1lbnQgdG8gZW5zdXJlIG5vdGhpbmdcbiAgLy8gaXMgaW5oZXJpdGVkLlxuXG4gIGlmICh0eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgfVxuXG4gIHZhciB0cnVzdGVkVHlwZXNQb2xpY3kgPSBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgb3JpZ2luYWxEb2N1bWVudCk7XG5cbiAgdmFyIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKSA6ICcnO1xuICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICBpbXBsZW1lbnRhdGlvbiA9IF9kb2N1bWVudC5pbXBsZW1lbnRhdGlvbixcbiAgICAgIGNyZWF0ZU5vZGVJdGVyYXRvciA9IF9kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IsXG4gICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG4gICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSA9IF9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbiAgdmFyIGltcG9ydE5vZGUgPSBvcmlnaW5hbERvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2N1bWVudE1vZGUgPSB7fTtcblxuICB0cnkge1xuICAgIGRvY3VtZW50TW9kZSA9IGNsb25lKGRvY3VtZW50KS5kb2N1bWVudE1vZGUgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB7fTtcbiAgfSBjYXRjaCAoXykge31cblxuICB2YXIgaG9va3MgPSB7fTtcbiAgLyoqXG4gICAqIEV4cG9zZSB3aGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBydW5uaW5nIHRoZSBmdWxsIERPTVB1cmlmeS5cbiAgICovXG5cbiAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgdHlwZW9mIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRNb2RlICE9PSA5O1xuICB2YXIgTVVTVEFDSEVfRVhQUiQxID0gTVVTVEFDSEVfRVhQUixcbiAgICAgIEVSQl9FWFBSJDEgPSBFUkJfRVhQUixcbiAgICAgIERBVEFfQVRUUiQxID0gREFUQV9BVFRSLFxuICAgICAgQVJJQV9BVFRSJDEgPSBBUklBX0FUVFIsXG4gICAgICBJU19TQ1JJUFRfT1JfREFUQSQxID0gSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgICBBVFRSX1dISVRFU1BBQ0UkMSA9IEFUVFJfV0hJVEVTUEFDRTtcbiAgdmFyIElTX0FMTE9XRURfVVJJJDEgPSBJU19BTExPV0VEX1VSSTtcbiAgLyoqXG4gICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAqIGRvbid0IGFkZCBhbnkgbmV3IG9uZXMgYnV0IGZlZWwgZnJlZSB0byByZW1vdmUgdW53YW50ZWQgb25lcy5cbiAgICovXG5cbiAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG5cbiAgdmFyIEFMTE9XRURfVEFHUyA9IG51bGw7XG4gIHZhciBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGh0bWwkMSksIF90b0NvbnN1bWFibGVBcnJheShzdmckMSksIF90b0NvbnN1bWFibGVBcnJheShzdmdGaWx0ZXJzKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KHRleHQpKSk7XG4gIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG5cbiAgdmFyIEFMTE9XRURfQVRUUiA9IG51bGw7XG4gIHZhciBERUZBVUxUX0FMTE9XRURfQVRUUiA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGh0bWwpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCksIF90b0NvbnN1bWFibGVBcnJheSh4bWwpKSk7XG4gIC8qXG4gICAqIENvbmZpZ3VyZSBob3cgRE9NUFVyaWZ5IHNob3VsZCBoYW5kbGUgY3VzdG9tIGVsZW1lbnRzIGFuZCB0aGVpciBhdHRyaWJ1dGVzIGFzIHdlbGwgYXMgY3VzdG9taXplZCBidWlsdC1pbiBlbGVtZW50cy5cbiAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gdGFnTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBjdXN0b20gZWxlbWVudHMpXG4gICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IGF0dHJpYnV0ZU5hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgYXR0cmlidXRlcyBub3Qgb24gdGhlIGFsbG93IGxpc3QpXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzIGFsbG93IGN1c3RvbSBlbGVtZW50cyBkZXJpdmVkIGZyb20gYnVpbHQtaW5zIGlmIHRoZXkgcGFzcyBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2suIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAqL1xuXG4gIHZhciBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IE9iamVjdC5zZWFsKE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHRhZ05hbWVDaGVjazoge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfSxcbiAgICBhdHRyaWJ1dGVOYW1lQ2hlY2s6IHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH0sXG4gICAgYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzOiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfVxuICB9KSk7XG4gIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG5cbiAgdmFyIEZPUkJJRF9UQUdTID0gbnVsbDtcbiAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cblxuICB2YXIgRk9SQklEX0FUVFIgPSBudWxsO1xuICAvKiBEZWNpZGUgaWYgQVJJQSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG5cbiAgdmFyIEFMTE9XX0FSSUFfQVRUUiA9IHRydWU7XG4gIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG5cbiAgdmFyIEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG4gIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuXG4gIHZhciBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGNvbW1vbiB0ZW1wbGF0ZSBlbmdpbmVzLlxuICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAqL1xuXG4gIHZhciBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcbiAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xuXG4gIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuICAvKiBUcmFjayB3aGV0aGVyIGNvbmZpZyBpcyBhbHJlYWR5IHNldCBvbiB0aGlzIGluc3RhbmNlIG9mIERPTVB1cmlmeS4gKi9cblxuICB2YXIgU0VUX0NPTkZJRyA9IGZhbHNlO1xuICAvKiBEZWNpZGUgaWYgYWxsIGVsZW1lbnRzIChlLmcuIHN0eWxlLCBzY3JpcHQpIG11c3QgYmUgY2hpbGRyZW4gb2ZcbiAgICogZG9jdW1lbnQuYm9keS4gQnkgZGVmYXVsdCwgYnJvd3NlcnMgbWlnaHQgbW92ZSB0aGVtIHRvIGRvY3VtZW50LmhlYWQgKi9cblxuICB2YXIgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgKiBzdHJpbmcgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkuXG4gICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxuICAgKi9cblxuICB2YXIgUkVUVVJOX0RPTSA9IGZhbHNlO1xuICAvKiBEZWNpZGUgaWYgYSBET00gYERvY3VtZW50RnJhZ21lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xuXG4gIHZhciBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG4gIC8qIFRyeSB0byByZXR1cm4gYSBUcnVzdGVkIFR5cGUgb2JqZWN0IGluc3RlYWQgb2YgYSBzdHJpbmcsIHJldHVybiBhIHN0cmluZyBpblxuICAgKiBjYXNlIFRydXN0ZWQgVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgICovXG5cbiAgdmFyIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcbiAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz8gKi9cblxuICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcbiAgLyogS2VlcCBlbGVtZW50IGNvbnRlbnQgd2hlbiByZW1vdmluZyBlbGVtZW50PyAqL1xuXG4gIHZhciBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxuICAgKiBvZiBpbXBvcnRpbmcgaXQgaW50byBhIG5ldyBEb2N1bWVudCBhbmQgcmV0dXJuaW5nIGEgc2FuaXRpemVkIGNvcHkgKi9cblxuICB2YXIgSU5fUExBQ0UgPSBmYWxzZTtcbiAgLyogQWxsb3cgdXNhZ2Ugb2YgcHJvZmlsZXMgbGlrZSBodG1sLCBzdmcgYW5kIG1hdGhNbCAqL1xuXG4gIHZhciBVU0VfUFJPRklMRVMgPSB7fTtcbiAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG5cbiAgdmFyIEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gIHZhciBERUZBVUxUX0ZPUkJJRF9DT05URU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2Fubm90YXRpb24teG1sJywgJ2F1ZGlvJywgJ2NvbGdyb3VwJywgJ2Rlc2MnLCAnZm9yZWlnbm9iamVjdCcsICdoZWFkJywgJ2lmcmFtZScsICdtYXRoJywgJ21pJywgJ21uJywgJ21vJywgJ21zJywgJ210ZXh0JywgJ25vZW1iZWQnLCAnbm9mcmFtZXMnLCAnbm9zY3JpcHQnLCAncGxhaW50ZXh0JywgJ3NjcmlwdCcsICdzdHlsZScsICdzdmcnLCAndGVtcGxhdGUnLCAndGhlYWQnLCAndGl0bGUnLCAndmlkZW8nLCAneG1wJ10pO1xuICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cblxuICB2YXIgREFUQV9VUklfVEFHUyA9IG51bGw7XG4gIHZhciBERUZBVUxUX0RBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgWydhdWRpbycsICd2aWRlbycsICdpbWcnLCAnc291cmNlJywgJ2ltYWdlJywgJ3RyYWNrJ10pO1xuICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuXG4gIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgdmFyIERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyA9IGFkZFRvU2V0KHt9LCBbJ2FsdCcsICdjbGFzcycsICdmb3InLCAnaWQnLCAnbGFiZWwnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JvbGUnLCAnc3VtbWFyeScsICd0aXRsZScsICd2YWx1ZScsICdzdHlsZScsICd4bWxucyddKTtcbiAgdmFyIE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gIHZhciBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgdmFyIEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cblxuICB2YXIgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gIHZhciBJU19FTVBUWV9JTlBVVCA9IGZhbHNlO1xuICAvKiBQYXJzaW5nIG9mIHN0cmljdCBYSFRNTCBkb2N1bWVudHMgKi9cblxuICB2YXIgUEFSU0VSX01FRElBX1RZUEU7XG4gIHZhciBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTID0gWydhcHBsaWNhdGlvbi94aHRtbCt4bWwnLCAndGV4dC9odG1sJ107XG4gIHZhciBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFID0gJ3RleHQvaHRtbCc7XG4gIHZhciB0cmFuc2Zvcm1DYXNlRnVuYztcbiAgLyogS2VlcCBhIHJlZmVyZW5jZSB0byBjb25maWcgdG8gcGFzcyB0byBob29rcyAqL1xuXG4gIHZhciBDT05GSUcgPSBudWxsO1xuICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG5cbiAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gIHZhciBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICB2YXIgaXNSZWdleE9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc1JlZ2V4T3JGdW5jdGlvbih0ZXN0VmFsdWUpIHtcbiAgICByZXR1cm4gdGVzdFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHRlc3RWYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9O1xuICAvKipcbiAgICogX3BhcnNlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5cbiAgdmFyIF9wYXJzZUNvbmZpZyA9IGZ1bmN0aW9uIF9wYXJzZUNvbmZpZyhjZmcpIHtcbiAgICBpZiAoQ09ORklHICYmIENPTkZJRyA9PT0gY2ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuXG5cbiAgICBpZiAoIWNmZyB8fCBfdHlwZW9mKGNmZykgIT09ICdvYmplY3QnKSB7XG4gICAgICBjZmcgPSB7fTtcbiAgICB9XG4gICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gcHJvdG90eXBlIHBvbGx1dGlvbiAqL1xuXG5cbiAgICBjZmcgPSBjbG9uZShjZmcpO1xuICAgIC8qIFNldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cblxuICAgIEFMTE9XRURfVEFHUyA9ICdBTExPV0VEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9UQUdTKSA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSKSA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgIFVSSV9TQUZFX0FUVFJJQlVURVMgPSAnQUREX1VSSV9TQUZFX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyksIGNmZy5BRERfVVJJX1NBRkVfQVRUUikgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgREFUQV9VUklfVEFHUyA9ICdBRERfREFUQV9VUklfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9EQVRBX1VSSV9UQUdTKSwgY2ZnLkFERF9EQVRBX1VSSV9UQUdTKSA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcbiAgICBGT1JCSURfQ09OVEVOVFMgPSAnRk9SQklEX0NPTlRFTlRTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9DT05URU5UUykgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICBGT1JCSURfVEFHUyA9ICdGT1JCSURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUykgOiB7fTtcbiAgICBGT1JCSURfQVRUUiA9ICdGT1JCSURfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQVRUUikgOiB7fTtcbiAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgQUxMT1dfREFUQV9BVFRSID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBjZmcuQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGNmZy5TQUZFX0ZPUl9URU1QTEFURVMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICBSRVRVUk5fRE9NID0gY2ZnLlJFVFVSTl9ET00gfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgIFJFVFVSTl9ET01fRlJBR01FTlQgPSBjZmcuUkVUVVJOX0RPTV9GUkFHTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgIFNBTklUSVpFX0RPTSA9IGNmZy5TQU5JVElaRV9ET00gIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICBJU19BTExPV0VEX1VSSSQxID0gY2ZnLkFMTE9XRURfVVJJX1JFR0VYUCB8fCBJU19BTExPV0VEX1VSSSQxO1xuICAgIE5BTUVTUEFDRSA9IGNmZy5OQU1FU1BBQ0UgfHwgSFRNTF9OQU1FU1BBQ0U7XG5cbiAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrO1xuICAgIH1cblxuICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaykpIHtcbiAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2s7XG4gICAgfVxuXG4gICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiB0eXBlb2YgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzO1xuICAgIH1cblxuICAgIFBBUlNFUl9NRURJQV9UWVBFID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xID8gUEFSU0VSX01FRElBX1RZUEUgPSBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFIDogUEFSU0VSX01FRElBX1RZUEUgPSBjZmcuUEFSU0VSX01FRElBX1RZUEU7IC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cblxuICAgIHRyYW5zZm9ybUNhc2VGdW5jID0gUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH0gOiBzdHJpbmdUb0xvd2VyQ2FzZTtcblxuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcbiAgICB9XG4gICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG5cblxuICAgIGlmIChVU0VfUFJPRklMRVMpIHtcbiAgICAgIEFMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBfdG9Db25zdW1hYmxlQXJyYXkodGV4dCkpO1xuICAgICAgQUxMT1dFRF9BVFRSID0gW107XG5cbiAgICAgIGlmIChVU0VfUFJPRklMRVMuaHRtbCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGh0bWwkMSk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgaHRtbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnJDEpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmdGaWx0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLm1hdGhNbCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIG1hdGhNbCQxKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBtYXRoTWwpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuXG5cbiAgICBpZiAoY2ZnLkFERF9UQUdTKSB7XG4gICAgICBpZiAoQUxMT1dFRF9UQUdTID09PSBERUZBVUxUX0FMTE9XRURfVEFHUykge1xuICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgfVxuXG4gICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGNmZy5BRERfVEFHUyk7XG4gICAgfVxuXG4gICAgaWYgKGNmZy5BRERfQVRUUikge1xuICAgICAgaWYgKEFMTE9XRURfQVRUUiA9PT0gREVGQVVMVF9BTExPV0VEX0FUVFIpIHtcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIpO1xuICAgIH1cblxuICAgIGlmIChjZmcuQUREX1VSSV9TQUZFX0FUVFIpIHtcbiAgICAgIGFkZFRvU2V0KFVSSV9TQUZFX0FUVFJJQlVURVMsIGNmZy5BRERfVVJJX1NBRkVfQVRUUik7XG4gICAgfVxuXG4gICAgaWYgKGNmZy5GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgIGlmIChGT1JCSURfQ09OVEVOVFMgPT09IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgIEZPUkJJRF9DT05URU5UUyA9IGNsb25lKEZPUkJJRF9DT05URU5UUyk7XG4gICAgICB9XG5cbiAgICAgIGFkZFRvU2V0KEZPUkJJRF9DT05URU5UUywgY2ZnLkZPUkJJRF9DT05URU5UUyk7XG4gICAgfVxuICAgIC8qIEFkZCAjdGV4dCBpbiBjYXNlIEtFRVBfQ09OVEVOVCBpcyBzZXQgdG8gdHJ1ZSAqL1xuXG5cbiAgICBpZiAoS0VFUF9DT05URU5UKSB7XG4gICAgICBBTExPV0VEX1RBR1NbJyN0ZXh0J10gPSB0cnVlO1xuICAgIH1cbiAgICAvKiBBZGQgaHRtbCwgaGVhZCBhbmQgYm9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSBXSE9MRV9ET0NVTUVOVCBpcyB0cnVlICovXG5cblxuICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ2h0bWwnLCAnaGVhZCcsICdib2R5J10pO1xuICAgIH1cbiAgICAvKiBBZGQgdGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgdGFibGVzIGFyZSBwZXJtaXR0ZWQsIHNlZSAjMjg2LCAjMzY1ICovXG5cblxuICAgIGlmIChBTExPV0VEX1RBR1MudGFibGUpIHtcbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWyd0Ym9keSddKTtcbiAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICB9IC8vIFByZXZlbnQgZnVydGhlciBtYW5pcHVsYXRpb24gb2YgY29uZmlndXJhdGlvbi5cbiAgICAvLyBOb3QgYXZhaWxhYmxlIGluIElFOCwgU2FmYXJpIDUsIGV0Yy5cblxuXG4gICAgaWYgKGZyZWV6ZSkge1xuICAgICAgZnJlZXplKGNmZyk7XG4gICAgfVxuXG4gICAgQ09ORklHID0gY2ZnO1xuICB9O1xuXG4gIHZhciBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydtaScsICdtbycsICdtbicsICdtcycsICdtdGV4dCddKTtcbiAgdmFyIEhUTUxfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnZm9yZWlnbm9iamVjdCcsICdkZXNjJywgJ3RpdGxlJywgJ2Fubm90YXRpb24teG1sJ10pOyAvLyBDZXJ0YWluIGVsZW1lbnRzIGFyZSBhbGxvd2VkIGluIGJvdGggU1ZHIGFuZCBIVE1MXG4gIC8vIG5hbWVzcGFjZS4gV2UgbmVlZCB0byBzcGVjaWZ5IHRoZW0gZXhwbGljaXRseVxuICAvLyBzbyB0aGF0IHRoZXkgZG9uJ3QgZ2V0IGVycm9uZW91c2x5IGRlbGV0ZWQgZnJvbVxuICAvLyBIVE1MIG5hbWVzcGFjZS5cblxuICB2YXIgQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UUyA9IGFkZFRvU2V0KHt9LCBbJ3RpdGxlJywgJ3N0eWxlJywgJ2ZvbnQnLCAnYScsICdzY3JpcHQnXSk7XG4gIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICogc28gdGhhdCB3ZSBjYW4gcGVyZm9ybSB0aGUgbmFtZXNwYWNlIGNoZWNrc1xuICAgKiBjb3JyZWN0bHkuICovXG5cbiAgdmFyIEFMTF9TVkdfVEFHUyA9IGFkZFRvU2V0KHt9LCBzdmckMSk7XG4gIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRmlsdGVycyk7XG4gIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRGlzYWxsb3dlZCk7XG4gIHZhciBBTExfTUFUSE1MX1RBR1MgPSBhZGRUb1NldCh7fSwgbWF0aE1sJDEpO1xuICBhZGRUb1NldChBTExfTUFUSE1MX1RBR1MsIG1hdGhNbERpc2FsbG93ZWQpO1xuICAvKipcbiAgICpcbiAgICpcbiAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCBhIERPTSBlbGVtZW50IHdob3NlIG5hbWVzcGFjZSBpcyBiZWluZyBjaGVja2VkXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm4gZmFsc2UgaWYgdGhlIGVsZW1lbnQgaGFzIGFcbiAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAqICByZXR1cm4uIFJldHVybiB0cnVlIG90aGVyd2lzZS5cbiAgICovXG5cbiAgdmFyIF9jaGVja1ZhbGlkTmFtZXNwYWNlID0gZnVuY3Rpb24gX2NoZWNrVmFsaWROYW1lc3BhY2UoZWxlbWVudCkge1xuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpOyAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgIC8vIGNhbiBiZSBudWxsLiBXZSBqdXN0IHNpbXVsYXRlIHBhcmVudCBpbiB0aGlzIGNhc2UuXG5cbiAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnRhZ05hbWUpIHtcbiAgICAgIHBhcmVudCA9IHtcbiAgICAgICAgbmFtZXNwYWNlVVJJOiBIVE1MX05BTUVTUEFDRSxcbiAgICAgICAgdGFnTmFtZTogJ3RlbXBsYXRlJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XG4gICAgdmFyIHBhcmVudFRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShwYXJlbnQudGFnTmFtZSk7XG5cbiAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBTVkdcbiAgICAgIC8vIGlzIHZpYSA8c3ZnPi4gSWYgaXQgaGFwcGVucyB2aWEgYW55IG90aGVyIHRhZywgdGhlblxuICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2Zyc7XG4gICAgICB9IC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBNYXRoTUwgdG8gU1ZHIGlzIHZpYVxuICAgICAgLy8gc3ZnIGlmIHBhcmVudCBpcyBlaXRoZXIgPGFubm90YXRpb24teG1sPiBvciBNYXRoTUxcbiAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuXG5cbiAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgfSAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gU1ZHXG4gICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG5cblxuICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBNYXRoTUxcbiAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgIH0gLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBNYXRoTUwgaXMgdmlhXG4gICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG5cblxuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgIH0gLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIE1hdGhNTFxuICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuXG5cbiAgICAgIHJldHVybiBCb29sZWFuKEFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBIVE1MIGlzIHZpYVxuICAgICAgLy8gSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHMsIGFuZCBmcm9tIE1hdGhNTCB0byBIVE1MXG4gICAgICAvLyBpcyB2aWEgTWF0aE1MIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJiAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJiAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gV2UgZGlzYWxsb3cgdGFncyB0aGF0IGFyZSBzcGVjaWZpYyBmb3IgTWF0aE1MXG4gICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcblxuXG4gICAgICByZXR1cm4gIUFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSAmJiAoQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UU1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICB9IC8vIFRoZSBjb2RlIHNob3VsZCBuZXZlciByZWFjaCB0aGlzIHBsYWNlICh0aGlzIG1lYW5zXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBzb21laG93IGdvdCBuYW1lc3BhY2UgdGhhdCBpcyBub3RcbiAgICAvLyBIVE1MLCBTVkcgb3IgTWF0aE1MKS4gUmV0dXJuIGZhbHNlIGp1c3QgaW4gY2FzZS5cblxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICAvKipcbiAgICogX2ZvcmNlUmVtb3ZlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cblxuXG4gIHZhciBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbiBfZm9yY2VSZW1vdmUobm9kZSkge1xuICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgZWxlbWVudDogbm9kZVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1yZW1vdmVcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICB0cnkge1xuICAgICAgICBub2RlLm91dGVySFRNTCA9IGVtcHR5SFRNTDtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBfcmVtb3ZlQXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICovXG5cblxuICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgIHRyeSB7XG4gICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgIGZyb206IG5vZGVcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgIGZyb206IG5vZGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyAvLyBXZSB2b2lkIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIHVucmVtb3ZhYmxlIFwiaXNcIlwiIGF0dHJpYnV0ZXNcblxuICAgIGlmIChuYW1lID09PSAnaXMnICYmICFBTExPV0VEX0FUVFJbbmFtZV0pIHtcbiAgICAgIGlmIChSRVRVUk5fRE9NIHx8IFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfZm9yY2VSZW1vdmUobm9kZSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBfaW5pdERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZGlydHkgYSBzdHJpbmcgb2YgZGlydHkgbWFya3VwXG4gICAqIEByZXR1cm4ge0RvY3VtZW50fSBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgKi9cblxuXG4gIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICB2YXIgZG9jO1xuICAgIHZhciBsZWFkaW5nV2hpdGVzcGFjZTtcblxuICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICB2YXIgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcbiAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcpIHtcbiAgICAgIC8vIFJvb3Qgb2YgWEhUTUwgZG9jIG11c3QgY29udGFpbiB4bWxucyBkZWNsYXJhdGlvbiAoc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvbm9ybWF0aXZlLmh0bWwjc3RyaWN0KVxuICAgICAgZGlydHkgPSAnPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+PGhlYWQ+PC9oZWFkPjxib2R5PicgKyBkaXJ0eSArICc8L2JvZHk+PC9odG1sPic7XG4gICAgfVxuXG4gICAgdmFyIGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgIC8qXG4gICAgICogVXNlIHRoZSBET01QYXJzZXIgQVBJIGJ5IGRlZmF1bHQsIGZhbGxiYWNrIGxhdGVyIGlmIG5lZWRzIGJlXG4gICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAqL1xuXG4gICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH1cbiAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cblxuXG4gICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KE5BTUVTUEFDRSwgJ3RlbXBsYXRlJywgbnVsbCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MID0gSVNfRU1QVFlfSU5QVVQgPyAnJyA6IGRpcnR5UGF5bG9hZDtcbiAgICAgIH0gY2F0Y2ggKF8pIHsvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keSB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKGRpcnR5ICYmIGxlYWRpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICBib2R5Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWFkaW5nV2hpdGVzcGFjZSksIGJvZHkuY2hpbGROb2Rlc1swXSB8fCBudWxsKTtcbiAgICB9XG4gICAgLyogV29yayBvbiB3aG9sZSBkb2N1bWVudCBvciBqdXN0IGl0cyBib2R5ICovXG5cblxuICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChkb2MsIFdIT0xFX0RPQ1VNRU5UID8gJ2h0bWwnIDogJ2JvZHknKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBkb2MuZG9jdW1lbnRFbGVtZW50IDogYm9keTtcbiAgfTtcbiAgLyoqXG4gICAqIF9jcmVhdGVJdGVyYXRvclxuICAgKlxuICAgKiBAcGFyYW0gIHtEb2N1bWVudH0gcm9vdCBkb2N1bWVudC9mcmFnbWVudCB0byBjcmVhdGUgaXRlcmF0b3IgZm9yXG4gICAqIEByZXR1cm4ge0l0ZXJhdG9yfSBpdGVyYXRvciBpbnN0YW5jZVxuICAgKi9cblxuXG4gIHZhciBfY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbiBfY3JlYXRlSXRlcmF0b3Iocm9vdCkge1xuICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKTtcbiAgfTtcbiAgLyoqXG4gICAqIF9pc0Nsb2JiZXJlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBlbG0gZWxlbWVudCB0byBjaGVjayBmb3IgY2xvYmJlcmluZyBhdHRhY2tzXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAqL1xuXG5cbiAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICByZXR1cm4gZWxtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICYmICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0ubmFtZXNwYWNlVVJJICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLmluc2VydEJlZm9yZSAhPT0gJ2Z1bmN0aW9uJyk7XG4gIH07XG4gIC8qKlxuICAgKiBfaXNOb2RlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IG9iaiBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyBvYmplY3QgaXMgYSBET00gbm9kZVxuICAgKi9cblxuXG4gIHZhciBfaXNOb2RlID0gZnVuY3Rpb24gX2lzTm9kZShvYmplY3QpIHtcbiAgICByZXR1cm4gX3R5cGVvZihOb2RlKSA9PT0gJ29iamVjdCcgPyBvYmplY3QgaW5zdGFuY2VvZiBOb2RlIDogb2JqZWN0ICYmIF90eXBlb2Yob2JqZWN0KSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iamVjdC5ub2RlVHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIG9iamVjdC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gIH07XG4gIC8qKlxuICAgKiBfZXhlY3V0ZUhvb2tcbiAgICogRXhlY3V0ZSB1c2VyIGNvbmZpZ3VyYWJsZSBob29rc1xuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSBub2RlIHRvIHdvcmsgb24gd2l0aCB0aGUgaG9va1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgYWRkaXRpb25hbCBob29rIHBhcmFtZXRlcnNcbiAgICovXG5cblxuICB2YXIgX2V4ZWN1dGVIb29rID0gZnVuY3Rpb24gX2V4ZWN1dGVIb29rKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICpcbiAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICogQHByb3RlY3QgcmVtb3ZlQ2hpbGRcbiAgICpcbiAgICogQHBhcmFtICAge05vZGV9IGN1cnJlbnROb2RlIHRvIGNoZWNrIGZvciBwZXJtaXNzaW9uIHRvIGV4aXN0XG4gICAqIEByZXR1cm4gIHtCb29sZWFufSB0cnVlIGlmIG5vZGUgd2FzIGtpbGxlZCwgZmFsc2UgaWYgbGVmdCBhbGl2ZVxuICAgKi9cblxuXG4gIHZhciBfc2FuaXRpemVFbGVtZW50cyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSB7XG4gICAgdmFyIGNvbnRlbnQ7XG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG5cblxuICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyogQ2hlY2sgaWYgdGFnbmFtZSBjb250YWlucyBVbmljb2RlICovXG5cblxuICAgIGlmIChyZWdFeHBUZXN0KC9bXFx1MDA4MC1cXHVGRkZGXS8sIGN1cnJlbnROb2RlLm5vZGVOYW1lKSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qIE5vdyBsZXQncyBjaGVjayB0aGUgZWxlbWVudCdzIHR5cGUgYW5kIG5hbWUgKi9cblxuXG4gICAgdmFyIHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTXG4gICAgfSk7XG4gICAgLyogRGV0ZWN0IG1YU1MgYXR0ZW1wdHMgYWJ1c2luZyBuYW1lc3BhY2UgY29uZnVzaW9uICovXG5cblxuICAgIGlmIChjdXJyZW50Tm9kZS5oYXNDaGlsZE5vZGVzKCkgJiYgIV9pc05vZGUoY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpICYmICghX2lzTm9kZShjdXJyZW50Tm9kZS5jb250ZW50KSB8fCAhX2lzTm9kZShjdXJyZW50Tm9kZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSkgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyogTWl0aWdhdGUgYSBwcm9ibGVtIHdpdGggdGVtcGxhdGVzIGluc2lkZSBzZWxlY3QgKi9cblxuXG4gICAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnICYmIHJlZ0V4cFRlc3QoLzx0ZW1wbGF0ZS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cblxuXG4gICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYSBjdXN0b20gZWxlbWVudCB0byBoYW5kbGUgKi9cbiAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh0YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQgJiYgIUZPUkJJRF9DT05URU5UU1t0YWdOYW1lXSkge1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICBpZiAoY2hpbGROb2RlcyAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkQ291bnQgPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lTm9kZShjaGlsZE5vZGVzW2ldLCB0cnVlKSwgZ2V0TmV4dFNpYmxpbmcoY3VycmVudE5vZGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qIENoZWNrIHdoZXRoZXIgZWxlbWVudCBoYXMgYSB2YWxpZCBuYW1lc3BhY2UgKi9cblxuXG4gICAgaWYgKGN1cnJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiAhX2NoZWNrVmFsaWROYW1lc3BhY2UoY3VycmVudE5vZGUpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoKHRhZ05hbWUgPT09ICdub3NjcmlwdCcgfHwgdGFnTmFtZSA9PT0gJ25vZW1iZWQnKSAmJiByZWdFeHBUZXN0KC88XFwvbm8oc2NyaXB0fGVtYmVkKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cblxuXG4gICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUyAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgLyogR2V0IHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50ICovXG4gICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBNVVNUQUNIRV9FWFBSJDEsICcgJyk7XG4gICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBFUkJfRVhQUiQxLCAnICcpO1xuXG4gICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKClcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG5cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgLyoqXG4gICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbGNUYWcgTG93ZXJjYXNlIHRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICB2YXIgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgIC8qIE1ha2Ugc3VyZSBhdHRyaWJ1dGUgY2Fubm90IGNsb2JiZXIgKi9cbiAgICBpZiAoU0FOSVRJWkVfRE9NICYmIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpICYmICh2YWx1ZSBpbiBkb2N1bWVudCB8fCB2YWx1ZSBpbiBmb3JtRWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyogQWxsb3cgdmFsaWQgZGF0YS0qIGF0dHJpYnV0ZXM6IEF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYWZ0ZXIgXCItXCJcbiAgICAgICAgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI2VtYmVkZGluZy1jdXN0b20tbm9uLXZpc2libGUtZGF0YS13aXRoLXRoZS1kYXRhLSotYXR0cmlidXRlcylcbiAgICAgICAgWE1MLWNvbXBhdGlibGUgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjeG1sLWNvbXBhdGlibGUgYW5kIGh0dHA6Ly93d3cudzMub3JnL1RSL3htbC8jZDBlODA0KVxuICAgICAgICBXZSBkb24ndCBuZWVkIHRvIGNoZWNrIHRoZSB2YWx1ZTsgaXQncyBhbHdheXMgVVJJIHNhZmUuICovXG5cblxuICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgIUZPUkJJRF9BVFRSW2xjTmFtZV0gJiYgcmVnRXhwVGVzdChEQVRBX0FUVFIkMSwgbGNOYW1lKSkgOyBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIkMSwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgaWYgKCAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgLy8gYikgaWYgdGhlIHRhZ05hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KGxjVGFnKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCBsY1RhZykgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKGxjVGFnKSkgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaywgbGNOYW1lKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sobGNOYW1lKSkgfHwgLy8gQWx0ZXJuYXRpdmUsIHNlY29uZCBjb25kaXRpb24gY2hlY2tzIGlmIGl0J3MgYW4gYGlzYC1hdHRyaWJ1dGUsIEFORFxuICAgICAgLy8gdGhlIHZhbHVlIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICBsY05hbWUgPT09ICdpcycgJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHZhbHVlKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodmFsdWUpKSkgOyBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG5cbiAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJDEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSQxLCAnJykpKSA7IGVsc2UgaWYgKChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJiBsY1RhZyAhPT0gJ3NjcmlwdCcgJiYgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIDsgZWxzZSBpZiAoQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgJiYgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJDEsICcnKSkpIDsgZWxzZSBpZiAoIXZhbHVlKSA7IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogX2Jhc2ljQ3VzdG9tRWxlbWVudENoZWNrXG4gICAqIGNoZWNrcyBpZiBhdCBsZWFzdCBvbmUgZGFzaCBpcyBpbmNsdWRlZCBpbiB0YWdOYW1lLCBhbmQgaXQncyBub3QgdGhlIGZpcnN0IGNoYXJcbiAgICogZm9yIG1vcmUgc29waGlzdGljYXRlZCBjaGVja2luZyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy92YWxpZGF0ZS1lbGVtZW50LW5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAqL1xuXG5cbiAgdmFyIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0ID0gZnVuY3Rpb24gX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkge1xuICAgIHJldHVybiB0YWdOYW1lLmluZGV4T2YoJy0nKSA+IDA7XG4gIH07XG4gIC8qKlxuICAgKiBfc2FuaXRpemVBdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0IGF0dHJpYnV0ZXNcbiAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAqIEBwcm90ZWN0IHNldEF0dHJpYnV0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgKi9cblxuXG4gIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSkge1xuICAgIHZhciBhdHRyO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgbGNOYW1lO1xuICAgIHZhciBsO1xuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYXR0cmlidXRlczsgaWYgbm90IHdlIG1pZ2h0IGhhdmUgYSB0ZXh0IG5vZGUgKi9cblxuICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICBhdHRyTmFtZTogJycsXG4gICAgICBhdHRyVmFsdWU6ICcnLFxuICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgfTtcbiAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG4gICAgLyogR28gYmFja3dhcmRzIG92ZXIgYWxsIGF0dHJpYnV0ZXM7IHNhZmVseSByZW1vdmUgYmFkIG9uZXMgKi9cblxuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgdmFyIF9hdHRyID0gYXR0cixcbiAgICAgICAgICBuYW1lID0gX2F0dHIubmFtZSxcbiAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICB2YWx1ZSA9IG5hbWUgPT09ICd2YWx1ZScgPyBhdHRyLnZhbHVlIDogc3RyaW5nVHJpbShhdHRyLnZhbHVlKTtcbiAgICAgIGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKG5hbWUpO1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XG4gICAgICBob29rRXZlbnQuYXR0clZhbHVlID0gdmFsdWU7XG4gICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIgPSB1bmRlZmluZWQ7IC8vIEFsbG93cyBkZXZlbG9wZXJzIHRvIHNlZSB0aGlzIGlzIGEgcHJvcGVydHkgdGhleSBjYW4gc2V0XG5cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplQXR0cmlidXRlJywgY3VycmVudE5vZGUsIGhvb2tFdmVudCk7XG5cbiAgICAgIHZhbHVlID0gaG9va0V2ZW50LmF0dHJWYWx1ZTtcbiAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuXG4gICAgICBpZiAoaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG5cblxuICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cblxuXG4gICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8qIFdvcmsgYXJvdW5kIGEgc2VjdXJpdHkgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuXG5cbiAgICAgIGlmIChyZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8qIFNhbml0aXplIGF0dHJpYnV0ZSBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cblxuXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIEVSQl9FWFBSJDEsICcgJyk7XG4gICAgICB9XG4gICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cblxuXG4gICAgICB2YXIgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAgIGlmICghX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG5cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH1cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gIH07XG4gIC8qKlxuICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICpcbiAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAqL1xuXG5cbiAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgIHZhciBzaGFkb3dOb2RlO1xuXG4gICAgdmFyIHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG5cbiAgICB3aGlsZSAoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplU2hhZG93Tm9kZScsIHNoYWRvd05vZGUsIG51bGwpO1xuICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cblxuXG4gICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cblxuXG4gICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oc2hhZG93Tm9kZS5jb250ZW50KTtcbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuXG5cbiAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgfVxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuICB9O1xuICAvKipcbiAgICogU2FuaXRpemVcbiAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblxuXG4gIERPTVB1cmlmeS5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChkaXJ0eSwgY2ZnKSB7XG4gICAgdmFyIGJvZHk7XG4gICAgdmFyIGltcG9ydGVkTm9kZTtcbiAgICB2YXIgY3VycmVudE5vZGU7XG4gICAgdmFyIG9sZE5vZGU7XG4gICAgdmFyIHJldHVybk5vZGU7XG4gICAgLyogTWFrZSBzdXJlIHdlIGhhdmUgYSBzdHJpbmcgdG8gc2FuaXRpemUuXG4gICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICB0aGUgdXNlciBoYXMgcmVxdWVzdGVkIGEgRE9NIG9iamVjdCByYXRoZXIgdGhhbiBhIHN0cmluZyAqL1xuXG4gICAgSVNfRU1QVFlfSU5QVVQgPSAhZGlydHk7XG5cbiAgICBpZiAoSVNfRU1QVFlfSU5QVVQpIHtcbiAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICB9XG4gICAgLyogU3RyaW5naWZ5LCBpbiBjYXNlIGRpcnR5IGlzIGFuIG9iamVjdCAqL1xuXG5cbiAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJyAmJiAhX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICAgICAgaWYgKHR5cGVvZiBkaXJ0eS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3RvU3RyaW5nIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuXG5cbiAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkub3V0ZXJIVE1MKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuICAgIC8qIEFzc2lnbiBjb25maWcgdmFycyAqL1xuXG5cbiAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgIH1cbiAgICAvKiBDbGVhbiB1cCByZW1vdmVkIGVsZW1lbnRzICovXG5cblxuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG4gICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuXG4gICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIElOX1BMQUNFID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAvKiBEbyBzb21lIGVhcmx5IHByZS1zYW5pdGl6YXRpb24gdG8gYXZvaWQgdW5zYWZlIHJvb3Qgbm9kZXMgKi9cbiAgICAgIGlmIChkaXJ0eS5ub2RlTmFtZSkge1xuICAgICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgncm9vdCBub2RlIGlzIGZvcmJpZGRlbiBhbmQgY2Fubm90IGJlIHNhbml0aXplZCBpbi1wbGFjZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0tLT4nKTtcbiAgICAgIGltcG9ydGVkTm9kZSA9IGJvZHkub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKGRpcnR5LCB0cnVlKTtcblxuICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgIH0gZWxzZSBpZiAoaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgaWYgKCFSRVRVUk5fRE9NICYmICFTQUZFX0ZPUl9URU1QTEFURVMgJiYgIVdIT0xFX0RPQ1VNRU5UICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgZGlydHkuaW5kZXhPZignPCcpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgIH1cbiAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cblxuXG4gICAgICBib2R5ID0gX2luaXREb2N1bWVudChkaXJ0eSk7XG4gICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuXG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogUkVUVVJOX1RSVVNURURfVFlQRSA/IGVtcHR5SFRNTCA6ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBSZW1vdmUgZmlyc3QgZWxlbWVudCBub2RlIChvdXJzKSBpZiBGT1JDRV9CT0RZIGlzIHNldCAqL1xuXG5cbiAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cblxuXG4gICAgdmFyIG5vZGVJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihJTl9QTEFDRSA/IGRpcnR5IDogYm9keSk7XG4gICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG5cblxuICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAvKiBGaXggSUUncyBzdHJhbmdlIGJlaGF2aW9yIHdpdGggbWFuaXB1bGF0ZWQgdGV4dE5vZGVzICM4OSAqL1xuICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzICYmIGN1cnJlbnROb2RlID09PSBvbGROb2RlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cblxuXG4gICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cblxuXG4gICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG5cblxuICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG5cbiAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBvbGROb2RlID0gbnVsbDtcbiAgICAvKiBJZiB3ZSBzYW5pdGl6ZWQgYGRpcnR5YCBpbi1wbGFjZSwgcmV0dXJuIGl0LiAqL1xuXG4gICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xuXG5cbiAgICBpZiAoUkVUVVJOX0RPTSkge1xuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFMTE9XRURfQVRUUi5zaGFkb3dyb290KSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAoZS5nLiB0aGUgcGFzdCBuYW1lcyBtYXAgb2YgYSBIVE1MRm9ybUVsZW1lbnQpLCB0aGlzIGlzIHNhZmVcbiAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICBieSB0aGUgc3BlY3MuXG4gICAgICAgICovXG4gICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXR1cm5Ob2RlO1xuICAgIH1cblxuICAgIHZhciBzZXJpYWxpemVkSFRNTCA9IFdIT0xFX0RPQ1VNRU5UID8gYm9keS5vdXRlckhUTUwgOiBib2R5LmlubmVySFRNTDtcbiAgICAvKiBTZXJpYWxpemUgZG9jdHlwZSBpZiBhbGxvd2VkICovXG5cbiAgICBpZiAoV0hPTEVfRE9DVU1FTlQgJiYgQUxMT1dFRF9UQUdTWychZG9jdHlwZSddICYmIGJvZHkub3duZXJEb2N1bWVudCAmJiBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZSAmJiBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICYmIHJlZ0V4cFRlc3QoRE9DVFlQRV9OQU1FLCBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lKSkge1xuICAgICAgc2VyaWFsaXplZEhUTUwgPSAnPCFET0NUWVBFICcgKyBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICsgJz5cXG4nICsgc2VyaWFsaXplZEhUTUw7XG4gICAgfVxuICAgIC8qIFNhbml0aXplIGZpbmFsIHN0cmluZyB0ZW1wbGF0ZS1zYWZlICovXG5cblxuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBFUkJfRVhQUiQxLCAnICcpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHNlcmlhbGl6ZWRIVE1MKSA6IHNlcmlhbGl6ZWRIVE1MO1xuICB9O1xuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byBzZXQgdGhlIGNvbmZpZ3VyYXRpb24gb25jZVxuICAgKiBzZXRDb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZyBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cblxuXG4gIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgX3BhcnNlQ29uZmlnKGNmZyk7XG5cbiAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAqIGNsZWFyQ29uZmlnXG4gICAqXG4gICAqL1xuXG5cbiAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgIENPTkZJRyA9IG51bGw7XG4gICAgU0VUX0NPTkZJRyA9IGZhbHNlO1xuICB9O1xuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAqIGlzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dHIgQXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgKi9cblxuXG4gIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAvKiBJbml0aWFsaXplIHNoYXJlZCBjb25maWcgdmFycyBpZiBuZWNlc3NhcnkuICovXG4gICAgaWYgKCFDT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgfVxuXG4gICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmModGFnKTtcbiAgICB2YXIgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoYXR0cik7XG4gICAgcmV0dXJuIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKTtcbiAgfTtcbiAgLyoqXG4gICAqIEFkZEhvb2tcbiAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICovXG5cblxuICBET01QdXJpZnkuYWRkSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50LCBob29rRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIGhvb2tGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gaG9va3NbZW50cnlQb2ludF0gfHwgW107XG4gICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICB9O1xuICAvKipcbiAgICogUmVtb3ZlSG9va1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhIERPTVB1cmlmeSBob29rIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gcmVtb3ZlXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSByZW1vdmVkKHBvcHBlZCkgaG9va1xuICAgKi9cblxuXG4gIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgIHJldHVybiBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVtb3ZlSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAqL1xuXG5cbiAgRE9NUHVyaWZ5LnJlbW92ZUhvb2tzID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gW107XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVtb3ZlQWxsSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgKlxuICAgKi9cblxuXG4gIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBob29rcyA9IHt9O1xuICB9O1xuXG4gIHJldHVybiBET01QdXJpZnk7XG59XG5cbnZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxuZXhwb3J0IHsgcHVyaWZ5IGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5lcy5qcy5tYXBcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGVudmlyb25tZW50OiAnc3RhZ2luZycsXHJcbiAgICBiYXNldXJsOiAnaHR0cHM6Ly9yb2Z1c2RlbW8uc3BpbGxlbXluZGlnaGVkZW4uZGsnLFxyXG4gICAgYmFzZXByb2plY3Q6ICduZW1sb2dpbicsXHJcbiAgICB0ZXh0dXJsRGE6ICdodHRwczovL3d3dy5zcGlsbGVteW5kaWdoZWRlbi5kay9qc29uL3JvZnVzL2Ntcz9fZm9ybWF0PWpzb24nLFxyXG4gICAgdGV4dHVybEtsOiAnaHR0cHM6Ly93d3cuc3BpbGxlbXluZGlnaGVkZW4uZGsva2wvanNvbi9yb2Z1cy9jbXM/X2Zvcm1hdD1qc29uJyxcclxufTtcclxuIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSB9IGZyb20gXCJ0c2xpYlwiO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVzLWJldHdlZW4tY2xhc3MtbWVtYmVycyAqL1xyXG5pbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSAnZG9tcHVyaWZ5JztcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanMnO1xyXG5sZXQgU3BtUm9mdXMgPSBjbGFzcyBTcG1Sb2Z1cyBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRhdGVGb3JtYXR0ZXIgPSB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGF0ZVRpbWVGb3JtYXR0ZXIgPSB7XHJcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBob3VyMTI6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50aW1lRm9ybWF0dGVyID0ge1xyXG4gICAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgaG91cjEyOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudGV4dHMgPSB7fTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBmaXJzdFVwZGF0ZWQoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSAoX2EgPSB0aGlzLmxhbmd1YWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSAnZGEnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZUNvZGUgPSAnZGEtREsnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2tsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gJ2RhLURLJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZSA9ICdkYSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlQ29kZSA9ICdkYS1ESyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkVGV4dHMoKTtcclxuICAgICAgICB0aGlzLmdldEF1dGhlbnRpY2F0ZWQoKTtcclxuICAgIH1cclxuICAgIGdldFRlc3RVc2VyKHN0YXRlKSB7XHJcbiAgICAgICAgbGV0IGZpbmFsID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGV4Y2x1c2lvbnRpbWUgPSAnMjRIJztcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ0NPTkZJUk1fUEVSTScgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9PT0gJ0NPTkZJUk1BVElPTl9QRVJNJyB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID09PSAnUkVHSVNURVJFRF9QRVJNJykge1xyXG4gICAgICAgICAgICBmaW5hbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGV4Y2x1c2lvbnRpbWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgY3ByOiAnMTIxMjEyMTExMScsXHJcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ0Jlbm55JyxcclxuICAgICAgICAgICAgbGFzdG5hbWU6ICdCaW5nbycsXHJcbiAgICAgICAgICAgIGZ1bGxuYW1lOiAnQmVubnkgQmluZ28nLFxyXG4gICAgICAgICAgICByZWdpc3RlcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZXhjbHVzaW9uZmluYWw6IGZpbmFsLFxyXG4gICAgICAgICAgICBleGNsdXNpb250aW1lb3V0OiBleGNsdXNpb250aW1lLFxyXG4gICAgICAgICAgICBleGNsdXNpb25kYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICByZW9wZW5kYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdXNlcjtcclxuICAgICAgICB0aGlzLm5leHQoc3RhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuc3RhdGV9ID09ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5hdXRoZW50aWNhdGVkKX1gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRBdXRoZW50aWNhdGVkKCkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAke0NvbmZpZy5iYXNldXJsfS8ke0NvbmZpZy5iYXNlcHJvamVjdH0vYXBpL3JvZnVzL3VzZXJgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIC8vIHR5cGVzY3JpcHQgbm90IGNvbnZlcnRpbmcgLSBXVEYgPz8/XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbmRhdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQuZXhjbHVzaW9uZGF0ZSA9IG5ldyBEYXRlKHRoaXMuYXV0aGVudGljYXRlZC5leGNsdXNpb25kYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aGVudGljYXRlZC5yZW9wZW5kYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLnJlb3BlbmRhdGUgPSBuZXcgRGF0ZSh0aGlzLmF1dGhlbnRpY2F0ZWQucmVvcGVuZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dGhlbnRpY2F0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aGVudGljYXRlZC5yZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aGVudGljYXRlZC5leGNsdXNpb25maW5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ1JFR0lTVEVSRURfUEVSTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gJ1JFR0lTVEVSRURfVEVNUCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdVTlJFR0lTVEVSRUQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXV0aGVudGljYXRlZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgbm90IGF1dGhlbnRpY2F0ZWQgLSBsb2dpbiByZXF1aXJlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7Q29uZmlnLmJhc2V1cmx9LyR7Q29uZmlnLmJhc2Vwcm9qZWN0fS9zYW1sL2xvZ291dGA7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkZWxldGVVc2VyKCkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAke0NvbmZpZy5iYXNldXJsfS8ke0NvbmZpZy5iYXNlcHJvamVjdH0vYXBpL3JvZnVzL3VzZXIvZGVsZXRlYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QXV0aGVudGljYXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7Q29uZmlnLmJhc2V1cmx9LyR7Q29uZmlnLmJhc2Vwcm9qZWN0fS9hcGkvcm9mdXMvdXNlci9yZWdpc3RlcmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogYCR7SlNPTi5zdHJpbmdpZnkodGhpcy5hdXRoZW50aWNhdGVkKX1gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgbG9hZFRleHRzKCkge1xyXG4gICAgICAgIGxldCB1cmw7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RhJzpcclxuICAgICAgICAgICAgICAgIHVybCA9IENvbmZpZy50ZXh0dXJsRGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAna2wnOlxyXG4gICAgICAgICAgICAgICAgdXJsID0gQ29uZmlnLnRleHR1cmxLbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdXJsID0gQ29uZmlnLnRleHR1cmxEYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYCR7dXJsfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRzID0gcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgdW5hYmxlIHRvIGxvYWQgdGV4dCBmaWxlczogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50VGV4dHMoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy50ZXh0cykuZmlsdGVyKHRleHQgPT4gdGV4dC5maWVsZF9yb2Z1c19jbXNfbWFjaGluZV9uYW1lID09PSAnbG9naW4nKVswXTtcclxuICAgICAgICAgICAgY2FzZSAnVU5SRUdJU1RFUkVEJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMudGV4dHMpLmZpbHRlcih0ZXh0ID0+IHRleHQuZmllbGRfcm9mdXNfY21zX21hY2hpbmVfbmFtZSA9PT0gJ3JlZ2lzdGVyJylbMF07XHJcbiAgICAgICAgICAgIGNhc2UgJ1VOUkVHSVNURVJFRF9QRVJNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMudGV4dHMpLmZpbHRlcih0ZXh0ID0+IHRleHQuZmllbGRfcm9mdXNfY21zX21hY2hpbmVfbmFtZSA9PT0gJ1JlZ2lzdGVyIHBlcm0nKVswXTtcclxuICAgICAgICAgICAgY2FzZSAnQ09ORklSTV9URU1QJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMudGV4dHMpLmZpbHRlcih0ZXh0ID0+IHRleHQuZmllbGRfcm9mdXNfY21zX21hY2hpbmVfbmFtZSA9PT0gJ2NvbmZpcm0gdGVtcCcpWzBdO1xyXG4gICAgICAgICAgICBjYXNlICdDT05GSVJNX1BFUk0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy50ZXh0cykuZmlsdGVyKHRleHQgPT4gdGV4dC5maWVsZF9yb2Z1c19jbXNfbWFjaGluZV9uYW1lID09PSAnY29uZmlybSBwZXJtJylbMF07XHJcbiAgICAgICAgICAgIGNhc2UgJ0NPTkZJUk1BVElPTl9URU1QJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMudGV4dHMpLmZpbHRlcih0ZXh0ID0+IHRleHQuZmllbGRfcm9mdXNfY21zX21hY2hpbmVfbmFtZSA9PT0gJ2NvbmZpcm1hdGlvbiB0ZW1wJylbMF07XHJcbiAgICAgICAgICAgIGNhc2UgJ0NPTkZJUk1BVElPTl9QRVJNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMudGV4dHMpLmZpbHRlcih0ZXh0ID0+IHRleHQuZmllbGRfcm9mdXNfY21zX21hY2hpbmVfbmFtZSA9PT0gJ2NvbmZpcm1hdGlvbiBwZXJtJylbMF07XHJcbiAgICAgICAgICAgIGNhc2UgJ1JFR0lTVEVSRURfVEVNUCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnRleHRzKS5maWx0ZXIodGV4dCA9PiB0ZXh0LmZpZWxkX3JvZnVzX2Ntc19tYWNoaW5lX25hbWUgPT09ICdhbHJlYWR5X3JlZ2lzdGVyZWQgdGVtcCcpWzBdO1xyXG4gICAgICAgICAgICBjYXNlICdSRUdJU1RFUkVEX1BFUk0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy50ZXh0cykuZmlsdGVyKHRleHQgPT4gdGV4dC5maWVsZF9yb2Z1c19jbXNfbWFjaGluZV9uYW1lID09PSAnYWxyZWFkeV9yZWdpc3RlcmVkIHBlcm0nKVswXTtcclxuICAgICAgICAgICAgY2FzZSAnUkVRVUVTVERFTEVURSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnRleHRzKS5maWx0ZXIodGV4dCA9PiB0ZXh0LmZpZWxkX3JvZnVzX2Ntc19tYWNoaW5lX25hbWUgPT09ICdyZXF1ZXN0X2RlbGV0ZScpWzBdO1xyXG4gICAgICAgICAgICBjYXNlICdSRVFVRVNUREVMRVRFQ09ORklSTSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnRleHRzKS5maWx0ZXIodGV4dCA9PiB0ZXh0LmZpZWxkX3JvZnVzX2Ntc19tYWNoaW5lX25hbWUgPT09ICdyZXF1ZXN0X2RlbGV0ZV9jb25maXJtJylbMF07XHJcbiAgICAgICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnRleHRzKS5maWx0ZXIodGV4dCA9PiB0ZXh0LmZpZWxkX3JvZnVzX2Ntc19tYWNoaW5lX25hbWUgPT09ICdEZWxldGUnKVswXTtcclxuICAgICAgICAgICAgY2FzZSAnREVMRVRFQ09ORklSTSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnRleHRzKS5maWx0ZXIodGV4dCA9PiB0ZXh0LmZpZWxkX3JvZnVzX2Ntc19tYWNoaW5lX25hbWUgPT09ICdkZWxldGVfY29uZmlybScpWzBdO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFRleHQodmFsdWUpIHtcclxuICAgICAgICBjb25zdCB0ZXh0cyA9IHRoaXMuZ2V0Q3VycmVudFRleHRzKCk7XHJcbiAgICAgICAgbGV0IHRleHRFbnRyeTtcclxuICAgICAgICBpZiAodGV4dHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0ZXh0RW50cnkgPSBPYmplY3QuZW50cmllcyh0ZXh0cykuZmlsdGVyKGVudHJ5ID0+IGVudHJ5WzBdID09PSB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ZXh0RW50cnkgPT09IHVuZGVmaW5lZCB8fCB0ZXh0RW50cnkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERPTVB1cmlmeS5zYW5pdGl6ZSh0aGlzLnJlcGxhY2VUZXh0VmFyaWFibGVzKHRleHRFbnRyeVswXVsxXSkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICByZXBsYWNlVGV4dFZhcmlhYmxlcyh0ZXh0KSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCd7bmFtZX0nKSB8fCB0ZXh0LmluY2x1ZGVzKCd7Y3ByfScpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKCd7bmFtZX0nLCAoX2EgPSB0aGlzLmF1dGhlbnRpY2F0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mdWxsbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZUFsbCgne2Nwcn0nLCAoX2IgPSB0aGlzLmF1dGhlbnRpY2F0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jcHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCd7cmVvcGVufScpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlQWxsKCd7cmVvcGVufScsIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubGFuZ3VhZ2VDb2RlLCB0aGlzLmRhdGVGb3JtYXR0ZXIpLmZvcm1hdCh0aGlzLmF1dGhlbnRpY2F0ZWQucmVvcGVuZGF0ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCd7cmVnaXN0ZXJlZF9mcm9tX2RhdGV9JykpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tyZWdpc3RlcmVkX2Zyb21fZGF0ZX0nLCBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmxhbmd1YWdlQ29kZSwgdGhpcy5kYXRlRm9ybWF0dGVyKS5mb3JtYXQodGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbmRhdGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGV4dC5pbmNsdWRlcygne3JlZ2lzdGVyZWRfZnJvbV90aW1lfScpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCd7cmVnaXN0ZXJlZF9mcm9tX3RpbWV9JywgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sYW5ndWFnZUNvZGUsIHRoaXMudGltZUZvcm1hdHRlcikuZm9ybWF0KHRoaXMuYXV0aGVudGljYXRlZC5leGNsdXNpb25kYXRlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ3tleHBpcmF0aW9uX2RhdGV9JykpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2VBbGwoJ3tleHBpcmF0aW9uX2RhdGV9JywgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sYW5ndWFnZUNvZGUsIHRoaXMuZGF0ZUZvcm1hdHRlcikuZm9ybWF0KHRoaXMuYXV0aGVudGljYXRlZC5yZW9wZW5kYXRlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ3tleHBpcmF0aW9uX3RpbWV9JykpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2VBbGwoJ3tleHBpcmF0aW9uX3RpbWV9JywgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sYW5ndWFnZUNvZGUsIHRoaXMudGltZUZvcm1hdHRlcikuZm9ybWF0KHRoaXMuYXV0aGVudGljYXRlZC5yZW9wZW5kYXRlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgICBuZXh0KHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ0NPTkZJUk1fVEVNUCcpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQucmVvcGVuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIC8vIG1vbnRocyBzZWxlY3RlZCBpbiBkcm9wZG93blxyXG4gICAgICAgICAgICBzd2l0Y2ggKChfYSA9IHRoaXMuYXV0aGVudGljYXRlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmV4Y2x1c2lvbnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJzI0SCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLnJlb3BlbmRhdGUuc2V0RGF0ZSh0aGlzLmF1dGhlbnRpY2F0ZWQuZXhjbHVzaW9uZGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJzFNJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQucmVvcGVuZGF0ZS5zZXRNb250aCh0aGlzLmF1dGhlbnRpY2F0ZWQuZXhjbHVzaW9uZGF0ZS5nZXRNb250aCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICczTSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLnJlb3BlbmRhdGUuc2V0TW9udGgodGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbmRhdGUuZ2V0TW9udGgoKSArIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnNk0nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZC5yZW9wZW5kYXRlLnNldE1vbnRoKHRoaXMuYXV0aGVudGljYXRlZC5leGNsdXNpb25kYXRlLmdldE1vbnRoKCkgKyA2KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdDT05GSVJNX1BFUk0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZC5leGNsdXNpb25kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLnJlb3BlbmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAvLyAxIHllYXIgNyBkYXlzXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZC5yZW9wZW5kYXRlLnNldEZ1bGxZZWFyKHRoaXMuYXV0aGVudGljYXRlZC5yZW9wZW5kYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLnJlb3BlbmRhdGUuc2V0RGF0ZSh0aGlzLmF1dGhlbnRpY2F0ZWQuZXhjbHVzaW9uZGF0ZS5nZXREYXRlKCkgKyA3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdDT05GSVJNQVRJT05fVEVNUCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ0NPTkZJUk1BVElPTl9QRVJNJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnVU5SRUdJU1RFUkVEJyAmJiB0aGlzLmF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbmZpbmFsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJldmlvdXMoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdVTlJFR0lTVEVSRUQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZC5leGNsdXNpb25maW5hbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19tYWNoaW5lX25hbWUnKX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWxlZnRcIiBzdHlsZT1cInBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7IHdpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktdGV4dFwiPlxuICAgICAgICAgICAgJHt0aGlzLnNob3dQYWdlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xyXG4gICAgfVxyXG4gICAgc2hvd1BhZ2UoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Fub255bW91cygpO1xyXG4gICAgICAgICAgICBjYXNlICdVTlJFR0lTVEVSRUQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0F1dGhlbnRpY2F0ZWRVbnJlZ2lzdGVyZWQoKTtcclxuICAgICAgICAgICAgY2FzZSAnVU5SRUdJU1RFUkVEX1BFUk0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0F1dGhlbnRpY2F0ZWRSZW5ld1Blcm0oKTtcclxuICAgICAgICAgICAgY2FzZSAnQ09ORklSTV9URU1QJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dBdXRoZW50aWNhdGVkQ29uZmlybVRlbXAoKTtcclxuICAgICAgICAgICAgY2FzZSAnQ09ORklSTV9QRVJNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dBdXRoZW50aWNhdGVkQ29uZmlybVBlcm0oKTtcclxuICAgICAgICAgICAgY2FzZSAnQ09ORklSTUFUSU9OX1RFTVAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0F1dGhlbnRpY2F0ZWRDb25maXJtYXRpb24oKTtcclxuICAgICAgICAgICAgY2FzZSAnQ09ORklSTUFUSU9OX1BFUk0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0F1dGhlbnRpY2F0ZWRDb25maXJtYXRpb24oKTtcclxuICAgICAgICAgICAgY2FzZSAnUkVHSVNURVJFRF9URU1QJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dBdXRoZW50aWNhdGVkUmVnaXN0ZXJlZFRlbXAoKTtcclxuICAgICAgICAgICAgY2FzZSAnUkVHSVNURVJFRF9QRVJNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dBdXRoZW50aWNhdGVkUmVnaXN0ZXJlZFBlcm0oKTtcclxuICAgICAgICAgICAgY2FzZSAnUkVRVUVTVERFTEVURSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QXV0aGVudGljYXRlZFJlcXVlc3REZWxldGUoKTtcclxuICAgICAgICAgICAgY2FzZSAnUkVRVUVTVERFTEVURUNPTkZJUk0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0F1dGhlbnRpY2F0ZWRSZXF1ZXN0RGVsZXRlQ29uZmlybSgpO1xyXG4gICAgICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0F1dGhlbnRpY2F0ZWREZWxldGUoKTtcclxuICAgICAgICAgICAgY2FzZSAnREVMRVRFQ09ORklSTSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QXV0aGVudGljYXRlZERlbGV0ZUNvbmZpcm0oKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sIGBpbnRlcm5hbCBlcnJvcmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd1Rlc3RIZWFkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgPGRpdiBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkIGNvcmFsICFpbXBvcnRhbnQ7IGJvcmRlcjogMnB4O1wiPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5nZXRUZXN0VXNlcih1bmRlZmluZWQpfVwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLmdldFRlc3RVc2VyKCdVTlJFR0lTVEVSRUQnKX1cIj5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZ2V0VGVzdFVzZXIoJ1VOUkVHSVNURVJFRF9QRVJNJyl9XCI+XG4gICAgICAgICAgUmVnaXN0ZXIgcGVybVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZ2V0VGVzdFVzZXIoJ0NPTkZJUk1fVEVNUCcpfVwiPlxuICAgICAgICAgIENvbmZpcm0gdGVtcFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZ2V0VGVzdFVzZXIoJ0NPTkZJUk1fUEVSTScpfVwiPlxuICAgICAgICAgIENvbmZpcm0gcGVybVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZ2V0VGVzdFVzZXIoJ0NPTkZJUk1BVElPTl9URU1QJyl9XCI+XG4gICAgICAgICAgQ29uZmlybWF0aW9uIHRlbXBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLmdldFRlc3RVc2VyKCdDT05GSVJNQVRJT05fUEVSTScpfVwiPlxuICAgICAgICAgIENvbmZpcm1hdGlvbiBwZXJtXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5nZXRUZXN0VXNlcignUkVHSVNURVJFRF9URU1QJyl9XCI+XG4gICAgICAgICAgQWxyZWFkeV9yZWdpc3RlcmVkIHRlbXBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLmdldFRlc3RVc2VyKCdSRUdJU1RFUkVEX1BFUk0nKX1cIj5cbiAgICAgICAgICBBbHJlYWR5X3JlZ2lzdGVyZWQgcGVybVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZ2V0VGVzdFVzZXIoJ1JFUVVFU1RERUxFVEUnKX1cIj5cbiAgICAgICAgICBSZXF1ZXN0X2RlbGV0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZ2V0VGVzdFVzZXIoJ1JFUVVFU1RERUxFVEVDT05GSVJNJyl9XCI+XG4gICAgICAgICAgUmVxdWVzdF9kZWxldGVfY29uZmlybVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZ2V0VGVzdFVzZXIoJ0RFTEVURScpfVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5nZXRUZXN0VXNlcignREVMRVRFQ09ORklSTScpfVwiPlxuICAgICAgICAgIERlbGV0ZV9jb25maXJtXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcclxuICAgIH1cclxuICAgIHNob3dBbm9ueW1vdXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgJHt0aGlzLnNob3dUZXN0SGVhZGVyKCl9XG4gICAgICA8aDI+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3NlY29uZGFyeV90aXRsZScpKX08L2gyPlxuICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX1cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3JvZnVzZGVtby5zcGlsbGVteW5kaWdoZWRlbi5kay9uZW1sb2dpbi9sb3cvXCI+XG4gICAgICAgICR7dGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfYnV0dG9uX2xvZ291dCcpfVxuICAgICAgPC9hPlxuICAgIGA7XHJcbiAgICB9XHJcbiAgICBzaG93QXV0aGVudGljYXRlZFVucmVnaXN0ZXJlZCgpIHtcclxuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICAke3RoaXMuc2hvd1Rlc3RIZWFkZXIoKX1cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19wZXJzb25hbF9pbmZvcm1hJykpfTwvcD5cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2JvZHknKSl9PC9wPlxuICAgICAgPGgzPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19zZWNvbmRhcnlfdGl0bGUnKSl9PC9oMz5cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19jaGVja2JveF90aXRsZScpKX08L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBAY2hhbmdlPSR7KGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbmZpbmFsID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICB9fVxuICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbmZpbmFsfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZmluYWxcIj5cbiAgICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfY2hlY2tib3hfZGVzY3JpcCcpKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvcD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgQGNsaWNrPVwiJHsoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgaWYgKChfYSA9IHRoaXMuYXV0aGVudGljYXRlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmV4Y2x1c2lvbmZpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQuZXhjbHVzaW9udGltZW91dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdDT05GSVJNX1BFUk0nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19XCJcbiAgICAgID5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl90ZXh0JykpfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9kZXNjJykpfVxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz4ke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfc2Vjb25kYXJ5X3RpdGxlXzInKSl9PC9oMz5cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ3RleHRfMicpKX08L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0aW1lb3V0XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19vcHRpb25zX2xhYmVsJykpfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgbmFtZT1cInRpbWVvdXRcIlxuICAgICAgICBpZD1cInRpbWVvdXRcIlxuICAgICAgICBAY2hhbmdlPSR7KGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkLmV4Y2x1c2lvbnRpbWVvdXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPlxuICAgICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19vcHRpb25zX2RlZmF1bHQnKSl9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjRIXCI+XG4gICAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX29wdGlvbnNfMjRoJykpfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFNXCI+XG4gICAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX29wdGlvbnNfMW0nKSl9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM01cIj5cbiAgICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfb3B0aW9uc18zbScpKX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCI2TVwiPlxuICAgICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19vcHRpb25zXzZtJykpfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgQGNsaWNrPVwiJHsoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgaWYgKCgoX2EgPSB0aGlzLmF1dGhlbnRpY2F0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5leGNsdXNpb250aW1lb3V0KSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZC5leGNsdXNpb25maW5hbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdDT05GSVJNX1RFTVAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19XCJcbiAgICAgID5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl90ZXh0XzInKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfYnV0dG9uX2Rlc2MnKSl9XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMubG9nb3V0KCl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fbG9nb3V0JykpfVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcclxuICAgIH1cclxuICAgIHNob3dBdXRoZW50aWNhdGVkUmVuZXdQZXJtKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3BlcnNvbmFsX2luZm9ybWEnKSl9PC9wPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX08L3A+XG4gICAgICA8aDM+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3NlY29uZGFyeV90aXRsZScpKX08L2gzPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2NoZWNrYm94X3RpdGxlJykpfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIEBjaGFuZ2U9JHsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQuZXhjbHVzaW9uZmluYWwgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIH19XG4gICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLmF1dGhlbnRpY2F0ZWQuZXhjbHVzaW9uZmluYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJmaW5hbFwiPlxuICAgICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19jaGVja2JveF9kZXNjcmlwJykpfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBAY2xpY2s9XCIkeygpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBpZiAoKF9hID0gdGhpcy5hdXRoZW50aWNhdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXhjbHVzaW9uZmluYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnQ09ORklSTV9QRVJNJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fVwiXG4gICAgICA+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fdGV4dCcpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fZGVzYycpKX1cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5sb2dvdXQoKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9sb2dvdXQnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLnByZXZpb3VzKCdSRUdJU1RFUkVEX1BFUk0nKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9wcmV2aW91cycpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIGA7XHJcbiAgICB9XHJcbiAgICBzaG93QXV0aGVudGljYXRlZENvbmZpcm1UZW1wKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3BlcnNvbmFsX2luZm9ybWEnKSl9PC9wPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX08L3A+XG4gICAgICA8aDM+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3NlY29uZGFyeV90aXRsZScpKX08L2gzPlxuICAgICAgPHA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tbWVyY2lhbHNcIiBjaGVja2VkIGRpc2FibGVkIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb21tZXJjaWFsc1wiPlxuICAgICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19jaGVja2JveF9kZXNjcmlwJykpfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLnByZXZpb3VzKCdVTlJFR0lTVEVSRUQnKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9wcmV2aW91cycpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMubmV4dCgnQ09ORklSTUFUSU9OX1RFTVAnKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9uZXh0JykpfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5sb2dvdXQoKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9sb2dvdXQnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xyXG4gICAgfVxyXG4gICAgc2hvd0F1dGhlbnRpY2F0ZWRDb25maXJtUGVybSgpIHtcclxuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICAke3RoaXMuc2hvd1Rlc3RIZWFkZXIoKX1cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19wZXJzb25hbF9pbmZvcm1hJykpfTwvcD5cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2JvZHknKSl9PC9wPlxuICAgICAgPGgzPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19zZWNvbmRhcnlfdGl0bGUnKSl9PC9oMz5cbiAgICAgIDxwPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvbW1lcmNpYWxzXCIgY2hlY2tlZCBkaXNhYmxlZCAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiY29tbWVyY2lhbHNcIj5cbiAgICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfY2hlY2tib3hfZGVzY3JpcCcpKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5wcmV2aW91cygnVU5SRUdJU1RFUkVEJyl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fcHJldmlvdXMnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLm5leHQoJ0NPTkZJUk1BVElPTl9QRVJNJyl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fbmV4dCcpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMubG9nb3V0KCl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fbG9nb3V0JykpfVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcclxuICAgIH1cclxuICAgIHNob3dBdXRoZW50aWNhdGVkQ29uZmlybWF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPGgzPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19zZWNvbmRhcnlfdGl0bGUnKSl9PC9oMz5cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19wZXJzb25hbF9pbmZvcm1hJykpfTwvcD5cbiAgICAgIDxwPiR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2JvZHknKSl9PC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLmxvZ291dCgpfVwiPlxuICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfYnV0dG9uX2xvZ291dCcpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIGA7XHJcbiAgICB9XHJcbiAgICBzaG93QXV0aGVudGljYXRlZFJlZ2lzdGVyZWRUZW1wKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3BlcnNvbmFsX2luZm9ybWEnKSl9PC9wPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX08L3A+XG4gICAgICA8aDM+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3NlY29uZGFyeV90aXRsZScpKX08L2gzPlxuICAgICAgPHA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tbWVyY2lhbHNcIiBjaGVja2VkIGRpc2FibGVkIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb21tZXJjaWFsc1wiPlxuICAgICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19jaGVja2JveF9kZXNjcmlwJykpfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLmxvZ291dCgpfVwiPlxuICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfYnV0dG9uX2xvZ291dCcpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMubmV4dCgnVU5SRUdJU1RFUkVEJyl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fdGV4dCcpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIGA7XHJcbiAgICB9XHJcbiAgICBzaG93QXV0aGVudGljYXRlZFJlZ2lzdGVyZWRQZXJtKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3BlcnNvbmFsX2luZm9ybWEnKSl9PC9wPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX08L3A+XG4gICAgICA8aDM+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3NlY29uZGFyeV90aXRsZScpKX08L2gzPlxuICAgICAgPHA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tbWVyY2lhbHNcIiBjaGVja2VkIGRpc2FibGVkIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb21tZXJjaWFsc1wiPlxuICAgICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19jaGVja2JveF9kZXNjcmlwJykpfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLmxvZ291dCgpfVwiPlxuICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfYnV0dG9uX2xvZ291dCcpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMubmV4dCgnVU5SRUdJU1RFUkVEX1BFUk0nKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl90ZXh0JykpfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5uZXh0KCdSRVFVRVNUREVMRVRFJyl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fcHJldmlvdXMnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xyXG4gICAgfVxyXG4gICAgc2hvd0F1dGhlbnRpY2F0ZWRSZXF1ZXN0RGVsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3BlcnNvbmFsX2luZm9ybWEnKSl9PC9wPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX08L3A+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5uZXh0KCdSRVFVRVNUREVMRVRFQ09ORklSTScpfVwiPlxuICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfYnV0dG9uX3RleHQnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLmxvZ291dCgpfVwiPlxuICAgICAgICAke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfYnV0dG9uX2xvZ291dCcpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIGA7XHJcbiAgICB9XHJcbiAgICBzaG93QXV0aGVudGljYXRlZFJlcXVlc3REZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3BlcnNvbmFsX2luZm9ybWEnKSl9PC9wPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX08L3A+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5sb2dvdXQoKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9sb2dvdXQnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xyXG4gICAgfVxyXG4gICAgc2hvd0F1dGhlbnRpY2F0ZWREZWxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgJHt0aGlzLnNob3dUZXN0SGVhZGVyKCl9XG4gICAgICA8cD4ke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdmaWVsZF9yb2Z1c19jbXNfcGVyc29uYWxfaW5mb3JtYScpKX08L3A+XG4gICAgICA8cD4ke3Vuc2FmZUhUTUwodGhpcy5nZXRUZXh0KCdib2R5JykpfTwvcD5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLm5leHQoJ0RFTEVURUNPTkZJUk0nKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl90ZXh0JykpfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5sb2dvdXQoKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9sb2dvdXQnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiJHsoKSA9PiB0aGlzLm5leHQoJ1VOUkVHSVNURVJFRF9QRVJNJyl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fcHJldmlvdXMnKSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xyXG4gICAgfVxyXG4gICAgc2hvd0F1dGhlbnRpY2F0ZWREZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgICR7dGhpcy5zaG93VGVzdEhlYWRlcigpfVxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX3BlcnNvbmFsX2luZm9ybWEnKSl9PC9wPlxuICAgICAgPHA+JHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnYm9keScpKX08L3A+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5uZXh0KCdVTlJFR0lTVEVSRUQnKX1cIj5cbiAgICAgICAgJHt1bnNhZmVIVE1MKHRoaXMuZ2V0VGV4dCgnZmllbGRfcm9mdXNfY21zX2J1dHRvbl9wcmV2aW91cycpKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMubG9nb3V0KCl9XCI+XG4gICAgICAgICR7dW5zYWZlSFRNTCh0aGlzLmdldFRleHQoJ2ZpZWxkX3JvZnVzX2Ntc19idXR0b25fbG9nb3V0JykpfVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcclxuICAgIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxyXG5dLCBTcG1Sb2Z1cy5wcm90b3R5cGUsIFwibGFuZ3VhZ2VcIiwgdm9pZCAwKTtcclxuU3BtUm9mdXMgPSBfX2RlY29yYXRlKFtcclxuICAgIGN1c3RvbUVsZW1lbnQoJ3NwbS1yb2Z1cycpXHJcbl0sIFNwbVJvZnVzKTtcclxuZXhwb3J0IHsgU3BtUm9mdXMgfTtcclxuIl0sIm5hbWVzIjpbInQiLCJlIiwibiIsInMiLCJvIiwiaSIsIlMiLCJyIiwiaCIsImwiLCJhIiwiTGl0RWxlbWVudCIsIkRPTVB1cmlmeSIsImh0bWwiLCJ1bnNhZmVIVE1MIiwicHJvcGVydHkiLCJjdXN0b21FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBd0NBO0FBQ08sU0FBUyxVQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzFELElBQUksSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2pJLElBQUksSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuSSxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0SixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDQyxHQUFDLENBQUMsTUFBTSxFQUFFLENBQUNDLEdBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNQyxHQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRixHQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPRixHQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHRSxHQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQU0sTUFBQ0UsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJRCxHQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDRixHQUFDLENBQUMsQ0FBd1ZJLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0wsR0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQ00sR0FBQyxDQUFDTixHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBT0ksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FDSjl0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSUQsR0FBQyxDQUFDLE1BQU1GLEdBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDTSxHQUFDLENBQUNOLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUNPLEdBQUMsQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUNKLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0wsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDTyxHQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUNMLEdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDRixHQUFDLENBQUMsQ0FBQyxNQUFNUSxHQUFDLFNBQVMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxXQUFXLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRCxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsT0FBTyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQ1QsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBT0ssR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDTCxHQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRUYsR0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ1EsR0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxDQUFDQSxHQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQ0EsR0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRUYsR0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxlQUFlLENBQUNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUlQLEdBQUMsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBR0EsR0FBQyxDQUFDQSxHQUFDLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDOztBQ0wxaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlILEdBQUMsQ0FBTSxNQUFDSyxHQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQ0YsR0FBQyxDQUFDRSxHQUFDLENBQUNBLEdBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDSixHQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBQyxDQUFDLEdBQUcsQ0FBQ0gsR0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssR0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHQSxHQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsZ0JBQWdCLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRCxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxHQUFHRSxHQUFDLENBQUNBLEdBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDRixHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDSSxHQUFDLENBQUNBLEdBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHRCxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDSCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1EsR0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0osR0FBQyxDQUFDQSxHQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFNLE1BQW1FLENBQUMsQ0FBQyxNQUFNLENBQUMs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QUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUNMMU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1HLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNKLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FDSnJhO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJLENBQUMsQ0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWTs7QUNMM007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSixHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FDSjNTO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLENBQUMsU0FBU00sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBR0csQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBR0gsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FB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QUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDLytCO0FBQ0EsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN6ZCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNyWTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1VSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUM3UztBQUNBO0FBQ0EsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN4TixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzdCO0FBQ0EsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzlxQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLDZCQUE2QixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDanhFLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbnFCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ3RGO0FBQ0EsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDdEQ7QUFDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNuRDtBQUNBLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDO0FBQ0EsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLHVGQUF1RjtBQUNqSCxDQUFDLENBQUM7QUFDRixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3RELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyw2REFBNkQ7QUFDeEYsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsSUFBSSxTQUFTLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDckMsRUFBRSxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5QkFBeUIsR0FBRyxTQUFTLHlCQUF5QixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUU7QUFDM0YsRUFBRSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxZQUFZLENBQUMsWUFBWSxLQUFLLFVBQVUsRUFBRTtBQUM3RixJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLEVBQUUsSUFBSSxTQUFTLEdBQUcsdUJBQXVCLENBQUM7QUFDMUM7QUFDQSxFQUFFLElBQUksUUFBUSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNoRixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1RCxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksVUFBVSxHQUFHLFdBQVcsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM5RDtBQUNBLEVBQUUsSUFBSTtBQUNOLElBQUksT0FBTyxZQUFZLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUNqRCxNQUFNLFVBQVUsRUFBRSxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUU7QUFDNUMsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1AsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxHQUFHLHdCQUF3QixDQUFDLENBQUM7QUFDakYsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxTQUFTLGVBQWUsR0FBRztBQUMzQixFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBQy9GO0FBQ0EsRUFBRSxJQUFJLFNBQVMsR0FBRyxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDM0MsSUFBSSxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3pCO0FBQ0EsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDckU7QUFDQTtBQUNBLElBQUksU0FBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDbEMsSUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUN6QyxFQUFFLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDakMsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0I7QUFDaEQsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CO0FBQ3RELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO0FBQ3hCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO0FBQzlCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVO0FBQ3BDLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFlBQVk7QUFDaEQsTUFBTSxZQUFZLEdBQUcsb0JBQW9CLEtBQUssS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsZUFBZSxHQUFHLG9CQUFvQjtBQUMzSCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZTtBQUM5QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUztBQUNsQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3pDLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQzNDLEVBQUUsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlELEVBQUUsSUFBSSxjQUFjLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3JFLEVBQUUsSUFBSSxhQUFhLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ25FLEVBQUUsSUFBSSxhQUFhLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxPQUFPLG1CQUFtQixLQUFLLFVBQVUsRUFBRTtBQUNqRCxJQUFJLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEQ7QUFDQSxJQUFJLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtBQUM1RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLGtCQUFrQixHQUFHLHlCQUF5QixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3JGO0FBQ0EsRUFBRSxJQUFJLFNBQVMsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzlFLEVBQUUsSUFBSSxTQUFTLEdBQUcsUUFBUTtBQUMxQixNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYztBQUMvQyxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0I7QUFDdkQsTUFBTSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsc0JBQXNCO0FBQy9ELE1BQU0sb0JBQW9CLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDO0FBQzVELEVBQUUsSUFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0FBQy9DLEVBQUUsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCO0FBQ0EsRUFBRSxJQUFJO0FBQ04sSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUM3RSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNoQjtBQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsV0FBVyxHQUFHLE9BQU8sYUFBYSxLQUFLLFVBQVUsSUFBSSxjQUFjLElBQUksT0FBTyxjQUFjLENBQUMsa0JBQWtCLEtBQUssV0FBVyxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUM7QUFDbEssRUFBRSxJQUFJLGVBQWUsR0FBRyxhQUFhO0FBQ3JDLE1BQU0sVUFBVSxHQUFHLFFBQVE7QUFDM0IsTUFBTSxXQUFXLEdBQUcsU0FBUztBQUM3QixNQUFNLFdBQVcsR0FBRyxTQUFTO0FBQzdCLE1BQU0sbUJBQW1CLEdBQUcsaUJBQWlCO0FBQzdDLE1BQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDO0FBQzFDLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztBQUMxQixFQUFFLElBQUksb0JBQW9CLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwTTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDMUIsRUFBRSxJQUFJLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksdUJBQXVCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNoRSxJQUFJLFlBQVksRUFBRTtBQUNsQixNQUFNLFFBQVEsRUFBRSxJQUFJO0FBQ3BCLE1BQU0sWUFBWSxFQUFFLEtBQUs7QUFDekIsTUFBTSxVQUFVLEVBQUUsSUFBSTtBQUN0QixNQUFNLEtBQUssRUFBRSxJQUFJO0FBQ2pCLEtBQUs7QUFDTCxJQUFJLGtCQUFrQixFQUFFO0FBQ3hCLE1BQU0sUUFBUSxFQUFFLElBQUk7QUFDcEIsTUFBTSxZQUFZLEVBQUUsS0FBSztBQUN6QixNQUFNLFVBQVUsRUFBRSxJQUFJO0FBQ3RCLE1BQU0sS0FBSyxFQUFFLElBQUk7QUFDakIsS0FBSztBQUNMLElBQUksOEJBQThCLEVBQUU7QUFDcEMsTUFBTSxRQUFRLEVBQUUsSUFBSTtBQUNwQixNQUFNLFlBQVksRUFBRSxLQUFLO0FBQ3pCLE1BQU0sVUFBVSxFQUFFLElBQUk7QUFDdEIsTUFBTSxLQUFLLEVBQUUsS0FBSztBQUNsQixLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNOO0FBQ0E7QUFDQSxFQUFFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN6QjtBQUNBO0FBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDekI7QUFDQTtBQUNBLEVBQUUsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQzdCO0FBQ0E7QUFDQSxFQUFFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQztBQUM3QjtBQUNBO0FBQ0EsRUFBRSxJQUFJLHVCQUF1QixHQUFHLEtBQUssQ0FBQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUFDakM7QUFDQTtBQUNBLEVBQUUsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBQzdCO0FBQ0E7QUFDQSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLG1CQUFtQixHQUFHLEtBQUssQ0FBQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0FBQ2xDO0FBQ0E7QUFDQSxFQUFFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztBQUMxQjtBQUNBO0FBQ0EsRUFBRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkI7QUFDQTtBQUNBLEVBQUUsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCO0FBQ0E7QUFDQSxFQUFFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQztBQUM3QixFQUFFLElBQUksdUJBQXVCLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNsUztBQUNBO0FBQ0EsRUFBRSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDM0IsRUFBRSxJQUFJLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbEc7QUFDQTtBQUNBLEVBQUUsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUM7QUFDakMsRUFBRSxJQUFJLDJCQUEyQixHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNsTCxFQUFFLElBQUksZ0JBQWdCLEdBQUcsb0NBQW9DLENBQUM7QUFDOUQsRUFBRSxJQUFJLGFBQWEsR0FBRyw0QkFBNEIsQ0FBQztBQUNuRCxFQUFFLElBQUksY0FBYyxHQUFHLDhCQUE4QixDQUFDO0FBQ3REO0FBQ0E7QUFDQSxFQUFFLElBQUksU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUNqQyxFQUFFLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztBQUM3QjtBQUNBO0FBQ0EsRUFBRSxJQUFJLGlCQUFpQixDQUFDO0FBQ3hCLEVBQUUsSUFBSSw0QkFBNEIsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzVFLEVBQUUsSUFBSSx5QkFBeUIsR0FBRyxXQUFXLENBQUM7QUFDOUMsRUFBRSxJQUFJLGlCQUFpQixDQUFDO0FBQ3hCO0FBQ0E7QUFDQSxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRDtBQUNBLEVBQUUsSUFBSSxpQkFBaUIsR0FBRyxTQUFTLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtBQUNoRSxJQUFJLE9BQU8sU0FBUyxZQUFZLE1BQU0sSUFBSSxTQUFTLFlBQVksUUFBUSxDQUFDO0FBQ3hFLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksWUFBWSxHQUFHLFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRTtBQUNoRCxJQUFJLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7QUFDbEMsTUFBTSxPQUFPO0FBQ2IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO0FBQzNDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckI7QUFDQTtBQUNBLElBQUksWUFBWSxHQUFHLGNBQWMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7QUFDakcsSUFBSSxZQUFZLEdBQUcsY0FBYyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztBQUNqRyxJQUFJLG1CQUFtQixHQUFHLG1CQUFtQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsMkJBQTJCLENBQUM7QUFDekosSUFBSSxhQUFhLEdBQUcsbUJBQW1CLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztBQUN2SSxJQUFJLGVBQWUsR0FBRyxpQkFBaUIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsdUJBQXVCLENBQUM7QUFDN0csSUFBSSxXQUFXLEdBQUcsYUFBYSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDNUUsSUFBSSxXQUFXLEdBQUcsYUFBYSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDNUUsSUFBSSxZQUFZLEdBQUcsY0FBYyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUNwRSxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsZUFBZSxLQUFLLEtBQUssQ0FBQztBQUNwRDtBQUNBLElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLEtBQUssS0FBSyxDQUFDO0FBQ3BEO0FBQ0EsSUFBSSx1QkFBdUIsR0FBRyxHQUFHLENBQUMsdUJBQXVCLElBQUksS0FBSyxDQUFDO0FBQ25FO0FBQ0EsSUFBSSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsa0JBQWtCLElBQUksS0FBSyxDQUFDO0FBQ3pEO0FBQ0EsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUM7QUFDakQ7QUFDQSxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQztBQUN6QztBQUNBLElBQUksbUJBQW1CLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEtBQUssQ0FBQztBQUMzRDtBQUNBLElBQUksbUJBQW1CLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEtBQUssQ0FBQztBQUMzRDtBQUNBLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDO0FBQ3pDO0FBQ0EsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUM7QUFDOUM7QUFDQSxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQztBQUM5QztBQUNBLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO0FBQ3JDO0FBQ0EsSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsa0JBQWtCLElBQUksZ0JBQWdCLENBQUM7QUFDbEUsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUM7QUFDaEQ7QUFDQSxJQUFJLElBQUksR0FBRyxDQUFDLHVCQUF1QixJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUNwRyxNQUFNLHVCQUF1QixDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDO0FBQ3RGLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxHQUFHLENBQUMsdUJBQXVCLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLEVBQUU7QUFDMUcsTUFBTSx1QkFBdUIsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7QUFDbEcsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEdBQUcsQ0FBQyx1QkFBdUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyw4QkFBOEIsS0FBSyxTQUFTLEVBQUU7QUFDeEgsTUFBTSx1QkFBdUIsQ0FBQyw4QkFBOEIsR0FBRyxHQUFHLENBQUMsdUJBQXVCLENBQUMsOEJBQThCLENBQUM7QUFDMUgsS0FBSztBQUNMO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckIsSUFBSSw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLEdBQUcseUJBQXlCLEdBQUcsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ25LO0FBQ0EsSUFBSSxpQkFBaUIsR0FBRyxpQkFBaUIsS0FBSyx1QkFBdUIsR0FBRyxVQUFVLENBQUMsRUFBRTtBQUNyRixNQUFNLE9BQU8sQ0FBQyxDQUFDO0FBQ2YsS0FBSyxHQUFHLGlCQUFpQixDQUFDO0FBQzFCO0FBQ0EsSUFBSSxJQUFJLGtCQUFrQixFQUFFO0FBQzVCLE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQztBQUM5QixLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksbUJBQW1CLEVBQUU7QUFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksWUFBWSxFQUFFO0FBQ3RCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1RCxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDeEI7QUFDQSxNQUFNLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDdEMsUUFBUSxRQUFRLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLFFBQVEsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksWUFBWSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7QUFDckMsUUFBUSxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLFFBQVEsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQyxRQUFRLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO0FBQzVDLFFBQVEsUUFBUSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQyxRQUFRLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsUUFBUSxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtBQUN4QyxRQUFRLFFBQVEsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsUUFBUSxRQUFRLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLFFBQVEsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO0FBQ3RCLE1BQU0sSUFBSSxZQUFZLEtBQUssb0JBQW9CLEVBQUU7QUFDakQsUUFBUSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNDLE9BQU87QUFDUDtBQUNBLE1BQU0sUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7QUFDdEIsTUFBTSxJQUFJLFlBQVksS0FBSyxvQkFBb0IsRUFBRTtBQUNqRCxRQUFRLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDM0MsT0FBTztBQUNQO0FBQ0EsTUFBTSxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFO0FBQy9CLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzNELEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxHQUFHLENBQUMsZUFBZSxFQUFFO0FBQzdCLE1BQU0sSUFBSSxlQUFlLEtBQUssdUJBQXVCLEVBQUU7QUFDdkQsUUFBUSxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pELE9BQU87QUFDUDtBQUNBLE1BQU0sUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxZQUFZLEVBQUU7QUFDdEIsTUFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksY0FBYyxFQUFFO0FBQ3hCLE1BQU0sUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN2RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7QUFDNUIsTUFBTSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN4QyxNQUFNLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLE1BQU0sRUFBRTtBQUNoQixNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQixLQUFLO0FBQ0w7QUFDQSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDakIsR0FBRyxDQUFDO0FBQ0o7QUFDQSxFQUFFLElBQUksOEJBQThCLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLEVBQUUsSUFBSSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6QyxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckMsRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3hDLEVBQUUsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksb0JBQW9CLEdBQUcsU0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7QUFDcEUsSUFBSSxJQUFJLE1BQU0sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEM7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDcEMsTUFBTSxNQUFNLEdBQUc7QUFDZixRQUFRLFlBQVksRUFBRSxjQUFjO0FBQ3BDLFFBQVEsT0FBTyxFQUFFLFVBQVU7QUFDM0IsT0FBTyxDQUFDO0FBQ1IsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckQsSUFBSSxJQUFJLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUQ7QUFDQSxJQUFJLElBQUksT0FBTyxDQUFDLFlBQVksS0FBSyxhQUFhLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssY0FBYyxFQUFFO0FBQ2xELFFBQVEsT0FBTyxPQUFPLEtBQUssS0FBSyxDQUFDO0FBQ2pDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLGdCQUFnQixFQUFFO0FBQ3BELFFBQVEsT0FBTyxPQUFPLEtBQUssS0FBSyxLQUFLLGFBQWEsS0FBSyxnQkFBZ0IsSUFBSSw4QkFBOEIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzFILE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzVDLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLGdCQUFnQixFQUFFO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLGNBQWMsRUFBRTtBQUNsRCxRQUFRLE9BQU8sT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUNsQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssYUFBYSxFQUFFO0FBQ2pELFFBQVEsT0FBTyxPQUFPLEtBQUssTUFBTSxJQUFJLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQy9DLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLGNBQWMsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxhQUFhLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUM1RixRQUFRLE9BQU8sS0FBSyxDQUFDO0FBQ3JCLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLGdCQUFnQixJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDdEcsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUcsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxZQUFZLEdBQUcsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ2pELElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsTUFBTSxPQUFPLEVBQUUsSUFBSTtBQUNuQixLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxJQUFJO0FBQ1I7QUFDQSxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNoQixNQUFNLElBQUk7QUFDVixRQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNsQixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QixPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQy9ELElBQUksSUFBSTtBQUNSLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDbkMsUUFBUSxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztBQUM5QyxRQUFRLElBQUksRUFBRSxJQUFJO0FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ2hCLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDbkMsUUFBUSxTQUFTLEVBQUUsSUFBSTtBQUN2QixRQUFRLElBQUksRUFBRSxJQUFJO0FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CO0FBQ0EsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDOUMsTUFBTSxJQUFJLFVBQVUsSUFBSSxtQkFBbUIsRUFBRTtBQUM3QyxRQUFRLElBQUk7QUFDWixVQUFVLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUN0QixPQUFPLE1BQU07QUFDYixRQUFRLElBQUk7QUFDWixVQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ3RCLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxhQUFhLEdBQUcsU0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFO0FBQ3BEO0FBQ0EsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNaLElBQUksSUFBSSxpQkFBaUIsQ0FBQztBQUMxQjtBQUNBLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDcEIsTUFBTSxLQUFLLEdBQUcsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0FBQzFDLEtBQUssTUFBTTtBQUNYO0FBQ0EsTUFBTSxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3RELE1BQU0saUJBQWlCLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksaUJBQWlCLEtBQUssdUJBQXVCLEVBQUU7QUFDdkQ7QUFDQSxNQUFNLEtBQUssR0FBRyxnRUFBZ0UsR0FBRyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7QUFDMUcsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFlBQVksR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksU0FBUyxLQUFLLGNBQWMsRUFBRTtBQUN0QyxNQUFNLElBQUk7QUFDVixRQUFRLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMvRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtBQUN0QyxNQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkU7QUFDQSxNQUFNLElBQUk7QUFDVixRQUFRLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxFQUFFLEdBQUcsWUFBWSxDQUFDO0FBQzNFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNsQixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDL0M7QUFDQSxJQUFJLElBQUksS0FBSyxJQUFJLGlCQUFpQixFQUFFO0FBQ3BDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUNoRyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLFNBQVMsS0FBSyxjQUFjLEVBQUU7QUFDdEMsTUFBTSxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRixLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sY0FBYyxHQUFHLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3ZELEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDLElBQUksRUFBRTtBQUN2RCxJQUFJLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFLElBQUk7QUFDbkUsSUFBSSxVQUFVLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0YsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxZQUFZLEdBQUcsU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQ2hELElBQUksT0FBTyxHQUFHLFlBQVksZUFBZSxLQUFLLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLENBQUMsV0FBVyxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEtBQUssVUFBVSxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsWUFBWSxZQUFZLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxlQUFlLEtBQUssVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLFlBQVksS0FBSyxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsWUFBWSxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLENBQUM7QUFDdFgsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3pDLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxHQUFHLE1BQU0sWUFBWSxJQUFJLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO0FBQ3RMLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFlBQVksR0FBRyxTQUFTLFlBQVksQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUMxRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDNUIsTUFBTSxPQUFPO0FBQ2IsS0FBSztBQUNMO0FBQ0EsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ3BELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0RCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxpQkFBaUIsR0FBRyxTQUFTLGlCQUFpQixDQUFDLFdBQVcsRUFBRTtBQUNsRSxJQUFJLElBQUksT0FBTyxDQUFDO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUNuQyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoQztBQUNBLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxVQUFVLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdELE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hDO0FBQ0EsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUQ7QUFDQTtBQUNBLElBQUksWUFBWSxDQUFDLHFCQUFxQixFQUFFLFdBQVcsRUFBRTtBQUNyRCxNQUFNLE9BQU8sRUFBRSxPQUFPO0FBQ3RCLE1BQU0sV0FBVyxFQUFFLFlBQVk7QUFDL0IsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUN4USxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoQztBQUNBLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxPQUFPLEtBQUssUUFBUSxJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ2pGLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hDO0FBQ0EsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN4RDtBQUNBLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNyRSxRQUFRLElBQUksdUJBQXVCLENBQUMsWUFBWSxZQUFZLE1BQU0sSUFBSSxVQUFVLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzlJLFFBQVEsSUFBSSx1QkFBdUIsQ0FBQyxZQUFZLFlBQVksUUFBUSxJQUFJLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUNwSSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNyRCxRQUFRLElBQUksVUFBVSxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDO0FBQzlFLFFBQVEsSUFBSSxVQUFVLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUM7QUFDOUU7QUFDQSxRQUFRLElBQUksVUFBVSxJQUFJLFVBQVUsRUFBRTtBQUN0QyxVQUFVLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDN0M7QUFDQSxVQUFVLEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3BELFlBQVksVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2pHLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEM7QUFDQSxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksV0FBVyxZQUFZLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQzlFLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hDO0FBQ0EsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssVUFBVSxJQUFJLE9BQU8sS0FBSyxTQUFTLEtBQUssVUFBVSxDQUFDLHNCQUFzQixFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUN4SCxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoQztBQUNBLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxrQkFBa0IsSUFBSSxXQUFXLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtBQUMxRDtBQUNBLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7QUFDeEMsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0QsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEQ7QUFDQSxNQUFNLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxPQUFPLEVBQUU7QUFDL0MsUUFBUSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNyQyxVQUFVLE9BQU8sRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFO0FBQzFDLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsUUFBUSxXQUFXLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUMxQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBWSxDQUFDLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RDtBQUNBLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxpQkFBaUIsR0FBRyxTQUFTLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQzNFO0FBQ0EsSUFBSSxJQUFJLFlBQVksS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssSUFBSSxXQUFXLENBQUMsRUFBRTtBQUMvRyxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksZUFBZSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksZUFBZSxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzVNLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsS0FBSyx1QkFBdUIsQ0FBQyxZQUFZLFlBQVksTUFBTSxJQUFJLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksdUJBQXVCLENBQUMsWUFBWSxZQUFZLFFBQVEsSUFBSSx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyx1QkFBdUIsQ0FBQyxrQkFBa0IsWUFBWSxNQUFNLElBQUksVUFBVSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxJQUFJLHVCQUF1QixDQUFDLGtCQUFrQixZQUFZLFFBQVEsSUFBSSx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsZ0I7QUFDQSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksdUJBQXVCLENBQUMsOEJBQThCLEtBQUssdUJBQXVCLENBQUMsWUFBWSxZQUFZLE1BQU0sSUFBSSxVQUFVLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFlBQVksWUFBWSxRQUFRLElBQUksdUJBQXVCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNO0FBQzFULFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssWUFBWSxJQUFJLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLFFBQVEsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksdUJBQXVCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTTtBQUNyYixNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSx1QkFBdUIsR0FBRyxTQUFTLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtBQUMxRSxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLG1CQUFtQixHQUFHLFNBQVMsbUJBQW1CLENBQUMsV0FBVyxFQUFFO0FBQ3RFLElBQUksSUFBSSxJQUFJLENBQUM7QUFDYixJQUFJLElBQUksS0FBSyxDQUFDO0FBQ2QsSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUNmLElBQUksSUFBSSxDQUFDLENBQUM7QUFDVjtBQUNBO0FBQ0EsSUFBSSxZQUFZLENBQUMsMEJBQTBCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hFO0FBQ0EsSUFBSSxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO0FBQzVDO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDckIsTUFBTSxPQUFPO0FBQ2IsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFNBQVMsR0FBRztBQUNwQixNQUFNLFFBQVEsRUFBRSxFQUFFO0FBQ2xCLE1BQU0sU0FBUyxFQUFFLEVBQUU7QUFDbkIsTUFBTSxRQUFRLEVBQUUsSUFBSTtBQUNwQixNQUFNLGlCQUFpQixFQUFFLFlBQVk7QUFDckMsS0FBSyxDQUFDO0FBQ04sSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUMxQjtBQUNBO0FBQ0EsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ2hCLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixNQUFNLElBQUksS0FBSyxHQUFHLElBQUk7QUFDdEIsVUFBVSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7QUFDM0IsVUFBVSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztBQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyRSxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QztBQUNBO0FBQ0EsTUFBTSxTQUFTLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUNsQyxNQUFNLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLE1BQU0sU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDaEMsTUFBTSxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUMxQztBQUNBLE1BQU0sWUFBWSxDQUFDLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNwRTtBQUNBLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDbEM7QUFDQTtBQUNBLE1BQU0sSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO0FBQ25DLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtBQUMvQixRQUFRLFNBQVM7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQ3JDLFFBQVEsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzVDO0FBQ0EsUUFBUSxTQUFTO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksa0JBQWtCLEVBQUU7QUFDOUIsUUFBUSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsUUFBUSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFEO0FBQ0EsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNwRCxRQUFRLFNBQVM7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSTtBQUNWLFFBQVEsSUFBSSxZQUFZLEVBQUU7QUFDMUIsVUFBVSxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEUsU0FBUyxNQUFNO0FBQ2Y7QUFDQSxVQUFVLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELFNBQVM7QUFDVDtBQUNBLFFBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFZLENBQUMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9ELEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLGtCQUFrQixHQUFHLFNBQVMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO0FBQ2pFLElBQUksSUFBSSxVQUFVLENBQUM7QUFDbkI7QUFDQSxJQUFJLElBQUksY0FBYyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLFlBQVksQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUQ7QUFDQSxJQUFJLE9BQU8sVUFBVSxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtBQUNuRDtBQUNBLE1BQU0sWUFBWSxDQUFDLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDekMsUUFBUSxTQUFTO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sWUFBWSxnQkFBZ0IsRUFBRTtBQUMxRCxRQUFRLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFZLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNELEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsS0FBSyxFQUFFLEdBQUcsRUFBRTtBQUM3QyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ2IsSUFBSSxJQUFJLFlBQVksQ0FBQztBQUNyQixJQUFJLElBQUksV0FBVyxDQUFDO0FBQ3BCLElBQUksSUFBSSxPQUFPLENBQUM7QUFDaEIsSUFBSSxJQUFJLFVBQVUsQ0FBQztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksY0FBYyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQzVCO0FBQ0EsSUFBSSxJQUFJLGNBQWMsRUFBRTtBQUN4QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdEQ7QUFDQSxNQUFNLElBQUksT0FBTyxLQUFLLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtBQUNoRCxRQUFRLE1BQU0sZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDNUQsT0FBTyxNQUFNO0FBQ2IsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2pDO0FBQ0EsUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUN2QyxVQUFVLE1BQU0sZUFBZSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDbkUsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtBQUNoQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsWUFBWSxLQUFLLFVBQVUsRUFBRTtBQUNsRyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQ3ZDLFVBQVUsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLFNBQVM7QUFDVDtBQUNBLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDNUIsVUFBVSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RELFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDckIsTUFBTSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksU0FBUyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDM0I7QUFDQTtBQUNBLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDbkMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxRQUFRLEVBQUU7QUFDbEI7QUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUMxQixRQUFRLElBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4RDtBQUNBLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDNUQsVUFBVSxNQUFNLGVBQWUsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0FBQzNGLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyxNQUFNLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtBQUN0QztBQUNBO0FBQ0EsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRTtBQUNBLE1BQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtBQUMzRTtBQUNBLFFBQVEsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUM1QixPQUFPLE1BQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtBQUNuRCxRQUFRLElBQUksR0FBRyxZQUFZLENBQUM7QUFDNUIsT0FBTyxNQUFNO0FBQ2I7QUFDQSxRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsT0FBTztBQUNQLEtBQUssTUFBTTtBQUNYO0FBQ0EsTUFBTSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQyxjQUFjO0FBQy9ELE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNqQyxRQUFRLE9BQU8sa0JBQWtCLElBQUksbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN4RyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDO0FBQ0E7QUFDQSxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDakIsUUFBUSxPQUFPLFVBQVUsR0FBRyxJQUFJLEdBQUcsbUJBQW1CLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN4RSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO0FBQzVCLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLFlBQVksR0FBRyxlQUFlLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU8sV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRTtBQUNsRDtBQUNBLE1BQU0sSUFBSSxXQUFXLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxXQUFXLEtBQUssT0FBTyxFQUFFO0FBQ2pFLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQzFDLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLFlBQVksZ0JBQWdCLEVBQUU7QUFDM0QsUUFBUSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkM7QUFDQSxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUM7QUFDNUIsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLElBQUksUUFBUSxFQUFFO0FBQ2xCLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDcEIsTUFBTSxJQUFJLG1CQUFtQixFQUFFO0FBQy9CLFFBQVEsVUFBVSxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckU7QUFDQSxRQUFRLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNoQztBQUNBLFVBQVUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEQsU0FBUztBQUNULE9BQU8sTUFBTTtBQUNiLFFBQVEsVUFBVSxHQUFHLElBQUksQ0FBQztBQUMxQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pFLE9BQU87QUFDUDtBQUNBLE1BQU0sT0FBTyxVQUFVLENBQUM7QUFDeEIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLGNBQWMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFFO0FBQ0E7QUFDQSxJQUFJLElBQUksY0FBYyxJQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hNLE1BQU0sY0FBYyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLGNBQWMsQ0FBQztBQUMvRixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLGtCQUFrQixFQUFFO0FBQzVCLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNFLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RFLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxrQkFBa0IsSUFBSSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsY0FBYyxDQUFDO0FBQ3RILEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDdkMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEI7QUFDQSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdEIsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWTtBQUN0QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbEIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDM0Q7QUFDQSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDakIsTUFBTSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxJQUFJLElBQUksTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLElBQUksT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLFVBQVUsRUFBRSxZQUFZLEVBQUU7QUFDMUQsSUFBSSxJQUFJLE9BQU8sWUFBWSxLQUFLLFVBQVUsRUFBRTtBQUM1QyxNQUFNLE9BQU87QUFDYixLQUFLO0FBQ0w7QUFDQSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMvQyxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLFVBQVUsRUFBRTtBQUMvQyxJQUFJLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQzNCLE1BQU0sT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDekMsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxVQUFVLEVBQUU7QUFDaEQsSUFBSSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUMzQixNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDN0IsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVk7QUFDekMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsR0FBRyxDQUFDO0FBQ0o7QUFDQSxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFDRDtBQUNBLElBQUksTUFBTSxHQUFHLGVBQWUsRUFBRTs7QUN0a0Q5QixhQUFlO0FBQ2YsSUFBSSxXQUFXLEVBQUUsU0FBUztBQUMxQixJQUFJLE9BQU8sRUFBRSx3Q0FBd0M7QUFDckQsSUFBSSxXQUFXLEVBQUUsVUFBVTtBQUMzQixJQUFJLFNBQVMsRUFBRSw4REFBOEQ7QUFDN0UsSUFBSSxTQUFTLEVBQUUsaUVBQWlFO0FBQ2hGLENBQUM7O0FDS0UsSUFBQyxRQUFRLEdBQUcsTUFBTSxRQUFRLFNBQVNTLENBQVUsQ0FBQztBQUNqRCxJQUFJLFdBQVcsR0FBRztBQUNsQixRQUFRLEtBQUssRUFBRSxDQUFDO0FBQ2hCLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRztBQUM3QixZQUFZLE9BQU8sRUFBRSxNQUFNO0FBQzNCLFlBQVksSUFBSSxFQUFFLFNBQVM7QUFDM0IsWUFBWSxLQUFLLEVBQUUsTUFBTTtBQUN6QixZQUFZLEdBQUcsRUFBRSxTQUFTO0FBQzFCLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxDQUFDLGlCQUFpQixHQUFHO0FBQ2pDLFlBQVksSUFBSSxFQUFFLFNBQVM7QUFDM0IsWUFBWSxLQUFLLEVBQUUsU0FBUztBQUM1QixZQUFZLEdBQUcsRUFBRSxTQUFTO0FBQzFCLFlBQVksSUFBSSxFQUFFLFNBQVM7QUFDM0IsWUFBWSxNQUFNLEVBQUUsU0FBUztBQUM3QixZQUFZLE1BQU0sRUFBRSxTQUFTO0FBQzdCLFlBQVksTUFBTSxFQUFFLEtBQUs7QUFDekIsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHO0FBQzdCLFlBQVksSUFBSSxFQUFFLFNBQVM7QUFDM0IsWUFBWSxNQUFNLEVBQUUsU0FBUztBQUM3QixZQUFZLE1BQU0sRUFBRSxTQUFTO0FBQzdCLFlBQVksTUFBTSxFQUFFLEtBQUs7QUFDekIsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEIsS0FBSztBQUNMLElBQUksSUFBSSxHQUFHO0FBQ1gsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUMvQixRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFDdkMsS0FBSztBQUNMLElBQUksWUFBWSxHQUFHO0FBQ25CLFFBQVEsSUFBSSxFQUFFLENBQUM7QUFDZixRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsTUFBTSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuRyxRQUFRLFFBQVEsSUFBSSxDQUFDLFFBQVE7QUFDN0IsWUFBWSxLQUFLLElBQUk7QUFDckIsZ0JBQWdCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0FBQzVDLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxJQUFJO0FBQ3JCLGdCQUFnQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztBQUM1QyxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZO0FBQ1osZ0JBQWdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JDLGdCQUFnQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztBQUM1QyxnQkFBZ0IsTUFBTTtBQUN0QixTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDekIsUUFBUSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUNoQyxLQUFLO0FBQ0wsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQ3ZCLFFBQVEsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQVEsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWM7QUFDekMsWUFBWSxJQUFJLENBQUMsS0FBSyxLQUFLLG1CQUFtQjtBQUM5QyxZQUFZLElBQUksQ0FBQyxLQUFLLEtBQUssaUJBQWlCLEVBQUU7QUFDOUMsWUFBWSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFlBQVksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUMvQixTQUFTO0FBQ1QsUUFBUSxNQUFNLElBQUksR0FBRztBQUNyQixZQUFZLEdBQUcsRUFBRSxZQUFZO0FBQzdCLFlBQVksU0FBUyxFQUFFLE9BQU87QUFDOUIsWUFBWSxRQUFRLEVBQUUsT0FBTztBQUM3QixZQUFZLFFBQVEsRUFBRSxhQUFhO0FBQ25DLFlBQVksVUFBVSxFQUFFLEtBQUs7QUFDN0IsWUFBWSxjQUFjLEVBQUUsS0FBSztBQUNqQyxZQUFZLGdCQUFnQixFQUFFLGFBQWE7QUFDM0MsWUFBWSxhQUFhLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDckMsWUFBWSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDbEMsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUNsQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsUUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RSxLQUFLO0FBQ0wsSUFBSSxnQkFBZ0IsR0FBRztBQUN2QixRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLEtBQUs7QUFDTCxJQUFJLE1BQU0sZ0JBQWdCLEdBQUc7QUFDN0IsUUFBUSxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFBRTtBQUM5RSxZQUFZLE1BQU0sRUFBRSxLQUFLO0FBQ3pCLFlBQVksV0FBVyxFQUFFLFNBQVM7QUFDbEMsU0FBUyxDQUFDO0FBQ1YsYUFBYSxJQUFJLENBQUMsUUFBUSxJQUFJO0FBQzlCLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7QUFDOUIsZ0JBQWdCLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNsQyxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QyxhQUFhO0FBQ2IsU0FBUyxDQUFDO0FBQ1YsYUFBYSxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUs7QUFDaEMsWUFBWSxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztBQUMxQztBQUNBLFlBQVksSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtBQUN0RSxnQkFBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM5RixhQUFhO0FBQ2IsWUFBWSxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO0FBQ25FLGdCQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hGLGFBQWE7QUFDYixTQUFTLENBQUM7QUFDVixhQUFhLE9BQU8sQ0FBQyxNQUFNO0FBQzNCLFlBQVksSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtBQUNsRCxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtBQUNuRCxvQkFBb0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRTtBQUMzRCx3QkFBd0IsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztBQUN2RCxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLHdCQUF3QixJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO0FBQ3ZELHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG9CQUFvQixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztBQUNoRCxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFlBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDNUMsWUFBWSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDakMsU0FBUyxDQUFDO0FBQ1YsYUFBYSxLQUFLLENBQUMsTUFBTTtBQUN6QixZQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNyRSxTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUs7QUFDTCxJQUFJLE1BQU0sR0FBRztBQUNiLFFBQVEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDckYsS0FBSztBQUNMLElBQUksTUFBTSxVQUFVLEdBQUc7QUFDdkIsUUFBUSxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0FBQ3JGLFlBQVksTUFBTSxFQUFFLFFBQVE7QUFDNUIsWUFBWSxXQUFXLEVBQUUsU0FBUztBQUNsQyxZQUFZLE9BQU8sRUFBRTtBQUNyQixnQkFBZ0IsTUFBTSxFQUFFLGtCQUFrQjtBQUMxQyxnQkFBZ0IsY0FBYyxFQUFFLGtCQUFrQjtBQUNsRCxhQUFhO0FBQ2IsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07QUFDdEIsWUFBWSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUNwQyxTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUs7QUFDTCxJQUFJLE1BQU0sUUFBUSxHQUFHO0FBQ3JCLFFBQVEsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsRUFBRTtBQUN2RixZQUFZLE1BQU0sRUFBRSxNQUFNO0FBQzFCLFlBQVksV0FBVyxFQUFFLFNBQVM7QUFDbEMsWUFBWSxPQUFPLEVBQUU7QUFDckIsZ0JBQWdCLE1BQU0sRUFBRSxrQkFBa0I7QUFDMUMsZ0JBQWdCLGNBQWMsRUFBRSxrQkFBa0I7QUFDbEQsYUFBYTtBQUNiLFlBQVksSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ3pELFNBQVMsQ0FBQyxDQUFDO0FBQ1gsS0FBSztBQUNMLElBQUksTUFBTSxTQUFTLEdBQUc7QUFDdEIsUUFBUSxJQUFJLEdBQUcsQ0FBQztBQUNoQixRQUFRLFFBQVEsSUFBSSxDQUFDLFFBQVE7QUFDN0IsWUFBWSxLQUFLLElBQUk7QUFDckIsZ0JBQWdCLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxJQUFJO0FBQ3JCLGdCQUFnQixHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUN2QyxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZO0FBQ1osZ0JBQWdCLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLFNBQVM7QUFDVCxRQUFRLElBQUk7QUFDWixZQUFZLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xDLGdCQUFnQixNQUFNLEVBQUUsS0FBSztBQUM3QixhQUFhLENBQUM7QUFDZCxpQkFBaUIsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEQsaUJBQWlCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUMvQixnQkFBZ0IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDakMsYUFBYSxDQUFDO0FBQ2QsaUJBQWlCLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELFNBQVM7QUFDVCxRQUFRLE9BQU8sS0FBSyxFQUFFO0FBQ3RCLFlBQVksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksZUFBZSxHQUFHO0FBQ3RCLFFBQVEsUUFBUSxJQUFJLENBQUMsS0FBSztBQUMxQixZQUFZLEtBQUssU0FBUztBQUMxQixnQkFBZ0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyw0QkFBNEIsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsSCxZQUFZLEtBQUssY0FBYztBQUMvQixnQkFBZ0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyw0QkFBNEIsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNySCxZQUFZLEtBQUssbUJBQW1CO0FBQ3BDLGdCQUFnQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLDRCQUE0QixLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFILFlBQVksS0FBSyxjQUFjO0FBQy9CLGdCQUFnQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLDRCQUE0QixLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pILFlBQVksS0FBSyxjQUFjO0FBQy9CLGdCQUFnQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLDRCQUE0QixLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pILFlBQVksS0FBSyxtQkFBbUI7QUFDcEMsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsNEJBQTRCLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5SCxZQUFZLEtBQUssbUJBQW1CO0FBQ3BDLGdCQUFnQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLDRCQUE0QixLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUgsWUFBWSxLQUFLLGlCQUFpQjtBQUNsQyxnQkFBZ0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyw0QkFBNEIsS0FBSyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BJLFlBQVksS0FBSyxpQkFBaUI7QUFDbEMsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsNEJBQTRCLEtBQUsseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwSSxZQUFZLEtBQUssZUFBZTtBQUNoQyxnQkFBZ0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyw0QkFBNEIsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNILFlBQVksS0FBSyxzQkFBc0I7QUFDdkMsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsNEJBQTRCLEtBQUssd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuSSxZQUFZLEtBQUssUUFBUTtBQUN6QixnQkFBZ0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyw0QkFBNEIsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuSCxZQUFZLEtBQUssZUFBZTtBQUNoQyxnQkFBZ0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyw0QkFBNEIsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNILFlBQVk7QUFDWixnQkFBZ0IsT0FBTyxFQUFFLENBQUM7QUFDMUIsU0FBUztBQUNULEtBQUs7QUFDTCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDbkIsUUFBUSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0MsUUFBUSxJQUFJLFNBQVMsQ0FBQztBQUN0QixRQUFRLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUNqQyxZQUFZLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ2xGLFNBQVM7QUFDVCxRQUFRLElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvRCxZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFNBQVM7QUFDVCxRQUFRLE9BQU9DLE1BQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekYsS0FBSztBQUNMLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFO0FBQy9CLFFBQVEsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ25CLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDdEMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNuRSxnQkFBZ0IsSUFBSSxHQUFHLElBQUk7QUFDM0IscUJBQXFCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsTUFBTSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDckgscUJBQXFCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsTUFBTSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoSCxhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDM0MsZ0JBQWdCLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN6SixhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTtBQUN6RCxnQkFBZ0IsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDdkssYUFBYTtBQUNiLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7QUFDekQsZ0JBQWdCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ3ZLLGFBQWE7QUFDYixZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO0FBQ3BELGdCQUFnQixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNsSyxhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsRUFBRTtBQUNwRCxnQkFBZ0IsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbEssYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDaEIsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUNmLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssY0FBYyxFQUFFO0FBQzNDLFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxRCxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdkQ7QUFDQSxZQUFZLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsTUFBTSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0I7QUFDdEcsZ0JBQWdCLEtBQUssS0FBSztBQUMxQixvQkFBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFHLG9CQUFvQixNQUFNO0FBQzFCLGdCQUFnQixLQUFLLElBQUk7QUFDekIsb0JBQW9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RyxvQkFBb0IsTUFBTTtBQUMxQixnQkFBZ0IsS0FBSyxJQUFJO0FBQ3pCLG9CQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUcsb0JBQW9CLE1BQU07QUFDMUIsZ0JBQWdCLEtBQUssSUFBSTtBQUN6QixvQkFBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVHLG9CQUFvQixNQUFNO0FBRzFCLGFBQWE7QUFDYixTQUFTO0FBQ1QsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssY0FBYyxFQUFFO0FBQzNDLFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxRCxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdkQ7QUFDQSxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RyxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsRyxTQUFTO0FBQ1QsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssbUJBQW1CLEVBQUU7QUFDaEQsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLG1CQUFtQixFQUFFO0FBQ2hELFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFNBQVM7QUFDVCxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUNqRSxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUN0RCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDN0IsS0FBSztBQUNMLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtBQUNwQixRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWMsRUFBRTtBQUMzQyxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUN0RCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDN0IsS0FBSztBQUNMLElBQUksTUFBTSxHQUFHO0FBQ2IsUUFBUSxPQUFPQyxDQUFJLENBQUMsQ0FBQztBQUNyQixlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzlEO0FBQ0E7QUFDQSxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQyxDQUFDO0FBQ04sS0FBSztBQUNMLElBQUksUUFBUSxHQUFHO0FBQ2YsUUFBUSxRQUFRLElBQUksQ0FBQyxLQUFLO0FBQzFCLFlBQVksS0FBSyxTQUFTO0FBQzFCLGdCQUFnQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM1QyxZQUFZLEtBQUssY0FBYztBQUMvQixnQkFBZ0IsT0FBTyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztBQUM1RCxZQUFZLEtBQUssbUJBQW1CO0FBQ3BDLGdCQUFnQixPQUFPLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0FBQ3pELFlBQVksS0FBSyxjQUFjO0FBQy9CLGdCQUFnQixPQUFPLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0FBQzNELFlBQVksS0FBSyxjQUFjO0FBQy9CLGdCQUFnQixPQUFPLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0FBQzNELFlBQVksS0FBSyxtQkFBbUI7QUFDcEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7QUFDNUQsWUFBWSxLQUFLLG1CQUFtQjtBQUNwQyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztBQUM1RCxZQUFZLEtBQUssaUJBQWlCO0FBQ2xDLGdCQUFnQixPQUFPLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO0FBQzlELFlBQVksS0FBSyxpQkFBaUI7QUFDbEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7QUFDOUQsWUFBWSxLQUFLLGVBQWU7QUFDaEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7QUFDN0QsWUFBWSxLQUFLLHNCQUFzQjtBQUN2QyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBQztBQUNwRSxZQUFZLEtBQUssUUFBUTtBQUN6QixnQkFBZ0IsT0FBTyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUN0RCxZQUFZLEtBQUssZUFBZTtBQUNoQyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztBQUM3RCxZQUFZO0FBQ1osZ0JBQWdCLE9BQU9BLENBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzdDLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxjQUFjLEdBQUc7QUFDckIsUUFBUSxPQUFPQSxDQUFJLENBQUMsQ0FBQztBQUNyQjtBQUNBLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1RCx3QkFBd0IsRUFBRSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDakU7QUFDQTtBQUNBLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3RFO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDakU7QUFDQTtBQUNBLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNqRTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDdEU7QUFDQTtBQUNBLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3RFO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNwRTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDcEU7QUFDQTtBQUNBLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsRTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDekU7QUFDQTtBQUNBLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRCx3QkFBd0IsRUFBRSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDLENBQUM7QUFDTixLQUFLO0FBQ0wsSUFBSSxhQUFhLEdBQUc7QUFDcEIsUUFBUSxPQUFPQSxDQUFJLENBQUMsQ0FBQztBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzlCLFVBQVUsRUFBRUMsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLE1BQU0sRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN6QztBQUNBLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDeEQ7QUFDQSxJQUFJLENBQUMsQ0FBQztBQUNOLEtBQUs7QUFDTCxJQUFJLDZCQUE2QixHQUFHO0FBQ3BDLFFBQVEsT0FBT0QsQ0FBSSxDQUFDLENBQUM7QUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM5QixTQUFTLEVBQUVDLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUN4RSxTQUFTLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUMsVUFBVSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFDeEUsU0FBUyxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEtBQUs7QUFDM0IsWUFBWSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNqRSxTQUFTLENBQUM7QUFDVixtQkFBbUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN2RDtBQUNBO0FBQ0EsVUFBVSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDekU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUUsTUFBTTtBQUN4QixZQUFZLElBQUksRUFBRSxDQUFDO0FBQ25CLFlBQVksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxNQUFNLElBQUksSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBRTtBQUNsRyxnQkFBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDekQsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDMUMsYUFBYTtBQUNiLFNBQVMsQ0FBQztBQUNWO0FBQ0EsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDaEU7QUFDQTtBQUNBLFVBQVUsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFNBQVMsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM5QztBQUNBO0FBQ0EsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsS0FBSztBQUN6QixZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakUsU0FBUyxDQUFDO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFO0FBQ0E7QUFDQSxVQUFVLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztBQUNwRTtBQUNBO0FBQ0EsVUFBVSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7QUFDbkU7QUFDQTtBQUNBLFVBQVUsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0FBQ25FO0FBQ0E7QUFDQSxVQUFVLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUUsTUFBTTtBQUN4QixZQUFZLElBQUksRUFBRSxDQUFDO0FBQ25CLFlBQVksSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLE1BQU0sSUFBSSxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLE1BQU0sRUFBRSxFQUFFO0FBQzdHLGdCQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFDMUQsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDMUMsYUFBYTtBQUNiLFNBQVMsQ0FBQztBQUNWO0FBQ0EsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDaEU7QUFDQTtBQUNBLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVDLFFBQVEsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBQ3BFO0FBQ0EsSUFBSSxDQUFDLENBQUM7QUFDTixLQUFLO0FBQ0wsSUFBSSwwQkFBMEIsR0FBRztBQUNqQyxRQUFRLE9BQU9ELENBQUksQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUIsU0FBUyxFQUFFQyxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDeEUsU0FBUyxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVDLFVBQVUsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFNBQVMsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQzNCLFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakUsU0FBUyxDQUFDO0FBQ1YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDdkQ7QUFDQTtBQUNBLFVBQVUsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLE1BQU07QUFDeEIsWUFBWSxJQUFJLEVBQUUsQ0FBQztBQUNuQixZQUFZLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsTUFBTSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUU7QUFDbEcsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDMUMsYUFBYTtBQUNiLFNBQVMsQ0FBQztBQUNWO0FBQ0EsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDaEU7QUFDQTtBQUNBLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVDLFFBQVEsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBQ3BFO0FBQ0Esc0JBQXNCLEVBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDL0QsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFDdEU7QUFDQSxJQUFJLENBQUMsQ0FBQztBQUNOLEtBQUs7QUFDTCxJQUFJLDRCQUE0QixHQUFHO0FBQ25DLFFBQVEsT0FBT0QsQ0FBSSxDQUFDLENBQUM7QUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM5QixTQUFTLEVBQUVDLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUN4RSxTQUFTLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUMsVUFBVSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUQsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFDdEU7QUFDQSxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM3RCxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztBQUNsRTtBQUNBLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVDLFFBQVEsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBQ3BFO0FBQ0EsSUFBSSxDQUFDLENBQUM7QUFDTixLQUFLO0FBQ0wsSUFBSSw0QkFBNEIsR0FBRztBQUNuQyxRQUFRLE9BQU9ELENBQUksQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUIsU0FBUyxFQUFFQyxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDeEUsU0FBUyxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVDLFVBQVUsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEVBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVELFFBQVEsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFO0FBQ0Esc0JBQXNCLEVBQUUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0QsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDbEU7QUFDQSxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QyxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztBQUNwRTtBQUNBLElBQUksQ0FBQyxDQUFDO0FBQ04sS0FBSztBQUNMLElBQUksNkJBQTZCLEdBQUc7QUFDcEMsUUFBUSxPQUFPRCxDQUFJLENBQUMsQ0FBQztBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzlCLFVBQVUsRUFBRUMsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFNBQVMsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFNBQVMsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM1QztBQUNBO0FBQ0Esc0JBQXNCLEVBQUUsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDNUMsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7QUFDcEU7QUFDQSxJQUFJLENBQUMsQ0FBQztBQUNOLEtBQUs7QUFDTCxJQUFJLCtCQUErQixHQUFHO0FBQ3RDLFFBQVEsT0FBT0QsQ0FBSSxDQUFDLENBQUM7QUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM5QixTQUFTLEVBQUVDLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUN4RSxTQUFTLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUMsVUFBVSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QyxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztBQUNwRTtBQUNBLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RCxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztBQUNsRTtBQUNBLElBQUksQ0FBQyxDQUFDO0FBQ04sS0FBSztBQUNMLElBQUksK0JBQStCLEdBQUc7QUFDdEMsUUFBUSxPQUFPRCxDQUFJLENBQUMsQ0FBQztBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzlCLFNBQVMsRUFBRUMsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFNBQVMsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM1QyxVQUFVLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztBQUN4RTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVDLFFBQVEsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBQ3BFO0FBQ0Esc0JBQXNCLEVBQUUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0QsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDbEU7QUFDQSxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekQsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFDdEU7QUFDQSxJQUFJLENBQUMsQ0FBQztBQUNOLEtBQUs7QUFDTCxJQUFJLDhCQUE4QixHQUFHO0FBQ3JDLFFBQVEsT0FBT0QsQ0FBSSxDQUFDLENBQUM7QUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM5QixTQUFTLEVBQUVDLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUN4RSxTQUFTLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUMsc0JBQXNCLEVBQUUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDaEUsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDbEU7QUFDQSxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QyxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztBQUNwRTtBQUNBLElBQUksQ0FBQyxDQUFDO0FBQ04sS0FBSztBQUNMLElBQUkscUNBQXFDLEdBQUc7QUFDNUMsUUFBUSxPQUFPRCxDQUFJLENBQUMsQ0FBQztBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzlCLFNBQVMsRUFBRUMsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFNBQVMsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM1QyxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QyxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztBQUNwRTtBQUNBLElBQUksQ0FBQyxDQUFDO0FBQ04sS0FBSztBQUNMLElBQUksdUJBQXVCLEdBQUc7QUFDOUIsUUFBUSxPQUFPRCxDQUFJLENBQUMsQ0FBQztBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzlCLFNBQVMsRUFBRUMsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFNBQVMsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM1QyxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekQsUUFBUSxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDbEU7QUFDQSxzQkFBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QyxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztBQUNwRTtBQUNBLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdELFFBQVEsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFO0FBQ0EsSUFBSSxDQUFDLENBQUM7QUFDTixLQUFLO0FBQ0wsSUFBSSw4QkFBOEIsR0FBRztBQUNyQyxRQUFRLE9BQU9ELENBQUksQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUIsU0FBUyxFQUFFQyxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDeEUsU0FBUyxFQUFFQSxDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVDLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RCxRQUFRLEVBQUVBLENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztBQUN0RTtBQUNBLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVDLFFBQVEsRUFBRUEsQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBQ3BFO0FBQ0EsSUFBSSxDQUFDLENBQUM7QUFDTixLQUFLO0FBQ0wsRUFBRTtBQUNGLFVBQVUsQ0FBQztBQUNYLElBQUlDLEdBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUM5QixDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMzQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3RCLElBQUlDLEdBQWEsQ0FBQyxXQUFXLENBQUM7QUFDOUIsQ0FBQyxFQUFFLFFBQVEsQ0FBQzs7OzsifQ==
