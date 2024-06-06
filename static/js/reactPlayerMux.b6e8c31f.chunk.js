(self.webpackChunkdossier=self.webpackChunkdossier||[]).push([[258],{4599:function(e,t,n){var r,a=n(2122).default,i=n(7061).default,o=n(7424).default,u=n(7156).default,s=n(6690).default,l=n(9728).default,p=n(6115).default,c=n(1655).default,d=n(6389).default,y=n(4704).default,f=Object.create,v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,P=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,E=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var a,i=y(m(t));try{var o=function(){var i=a.value;k.call(e,i)||i===n||v(e,i,{get:function(){return t[i]},enumerable:!(r=h(t,i))||r.enumerable})};for(i.s();!(a=i.n()).done;)o()}catch(u){i.e(u)}finally{i.f()}}return e},b=function(e,t,n){return function(e,t,n){t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},g={};!function(e,t){for(var n in t)v(e,n,{get:t[n],enumerable:!0})}(g,{default:function(){return R}}),e.exports=(r=g,E(v({},"__esModule",{value:!0}),r));var L=function(e,t,n){return n=null!=e?f(P(e)):{},E(!t&&e&&e.__esModule?n:v(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),I=n(365),R=function(e){"use strict";c(n,e);var t=d(n);function n(){var e;return s(this,n),e=t.apply(this,arguments),b(p(e),"onReady",(function(){var t;return(t=e.props).onReady.apply(t,arguments)})),b(p(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),b(p(e),"onBuffer",(function(){var t;return(t=e.props).onBuffer.apply(t,arguments)})),b(p(e),"onBufferEnd",(function(){var t;return(t=e.props).onBufferEnd.apply(t,arguments)})),b(p(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),b(p(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),b(p(e),"onError",(function(){var t;return(t=e.props).onError.apply(t,arguments)})),b(p(e),"onPlayBackRateChange",(function(t){return e.props.onPlaybackRateChange(t.target.playbackRate)})),b(p(e),"onEnablePIP",(function(){var t;return(t=e.props).onEnablePIP.apply(t,arguments)})),b(p(e),"onSeek",(function(t){e.props.onSeek(t.target.currentTime)})),b(p(e),"onDurationChange",(function(){var t=e.getDuration();e.props.onDuration(t)})),b(p(e),"mute",(function(){e.player.muted=!0})),b(p(e),"unmute",(function(){e.player.muted=!1})),b(p(e),"ref",(function(t){e.player=t})),e}return l(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);var e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}},{key:"componentWillUnmount",value:function(){this.player.playbackId=null,this.removeListeners(this.player)}},{key:"addListeners",value:function(e){var t=this.props.playsinline;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}},{key:"removeListeners",value:function(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}},{key:"load",value:function(){var e=u(i().mark((function e(t){var n,r,a,u,s,l,p,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,a=r.onError,u=r.config,null==(n=globalThis.customElements)?void 0:n.get("mux-player")){e.next=12;break}return e.prev=2,s="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs".replace("VERSION",u.version),e.next=6,import("".concat(s));case 6:this.props.onLoaded(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a(e.t0);case 12:l=t.match(I.MATCH_URL_MUX),p=o(l,2),c=p[1],this.player.playbackId=c;case 14:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.playbackId=null}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.player.currentTime=e,t||this.pause()}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}},{key:"setPlaybackRate",value:function(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,t=e.duration,n=e.seekable;return t===1/0&&n.length>0?n.end(n.length-1):t}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var e=this.player.buffered;if(0===e.length)return 0;var t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}},{key:"getPlaybackId",value:function(e){var t=e.match(I.MATCH_URL_MUX);return o(t,2)[1]}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.playing,r=e.loop,i=e.controls,o=e.muted,u=e.config,s=e.width,l=e.height,p={width:"auto"===s?s:"100%",height:"auto"===l?l:"100%"};return!1===i&&(p["--controls"]="none"),L.default.createElement("mux-player",a({ref:this.ref,"playback-id":this.getPlaybackId(t),style:p,preload:"auto",autoPlay:n||void 0,muted:o?"":void 0,loop:r?"":void 0},u.attributes))}}]),n}(L.Component);b(R,"displayName","Mux"),b(R,"canPlay",I.canPlay.mux)}}]);
//# sourceMappingURL=reactPlayerMux.b6e8c31f.chunk.js.map