"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9127],{2050:(T,c,i)=>{i.d(c,{n:()=>Z});let d=[{id:1,title:"",subtitle:"",items:[{id:1,width:"500px",height:"500px",src:"../../assets/articulos/body1.jpg"},{id:2,width:"500px",height:"500px",src:"../../assets/articulos/body2.jpg"},{id:3,width:"500px",height:"500px",src:"../../assets/articulos/body3.jpg"},{id:4,width:"500px",height:"500px",src:"../../assets/articulos/body4.jpg"}]},{id:2,title:"",subtitle:"",items:[{id:5,width:"500px",height:"500px",src:"../../assets/articulos/pant1.jpg"},{id:6,width:"500px",height:"500px",src:"../../assets/articulos/pant2.jpg"}]},{id:3,title:"",subtitle:"",items:[{id:7,width:"500px",height:"500px",src:"../../assets/articulos/pant_nac1.jpg"},{id:8,width:"500px",height:"500px",src:"../../assets/articulos/pant_nac2.jpg"},{id:9,width:"500px",height:"500px",src:"../../assets/articulos/pant_nac3.jpg"}]}];var t=i(865),p=i(6641),a=i(8205),g=i(6019);function l(o,e){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"ion-row",18),t.TgZ(2,"ion-col",19),t.TgZ(3,"h1"),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const s=t.oxw().$implicit;t.xp6(4),t.Oqu(s.title)}}function m(o,e){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"ion-row",18),t.TgZ(2,"ion-col",19),t.TgZ(3,"p",20),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const s=t.oxw().$implicit;t.xp6(4),t.Oqu(s.subtitle)}}function u(o,e){if(1&o&&(t.TgZ(0,"ion-slide"),t._UZ(1,"img",21),t.qZA()),2&o){const s=e.$implicit;t.xp6(1),t.Q6J("height",s.height)("width",s.width)("src",s.src,t.LSH)}}function h(o,e){if(1&o){const s=t.EpF();t.TgZ(0,"section",6),t.YNc(1,l,5,1,"div",7),t.YNc(2,m,5,1,"div",7),t.TgZ(3,"ion-slides",8),t.YNc(4,u,2,3,"ion-slide",9),t.qZA(),t.TgZ(5,"ion-row",10),t.TgZ(6,"ion-col",11),t.TgZ(7,"div",12),t.O4$(),t.TgZ(8,"svg",13),t._UZ(9,"path",14),t.qZA(),t.qZA(),t.qZA(),t.kcU(),t.TgZ(10,"ion-col",11),t._UZ(11,"audio",15),t.TgZ(12,"div",16),t.NdJ("click",function(){const f=t.CHM(s).$implicit;return t.oxw().listen(f)}),t._UZ(13,"ion-icon",17),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const s=e.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",s.title),t.xp6(1),t.Q6J("ngIf",s.subtitle),t.xp6(1),t.Q6J("options",n.slideOpts),t.xp6(1),t.Q6J("ngForOf",s.items)}}let Z=(()=>{class o{constructor(){this.slideItems=d}listen(s){if(new Audio("../../nanova/assets/buble.wav").play(),localStorage.getItem("savelove")){let r=JSON.parse(localStorage.getItem("savelove"));r.push(s),localStorage.setItem("savelove",JSON.stringify(r))}else localStorage.setItem("savelove",JSON.stringify([s]));alert(JSON.stringify(localStorage.getItem("savelove")))}}return o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tab2"]],decls:20,vars:2,consts:[[3,"fullscreen"],[2,"margin","1em 1em -1em 1em"],[2,"display","inline-block"],[2,"text-align","justify","font-family","sans-serif","color","gray"],[2,"font-family","sans-serif"],["style","width: 100%; height: 100%; margin-bottom: 0.5em;",4,"ngFor","ngForOf"],[2,"width","100%","height","100%","margin-bottom","0.5em"],[4,"ngIf"],["pager","true",3,"options"],[4,"ngFor","ngForOf"],[2,"text-align","center","position","relative","top","-3em","z-index","1001"],["size","6"],[2,"position","relative","top","1em"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["d","M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"],["src","../../nanova/assets/buble.wav"],[1,"content-svg",3,"click"],["name","heart",2,"color","red","font-size","3em"],[2,"text-align","center"],["size","12"],[2,"font-family","sans-serif","color","gray"],[3,"height","width","src"]],template:function(s,n){1&s&&(t._UZ(0,"app-header"),t.TgZ(1,"ion-content",0),t.TgZ(2,"ion-content"),t.TgZ(3,"div",1),t.TgZ(4,"h1",2),t._uU(5,"\xa1Nueva colecci\xf3n!"),t.qZA(),t.TgZ(6,"p",3),t._uU(7,"Somos Tienda Virtual en \xa1Caracas!"),t._UZ(8,"br"),t._UZ(9,"br"),t._uU(10," Tenemos los mejores atuendos para tus outfits. "),t.qZA(),t.TgZ(11,"span",4),t.TgZ(12,"strong"),t._uU(13,"Siguenos en Instagram @holananova"),t.qZA(),t.qZA(),t._UZ(14,"br"),t._UZ(15,"br"),t.TgZ(16,"span",4),t.TgZ(17,"strong"),t._uU(18,"Siguenos en Twitter @nanovaccs"),t.qZA(),t.qZA(),t.qZA(),t.YNc(19,h,14,4,"section",5),t.qZA(),t.qZA()),2&s&&(t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(18),t.Q6J("ngForOf",n.slideItems))},directives:[p.G,a.W2,g.sg,g.O5,a.Hr,a.Nd,a.wI,a.gu,a.A$],styles:["ion-slides[_ngcontent-%COMP%]{height:90%}.content-svg[_ngcontent-%COMP%]:active{transform:translateY(-4px)}"]}),o})()},9127:(T,c,i)=>{i.r(c),i.d(c,{TabsPageModule:()=>o});var d=i(8205),t=i(6019),p=i(9010),a=i(790),g=i(2050),l=i(865);const u=[{path:"",component:g.n},{path:"about",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-tabs"]],decls:1,vars:0,template:function(n,r){1&n&&l._uU(0,"Home Oficial ")},styles:[""]}),e})()},{path:"tab1",loadChildren:()=>Promise.all([i.e(8592),i.e(8438)]).then(i.bind(i,8438)).then(e=>e.Tab1PageModule)},{path:"catalogo",loadChildren:()=>Promise.all([i.e(8592),i.e(4292)]).then(i.bind(i,4292)).then(e=>e.Tab2PageModule)},{path:"favoritos",loadChildren:()=>Promise.all([i.e(8592),i.e(9161)]).then(i.bind(i,9161)).then(e=>e.Tab3PageModule)}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[a.Bz.forChild(u)]]}),e})();var Z=i(207);let o=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[d.Pc,t.ez,p.u5,h,Z.O]]}),e})()}}]);