(function(e){function t(t){for(var a,i,s=t[0],u=t[1],p=t[2],d=0,c=[];d<s.length;d++)i=s[d],r[i]&&c.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(c.length)c.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={2:0},o=[];function i(e){return s.p+""+({1:"pinball"}[e]||e)+"."+{1:"11859351",3:"91262819"}[e]+".async.js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),o=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var p=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=p;o.push([0,0]),n()})({"/1p2":function(e,t,n){"use strict";n("HEwt"),n("Z2Ku"),n("Vd3H"),n("0E+W"),n("yM4b"),n("IXt9"),n("9AAn"),n("RQRG"),n("/uf1"),n("/8Fb"),n("jm62"),n("uaHG"),n("ZNX/"),n("hhXQ"),n("VRzm"),n("CX2u"),n("OEbY"),n("SRfc"),n("pIFo"),n("KKXr"),n("OG14"),n("a1Th"),n("T39b"),n("ioFf"),n("rE2o"),n("9XZr"),n("7VC1"),n("xm80"),n("sFw1"),n("NO8f"),n("aqI/"),n("Faw5"),n("r1bV"),n("tuSo"),n("nCnK"),n("Y9lz"),n("Tdpu"),n("EK0E"),n("wCsR"),n("R5XZ"),n("Ew+T"),n("rGqo"),n("ls82")},0:function(e,t,n){e.exports=n("KyW6")},1:function(e,t){},"5R+S":function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("+NJR")),o=(a(n("GBY4")),n("f23f")),i={state:{},subscriptions:{setup(e){var t=e.dispatch;e.history;window.addEventListener("message",function(e){var n=e.data,a=n.commend,r=void 0===a?"":a,o=n.data,i=void 0===o?{}:o,s=n.from,u=n.model,p=n.sign;if("helper"===s&&"image"===u)switch(r){case"returnFetch":t({type:"update",payload:{url:i,sign:p}});break}})}},reducers:{update(e,t){t.type;var n=t.payload,a=n.url,r=n.sign;return e[r]=a,e}},effects:{fetch:r.default.mark(function e(t,n){var a,i,s,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.type,a=t.payload,n.put,n.call,i=n.select,s=a.url,u=a.sign,e.next=5,i(e=>{var t=e.image;t[u]||(0,o.fetchFromHelper)("image",{url:s,model:"image",sign:u,mine:"image/jpeg"})});case 5:case"end":return e.stop()}},e)})}};t.default=i},"8BX1":function(e,t){e.exports=window.PIXI},AabO:function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("Xgu4")),o=a(n("+NJR")),i=a(n("quD3")),s=a(n("GBY4")),u=n("f23f"),p={state:{data:{replies:null,hots:null,page:{acount:0,count:0,num:1,size:20},top:null},votes:{rpidArray:[],likeSum:{}},members:{},replyMap:{},config:null,commentMap:[],voteConfig:null,status:{comment:{loadPage:!1,loadingRpid:null},vote:{voting:!1},editor:{getting:!1,sending:!1,error:null}}},subscriptions:{setup(e,t){var n=e.dispatch;e.history;window.addEventListener("message",function(e){var t=e.data,a=t.commend,r=void 0===a?"":a,o=t.data,i=void 0===o?{}:o,s=t.from,u=t.model,p=t.sign;if("helper"===s&&"comment"===u)switch(r){case"returnFetch":if(0===i.code)switch(p){case"getComment":n({type:"updateCommentLoadingState",payload:!1}),n({type:"updateCommentData",payload:i.data});break;case"getReply":n({type:"updateReplyLoadingState",payload:!1}),n({type:"updateReplayData",payload:i.data});break;case"sendReply":n({type:"updateEditorSendError",payload:null});var d=i.data,l=d.dialog,c=d.parent,f=d.root,m=d.rpid;setTimeout(()=>{n({type:"updateEditorSendingState",payload:!1}),n(l||c||f||!m?{type:"fetchReply",payload:{parent:c,root:f}}:{type:"fetchComment"})},1e3);break;case"setLike":var y=i.receipt,v=y.rpid,g=y.action;n({type:"updateCommentLikeStatus",payload:{rpid:v,action:g}});break;case"setHate":var h=i.receipt,w=h.rpid,b=h.action;n({type:"updateCommentHateStatus",payload:{rpid:w,action:b}});break;case"getVote":n({type:"updateVoteData",payload:i.data});break}else 12025===i.code&&(n({type:"updateEditorSendError",payload:i.message}),n({type:"updateEditorSendingState",payload:!1}));break}})}},reducers:{updateCommentData:(e,t)=>{t.type;var n=t.payload,a=t=>{var n=t.rpid,r=t.replies,o=t.rcount,i=t.member,s=t.content;return t.content.message=s.message.replace(/&#([\d]+);/g,(e,t)=>String.fromCharCode(t)).replace(/(&.+;)/g,u.htmlDecode),e.members[i.mid]=i,e.replyMap[n]={self:t,replies:r?r.map(a):null,page:{count:o,num:1,size:10},root:{},hasExpand:!1,needExpand:r&&r.length<o||!1,pages:Math.ceil(o/10)},t};return n.upper&&n.upper.top&&(n.upper.top=a(n.upper.top)),n.hots&&(n.hots=n.hots.map(a)),n.replies&&(n.replies=n.replies.map(a)),e.data=(0,i.default)({},n,{top:n.upper?n.upper.top:e.data.top}),e},updateConfig:(e,t)=>{var n=t.payload;return e.config=(0,i.default)({},e.config,n),e},updateCommentMap:(e,t)=>{var n=t.payload;return e.commentMap=n,e},updateReplayData:(e,t)=>{var n=t.payload,a=t=>{var n=t.rpid,r=t.replies,o=t.rcount,i=t.member,s=t.content;return t.content.message=s.message.replace(/&#([\d]+);/g,(e,t)=>String.fromCharCode(t)).replace(/(&.+;)/g,u.htmlDecode),e.members[i.mid]=i,e.replyMap[n]={self:t,replies:r?r.map(a):null,page:{count:o,num:1,size:10},root:{},hasExpand:!1,needExpand:r&&r.length<o||!1,pages:Math.ceil(o/10)},t},r=n.replies,o=n.page,s=n.root,p=n.upper,d=o.count,l=o.size,c=o.num,f=e.replyMap[s.rpid];return e.replyMap[s.rpid]=(0,i.default)({},f,{replies:r.map(a),page:o,root:s,upper:p,pages:Math.ceil(d/l),hasExpand:r.length===l||1!==c,needExpand:r.length<d&&1===c}),e},updateVoteData:(e,t)=>{var n=t.payload,a=t=>{var n=t.rpid,r=t.replies,o=t.rcount,i=t.member,s=t.content;return t.content.message=s.message.replace(/&#([\d]+);/g,(e,t)=>String.fromCharCode(t)).replace(/(&.+;)/g,u.htmlDecode),e.members[i.mid]=i,e.replyMap[n]={self:t,replies:r?r.map(a):null,page:{count:o,num:1,size:10},root:{},hasExpand:!1,needExpand:r&&r.length<o||!1,pages:Math.ceil(o/10)},t};return(e.votes.rpidArray&&e.votes.rpidArray.indexOf(n.root.rpid)<0||!e.votes.rpidArray)&&(e.votes.rpidArray=[...e.votes.rpidArray,n.root.rpid]),e.votes.likeSum[n.root.rpid]=n.root.like,a(n.root),e},updateVoteSum:(e,t)=>{var n=t.payload;if(n){var a=n.rpid,r=n.like;e.votes.likeSum[a]=r}else e.votes.likeSum={};return e},updateCommentLoadingState:(e,t)=>{var n=t.payload;return e.status.comment.loadPage=n,e},updateReplyLoadingState:(e,t)=>{var n=t.payload;return e.status.comment.loadingRpid=n,e},updateEditorSendingState:(e,t)=>{var n=t.payload;return e.status.editor.sending=n,e},updateEditorSendError:(e,t)=>{var n=t.payload;return e.status.editor.error=n,e},updateCommentLikeStatus:(e,t)=>{var n=t.payload,a=n.rpid,r=(n.action,_.find(e.replyMap,e=>e.self.rpid===a));return r&&(0===r.self.action||2===r.self.action?(r.self.action=1,r.self.like+=1):1===r.self.action&&(r.self.action=0,r.self.like>0&&(r.self.like-=1))),e.replyMap[a]=r,e},updateCommentHateStatus:(e,t)=>{var n=t.payload,a=n.rpid,r=(n.action,_.find(e.replyMap,e=>e.self.rpid===a));return r&&(0===r.self.action?(r.self.action=2,r.self.like>0&&(r.self.like-=1)):2===r.self.action?r.self.action=0:1===r.self.action&&(r.self.action=2,r.self.like-=1)),e.replyMap[a]=r,e},updateVoteConfig:(e,t)=>{var n=t.payload;return e.voteConfig=n,e}},effects:{loadVoteConfig:o.default.mark(function e(t,n){var a,r,i,s;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.payload,a=n.put,r=n.call,e.next=4,r(fetch,"../static/json/votes.json");case 4:if(i=e.sent,200!==i.status){e.next=11;break}return e.next=8,i.json();case 8:return s=e.sent,e.next=11,a({type:"updateVoteConfig",payload:s});case 11:case"end":return e.stop()}},e)}),loadCommentMap:o.default.mark(function e(t,n){var a,r,i,s;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.payload,a=n.put,r=n.call,e.next=4,r(fetch,"../static/json/comments.json");case 4:if(i=e.sent,200!==i.status){e.next=11;break}return e.next=8,i.json();case 8:return s=e.sent,e.next=11,a({type:"updateCommentMap",payload:s});case 11:case"end":return e.stop()}},e)}),load:o.default.mark(function e(t,n){var a,r,i,s,u,p,d,l,c;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=n.put,e.next=4,r({type:"updateConfig",payload:a.comment});case 4:if(i=a.query,s=i.oid,u=i.pn,p=i.ps,d=i.root,l=i.type,c=i.sort,!a.ptype){e.next=10;break}return e.next=8,r({type:"fetchReply",payload:_.pickBy({oid:s,ps:p,sort:c||a.comment.config.sort,type:l},_.identity)});case 8:e.next=12;break;case 10:return e.next=12,r({type:"fetchComment",payload:_.pickBy({oid:s,pn:u,sort:c||a.comment.config.sort,type:l,root:d},_.identity)});case 12:case"end":return e.stop()}},e)}),fetchComment:o.default.mark(function e(t,n){var a,r,p,d,l,c,f,m,y;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=n.put,p=n.select,e.next=4,r({type:"updateCommentLoadingState",payload:!0});case 4:return d=new s.default("https://api.bilibili.com/x/v2/reply"),e.next=7,p(e=>{var t=e.comments;return t.config});case 7:return l=e.sent,c=l.oid,f=l.pn,m=l.sort,y=l.type,e.next=14,r({type:"updateConfig",payload:a});case 14:d.set("query",(0,i.default)({oid:c,pn:f,sort:m,type:y},a)),(0,u.fetchFromHelper)("json",{url:d.toString(),model:"comment",sign:"getComment"});case 16:case"end":return e.stop()}},e)}),fetchReply:o.default.mark(function e(t,n){var a,r,p,d,l,c,f;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=n.put,p=n.select,e.next=4,r({type:"updateReplyLoadingState",payload:a.root});case 4:return d=new s.default("https://api.bilibili.com/x/v2/reply/reply"),e.next=7,p(e=>{var t=e.comments;return t.config});case 7:l=e.sent,c=l.oid,f=l.type,d.set("query",(0,i.default)({oid:c,type:f},a)),(0,u.fetchFromHelper)("json",{url:d.toString(),model:"comment",sign:"getReply"});case 12:case"end":return e.stop()}},e)}),sendReply:o.default.mark(function e(t,n){var a,r,i,s,p,d,l,c,f,m,y,v,g;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=n.put,i=n.select,e.next=4,r({type:"updateEditorSendingState",payload:!0});case 4:return s="https://api.bilibili.com/x/v2/reply/add",e.next=7,i(e=>{var t=e.comments;return t.config});case 7:return p=e.sent,d=p.oid,l=p.type,c=p.plat,e.next=13,i(e=>{var t=e.user;return t.csrf});case 13:f=e.sent,m=a.root,y=a.parent,v=a.message,g=_.pickBy({oid:d,type:l,root:m,parent:y,message:v,plat:c,csrf:f},_.identity),(0,u.fetchFromHelper)("post",{url:s,model:"comment",sign:"sendReply",options:{method:"POST",body:g}});case 17:case"end":return e.stop()}},e)}),setLike:o.default.mark(function e(t,n){var a,r,p,d,l,c,f;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=n.select,p=new s.default("https://api.bilibili.com/x/v2/reply/action"),e.next=5,r(e=>{var t=e.comments;return t.config});case 5:return d=e.sent,l=d.oid,c=d.type,e.next=10,r(e=>{var t=e.user;return t.csrf});case 10:f=e.sent,(0,u.fetchFromHelper)("post",{url:p.toString(),model:"comment",sign:"setLike",options:{method:"POST",body:(0,i.default)({csrf:f,oid:l,type:c},a)}});case 12:case"end":return e.stop()}},e)}),setHate:o.default.mark(function e(t,n){var a,r,p,d,l,c,f;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,r=n.select,p=new s.default("https://api.bilibili.com/x/v2/reply/hate"),e.next=5,r(e=>{var t=e.comments;return t.config});case 5:return d=e.sent,l=d.oid,c=d.type,e.next=10,r(e=>{var t=e.user;return t.csrf});case 10:f=e.sent,(0,u.fetchFromHelper)("post",{url:p.toString(),model:"comment",sign:"setHate",options:{method:"POST",body:(0,i.default)({csrf:f,oid:l,type:c},a)}});case 12:case"end":return e.stop()}},e)}),fetchVotes:o.default.mark(function e(t,n){var a,i,p,d,l,c;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,r.default)(t),a=n.put,i=n.select,e.next=4,i(e=>{var t=e.comments;return t.voteConfig});case 4:return p=e.sent,e.next=7,a({type:"updateVoteSum"});case 7:p||console.warn("no vote config"),d=p.oid,l=p.type,c=p.rpids,_.map(c,e=>{var t=new s.default("https://api.bilibili.com/x/v2/reply/reply");t.set("query",{oid:d,type:l,root:e}),(0,u.fetchFromHelper)("json",{url:t.toString(),model:"comment",sign:"getVote"})});case 10:case"end":return e.stop()}},e)})}};t.default=p},ERIh:function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.dva=void 0;var r=a(n("YLtl")),o={config:{onError(e){e.preventDefault()}},plugins:r.default.compact([""])};t.dva=o},F03t:function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("+NJR")),o=a(n("Xgu4")),i=a(n("quD3")),s=n("f23f"),u={state:{version:null,config:null,downloads:null,feeds:null,websiteUpdate:null,status:{initializing:!1,tryConnect:!1,connected:!1,error:null}},subscriptions:{setup(e){var t=e.dispatch;e.history;window.addEventListener("message",function(e){var n=e.data,a=n.commend,r=void 0===a?"":a,o=n.data,s=void 0===o?{}:o,u=n.from,p=n.model,d=n.sign;if("helper"===u&&"global"===p)switch(r){case"returnApp":if(0===s.code)switch(d){case"connect":t({type:"comments/loadCommentMap"}).then(()=>t({type:"comments/loadVoteConfig"}).then(()=>t({type:"comments/fetchVotes"}))),t({type:"user/fetchUser"}),t({type:"user/fetchCsrf"}),t({type:"initApp",payload:(0,i.default)({},s.data,{initializing:!1})});break}break}})}},reducers:{updateTryConnect(e){return e.status.tryConnect=!0,e},initApp(e,t){var n=t.payload;return n.connected&&(e.status.connected=n.connected),n.config&&(e.version=n.config),n.initializing&&(e.initializing=n.initializing),e},updateAppConfig(e,t){var n=t.payload;return e.config=n,e},updateDownloadsConfig(e,t){var n=t.payload;return e.downloads=n,e},updateFeedsConfig(e,t){var n=t.payload;return e.feeds=n,e},updateWebsiteUpdateConfig(e,t){var n=t.payload;return e.websiteUpdate=n,e}},effects:{connectHelper:r.default.mark(function e(t,n){var a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,o.default)(t),a=n.put,(0,s.sendCommendToHelper)("connect",{model:"global",sign:"connect"}),e.next=5,a({type:"initApp",payload:{initializing:!0}});case 5:return e.next=7,a({type:"updateTryConnect"});case 7:case"end":return e.stop()}},e)}),fetchConfig:r.default.mark(function e(t,n){var a,i,s,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,o.default)(t),a=n.put,i=n.call,e.next=4,i(fetch,"../static/json/config.json");case 4:if(s=e.sent,200!==s.status){e.next=11;break}return e.next=8,s.json();case 8:return u=e.sent,e.next=11,a({type:"updateAppConfig",payload:u});case 11:case"end":return e.stop()}},e)}),fetchDownloadsConfig:r.default.mark(function e(t,n){var a,i,s,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,o.default)(t),a=n.put,i=n.call,e.next=4,i(fetch,"../static/json/downloads.json");case 4:if(s=e.sent,200!==s.status){e.next=11;break}return e.next=8,s.json();case 8:return u=e.sent,e.next=11,a({type:"updateDownloadsConfig",payload:u});case 11:case"end":return e.stop()}},e)}),fetchFeedsConfig:r.default.mark(function e(t,n){var a,i,s,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,o.default)(t),a=n.put,i=n.call,e.next=4,i(fetch,"../static/json/feed.json");case 4:if(s=e.sent,200!==s.status){e.next=11;break}return e.next=8,s.json();case 8:return u=e.sent,e.next=11,a({type:"updateFeedsConfig",payload:u});case 11:case"end":return e.stop()}},e)}),fetchWebsiteUpdateConfig:r.default.mark(function e(t,n){var a,i,s,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,o.default)(t),a=n.put,i=n.call,e.next=4,i(fetch,"../static/json/websiteUpdate.json");case 4:if(s=e.sent,200!==s.status){e.next=11;break}return e.next=8,s.json();case 8:return u=e.sent,e.next=11,a({type:"updateWebsiteUpdateConfig",payload:u});case 11:case"end":return e.stop()}},e)})}};t.default=u},KyW6:function(e,t,n){"use strict";var a=n("svvH");n("/1p2"),n("eEpB");var r=a(n("cDcd")),o=a(n("faye"));window.g_plugins=n("6B0o"),window.g_plugins.init({validKeys:["patchRoutes","render","rootContainer","modifyRouteProps","onRouteChange","dva"]}),window.g_plugins.use(n("3JrO")),window.g_plugins.use(n("ERIh")),n("VVNZ");var i=()=>{var e=window.g_plugins.apply("rootContainer",{initialValue:r.default.createElement(n("i4x8").default)});o.default.render(e,document.getElementById("root"))},s=window.g_plugins.compose("render",{initialValue:i}),u=[];Promise.all(u).then(()=>{s()}).catch(e=>{window.console&&window.console.error(e)})},"P+IA":function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("+NJR")),o=n("f23f"),i={pid:0,pname:"\u989c\u6587\u5b57",pstate:0,purl:"https://static.hdslb.com/images/base/emoji-tab-default.png",type:"text",emojis:["(\u2312\u25bd\u2312)","\uff08\uffe3\u25bd\uffe3\uff09","(=\u30fb\u03c9\u30fb=)","(\uff40\u30fb\u03c9\u30fb\xb4)","(\u301c\uffe3\u25b3\uffe3)\u301c","(\uff65\u2200\uff65)","(\xb0\u2200\xb0)\uff89","(\uffe33\uffe3)","\u256e(\uffe3\u25bd\uffe3)\u256d","( \xb4_\u309d\uff40)","\u2190_\u2190","\u2192_\u2192","(<_<)","(>_>)","(;\xac_\xac)",'("\u2594\u25a1\u2594)/',"(\uff9f\u0414\uff9f\u2261\uff9f\u0434\uff9f)!?","\u03a3(\uff9f\u0434\uff9f;)","\u03a3( \uffe3\u25a1\uffe3||)","(\xb4\uff1b\u03c9\uff1b`)","\uff08/T\u0414T)/","(^\u30fb\u03c9\u30fb^ )","(\uff61\uff65\u03c9\uff65\uff61)","(\u25cf\uffe3(\uff74)\uffe3\u25cf)","\u03b5=\u03b5=(\u30ce\u2267\u2207\u2266)\u30ce","(\xb4\uff65_\uff65`)","(-_-#)","\uff08\uffe3\u3078\uffe3\uff09","(\uffe3\u03b5(#\uffe3) \u03a3","\u30fd(`\u0414\xb4)\uff89","(\u256f\xb0\u53e3\xb0)\u256f(\u2534\u2014\u2534","\uff08#-_-)\u252f\u2501\u252f","_(:3\u300d\u2220)_","(\u7b11)","(\u6c57)","(\u6ce3)","(\u82e6\u7b11)"]},s={state:{optionJSON:[],emojiURLs:{},emojiMap:{}},subscriptions:{setup(e){var t=e.dispatch;e.history;window.addEventListener("message",function(e){var n=e.data,a=n.commend,r=void 0===a?"":a,o=n.data,i=void 0===o?{}:o,s=n.from,u=n.model;n.sign;if("helper"===s&&"emoji"===u)switch(r){case"returnFetch":t({type:"updateOptions",payload:i.data});break}}),t({type:"fetchOptions"})}},reducers:{updateOptions(e,t){t.type;var n=t.payload,a={},r=n.vip,o=n.free;return o.forEach(e=>{var t=e.pid,n=e.emojis,r=e.purl;a[t]=r,n.forEach(e=>{var t=e.name,n=e.url;n&&(a[t]=n)})}),r.forEach(e=>{var t=e.pid,n=e.emojis,r=e.purl;a[t]=r,n.forEach(e=>{var t=e.name,n=e.url;n&&(a[t]=n)})}),e.optionJSON=[i,...o,...r],e.emojiURLs=a,e}},effects:{fetchOptions:r.default.mark(function e(t,n){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.type,t.payload,n.put,n.call,n.select,(0,o.fetchFromHelper)("json",{url:"https://api.bilibili.com/x/v2/reply/v2/emojis",model:"emoji"});case 3:case"end":return e.stop()}},e)})}};t.default=s},"R3y/":function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("+NJR")),o=a(n("Xgu4")),i=n("f23f"),s={state:{config:null,status:{initializing:!1,error:null}},subscriptions:{setup(e){var t=e.dispatch;e.history;window.addEventListener("message",function(e){var t=e.data;t.commend,t.data,t.from,t.model,t.sign}),t({type:"fetchAnnouncementConfig"})}},reducers:{updateTryConnect(e){return e.status.tryConnect=!0,e},initApp(e,t){var n=t.payload;return n.connected&&(e.status.connected=n.connected),n.config&&(e.version=n.config),n.initializing&&(e.initializing=n.initializing),e},updateAnnouncementConfig(e,t){var n=t.payload;return e.config=n,e}},effects:{connectHelper:r.default.mark(function e(t,n){var a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,o.default)(t),a=n.put,(0,i.sendCommendToHelper)("connect",{model:"global",sign:"connect"}),e.next=5,a({type:"initApp",payload:{initializing:!0}});case 5:return e.next=7,a({type:"updateTryConnect"});case 7:case"end":return e.stop()}},e)}),fetchAnnouncementConfig:r.default.mark(function e(t,n){var a,i,s,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,o.default)(t),a=n.put,i=n.call,e.next=4,i(fetch,"../static/json/announcement.json");case 4:if(s=e.sent,200!==s.status){e.next=11;break}return e.next=8,s.json();case 8:return u=e.sent,e.next=11,a({type:"updateAnnouncementConfig",payload:u});case 11:case"end":return e.stop()}},e)})}};t.default=s},VVNZ:function(e,t,n){"use strict";var a=n("svvH"),r=a(n("quD3")),o=a(n("MuoO")),i=a(n("cFq4")),s=window.g_plugins.mergeConfig("dva"),u=(0,o.default)((0,r.default)({history:window.g_history},s.config||{}));window.g_app=u,u.use((0,i.default)()),(s.plugins||[]).forEach(e=>{u.use(e)}),u.use(n("i5Zg").default()),u.model((0,r.default)({namespace:"announcements"},n("R3y/").default)),u.model((0,r.default)({namespace:"comments"},n("AabO").default)),u.model((0,r.default)({namespace:"emoji"},n("P+IA").default)),u.model((0,r.default)({namespace:"global"},n("F03t").default)),u.model((0,r.default)({namespace:"image"},n("5R+S").default)),u.model((0,r.default)({namespace:"user"},n("hlQx").default))},YLtl:function(e,t){e.exports=window._},aYsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("cDcd");class r extends a.Component{render(){return window.g_app.router(()=>this.props.children),window.g_app.start()()}}var o=r;t.default=o},cDcd:function(e,t){e.exports=window.React},eEpB:function(e,t,n){window.g_history=n("UR55").default({basename:window.routerBase})},f23f:function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.cumulativeOffset=t.htmlDecode=t.getCookieFromHelper=t.fetchFromHelper=t.sendCommendToHelper=t.postMessage=void 0;var r=a(n("quD3")),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://bilibili-helper.github.io/";window.postMessage(e,t)};t.postMessage=o;var i=(e,t)=>{o({commend:e,data:t,from:"website"})};t.sendCommendToHelper=i;var s=(e,t)=>{if(t.type)throw"fetchOptions can not contain the param: type";i("fetch",(0,r.default)({},t,{type:e}))};t.fetchFromHelper=s;var u=e=>{i("cookie",e)};t.getCookieFromHelper=u;var p=(e,t)=>{var n=document.createElement("div");return n.innerHTML=t,0===n.childNodes.length?"":n.childNodes[0].nodeValue};t.htmlDecode=p;var d=e=>{var t=0,n=0;do{t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:n}};t.cumulativeOffset=d},faye:function(e,t){e.exports=window.ReactDOM},hlQx:function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("+NJR")),o=a(n("GBY4")),i=n("f23f"),s={state:{info:null,csrf:null},subscriptions:{setup(e){var t=e.dispatch;e.history;window.addEventListener("message",function(e){var n=e.data,a=n.commend,r=void 0===a?"":a,o=n.data,i=void 0===o?{}:o,s=n.from,u=n.model,p=n.sign;if("helper"===s&&"user"===u)switch(r){case"returnFetch":"REPONSE_OK"===i.code||0===i.code?t({type:"updateUserData",payload:i.data}):console.error(i);break;case"returnCookie":"getCsrf"===p&&t({type:"updateCsrf",payload:i});break}})}},reducers:{updateUserData(e,t){var n=t.payload;return e.info=n,e},updateCsrf(e,t){var n=t.payload;return e.csrf=n,e}},effects:{fetchCsrf:r.default.mark(function e(t,n){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.type,t.payload,n.put,n.call,n.select,(0,i.getCookieFromHelper)({detail:{url:"http://interface.bilibili.com/",name:"bili_jct"},model:"user",sign:"getCsrf"});case 3:case"end":return e.stop()}},e)}),fetchUser:r.default.mark(function e(t,n){var a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.type,t.payload,n.put,n.call,n.select,a=new o.default("https://api.live.bilibili.com/User/getUserInfo"),(0,i.fetchFromHelper)("json",{url:a.toString(),model:"user"});case 4:case"end":return e.stop()}},e)})}};t.default=s},i4x8:function(e,t,n){"use strict";var a=n("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r=a(n("cDcd")),o=(n("6w0H"),a(n("zyN4")),a(n("mmTf"))),i=a(n("VcJ9")),s=n("7DNP").routerRedux.ConnectedRouter,u=[{path:"/",component:(0,i.default)({component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.t.bind(null,"rB1f",7))}),exact:!0}];function p(e,t){window.g_plugins.applyForEach("onRouteChange",{initialValue:{routes:u,location:e,action:t}})}function d(){return r.default.createElement(s,{history:window.g_history},(0,o.default)(u,{}))}window.g_routes=u,window.g_plugins.applyForEach("patchRoutes",{initialValue:u}),window.g_history.listen(p),p(window.g_history.location)}});