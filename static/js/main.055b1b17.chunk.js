(this.webpackJsonpbootstrap_page_animation=this.webpackJsonpbootstrap_page_animation||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo.8a99d592.png"},47:function(e,a,t){e.exports=t.p+"static/media/bazylia.50100195.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/poziomka.e796be18.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/czosnek.a7f9000e.jpg"},50:function(e,a,t){e.exports=t.p+"static/media/brokul.ec31484c.jpg"},51:function(e,a,t){e.exports=t.p+"static/media/gruszka.e9add1f6.jpg"},52:function(e,a,t){e.exports=t.p+"static/media/jagoda.1d041799.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/olej.15fb0092.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/lniane.839e4756.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/dynia.996e1211.jpg"},59:function(e,a,t){e.exports=t(70)},64:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(9),s=t.n(r),l=(t(64),t(10)),c=t(17),m=t.n(c),o=t(73),u=function(){return n.a.createElement(o.a,{bg:"light",expand:"md",sticky:"top",collapseOnSelect:!0,className:"border-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(o.a.Brand,null,n.a.createElement(l.b,{to:"/",className:"navbar-brand"},n.a.createElement("img",{className:"nav-logo",src:m.a,alt:""})," BartekShop")),n.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},n.a.createElement("ul",{className:"navbar-nav navbar-right"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{to:"/services",className:"nav-link h5"},"Oferta")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{to:"/about",className:"nav-link h5"},"Informacje")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{to:"/contact",className:"nav-link h5"},"Kontakt"))))))},d=t(12),p=(t(26),function(e){var a="jumbotron-bg bg-".concat(e.site);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"jumbotron"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:a}),n.a.createElement("h1",{className:"display-4 text-white pull-right"},"Witaj u Bartka"),n.a.createElement("p",{className:"lead text-white"},"Smacznie i zdrowo."))),n.a.createElement("div",{className:"container"},n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item active"},n.a.createElement("em",null,n.a.createElement(l.b,{to:"/",className:"text-muted"},"Strona g\u0142\xf3wna"))),n.a.createElement("li",{className:"breadcrumb-item active"},n.a.createElement("em",null,e.name))))))}),g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,render:function(e){return n.a.createElement(p,Object.assign({site:"home",name:"Produkty"},e))}}),n.a.createElement(d.a,{path:"/about",exact:!0,render:function(e){return n.a.createElement(p,Object.assign({site:"about",name:"Informacje"},e))}}),n.a.createElement(d.a,{path:"/services",exact:!0,render:function(e){return n.a.createElement(p,Object.assign({site:"services",name:"Oferta"},e))}}),n.a.createElement(d.a,{path:"/contact",exact:!0,render:function(e){return n.a.createElement(p,Object.assign({site:"contact",name:"Kontakt"},e))}}),n.a.createElement(d.a,{render:function(e){return n.a.createElement(p,Object.assign({site:"home"},e))}})))},b=t(31),E=t(32),h=t(33),f=t(37),v=t(34),y=t(38),N=t(75),q=t(74),k=t(76),_=t(47),x=t.n(_),w=t(48),j=t.n(w),z=t(49),C=t.n(z),O=t(50),S=t.n(O),F=t(51),L=t.n(F),T=t(52),P=t.n(T),B=t(53),A=t.n(B),I=t(54),W=t.n(I),K=t(55),D=t.n(K),G=n.a.createElement(N.a,{id:"popover-basic"},n.a.createElement(N.a.Content,null,"Brak \u015brodk\xf3w :(")),J=function(e){return n.a.createElement(q.a,{trigger:"click",placement:"top",overlay:G},n.a.createElement("button",{className:"btn btn-success"},"Kup za ",e.price," PLN"))},H=function(e){return n.a.createElement("div",{key:e.item.id,className:"col-md-4"},n.a.createElement("div",{className:"card bg-light text-white mb-2"},n.a.createElement("img",{src:e.item.img,className:"card-img-top",alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-dark mb-0"},e.item.name,e.item.badge?n.a.createElement("span",{className:e.item.badgeTyp},e.item.badge):null),n.a.createElement("p",{className:"card-text text-muted mt-0"},e.item.type),n.a.createElement(J,{price:e.item.price}))))},V=function(e){function a(){var e,t;Object(E.a)(this,a);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=Object(f.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={category:"all"},t.products=[{name:"Bazylia",category:"spices",type:"\u015bwie\u017ca!",price:"18",img:"".concat(x.a),badge:"",badgeTyp:"",id:0},{name:"Poziomka",category:"fruits",type:"pychota!",price:"29",img:"".concat(j.a),badge:"Nowo\u015b\u0107",badgeTyp:"badge badge-success ml-3",id:1},{name:"Czosnek",category:"vegetables",type:"zdrowy!",price:"35",img:"".concat(C.a),badge:"",badgeTyp:"",id:2},{name:"Broku\u0142",category:"vegetables",type:"pi\u0119kny",price:"9.99",img:"".concat(S.a),badge:"Promocja",badgeTyp:"badge badge-danger ml-3",id:3},{name:"Gruszka",category:"fruits",type:"s\u0142odka!",price:"4,90",img:"".concat(L.a),badge:"",badgeTyp:"",id:4},{name:"Bor\xf3wka",category:"fruits",type:"ameryka\u0144ska!",price:"19,99",img:"".concat(P.a),badge:"Polska",badgeTyp:"badge badge-info ml-3",id:5},{name:"Olej lniany",category:"oils",type:"wspania\u0142y!",price:"49",img:"".concat(A.a),badge:"",badgeTyp:"",id:6},{name:"Siemi\u0119 Lniane",category:"seeds",type:"superfoods!",price:"15",img:"".concat(W.a),badge:"",badgeTyp:"",id:7},{name:"Dynia",category:"seeds",type:"prozdrowotna!",price:"12",img:"".concat(D.a),badge:"Hit",badgeTyp:"badge badge-warning ml-3",id:8}],t.handleClick=function(e){t.setState({category:e})},t.productsList=function(){var e=t.products;switch(t.state.category){case"all":return e.map((function(e){return n.a.createElement(H,{key:e.id,item:e})}));case"spices":return(e=e.filter((function(e){return"spices"===e.category}))).map((function(e){return n.a.createElement(H,{key:e.id,item:e})}));case"fruits":return(e=e.filter((function(e){return"fruits"===e.category}))).map((function(e){return n.a.createElement(H,{key:e.id,item:e})}));case"vegetables":return(e=e.filter((function(e){return"vegetables"===e.category}))).map((function(e){return n.a.createElement(H,{key:e.id,item:e})}));case"oils":return(e=e.filter((function(e){return"oils"===e.category}))).map((function(e){return n.a.createElement(H,{key:e.id,item:e})}));case"seeds":return(e=e.filter((function(e){return"seeds"===e.category}))).map((function(e){return n.a.createElement(H,{key:e.id,item:e})}));default:return n.a.createElement("h1",null,"Co\u015b posz\u0142o nie tak")}},t}return Object(y.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("h4",{className:" h4 ml-3 mb-3"},"Kategorie"),n.a.createElement("div",{className:"list-group"},n.a.createElement("button",{onClick:function(){e.handleClick("fruits")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Owoce"),n.a.createElement("button",{onClick:function(){e.handleClick("vegetables")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Warzywa"),n.a.createElement("button",{onClick:function(){e.handleClick("spices")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Przyprawy"),n.a.createElement("button",{onClick:function(){e.handleClick("oils")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Oleje"),n.a.createElement("button",{onClick:function(){e.handleClick("seeds")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Nasiona"),n.a.createElement("button",{onClick:function(){e.handleClick("all")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Wszystko"))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h2",{className:" h4 ml-3 mb-3"},"Produkty"),n.a.createElement(k.a,{active:"false"},n.a.createElement("ul",{className:"pagination"},n.a.createElement(k.a.First,{onClick:function(){return alert("mniej ni\u017c zero?:D")}}),n.a.createElement(k.a.Item,{disabled:!0},"1"),n.a.createElement(k.a.Last,{onClick:function(){return alert("dost\u0119pna tylko jedna strona")}}))),n.a.createElement("div",{className:"row"},this.productsList()))))}}]),a}(n.a.Component),Z=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Pewne zakupy"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Inventore, deserunt sunt nihil expedita vel in tempore sint. Officiis nostrum modi sed ipsa quisquam blanditiis iure quo veritatis pariatur sit, dolor natus temporibus atque animi nisi nemo incidunt culpa? Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"),n.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Gwarantujemy!"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore."),n.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Dodatkowo otrzymasz"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore."),n.a.createElement("table",{className:"table table-hover text-center"},n.a.createElement("thead",{className:"bg-light"},n.a.createElement("tr",null,n.a.createElement("th",null,"Bon (PLN)"),n.a.createElement("th",null,"Przy zakupach powy\u017cej (PLN)"),n.a.createElement("th",null,"Koszt dostawy (PLN)"),n.a.createElement("th",null,"Wa\u017cno\u015b\u0107 bonu w miesi\u0105cach"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"100"),n.a.createElement("td",null,"300"),n.a.createElement("td",null,"18.99"),n.a.createElement("td",null,"2")),n.a.createElement("tr",null,n.a.createElement("th",null,"200"),n.a.createElement("td",null,"550"),n.a.createElement("td",null,"Gratis"),n.a.createElement("td",null,"4")),n.a.createElement("tr",null,n.a.createElement("th",null,"300"),n.a.createElement("td",null,"825"),n.a.createElement("td",null,"Gratis"),n.a.createElement("td",null,"6")))))},M=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Kierujemy si\u0119"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Inventore, deserunt sunt nihil expedita vel in tempore sint. Officiis nostrum modi sed ipsa quisquam blanditiis iure quo veritatis pariatur sit, dolor natus temporibus atque animi nisi nemo incidunt culpa? Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"),n.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Dbamy o"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"),n.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Filozofia"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Inventore, deserunt sunt nihil expedita vel in tempore sint. Officiis nostrum modi sed ipsa quisquam blanditiis iure quo veritatis pariatur sit, dolor natus temporibus atque animi nisi nemo incidunt culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"))},Q=function(e){function a(){var e,t;Object(E.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(f.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(n)))).state={user_name:"",user_email:"",user_password:"",user_accept:!1,message_send:"",errors:{user_name:!1,user_email:!1,user_password:!1,user_accept:!1}},t.messages={user_name_incorrect:"Imi\u0119 - minimum 3 znaki, nie mo\u017ce zawiera\u0107 spacji",user_email_incorrect:"email - w adresie email brakuje @",user_password_incorrect:"wpisz tre\u015b\u0107 wiadomo\u015bci",user_accept_incorrect:"brak zgody - nale\u017cy wyrazi\u0107 wszelak\u0105 zgod\u0119"},t.validationForm=function(){var e=!1,a=!1,i=!1,n=!1,r=!1;return t.state.user_name.length>=3&&-1===t.state.user_name.indexOf(" ")&&(e=!0),-1!==t.state.user_email.indexOf("@")&&(a=!0),t.state.user_password.length>0&&(i=!0),t.state.user_accept&&(n=!0),e&&a&&i&&n&&(r=!0),{user_name:e,user_email:a,user_password:i,user_accept:n,correct:r}},t.handleSubmitApp12=function(e){e.preventDefault();var a=t.validationForm();a.correct?t.setState({user_name:"",user_email:"",user_password:"",user_accept:!1,message_send:"Wys\u0142ana do nieba",errors:{user_name:!1,user_email:!1,user_password:!1,user_accept:!1}}):t.setState({message_send:"",errors:{user_name:!a.user_name,user_email:!a.user_email,user_password:!a.user_password,user_accept:!a.user_accept}})},t.handleChangeApp12=function(e){var a=e.target.name;if("checkbox"===e.target.type)return t.setState(Object(b.a)({},a,e.target.checked));t.setState(Object(b.a)({},a,e.target.value))},t}return Object(y.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state,a=e.user_name,t=e.user_email,i=e.user_password,r=e.user_accept;return n.a.createElement("div",{className:"container bg-light"},n.a.createElement("h2",{className:"h2 ml-5 pt-5"},"Skontaktuj si\u0119 z nami"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4 pt-5"},n.a.createElement("img",{className:"contact-logo",src:m.a,alt:""}),n.a.createElement("div",{className:"h1 text-center"},"BartekShop")),n.a.createElement("div",{className:"col-8"},n.a.createElement("form",{className:"form-contact mb-5 p-3",onSubmit:this.handleSubmitApp12,noValidate:!0},n.a.createElement("label",{className:"form-label",htmlFor:"name"}," Twoje imi\u0119:",n.a.createElement("input",{className:"form-input",type:"text",id:"name",name:"user_name",value:a,onChange:this.handleChangeApp12})),n.a.createElement("label",{className:"form-label",htmlFor:"name"}," Tw\xf3j email:",n.a.createElement("input",{className:"form-input",type:"email",id:"email",name:"user_email",value:t,onChange:this.handleChangeApp12})),n.a.createElement("label",{className:"form-label",htmlFor:"password"}," Twoja wiadomo\u015b\u0107:",n.a.createElement("textarea",{className:"form-area d-block ",type:"text",id:"password",name:"user_password",value:i,onChange:this.handleChangeApp12,cols:"60",rows:"10"})),n.a.createElement("label",{className:"form-label",htmlFor:"checkbox"},n.a.createElement("input",{type:"checkbox",id:"checkbox",name:"user_accept",checked:r,onChange:this.handleChangeApp12})," ",n.a.createElement("i",null,"Wyra\u017cam zgod\u0119 wszelak\u0105")),n.a.createElement("button",{className:"mb-5 px-5 py-2"},"Wy\u015blij"),this.state.errors.user_name&&n.a.createElement("p",{className:"red"},this.messages.user_name_incorrect),this.state.errors.user_email&&n.a.createElement("p",{className:"red"},this.messages.user_email_incorrect),this.state.errors.user_password&&n.a.createElement("p",{className:"red"},this.messages.user_password_incorrect),this.state.errors.user_accept&&n.a.createElement("p",{className:"red"},this.messages.user_accept_incorrect),this.state.message_send&&n.a.createElement("h3",{className:"green h3"},this.state.message_send)))))}}]),a}(n.a.Component),R=function(){return n.a.createElement("div",{className:"page-hight-100"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Nie ma takiej strony")))},U=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,component:V}),n.a.createElement(d.a,{path:"/services",exact:!0,component:Z}),n.a.createElement(d.a,{path:"/about",exact:!0,component:M}),n.a.createElement(d.a,{path:"/contact",exact:!0,component:Q}),n.a.createElement(d.a,{path:"/",component:R})))},X=t(72),Y=n.a.createElement(N.a,{id:"popover-basic"},n.a.createElement(N.a.Content,null,"We\u017a nie ",n.a.createElement("strong",null,"\u017cartuj!"))),$=function(){return n.a.createElement(q.a,{trigger:"click",placement:"top",overlay:Y},n.a.createElement(X.a,{variant:"success"},"Zapisz si\u0119!"))},ee=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{className:"bg-dark"},n.a.createElement("div",{className:"bg-secondary mt-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"footCon"},n.a.createElement("div",{className:"footCon-div footCon-div-1 pt-3"},n.a.createElement("h4",{className:"h5 text-light ml-4"},"BartekShop"),n.a.createElement("p",{className:"text-light"},"Podaj nam sw\xf3j adres email, je\u015bli lubisz otrzymywa\u0107 niechcian\u0105 korespondencj\u0119")),n.a.createElement("div",{className:"footCon-div ml-4 py-3"},n.a.createElement("h4",{className:"h5 text-light ml-4"},"Newsletter"),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{className:"p-1",type:"email",placeholder:"Tw\xf3j adres @"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement($,null))))))),n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"text-muted py-4 m-0 text-center"},"copyright \xa9 BartekShop"))))};var ae=function(){return n.a.createElement(l.a,{basename:"/test"},n.a.createElement(u,null),n.a.createElement(g,null),n.a.createElement(U,null),n.a.createElement(ee,null))};s.a.render(n.a.createElement(ae,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.055b1b17.chunk.js.map