(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{2:function(e,t,a){e.exports={about:"About_about__100my",photo:"About_photo__37kcB",descBox:"About_descBox__1xq31",desc1:"About_desc1__P4EhM",desc2:"About_desc2__2JRLU",btnbox:"About_btnbox__2MjOa",cvBtn:"About_cvBtn__VWFFn",contactBtn:"About_contactBtn__1LPJE",testiBox:"About_testiBox__NgZsv",testiContainer:"About_testiContainer__2D375",testiCard:"About_testiCard__101O6",chatBubble:"About_chatBubble__2WLnF",textBox:"About_textBox__2CD0W",text:"About_text__3Vi2t",name:"About_name__2f68-",company:"About_company__1mvXm"}},3:function(e,t,a){e.exports={contact:"Contact_contact__2WI8u",contactText:"Contact_contactText__n4Lz-",touchBox:"Contact_touchBox__IMqcU",detailsBox:"Contact_detailsBox__2Eo4e",title:"Contact_title__F2Y6N",titleEmail:"Contact_titleEmail__2BJ3y",content:"Contact_content__Rax-A",social:"Contact_social__2Cbz6",submitModal:"Contact_submitModal__3qjhO",submitClose:"Contact_submitClose__1BxWm",copyRight:"Contact_copyRight__Eh314"}},34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},4:function(e,t,a){e.exports={resume:"Resume_resume__2PUwK",resbox:"Resume_resbox__1f5XN",edu:"Resume_edu__3NgQx",exp:"Resume_exp__29Iuf",date:"Resume_date__2XYNW",title:"Resume_title__31Ake",des:"Resume_des__1hRBZ",entity:"Resume_entity__Zp-zk"}},40:function(e,t,a){},6:function(e,t,a){e.exports={main:"Main_main__3ZT2p",titlebox:"Main_titlebox__wRzv5",p1:"Main_p1__2wbO8",p2:"Main_p2__1h0RL",p3:"Main_p3__2KNkR"}},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),o=a.n(c),i=(a(39),a(40),a(33)),s=a(17),r=a(5),m=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1);Object(i.a)(o);return window.addEventListener("scroll",(function(){window.scrollY>=50?c(!0):c(!1)})),l.a.createElement("nav",{className:a?"nav active":"nav"},l.a.createElement("div",{className:"link",onClick:function(){return r.animateScroll.scrollToTop()}},"HOME"),l.a.createElement(r.Link,{className:"link",to:"portfolio",smooth:!0,duration:1e3,offset:-80},"PORTFOLIO"),l.a.createElement(r.Link,{className:"link",to:"resume",smooth:!0,duration:1e3,offset:-80},"RESUME"),l.a.createElement(r.Link,{className:"link",to:"about",smooth:!0,duration:1e3,offset:-80},"ABOUT"),l.a.createElement(r.Link,{className:"link",to:"contact",smooth:!0,duration:1e3,offset:-80},"CONTACT"))},u=a(6),d=a.n(u),E=function(){return l.a.createElement("section",{id:"main",className:d.a.main},l.a.createElement("div",{className:d.a.titlebox},l.a.createElement("div",{className:d.a.p1},"Hello, I'm"),l.a.createElement("div",{className:d.a.p2},"Lucas Li"),l.a.createElement("div",{className:d.a.p3},"AND THIS IS MY RESUME")))},_=a(7),p=a.n(_),f=function(){function e(e){return l.a.createElement("div",{className:p.a.portfolioCard},l.a.createElement("a",{className:e.picture,href:e.link}),l.a.createElement("div",{className:p.a.title},e.title),l.a.createElement("div",{className:p.a.desc},e.desc))}return l.a.createElement("section",{id:"portfolio",className:p.a.portfolio},l.a.createElement("div",{className:"sectionHeader"},"Portfolio"),l.a.createElement("div",{className:p.a.portfolioContainer},l.a.createElement(e,{link:"https://lucasli233.github.io/react-movie-watchlist-v1/",picture:"portfolioPic watchlist",title:"Movie Watchlist",desc:"React"}),l.a.createElement(e,{link:"https://lucasli233.github.io/react-todo-v1/",picture:"portfolioPic todolist",title:"Todo List",desc:"React"}),l.a.createElement(e,{link:"https://lucasli233.github.io/js-calculator/",picture:"portfolioPic calc",title:"Calculator",desc:"VanillaJS"})))},b=a(4),h=a.n(b),N=function(){function e(e){return l.a.createElement("div",{className:h.a.resbox},l.a.createElement("p",{className:h.a.date},e.date),l.a.createElement("p",{className:h.a.title},e.title),l.a.createElement("p",{className:h.a.des},e.des,l.a.createElement("br",null),e.gpa),l.a.createElement("p",{className:h.a.entity},e.entity))}return l.a.createElement("section",{id:"resume",className:h.a.resume},l.a.createElement("div",{className:"sectionHeader"},"Resume"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:h.a.edu},l.a.createElement("div",{className:"secondaryTitle"},"Education"),l.a.createElement(e,{date:"March 2019 - Present",title:"Bachelor of Science",des:"Majoring in Computer Science and Logic & Computation.",gpa:"7/9",entity:"University of Auckland"}),l.a.createElement(e,{date:"February 2018 - October 2018",title:"Bachelor of Engineering with Honours",des:"Majored in Software Engineering. Discontinued and moved to Auckland after first year.",entity:"Victoria University of Wellington"})),l.a.createElement("div",{className:h.a.exp},l.a.createElement("div",{className:"secondaryTitle"},"Experience"),l.a.createElement(e,{date:"May 2019 - Present",title:"Property Management Assistant",des:"Part-time Airbnb host for a New Zealand based property management company specializing in short term rentals.",entity:"Toodle Airbnb Management"}),l.a.createElement(e,{date:"December 2019 - January 2020",title:"Software Testing Intern",des:"Took part in the development of a map labelling software. Key responsibilities: Integration, user interface testing.",entity:"Jiangsu Digitaland Technology Co., Ltd."}))))},v=a(2),g=a.n(v),y=function(){function e(e){return l.a.createElement("div",{className:g.a.testiCard},l.a.createElement("div",{className:e.picture}),l.a.createElement("div",{className:g.a.chatBubble},l.a.createElement("div",{className:g.a.textBox},l.a.createElement("p",{className:g.a.text},e.text),l.a.createElement("p",{className:g.a.name},e.name,l.a.createElement("span",{className:g.a.company},e.company)))))}return l.a.createElement("section",{id:"about",className:g.a.about},l.a.createElement("div",{className:"sectionHeader"},"ABOUT ME"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g.a.photo}),l.a.createElement("div",{className:g.a.descBox},l.a.createElement("p",{className:g.a.desc1},"Soon to be grad with BSc in CompSci and LogiComp.",l.a.createElement("ul",null,l.a.createElement("li",null,"I am Intellectually curious, tech & science passionate."),l.a.createElement("li",null,"I am extremely responsible and meticulous."),l.a.createElement("li",null,"I constantly strive to improve and upskill myself."))),l.a.createElement("p",{className:g.a.desc2},l.a.createElement("span",null,"What I like to do in my spare time:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Learning more about technology, science, and philosophy \ud83e\udd13"),l.a.createElement("li",null,"Reading \ud83d\udcd6 watching a lot of critically acclaimed films \ud83c\udfac"),l.a.createElement("li",null,"Listening to a wide range of music: classical \ud83c\udfbb rock \ud83c\udfb8techno \ud83c\udfa7"),l.a.createElement("li",null,"Watching fashion shows \ud83e\udde5 looking for new clothes to buy \ud83d\udc5e"),l.a.createElement("li",null,"Working out at the gym \ud83c\udfcb\ufe0f\u200d\u2642\ufe0f"))),l.a.createElement("div",{className:g.a.btnbox},l.a.createElement(r.Link,{className:g.a.contactBtn,to:"contact",smooth:!0,duration:1e3,offset:-80},"HIRE ME"),l.a.createElement("a",{style:{display:"table-cell"},href:"https://drive.google.com/file/d/1AEE9s4s2RY77vByvmkqckIyAlvxxSgeA/view?usp=sharing",target:"_blank",className:g.a.cvBtn},"DOWNLOAD CV")))),l.a.createElement("div",{className:g.a.testiBox},l.a.createElement("div",{className:"sectionHeader"},"Testimonials"),l.a.createElement("div",{className:g.a.testiContainer},l.a.createElement(e,{picture:"profileCircle juli",text:"His positive can-do attitude is an asset to any situation. Anyone who is lucky enough to have Lucas as part of their team will have gained a hardworking, conscientious employee.",name:" Juliana Dur\xe1n, Supervisor ",company:"@Toodle Ltd."}))))},x=a(31),C=a.n(x),k=a(32),w=a.n(k),A=a(8),B=a(9),M=a(3),L=a.n(M);function R(e){e.preventDefault(),C.a.sendForm("gmail","temp",e.target,"user_1zZ8PaBX2WHppm5mri95i").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}var S=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return l.a.createElement("section",{id:"contact",className:L.a.contact},l.a.createElement("div",{className:"sectionHeader"}," Get In Touch"),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("div",{className:"secondaryTitle"},"Email Me"),l.a.createElement("form",{onSubmit:R},l.a.createElement("div",{className:L.a.touchBox},l.a.createElement("input",{type:"text",placeholder:"Your Name",name:"name"}),l.a.createElement("input",{type:"email",placeholder:"Your Email",name:"email"}),l.a.createElement("input",{type:"text",placeholder:"Subject",name:"subject"}),l.a.createElement("textarea",{rows:5,placeholder:"Write a Message",name:"message"}),l.a.createElement("input",{type:"submit",value:"SEND MESSAGE",onClick:function(){return c(!0)}}),l.a.createElement(w.a,{className:L.a.submitModal,isOpen:a,onRequestClose:function(){return c(!1)}},l.a.createElement("p",null,"Message sent successfully"),l.a.createElement("button",{className:L.a.submitClose,onClick:function(){return c(!1)}},"Close"))))),l.a.createElement("div",{className:L.a.detailsBox},l.a.createElement("div",{className:"secondaryTitle"},"My Contact Details"),l.a.createElement("p",{className:L.a.titleEmail},"EMAIL"),l.a.createElement("p",{className:L.a.content},"sli.lucas233@gmail.com"),l.a.createElement("p",{className:L.a.title},"PHONE"),l.a.createElement("p",{className:L.a.content},"+64 022 1977 164"),l.a.createElement("p",{className:L.a.title},"ADDRESS"),l.a.createElement("p",{className:L.a.content},"8B/33 Mount Street ",l.a.createElement("br",null),"Auckland CBD ",l.a.createElement("br",null),"Auckland 1010"),l.a.createElement("div",{className:L.a.social},l.a.createElement("a",{href:"https://www.linkedin.com/in/lucaslinz/"},l.a.createElement(A.a,{icon:B.d})),l.a.createElement("a",{href:"https://github.com/lucasli233/"},l.a.createElement(A.a,{icon:B.b})),l.a.createElement("a",{href:"https://twitter.com/lucasli_nz/"},l.a.createElement(A.a,{icon:B.e})),l.a.createElement("a",{href:"https://www.facebook.com/LucasShengqiLi/"},l.a.createElement(A.a,{icon:B.a})),l.a.createElement("a",{href:"https://www.instagram.com/__lucass_li__/"},l.a.createElement(A.a,{icon:B.c}))))),l.a.createElement("p",{className:L.a.copyRight},"\xa9 2021 by Lucas Li"))};function O(){return l.a.createElement("div",{className:"mobile"},"Website not optimized for small screens ",l.a.createElement("br",null),"please resize window and refresh ",l.a.createElement("br",null),"or view on desktop \ud83d\ude0b")}var T=function(){var e=window.innerWidth;return console.log(e),e>=1040?l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(E,null),l.a.createElement(f,null),l.a.createElement(N,null),l.a.createElement(y,null),l.a.createElement(S,null)):l.a.createElement(O,null)};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root"))},7:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__2NDji",portfolioContainer:"Portfolio_portfolioContainer__21eO0",portfolioCard:"Portfolio_portfolioCard__ldgWI",title:"Portfolio_title__16_nn",desc:"Portfolio_desc__266QX"}}},[[34,1,2]]]);
//# sourceMappingURL=main.d7cdbdd3.chunk.js.map