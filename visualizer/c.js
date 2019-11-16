!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t()}(this,function(){"use strict";function e(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function t(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild);return e}function r(e,r){return t(e).appendChild(r)}function n(e,t,r,n){var i=document.createElement(e);if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function i(e,t,r,i){var o=n(e,t,r,i);return o.setAttribute("role","presentation"),o}function o(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function l(){var e;try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}function s(t,r){var n=t.className;e(r).test(n)||(t.className+=(n?" ":"")+r)}function a(t,r){for(var n=t.split(" "),i=0;i<n.length;i++)n[i]&&!e(n[i]).test(r)&&(r+=" "+n[i]);return r}function u(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function c(e,t,r){t||(t={});for(var n in e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n]);return t}function f(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o);if(s<0||s>=t)return l+(t-o);l+=s-o,l+=r-l%r,o=s+1}}function h(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return-1}function d(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length);var l=o-n;if(o==e.length||i+l>=t)return n+Math.min(l,t-i);if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n}}function p(e){for(;Kl.length<=e;)Kl.push(g(Kl)+" ");return Kl[e]}function g(e){return e[e.length-1]}function v(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n);return r}function m(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++;e.splice(n,0,t)}function y(){}function b(e,t){var r;return Object.create?r=Object.create(e):(y.prototype=e,r=new y),t&&c(t,r),r}function w(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||jl.test(e))}function x(e,t){return t?!!(t.source.indexOf("\\w")>-1&&w(e))||t.test(e):w(e)}function C(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}function S(e){return e.charCodeAt(0)>=768&&Xl.test(e)}function L(e,t,r){for(;(r<0?t>0:t<e.length)&&S(e.charAt(t));)t+=r;return t}function k(e,t,r){for(var n=t>r?-1:1;;){if(t==r)return t;var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i);if(o==t)return e(o)?t:r;e(o)?r=o:t=o+n}}function T(e,t,r){var o=this;this.input=r,o.scrollbarFiller=n("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=n("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=i("div",null,"CodeMirror-code"),o.selectionDiv=n("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=n("div",null,"CodeMirror-cursors"),o.measure=n("div",null,"CodeMirror-measure"),o.lineMeasure=n("div",null,"CodeMirror-measure"),o.lineSpace=i("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var l=i("div",[o.lineSpace],"CodeMirror-lines");o.mover=n("div",[l],null,"position: relative"),o.sizer=n("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=n("div",null,null,"position: absolute; height: "+Rl+"px; width: 1px;"),o.gutters=n("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=n("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=n("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),gl&&vl<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),ml||fl&&Tl||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,r.init(o)}function M(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize();if(t<o){r=i;break}t-=o}return r.lines[t]}function N(e,t,r){var n=[],i=t.line;return e.iter(t.line,r.line+1,function(e){var o=e.text;i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function O(e,t,r){var n=[];return e.iter(t,r,function(e){n.push(e.text)}),n}function A(e,t){var r=t-e.height;if(r)for(var n=e;n;n=n.parent)n.height+=r}function W(e){if(null==e.parent)return null;for(var t=e.parent,r=h(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize();return r+t.first}function D(e,t){var r=e.first;e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height;if(t<o){e=i;continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines);for(var l=0;l<e.lines.length;++l){var s=e.lines[l].height;if(t<s)break;t-=s}return r+l}function H(e,t){return t>=e.first&&t<e.first+e.size}function F(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function P(e,t,r){if(void 0===r&&(r=null),!(this instanceof P))return new P(e,t,r);this.line=e,this.ch=t,this.sticky=r}function E(e,t){return e.line-t.line||e.ch-t.ch}function z(e,t){return e.sticky==t.sticky&&0==E(e,t)}function I(e){return P(e.line,e.ch)}function R(e,t){return E(e,t)<0?t:e}function B(e,t){return E(e,t)<0?e:t}function G(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function U(e,t){if(t.line<e.first)return P(e.first,0);var r=e.first+e.size-1;return t.line>r?P(r,M(e,r).text.length):V(t,M(e,t.line).text.length)}function V(e,t){var r=e.ch;return null==r||r>t?P(e.line,t):r<0?P(e.line,0):e}function K(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=U(e,t[n]);return r}function j(){Yl=!0}function X(){_l=!0}function Y(e,t,r){this.marker=e,this.from=t,this.to=r}function _(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r];if(n.marker==t)return n}}function $(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n]);return r}function q(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function Z(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Y(l,o.from,s?null:o.to))}}return n}function Q(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Y(l,s?null:o.from-t,null==o.to?null:o.to-t))}}return n}function J(e,t){if(t.full)return null;var r=H(e,t.from.line)&&M(e,t.from.line).markedSpans,n=H(e,t.to.line)&&M(e,t.to.line).markedSpans;if(!r&&!n)return null;var i=t.from.ch,o=t.to.ch,l=0==E(t.from,t.to),s=Z(r,i,l),a=Q(n,o,l),u=1==t.text.length,c=g(t.text).length+(u?i:0);if(s)for(var f=0;f<s.length;++f){var h=s[f];if(null==h.to){var d=_(a,h.marker);d?u&&(h.to=null==d.to?null:d.to+c):h.to=i}}if(a)for(var p=0;p<a.length;++p){var v=a[p];null!=v.to&&(v.to+=c),null==v.from?_(s,v.marker)||(v.from=c,u&&(s||(s=[])).push(v)):(v.from+=c,u&&(s||(s=[])).push(v))}s&&(s=ee(s)),a&&a!=s&&(a=ee(a));var m=[s];if(!u){var y,b=t.text.length-2;if(b>0&&s)for(var w=0;w<s.length;++w)null==s[w].to&&(y||(y=[])).push(new Y(s[w].marker,null,null));for(var x=0;x<b;++x)m.push(y);m.push(a)}return m}function ee(e){for(var t=0;t<e.length;++t){var r=e[t];null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function te(e,t,r){var n=null;if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker;!r.readOnly||n&&-1!=h(n,r)||(n||(n=[])).push(r)}}),!n)return null;for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a];if(!(E(u.to,s.from)<0||E(u.from,s.to)>0)){var c=[a,1],f=E(u.from,s.from),d=E(u.to,s.to);(f<0||!l.inclusiveLeft&&!f)&&c.push({from:u.from,to:s.from}),(d>0||!l.inclusiveRight&&!d)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-3}}return i}function re(e){var t=e.markedSpans;if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e);e.markedSpans=null}}function ne(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e);e.markedSpans=t}}function ie(e){return e.inclusiveLeft?-1:0}function oe(e){return e.inclusiveRight?1:0}function le(e,t){var r=e.lines.length-t.lines.length;if(0!=r)return r;var n=e.find(),i=t.find(),o=E(n.from,i.from)||ie(e)-ie(t);if(o)return-o;var l=E(n.to,i.to)||oe(e)-oe(t);return l||t.id-e.id}function se(e,t){var r,n=_l&&e.markedSpans;if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||le(r,i.marker)<0)&&(r=i.marker);return r}function ae(e){return se(e,!0)}function ue(e){return se(e,!1)}function ce(e,t,r,n,i){var o=M(e,t),l=_l&&o.markedSpans;if(l)for(var s=0;s<l.length;++s){var a=l[s];if(a.marker.collapsed){var u=a.marker.find(0),c=E(u.from,r)||ie(a.marker)-ie(i),f=E(u.to,n)||oe(a.marker)-oe(i);if(!(c>=0&&f<=0||c<=0&&f>=0)&&(c<=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?E(u.to,r)>=0:E(u.to,r)>0)||c>=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?E(u.from,n)<=0:E(u.from,n)<0)))return!0}}}function fe(e){for(var t;t=ae(e);)e=t.find(-1,!0).line;return e}function he(e){for(var t;t=ue(e);)e=t.find(1,!0).line;return e}function de(e){for(var t,r;t=ue(e);)e=t.find(1,!0).line,(r||(r=[])).push(e);return r}function pe(e,t){var r=M(e,t),n=fe(r);return r==n?t:W(n)}function ge(e,t){if(t>e.lastLine())return t;var r,n=M(e,t);if(!ve(e,n))return t;for(;r=ue(n);)n=r.find(1,!0).line;return W(n)+1}function ve(e,t){var r=_l&&t.markedSpans;if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0;if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&me(e,t,n))return!0}}function me(e,t,r){if(null==r.to){var n=r.marker.find(1,!0);return me(e,n.line,_(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0;for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&me(e,t,i))return!0}function ye(e){for(var t=0,r=(e=fe(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n];if(i==e)break;t+=i.height}for(var o=r.parent;o;r=o,o=r.parent)for(var l=0;l<o.children.length;++l){var s=o.children[l];if(s==r)break;t+=s.height}return t}function be(e){if(0==e.height)return 0;for(var t,r=e.text.length,n=e;t=ae(n);){var i=t.find(0,!0);n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=ue(n);){var o=t.find(0,!0);r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch}return r}function we(e){var t=e.display,r=e.doc;t.maxLine=M(r,r.first),t.maxLineLength=be(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=be(e);r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function xe(e,t,r,n){if(!e)return n(t,r,"ltr",0);for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}function Ce(e,t,r){var n;$l=null;for(var i=0;i<e.length;++i){var o=e[i];if(o.from<t&&o.to>t)return i;o.to==t&&(o.from!=o.to&&"before"==r?n=i:$l=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:$l=i)}return null!=n?n:$l}function Se(e,t){var r=e.order;return null==r&&(r=e.order=ql(e.text,t)),r}function Le(e,t){return e._handlers&&e._handlers[t]||Zl}function ke(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent("on"+t,r);else{var n=e._handlers,i=n&&n[t];if(i){var o=h(i,r);o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function Te(e,t){var r=Le(e,t);if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function Me(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Te(e,r||t.type,e,t),He(t)||t.codemirrorIgnore}function Ne(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==h(r,t[n])&&r.push(t[n])}function Oe(e,t){return Le(e,t).length>0}function Ae(e){e.prototype.on=function(e,t){Ql(this,e,t)},e.prototype.off=function(e,t){ke(this,e,t)}}function We(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function De(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function He(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Fe(e){We(e),De(e)}function Pe(e){return e.target||e.srcElement}function Ee(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),Ml&&e.ctrlKey&&1==t&&(t=3),t}function ze(e){if(null==zl){var t=n("span","​");r(e,n("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(zl=t.offsetWidth<=1&&t.offsetHeight>2&&!(gl&&vl<8))}var i=zl?n("span","​"):n("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return i.setAttribute("cm-text",""),i}function Ie(e){if(null!=Il)return Il;var n=r(e,document.createTextNode("AخA")),i=Wl(n,0,1).getBoundingClientRect(),o=Wl(n,1,2).getBoundingClientRect();return t(e),!(!i||i.left==i.right)&&(Il=o.right-i.right<3)}function Re(e){if(null!=ns)return ns;var t=r(e,n("span","x")),i=t.getBoundingClientRect(),o=Wl(t,0,1).getBoundingClientRect();return ns=Math.abs(i.left-o.left)>1}function Be(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),is[e]=t}function Ge(e){if("string"==typeof e&&os.hasOwnProperty(e))e=os[e];else if(e&&"string"==typeof e.name&&os.hasOwnProperty(e.name)){var t=os[e.name];"string"==typeof t&&(t={name:t}),(e=b(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Ge("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Ge("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ue(e,t){t=Ge(t);var r=is[t.name];if(!r)return Ue(e,"text/plain");var n=r(e,t);if(ls.hasOwnProperty(t.name)){var i=ls[t.name];for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var l in t.modeProps)n[l]=t.modeProps[l];return n}function Ve(e,t){c(t,ls.hasOwnProperty(e)?ls[e]:ls[e]={})}function Ke(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var r={};for(var n in t){var i=t[n];i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function je(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode;return r||{mode:e,state:t}}function Xe(e,t,r){return!e.startState||e.startState(t,r)}function Ye(e,t,r,n){var i=[e.state.modeGen],o={};tt(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n);for(var l=r.state,s=0;s<e.state.overlays.length;++s)!function(n){r.baseTokens=i;var s=e.state.overlays[n],a=1,u=0;r.state=!0,tt(e,t.text,s.mode,r,function(e,t){for(var r=a;u<e;){var n=i[a];n>e&&i.splice(a,1,e,i[a+1],n),a+=2,u=Math.min(e,n)}if(t)if(s.opaque)i.splice(r,a-r,e,"overlay "+t),a=r+2;else for(;r<a;r+=2){var o=i[r+1];i[r+1]=(o?o+" ":"")+"overlay "+t}},o),r.state=l,r.baseTokens=null,r.baseTokenPos=1}(s);return{styles:i,classes:o.bgClass||o.textClass?o:null}}function _e(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=$e(e,W(t)),i=t.text.length>e.options.maxHighlightLength&&Ke(e.doc.mode,n.state),o=Ye(e,t,n);i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function $e(e,t,r){var n=e.doc,i=e.display;if(!n.mode.startState)return new us(n,!0,t);var o=rt(e,t,r),l=o>n.first&&M(n,o-1).stateAfter,s=l?us.fromSaved(n,l,o):new us(n,Xe(n.mode),o);return n.iter(o,t,function(r){qe(e,r.text,s);var n=s.line;r.stateAfter=n==t-1||n%5==0||n>=i.viewFrom&&n<i.viewTo?s.save():null,s.nextLine()}),r&&(n.modeFrontier=s.line),s}function qe(e,t,r,n){var i=e.doc.mode,o=new ss(t,e.options.tabSize,r);for(o.start=o.pos=n||0,""==t&&Ze(i,r.state);!o.eol();)Qe(i,o,r.state),o.start=o.pos}function Ze(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var r=je(e,t);return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function Qe(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=je(e,r).mode);var o=e.token(t,r);if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function Je(e,t,r,n){var i,o,l=e.doc,s=l.mode,a=M(l,(t=U(l,t)).line),u=$e(e,t.line,r),c=new ss(a.text,e.options.tabSize,u);for(n&&(o=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=Qe(s,c,u.state),n&&o.push(new cs(c,i,Ke(l.mode,u.state)));return n?o:new cs(c,i,u.state)}function et(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!r)break;e=e.slice(0,r.index)+e.slice(r.index+r[0].length);var n=r[1]?"bgClass":"textClass";null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function tt(e,t,r,n,i,o,l){var s=r.flattenSpans;null==s&&(s=e.options.flattenSpans);var a,u=0,c=null,f=new ss(t,e.options.tabSize,n),h=e.options.addModeClass&&[null];for(""==t&&et(Ze(r,n.state),o);!f.eol();){if(f.pos>e.options.maxHighlightLength?(s=!1,l&&qe(e,t,n,f.pos),f.pos=t.length,a=null):a=et(Qe(r,f,n.state,h),o),h){var d=h[0].name;d&&(a="m-"+(a?d+" "+a:d))}if(!s||c!=a){for(;u<f.start;)i(u=Math.min(f.start,u+5e3),c);c=a}f.start=f.pos}for(;u<f.pos;){var p=Math.min(f.pos,u+5e3);i(p,c),u=p}}function rt(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first;var a=M(o,s-1),u=a.stateAfter;if(u&&(!r||s+(u instanceof as?u.lookAhead:0)<=o.modeFrontier))return s;var c=f(a.text,null,e.options.tabSize);(null==i||n>c)&&(i=s-1,n=c)}return i}function nt(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;n>r;n--){var i=M(e,n).stateAfter;if(i&&(!(i instanceof as)||n+i.lookAhead<t)){r=n+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}}function it(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),re(e),ne(e,r);var i=n?n(e):1;i!=e.height&&A(e,i)}function ot(e){e.parent=null,re(e)}function lt(e,t){if(!e||/^\s*$/.test(e))return null;var r=t.addModeClass?ps:ds;return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function st(e,t){var r=i("span",null,null,ml?"padding-right: .1px":null),n={pre:i("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:(gl||ml)&&e.getOption("lineWrapping")};t.measure={};for(var o=0;o<=(t.rest?t.rest.length:0);o++){var l=o?t.rest[o-1]:t.line,s=void 0;n.pos=0,n.addToken=ut,Ie(e.display.measure)&&(s=Se(l,e.doc.direction))&&(n.addToken=ft(n.addToken,s)),n.map=[],dt(l,n,_e(e,l,t!=e.display.externalMeasured&&W(l))),l.styleClasses&&(l.styleClasses.bgClass&&(n.bgClass=a(l.styleClasses.bgClass,n.bgClass||"")),l.styleClasses.textClass&&(n.textClass=a(l.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(ze(e.display.measure))),0==o?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(ml){var u=n.content.lastChild;(/\bcm-tab\b/.test(u.className)||u.querySelector&&u.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return Te(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=a(n.pre.className,n.textClass||"")),n}function at(e){var t=n("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function ut(e,t,r,i,o,l,s){if(t){var a,u=e.splitSpaces?ct(t,e.trailingSpace):t,c=e.cm.state.specialChars,f=!1;if(c.test(t)){a=document.createDocumentFragment();for(var h=0;;){c.lastIndex=h;var d=c.exec(t),g=d?d.index-h:t.length-h;if(g){var v=document.createTextNode(u.slice(h,h+g));gl&&vl<9?a.appendChild(n("span",[v])):a.appendChild(v),e.map.push(e.pos,e.pos+g,v),e.col+=g,e.pos+=g}if(!d)break;h+=g+1;var m=void 0;if("\t"==d[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(m=a.appendChild(n("span",p(b),"cm-tab"))).setAttribute("role","presentation"),m.setAttribute("cm-text","\t"),e.col+=b}else"\r"==d[0]||"\n"==d[0]?((m=a.appendChild(n("span","\r"==d[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",d[0]),e.col+=1):((m=e.cm.options.specialCharPlaceholder(d[0])).setAttribute("cm-text",d[0]),gl&&vl<9?a.appendChild(n("span",[m])):a.appendChild(m),e.col+=1);e.map.push(e.pos,e.pos+1,m),e.pos++}}else e.col+=t.length,a=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,a),gl&&vl<9&&(f=!0),e.pos+=t.length;if(e.trailingSpace=32==u.charCodeAt(t.length-1),r||i||o||f||s){var w=r||"";i&&(w+=i),o&&(w+=o);var x=n("span",[a],w,s);return l&&(x.title=l),e.content.appendChild(x)}e.content.appendChild(a)}}function ct(e,t){if(e.length>1&&!/  /.test(e))return e;for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i);" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}function ft(e,t){return function(r,n,i,o,l,s,a){i=i?i+" cm-force-border":"cm-force-border";for(var u=r.pos,c=u+n.length;;){for(var f=void 0,h=0;h<t.length&&!((f=t[h]).to>u&&f.from<=u);h++);if(f.to>=c)return e(r,n,i,o,l,s,a);e(r,n.slice(0,f.to-u),i,o,null,s,a),o=null,n=n.slice(f.to-u),u=f.to}}}function ht(e,t,r,n){var i=!n&&r.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function dt(e,t,r){var n=e.markedSpans,i=e.text,o=0;if(n)for(var l,s,a,u,c,f,h,d=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=f=s="",h=null,m=1/0;for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],C=x.marker;"bookmark"==C.type&&x.from==p&&C.widgetNode?y.push(C):x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(b||(b=[])).push(C.endStyle,x.to),C.title&&!f&&(f=C.title),C.collapsed&&(!h||le(h.marker,C)<0)&&(h=x)):x.from>p&&m>x.from&&(m=x.from)}if(b)for(var S=0;S<b.length;S+=2)b[S+1]==m&&(u+=" "+b[S]);if(!h||h.from==p)for(var L=0;L<y.length;++L)ht(t,0,y[L]);if(h&&(h.from||0)==p){if(ht(t,(null==h.to?d+1:h.to)-p,h.marker,null==h.from),null==h.to)return;h.to==p&&(h=!1)}}if(p>=d)break;for(var k=Math.min(d,m);;){if(v){var T=p+v.length;if(!h){var M=T>k?v.slice(0,k-p):v;t.addToken(t,M,l?l+a:a,c,p+M.length==m?u:"",f,s)}if(T>=k){v=v.slice(k-p),p=k;break}p=T,c=""}v=i.slice(o,o=r[g++]),l=lt(r[g++],t.cm.options)}}else for(var N=1;N<r.length;N+=2)t.addToken(t,i.slice(o,o=r[N]),lt(r[N+1],t.cm.options))}function pt(e,t,r){this.line=t,this.rest=de(t),this.size=this.rest?W(g(this.rest))-r+1:1,this.node=this.text=null,this.hidden=ve(e,t)}function gt(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new pt(e.doc,M(e.doc,o),o);n=o+l.size,i.push(l)}return i}function vt(e){gs?gs.ops.push(e):e.ownsGroup=gs={ops:[e],delayedCallbacks:[]}}function mt(e){var t=e.delayedCallbacks,r=0;do{for(;r<t.length;r++)t[r].call(null);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}function yt(e,t){var r=e.ownsGroup;if(r)try{mt(r)}finally{gs=null,t(r)}}function bt(e,t){var r=Le(e,t);if(r.length){var n,i=Array.prototype.slice.call(arguments,2);gs?n=gs.delayedCallbacks:vs?n=vs:(n=vs=[],setTimeout(wt,0));for(var o=0;o<r.length;++o)!function(e){n.push(function(){return r[e].apply(null,i)})}(o)}}function wt(){var e=vs;vs=null;for(var t=0;t<e.length;++t)e[t]()}function xt(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?kt(e,t):"gutter"==o?Mt(e,t,r,n):"class"==o?Tt(e,t):"widget"==o&&Nt(e,t,n)}t.changes=null}function Ct(e){return e.node==e.text&&(e.node=n("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),gl&&vl<8&&(e.node.style.zIndex=2)),e.node}function St(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null);else if(r){var i=Ct(t);t.background=i.insertBefore(n("div",null,r),i.firstChild),e.display.input.setUneditable(t.background)}}function Lt(e,t){var r=e.display.externalMeasured;return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):st(e,t)}function kt(e,t){var r=t.text.className,n=Lt(e,t);t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,Tt(e,t)):r&&(t.text.className=r)}function Tt(e,t){St(e,t),t.line.wrapClass?Ct(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=r||""}function Mt(e,t,r,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var o=Ct(t);t.gutterBackground=n("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),o.insertBefore(t.gutterBackground,t.text)}var l=t.line.gutterMarkers;if(e.options.lineNumbers||l){var s=Ct(t),a=t.gutter=n("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(e.display.input.setUneditable(a),s.insertBefore(a,t.text),t.line.gutterClass&&(a.className+=" "+t.line.gutterClass),!e.options.lineNumbers||l&&l["CodeMirror-linenumbers"]||(t.lineNumber=a.appendChild(n("div",F(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),l)for(var u=0;u<e.options.gutters.length;++u){var c=e.options.gutters[u],f=l.hasOwnProperty(c)&&l[c];f&&a.appendChild(n("div",[f],"CodeMirror-gutter-elt","left: "+i.gutterLeft[c]+"px; width: "+i.gutterWidth[c]+"px"))}}}function Nt(e,t,r){t.alignable&&(t.alignable=null);for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n);At(e,t,r)}function Ot(e,t,r,n){var i=Lt(e,t);return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),Tt(e,t),Mt(e,t,r,n),At(e,t,n),t.node}function At(e,t,r){if(Wt(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)Wt(e,t.rest[n],t,r,!1)}function Wt(e,t,r,i,o){if(t.widgets)for(var l=Ct(r),s=0,a=t.widgets;s<a.length;++s){var u=a[s],c=n("div",[u.node],"CodeMirror-linewidget");u.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),Dt(u,c,r,i),e.display.input.setUneditable(c),o&&u.above?l.insertBefore(c,r.gutter||r.text):l.appendChild(c),bt(u,"redraw")}}function Dt(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t);var i=n.wrapperWidth;t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function Ht(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!o(document.body,e.node)){var i="position: relative;";e.coverGutter&&(i+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(i+="width: "+t.display.wrapper.clientWidth+"px;"),r(t.display.measure,n("div",[e.node],null,i))}return e.height=e.node.parentNode.offsetHeight}function Ft(e,t){for(var r=Pe(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function Pt(e){return e.lineSpace.offsetTop}function Et(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function zt(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=r(e.measure,n("pre","x")),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,o={left:parseInt(i.paddingLeft),right:parseInt(i.paddingRight)};return isNaN(o.left)||isNaN(o.right)||(e.cachedPaddingH=o),o}function It(e){return Rl-e.display.nativeBarWidth}function Rt(e){return e.display.scroller.clientWidth-It(e)-e.display.barWidth}function Bt(e){return e.display.scroller.clientHeight-It(e)-e.display.barHeight}function Gt(e,t,r){var n=e.options.lineWrapping,i=n&&Rt(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1];Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}function Ut(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]};for(var i=0;i<e.rest.length;i++)if(W(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Vt(e,t){var n=W(t=fe(t)),i=e.display.externalMeasured=new pt(e.doc,t,n);i.lineN=n;var o=i.built=st(e,i);return i.text=o.pre,r(e.display.lineMeasure,o.pre),i}function Kt(e,t,r,n){return Yt(e,Xt(e,t),r,n)}function jt(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Lr(e,t)];var r=e.display.externalMeasured;return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Xt(e,t){var r=W(t),n=jt(e,r);n&&!n.text?n=null:n&&n.changes&&(xt(e,n,r,br(e)),e.curOp.forceUpdate=!0),n||(n=Vt(e,t));var i=Ut(n,t,r);return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Yt(e,t,r,n,i){t.before&&(r=-1);var o,l=r+(n||"");return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(Gt(e,t.view,t.rect),t.hasHeights=!0),(o=qt(e,t,r,n)).bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function _t(e,t,r){for(var n,i,o,l,s,a,u=0;u<e.length;u+=3)if(s=e[u],a=e[u+1],t<s?(i=0,o=1,l="left"):t<a?o=(i=t-s)+1:(u==e.length-3||t==a&&e[u+3]>t)&&(i=(o=a-s)-1,t>=a&&(l="right")),null!=i){if(n=e[u+2],s==a&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[2+(u-=3)],l="left";if("right"==r&&i==a-s)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],l="right";break}return{node:n,start:i,end:o,collapse:l,coverStart:s,coverEnd:a}}function $t(e,t){var r=ms;if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function qt(e,t,r,n){var i,o=_t(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse;if(3==l.nodeType){for(var c=0;c<4;c++){for(;s&&S(t.line.text.charAt(o.coverStart+s));)--s;for(;o.coverStart+a<o.coverEnd&&S(t.line.text.charAt(o.coverStart+a));)++a;if((i=gl&&vl<9&&0==s&&a==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():$t(Wl(l,s,a).getClientRects(),n)).left||i.right||0==s)break;a=s,s-=1,u="right"}gl&&vl<11&&(i=Zt(e.display.measure,i))}else{s>0&&(u=n="right");var f;i=e.options.lineWrapping&&(f=l.getClientRects()).length>1?f["right"==n?f.length-1:0]:l.getBoundingClientRect()}if(gl&&vl<9&&!s&&(!i||!i.left&&!i.right)){var h=l.parentNode.getClientRects()[0];i=h?{left:h.left,right:h.left+yr(e.display),top:h.top,bottom:h.bottom}:ms}for(var d=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(d+p)/2,v=t.view.measure.heights,m=0;m<v.length-1&&!(g<v[m]);m++);var y=m?v[m-1]:0,b=v[m],w={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:y,bottom:b};return i.left||i.right||(w.bogus=!0),e.options.singleCursorHeightPerLine||(w.rtop=d,w.rbottom=p),w}function Zt(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Re(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function Qt(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Jt(e){e.display.externalMeasure=null,t(e.display.lineMeasure);for(var r=0;r<e.display.view.length;r++)Qt(e.display.view[r])}function er(e){Jt(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function tr(){return bl&&kl?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function rr(){return bl&&kl?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function nr(e){var t=0;if(e.widgets)for(var r=0;r<e.widgets.length;++r)e.widgets[r].above&&(t+=Ht(e.widgets[r]));return t}function ir(e,t,r,n,i){if(!i){var o=nr(t);r.top+=o,r.bottom+=o}if("line"==n)return r;n||(n="local");var l=ye(t);if("local"==n?l+=Pt(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect();l+=s.top+("window"==n?0:rr());var a=s.left+("window"==n?0:tr());r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function or(e,t,r){if("div"==r)return t;var n=t.left,i=t.top;if("page"==r)n-=tr(),i-=rr();else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect();n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect();return{left:n-l.left,top:i-l.top}}function lr(e,t,r,n,i){return n||(n=M(e.doc,t.line)),ir(e,n,Kt(e,n,t.ch,i),r)}function sr(e,t,r,n,i,o){function l(t,l){var s=Yt(e,i,t,l?"right":"left",o);return l?s.left=s.right:s.right=s.left,ir(e,n,s,r)}function s(e,t,r){var n=1==a[t].level;return l(r?e-1:e,n!=r)}n=n||M(e.doc,t.line),i||(i=Xt(e,n));var a=Se(n,e.doc.direction),u=t.ch,c=t.sticky;if(u>=n.text.length?(u=n.text.length,c="before"):u<=0&&(u=0,c="after"),!a)return l("before"==c?u-1:u,"before"==c);var f=Ce(a,u,c),h=$l,d=s(u,f,"before"==c);return null!=h&&(d.other=s(u,h,"before"!=c)),d}function ar(e,t){var r=0;t=U(e.doc,t),e.options.lineWrapping||(r=yr(e.display)*t.ch);var n=M(e.doc,t.line),i=ye(n)+Pt(e.display);return{left:r,right:r,top:i,bottom:i+n.height}}function ur(e,t,r,n,i){var o=P(e,t,r);return o.xRel=i,n&&(o.outside=!0),o}function cr(e,t,r){var n=e.doc;if((r+=e.display.viewOffset)<0)return ur(n.first,0,null,!0,-1);var i=D(n,r),o=n.first+n.size-1;if(i>o)return ur(n.first+n.size-1,M(n,o).text.length,null,!0,1);t<0&&(t=0);for(var l=M(n,i);;){var s=pr(e,l,i,t,r),a=ue(l),u=a&&a.find(0,!0);if(!a||!(s.ch>u.from.ch||s.ch==u.from.ch&&s.xRel>0))return s;i=W(l=u.to.line)}}function fr(e,t,r,n){n-=nr(t);var i=t.text.length,o=k(function(t){return Yt(e,r,t-1).bottom<=n},i,0);return i=k(function(t){return Yt(e,r,t).top>n},o,i),{begin:o,end:i}}function hr(e,t,r,n){return r||(r=Xt(e,t)),fr(e,t,r,ir(e,t,Yt(e,r,n),"line").top)}function dr(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function pr(e,t,r,n,i){i-=ye(t);var o=Xt(e,t),l=nr(t),s=0,a=t.text.length,u=!0,c=Se(t,e.doc.direction);if(c){var f=(e.options.lineWrapping?vr:gr)(e,t,r,o,c,n,i);s=(u=1!=f.level)?f.from:f.to-1,a=u?f.to:f.from-1}var h,d,p=null,g=null,v=k(function(t){var r=Yt(e,o,t);return r.top+=l,r.bottom+=l,!!dr(r,n,i,!1)&&(r.top<=i&&r.left<=n&&(p=t,g=r),!0)},s,a),m=!1;if(g){var y=n-g.left<g.right-n,b=y==u;v=p+(b?0:1),d=b?"after":"before",h=y?g.left:g.right}else{u||v!=a&&v!=s||v++,d=0==v?"after":v==t.text.length?"before":Yt(e,o,v-(u?1:0)).bottom+l<=i==u?"after":"before";var w=sr(e,P(r,v,d),"line",t,o);h=w.left,m=i<w.top||i>=w.bottom}return v=L(t.text,v,1),ur(r,v,d,m,n-h)}function gr(e,t,r,n,i,o,l){var s=k(function(s){var a=i[s],u=1!=a.level;return dr(sr(e,P(r,u?a.to:a.from,u?"before":"after"),"line",t,n),o,l,!0)},0,i.length-1),a=i[s];if(s>0){var u=1!=a.level,c=sr(e,P(r,u?a.from:a.to,u?"after":"before"),"line",t,n);dr(c,o,l,!0)&&c.top>l&&(a=i[s-1])}return a}function vr(e,t,r,n,i,o,l){var s=fr(e,t,n,l),a=s.begin,u=s.end;/\s/.test(t.text.charAt(u-1))&&u--;for(var c=null,f=null,h=0;h<i.length;h++){var d=i[h];if(!(d.from>=u||d.to<=a)){var p=Yt(e,n,1!=d.level?Math.min(u,d.to)-1:Math.max(a,d.from)).right,g=p<o?o-p+1e9:p-o;(!c||f>g)&&(c=d,f=g)}}return c||(c=i[i.length-1]),c.from<a&&(c={from:a,to:c.to,level:c.level}),c.to>u&&(c={from:c.from,to:u,level:c.level}),c}function mr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==hs){hs=n("pre");for(var i=0;i<49;++i)hs.appendChild(document.createTextNode("x")),hs.appendChild(n("br"));hs.appendChild(document.createTextNode("x"))}r(e.measure,hs);var o=hs.offsetHeight/50;return o>3&&(e.cachedTextHeight=o),t(e.measure),o||1}function yr(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=n("span","xxxxxxxxxx"),i=n("pre",[t]);r(e.measure,i);var o=t.getBoundingClientRect(),l=(o.right-o.left)/10;return l>2&&(e.cachedCharWidth=l),l||10}function br(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth;return{fixedPos:wr(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function wr(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function xr(e){var t=mr(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/yr(e.display)-3);return function(i){if(ve(e.doc,i))return 0;var o=0;if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height);return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function Cr(e){var t=e.doc,r=xr(e);t.iter(function(e){var t=r(e);t!=e.height&&A(e,t)})}function Sr(e,t,r,n){var i=e.display;if(!r&&"true"==Pe(t).getAttribute("cm-not-content"))return null;var o,l,s=i.lineSpace.getBoundingClientRect();try{o=t.clientX-s.left,l=t.clientY-s.top}catch(t){return null}var a,u=cr(e,o,l);if(n&&1==u.xRel&&(a=M(e.doc,u.line).text).length==u.ch){var c=f(a,a.length,e.options.tabSize)-a.length;u=P(u.line,Math.max(0,Math.round((o-zt(e.display).left)/yr(e.display))-c))}return u}function Lr(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function kr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Tr(e,t){void 0===t&&(t=!0);for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t||l!=r.sel.primIndex){var s=r.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&Mr(e,s.head,i),a||Or(e,s,o)}}return n}function Mr(e,t,r){var i=sr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),o=r.appendChild(n("div"," ","CodeMirror-cursor"));if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",i.other){var l=r.appendChild(n("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));l.style.display="",l.style.left=i.other.left+"px",l.style.top=i.other.top+"px",l.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function Nr(e,t){return e.top-t.top||e.left-t.left}function Or(e,t,r){function i(e,t,r,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),a.appendChild(n("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?f-e:r)+"px;\n                             height: "+(i-t)+"px"))}function o(t,r,n){function o(r,n){return lr(e,P(t,r),"div",d,n)}function l(t,r,n){var i=hr(e,d,null,t),l="ltr"==r==("after"==n)?"left":"right";return o("after"==n?i.begin:i.end-(/\s/.test(d.text.charAt(i.end-1))?2:1),l)[l]}var a,u,d=M(s,t),p=d.text.length,g=Se(d,s.direction);return xe(g,r||0,null==n?p:n,function(e,t,s,d){var v="ltr"==s,m=o(e,v?"left":"right"),y=o(t-1,v?"right":"left"),b=null==r&&0==e,w=null==n&&t==p,x=0==d,C=!g||d==g.length-1;if(y.top-m.top<=3){var S=(h?b:w)&&x,L=(h?w:b)&&C,k=S?c:(v?m:y).left,T=L?f:(v?y:m).right;i(k,m.top,T-k,m.bottom)}else{var M,N,O,A;v?(M=h&&b&&x?c:m.left,N=h?f:l(e,s,"before"),O=h?c:l(t,s,"after"),A=h&&w&&C?f:y.right):(M=h?l(e,s,"before"):c,N=!h&&b&&x?f:m.right,O=!h&&w&&C?c:y.left,A=h?l(t,s,"after"):f),i(M,m.top,N-M,m.bottom),m.bottom<y.top&&i(c,m.bottom,null,y.top),i(O,y.top,A-O,y.bottom)}(!a||Nr(m,a)<0)&&(a=m),Nr(y,a)<0&&(a=y),(!u||Nr(m,u)<0)&&(u=m),Nr(y,u)<0&&(u=y)}),{start:a,end:u}}var l=e.display,s=e.doc,a=document.createDocumentFragment(),u=zt(e.display),c=u.left,f=Math.max(l.sizerWidth,Rt(e)-l.sizer.offsetLeft)-u.right,h="ltr"==s.direction,d=t.from(),p=t.to();if(d.line==p.line)o(d.line,d.ch,p.ch);else{var g=M(s,d.line),v=M(s,p.line),m=fe(g)==fe(v),y=o(d.line,d.ch,m?g.text.length+1:null).end,b=o(p.line,m?0:null,p.ch).start;m&&(y.top<b.top-2?(i(y.right,y.top,null,y.bottom),i(c,b.top,b.left,b.bottom)):i(y.right,y.top,b.left-y.right,y.bottom)),y.bottom<b.top&&i(c,y.bottom,null,b.top)}r.appendChild(a)}function Ar(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var r=!0;t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Wr(e){e.state.focused||(e.display.input.focus(),Hr(e))}function Dr(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Fr(e))},100)}function Hr(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Te(e,"focus",e,t),e.state.focused=!0,s(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),ml&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ar(e))}function Fr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(Te(e,"blur",e,t),e.state.focused=!1,Fl(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Pr(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=void 0;if(!i.hidden){if(gl&&vl<8){var l=i.node.offsetTop+i.node.offsetHeight;o=l-r,r=l}else{var s=i.node.getBoundingClientRect();o=s.bottom-s.top}var a=i.line.height-o;if(o<2&&(o=mr(t)),(a>.005||a<-.005)&&(A(i.line,o),Er(i.line),i.rest))for(var u=0;u<i.rest.length;u++)Er(i.rest[u])}}}function Er(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight}function zr(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop;n=Math.floor(n-Pt(e));var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=D(t,n),l=D(t,i);if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line;s<o?(o=s,l=D(t,ye(M(t,s))+e.wrapper.clientHeight)):Math.min(a,t.lastLine())>=l&&(o=D(t,ye(M(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function Ir(e){var t=e.display,r=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=wr(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&(r[l].gutter&&(r[l].gutter.style.left=o),r[l].gutterBackground&&(r[l].gutterBackground.style.left=o));var s=r[l].alignable;if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function Rr(e){if(!e.options.lineNumbers)return!1;var t=e.doc,r=F(e.options,t.first+t.size-1),i=e.display;if(r.length!=i.lineNumChars){var o=i.measure.appendChild(n("div",[n("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),l=o.firstChild.offsetWidth,s=o.offsetWidth-l;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(l,i.lineGutter.offsetWidth-s)+1,i.lineNumWidth=i.lineNumInnerWidth+s,i.lineNumChars=i.lineNumInnerWidth?r.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",Wn(e),!0}return!1}function Br(e,t){if(!Me(e,"scrollCursorIntoView")){var r=e.display,i=r.sizer.getBoundingClientRect(),o=null;if(t.top+i.top<0?o=!0:t.bottom+i.top>(window.innerHeight||document.documentElement.clientHeight)&&(o=!1),null!=o&&!Sl){var l=n("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-Pt(e.display))+"px;\n                         height: "+(t.bottom-t.top+It(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(l),l.scrollIntoView(o),e.display.lineSpace.removeChild(l)}}}function Gr(e,t,r,n){null==n&&(n=0);var i;e.options.lineWrapping||t!=r||(r="before"==(t=t.ch?P(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?P(t.line,t.ch+1,"before"):t);for(var o=0;o<5;o++){var l=!1,s=sr(e,t),a=r&&r!=t?sr(e,r):s,u=Vr(e,i={left:Math.min(s.left,a.left),top:Math.min(s.top,a.top)-n,right:Math.max(s.left,a.left),bottom:Math.max(s.bottom,a.bottom)+n}),c=e.doc.scrollTop,f=e.doc.scrollLeft;if(null!=u.scrollTop&&(qr(e,u.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(l=!0)),null!=u.scrollLeft&&(Qr(e,u.scrollLeft),Math.abs(e.doc.scrollLeft-f)>1&&(l=!0)),!l)break}return i}function Ur(e,t){var r=Vr(e,t);null!=r.scrollTop&&qr(e,r.scrollTop),null!=r.scrollLeft&&Qr(e,r.scrollLeft)}function Vr(e,t){var r=e.display,n=mr(e.display);t.top<0&&(t.top=0);var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Bt(e),l={};t.bottom-t.top>o&&(t.bottom=t.top+o);var s=e.doc.height+Et(r),a=t.top<n,u=t.bottom>s-n;if(t.top<i)l.scrollTop=a?0:t.top;else if(t.bottom>i+o){var c=Math.min(t.top,(u?s:t.bottom)-o);c!=i&&(l.scrollTop=c)}var f=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,h=Rt(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),d=t.right-t.left>h;return d&&(t.right=t.left+h),t.left<10?l.scrollLeft=0:t.left<f?l.scrollLeft=Math.max(0,t.left-(d?0:10)):t.right>h+f-3&&(l.scrollLeft=t.right+(d?0:10)-h),l}function Kr(e,t){null!=t&&(_r(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function jr(e){_r(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Xr(e,t,r){null==t&&null==r||_r(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function Yr(e,t){_r(e),e.curOp.scrollToPos=t}function _r(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,$r(e,ar(e,t.from),ar(e,t.to),t.margin))}function $r(e,t,r,n){var i=Vr(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n});Xr(e,i.scrollLeft,i.scrollTop)}function qr(e,t){Math.abs(e.doc.scrollTop-t)<2||(fl||On(e,{top:t}),Zr(e,t,!0),fl&&On(e),Cn(e,100))}function Zr(e,t,r){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Qr(e,t,r,n){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,Ir(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Jr(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Et(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+It(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function en(e,t){t||(t=Jr(e));var r=e.display.barWidth,n=e.display.barHeight;tn(e,t);for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Pr(e),tn(e,Jr(e)),r=e.display.barWidth,n=e.display.barHeight}function tn(e,t){var r=e.display,n=r.scrollbars.update(t);r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}function rn(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Fl(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new ws[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),Ql(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?Qr(e,t):qr(e,t)},e),e.display.scrollbars.addClass&&s(e.display.wrapper,e.display.scrollbars.addClass)}function nn(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++xs},vt(e.curOp)}function on(e){yt(e.curOp,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;ln(e)})}function ln(e){for(var t=e.ops,r=0;r<t.length;r++)sn(t[r]);for(var n=0;n<t.length;n++)an(t[n]);for(var i=0;i<t.length;i++)un(t[i]);for(var o=0;o<t.length;o++)cn(t[o]);for(var l=0;l<t.length;l++)fn(t[l])}function sn(e){var t=e.cm,r=t.display;Ln(t),e.updateMaxLine&&we(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new Cs(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function an(e){e.updatedDisplay=e.mustUpdate&&Mn(e.cm,e.update)}function un(e){var t=e.cm,r=t.display;e.updatedDisplay&&Pr(t),e.barMeasure=Jr(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Kt(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+It(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Rt(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function cn(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Qr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var r=e.focus&&e.focus==l();e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&en(t,e.barMeasure),e.updatedDisplay&&Dn(t,e.barMeasure),e.selectionChanged&&Ar(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Wr(e.cm)}function fn(e){var t=e.cm,r=t.display,n=t.doc;e.updatedDisplay&&Nn(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&Zr(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Qr(t,e.scrollLeft,!0,!0),e.scrollToPos&&Br(t,Gr(t,U(n,e.scrollToPos.from),U(n,e.scrollToPos.to),e.scrollToPos.margin));var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers;if(i)for(var l=0;l<i.length;++l)i[l].lines.length||Te(i[l],"hide");if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&Te(o[s],"unhide");r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Te(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function hn(e,t){if(e.curOp)return t();nn(e);try{return t()}finally{on(e)}}function dn(e,t){return function(){if(e.curOp)return t.apply(e,arguments);nn(e);try{return t.apply(e,arguments)}finally{on(e)}}}function pn(e){return function(){if(this.curOp)return e.apply(this,arguments);nn(this);try{return e.apply(this,arguments)}finally{on(this)}}}function gn(e){return function(){var t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);nn(t);try{return e.apply(this,arguments)}finally{on(t)}}}function vn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0);var i=e.display;if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)_l&&pe(e.doc,t)<i.viewTo&&yn(e);else if(r<=i.viewFrom)_l&&ge(e.doc,r+n)>i.viewFrom?yn(e):(i.viewFrom+=n,i.viewTo+=n);else if(t<=i.viewFrom&&r>=i.viewTo)yn(e);else if(t<=i.viewFrom){var o=bn(e,r,r+n,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):yn(e)}else if(r>=i.viewTo){var l=bn(e,t,t,-1);l?(i.view=i.view.slice(0,l.index),i.viewTo=l.lineN):yn(e)}else{var s=bn(e,t,t,-1),a=bn(e,r,r+n,1);s&&a?(i.view=i.view.slice(0,s.index).concat(gt(e,s.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=n):yn(e)}var u=i.externalMeasured;u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function mn(e,t,r){e.curOp.viewChanged=!0;var n=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Lr(e,t)];if(null!=o.node){var l=o.changes||(o.changes=[]);-1==h(l,r)&&l.push(r)}}}function yn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function bn(e,t,r,n){var i,o=Lr(e,t),l=e.display.view;if(!_l||r==e.doc.first+e.doc.size)return{index:o,lineN:r};for(var s=e.display.viewFrom,a=0;a<o;a++)s+=l[a].size;if(s!=t){if(n>0){if(o==l.length-1)return null;i=s+l[o].size-t,o++}else i=s-t;t+=i,r+=i}for(;pe(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null;r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function wn(e,t,r){var n=e.display;0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=gt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=gt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Lr(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(gt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Lr(e,r)))),n.viewTo=r}function xn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n];i.hidden||i.node&&!i.changes||++r}return r}function Cn(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,u(Sn,e))}function Sn(e){var t=e.doc;if(!(t.highlightFrontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=$e(e,t.highlightFrontier),i=[];t.iter(n.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(n.line>=e.display.viewFrom){var l=o.styles,s=o.text.length>e.options.maxHighlightLength?Ke(t.mode,n.state):null,a=Ye(e,o,n,!0);s&&(n.state=s),o.styles=a.styles;var u=o.styleClasses,c=a.classes;c?o.styleClasses=c:u&&(o.styleClasses=null);for(var f=!l||l.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),h=0;!f&&h<l.length;++h)f=l[h]!=o.styles[h];f&&i.push(n.line),o.stateAfter=n.save(),n.nextLine()}else o.text.length<=e.options.maxHighlightLength&&qe(e,o.text,n),o.stateAfter=n.line%5==0?n.save():null,n.nextLine();if(+new Date>r)return Cn(e,e.options.workDelay),!0}),t.highlightFrontier=n.line,t.modeFrontier=Math.max(t.modeFrontier,n.line),i.length&&hn(e,function(){for(var t=0;t<i.length;t++)mn(e,i[t],"text")})}}function Ln(e){var t=e.display;!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=It(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=It(e)+"px",t.scrollbarsClipped=!0)}function kn(e){if(e.hasFocus())return null;var t=l();if(!t||!o(e.display.lineDiv,t))return null;var r={activeElt:t};if(window.getSelection){var n=window.getSelection();n.anchorNode&&n.extend&&o(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}function Tn(e){if(e&&e.activeElt&&e.activeElt!=l()&&(e.activeElt.focus(),e.anchorNode&&o(document.body,e.anchorNode)&&o(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange();r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset)}}function Mn(e,r){var n=e.display,i=e.doc;if(r.editorIsHidden)return yn(e),!1;if(!r.force&&r.visible.from>=n.viewFrom&&r.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==xn(e))return!1;Rr(e)&&(yn(e),r.dims=br(e));var o=i.first+i.size,l=Math.max(r.visible.from-e.options.viewportMargin,i.first),s=Math.min(o,r.visible.to+e.options.viewportMargin);n.viewFrom<l&&l-n.viewFrom<20&&(l=Math.max(i.first,n.viewFrom)),n.viewTo>s&&n.viewTo-s<20&&(s=Math.min(o,n.viewTo)),_l&&(l=pe(e.doc,l),s=ge(e.doc,s));var a=l!=n.viewFrom||s!=n.viewTo||n.lastWrapHeight!=r.wrapperHeight||n.lastWrapWidth!=r.wrapperWidth;wn(e,l,s),n.viewOffset=ye(M(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px";var u=xn(e);if(!a&&0==u&&!r.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1;var c=kn(e);return u>4&&(n.lineDiv.style.display="none"),An(e,n.updateLineNumbers,r.dims),u>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,Tn(c),t(n.cursorDiv),t(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,a&&(n.lastWrapHeight=r.wrapperHeight,n.lastWrapWidth=r.wrapperWidth,Cn(e,400)),n.updateLineNumbers=null,!0}function Nn(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Rt(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Et(e.display)-Bt(e),r.top)}),t.visible=zr(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&Mn(e,t);n=!1){Pr(e);var i=Jr(e);kr(e),en(e,i),Dn(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function On(e,t){var r=new Cs(e,t);if(Mn(e,r)){Pr(e),Nn(e,r);var n=Jr(e);kr(e),en(e,n),Dn(e,n),r.finish()}}function An(e,r,n){function i(t){var r=t.nextSibling;return ml&&Ml&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var o=e.display,l=e.options.lineNumbers,s=o.lineDiv,a=s.firstChild,u=o.view,c=o.viewFrom,f=0;f<u.length;f++){var d=u[f];if(d.hidden);else if(d.node&&d.node.parentNode==s){for(;a!=d.node;)a=i(a);var p=l&&null!=r&&r<=c&&d.lineNumber;d.changes&&(h(d.changes,"gutter")>-1&&(p=!1),xt(e,d,c,n)),p&&(t(d.lineNumber),d.lineNumber.appendChild(document.createTextNode(F(e.options,c)))),a=d.node.nextSibling}else{var g=Ot(e,d,c,n);s.insertBefore(g,a)}c+=d.size}for(;a;)a=i(a)}function Wn(e){var t=e.display.gutters.offsetWidth;e.display.sizer.style.marginLeft=t+"px"}function Dn(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+It(e)+"px"}function Hn(e){var r=e.display.gutters,i=e.options.gutters;t(r);for(var o=0;o<i.length;++o){var l=i[o],s=r.appendChild(n("div",null,"CodeMirror-gutter "+l));"CodeMirror-linenumbers"==l&&(e.display.lineGutter=s,s.style.width=(e.display.lineNumWidth||1)+"px")}r.style.display=o?"":"none",Wn(e)}function Fn(e){var t=h(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function Pn(e){var t=e.wheelDeltaX,r=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function En(e){var t=Pn(e);return t.x*=Ls,t.y*=Ls,t}function zn(e,t){var r=Pn(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight;if(n&&s||i&&a){if(i&&Ml&&ml)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var f=0;f<c.length;f++)if(c[f].node==u){e.display.currentWheelTarget=u;break e}if(n&&!fl&&!wl&&null!=Ls)return i&&a&&qr(e,Math.max(0,l.scrollTop+i*Ls)),Qr(e,Math.max(0,l.scrollLeft+n*Ls)),(!i||i&&a)&&We(t),void(o.wheelStartX=null);if(i&&null!=Ls){var h=i*Ls,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight;h<0?d=Math.max(0,d+h-50):p=Math.min(e.doc.height,p+h+50),On(e,{top:d,bottom:p})}Ss<20&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX;o.wheelStartX=o.wheelStartY=null,r&&(Ls=(Ls*Ss+r)/(Ss+1),++Ss)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}function In(e,t){var r=e[t];e.sort(function(e,t){return E(e.from(),t.from())}),t=h(e,r);for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1];if(E(o.to(),i.from())>=0){var l=B(o.from(),i.from()),s=R(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head;n<=t&&--t,e.splice(--n,2,new Ts(a?s:l,a?l:s))}}return new ks(e,t)}function Rn(e,t){return new ks([new Ts(e,t||e)],0)}function Bn(e){return e.text?P(e.from.line+e.text.length-1,g(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Gn(e,t){if(E(e,t.from)<0)return e;if(E(e,t.to)<=0)return Bn(t);var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch;return e.line==t.to.line&&(n+=Bn(t).ch-t.to.ch),P(r,n)}function Un(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n];r.push(new Ts(Gn(i.anchor,t),Gn(i.head,t)))}return In(r,e.sel.primIndex)}function Vn(e,t,r){return e.line==t.line?P(r.line,e.ch-t.ch+r.ch):P(r.line+(e.line-t.line),e.ch)}function Kn(e,t,r){for(var n=[],i=P(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=Vn(s.from,i,o),u=Vn(Bn(s),i,o);if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],f=E(c.head,c.anchor)<0;n[l]=new Ts(f?u:a,f?a:u)}else n[l]=new Ts(a,a)}return new ks(n,e.sel.primIndex)}function jn(e){e.doc.mode=Ue(e.options,e.doc.modeOption),Xn(e)}function Xn(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Cn(e,100),e.state.modeGen++,e.curOp&&vn(e)}function Yn(e,t){return 0==t.from.ch&&0==t.to.ch&&""==g(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function _n(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){it(e,r,i,n),bt(e,"change",e,t)}function l(e,t){for(var r=[],o=e;o<t;++o)r.push(new fs(u[o],i(o),n));return r}var s=t.from,a=t.to,u=t.text,c=M(e,s.line),f=M(e,a.line),h=g(u),d=i(u.length-1),p=a.line-s.line;if(t.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length);else if(Yn(e,t)){var v=l(0,u.length-1);o(f,f.text,d),p&&e.remove(s.line,p),v.length&&e.insert(s.line,v)}else if(c==f)if(1==u.length)o(c,c.text.slice(0,s.ch)+h+c.text.slice(a.ch),d);else{var m=l(1,u.length-1);m.push(new fs(h+c.text.slice(a.ch),d,n)),o(c,c.text.slice(0,s.ch)+u[0],i(0)),e.insert(s.line+1,m)}else if(1==u.length)o(c,c.text.slice(0,s.ch)+u[0]+f.text.slice(a.ch),i(0)),e.remove(s.line+1,p);else{o(c,c.text.slice(0,s.ch)+u[0],i(0)),o(f,h+f.text.slice(a.ch),d);var y=l(1,u.length-1);p>1&&e.remove(s.line+1,p-1),e.insert(s.line+1,y)}bt(e,"change",e,t)}function $n(e,t,r){function n(e,i,o){if(e.linked)for(var l=0;l<e.linked.length;++l){var s=e.linked[l];if(s.doc!=i){var a=o&&s.sharedHist;r&&!a||(t(s.doc,a),n(s.doc,e,a))}}}n(e,null,!0)}function qn(e,t){if(t.cm)throw new Error("This document is already in use.");e.doc=t,t.cm=e,Cr(e),jn(e),Zn(e),e.options.lineWrapping||we(e),e.options.mode=t.modeOption,vn(e)}function Zn(e){("rtl"==e.doc.direction?s:Fl)(e.display.lineDiv,"CodeMirror-rtl")}function Qn(e){hn(e,function(){Zn(e),vn(e)})}function Jn(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function ei(e,t){var r={from:I(t.from),to:Bn(t),text:N(e,t.from,t.to)};return si(e,r,t.from.line,t.to.line+1),$n(e,function(e){return si(e,r,t.from.line,t.to.line+1)},!0),r}function ti(e){for(;e.length&&g(e).ranges;)e.pop()}function ri(e,t){return t?(ti(e.done),g(e.done)):e.done.length&&!g(e.done).ranges?g(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),g(e.done)):void 0}function ni(e,t,r,n){var i=e.history;i.undone.length=0;var o,l,s=+new Date;if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>s-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=ri(i,i.lastOp==n)))l=g(o.changes),0==E(t.from,t.to)&&0==E(t.from,l.to)?l.to=Bn(t):o.changes.push(ei(e,t));else{var a=g(i.done);for(a&&a.ranges||li(e.sel,i.done),o={changes:[ei(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,l||Te(e,"historyAdded")}function ii(e,t,r,n){var i=t.charAt(0);return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function oi(e,t,r,n){var i=e.history,o=n&&n.origin;r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||ii(e,o,g(i.done),t))?i.done[i.done.length-1]=t:li(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&ti(i.undone)}function li(e,t){var r=g(t);r&&r.ranges&&r.equals(e)||t.push(e)}function si(e,t,r,n){var i=t["spans_"+e.id],o=0;e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function ai(e){if(!e)return null;for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r]);return t?t.length?t:null:e}function ui(e,t){var r=t["spans_"+e.id];if(!r)return null;for(var n=[],i=0;i<t.text.length;++i)n.push(ai(r[i]));return n}function ci(e,t){var r=ui(e,t),n=J(e,t);if(!r)return n;if(!n)return r;for(var i=0;i<r.length;++i){var o=r[i],l=n[i];if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e;o.push(a)}else l&&(r[i]=l)}return r}function fi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i];if(o.ranges)n.push(r?ks.prototype.deepCopy.call(o):o);else{var l=o.changes,s=[];n.push({changes:s});for(var a=0;a<l.length;++a){var u=l[a],c=void 0;if(s.push({from:u.from,to:u.to,text:u.text}),t)for(var f in u)(c=f.match(/^spans_(\d+)$/))&&h(t,Number(c[1]))>-1&&(g(s)[f]=u[f],delete u[f])}}}return n}function hi(e,t,r,n){if(n){var i=e.anchor;if(r){var o=E(t,i)<0;o!=E(r,i)<0?(i=t,t=r):o!=E(t,r)<0&&(t=r)}return new Ts(i,t)}return new Ts(r||t,t)}function di(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),bi(e,new ks([hi(e.sel.primary(),t,r,i)],0),n)}function pi(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=hi(e.sel.ranges[o],t[o],null,i);bi(e,In(n,e.sel.primIndex),r)}function gi(e,t,r,n){var i=e.sel.ranges.slice(0);i[t]=r,bi(e,In(i,e.sel.primIndex),n)}function vi(e,t,r,n){bi(e,Rn(t,r),n)}function mi(e,t,r){var n={ranges:t.ranges,update:function(t){var r=this;this.ranges=[];for(var n=0;n<t.length;n++)r.ranges[n]=new Ts(U(e,t[n].anchor),U(e,t[n].head))},origin:r&&r.origin};return Te(e,"beforeSelectionChange",e,n),e.cm&&Te(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?In(n.ranges,n.ranges.length-1):t}function yi(e,t,r){var n=e.history.done,i=g(n);i&&i.ranges?(n[n.length-1]=t,wi(e,t,r)):bi(e,t,r)}function bi(e,t,r){wi(e,t,r),oi(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function wi(e,t,r){(Oe(e,"beforeSelectionChange")||e.cm&&Oe(e.cm,"beforeSelectionChange"))&&(t=mi(e,t,r)),xi(e,Si(e,t,r&&r.bias||(E(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||jr(e.cm)}function xi(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Ne(e.cm)),bt(e,"cursorActivity",e))}function Ci(e){xi(e,Si(e,e.sel,null,!1))}function Si(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=ki(e,l.anchor,s&&s.anchor,r,n),u=ki(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ts(a,u))}return i?In(i,t.primIndex):t}function Li(e,t,r,n,i){var o=M(e,t.line);if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker;if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(Te(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l;continue}break}if(!a.atomic)continue;if(r){var u=a.find(n<0?1:-1),c=void 0;if((n<0?a.inclusiveRight:a.inclusiveLeft)&&(u=Ti(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=E(u,r))&&(n<0?c<0:c>0))return Li(e,u,t,n,i)}var f=a.find(n<0?-1:1);return(n<0?a.inclusiveLeft:a.inclusiveRight)&&(f=Ti(e,f,n,f.line==t.line?o:null)),f?Li(e,f,t,n,i):null}}return t}function ki(e,t,r,n,i){var o=n||1,l=Li(e,t,r,o,i)||!i&&Li(e,t,r,o,!0)||Li(e,t,r,-o,i)||!i&&Li(e,t,r,-o,!0);return l||(e.cantEdit=!0,P(e.first,0))}function Ti(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?U(e,P(t.line-1)):null:r>0&&t.ch==(n||M(e,t.line)).text.length?t.line<e.first+e.size-1?P(t.line+1,0):null:new P(t.line,t.ch+r)}function Mi(e){e.setSelection(P(e.firstLine(),0),P(e.lastLine()),Gl)}function Ni(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}};return r&&(n.update=function(t,r,i,o){t&&(n.from=U(e,t)),r&&(n.to=U(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o)}),Te(e,"beforeChange",e,n),e.cm&&Te(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function Oi(e,t,r){if(e.cm){if(!e.cm.curOp)return dn(e.cm,Oi)(e,t,r);if(e.cm.state.suppressEdits)return}if(!(Oe(e,"beforeChange")||e.cm&&Oe(e.cm,"beforeChange"))||(t=Ni(e,t,!0))){var n=Yl&&!r&&te(e,t.from,t.to);if(n)for(var i=n.length-1;i>=0;--i)Ai(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin});else Ai(e,t)}}function Ai(e,t){if(1!=t.text.length||""!=t.text[0]||0!=E(t.from,t.to)){var r=Un(e,t);ni(e,t,r,e.cm?e.cm.curOp.id:NaN),Hi(e,t,r,J(e,t));var n=[];$n(e,function(e,r){r||-1!=h(n,e.history)||(Ii(e.history,t),n.push(e.history)),Hi(e,t,null,J(e,t))})}}function Wi(e,t,r){if(!e.cm||!e.cm.state.suppressEdits||r){for(var n,i=e.history,o=e.sel,l="undo"==t?i.done:i.undone,s="undo"==t?i.undone:i.done,a=0;a<l.length&&(n=l[a],r?!n.ranges||n.equals(e.sel):n.ranges);a++);if(a!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;(n=l.pop()).ranges;){if(li(n,s),r&&!n.equals(e.sel))return void bi(e,n,{clearRedo:!1});o=n}var u=[];li(o,s),s.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration;for(var c=Oe(e,"beforeChange")||e.cm&&Oe(e.cm,"beforeChange"),f=n.changes.length-1;f>=0;--f){var d=function(r){var i=n.changes[r];if(i.origin=t,c&&!Ni(e,i,!1))return l.length=0,{};u.push(ei(e,i));var o=r?Un(e,i):g(l);Hi(e,i,o,ci(e,i)),!r&&e.cm&&e.cm.scrollIntoView({from:i.from,to:Bn(i)});var s=[];$n(e,function(e,t){t||-1!=h(s,e.history)||(Ii(e.history,i),s.push(e.history)),Hi(e,i,null,ci(e,i))})}(f);if(d)return d.v}}}}function Di(e,t){if(0!=t&&(e.first+=t,e.sel=new ks(v(e.sel.ranges,function(e){return new Ts(P(e.anchor.line+t,e.anchor.ch),P(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){vn(e.cm,e.first,e.first-t,t);for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)mn(e.cm,n,"gutter")}}function Hi(e,t,r,n){if(e.cm&&!e.cm.curOp)return dn(e.cm,Hi)(e,t,r,n);if(t.to.line<e.first)Di(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);Di(e,i),t={from:P(e.first,0),to:P(t.to.line+i,t.to.ch),text:[g(t.text)],origin:t.origin}}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:P(o,M(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=N(e,t.from,t.to),r||(r=Un(e,t)),e.cm?Fi(e.cm,t,n):_n(e,t,n),wi(e,r,Gl)}}function Fi(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line;e.options.lineWrapping||(a=W(fe(M(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0,!0})),n.sel.contains(t.from,t.to)>-1&&Ne(e),_n(n,t,r,xr(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=be(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0)),nt(n,o.line),Cn(e,400);var u=t.text.length-(l.line-o.line)-1;t.full?vn(e):o.line!=l.line||1!=t.text.length||Yn(e.doc,t)?vn(e,o.line,l.line+1,u):mn(e,o.line,"text");var c=Oe(e,"changes"),f=Oe(e,"change");if(f||c){var h={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin};f&&bt(e,"change",e,h),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(h)}e.display.selForContextMenu=null}function Pi(e,t,r,n,i){if(n||(n=r),E(n,r)<0){var o;r=(o=[n,r])[0],n=o[1]}"string"==typeof t&&(t=e.splitLines(t)),Oi(e,{from:r,to:n,text:t,origin:i})}function Ei(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function zi(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0;if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0);for(var s=0;s<o.ranges.length;s++)Ei(o.ranges[s].anchor,t,r,n),Ei(o.ranges[s].head,t,r,n)}else{for(var a=0;a<o.changes.length;++a){var u=o.changes[a];if(r<u.from.line)u.from=P(u.from.line+n,u.from.ch),u.to=P(u.to.line+n,u.to.ch);else if(t<=u.to.line){l=!1;break}}l||(e.splice(0,i+1),i=0)}}}function Ii(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1;zi(e.done,r,n,i),zi(e.undone,r,n,i)}function Ri(e,t,r,n){var i=t,o=t;return"number"==typeof t?o=M(e,G(e,t)):i=W(t),null==i?null:(n(o,i)&&e.cm&&mn(e.cm,i,r),o)}function Bi(e){var t=this;this.lines=e,this.parent=null;for(var r=0,n=0;n<e.length;++n)e[n].parent=t,r+=e[n].height;this.height=r}function Gi(e){var t=this;this.children=e;for(var r=0,n=0,i=0;i<e.length;++i){var o=e[i];r+=o.chunkSize(),n+=o.height,o.parent=t}this.size=r,this.height=n,this.parent=null}function Ui(e,t,r){ye(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Kr(e,r)}function Vi(e,t,r,n){var i=new Ms(e,r,n),o=e.cm;return o&&i.noHScroll&&(o.display.alignWidgets=!0),Ri(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[]);if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!ve(e,t)){var n=ye(t)<e.scrollTop;A(t,t.height+Ht(i)),n&&Kr(o,i.height),o.curOp.forceUpdate=!0}return!0}),bt(o,"lineWidgetAdded",o,i,"number"==typeof t?t:W(t)),i}function Ki(e,t,r,n,o){if(n&&n.shared)return ji(e,t,r,n,o);if(e.cm&&!e.cm.curOp)return dn(e.cm,Ki)(e,t,r,n,o);var l=new Os(e,o),s=E(t,r);if(n&&c(n,l,!1),s>0||0==s&&!1!==l.clearWhenEmpty)return l;if(l.replacedWith&&(l.collapsed=!0,l.widgetNode=i("span",[l.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||l.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(l.widgetNode.insertLeft=!0)),l.collapsed){if(ce(e,t.line,t,r,l)||t.line!=r.line&&ce(e,r.line,t,r,l))throw new Error("Inserting collapsed marker partially overlapping an existing one");X()}l.addToHistory&&ni(e,{from:t,to:r,origin:"markText"},e.sel,NaN);var a,u=t.line,f=e.cm;if(e.iter(u,r.line+1,function(e){f&&l.collapsed&&!f.options.lineWrapping&&fe(e)==f.display.maxLine&&(a=!0),l.collapsed&&u!=t.line&&A(e,0),q(e,new Y(l,u==t.line?t.ch:null,u==r.line?r.ch:null)),++u}),l.collapsed&&e.iter(t.line,r.line+1,function(t){ve(e,t)&&A(t,0)}),l.clearOnEnter&&Ql(l,"beforeCursorEnter",function(){return l.clear()}),l.readOnly&&(j(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),l.collapsed&&(l.id=++Ns,l.atomic=!0),f){if(a&&(f.curOp.updateMaxLine=!0),l.collapsed)vn(f,t.line,r.line+1);else if(l.className||l.title||l.startStyle||l.endStyle||l.css)for(var h=t.line;h<=r.line;h++)mn(f,h,"text");l.atomic&&Ci(f.doc),bt(f,"markerAdded",f,l)}return l}function ji(e,t,r,n,i){(n=c(n)).shared=!1;var o=[Ki(e,t,r,n,i)],l=o[0],s=n.widgetNode;return $n(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(Ki(e,U(e,t),U(e,r),n,i));for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return;l=g(o)}),new As(o,l)}function Xi(e){return e.findMarks(P(e.first,0),e.clipPos(P(e.lastLine())),function(e){return e.parent})}function Yi(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to);if(E(o,l)){var s=Ki(e,o,l,n.primary,n.primary.type);n.markers.push(s),s.parent=n}}}function _i(e){for(var t=0;t<e.length;t++)!function(t){var r=e[t],n=[r.primary.doc];$n(r.primary.doc,function(e){return n.push(e)});for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==h(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}}(t)}function $i(e){var t=this;if(Qi(t),!Me(t,e)&&!Ft(t.display,e)){We(e),gl&&(Hs=+new Date);var r=Sr(t,e,!0),n=e.dataTransfer.files;if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=0;s<i;++s)!function(e,n){if(!t.options.allowDropFileTypes||-1!=h(t.options.allowDropFileTypes,e.type)){var s=new FileReader;s.onload=dn(t,function(){var e=s.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++l==i){var a={from:r=U(t.doc,r),to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"};Oi(t.doc,a),yi(t.doc,Rn(r,Bn(a)))}}),s.readAsText(e)}}(n[s],s);else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20);try{var a=e.dataTransfer.getData("Text");if(a){var u;if(t.state.draggingText&&!t.state.draggingText.copy&&(u=t.listSelections()),wi(t.doc,Rn(r,r)),u)for(var c=0;c<u.length;++c)Pi(t.doc,"",u[c].anchor,u[c].head,"drag");t.replaceSelection(a,"around","paste"),t.display.input.focus()}}catch(e){}}}}function qi(e,t){if(gl&&(!e.state.draggingText||+new Date-Hs<100))Fe(t);else if(!Me(e,t)&&!Ft(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!xl)){var r=n("img",null,null,"position: fixed; left: 0; top: 0;");r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",wl&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),wl&&r.parentNode.removeChild(r)}}function Zi(e,t){var i=Sr(e,t);if(i){var o=document.createDocumentFragment();Mr(e,i,o),e.display.dragCursor||(e.display.dragCursor=n("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),r(e.display.dragCursor,o)}}function Qi(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Ji(e){if(document.getElementsByClassName)for(var t=document.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror;n&&e(n)}}function eo(){Fs||(to(),Fs=!0)}function to(){var e;Ql(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Ji(ro)},100))}),Ql(window,"blur",function(){return Ji(Fr)})}function ro(e){var t=e.display;t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function no(e){var t=e.split(/-(?!$)/);e=t[t.length-1];for(var r,n,i,o,l=0;l<t.length-1;l++){var s=t[l];if(/^(cmd|meta|m)$/i.test(s))o=!0;else if(/^a(lt)?$/i.test(s))r=!0;else if(/^(c|ctrl|control)$/i.test(s))n=!0;else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s);i=!0}}return r&&(e="Alt-"+e),n&&(e="Ctrl-"+e),o&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function io(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue;if("..."==n){delete e[r];continue}for(var i=v(r.split(" "),no),o=0;o<i.length;o++){var l=void 0,s=void 0;o==i.length-1?(s=i.join(" "),l=n):(s=i.slice(0,o+1).join(" "),l="...");var a=t[s];if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u];return e}function oo(e,t,r,n){var i=(t=uo(t)).call?t.call(e,n):t[e];if(!1===i)return"nothing";if("..."===i)return"multi";if(null!=i&&r(i))return"handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return oo(e,t.fallthrough,r,n);for(var o=0;o<t.fallthrough.length;o++){var l=oo(e,t.fallthrough[o],r,n);if(l)return l}}}function lo(e){var t="string"==typeof e?e:Ps[e.keyCode];return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function so(e,t,r){var n=e;return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(Dl?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(Dl?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function ao(e,t){if(wl&&34==e.keyCode&&e.char)return!1;var r=Ps[e.keyCode];return null!=r&&!e.altGraphKey&&so(r,e,t)}function uo(e){return"string"==typeof e?Rs[e]:e}function co(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&E(o.from,g(n).to)<=0;){var l=n.pop();if(E(l.from,o.from)<0){o.from=l.from;break}}n.push(o)}hn(e,function(){for(var t=n.length-1;t>=0;t--)Pi(e.doc,"",n[t].from,n[t].to,"+delete");jr(e)})}function fo(e,t,r){var n=L(e.text,t+r,r);return n<0||n>e.text.length?null:n}function ho(e,t,r){var n=fo(e,t.ch,r);return null==n?null:new P(t.line,n,r<0?"after":"before")}function po(e,t,r,n,i){if(e){var o=Se(r,t.doc.direction);if(o){var l,s=i<0?g(o):o[0],a=i<0==(1==s.level)?"after":"before";if(s.level>0||"rtl"==t.doc.direction){var u=Xt(t,r);l=i<0?r.text.length-1:0;var c=Yt(t,u,l).top;l=k(function(e){return Yt(t,u,e).top==c},i<0==(1==s.level)?s.from:s.to-1,l),"before"==a&&(l=fo(r,l,1))}else l=i<0?s.to:s.from;return new P(n,l,a)}}return new P(n,i<0?r.text.length:0,i<0?"before":"after")}function go(e,t,r,n){var i=Se(t,e.doc.direction);if(!i)return ho(t,r,n);r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after");var o=Ce(i,r.ch,r.sticky),l=i[o];if("ltr"==e.doc.direction&&l.level%2==0&&(n>0?l.to>r.ch:l.from<r.ch))return ho(t,r,n);var s,a=function(e,r){return fo(t,e instanceof P?e.ch:e,r)},u=function(r){return e.options.lineWrapping?(s=s||Xt(e,t),hr(e,t,s,r)):{begin:0,end:t.text.length}},c=u("before"==r.sticky?a(r,-1):r.ch);if("rtl"==e.doc.direction||1==l.level){var f=1==l.level==n<0,h=a(r,f?1:-1);if(null!=h&&(f?h<=l.to&&h<=c.end:h>=l.from&&h>=c.begin)){var d=f?"before":"after";return new P(r.line,h,d)}}var p=function(e,t,n){for(var o=function(e,t){return t?new P(r.line,a(e,1),"before"):new P(r.line,e,"after")};e>=0&&e<i.length;e+=t){var l=i[e],s=t>0==(1!=l.level),u=s?n.begin:a(n.end,-1);if(l.from<=u&&u<l.to)return o(u,s);if(u=s?l.from:a(l.to,-1),n.begin<=u&&u<n.end)return o(u,s)}},g=p(o+n,n,c);if(g)return g;var v=n>0?c.end:a(c.begin,-1);return null==v||n>0&&v==t.text.length||!(g=p(n>0?0:i.length-1,n,u(v)))?null:g}function vo(e,t){var r=M(e.doc,t),n=fe(r);return n!=r&&(t=W(n)),po(!0,e,n,t,1)}function mo(e,t){var r=M(e.doc,t),n=he(r);return n!=r&&(t=W(n)),po(!0,e,r,t,-1)}function yo(e,t){var r=vo(e,t.line),n=M(e.doc,r.line),i=Se(n,e.doc.direction);if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch;return P(r.line,l?0:o,r.sticky)}return r}function bo(e,t,r){if("string"==typeof t&&!(t=Bs[t]))return!1;e.display.input.ensurePolled();var n=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=Bl}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}function wo(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=oo(t,e.state.keyMaps[n],r,e);if(i)return i}return e.options.extraKeys&&oo(t,e.options.extraKeys,r,e)||oo(t,e.options.keyMap,r,e)}function xo(e,t,r,n){var i=e.state.keySeq;if(i){if(lo(t))return"handled";Gs.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),t=i+" "+t}var o=wo(e,t,n);return"multi"==o&&(e.state.keySeq=t),"handled"==o&&bt(e,"keyHandled",e,t,r),"handled"!=o&&"multi"!=o||(We(r),Ar(e)),i&&!o&&/\'$/.test(t)?(We(r),!0):!!o}function Co(e,t){var r=ao(t,!0);return!!r&&(t.shiftKey&&!e.state.keySeq?xo(e,"Shift-"+r,t,function(t){return bo(e,t,!0)})||xo(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return bo(e,t)}):xo(e,r,t,function(t){return bo(e,t)}))}function So(e,t,r){return xo(e,"'"+r+"'",t,function(t){return bo(e,t,!0)})}function Lo(e){var t=this;if(t.curOp.focus=l(),!Me(t,e)){gl&&vl<11&&27==e.keyCode&&(e.returnValue=!1);var r=e.keyCode;t.display.shift=16==r||e.shiftKey;var n=Co(t,e);wl&&(Us=n?r:null,!n&&88==r&&!rs&&(Ml?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||ko(t)}}function ko(e){function t(e){18!=e.keyCode&&e.altKey||(Fl(r,"CodeMirror-crosshair"),ke(document,"keyup",t),ke(document,"mouseover",t))}var r=e.display.lineDiv;s(r,"CodeMirror-crosshair"),Ql(document,"keyup",t),Ql(document,"mouseover",t)}function To(e){16==e.keyCode&&(this.doc.sel.shift=!1),Me(this,e)}function Mo(e){var t=this;if(!(Ft(t.display,e)||Me(t,e)||e.ctrlKey&&!e.altKey||Ml&&e.metaKey)){var r=e.keyCode,n=e.charCode;if(wl&&r==Us)return Us=null,void We(e);if(!wl||e.which&&!(e.which<10)||!Co(t,e)){var i=String.fromCharCode(null==n?r:n);"\b"!=i&&(So(t,e,i)||t.display.input.onKeyPress(e))}}}function No(e,t){var r=+new Date;return js&&js.compare(r,e,t)?(Ks=js=null,"triple"):Ks&&Ks.compare(r,e,t)?(js=new Vs(r,e,t),Ks=null,"double"):(Ks=new Vs(r,e,t),js=null,"single")}function Oo(e){var t=this,r=t.display;if(!(Me(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,Ft(r,e))ml||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100));else if(!Io(t,e)){var n=Sr(t,e),i=Ee(e),o=n?No(n,i):"single";window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&Ao(t,i,n,o,e)||(1==i?n?Do(t,n,o,e):Pe(e)==r.scroller&&We(e):2==i?(n&&di(t.doc,n),setTimeout(function(){return r.input.focus()},20)):3==i&&(Hl?Ro(t,e):Dr(t)))}}function Ao(e,t,r,n,i){var o="Click";return"double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o),o=(1==t?"Left":2==t?"Middle":"Right")+o,xo(e,so(o,i),i,function(t){if("string"==typeof t&&(t=Bs[t]),!t)return!1;var n=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=Bl}finally{e.state.suppressEdits=!1}return n})}function Wo(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{};if(null==i.unit){var o=Nl?r.shiftKey&&r.metaKey:r.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey),null==i.addNew&&(i.addNew=Ml?r.metaKey:r.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(Ml?r.altKey:r.ctrlKey)),i}function Do(e,t,r,n){gl?setTimeout(u(Wr,e),0):e.curOp.focus=l();var i,o=Wo(e,r,n),s=e.doc.sel;e.options.dragDrop&&Jl&&!e.isReadOnly()&&"single"==r&&(i=s.contains(t))>-1&&(E((i=s.ranges[i]).from(),t)<0||t.xRel>0)&&(E(i.to(),t)>0||t.xRel<0)?Ho(e,n,t,o):Po(e,n,t,o)}function Ho(e,t,r,n){var i=e.display,o=!1,l=dn(e,function(t){ml&&(i.scroller.draggable=!1),e.state.draggingText=!1,ke(document,"mouseup",l),ke(document,"mousemove",s),ke(i.scroller,"dragstart",a),ke(i.scroller,"drop",l),o||(We(t),n.addNew||di(e.doc,r,null,null,n.extend),ml||gl&&9==vl?setTimeout(function(){document.body.focus(),i.input.focus()},20):i.input.focus())}),s=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},a=function(){return o=!0};ml&&(i.scroller.draggable=!0),e.state.draggingText=l,l.copy=!n.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),Ql(document,"mouseup",l),Ql(document,"mousemove",s),Ql(i.scroller,"dragstart",a),Ql(i.scroller,"drop",l),Dr(e),setTimeout(function(){return i.input.focus()},20)}function Fo(e,t,r){if("char"==r)return new Ts(t,t);if("word"==r)return e.findWordAt(t);if("line"==r)return new Ts(P(t.line,0),U(e.doc,P(t.line+1,0)));var n=r(e,t);return new Ts(n.from,n.to)}function Po(e,t,r,n){function i(t){if(0!=E(m,t))if(m=t,"rectangle"==n.unit){for(var i=[],o=e.options.tabSize,l=f(M(u,r.line).text,r.ch,o),s=f(M(u,t.line).text,t.ch,o),a=Math.min(l,s),g=Math.max(l,s),v=Math.min(r.line,t.line),y=Math.min(e.lastLine(),Math.max(r.line,t.line));v<=y;v++){var b=M(u,v).text,w=d(b,a,o);a==g?i.push(new Ts(P(v,w),P(v,w))):b.length>w&&i.push(new Ts(P(v,w),P(v,d(b,g,o))))}i.length||i.push(new Ts(r,r)),bi(u,In(p.ranges.slice(0,h).concat(i),h),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x,C=c,S=Fo(e,t,n.unit),L=C.anchor;E(S.anchor,L)>0?(x=S.head,L=B(C.from(),S.anchor)):(x=S.anchor,L=R(C.to(),S.head));var k=p.ranges.slice(0);k[h]=Eo(e,new Ts(U(u,L),x)),bi(u,In(k,h),Ul)}}function o(t){var r=++b,s=Sr(e,t,!0,"rectangle"==n.unit);if(s)if(0!=E(s,m)){e.curOp.focus=l(),i(s);var c=zr(a,u);(s.line>=c.to||s.line<c.from)&&setTimeout(dn(e,function(){b==r&&o(t)}),150)}else{var f=t.clientY<y.top?-20:t.clientY>y.bottom?20:0;f&&setTimeout(dn(e,function(){b==r&&(a.scroller.scrollTop+=f,o(t))}),50)}}function s(t){e.state.selectingText=!1,b=1/0,We(t),a.input.focus(),ke(document,"mousemove",w),ke(document,"mouseup",x),u.history.lastSelOrigin=null}var a=e.display,u=e.doc;We(t);var c,h,p=u.sel,g=p.ranges;if(n.addNew&&!n.extend?(h=u.sel.contains(r),c=h>-1?g[h]:new Ts(r,r)):(c=u.sel.primary(),h=u.sel.primIndex),"rectangle"==n.unit)n.addNew||(c=new Ts(r,r)),r=Sr(e,t,!0,!0),h=-1;else{var v=Fo(e,r,n.unit);c=n.extend?hi(c,v.anchor,v.head,n.extend):v}n.addNew?-1==h?(h=g.length,bi(u,In(g.concat([c]),h),{scroll:!1,origin:"*mouse"})):g.length>1&&g[h].empty()&&"char"==n.unit&&!n.extend?(bi(u,In(g.slice(0,h).concat(g.slice(h+1)),0),{scroll:!1,origin:"*mouse"}),p=u.sel):gi(u,h,c,Ul):(h=0,bi(u,new ks([c],0),Ul),p=u.sel);var m=r,y=a.wrapper.getBoundingClientRect(),b=0,w=dn(e,function(e){Ee(e)?o(e):s(e)}),x=dn(e,s);e.state.selectingText=x,Ql(document,"mousemove",w),Ql(document,"mouseup",x)}function Eo(e,t){var r=t.anchor,n=t.head,i=M(e.doc,r.line);if(0==E(r,n)&&r.sticky==n.sticky)return t;var o=Se(i);if(!o)return t;var l=Ce(o,r.ch,r.sticky),s=o[l];if(s.from!=r.ch&&s.to!=r.ch)return t;var a=l+(s.from==r.ch==(1!=s.level)?0:1);if(0==a||a==o.length)return t;var u;if(n.line!=r.line)u=(n.line-r.line)*("ltr"==e.doc.direction?1:-1)>0;else{var c=Ce(o,n.ch,n.sticky),f=c-l||(n.ch-r.ch)*(1==s.level?-1:1);u=c==a-1||c==a?f<0:f>0}var h=o[a+(u?-1:0)],d=u==(1==h.level),p=d?h.from:h.to,g=d?"after":"before";return r.ch==p&&r.sticky==g?t:new Ts(new P(r.line,p,g),n)}function zo(e,t,r,n){var i,o;if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY;else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;n&&We(t);var l=e.display,s=l.lineDiv.getBoundingClientRect();if(o>s.bottom||!Oe(e,r))return He(t);o-=s.top-l.viewOffset;for(var a=0;a<e.options.gutters.length;++a){var u=l.gutters.childNodes[a];if(u&&u.getBoundingClientRect().right>=i)return Te(e,r,e,D(e.doc,o),e.options.gutters[a],t),He(t)}}function Io(e,t){return zo(e,t,"gutterClick",!0)}function Ro(e,t){Ft(e.display,t)||Bo(e,t)||Me(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function Bo(e,t){return!!Oe(e,"gutterContextMenu")&&zo(e,t,"gutterContextMenu",!1)}function Go(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),er(e)}function Uo(e){Hn(e),vn(e),Ir(e)}function Vo(e,t,r){if(!t!=!(r&&r!=Xs)){var n=e.display.dragFunctions,i=t?Ql:ke;i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function Ko(e){e.options.lineWrapping?(s(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Fl(e.display.wrapper,"CodeMirror-wrap"),we(e)),Cr(e),vn(e),er(e),setTimeout(function(){return en(e)},100)}function jo(e,t){var r=this;if(!(this instanceof jo))return new jo(e,t);this.options=t=t?c(t):{},c(Ys,t,!1),Fn(t);var n=t.value;"string"==typeof n&&(n=new Ds(n,t.mode,null,t.lineSeparator,t.direction)),this.doc=n;var i=new jo.inputStyles[t.inputStyle](this),o=this.display=new T(e,n,i);o.wrapper.CodeMirror=this,Hn(this),Go(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),rn(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new El,keySeq:null,specialChars:null},t.autofocus&&!Tl&&o.input.focus(),gl&&vl<11&&setTimeout(function(){return r.display.input.reset(!0)},20),Xo(this),eo(),nn(this),this.curOp.forceUpdate=!0,qn(this,n),t.autofocus&&!Tl||this.hasFocus()?setTimeout(u(Hr,this),20):Fr(this);for(var l in _s)_s.hasOwnProperty(l)&&_s[l](r,t[l],Xs);Rr(this),t.finishInit&&t.finishInit(this);for(var s=0;s<$s.length;++s)$s[s](r);on(this),ml&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}function Xo(e){function t(){i.activeTouch&&(o=setTimeout(function(){return i.activeTouch=null},1e3),(l=i.activeTouch).end=+new Date)}function r(e){if(1!=e.touches.length)return!1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}function n(e,t){if(null==t.left)return!0;var r=t.left-e.left,n=t.top-e.top;return r*r+n*n>400}var i=e.display;Ql(i.scroller,"mousedown",dn(e,Oo)),gl&&vl<11?Ql(i.scroller,"dblclick",dn(e,function(t){if(!Me(e,t)){var r=Sr(e,t);if(r&&!Io(e,t)&&!Ft(e.display,t)){We(t);var n=e.findWordAt(r);di(e.doc,n.anchor,n.head)}}})):Ql(i.scroller,"dblclick",function(t){return Me(e,t)||We(t)}),Hl||Ql(i.scroller,"contextmenu",function(t){return Ro(e,t)});var o,l={end:0};Ql(i.scroller,"touchstart",function(t){if(!Me(e,t)&&!r(t)&&!Io(e,t)){i.input.ensurePolled(),clearTimeout(o);var n=+new Date;i.activeTouch={start:n,moved:!1,prev:n-l.end<=300?l:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),Ql(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),Ql(i.scroller,"touchend",function(r){var o=i.activeTouch;if(o&&!Ft(i,r)&&null!=o.left&&!o.moved&&new Date-o.start<300){var l,s=e.coordsChar(i.activeTouch,"page");l=!o.prev||n(o,o.prev)?new Ts(s,s):!o.prev.prev||n(o,o.prev.prev)?e.findWordAt(s):new Ts(P(s.line,0),U(e.doc,P(s.line+1,0))),e.setSelection(l.anchor,l.head),e.focus(),We(r)}t()}),Ql(i.scroller,"touchcancel",t),Ql(i.scroller,"scroll",function(){i.scroller.clientHeight&&(qr(e,i.scroller.scrollTop),Qr(e,i.scroller.scrollLeft,!0),Te(e,"scroll",e))}),Ql(i.scroller,"mousewheel",function(t){return zn(e,t)}),Ql(i.scroller,"DOMMouseScroll",function(t){return zn(e,t)}),Ql(i.wrapper,"scroll",function(){return i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){Me(e,t)||Fe(t)},over:function(t){Me(e,t)||(Zi(e,t),Fe(t))},start:function(t){return qi(e,t)},drop:dn(e,$i),leave:function(t){Me(e,t)||Qi(e)}};var s=i.input.getField();Ql(s,"keyup",function(t){return To.call(e,t)}),Ql(s,"keydown",dn(e,Lo)),Ql(s,"keypress",dn(e,Mo)),Ql(s,"focus",function(t){return Hr(e,t)}),Ql(s,"blur",function(t){return Fr(e,t)})}function Yo(e,t,r,n){var i,o=e.doc;null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=$e(e,t).state:r="prev");var l=e.options.tabSize,s=M(o,t),a=f(s.text,null,l);s.stateAfter&&(s.stateAfter=null);var u,c=s.text.match(/^\s*/)[0];if(n||/\S/.test(s.text)){if("smart"==r&&((u=o.mode.indent(i,s.text.slice(c.length),s.text))==Bl||u>150)){if(!n)return;r="prev"}}else u=0,r="not";"prev"==r?u=t>o.first?f(M(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u);var h="",d=0;if(e.options.indentWithTabs)for(var g=Math.floor(u/l);g;--g)d+=l,h+="\t";if(d<u&&(h+=p(u-d)),h!=c)return Pi(o,h,P(t,0),P(t,c.length),"+input"),s.stateAfter=null,!0;for(var v=0;v<o.sel.ranges.length;v++){var m=o.sel.ranges[v];if(m.head.line==t&&m.head.ch<c.length){var y=P(t,c.length);gi(o,v,new Ts(y,y));break}}}function _o(e){qs=e}function $o(e,t,r,n,i){var o=e.doc;e.display.shift=!1,n||(n=o.sel);var l=e.state.pasteIncoming||"paste"==i,s=es(t),a=null;if(l&&n.ranges.length>1)if(qs&&qs.text.join("\n")==t){if(n.ranges.length%qs.text.length==0){a=[];for(var u=0;u<qs.text.length;u++)a.push(o.splitLines(qs.text[u]))}}else s.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(a=v(s,function(e){return[e]}));for(var c,f=n.ranges.length-1;f>=0;f--){var h=n.ranges[f],d=h.from(),p=h.to();h.empty()&&(r&&r>0?d=P(d.line,d.ch-r):e.state.overwrite&&!l?p=P(p.line,Math.min(M(o,p.line).text.length,p.ch+g(s).length)):qs&&qs.lineWise&&qs.text.join("\n")==t&&(d=p=P(d.line,0))),c=e.curOp.updateInput;var m={from:d,to:p,text:a?a[f%a.length]:s,origin:i||(l?"paste":e.state.cutIncoming?"cut":"+input")};Oi(e.doc,m),bt(e,"inputRead",e,m)}t&&!l&&Zo(e,t),jr(e),e.curOp.updateInput=c,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function qo(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text");if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||hn(t,function(){return $o(t,r,0,null,"paste")}),!0}function Zo(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n];if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){l=Yo(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(M(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Yo(e,i.head.line,"smart"));l&&bt(e,"electricInput",e,i.head.line)}}}function Qo(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:P(i,0),head:P(i+1,0)};r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Jo(e,t){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck",!!t)}function el(){var e=n("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=n("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return ml?e.style.width="1000px":e.setAttribute("wrap","off"),Ll&&(e.style.border="1px solid black"),Jo(e),t}function tl(e,t,r,n,i){function o(){var n=t.line+r;return!(n<e.first||n>=e.first+e.size)&&(t=new P(n,t.ch,t.sticky),u=M(e,n))}function l(n){var l;if(null==(l=i?go(e.cm,u,t,r):ho(u,t,r))){if(n||!o())return!1;t=po(i,e.cm,u,t.line,r)}else t=l;return!0}var s=t,a=r,u=M(e,t.line);if("char"==n)l();else if("column"==n)l(!0);else if("word"==n||"group"==n)for(var c=null,f="group"==n,h=e.cm&&e.cm.getHelper(t,"wordChars"),d=!0;!(r<0)||l(!d);d=!1){var p=u.text.charAt(t.ch)||"\n",g=x(p,h)?"w":f&&"\n"==p?"n":!f||/\s/.test(p)?null:"p";if(!f||d||g||(g="s"),c&&c!=g){r<0&&(r=1,l(),t.sticky="after");break}if(g&&(c=g),r>0&&!l(!d))break}var v=ki(e,t,s,a,!0);return z(s,v)&&(v.hitSide=!0),v}function rl(e,t,r,n){var i,o=e.doc,l=t.left;if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),a=Math.max(s-.5*mr(e.display),3);i=(r>0?t.bottom:t.top)+r*a}else"line"==n&&(i=r>0?t.bottom+3:t.top-3);for(var u;(u=cr(e,l,i)).outside;){if(r<0?i<=0:i>=o.height){u.hitSide=!0;break}i+=5*r}return u}function nl(e,t){var r=jt(e,t.line);if(!r||r.hidden)return null;var n=M(e.doc,t.line),i=Ut(r,n,t.line),o=Se(n,e.doc.direction),l="left";o&&(l=Ce(o,t.ch)%2?"right":"left");var s=_t(i.map,t.ch,l);return s.offset="right"==s.collapse?s.end:s.start,s}function il(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0;return!1}function ol(e,t){return t&&(e.bad=!0),e}function ll(e,t,r,n,i){function o(e){return function(t){return t.id==e}}function l(){c&&(u+=f,c=!1)}function s(e){e&&(l(),u+=e)}function a(t){if(1==t.nodeType){var r=t.getAttribute("cm-text");if(null!=r)return void s(r||t.textContent.replace(/\u200b/g,""));var u,h=t.getAttribute("cm-marker");if(h){var d=e.findMarks(P(n,0),P(i+1,0),o(+h));return void(d.length&&(u=d[0].find(0))&&s(N(e.doc,u.from,u.to).join(f)))}if("false"==t.getAttribute("contenteditable"))return;var p=/^(pre|div|p)$/i.test(t.nodeName);p&&l();for(var g=0;g<t.childNodes.length;g++)a(t.childNodes[g]);p&&(c=!0)}else 3==t.nodeType&&s(t.nodeValue)}for(var u="",c=!1,f=e.doc.lineSeparator();a(t),t!=r;)t=t.nextSibling;return u}function sl(e,t,r){var n;if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return ol(e.clipPos(P(e.display.viewTo-1)),!0);t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null;if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==n)return al(o,t,r)}}function al(e,t,r){function n(t,r,n){for(var i=-1;i<(f?f.length:0);i++)for(var o=i<0?c.map:f[i],l=0;l<o.length;l+=3){var s=o[l+2];if(s==t||s==r){var a=W(i<0?e.line:e.rest[i]),u=o[l]+n;return(n<0||s!=t)&&(u=o[l+(n?1:0)]),P(a,u)}}}var i=e.text.firstChild,l=!1;if(!t||!o(i,t))return ol(P(W(e.line),0),!0);if(t==i&&(l=!0,t=i.childNodes[r],r=0,!t)){var s=e.rest?g(e.rest):e.line;return ol(P(W(s),s.text.length),l)}var a=3==t.nodeType?t:null,u=t;for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,r&&(r=a.nodeValue.length));u.parentNode!=i;)u=u.parentNode;var c=e.measure,f=c.maps,h=n(a,u,r);if(h)return ol(h,l);for(var d=u.nextSibling,p=a?a.nodeValue.length-r:0;d;d=d.nextSibling){if(h=n(d,d.firstChild,0))return ol(P(h.line,h.ch-p),l);p+=d.textContent.length}for(var v=u.previousSibling,m=r;v;v=v.previousSibling){if(h=n(v,v.firstChild,-1))return ol(P(h.line,h.ch+m),l);m+=v.textContent.length}}var ul=navigator.userAgent,cl=navigator.platform,fl=/gecko\/\d/i.test(ul),hl=/MSIE \d/.test(ul),dl=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ul),pl=/Edge\/(\d+)/.exec(ul),gl=hl||dl||pl,vl=gl&&(hl?document.documentMode||6:+(pl||dl)[1]),ml=!pl&&/WebKit\//.test(ul),yl=ml&&/Qt\/\d+\.\d+/.test(ul),bl=!pl&&/Chrome\//.test(ul),wl=/Opera\//.test(ul),xl=/Apple Computer/.test(navigator.vendor),Cl=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ul),Sl=/PhantomJS/.test(ul),Ll=!pl&&/AppleWebKit/.test(ul)&&/Mobile\/\w+/.test(ul),kl=/Android/.test(ul),Tl=Ll||kl||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ul),Ml=Ll||/Mac/.test(cl),Nl=/\bCrOS\b/.test(ul),Ol=/win/i.test(cl),Al=wl&&ul.match(/Version\/(\d*\.\d*)/);Al&&(Al=Number(Al[1])),Al&&Al>=15&&(wl=!1,ml=!0);var Wl,Dl=Ml&&(yl||wl&&(null==Al||Al<12.11)),Hl=fl||gl&&vl>=9,Fl=function(t,r){var n=t.className,i=e(r).exec(n);if(i){var o=n.slice(i.index+i[0].length);t.className=n.slice(0,i.index)+(o?i[1]+o:"")}};Wl=document.createRange?function(e,t,r,n){var i=document.createRange();return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange();try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n};var Pl=function(e){e.select()};Ll?Pl=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:gl&&(Pl=function(e){try{e.select()}catch(e){}});var El=function(){this.id=null};El.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)};var zl,Il,Rl=30,Bl={toString:function(){return"CodeMirror.Pass"}},Gl={scroll:!1},Ul={origin:"*mouse"},Vl={origin:"+move"},Kl=[""],jl=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Xl=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,Yl=!1,_l=!1,$l=null,ql=function(){function e(e){return e<=247?r.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?n.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,r){this.level=e,this.from=t,this.to=r}var r="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,l=/[LRr]/,s=/[Lb1n]/,a=/[1n]/;return function(r,n){var u="ltr"==n?"L":"R";if(0==r.length||"ltr"==n&&!i.test(r))return!1;for(var c=r.length,f=[],h=0;h<c;++h)f.push(e(r.charCodeAt(h)));for(var d=0,p=u;d<c;++d){var v=f[d];"m"==v?f[d]=p:p=v}for(var m=0,y=u;m<c;++m){var b=f[m];"1"==b&&"r"==y?f[m]="n":l.test(b)&&(y=b,"r"==b&&(f[m]="R"))}for(var w=1,x=f[0];w<c-1;++w){var C=f[w];"+"==C&&"1"==x&&"1"==f[w+1]?f[w]="1":","!=C||x!=f[w+1]||"1"!=x&&"n"!=x||(f[w]=x),x=C}for(var S=0;S<c;++S){var L=f[S];if(","==L)f[S]="N";else if("%"==L){var k=void 0;for(k=S+1;k<c&&"%"==f[k];++k);for(var T=S&&"!"==f[S-1]||k<c&&"1"==f[k]?"1":"N",M=S;M<k;++M)f[M]=T;S=k-1}}for(var N=0,O=u;N<c;++N){var A=f[N];"L"==O&&"1"==A?f[N]="L":l.test(A)&&(O=A)}for(var W=0;W<c;++W)if(o.test(f[W])){var D=void 0;for(D=W+1;D<c&&o.test(f[D]);++D);for(var H="L"==(W?f[W-1]:u),F=H==("L"==(D<c?f[D]:u))?H?"L":"R":u,P=W;P<D;++P)f[P]=F;W=D-1}for(var E,z=[],I=0;I<c;)if(s.test(f[I])){var R=I;for(++I;I<c&&s.test(f[I]);++I);z.push(new t(0,R,I))}else{var B=I,G=z.length;for(++I;I<c&&"L"!=f[I];++I);for(var U=B;U<I;)if(a.test(f[U])){B<U&&z.splice(G,0,new t(1,B,U));var V=U;for(++U;U<I&&a.test(f[U]);++U);z.splice(G,0,new t(2,V,U)),B=U}else++U;B<I&&z.splice(G,0,new t(1,B,I))}return"ltr"==n&&(1==z[0].level&&(E=r.match(/^\s+/))&&(z[0].from=E[0].length,z.unshift(new t(0,0,E[0].length))),1==g(z).level&&(E=r.match(/\s+$/))&&(g(z).to-=E[0].length,z.push(new t(0,c-E[0].length,c)))),"rtl"==n?z.reverse():z}}(),Zl=[],Ql=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent("on"+t,r);else{var n=e._handlers||(e._handlers={});n[t]=(n[t]||Zl).concat(r)}},Jl=function(){if(gl&&vl<9)return!1;var e=n("div");return"draggable"in e||"dragDrop"in e}(),es=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},ts=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},rs=function(){var e=n("div");return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),ns=null,is={},os={},ls={},ss=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r};ss.prototype.eol=function(){return this.pos>=this.string.length},ss.prototype.sol=function(){return this.pos==this.lineStart},ss.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},ss.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},ss.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},ss.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},ss.prototype.eatSpace=function(){for(var e=this,t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos;return this.pos>t},ss.prototype.skipToEnd=function(){this.pos=this.string.length},ss.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0},ss.prototype.backUp=function(e){this.pos-=e},ss.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=f(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?f(this.string,this.lineStart,this.tabSize):0)},ss.prototype.indentation=function(){return f(this.string,null,this.tabSize)-(this.lineStart?f(this.string,this.lineStart,this.tabSize):0)},ss.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e};if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},ss.prototype.current=function(){return this.string.slice(this.start,this.pos)},ss.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e}},ss.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)},ss.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};var as=function(e,t){this.state=e,this.lookAhead=t},us=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1};us.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},us.prototype.baseToken=function(e){var t=this;if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)t.baseTokenPos+=2;var r=this.baseTokens[this.baseTokenPos+1];return{type:r&&r.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},us.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},us.fromSaved=function(e,t,r){return t instanceof as?new us(e,Ke(e.mode,t.state),r,t.lookAhead):new us(e,Ke(e.mode,t),r)},us.prototype.save=function(e){var t=!1!==e?Ke(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new as(t,this.maxLookAhead):t};var cs=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r},fs=function(e,t,r){this.text=e,ne(this,t),this.height=r?r(this):1};fs.prototype.lineNo=function(){return W(this)},Ae(fs);var hs,ds={},ps={},gs=null,vs=null,ms={left:0,right:0,top:0,bottom:0},ys=function(e,t,r){this.cm=r;var i=this.vert=n("div",[n("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=n("div",[n("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");e(i),e(o),Ql(i,"scroll",function(){i.clientHeight&&t(i.scrollTop,"vertical")}),Ql(o,"scroll",function(){o.clientWidth&&t(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,gl&&vl<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};ys.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth;if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0";var i=e.viewHeight-(t?n:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(r?n:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},ys.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},ys.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},ys.prototype.zeroWidthHack=function(){var e=Ml&&!Cl?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new El,this.disableVert=new El},ys.prototype.enableZeroWidthBar=function(e,t,r){function n(){var i=e.getBoundingClientRect();("vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,n)}e.style.pointerEvents="auto",t.set(1e3,n)},ys.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var bs=function(){};bs.prototype.update=function(){return{bottom:0,right:0}},bs.prototype.setScrollLeft=function(){},bs.prototype.setScrollTop=function(){},bs.prototype.clear=function(){};var ws={native:ys,null:bs},xs=0,Cs=function(e,t,r){var n=e.display;this.viewport=t,this.visible=zr(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Rt(e),this.force=r,this.dims=br(e),this.events=[]};Cs.prototype.signal=function(e,t){Oe(e,t)&&this.events.push(arguments)},Cs.prototype.finish=function(){for(var e=this,t=0;t<this.events.length;t++)Te.apply(null,e.events[t])};var Ss=0,Ls=null;gl?Ls=-.53:fl?Ls=15:bl?Ls=-.7:xl&&(Ls=-1/3);var ks=function(e,t){this.ranges=e,this.primIndex=t};ks.prototype.primary=function(){return this.ranges[this.primIndex]},ks.prototype.equals=function(e){var t=this;if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var r=0;r<this.ranges.length;r++){var n=t.ranges[r],i=e.ranges[r];if(!z(n.anchor,i.anchor)||!z(n.head,i.head))return!1}return!0},ks.prototype.deepCopy=function(){for(var e=this,t=[],r=0;r<this.ranges.length;r++)t[r]=new Ts(I(e.ranges[r].anchor),I(e.ranges[r].head));return new ks(t,this.primIndex)},ks.prototype.somethingSelected=function(){for(var e=this,t=0;t<this.ranges.length;t++)if(!e.ranges[t].empty())return!0;return!1},ks.prototype.contains=function(e,t){var r=this;t||(t=e);for(var n=0;n<this.ranges.length;n++){var i=r.ranges[n];if(E(t,i.from())>=0&&E(e,i.to())<=0)return n}return-1};var Ts=function(e,t){this.anchor=e,this.head=t};Ts.prototype.from=function(){return B(this.anchor,this.head)},Ts.prototype.to=function(){return R(this.anchor,this.head)},Ts.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Bi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=this,n=e,i=e+t;n<i;++n){var o=r.lines[n];r.height-=o.height,ot(o),bt(o,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){var n=this;this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var i=0;i<t.length;++i)t[i].parent=n},iterN:function(e,t,r){for(var n=this,i=e+t;e<i;++e)if(r(n.lines[e]))return!0}},Gi.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){var r=this;this.size-=t;for(var n=0;n<this.children.length;++n){var i=r.children[n],o=i.chunkSize();if(e<o){var l=Math.min(t,o-e),s=i.height;if(i.removeInner(e,l),r.height-=s-i.height,o==l&&(r.children.splice(n--,1),i.parent=null),0==(t-=l))break;e=0}else e-=o}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Bi))){var a=[];this.collapse(a),this.children=[new Bi(a)],this.children[0].parent=this}},collapse:function(e){for(var t=this,r=0;r<this.children.length;++r)t.children[r].collapse(e)},insertInner:function(e,t,r){var n=this;this.size+=t.length,this.height+=r;for(var i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize();if(e<=l){if(o.insertInner(e,t,r),o.lines&&o.lines.length>50){for(var s=o.lines.length%25+25,a=s;a<o.lines.length;){var u=new Bi(o.lines.slice(a,a+=25));o.height-=u.height,n.children.splice(++i,0,u),u.parent=n}o.lines=o.lines.slice(0,s),n.maybeSpill()}break}e-=l}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new Gi(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var r=h(e.parent.children,e);e.parent.children.splice(r+1,0,t)}else{var n=new Gi(e.children);n.parent=e,e.children=[n,t],e=n}t.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=this,i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize();if(e<l){var s=Math.min(t,l-e);if(o.iterN(e,s,r))return!0;if(0==(t-=s))break;e=0}else e-=l}}};var Ms=function(e,t,r){var n=this;if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i]);this.doc=e,this.node=t};Ms.prototype.clear=function(){var e=this,t=this.doc.cm,r=this.line.widgets,n=this.line,i=W(n);if(null!=i&&r){for(var o=0;o<r.length;++o)r[o]==e&&r.splice(o--,1);r.length||(n.widgets=null);var l=Ht(this);A(n,Math.max(0,n.height-l)),t&&(hn(t,function(){Ui(t,n,-l),mn(t,i,"widget")}),bt(t,"lineWidgetCleared",t,this,i))}},Ms.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line;this.height=null;var i=Ht(this)-t;i&&(A(n,n.height+i),r&&hn(r,function(){r.curOp.forceUpdate=!0,Ui(r,n,i),bt(r,"lineWidgetChanged",r,e,W(n))}))},Ae(Ms);var Ns=0,Os=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Ns};Os.prototype.clear=function(){var e=this;if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp;if(r&&nn(t),Oe(this,"clear")){var n=this.find();n&&bt(this,"clear",n.from,n.to)}for(var i=null,o=null,l=0;l<this.lines.length;++l){var s=e.lines[l],a=_(s.markedSpans,e);t&&!e.collapsed?mn(t,W(s),"text"):t&&(null!=a.to&&(o=W(s)),null!=a.from&&(i=W(s))),s.markedSpans=$(s.markedSpans,a),null==a.from&&e.collapsed&&!ve(e.doc,s)&&t&&A(s,mr(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var c=fe(e.lines[u]),f=be(c);f>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=f,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&vn(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&Ci(t.doc)),t&&bt(t,"markerCleared",t,this,i,o),r&&on(t),this.parent&&this.parent.clear()}},Os.prototype.find=function(e,t){var r=this;null==e&&"bookmark"==this.type&&(e=1);for(var n,i,o=0;o<this.lines.length;++o){var l=r.lines[o],s=_(l.markedSpans,r);if(null!=s.from&&(n=P(t?l:W(l),s.from),-1==e))return n;if(null!=s.to&&(i=P(t?l:W(l),s.to),1==e))return i}return n&&{from:n,to:i}},Os.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm;t&&n&&hn(n,function(){var i=t.line,o=W(t.line),l=jt(n,o);if(l&&(Qt(l),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!ve(r.doc,i)&&null!=r.height){var s=r.height;r.height=null;var a=Ht(r)-s;a&&A(i,i.height+a)}bt(n,"markerChanged",n,e)})},Os.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=h(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Os.prototype.detachLine=function(e){if(this.lines.splice(h(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},Ae(Os);var As=function(e,t){var r=this;this.markers=e,this.primary=t;for(var n=0;n<e.length;++n)e[n].parent=r};As.prototype.clear=function(){var e=this;if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var t=0;t<this.markers.length;++t)e.markers[t].clear();bt(this,"clear")}},As.prototype.find=function(e,t){return this.primary.find(e,t)},Ae(As);var Ws=0,Ds=function(e,t,r,n,i){if(!(this instanceof Ds))return new Ds(e,t,r,n,i);null==r&&(r=0),Gi.call(this,[new Bi([new fs("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r;var o=P(r,0);this.sel=Rn(o),this.history=new Jn(null),this.id=++Ws,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),_n(this,{from:o,to:o,text:e}),bi(this,Rn(o),Gl)};Ds.prototype=b(Gi.prototype,{constructor:Ds,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height;this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=O(this,this.first,this.first+this.size);return!1===e?t:t.join(e||this.lineSeparator())},setValue:gn(function(e){var t=P(this.first,0),r=this.first+this.size-1;Oi(this,{from:t,to:P(r,M(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Xr(this.cm,0,0),bi(this,Rn(t),Gl)}),replaceRange:function(e,t,r,n){Pi(this,e,t=U(this,t),r=r?U(this,r):t,n)},getRange:function(e,t,r){var n=N(this,U(this,e),U(this,t));return!1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(H(this,e))return M(this,e)},getLineNumber:function(e){return W(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=M(this,e)),fe(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return U(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,t,r){vi(this,U(this,"number"==typeof e?P(e,t||0):e),null,r)}),setSelection:gn(function(e,t,r){vi(this,U(this,e),U(this,t||e),r)}),extendSelection:gn(function(e,t,r){di(this,U(this,e),t&&U(this,t),r)}),extendSelections:gn(function(e,t){pi(this,K(this,e),t)}),extendSelectionsBy:gn(function(e,t){pi(this,K(this,v(this.sel.ranges,e)),t)}),setSelections:gn(function(e,t,r){var n=this;if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Ts(U(n,e[o].anchor),U(n,e[o].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),bi(this,In(i,t),r)}}),addSelection:gn(function(e,t,r){var n=this.sel.ranges.slice(0);n.push(new Ts(U(this,e),U(this,t||e))),bi(this,In(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this,n=this.sel.ranges,i=0;i<n.length;i++){var o=N(r,n[i].from(),n[i].to());t=t?t.concat(o):o}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=this,r=[],n=this.sel.ranges,i=0;i<n.length;i++){var o=N(t,n[i].from(),n[i].to());!1!==e&&(o=o.join(e||t.lineSeparator())),r[i]=o}return r},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e;this.replaceSelections(n,t,r||"+input")},replaceSelections:gn(function(e,t,r){for(var n=this,i=[],o=this.sel,l=0;l<o.ranges.length;l++){var s=o.ranges[l];i[l]={from:s.from(),to:s.to(),text:n.splitLines(e[l]),origin:r}}for(var a=t&&"end"!=t&&Kn(this,i,t),u=i.length-1;u>=0;u--)Oi(n,i[u]);a?yi(this,a):this.cm&&jr(this.cm)}),undo:gn(function(){Wi(this,"undo")}),redo:gn(function(){Wi(this,"redo")}),undoSelection:gn(function(){Wi(this,"undo",!0)}),redoSelection:gn(function(){Wi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t;for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r;return{undo:t,redo:r}},clearHistory:function(){this.history=new Jn(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:fi(this.history.done),undone:fi(this.history.undone)}},setHistory:function(e){var t=this.history=new Jn(this.history.maxGeneration);t.done=fi(e.done.slice(0),null,!0),t.undone=fi(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,t,r){return Ri(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={});return n[t]=r,!r&&C(n)&&(e.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var t=this;this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&Ri(t,r,"gutter",function(){return r.gutterMarkers[e]=null,C(r.gutterMarkers)&&(r.gutterMarkers=null),!0})})}),lineInfo:function(e){var t;if("number"==typeof e){if(!H(this,e))return null;if(t=e,!(e=M(this,e)))return null}else if(null==(t=W(e)))return null;return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(t,r,n){return Ri(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass";if(t[i]){if(e(n).test(t[i]))return!1;t[i]+=" "+n}else t[i]=n;return!0})}),removeLineClass:gn(function(t,r,n){return Ri(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass",o=t[i];if(!o)return!1;if(null==n)t[i]=null;else{var l=o.match(e(n));if(!l)return!1;var s=l.index+l[0].length;t[i]=o.slice(0,l.index)+(l.index&&s!=o.length?" ":"")+o.slice(s)||null}return!0})}),addLineWidget:gn(function(e,t,r){return Vi(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return Ki(this,U(this,e),U(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return e=U(this,e),Ki(this,e,e,r,"bookmark")},findMarksAt:function(e){var t=[],r=M(this,(e=U(this,e)).line).markedSpans;if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=U(this,e),t=U(this,t);var n=[],i=e.line;return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans;if(l)for(var s=0;s<l.length;s++){var a=l[s];null!=a.to&&i==e.line&&e.ch>=a.to||null==a.from&&i!=e.line||null!=a.from&&i==t.line&&a.from>=t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker)}++i}),n},getAllMarks:function(){var e=[];return this.iter(function(t){var r=t.markedSpans;if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length;return this.iter(function(i){var o=i.text.length+n;if(o>e)return t=e,!0;e-=o,++r}),U(this,P(r,t))},indexFromPos:function(e){var t=(e=U(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var r=this.lineSeparator().length;return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new Ds(O(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,r=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to);var n=new Ds(O(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Yi(n,Xi(this)),n},unlinkDoc:function(e){var t=this;if(e instanceof jo&&(e=e.doc),this.linked)for(var r=0;r<this.linked.length;++r)if(t.linked[r].doc==e){t.linked.splice(r,1),e.unlinkDoc(t),_i(Xi(t));break}if(e.history==this.history){var n=[e.id];$n(e,function(e){return n.push(e.id)},!0),e.history=new Jn(null),e.history.done=fi(this.history.done,n),e.history.undone=fi(this.history.undone,n)}},iterLinkedDocs:function(e){$n(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):es(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:gn(function(e){"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&Qn(this.cm))})}),Ds.prototype.eachLine=Ds.prototype.iter;for(var Hs=0,Fs=!1,Ps={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Es=0;Es<10;Es++)Ps[Es+48]=Ps[Es+96]=String(Es);for(var zs=65;zs<=90;zs++)Ps[zs]=String.fromCharCode(zs);for(var Is=1;Is<=12;Is++)Ps[Is+111]=Ps[Is+63235]="F"+Is;var Rs={};Rs.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Rs.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Rs.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Rs.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Rs.default=Ml?Rs.macDefault:Rs.pcDefault;var Bs={selectAll:Mi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Gl)},killLine:function(e){return co(e,function(t){if(t.empty()){var r=M(e.doc,t.head.line).text.length;return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:P(t.head.line+1,0)}:{from:t.head,to:P(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return co(e,function(t){return{from:P(t.from().line,0),to:U(e.doc,P(t.to().line+1,0))}})},delLineLeft:function(e){return co(e,function(e){return{from:P(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return co(e,function(t){var r=e.charCoords(t.head,"div").top+5;return{from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){return co(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div");return{from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(P(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(P(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return vo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return yo(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return mo(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},Vl)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:0,top:r},"div")},Vl)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div");return n.ch<e.getLine(n.line).search(/\S/)?yo(e,t.head):n},Vl)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=f(e.getLine(o.line),o.ch,n);t.push(p(n-l%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return hn(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=M(e.doc,i.line).text;if(o)if(i.ch==o.length&&(i=new P(i.line,i.ch-1)),i.ch>0)i=new P(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),P(i.line,i.ch-2),i,"+transpose");else if(i.line>e.doc.first){var l=M(e.doc,i.line-1).text;l&&(i=new P(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+l.charAt(l.length-1),P(i.line-1,l.length-1),i,"+transpose"))}r.push(new Ts(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){return hn(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input");t=e.listSelections();for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0);jr(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}},Gs=new El,Us=null,Vs=function(e,t,r){this.time=e,this.pos=t,this.button=r};Vs.prototype.compare=function(e,t,r){return this.time+400>e&&0==E(t,this.pos)&&r==this.button};var Ks,js,Xs={toString:function(){return"CodeMirror.Init"}},Ys={},_s={};jo.defaults=Ys,jo.optionHandlers=_s;var $s=[];jo.defineInitHook=function(e){return $s.push(e)};var qs=null,Zs=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new El,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Zs.prototype.init=function(e){function t(e){if(!Me(i,e)){if(i.somethingSelected())_o({lineWise:!1,text:i.getSelections()}),"cut"==e.type&&i.replaceSelection("",null,"cut");else{if(!i.options.lineWiseCopyCut)return;var t=Qo(i);_o({lineWise:!0,text:t.text}),"cut"==e.type&&i.operation(function(){i.setSelections(t.ranges,0,Gl),i.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData();var r=qs.text.join("\n");if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var l=el(),s=l.firstChild;i.display.lineSpace.insertBefore(l,i.display.lineSpace.firstChild),s.value=qs.text.join("\n");var a=document.activeElement;Pl(s),setTimeout(function(){i.display.lineSpace.removeChild(l),a.focus(),a==o&&n.showPrimarySelection()},50)}}var r=this,n=this,i=n.cm,o=n.div=e.lineDiv;Jo(o,i.options.spellcheck),Ql(o,"paste",function(e){Me(i,e)||qo(e,i)||vl<=11&&setTimeout(dn(i,function(){return r.updateFromDOM()}),20)}),Ql(o,"compositionstart",function(e){r.composing={data:e.data,done:!1}}),Ql(o,"compositionupdate",function(e){r.composing||(r.composing={data:e.data,done:!1})}),Ql(o,"compositionend",function(e){r.composing&&(e.data!=r.composing.data&&r.readFromDOMSoon(),r.composing.done=!0)}),Ql(o,"touchstart",function(){return n.forceCompositionEnd()}),Ql(o,"input",function(){r.composing||r.readFromDOMSoon()}),Ql(o,"copy",t),Ql(o,"cut",t)},Zs.prototype.prepareSelection=function(){var e=Tr(this.cm,!1);return e.focus=this.cm.state.focused,e},Zs.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Zs.prototype.showPrimarySelection=function(){var e=window.getSelection(),t=this.cm,r=t.doc.sel.primary(),n=r.from(),i=r.to();if(t.display.viewTo==t.display.viewFrom||n.line>=t.display.viewTo||i.line<t.display.viewFrom)e.removeAllRanges();else{var o=sl(t,e.anchorNode,e.anchorOffset),l=sl(t,e.focusNode,e.focusOffset);if(!o||o.bad||!l||l.bad||0!=E(B(o,l),n)||0!=E(R(o,l),i)){var s=t.display.view,a=n.line>=t.display.viewFrom&&nl(t,n)||{node:s[0].measure.map[2],offset:0},u=i.line<t.display.viewTo&&nl(t,i);if(!u){var c=s[s.length-1].measure,f=c.maps?c.maps[c.maps.length-1]:c.map;u={node:f[f.length-1],offset:f[f.length-2]-f[f.length-3]}}if(a&&u){var h,d=e.rangeCount&&e.getRangeAt(0);try{h=Wl(a.node,a.offset,u.offset,u.node)}catch(e){}h&&(!fl&&t.state.focused?(e.collapse(a.node,a.offset),h.collapsed||(e.removeAllRanges(),e.addRange(h))):(e.removeAllRanges(),e.addRange(h)),d&&null==e.anchorNode?e.addRange(d):fl&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Zs.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Zs.prototype.showMultipleSelections=function(e){r(this.cm.display.cursorDiv,e.cursors),r(this.cm.display.selectionDiv,e.selection)},Zs.prototype.rememberSelection=function(){var e=window.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Zs.prototype.selectionInEditor=function(){var e=window.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return o(this.div,t)},Zs.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Zs.prototype.blur=function(){this.div.blur()},Zs.prototype.getField=function(){return this.div},Zs.prototype.supportsTouch=function(){return!0},Zs.prototype.receivedFocus=function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this;this.selectionInEditor()?this.pollSelection():hn(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},Zs.prototype.selectionChanged=function(){var e=window.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Zs.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm;if(kl&&bl&&this.cm.options.gutters.length&&il(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var r=sl(t,e.anchorNode,e.anchorOffset),n=sl(t,e.focusNode,e.focusOffset);r&&n&&hn(t,function(){bi(t.doc,Rn(r,n),Gl),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},Zs.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,t=e.display,r=e.doc.sel.primary(),n=r.from(),i=r.to();if(0==n.ch&&n.line>e.firstLine()&&(n=P(n.line-1,M(e.doc,n.line-1).length)),i.ch==M(e.doc,i.line).text.length&&i.line<e.lastLine()&&(i=P(i.line+1,0)),n.line<t.viewFrom||i.line>t.viewTo-1)return!1;var o,l,s;n.line==t.viewFrom||0==(o=Lr(e,n.line))?(l=W(t.view[0].line),s=t.view[0].node):(l=W(t.view[o].line),s=t.view[o-1].node.nextSibling);var a,u,c=Lr(e,i.line);if(c==t.view.length-1?(a=t.viewTo-1,u=t.lineDiv.lastChild):(a=W(t.view[c+1].line)-1,u=t.view[c+1].node.previousSibling),!s)return!1;for(var f=e.doc.splitLines(ll(e,s,u,l,a)),h=N(e.doc,P(l,0),P(a,M(e.doc,a).text.length));f.length>1&&h.length>1;)if(g(f)==g(h))f.pop(),h.pop(),a--;else{if(f[0]!=h[0])break;f.shift(),h.shift(),l++}for(var d=0,p=0,v=f[0],m=h[0],y=Math.min(v.length,m.length);d<y&&v.charCodeAt(d)==m.charCodeAt(d);)++d;for(var b=g(f),w=g(h),x=Math.min(b.length-(1==f.length?d:0),w.length-(1==h.length?d:0));p<x&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)++p;if(1==f.length&&1==h.length&&l==n.line)for(;d&&d>n.ch&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)d--,p++;f[f.length-1]=b.slice(0,b.length-p).replace(/^\u200b+/,""),f[0]=f[0].slice(d).replace(/\u200b+$/,"");var C=P(l,d),S=P(a,h.length?g(h).length-p:0);return f.length>1||f[0]||E(C,S)?(Pi(e.doc,f,C,S,"+input"),!0):void 0},Zs.prototype.ensurePolled=function(){this.forceCompositionEnd()},Zs.prototype.reset=function(){this.forceCompositionEnd()},Zs.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Zs.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null}e.updateFromDOM()},80))},Zs.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||hn(this.cm,function(){return vn(e.cm)})},Zs.prototype.setUneditable=function(e){e.contentEditable="false"},Zs.prototype.onKeyPress=function(e){0!=e.charCode&&(e.preventDefault(),this.cm.isReadOnly()||dn(this.cm,$o)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Zs.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Zs.prototype.onContextMenu=function(){},Zs.prototype.resetPosition=function(){},Zs.prototype.needsContentAttribute=!0;var Qs=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new El,this.hasSelection=!1,this.composing=null};Qs.prototype.init=function(e){function t(e){if(!Me(i,e)){if(i.somethingSelected())_o({lineWise:!1,text:i.getSelections()});else{if(!i.options.lineWiseCopyCut)return;var t=Qo(i);_o({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,Gl):(n.prevInput="",l.value=t.text.join("\n"),Pl(l))}"cut"==e.type&&(i.state.cutIncoming=!0)}}var r=this,n=this,i=this.cm,o=this.wrapper=el(),l=this.textarea=o.firstChild;e.wrapper.insertBefore(o,e.wrapper.firstChild),Ll&&(l.style.width="0px"),Ql(l,"input",function(){gl&&vl>=9&&r.hasSelection&&(r.hasSelection=null),n.poll()}),Ql(l,"paste",function(e){Me(i,e)||qo(e,i)||(i.state.pasteIncoming=!0,n.fastPoll())}),Ql(l,"cut",t),Ql(l,"copy",t),Ql(e.scroller,"paste",function(t){Ft(e,t)||Me(i,t)||(i.state.pasteIncoming=!0,n.focus())}),Ql(e.lineSpace,"selectstart",function(t){Ft(e,t)||We(t)}),Ql(l,"compositionstart",function(){var e=i.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),Ql(l,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},Qs.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=Tr(e);if(e.options.moveInputWithCursor){var i=sr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect();n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},Qs.prototype.showSelection=function(e){var t=this.cm.display;r(t.cursorDiv,e.cursors),r(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},Qs.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm;if(t.somethingSelected()){this.prevInput="";var r=t.getSelection();this.textarea.value=r,t.state.focused&&Pl(this.textarea),gl&&vl>=9&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",gl&&vl>=9&&(this.hasSelection=null))}},Qs.prototype.getField=function(){return this.textarea},Qs.prototype.supportsTouch=function(){return!1},Qs.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!Tl||l()!=this.textarea))try{this.textarea.focus()}catch(e){}},Qs.prototype.blur=function(){this.textarea.blur()},Qs.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Qs.prototype.receivedFocus=function(){this.slowPoll()},Qs.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},Qs.prototype.fastPoll=function(){function e(){r.poll()||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))}var t=!1,r=this;r.pollingFast=!0,r.polling.set(20,e)},Qs.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput;if(this.contextMenuPending||!t.state.focused||ts(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1;var i=r.value;if(i==n&&!t.somethingSelected())return!1;if(gl&&vl>=9&&this.hasSelection===i||Ml&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var l=0,s=Math.min(n.length,i.length);l<s&&n.charCodeAt(l)==i.charCodeAt(l);)++l;return hn(t,function(){$o(t,i.slice(l),n.length-l,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},Qs.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Qs.prototype.onKeyPress=function(){gl&&vl>=9&&(this.hasSelection=null),this.fastPoll()},Qs.prototype.onContextMenu=function(e){function t(){if(null!=l.selectionStart){var e=i.somethingSelected(),t="​"+(e?l.value:"");l.value="⇚",l.value=t,n.prevInput=e?"":"​",l.selectionStart=1,l.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function r(){if(n.contextMenuPending=!1,n.wrapper.style.cssText=c,l.style.cssText=u,gl&&vl<9&&o.scrollbars.setScrollTop(o.scroller.scrollTop=a),null!=l.selectionStart){(!gl||gl&&vl<9)&&t();var e=0,r=function(){o.selForContextMenu==i.doc.sel&&0==l.selectionStart&&l.selectionEnd>0&&"​"==n.prevInput?dn(i,Mi)(i):e++<10?o.detectingSelectAll=setTimeout(r,500):(o.selForContextMenu=null,o.input.reset())};o.detectingSelectAll=setTimeout(r,200)}}var n=this,i=n.cm,o=i.display,l=n.textarea,s=Sr(i,e),a=o.scroller.scrollTop;if(s&&!wl){i.options.resetSelectionOnContextMenu&&-1==i.doc.sel.contains(s)&&dn(i,bi)(i.doc,Rn(s),Gl);var u=l.style.cssText,c=n.wrapper.style.cssText;n.wrapper.style.cssText="position: absolute";var f=n.wrapper.getBoundingClientRect();l.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-f.top-5)+"px; left: "+(e.clientX-f.left-5)+"px;\n      z-index: 1000; background: "+(gl?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";var h;if(ml&&(h=window.scrollY),o.input.focus(),ml&&window.scrollTo(null,h),o.input.reset(),i.somethingSelected()||(l.value=n.prevInput=" "),n.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),gl&&vl>=9&&t(),Hl){Fe(e);var d=function(){ke(window,"mouseup",d),setTimeout(r,20)};Ql(window,"mouseup",d)}else setTimeout(r,50)}},Qs.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},Qs.prototype.setUneditable=function(){},Qs.prototype.needsContentAttribute=!1,function(e){function t(t,n,i,o){e.defaults[t]=n,i&&(r[t]=o?function(e,t,r){r!=Xs&&i(e,t,r)}:i)}var r=e.optionHandlers;e.defineOption=t,e.Init=Xs,t("value","",function(e,t){return e.setValue(t)},!0),t("mode",null,function(e,t){e.doc.modeOption=t,jn(e)},!0),t("indentUnit",2,jn,!0),t("indentWithTabs",!1),t("smartIndent",!0),t("tabSize",4,function(e){Xn(e),er(e),vn(e)},!0),t("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first;e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i);if(-1==o)break;i=o+t.length,r.push(P(n,o))}n++});for(var i=r.length-1;i>=0;i--)Pi(e.doc,t,r[i],P(r[i].line,r[i].ch+t.length))}}),t("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Xs&&e.refresh()}),t("specialCharPlaceholder",at,function(e){return e.refresh()},!0),t("electricChars",!0),t("inputStyle",Tl?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),t("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),t("rtlMoveVisually",!Ol),t("wholeLineUpdateBefore",!0),t("theme","default",function(e){Go(e),Uo(e)},!0),t("keyMap","default",function(e,t,r){var n=uo(t),i=r!=Xs&&uo(r);i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),t("extraKeys",null),t("configureMouse",null),t("lineWrapping",!1,Ko,!0),t("gutters",[],function(e){Fn(e.options),Uo(e)},!0),t("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?wr(e.display)+"px":"0",e.refresh()},!0),t("coverGutterNextToScrollbar",!1,function(e){return en(e)},!0),t("scrollbarStyle","native",function(e){rn(e),en(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),t("lineNumbers",!1,function(e){Fn(e.options),Uo(e)},!0),t("firstLineNumber",1,Uo,!0),t("lineNumberFormatter",function(e){return e},Uo,!0),t("showCursorWhenSelecting",!1,kr,!0),t("resetSelectionOnContextMenu",!0),t("lineWiseCopyCut",!0),t("pasteLinesPerSelection",!0),t("readOnly",!1,function(e,t){"nocursor"==t&&(Fr(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),t("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),t("dragDrop",!0,Vo),t("allowDropFileTypes",null),t("cursorBlinkRate",530),t("cursorScrollMargin",0),t("cursorHeight",1,kr,!0),t("singleCursorHeightPerLine",!0,kr,!0),t("workTime",100),t("workDelay",100),t("flattenSpans",!0,Xn,!0),t("addModeClass",!1,Xn,!0),t("pollInterval",100),t("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),t("historyEventDelay",1250),t("viewportMargin",10,function(e){return e.refresh()},!0),t("maxHighlightLength",1e4,Xn,!0),t("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),t("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),t("autofocus",null),t("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0)}(jo),function(e){var t=e.optionHandlers,r=e.helpers={};e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,r){var n=this.options,i=n[e];n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&dn(this,t[e])(this,r,i),Te(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](uo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:pn(function(t,r){var n=t.token?t:e.getMode(this.options,t);if(n.startState)throw new Error("Overlays may not be stateful.");m(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,vn(this)}),removeOverlay:pn(function(e){for(var t=this,r=this.state.overlays,n=0;n<r.length;++n){var i=r[n].modeSpec;if(i==e||"string"==typeof e&&i.name==e)return r.splice(n,1),t.state.modeGen++,void vn(t)}}),indentLine:pn(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),H(this.doc,e)&&Yo(this,e,t,r)}),indentSelection:pn(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i];if(o.empty())o.head.line>n&&(Yo(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&jr(t));else{var l=o.from(),s=o.to(),a=Math.max(n,l.line);n=Math.min(t.lastLine(),s.line-(s.ch?0:1))+1;for(var u=a;u<n;++u)Yo(t,u,e);var c=t.doc.sel.ranges;0==l.ch&&r.length==c.length&&c[i].from().ch>0&&gi(t.doc,i,new Ts(l,c[i].to()),Gl)}}}),getTokenAt:function(e,t){return Je(this,e,t)},getLineTokens:function(e,t){return Je(this,P(e),t,!0)},getTokenTypeAt:function(e){e=U(this.doc,e);var t,r=_e(this,M(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch;if(0==o)t=r[2];else for(;;){var l=n+i>>1;if((l?r[2*l-1]:0)>=o)i=l;else{if(!(r[2*l+1]<o)){t=r[2*l+2];break}n=l+1}}var s=t?t.indexOf("overlay "):-1;return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var r=this.doc.mode;return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=this,i=[];if(!r.hasOwnProperty(t))return i;var o=r[t],l=this.getModeAt(e);if("string"==typeof l[t])o[l[t]]&&i.push(o[l[t]]);else if(l[t])for(var s=0;s<l[t].length;s++){var a=o[l[t][s]];a&&i.push(a)}else l.helperType&&o[l.helperType]?i.push(o[l.helperType]):o[l.name]&&i.push(o[l.name]);for(var u=0;u<o._global.length;u++){var c=o._global[u];c.pred(l,n)&&-1==h(i,c.val)&&i.push(c.val)}return i},getStateAfter:function(e,t){var r=this.doc;return e=G(r,null==e?r.first+r.size-1:e),$e(this,e+1,t).state},cursorCoords:function(e,t){var r,n=this.doc.sel.primary();return r=null==e?n.head:"object"==typeof e?U(this.doc,e):e?n.from():n.to(),sr(this,r,t||"page")},charCoords:function(e,t){return lr(this,U(this.doc,e),t||"page")},coordsChar:function(e,t){return e=or(this,e,t||"page"),cr(this,e.left,e.top)},lineAtHeight:function(e,t){return e=or(this,{top:e,left:0},t||"page").top,D(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=M(this.doc,e)}else n=e;return ir(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-ye(n):0)},defaultTextHeight:function(){return mr(this.display)},defaultCharWidth:function(){return yr(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display,l=(e=sr(this,U(this.doc,e))).bottom,s=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==n)l=e.top;else if("above"==n||"near"==n){var a=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>a)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=a&&(l=e.bottom),s+t.offsetWidth>u&&(s=u-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),r&&Ur(this,{left:s,top:l,right:s+t.offsetWidth,bottom:l+t.offsetHeight})},triggerOnKeyDown:pn(Lo),triggerOnKeyPress:pn(Mo),triggerOnKeyUp:To,triggerOnMouseDown:pn(Oo),execCommand:function(e){if(Bs.hasOwnProperty(e))return Bs[e].call(null,this)},triggerElectric:pn(function(e){Zo(this,e)}),findPosH:function(e,t,r,n){var i=this,o=1;t<0&&(o=-1,t=-t);for(var l=U(this.doc,e),s=0;s<t&&!(l=tl(i.doc,l,o,r,n)).hitSide;++s);return l},moveH:pn(function(e,t){var r=this;this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?tl(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},Vl)}),deleteH:pn(function(e,t){var r=this.doc.sel,n=this.doc;r.somethingSelected()?n.replaceSelection("",null,"+delete"):co(this,function(r){var i=tl(n,r.head,e,t,!1);return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=this,o=1,l=n;t<0&&(o=-1,t=-t);for(var s=U(this.doc,e),a=0;a<t;++a){var u=sr(i,s,"div");if(null==l?l=u.left:u.left=l,(s=rl(i,u,o,r)).hitSide)break}return s},moveV:pn(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected();if(n.extendSelectionsBy(function(l){if(o)return e<0?l.from():l.to();var s=sr(r,l.head,"div");null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left);var a=rl(r,s,e,t);return"page"==t&&l==n.sel.primary()&&Kr(r,lr(r,a,"div").top-s.top),a},Vl),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l]}),findWordAt:function(e){var t=M(this.doc,e.line).text,r=e.ch,n=e.ch;if(t){var i=this.getHelper(e,"wordChars");"before"!=e.sticky&&n!=t.length||!r?++n:--r;for(var o=t.charAt(r),l=x(o,i)?function(e){return x(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!x(e)};r>0&&l(t.charAt(r-1));)--r;for(;n<t.length&&l(t.charAt(n));)++n}return new Ts(P(e.line,r),P(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?s(this.display.cursorDiv,"CodeMirror-overwrite"):Fl(this.display.cursorDiv,"CodeMirror-overwrite"),Te(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==l()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:pn(function(e,t){Xr(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-It(this)-this.display.barHeight,width:e.scrollWidth-It(this)-this.display.barWidth,clientHeight:Bt(this),clientWidth:Rt(this)}},scrollIntoView:pn(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:P(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?Yr(this,e):$r(this,e.from,e.to,e.margin)}),setSize:pn(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e};null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&Jt(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){mn(r,i,"widget");break}++i}),this.curOp.forceUpdate=!0,Te(this,"refresh",this)}),operation:function(e){return hn(this,e)},startOperation:function(){return nn(this)},endOperation:function(){return on(this)},refresh:pn(function(){var e=this.display.cachedTextHeight;vn(this),this.curOp.forceUpdate=!0,er(this),Xr(this,this.doc.scrollLeft,this.doc.scrollTop),Wn(this),(null==e||Math.abs(e-mr(this.display))>.5)&&Cr(this),Te(this,"refresh",this)}),swapDoc:pn(function(e){var t=this.doc;return t.cm=null,qn(this,e),er(this),this.display.input.reset(),Xr(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,bt(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Ae(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o})}}(jo);var Js="iter insert remove copy getEditor constructor".split(" ");for(var ea in Ds.prototype)Ds.prototype.hasOwnProperty(ea)&&h(Js,ea)<0&&(jo.prototype[ea]=function(e){return function(){return e.apply(this.doc,arguments)}}(Ds.prototype[ea]));return Ae(Ds),jo.inputStyles={textarea:Qs,contenteditable:Zs},jo.defineMode=function(e){jo.defaults.mode||"null"==e||(jo.defaults.mode=e),Be.apply(this,arguments)},jo.defineMIME=function(e,t){os[e]=t},jo.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),jo.defineMIME("text/plain","null"),jo.defineExtension=function(e,t){jo.prototype[e]=t},jo.defineDocExtension=function(e,t){Ds.prototype[e]=t},jo.fromTextArea=function(e,t){function r(){e.value=a.getValue()}if(t=t?c(t):{},t.value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=l();t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}var i;if(e.form&&(Ql(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var o=e.form;i=o.submit;try{var s=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=s}}catch(e){}}t.finishInit=function(t){t.save=r,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,r(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(ke(e.form,"submit",r),"function"==typeof e.form.submit&&(e.form.submit=i))}},e.style.display="none";var a=jo(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t);return a},function(e){e.off=ke,e.on=Ql,e.wheelEventPixels=En,e.Doc=Ds,e.splitLines=es,e.countColumn=f,e.findColumn=d,e.isWordChar=w,e.Pass=Bl,e.signal=Te,e.Line=fs,e.changeEnd=Bn,e.scrollbarModel=ws,e.Pos=P,e.cmpPos=E,e.modes=is,e.mimeModes=os,e.resolveMode=Ge,e.getMode=Ue,e.modeExtensions=ls,e.extendMode=Ve,e.copyState=Ke,e.startState=Xe,e.innerMode=je,e.commands=Bs,e.keyMap=Rs,e.keyName=ao,e.isModifierKey=lo,e.lookupKey=oo,e.normalizeKeyMap=io,e.StringStream=ss,e.SharedTextMarker=As,e.TextMarker=Os,e.LineWidget=Ms,e.e_preventDefault=We,e.e_stopPropagation=De,e.e_stop=Fe,e.addClass=s,e.contains=o,e.rmClass=Fl,e.keyNames=Ps}(jo),jo.version="5.31.0",jo});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var htmlConfig = {
  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                    'track': true, 'wbr': true, 'menuitem': true},
  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                     'th': true, 'tr': true},
  contextGrabbers: {
    'dd': {'dd': true, 'dt': true},
    'dt': {'dd': true, 'dt': true},
    'li': {'li': true},
    'option': {'option': true, 'optgroup': true},
    'optgroup': {'optgroup': true},
    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
    'rp': {'rp': true, 'rt': true},
    'rt': {'rp': true, 'rt': true},
    'tbody': {'tbody': true, 'tfoot': true},
    'td': {'td': true, 'th': true},
    'tfoot': {'tbody': true},
    'th': {'td': true, 'th': true},
    'thead': {'tbody': true, 'tfoot': true},
    'tr': {'tr': true}
  },
  doNotIndent: {"pre": true},
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
}

var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  caseFold: false
}

CodeMirror.defineMode("xml", function(editorConf, config_) {
  var indentUnit = editorConf.indentUnit
  var config = {}
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
  for (var prop in defaults) config[prop] = defaults[prop]
  for (var prop in config_) config[prop] = config_[prop]

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }
  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " tag error" : "tag error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!config.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function(baseIndent) {
      var state = {tokenize: inText,
                   state: baseState,
                   indented: baseIndent || 0,
                   tagName: null, tagStart: null,
                   context: null}
      if (baseIndent != null) state.baseIndent = baseIndent
      return state
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
      }
      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && context.prev && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return state.baseIndent || 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: config.htmlMode ? "html" : "xml",
    helperType: config.htmlMode ? "html" : "xml",

    skipAttribute: function(state) {
      if (state.state == attrValueState)
        state.state = attrState
    }
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    var jsKeywords = {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };

    // Extend the 'normal' keywords with the TypeScript language extensions
    if (isTS) {
      var type = {type: "variable", style: "type"};
      var tsKeywords = {
        // object-like things
        "interface": kw("class"),
        "implements": C,
        "namespace": C,
        "module": kw("module"),
        "enum": kw("module"),

        // scope modifiers
        "public": kw("modifier"),
        "private": kw("modifier"),
        "protected": kw("modifier"),
        "abstract": kw("modifier"),
        "readonly": kw("modifier"),

        // types
        "string": type, "number": type, "boolean": type, "any": type
      };

      for (var attr in tsKeywords) {
        jsKeywords[attr] = tsKeywords[attr];
      }
    }

    return jsKeywords;
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/o/i)) {
      stream.eatWhile(/[0-7]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/b/i)) {
      stream.eatWhile(/[01]/i);
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^\s*[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/]/.test(ch)) {
        return;
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    function inList(list) {
      for (var v = list; v; v = v.next)
        if (v.name == varname) return true;
      return false;
    }
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (inList(state.localVars)) return;
      state.localVars = {name: varname, next: state.localVars};
    } else {
      if (inList(state.globalVars)) return;
      if (parserConfig.globalVars)
        state.globalVars = {name: varname, next: state.globalVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
    cx.state.localVars = defaultVars;
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "variable") {
      if (isTS && value == "type") {
        cx.marked = "keyword"
        return cont(typeexpr, expect("operator"), typeexpr, expect(";"));
      } if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"),
                                      block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                     statement, poplex, popcontext);
    if (type == "class") return cont(pushlex("form"), className, poplex);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "module") return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    return expressionInner(type, false);
  }
  function expressionNoComma(type) {
    return expressionInner(type, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), expression, expect(")"), poplex)
  }
  function expressionInner(type, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class") return cont(pushlex("form"), classExpression, poplex);
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (type == "modifier") {
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function typeexpr(type, value) {
    if (type == "variable" || value == "void") {
      if (value == "keyof") {
        cx.marked = "keyword"
        return cont(typeexpr)
      } else {
        cx.marked = "type"
        return cont(afterType)
      }
    }
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expression, maybetype, expect("]"), typeprop)
    }
  }
  function typearg(type) {
    if (type == "variable") return cont(typearg)
    else if (type == ":") return cont(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == ".") return cont(typeexpr)
    if (type == "[") return cont(expect("]"), afterType)
    if (value == "extends") return cont(typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function vardef() {
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (type == "modifier") return cont(pattern)
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(pattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    return cont(expect(":"), pattern, maybeAssign);
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type) {
    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, expect(";"), forspec2);
    if (type == ";") return cont(forspec2);
    if (type == "variable") return cont(formaybeinof);
    return pass(expression, expect(";"), forspec2);
  }
  function formaybeinof(_type, value) {
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return cont(maybeoperatorComma, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return pass(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, maybetype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, functiondef)
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread" || type == "modifier") return cont(funarg);
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ","))
      return cont(isTS ? typeexpr : expression, classNameAfter);
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "modifier" || type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set") &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(isTS ? classfield : functiondef, classBody);
    }
    if (type == "[")
      return cont(expression, expect("]"), isTS ? classfield : functiondef, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == ";") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    return pass(functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && {vars: parserConfig.localVars},
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  var inline = parserConfig.inline
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^-[\w\\\-]+/)) {
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ret("variable-2", "variable-definition");
        return ret("variable-2", "variable");
      } else if (stream.match(/^\w+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if ((ch == "u" && stream.match(/rl(-prefix)?\(/)) ||
               (ch == "d" && stream.match("omain(")) ||
               (ch == "r" && stream.match("egexp("))) {
      stream.backUp(1);
      state.tokenize = tokenParenthesized;
      return ret("property", "word");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev)
      state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/.test(type)) {
      return pushContext(state, stream, "atComponentBlock");
    } else if (/^@(-moz-)?document$/.test(type)) {
      return pushContext(state, stream, "documentTypes");
    } else if (/^@(media|supports|(-moz-)?document|import)$/.test(type)) {
      return pushContext(state, stream, "atBlock");
    } else if (/^@(font-face|counter-style)/.test(type)) {
      state.stateArg = type;
      return "restricted_atBlock_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "parens");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = "string-2";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "interpolation") return pushContext(state, stream, "interpolation");
    if (type == "word") wordAsValue(stream);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "meta") return "pseudo";

    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.documentTypes = function(type, stream, state) {
    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
      override = "tag";
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (type == "}" || type == ";") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "interpolation") return pushContext(state, stream, "interpolation");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and" || word == "or")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else if (mediaValueKeywords.hasOwnProperty(word))
        override = "keyword";
      else if (propertyKeywords.hasOwnProperty(word))
        override = "property";
      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
        override = "string-2";
      else if (valueKeywords.hasOwnProperty(word))
        override = "atom";
      else if (colorKeywords.hasOwnProperty(word))
        override = "keyword";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.atComponentBlock = function(type, stream, state) {
    if (type == "}")
      return popAndPass(type, stream, state);
    if (type == "{")
      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
    if (type == "word")
      override = "error";
    return state.context.type;
  };

  states.atBlock_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "restricted_atBlock");
    if (type == "word" && state.stateArg == "@counter-style") {
      override = "variable";
      return "restricted_atBlock_before";
    }
    return pass(type, stream, state);
  };

  states.restricted_atBlock = function(type, stream, state) {
    if (type == "}") {
      state.stateArg = null;
      return popContext(state);
    }
    if (type == "word") {
      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "restricted_atBlock";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type == "word") override = "variable";
    else if (type != "variable" && type != "(" && type != ")") override = "error";
    return "interpolation";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: inline ? "block" : "top",
              stateArg: null,
              context: new Context(inline ? "block" : "top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      if (type != "comment")
        state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
      if (cx.prev) {
        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
        }
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: lineComment,
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i].toLowerCase()] = true;
    }
    return keys;
  }

  var documentTypes_ = [
    "domain", "regexp", "url", "url-prefix"
  ], documentTypes = keySet(documentTypes_);

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid", "orientation",
    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
    "pointer", "any-pointer", "hover", "any-hover"
  ], mediaFeatures = keySet(mediaFeatures_);

  var mediaValueKeywords_ = [
    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
    "interlace", "progressive"
  ], mediaValueKeywords = keySet(mediaValueKeywords_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backface-visibility",
    "background", "background-attachment", "background-blend-mode", "background-clip",
    "background-color", "background-image", "background-origin", "background-position",
    "background-repeat", "background-size", "baseline-shift", "binding",
    "bleed", "bookmark-label", "bookmark-level", "bookmark-state",
    "bookmark-target", "border", "border-bottom", "border-bottom-color",
    "border-bottom-left-radius", "border-bottom-right-radius",
    "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color",
    "border-left-style", "border-left-width", "border-radius", "border-right",
    "border-right-color", "border-right-style", "border-right-width",
    "border-spacing", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style",
    "border-top-width", "border-width", "bottom", "box-decoration-break",
    "box-shadow", "box-sizing", "break-after", "break-before", "break-inside",
    "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count",
    "column-fill", "column-gap", "column-rule", "column-rule-color",
    "column-rule-style", "column-rule-width", "column-span", "column-width",
    "columns", "content", "counter-increment", "counter-reset", "crop", "cue",
    "cue-after", "cue-before", "cursor", "direction", "display",
    "dominant-baseline", "drop-initial-after-adjust",
    "drop-initial-after-align", "drop-initial-before-adjust",
    "drop-initial-before-align", "drop-initial-size", "drop-initial-value",
    "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis",
    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
    "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings",
    "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust",
    "font-stretch", "font-style", "font-synthesis", "font-variant",
    "font-variant-alternates", "font-variant-caps", "font-variant-east-asian",
    "font-variant-ligatures", "font-variant-numeric", "font-variant-position",
    "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
    "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap",
    "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap",
    "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens",
    "icon", "image-orientation", "image-rendering", "image-resolution",
    "inline-box-align", "justify-content", "justify-items", "justify-self", "left", "letter-spacing",
    "line-break", "line-height", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top",
    "marks", "marquee-direction", "marquee-loop",
    "marquee-play-count", "marquee-speed", "marquee-style", "max-height",
    "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index",
    "nav-left", "nav-right", "nav-up", "object-fit", "object-position",
    "opacity", "order", "orphans", "outline",
    "outline-color", "outline-offset", "outline-style", "outline-width",
    "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y",
    "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
    "page", "page-break-after", "page-break-before", "page-break-inside",
    "page-policy", "pause", "pause-after", "pause-before", "perspective",
    "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position",
    "presentation-level", "punctuation-trim", "quotes", "region-break-after",
    "region-break-before", "region-break-inside", "region-fragment",
    "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness",
    "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang",
    "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin",
    "shape-outside", "size", "speak", "speak-as", "speak-header",
    "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set",
    "tab-size", "table-layout", "target", "target-name", "target-new",
    "target-position", "text-align", "text-align-last", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-style", "text-emphasis", "text-emphasis-color",
    "text-emphasis-position", "text-emphasis-style", "text-height",
    "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position",
    "text-wrap", "top", "transform", "transform-origin", "transform-style",
    "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "unicode-bidi",
    "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration",
    "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress",
    "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break",
    "word-spacing", "word-wrap", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode"
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords_ = [
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside",
    "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button",
    "searchfield-results-decoration", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

  var fontProperties_ = [
    "font-family", "src", "unicode-range", "font-variant", "font-feature-settings",
    "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var counterDescriptors_ = [
    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
    "speak-as", "suffix", "symbols", "system"
  ], counterDescriptors = keySet(counterDescriptors_);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse",
    "compact", "condensed", "contain", "content", "contents",
    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "dense", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari", "difference",
    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
    "dot-dash", "dot-dot-dash",
    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
    "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
    "katakana", "katakana-iroha", "keep-all", "khmer",
    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
    "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten",
    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter",
    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
    "progress", "push-button", "radial-gradient", "radio", "read-only",
    "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeating-linear-gradient",
    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen",
    "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "simp-chinese-formal", "simp-chinese-informal", "single",
    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub",
    "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "tamil",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "trad-chinese-formal", "trad-chinese-informal", "transform",
    "translate", "translate3d", "translateX", "translateY", "translateZ",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
    .concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/\s*\{/, false))
          return [null, null]
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.eat("{")) return [null, "interpolation"];
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

  CodeMirror.defineMIME("text/x-gss", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css",
    helperType: "gss"
  });

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var defaultTags = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
      ["type", /./, "text/plain"],
      [null, null, "javascript"]
    ],
    style:  [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"]
    ]
  };

  function maybeBackup(stream, pat, style) {
    var cur = stream.current(), close = cur.search(pat);
    if (close > -1) {
      stream.backUp(cur.length - close);
    } else if (cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }

  var attrRegexpCache = {};
  function getAttrRegexp(attr) {
    var regexp = attrRegexpCache[attr];
    if (regexp) return regexp;
    return attrRegexpCache[attr] = new RegExp("\\s+" + attr + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");
  }

  function getAttrValue(text, attr) {
    var match = text.match(getAttrRegexp(attr))
    return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : ""
  }

  function getTagRegexp(tagName, anchored) {
    return new RegExp((anchored ? "^" : "") + "<\/\s*" + tagName + "\s*>", "i");
  }

  function addTags(from, to) {
    for (var tag in from) {
      var dest = to[tag] || (to[tag] = []);
      var source = from[tag];
      for (var i = source.length - 1; i >= 0; i--)
        dest.unshift(source[i])
    }
  }

  function findMatchingMode(tagInfo, tagText) {
    for (var i = 0; i < tagInfo.length; i++) {
      var spec = tagInfo[i];
      if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
    }
  }

  CodeMirror.defineMode("htmlmixed", function (config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, {
      name: "xml",
      htmlMode: true,
      multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
      multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag
    });

    var tags = {};
    var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
    addTags(defaultTags, tags);
    if (configTags) addTags(configTags, tags);
    if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
      tags.script.unshift(["type", configScript[i].matches, configScript[i].mode])

    function html(stream, state) {
      var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName
      if (tag && !/[<>\s\/]/.test(stream.current()) &&
          (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) &&
          tags.hasOwnProperty(tagName)) {
        state.inTag = tagName + " "
      } else if (state.inTag && tag && />$/.test(stream.current())) {
        var inTag = /^([\S]+) (.*)/.exec(state.inTag)
        state.inTag = null
        var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2])
        var mode = CodeMirror.getMode(config, modeSpec)
        var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
        state.token = function (stream, state) {
          if (stream.match(endTagA, false)) {
            state.token = html;
            state.localState = state.localMode = null;
            return null;
          }
          return maybeBackup(stream, endTag, state.localMode.token(stream, state.localState));
        };
        state.localMode = mode;
        state.localState = CodeMirror.startState(mode, htmlMode.indent(state.htmlState, ""));
      } else if (state.inTag) {
        state.inTag += stream.current()
        if (stream.eol()) state.inTag += " "
      }
      return style;
    };

    return {
      startState: function () {
        var state = CodeMirror.startState(htmlMode);
        return {token: html, inTag: null, localMode: null, localState: null, htmlState: state};
      },

      copyState: function (state) {
        var local;
        if (state.localState) {
          local = CodeMirror.copyState(state.localMode, state.localState);
        }
        return {token: state.token, inTag: state.inTag,
                localMode: state.localMode, localState: local,
                htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
      },

      token: function (stream, state) {
        return state.token(stream, state);
      },

      indent: function (state, textAfter, line) {
        if (!state.localMode || /^\s*<\//.test(textAfter))
          return htmlMode.indent(state.htmlState, textAfter);
        else if (state.localMode.indent)
          return state.localMode.indent(state.localState, textAfter, line);
        else
          return CodeMirror.Pass;
      },

      innerMode: function (state) {
        return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
      }
    };
  }, "xml", "javascript", "css");

  CodeMirror.defineMIME("text/html", "htmlmixed");
});
