(this.webpackJsonpsimplecrypto=this.webpackJsonpsimplecrypto||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){e.exports=n.p+"static/media/btc.c6440537.svg"},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),s=(n(15),n(1)),i=n.n(s),u=n(4),l=n(5),p=n(8),m=n(6),v=n(9),h=(n(17),n(7)),b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={btcUSD:""},e}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(fetch("https://api.coindesk.com/v1/bpi/currentprice/USD"));case 3:return e=a.sent,a.next=6,i.a.awrap(e.json());case 6:t=a.sent,n=h(Number(t.bpi.USD.rate.split(",").join("")),2)+" $",this.setState({btcUSD:n}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),null,this,[[0,11]])}},{key:"getGoinsList",value:function(){var e,t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(fetch("https://api.coingecko.com/api/v3/coins/list"));case 2:return e=a.sent,a.next=5,i.a.awrap(e.text());case 5:return t=a.sent,n=JSON.parse(t),a.abrupt("return",n);case 8:case"end":return a.stop()}}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("img",{className:"btc-logo",src:n(22),alt:"bitcoin logo"}),c.a.createElement(f,{crypto:this.state.btcUSD}))))}}]),t}(a.Component),f=function(e){var t=e.crypto;return c.a.createElement("div",null,t)},d=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.2fbf1afa.chunk.js.map