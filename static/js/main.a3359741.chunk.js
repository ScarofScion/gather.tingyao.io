(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a,i=n(0),l=n.n(i),o=n(35),s=n.n(o),r=n(36),c=n(37),u=n(46),m=n(38),h=n(47),d=n(16),g=n.n(d),E=(n(61),n(45)),p=n(104),f=n(105),b=n(106),C=(n(66),function(e){return l.a.createElement("div",{className:"counter"},l.a.createElement("button",{className:"counter-action decrement",onClick:function(){return e.handleGuest(-1)}}," ","-"," "),l.a.createElement("span",{className:"counter-score"},"Number of Guests: ",e.guests),l.a.createElement("button",{className:"counter-action increment",onClick:function(){return e.handleGuest(1)}}," ","+"," "))}),S=n(103),w=function(e){return l.a.createElement("div",null,l.a.createElement(S.a,{className:"App-header"},l.a.createElement("h3",null,"SAVE THE DATE"),l.a.createElement("p",null,"To: Ben, Rita, and Austin Ma"),l.a.createElement("br",null),l.a.createElement("img",{src:"https://i.imgur.com/SA2aUrz.jpg",className:"App-logo",alt:"logo"})))};g.a.apps.length||g.a.initializeApp({apiKey:"AIzaSyAxqRtkFndnlPNMy-XgYPj4dr0-t1jRP5U",authDomain:"gather-182d9.firebaseapp.com",databaseURL:"https://gather-182d9.firebaseio.com",projectId:"gather-182d9",storageBucket:"gather-182d9.appspot.com",messagingSenderId:"620153026922"});var k=g.a.firestore();k.settings({timestampsInSnapshots:!0});var v=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={guestcount:0,showForm:!1,isComing:!1,isConfirmed:!1,guestname:"biguncle-william"},n.handleGuestCountChange=function(e){n.setState(function(t){return{guestcount:t.guestcount+=e}})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){console.log("click"),this.setState({showForm:!0})}},{key:"handleCancel",value:function(){this.setState({showForm:!1})}},{key:"handleSave",value:function(){this.setState({isConfirmed:!0}),k.collection("guestlist").doc("biguncle-william").set({guestcount:this.state.guestcount,isComing:this.state.isComing,isConfirmed:this.state.isConfirmed}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}),this.setState({showForm:!1})}},{key:"handleGoing",value:function(){this.setState(function(e){return{isComing:e.isComing=!0}})}},{key:"handleNotGoing",value:function(){this.setState(function(e){return{isComing:e.isComing=!1}}),console.log(this.state.isComing)}},{key:"render",value:function(){return this.state.showForm||(a=l.a.createElement(E.a,{onClick:this.handleClick.bind(this),bsStyle:"primary"},"RSVP")),this.state.showForm&&(a=l.a.createElement("div",null,l.a.createElement(p.a,{justified:!0},l.a.createElement(E.a,{href:"#",onClick:this.handleGoing.bind(this)},"Going"),l.a.createElement(E.a,{href:"#",onClick:this.handleNotGoing.bind(this)},"Not Going")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C,{guests:this.state.guestcount,handleGuest:this.handleGuestCountChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,{bsStyle:"primary",onClick:this.handleSave.bind(this)},"Save"),l.a.createElement(E.a,{bsStyle:"primary",onClick:this.handleCancel.bind(this)},"Cancel"))),l.a.createElement("div",{className:"App"},l.a.createElement(w,null),a,l.a.createElement(f.a,null,l.a.createElement(b.a,{sm:6,md:3},"DATE: Saturday, Febuarary 2nd, 2018 (ADD TO CALENDAR) ",l.a.createElement("br",null)),l.a.createElement(b.a,{sm:6,md:3},"ADDRESS: Caesars Hotel (GET DIRECTIONS) ",l.a.createElement("br",null)),l.a.createElement(b.a,{sm:6,md:3},"HOST: Jasmine and William (949)-829-1403 (SEND A MESSAGE) ",l.a.createElement("br",null))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,n){e.exports=n(102)},66:function(e,t,n){}},[[49,2,1]]]);
//# sourceMappingURL=main.a3359741.chunk.js.map