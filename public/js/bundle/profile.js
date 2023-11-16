/*! For license information please see profile.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6845],{22260:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var a=r(74865),n=r.n(a);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,a){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),s=new F(a||[]);return n(i,"_invoke",{value:E(t,r,s)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var m="suspendedStart",v="suspendedYield",h="executing",b="completed",y={};function g(){}function w(){}function _(){}var k={};f(k,u,(function(){return this}));var P=Object.getPrototypeOf,x=P&&P(P(T([])));x&&x!==r&&a.call(x,u)&&(k=x);var S=_.prototype=g.prototype=Object.create(k);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(n,i,s,u){var l=p(t[n],t,i);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==o(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(f).then((function(t){c.value=t,s(c)}),(function(t){return r("throw",t,s,u)}))}u(l.arg)}var i;n(this,"_invoke",{value:function(t,a){function n(){return new e((function(e,n){r(t,a,e,n)}))}return i=i?i.then(n,n):n()}})}function E(e,r,a){var n=m;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===b){if("throw"===o)throw i;return{value:t,done:!0}}for(a.method=o,a.arg=i;;){var s=a.delegate;if(s){var u=j(s,a);if(u){if(u===y)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===m)throw n=b,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=h;var l=p(e,r,a);if("normal"===l.type){if(n=a.done?b:v,l.arg===y)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n=b,a.method="throw",a.arg=l.arg)}}}function j(e,r){var a=r.method,n=e.iterator[a];if(n===t)return r.delegate=null,"throw"===a&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),y;var o=p(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return w.prototype=_,n(S,"constructor",{value:_,configurable:!0}),n(_,"constructor",{value:w,configurable:!0}),w.displayName=f(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},L(O.prototype),f(O.prototype,l,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new O(d(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(S),f(S,c,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=T,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return s.type="throw",s.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:T(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),y}},e}function s(t,e,r,a,n,o,i){try{var s=t[o](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(a,n)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c={metaInfo:{title:"Profile"},data:function(){return{data:new FormData,avatar:"",username:"",isLoading:!0,user:{id:"",firstname:"",lastname:"",username:"",NewPassword:null,email:"",phone:"",avatar:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(20629).Se)(["currentUser"])),methods:{Submit_Profile:function(){var t=this;this.$refs.Update_Profile.validate().then((function(e){e?t.Update_Profile():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,r){this.$root.$bvToast.toast(e,{title:r,variant:t,solid:!0})},getValidationState:function(t){var e=t.dirty,r=t.validated,a=t.valid;return e||r?void 0===a?null:a:null},Get_Profile_Info:function(){var t=this;axios.get("users/Get_Info/Profile").then((function(e){t.user=e.data.user,t.avatar=t.currentUser.avatar,t.username=t.currentUser.username,t.isLoading=!1})).catch((function(e){t.isLoading=!1}))},onFileSelected:function(t){var e,r=this;return(e=i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$refs.Avatar.validate(t);case 2:a=e.sent,n=a.valid,r.user.avatar=n?t.target.files[0]:"";case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(t){s(o,a,n,i,u,"next",t)}function u(t){s(o,a,n,i,u,"throw",t)}i(void 0)}))})()},Update_Profile:function(){var t=this;n().start(),n().set(.1);var e=this;e.data.append("firstname",e.user.firstname),e.data.append("lastname",e.user.lastname),e.data.append("username",e.user.username),e.data.append("email",e.user.email),e.data.append("NewPassword",e.user.NewPassword),e.data.append("phone",e.user.phone),e.data.append("avatar",e.user.avatar),e.data.append("_method","put"),axios.post("updateProfile/"+e.user.id,e.data).then((function(e){t.makeToast("success",t.$t("Update.TitleProfile"),t.$t("Success")),n().done(),setTimeout((function(){t.Get_Profile_Info()}),500)})).catch((function(t){n().done()}))}},created:function(){this.Get_Profile_Info()}};const f=(0,r(51900).Z)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("profil"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("div",{staticClass:"card user-profile o-hidden mb-30"},[e("div",{staticClass:"header-cover"}),t._v(" "),e("div",{staticClass:"user-info"},[e("img",{staticClass:"profile-picture avatar-lg mb-2",attrs:{src:"/images/avatar/"+t.avatar,alt:""}}),t._v(" "),e("p",{staticClass:"m-0 text-24"},[t._v(t._s(t.username))])]),t._v(" "),e("div",{staticClass:"card-body"},[e("validation-observer",{ref:"Update_Profile"},[e("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.Submit_Profile.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Firstname",rules:{required:!0,min:4,max:20}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("Firstname")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Firstname-feedback",label:"Firstname"},model:{value:t.user.firstname,callback:function(e){t.$set(t.user,"firstname",e)},expression:"user.firstname"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Firstname-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,2648461320)})],1),t._v(" "),e("b-col",{attrs:{md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"lastname",rules:{required:!0,min:4,max:20}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("lastname")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"lastname-feedback",label:"lastname"},model:{value:t.user.lastname,callback:function(e){t.$set(t.user,"lastname",e)},expression:"user.lastname"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"lastname-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,3016559224)})],1),t._v(" "),e("b-col",{attrs:{md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"username",rules:{required:!0,min:4,max:20}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("username")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"username-feedback",label:"username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"username-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,2089383363)})],1),t._v(" "),e("b-col",{attrs:{md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Phone",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("Phone")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Phone-feedback",label:"Phone"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,2094202729)})],1),t._v(" "),e("b-col",{attrs:{md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Email",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("Email")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Email-feedback",label:"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,2639721465)})],1),t._v(" "),e("b-col",{attrs:{md:"6",sm:"12"}},[e("validation-provider",{ref:"Avatar",attrs:{name:"Avatar",rules:"mimes:image/*|size:200"},scopedSlots:t._u([{key:"default",fn:function(r){r.validate;var a=r.valid,n=r.errors;return e("b-form-group",{attrs:{label:t.$t("UserImage")}},[e("input",{class:{"is-invalid":!!n.length},attrs:{state:!n[0]&&(!!a||null),label:"Choose Avatar",type:"file"},on:{change:t.onFileSelected}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Avatar-feedback"}},[t._v(t._s(n[0]))])],1)}}],null,!1,2117094513)})],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("validation-provider",{attrs:{name:"New password",rules:{min:6,max:14}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("Newpassword")}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Nawpassword-feedback",placeholder:t.$t("LeaveBlank"),label:"New password"},model:{value:t.user.NewPassword,callback:function(e){t.$set(t.user,"NewPassword",e)},expression:"user.NewPassword"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Nawpassword-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,1010016937)})],1),t._v(" "),e("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)])],1)}),[],!1,null,null,null).exports}}]);