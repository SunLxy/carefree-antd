(self.webpackChunkcarefree_antd_root=self.webpackChunkcarefree_antd_root||[]).push([[56],{8462:function(ve,m,e){"use strict";e.r(m),e.d(m,{Store:function(){return U},default:function(){return Z}});var Q=e(15009),r=e.n(Q),o=e(19632),c=e.n(o),R=e(9783),_=e.n(R),ee=e(5574),K=e.n(ee),B=e(93442),P=e(49882),O=e(55981),y=e(45360),x=e(95639),l=e(71577),s=e(67294),a=e(48997),j=e(86738),n=e(26713),h=e(85893),d=void 0,Y=function(v){var L=v.optConfig,k=v.isEditing,Se=v.isAddEdit,w=v.save,oe=v.isOptDelete,se=v.cancel,Fe=v.onDelete,Ce=v.edit,We=v.newAdd,ze=v.editingKey,Ye=v.rowKey,nn=v.multiple,Le=v.optDeleteEditingDisabled;return[(0,P.Z)({title:"\u64CD\u4F5C",align:"center",width:120},L,{render:function(Je,Re,tn){var dn=k(Re),on=Se(Re);return L&&L.render?L.render(Je,Re,tn,{editable:dn,isNewAdd:on,save:w,cancel:se,onDelete:Fe,edit:Ce,newAdd:We,editingKey:ze}):dn?(0,h.jsxs)("span",{children:[(0,h.jsx)(a.Z.Link,{onClick:function(){return w(Re[Ye],Re,tn)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,h.jsx)(j.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:on?Fe.bind(d,Re[Ye],Re,tn):se.bind(d,Re[Ye]),children:(0,h.jsx)(a.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(a.Z.Link,{disabled:!!ze.length&&!nn,onClick:function(){return Ce(Re)},children:"\u7F16\u8F91"}),oe&&(0,h.jsx)(j.Z,{disabled:Le&&!!ze.length,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return Fe(Re[Ye],Re,tn)},children:(0,h.jsx)(a.Z.Link,{disabled:Le&&!!ze.length,children:"\u5220\u9664"})})]})}})]},f=Y,u=e(72004),g=e.n(u),T=e(12444),b=e.n(T),D=g()(function X(){var v=this;b()(this,X),this.store={},this.remove=function(L){delete v.store[L]},this.register=function(L,k){v.store[L]=k},this.getStore=function(){return v.store},this.getToKeyForm=function(L){return v.store[""+L]}}),C=function(v){var L=s.useRef();return v?L.current=v:L.current=new D,[L.current]},U=D,V=e(83062),$=e(22371),N=e(22174),W=e(69677),me=e(4215),ae=e(49288),ne=e(69606),ce=e(34913),Ge=e(71338),we=e(59847),fe=e(34041),$e=e(32808),Ne=e(11330),Oe=e(55742),Ve=e(41637),te=e(68351),E=e(23799),i=N.default.RangePicker;function I(X,v){if(X.length){var L=X.join("_");return v?v+"_"+L:L}}function G(X){return X===void 0||X===!1?[]:Array.isArray(X)?X:[X]}var Ie=function(v){var L=v.attr,k=v.type,Se=v.inputNode,w=void 0;if(k==="Input"){var oe=L;w=(0,h.jsx)(W.Z,(0,P.Z)({},oe))}else if(k==="TextArea"){var se=L;w=(0,h.jsx)(W.Z.TextArea,(0,P.Z)({},se))}else if(k==="InputNumber"){var Fe=L;w=(0,h.jsx)(me.Z,(0,P.Z)({},Fe))}else if(k==="AutoComplete"){var Ce=L;w=(0,h.jsx)(ae.Z,(0,P.Z)({},Ce))}else if(k==="Cascader"){var We=L;w=(0,h.jsx)(ne.Z,(0,P.Z)({},We))}else if(k==="DatePicker"){var ze=L;w=(0,h.jsx)(N.default,(0,P.Z)({},ze))}else if(k==="Rate"){var Ye=L;w=(0,h.jsx)(ce.Z,(0,P.Z)({},Ye))}else if(k==="Slider"){var nn=L;w=(0,h.jsx)(Ge.Z,(0,P.Z)({},nn))}else if(k==="TreeSelect"){var Le=L;w=(0,h.jsx)(we.Z,(0,P.Z)({},Le))}else if(k==="Select"){var Qe=L;w=(0,h.jsx)(fe.default,(0,P.Z)({},Qe))}else if(k==="Checkbox"){var Je=L;w=(0,h.jsx)($e.Z.Group,(0,P.Z)({},Je))}else if(k==="Mentions"){var Re=L;w=(0,h.jsx)(Ne.Z,(0,P.Z)({},Re))}else if(k==="Radio"){var tn=L;w=(0,h.jsx)(Oe.ZP.Group,(0,P.Z)({},tn))}else if(k==="Switch"){var dn=L;w=(0,h.jsx)(Ve.Z,(0,P.Z)({},dn))}else if(k==="TimePicker"){var on=L;w=(0,h.jsx)(te.Z,(0,P.Z)({},on))}else if(k==="Upload"){var sn=L;w=(0,h.jsx)(E.Z,(0,P.Z)({},sn))}else if(k==="RangePicker"){var an=L;w=(0,h.jsx)(i,(0,P.Z)({},an))}else k==="Custom"&&(w=Se);return w},Ae=["editing","dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","multiple","rowKey","isList","listAttr"],A=["name","rules","preName","itemValue","children","tipAttr","tip"],z=function(v){var L=v.editing,k=v.dataIndex,Se=v.record,w=v.inputNode,oe=v.rules,se=v.children,Fe=v.itemAttr,Ce=v.type,We=v.attr,ze=v.tip,Ye=v.tipAttr,nn=v.rowKey,Le=v.isList,Qe=v.listAttr,Je=Qe===void 0?{}:Qe,Re=(0,O.Z)(v,Ae),tn=Ie({attr:We,type:Ce,inputNode:w}),dn=function(){return Le&&typeof w=="function"?(0,h.jsx)($.ZP.List,(0,P.Z)({},Je,{name:k,children:function(an,pn,Ke){return w(an.map(function(Cn){return(0,P.Z)({},Cn,{fieldKey:Cn.key})}),pn,Ke)}})):(0,h.jsx)(M,(0,P.Z)({},Fe,{name:k,rules:oe,preName:Se[nn],itemValue:Se,children:tn,tipAttr:Ye,tip:ze}))};return(0,h.jsx)("td",(0,P.Z)({},Re,{children:L?dn():se}))},M=function(v){var L=v.name,k=v.rules,Se=v.preName,w=Se===void 0?"":Se,oe=v.itemValue,se=v.children,Fe=v.tipAttr,Ce=Fe===void 0?{}:Fe,We=v.tip,ze=(0,O.Z)(v,A);return(0,h.jsx)($.ZP.Field,(0,P.Z)({},ze,{name:L,rules:k,children:function(nn,Le,Qe){var Je=G(L).length&&Le?Le.name:[],Re=I(Je,w),tn=function(an){var pn=an;an&&an.target&&(pn=an.target.value),nn.onChange(pn)},dn=typeof se=="function"?se((0,P.Z)({},nn,{id:Re}),Le,Qe,{record:oe}):s.isValidElement(se)?s.cloneElement(se,(0,P.Z)({},nn,{onChange:tn,id:Re})):se,on=Le.errors.map(function(sn){return sn}).join(",");return(0,h.jsx)(V.Z,(0,P.Z)({color:"#fff",overlayInnerStyle:{color:"red"}},Ce,{title:We?We(on):on,open:!!Le.errors.length,children:dn}))}}))},he=z,Me=void 0,xe=s.createContext({formsRef:new U,dataSource:[],rowKey:"id",onValuesChange:function(v,L,k,Se){}}),Ue=function(v){var L=$.ZP.useForm(),k=K()(L,1),Se=k[0],w=s.useContext(xe),oe=w.formsRef,se=w.onValuesChange,Fe=se===void 0?function(){}:se,Ce=w.dataSource,We=w.rowKey;s.useEffect(function(){return function(){return oe.remove(""+v["data-row-key"])}},[]),oe.register(""+v["data-row-key"],Se);var ze=Ce.find(function(Ye){return""+Ye[We]==""+v["data-row-key"]});return(0,h.jsx)($.ZP,{onValuesChange:Fe.bind(Me,""+v["data-row-key"],Se),form:Se,name:""+v["data-row-key"],component:!1,initialValues:ze||{},children:(0,h.jsx)("tr",(0,P.Z)({},v))})},qe=Ue,de=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","store","optDeleteEditingDisabled"],Ee=function(v,L){var k=v.columns,Se=v.dataSource,w=Se===void 0?[]:Se,oe=v.onBeforeSave,se=v.onSave,Fe=v.rowKey,Ce=Fe===void 0?"id":Fe,We=v.optIsFirst,ze=We===void 0?!1:We,Ye=v.optConfig,nn=Ye===void 0?{}:Ye,Le=v.isOptDelete,Qe=Le===void 0?!1:Le,Je=v.initValue,Re=Je===void 0?{}:Je,tn=v.onValuesChange,dn=v.isAdd,on=v.onErr,sn=v.multiple,an=sn===void 0?!1:sn,pn=v.onBeforeAdd,Ke=v.isOpt,Cn=Ke===void 0?!0:Ke,Kn=v.addBtnProps,re=Kn===void 0?{}:Kn,t=v.store,p=v.optDeleteEditingDisabled,F=p===void 0?!1:p,S=(0,O.Z)(v,de),q=C(t),ge=K()(q,1),Te=ge[0],ue=(0,s.useState)([]),je=K()(ue,2),pe=je[0],ln=je[1],vn=s.useState([]),In=K()(vn,2),cn=In[0],fn=In[1],Xe=function(ie){ln(function(Pe){return Pe.filter(function(Be){return""+Be!=""+ie})}),fn(function(Pe){return Pe.filter(function(Be){return""+Be!=""+ie})})},mn=s.useMemo(function(){return k.filter(function(ye){return ye.editable}).map(function(ye){return ye.dataIndex})},[k]),De=function(ie,Pe){Pe===void 0&&(Pe={});var Be=Te.getStore();Be[""+ie]&&Be[""+ie].setFieldsValue(Pe)},ke=function(ie){var Pe=Te.getStore();return Pe[""+ie]},un=function(ie){return pe.includes(""+ie[Ce])},gn=function(ie){return cn.includes(""+ie[Ce])},Ze=function(){if(!(pn&&!pn())){if(cn.length===1&&!an){y.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");return}if(pe.length===1&&!an){y.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");return}var ie=(new Date().getTime()*Math.round(10)).toString(),Pe=(0,P.Z)({},Re||{},_()({},Ce,ie)),Be=w.concat([Pe]);ln(function(_e){return _e.concat([ie])}),fn(function(_e){return _e.concat([ie])}),se&&se(Be,Pe)}},En=function(ie){var Pe=(0,P.Z)({},ie);De(ie[Ce],Pe),ln(function(Be){return Be.concat([""+ie[Ce]])})},Tn=function(ie){Xe(ie),De(ie,{})},Rn=function(ie,Pe,Be){var _e=w.filter(function(rn){return""+rn[Ce]!=""+ie});Xe(ie),se&&se(_e,Pe,Pe,Be)},On=function(){var ye=(0,B.Z)(r()().mark(function ie(Pe,Be,_e){var rn,en,bn,Sn;return r()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.prev=0,le.next=3,ke(Pe).validateFields();case 3:if(rn=le.sent,!(oe&&!oe(rn,Be,_e))){le.next=6;break}return le.abrupt("return");case 6:en=c()(w),bn=en.findIndex(function(Dn){return""+Pe==""+Dn[Ce]}),bn>-1?(Sn=en[bn],en.splice(bn,1,(0,P.Z)({},Sn,rn))):en.push(rn),se&&se(en,rn,Be,_e),Xe(Pe),ke(Pe).resetFields(mn),le.next=17;break;case 14:le.prev=14,le.t0=le.catch(0),on&&on(le.t0);case 17:case"end":return le.stop()}},ie,null,[[0,14]])}));return function(Pe,Be,_e){return ye.apply(this,arguments)}}(),yn=Cn&&f({optConfig:nn,isEditing:un,isAddEdit:gn,save:On,isOptDelete:Qe,cancel:Tn,onDelete:Rn,edit:En,newAdd:cn,editingKey:pe,rowKey:Ce,multiple:an,optDeleteEditingDisabled:F})||[],Pn=ze?yn.concat(k):k.concat(yn),xn=Pn.map(function(ye){return ye.editable?(0,P.Z)({},ye,{onCell:function(Pe){return{record:Pe,multiple:an,rowKey:Ce,dataIndex:ye.dataIndex,title:ye.title,editing:un(Pe),inputNode:ye.inputNode,rules:ye.rules||[],itemAttr:ye.itemAttr,type:ye.type,attr:ye.attr,tip:ye.tip,tipAttr:ye.tipAttr,isList:ye.isList,listAttr:ye.listAttr}}}):ye}),hn=function(ie,Pe,Be,_e){if(tn){var rn=w.map(function(en){return""+ie==""+en[Ce]?(0,P.Z)({},en,_e):(0,P.Z)({},en)});tn(rn,Be,_e,ie,Pe)}};return s.useImperativeHandle(L,function(){return{save:On,onDelete:Rn,edit:En,cancel:Tn,add:Ze,isEditing:un,editingKey:pe,newAdd:cn,isAddEdit:gn,forms:Te}}),(0,h.jsx)(s.Fragment,{children:(0,h.jsxs)(xe.Provider,{value:{formsRef:Te,onValuesChange:hn,dataSource:w,rowKey:Ce},children:[(0,h.jsx)(x.Z,(0,P.Z)({size:"small",bordered:!0},S,{components:{body:{row:qe,cell:he}},rowKey:Ce,dataSource:w,columns:xn,rowClassName:"editable-row",pagination:!1})),dn&&(0,h.jsx)(l.ZP,(0,P.Z)({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},re||{},{style:(0,P.Z)({marginTop:10},(re||{}).style||{}),onClick:Ze}))]})})},J=s.forwardRef(Ee),H=J;H.useStore=C,H.Item=M;var be=H,Z=be},29441:function(ve,m,e){"use strict";e.r(m),e.d(m,{default:function(){return Kn}});var Q=e(5574),r=e.n(Q),o=e(27304),c=e(44888),R=e(67294),_=e(96108),ee=e(71230),K=e(15746),B=R.createContext({}),P=function(){return R.useContext(B)},O=R.createContext({isFloat:!1,isSetHeight:!1,layout:"horizontal"}),y=function(){return R.useContext(O)},x=e(11950),l=e(45520),s=function(){(0,l.default)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},a=R.createContext({getComponents:s,getStoreState:s,setInitialValues:s,updateValue:s,getItemStore:function(){return{init:s,register:s,getStoreState:s,updateValue:s,getValue:s}}}),j=function(){return R.useContext(a)},n=e(12444),h=e.n(n),d=e(72004),Y=e.n(d),f=function(){function re(){var t=this;h()(this,re),this.subForm={},this.subHide={},this.registerId=function(p,F,S){S&&(t.subForm[S]=p,t.subHide[S]=F)},this.removeId=function(p){p&&(delete t.subForm[p],delete t.subHide[p])}}return Y()(re,[{key:"subForms",get:function(){return this.subForm}},{key:"subHides",get:function(){return this.subHide}}]),re}(),u=function(t){var p=R.useRef();return t?p.current=t:p.current=new f,[p.current]},g=R.createContext(new f),T=function(){return R.useContext(g)},b=function(t){var p=t.form,F=t.subscribe,S=t.name,q=t.hide;S&&F.registerId(p,q,S),R.useEffect(function(){return function(){return F.removeId(S)}},[])},D=function(t){return Array.isArray(t)?t:typeof t=="string"?t.split("_").filter(function(p){return p}):t},C=function(t){var p={};if(t){var F=t.getInternalHooks;p=F(x.ki)}var S=function(Te,ue){p.dispatch&&p.dispatch({type:"updateValue",namePath:D(Te),value:ue})},q=function(Te){Object.entries(Te).forEach(function(ue){var je=r()(ue,2),pe=je[0],ln=je[1];S(pe,ln)})};return(0,o.Z)({},p,{updateValue:S,bathUpdateValue:q})},U=function(t){return C(t)},V=function(t){var p=P(),F=T(),S=j(),q,ge=U(p.itemRefHook);if(p){var Te=p.watchList;q=Te[(t||{}).id]}return R.useEffect(function(){if((p||{}).firstMont){var ue=p.itemRefHook.getFieldsValue;typeof q=="function"&&q((t||{}).value,ue(!0),(0,o.Z)({},ge),S,{forms:F.subForms,hides:F.subHides})}},[JSON.stringify((t||{}).value)]),[ge]},$=e(50568),N=e(19632),W=e.n(N),me=e(52677),ae=e.n(me);function ne(re){return ae()(re)==="object"&&re!==null&&Object.getPrototypeOf(re)===Object.prototype}function ce(re,t){var p=Array.isArray(re)?W()(re):(0,o.Z)({},re);return t&&Object.keys(t).forEach(function(F){var S=p[F],q=t[F],ge=ne(S)&&ne(q);p[F]=ge?ce(S,q||{}):q}),p}function Ge(re){for(var t=arguments.length,p=new Array(t>1?t-1:0),F=1;F<t;F++)p[F-1]=arguments[F];return p.reduce(function(S,q){return ce(S,q)},re)}var we=Y()(function re(){var t=this;h()(this,re),this.store={},this.componentLists=[],this.init=function(p){var F=p.props||{},S=F.initialValue;if(S!==void 0){var q=p.getNamePath();q&&(t.store=(0,$.sO)(t.store,q,S))}},this.register=function(p){t.componentLists.push(p);var F=p.props||{},S=F.initialValue;return S!==void 0&&p.refresh(),function(){t.componentLists=t.componentLists.filter(function(ge){return ge!==p});var q=p.getNamePath();q&&(t.store=(0,$.sO)(t.store,q,void 0,!0))}},this.getStoreState=function(p){return p?(0,$.NA)(t.store,p):t.store},this.getComponents=function(){return t.componentLists},this.getStore=function(){return{getComponents:t.getComponents,getStoreState:t.getStoreState,getItemStore:t.getItemStore,setInitialValues:t.setInitialValues,updateValue:t.updateValue,bathUpdateValue:t.bathUpdateValue}},this.getItemStore=function(){return{init:t.init,register:t.register,getStoreState:t.getStoreState,updateValue:t.updateValue,getValue:t.getValue,bathUpdateValue:t.bathUpdateValue}},this.setInitialValues=function(p,F){F&&(t.store=Ge({},p,t.store))},this.getPaths=function(p){return Array.isArray(p)?p:typeof p=="string"?p.split("_").filter(function(F){return F}):[]},this.bathUpdateValue=function(p){Object.entries(p).forEach(function(F){var S=r()(F,2),q=S[0],ge=S[1],Te=t.getPaths(q);t.store=(0,$.sO)(t.store,Te,ge)}),t.bathNotifyObservers(Object.keys(p))},this.updateValue=function(p,F){var S=t.getPaths(p);t.store=(0,$.sO)(t.store,S,F),t.notifyObservers(S)},this.getValue=function(p){var F=t.getPaths(p);return(0,$.NA)(t.store,F)},this.bathNotifyObservers=function(p){t.componentLists.forEach(function(F){var S=F.refresh,q=F.getNamePath,ge=q();p.includes(ge.join(""))&&S()})},this.notifyObservers=function(p){t.componentLists.forEach(function(F){var S=F.refresh,q=F.getNamePath,ge=q();ge.join("")===p.join("")&&S()})}}),fe=function(t){var p=R.useRef();if(!p.current)if(t)p.current=t;else{var F=new we;p.current=F.getStore()}return[p.current]},$e=fe,Ne=e(25098),Oe=e.n(Ne),Ve=e(31996),te=e.n(Ve),E=e(26037),i=e.n(E),I=e(85893),G=function(re){te()(p,re);var t=i()(p);function p(F){var S;if(h()(this,p),S=t.call(this,F),S.mounted=!1,S.cancelRegisterFunc=function(){},S.getNamePath=function(){var ue=S.props,je=ue.name,pe=ue.formName;return Array.isArray(je)?pe&&[pe].concat(je)||je:pe&&[pe,je]||[je]},S.refresh=function(){S.mounted&&S.forceUpdate()},S.getValue=function(){var ue=S.props.hideContent,je=ue.getItemStore(),pe=je.getValue;return pe(S.getNamePath())},F.hideContent){var q=F.hideContent,ge=q.getItemStore(),Te=ge.init;Te(Oe()(S))}return S}return Y()(p,[{key:"componentDidMount",value:function(){var S=this.props.hideContent;if(S){var q=S.getItemStore(),ge=q.register;this.cancelRegisterFunc=ge(this)}this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.cancelRegisterFunc(),this.mounted=!1}},{key:"render",value:function(){var S=this.props.children;return this.getValue()?(0,I.jsx)(R.Fragment,{}):(0,I.jsx)(R.Fragment,{children:S})}}]),p}(R.Component),Ie=function(re){var t=R.useContext(a);return(0,I.jsx)(G,(0,o.Z)({},re,{hideContent:t}))},Ae=e(22174),A=e(69677),z=e(4215),M=e(49288),he=e(69606),Me=e(34913),xe=e(71338),Ue=e(59847),qe=e(34041),de=e(32808),Ee=e(11330),J=e(55742),H=e(41637),be=e(68351),Z=e(23799),X=e(48115),v=e(80882),L=e(71577),k=["children","style"],Se=["children","colProps"],w=function(t){var p=t.children,F=t.style,S=(0,c.Z)(t,k),q=y(),ge=q.isFloat,Te=q.isSetHeight,ue=q.layout,je={};return ge&&(je={float:"left",width:"100%",overflow:"hidden"},Te&&(je.height=ue==="inline"?54:74)),(0,I.jsx)(K.Z,(0,o.Z)({span:6},S,{style:(0,o.Z)({},je,F||{}),children:p}))},oe=function(t){var p=t.children,F=t.colProps,S=F===void 0?{}:F,q=(0,c.Z)(t,Se);return(0,I.jsx)(w,(0,o.Z)({},S||{},{children:(0,I.jsx)(Cn.Item,(0,o.Z)({},q,{children:p}))}))},se=oe,Fe=["children"],Ce=["children"],We=["children"],ze=["style","watch","shouldUpdate","dependencies"],Ye=Ae.default.RangePicker,nn=function(t,p){return Array.isArray(t)?p&&[p].concat(t).join("_")||t.join("_"):p&&p+"_"+t||t},Le=function(t){var p=t||{},F=p.children,S=(0,c.Z)(p,Fe),q=V(t),ge=r()(q,1),Te=ge[0];return typeof F=="function"?F((0,o.Z)({},S,{childProps:Te})):R.isValidElement(F)?R.cloneElement(F,(0,o.Z)({},S)):F},Qe=function(t){var p=t.children,F=(0,c.Z)(t,Ce);return(0,I.jsx)(_.Z.Item,(0,o.Z)({},F,{children:(0,I.jsx)(Le,{children:p})}))},Je=function(t){var p=t.children,F=(0,c.Z)(t,We);return(0,I.jsx)(se,(0,o.Z)({},F,{children:(0,I.jsx)(Le,{children:p})}))},Re=function(t,p){var F=p.colProps,S=F===void 0?{}:F,q=p.itemStyle,ge=q===void 0?{}:q,Te=p.attrStyle,ue=Te===void 0?{}:Te,je=p.attrProps,pe=je===void 0?{}:je,ln=p.watchList,vn=p.name,In=p.layout,cn=p.isFloat,fn=p.isSetHeight;return t.map(function(Xe,mn){var De=Xe.type,ke=Xe.label,un=Xe.name,gn=Xe.itemAttr,Ze=Xe.attr,En=Xe.rules,Tn=Xe.render,Rn=Xe.isItemList,On=Xe.isHide,yn=Xe.colProps,Pn=yn===void 0?{}:yn,xn={};cn&&(xn={float:"left",width:"100%",overflow:"hidden"},fn&&(xn.height=In==="inline"?54:74));var hn=gn||{},ye=hn.style,ie=ye===void 0?{}:ye,Pe=hn.watch,Be=Pe===void 0?!0:Pe,_e=hn.shouldUpdate,rn=hn.dependencies,en=(0,c.Z)(hn,ze),bn=Ze||{},Sn=bn.style,He=Sn===void 0?{}:Sn,le=void 0;if(De==="Input"){var Dn=Ze,Zn=pe;le=(0,I.jsx)(A.Z,(0,o.Z)({placeholder:"\u8BF7\u8F93\u5165"+ke},Zn,Dn,{style:(0,o.Z)({},ue,He)}))}else if(De==="TextArea"){var $n=Ze,Nn=pe;le=(0,I.jsx)(A.Z.TextArea,(0,o.Z)({placeholder:"\u8BF7\u8F93\u5165"+ke},Nn,$n,{style:(0,o.Z)({},ue,He)}))}else if(De==="InputNumber"){var Un=Ze,Wn=pe;le=(0,I.jsx)(z.Z,(0,o.Z)({placeholder:"\u8BF7\u8F93\u5165"+ke},Wn,Un,{style:(0,o.Z)({width:"100%"},ue,He)}))}else if(De==="AutoComplete"){var Hn=Ze,zn=pe;le=(0,I.jsx)(M.Z,(0,o.Z)({placeholder:"\u8BF7\u9009\u62E9"+ke},zn,Hn,{style:(0,o.Z)({},ue,He)}))}else if(De==="Cascader"){var Vn=Ze,_n=pe;le=(0,I.jsx)(he.Z,(0,o.Z)({placeholder:"\u8BF7\u9009\u62E9"+ke},_n,Vn,{style:(0,o.Z)({},ue,He)}))}else if(De==="DatePicker"){var Gn=Ze,Mn=pe;le=(0,I.jsx)(Ae.default,(0,o.Z)({placeholder:"\u8BF7\u9009\u62E9"+ke},Mn,Gn,{style:(0,o.Z)({width:"100%"},ue,He)}))}else if(De==="Rate"){var wn=Ze,Qn=pe;le=(0,I.jsx)(Me.Z,(0,o.Z)({},Qn,wn,{style:(0,o.Z)({},ue,He)}))}else if(De==="Slider"){var Jn=Ze,An=pe;le=(0,I.jsx)(xe.Z,(0,o.Z)({},An,Jn,{style:(0,o.Z)({},ue,He)}))}else if(De==="TreeSelect"){var Fn=Ze,Ln=pe;le=(0,I.jsx)(Ue.Z,(0,o.Z)({placeholder:"\u8BF7\u9009\u62E9"+ke},Ln,Fn,{style:(0,o.Z)({},ue,He)}))}else if(De==="Select"){var jn=Ze,Xn=pe;le=(0,I.jsx)(qe.default,(0,o.Z)({placeholder:"\u8BF7\u9009\u62E9"+ke},Xn,jn,{style:(0,o.Z)({},ue,He)}))}else if(De==="Checkbox"){var Yn=Ze,kn=pe;le=(0,I.jsx)(de.Z.Group,(0,o.Z)({},kn,Yn,{style:(0,o.Z)({},ue,He)}))}else if(De==="Mentions"){var qn=Ze,et=pe;le=(0,I.jsx)(Ee.Z,(0,o.Z)({placeholder:"\u8BF7\u8F93\u5165"+ke},et,qn,{style:(0,o.Z)({},ue,He)}))}else if(De==="Radio"){var nt=Ze,tt=pe;le=(0,I.jsx)(J.ZP.Group,(0,o.Z)({},tt,nt,{style:(0,o.Z)({},ue,He)}))}else if(De==="Switch"){var at=Ze,rt=pe;le=(0,I.jsx)(H.Z,(0,o.Z)({},rt,at,{style:(0,o.Z)({},ue,He)}))}else if(De==="TimePicker"){var lt=Ze,ot=pe;le=(0,I.jsx)(be.Z,(0,o.Z)({placeholder:"\u8BF7\u9009\u62E9"+ke},ot,lt,{style:(0,o.Z)({width:"100%"},ue,He)}))}else if(De==="Upload"){var st=Ze,dt=pe;le=(0,I.jsx)(Z.Z,(0,o.Z)({},dt,st,{style:(0,o.Z)({},ue,He)}))}else if(De==="RangePicker"){var ut=Ze,it=pe;le=(0,I.jsx)(Ae.default.RangePicker,(0,o.Z)({},it,ut,{style:(0,o.Z)({width:"100%"},ue,He)}))}else De==="Custom"&&(le=Tn);if(Rn){var mt=le,ct=un;return(0,I.jsx)(K.Z,(0,o.Z)({span:6},S||{},Pn||{},{style:(0,o.Z)({},xn,{height:"auto",overflow:"auto"},(S||{}).style||{},(Pn||{}).style||{}),children:(0,I.jsx)(_.Z.List,(0,o.Z)({},gn,{name:ct,children:mt}),mn)}),mn)}ln&&Object.keys(ln).length&&Be&&ln[nn(un,vn)]&&(le=(0,I.jsx)(Le,{children:le},mn));var Bn={};return _e?Bn.shouldUpdate=_e:!_e&&rn?Bn.dependencies=rn:!_e&&!rn&&typeof le=="function"&&(Bn.dependencies=[un]),le=(0,I.jsx)(K.Z,(0,o.Z)({span:6},S||{},Pn||{},{style:(0,o.Z)({},xn,(S||{}).style||{},(Pn||{}).style||{}),children:(0,I.jsx)(_.Z.Item,(0,o.Z)({},Bn,en,{name:un,label:ke,rules:En,style:(0,o.Z)({marginBottom:8},ge,ie),children:le}))}),mn),On&&un?(0,I.jsx)(Ie,{name:un,formName:vn,children:le},mn):le})},tn=function(t){var p=t.onRest,F=t.setExpand,S=t.expand,q=t.displayPre,ge=t.searchBtnItem,Te=ge===void 0?{}:ge,ue=t.searchBtnProps,je=ue===void 0?{}:ue,pe=t.searchBtnRestProps,ln=pe===void 0?{}:pe,vn=t.itemStyle,In=vn===void 0?{}:vn,cn=Te||{},fn=cn.style,Xe=fn===void 0?{}:fn;return(0,I.jsxs)(_.Z.Item,(0,o.Z)({label:" "},Te,{style:(0,o.Z)({marginBottom:8},In,Xe),children:[(0,I.jsx)(L.ZP,(0,o.Z)({type:"primary",htmlType:"submit"},je,{children:"\u67E5\u8BE2"})),(0,I.jsx)(L.ZP,(0,o.Z)({style:{margin:"0 8px"},onClick:p},ln,{children:"\u91CD\u7F6E"})),!!q&&(0,I.jsx)("a",{style:{fontSize:12},onClick:function(){return F(!S)},children:S?(0,I.jsx)(R.Fragment,{children:(0,I.jsx)(X.Z,{})}):(0,I.jsx)(R.Fragment,{children:(0,I.jsx)(v.Z,{})})})]}))},dn=e(94184),on=e.n(dn),sn=["config","isSearch","displayPre","searchBtnItem","searchBtnProps","searchBtnRestProps","onRest","rowProps","colProps","children","className","itemStyle","attrStyle","attrProps","watchList","formHide","initialHide","form","subscribe","layout","isFloat","isSetHeight"],an=function(t,p){var F=t.config,S=F===void 0?[]:F,q=t.isSearch,ge=t.displayPre,Te=t.searchBtnItem,ue=Te===void 0?{}:Te,je=t.searchBtnProps,pe=je===void 0?{}:je,ln=t.searchBtnRestProps,vn=ln===void 0?{}:ln,In=t.onRest,cn=In===void 0?function(){}:In,fn=t.rowProps,Xe=fn===void 0?{}:fn,mn=t.colProps,De=mn===void 0?{}:mn,ke=t.children,un=t.className,gn=t.itemStyle,Ze=gn===void 0?{}:gn,En=t.attrStyle,Tn=En===void 0?{}:En,Rn=t.attrProps,On=Rn===void 0?{}:Rn,yn=t.watchList,Pn=t.formHide,xn=t.initialHide,hn=t.form,ye=t.subscribe,ie=t.layout,Pe=ie===void 0?"horizontal":ie,Be=t.isFloat,_e=t.isSetHeight,rn=(0,c.Z)(t,sn),en=R.useRef(),bn=(0,R.useState)(!1),Sn=r()(bn,2),He=Sn[0],le=Sn[1],Dn=(0,R.useState)(!1),Zn=r()(Dn,2),$n=Zn[0],Nn=Zn[1],Un=function(){var Fn={colProps:De,itemStyle:Ze,attrStyle:Tn,attrProps:On,watchList:yn,name:t.name,layout:Pe,isFloat:Be,isSetHeight:_e};if(q&&ge&&!He){if(ge>S.length){var Ln=ge-S.length,jn=R.Children.toArray(ke);if(Ln>jn.length)return(0,I.jsxs)(R.Fragment,{children:[Re(S,Fn),jn]});if(Ln<=jn.length){var Xn=jn.slice(0,Ln);return(0,I.jsxs)(R.Fragment,{children:[Re(S,Fn),Xn]})}return Re(S,Fn)}var Yn=S.slice(0,ge);return Re(Yn,Fn)}return(0,I.jsxs)(R.Fragment,{children:[Re(S,Fn),ke]})},Wn=on()("carefree-form",un);R.useEffect(function(){var An;return clearTimeout(An),An=setTimeout(function(){Nn(!0)},300),function(){return clearTimeout(An)}},[]);var Hn=_.Z.useForm(hn),zn=r()(Hn,1),Vn=zn[0],_n=$e(Pn),Gn=r()(_n,1),Mn=Gn[0];R.useMemo(function(){return Mn.setInitialValues(xn||{},!0)},[]);var wn=u(ye),Qn=r()(wn,1),Jn=Qn[0];return b({name:t.name,form:Vn,subscribe:Jn,hide:Mn}),R.useImperativeHandle(p,function(){return en.current}),(0,I.jsx)(O.Provider,{value:{isFloat:Be,isSetHeight:_e,layout:Pe},children:(0,I.jsx)(a.Provider,{value:Mn,children:(0,I.jsx)(B.Provider,{value:{firstMont:$n,watchList:yn||{},form:Vn,itemRefHook:en.current},children:(0,I.jsx)(_.Z,(0,o.Z)({},rn,{form:Vn,layout:Pe,className:Wn,ref:en,children:(0,I.jsxs)(ee.Z,(0,o.Z)({gutter:24},Xe,{style:(0,o.Z)({},Be?{display:"block",height:"auto",overflow:"hidden"}:{},(Xe||{}).style||{}),children:[Un(),q&&(0,I.jsx)(K.Z,(0,o.Z)({span:6},De,{style:(0,o.Z)({float:"left",width:"100%",overflow:"hidden"},(De||{}).style||{}),children:(0,I.jsx)(tn,{onRest:cn,expand:He,setExpand:le,displayPre:ge,searchBtnItem:ue,searchBtnProps:pe,searchBtnRestProps:vn,itemStyle:Ze})}))]}))}))})})})},pn=R.forwardRef(an),Ke=pn;Ke.useForm=_.Z.useForm,Ke.Item=_.Z.Item,Ke.ColItem=se,Ke.ColWatchItem=Je,Ke.Cols=w,Ke.List=_.Z.List,Ke.Provider=_.Z.Provider,Ke.ItemWatch=Qe,Ke.useFormContext=P,Ke.useFormWatchList=V,Ke.useChildItemFun=U,Ke.getChildItemFun=C,Ke.useFormItemHide=$e,Ke.HideItem=Ie,Ke.useSubscribe=u,Ke.FormSubscribeProvider=g,Ke.useFormSubscribeProvider=T,Ke.useSubscribeReginsterId=b;var Cn=Ke,Kn=Cn},93251:function(ve,m,e){"use strict";e.r(m),e.d(m,{default:function(){return Y}});var Q=e(9783),r=e.n(Q),o=e(5574),c=e.n(o),R=e(35223),_=e(78200),ee=e(55241),K=e(34041),B=e(57953),P=e(96486),O=e(67294),y=e(95639),x=e(85893),l=["value","width","onClick","mode","labelInValue","ValueField"],s=function(u,g,T,b,D){if(["tags","multiple"].includes(T)&&Array.isArray(g)){var C=g.find(function(U){return b&&U?U[D]===u[D]:U===g});if(C)return!0}else return b&&g?g[D]===u[D]:g===u[D];return!1},a=function(f){var u=f.value,g=f.width,T=f.onClick,b=f.mode,D=f.labelInValue,C=f.ValueField,U=(0,_.Z)(f,l),V=O.useCallback(s,[JSON.stringify(u)]),$=function(W){var me=V(W,u,b,D,C);return{onClick:function(){return T(W,!me)},style:me&&{background:"#e6f7ff"}||{}}};return(0,x.jsx)("div",{className:"fuzzy-query-table",children:(0,x.jsx)(y.Z,(0,R.Z)({rowKey:C,onRow:$,size:"small",pagination:!1,style:{width:g},scroll:{y:300},columns:[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}]},U))})},j=["onChange","labelInValue","columns","request","debounceTimeout","tipWidth","fieldNames"],n=[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}],h=function(u){var g=u.onChange,T=u.labelInValue,b=T===void 0?!0:T,D=u.columns,C=D===void 0?n:D,U=u.request,V=u.debounceTimeout,$=V===void 0?800:V,N=u.tipWidth,W=u.fieldNames,me=(0,_.Z)(u,j),ae=O.useState(0),ne=c()(ae,2),ce=ne[0],Ge=ne[1],we=O.useState(!1),fe=c()(we,2),$e=fe[0],Ne=fe[1],Oe=O.useState(!1),Ve=c()(Oe,2),te=Ve[0],E=Ve[1],i=O.useState([]),I=c()(i,2),G=I[0],Ie=I[1],Ae=O.useRef(!0),A=O.useMemo(function(){return u.fieldNames&&u.fieldNames.value||"value"},[u.fieldNames]),z=O.useMemo(function(){return u.fieldNames&&u.fieldNames.label||"label"},[u.fieldNames]),M=O.useRef(null);O.useLayoutEffect(function(){if(M.current)if(N)Ge(N);else{var J=M.current.offsetWidth;Ge(J-30)}},[]);var he=function(H){var be=H||{},Z=be[A],X=be[z];return r()(r()({},A,Z),z,X)},Me=function(H,be){var Z=he(H);if(b||(Z=H&&Z[A]),["tags","multiple"].includes(u.mode))Array.isArray(u.value)?be?Z=u.value.concat(Z):Z=u.value.filter(function(X){return b&&X?X[A]!==Z[A]:X!==Z}):be?Z=[Z]:Z=[];else{if(E(!1),!be){Z=void 0;return}Ae.current=!1}g&&g(Z,H)},xe=O.useRef(0),Ue=O.useMemo(function(){var J=function(be){if(!Ae.current){Ae.current=!0;return}xe.current+=1;var Z=xe.current;U&&(Ne(!0),U(be).then(function(X){Z===xe.current&&(Ie(X),Ne(!1))}).catch(function(){Ie([]),Ne(!1)}))};return(0,P.debounce)(J,$)},[U,$]),qe=function(){var H=G.map(function(be){var Z=be[A],X=be[z];return r()(r()({},A,Z),z,X)});return H},de=function(){if(Array.isArray(u.value)&&b)return u.value.map(function(X){var v=X[A],L=X[z];return{label:L,value:v}});if(u.value&&!u.mode&&b){var H=u.value,be=H[A],Z=H[z];return{label:Z,value:be}}return u.value},Ee=function(H,be){var Z=H;H&&Array.isArray(H)&&Array.isArray(u.value)&&(b?Z=u.value.filter(function(X){return!!H.find(function(v){return v.value===X[A]})}):Z=u.value.filter(function(X){return!!H.find(function(v){return v===X})})),g&&g(Z,be)};return(0,x.jsx)(ee.Z,{trigger:"click",placement:"bottomLeft",open:te,onOpenChange:function(H){E(H)},content:(0,x.jsx)(a,{columns:C,dataSource:G,value:u.value,width:ce,mode:u.mode,labelInValue:b,onClick:Me,loading:$e,ValueField:A}),children:(0,x.jsx)("div",{ref:M,className:"popover-select-warp",style:{width:"100%"},children:(0,x.jsx)(K.default,(0,R.Z)({allowClear:!0,labelInValue:b,filterOption:!1,style:{width:"100%"},onSearch:Ue,showSearch:!0,fieldNames:W},me,{value:de(),notFoundContent:$e?(0,x.jsx)(B.Z,{size:"small"}):null,onChange:Ee,options:qe(),dropdownStyle:{display:"none"}}))})})},d=h,Y=d},28209:function(ve,m,e){"use strict";e.r(m),e.d(m,{default:function(){return Ve}});var Q=e(5574),r=e.n(Q),o=e(67294),c=e(23777),R=e(29441),_=e(12444),ee=e.n(_),K=e(72004),B=e.n(K),P=e(56217),O=e(72278),y=["search","table"],x=function(){function te(E){var i=this;ee()(this,te),this.store={search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}},this.initialValues={search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}},this.components={},this.getStringToArr=function(A){return A.split("_")},this.getInitValue=function(A){return(0,O.d9)((0,O.U2)(i.initialValues,i.getStringToArr(A)),!1)},this.getValue=function(A){return(0,O.U2)(i.store,i.getStringToArr(A))},this.setValue=function(A,z){return i.store=(0,O.t8)(i.store,i.getStringToArr(A),z),i.store},this.setBatchValue=function(A){return Object.entries(A).forEach(function(z){var M=r()(z,2),he=M[0],Me=M[1];i.store=(0,O.t8)(i.store,i.getStringToArr(he),Me)}),i.store},this.getStore=function(){return i.store},this.registerId=function(A,z){i.components[A]=z},this.unregister=function(A,z){delete i.components[A],A==="search"?i.setValue(A,z||i.initialValues.search||{}):A==="table"?i.setValue(A,z||i.initialValues.table||{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}):i.setValue(A,z||i.initialValues[A])},this.tableLoading=function(A){i.setValue("loading",A),i.updateComponent(["table"])},this.updateComponent=function(A){A.forEach(function(z){i.components[z]()})};var I=E||{},G=I.search,Ie=I.table,Ae=(0,P.Z)(I,y);G&&this.setValue("search",(0,c.Z)({},G)),Ie&&this.setValue("table",(0,c.Z)({},Ie)),Object.entries((0,c.Z)({},Ae)).forEach(function(A){var z=r()(A,2),M=z[0],he=z[1];i.setValue(M,he)}),this.initialValues=(0,O.d9)(E||{},!1)}return B()(te,[{key:"stores",get:function(){return this.store}}]),te}(),l=function(E){var i=E.main,I=E.initialValues,G=o.useRef();return i?G.current=i:G.current=new x(I),[G.current]},s=o.createContext(new x),a=function(){return o.useContext(s)},j=o.createContext({}),n=function(){return o.useContext(j)},h=e(15009),d=e.n(h),Y=e(82862),f=e(38018),u=e(11238),g=["requestType","headers","data","module"],T=function(){var te=(0,Y.Z)(d()().mark(function E(i,I){var G,Ie,Ae,A,z,M,he,Me,xe,Ue;return d()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return G=I.requestType,Ie=I.headers,Ae=I.data,A=I.module,z=(0,P.Z)(I,g),M=(0,c.Z)({},Ie||{}),he=Ae,G==="json"?(M=(0,c.Z)({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},M),typeof he!="string"&&(he=JSON.stringify(he))):G==="form"?(M=(0,c.Z)({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},M),he=typeof he=="string"?he:f.stringify(he)):M=(0,c.Z)({Accept:"application/json"},M),Me=i,A&&(xe=/^\//.test(i),Me="/"+A+(xe?"":"/")+i),de.prev=6,de.next=9,(0,u.ZP)(Me,(0,c.Z)({requestType:G,headers:(0,c.Z)({},M),data:he},z,{getResponse:!0}));case 9:return Ue=de.sent,console.log("\u6DFB\u52A0getResponse\u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u6570\u636E,\u53EF\u4F7F\u7528window.RequestResponse\u83B7\u53D6\u8FD4\u56DEresponse--->",Ue),window.RequestResponse=Ue.response,de.abrupt("return",Ue.data);case 15:throw de.prev=15,de.t0=de.catch(6),de.t0;case 18:case"end":return de.stop()}},E,null,[[6,15]])}));return function(i,I){return te.apply(this,arguments)}}(),b=T,D=function(E,i){return b(E,(0,c.Z)({},i||{},{method:"POST"}))},C=function(E,i){return b(E,(0,c.Z)({},i||{},{method:"GET"}))},U=function(E,i){return b(E,(0,c.Z)({},i||{},{method:"DELETE"}))},V=function(E,i){return b(E,(0,c.Z)({},i||{},{method:"PUT"}))},$=function(E,i){return b(E,(0,c.Z)({},i||{},{method:"PATCH"}))},N=function(E,i){return b(E,(0,c.Z)({},i||{},{method:"HEAD"}))},W=function(E,i){return b(E,(0,c.Z)({},i||{},{method:"OPTIONS"}))},me={POST:D,GET:C,DELETE:U,PUT:V,PATCH:$,HEAD:N,OPTIONS:W},ae=function(){var te=(0,Y.Z)(d()().mark(function E(i){var I,G,Ie,Ae,A,z,M,he,Me,xe,Ue,qe,de,Ee,J,H;return d()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(I=i.Api,G=i.main,Ie=i.tableConfig,Ae=i.apiName,A=G.setBatchValue,z=G.getValue,M=G.tableLoading,he=Ie||{},Me=he.table,xe=I[Ae||"table"]||{},xe.url){Z.next=6;break}return Z.abrupt("return");case 6:if(Z.prev=6,M(!0),A({table_page:(Me||{}).page||1,table_pageSize:(Me||{}).page||20}),Ue=!0,xe.before&&(Ue=xe.before(G)),Ue){Z.next=14;break}return M(!1),Z.abrupt("return");case 14:return qe=(0,c.Z)({page:z("table_page"),pageSize:z("table_pageSize")},z("search")),xe.requestBefore&&(qe=xe.requestBefore(G)),Z.next=18,me[xe.method||"GET"](""+xe.url,(0,c.Z)({},xe.options||{},{module:xe.module,data:qe})).catch(function(X){M(!1)});case 18:de=Z.sent,xe.requestAfter?xe.requestAfter({response:de,main:G}):de&&de.code===200&&(Ee=de.data||{},J=Ee.rows,H=Ee.total,A({table_dataSource:J||[],table_total:H||0})),M(!1),Z.next=26;break;case 23:Z.prev=23,Z.t0=Z.catch(6),M(!1);case 26:case"end":return Z.stop()}},E,null,[[6,23]])}));return function(i){return te.apply(this,arguments)}}(),ne=e(4393),ce=e(85893),Ge=function(){var E=n(),i=E.search,I=E.tableConfig,G=E.searchCardProps,Ie=E.searchHead,Ae=n(),A=Ae.Api,z=A===void 0?{}:A,M=a(),he=M.setValue,Me=M.registerId,xe=M.unregister,Ue=M.getInitValue,qe=o.useState(""),de=r()(qe,2),Ee=de[0],J=de[1],H=i||{},be=H.isSearch,Z=H.initialValues,X=H.form,v=H.apiName,L=R.default.useForm(X),k=r()(L,1),Se=k[0],w=function(){J(new Date().getTime().toString())},oe=function(Ce,We){he("search",We)};o.useEffect(function(){Z&&he("search",Z||{})},[]),Me("search",w),o.useEffect(function(){return function(){return xe("search",Z)}},[]),o.useEffect(function(){Z&&(Object.entries(Z).forEach(function(Fe){var Ce=r()(Fe,2),We=Ce[0],ze=Ce[1];he("search_"+We,ze)}),w())},[]);var se=o.useMemo(function(){return"bordered"in(G||{})?G.bordered:!!Ie},[!!Ie,(G||{}).bordered]);return(0,ce.jsx)(ne.Z,(0,c.Z)({title:Ie&&Ie(M)},G||{},{style:(0,c.Z)({marginBottom:10},(G||{}).style||{}),bodyStyle:(0,c.Z)({padding:se?12:0},(G||{}).bodyStyle||{}),bordered:se,children:(0,ce.jsx)(R.default,(0,c.Z)({form:Se,initialValues:Z||Ue("search")||{}},be?{onFinish:function(Ce){i&&i.onFinish?i.onFinish(Ce,M):ae({main:M,tableConfig:I,Api:z,apiName:v})},onRest:function(){i&&i.onRest?i.onRest():(he("search",Z||{}),Se.resetFields())}}:{},i,{onValuesChange:oe}))}))},we=Ge,fe=e(95639),$e=function(){var E=n(),i=E.tableConfig,I=E.columns,G=E.tableCardProps,Ie=E.Api,Ae=Ie===void 0?{}:Ie,A=E.tableHead,z=a(),M=z.getValue,he=z.setValue,Me=z.setBatchValue,xe=z.updateComponent,Ue=z.registerId,qe=z.unregister,de=o.useState(""),Ee=r()(de,2),J=Ee[0],H=Ee[1],be=M("table"),Z=be.page,X=be.pageSize,v=be.total,L=be.dataSource,k=be.selectRowKeys,Se=i||{},w=Se.pagination,oe=Se.rowSelection,se=Se.table,Fe=Se.apiName,Ce=function(){H(new Date().getTime().toString())},We=function(Qe,Je){Me({table_page:Qe,table_pageSize:Je}),i&&i.pagination&&i.pagination.onChange?i.pagination.onChange(Qe,Je,z):ae({main:z,tableConfig:i,Api:Ae,apiName:Fe})},ze=o.useMemo(function(){return!!(i&&"pagination"in i&&w===!1)},[JSON.stringify(w)]);Ue("table",Ce),o.useEffect(function(){return function(){return qe("table",se)}},[]),o.useEffect(function(){se&&(Object.entries(se).forEach(function(Le){var Qe=r()(Le,2),Je=Qe[0],Re=Qe[1];he("table_"+Je,Re)}),Ce())},[]);var Ye=o.useMemo(function(){return typeof I=="function"?I(z):I||[]},[I]),nn=o.useMemo(function(){return"bordered"in(G||{})?G.bordered:!!A},[!!A,(G||{}).bordered]);return(0,ce.jsx)(ne.Z,(0,c.Z)({},G||{},{title:A&&A(z),bodyStyle:(0,c.Z)({padding:0},(G||{}).bodyStyle||{}),bordered:nn,children:(0,ce.jsx)(fe.Z,(0,c.Z)({rowKey:"id",size:"small",bordered:!0,loading:M("loading")},i,oe?{rowSelection:(0,c.Z)({},oe,{selectedRowKeys:k,onChange:function(Qe,Je){Me({"table.selectRowKeys":Qe,"table.selectRows":Je}),xe(["table"])}})}:{},{dataSource:L,columns:Ye,pagination:!ze&&(0,c.Z)({},w||{},{pageSize:X,total:v,current:Z,onChange:We})}))}))},Ne=$e,Oe=function(E){var i=l({main:E.main,initialValues:E.initialValues}),I=r()(i,1),G=I[0];return(0,ce.jsx)(s.Provider,{value:G,children:(0,ce.jsxs)(j.Provider,{value:E,children:[(0,ce.jsx)(we,{}),(0,ce.jsx)(Ne,{})]})})};Oe.useMain=l;var Ve=Oe},42478:function(ve,m,e){"use strict";e.r(m),e.d(m,{default:function(){return U}});var Q=e(15009),r=e.n(Q),o=e(9783),c=e.n(o),R=e(5574),_=e.n(R),ee=e(79895),K=e(26383),B=e(67294),P=e(71577),O=e(90814),y=e(96842),x=e(246),l=e(6171),s=e(95639),a=e(85893),j=function(V){var $=V.onPageChange,N=V.onSelectedChange,W=V.selectedKeys,me=V.dataList,ae=V.page,ne=V.pageSize,ce=V.total,Ge=V.loading,we=V.rowKey,fe=V.columns;return(0,a.jsx)(s.Z,{loading:Ge,size:"small",bordered:!0,columns:fe||[],rowKey:we||"id",dataSource:me,rowSelection:{selectedRowKeys:W,onChange:N},pagination:{current:ae,pageSize:ne,total:ce,onChange:$}})},n=void 0,h=function(V){var $=V.leftTable,N=V.rightTable,W=V.handleOperation;return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,a.jsx)("div",{style:{flex:1},children:(0,a.jsx)(j,(0,ee.Z)({},$))}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:80},children:[(0,a.jsx)(P.ZP,{style:{margin:"10px 0px"},onClick:W.bind(n,"add"),type:"primary",children:(0,a.jsx)(O.Z,{})}),(0,a.jsx)(P.ZP,{style:{margin:"10px 0px"},onClick:W.bind(n,"allAdd"),type:"primary",children:(0,a.jsx)(y.Z,{})}),(0,a.jsx)(P.ZP,{style:{margin:"10px 0px"},onClick:W.bind(n,"allDelete"),type:"primary",children:(0,a.jsx)(x.Z,{})}),(0,a.jsx)(P.ZP,{style:{margin:"10px 0px"},onClick:W.bind(n,"delete"),type:"primary",children:(0,a.jsx)(l.Z,{})})]}),(0,a.jsx)("div",{style:{flex:1},children:(0,a.jsx)(j,(0,ee.Z)({},N))})]})},d=e(29441),Y=function(V){var $=V.leftSearchConfig,N=V.rightSearchConfig,W=V.onSearch,me=V.onValuesChange;return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,a.jsx)("div",{style:{flex:1},children:(0,a.jsx)(d.default,(0,ee.Z)({layout:"vertical",isSearch:!0,colProps:{span:12}},$,{onFinish:function(){return W("left")},onRest:function(){var ne;(ne=$.form)==null||ne.resetFields()},onValuesChange:function(ne,ce){return me(ne,ce,"left")}}))}),(0,a.jsx)("div",{style:{width:80}}),(0,a.jsx)("div",{style:{flex:1},children:(0,a.jsx)(d.default,(0,ee.Z)({isSearch:!0,layout:"vertical",colProps:{span:12}},N,{onRest:function(){var ne;(ne=N.form)==null||ne.resetFields()},onFinish:function(){return W("right")},onValuesChange:function(ne,ce){return me(ne,ce,"right")}}))})]})},f=e(11238),u=e(12444),g=e.n(u),T=e(72004),b=e.n(T),D=function(){function V($,N){var W=this;g()(this,V),this.store={left:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]},right:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]}},this.forceUpdate=void 0,this.setValue=function(me,ae){W.store=(0,ee.Z)({},W.store,c()({},ae,(0,ee.Z)({},W.store[ae],me))),W.forceUpdate&&W.forceUpdate()},N&&Object.keys(N||{}).length&&Object.entries(N).forEach(function(me){var ae=_()(me,2),ne=ae[0],ce=ae[1];W.setValue(ce,ne)}),this.forceUpdate=$}return b()(V,[{key:"stores",get:function(){return this.store}}]),V}(),C=function($,N){var W=$.Api,me=$.leftSearchConfig,ae=$.rightSearchConfig,ne=$.initValue,ce=$.rowKey,Ge=$.columns,we=B.useState({left:!1,right:!1}),fe=_()(we,2),$e=fe[0],Ne=fe[1],Oe=d.default.useForm($.leftUseForm),Ve=_()(Oe,1),te=Ve[0],E=d.default.useForm($.rightUseForm),i=_()(E,1),I=i[0],G=B.useState(""),Ie=_()(G,2),Ae=Ie[0],A=Ie[1],z=function(){A(new Date().getTime().toString())},M=B.useMemo(function(){return new D(z,ne)},[]),he=function(){var de=(0,K.Z)(r()().mark(function Ee(J){var H,be,Z,X,v,L,k,Se;return r()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(H=W[J],Ne(function(se){return(0,ee.Z)({},se,c()({},J,!0))}),oe.prev=2,be=H.url,Z=H.options,X=H.before,v=H.after,L=X(M.stores.left,J),L!==!1){oe.next=8;break}return Ne(function(se){return(0,ee.Z)({},se,c()({},J,!1))}),oe.abrupt("return");case 8:return oe.next=10,(0,f.ZP)(be,(0,ee.Z)({},Z||{},{data:L})).catch(function(se){Ne(function(Fe){return(0,ee.Z)({},Fe,c()({},J,!1))})});case 10:k=oe.sent,Se=v(k,J),Se!==!1&&M.setValue(Se,J),Ne(function(se){return(0,ee.Z)({},se,c()({},J,!1))}),oe.next=19;break;case 16:oe.prev=16,oe.t0=oe.catch(2),Ne(function(se){return(0,ee.Z)({},se,c()({},J,!1))});case 19:case"end":return oe.stop()}},Ee,null,[[2,16]])}));return function(J){return de.apply(this,arguments)}}(),Me=function(Ee,J,H){M.setValue({selectedKeys:Ee,selectedRows:J},H)},xe=function(Ee,J,H){M.setValue({page:Ee,pageSize:J,selectedKeys:[],selectedRows:[]},H),he(H)},Ue=function(){var de=(0,K.Z)(r()().mark(function Ee(J){var H,be,Z,X,v,L,k,Se;return r()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(H=W[J],be=H.url,Z=H.options,X=H.before,v=H.after,L=X(M.stores[J],J),L!==!1){oe.next=5;break}return oe.abrupt("return");case 5:return oe.next=7,(0,f.ZP)(be,(0,ee.Z)({},Z||{},{data:L}));case 7:k=oe.sent,Se=v(k,J),Se!==!1&&(xe(1,M.stores.left.pageSize,"left"),xe(1,M.stores.right.pageSize,"right"));case 10:case"end":return oe.stop()}},Ee)}));return function(J){return de.apply(this,arguments)}}(),qe=function(Ee,J,H){M.setValue({search:J},H)};return B.useImperativeHandle(N,function(){return{handleOperation:Ue,onPageChange:xe,onSelectedChange:Me,onSearch:he,store:M,forceUpdate:z,leftUseForm:te,rightUseForm:I}}),(0,a.jsxs)("div",{children:[(0,a.jsx)(Y,{onValuesChange:qe,leftSearchConfig:(0,ee.Z)({},me||{},{initialValues:ne&&ne.left&&ne.left.search||{},form:te}),rightSearchConfig:(0,ee.Z)({},ae||{},{initialValues:ne&&ne.right&&ne.right.search||{},form:I}),onSearch:he}),(0,a.jsx)(h,{handleOperation:Ue,leftTable:{rowKey:ce,columns:Ge,page:M.stores.left.page,pageSize:M.stores.left.pageSize,total:M.stores.left.total,dataList:M.stores.left.dataList,selectedKeys:M.stores.left.selectedKeys,loading:$e.left,onSelectedChange:function(Ee,J){return Me(Ee,J,"left")},onPageChange:function(Ee,J){return xe(Ee,J||10,"left")}},rightTable:{rowKey:ce,columns:Ge,page:M.stores.right.page,pageSize:M.stores.right.pageSize,total:M.stores.right.total,dataList:M.stores.right.dataList,selectedKeys:M.stores.right.selectedKeys,loading:$e.right,onSelectedChange:function(Ee,J){return Me(Ee,J,"right")},onPageChange:function(Ee,J){return xe(Ee,J||10,"right")}}})]})},U=B.forwardRef(C)},12755:function(ve,m,e){"use strict";e.r(m),e.d(m,{default:function(){return Y}});var Q=e(9783),r=e.n(Q),o=e(5574),c=e.n(o),R=e(33952),_=e(67294),ee=e(71577),K=e(90814),B=e(96842),P=e(246),O=e(6171),y=e(85893),x=void 0,l=function(f){var u=f.handleOperation;return(0,y.jsxs)(_.Fragment,{children:[(0,y.jsx)(ee.ZP,{style:{marginTop:35,width:50},onClick:u.bind(x,"add"),type:"primary",children:(0,y.jsx)(K.Z,{})}),(0,y.jsx)(ee.ZP,{style:{marginTop:35,width:50},onClick:u.bind(x,"allAdd"),type:"primary",children:(0,y.jsx)(B.Z,{})}),(0,y.jsx)(ee.ZP,{style:{marginTop:35,width:50},onClick:u.bind(x,"allDelete"),type:"primary",children:(0,y.jsx)(P.Z,{})}),(0,y.jsx)(ee.ZP,{style:{marginTop:35,width:50},onClick:u.bind(x,"delete"),type:"primary",children:(0,y.jsx)(O.Z,{})})]})},s=e(65996),a=e(95639),j=["rowSelection","handleSelected","selectedRowKeys","pagination","handlePagination"],n=function(f){var u=f.rowSelection,g=f.handleSelected,T=f.selectedRowKeys,b=f.pagination,D=f.handlePagination,C=(0,s.Z)(f,j),U={pagination:{pageSize:10}};return Reflect.has(f,"pagination")&&(typeof b!="boolean"?U.pagination=(0,R.Z)({},b,{onChange:D}):U.pagination=b),(0,y.jsx)(a.Z,(0,R.Z)({size:"small"},C,U,{rowSelection:(0,R.Z)({},u||{},{selectedRowKeys:T,onChange:g})}))},h=function(u,g,T){var b=[],D=[],C=[],U=[],V=void 0;if(u==="delete"){b=g.rightList.filter(function(W){return!g.rightSelected.selectedRowKeys.includes(W[T])});var $=g.rightList.filter(function(W){var me=g.rightSelected.selectedRowKeys.includes(W[T]),ae=g.leftList.find(function(ne){return ne[T]===W[T]});return!!(me&&!ae)});D=$.concat(g.leftList),C=g.rightSelected.selectedRowKeys,U=g.rightSelected.selectedRows,V="right"}else if(u==="allDelete")b=[],g.rightList.forEach(function(W){var me=g.leftList.find(function(ae){return ae[T]===W[T]});me||D.push(W)}),D=D.concat(g.leftList),V="right";else if(u==="add"){var N=g.leftList.filter(function(W){var me=g.leftSelected.selectedRowKeys.includes(W[T]),ae=g.rightList.find(function(ne){return ne[T]===W[T]});return!!(me&&!ae)});b=N.concat(g.rightList),D=g.leftList.filter(function(W){return!g.leftSelected.selectedRowKeys.includes(W[T])}),C=g.leftSelected.selectedRowKeys,U=g.leftSelected.selectedRows,V="left"}else u==="allAdd"&&(g.leftList.forEach(function(W){var me=g.rightList.find(function(ae){return ae[T]===W[T]});me||b.push(W)}),D=[],b=b.concat(g.rightList),V="left");return{leftList:D,rightList:b,selectedKeys:C,selectedRows:U,selectedType:V}},d=function(u,g){var T=u.leftSelected,b=u.rightSelected,D=u.columns,C=u.rowKey,U=u.leftConfig,V=u.rightConfig,$=u.pagination,N=u.leftDataSource,W=u.rightDataSource,me=u.isQuote,ae=me===void 0?!0:me,ne=_.useState({leftSelected:{selectedRowKeys:[],selectedRows:[]},rightSelected:{selectedRowKeys:[],selectedRows:[]},leftPagination:{page:1,pageSize:10},rightPagination:{page:1,pageSize:10},leftList:N||[],rightList:W||[]}),ce=c()(ne,2),Ge=ce[0],we=ce[1],fe=Ge;T&&T.selectedRowKeys&&(fe.leftSelected=T),b&&b.selectedRowKeys&&(fe.rightSelected=T),N&&!ae&&(fe.leftList=N),W&&!ae&&(fe.rightList=W);var $e=function(E){var i={pageSize:10};return Reflect.has(u,"pagination")&&(i=$),Reflect.has(E||{},"pagination")&&(typeof E.pagination=="boolean"||typeof $=="boolean"?i=E.pagination:i=(0,R.Z)({},$||{},E.pagination||{})),i},Ne=function(E,i,I){Reflect.has(u,"handleSelected")&&u.handleSelected(E,i,I),we(function(G){return(0,R.Z)({},G,r()({},I+"Selected",{selectedRowKeys:E,selectedRows:i}))})},Oe=function(E,i,I){Reflect.has(u,"handlePagination")&&u.handlePagination(E,i,I),we(function(G){return(0,R.Z)({},G,r()({},I+"Pagination",{page:E,pageSize:i}))}),Ne([],[],I)},Ve=function(E){var i=h(E,fe,C),I=i.leftList,G=i.rightList,Ie=i.selectedKeys,Ae=i.selectedRows,A=i.selectedType;Reflect.has(u,"handleOperation")&&u.handleOperation(I,G,Ie,Ae,E),we(function(z){return(0,R.Z)({},z,r()(r()(r()({},A+"Selected",{selectedRowKeys:[],selectedRows:[]}),"rightList",G),"leftList",I))})};return _.useImperativeHandle(g,function(){return{store:fe,setStore:we,handleSelected:Ne,handlePagination:Oe,handleOperation:Ve}}),(0,y.jsxs)("div",{className:"carefree-antd-transfer",children:[(0,y.jsx)(n,(0,R.Z)({},U||{},{pagination:$e(U),dataSource:fe.leftList,className:"between-table",selectedRowKeys:Ge.leftSelected.selectedRowKeys,handlePagination:function(E,i){return Oe(E,i,"left")},handleSelected:function(E,i){return Ne(E,i,"left")},columns:D,rowKey:C})),(0,y.jsx)("div",{className:"middle-btn",children:(0,y.jsx)(l,{handleOperation:Ve})}),(0,y.jsx)(n,(0,R.Z)({},V||{},{pagination:$e(V),dataSource:fe.rightList,className:"between-table",selectedRowKeys:Ge.rightSelected.selectedRowKeys,handlePagination:function(E,i){return Oe(E,i,"right")},handleSelected:function(E,i){return Ne(E,i,"right")},columns:D,rowKey:C}))]})},Y=_.forwardRef(d)},70299:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return a}});var Q=e(15009),r=e.n(Q),o=e(97857),c=e.n(o),R=e(13769),_=e.n(R),ee=e(5574),K=e.n(ee),B=e(49677),P=e.n(B),O=e(99289),y=e.n(O),x=e(67294),l=e(76070),s=["key","name","fieldKey"],a={"packages-edit-table-src-demo-0":{component:x.memo(x.lazy(y()(r()().mark(function j(){var n,h,d,Y,f,u,g,T,b,D,C,U,V;return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,1052));case 2:return n=N.sent,h=n.PlusOutlined,N.next=6,Promise.resolve().then(e.bind(e,67925));case 6:return d=N.sent,Y=d.Button,f=d.Form,u=d.Input,g=d.InputNumber,N.t0=P(),N.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return N.t1=N.sent,(0,N.t0)(N.t1),N.next=18,Promise.resolve().then(e.bind(e,8462));case 18:return T=N.sent,b=T.default,N.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(D=N.sent,C=D.default,U=[],V=0;V<5;V++)U.push({key:V.toString(),name:"Edrward ".concat(V),age:32});return N.abrupt("return",{default:function(){var me=C.useState(U),ae=K()(me,2),ne=ae[0],ce=ae[1],Ge=C.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),we=K()(Ge,2),fe=we[0],$e=we[1],Ne=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(Ve){return C.createElement(u,Ve)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(Ve){return Ve&&(Ve||[]).filter(function(te){return te}).map(function(te){return te.first}).join(",")},inputNode:function(Ve,te,E){var i=te.add,I=te.remove,G=E.errors;return C.createElement(C.Fragment,null,Ve.map(function(Ie,Ae){var A=Ie.key,z=Ie.name,M=Ie.fieldKey,he=_()(Ie,s);return C.createElement(b.Item,c()(c()({key:A},he),{},{name:[z,"first"],fieldKey:[M,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),C.createElement(u,{placeholder:"First Name"}))}),C.createElement(f.Item,null,C.createElement(Y,{type:"dashed",onClick:function(){return i()},icon:C.createElement(h,null)},"Add field"),C.createElement(f.ErrorList,{errors:G})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:C.createElement(g,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",ne),C.createElement("div",null,C.createElement(Y,{onClick:function(){$e(c()(c()({},fe),{},{isOptDelete:!fe.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),C.createElement(Y,{onClick:function(){$e(c()(c()({},fe),{},{optDeleteEditingDisabled:!fe.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),C.createElement(Y,{onClick:function(){$e(c()(c()({},fe),{},{isAdd:!fe.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),C.createElement(Y,{onClick:function(){$e(c()(c()({},fe),{},{multiple:!fe.multiple}))}},"\u591A\u884C\u7F16\u8F91"),C.createElement(Y,{onClick:function(){$e(c()(c()({},fe),{},{optIsFirst:!fe.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),C.createElement(Y,{onClick:function(){$e(c()(c()({},fe),{},{isOpt:!fe.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),C.createElement(b,c()({initValue:{address:2193},onValuesChange:function(Ve,te,E,i,I){ce(Ve)},rowKey:"key",optIsFirst:!0,dataSource:ne,columns:Ne,onSave:function(Ve){return ce(Ve)},isAdd:!0},fe)))}});case 27:case"end":return N.stop()}},j)})))),asset:{type:"BLOCK",id:"packages-edit-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/reset.css';
import EditTable from 'carefree-antd-edit-table';
import React from 'react';
const originData = [];

for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    name: \`Edrward \${i}\`,
    age: 32,
    // address: \`London Park no. \${i}\`,
  });
}

export default () => {
  const [data, setData] = React.useState(originData);
  const [tableProps, setTableProps] = React.useState({
    isAdd: true,
    isOpt: true,
    optIsFirst: true,
    optDeleteEditingDisabled: false,
  });
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
      type: 'Custom',
      inputNode: (edit) => {
        return <Input {...edit} />;
      },
    },
    {
      title: 'isList',
      dataIndex: 'list',
      width: '15%',
      editable: true,
      type: 'Custom',
      isList: true,
      render: (text) => {
        return (
          text &&
          (text || [])
            .filter((it) => it)
            .map((ite) => ite.first)
            .join(',')
        );
      },
      inputNode: (fields, { add, remove }, { errors }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }, index) => (
            <EditTable.Item
              key={key}
              {...restField}
              name={[name, 'first']}
              fieldKey={[fieldKey, 'first']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'Missing first name',
                },
              ]}
            >
              <Input placeholder="First Name" />
            </EditTable.Item>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
              Add field
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      ),
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
      type: 'Custom',
      rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
      inputNode: <InputNumber />,
    },
    {
      title: 'age1',
      dataIndex: 'age1',
      width: '15%',
      editable: true,
      type: 'AutoComplete',
      attr: {
        style: { width: '100%' },
        options: [
          { label: '12', value: '12' },
          { label: '1233', value: '1233' },
        ],
      },
      rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
    },
    {
      title: 'age2',
      dataIndex: 'age2',
      width: '15%',
      editable: true,
      type: 'Select',
      attr: {
        style: { width: '100%' },
        showSearch: true,
        options: [
          { label: 12, value: 12 },
          { label: 14, value: 14 },
        ],
      },
      rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '20%',
      editable: true,
      type: 'Input',
    },
  ];

  console.log('data--->', data);

  return (
    <div>
      <Button
        onClick={() => {
          setTableProps({
            ...tableProps,
            isOptDelete: !tableProps.isOptDelete,
          });
        }}
      >
        \u5220\u9664\u6309\u94AE
      </Button>
      <Button
        onClick={() => {
          setTableProps({
            ...tableProps,
            optDeleteEditingDisabled: !tableProps.optDeleteEditingDisabled,
          });
        }}
      >
        \u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isAdd: !tableProps.isAdd });
        }}
      >
        \u65B0\u589E\u6309\u94AE
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, multiple: !tableProps.multiple });
        }}
      >
        \u591A\u884C\u7F16\u8F91
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, optIsFirst: !tableProps.optIsFirst });
        }}
      >
        \u64CD\u4F5C\u5217\u524D\u6216\u540E
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isOpt: !tableProps.isOpt });
        }}
      >
        \u65E0\u64CD\u4F5C\u5217
      </Button>
      <EditTable
        initValue={{ address: 2193 }}
        onValuesChange={(list, value, allValue, id, form) => {
          setData(list);
          // console.log(list, value, allValue, id, form)
        }}
        rowKey="key"
        optIsFirst={true}
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        isAdd={true}
        {...tableProps}
      />
    </div>
  );
};`},"@ant-design/icons":{type:"NPM",value:"5.3.7"},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":e(1052),antd:e(67925),"antd/dist/reset.css":e(79398),"carefree-antd-edit-table":e(8462),react:e(67294)},renderOpts:{compile:function(){var j=y()(r()().mark(function h(){var d,Y=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(d=u.sent).default.apply(d,Y));case 3:case"end":return u.stop()}},h)}));function n(){return j.apply(this,arguments)}return n}()}}}},56395:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return O}});var Q=e(15009),r=e.n(Q),o=e(5574),c=e.n(o),R=e(49677),_=e.n(R),ee=e(99289),K=e.n(ee),B=e(67294),P=e(44097),O={"packages-form-src-md-hide-demo-0":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0];return a.createElement("div",null,a.createElement(l,{form:f,initialHide:{name1:!0},onValuesChange:function(g,T){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",T)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  return (
    <div>
      <SimpleForm
        form={form}
        initialHide={{ name1: true }}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            isHide: true,
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}},"packages-form-src-md-hide-demo-1":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0];return a.createElement("div",null,a.createElement(l,{form:f,initialHide:{name1:!0},onValuesChange:function(g,T){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",T)},watchList:{namea:function(g,T,b,D){g==="12"?D.updateValue("name1",!1):D.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  return (
    <div>
      <SimpleForm
        form={form}
        initialHide={{ name1: true }}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        watchList={{
          namea: (value, allValue, forms, hide) => {
            if (value === '12') {
              hide.updateValue('name1', false);
            } else {
              hide.updateValue('name1', true);
            }
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u8BF7\u8F93\u5165\`12\`\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            isHide: true,
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}},"packages-form-src-md-hide-demo-2":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0],u=l.useFormItemHide(),g=c()(u,1),T=g[0];return a.useMemo(function(){return T.setInitialValues({name1:!0},!0)},[]),a.createElement("div",null,a.createElement(l,{formHide:T,form:f,onValuesChange:function(D,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  const [hide] = SimpleForm.useFormItemHide();
  // \u53EA\u7528\u7EC4\u4EF6\u52A0\u8F7D\u7684\u65F6\u5019 \u8FD0\u884C\u4E00\u6B21
  React.useMemo(() => hide.setInitialValues({ name1: true }, true), []);
  return (
    <div>
      <SimpleForm
        formHide={hide}
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            isHide: true,
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}}}},13305:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return x}});var Q=e(97857),r=e.n(Q),o=e(15009),c=e.n(o),R=e(5574),_=e.n(R),ee=e(49677),K=e.n(ee),B=e(99289),P=e.n(B),O=e(67294),y=e(29434),x={"packages-form-src-md-start-demo-0":{component:O.memo(O.lazy(P()(c()().mark(function l(){var s,a,j,n,h,d;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,67925));case 2:return s=f.sent,a=s.Button,f.t0=K(),f.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return f.t1=f.sent,(0,f.t0)(f.t1),f.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return j=f.sent,n=j.default,f.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return h=f.sent,d=h.default,f.abrupt("return",{default:function(){var g=n.useForm(),T=_()(g,1),b=T[0],D=function(){b.validateFields().then(function(U){console.log(U)})};return d.createElement("div",null,d.createElement(a,{onClick:D},"\u68C0\u67E5form\u8868\u5355\u63D0\u4EA4\u79FB\u9664\u7684\u9879\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u503C"),d.createElement(n,{form:b,name:"tests",initialHide:{name1:!0},watchList:{tests_namea:function(U,V,$,N){var W=N.updateValue;U==="12"?N.updateValue("tests_name1",!0):N.updateValue(["tests","name1"],!1),console.log("\u6253\u5370---\u300B",U,V,N,$)}},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD54",name:"name4",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD55",type:"Custom",render:function(){for(var U=arguments.length,V=new Array(U),$=0;$<U;$++)V[$]=arguments[$];return console.log(V),d.createElement("div",null,"----\u6D4B\u8BD55")}},{label:"\u6D4B\u8BD56",name:"name6",type:"Custom",render:d.createElement("div",null,"----\u6D4B\u8BD56")}]}))}});case 18:case"end":return f.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';
import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();

  const onClick = () => {
    form.validateFields().then((value) => {
      console.log(value);
    });
  };

  return (
    <div>
      <Button onClick={onClick}>\u68C0\u67E5form\u8868\u5355\u63D0\u4EA4\u79FB\u9664\u7684\u9879\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u503C</Button>
      <SimpleForm
        form={form}
        name="tests"
        initialHide={{ name1: true }}
        watchList={{
          tests_namea: (value, allValue, forms, hide) => {
            const { updateValue } = hide;
            if (value === '12') {
              hide.updateValue('tests_name1', true);
            } else {
              hide.updateValue(['tests', 'name1'], false);
            }
            console.log('\u6253\u5370---\u300B', value, allValue, hide, forms);
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD52',
            name: 'name2',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD53',
            name: 'name3',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD54',
            name: 'name4',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0' }],
          },
          {
            label: '\u6D4B\u8BD55',
            // name: 'name5',
            type: 'Custom',
            // itemAttr:{ dependencies:["name5"]},
            render: (...arg) => {
              console.log(arg);
              return <div>----\u6D4B\u8BD55</div>;
            },
          },
          {
            label: '\u6D4B\u8BD56',
            name: 'name6',
            type: 'Custom',
            render: <div>----\u6D4B\u8BD56</div>,
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:e(67925),"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var l=P()(c()().mark(function a(){var j,n=arguments;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(j=d.sent).default.apply(j,n));case 3:case"end":return d.stop()}},a)}));function s(){return l.apply(this,arguments)}return s}()}},"packages-form-src-md-start-demo-1":{component:O.memo(O.lazy(P()(c()().mark(function l(){var s,a,j,n;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.t0=K(),d.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return s=d.sent,a=s.default,d.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return j=d.sent,n=j.default,d.abrupt("return",{default:function(){return n.createElement(a,{isSearch:!0,displayPre:1,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51",name:"name1",type:"Input"},{label:"\u6D4B\u8BD52",name:"name2",type:"Input"},{label:"\u6D4B\u8BD53",name:"namea3",type:"Input"},{label:"\u6D4B\u8BD54",name:"name4",type:"Input"},{label:"\u6D4B\u8BD55",name:"name5",type:"Input"}]})}});case 14:case"end":return d.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => (
  <SimpleForm
    isSearch={true}
    displayPre={1}
    layout="vertical"
    config={[
      {
        label: '\u6D4B\u8BD5',
        name: 'namea',
        type: 'Input',
      },
      {
        label: '\u6D4B\u8BD51',
        name: 'name1',
        type: 'Input',
      },
      {
        label: '\u6D4B\u8BD52',
        name: 'name2',
        type: 'Input',
      },
      {
        label: '\u6D4B\u8BD53',
        name: 'namea3',
        type: 'Input',
      },
      {
        label: '\u6D4B\u8BD54',
        name: 'name4',
        type: 'Input',
      },
      {
        label: '\u6D4B\u8BD55',
        name: 'name5',
        type: 'Input',
      },
    ]}
  />
);`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var l=P()(c()().mark(function a(){var j,n=arguments;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(j=d.sent).default.apply(j,n));case 3:case"end":return d.stop()}},a)}));function s(){return l.apply(this,arguments)}return s}()}},"packages-form-src-md-start-demo-2":{component:O.memo(O.lazy(P()(c()().mark(function l(){var s,a,j,n,h,d;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,67925));case 2:return s=f.sent,a=s.Input,f.t0=K(),f.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return f.t1=f.sent,(0,f.t0)(f.t1),f.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return j=f.sent,n=j.default,f.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return h=f.sent,d=h.default,f.abrupt("return",{default:function(){var g=n.useForm(),T=_()(g,1),b=T[0],D=d.useState({}),C=_()(D,2),U=C[0],V=C[1],$=b.getFieldValue,N=n.useChildItemFun(b),W=N.updateValue;return console.log("state",U),d.createElement(n,{form:b,layout:"vertical",isSearch:!0,onValuesChange:function(ae,ne){if("names0"in ae){var ce;clearTimeout(ce),ce=setTimeout(function(){W("names3",ae.names0),clearTimeout(ce)},300)}console.log(ae),V(r()({},ne))}},d.createElement(n.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},d.createElement(a,null)),d.createElement(n.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},d.createElement(a,null)),$("names".concat(0))!=="12"&&d.createElement(n.ColItem,{label:"\u6D4B\u8BD54",name:"names4",style:{marginBottom:5}},d.createElement(a,null)))}});case 18:case"end":return f.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  const [state, setState] = React.useState({});
  const { getFieldValue } = form;
  const { updateValue } = SimpleForm.useChildItemFun(form);
  console.log('state', state);
  return (
    <SimpleForm
      form={form}
      layout="vertical"
      isSearch={true}
      onValuesChange={(value, allValue) => {
        if ('names0' in value) {
          // \u4E3A\u4E86\u52A0\u4E00\u70B9\u95F4\u9694\u65F6\u95F4 \u9632\u6B62\u503C\u5185\u90E8\u6570\u636E\u66F4\u65B0\u95EE\u9898
          let timer;
          clearTimeout(timer);
          timer = setTimeout(() => {
            updateValue('names3', value.names0);
            clearTimeout(timer);
          }, 300);
        }
        console.log(value);
        setState({ ...allValue });
      }}
    >
      <SimpleForm.ColItem
        label="\u6D4B\u8BD5antd"
        name="names0"
        style={{ marginBottom: 5 }}
      >
        <Input />
      </SimpleForm.ColItem>
      <SimpleForm.ColItem
        label="\u6D4B\u8BD53"
        name="names3"
        style={{ marginBottom: 5 }}
      >
        <Input />
      </SimpleForm.ColItem>
      {getFieldValue(\`names\${0}\`) !== '12' && (
        <SimpleForm.ColItem
          label="\u6D4B\u8BD54"
          name="names4"
          style={{ marginBottom: 5 }}
        >
          <Input />
        </SimpleForm.ColItem>
      )}
    </SimpleForm>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:e(67925),"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var l=P()(c()().mark(function a(){var j,n=arguments;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(j=d.sent).default.apply(j,n));case 3:case"end":return d.stop()}},a)}));function s(){return l.apply(this,arguments)}return s}()}},"packages-form-src-md-start-demo-3":{component:O.memo(O.lazy(P()(c()().mark(function l(){var s,a,j,n,h,d;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,67925));case 2:return s=f.sent,a=s.Input,f.t0=K(),f.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return f.t1=f.sent,(0,f.t0)(f.t1),f.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return j=f.sent,n=j.default,f.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return h=f.sent,d=h.default,f.abrupt("return",{default:function(){var g=n.useForm(),T=_()(g,1),b=T[0],D=d.useState({}),C=_()(D,2),U=C[0],V=C[1],$=b.getFieldValue,N=n.useChildItemFun(b),W=N.updateValue;return console.log("\u7EC4\u5408--->",U),d.createElement(n,{form:b,layout:"vertical",isSearch:!0,config:[{label:"\u6D4B\u8BD5config",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51config",name:"name1",type:"Input"}],onValuesChange:function(ae,ne){V(r()({},ne))}},d.createElement(n.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},d.createElement(a,null)),d.createElement(n.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},d.createElement(a,null)))}});case 18:case"end":return f.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  const [state, setState] = React.useState({});
  const { getFieldValue } = form;
  const { updateValue } = SimpleForm.useChildItemFun(form);
  console.log('\u7EC4\u5408--->', state);
  return (
    <SimpleForm
      form={form}
      layout="vertical"
      isSearch={true}
      config={[
        {
          label: '\u6D4B\u8BD5config',
          name: 'namea',
          type: 'Input',
        },
        {
          label: '\u6D4B\u8BD51config',
          name: 'name1',
          type: 'Input',
        },
      ]}
      onValuesChange={(value, allValue) => {
        setState({ ...allValue });
      }}
    >
      <SimpleForm.ColItem
        label="\u6D4B\u8BD5antd"
        name="names0"
        style={{ marginBottom: 5 }}
      >
        <Input />
      </SimpleForm.ColItem>
      <SimpleForm.ColItem
        label="\u6D4B\u8BD53"
        name="names3"
        style={{ marginBottom: 5 }}
      >
        <Input />
      </SimpleForm.ColItem>
    </SimpleForm>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:e(67925),"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var l=P()(c()().mark(function a(){var j,n=arguments;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(j=d.sent).default.apply(j,n));case 3:case"end":return d.stop()}},a)}));function s(){return l.apply(this,arguments)}return s}()}}}},12360:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return O}});var Q=e(15009),r=e.n(Q),o=e(5574),c=e.n(o),R=e(49677),_=e.n(R),ee=e(99289),K=e.n(ee),B=e(67294),P=e(7131),O={"packages-form-src-md-update-demo-0":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0];return a.createElement("div",null,a.createElement(l,{form:f,onValuesChange:function(g,T){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",T)},watchList:{name:function(g,T,b,D){var C=b.updateValue,U=b.bathUpdateValue;C("name1",g)},name1:function(g,T,b,D){var C=b.updateValue,U=b.bathUpdateValue;U({name2:g,name3:g})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  return (
    <div>
      <SimpleForm
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        watchList={{
          name: (value, allValue, forms, hide) => {
            const { updateValue, bathUpdateValue } = forms;
            updateValue('name1', value);
          },
          name1: (value, allValue, forms, hide) => {
            const { updateValue, bathUpdateValue } = forms;
            bathUpdateValue({ name2: value, name3: value });
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u8BF7\u8F93\u5165\u6D4B\u8BD5',
            name: 'name',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD52',
            name: 'name2',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD53',
            name: 'name3',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}},"packages-form-src-md-update-demo-1":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0],u=l.getChildItemFun(f),g=u.updateValue,T=u.bathUpdateValue;return a.createElement("div",null,a.createElement(l,{form:f,onValuesChange:function(D,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},watchList:{name:function(D,C,U,V){g("name1",D)},name1:function(D,C,U,V){T({name2:D,name3:D})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  const { updateValue, bathUpdateValue } = SimpleForm.getChildItemFun(form);
  return (
    <div>
      <SimpleForm
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        watchList={{
          name: (value, allValue, forms, hide) => {
            updateValue('name1', value);
          },
          name1: (value, allValue, forms, hide) => {
            bathUpdateValue({ name2: value, name3: value });
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u8BF7\u8F93\u5165\u6D4B\u8BD5',
            name: 'name',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD52',
            name: 'name2',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD53',
            name: 'name3',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}}}},421:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return O}});var Q=e(15009),r=e.n(Q),o=e(5574),c=e.n(o),R=e(49677),_=e.n(R),ee=e(99289),K=e.n(ee),B=e(67294),P=e(9087),O={"packages-form-src-md-watch-demo-0":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0];return a.createElement("div",null,a.createElement(l,{form:f,onValuesChange:function(g,T){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",T)},watchList:{namea:function(g,T,b,D){var C=b.updateValue;C("name1",g)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD5",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  return (
    <div>
      <SimpleForm
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        watchList={{
          namea: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name1', value);
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u8BF7\u8F93\u5165\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD5',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}},"packages-form-src-md-watch-demo-1":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0];return a.createElement("div",null,a.createElement(l,{form:f,onValuesChange:function(g,T){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",T)},watchList:{namea:function(g,T,b,D){var C=b.updateValue;C("name1",g)},name1:function(g,T,b,D){var C=b.updateValue;C("name2",g)},name2:function(g,T,b,D){var C=b.updateValue;C("name3",g)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  return (
    <div>
      <SimpleForm
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        watchList={{
          namea: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name1', value);
          },
          name1: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name2', value);
          },
          name2: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name3', value);
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u8BF7\u8F93\u5165\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD52',
            name: 'name2',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD53',
            name: 'name3',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}},"packages-form-src-md-watch-demo-2":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=_(),n.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return n.t1=n.sent,(0,n.t0)(n.t1),n.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return x=n.sent,l=x.default,n.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){var d=l.useForm(),Y=c()(d,1),f=Y[0];return a.createElement("div",null,a.createElement(l,{form:f,initialHide:{name1:!0},onValuesChange:function(g,T){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",T)},watchList:{namea:function(g,T,b,D){g==="12"?D.updateValue("name1",!1):D.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  return (
    <div>
      <SimpleForm
        form={form}
        initialHide={{ name1: true }}
        onValuesChange={(value, allValue) => {
          console.log('\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->', allValue);
        }}
        watchList={{
          namea: (value, allValue, forms, hide) => {
            if (value === '12') {
              hide.updateValue('name1', false);
            } else {
              hide.updateValue('name1', true);
            }
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '\u8BF7\u8F93\u5165\`12\`\u6D4B\u8BD5',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
          {
            label: '\u6D4B\u8BD51',
            name: 'name1',
            type: 'Input',
            isHide: true,
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
          },
        ]}
      />
    </div>
  );
};`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-antd-form":e(29441),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}}}},51773:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return o}});var Q=e(67294),r=e(30372),o={}},89237:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return o}});var Q=e(67294),r=e(11010),o={}},50968:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return o}});var Q=e(67294),r=e(70174),o={}},15611:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return o}});var Q=e(67294),r=e(56296),o={}},87820:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return o}});var Q=e(67294),r=e(91046),o={}},40352:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return o}});var Q=e(67294),r=e(49833),o={}},22617:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return O}});var Q=e(15009),r=e.n(Q),o=e(5574),c=e.n(o),R=e(49677),_=e.n(R),ee=e(99289),K=e.n(ee),B=e(67294),P=e(67590),O={"packages-fuzzy-query-src-demo-0":{component:B.memo(B.lazy(K()(r()().mark(function y(){var x,l,s,a,j;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.t0=_(),h.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return h.t1=h.sent,(0,h.t0)(h.t1),h.next=7,Promise.resolve().then(e.bind(e,93251));case 7:return x=h.sent,l=x.default,h.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=h.sent,a=s.default,j=function(){var Y=a.useState([]),f=c()(Y,2),u=f[0],g=f[1],T=function(){var b=K()(r()().mark(function D(){return r()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.abrupt("return",Array.from({length:20}).map(function(V,$){return{label:"\u540D\u79F0---".concat($),phone:$}}));case 1:case"end":return U.stop()}},D)}));return function(){return b.apply(this,arguments)}}();return a.createElement("div",null,a.createElement(l,{request:T,mode:"multiple",value:u,onChange:g,placeholder:"\u8BF7\u9009\u62E9",columns:[{dataIndex:"label",title:"\u7528\u6237\u540D"},{dataIndex:"phone",title:"\u7535\u8BDD"}],fieldNames:{value:"phone"}}))},h.abrupt("return",{default:j});case 15:case"end":return h.stop()}},y)})))),asset:{type:"BLOCK",id:"packages-fuzzy-query-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
import FuzzyQuery from 'carefree-fuzzy-query';
import React from 'react';

const Query = () => {
  const [value, setValue] = React.useState([]);
  // \u6839\u636Ekey\u6A21\u7CCA\u67E5\u8BE2\u7EC4\u7EC7
  const selectLike = async () => {
    return Array.from({ length: 20 }).map((_, index) => {
      return {
        label: \`\u540D\u79F0---\${index}\`,
        phone: index,
      };
    });
  };
  return (
    <div>
      <FuzzyQuery
        request={selectLike}
        mode="multiple"
        value={value}
        onChange={setValue}
        placeholder="\u8BF7\u9009\u62E9"
        columns={[
          { dataIndex: 'label', title: '\u7528\u6237\u540D' },
          { dataIndex: 'phone', title: '\u7535\u8BDD' },
        ]}
        fieldNames={{ value: 'phone' }}
      />
    </div>
  );
};
export default Query;`},antd:{type:"NPM",value:"5.1.7"},"carefree-fuzzy-query":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":e(79398),"carefree-fuzzy-query":e(93251),react:e(67294)},renderOpts:{compile:function(){var y=K()(r()().mark(function l(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},l)}));function x(){return y.apply(this,arguments)}return x}()}}}},53335:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return ee}});var Q=e(15009),r=e.n(Q),o=e(99289),c=e.n(o),R=e(67294),_=e(6857),ee={"packages-pro-table-src-demo-0":{component:R.memo(R.lazy(c()(r()().mark(function K(){var B,P,O,y,x,l,s,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,67925));case 2:return B=n.sent,P=B.Input,n.next=6,Promise.resolve().then(e.bind(e,29441));case 6:return O=n.sent,y=O.default,n.next=10,Promise.resolve().then(e.bind(e,28209));case 10:return x=n.sent,l=x.default,n.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return s=n.sent,a=s.default,n.abrupt("return",{default:function(){return a.createElement(l,{Api:{table:{url:"/api/user/select",method:"POST"}},initialValues:{search:{ces1:123}},columns:[{title:"\u8D26\u53F7",dataIndex:"loginName"},{title:"\u7528\u6237\u540D",dataIndex:"userName"},{title:"\u7528\u6237\u624B\u673A\u53F7",dataIndex:"phone"},{title:"\u5E74\u9F84",dataIndex:"age"}],search:{isSearch:!0,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"ces1",type:"Input"}],children:a.createElement(a.Fragment,null,a.createElement(y.ColItem,{name:"namens",label:"\u6D4B\u8BD5 children"},a.createElement(P,{placeholder:"\u8BF7\u8F93\u5165"})))}})}});case 17:case"end":return n.stop()}},K)})))),asset:{type:"BLOCK",id:"packages-pro-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
import SimpleForm from 'carefree-antd-form';
import ProTable from 'carefree-pro-table';
import React from 'react';

export default () => (
  <ProTable
    Api={{
      table: {
        url: '/api/user/select',
        method: 'POST',
      },
    }}
    initialValues={{ search: { ces1: 123 } }}
    columns={[
      {
        title: '\u8D26\u53F7',
        dataIndex: 'loginName',
      },
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'userName',
      },
      {
        title: '\u7528\u6237\u624B\u673A\u53F7',
        dataIndex: 'phone',
      },
      {
        title: '\u5E74\u9F84',
        dataIndex: 'age',
      },
    ]}
    search={{
      isSearch: true,
      layout: 'vertical',
      config: [
        {
          label: '\u6D4B\u8BD5',
          name: 'ces1',
          type: 'Input',
        },
      ],
      children: (
        <React.Fragment>
          <SimpleForm.ColItem name="namens" label="\u6D4B\u8BD5 children">
            <Input placeholder="\u8BF7\u8F93\u5165" />
          </SimpleForm.ColItem>
        </React.Fragment>
      ),
    }}
  />
);`},antd:{type:"NPM",value:"5.1.7"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},"carefree-pro-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:e(67925),"carefree-antd-form":e(29441),"carefree-pro-table":e(28209),react:e(67294)},renderOpts:{compile:function(){var K=c()(r()().mark(function P(){var O,y=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(O=l.sent).default.apply(O,y));case 3:case"end":return l.stop()}},P)}));function B(){return K.apply(this,arguments)}return B}()}}}},40859:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return ee}});var Q=e(15009),r=e.n(Q),o=e(99289),c=e.n(o),R=e(67294),_=e(90147),ee={"packages-transfer-search-src-demo-0":{component:R.memo(R.lazy(c()(r()().mark(function K(){var B,P,O,y;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,42478));case 2:return B=l.sent,P=B.default,l.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return O=l.sent,y=O.default,l.abrupt("return",{default:function(){return y.createElement("div",null,y.createElement(P,{rowKey:"id",columns:[{title:"\u6807\u9898",dataIndex:"title"}],initValue:{left:{dataList:[{id:1,title:"\u6807\u9898"}]},right:{dataList:[{id:2,title:"\u6807\u98982"}]}},Api:{left:{url:"",options:{},before:function(){return{}},after:function(){return{}}},right:{url:"",before:function(){return{}},after:function(){return{}}},add:{url:"",before:function(){return{}},after:function(){return{}}},allAdd:{url:"",before:function(){return{}},after:function(){return{}}},allDelete:{url:"",before:function(){return{}},after:function(){return{}}},delete:{url:"",before:function(){return{}},after:function(){return{}}}},leftSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]},rightSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]}}))}});case 9:case"end":return l.stop()}},K)})))),asset:{type:"BLOCK",id:"packages-transfer-search-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import TransferSearch from 'carefree-antd-transfer-search';
import React from 'react';

export default () => (
  <div>
    <TransferSearch
      rowKey="id"
      columns={[{ title: '\u6807\u9898', dataIndex: 'title' }]}
      initValue={{
        left: {
          dataList: [{ id: 1, title: '\u6807\u9898' }],
        },
        right: {
          dataList: [{ id: 2, title: '\u6807\u98982' }],
        },
      }}
      Api={{
        // \u5DE6\u4FA7\u67E5\u8BE2\u63A5\u53E3
        left: {
          url: '',
          options: {},
          before: () => ({}),
          after: () => ({}),
        },
        // \u53F3\u4FA7\u67E5\u8BE2\u63A5\u53E3
        right: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // \u4E2D\u95F4\u6309\u94AE \u5F80\u53F3
        add: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // \u4E2D\u95F4\u6309\u94AE \u5F80\u53F3
        allAdd: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // \u4E2D\u95F4\u6309\u94AE \u5F80\u5DE6
        allDelete: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // \u4E2D\u95F4\u6309\u94AE \u5F80\u5DE6
        delete: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
      }}
      // \u5DE6\u4FA7\u67E5\u8BE2\u8868\u5355\u914D\u7F6E
      leftSearch={{
        config: [
          {
            label: '\u6807\u9898',
            name: 'name1',
            type: 'Input',
          },
          {
            label: '\u6807\u9898',
            name: 'name2',
            type: 'Input',
          },
        ],
      }}
      // \u53F3\u4FA7\u67E5\u8BE2\u8868\u5355\u914D\u7F6E
      rightSearch={{
        config: [
          {
            label: '\u6807\u9898',
            name: 'name1',
            type: 'Input',
          },
          {
            label: '\u6807\u9898',
            name: 'name2',
            type: 'Input',
          },
        ],
      }}
    />
  </div>
);`},"carefree-antd-transfer-search":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer-search":e(42478),react:e(67294)},renderOpts:{compile:function(){var K=c()(r()().mark(function P(){var O,y=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(O=l.sent).default.apply(O,y));case 3:case"end":return l.stop()}},P)}));function B(){return K.apply(this,arguments)}return B}()}}}},86968:function(ve,m,e){"use strict";e.r(m),e.d(m,{demos:function(){return ee}});var Q=e(15009),r=e.n(Q),o=e(99289),c=e.n(o),R=e(67294),_=e(41699),ee={"packages-transfer-src-demo-0":{component:R.memo(R.lazy(c()(r()().mark(function K(){var B,P,O,y;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,12755));case 2:return B=l.sent,P=B.default,l.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return O=l.sent,y=O.default,l.abrupt("return",{default:function(){return y.createElement("div",null,y.createElement(P,{leftDataSource:[{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:11},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:22},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:33},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:44},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:444},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4444}],rightDataSource:[{a:"\u6D4B\u8BD55",b:"\u6D4B\u8BD5215",id:5},{a:"\u6D4B\u8BD56",b:"\u6D4B\u8BD52116",id:6},{a:"\u6D4B\u8BD57",b:"\u6D4B\u8BD52127",id:7},{a:"\u6D4B\u8BD58",b:"\u6D4B\u8BD52138",id:8}],rowKey:"id",columns:[{dataIndex:"a",title:"\u6807\u9898",align:"center"},{dataIndex:"b",title:"\u68073",align:"center"}]}))}});case 9:case"end":return l.stop()}},K)})))),asset:{type:"BLOCK",id:"packages-transfer-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Transfer from 'carefree-antd-transfer';
import React from 'react';

export default () => (
  <div>
    <Transfer
      leftDataSource={[
        { a: '\u6D4B\u8BD51', b: '\u6D4B\u8BD521', id: 1 },
        { a: '\u6D4B\u8BD52', b: '\u6D4B\u8BD5211', id: 2 },
        { a: '\u6D4B\u8BD53', b: '\u6D4B\u8BD5212', id: 3 },
        { a: '\u6D4B\u8BD54', b: '\u6D4B\u8BD5213', id: 4 },
        { a: '\u6D4B\u8BD51', b: '\u6D4B\u8BD521', id: 11 },
        { a: '\u6D4B\u8BD52', b: '\u6D4B\u8BD5211', id: 22 },
        { a: '\u6D4B\u8BD53', b: '\u6D4B\u8BD5212', id: 33 },
        { a: '\u6D4B\u8BD54', b: '\u6D4B\u8BD5213', id: 44 },
        { a: '\u6D4B\u8BD51', b: '\u6D4B\u8BD521', id: 111 },
        { a: '\u6D4B\u8BD52', b: '\u6D4B\u8BD5211', id: 222 },
        { a: '\u6D4B\u8BD53', b: '\u6D4B\u8BD5212', id: 333 },
        { a: '\u6D4B\u8BD54', b: '\u6D4B\u8BD5213', id: 444 },
        { a: '\u6D4B\u8BD51', b: '\u6D4B\u8BD521', id: 1111 },
        { a: '\u6D4B\u8BD52', b: '\u6D4B\u8BD5211', id: 2222 },
        { a: '\u6D4B\u8BD53', b: '\u6D4B\u8BD5212', id: 3333 },
        { a: '\u6D4B\u8BD54', b: '\u6D4B\u8BD5213', id: 4444 },
      ]}
      rightDataSource={[
        { a: '\u6D4B\u8BD55', b: '\u6D4B\u8BD5215', id: 5 },
        { a: '\u6D4B\u8BD56', b: '\u6D4B\u8BD52116', id: 6 },
        { a: '\u6D4B\u8BD57', b: '\u6D4B\u8BD52127', id: 7 },
        { a: '\u6D4B\u8BD58', b: '\u6D4B\u8BD52138', id: 8 },
      ]}
      rowKey="id"
      columns={[
        {
          dataIndex: 'a',
          title: '\u6807\u9898',
          align: 'center',
        },
        {
          dataIndex: 'b',
          title: '\u68073',
          align: 'center',
        },
      ]}
    />
  </div>
);`},"carefree-antd-transfer":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer":e(12755),react:e(67294)},renderOpts:{compile:function(){var K=c()(r()().mark(function P(){var O,y=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(O=l.sent).default.apply(O,y));case 3:case"end":return l.stop()}},P)}));function B(){return K.apply(this,arguments)}return B}()}}}},87253:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(76070);const r=[{value:` npm i carefree-antd-edit-table
`,paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"columns",paraId:1,tocIndex:1},{value:"\u5217",paraId:1,tocIndex:1},{value:"ColumnsProps[]",paraId:1,tocIndex:1},{value:"onSave",paraId:1,tocIndex:1},{value:"\u4FDD\u5B58\u6570\u636E",paraId:1,tocIndex:1},{value:"(data: any[], row: object, record?: object, indx?: number) => void",paraId:1,tocIndex:1},{value:"onBeforeSave",paraId:1,tocIndex:1},{value:"\u4FDD\u5B58\u6570\u636E\u4E4B\u524D\u6821\u9A8C",paraId:1,tocIndex:1},{value:"(item: object, record: object, index: number) => boolean",paraId:1,tocIndex:1},{value:"rowKey",paraId:1,tocIndex:1},{value:"\u4E3B\u952E",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"optIsFirst",paraId:1,tocIndex:1},{value:"\u64CD\u4F5C\u5217\u662F\u653E\u5728\u9996\u4F4D\u8FD8\u662F\u6700\u540E",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"isOpt",paraId:1,tocIndex:1},{value:"\u662F\u5426\u9700\u8981\u64CD\u4F5C\u5217",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"optConfig",paraId:1,tocIndex:1},{value:"\u64CD\u4F5C\u914D\u7F6E",paraId:1,tocIndex:1},{value:"ColumnsProps",paraId:1,tocIndex:1},{value:"isOptDelete",paraId:1,tocIndex:1},{value:"\u64CD\u4F5C\u662F\u5426\u9700\u8981 \u5220\u9664 \u6309\u94AE",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"initValue",paraId:1,tocIndex:1},{value:"\u65B0\u589E\u521D\u59CB\u503C",paraId:1,tocIndex:1},{value:"object",paraId:1,tocIndex:1},{value:"isAdd",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5B58\u5728\u65B0\u589E\u6309\u94AE",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"onBeforeAdd",paraId:1,tocIndex:1},{value:"\u65B0\u589E\u4E4B\u524D\u6821\u9A8C",paraId:1,tocIndex:1},{value:"() => boolean",paraId:1,tocIndex:1},{value:"onErr",paraId:1,tocIndex:1},{value:"\u884C\u62A5\u9519\u4FE1\u606F",paraId:1,tocIndex:1},{value:"(err: ValidateErrorEntity<any>) => void",paraId:1,tocIndex:1},{value:"onValuesChange",paraId:1,tocIndex:1},{value:"\u8868\u5355\u503C\u66F4\u65B0\u4E8B\u4EF6",paraId:1,tocIndex:1},{value:"(list: any[], value: object, allValue: object,id: string | number, form: FormInstance)=>void",paraId:1,tocIndex:1},{value:"multiple",paraId:1,tocIndex:1},{value:"\u662F\u5426\u53EF\u4EE5\u591A\u884C\u7F16\u8F91",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"addBtnProps",paraId:1,tocIndex:1},{value:"\u65B0\u589E\u6309\u94AE\u914D\u7F6E",paraId:1,tocIndex:1},{value:"AddBtnProps",paraId:1,tocIndex:1},{value:"store",paraId:1,tocIndex:1},{value:"form \u8868\u5355\u72B6\u6001\u5904\u7406",paraId:1,tocIndex:1},{value:"Store",paraId:1,tocIndex:1},{value:"\u66F4\u591A\u53C2\u6570",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:3,tocIndex:1},{value:`export interface EditableTableProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  /** \u5217 **/
  columns: ColumnsProps[];
  /** \u4FDD\u5B58\u6570\u636E */
  onSave: (data: any[], row: object, record?: object, indx?: number) => void;
  /** \u4FDD\u5B58\u6570\u636E\u4E4B\u524D\u6821\u9A8C */
  onBeforeSave?: (item: object, record: object, index: number) => boolean;
  /**\u4E3B\u952E  */
  rowKey: string;
  /** \u64CD\u4F5C\u5217\u662F\u653E\u5728\u9996\u4F4D\u8FD8\u662F\u6700\u540E */
  optIsFirst?: boolean;
  /** \u662F\u5426\u9700\u8981\u64CD\u4F5C\u5217 */
  isOpt?: boolean;
  /** \u64CD\u4F5C\u914D\u7F6E */
  optConfig?: ColumnsProps;
  /** \u64CD\u4F5C\u662F\u5426\u9700\u8981 \u5220\u9664 \u6309\u94AE */
  isOptDelete?: boolean;
  /** \u65B0\u589E\u521D\u59CB\u503C */
  initValue?: object;
  /** \u662F\u5426\u5B58\u5728\u65B0\u589E\u6309\u94AE */
  isAdd?: boolean;
  onBeforeAdd?: () => boolean;
  /** \u884C\u62A5\u9519\u4FE1\u606F */
  onErr?: (err: ValidateErrorEntity<any>) => void;
  /** \u8868\u5355\u503C\u66F4\u65B0\u4E8B\u4EF6 */
  onValuesChange?: (
    /** \u66F4\u65B0\u540E\u7684\u5217\u8868\u503C */
    list: any[],
    /** \u5F53\u524D\u66F4\u65B0\u5B57\u6BB5\u503C */
    value: object,
    /** \u5F53\u524D\u884C\u7F16\u8F91\u5B57\u6BB5\u503C */
    allValue: object,
    /** \u5F53\u524D\u7F16\u8F91\u4E3B\u952E\u503C */
    id: string | number,
    /**  \u5F53\u524D\u884C\u7684 form  */
    form: FormInstance,
  ) => void;
  /** \u662F\u5426\u53EF\u4EE5\u591A\u884C\u7F16\u8F91 */
  multiple?: boolean;
  /** \u65B0\u589E\u6309\u94AE\u914D\u7F6E */
  addBtnProps?: AddBtnProps;
  /** form \u8868\u5355\u72B6\u6001\u5904\u7406 */
  store?: Store;
}
`,paraId:4,tocIndex:1},{value:"\u53C2\u6570",paraId:5,tocIndex:2},{value:"\u8BF4\u660E",paraId:5,tocIndex:2},{value:"\u7C7B\u578B",paraId:5,tocIndex:2},{value:"preName",paraId:5,tocIndex:2},{value:"\u5F53\u524D\u884C\u6570\u636E\u5B58\u50A8\u7236\u7EA7\u7684 name list \u65F6\u4E0D\u7528\u4F20",paraId:5,tocIndex:2},{value:"ColumnsProps[]",paraId:5,tocIndex:2},{value:"itemValue",paraId:5,tocIndex:2},{value:"\u5F53\u524D\u884C\u7684\u6240\u6709\u6570\u636E",paraId:5,tocIndex:2},{value:"(data: any[], row: object, record?: object, indx?: number) => void",paraId:5,tocIndex:2},{value:"tipAttr",paraId:5,tocIndex:2},{value:"Tooltip \u7EC4\u4EF6\u5C5E\u6027",paraId:5,tocIndex:2},{value:"(item: object, record: object, index: number) => boolean",paraId:5,tocIndex:2},{value:"tip",paraId:5,tocIndex:2},{value:"\u9519\u8BEF\u63D0\u793A",paraId:5,tocIndex:2},{value:"string",paraId:5,tocIndex:2},{value:"children",paraId:5,tocIndex:2},{value:"\u8FDB\u884C\u8986\u5199,\u4E3A\u65B9\u6CD5\u65F6\u65B0\u589E\u4E00\u4E2A\u884C\u53C2\u6570",paraId:5,tocIndex:2},{value:"React.ReactElement | ((control: { [name: string]: any }, meta: Meta, form: FormInstance<any>,v?: { record: any }) => React.ReactNode)",paraId:5,tocIndex:2},{value:"\u66F4\u591A\u53C2\u6570",paraId:6,tocIndex:2},{value:`/**  Item \u7EC4\u4EF6  \u6E32\u67D3\u7684\u5355\u4E2A\u5185\u90E8FromItem\u7EC4\u4EF6  */
export interface EditableCellItemProps extends Omit<FieldProps, 'label'> {
  /** \u5F53\u524D\u884C\u6570\u636E\u5B58\u50A8\u7236\u7EA7\u7684name list\u65F6\u4E0D\u7528\u4F20 */
  preName?: string;
  /** \u5F53\u524D\u884C\u7684\u6240\u6709\u6570\u636E */
  itemValue?: any;
  /** Tooltip \u7EC4\u4EF6\u5C5E\u6027  */
  tipAttr?: TooltipProps;
  /** \u9519\u8BEF\u63D0\u793A  */
  tip?: (errs: string) => React.ReactNode;
  /** \u8FDB\u884C\u8986\u5199 \u65B9\u6CD5\u65F6 \u65B0\u589E\u4E00\u4E2A \u884C\u53C2\u6570 v */
  children?:
    | React.ReactElement
    | ((
        control: { [name: string]: any },
        meta: Meta,
        form: FormInstance<any>,
        v?: { record: any },
      ) => React.ReactNode);
}
`,paraId:7,tocIndex:2},{value:"\u53C2\u6570",paraId:8,tocIndex:3},{value:"\u8BF4\u660E",paraId:8,tocIndex:3},{value:"\u7C7B\u578B",paraId:8,tocIndex:3},{value:"editable",paraId:8,tocIndex:3},{value:"\u662F\u5426\u7F16\u8F91",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:"inputNode",paraId:8,tocIndex:3},{value:"\u81EA\u5B9A\u4E49 \u6E32\u67D3\u7F16\u8F91\u7EC4\u4EF6",paraId:8,tocIndex:3},{value:"(data: any[], row: object, record?: object, indx?: number) => void",paraId:8,tocIndex:3},{value:"rules",paraId:8,tocIndex:3},{value:"\u89C4\u5219",paraId:8,tocIndex:3},{value:"(item: object, record: object, index: number) => boolean",paraId:8,tocIndex:3},{value:"itemAttr",paraId:8,tocIndex:3},{value:"formItem \u8868\u5355 \u5176\u4ED6\u5C5E\u6027\u503C",paraId:8,tocIndex:3},{value:"string",paraId:8,tocIndex:3},{value:"attr",paraId:8,tocIndex:3},{value:"formItem \u8868\u5355 children \u4E2D\u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:"type",paraId:8,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u578B",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:"isList",paraId:8,tocIndex:3},{value:"\u662F\u5426\u662F List",paraId:8,tocIndex:3},{value:"ColumnsProps",paraId:8,tocIndex:3},{value:"listAttr",paraId:8,tocIndex:3},{value:"list \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:"tip",paraId:8,tocIndex:3},{value:"\u9519\u8BEF\u63D0\u793A",paraId:8,tocIndex:3},{value:"object",paraId:8,tocIndex:3},{value:"tipAttr",paraId:8,tocIndex:3},{value:"Tooltip \u7EC4\u4EF6\u5C5E\u6027",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:"render",paraId:8,tocIndex:3},{value:"\u81EA\u5B9A\u4E49 \u6E32\u67D3(\u5217\u539F\u59CB\u9ED8\u8BA4\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3,\u52A0\u4E86\u4E2A other \u53C2\u6570\uFF0C\u4E0D\u662F\u7F16\u8F91\u72B6\u6001\u4E0B\u7684\u8868\u683C\u6E32\u67D3),other \u53C2\u6570 \u53EA\u6709\u64CD\u4F5C\u5217\u624D\u6709",paraId:8,tocIndex:3},{value:"( value: any,record: any,index: number,other?: OtherProps,) => React.ReactNode | RenderedCell<any>",paraId:8,tocIndex:3},{value:"\u66F4\u591A\u53C2\u6570",paraId:9,tocIndex:3},{value:"OtherProps",paraId:10,tocIndex:3},{value:"\u53C2\u6570",paraId:11,tocIndex:3},{value:"\u8BF4\u660E",paraId:11,tocIndex:3},{value:"\u7C7B\u578B",paraId:11,tocIndex:3},{value:"editingKey",paraId:11,tocIndex:3},{value:"\u7F16\u8F91\u4E2D\u5B57\u6BB5",paraId:11,tocIndex:3},{value:"any[]",paraId:11,tocIndex:3},{value:"editable",paraId:11,tocIndex:3},{value:"\u5F53\u524D\u884C \u662F\u5426\u7F16\u8F91",paraId:11,tocIndex:3},{value:"boolean",paraId:11,tocIndex:3},{value:"newAdd",paraId:11,tocIndex:3},{value:"\u5904\u4E8E\u7F16\u8F91\u72B6\u6001\u7684 \u65B0\u589E\u6570\u636E key",paraId:11,tocIndex:3},{value:"any[]",paraId:11,tocIndex:3},{value:"isNewAdd",paraId:11,tocIndex:3},{value:"\u662F\u5426\u65B0\u589E\u7684",paraId:11,tocIndex:3},{value:"boolean",paraId:11,tocIndex:3},{value:"save",paraId:11,tocIndex:3},{value:"\u4FDD\u5B58 \uFF0Ckey:\u4E3B\u952E \uFF0Crecord\uFF1A\u884C\u6570\u636E\uFF0Cindex:\u4E0B\u6807",paraId:11,tocIndex:3},{value:"(key: string | number, record: object, indx: number) => void",paraId:11,tocIndex:3},{value:"cancel",paraId:11,tocIndex:3},{value:"\u53D6\u6D88 \uFF0C id\uFF1A\u4E3B\u952E",paraId:11,tocIndex:3},{value:"(id: string | number) => void",paraId:11,tocIndex:3},{value:"onDelete",paraId:11,tocIndex:3},{value:"\u5220\u9664 \uFF0Cid\uFF1A\u4E3B\u952E\uFF0C rowItem \u5F53\u524D\u884C\u6570\u636E \uFF0Cindex:\u4E0B\u6807",paraId:11,tocIndex:3},{value:"(id: string | number, rowItem: object, index: number) => void",paraId:11,tocIndex:3},{value:"edit",paraId:11,tocIndex:3},{value:"\u7F16\u8F91 \u6309\u94AE \uFF0Crecord \u5F53\u524D\u884C\u6570",paraId:11,tocIndex:3},{value:"(record: object) => void",paraId:11,tocIndex:3},{value:`interface ItemType<T, P> {
  /** \u7C7B\u578B */
  type: T;
  /** formItem \u8868\u5355 children \u4E2D\u7EC4\u4EF6\u53C2\u6570*/
  attr?: P;
}

export type ItemChild<T = any, P = any> =
  | ItemType<'Input', InputProps>
  | ItemType<'InputNumber', InputNumberProps>
  | ItemType<'TextArea', TextAreaProps>
  | ItemType<'Select', SelectProps<T>>
  | ItemType<'AutoComplete', AutoCompleteProps>
  | ItemType<'Cascader', CascaderProps<P>>
  | ItemType<
      'Checkbox',
      React.ForwardRefExoticComponent<
        CheckboxGroupProps & React.RefAttributes<HTMLDivElement>
      >
    >
  | ItemType<'DatePicker', DatePickerProps>
  | ItemType<'Mentions', MentionProps>
  | ItemType<'Radio', RadioProps>
  | ItemType<'Rate', RateProps>
  | ItemType<'Slider', SliderSingleProps>
  | ItemType<'Switch', SwitchProps>
  | ItemType<'TimePicker', TimePickerProps>
  | ItemType<'TreeSelect', TreeSelectProps>
  | ItemType<'Upload', UploadProps>
  | ItemType<'RangePicker', RangePickerProps>
  | ItemType<'Custom', any>;

// \u8868\u683C \u5217\u53C2\u6570

export type ColumnsProps = ColumnType<any> & {
  /** \u662F\u5426\u7F16\u8F91  */
  editable?: boolean;
  /** \u81EA\u5B9A\u4E49 \u6E32\u67D3\u7F16\u8F91\u7EC4\u4EF6 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** \u89C4\u5219 */
  rules?: Rule[];
  /** formItem \u8868\u5355 \u5176\u4ED6\u5C5E\u6027\u503C*/
  itemAttr?: Omit<FieldProps, 'rules' | 'label' | 'name'>;
  /**\u7EC4\u4EF6\u7C7B\u578B  */
  // type?: ItemChildType;
  /** \u9519\u8BEF\u63D0\u793A  */
  tip?: (errs: string) => React.ReactNode;
  /** Tooltip \u7EC4\u4EF6\u5C5E\u6027  */
  tipAttr?: TooltipProps;
  /** \u662F\u5426\u662F List */
  isList?: boolean;
  /** list \u7EC4\u4EF6\u53C2\u6570 */
  listAttr?: Omit<ListProps, 'children' | 'name'>;
  /** \u81EA\u5B9A\u4E49 \u6E32\u67D3(\u5217\u539F\u59CB\u9ED8\u8BA4\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3,\u52A0\u4E86\u4E2A other \u53C2\u6570\uFF0C\u4E0D\u662F\u7F16\u8F91\u72B6\u6001\u4E0B\u7684\u8868\u683C\u6E32\u67D3)  \uFF0C other \u53C2\u6570 \u53EA\u6709\u64CD\u4F5C\u5217\u624D\u6709 */
  render?: (
    value: any,
    record: any,
    index: number,
    other?: OtherProps,
  ) => React.ReactNode | RenderedCell<any>;
} & ItemChild<any, any>;

// ColumnsProps \u4E2D  render \u4E2D\u7684 other \u53C2\u6570\u503C
export interface OtherProps {
  /** \u7F16\u8F91\u4E2D\u5B57\u6BB5 */
  editingKey: any[];
  /** \u5F53\u524D\u884C \u662F\u5426\u7F16\u8F91 */
  editable: boolean;
  /** \u5904\u4E8E\u7F16\u8F91\u72B6\u6001\u7684 \u65B0\u589E\u6570\u636E key */
  newAdd: any[];
  /** \u662F\u5426\u65B0\u589E\u7684 */
  isNewAdd: boolean;
  /** \u4FDD\u5B58 \uFF0Ckey:\u4E3B\u952E \uFF0Crecord\uFF1A\u884C\u6570\u636E\uFF0Cindex:\u4E0B\u6807  **/
  save: (key: string | number, record: object, indx: number) => void;
  /** \u53D6\u6D88 \uFF0C id\uFF1A\u4E3B\u952E */
  cancel: (id: string | number) => void;
  /** \u5220\u9664 \uFF0Cid\uFF1A\u4E3B\u952E\uFF0C rowItem \u5F53\u524D\u884C\u6570\u636E \uFF0Cindex:\u4E0B\u6807 */
  onDelete: (id: string | number, rowItem: object, index: number) => void;
  /** \u7F16\u8F91 \u6309\u94AE \uFF0Crecord \u5F53\u524D\u884C\u6570 */
  edit: (record: object) => void;
}
`,paraId:12,tocIndex:3},{value:"\u53C2\u6570",paraId:13,tocIndex:4},{value:"\u8BF4\u660E",paraId:13,tocIndex:4},{value:"\u7C7B\u578B",paraId:13,tocIndex:4},{value:"save",paraId:13,tocIndex:4},{value:"\u4FDD\u5B58 \uFF0Ckey:\u4E3B\u952E \uFF0Crecord\uFF1A\u884C\u6570\u636E\uFF0Cindex:\u4E0B\u6807",paraId:13,tocIndex:4},{value:"(key: string | number, record: object, indx: number) => void",paraId:13,tocIndex:4},{value:"cancel",paraId:13,tocIndex:4},{value:"\u53D6\u6D88 \uFF0C id\uFF1A\u4E3B\u952E",paraId:13,tocIndex:4},{value:"(id: string | number) => void",paraId:13,tocIndex:4},{value:"onDelete",paraId:13,tocIndex:4},{value:"\u5220\u9664 \uFF0Cid\uFF1A\u4E3B\u952E\uFF0C rowItem \u5F53\u524D\u884C\u6570\u636E \uFF0Cindex:\u4E0B\u6807",paraId:13,tocIndex:4},{value:"(id: string | number, rowItem: object, index: number) => void",paraId:13,tocIndex:4},{value:"edit",paraId:13,tocIndex:4},{value:"\u7F16\u8F91 \u6309\u94AE \uFF0Crecord \u5F53\u524D\u884C\u6570",paraId:13,tocIndex:4},{value:"(record: object) => void",paraId:13,tocIndex:4},{value:"add",paraId:13,tocIndex:4},{value:"\u65B0\u589E",paraId:13,tocIndex:4},{value:"() => void",paraId:13,tocIndex:4},{value:"isEditing",paraId:13,tocIndex:4},{value:"\u662F\u5426\u7F16\u8F91\u4E2D",paraId:13,tocIndex:4},{value:"(record: any) => boolean",paraId:13,tocIndex:4},{value:"isAddEdit",paraId:13,tocIndex:4},{value:"\u662F\u5426\u662F\u65B0\u589E",paraId:13,tocIndex:4},{value:"(record: any) => boolean",paraId:13,tocIndex:4},{value:"editingKey",paraId:13,tocIndex:4},{value:"\u7F16\u8F91\u4E2D\u5B57\u6BB5",paraId:13,tocIndex:4},{value:"any[]",paraId:13,tocIndex:4},{value:"newAdd",paraId:13,tocIndex:4},{value:"\u5904\u4E8E\u7F16\u8F91\u72B6\u6001\u7684 \u65B0\u589E\u6570\u636E key",paraId:13,tocIndex:4},{value:"any[]",paraId:13,tocIndex:4},{value:"forms",paraId:13,tocIndex:4},{value:"\u6536\u96C6 \u6240\u6709 \u8868\u5355",paraId:13,tocIndex:4},{value:"Store",paraId:13,tocIndex:4},{value:`// ref \u503C
export interface RefEditTableProps {
  /** \u4FDD\u5B58 */
  save: (key: string, record: object, indx: number) => void;
  /** \u5220\u9664 */
  onDelete: (id: string | number, rowItem: object, index: number) => void;
  /** \u7F16\u8F91 */
  edit: (record: object) => void;
  /** \u53D6\u6D88\u7F16\u8F91 */
  cancel: (key: string | number) => void;
  /** \u65B0\u589E */
  add: () => void;
  /** \u662F\u5426\u7F16\u8F91\u4E2D */
  isEditing: (record: any) => boolean;
  /** \u662F\u5426\u662F\u65B0\u589E */
  isAddEdit: (record: any) => boolean;
  /** \u7F16\u8F91 id */
  editingKey: (string | number)[];
  /** \u662F\u5426\u7F16\u8F91 \u65B0\u589E\u7684\u6570\u636E */
  newAdd: (string | number)[];
  /** \u6536\u96C6 \u6240\u6709 \u8868\u5355 */
  forms: Store;
}
`,paraId:14,tocIndex:4}]},66782:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(44097);const r=[{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:0},{value:"isHide",paraId:0},{value:` \u5C5E\u6027\uFF0C\u5224\u65AD\u8868\u5355\u9879\u662F\u5426\u53EF\u4EE5\u6709\u9690\u85CF\u64CD\u4F5C
\u901A\u8FC7\u8BBE\u7F6E `,paraId:0},{value:"initialHide",paraId:0},{value:" \u5C5E\u6027 \uFF0C\u8BBE\u7F6E\u521D\u59CB\u8868\u5355\u9879\u9690\u85CF\u6216\u5C55\u793A",paraId:0}]},84651:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(29434);const r=[{value:` npm i carefree-antd-form
`,paraId:0},{value:"SimpleForm",paraId:1},{value:"\u7EC4\u4EF6\u8868\u5355\u5C5E\u6027\u7EE7\u627F ",paraId:1},{value:"antd Form",paraId:1},{value:" \u8868\u5355\u5C5E\u6027",paraId:1},{value:"ItemWatch",paraId:2},{value:" \u76D1\u542C\u53D8\u5316\u7EC4\u4EF6",paraId:2},{value:"useFormWatchList",paraId:2},{value:" \u76D1\u542C\u53D8\u5316 hooks",paraId:2},{value:"useFormContext",paraId:2},{value:" \u7528\u4E8E\u4F20\u9012\u5B50\u7EC4\u4EF6 \u5F00\u542F \u76D1\u542C\u9700\u8981\u7684\u5185\u5BB9",paraId:2},{value:"useFormItemFun",paraId:2},{value:" \u5B50\u7EC4\u4EF6\u5185\u90E8\u72B6\u6001\u65B9\u6CD5\u8C03\u7528",paraId:2},{value:"\u5176\u4ED6\u7684\u4E0E antd from \u4E00\u6837",paraId:2},{value:"useChildItemFun",paraId:2},{value:"\u548C",paraId:2},{value:"getChildItemFun",paraId:2},{value:" \u83B7\u53D6 form \u5185\u90E8\u66F4\u65B0\u5355\u4E2A\u5B57\u6BB5\u503C\u65B9\u6CD5",paraId:2},{value:"useFormItemHide",paraId:2},{value:"\u548C",paraId:2},{value:"HideItem",paraId:2},{value:" \u7528\u4E8E\u7EC4\u4EF6\u9690\u85CF\u4F7F\u7528",paraId:2},{value:"useSubscribe",paraId:2},{value:"\u3001",paraId:2},{value:"FormSubscribeProvider",paraId:2},{value:" \u3001",paraId:2},{value:"useFormSubscribeProvider",paraId:2},{value:" \u3001",paraId:2},{value:"useSubscribeReginsterId",paraId:2},{value:" \u7528\u4E8E\u6536\u96C6 form \u8868\u5355",paraId:2},{value:"Cols",paraId:2},{value:":Col \u7EC4\u4EF6\u52A0\u9ED8\u8BA4\u6837\u5F0F\uFF0C ",paraId:2},{value:"ColItem",paraId:2},{value:":\u5C01\u88C5 Cols \u548C Form.Item \u7EC4\u4EF6 \u52A0\u9ED8\u8BA4\u53C2\u6570\uFF0C",paraId:2},{value:"ColWatchItem",paraId:2},{value:":ColItem \u548C \u76D1\u542C\u7EC4\u4EF6\u8FDB\u884C\u5408\u5E76",paraId:2},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"config",paraId:3,tocIndex:4},{value:"\u8868\u5355\u9879\u914D\u7F6E\u96C6\u5408",paraId:3,tocIndex:4},{value:"SimpleFormConfigProps<T, K>[]",paraId:3,tocIndex:4},{value:"isSearch",paraId:3,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u67E5\u8BE2\u6309\u94AE\u548C\u91CD\u7F6E\u6309\u94AE",paraId:3,tocIndex:4},{value:"boolen",paraId:3,tocIndex:4},{value:"displayPre",paraId:3,tocIndex:4},{value:"\u53EA\u663E\u793A\u524D\u9762\u90E8\u5206\u67E5\u8BE2\u6761\u4EF6",paraId:3,tocIndex:4},{value:"number | undefined",paraId:3,tocIndex:4},{value:"onRest",paraId:3,tocIndex:4},{value:"\u91CD\u7F6E\u6309\u94AE\u6761\u4EF6",paraId:3,tocIndex:4},{value:"() => void",paraId:3,tocIndex:4},{value:"searchBtnItem",paraId:3,tocIndex:4},{value:"\u67E5\u8BE2\u6309\u94AE formItem \u914D\u7F6E",paraId:3,tocIndex:4},{value:"FormItemProps",paraId:3,tocIndex:4},{value:"searchBtnProps",paraId:3,tocIndex:4},{value:"\u67E5\u8BE2\u6309\u94AE\u914D\u7F6E",paraId:3,tocIndex:4},{value:"ButtonProps",paraId:3,tocIndex:4},{value:"searchBtnRestProps",paraId:3,tocIndex:4},{value:"\u91CD\u7F6E\u6309\u94AE\u914D\u7F6E",paraId:3,tocIndex:4},{value:"ButtonProps",paraId:3,tocIndex:4},{value:"rowProps",paraId:3,tocIndex:4},{value:"Row \u914D\u7F6E",paraId:3,tocIndex:4},{value:"RowProps",paraId:3,tocIndex:4},{value:"colProps",paraId:3,tocIndex:4},{value:"\u6BCF\u4E00\u9879 Col \u914D\u7F6E",paraId:3,tocIndex:4},{value:"ColProps",paraId:3,tocIndex:4},{value:"itemStyle",paraId:3,tocIndex:4},{value:"\u6BCF\u4E2A item \u4E2D\u516C\u5171 style \u6837\u5F0F",paraId:3,tocIndex:4},{value:"React.CSSProperties",paraId:3,tocIndex:4},{value:"attrStyle",paraId:3,tocIndex:4},{value:"\u6BCF\u4E2A \u8868\u5355\u8F93\u5165\u63A7\u4EF6\u516C\u5171\u5C5E\u6027 \u6837\u5F0F",paraId:3,tocIndex:4},{value:"React.CSSProperties",paraId:3,tocIndex:4},{value:"attrProps",paraId:3,tocIndex:4},{value:"\u6BCF\u4E2A \u8868\u5355\u8F93\u5165\u63A7\u4EF6\u516C\u5171\u5C5E\u6027 \u9664\u6837\u5F0F\u5176\u4ED6\u5C5E\u6027",paraId:3,tocIndex:4},{value:"Partial<ItemChildAttr>",paraId:3,tocIndex:4},{value:"watchList",paraId:3,tocIndex:4},{value:"\u76D1\u542C\u5B57\u6BB5",paraId:3,tocIndex:4},{value:"WatchListProps",paraId:3,tocIndex:4},{value:"formHide",paraId:3,tocIndex:4},{value:"Form.useFormItemHide \u8FD4\u56DE\u503C",paraId:3,tocIndex:4},{value:"GetStoreProps",paraId:3,tocIndex:4},{value:"initialHide",paraId:3,tocIndex:4},{value:"\u521D\u59CB\u503C \u9690\u85CF\u663E\u793A \u5B57\u6BB5\u5BF9\u5E94\u7684\u503C",paraId:3,tocIndex:4},{value:"{ [x: string]: boolean }",paraId:3,tocIndex:4},{value:"subscribe",paraId:3,tocIndex:4},{value:"\u7528\u4E8E\u591A\u4E2A form \u8868\u5355",paraId:3,tocIndex:4},{value:"Subscribe",paraId:3,tocIndex:4},{value:"children",paraId:3,tocIndex:4},{value:"React.ReactNode",paraId:3,tocIndex:4},{value:"config \u914D\u7F6E",paraId:4,tocIndex:4},{value:"\u53C2\u6570",paraId:5,tocIndex:4},{value:"\u8BF4\u660E",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"type",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"ItemChildType",paraId:5,tocIndex:4},{value:"label",paraId:5,tocIndex:4},{value:"formItem \u8868\u5355 label \u503C",paraId:5,tocIndex:4},{value:"React.ReactNode",paraId:5,tocIndex:4},{value:"name",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"string | number | (string | number)[]",paraId:5,tocIndex:4},{value:"itemAttr",paraId:5,tocIndex:4},{value:"formItem \u8868\u5355 \u5176\u4ED6\u5C5E\u6027\u503C",paraId:5,tocIndex:4},{value:"Omit<FormItemProps, 'rules' | 'label' | 'name'> & { watch?: boolean}",paraId:5,tocIndex:4},{value:"attr",paraId:5,tocIndex:4},{value:"formItem \u8868\u5355 children \u4E2D\u7EC4\u4EF6\u53C2\u6570",paraId:5,tocIndex:4},{value:"Partial<ItemChildAttr<T, K>>",paraId:5,tocIndex:4},{value:"rules",paraId:5,tocIndex:4},{value:"formItem \u8868\u5355 \u89C4\u5219",paraId:5,tocIndex:4},{value:"Rule[]",paraId:5,tocIndex:4},{value:"render",paraId:5,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:5,tocIndex:4},{value:"React.ReactNode | ((...arg: any) => React.ReactNode)",paraId:5,tocIndex:4},{value:"isItemList",paraId:5,tocIndex:4},{value:"\u662F\u5426\u4F7F\u7528 list",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"colProps",paraId:5,tocIndex:4},{value:"\u6BCF\u4E00\u9879 Col \u914D\u7F6E",paraId:5,tocIndex:4},{value:"ColProps",paraId:5,tocIndex:4},{value:"\u7C7B\u578B\u5B9A\u4E49",paraId:6,tocIndex:4},{value:`export type ItemChildType =
  | 'Custom'
  | 'Input'
  | 'InputNumber'
  | 'Select'
  | 'AutoComplete'
  | 'Cascader'
  | 'Checkbox'
  | 'DatePicker'
  | 'Mentions'
  | 'Radio'
  | 'Rate'
  | 'Slider'
  | 'Switch'
  | 'TimePicker'
  | 'TreeSelect'
  | 'Upload';

export type ItemChildAttr<T = any, K = any> =
  | InputProps
  | InputNumberProps
  | SelectProps<T>
  | AutoCompleteProps
  | CascaderProps<any>
  | CheckboxProps
  | DatePickerProps
  | MentionProps
  | RadioProps
  | RateProps
  | SliderSingleProps
  | SwitchProps
  | TimePickerProps
  | TreeSelectProps<K>
  | UploadProps;

/** config \u914D\u7F6E\u9879  */
export interface SimpleFormConfigProps<T = any, K = any> {
  /** \u7C7B\u578B */
  type: ItemChildType;
  /** formItem \u8868\u5355 label \u503C */
  label?: string | React.ReactNode;
  /** formItem \u8868\u5355 name \u503C */
  name?: string | number | (string | number)[];
  /** formItem \u8868\u5355 \u5176\u4ED6\u5C5E\u6027\u503C*/
  itemAttr?: Omit<FormItemProps, 'rules' | 'label' | 'name'> & {
    /** \u7528\u4E8E\u5F53\u524D\u7684Item\u9879\u662F\u5426\u7528\u4E8E\u76D1\u542C\uFF0C(\u524D\u63D0\u662FwatchList\u8BBE\u7F6E\u4E86) */ watch?: boolean;
  };
  /** formItem \u8868\u5355 children \u4E2D\u7EC4\u4EF6\u53C2\u6570*/
  attr?: Partial<ItemChildAttr<T, K>>;
  /** formItem \u8868\u5355 \u89C4\u5219*/
  rules?: Rule[];
  render?: React.ReactNode | ((...arg: any) => React.ReactNode);
  /** \u662F\u5426\u4F7F\u7528 list */
  isItemList?: boolean;
  /** \u6BCF\u4E00\u9879 Col\u914D\u7F6E */
  colProps?: ColProps;
}

export interface SimpleFormProps<T = any, K = any> extends FormProps {
  config?: SimpleFormConfigProps<T, K>[];
  // \u662F\u5426\u663E\u793A\u67E5\u8BE2\u6309\u94AE\u548C\u91CD\u7F6E\u6309\u94AE
  isSearch?: boolean;
  /** \u53EA\u663E\u793A\u524D\u9762\u90E8\u5206\u67E5\u8BE2\u6761\u4EF6 */
  displayPre?: number | undefined;
  /** \u91CD\u7F6E\u6309\u94AE\u6761\u4EF6 */
  onRest?: () => void;
  /** \u67E5\u8BE2\u6309\u94AE formItem\u914D\u7F6E */
  searchBtnItem?: FormItemProps;
  /** \u67E5\u8BE2\u6309\u94AE\u914D\u7F6E */
  searchBtnProps?: ButtonProps;
  /** \u91CD\u7F6E\u6309\u94AE\u914D\u7F6E */
  searchBtnRestProps?: ButtonProps;
  children?: React.ReactNode;

  /** Row \u914D\u7F6E */
  rowProps?: RowProps;
  /** \u6BCF\u4E00\u9879 Col\u914D\u7F6E */
  colProps?: ColProps;
  /** \u6BCF\u4E2A item \u4E2D\u516C\u5171 style \u6837\u5F0F */
  itemStyle?: React.CSSProperties;
  /** \u6BCF\u4E2A \u8868\u5355\u8F93\u5165\u63A7\u4EF6\u516C\u5171\u5C5E\u6027 \u6837\u5F0F */
  attrStyle?: React.CSSProperties;
  /** \u6BCF\u4E2A \u8868\u5355\u8F93\u5165\u63A7\u4EF6\u516C\u5171\u5C5E\u6027 \u9664\u6837\u5F0F\u5176\u4ED6\u5C5E\u6027 */
  attrProps?: Partial<ItemChildAttr>;
  // \u76D1\u542C\u5B57\u6BB5
  watchList?: WatchListProps;
  /** Form.useFormItemHide \u8FD4\u56DE\u503C  */
  formHide?: GetStoreProps;
  /** \u521D\u59CB\u503C \u9690\u85CF\u663E\u793A \u5B57\u6BB5\u5BF9\u5E94\u7684\u503C */
  initialHide?: { [x: string]: boolean };
  // \u7528\u4E8E\u591A\u4E2Aform\u8868\u5355
  subscribe?: Subscribe;
}
`,paraId:7,tocIndex:4}]},88412:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(7131);const r=[{value:"updateValue",paraId:0},{value:" \u548C ",paraId:0},{value:"bathUpdateValue",paraId:0},{value:" \u65B9\u6CD5\u66F4\u65B0\u8868\u5355\u503C\uFF0C\u53EF\u4EE5\u89E6\u53D1 ",paraId:0},{value:"onValuesChange",paraId:0},{value:" \u4E8B\u4EF6",paraId:0},{value:"\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"getChildItemFun",paraId:1,tocIndex:1},{value:" \u65B9\u6CD5\u83B7\u53D6",paraId:1,tocIndex:1}]},34434:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(9087);const r=[{value:"form \u52A0 ",paraId:0},{value:"watchList",paraId:0},{value:" \u5C5E\u6027, \u5BF9\u8868\u5355\u9879\u66F4\u65B0\u503C\u8FDB\u884C\u76D1\u542C",paraId:0}]},67157:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(30372);const r=[{value:"useSubscribe",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(sub?: Subscribe) => Subscribe[]",paraId:2,tocIndex:0},{value:`const [subscribe] = useSubscribe();
`,paraId:3,tocIndex:0},{value:"SubscribeFormProvider",paraId:4,tocIndex:0},{value:"\u653E\u5728\u6700\u5916\u5C42\uFF0C\u7528\u4E8E\u6536\u96C6 from \u8868\u5355\u4FDD\u5B58",paraId:5,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:6,tocIndex:0},{value:"React.Context<Subscribe>",paraId:6,tocIndex:0},{value:`export default () => {
  const [subscribe] = useSubscribe();

  return (
    <SubscribeFormProvider.Provider value={subscribe}>
      // ....
    </SubscribeFormProvider.Provider>
  );
};
`,paraId:7,tocIndex:0},{value:"useSubscribeFormProvider",paraId:8,tocIndex:0},{value:"\u83B7\u53D6 ",paraId:9,tocIndex:0},{value:"SubscribeFormProvider",paraId:9,tocIndex:0},{value:" context \u503C",paraId:9,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:10,tocIndex:0},{value:"() => Subscribe",paraId:10,tocIndex:0},{value:`export default () => {
  const subscribe = useSubscribeFormProvider();

  return <div></div>;
};
`,paraId:11,tocIndex:0},{value:"useSubscribeReginsterId",paraId:12,tocIndex:0},{value:"\u628A\u5F53\u524D\u8868\u5355\u4FDD\u5B58\u5230\u72B6\u6001\u6536\u96C6\u5668\u4E2D",paraId:13,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:14,tocIndex:0},{value:"({form: FormInstance,hide: HideGetStoreProps, subscribe: Subscribe, name?: string}) => void",paraId:14,tocIndex:0},{value:"\u53C2\u6570",paraId:15,tocIndex:0},{value:"\u7C7B\u578B",paraId:15,tocIndex:0},{value:"\u8BF4\u660E",paraId:15,tocIndex:0},{value:"name",paraId:15,tocIndex:0},{value:"string|number",paraId:15,tocIndex:0},{value:"\u8868\u5355\u540D\u79F0",paraId:15,tocIndex:0},{value:"form",paraId:15,tocIndex:0},{value:"FormInstance<any>",paraId:15,tocIndex:0},{value:"\u901A\u8FC7 Form.useForm()",paraId:15,tocIndex:0},{value:"subscribe",paraId:15,tocIndex:0},{value:"Subscribe",paraId:15,tocIndex:0},{value:"\u901A\u8FC7 useSubscribe()",paraId:15,tocIndex:0},{value:"hide",paraId:15,tocIndex:0},{value:"HideStore",paraId:15,tocIndex:0},{value:"\u901A\u8FC7 useHideFormItem()",paraId:15,tocIndex:0},{value:`export default () => {
  const [subscribe] = useSubscribe();
  const [forms] = Form.useForm();
  const [sub] = useSubscribe();
  const [hide] = useHideFormItem();

  useSubscribeReginsterId({
    name: props.name,
    form: forms,
    subscribe: sub,
    hide: hide,
  });

  return <div></div>;
};
`,paraId:16,tocIndex:0}]},68927:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(11010);const r=[{value:"useHideFormItem",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(form?: HideGetStoreProps) => HideGetStoreProps[]",paraId:2,tocIndex:0},{value:`export default () => {
  const [hide] = useHideFormItem();
};
`,paraId:3,tocIndex:0},{value:"HideContext",paraId:4,tocIndex:0},{value:"\u653E\u5728\u6700\u5916\u5C42\uFF0C\u7528\u4E8E\u6536\u96C6 \u8868\u5355\u9879\u662F\u5426\u9690\u85CF/\u5C55\u793A",paraId:5,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:6,tocIndex:0},{value:"React.Context<HideGetStoreProps>",paraId:6,tocIndex:0},{value:`export default () => {
  const [hide] = useHideFormItem();

  return <HideContext.Provider value={hide}>// ....</HideContext.Provider>;
};
`,paraId:7,tocIndex:0},{value:"useHideContext",paraId:8,tocIndex:0},{value:"\u83B7\u53D6 ",paraId:9,tocIndex:0},{value:"HideContext",paraId:9,tocIndex:0},{value:" context \u503C",paraId:9,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:10,tocIndex:0},{value:"() => HideGetStoreProps",paraId:10,tocIndex:0},{value:`export default () => {
  const hideContext = useHideContext();

  return <div></div>;
};
`,paraId:11,tocIndex:0},{value:"HideItem",paraId:12,tocIndex:0},{value:"\u9690\u85CF\u7EC4\u4EF6",paraId:13,tocIndex:0},{value:"\u53C2\u6570",paraId:14,tocIndex:0},{value:"\u7C7B\u578B",paraId:14,tocIndex:0},{value:"\u8BF4\u660E",paraId:14,tocIndex:0},{value:"name",paraId:14,tocIndex:0},{value:"string|number|(string|number)[]",paraId:14,tocIndex:0},{value:"\u5B57\u6BB5\u540D\u79F0",paraId:14,tocIndex:0},{value:`export default () => {
  return <HideItem name="a"></HideItem>;
};
`,paraId:15,tocIndex:0}]},25777:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(70174);const r=[{value:"useWatchList",paraId:0,tocIndex:0},{value:"\u6536\u96C6\u5728\u76D1\u542C\u540E\u9700\u8981\u7684\u4E00\u4E9B\u5904\u7406\u6570\u636E\u7684\u65B9\u6CD5",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(props: {[x: string]: any}) => ChildPropsType[]",paraId:2,tocIndex:0},{value:`export const WatchItem = (props: { [x: string]: any }) => {
  const { children, ...rest } = props || {};
  const [childProps] = useWatchList(props);
  if (typeof children === 'function') {
    return children({ ...rest, childProps });
  }
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...rest });
  }
  return children;
};
`,paraId:3,tocIndex:0},{value:"WatchItem",paraId:4,tocIndex:0},{value:"\u76D1\u542C\u7EC4\u4EF6",paraId:5,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:6,tocIndex:0},{value:"(props: {[x: string]: any}) => any",paraId:6,tocIndex:0},{value:`export default ()=>{

  return <Form.Item name="a" label="\u6D4B\u8BD5" >
      <WatchItem><Input ></WatchItem>
  </Form.Item>
}

`,paraId:7,tocIndex:0}]},85426:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(56296);const r=[{value:"\u4E00\u4E2A\u4F20\u9012\u5176\u4ED6\u7EC4\u4EF6\u9700\u8981\u7684\u53C2\u6570\u7684 context",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"React.Context<ContextProps>",paraId:1,tocIndex:0},{value:"\u83B7\u53D6 ",paraId:2,tocIndex:1},{value:"FormContext",paraId:2,tocIndex:1},{value:" \u7684\u503C",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"() => ContextProps",paraId:3,tocIndex:1},{value:"\u4E00\u4E2A\u4F20\u9012 \u8868\u5355\u540D\u79F0\u7684 context",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"React.Context<string|number>",paraId:5,tocIndex:2},{value:"\u83B7\u53D6 ",paraId:6,tocIndex:3},{value:"FormParentNameContext",paraId:6,tocIndex:3},{value:" \u7684\u503C",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"() => string|number",paraId:7,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:4},{value:"Form.useForm()",paraId:8,tocIndex:4},{value:" \u8FD4\u56DE\u503C [from] \u8FDB\u884C\u83B7\u53D6\u5B50\u9879\u4E2D\u66F4\u65B0\u503C\u7684\u65B9\u6CD5",paraId:8,tocIndex:4},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:4},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:9,tocIndex:4},{value:"\u83B7\u53D6 ",paraId:10,tocIndex:5},{value:"from.useForm",paraId:10,tocIndex:5},{value:" \u4E2D\u66F4\u65B0",paraId:10,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:11,tocIndex:5},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:11,tocIndex:5}]},13829:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(91046);const r=[{value:"\u6839\u636E rc-field-from \u5C01\u88C5\u7684\u8868\u5355\u8054\u52A8/\u9690\u85CF/\u76D1\u542C \u7EC4\u4EF6\u6216\u5DE5\u5177",paraId:0},{value:`
npm i carefree-rc-field-from-utils

`,paraId:1},{value:"\u4E3A\u4E86\u7B80\u5316\u4F7F\u7528 \u90E8\u5206\u7C7B\u578B\u58F0\u660E",paraId:2},{value:"Form \u914D\u7F6E",paraId:3},{value:`// ItemChildType \u4E3A string \u7C7B\u578B\u7684\u503C \u5BF9\u5E94\u5355\u4E2A\u8868\u5355\u7EC4\u4EF6
export type ItemChildType = string | 'Custom'; // \u9ED8\u8BA4 \u7684\u7C7B\u578B
// ItemChildAttr \u4E3A any \u7C7B\u578B \u5BF9\u5E94\u6BCF\u4E2A\u8868\u5355\u7EC4\u4EF6\u7684\u53C2\u6570
export type ItemChildAttr = any; // \u9ED8\u8BA4 \u7684\u7C7B\u578B

export interface CarefreeFormProps<
  M = ItemChildType,
  T = ItemChildAttr,
  K = any,
> extends FormProps {
  config?: CarefreeFormConfigProps<M, T, K>[];
  children?: React.ReactNode;
  /** \u76D1\u542C\u5B57\u6BB5 */
  watchList?: WatchListProps;
  /** Form.useFormItemHide \u8FD4\u56DE\u503C  */
  formHide?: HideGetStoreProps;
  /** \u521D\u59CB\u503C \u9690\u85CF\u663E\u793A \u5B57\u6BB5\u5BF9\u5E94\u7684\u503C */
  initialHide?: { [x: string]: boolean };
  // \u7528\u4E8E\u591A\u4E2Aform\u8868\u5355
  subscribe?: Subscribe;
  /** \u8868\u5355\u9879\u5E03\u5C40 **/
  layout?: 'vertical' | 'horizontal' | 'space';
}
`,paraId:4},{value:"\u6BCF\u4E00\u9879\u7684 Form Item \u914D\u7F6E",paraId:5},{value:`/** config \u914D\u7F6E\u9879  */
export interface CarefreeFormConfigProps<M = ItemChildType, T = any, K = any> {
  /** \u7C7B\u578B */
  type: M;
  /** formItem \u8868\u5355 label \u503C */
  label?: string | React.ReactNode;
  /** formItem \u8868\u5355 name \u503C */
  name?: string | number | (string | number)[];
  /** formItem \u8868\u5355 \u5176\u4ED6\u5C5E\u6027\u503C*/
  itemAttr?: Omit<K, 'rules' | 'label' | 'name'>;
  /** formItem \u8868\u5355 children \u4E2D\u7EC4\u4EF6\u53C2\u6570*/
  attr?: Partial<T>;
  /** formItem \u8868\u5355 \u89C4\u5219*/
  rules?: Rule[];
  render?: React.ReactNode | ((...arg: any) => React.ReactNode);
  // \u662F\u5426\u542F\u7528\u7EC4\u4EF6\u9690\u85CF\u663E\u793A
  isHide?: boolean;
}
`,paraId:6}]},34836:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(49833);const r=[{value:"\u5B57\u6BB5\u8F6C\u6362\u6210 ",paraId:0,tocIndex:0},{value:"_",paraId:0,tocIndex:0},{value:" \u62FC\u63A5\u7684\u5B57\u7B26\u4E32",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"(path: NamePath) => number | InternalNamePath",paraId:1,tocIndex:0},{value:"\u628A\u8868\u5355\u9879\u5B57\u6BB5\u548C\u8868\u5355\u540D\u79F0 \u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"_",paraId:2,tocIndex:1},{value:" \u62FC\u63A5\u5728\u4E00\u8D77",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"(namePath: InternalNamePath, formName?: string): string | undefined",paraId:3,tocIndex:1},{value:"\u8F6C\u6362\u6210\u6570\u7EC4",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"function toArray<T>(candidate?: T | T[] | false): T[]",paraId:5,tocIndex:2},{value:"\u83B7\u53D6\u662F\u5426\u662F\u5FC5\u586B",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"function getRequired(required: boolean | undefined, rules: Rule[] | undefined, form: FormInstance) => boolean",paraId:7,tocIndex:3}]},64330:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(67590);const r=[{value:` npm i carefree-fuzzy-query
`,paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"columns",paraId:1,tocIndex:1},{value:"\u8868\u683C columns",paraId:1,tocIndex:1},{value:"TablesProps['columns']",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:"\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"( params: any) => Promise<{ label: any; value: any; [s: string]: any }[]>",paraId:1,tocIndex:1},{value:"debounceTimeout",paraId:1,tocIndex:1},{value:"\u5EF6\u8FDF\u65F6\u95F4",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"tipWidth",paraId:1,tocIndex:1},{value:"\u63D0\u793A\u6846 \u5BBD\u5EA6",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"\u66F4\u591A\u53C2\u6570",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:3,tocIndex:1},{value:`export interface FuzzyQueryProps extends SelectProps<any> {
  /** \u8868\u683C\u6807\u9898 */
  columns?: TablesProps['columns'];
  /** \u8BF7\u6C42 */
  request: (
    params: any,
  ) => Promise<{ label: any; value: any; [s: string]: any }[]>;
  /** \u5EF6\u8FDF\u65F6\u95F4 */
  debounceTimeout?: number;
  /** \u63D0\u793A\u6846 \u5BBD\u5EA6 */
  tipWidth?: number;
}
`,paraId:4,tocIndex:1}]},59715:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(6857);const r=[{value:"\u96C6\u6210\u67E5\u8BE2\u8868\u5355\u548C\u8868\u683C\uFF0C\u5B9E\u73B0\u5FEB\u901F\u4F7F\u7528\u8868\u5355\u8868\u683C\u8054\u5408\u4F7F\u7528\u7B80\u5355\u5316\uFF0C\u5FEB\u901F\u5B9E\u73B0\u4EE3\u7801\u529F\u80FD",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"Api",paraId:1,tocIndex:0},{value:"\u63A5\u53E3\u8C03\u7528 \u53EF\u4EE5\u8C03\u7528\u7684\u63A5\u53E3",paraId:1,tocIndex:0},{value:"ApiProps",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u8868\u683C columns",paraId:1,tocIndex:0},{value:"(v?: Store) => TableProps<any>['columns']|TableProps<any>['columns']",paraId:1,tocIndex:0},{value:"main",paraId:1,tocIndex:0},{value:"\u72B6\u6001 \u5B58\u50A8",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"initialValues",paraId:1,tocIndex:0},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:0},{value:"Store['store']",paraId:1,tocIndex:0},{value:"searchHead",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355\u8868\u5934\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"searchCardProps",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355 \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableHead",paraId:1,tocIndex:0},{value:"\u8868\u683C\u5934\u90E8\u64CD\u4F5C\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"tableCardProps",paraId:1,tocIndex:0},{value:"\u8868\u683C \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableConfig",paraId:1,tocIndex:0},{value:"\u8868\u683C\u914D\u7F6E",paraId:1,tocIndex:0},{value:"TableProps<any> & { apiName?: string,table?: { page?: number, pageSize?: number, dataSource?: any[],total?: number,selectRows?: any[], selectRowKeys?: any[],pagination?: PageProps,}",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:2,tocIndex:0},{value:`// \u53C2\u6570
export interface ProTableProps {
  /** \u67E5\u8BE2\u8868\u5355 */
  search?: SimpleFormProps & {
    apiName?: string;
    onRest?: (main?: Store) => void;
    onFinish?: (value: any, main?: Store) => void;
  };
  /**  \u67E5\u8BE2\u8868\u5355\u8868\u5934\u6309\u94AE */
  searchHead?: (v: Store) => React.ReactNode;
  /** \u67E5\u8BE2\u8868\u5355 \u5916\u5C42 card */
  searchCardProps?: CardProps;
  /** \u8868\u683C\u5934\u90E8\u64CD\u4F5C\u6309\u94AE */
  tableHead?: (v: Store) => React.ReactNode;
  /** \u8868\u683C \u5916\u5C42 card */
  tableCardProps?: CardProps;
  /** \u8868\u683C\u914D\u7F6E */
  tableConfig?: TableProps<any> & {
    /** \u63A5\u53E3\u540D\u79F0 */
    apiName?: string;
    /** \u8868\u683C\u6570\u636E\u521D\u59CB\u503C **/
    table?: {
      /** \u5206\u9875 */
      page?: number;
      /** \u6BCF\u9875\u6570\u636E */
      pageSize?: number;
      /** \u6570\u636E\u6E90 */
      dataSource?: any[];
      /** \u603B\u6761\u6570 */
      total?: number;
      /** \u9009\u4E2D\u6570\u636E */
      selectRows?: any[];
      /** \u9009\u4E2D\u6570\u636E rowKey */
      selectRowKeys?: any[];
    };
    pagination?: PageProps;
  };
  /** \u8868\u683Ccolumns */
  columns?:
    | ((v?: Store) => TableProps<any>['columns'])
    | TableProps<any>['columns'];
  /** \u63A5\u53E3\u8C03\u7528  \u53EF\u4EE5\u8C03\u7528\u7684\u63A5\u53E3 */
  Api?: ApiProps;
  /** \u72B6\u6001 \u5B58\u50A8 */
  main?: Store;
  /** \u521D\u59CB\u503C */
  initialValues?: Store['store'];
}

/** \u91CD\u5199  pagination \u4E2D\u7684 onChange \u4E8B\u4EF6\u53C2\u6570 */
export interface PageProps extends TablePaginationConfig {
  onChange?: (page: number, pageSize: number, main?: Store) => void;
}

/** api \u63A5\u53E3\u914D\u7F6E */
export interface ApiProps {
  [api: string]: {
    /** \u8BF7\u6C42\u5730\u5740 */
    url?: string;
    /** \u63A5\u53E3\u8BF7\u6C42\u7C7B\u578B */
    method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD' | 'OPTIONS';
    /** \u751F\u4EA7\u62FC\u63A5 \u540E\u7AEF\u6A21\u5757\u540D */
    module?: string;
    options?: RequestOptionsInit;
    /**  \u70B9\u51FB\u540E \u5148\u89E6\u53D1\u5F53\u524D\u64CD\u4F5C \u901A\u8FC7 callBack \u6267\u884C\u5185\u90E8\u7EE7\u7EED\u64CD\u4F5C */
    before?: (item: any) => boolean;
    /** \u5904\u7406\u8BF7\u6C42api\u4E4B\u524D\u7684\u6570\u636E\u6570\u636E */
    requestBefore?: (item: any) => any;
    /** \u5904\u7406\u8BF7\u6C42\u4E4B\u540E\u7684\u6570\u636E\u8FDB\u884C\u4FDD\u5B58 */
    requestAfter?: (item: any) => any;
  };
}
`,paraId:3,tocIndex:0}]},51550:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(90147);const r=[{value:` npm i carefree-antd-transfer-search
`,paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"initValue",paraId:1,tocIndex:1},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:1},{value:"Partial<{ left: Partial<StoreProps['left']>,right: Partial<StoreProps['right']>}>",paraId:1,tocIndex:1},{value:"leftUseForm",paraId:1,tocIndex:1},{value:"\u5DE6\u4FA7 form",paraId:1,tocIndex:1},{value:"SimpleFormProps['form']",paraId:1,tocIndex:1},{value:"leftSearchConfig",paraId:1,tocIndex:1},{value:"\u5DE6\u4FA7 form \u914D\u7F6E",paraId:1,tocIndex:1},{value:"SimpleFormProps",paraId:1,tocIndex:1},{value:"rightUseForm",paraId:1,tocIndex:1},{value:"\u53F3\u4FA7 form",paraId:1,tocIndex:1},{value:"SimpleFormProps['form']",paraId:1,tocIndex:1},{value:"rightSearchConfig",paraId:1,tocIndex:1},{value:"\u53F3\u4FA7 form \u914D\u7F6E",paraId:1,tocIndex:1},{value:"SimpleFormProps",paraId:1,tocIndex:1},{value:"rowKey",paraId:1,tocIndex:1},{value:"\u8868\u683C\u4E3B\u952E",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"columns",paraId:1,tocIndex:1},{value:"\u8868\u683C\u5217",paraId:1,tocIndex:1},{value:"TableProps<any>['columns']",paraId:1,tocIndex:1},{value:"Api",paraId:1,tocIndex:1},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:1},{value:"{left: ApiType<'left' | 'right'>, right: ApiType<'left' | 'right'>,add: ApiType<OperationType>, allAdd: ApiType<OperationType>, delete: ApiType<OperationType>,allDelete: ApiType<OperationType>}",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:`import { SimpleFormProps } from 'carefree-antd-form';

export interface SearchProps {
  /** \u5DE6\u4FA7\u8868\u5355\u914D\u7F6E */
  leftSearchConfig: SimpleFormProps;
  /** \u53F3\u4FA7\u8868\u5355\u914D\u7F6E */
  rightSearchConfig: SimpleFormProps;
  /** \u67E5\u8BE2\u65B9\u6CD5  */
  onSearch: (type: 'left' | 'right') => void;
  /** \u503C\u66F4\u65B0 */
  onValuesChange: (value: any, allValue: any, type: 'left' | 'right') => void;
}

export type ApiType<T> = {
  /** \u8BF7\u6C42\u5730\u5740 */
  url: string;
  /** \u5176\u4ED6\u8BF7\u6C42\u914D\u7F6E */
  options?: RequestOptionsInit;
  /** main \u5185\u90E8\u72B6\u6001\u5B58\u50A8\u503C \u8FD4\u56DE\u503C\u4E3A false \u4E0D\u7EE7\u7EED\u5F80\u4E0B\u8D70 */
  before: (main: any, type: T) => false | object;
  /** \u8BF7\u6C42\u4E4B\u540E\u5904\u7406\u6570\u636E  \u8FD4\u56DE\u503C\u4E3A false \u4E0D\u7EE7\u7EED\u5F80\u4E0B\u8D70 */
  after: (response: any, type: T) => false | object;
};

export interface TransferSearchProps
  extends Omit<SearchProps, 'onSearch' | 'onValuesChange'> {
  /**  \u521D\u59CB\u503C */
  initValue?: Partial<{
    left: Partial<StoreProps['left']>;
    right: Partial<StoreProps['right']>;
  }>;
  /** \u5DE6\u4FA7 form */
  leftUseForm?: SimpleFormProps['form'];
  /** \u53F3\u4FA7\u4FA7 form */
  rightUseForm?: SimpleFormProps['form'];
  /** \u8868\u683C\u4E3B\u952E */
  rowKey: string;
  /** \u8868\u683C\u5217 */
  columns: TableProps<any>['columns'];
  /** \u8BF7\u6C42\u63A5\u53E3 */
  Api: {
    /** \u5DE6\u4FA7\u67E5\u8BE2\u63A5\u53E3 */
    left: ApiType<'left' | 'right'>;
    /** \u53F3\u4FA7\u67E5\u8BE2\u63A5\u53E3 */
    right: ApiType<'left' | 'right'>;
    /** \u4E2D\u95F4\u64CD\u4F5C  \u5F80\u5DE6 \u5355\u4E2A */
    add: ApiType<OperationType>;
    /** \u4E2D\u95F4\u64CD\u4F5C  \u5F80\u5DE6 \u53CC\u4E2A */
    allAdd: ApiType<OperationType>;
    /** \u4E2D\u95F4\u64CD\u4F5C  \u5F80\u53F3 \u5355\u4E2A */
    delete: ApiType<OperationType>;
    /** \u4E2D\u95F4\u64CD\u4F5C  \u5F80\u53F3 \u53CC\u4E2A */
    allDelete: ApiType<OperationType>;
  };
}

export interface TransferSearchRef {
  /** \u4E2D\u95F4\u64CD\u4F5C\u65B9\u6CD5 */
  handleOperation: (type: OperationType) => Promise<void>;
  /** \u7FFB\u9875 */
  onPageChange: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** \u9009\u4E2D */
  onSelectedChange: (
    selectedKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** \u67E5\u8BE2 */
  onSearch: (type: 'left' | 'right') => Promise<void>;
  /** \u72B6\u6001\u5B58\u50A8\u6570\u636E */
  store: Store;
  /** \u66F4\u65B0\u5F53\u524D\u7EC4\u4EF6 */
  forceUpdate: () => void;
  /** \u5DE6\u4FA7 form */
  leftUseForm: SimpleFormProps['form'];
  /** \u53F3\u4FA7\u4FA7 form */
  rightUseForm: SimpleFormProps['form'];
}
`,paraId:3,tocIndex:1}]},57798:function(ve,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return r}});var Q=e(41699);const r=[{value:` npm i carefree-antd-transfer
`,paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"rowKey",paraId:1,tocIndex:0},{value:"\u5217\u8868\u4E3B\u952E",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u5217\u8868",paraId:1,tocIndex:0},{value:"TableGroupProps['columns']",paraId:1,tocIndex:0},{value:"leftConfig",paraId:1,tocIndex:0},{value:"\u5DE6\u4FA7\u8868\u683C\u914D\u7F6E",paraId:1,tocIndex:0},{value:"Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>",paraId:1,tocIndex:0},{value:"leftSelected",paraId:1,tocIndex:0},{value:"\u5DE6\u4FA7\u9009\u4E2D\u6570\u636E",paraId:1,tocIndex:0},{value:"{ selectedRowKeys?: React.Key[]; selectedRows?: any[] }",paraId:1,tocIndex:0},{value:"leftDataSource",paraId:1,tocIndex:0},{value:"\u5DE6\u4FA7\u6570\u636E\u6E90",paraId:1,tocIndex:0},{value:"readonly any[]",paraId:1,tocIndex:0},{value:"rightConfig",paraId:1,tocIndex:0},{value:"\u53F3\u4FA7\u4FA7\u8868\u683C\u914D\u7F6E",paraId:1,tocIndex:0},{value:"Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>",paraId:1,tocIndex:0},{value:"rightSelected",paraId:1,tocIndex:0},{value:"\u53F3\u4FA7\u9009\u4E2D\u6570\u636E",paraId:1,tocIndex:0},{value:"{ selectedRowKeys?: React.Key[]; selectedRows?: any[] }",paraId:1,tocIndex:0},{value:"rightDataSource",paraId:1,tocIndex:0},{value:"\u53F3\u4FA7\u6570\u636E\u6E90",paraId:1,tocIndex:0},{value:"readonly any[]",paraId:1,tocIndex:0},{value:"pagination",paraId:1,tocIndex:0},{value:"\u516C\u5171 pagination \u5C5E\u6027",paraId:1,tocIndex:0},{value:"TableGroupProps['pagination']",paraId:1,tocIndex:0},{value:"handlePagination",paraId:1,tocIndex:0},{value:"\u5206\u9875",paraId:1,tocIndex:0},{value:"(page: number,pageSize: number, type: 'left' | 'right',)=>void",paraId:1,tocIndex:0},{value:"handleSelected",paraId:1,tocIndex:0},{value:"\u9009\u4E2D",paraId:1,tocIndex:0},{value:"( selectedRowKeys: React.Key[], selectedRows: any[], type: 'left' | 'right',)=>void",paraId:1,tocIndex:0},{value:"handleOperation",paraId:1,tocIndex:0},{value:"\u4E2D\u95F4\u64CD\u4F5C\u65B9\u6CD5",paraId:1,tocIndex:0},{value:"(leftList: readonly any[], rightList: readonly any[], selectedRowKeys: React.Key[], selectedRows: any[], type: OperationType,)=>void",paraId:1,tocIndex:0},{value:"isQuote",paraId:1,tocIndex:0},{value:"\u6570\u636E\u6E90\u53EA\u662F\u5F15\u7528 \u4E0D\u505A\u5176\u4ED6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"ref \u8FD4\u56DE\u503C",paraId:2,tocIndex:0},{value:"\u53C2\u6570",paraId:3,tocIndex:0},{value:"\u8BF4\u660E",paraId:3,tocIndex:0},{value:"\u7C7B\u578B",paraId:3,tocIndex:0},{value:"store",paraId:3,tocIndex:0},{value:"\u5185\u90E8\u72B6\u6001\u5B58\u50A8\u503C",paraId:3,tocIndex:0},{value:"{ leftSelected: TransferProps['leftSelected'],rightSelected: TransferProps['leftSelected'], leftPagination: { page: number; pageSize: number }, rightPagination: { page: number; pageSize: number },leftList: readonly any[],rightList: readonly any[]}",paraId:3,tocIndex:0},{value:"setStore",paraId:3,tocIndex:0},{value:"\u5217\u8868",paraId:3,tocIndex:0},{value:"React.Dispatch<React.SetStateAction<TransferRef['store']>>",paraId:3,tocIndex:0},{value:"handlePagination",paraId:3,tocIndex:0},{value:"\u5206\u9875",paraId:3,tocIndex:0},{value:"(page: number,pageSize: number, type: 'left' | 'right',)=>void",paraId:3,tocIndex:0},{value:"handleSelected",paraId:3,tocIndex:0},{value:"\u9009\u4E2D",paraId:3,tocIndex:0},{value:"( selectedRowKeys: React.Key[], selectedRows: any[], type: 'left' | 'right',)=>void",paraId:3,tocIndex:0},{value:"handleOperation",paraId:3,tocIndex:0},{value:"\u4E2D\u95F4\u64CD\u4F5C\u65B9\u6CD5",paraId:3,tocIndex:0},{value:"(type: OperationType)=>void",paraId:3,tocIndex:0},{value:`export type OperationType = 'add' | 'allAdd' | 'delete' | 'allDelete';

export interface TransferProps {
  /** \u5217\u8868\u4E3B\u952E */
  rowKey: string;
  /** \u5217\u8868 */
  columns: TableGroupProps['columns'];
  /** \u5DE6\u4FA7\u8868\u683C\u914D\u7F6E */
  leftConfig?: Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>;
  /** \u5DE6\u4FA7\u9009\u4E2D\u6570\u636E */
  leftSelected?: { selectedRowKeys?: React.Key[]; selectedRows?: any[] };
  /** \u5DE6\u4FA7\u6570\u636E\u6E90 */
  leftDataSource: readonly any[];
  /** \u53F3\u4FA7\u4FA7\u8868\u683C\u914D\u7F6E */
  rightConfig?: Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>;
  /** \u53F3\u4FA7\u9009\u4E2D\u6570\u636E */
  rightSelected?: { selectedRowKeys?: React.Key[]; selectedRows?: any[] };
  /** \u53F3\u4FA7\u6570\u636E\u6E90 */
  rightDataSource: readonly any[];
  /** \u516C\u5171 pagination\u5C5E\u6027 */
  pagination?: TableGroupProps['pagination'];
  /** \u5206\u9875 */
  handlePagination?: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** \u9009\u4E2D  */
  handleSelected?: (
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** \u4E2D\u95F4\u64CD\u4F5C\u65B9\u6CD5 */
  handleOperation?: (
    leftList: readonly any[],
    rightList: readonly any[],
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: OperationType,
  ) => void;
  /** \u6570\u636E\u6E90\u53EA\u662F\u5F15\u7528 \u4E0D\u505A\u5176\u4ED6 */
  isQuote?: boolean;
}

export interface TransferRef {
  /** \u5185\u90E8\u72B6\u6001\u5B58\u50A8\u503C */
  store: {
    /** \u5DE6\u4FA7\u9009\u4E2D\u6570\u636E */
    leftSelected: TransferProps['leftSelected'];
    /** \u53F3\u4FA7\u9009\u4E2D\u6570\u636E */
    rightSelected: TransferProps['leftSelected'];
    /** \u5DE6\u4FA7\u5206\u9875\u6570\u636E */
    leftPagination: { page: number; pageSize: number };
    /** \u53F3\u4FA7\u4FA7\u5206\u9875\u6570\u636E */
    rightPagination: { page: number; pageSize: number };
    /** \u5DE6\u4FA7\u6570\u636E\u6E90 */
    leftList: readonly any[];
    /** \u53F3\u4FA7\u6570\u636E\u6E90 */
    rightList: readonly any[];
  };
  setStore: React.Dispatch<React.SetStateAction<TransferRef['store']>>;
  /** \u9009\u4E2D\u65B9\u6CD5 */
  handleSelected: (
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** \u5206\u9875\u65B9\u6CD5 */
  handlePagination: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** \u4E2D\u95F4\u64CD\u4F5C\u65B9\u6CD5 */
  handleOperation: (type: OperationType) => void;
}
`,paraId:4,tocIndex:0}]},24654:function(){}}]);
