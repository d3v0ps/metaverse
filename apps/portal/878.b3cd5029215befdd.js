(self.webpackChunk_central_factory_portal=self.webpackChunk_central_factory_portal||[]).push([[878],{2878:(x,l,s)=>{s.r(l),s.d(l,{CustomizationModule:()=>E});var r=s(1457),o=s(4006),v=s(4438),m=s(8796),c=s(428),f=s(7165),p=s(1135);const S=[{name:"Default",path:"assets/themes/default/variables.css"},{name:"Matrix",path:"assets/themes/matrix/variables.css"},{name:"Bubbles",path:"assets/themes/bubbles/variables.css"},{name:"Metaverse",path:"assets/themes/metaverse/variables.css"}];var t=s(7777);let g=(()=>{class e{constructor(){this.themes$=new p.X(S)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var C=s(43),u=s(3354),b=s(7579),y=s(9300),d=s(8505),h=s(2722);function z(e,a){1&e&&t.\u0275\u0275text(0),2&e&&t.\u0275\u0275textInterpolate1(" ",a.item.name," ")}const M=[{path:"",component:(()=>{class e{constructor(n,i,$){this.availableThemesState=n,this.customizationSettingsState=i,this.selectedAvatarState=$,this.form=new u.cw({theme:new u.NI(null)}),this.themes$=this.availableThemesState.themes$,this.destroy$=new b.x}ngOnInit(){this.customizationSettingsState.customizationSettings$.pipe((0,y.h)(n=>!!n),(0,d.b)(n=>this.form.patchValue(n,{emitEvent:!1})),(0,h.R)(this.destroy$)).subscribe(),this.form.valueChanges.pipe((0,h.R)(this.destroy$),(0,d.b)(n=>this.customizationSettingsState.setCustomizationSettings(n,this.selectedAvatarState.avatar$.getValue()?.id).subscribe())).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(g),t.\u0275\u0275directiveInject(C.T),t.\u0275\u0275directiveInject(f.Y))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["cf-customization"]],decls:15,vars:4,consts:[[3,"formGroup"],["formControlName","theme","bindLabel","name",3,"items"],["ng-option-tmp",""]],template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275elementStart(1,"h3"),t.\u0275\u0275text(2,"Customization"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"form",0),t.\u0275\u0275elementStart(4,"h4"),t.\u0275\u0275text(5,"Appearance"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"table"),t.\u0275\u0275elementStart(7,"tr"),t.\u0275\u0275elementStart(8,"td"),t.\u0275\u0275elementStart(9,"label"),t.\u0275\u0275text(10," Theme "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"td"),t.\u0275\u0275elementStart(12,"ng-select",1),t.\u0275\u0275pipe(13,"async"),t.\u0275\u0275template(14,z,1,1,"ng-template",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("formGroup",i.form),t.\u0275\u0275advance(9),t.\u0275\u0275property("items",t.\u0275\u0275pipeBind1(13,2,i.themes$)))},directives:[o._Y,o.JL,o.sg,m.w9,o.JJ,o.u,m.ir],pipes:[r.AsyncPipe],styles:["h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin-block-start:0}table[_ngcontent-%COMP%]{width:100%;border-spacing:0 1em;margin-bottom:2em}td[_ngcontent-%COMP%]{width:200px}ng-select[_ngcontent-%COMP%]{max-width:400px}"]}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[c.RouterModule.forChild(M)],c.RouterModule]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[r.CommonModule,o.u5,o.UX,v.O,m.A0,j]]}),e})()}}]);