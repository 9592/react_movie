(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(27)},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(18),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(10),p=n(7),d=n(11),f=(n(21),n(22),n(8)),_=n.n(f),h=n(9),g=n.n(h);function w(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}function y(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t)}y.prototype={genre:_.a.string.isRequired};var E=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement(w,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return r.a.createElement(y,{genre:e,key:t})})),r.a.createElement("div",{className:"Movie__Synopsis"},r.a.createElement(g.a,{text:o,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},M=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(E,{title:e.title,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.b0b4ee8f.chunk.js.map