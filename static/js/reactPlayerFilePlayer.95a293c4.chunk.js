(self.webpackChunkdossier=self.webpackChunkdossier||[]).push([[11],{8997:function(e,t,n){var r,i=n(2122).default,s=n(6690).default,o=n(9728).default,a=n(6115).default,l=n(1655).default,u=n(6389).default,p=n(4704).default,c=Object.create,d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,y=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,m=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var i,s=p(f(t));try{var o=function(){var s=i.value;v.call(e,s)||s===n||d(e,s,{get:function(){return t[s]},enumerable:!(r=h(t,s))||r.enumerable})};for(s.s();!(i=s.n()).done;)o()}catch(a){s.e(a)}finally{s.f()}}return e},E=function(e,t,n){return function(e,t,n){t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},P={};!function(e,t){for(var n in t)d(e,n,{get:t[n],enumerable:!0})}(P,{default:function(){return M}}),e.exports=(r=P,m(d({},"__esModule",{value:!0}),r));var g=function(e,t,n){return n=null!=e?c(y(e)):{},m(!t&&e&&e.__esModule?n:d(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),b=n(135),k=n(365),L="undefined"!==typeof navigator,S=L&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,w=L&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||S)&&!window.MSStream,I=L&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,O=/www\.dropbox\.com\/.+/,R=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,M=function(e){"use strict";l(n,e);var t=u(n);function n(){var e;return s(this,n),e=t.apply(this,arguments),E(a(e),"onReady",(function(){var t;return(t=e.props).onReady.apply(t,arguments)})),E(a(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),E(a(e),"onBuffer",(function(){var t;return(t=e.props).onBuffer.apply(t,arguments)})),E(a(e),"onBufferEnd",(function(){var t;return(t=e.props).onBufferEnd.apply(t,arguments)})),E(a(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),E(a(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),E(a(e),"onError",(function(){var t;return(t=e.props).onError.apply(t,arguments)})),E(a(e),"onPlayBackRateChange",(function(t){return e.props.onPlaybackRateChange(t.target.playbackRate)})),E(a(e),"onEnablePIP",(function(){var t;return(t=e.props).onEnablePIP.apply(t,arguments)})),E(a(e),"onDisablePIP",(function(t){var n=e.props,r=n.onDisablePIP,i=n.playing;r(t),i&&e.play()})),E(a(e),"onPresentationModeChange",(function(t){if(e.player&&(0,b.supportsWebKitPresentationMode)(e.player)){var n=e.player.webkitPresentationMode;"picture-in-picture"===n?e.onEnablePIP(t):"inline"===n&&e.onDisablePIP(t)}})),E(a(e),"onSeek",(function(t){e.props.onSeek(t.target.currentTime)})),E(a(e),"mute",(function(){e.player.muted=!0})),E(a(e),"unmute",(function(){e.player.muted=!1})),E(a(e),"renderSourceElement",(function(e,t){return"string"===typeof e?g.default.createElement("source",{key:t,src:e}):g.default.createElement("source",i({key:t},e))})),E(a(e),"renderTrack",(function(e,t){return g.default.createElement("track",i({key:t},e))})),E(a(e),"ref",(function(t){e.player&&(e.prevPlayer=e.player),e.player=t})),e}return o(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);var e=this.getSource(this.props.url);e&&(this.player.src=e),(w||this.props.config.forceDisableHls)&&this.player.load()}},{key:"componentDidUpdate",value:function(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,b.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}},{key:"componentWillUnmount",value:function(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}},{key:"addListeners",value:function(e){var t=this.props,n=t.url,r=t.playsinline;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(n)||e.addEventListener("canplay",this.onReady),r&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}},{key:"removeListeners",value:function(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}},{key:"shouldUseAudio",value:function(e){return!e.config.forceVideo&&(!e.config.attributes.poster&&(k.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio))}},{key:"shouldUseHLS",value:function(e){return!!(I&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!w&&!this.props.config.forceDisableHls&&(k.HLS_EXTENSIONS.test(e)||R.test(e))}},{key:"shouldUseDASH",value:function(e){return k.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}},{key:"shouldUseFLV",value:function(e){return k.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}},{key:"load",value:function(e){var t=this,n=this.props.config,r=n.hlsVersion,i=n.hlsOptions,s=n.dashVersion,o=n.flvVersion;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,b.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",r),"Hls").then((function(n){if(t.hls=new n(i),t.hls.on(n.Events.MANIFEST_PARSED,(function(){t.props.onReady()})),t.hls.on(n.Events.ERROR,(function(e,r){t.props.onError(e,r,t.hls,n)})),R.test(e)){var r=e.match(R)[1];t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",r))}else t.hls.loadSource(e);t.hls.attachMedia(t.player),t.props.onLoaded()})),this.shouldUseDASH(e)&&(0,b.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",s),"dashjs").then((function(n){t.dash=n.MediaPlayer().create(),t.dash.initialize(t.player,e,t.props.playing),t.dash.on("error",t.props.onError),parseInt(s)<3?t.dash.getDebug().setLogToBrowserConsole(!1):t.dash.updateSettings({debug:{logLevel:n.Debug.LOG_LEVEL_NONE}}),t.props.onLoaded()})),this.shouldUseFLV(e)&&(0,b.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",o),"flvjs").then((function(n){t.flv=n.createPlayer({type:"flv",url:e}),t.flv.attachMediaElement(t.player),t.flv.on(n.Events.ERROR,(function(e,r){t.props.onError(e,r,t.flv,n)})),t.flv.load(),t.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,b.isMediaStream)(e))try{this.player.srcObject=e}catch(a){this.player.src=window.URL.createObjectURL(e)}}},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.player.currentTime=e,t||this.pause()}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,b.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,b.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}},{key:"setPlaybackRate",value:function(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,t=e.duration,n=e.seekable;return t===1/0&&n.length>0?n.end(n.length-1):t}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var e=this.player.buffered;if(0===e.length)return 0;var t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}},{key:"getSource",value:function(e){var t=this.shouldUseHLS(e),n=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,b.isMediaStream)(e)||t||n||r))return O.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.playing,r=e.loop,s=e.controls,o=e.muted,a=e.config,l=e.width,u=e.height,p=this.shouldUseAudio(this.props)?"audio":"video",c={width:"auto"===l?l:"100%",height:"auto"===u?u:"100%"};return g.default.createElement(p,i({ref:this.ref,src:this.getSource(t),style:c,preload:"auto",autoPlay:n||void 0,controls:s,muted:o,loop:r},a.attributes),t instanceof Array&&t.map(this.renderSourceElement),a.tracks.map(this.renderTrack))}}]),n}(g.Component);E(M,"displayName","FilePlayer"),E(M,"canPlay",k.canPlay.file)}}]);
//# sourceMappingURL=reactPlayerFilePlayer.95a293c4.chunk.js.map