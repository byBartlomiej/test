(this.webpackJsonpbootstrap_page_animation=this.webpackJsonpbootstrap_page_animation||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.8a99d592.png"},,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/bazylia.50100195.jpg"},function(e,a,t){e.exports=t.p+"static/media/poziomka.e796be18.jpg"},function(e,a,t){e.exports=t.p+"static/media/czosnek.a7f9000e.jpg"},function(e,a,t){e.exports=t.p+"static/media/brokul.ec31484c.jpg"},function(e,a,t){e.exports=t.p+"static/media/gruszka.e9add1f6.jpg"},function(e,a,t){e.exports=t.p+"static/media/jagoda.1d041799.jpg"},function(e,a,t){e.exports=t.p+"static/media/olej.15fb0092.jpg"},function(e,a,t){e.exports=t.p+"static/media/lniane.839e4756.jpg"},function(e,a,t){e.exports=t(44)},,,,,function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),r=t(21),n=t.n(r),l=(t(37),t(2)),m=t(9),c=t.n(m),o=function(){return s.a.createElement("nav",{className:"navbar navbar-expand-md sticky-top navbar-light bg-light border-bottom"},s.a.createElement("div",{className:"container"},s.a.createElement(l.b,{to:"/",className:"navbar-brand"},s.a.createElement("img",{className:"nav-logo",src:c.a,alt:""})," BartekShop"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarMenu","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarMenu"},s.a.createElement("ul",{className:"navbar-nav navbar-right"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(l.b,{to:"/about",className:"nav-link h5"},"O sklepie")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(l.b,{to:"/services",className:"nav-link h5"},"Oferta")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(l.b,{to:"/contact",className:"nav-link h5"},"Kontakt"))))))},u=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"jumbotron"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron-bg"}),s.a.createElement("h1",{className:"display-4 text-white pull-right"},"Witaj u Bartka"),s.a.createElement("p",{className:"lead text-white"},"Smacznie i zdrowo."))),s.a.createElement("div",{className:"container"},s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item active"},s.a.createElement("em",null,"Strona g\u0142\xf3wna")),s.a.createElement("li",{className:"breadcrumb-item "},s.a.createElement("em",null,"Produkty"))))))},p=t(13),d=t(14),g=t(15),b=t(17),E=t(16),h=t(18),f=t(6),N=t(24),v=t.n(N),y=t(25),q=t.n(y),k=t(26),_=t.n(k),x=t(27),w=t.n(x),j=t(28),z=t.n(j),C=t(29),S=t.n(C),O=t(30),F=t.n(O),L=t(31),T=t.n(L),P=function(e){return s.a.createElement("div",{key:e.item.id,className:"col-md-4"},s.a.createElement("div",{className:"card bg-light text-white mb-2"},s.a.createElement("img",{src:e.item.img,className:"card-img-top",alt:""}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title text-dark mb-0"},e.item.name,e.item.badge?s.a.createElement("span",{className:e.item.badgeTyp},e.item.badge):null),s.a.createElement("p",{className:"card-text text-muted mt-0"},e.item.type),s.a.createElement(l.b,{to:"#",className:"btn btn-success"},"Kup za ",e.item.price," PLN"))))},B=function(e){function a(){var e,t;Object(d.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={category:"all"},t.products=[{name:"Bazylia",category:"spices",type:"\u015bwie\u017ca!",price:"18",img:"".concat(v.a),badge:"",badgeTyp:"",id:0},{name:"Poziomka",category:"fruits",type:"pychota!",price:"29",img:"".concat(q.a),badge:"Nowo\u015b\u0107",badgeTyp:"badge badge-success ml-3",id:1},{name:"Czosnek",category:"spices",type:"zdrowy!",price:"35",img:"".concat(_.a),badge:"",badgeTyp:"",id:2},{name:"Broku\u0142",category:"vegetables",type:"pi\u0119kny",price:"9.99",img:"".concat(w.a),badge:"Promocja",badgeTyp:"badge badge-danger ml-3",id:3},{name:"Gruszka",category:"fruits",type:"s\u0142odka!",price:"4,90",img:"".concat(z.a),badge:"",badgeTyp:"",id:4},{name:"Bor\xf3wka",category:"fruits",type:"ameryka\u0144ska!",price:"19,99",img:"".concat(S.a),badge:"Polska",badgeTyp:"badge badge-info ml-3",id:5},{name:"Olej lniany",category:"oils",type:"wspania\u0142y!",price:"49",img:"".concat(F.a),badge:"",badgeTyp:"",id:6},{name:"Siemi\u0119 Lniane",category:"seeds",type:"superfoods!",price:"15",img:"".concat(T.a),badge:"",badgeTyp:"",id:7}],t.handleClick=function(e){t.setState({category:e})},t.productsList=function(){var e=t.products;switch(console.log(e),console.log(t.state.category),t.state.category){case"all":return e.map((function(e){return s.a.createElement(P,{key:e.id,item:e})}));case"spices":return(e=e.filter((function(e){return"spices"===e.category}))).map((function(e){return s.a.createElement(P,{key:e.id,item:e})}));case"fruits":return(e=e.filter((function(e){return"fruits"===e.category}))).map((function(e){return s.a.createElement(P,{key:e.id,item:e})}));case"vegetables":return(e=e.filter((function(e){return"vegetables"===e.category}))).map((function(e){return s.a.createElement(P,{key:e.id,item:e})}));case"oils":return(e=e.filter((function(e){return"oils"===e.category}))).map((function(e){return s.a.createElement(P,{key:e.id,item:e})}));case"seeds":return(e=e.filter((function(e){return"seeds"===e.category}))).map((function(e){return s.a.createElement(P,{key:e.id,item:e})}));default:return s.a.createElement("h1",null,"Co\u015b posz\u0142o nie tak")}},t}return Object(h.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement("h4",{className:" h4 ml-3 mb-3"},"Kategorie"),s.a.createElement("div",{className:"list-group"},s.a.createElement("button",{onClick:function(){e.handleClick("fruits")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Owoce"),s.a.createElement("button",{onClick:function(){e.handleClick("vegetables")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Warzywa"),s.a.createElement("button",{onClick:function(){e.handleClick("spices")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Przyprawy"),s.a.createElement("button",{onClick:function(){e.handleClick("oils")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Oleje"),s.a.createElement("button",{onClick:function(){e.handleClick("seeds")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Nasiona"),s.a.createElement("button",{onClick:function(){e.handleClick("all")},className:"list-group-item list-group-item-action bg-secondary text-light"},"Wszystko"))),s.a.createElement("div",{className:"col-9"},s.a.createElement("h2",{className:" h4 ml-3 mb-3"},"Produkty"),s.a.createElement("ul",{className:"pagination"},s.a.createElement("li",{className:"page-item"},s.a.createElement(l.b,{to:"#",className:"page-link"},"Poprzednia")),s.a.createElement("li",{className:"page-item"},s.a.createElement(l.b,{to:"#",className:"page-link"},"1")),s.a.createElement("li",{className:"page-item"},s.a.createElement(l.b,{to:"#",className:"page-link"},"2")),s.a.createElement("li",{className:"page-item"},s.a.createElement(l.b,{to:"#",className:"page-link"},"3")),s.a.createElement("li",{className:"page-item"},s.a.createElement(l.b,{to:"#",className:"page-link"},"Ostatnia"))),s.a.createElement("div",{className:"row"},this.productsList()))))}}]),a}(s.a.Component),A=function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Pewne zakupy"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Inventore, deserunt sunt nihil expedita vel in tempore sint. Officiis nostrum modi sed ipsa quisquam blanditiis iure quo veritatis pariatur sit, dolor natus temporibus atque animi nisi nemo incidunt culpa? Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"),s.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Gwarantujemy!"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore."),s.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Dodatkowo otrzymasz"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore."),s.a.createElement("table",{className:"table table-hover text-center"},s.a.createElement("thead",{className:"bg-light"},s.a.createElement("tr",null,s.a.createElement("th",null,"Bon (PLN)"),s.a.createElement("th",null,"Przy zakupach powy\u017cej (PLN)"),s.a.createElement("th",null,"Koszt dostawy (PLN)"),s.a.createElement("th",null,"Wa\u017cno\u015b\u0107 bonu w miesi\u0105cach"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"100"),s.a.createElement("td",null,"300"),s.a.createElement("td",null,"18.99"),s.a.createElement("td",null,"2")),s.a.createElement("tr",null,s.a.createElement("th",null,"200"),s.a.createElement("td",null,"550"),s.a.createElement("td",null,"Gratis"),s.a.createElement("td",null,"4")),s.a.createElement("tr",null,s.a.createElement("th",null,"300"),s.a.createElement("td",null,"825"),s.a.createElement("td",null,"Gratis"),s.a.createElement("td",null,"6")))))},W=function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Kierujemy si\u0119"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Inventore, deserunt sunt nihil expedita vel in tempore sint. Officiis nostrum modi sed ipsa quisquam blanditiis iure quo veritatis pariatur sit, dolor natus temporibus atque animi nisi nemo incidunt culpa? Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"),s.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Dbamy o"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"),s.a.createElement("h2",{className:"h2 ml-4 mt-5"},"Filozofia"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Inventore, deserunt sunt nihil expedita vel in tempore sint. Officiis nostrum modi sed ipsa quisquam blanditiis iure quo veritatis pariatur sit, dolor natus temporibus atque animi nisi nemo incidunt culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus enim modi neque voluptates earum dolores, nemo ipsum dolore praesentium debitis blanditiis iure eius rerum asperiores velit illum quia labore. Eaque id distinctio quos saepe itaque placeat autem, officiis molestias ex debitis quae perferendis, esse quasi perspiciatis quas est temporibus qui ratione impedit exercitationem, officia recusandae? Fuga tempora molestiae aliquam!"))},D=function(e){function a(){var e,t;Object(d.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(s)))).state={user_name:"",user_email:"",user_password:"",user_accept:!1,message_send:"",errors:{user_name:!1,user_email:!1,user_password:!1,user_accept:!1}},t.messages={user_name_incorrect:"Imi\u0119 - minimum 3 znaki, nie mo\u017ce zawiera\u0107 spacji",user_email_incorrect:"email - w adresie email brakuje @",user_password_incorrect:"wpisz tre\u015b\u0107 wiadomo\u015bci",user_accept_incorrect:"brak zgody - nale\u017cy wyrazi\u0107 wszelak\u0105 zgod\u0119"},t.validationForm=function(){var e=!1,a=!1,i=!1,s=!1,r=!1;return t.state.user_name.length>=3&&-1===t.state.user_name.indexOf(" ")&&(e=!0),-1!==t.state.user_email.indexOf("@")&&(a=!0),t.state.user_password.length>0&&(i=!0),t.state.user_accept&&(s=!0),e&&a&&i&&s&&(r=!0),{user_name:e,user_email:a,user_password:i,user_accept:s,correct:r}},t.handleSubmitApp12=function(e){e.preventDefault();var a=t.validationForm();a.correct?t.setState({user_name:"",user_email:"",user_password:"",user_accept:!1,message_send:"Wiadomo\u015b\u0107 wys\u0142ana",errors:{user_name:!1,user_email:!1,user_password:!1,user_accept:!1}}):t.setState({message_send:"",errors:{user_name:!a.user_name,user_email:!a.user_email,user_password:!a.user_password,user_accept:!a.user_accept}})},t.handleChangeApp12=function(e){var a=e.target.name;if("checkbox"===e.target.type)return t.setState(Object(p.a)({},a,e.target.checked));t.setState(Object(p.a)({},a,e.target.value))},t}return Object(h.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.state,a=e.user_name,t=e.user_email,i=e.user_password,r=e.user_accept;return s.a.createElement("div",{className:"container bg-light"},s.a.createElement("h2",{className:"h2 ml-5 pt-5"},"Skontaktuj si\u0119 z nami"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-4 pt-5"},s.a.createElement("img",{className:"contact-logo",src:c.a,alt:""}),s.a.createElement("div",{className:"h1 text-center"},"BartekShop")),s.a.createElement("div",{className:"col-8"},s.a.createElement("form",{className:"form-contact mb-5 p-3",onSubmit:this.handleSubmitApp12,noValidate:!0},s.a.createElement("label",{className:"form-label",htmlFor:"name"}," Twoje imi\u0119:",s.a.createElement("input",{className:"form-input",type:"text",id:"name",name:"user_name",value:a,onChange:this.handleChangeApp12})),s.a.createElement("label",{className:"form-label",htmlFor:"name"}," Tw\xf3j email:",s.a.createElement("input",{className:"form-input",type:"email",id:"email",name:"user_email",value:t,onChange:this.handleChangeApp12})),s.a.createElement("label",{className:"form-label",htmlFor:"password"}," Twoja wiadomo\u015b\u0107:",s.a.createElement("textarea",{className:"form-area d-block ",type:"text",id:"password",name:"user_password",value:i,onChange:this.handleChangeApp12,cols:"60",rows:"10"})),s.a.createElement("label",{className:"form-label",htmlFor:"checkbox"},s.a.createElement("input",{type:"checkbox",id:"checkbox",name:"user_accept",checked:r,onChange:this.handleChangeApp12})," ",s.a.createElement("i",null,"Wyra\u017cam zgod\u0119 wszelak\u0105")),s.a.createElement("button",{className:"mb-5 px-5 py-2"},"Wy\u015blij"),this.state.errors.user_name&&s.a.createElement("p",{className:"red"},this.messages.user_name_incorrect),this.state.errors.user_email&&s.a.createElement("p",{className:"red"},this.messages.user_email_incorrect),this.state.errors.user_password&&s.a.createElement("p",{className:"red"},this.messages.user_password_incorrect),this.state.errors.user_accept&&s.a.createElement("p",{className:"red"},this.messages.user_accept_incorrect),this.state.message_send&&s.a.createElement("h3",{className:"green h3"},this.state.message_send)))))}}]),a}(s.a.Component),I=function(){return s.a.createElement("div",{className:"page-hight-100"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Nie ma takiej strony")))},K=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.c,null,s.a.createElement(f.a,{path:"/",exact:!0,component:B}),s.a.createElement(f.a,{path:"/services",exact:!0,component:A}),s.a.createElement(f.a,{path:"/about",exact:!0,component:W}),s.a.createElement(f.a,{path:"/contact",exact:!0,component:D}),s.a.createElement(f.a,{path:"/",component:I})))},G=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("footer",{className:"bg-dark"},s.a.createElement("div",{className:"bg-secondary mt-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-7 pt-3"},s.a.createElement("h4",{className:"h5 text-light ml-4"},"BartekShop"),s.a.createElement("p",{className:"text-light"},"Podaj nam sw\xf3j adres email, je\u015bli lubisz otrzymywa\u0107 niechcian\u0105 korespondencj\u0119")),s.a.createElement("div",{className:"col-5 py-3"},s.a.createElement("h4",{className:"h5 text-light ml-4"},"Newsletter"),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{className:"p-1",type:"email",placeholder:"Tw\xf3j adres @"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{onClick:function(e){return e.preventDefault(),alert("Nie \u017cartuj ;D")},className:"btn btn-info"},"Zapisz si\u0119!"))))))),s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"text-muted py-4 m-0 text-center"},"copyright \xa9 BartekShop"))))};var J=function(){return s.a.createElement(l.a,{basename:"/test"},s.a.createElement(o,null),s.a.createElement(u,null),s.a.createElement(K,null),s.a.createElement(G,null))};t(43);n.a.render(s.a.createElement(J,null),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.767bf63d.chunk.js.map