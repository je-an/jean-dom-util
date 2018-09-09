!function(r,n){"function"==typeof define&&define.amd?define([],n):(r.DomUtil=r.DomUtil||{},r.DomUtil=n())}(this,function(){var r,n;return function(e){function t(r){for(var n=0,e=[];n<r.length;n++){var t=s.resolved[r[n]];t&&e.push(t)}return e}function i(){for(var r in s.unresolved){var n=s.unresolved[r],e=t(n.dependencies);o(r,n.factory,n.dependencies,e,!1)}}function o(r,n,e,t,i){if(t.length===e.length){var o=n.apply(n,t);s.resolved[r]=o||{}}else i&&(s.unresolved[r]={dependencies:e,factory:n})}var s={resolved:{},unresolved:{}};n=function(r,n,e){return s.resolved[r]?void console.warn("There is already a module with id <"+r+"> defined. Therefore this module will be ignored"):"string"==typeof r&&Array.isArray(n)&&"function"==typeof e?(0===n.length?o(r,e,n,[],!1):o(r,e,n,t(n),!0),void i()):void console.warn("Passed arguments for module are invalid")},n.amd={},r=function(r,n){r=Array.isArray(r)?r:[r];var e=t(r);if(1===e.length&&!n)return e[0];if(e.length!==r.length||!n)throw new Error("Not all modules are resolved");n.apply(n,e)}}(),n("node_modules/jean-amd/dist/jean-amd",function(){}),n("TypeCheck",[],function(){return{isString:function(r){return"string"==typeof r},isBoolean:function(r){return"boolean"==typeof r},isNumber:function(r){return"number"==typeof r},isObject:function(r){var n=!1;if(this.isString(r)||this.isFunction(r))return!1;if(this.isEmptyObject(r))return!0;for(var e in r)if(r.hasOwnProperty(e)){n=!0;break}return n},isEmptyObject:function(r){var n=!0;if(!this.isDefined(r)||this.isBoolean(r)||this.isFunction(r)||this.isNumber(r)||this.isString(r)||Array.isArray(r))return!1;for(var e in r)if(r.hasOwnProperty(e)){n=!1;break}return n},isFunction:function(r){return"function"==typeof r},isDefined:function(r){return void 0!==r&&null!=r},isArray:function(r){return Array.isArray(r)},isArrayTypeOf:function(r,n){var e=!0;if(!this.isString(n))throw new TypeError("options.type is not a string");if(!Array.isArray(r))throw new TypeError("options.array is not an array");0===r.length&&(e=!1);for(var t=0,i=r.length;t<i;t++){if(typeof r[t]!==n){e=!1;break}}return e},isInstanceOf:function(r,n){if(!this.isObject(r))throw new TypeError("child is not an object");if(!this.isFunction(n))throw new TypeError("parent is not a function");return r instanceof n}}}),n("Failure",[],function(){return{throwError:function(r){throw new Error(r)},throwTypeError:function(r){throw new TypeError(r)}}}),n("src/DomUtil",["TypeCheck","Failure"],function(r,n){return{createElementFromMarkup:function(e){r.isString(e)||n.throwTypeError("html is not a string");var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},isInViewPort:function(e){r.isInstanceOf(e,HTMLElement)||n.throwTypeError("element is not an instance of HTMLElement");var t=e.getBoundingClientRect();return t.top+t.height>0&&t.top<window.innerHeight},getChildById:function(n,e){var t,i,o=n.children,s=o.length,u=null;for(t=0;t<s;t++)if(i=o[t],i.id===e)return i;for(t=0;t<s;t++)if(u=this.getChildById(o[t],e),r.isDefined(u))return u;return null},getChildByClass:function(n,e){var t,i,o=n.children,s=o.length,u=null;for(t=0;t<s;t++)if(i=o[t],i.classList.contains(e))return i;for(t=0;t<s;t++)if(u=this.getChildByClass(o[t],e),r.isDefined(u))return u;return null}}}),r("src/DomUtil")});