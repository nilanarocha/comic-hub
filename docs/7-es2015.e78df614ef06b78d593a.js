(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4KjW":function(l,n,u){"use strict";u.r(n);var a=u("8Y7J");class t{}var c=u("pMnS"),i=u("7iLc"),e=u("FVPZ"),r=u("lzlj"),b=u("igqZ"),s=u("omvX"),o=u("SVse"),m=u("iInd"),d=u("IP0z");class p{constructor(l,n){this.comicService=l,this.slugifyPipe=n,this.comics=[]}ngOnInit(){this.getComics()}getComics(){this.comicService.getComics().subscribe(l=>this.comics=l)}slugify(l){return this.slugifyPipe.transform(l)}}var g=u("aS3j"),f=u("8I9x"),B=a.qb({encapsulation:0,styles:[[".example-card[_ngcontent-%COMP%]{max-width:400px}"]],data:{}});function h(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,23,"mat-grid-tile",[["class","mat-grid-tile"]],null,null,null,i.d,i.b)),a.rb(1,49152,[[1,4]],0,e.c,[a.k,[2,e.e]],{rowspan:[0,"rowspan"],colspan:[1,"colspan"]},null),(l()(),a.sb(2,0,null,0,21,"mat-card",[["class"," example-card mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,r.d,r.a)),a.rb(3,49152,null,0,b.a,[[2,s.a]],null,null),(l()(),a.sb(4,0,null,0,6,"mat-card-header",[["class","mat-card-header"]],null,null,null,r.c,r.b)),a.rb(5,49152,null,0,b.e,[],null,null),(l()(),a.sb(6,0,null,0,1,"div",[["class","example-header-image mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),a.rb(7,16384,null,0,b.c,[],null,null),(l()(),a.sb(8,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),a.rb(9,16384,null,0,b.h,[],null,null),(l()(),a.Jb(10,null,["",""])),(l()(),a.sb(11,0,null,0,1,"img",[["class","mat-card-image"],["mat-card-image",""]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),a.rb(12,16384,null,0,b.f,[],null,null),(l()(),a.sb(13,0,null,0,4,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.rb(14,16384,null,0,b.d,[],null,null),(l()(),a.sb(15,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),a.Jb(16,null,[" "," (...) "])),a.Fb(0,o.p,[]),(l()(),a.sb(18,0,null,0,5,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),a.rb(19,16384,null,0,b.b,[],null,null),(l()(),a.sb(20,0,null,null,3,"a",[["mat-button",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.Db(l,21).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),a.rb(21,671744,null,0,m.l,[m.k,m.a,o.g],{routerLink:[0,"routerLink"]},null),a.Eb(22,3),(l()(),a.Jb(-1,null,["More"]))],(function(l,n){var u=n.component;l(n,1,0,8,3);var a=l(n,22,0,"/comics/details",n.context.$implicit.id,u.slugify(n.context.$implicit.name));l(n,21,0,a)}),(function(l,n){l(n,2,0,"NoopAnimations"===a.Db(n,3)._animationMode),l(n,10,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.image,n.context.$implicit.name),l(n,16,0,a.Kb(n,16,0,a.Db(n,17).transform(n.context.$implicit.description,0,400))),l(n,18,0,"end"===a.Db(n,19).align),l(n,20,0,a.Db(n,21).target,a.Db(n,21).href)}))}function k(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,5,"mat-grid-list",[["class","mat-grid-list"],["cols","12"]],null,null,null,i.c,i.a)),a.Gb(6144,null,e.e,null,[e.a]),a.rb(2,2211840,null,1,e.a,[a.k,[2,d.b]],{cols:[0,"cols"],gutterSize:[1,"gutterSize"]},null),a.Hb(603979776,1,{_tiles:1}),(l()(),a.hb(16777216,null,0,1,null,h)),a.rb(5,278528,null,0,o.h,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"12","25px"),l(n,5,0,u.comics)}),null)}function v(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"app-homepage",[],null,null,null,k,B)),a.rb(1,114688,null,0,p,[g.a,f.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=a.ob("app-homepage",p,v,{},{},[]),w=u("IheW"),y=u("Xd0L"),S=u("cUpR"),L=u("BzsH"),j=u("PCNd");u.d(n,"HomepageModuleNgFactory",(function(){return F}));var F=a.pb(t,[],(function(l){return a.Ab([a.Bb(512,a.j,a.ab,[[8,[c.a,x]],[3,a.j],a.w]),a.Bb(4608,o.k,o.j,[a.t,[2,o.u]]),a.Bb(4608,w.h,w.n,[o.c,a.A,w.l]),a.Bb(4608,w.o,w.o,[w.h,w.m]),a.Bb(5120,w.a,(function(l){return[l]}),[w.o]),a.Bb(4608,w.k,w.k,[]),a.Bb(6144,w.i,null,[w.k]),a.Bb(4608,w.g,w.g,[w.i]),a.Bb(6144,w.b,null,[w.g]),a.Bb(4608,w.f,w.j,[w.b,a.q]),a.Bb(4608,w.c,w.c,[w.f]),a.Bb(4608,f.a,f.a,[]),a.Bb(1073742336,o.b,o.b,[]),a.Bb(1073742336,w.e,w.e,[]),a.Bb(1073742336,w.d,w.d,[]),a.Bb(1073742336,m.m,m.m,[[2,m.r],[2,m.k]]),a.Bb(1073742336,d.a,d.a,[]),a.Bb(1073742336,y.e,y.e,[[2,y.b],[2,S.f]]),a.Bb(1073742336,L.b,L.b,[]),a.Bb(1073742336,j.a,j.a,[]),a.Bb(1073742336,b.g,b.g,[]),a.Bb(1073742336,y.f,y.f,[]),a.Bb(1073742336,e.b,e.b,[]),a.Bb(1073742336,t,t,[]),a.Bb(256,w.l,"XSRF-TOKEN",[]),a.Bb(256,w.m,"X-XSRF-TOKEN",[]),a.Bb(1024,m.i,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);