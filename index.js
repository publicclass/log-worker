
var lib = new Blob([
  ";(function(e){function t(t,o){var u={seen:[],stylize:r};return arguments.length>=3&&(u.depth=arguments[2]),arguments.length>=4&&(u.colors=arguments[3]),\"boolean\"==typeof o?u.showHidden=o:o&&e._extend(u,o),u.showHidden===void 0&&(u.showHidden=!1),u.depth===void 0&&(u.depth=2),u.colors===void 0&&(u.colors=!1),u.customInspect===void 0&&(u.customInspect=!0),u.colors&&(u.stylize=n),i(u,t,u.depth)}function n(e,n){var r=t.styles[n];return r?\"[\"+t.colors[r][0]+\"m\"+e+\"[\"+t.colors[r][1]+\"m\":e}function r(e){return e}function o(e){var t={};return e.forEach(function(e){t[e]=!0}),t}function i(t,n,r){if(t.customInspect&&n&&\"function\"==typeof n.inspect&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n))return n.inspect(r)+\"\";var i=u(t,n);if(i)return i;var d=Object.keys(n),h=o(d);if(t.showHidden&&(d=Object.getOwnPropertyNames(n)),0===d.length){if(\"function\"==typeof n){var b=n.name?\": \"+n.name:\"\";return t.stylize(\"[Function\"+b+\"]\",\"special\")}if(f(n))return t.stylize(RegExp.prototype.toString.call(n),\"regexp\");if(y(n))return t.stylize(Date.prototype.toString.call(n),\"date\");if(g(n))return c(n)}var m=\"\",v=!1,j=[\"{\",\"}\"];if(p(n)&&(v=!0,j=[\"[\",\"]\"]),\"function\"==typeof n){var z=n.name?\": \"+n.name:\"\";m=\" [Function\"+z+\"]\"}if(f(n)&&(m=\" \"+RegExp.prototype.toString.call(n)),y(n)&&(m=\" \"+Date.prototype.toUTCString.call(n)),g(n)&&(m=\" \"+c(n)),0===d.length&&(!v||0==n.length))return j[0]+m+j[1];if(0>r)return f(n)?t.stylize(RegExp.prototype.toString.call(n),\"regexp\"):t.stylize(\"[Object]\",\"special\");t.seen.push(n);var O;return O=v?l(t,n,r,h,d):d.map(function(e){return s(t,n,r,h,e,v)}),t.seen.pop(),a(O,m,j)}function u(e,t){switch(typeof t){case\"undefined\":return e.stylize(\"undefined\",\"undefined\");case\"string\":var n=\"'\"+JSON.stringify(t).replace(/^\"|\"$/g,\"\").replace(/'/g,\"\\'\").replace(/\\\"/g,'\"')+\"'\";return e.stylize(n,\"string\");case\"number\":return e.stylize(\"\"+t,\"number\");case\"boolean\":return e.stylize(\"\"+t,\"boolean\")}return null===t?e.stylize(\"null\",\"null\"):void 0}function c(e){return\"[\"+Error.prototype.toString.call(e)+\"]\"}function l(e,t,n,r,o){for(var i=[],u=0,c=t.length;c>u;++u)h(t,u+\"\")?i.push(s(e,t,n,r,u+\"\",!0)):i.push(\"\");return o.forEach(function(o){o.match(/^\d+$/)||i.push(s(e,t,n,r,o,!0))}),i}function s(e,t,n,r,o,u){var c,l,s;if(s=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},s.get?l=s.set?e.stylize(\"[Getter/Setter]\",\"special\"):e.stylize(\"[Getter]\",\"special\"):s.set&&(l=e.stylize(\"[Setter]\",\"special\")),h(r,o)||(c=\"[\"+o+\"]\"),l||(0>e.seen.indexOf(s.value)?(l=null===n?i(e,s.value,null):i(e,s.value,n-1),l.indexOf(\"\\n\")>-1&&(l=u?l.split(\"\\n\").map(function(e){return\"  \"+e}).join(\"\\n\").substr(2):\"\\n\"+l.split(\"\\n\").map(function(e){return\"   \"+e}).join(\"\\n\"))):l=e.stylize(\"[Circular]\",\"special\")),c===void 0){if(u&&o.match(/^\d+$/))return l;c=JSON.stringify(\"\"+o),c.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?(c=c.substr(1,c.length-2),c=e.stylize(c,\"name\")):(c=c.replace(/'/g,\"\\'\").replace(/\\\"/g,'\"').replace(/(^\"|\"$)/g,\"'\"),c=e.stylize(c,\"string\"))}return c+\": \"+l}function a(e,t,n){var r=0,o=e.reduce(function(e,t){return r++,t.indexOf(\"\\n\")>=0&&r++,e+t.length+1},0);return o>60?n[0]+(\"\"===t?\"\":t+\"\\n \")+\" \"+e.join(\",\\n  \")+\" \"+n[1]:n[0]+t+\" \"+e.join(\", \")+\" \"+n[1]}function p(e){return Array.isArray(e)||\"object\"==typeof e&&\"[object Array]\"===d(e)}function f(e){return\"object\"==typeof e&&\"[object RegExp]\"===d(e)}function y(e){return\"object\"==typeof e&&\"[object Date]\"===d(e)}function g(e){return\"object\"==typeof e&&\"[object Error]\"===d(e)}function d(e){return Object.prototype.toString.call(e)}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var b=/%[sdj%]/g;e.format=function(e){if(\"string\"!=typeof e){for(var n=[],r=0;arguments.length>r;r++)n.push(t(arguments[r]));return n.join(\" \")}for(var r=1,o=arguments,i=o.length,u=(e+\"\").replace(b,function(e){if(\"%\"===e)return\"%\";if(r>=i)return e;switch(e){case\"%s\":return o[r++]+\"\";case\"%d\":return Number(o[r++]);case\"%j\":return JSON.stringify(o[r++]);default:return e}}),c=o[r];i>r;c=o[++r])u+=null===c||\"object\"!=typeof c?\" \"+c:\" \"+t(c);return u},e.inspect=t,t.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},t.styles={special:\"cyan\",number:\"yellow\",\"boolean\":\"yellow\",undefined:\"grey\",\"null\":\"bold\",string:\"green\",date:\"magenta\",regexp:\"red\"},e.isArray=p,e.isRegExp=f,e.isDate=y,e.isError=g,e._extend=function(e,t){if(!t||\"object\"!=typeof t)return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}})(util={});",
  ";function Console(t){this._opts=t||{},this._name=this._opts.name||\"log.txt\",this._times={}}function write(t,e){var n=new Blob([e],{type:\"text/plain\"}),r=self.webkitRequestFileSystemSync(TEMPORARY,5242880),i=r.root.getFile(t,{create:!0}),o=i.createWriter();o.seek(o.length),o.write(n)}Console.prototype={log:function(){write(this._name,util.format.apply(this,arguments,this._opts)+\"\\n\")},info:function(){write(this._name,util.format.apply(this,arguments,this._opts)+\"\\n\")},warn:function(){write(this._name,util.format.apply(this,arguments,this._opts)+\"\\n\")},error:function(){write(this._name,util.format.apply(this,arguments,this._opts)+\"\\n\")},dir:function(t){write(this._name,util.inspect(t,this._opts)+\"\\n\")},time:function(t){this._times[t]=Date.now()},timeEnd:function(t){var e=this._times[t];if(!e)throw Error(\"No such label: \"+t);var n=Date.now()-e;this.log(\"%s: %dms\",t,n)},trace:function(){var t=Error();t.name=\"Trace\",t.message=util.format.apply(this,arguments),Error.captureStackTrace(t,arguments.callee),this.error(t.stack)},assert:function(t,e){t||this.error(\"Assertion failed: \",e)}};",
  ";var console=new Console;self.onmessage=function(e){if(e.data)switch(e.data.type){case\"log\":case\"info\":case\"warn\":case\"error\":case\"dir\":case\"time\":case\"timeEnd\":case\"trace\":case\"assert\":console[e.data.type].apply(console,e.data.args);break;case\"open\":console=new Console(e.data);break;default:throw Error(\"unknown type: \"+e.data.type)}};"
])

var open = true;
var worker = new Worker(URL.createObjectURL(lib))
worker.onerror = function(e){
  open = false;
  console.error(e);
}
var name = location.pathname.match(/[^/]+$/g);
if( name ){
  worker.postMessage({
    type: 'open',
    name: name[0],
  })
}


var slice = [].slice;
'log info warn error dir time timeEnd trace assert'.split(' ').forEach(register)
function register(name){
  exports[name] = function(){
    if( !open ) return;
    try {
      worker.postMessage({type:name, args: slice.call(arguments) })
    } catch(e){
      if( e.code == e.DATA_CLONE_ERR && arguments.length ){
        // log and try again with less arguments
        console.log('log-worker couldn\'t log because of a data clone error. trying again with less arguments.')
        exports[name].apply(null,slice.call(arguments,0,-1))
      } else {
        throw e;
      }
    }
  }
}


