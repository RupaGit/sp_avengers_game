(this.webpackJsonpsp_avengers_game=this.webpackJsonpsp_avengers_game||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Thanos","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_ons_crd_03.jpg","isActive":false},{"id":2,"name":"Black Panther","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg","isActive":false},{"id":3,"name":"Spider Man","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg","isActive":false},{"id":4,"name":"Iron Man","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg","isActive":false},{"id":5,"name":"Captain America","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg","isActive":false},{"id":6,"name":"Hulk","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg"},{"id":7,"name":"Hawkeye","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_crd_02.jpg"},{"id":8,"name":"Thor","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg"},{"id":9,"name":"Doctor Strange","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg"}]')},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),c=n.n(s),o=(n(14),n(1)),i=n(2),l=n(3),m=n(4),d=n(5),u=(n(15),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).avengerSelected=r.avengerSelected.bind(Object(d.a)(r)),r.state={isActive:!1},r}return Object(i.a)(n,[{key:"avengerSelected",value:function(e){var t;e.preventDefault(),console.log("Avenger state is ",this.state.isActive);var n=this.props.shuffleAvengers,r=this.props.userLost;!0===this.state.isActive?r():(t=!0,n()),this.setState({isActive:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"card"},a.a.createElement("img",{alt:this.props.name,src:this.props.image,onClick:this.avengerSelected}))}}]),n}(r.Component));n(16);var v=function(e){return a.a.createElement("div",{className:"wrapper"},e.children)};n(17);var g=function(e){return a.a.createElement("h1",{className:"title"},e.children)};n(18);var p=function(e){return a.a.createElement("h3",{className:"subtitle"},e.children)},h=n(8),f=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={avengers:h,correctGuesses:0,winStatus:!1,record:0},e.userLost=function(){var t;t=e.state.correctGuesses>e.state.record?e.state.correctGuesses:e.state.record,e.setState({winStatus:!1,correctGuesses:0,record:t})},e.shuffleAvengers=function(){console.log("no of avengers are",e.state.avengers.length);for(var t=e.state.avengers,n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),a=t[n];t[n]=t[r],t[r]=a}console.log(t);var s=e.state.correctGuesses+1;e.setState({avenges:t,correctGuesses:s,winStatus:!0})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.state.avengers),a.a.createElement(v,null,a.a.createElement(g,null,"Avengers List"),a.a.createElement(p,null,"No.of Correct guesses: ",this.state.correctGuesses," "),this.state.winStatus?a.a.createElement(p,null,"Well done"):a.a.createElement(p,null,"Press an image to play again"),a.a.createElement(p,null,"Personal Record: ",this.state.record," "),this.state.avengers.map((function(t){return a.a.createElement(u,{id:t.id,key:t.id,name:t.name,image:t.image,isActive:t.isActive,shuffleAvengers:e.shuffleAvengers,userLost:e.userLost})})))}}]),n}(r.Component),_=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.381c7c69.chunk.js.map