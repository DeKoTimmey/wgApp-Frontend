(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(2),c=n.n(i),r=(n(14),n(3)),s=n(4),l=n(6),u=n(5),d=n(7),h=(n(16),n(17),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={todos:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"loadTodos",value:function(){var e=this;fetch("/todos").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({todos:t.list})})}},{key:"addTodo",value:function(){var e=this;fetch("/add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:"Tim",title:this.input.value})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.input.value="",e.loadTodos()})}},{key:"toggleTodo",value:function(e){var t=this;fetch("/toggleTodo",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({index:e})}).then(function(e){return e.json()}).then(function(e){console.log(e),t.loadTodos()})}},{key:"removeTodo",value:function(e){var t=this;fetch("/remove",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({index:e})}).then(function(e){return e.json()}).then(function(e){console.log(e),t.loadTodos()})}},{key:"componentDidMount",value:function(){var e=this;this.loadTodos(),setInterval(function(){e.loadTodos()},500)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("input",{ref:function(t){return e.input=t},defaultValue:""}),a.a.createElement("button",{onClick:function(){return e.addTodo()}},"add")),this.state.todos.map(function(t,n){return a.a.createElement("div",{key:n},a.a.createElement("p",null,t.title," || ",t.user),a.a.createElement("input",{type:"checkbox",checked:t.checked,onClick:function(){return e.toggleTodo(n)}}),a.a.createElement("button",{onClick:function(){return e.removeTodo(n)}},"l\xf6schen"))}))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.68d0333e.chunk.js.map