(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{27:function(t,e,r){},28:function(t,e,r){},29:function(t,e,r){},35:function(t,e,r){"use strict";r.r(e);var n=r(1),c=r(0),a=r.n(c),o=r(19),s=r.n(o),i=(r(27),r(20)),l=r(2),u=r(7),f=r(12);r(28);var j=function(){var t=[[0,0,3,0,4,0,0,6,7],[0,0,4,0,0,8,2,0,0],[0,9,6,0,0,0,3,8,0],[5,0,7,8,0,0,9,0,2],[0,0,9,0,0,5,4,3,0],[3,0,0,0,0,0,6,0,0],[0,0,0,0,0,4,0,0,0],[4,3,2,0,7,0,0,0,0],[0,8,0,0,2,0,5,4,0]],e=Object(c.useState)(t),r=Object(f.a)(e,2),a=r[0],o=r[1],s=function(){!function(){for(var t=[],e=[],r=Object(u.a)(a),n=0;n<9;n++)t[n]=new Array(9).fill(0),e[n]=new Array(9).fill(0);for(var c=0;c<9;c++)for(var s=0;s<9;s++)t[c][s]=r[s][c];for(var i=0;i<9;i++)for(var l=0;l<3;l++)for(var f=0;f<3;f++)e[i][3*l+f]=r[3*Math.floor(i/3)+l][i%3*3+f];for(var j=[],b=0;b<9;b++)for(var d=0;d<9;d++)if(0===r[b][d]){for(var h=1;h<10;h++)r[b].includes(h)||t[d].includes(h)||e[3*Math.floor(b/3)+Math.floor(d/3)].includes(h)||j.push(h);1===j.length&&(r[b][d]=j[0],t[d][b]=j[0],e[3*Math.floor(b/3)+Math.floor(d/3)][b%3*3+d%3]=j[0]),j=[]}o(Object(u.a)(r))}()};return Object(n.jsxs)("div",{className:"App top-3",children:[Object(n.jsx)("h1",{className:"center",children:"Sudoku"}),Object(n.jsx)("table",{className:"matrix-table top-3",children:Object(n.jsx)("tbody",{children:a.map((function(t,e){return Object(n.jsx)("tr",{children:t.map((function(t,r){return Object(n.jsx)("th",{className:"".concat(parseInt((3*parseInt(e/3)+r)/3)%2===1?"light":"dark"),children:0!==t?t:""},r)}))},e)}))})}),Object(n.jsx)("button",{className:"centrar-btn top-3",onClick:function(){return s()},children:"Llenar Sudoku"}),Object(n.jsx)("button",{className:"centrar-btn top-3",onClick:function(){o(t)},children:"Limpiar Sudoku"})]})},b=(r(29),r(15)),d=r.n(b);var h=function(){var t=[[0,0,3,0,4,0,0,6,7],[0,0,4,0,0,8,2,0,0],[0,9,6,0,0,0,3,8,0],[5,0,7,8,0,0,9,0,2],[0,0,9,0,0,5,4,3,0],[3,0,0,0,0,0,6,0,0],[0,0,0,0,0,4,0,0,0],[4,3,2,0,7,0,0,0,0],[0,8,0,0,2,0,5,4,0]],e=Object(c.useState)(t),r=Object(f.a)(e,2),a=r[0],o=r[1],s=function(){!function(){for(var t=[],e=[],r=Object(u.a)(a),n=!1,c=0;c<9;c++)t[c]=new Array(9).fill(0),e[c]=new Array(9).fill(0);for(var s=0;s<9;s++)for(var i=0;i<9;i++)t[s][i]=r[i][s];for(var l=0;l<9;l++)for(var f=0;f<3;f++)for(var j=0;j<3;j++)e[l][3*f+j]=r[3*Math.floor(l/3)+f][l%3*3+j];for(var b=[],h=0;h<9;h++)for(var p=0;p<9;p++)if(0===r[h][p]){for(var O=1;O<10;O++)r[h].includes(O)||t[p].includes(O)||e[3*Math.floor(h/3)+Math.floor(p/3)].includes(O)||b.push(O);1===b.length&&(r[h][p]=b[0],t[p][h]=b[0],e[3*Math.floor(h/3)+Math.floor(p/3)][h%3*3+p%3]=b[0],n=!0),b=[]}if(!n){var v=!1;a.forEach((function(t){t.includes(0)&&(v=!0)})),v?d.a.fire({icon:"error",title:"Oops...",text:"Sudoku no se puede resolver!"}):d.a.fire("Good job!","Sudoku completo!","success")}o(Object(u.a)(r))}()};return Object(n.jsxs)("div",{className:"App top-3",children:[Object(n.jsx)("h1",{className:"center",children:"Sudoku"}),Object(n.jsx)("table",{className:"matrix-table2 top-3",children:Object(n.jsx)("tbody",{children:a.map((function(t,e){return Object(n.jsx)("tr",{children:t.map((function(t,r){return Object(n.jsx)("th",{className:"".concat(parseInt((3*parseInt(e/3)+r)/3)%2===1?"light":"dark"),children:Object(n.jsx)("input",{value:0!==t?t:"",name:"".concat(e).concat(r),onChange:function(t){!function(t,e,r){var n=t.target,c=n.value;if(c.match(/^[0-9]$/)||""===c){var s=Object(u.a)(a);a[e][r]=""===n.value?0:parseInt(n.value),o(Object(u.a)(s))}}(t,e,r)}})},r)}))},e)}))})}),Object(n.jsx)("button",{className:"centrar-btn top-3",onClick:function(){return s()},children:"Llenar Sudoku"}),Object(n.jsx)("button",{className:"centrar-btn top-3",onClick:function(){o(t)},children:"Limpiar Sudoku"})]})},p=function(){return Object(n.jsx)(i.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:j}),Object(n.jsx)(l.b,{exact:!0,path:"/input",component:h}),Object(n.jsx)(l.a,{to:"/"})]})})})};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.403858ed.chunk.js.map