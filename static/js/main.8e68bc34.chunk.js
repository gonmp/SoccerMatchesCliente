(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=(a(31),a(10)),s=a.n(o),u=a(22),i=a(8),m=a(23),E=a.n(m),d=a(7),h=function(e){var t=e.setTeam,a=e.setPageSize;return l.a.createElement("div",{className:"container-form"},l.a.createElement("h2",{className:"text-center"},"Buscar partidos por equipo"),l.a.createElement(d.a,{className:"my-5"},l.a.createElement(d.a.Label,{className:"label-form"},"Equipo"),l.a.createElement(d.a.Control,{type:"text",name:"team",placeholder:"Nombre del equipo",onChange:function(e){t(e.target.value)}}),l.a.createElement(d.a.Label,{className:"mt-5 label-form"},"N\xfamero de resultados por p\xe1gina"),l.a.createElement(d.a.Control,{className:"mb-4",as:"select",name:"pageSize",onChange:function(e){a(e.target.value)}},l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"30"},"30"))))},p=function(e){var t=e.match,a=function(e){return null===e?"No hay informaci\xf3n / NC":e};return l.a.createElement("tr",null,l.a.createElement("td",null,t.league),l.a.createElement("td",null,t.numberTeamsLeague),l.a.createElement("td",null,t.homeTeam),l.a.createElement("td",null,t.awayTeam),l.a.createElement("td",null,function(e){var t;switch(e){case"AWAY":t="Equipo visitante";break;case"HOME":t="Equipo local";break;case"DRAW":t="Empate";break;default:t="Hubo un error"}return t}(t.result)),l.a.createElement("td",null,a(t.homeFinalGoals)),l.a.createElement("td",null,a(t.awayFinalGoals)),l.a.createElement("td",null,a(t.homeExtraGoals)),l.a.createElement("td",null,a(t.awayExtraGoals)),l.a.createElement("td",null,a(t.homeFirstHalfGoals)),l.a.createElement("td",null,a(t.awayFirstHalfGoals)),l.a.createElement("td",null,a(t.homeSecondHalfGoals)),l.a.createElement("td",null,a(t.awaySecondHalfGoals)))},g=a(24),f=function(e){var t=e.matches;return l.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Liga"),l.a.createElement("th",null,"Cantidad de equipos"),l.a.createElement("th",null,"Equipo local"),l.a.createElement("th",null,"Equipo visitante"),l.a.createElement("th",null,"Resultados"),l.a.createElement("th",null,"Goles del local"),l.a.createElement("th",null,"Goles del vistante"),l.a.createElement("th",null,"Goles del local - TE"),l.a.createElement("th",null,"Goles del visitante - TE"),l.a.createElement("th",null,"Goles del local - 1"),l.a.createElement("th",null,"Goles del visitante - 1"),l.a.createElement("th",null,"Goles del local - 2"),l.a.createElement("th",null,"Goles del visitante - 2"))),l.a.createElement("tbody",null,Array.isArray(t)?t.map((function(e){return l.a.createElement(p,{key:e.id,match:e})})):null))},v=a(25),b=a.n(v);var w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],d=o[1],p=Object(n.useState)(10),g=Object(i.a)(p,2),v=g[0],w=g[1],G=Object(n.useState)(1),y=Object(i.a)(G,2),C=y[0],O=y[1],S=Object(n.useState)({totalCount:0}),N=Object(i.a)(S,2),j=N[0],T=N[1],x=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://soccermatchesapi-apim.azure-api.net/matches/api/Matches/search?team=".concat(m,"&pageSize=").concat(v,"&pageNumber=").concat(t),e.next=3,E.a.get(n);case 3:l=e.sent,T(JSON.parse(l.headers["x-pagination"])),console.log(JSON.parse(l.headers["x-pagination"]).TotalCount),r(l.data),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(C)}),[m,v]),l.a.createElement("div",null,l.a.createElement(h,{setTeam:d,setPageSize:w}),l.a.createElement(f,{matches:a}),l.a.createElement("div",{className:"paging"},l.a.createElement(b.a,{activePage:j.CurrentPage,itemCountPerPage:j.PageSize,onChange:function(e){x(e),O(e)}.bind(this),itemClass:"page-item page-link",firstPageText:"Primero",lastPageText:"\xdaltimo",totalItemsCount:j.TotalCount?j.TotalCount:1})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8e68bc34.chunk.js.map