(self.webpackChunkcarefree_antd_root=self.webpackChunkcarefree_antd_root||[]).push([[56],{59340:function(be,I,e){"use strict";e.r(I),e.d(I,{EditableTableBase:function(){return Vn},EditorTable:function(){return ve},Store:function(){return Me},default:function(){return qn}});var j=e(15009),r=e.n(j),b=e(19632),S=e.n(b),O=e(99289),f=e.n(O),P=e(9783),y=e.n(P),N=e(97857),l=e.n(N),Z=e(5574),$=e.n(Z),oe=e(13769),H=e.n(oe),i=e(85893),h=e(45360),M=e(3929),v=e(83622),m=e(67294),B=e(7825),a=e(86738),_=e(42075),ne=function(o){var t=o.optConfig,n=o.isEditing,g=o.isAddEdit,s=o.save,A=o.isOptDelete,p=o.cancel,D=o.onDelete,E=o.edit,U=o.newAdd,R=o.editingKey,ee=o.rowKey,re=o.multiple,me=o.optDeleteEditingDisabled;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},t),{},{render:function(Fe,ie,je){var te=n(ie),ye=g(ie);return t&&t.render?t.render(Fe,ie,je,{editable:te,isNewAdd:ye,save:s,cancel:p,onDelete:D,edit:E,newAdd:U,editingKey:R}):te?(0,i.jsxs)("span",{children:[(0,i.jsx)(B.Z.Link,{onClick:function(){return s(ie[ee],ie,je)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,i.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:ye?D.bind(void 0,ie[ee],ie,je):p.bind(void 0,ie[ee]),children:(0,i.jsx)(B.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(B.Z.Link,{disabled:!!R.length&&!re,onClick:function(){return E(ie)},children:"\u7F16\u8F91"}),A&&(0,i.jsx)(a.Z,{disabled:me&&!!R.length,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return D(ie[ee],ie,je)},children:(0,i.jsx)(B.Z.Link,{disabled:me&&!!R.length,children:"\u5220\u9664"})})]})}})]},u=ne,c=e(72004),d=e.n(c),L=e(12444),C=e.n(L),z=d()(function Y(){var o=this;C()(this,Y),y()(this,"store",{}),y()(this,"remove",function(t){delete o.store[t]}),y()(this,"register",function(t,n){o.store[t]=n}),y()(this,"getStore",function(){return o.store}),y()(this,"getToKeyForm",function(t){return o.store["".concat(t)]})}),G=function(o){var t=m.useRef();return o?t.current=o:t.current=new z,[t.current]},W=z,F=e(83062),x=e(88692),V=e(88760),Q=e(25278),ue=e(13457),K=e(63960),Ce=e(3303),Ne=e(67002),$e=e(86125),De=e(59847),Ge=e(34041),Je=e(84567),Ye=e(11330),he=e(55742),Re=e(41637),Se=e(68351),X=e(23799),Ie=V.default.RangePicker;function le(Y,o){if(Y.length){var t=Y.join("_");return o?"".concat(o,"_").concat(t):t}}function q(Y){return Y===void 0||Y===!1?[]:Array.isArray(Y)?Y:[Y]}var T=function(o){var t=o.attr,n=o.type,g=o.inputNode,s;if(n==="Input"){var A=t;s=(0,i.jsx)(Q.Z,l()({},A))}else if(n==="TextArea"){var p=t;s=(0,i.jsx)(Q.Z.TextArea,l()({},p))}else if(n==="InputNumber"){var D=t;s=(0,i.jsx)(ue.Z,l()({},D))}else if(n==="AutoComplete"){var E=t;s=(0,i.jsx)(K.Z,l()({},E))}else if(n==="Cascader"){var U=t;s=(0,i.jsx)(Ce.Z,l()({},U))}else if(n==="DatePicker"){var R=t;s=(0,i.jsx)(V.default,l()({},R))}else if(n==="Rate"){var ee=t;s=(0,i.jsx)(Ne.Z,l()({},ee))}else if(n==="Slider"){var re=t;s=(0,i.jsx)($e.Z,l()({},re))}else if(n==="TreeSelect"){var me=t;s=(0,i.jsx)(De.Z,l()({},me))}else if(n==="Select"){var _e=t;s=(0,i.jsx)(Ge.default,l()({},_e))}else if(n==="Checkbox"){var Fe=t;s=(0,i.jsx)(Je.Z.Group,l()({},Fe))}else if(n==="Mentions"){var ie=t;s=(0,i.jsx)(Ye.Z,l()({},ie))}else if(n==="Radio"){var je=t;s=(0,i.jsx)(he.ZP.Group,l()({},je))}else if(n==="Switch"){var te=t;s=(0,i.jsx)(Re.Z,l()({},te))}else if(n==="TimePicker"){var ye=t;s=(0,i.jsx)(Se.Z,l()({},ye))}else if(n==="Upload"){var We=t;s=(0,i.jsx)(X.Z,l()({},We))}else if(n==="RangePicker"){var Le=t;s=(0,i.jsx)(Ie,l()({},Le))}else n==="Custom"&&(s=g);return s},ge=["editing","dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","multiple","rowKey","isList","listAttr"],k=["name","rules","preName","itemValue","children","tipAttr","tip"],J=function(o){var t=o.editing,n=o.dataIndex,g=o.title,s=o.record,A=o.index,p=o.inputNode,D=o.rules,E=o.children,U=o.itemAttr,R=o.type,ee=o.attr,re=o.tip,me=o.tipAttr,_e=o.multiple,Fe=o.rowKey,ie=o.isList,je=o.listAttr,te=je===void 0?{}:je,ye=H()(o,ge),We=T({attr:ee,type:R,inputNode:p}),Le=function(){return ie&&typeof p=="function"?(0,i.jsx)(x.ZP.List,l()(l()({},te),{},{name:n,children:function(bn,fn,dn){return p(bn.map(function(on){return l()(l()({},on),{},{fieldKey:on.key})}),fn,dn)}})):(0,i.jsx)(Ze,l()(l()({},U),{},{name:n,rules:D,preName:s[Fe],itemValue:s,children:We,tipAttr:me,tip:re}))};return(0,i.jsx)("td",l()(l()({},ye),{},{children:t?Le():E}))},Ze=function(o){var t=o.name,n=o.rules,g=o.preName,s=g===void 0?"":g,A=o.itemValue,p=o.children,D=o.tipAttr,E=D===void 0?{}:D,U=o.tip,R=H()(o,k);return(0,i.jsx)(x.ZP.Field,l()(l()({},R),{},{name:t,rules:n,children:function(re,me,_e){var Fe=q(t).length&&me?me.name:[],ie=le(Fe,s),je=function(Le){var Oe=Le;Le&&Le.target&&(Oe=Le.target.value),re.onChange(Oe)},te=typeof p=="function"?p(l()(l()({},re),{},{id:ie}),me,_e,{record:A}):m.isValidElement(p)?m.cloneElement(p,l()(l()({},re),{},{onChange:je,id:ie})):p,ye=me.errors.map(function(We){return We}).join(",");return(0,i.jsx)(F.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},E),{},{title:U?U(ye):ye,open:!!me.errors.length,children:te}))}}))},ae=J,de=m.createContext({formsRef:new W,dataSource:[],rowKey:"id",onValuesChange:function(o,t,n,g){}}),pe=function(o){var t=x.ZP.useForm(),n=$()(t,1),g=n[0],s=m.useContext(de),A=s.formsRef,p=s.onValuesChange,D=p===void 0?function(){}:p,E=s.dataSource,U=s.rowKey;m.useEffect(function(){return function(){return A.remove("".concat(o["data-row-key"]))}},[]),A.register("".concat(o["data-row-key"]),g);var R=E.find(function(ee){return"".concat(ee[U])==="".concat(o["data-row-key"])});return(0,i.jsx)(x.ZP,{onValuesChange:D.bind(void 0,"".concat(o["data-row-key"]),g),form:g,name:"".concat(o["data-row-key"]),component:!1,initialValues:R||{},children:(0,i.jsx)("tr",l()({},o))})},Ae=pe,Ke=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","store","optDeleteEditingDisabled"],fe=function(o,t){var n=o.columns,g=o.dataSource,s=g===void 0?[]:g,A=o.onBeforeSave,p=o.onSave,D=o.rowKey,E=D===void 0?"id":D,U=o.optIsFirst,R=U===void 0?!1:U,ee=o.optConfig,re=ee===void 0?{}:ee,me=o.isOptDelete,_e=me===void 0?!1:me,Fe=o.initValue,ie=Fe===void 0?{}:Fe,je=o.onValuesChange,te=o.isAdd,ye=o.onErr,We=o.multiple,Le=We===void 0?!1:We,Oe=o.onBeforeAdd,ln=o.isOpt,bn=ln===void 0?!0:ln,fn=o.addBtnProps,dn=fn===void 0?{}:fn,on=o.store,sn=o.optDeleteEditingDisabled,un=sn===void 0?!1:sn,En=H()(o,Ke),An=G(on),On=$()(An,1),He=On[0],Cn=(0,m.useState)([]),vn=$()(Cn,2),In=vn[0],we=vn[1],Nn=m.useState([]),Sn=$()(Nn,2),Xe=Sn[0],Ve=Sn[1],Mn=function(Pe){we(function(Be){return Be.filter(function(Qe){return"".concat(Qe)!=="".concat(Pe)})}),Ve(function(Be){return Be.filter(function(Qe){return"".concat(Qe)!=="".concat(Pe)})})},Wn=m.useMemo(function(){return n.filter(function(xe){return xe.editable}).map(function(xe){return xe.dataIndex})},[n]),Un=function(Pe){var Be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Qe=He.getStore();Qe["".concat(Pe)]&&Qe["".concat(Pe)].setFieldsValue(Be)},$n=function(Pe){var Be=He.getStore();return Be["".concat(Pe)]},Kn=function(Pe){return In.includes("".concat(Pe[E]))},wn=function(Pe){return Xe.includes("".concat(Pe[E]))},Zn=function(){if(!(Oe&&!Oe())){if(Xe.length===1&&!Le)return void h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");if(In.length===1&&!Le)return void h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");var Pe=(new Date().getTime()*Math.round(10)).toString(),Be=l()(l()({},ie||{}),{},y()({},E,Pe)),Qe=s.concat([Be]);we(function(en){return en.concat([Pe])}),Ve(function(en){return en.concat([Pe])}),p&&p(Qe,Be)}},Hn=function(Pe){var Be=l()({},Pe);Un(Pe[E],Be),we(function(Qe){return Qe.concat(["".concat(Pe[E])])})},Dn=function(Pe){Mn(Pe),Un(Pe,{})},zn=function(Pe,Be,Qe){var en=s.filter(function(cn){return"".concat(cn[E])!=="".concat(Pe)});Mn(Pe),p&&p(en,Be,Be,Qe)},Gn=function(){var xe=f()(r()().mark(function Pe(Be,Qe,en){var cn,hn,Xn,et;return r()().wrap(function(an){for(;;)switch(an.prev=an.next){case 0:return an.prev=0,an.next=3,$n(Be).validateFields();case 3:if(cn=an.sent,!(A&&!A(cn,Qe,en))){an.next=6;break}return an.abrupt("return");case 6:hn=S()(s),Xn=hn.findIndex(function(lt){return"".concat(Be)==="".concat(lt[E])}),Xn>-1?(et=hn[Xn],hn.splice(Xn,1,l()(l()({},et),cn))):hn.push(cn),p&&p(hn,cn,Qe,en),Mn(Be),$n(Be).resetFields(Wn),an.next=17;break;case 14:an.prev=14,an.t0=an.catch(0),ye&&ye(an.t0);case 17:case"end":return an.stop()}},Pe,null,[[0,14]])}));return function(Be,Qe,en){return xe.apply(this,arguments)}}(),Fn=bn&&u({optConfig:re,isEditing:Kn,isAddEdit:wn,save:Gn,isOptDelete:_e,cancel:Dn,onDelete:zn,edit:Hn,newAdd:Xe,editingKey:In,rowKey:E,multiple:Le,optDeleteEditingDisabled:un})||[],Jn=R?Fn.concat(n):n.concat(Fn),Yn=Jn.map(function(xe){return xe.editable?l()(l()({},xe),{},{onCell:function(Be){return{record:Be,multiple:Le,rowKey:E,dataIndex:xe.dataIndex,title:xe.title,editing:Kn(Be),inputNode:xe.inputNode,rules:xe.rules||[],itemAttr:xe.itemAttr,type:xe.type,attr:xe.attr,tip:xe.tip,tipAttr:xe.tipAttr,isList:xe.isList,listAttr:xe.listAttr}}}):xe}),kn=function(Pe,Be,Qe,en){if(je){var cn=s.map(function(hn){return"".concat(Pe)==="".concat(hn[E])?l()(l()({},hn),en):l()({},hn)});je(cn,Qe,en,Pe,Be)}};return m.useImperativeHandle(t,function(){return{save:Gn,onDelete:zn,edit:Hn,cancel:Dn,add:Zn,isEditing:Kn,editingKey:In,newAdd:Xe,isAddEdit:wn,forms:He}}),(0,i.jsx)(m.Fragment,{children:(0,i.jsxs)(de.Provider,{value:{formsRef:He,onValuesChange:kn,dataSource:s,rowKey:E},children:[(0,i.jsx)(M.Z,l()(l()({size:"small",bordered:!0},En),{},{components:{body:{row:Ae,cell:ae}},rowKey:E,dataSource:s,columns:Yn,rowClassName:"editable-row",pagination:!1})),te&&(0,i.jsx)(v.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},dn||{}),{},{style:l()({marginTop:10},(dn||{}).style||{}),onClick:Zn}))]})})},ce=m.forwardRef(fe),ve=ce;ve.useStore=G,ve.Item=Ze;var se=ve,Me=W,Te=e(25098),w=e.n(Te),ze=e(31996),Ee=e.n(ze),nn=e(26037),Tn=e.n(nn),Ue=e(58161),qe=function(Y){Ee()(t,Y);var o=Tn()(t);function t(){var n;C()(this,t);for(var g=arguments.length,s=new Array(g),A=0;A<g;A++)s[A]=arguments[A];return n=o.call.apply(o,[this].concat(s)),y()(w()(n),"dataSource",[]),y()(w()(n),"initValue",{}),y()(w()(n),"rowKey",""),y()(w()(n),"onSave",void 0),y()(w()(n),"onBeforeAdd",void 0),y()(w()(n),"multiple",void 0),y()(w()(n),"onBeforeEdit",void 0),y()(w()(n),"onBeforeEditCancel",void 0),y()(w()(n),"onBeforeDelete",void 0),y()(w()(n),"onErr",void 0),y()(w()(n),"onBeforeSave",void 0),y()(w()(n),"fields",void 0),y()(w()(n),"onValuesChange",void 0),y()(w()(n),"formInstance",new Map([])),y()(w()(n),"formInstanceMapValues",new Map([])),y()(w()(n),"main_store",function(){var p=l()(l()({},n.defaultInital),{},{editingKeys:n._createRef([]),newAddKeys:n._createRef([])});return n._ctor(p),w()(n)}),y()(w()(n),"formateKeyToString",function(p){return"".concat(p)}),y()(w()(n),"remove",function(p){n.formInstance.delete(n.formateKeyToString(p))}),y()(w()(n),"register",function(p,D){n.formInstance.set(n.formateKeyToString(p),D)}),y()(w()(n),"getStore",function(){return n.formInstance}),y()(w()(n),"getToKeyForm",function(p){return n.formInstance.get(n.formateKeyToString(p))}),y()(w()(n),"restToKeyFormValue",function(p){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=n.getToKeyForm(p);E&&E.setFieldsValue(D)}),y()(w()(n),"isEditing",function(p){var D=n.store.editingKeys,E=D===void 0?[]:D;if(p)return E.includes("".concat(p[n.rowKey]))}),y()(w()(n),"isAddEdit",function(p){var D=n.store.newAddKeys,E=D===void 0?[]:D;if(p)return E.includes("".concat(p[n.rowKey]))}),y()(w()(n),"removeOperateKey",function(p){var D=n.store,E=D.editingKeys,U=E===void 0?[]:E,R=D.newAddKeys,ee=R===void 0?[]:R,re=U.filter(function(_e){return"".concat(_e)!=="".concat(p)}),me=ee.filter(function(_e){return"".concat(_e)!=="".concat(p)});n.formInstanceMapValues.delete("".concat(p)),n._setRefStore({editingKeys:re,newAddKeys:me})}),y()(w()(n),"onAddRow",function(){var p=n.store,D=p.editingKeys,E=D===void 0?[]:D,U=p.newAddKeys,R=U===void 0?[]:U;if(!(typeof n.onBeforeAdd=="function"&&!n.onBeforeAdd())){if(R.length===1&&!n.multiple)return void h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");if(E.length===1&&!n.multiple)return void h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");var ee=(new Date().getTime()*Math.round(10)).toString(),re=l()(l()({},n.initValue||{}),{},y()({},n.rowKey,ee)),me=S()(n.dataSource||[]).concat([re]);n._setRefStore({editingKeys:S()(E).concat([ee]),newAddKeys:S()(R).concat([ee])}),n.onSave&&n.onSave(me,re)}}),y()(w()(n),"onDeleteRow",function(p,D){var E=!0;if(typeof n.onBeforeDelete=="function"&&(E=n.onBeforeDelete(p,D)),E){var U=n.formateKeyToString(p[n.rowKey]),R=S()(n.dataSource||[]).filter(function(ee){return"".concat(ee[n.rowKey])!==U});n.removeOperateKey(U),n.onSave&&n.onSave(R,p,p,D)}}),y()(w()(n),"onEditRow",function(p,D){var E=!0;if(typeof n.onBeforeEdit=="function"&&(E=n.onBeforeEdit(p,D)),E){var U=l()({},p),R=n.store.editingKeys,ee=R===void 0?[]:R,re=n.formateKeyToString(p[n.rowKey]);n.formInstanceMapValues.set(re,l()({},p)),n._setRefStore({editingKeys:S()(ee).concat([re])}),n.restToKeyFormValue(re,U)}}),y()(w()(n),"onEditCancel",function(p,D){var E=!0;if(typeof n.onBeforeEditCancel=="function"&&(E=n.onBeforeEditCancel(p,D)),E){var U=n.formateKeyToString(p[n.rowKey]),R=n.formInstanceMapValues.get(U),ee=S()(n.dataSource||[]),re=ee.findIndex(function(_e){return U==="".concat(_e[n.rowKey])});if(re>-1){var me=ee[D];ee.splice(re,1,l()({},R||me))}else ee.push(R);n.onSave&&n.onSave(ee,p,R,D),n.removeOperateKey(U),n.restToKeyFormValue(U,R)}}),y()(w()(n),"onSaveRow",function(){var p=f()(r()().mark(function D(E,U){var R,ee,re,me,_e,Fe,ie;return r()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:if(te.prev=0,R=n.formateKeyToString(E[n.rowKey]),ee=n.getToKeyForm(R),!ee){te.next=19;break}return te.next=6,ee.validateFields();case 6:if(re=te.sent,me=!0,typeof n.onBeforeSave=="function"&&(me=n.onBeforeSave(re,E,U)),me){te.next=11;break}return te.abrupt("return");case 11:_e=S()(n.dataSource||[]),Fe=_e.findIndex(function(ye){return R==="".concat(ye[n.rowKey])}),Fe>-1?(ie=_e[U],_e.splice(Fe,1,l()(l()({},ie),re))):_e.push(re),n.onSave&&n.onSave(_e,re,E,U),n.removeOperateKey(R),ee.resetFields(n.fields||[]),te.next=20;break;case 19:h.ZP.warning("\u672A\u83B7\u53D6\u5230\u5F53\u524D form \u5B9E\u4F8B");case 20:te.next=25;break;case 22:te.prev=22,te.t0=te.catch(0),n.onErr&&n.onErr(te.t0);case 25:case"end":return te.stop()}},D,null,[[0,22]])}));return function(D,E){return p.apply(this,arguments)}}()),y()(w()(n),"onRowValuesChange",function(p,D,E,U){if(typeof n.onValuesChange=="function"){var R=n.formateKeyToString(p),ee=S()(n.dataSource||[]).map(function(re){return R===n.formateKeyToString(re[n.rowKey])?l()(l()({},re),U):l()({},re)});n.onValuesChange(ee,E,U,p,D)}}),n}return d()(t)}(Ue.P2),tn=function(o){var t=(0,m.useRef)(null);return t.current||(o?t.current=o:t.current=new qe().main_ctor()),t.current},gn=(0,m.createContext)(new qe().main_ctor()),mn=function(){var o=(0,m.useContext)(gn),t=(0,Ue.RK)(o.store),n=function(A){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ref";p==="none"?o._setStore(A):o._setRefStore(A)},g=t.___temps;return[t,n,o,g]},xn=function(o){var t=o.rowData,n=o.optConfig,g=o.index,s=o.multiple,A=o.isOptDelete,p=o.optDeleteEditingDisabled,D=mn(),E=$()(D,3),U=E[0],R=E[2],ee=U.editingKeys,re=U.newAddKeys,me=(0,m.useMemo)(function(){return R.isEditing(t)},[ee,t]),_e=(0,m.useMemo)(function(){return R.isAddEdit(t)},[re,t]),Fe=(ee||[]).length;return n&&n.render?n.render(t,t,g):me?(0,i.jsxs)("span",{children:[(0,i.jsx)(B.Z.Link,{onClick:function(){return R.onSaveRow(t,g)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,i.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return _e?R.onDeleteRow(t,g):R.onEditCancel(t,g)},children:(0,i.jsx)(B.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(B.Z.Link,{disabled:!!Fe&&!s,onClick:function(){return R.onEditRow(t,g)},children:"\u7F16\u8F91"}),A&&(0,i.jsx)(a.Z,{disabled:p&&!!Fe,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return R.onDeleteRow(t,g)},children:(0,i.jsx)(B.Z.Link,{disabled:p&&!!Fe,children:"\u5220\u9664"})})]})},yn=function(o){var t=o.optConfig;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},t),{},{render:function(g,s,A){return(0,i.jsx)(xn,l()(l()({},o),{},{value:g,index:A,rowData:s}))}})]},pn=yn,_n=V.default.RangePicker;function Bn(Y,o){if(Y.length){var t=Y.join("_");return o?"".concat(o,"_").concat(t):t}}function Qn(Y){return Y===void 0||Y===!1?[]:Array.isArray(Y)?Y:[Y]}var jn=function(o){var t=o.attr,n=o.type,g=o.inputNode,s;if(n==="Input"){var A=t;s=(0,i.jsx)(Q.Z,l()({},A))}else if(n==="TextArea"){var p=t;s=(0,i.jsx)(Q.Z.TextArea,l()({},p))}else if(n==="InputNumber"){var D=t;s=(0,i.jsx)(ue.Z,l()({},D))}else if(n==="AutoComplete"){var E=t;s=(0,i.jsx)(K.Z,l()({},E))}else if(n==="Cascader"){var U=t;s=(0,i.jsx)(Ce.Z,l()({},U))}else if(n==="DatePicker"){var R=t;s=(0,i.jsx)(V.default,l()({},R))}else if(n==="Rate"){var ee=t;s=(0,i.jsx)(Ne.Z,l()({},ee))}else if(n==="Slider"){var re=t;s=(0,i.jsx)($e.Z,l()({},re))}else if(n==="TreeSelect"){var me=t;s=(0,i.jsx)(De.Z,l()({},me))}else if(n==="Select"){var _e=t;s=(0,i.jsx)(Ge.default,l()({},_e))}else if(n==="Checkbox"){var Fe=t;s=(0,i.jsx)(Je.Z.Group,l()({},Fe))}else if(n==="Mentions"){var ie=t;s=(0,i.jsx)(Ye.Z,l()({},ie))}else if(n==="Radio"){var je=t;s=(0,i.jsx)(he.ZP.Group,l()({},je))}else if(n==="Switch"){var te=t;s=(0,i.jsx)(Re.Z,l()({},te))}else if(n==="TimePicker"){var ye=t;s=(0,i.jsx)(Se.Z,l()({},ye))}else if(n==="Upload"){var We=t;s=(0,i.jsx)(X.Z,l()({},We))}else if(n==="RangePicker"){var Le=t;s=(0,i.jsx)(_n,l()({},Le))}else n==="Custom"&&(s=g);return s},Rn=["dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","isList","listAttr"],Pn=["name","rules","preName","itemValue","children","tipAttr","tip"],rn=m.memo(function(Y){var o=Y.dataIndex,t=Y.title,n=Y.record,g=Y.index,s=Y.inputNode,A=Y.rules,p=Y.children,D=Y.itemAttr,E=Y.type,U=Y.attr,R=Y.tip,ee=Y.tipAttr,re=Y.isList,me=Y.listAttr,_e=me===void 0?{}:me,Fe=H()(Y,Rn),ie=mn(),je=$()(ie,3),te=je[0],ye=je[2],We=ye.rowKey,Le=(0,m.useMemo)(function(){return n?ye.isEditing(n):!1},[te.editingKeys,n]),Oe=jn({attr:U,type:E,inputNode:s}),ln=function(){return re&&typeof s=="function"?(0,i.jsx)(x.ZP.List,l()(l()({},_e),{},{name:o,children:function(dn,on,sn){return s(dn.map(function(un){return l()(l()({},un),{},{fieldKey:un.key})}),on,sn)}})):(0,i.jsx)(Ln,l()(l()({},D),{},{name:o,rules:A,preName:n[We],itemValue:n,children:Oe,tipAttr:ee,tip:R}))};return(0,i.jsx)("td",l()(l()({},Fe),{},{children:Le?ln():p}))}),Ln=function(o){var t=o.name,n=o.rules,g=o.preName,s=g===void 0?"":g,A=o.itemValue,p=o.children,D=o.tipAttr,E=D===void 0?{}:D,U=o.tip,R=H()(o,Pn);return(0,i.jsx)(x.ZP.Field,l()(l()({},R),{},{name:t,rules:n,children:function(re,me,_e){var Fe=Qn(t).length&&me?me.name:[],ie=Bn(Fe,s),je=function(Le){var Oe=Le;Le&&Le.target&&(Oe=Le.target.value),re.onChange(Oe)},te=typeof p=="function"?p(l()(l()({},re),{},{id:ie}),me,_e,{record:A}):m.isValidElement(p)?m.cloneElement(p,l()(l()({},re),{},{onChange:je,id:ie})):p,ye=me.errors.map(function(We){return We}).join(",");return(0,i.jsx)(F.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},E),{},{title:U?U(ye):ye,open:!!me.errors.length,children:te}))}}))},tt=rn,at=m.memo(function(Y){var o=x.ZP.useForm(),t=$()(o,1),n=t[0],g=mn(),s=$()(g,3),A=s[2];m.useEffect(function(){return function(){return A.remove("".concat(Y["data-row-key"]))}},[]),A.register("".concat(Y["data-row-key"]),n);var p=(A.dataSource||[]).find(function(D){return"".concat(D[A.rowKey])==="".concat(Y["data-row-key"])});return(0,i.jsx)(x.ZP,{onValuesChange:A.onRowValuesChange.bind(void 0,"".concat(Y["data-row-key"]),n),form:n,name:"".concat(Y["data-row-key"]),component:!1,initialValues:p||{},children:(0,i.jsx)("tr",l()({},Y))})}),rt=at,ot=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","editInstance","optDeleteEditingDisabled","onBeforeEdit","onBeforeEditCancel","onBeforeDelete"],Vn=function(o){var t=o.columns,n=o.dataSource,g=n===void 0?[]:n,s=o.onBeforeSave,A=o.onSave,p=o.rowKey,D=p===void 0?"id":p,E=o.optIsFirst,U=E===void 0?!1:E,R=o.optConfig,ee=o.isOptDelete,re=ee===void 0?!1:ee,me=o.initValue,_e=me===void 0?{}:me,Fe=o.onValuesChange,ie=o.isAdd,je=o.onErr,te=o.multiple,ye=te===void 0?!1:te,We=o.onBeforeAdd,Le=o.isOpt,Oe=Le===void 0?!0:Le,ln=o.addBtnProps,bn=ln===void 0?{}:ln,fn=o.editInstance,dn=o.optDeleteEditingDisabled,on=dn===void 0?!1:dn,sn=o.onBeforeEdit,un=o.onBeforeEditCancel,En=o.onBeforeDelete,An=H()(o,ot),On=m.useMemo(function(){return t.filter(function(we){return we.editable}).map(function(we){return we.dataIndex})},[t]),He=tn(fn);He.dataSource=g,He.initValue=_e,He.rowKey=D,He.onSave=A,He.onBeforeAdd=We,He.multiple=ye,He.onErr=je,He.fields=On,He.onValuesChange=Fe,He.onBeforeSave=s,He.onBeforeEdit=sn,He.onBeforeEditCancel=un,He.onBeforeDelete=En;var Cn=Oe&&pn({optConfig:R,isOptDelete:re,multiple:ye,optDeleteEditingDisabled:on})||[],vn=U?Cn.concat(t):t.concat(Cn),In=vn.map(function(we){return we.editable?l()(l()({},we),{},{onCell:function(Sn){return{record:Sn,dataIndex:we.dataIndex,title:we.title,inputNode:we.inputNode,rules:we.rules||[],itemAttr:we.itemAttr,type:we.type,attr:we.attr,tip:we.tip,tipAttr:we.tipAttr,isList:we.isList,listAttr:we.listAttr}}}):we});return(0,i.jsx)(m.Fragment,{children:(0,i.jsxs)(gn.Provider,{value:He,children:[(0,i.jsx)(M.Z,l()(l()({size:"small",bordered:!0},An),{},{components:{body:{row:rt,cell:tt}},rowKey:D,dataSource:g,columns:In,rowClassName:"editable-row",pagination:!1})),ie&&(0,i.jsx)(v.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},bn||{}),{},{style:l()({marginTop:10},(bn||{}).style||{}),onClick:He.onAddRow}))]})})};Vn.useEditInstance=tn,Vn.useEditInstanceContext=mn,Vn.Item=Ln;var ke=null,qn=se},29441:function(be,I,e){"use strict";e.r(I),e.d(I,{default:function(){return Y}});var j=e(97857),r=e.n(j),b=e(5574),S=e.n(b),O=e(13769),f=e.n(O),P=e(85893),y=e(67294),N=e(22150),l=e(71230),Z=e(15746),$=y.createContext({}),oe=function(){return y.useContext($)},H=y.createContext({isFloat:!1,isSetHeight:!1,layout:"horizontal"}),i=function(){return y.useContext(H)},h=e(11950),M=e(45520),v=function(){(0,M.default)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},m=y.createContext({getComponents:v,getStoreState:v,setInitialValues:v,updateValue:v,getItemStore:function(){return{init:v,register:v,getStoreState:v,updateValue:v,getValue:v}}}),B=function(){return y.useContext(m)},a=e(12444),_=e.n(a),ne=e(72004),u=e.n(ne),c=e(9783),d=e.n(c),L=function(){function o(){var t=this;_()(this,o),d()(this,"subForm",{}),d()(this,"subHide",{}),d()(this,"registerId",function(n,g,s){s&&(t.subForm[s]=n,t.subHide[s]=g)}),d()(this,"removeId",function(n){n&&(delete t.subForm[n],delete t.subHide[n])})}return u()(o,[{key:"subForms",get:function(){return this.subForm}},{key:"subHides",get:function(){return this.subHide}}]),o}(),C=function(t){var n=y.useRef();return t?n.current=t:n.current=new L,[n.current]},z=y.createContext(new L),G=function(){return y.useContext(z)},W=function(t){var n=t.form,g=t.subscribe,s=t.name,A=t.hide;s&&g.registerId(n,A,s),y.useEffect(function(){return function(){return g.removeId(s)}},[])},F=function(t){return Array.isArray(t)?t:typeof t=="string"?t.split("_").filter(function(n){return n}):t},x=function(t){var n={};if(t){var g=t.getInternalHooks;n=g(h.ki)}var s=function(D,E){n.dispatch&&n.dispatch({type:"updateValue",namePath:F(D),value:E})},A=function(D){Object.entries(D).forEach(function(E){var U=S()(E,2),R=U[0],ee=U[1];s(R,ee)})};return r()(r()({},n),{},{updateValue:s,bathUpdateValue:A})},V=function(t){return x(t)},Q=function(t){var n=oe(),g=G(),s=B(),A,p=V(n.itemRefHook);if(n){var D=n.watchList;A=D[(t||{}).id]}return y.useEffect(function(){if((n||{}).firstMont){var E=n.itemRefHook.getFieldsValue;typeof A=="function"&&A((t||{}).value,E(!0),r()({},p),s,{forms:g.subForms,hides:g.subHides})}},[JSON.stringify((t||{}).value)]),[p]},ue=e(50568),K=e(19632),Ce=e.n(K),Ne=e(52677),$e=e.n(Ne);function De(o){return $e()(o)=="object"&&o!==null&&Object.getPrototypeOf(o)===Object.prototype}function Ge(o,t){var n=Array.isArray(o)?Ce()(o):r()({},o);return t&&Object.keys(t).forEach(function(g){var s=n[g],A=t[g],p=De(s)&&De(A);n[g]=p?Ge(s,A||{}):A}),n}function Je(o){for(var t=arguments.length,n=new Array(t>1?t-1:0),g=1;g<t;g++)n[g-1]=arguments[g];return n.reduce(function(s,A){return Ge(s,A)},o)}var Ye=u()(function o(){var t=this;_()(this,o),d()(this,"store",{}),d()(this,"componentLists",[]),d()(this,"init",function(n){var g=n.props||{},s=g.initialValue;if(s!==void 0){var A=n.getNamePath();A&&(t.store=(0,ue.sO)(t.store,A,s))}}),d()(this,"register",function(n){t.componentLists.push(n);var g=n.props||{},s=g.initialValue;return s!==void 0&&n.refresh(),function(){t.componentLists=t.componentLists.filter(function(p){return p!==n});var A=n.getNamePath();A&&(t.store=(0,ue.sO)(t.store,A,void 0,!0))}}),d()(this,"getStoreState",function(n){return n?(0,ue.NA)(t.store,n):t.store}),d()(this,"getComponents",function(){return t.componentLists}),d()(this,"getStore",function(){return{getComponents:t.getComponents,getStoreState:t.getStoreState,getItemStore:t.getItemStore,setInitialValues:t.setInitialValues,updateValue:t.updateValue,bathUpdateValue:t.bathUpdateValue}}),d()(this,"getItemStore",function(){return{init:t.init,register:t.register,getStoreState:t.getStoreState,updateValue:t.updateValue,getValue:t.getValue,bathUpdateValue:t.bathUpdateValue}}),d()(this,"setInitialValues",function(n,g){g&&(t.store=Je({},n,t.store))}),d()(this,"getPaths",function(n){return Array.isArray(n)?n:typeof n=="string"?n.split("_").filter(function(g){return g}):[]}),d()(this,"bathUpdateValue",function(n){Object.entries(n).forEach(function(g){var s=S()(g,2),A=s[0],p=s[1],D=t.getPaths(A);t.store=(0,ue.sO)(t.store,D,p)}),t.bathNotifyObservers(Object.keys(n))}),d()(this,"updateValue",function(n,g){var s=t.getPaths(n);t.store=(0,ue.sO)(t.store,s,g),t.notifyObservers(s)}),d()(this,"getValue",function(n){var g=t.getPaths(n);return(0,ue.NA)(t.store,g)}),d()(this,"bathNotifyObservers",function(n){t.componentLists.forEach(function(g){var s=g.refresh,A=g.getNamePath,p=A();n.includes(p.join(""))&&s()})}),d()(this,"notifyObservers",function(n){t.componentLists.forEach(function(g){var s=g.refresh,A=g.getNamePath,p=A();p.join("")===n.join("")&&s()})})}),he=function(t){var n=y.useRef();if(!n.current)if(t)n.current=t;else{var g=new Ye;n.current=g.getStore()}return[n.current]},Re=he,Se=e(25098),X=e.n(Se),Ie=e(31996),le=e.n(Ie),q=e(26037),T=e.n(q),ge=function(o){le()(n,o);var t=T()(n);function n(g){var s;if(_()(this,n),s=t.call(this,g),d()(X()(s),"mounted",!1),d()(X()(s),"cancelRegisterFunc",function(){}),d()(X()(s),"getNamePath",function(){var E=s.props,U=E.name,R=E.formName;return Array.isArray(U)?R&&[R].concat(U)||U:R&&[R,U]||[U]}),d()(X()(s),"refresh",function(){s.mounted&&s.forceUpdate()}),d()(X()(s),"getValue",function(){var E=s.props.hideContent,U=E.getItemStore(),R=U.getValue;return R(s.getNamePath())}),g.hideContent){var A=g.hideContent,p=A.getItemStore(),D=p.init;D(X()(s))}return s}return u()(n,[{key:"componentDidMount",value:function(){var s=this.props.hideContent;if(s){var A=s.getItemStore(),p=A.register;this.cancelRegisterFunc=p(this)}this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.cancelRegisterFunc(),this.mounted=!1}},{key:"render",value:function(){var s=this.props.children;return this.getValue()?(0,P.jsx)(y.Fragment,{}):(0,P.jsx)(y.Fragment,{children:s})}}]),n}(y.Component),k=function(t){var n=y.useContext(m);return(0,P.jsx)(ge,r()(r()({},t),{},{hideContent:n}))},J=e(88760),Ze=e(25278),ae=e(13457),de=e(63960),pe=e(3303),Ae=e(67002),Ke=e(86125),fe=e(59847),ce=e(34041),ve=e(84567),se=e(11330),Me=e(55742),Te=e(41637),w=e(68351),ze=e(23799),Ee=e(83622),nn=e(48115),Tn=e(80882),Ue=["children","style"],qe=["children","colProps"],tn=function(t){var n=t.children,g=t.style,s=f()(t,Ue),A=i(),p=A.isFloat,D=A.isSetHeight,E=A.layout,U={};return p&&(U={float:"left",width:"100%",overflow:"hidden"},D&&(U.height=E==="inline"?54:74)),(0,P.jsx)(Z.Z,r()(r()({span:6},s),{},{style:r()(r()({},U),g||{}),children:n}))},gn=function(t){var n=t.children,g=t.colProps,s=g===void 0?{}:g,A=f()(t,qe);return(0,P.jsx)(tn,r()(r()({},s||{}),{},{children:(0,P.jsx)(qn.Item,r()(r()({},A),{},{children:n}))}))},mn=gn,xn=["children"],yn=["children"],pn=["children"],_n=["style","watch","shouldUpdate","dependencies"],Bn=J.default.RangePicker,Qn=function(t,n){return Array.isArray(t)?n&&[n].concat(t).join("_")||t.join("_"):n&&"".concat(n,"_").concat(t)||t},jn=function(t){var n=t||{},g=n.children,s=f()(n,xn),A=Q(t),p=S()(A,1),D=p[0];return typeof g=="function"?g(r()(r()({},s),{},{childProps:D})):y.isValidElement(g)?y.cloneElement(g,r()({},s)):g},Rn=function(t){var n=t.children,g=f()(t,yn);return(0,P.jsx)(N.Z.Item,r()(r()({},g),{},{children:(0,P.jsx)(jn,{children:n})}))},Pn=function(t){var n=t.children,g=f()(t,pn);return(0,P.jsx)(mn,r()(r()({},g),{},{children:(0,P.jsx)(jn,{children:n})}))},rn=function(t,n){var g=n.colProps,s=g===void 0?{}:g,A=n.itemStyle,p=A===void 0?{}:A,D=n.attrStyle,E=D===void 0?{}:D,U=n.attrProps,R=U===void 0?{}:U,ee=n.watchList,re=n.name,me=n.layout,_e=n.isFloat,Fe=n.isSetHeight;return t.map(function(ie,je){var te=ie.type,ye=ie.label,We=ie.name,Le=ie.itemAttr,Oe=ie.attr,ln=ie.rules,bn=ie.render,fn=ie.isItemList,dn=ie.isHide,on=ie.colProps,sn=on===void 0?{}:on,un={};_e&&(un={float:"left",width:"100%",overflow:"hidden"},Fe&&(un.height=me==="inline"?54:74));var En=Le||{},An=En.style,On=An===void 0?{}:An,He=En.watch,Cn=He===void 0?!0:He,vn=En.shouldUpdate,In=En.dependencies,we=f()(En,_n),Nn=Oe||{},Sn=Nn.style,Xe=Sn===void 0?{}:Sn,Ve;if(te==="Input"){var Mn=Oe,Wn=R;Ve=(0,P.jsx)(Ze.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ye)},Wn),Mn),{},{style:r()(r()({},E),Xe)}))}else if(te==="TextArea"){var Un=Oe,$n=R;Ve=(0,P.jsx)(Ze.Z.TextArea,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ye)},$n),Un),{},{style:r()(r()({},E),Xe)}))}else if(te==="InputNumber"){var Kn=Oe,wn=R;Ve=(0,P.jsx)(ae.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ye)},wn),Kn),{},{style:r()(r()({width:"100%"},E),Xe)}))}else if(te==="AutoComplete"){var Zn=Oe,Hn=R;Ve=(0,P.jsx)(de.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ye)},Hn),Zn),{},{style:r()(r()({},E),Xe)}))}else if(te==="Cascader"){var Dn=Oe,zn=R;Ve=(0,P.jsx)(pe.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ye)},zn),Dn),{},{style:r()(r()({},E),Xe)}))}else if(te==="DatePicker"){var Gn=Oe,Fn=R;Ve=(0,P.jsx)(J.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ye)},Fn),Gn),{},{style:r()(r()({width:"100%"},E),Xe)}))}else if(te==="Rate"){var Jn=Oe,Yn=R;Ve=(0,P.jsx)(Ae.Z,r()(r()(r()({},Yn),Jn),{},{style:r()(r()({},E),Xe)}))}else if(te==="Slider"){var kn=Oe,xe=R;Ve=(0,P.jsx)(Ke.Z,r()(r()(r()({},xe),kn),{},{style:r()(r()({},E),Xe)}))}else if(te==="TreeSelect"){var Pe=Oe,Be=R;Ve=(0,P.jsx)(fe.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ye)},Be),Pe),{},{style:r()(r()({},E),Xe)}))}else if(te==="Select"){var Qe=Oe,en=R;Ve=(0,P.jsx)(ce.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ye)},en),Qe),{},{style:r()(r()({},E),Xe)}))}else if(te==="Checkbox"){var cn=Oe,hn=R;Ve=(0,P.jsx)(ve.Z.Group,r()(r()(r()({},hn),cn),{},{style:r()(r()({},E),Xe)}))}else if(te==="Mentions"){var Xn=Oe,et=R;Ve=(0,P.jsx)(se.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ye)},et),Xn),{},{style:r()(r()({},E),Xe)}))}else if(te==="Radio"){var dt=Oe,an=R;Ve=(0,P.jsx)(Me.ZP.Group,r()(r()(r()({},an),dt),{},{style:r()(r()({},E),Xe)}))}else if(te==="Switch"){var lt=Oe,st=R;Ve=(0,P.jsx)(Te.Z,r()(r()(r()({},st),lt),{},{style:r()(r()({},E),Xe)}))}else if(te==="TimePicker"){var it=Oe,ut=R;Ve=(0,P.jsx)(w.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ye)},ut),it),{},{style:r()(r()({width:"100%"},E),Xe)}))}else if(te==="Upload"){var ct=Oe,mt=R;Ve=(0,P.jsx)(ze.Z,r()(r()(r()({},mt),ct),{},{style:r()(r()({},E),Xe)}))}else if(te==="RangePicker"){var pt=Oe,ft=R;Ve=(0,P.jsx)(J.default.RangePicker,r()(r()(r()({},ft),pt),{},{style:r()(r()({width:"100%"},E),Xe)}))}else te==="Custom"&&(Ve=bn);if(fn){var vt=Ve,It=We;return(0,P.jsx)(Z.Z,r()(r()(r()({span:6},s||{}),sn||{}),{},{style:r()(r()(r()({},un),{},{height:"auto",overflow:"auto"},(s||{}).style||{}),(sn||{}).style||{}),children:(0,P.jsx)(N.Z.List,r()(r()({},Le),{},{name:It,children:vt}),je)}),je)}ee&&Object.keys(ee).length&&Cn&&ee[Qn(We,re)]&&(Ve=(0,P.jsx)(jn,{children:Ve},je));var nt={};return vn?nt.shouldUpdate=vn:!vn&&In?nt.dependencies=In:!vn&&!In&&typeof Ve=="function"&&(nt.dependencies=[We]),Ve=(0,P.jsx)(Z.Z,r()(r()(r()({span:6},s||{}),sn||{}),{},{style:r()(r()(r()({},un),(s||{}).style||{}),(sn||{}).style||{}),children:(0,P.jsx)(N.Z.Item,r()(r()(r()({},nt),we),{},{name:We,label:ye,rules:ln,style:r()(r()({marginBottom:8},p),On),children:Ve}))}),je),dn&&We?(0,P.jsx)(k,{name:We,formName:re,children:Ve},je):Ve})},Ln=function(t){var n=t.onRest,g=t.setExpand,s=t.expand,A=t.displayPre,p=t.searchBtnItem,D=p===void 0?{}:p,E=t.searchBtnProps,U=E===void 0?{}:E,R=t.searchBtnRestProps,ee=R===void 0?{}:R,re=t.itemStyle,me=re===void 0?{}:re,_e=D||{},Fe=_e.style,ie=Fe===void 0?{}:Fe;return(0,P.jsxs)(N.Z.Item,r()(r()({label:" "},D),{},{style:r()(r()({marginBottom:8},me),ie),children:[(0,P.jsx)(Ee.ZP,r()(r()({type:"primary",htmlType:"submit"},U),{},{children:"\u67E5\u8BE2"})),(0,P.jsx)(Ee.ZP,r()(r()({style:{margin:"0 8px"},onClick:n},ee),{},{children:"\u91CD\u7F6E"})),!!A&&(0,P.jsx)("a",{style:{fontSize:12},onClick:function(){return g(!s)},children:s?(0,P.jsx)(y.Fragment,{children:(0,P.jsx)(nn.Z,{})}):(0,P.jsx)(y.Fragment,{children:(0,P.jsx)(Tn.Z,{})})})]}))},tt=e(93967),at=e.n(tt),rt=["config","isSearch","displayPre","searchBtnItem","searchBtnProps","searchBtnRestProps","onRest","rowProps","colProps","children","className","itemStyle","attrStyle","attrProps","watchList","formHide","initialHide","form","subscribe","layout","isFloat","isSetHeight"],ot=function(t,n){var g=t.config,s=g===void 0?[]:g,A=t.isSearch,p=t.displayPre,D=t.searchBtnItem,E=D===void 0?{}:D,U=t.searchBtnProps,R=U===void 0?{}:U,ee=t.searchBtnRestProps,re=ee===void 0?{}:ee,me=t.onRest,_e=me===void 0?function(){}:me,Fe=t.rowProps,ie=Fe===void 0?{}:Fe,je=t.colProps,te=je===void 0?{}:je,ye=t.children,We=t.className,Le=t.itemStyle,Oe=Le===void 0?{}:Le,ln=t.attrStyle,bn=ln===void 0?{}:ln,fn=t.attrProps,dn=fn===void 0?{}:fn,on=t.watchList,sn=t.formHide,un=t.initialHide,En=t.form,An=t.subscribe,On=t.layout,He=On===void 0?"horizontal":On,Cn=t.isFloat,vn=t.isSetHeight,In=f()(t,rt),we=y.useRef(),Nn=(0,y.useState)(!1),Sn=S()(Nn,2),Xe=Sn[0],Ve=Sn[1],Mn=(0,y.useState)(!1),Wn=S()(Mn,2),Un=Wn[0],$n=Wn[1],Kn=function(){var Pe={colProps:te,itemStyle:Oe,attrStyle:bn,attrProps:dn,watchList:on,name:t.name,layout:He,isFloat:Cn,isSetHeight:vn};if(A&&p&&!Xe){if(p>s.length){var Be=p-s.length,Qe=y.Children.toArray(ye);if(Be>Qe.length)return(0,P.jsxs)(y.Fragment,{children:[rn(s,Pe),Qe]});if(Be<=Qe.length){var en=Qe.slice(0,Be);return(0,P.jsxs)(y.Fragment,{children:[rn(s,Pe),en]})}return rn(s,Pe)}var cn=s.slice(0,p);return rn(cn,Pe)}return(0,P.jsxs)(y.Fragment,{children:[rn(s,Pe),ye]})},wn=at()("carefree-form",We);y.useEffect(function(){var xe;return clearTimeout(xe),xe=setTimeout(function(){$n(!0)},300),function(){return clearTimeout(xe)}},[]);var Zn=N.Z.useForm(En),Hn=S()(Zn,1),Dn=Hn[0],zn=Re(sn),Gn=S()(zn,1),Fn=Gn[0];y.useMemo(function(){return Fn.setInitialValues(un||{},!0)},[]);var Jn=C(An),Yn=S()(Jn,1),kn=Yn[0];return W({name:t.name,form:Dn,subscribe:kn,hide:Fn}),y.useImperativeHandle(n,function(){return we.current}),(0,P.jsx)(H.Provider,{value:{isFloat:Cn,isSetHeight:vn,layout:He},children:(0,P.jsx)(m.Provider,{value:Fn,children:(0,P.jsx)($.Provider,{value:{firstMont:Un,watchList:on||{},form:Dn,itemRefHook:we.current},children:(0,P.jsx)(N.Z,r()(r()({},In),{},{form:Dn,layout:He,className:wn,ref:we,children:(0,P.jsxs)(l.Z,r()(r()({gutter:24},ie),{},{style:r()(r()({},Cn?{display:"block",height:"auto",overflow:"hidden"}:{}),(ie||{}).style||{}),children:[Kn(),A&&(0,P.jsx)(Z.Z,r()(r()({span:6},te),{},{style:r()({float:"left",width:"100%",overflow:"hidden"},(te||{}).style||{}),children:(0,P.jsx)(Ln,{onRest:_e,expand:Xe,setExpand:Ve,displayPre:p,searchBtnItem:E,searchBtnProps:R,searchBtnRestProps:re,itemStyle:Oe})}))]}))}))})})})},Vn=y.forwardRef(ot),ke=Vn;ke.useForm=N.Z.useForm,ke.Item=N.Z.Item,ke.ColItem=mn,ke.ColWatchItem=Pn,ke.Cols=tn,ke.List=N.Z.List,ke.Provider=N.Z.Provider,ke.ItemWatch=Rn,ke.useFormContext=oe,ke.useFormWatchList=Q,ke.useChildItemFun=V,ke.getChildItemFun=x,ke.useFormItemHide=Re,ke.HideItem=k,ke.useSubscribe=C,ke.FormSubscribeProvider=z,ke.useFormSubscribeProvider=G,ke.useSubscribeReginsterId=W;var qn=ke,Y=qn},93251:function(be,I,e){"use strict";e.r(I),e.d(I,{default:function(){return ne}});var j=e(97857),r=e.n(j),b=e(9783),S=e.n(b),O=e(5574),f=e.n(O),P=e(13769),y=e.n(P),N=e(85893),l=e(55241),Z=e(34041),$=e(57381),oe=e(96486),H=e(67294),i=e(3929),h=["value","width","onClick","mode","labelInValue","ValueField"],M=function(c,d,L,C,z){if(["tags","multiple"].includes(L)&&Array.isArray(d)){var G=d.find(function(W){return C&&W?W[z]===c[z]:W===d});if(G)return!0}else return C&&d?d[z]===c[z]:d===c[z];return!1},v=function(c){var d=c.value,L=c.width,C=c.onClick,z=c.mode,G=c.labelInValue,W=c.ValueField,F=y()(c,h),x=H.useCallback(M,[JSON.stringify(d)]),V=function(ue){var K=x(ue,d,z,G,W);return{onClick:function(){return C(ue,!K)},style:K&&{background:"#e6f7ff"}||{}}};return(0,N.jsx)("div",{className:"fuzzy-query-table",children:(0,N.jsx)(i.Z,r()({rowKey:W,onRow:V,size:"small",pagination:!1,style:{width:L},scroll:{y:300},columns:[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}]},F))})},m=["onChange","labelInValue","columns","request","debounceTimeout","tipWidth","fieldNames"],B=[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}],a=function(c){var d=c.onChange,L=c.labelInValue,C=L===void 0?!0:L,z=c.columns,G=z===void 0?B:z,W=c.request,F=c.debounceTimeout,x=F===void 0?800:F,V=c.tipWidth,Q=c.fieldNames,ue=y()(c,m),K=H.useState(0),Ce=f()(K,2),Ne=Ce[0],$e=Ce[1],De=H.useState(!1),Ge=f()(De,2),Je=Ge[0],Ye=Ge[1],he=H.useState(!1),Re=f()(he,2),Se=Re[0],X=Re[1],Ie=H.useState([]),le=f()(Ie,2),q=le[0],T=le[1],ge=H.useRef(!0),k=H.useMemo(function(){return c.fieldNames&&c.fieldNames.value||"value"},[c.fieldNames]),J=H.useMemo(function(){return c.fieldNames&&c.fieldNames.label||"label"},[c.fieldNames]),Ze=H.useRef(null);H.useLayoutEffect(function(){if(Ze.current)if(V)$e(V);else{var ve=Ze.current.offsetWidth;$e(ve-30)}},[]);var ae=function(se){var Me=se||{},Te=Me[k],w=Me[J];return S()(S()({},k,Te),J,w)},de=function(se,Me){var Te=ae(se);if(C||(Te=se&&Te[k]),["tags","multiple"].includes(c.mode))Te=Array.isArray(c.value)?Me?c.value.concat(Te):c.value.filter(function(w){return C&&w?w[k]!==Te[k]:w!==Te}):Me?[Te]:[];else{if(X(!1),!Me){Te=void 0;return}ge.current=!1}d&&d(Te,se)},pe=H.useRef(0),Ae=H.useMemo(function(){var ve=function(Me){if(!ge.current){ge.current=!0;return}pe.current+=1;var Te=pe.current;W&&(Ye(!0),W(Me).then(function(w){Te===pe.current&&(T(w),Ye(!1))}).catch(function(){T([]),Ye(!1)}))};return(0,oe.debounce)(ve,x)},[W,x]),Ke=function(){var se=q.map(function(Me){var Te=Me[k],w=Me[J];return S()(S()({},k,Te),J,w)});return se},fe=function(){if(Array.isArray(c.value)&&C)return c.value.map(function(w){var ze=w[k],Ee=w[J];return{label:Ee,value:ze}});if(c.value&&!c.mode&&C){var se=c.value,Me=se[k],Te=se[J];return{label:Te,value:Me}}return c.value},ce=function(se,Me){var Te=se;se&&Array.isArray(se)&&Array.isArray(c.value)&&(Te=C?c.value.filter(function(w){return!!se.find(function(ze){return ze.value===w[k]})}):c.value.filter(function(w){return!!se.find(function(ze){return ze===w})})),d&&d(Te,Me)};return(0,N.jsx)(l.Z,{trigger:"click",placement:"bottomLeft",open:Se,onOpenChange:function(se){X(se)},content:(0,N.jsx)(v,{columns:G,dataSource:q,value:c.value,width:Ne,mode:c.mode,labelInValue:C,onClick:de,loading:Je,ValueField:k}),children:(0,N.jsx)("div",{ref:Ze,className:"popover-select-warp",style:{width:"100%"},children:(0,N.jsx)(Z.default,r()(r()({allowClear:!0,labelInValue:C,filterOption:!1,style:{width:"100%"},onSearch:Ae,showSearch:!0,fieldNames:Q},ue),{},{value:fe(),notFoundContent:Je?(0,N.jsx)($.Z,{size:"small"}):null,onChange:ce,options:Ke(),dropdownStyle:{display:"none"}}))})})},_=a,ne=_},28209:function(be,I,e){"use strict";e.r(I),e.d(I,{default:function(){return Ie}});var j=e(5574),r=e.n(j),b=e(85893),S=e(67294),O=e(97857),f=e.n(O),P=e(29441),y=e(13769),N=e.n(y),l=e(12444),Z=e.n(l),$=e(72004),oe=e.n($),H=e(9783),i=e.n(H),h=e(72278),M=["search","table"],v=function(){function le(q){var T=this;Z()(this,le),i()(this,"store",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),i()(this,"initialValues",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),i()(this,"components",{}),i()(this,"getStringToArr",function(ae){return ae.split("_")}),i()(this,"getInitValue",function(ae){return(0,h.d9)((0,h.U2)(T.initialValues,T.getStringToArr(ae)),!1)}),i()(this,"getValue",function(ae){return(0,h.U2)(T.store,T.getStringToArr(ae))}),i()(this,"setValue",function(ae,de){return T.store=(0,h.t8)(T.store,T.getStringToArr(ae),de),T.store}),i()(this,"setBatchValue",function(ae){return Object.entries(ae).forEach(function(de){var pe=r()(de,2),Ae=pe[0],Ke=pe[1];T.store=(0,h.t8)(T.store,T.getStringToArr(Ae),Ke)}),T.store}),i()(this,"getStore",function(){return T.store}),i()(this,"registerId",function(ae,de){T.components[ae]=de}),i()(this,"unregister",function(ae,de){delete T.components[ae],ae==="search"?T.setValue(ae,de||T.initialValues.search||{}):ae==="table"?T.setValue(ae,de||T.initialValues.table||{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}):T.setValue(ae,de||T.initialValues[ae])}),i()(this,"tableLoading",function(ae){T.setValue("loading",ae),T.updateComponent(["table"])}),i()(this,"updateComponent",function(ae){ae.forEach(function(de){T.components[de]()})});var ge=q||{},k=ge.search,J=ge.table,Ze=N()(ge,M);k&&this.setValue("search",f()({},k)),J&&this.setValue("table",f()({},J)),Object.entries(f()({},Ze)).forEach(function(ae){var de=r()(ae,2),pe=de[0],Ae=de[1];T.setValue(pe,Ae)}),this.initialValues=(0,h.d9)(q||{},!1)}return oe()(le,[{key:"stores",get:function(){return this.store}}]),le}(),m=function(q){var T=q.main,ge=q.initialValues,k=S.useRef();return T?k.current=T:k.current=new v(ge),[k.current]},B=S.createContext(new v),a=function(){return S.useContext(B)},_=S.createContext({}),ne=function(){return S.useContext(_)},u=e(15009),c=e.n(u),d=e(99289),L=e.n(d),C=e(38018),z=e(11238),G=["requestType","headers","data","module"],W=function(){var le=L()(c()().mark(function q(T,ge){var k,J,Ze,ae,de,pe,Ae,Ke,fe,ce;return c()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return k=ge.requestType,J=ge.headers,Ze=ge.data,ae=ge.module,de=N()(ge,G),pe=f()({},J||{}),Ae=Ze,k==="json"?(pe=f()({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},pe),typeof Ae!="string"&&(Ae=JSON.stringify(Ae))):k==="form"?(pe=f()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},pe),Ae=typeof Ae=="string"?Ae:C.stringify(Ae)):pe=f()({Accept:"application/json"},pe),Ke=T,ae&&(fe=/^\//.test(T),Ke="/".concat(ae).concat(fe?"":"/").concat(T)),se.prev=6,se.next=9,(0,z.ZP)(Ke,f()(f()({requestType:k,headers:f()({},pe),data:Ae},de),{},{getResponse:!0}));case 9:return ce=se.sent,console.log("\u6DFB\u52A0getResponse\u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u6570\u636E,\u53EF\u4F7F\u7528window.RequestResponse\u83B7\u53D6\u8FD4\u56DEresponse--->",ce),window.RequestResponse=ce.response,se.abrupt("return",ce.data);case 15:throw se.prev=15,se.t0=se.catch(6),se.t0;case 18:case"end":return se.stop()}},q,null,[[6,15]])}));return function(T,ge){return le.apply(this,arguments)}}(),F=W,x=function(q,T){return F(q,f()(f()({},T||{}),{},{method:"POST"}))},V=function(q,T){return F(q,f()(f()({},T||{}),{},{method:"GET"}))},Q=function(q,T){return F(q,f()(f()({},T||{}),{},{method:"DELETE"}))},ue=function(q,T){return F(q,f()(f()({},T||{}),{},{method:"PUT"}))},K=function(q,T){return F(q,f()(f()({},T||{}),{},{method:"PATCH"}))},Ce=function(q,T){return F(q,f()(f()({},T||{}),{},{method:"HEAD"}))},Ne=function(q,T){return F(q,f()(f()({},T||{}),{},{method:"OPTIONS"}))},$e={POST:x,GET:V,DELETE:Q,PUT:ue,PATCH:K,HEAD:Ce,OPTIONS:Ne},De=function(){var le=L()(c()().mark(function q(T){var ge,k,J,Ze,ae,de,pe,Ae,Ke,fe,ce,ve,se,Me,Te,w;return c()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:if(ge=T.Api,k=T.main,J=T.tableConfig,Ze=T.apiName,ae=k.setBatchValue,de=k.getValue,pe=k.tableLoading,Ae=J||{},Ke=Ae.table,fe=ge[Ze||"table"]||{},fe.url){Ee.next=6;break}return Ee.abrupt("return");case 6:if(Ee.prev=6,pe(!0),ae({table_page:(Ke||{}).page||1,table_pageSize:(Ke||{}).page||20}),ce=!0,fe.before&&(ce=fe.before(k)),ce){Ee.next=13;break}return Ee.abrupt("return",void pe(!1));case 13:return ve=f()({page:de("table_page"),pageSize:de("table_pageSize")},de("search")),fe.requestBefore&&(ve=fe.requestBefore(k)),Ee.next=17,$e[fe.method||"GET"]("".concat(fe.url),f()(f()({},fe.options||{}),{},{module:fe.module,data:ve})).catch(function(nn){pe(!1)});case 17:se=Ee.sent,fe.requestAfter?fe.requestAfter({response:se,main:k}):se&&se.code===200&&(Me=se.data||{},Te=Me.rows,w=Me.total,ae({table_dataSource:Te||[],table_total:w||0})),pe(!1),Ee.next=25;break;case 22:Ee.prev=22,Ee.t0=Ee.catch(6),pe(!1);case 25:case"end":return Ee.stop()}},q,null,[[6,22]])}));return function(T){return le.apply(this,arguments)}}(),Ge=e(4393),Je=function(){var q=ne(),T=q.search,ge=q.tableConfig,k=q.searchCardProps,J=q.searchHead,Ze=ne(),ae=Ze.Api,de=ae===void 0?{}:ae,pe=a(),Ae=pe.setValue,Ke=pe.registerId,fe=pe.unregister,ce=pe.getInitValue,ve=S.useState(""),se=r()(ve,2),Me=se[0],Te=se[1],w=T||{},ze=w.isSearch,Ee=w.initialValues,nn=w.form,Tn=w.apiName,Ue=P.default.useForm(nn),qe=r()(Ue,1),tn=qe[0],gn=function(){Te(new Date().getTime().toString())},mn=function(pn,_n){Ae("search",_n)};S.useEffect(function(){Ee&&Ae("search",Ee||{})},[]),Ke("search",gn),S.useEffect(function(){return function(){return fe("search",Ee)}},[]),S.useEffect(function(){Ee&&(Object.entries(Ee).forEach(function(yn){var pn=r()(yn,2),_n=pn[0],Bn=pn[1];Ae("search_".concat(_n),Bn)}),gn())},[]);var xn=S.useMemo(function(){return"bordered"in(k||{})?k.bordered:!!J},[!!J,(k||{}).bordered]);return(0,b.jsx)(Ge.Z,f()(f()({title:J&&J(pe)},k||{}),{},{style:f()({marginBottom:10},(k||{}).style||{}),bodyStyle:f()({padding:xn?12:0},(k||{}).bodyStyle||{}),bordered:xn,children:(0,b.jsx)(P.default,f()(f()(f()({form:tn,initialValues:Ee||ce("search")||{}},ze?{onFinish:function(pn){T&&T.onFinish?T.onFinish(pn,pe):De({main:pe,tableConfig:ge,Api:de,apiName:Tn})},onRest:function(){T&&T.onRest?T.onRest():(Ae("search",Ee||{}),tn.resetFields())}}:{}),T),{},{onValuesChange:mn}))}))},Ye=Je,he=e(3929),Re=function(){var q=ne(),T=q.tableConfig,ge=q.columns,k=q.tableCardProps,J=q.Api,Ze=J===void 0?{}:J,ae=q.tableHead,de=a(),pe=de.getValue,Ae=de.setValue,Ke=de.setBatchValue,fe=de.updateComponent,ce=de.registerId,ve=de.unregister,se=S.useState(""),Me=r()(se,2),Te=Me[0],w=Me[1],ze=pe("table"),Ee=ze.page,nn=ze.pageSize,Tn=ze.total,Ue=ze.dataSource,qe=ze.selectRowKeys,tn=T||{},gn=tn.pagination,mn=tn.rowSelection,xn=tn.table,yn=tn.apiName,pn=function(){w(new Date().getTime().toString())},_n=function(Pn,rn){Ke({table_page:Pn,table_pageSize:rn}),T&&T.pagination&&T.pagination.onChange?T.pagination.onChange(Pn,rn,de):De({main:de,tableConfig:T,Api:Ze,apiName:yn})},Bn=S.useMemo(function(){return!!(T&&"pagination"in T&&gn===!1)},[JSON.stringify(gn)]);ce("table",pn),S.useEffect(function(){return function(){return ve("table",xn)}},[]),S.useEffect(function(){xn&&(Object.entries(xn).forEach(function(Rn){var Pn=r()(Rn,2),rn=Pn[0],Ln=Pn[1];Ae("table_".concat(rn),Ln)}),pn())},[]);var Qn=S.useMemo(function(){return typeof ge=="function"?ge(de):ge||[]},[ge]),jn=S.useMemo(function(){return"bordered"in(k||{})?k.bordered:!!ae},[!!ae,(k||{}).bordered]);return(0,b.jsx)(Ge.Z,f()(f()({},k||{}),{},{title:ae&&ae(de),bodyStyle:f()({padding:0},(k||{}).bodyStyle||{}),bordered:jn,children:(0,b.jsx)(he.Z,f()(f()(f()({rowKey:"id",size:"small",bordered:!0,loading:pe("loading")},T),mn?{rowSelection:f()(f()({},mn),{},{selectedRowKeys:qe,onChange:function(Pn,rn){Ke({"table.selectRowKeys":Pn,"table.selectRows":rn}),fe(["table"])}})}:{}),{},{dataSource:Ue,columns:Qn,pagination:!Bn&&f()(f()({},gn||{}),{},{pageSize:nn,total:Tn,current:Ee,onChange:_n})}))}))},Se=Re,X=function(q){var T=m({main:q.main,initialValues:q.initialValues}),ge=r()(T,1),k=ge[0];return(0,b.jsx)(B.Provider,{value:k,children:(0,b.jsxs)(_.Provider,{value:q,children:[(0,b.jsx)(Ye,{}),(0,b.jsx)(Se,{})]})})};X.useMain=m;var Ie=X},42478:function(be,I,e){"use strict";e.r(I),e.d(I,{default:function(){return G}});var j=e(15009),r=e.n(j),b=e(9783),S=e.n(b),O=e(97857),f=e.n(O),P=e(99289),y=e.n(P),N=e(5574),l=e.n(N),Z=e(85893),$=e(67294),oe=e(83622),H=e(90814),i=e(96842),h=e(246),M=e(6171),v=e(3929),m=function(F){var x=F.onPageChange,V=F.onSelectedChange,Q=F.selectedKeys,ue=F.dataList,K=F.page,Ce=F.pageSize,Ne=F.total,$e=F.loading,De=F.rowKey,Ge=F.columns;return(0,Z.jsx)(v.Z,{loading:$e,size:"small",bordered:!0,columns:Ge||[],rowKey:De||"id",dataSource:ue,rowSelection:{selectedRowKeys:Q,onChange:V},pagination:{current:K,pageSize:Ce,total:Ne,onChange:x}})},B=function(F){var x=F.leftTable,V=F.rightTable,Q=F.handleOperation;return(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(m,f()({},x))}),(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:80},children:[(0,Z.jsx)(oe.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"add"),type:"primary",children:(0,Z.jsx)(H.Z,{})}),(0,Z.jsx)(oe.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"allAdd"),type:"primary",children:(0,Z.jsx)(i.Z,{})}),(0,Z.jsx)(oe.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"allDelete"),type:"primary",children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)(oe.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"delete"),type:"primary",children:(0,Z.jsx)(M.Z,{})})]}),(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(m,f()({},V))})]})},a=e(29441),_=function(F){var x=F.leftSearchConfig,V=F.rightSearchConfig,Q=F.onSearch,ue=F.onValuesChange;return(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(a.default,f()(f()({layout:"vertical",isSearch:!0,colProps:{span:12}},x),{},{onFinish:function(){return Q("left")},onRest:function(){var Ce;(Ce=x.form)===null||Ce===void 0||Ce.resetFields()},onValuesChange:function(Ce,Ne){return ue(Ce,Ne,"left")}}))}),(0,Z.jsx)("div",{style:{width:80}}),(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(a.default,f()(f()({isSearch:!0,layout:"vertical",colProps:{span:12}},V),{},{onRest:function(){var Ce;(Ce=V.form)===null||Ce===void 0||Ce.resetFields()},onFinish:function(){return Q("right")},onValuesChange:function(Ce,Ne){return ue(Ce,Ne,"right")}}))})]})},ne=e(11238),u=e(12444),c=e.n(u),d=e(72004),L=e.n(d),C=function(){function W(F,x){var V=this;c()(this,W),S()(this,"store",{left:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]},right:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]}}),S()(this,"forceUpdate",void 0),S()(this,"setValue",function(Q,ue){V.store=f()(f()({},V.store),{},S()({},ue,f()(f()({},V.store[ue]),Q))),V.forceUpdate&&V.forceUpdate()}),x&&Object.keys(x||{}).length&&Object.entries(x).forEach(function(Q){var ue=l()(Q,2),K=ue[0],Ce=ue[1];V.setValue(Ce,K)}),this.forceUpdate=F}return L()(W,[{key:"stores",get:function(){return this.store}}]),W}(),z=function(F,x){var V=F.Api,Q=F.leftSearchConfig,ue=F.rightSearchConfig,K=F.initValue,Ce=F.rowKey,Ne=F.columns,$e=$.useState({left:!1,right:!1}),De=l()($e,2),Ge=De[0],Je=De[1],Ye=a.default.useForm(F.leftUseForm),he=l()(Ye,1),Re=he[0],Se=a.default.useForm(F.rightUseForm),X=l()(Se,1),Ie=X[0],le=$.useState(""),q=l()(le,2),T=q[0],ge=q[1],k=function(){ge(new Date().getTime().toString())},J=$.useMemo(function(){return new C(k,K)},[]),Ze=function(){var Ke=y()(r()().mark(function fe(ce){var ve,se,Me,Te,w,ze,Ee,nn;return r()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:if(ve=V[ce],Je(function(qe){return f()(f()({},qe),{},S()({},ce,!0))}),Ue.prev=2,se=ve.url,Me=ve.options,Te=ve.before,w=ve.after,ze=Te(J.stores.left,ce),ze!==!1){Ue.next=7;break}return Ue.abrupt("return",void Je(function(qe){return f()(f()({},qe),{},S()({},ce,!1))}));case 7:return Ue.next=9,(0,ne.ZP)(se,f()(f()({},Me||{}),{},{data:ze})).catch(function(qe){Je(function(tn){return f()(f()({},tn),{},S()({},ce,!1))})});case 9:Ee=Ue.sent,nn=w(Ee,ce),nn!==!1&&J.setValue(nn,ce),Je(function(qe){return f()(f()({},qe),{},S()({},ce,!1))}),Ue.next=18;break;case 15:Ue.prev=15,Ue.t0=Ue.catch(2),Je(function(qe){return f()(f()({},qe),{},S()({},ce,!1))});case 18:case"end":return Ue.stop()}},fe,null,[[2,15]])}));return function(ce){return Ke.apply(this,arguments)}}(),ae=function(fe,ce,ve){J.setValue({selectedKeys:fe,selectedRows:ce},ve)},de=function(fe,ce,ve){J.setValue({page:fe,pageSize:ce,selectedKeys:[],selectedRows:[]},ve),Ze(ve)},pe=function(){var Ke=y()(r()().mark(function fe(ce){var ve,se,Me,Te,w,ze,Ee,nn;return r()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:if(ve=V[ce],se=ve.url,Me=ve.options,Te=ve.before,w=ve.after,ze=Te(J.stores[ce],ce),ze!==!1){Ue.next=5;break}return Ue.abrupt("return");case 5:return Ue.next=7,(0,ne.ZP)(se,f()(f()({},Me||{}),{},{data:ze}));case 7:Ee=Ue.sent,nn=w(Ee,ce),nn!==!1&&(de(1,J.stores.left.pageSize,"left"),de(1,J.stores.right.pageSize,"right"));case 10:case"end":return Ue.stop()}},fe)}));return function(ce){return Ke.apply(this,arguments)}}(),Ae=function(fe,ce,ve){J.setValue({search:ce},ve)};return $.useImperativeHandle(x,function(){return{handleOperation:pe,onPageChange:de,onSelectedChange:ae,onSearch:Ze,store:J,forceUpdate:k,leftUseForm:Re,rightUseForm:Ie}}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(_,{onValuesChange:Ae,leftSearchConfig:f()(f()({},Q||{}),{},{initialValues:K&&K.left&&K.left.search||{},form:Re}),rightSearchConfig:f()(f()({},ue||{}),{},{initialValues:K&&K.right&&K.right.search||{},form:Ie}),onSearch:Ze}),(0,Z.jsx)(B,{handleOperation:pe,leftTable:{rowKey:Ce,columns:Ne,page:J.stores.left.page,pageSize:J.stores.left.pageSize,total:J.stores.left.total,dataList:J.stores.left.dataList,selectedKeys:J.stores.left.selectedKeys,loading:Ge.left,onSelectedChange:function(fe,ce){return ae(fe,ce,"left")},onPageChange:function(fe,ce){return de(fe,ce||10,"left")}},rightTable:{rowKey:Ce,columns:Ne,page:J.stores.right.page,pageSize:J.stores.right.pageSize,total:J.stores.right.total,dataList:J.stores.right.dataList,selectedKeys:J.stores.right.selectedKeys,loading:Ge.right,onSelectedChange:function(fe,ce){return ae(fe,ce,"right")},onPageChange:function(fe,ce){return de(fe,ce||10,"right")}}})]})},G=$.forwardRef(z)},12755:function(be,I,e){"use strict";e.r(I),e.d(I,{default:function(){return _}});var j=e(9783),r=e.n(j),b=e(97857),S=e.n(b),O=e(5574),f=e.n(O),P=e(85893),y=e(67294),N=e(83622),l=e(90814),Z=e(96842),$=e(246),oe=e(6171),H=function(u){var c=u.handleOperation;return(0,P.jsxs)(y.Fragment,{children:[(0,P.jsx)(N.ZP,{style:{marginTop:35,width:50},onClick:c.bind(void 0,"add"),type:"primary",children:(0,P.jsx)(l.Z,{})}),(0,P.jsx)(N.ZP,{style:{marginTop:35,width:50},onClick:c.bind(void 0,"allAdd"),type:"primary",children:(0,P.jsx)(Z.Z,{})}),(0,P.jsx)(N.ZP,{style:{marginTop:35,width:50},onClick:c.bind(void 0,"allDelete"),type:"primary",children:(0,P.jsx)($.Z,{})}),(0,P.jsx)(N.ZP,{style:{marginTop:35,width:50},onClick:c.bind(void 0,"delete"),type:"primary",children:(0,P.jsx)(oe.Z,{})})]})},i=e(13769),h=e.n(i),M=e(3929),v=["rowSelection","handleSelected","selectedRowKeys","pagination","handlePagination"],m=function(u){var c=u.rowSelection,d=u.handleSelected,L=u.selectedRowKeys,C=u.pagination,z=u.handlePagination,G=h()(u,v),W={pagination:{pageSize:10}};return Reflect.has(u,"pagination")&&(typeof C!="boolean"?W.pagination=S()(S()({},C),{},{onChange:z}):W.pagination=C),(0,P.jsx)(M.Z,S()(S()(S()({size:"small"},G),W),{},{rowSelection:S()(S()({},c||{}),{},{selectedRowKeys:L,onChange:d})}))},B=function(u,c,d){var L=[],C=[],z=[],G=[],W;if(u==="delete"){L=c.rightList.filter(function(V){return!c.rightSelected.selectedRowKeys.includes(V[d])});var F=c.rightList.filter(function(V){var Q=c.rightSelected.selectedRowKeys.includes(V[d]),ue=c.leftList.find(function(K){return K[d]===V[d]});return!!(Q&&!ue)});C=F.concat(c.leftList),z=c.rightSelected.selectedRowKeys,G=c.rightSelected.selectedRows,W="right"}else if(u==="allDelete")L=[],c.rightList.forEach(function(V){var Q=c.leftList.find(function(ue){return ue[d]===V[d]});Q||C.push(V)}),C=C.concat(c.leftList),W="right";else if(u==="add"){var x=c.leftList.filter(function(V){var Q=c.leftSelected.selectedRowKeys.includes(V[d]),ue=c.rightList.find(function(K){return K[d]===V[d]});return!!(Q&&!ue)});L=x.concat(c.rightList),C=c.leftList.filter(function(V){return!c.leftSelected.selectedRowKeys.includes(V[d])}),z=c.leftSelected.selectedRowKeys,G=c.leftSelected.selectedRows,W="left"}else u==="allAdd"&&(c.leftList.forEach(function(V){var Q=c.rightList.find(function(ue){return ue[d]===V[d]});Q||L.push(V)}),C=[],L=L.concat(c.rightList),W="left");return{leftList:C,rightList:L,selectedKeys:z,selectedRows:G,selectedType:W}},a=function(u,c){var d=u.leftSelected,L=u.rightSelected,C=u.columns,z=u.rowKey,G=u.leftConfig,W=u.rightConfig,F=u.pagination,x=u.leftDataSource,V=u.rightDataSource,Q=u.isQuote,ue=Q===void 0?!0:Q,K=y.useState({leftSelected:{selectedRowKeys:[],selectedRows:[]},rightSelected:{selectedRowKeys:[],selectedRows:[]},leftPagination:{page:1,pageSize:10},rightPagination:{page:1,pageSize:10},leftList:x||[],rightList:V||[]}),Ce=f()(K,2),Ne=Ce[0],$e=Ce[1],De=Ne;d&&d.selectedRowKeys&&(De.leftSelected=d),L&&L.selectedRowKeys&&(De.rightSelected=d),x&&!ue&&(De.leftList=x),V&&!ue&&(De.rightList=V);var Ge=function(Se){var X={pageSize:10};return Reflect.has(u,"pagination")&&(X=F),Reflect.has(Se||{},"pagination")&&(X=typeof Se.pagination=="boolean"||typeof F=="boolean"?Se.pagination:S()(S()({},F||{}),Se.pagination||{})),X},Je=function(Se,X,Ie){Reflect.has(u,"handleSelected")&&u.handleSelected(Se,X,Ie),$e(function(le){return S()(S()({},le),{},r()({},"".concat(Ie,"Selected"),{selectedRowKeys:Se,selectedRows:X}))})},Ye=function(Se,X,Ie){Reflect.has(u,"handlePagination")&&u.handlePagination(Se,X,Ie),$e(function(le){return S()(S()({},le),{},r()({},"".concat(Ie,"Pagination"),{page:Se,pageSize:X}))}),Je([],[],Ie)},he=function(Se){var X=B(Se,De,z),Ie=X.leftList,le=X.rightList,q=X.selectedKeys,T=X.selectedRows,ge=X.selectedType;Reflect.has(u,"handleOperation")&&u.handleOperation(Ie,le,q,T,Se),$e(function(k){return S()(S()({},k),{},r()(r()(r()({},"".concat(ge,"Selected"),{selectedRowKeys:[],selectedRows:[]}),"rightList",le),"leftList",Ie))})};return y.useImperativeHandle(c,function(){return{store:De,setStore:$e,handleSelected:Je,handlePagination:Ye,handleOperation:he}}),(0,P.jsxs)("div",{className:"carefree-antd-transfer",children:[(0,P.jsx)(m,S()(S()({},G||{}),{},{pagination:Ge(G),dataSource:De.leftList,className:"between-table",selectedRowKeys:Ne.leftSelected.selectedRowKeys,handlePagination:function(Se,X){return Ye(Se,X,"left")},handleSelected:function(Se,X){return Je(Se,X,"left")},columns:C,rowKey:z})),(0,P.jsx)("div",{className:"middle-btn",children:(0,P.jsx)(H,{handleOperation:he})}),(0,P.jsx)(m,S()(S()({},W||{}),{},{pagination:Ge(W),dataSource:De.rightList,className:"between-table",selectedRowKeys:Ne.rightSelected.selectedRowKeys,handlePagination:function(Se,X){return Ye(Se,X,"right")},handleSelected:function(Se,X){return Je(Se,X,"right")},columns:C,rowKey:z}))]})},_=y.forwardRef(a)},98103:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return a}});var r=e(15009),b=e.n(r),S=e(97857),O=e.n(S),f=e(13769),P=e.n(f),y=e(5574),N=e.n(y),l=e(49677),Z=e.n(l),$=e(99289),oe=e.n($),H=e(67294),i=e(81158),h=e(22383),M=e(90359),v=e(79398),m=e(59340),B=["key","name","fieldKey"],a={"edit-table-base-demo-0":{component:H.memo(H.lazy(oe()(b()().mark(function _(){var ne,u,c,d,L,C,z,G,W,F,x,V,Q;return b()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return ne=K.sent,u=ne.PlusOutlined,K.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return c=K.sent,d=c.Button,L=c.Form,C=c.Input,z=c.InputNumber,K.t0=Z(),K.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return K.t1=K.sent,(0,K.t0)(K.t1),K.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return G=K.sent,W=G.EditableTableBase,K.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(F=K.sent,x=F.default,V=[],Q=0;Q<5;Q++)V.push({key:Q.toString(),name:"Edrward ".concat(Q),age:32});return K.abrupt("return",{default:function(){var Ne=x.useState(V),$e=N()(Ne,2),De=$e[0],Ge=$e[1],Je=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Ye=N()(Je,2),he=Ye[0],Re=Ye[1],Se=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(Ie){return x.createElement(C,Ie)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(Ie){return Ie&&(Ie||[]).filter(function(le){return le}).map(function(le){return le.first}).join(",")},inputNode:function(Ie,le,q){var T=le.add,ge=le.remove,k=q.errors;return x.createElement(x.Fragment,null,Ie.map(function(J,Ze){var ae=J.key,de=J.name,pe=J.fieldKey,Ae=P()(J,B);return x.createElement(EditTable.Item,O()(O()({key:ae},Ae),{},{name:[de,"first"],fieldKey:[pe,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(C,{placeholder:"First Name"}))}),x.createElement(L.Item,null,x.createElement(d,{type:"dashed",onClick:function(){return T()},icon:x.createElement(u,null)},"Add field"),x.createElement(L.ErrorList,{errors:k})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(z,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",De),x.createElement("div",null,x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{isOptDelete:!he.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{optDeleteEditingDisabled:!he.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{isAdd:!he.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{multiple:!he.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{optIsFirst:!he.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{isOpt:!he.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(W,O()({initValue:{address:2193},onValuesChange:function(Ie,le,q,T,ge){Ge(Ie)},rowKey:"key",optIsFirst:!0,dataSource:De,columns:Se,onSave:function(Ie){return Ge(Ie)},isAdd:!0},he)))}});case 27:case"end":return K.stop()}},_)})))),asset:{type:"BLOCK",id:"edit-table-base-demo-0",refAtomIds:["edit-table-base"],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/reset.css';
import { EditableTableBase } from 'carefree-antd-edit-table';
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
      <EditableTableBase
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:M,"antd/dist/reset.css":v,"carefree-antd-edit-table":m,react:j||(j=e.t(H,2))},renderOpts:{compile:function(){var _=oe()(b()().mark(function u(){var c,d=arguments;return b()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,e.e(19).then(e.bind(e,4019));case 2:return C.abrupt("return",(c=C.sent).default.apply(c,d));case 3:case"end":return C.stop()}},u)}));function ne(){return _.apply(this,arguments)}return ne}()}}}},70299:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return a}});var r=e(15009),b=e.n(r),S=e(97857),O=e.n(S),f=e(13769),P=e.n(f),y=e(5574),N=e.n(y),l=e(49677),Z=e.n(l),$=e(99289),oe=e.n($),H=e(67294),i=e(76070),h=e(22383),M=e(90359),v=e(79398),m=e(59340),B=["key","name","fieldKey"],a={"packages-edit-table-src-demo-0":{component:H.memo(H.lazy(oe()(b()().mark(function _(){var ne,u,c,d,L,C,z,G,W,F,x,V,Q;return b()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return ne=K.sent,u=ne.PlusOutlined,K.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return c=K.sent,d=c.Button,L=c.Form,C=c.Input,z=c.InputNumber,K.t0=Z(),K.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return K.t1=K.sent,(0,K.t0)(K.t1),K.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return G=K.sent,W=G.default,K.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(F=K.sent,x=F.default,V=[],Q=0;Q<5;Q++)V.push({key:Q.toString(),name:"Edrward ".concat(Q),age:32});return K.abrupt("return",{default:function(){var Ne=x.useState(V),$e=N()(Ne,2),De=$e[0],Ge=$e[1],Je=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Ye=N()(Je,2),he=Ye[0],Re=Ye[1],Se=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(Ie){return x.createElement(C,Ie)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(Ie){return Ie&&(Ie||[]).filter(function(le){return le}).map(function(le){return le.first}).join(",")},inputNode:function(Ie,le,q){var T=le.add,ge=le.remove,k=q.errors;return x.createElement(x.Fragment,null,Ie.map(function(J,Ze){var ae=J.key,de=J.name,pe=J.fieldKey,Ae=P()(J,B);return x.createElement(W.Item,O()(O()({key:ae},Ae),{},{name:[de,"first"],fieldKey:[pe,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(C,{placeholder:"First Name"}))}),x.createElement(L.Item,null,x.createElement(d,{type:"dashed",onClick:function(){return T()},icon:x.createElement(u,null)},"Add field"),x.createElement(L.ErrorList,{errors:k})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(z,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",De),x.createElement("div",null,x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{isOptDelete:!he.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{optDeleteEditingDisabled:!he.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{isAdd:!he.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{multiple:!he.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{optIsFirst:!he.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(d,{onClick:function(){Re(O()(O()({},he),{},{isOpt:!he.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(W,O()({initValue:{address:2193},onValuesChange:function(Ie,le,q,T,ge){Ge(Ie)},rowKey:"key",optIsFirst:!0,dataSource:De,columns:Se,onSave:function(Ie){return Ge(Ie)},isAdd:!0},he)))}});case 27:case"end":return K.stop()}},_)})))),asset:{type:"BLOCK",id:"packages-edit-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:M,"antd/dist/reset.css":v,"carefree-antd-edit-table":m,react:j||(j=e.t(H,2))},renderOpts:{compile:function(){var _=oe()(b()().mark(function u(){var c,d=arguments;return b()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,e.e(19).then(e.bind(e,4019));case 2:return C.abrupt("return",(c=C.sent).default.apply(c,d));case 3:case"end":return C.stop()}},u)}));function ne(){return _.apply(this,arguments)}return ne}()}}}},56395:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),S=e(5574),O=e.n(S),f=e(49677),P=e.n(f),y=e(99289),N=e.n(y),l=e(67294),Z=e(44097),$=e(79398),oe=e(29441),H={"packages-form-src-md-hide-demo-0":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0];return m.createElement("div",null,m.createElement(M,{form:c,initialHide:{name1:!0},onValuesChange:function(L,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-1":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0];return m.createElement("div",null,m.createElement(M,{form:c,initialHide:{name1:!0},onValuesChange:function(L,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},watchList:{namea:function(L,C,z,G){L==="12"?G.updateValue("name1",!1):G.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-2":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0],d=M.useFormItemHide(),L=O()(d,1),C=L[0];return m.useMemo(function(){return C.setInitialValues({name1:!0},!0)},[]),m.createElement("div",null,m.createElement(M,{formHide:C,form:c,onValuesChange:function(G,W){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",W)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}}}},13305:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return M}});var r=e(97857),b=e.n(r),S=e(15009),O=e.n(S),f=e(5574),P=e.n(f),y=e(49677),N=e.n(y),l=e(99289),Z=e.n(l),$=e(67294),oe=e(29434),H=e(90359),i=e(79398),h=e(29441),M={"packages-form-src-md-start-demo-0":{component:$.memo($.lazy(Z()(O()().mark(function v(){var m,B,a,_,ne,u;return O()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return m=d.sent,B=m.Button,d.t0=N(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,_=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ne=d.sent,u=ne.default,d.abrupt("return",{default:function(){var C=_.useForm(),z=P()(C,1),G=z[0],W=function(){G.validateFields().then(function(x){console.log(x)})};return u.createElement("div",null,u.createElement(B,{onClick:W},"\u68C0\u67E5form\u8868\u5355\u63D0\u4EA4\u79FB\u9664\u7684\u9879\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u503C"),u.createElement(_,{form:G,name:"tests",initialHide:{name1:!0},watchList:{tests_namea:function(x,V,Q,ue){var K=ue.updateValue;x==="12"?ue.updateValue("tests_name1",!0):ue.updateValue(["tests","name1"],!1),console.log("\u6253\u5370---\u300B",x,V,ue,Q)}},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD54",name:"name4",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD55",type:"Custom",render:function(){for(var x=arguments.length,V=new Array(x),Q=0;Q<x;Q++)V[Q]=arguments[Q];return console.log(V),u.createElement("div",null,"----\u6D4B\u8BD55")}},{label:"\u6D4B\u8BD56",name:"name6",type:"Custom",render:u.createElement("div",null,"----\u6D4B\u8BD56")}]}))}});case 18:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:H,"antd/dist/reset.css":i,"carefree-antd-form":h,react:j||(j=e.t($,2))},renderOpts:{compile:function(){var v=Z()(O()().mark(function B(){var a,_=arguments;return O()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(a=u.sent).default.apply(a,_));case 3:case"end":return u.stop()}},B)}));function m(){return v.apply(this,arguments)}return m}()}},"packages-form-src-md-start-demo-1":{component:$.memo($.lazy(Z()(O()().mark(function v(){var m,B,a,_;return O()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.t0=N(),u.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return u.t1=u.sent,(0,u.t0)(u.t1),u.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return m=u.sent,B=m.default,u.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return a=u.sent,_=a.default,u.abrupt("return",{default:function(){return _.createElement(B,{isSearch:!0,displayPre:1,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51",name:"name1",type:"Input"},{label:"\u6D4B\u8BD52",name:"name2",type:"Input"},{label:"\u6D4B\u8BD53",name:"namea3",type:"Input"},{label:"\u6D4B\u8BD54",name:"name4",type:"Input"},{label:"\u6D4B\u8BD55",name:"name5",type:"Input"}]})}});case 14:case"end":return u.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":i,"carefree-antd-form":h,react:j||(j=e.t($,2))},renderOpts:{compile:function(){var v=Z()(O()().mark(function B(){var a,_=arguments;return O()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(a=u.sent).default.apply(a,_));case 3:case"end":return u.stop()}},B)}));function m(){return v.apply(this,arguments)}return m}()}},"packages-form-src-md-start-demo-2":{component:$.memo($.lazy(Z()(O()().mark(function v(){var m,B,a,_,ne,u;return O()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return m=d.sent,B=m.Input,d.t0=N(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,_=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ne=d.sent,u=ne.default,d.abrupt("return",{default:function(){var C=_.useForm(),z=P()(C,1),G=z[0],W=u.useState({}),F=P()(W,2),x=F[0],V=F[1],Q=G.getFieldValue,ue=_.useChildItemFun(G),K=ue.updateValue;return console.log("state",x),u.createElement(_,{form:G,layout:"vertical",isSearch:!0,onValuesChange:function(Ne,$e){if("names0"in Ne){var De;clearTimeout(De),De=setTimeout(function(){K("names3",Ne.names0),clearTimeout(De)},300)}console.log(Ne),V(b()({},$e))}},u.createElement(_.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},u.createElement(B,null)),u.createElement(_.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},u.createElement(B,null)),Q("names".concat(0))!=="12"&&u.createElement(_.ColItem,{label:"\u6D4B\u8BD54",name:"names4",style:{marginBottom:5}},u.createElement(B,null)))}});case 18:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:H,"antd/dist/reset.css":i,"carefree-antd-form":h,react:j||(j=e.t($,2))},renderOpts:{compile:function(){var v=Z()(O()().mark(function B(){var a,_=arguments;return O()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(a=u.sent).default.apply(a,_));case 3:case"end":return u.stop()}},B)}));function m(){return v.apply(this,arguments)}return m}()}},"packages-form-src-md-start-demo-3":{component:$.memo($.lazy(Z()(O()().mark(function v(){var m,B,a,_,ne,u;return O()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return m=d.sent,B=m.Input,d.t0=N(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,_=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ne=d.sent,u=ne.default,d.abrupt("return",{default:function(){var C=_.useForm(),z=P()(C,1),G=z[0],W=u.useState({}),F=P()(W,2),x=F[0],V=F[1],Q=G.getFieldValue,ue=_.useChildItemFun(G),K=ue.updateValue;return console.log("\u7EC4\u5408--->",x),u.createElement(_,{form:G,layout:"vertical",isSearch:!0,config:[{label:"\u6D4B\u8BD5config",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51config",name:"name1",type:"Input"}],onValuesChange:function(Ne,$e){V(b()({},$e))}},u.createElement(_.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},u.createElement(B,null)),u.createElement(_.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},u.createElement(B,null)))}});case 18:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:H,"antd/dist/reset.css":i,"carefree-antd-form":h,react:j||(j=e.t($,2))},renderOpts:{compile:function(){var v=Z()(O()().mark(function B(){var a,_=arguments;return O()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(a=u.sent).default.apply(a,_));case 3:case"end":return u.stop()}},B)}));function m(){return v.apply(this,arguments)}return m}()}}}},12360:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),S=e(5574),O=e.n(S),f=e(49677),P=e.n(f),y=e(99289),N=e.n(y),l=e(67294),Z=e(7131),$=e(79398),oe=e(29441),H={"packages-form-src-md-update-demo-0":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0];return m.createElement("div",null,m.createElement(M,{form:c,onValuesChange:function(L,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},watchList:{name:function(L,C,z,G){var W=z.updateValue,F=z.bathUpdateValue;W("name1",L)},name1:function(L,C,z,G){var W=z.updateValue,F=z.bathUpdateValue;F({name2:L,name3:L})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}},"packages-form-src-md-update-demo-1":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0],d=M.getChildItemFun(c),L=d.updateValue,C=d.bathUpdateValue;return m.createElement("div",null,m.createElement(M,{form:c,onValuesChange:function(G,W){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",W)},watchList:{name:function(G,W,F,x){L("name1",G)},name1:function(G,W,F,x){C({name2:G,name3:G})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}}}},421:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),S=e(5574),O=e.n(S),f=e(49677),P=e.n(f),y=e(99289),N=e.n(y),l=e(67294),Z=e(9087),$=e(79398),oe=e(29441),H={"packages-form-src-md-watch-demo-0":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0];return m.createElement("div",null,m.createElement(M,{form:c,onValuesChange:function(L,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},watchList:{namea:function(L,C,z,G){var W=z.updateValue;W("name1",L)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD5",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-1":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0];return m.createElement("div",null,m.createElement(M,{form:c,onValuesChange:function(L,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},watchList:{namea:function(L,C,z,G){var W=z.updateValue;W("name1",L)},name1:function(L,C,z,G){var W=z.updateValue;W("name2",L)},name2:function(L,C,z,G){var W=z.updateValue;W("name3",L)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-2":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,M=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=a.sent,m=v.default,a.abrupt("return",{default:function(){var ne=M.useForm(),u=O()(ne,1),c=u[0];return m.createElement("div",null,m.createElement(M,{form:c,initialHide:{name1:!0},onValuesChange:function(L,C){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",C)},watchList:{namea:function(L,C,z,G){L==="12"?G.updateValue("name1",!1):G.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}}}},51773:function(be,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var j=e(67294),r=e(30372),b={}},89237:function(be,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var j=e(67294),r=e(11010),b={}},50968:function(be,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var j=e(67294),r=e(70174),b={}},15611:function(be,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var j=e(67294),r=e(56296),b={}},87820:function(be,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var j=e(67294),r=e(91046),b={}},40352:function(be,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var j=e(67294),r=e(49833),b={}},22617:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),S=e(5574),O=e.n(S),f=e(49677),P=e.n(f),y=e(99289),N=e.n(y),l=e(67294),Z=e(67590),$=e(79398),oe=e(93251),H={"packages-fuzzy-query-src-demo-0":{component:l.memo(l.lazy(N()(b()().mark(function i(){var h,M,v,m,B;return b()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.t0=P(),_.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return _.t1=_.sent,(0,_.t0)(_.t1),_.next=7,Promise.resolve().then(e.bind(e,93251));case 7:return h=_.sent,M=h.default,_.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return v=_.sent,m=v.default,B=function(){var u=m.useState([]),c=O()(u,2),d=c[0],L=c[1],C=function(){var z=N()(b()().mark(function G(){return b()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",Array.from({length:20}).map(function(x,V){return{label:"\u540D\u79F0---".concat(V),phone:V}}));case 1:case"end":return F.stop()}},G)}));return function(){return z.apply(this,arguments)}}();return m.createElement("div",null,m.createElement(M,{request:C,mode:"multiple",value:d,onChange:L,placeholder:"\u8BF7\u9009\u62E9",columns:[{dataIndex:"label",title:"\u7528\u6237\u540D"},{dataIndex:"phone",title:"\u7535\u8BDD"}],fieldNames:{value:"phone"}}))},_.abrupt("return",{default:B});case 15:case"end":return _.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-fuzzy-query-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
export default Query;`},antd:{type:"NPM",value:"5.24.6"},"carefree-fuzzy-query":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-fuzzy-query":oe,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var i=N()(b()().mark(function M(){var v,m=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,m));case 3:case"end":return a.stop()}},M)}));function h(){return i.apply(this,arguments)}return h}()}}}},53335:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return Z}});var r=e(15009),b=e.n(r),S=e(99289),O=e.n(S),f=e(67294),P=e(6857),y=e(90359),N=e(29441),l=e(28209),Z={"packages-pro-table-src-demo-0":{component:f.memo(f.lazy(O()(b()().mark(function $(){var oe,H,i,h,M,v,m,B;return b()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return oe=_.sent,H=oe.Input,_.next=6,Promise.resolve().then(e.bind(e,29441));case 6:return i=_.sent,h=i.default,_.next=10,Promise.resolve().then(e.bind(e,28209));case 10:return M=_.sent,v=M.default,_.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return m=_.sent,B=m.default,_.abrupt("return",{default:function(){return B.createElement(v,{Api:{table:{url:"/api/user/select",method:"POST"}},initialValues:{search:{ces1:123}},columns:[{title:"\u8D26\u53F7",dataIndex:"loginName"},{title:"\u7528\u6237\u540D",dataIndex:"userName"},{title:"\u7528\u6237\u624B\u673A\u53F7",dataIndex:"phone"},{title:"\u5E74\u9F84",dataIndex:"age"}],search:{isSearch:!0,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"ces1",type:"Input"}],children:B.createElement(B.Fragment,null,B.createElement(h.ColItem,{name:"namens",label:"\u6D4B\u8BD5 children"},B.createElement(H,{placeholder:"\u8BF7\u8F93\u5165"})))}})}});case 17:case"end":return _.stop()}},$)})))),asset:{type:"BLOCK",id:"packages-pro-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},"carefree-pro-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:y,"carefree-antd-form":N,"carefree-pro-table":l,react:j||(j=e.t(f,2))},renderOpts:{compile:function(){var $=O()(b()().mark(function H(){var i,h=arguments;return b()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(19).then(e.bind(e,4019));case 2:return v.abrupt("return",(i=v.sent).default.apply(i,h));case 3:case"end":return v.stop()}},H)}));function oe(){return $.apply(this,arguments)}return oe}()}}}},40859:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return N}});var r=e(15009),b=e.n(r),S=e(99289),O=e.n(S),f=e(67294),P=e(90147),y=e(42478),N={"packages-transfer-search-src-demo-0":{component:f.memo(f.lazy(O()(b()().mark(function l(){var Z,$,oe,H;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,42478));case 2:return Z=h.sent,$=Z.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return oe=h.sent,H=oe.default,h.abrupt("return",{default:function(){return H.createElement("div",null,H.createElement($,{rowKey:"id",columns:[{title:"\u6807\u9898",dataIndex:"title"}],initValue:{left:{dataList:[{id:1,title:"\u6807\u9898"}]},right:{dataList:[{id:2,title:"\u6807\u98982"}]}},Api:{left:{url:"",options:{},before:function(){return{}},after:function(){return{}}},right:{url:"",before:function(){return{}},after:function(){return{}}},add:{url:"",before:function(){return{}},after:function(){return{}}},allAdd:{url:"",before:function(){return{}},after:function(){return{}}},allDelete:{url:"",before:function(){return{}},after:function(){return{}}},delete:{url:"",before:function(){return{}},after:function(){return{}}}},leftSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]},rightSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]}}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-search-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import TransferSearch from 'carefree-antd-transfer-search';
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
);`},"carefree-antd-transfer-search":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer-search":y,react:j||(j=e.t(f,2))},renderOpts:{compile:function(){var l=O()(b()().mark(function $(){var oe,H=arguments;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(oe=h.sent).default.apply(oe,H));case 3:case"end":return h.stop()}},$)}));function Z(){return l.apply(this,arguments)}return Z}()}}}},86968:function(be,I,e){"use strict";var j;e.r(I),e.d(I,{demos:function(){return N}});var r=e(15009),b=e.n(r),S=e(99289),O=e.n(S),f=e(67294),P=e(41699),y=e(12755),N={"packages-transfer-src-demo-0":{component:f.memo(f.lazy(O()(b()().mark(function l(){var Z,$,oe,H;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,12755));case 2:return Z=h.sent,$=Z.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return oe=h.sent,H=oe.default,h.abrupt("return",{default:function(){return H.createElement("div",null,H.createElement($,{leftDataSource:[{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:11},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:22},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:33},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:44},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:444},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4444}],rightDataSource:[{a:"\u6D4B\u8BD55",b:"\u6D4B\u8BD5215",id:5},{a:"\u6D4B\u8BD56",b:"\u6D4B\u8BD52116",id:6},{a:"\u6D4B\u8BD57",b:"\u6D4B\u8BD52127",id:7},{a:"\u6D4B\u8BD58",b:"\u6D4B\u8BD52138",id:8}],rowKey:"id",columns:[{dataIndex:"a",title:"\u6807\u9898",align:"center"},{dataIndex:"b",title:"\u68073",align:"center"}]}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Transfer from 'carefree-antd-transfer';
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
);`},"carefree-antd-transfer":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer":y,react:j||(j=e.t(f,2))},renderOpts:{compile:function(){var l=O()(b()().mark(function $(){var oe,H=arguments;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(oe=h.sent).default.apply(oe,H));case 3:case"end":return h.stop()}},$)}));function Z(){return l.apply(this,arguments)}return Z}()}}}},11160:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(81158);const r=[{value:"\u79FB\u9664",paraId:0},{value:"EditTable",paraId:0},{value:"\u4E2D\u7684",paraId:0},{value:"ref",paraId:0},{value:"\u79FB\u9664",paraId:0},{value:"EditTable",paraId:0},{value:"\u4E2D\u7684",paraId:0},{value:"store",paraId:0},{value:"\uFF0C\u6539\u7528",paraId:0},{value:"editInstance",paraId:0},{value:",\u5E76\u4F7F\u7528",paraId:0},{value:"EditableTableBase.useEditInstance()",paraId:0},{value:"\u8FDB\u884C\u521D\u59CB\u5B9E\u4F8B",paraId:0},{value:"\u79FB\u9664",paraId:0},{value:"EditTable",paraId:0},{value:"\u7684",paraId:0},{value:"ColumnsProps",paraId:0},{value:"\u4E2D",paraId:0},{value:"render",paraId:0},{value:"\u7684\u7B2C\u56DB\u4E2A\u53C2\u6570",paraId:0},{value:"\u6DFB\u52A0",paraId:0},{value:"onBeforeEdit",paraId:0},{value:"\u3001",paraId:0},{value:"onBeforeEditCancel",paraId:0},{value:"\u3001",paraId:0},{value:"onBeforeDelete",paraId:0},{value:"\u4E09\u4E2A\u65B9\u6CD5",paraId:0},{value:"\u5728\u5B50\u96C6\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u4F7F\u7528",paraId:0},{value:"EditableTableBase.useEditInstanceContext()",paraId:0},{value:"\u83B7\u53D6",paraId:0},{value:"EditTableBaseInstance",paraId:0},{value:"\u5B9E\u4F8B\u548C\u72B6\u6001\u6570\u636E",paraId:0},{value:"\u7F16\u8F91\u72B6\u6001\u65F6\u53D6\u6D88\u7F16\u8F91\u8FD8\u539F\u7F16\u8F91\u4E4B\u524D\u7684\u6570\u636E",paraId:0},{value:"\u{1F4E2} \u6CE8\u610F\uFF1A\u5982\u679C\u81EA\u5B9A\u4E49\u7F16\u8F91\u5217\u7684\u65F6\u5019\uFF0C\u8C03\u7528\u7F16\u8F91\uFF08\u4F7F\u7528\u5B9E\u4F8B\u4E2D",paraId:1},{value:"onEditRow",paraId:1},{value:"\u65B9\u6CD5\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8FDB\u884C\u5B58\u50A8\uFF09\u65F6\u6CA1\u6709\u8FDB\u884C\u5B58\u50A8\u6570\u636E\uFF0C\u5728\u53D6\u6D88\u7F16\u8F91\u65F6\uFF0C\u4E0D\u4F1A\u8FD8\u539F\u7F16\u8F91\u4E4B\u524D\u7684\u6570\u636E",paraId:1},{value:` npm i carefree-antd-edit-table
`,paraId:2,tocIndex:0},{value:`import { EditableTableBase } from 'carefree-antd-edit-table';
`,paraId:3,tocIndex:1},{value:`import React from 'react';
import {
  ProxyInstanceObject,
  ProxyInstanceObjectStoreType,
} from '@carefrees/valtio';
import { FormInstance, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { ButtonProps, TableProps, TooltipProps } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { FieldProps } from 'rc-field-form/lib/Field';
import { ListProps } from 'rc-field-form/lib/List';
import {
  FormInstance,
  Meta,
  Rule,
  ValidateErrorEntity,
} from 'rc-field-form/lib/interface';
import { RenderedCell } from 'rc-table/lib/interface';
import {
  AutoCompleteProps,
  CascaderAutoProps,
  CheckboxProps,
  DatePickerProps,
  InputNumberProps,
  InputProps,
  MentionProps,
  RadioProps,
  RateProps,
  SelectProps,
  SliderSingleProps,
  SwitchProps,
  TimePickerProps,
  TreeSelectProps,
  UploadProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox/Group';
import { RangePickerProps } from 'antd/lib/date-picker/index';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { InternalNamePath } from 'rc-field-form/lib/interface';
interface ItemType<T, P> {
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
  | ItemType<'Cascader', CascaderAutoProps<P>>
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
export type ItemChildType =
  | 'Custom'
  | 'Input'
  | 'InputNumber'
  | 'TextArea'
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
  | 'Upload'
  | 'RangePicker';
export type ItemChildAttr<T = any, K = any> =
  | InputProps
  | InputNumberProps
  | SelectProps<T>
  | AutoCompleteProps
  | CascaderAutoProps<any>
  | CheckboxProps
  | DatePickerProps
  | MentionProps
  | RadioProps
  | RateProps
  | SliderSingleProps
  | SwitchProps
  | TimePickerProps
  | TreeSelectProps<K>
  | UploadProps
  | TextAreaProps
  | RangePickerProps;
export declare function getFieldId(
  namePath: InternalNamePath,
  formName?: string,
): string | undefined;
export declare function toArray<T>(candidate?: T | T[] | false): T[];
export declare const getItem: ({
  attr,
  type,
  inputNode,
}: {
  attr: any;
  type: any;
  inputNode: any;
}) => any;
export {};

export interface EditTableInstanceStoreType
  extends ProxyInstanceObjectStoreType {
  editingKeys: string[];
  newAddKeys: string[];
}
export declare class EditTableBaseInstance extends ProxyInstanceObject<EditTableInstanceStoreType> {
  /**=======================\u6570\u636E\u6302\u8F7D==========================*/
  dataSource: any;
  initValue: any;
  rowKey: string;
  onSave?: (dataSource: any, rowData: any, record?: any, indx?: number) => void;
  onBeforeAdd?: () => boolean;
  multiple?: boolean;
  onBeforeEdit?: (rowData: any, index?: number) => boolean;
  onBeforeEditCancel?: (rowData: any, index?: number) => boolean;
  onBeforeDelete?: (rowData: any, index?: number) => boolean;
  onErr?: (err: ValidateErrorEntity<any>) => void;
  onBeforeSave?: (item: any, record: any, index?: number) => boolean;
  fields?: string[];
  onValuesChange: (
    list: any[],
    value: object,
    allValue: object,
    id: string | number,
    form: FormInstance,
  ) => void;
  /**=================================================*/
  /**\u6240\u6709\u8868\u5355\u5B9E\u4F8B*/
  formInstance: Map<string, FormInstance<any>>;
  /**\u8BB0\u5F55\u7F16\u8F91\u65F6\u884C\u6570\u636E*/
  formInstanceMapValues: Map<string, object>;
  /**\u521D\u59CB\u5316\u72B6\u6001\u503C*/
  main_store: () => this;
  /**\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u683C\u5F0F*/
  formateKeyToString: (key: string | number) => string;
  /** \u79FB\u9664 */
  remove: (name: string) => void;
  /** \u6CE8\u518C */
  register: (name: string, form: FormInstance<any>) => void;
  /** \u83B7\u53D6\u6240\u6709\u7684 from \u4FDD\u5B58\u503C */
  getStore: () => Map<string, FormInstance<any>>;
  /** \u901A\u8FC7 key \u83B7\u53D6 form \u8868\u5355 */
  getToKeyForm: (key: string | number) => FormInstance<any>;
  /**\u91CD\u7F6E\u8868\u5355\u6570\u636E*/
  restToKeyFormValue: (key: string | number, init?: any) => void;
  /**\u5224\u65AD\u662F\u5426\u7F16\u8F91\u4E2D*/
  isEditing: (record: any) => boolean;
  /**\u5224\u65AD\u662F\u5426\u65B0\u589E\u4E2D*/
  isAddEdit: (record: any) => boolean;
  /**\u79FB\u9664\u64CD\u4F5C\u7684key*/
  removeOperateKey: (key: string | number) => void;
  /**\u6DFB\u52A0\u4E00\u6761\u6570\u636E*/
  onAddRow: () => void;
  /**\u5220\u9664\u4E00\u6761\u6570\u636E*/
  onDeleteRow: (rowData: any, index?: number) => void;
  /**\u7F16\u8F91\u4E00\u6761\u6570\u636E*/
  onEditRow: (rowData: any, index?: number) => void;
  /**\u53D6\u6D88\u7F16\u8F91*/
  onEditCancel: (rowData: any, index?: number) => void;
  /**\u4FDD\u5B58\u884C\u6570\u636E*/
  onSaveRow: (rowData: any, index?: number) => Promise<void>;
  /**\u884C\u7F16\u8F91\u6570\u636E\u66F4\u65B0\u4E8B\u4EF6*/
  onRowValuesChange: (
    id: string | number,
    form: FormInstance,
    value: object,
    allValue: object,
  ) => void;
}
export declare const useEditTableBaseInstance: (
  instance?: EditTableBaseInstance,
) => EditTableBaseInstance;
export declare const EditTableBaseInstanceContext: import('react').Context<EditTableBaseInstance>;
export declare const useEditTableBaseInstanceContext: () => [
  EditTableInstanceStoreType,
  (value: Partial<EditTableInstanceStoreType>, type?: 'ref' | 'none') => void,
  EditTableBaseInstance,
  any,
];

export type ColumnsBaseProps = ColumnType<any> & {
  /** \u662F\u5426\u7F16\u8F91  */
  editable?: boolean;
  /** \u81EA\u5B9A\u4E49 \u6E32\u67D3\u7F16\u8F91\u7EC4\u4EF6 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** \u89C4\u5219 */
  rules?: Rule[];
  /** formItem \u8868\u5355 \u5176\u4ED6\u5C5E\u6027\u503C*/
  itemAttr?: Omit<FieldProps, 'rules' | 'label' | 'name'>;
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
  ) => React.ReactNode | RenderedCell<any>;
} & ItemChild<any, any>;
/**  Item \u7EC4\u4EF6  \u6E32\u67D3\u7684\u5355\u4E2A\u5185\u90E8FromItem\u7EC4\u4EF6  */
export interface EditableBaseCellItemProps
  extends Omit<FieldProps, 'label' | 'children'> {
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
        control: {
          [name: string]: any;
        },
        meta: Meta,
        form: FormInstance<any>,
        v?: {
          record: any;
        },
      ) => React.ReactNode);
}
export interface EditableTableBaseProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  /** \u5217 **/
  columns: ColumnsBaseProps[];
  /** \u4FDD\u5B58\u6570\u636E */
  onSave: (
    data: any[],
    row: object,
    record?: object,
    indx?: number,
    type?: 'onEditCancel' | 'onSaveRow' | 'onDeleteRow' | 'onAddRow',
  ) => void;
  /** \u4FDD\u5B58\u6570\u636E\u4E4B\u524D\u6821\u9A8C */
  onBeforeSave?: (item: object, record: object, index: number) => boolean;
  /**\u4E3B\u952E  */
  rowKey: string;
  /** \u64CD\u4F5C\u5217\u662F\u653E\u5728\u9996\u4F4D\u8FD8\u662F\u6700\u540E */
  optIsFirst?: boolean;
  /** \u662F\u5426\u9700\u8981\u64CD\u4F5C\u5217 */
  isOpt?: boolean;
  /** \u64CD\u4F5C\u914D\u7F6E */
  optConfig?: ColumnsBaseProps;
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
  editInstance?: EditTableBaseInstance;
  /** \u6709\u4E00\u4E2A\u5904\u4E8E\u7F16\u8F91\u72B6\u6001\u65F6 \u5220\u9664 \u662F\u5426\u7981\u7528   */
  optDeleteEditingDisabled?: boolean;
  /**\u7F16\u8F91\u4E00\u884C\u4E4B\u524D\u7684\u8C03\u7528\u65B9\u6CD5*/
  onBeforeEdit?: (rowData: any, index?: number) => boolean;
  /** \u7F16\u8F91\u4E00\u884C\u53D6\u6D88\u4E4B\u524D\u7684\u8C03\u7528\u65B9\u6CD5*/
  onBeforeEditCancel?: (rowData: any, index?: number) => boolean;
  /**\u5220\u9664\u4E00\u884C\u4E4B\u524D\u7684\u8C03\u7528\u65B9\u6CD5*/
  onBeforeDelete?: (rowData: any, index?: number) => boolean;
}
export interface AddBtnProps extends ButtonProps {}

export declare const EditableTableBase: {
  (props: EditableTableBaseProps): JSX.Element;
  useEditInstance: (
    instance?: import('./instance/instance').EditTableBaseInstance,
  ) => import('./instance/instance').EditTableBaseInstance;
  useEditInstanceContext: () => [
    import('./instance/instance').EditTableInstanceStoreType,
    (
      value: Partial<import('./instance/instance').EditTableInstanceStoreType>,
      type?: 'ref' | 'none',
    ) => void,
    import('./instance/instance').EditTableBaseInstance,
    any,
  ];
  Item: (props: import('./interface').EditableBaseCellItemProps) => JSX.Element;
};
export default EditableTableBase;
`,paraId:4,tocIndex:3}]},87253:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(76070);const r=[{value:` npm i carefree-antd-edit-table
`,paraId:0,tocIndex:0},{value:`import EditTable from 'carefree-antd-edit-table';
`,paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"columns",paraId:2,tocIndex:2},{value:"\u5217",paraId:2,tocIndex:2},{value:"ColumnsProps[]",paraId:2,tocIndex:2},{value:"onSave",paraId:2,tocIndex:2},{value:"\u4FDD\u5B58\u6570\u636E",paraId:2,tocIndex:2},{value:"(data: any[], row: object, record?: object, indx?: number) => void",paraId:2,tocIndex:2},{value:"onBeforeSave",paraId:2,tocIndex:2},{value:"\u4FDD\u5B58\u6570\u636E\u4E4B\u524D\u6821\u9A8C",paraId:2,tocIndex:2},{value:"(item: object, record: object, index: number) => boolean",paraId:2,tocIndex:2},{value:"rowKey",paraId:2,tocIndex:2},{value:"\u4E3B\u952E",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"optIsFirst",paraId:2,tocIndex:2},{value:"\u64CD\u4F5C\u5217\u662F\u653E\u5728\u9996\u4F4D\u8FD8\u662F\u6700\u540E",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"isOpt",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9700\u8981\u64CD\u4F5C\u5217",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"optConfig",paraId:2,tocIndex:2},{value:"\u64CD\u4F5C\u914D\u7F6E",paraId:2,tocIndex:2},{value:"ColumnsProps",paraId:2,tocIndex:2},{value:"isOptDelete",paraId:2,tocIndex:2},{value:"\u64CD\u4F5C\u662F\u5426\u9700\u8981 \u5220\u9664 \u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"initValue",paraId:2,tocIndex:2},{value:"\u65B0\u589E\u521D\u59CB\u503C",paraId:2,tocIndex:2},{value:"object",paraId:2,tocIndex:2},{value:"isAdd",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5B58\u5728\u65B0\u589E\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"onBeforeAdd",paraId:2,tocIndex:2},{value:"\u65B0\u589E\u4E4B\u524D\u6821\u9A8C",paraId:2,tocIndex:2},{value:"() => boolean",paraId:2,tocIndex:2},{value:"onErr",paraId:2,tocIndex:2},{value:"\u884C\u62A5\u9519\u4FE1\u606F",paraId:2,tocIndex:2},{value:"(err: ValidateErrorEntity<any>) => void",paraId:2,tocIndex:2},{value:"onValuesChange",paraId:2,tocIndex:2},{value:"\u8868\u5355\u503C\u66F4\u65B0\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(list: any[], value: object, allValue: object,id: string | number, form: FormInstance)=>void",paraId:2,tocIndex:2},{value:"multiple",paraId:2,tocIndex:2},{value:"\u662F\u5426\u53EF\u4EE5\u591A\u884C\u7F16\u8F91",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"addBtnProps",paraId:2,tocIndex:2},{value:"\u65B0\u589E\u6309\u94AE\u914D\u7F6E",paraId:2,tocIndex:2},{value:"AddBtnProps",paraId:2,tocIndex:2},{value:"store",paraId:2,tocIndex:2},{value:"form \u8868\u5355\u72B6\u6001\u5904\u7406",paraId:2,tocIndex:2},{value:"Store",paraId:2,tocIndex:2},{value:"\u66F4\u591A\u53C2\u6570",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:4,tocIndex:2},{value:`export interface EditableTableProps
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
`,paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:3},{value:"\u8BF4\u660E",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"preName",paraId:6,tocIndex:3},{value:"\u5F53\u524D\u884C\u6570\u636E\u5B58\u50A8\u7236\u7EA7\u7684 name list \u65F6\u4E0D\u7528\u4F20",paraId:6,tocIndex:3},{value:"ColumnsProps[]",paraId:6,tocIndex:3},{value:"itemValue",paraId:6,tocIndex:3},{value:"\u5F53\u524D\u884C\u7684\u6240\u6709\u6570\u636E",paraId:6,tocIndex:3},{value:"(data: any[], row: object, record?: object, indx?: number) => void",paraId:6,tocIndex:3},{value:"tipAttr",paraId:6,tocIndex:3},{value:"Tooltip \u7EC4\u4EF6\u5C5E\u6027",paraId:6,tocIndex:3},{value:"(item: object, record: object, index: number) => boolean",paraId:6,tocIndex:3},{value:"tip",paraId:6,tocIndex:3},{value:"\u9519\u8BEF\u63D0\u793A",paraId:6,tocIndex:3},{value:"string",paraId:6,tocIndex:3},{value:"children",paraId:6,tocIndex:3},{value:"\u8FDB\u884C\u8986\u5199,\u4E3A\u65B9\u6CD5\u65F6\u65B0\u589E\u4E00\u4E2A\u884C\u53C2\u6570",paraId:6,tocIndex:3},{value:"React.ReactElement | ((control: { [name: string]: any }, meta: Meta, form: FormInstance<any>,v?: { record: any }) => React.ReactNode)",paraId:6,tocIndex:3},{value:"\u66F4\u591A\u53C2\u6570",paraId:7,tocIndex:3},{value:`/**  Item \u7EC4\u4EF6  \u6E32\u67D3\u7684\u5355\u4E2A\u5185\u90E8FromItem\u7EC4\u4EF6  */
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
`,paraId:8,tocIndex:3},{value:"\u53C2\u6570",paraId:9,tocIndex:4},{value:"\u8BF4\u660E",paraId:9,tocIndex:4},{value:"\u7C7B\u578B",paraId:9,tocIndex:4},{value:"editable",paraId:9,tocIndex:4},{value:"\u662F\u5426\u7F16\u8F91",paraId:9,tocIndex:4},{value:"boolean",paraId:9,tocIndex:4},{value:"inputNode",paraId:9,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 \u6E32\u67D3\u7F16\u8F91\u7EC4\u4EF6",paraId:9,tocIndex:4},{value:"(data: any[], row: object, record?: object, indx?: number) => void",paraId:9,tocIndex:4},{value:"rules",paraId:9,tocIndex:4},{value:"\u89C4\u5219",paraId:9,tocIndex:4},{value:"(item: object, record: object, index: number) => boolean",paraId:9,tocIndex:4},{value:"itemAttr",paraId:9,tocIndex:4},{value:"formItem \u8868\u5355 \u5176\u4ED6\u5C5E\u6027\u503C",paraId:9,tocIndex:4},{value:"string",paraId:9,tocIndex:4},{value:"attr",paraId:9,tocIndex:4},{value:"formItem \u8868\u5355 children \u4E2D\u7EC4\u4EF6\u53C2\u6570",paraId:9,tocIndex:4},{value:"boolean",paraId:9,tocIndex:4},{value:"type",paraId:9,tocIndex:4},{value:"\u7EC4\u4EF6\u7C7B\u578B",paraId:9,tocIndex:4},{value:"boolean",paraId:9,tocIndex:4},{value:"isList",paraId:9,tocIndex:4},{value:"\u662F\u5426\u662F List",paraId:9,tocIndex:4},{value:"ColumnsProps",paraId:9,tocIndex:4},{value:"listAttr",paraId:9,tocIndex:4},{value:"list \u7EC4\u4EF6\u53C2\u6570",paraId:9,tocIndex:4},{value:"boolean",paraId:9,tocIndex:4},{value:"tip",paraId:9,tocIndex:4},{value:"\u9519\u8BEF\u63D0\u793A",paraId:9,tocIndex:4},{value:"object",paraId:9,tocIndex:4},{value:"tipAttr",paraId:9,tocIndex:4},{value:"Tooltip \u7EC4\u4EF6\u5C5E\u6027",paraId:9,tocIndex:4},{value:"boolean",paraId:9,tocIndex:4},{value:"render",paraId:9,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 \u6E32\u67D3(\u5217\u539F\u59CB\u9ED8\u8BA4\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3,\u52A0\u4E86\u4E2A other \u53C2\u6570\uFF0C\u4E0D\u662F\u7F16\u8F91\u72B6\u6001\u4E0B\u7684\u8868\u683C\u6E32\u67D3),other \u53C2\u6570 \u53EA\u6709\u64CD\u4F5C\u5217\u624D\u6709",paraId:9,tocIndex:4},{value:"( value: any,record: any,index: number,other?: OtherProps,) => React.ReactNode | RenderedCell<any>",paraId:9,tocIndex:4},{value:"\u66F4\u591A\u53C2\u6570",paraId:10,tocIndex:4},{value:"OtherProps",paraId:11,tocIndex:4},{value:"\u53C2\u6570",paraId:12,tocIndex:4},{value:"\u8BF4\u660E",paraId:12,tocIndex:4},{value:"\u7C7B\u578B",paraId:12,tocIndex:4},{value:"editingKey",paraId:12,tocIndex:4},{value:"\u7F16\u8F91\u4E2D\u5B57\u6BB5",paraId:12,tocIndex:4},{value:"any[]",paraId:12,tocIndex:4},{value:"editable",paraId:12,tocIndex:4},{value:"\u5F53\u524D\u884C \u662F\u5426\u7F16\u8F91",paraId:12,tocIndex:4},{value:"boolean",paraId:12,tocIndex:4},{value:"newAdd",paraId:12,tocIndex:4},{value:"\u5904\u4E8E\u7F16\u8F91\u72B6\u6001\u7684 \u65B0\u589E\u6570\u636E key",paraId:12,tocIndex:4},{value:"any[]",paraId:12,tocIndex:4},{value:"isNewAdd",paraId:12,tocIndex:4},{value:"\u662F\u5426\u65B0\u589E\u7684",paraId:12,tocIndex:4},{value:"boolean",paraId:12,tocIndex:4},{value:"save",paraId:12,tocIndex:4},{value:"\u4FDD\u5B58 \uFF0Ckey:\u4E3B\u952E \uFF0Crecord\uFF1A\u884C\u6570\u636E\uFF0Cindex:\u4E0B\u6807",paraId:12,tocIndex:4},{value:"(key: string | number, record: object, indx: number) => void",paraId:12,tocIndex:4},{value:"cancel",paraId:12,tocIndex:4},{value:"\u53D6\u6D88 \uFF0C id\uFF1A\u4E3B\u952E",paraId:12,tocIndex:4},{value:"(id: string | number) => void",paraId:12,tocIndex:4},{value:"onDelete",paraId:12,tocIndex:4},{value:"\u5220\u9664 \uFF0Cid\uFF1A\u4E3B\u952E\uFF0C rowItem \u5F53\u524D\u884C\u6570\u636E \uFF0Cindex:\u4E0B\u6807",paraId:12,tocIndex:4},{value:"(id: string | number, rowItem: object, index: number) => void",paraId:12,tocIndex:4},{value:"edit",paraId:12,tocIndex:4},{value:"\u7F16\u8F91 \u6309\u94AE \uFF0Crecord \u5F53\u524D\u884C\u6570",paraId:12,tocIndex:4},{value:"(record: object) => void",paraId:12,tocIndex:4},{value:`interface ItemType<T, P> {
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
`,paraId:13,tocIndex:4},{value:"\u53C2\u6570",paraId:14,tocIndex:5},{value:"\u8BF4\u660E",paraId:14,tocIndex:5},{value:"\u7C7B\u578B",paraId:14,tocIndex:5},{value:"save",paraId:14,tocIndex:5},{value:"\u4FDD\u5B58 \uFF0Ckey:\u4E3B\u952E \uFF0Crecord\uFF1A\u884C\u6570\u636E\uFF0Cindex:\u4E0B\u6807",paraId:14,tocIndex:5},{value:"(key: string | number, record: object, indx: number) => void",paraId:14,tocIndex:5},{value:"cancel",paraId:14,tocIndex:5},{value:"\u53D6\u6D88 \uFF0C id\uFF1A\u4E3B\u952E",paraId:14,tocIndex:5},{value:"(id: string | number) => void",paraId:14,tocIndex:5},{value:"onDelete",paraId:14,tocIndex:5},{value:"\u5220\u9664 \uFF0Cid\uFF1A\u4E3B\u952E\uFF0C rowItem \u5F53\u524D\u884C\u6570\u636E \uFF0Cindex:\u4E0B\u6807",paraId:14,tocIndex:5},{value:"(id: string | number, rowItem: object, index: number) => void",paraId:14,tocIndex:5},{value:"edit",paraId:14,tocIndex:5},{value:"\u7F16\u8F91 \u6309\u94AE \uFF0Crecord \u5F53\u524D\u884C\u6570",paraId:14,tocIndex:5},{value:"(record: object) => void",paraId:14,tocIndex:5},{value:"add",paraId:14,tocIndex:5},{value:"\u65B0\u589E",paraId:14,tocIndex:5},{value:"() => void",paraId:14,tocIndex:5},{value:"isEditing",paraId:14,tocIndex:5},{value:"\u662F\u5426\u7F16\u8F91\u4E2D",paraId:14,tocIndex:5},{value:"(record: any) => boolean",paraId:14,tocIndex:5},{value:"isAddEdit",paraId:14,tocIndex:5},{value:"\u662F\u5426\u662F\u65B0\u589E",paraId:14,tocIndex:5},{value:"(record: any) => boolean",paraId:14,tocIndex:5},{value:"editingKey",paraId:14,tocIndex:5},{value:"\u7F16\u8F91\u4E2D\u5B57\u6BB5",paraId:14,tocIndex:5},{value:"any[]",paraId:14,tocIndex:5},{value:"newAdd",paraId:14,tocIndex:5},{value:"\u5904\u4E8E\u7F16\u8F91\u72B6\u6001\u7684 \u65B0\u589E\u6570\u636E key",paraId:14,tocIndex:5},{value:"any[]",paraId:14,tocIndex:5},{value:"forms",paraId:14,tocIndex:5},{value:"\u6536\u96C6 \u6240\u6709 \u8868\u5355",paraId:14,tocIndex:5},{value:"Store",paraId:14,tocIndex:5},{value:`// ref \u503C
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
`,paraId:15,tocIndex:5}]},66782:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(44097);const r=[{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:0},{value:"isHide",paraId:0},{value:` \u5C5E\u6027\uFF0C\u5224\u65AD\u8868\u5355\u9879\u662F\u5426\u53EF\u4EE5\u6709\u9690\u85CF\u64CD\u4F5C
\u901A\u8FC7\u8BBE\u7F6E `,paraId:0},{value:"initialHide",paraId:0},{value:" \u5C5E\u6027 \uFF0C\u8BBE\u7F6E\u521D\u59CB\u8868\u5355\u9879\u9690\u85CF\u6216\u5C55\u793A",paraId:0}]},84651:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(29434);const r=[{value:` npm i carefree-antd-form
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
`,paraId:7,tocIndex:4}]},88412:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(7131);const r=[{value:"updateValue",paraId:0},{value:" \u548C ",paraId:0},{value:"bathUpdateValue",paraId:0},{value:" \u65B9\u6CD5\u66F4\u65B0\u8868\u5355\u503C\uFF0C\u53EF\u4EE5\u89E6\u53D1 ",paraId:0},{value:"onValuesChange",paraId:0},{value:" \u4E8B\u4EF6",paraId:0},{value:"\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"getChildItemFun",paraId:1,tocIndex:1},{value:" \u65B9\u6CD5\u83B7\u53D6",paraId:1,tocIndex:1}]},34434:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(9087);const r=[{value:"form \u52A0 ",paraId:0},{value:"watchList",paraId:0},{value:" \u5C5E\u6027, \u5BF9\u8868\u5355\u9879\u66F4\u65B0\u503C\u8FDB\u884C\u76D1\u542C",paraId:0}]},67157:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(30372);const r=[{value:"useSubscribe",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(sub?: Subscribe) => Subscribe[]",paraId:2,tocIndex:0},{value:`const [subscribe] = useSubscribe();
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
`,paraId:16,tocIndex:0}]},68927:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(11010);const r=[{value:"useHideFormItem",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(form?: HideGetStoreProps) => HideGetStoreProps[]",paraId:2,tocIndex:0},{value:`export default () => {
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
`,paraId:15,tocIndex:0}]},25777:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(70174);const r=[{value:"useWatchList",paraId:0,tocIndex:0},{value:"\u6536\u96C6\u5728\u76D1\u542C\u540E\u9700\u8981\u7684\u4E00\u4E9B\u5904\u7406\u6570\u636E\u7684\u65B9\u6CD5",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(props: {[x: string]: any}) => ChildPropsType[]",paraId:2,tocIndex:0},{value:`export const WatchItem = (props: { [x: string]: any }) => {
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

`,paraId:7,tocIndex:0}]},85426:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(56296);const r=[{value:"\u4E00\u4E2A\u4F20\u9012\u5176\u4ED6\u7EC4\u4EF6\u9700\u8981\u7684\u53C2\u6570\u7684 context",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"React.Context<ContextProps>",paraId:1,tocIndex:0},{value:"\u83B7\u53D6 ",paraId:2,tocIndex:1},{value:"FormContext",paraId:2,tocIndex:1},{value:" \u7684\u503C",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"() => ContextProps",paraId:3,tocIndex:1},{value:"\u4E00\u4E2A\u4F20\u9012 \u8868\u5355\u540D\u79F0\u7684 context",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"React.Context<string|number>",paraId:5,tocIndex:2},{value:"\u83B7\u53D6 ",paraId:6,tocIndex:3},{value:"FormParentNameContext",paraId:6,tocIndex:3},{value:" \u7684\u503C",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"() => string|number",paraId:7,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:4},{value:"Form.useForm()",paraId:8,tocIndex:4},{value:" \u8FD4\u56DE\u503C [from] \u8FDB\u884C\u83B7\u53D6\u5B50\u9879\u4E2D\u66F4\u65B0\u503C\u7684\u65B9\u6CD5",paraId:8,tocIndex:4},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:4},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:9,tocIndex:4},{value:"\u83B7\u53D6 ",paraId:10,tocIndex:5},{value:"from.useForm",paraId:10,tocIndex:5},{value:" \u4E2D\u66F4\u65B0",paraId:10,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:11,tocIndex:5},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:11,tocIndex:5}]},13829:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(91046);const r=[{value:"\u6839\u636E rc-field-from \u5C01\u88C5\u7684\u8868\u5355\u8054\u52A8/\u9690\u85CF/\u76D1\u542C \u7EC4\u4EF6\u6216\u5DE5\u5177",paraId:0},{value:`
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
`,paraId:6}]},34836:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(49833);const r=[{value:"\u5B57\u6BB5\u8F6C\u6362\u6210 ",paraId:0,tocIndex:0},{value:"_",paraId:0,tocIndex:0},{value:" \u62FC\u63A5\u7684\u5B57\u7B26\u4E32",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"(path: NamePath) => number | InternalNamePath",paraId:1,tocIndex:0},{value:"\u628A\u8868\u5355\u9879\u5B57\u6BB5\u548C\u8868\u5355\u540D\u79F0 \u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"_",paraId:2,tocIndex:1},{value:" \u62FC\u63A5\u5728\u4E00\u8D77",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"(namePath: InternalNamePath, formName?: string): string | undefined",paraId:3,tocIndex:1},{value:"\u8F6C\u6362\u6210\u6570\u7EC4",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"function toArray<T>(candidate?: T | T[] | false): T[]",paraId:5,tocIndex:2},{value:"\u83B7\u53D6\u662F\u5426\u662F\u5FC5\u586B",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"function getRequired(required: boolean | undefined, rules: Rule[] | undefined, form: FormInstance) => boolean",paraId:7,tocIndex:3}]},64330:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(67590);const r=[{value:` npm i carefree-fuzzy-query
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
`,paraId:4,tocIndex:1}]},59715:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(6857);const r=[{value:"\u96C6\u6210\u67E5\u8BE2\u8868\u5355\u548C\u8868\u683C\uFF0C\u5B9E\u73B0\u5FEB\u901F\u4F7F\u7528\u8868\u5355\u8868\u683C\u8054\u5408\u4F7F\u7528\u7B80\u5355\u5316\uFF0C\u5FEB\u901F\u5B9E\u73B0\u4EE3\u7801\u529F\u80FD",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"Api",paraId:1,tocIndex:0},{value:"\u63A5\u53E3\u8C03\u7528 \u53EF\u4EE5\u8C03\u7528\u7684\u63A5\u53E3",paraId:1,tocIndex:0},{value:"ApiProps",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u8868\u683C columns",paraId:1,tocIndex:0},{value:"(v?: Store) => TableProps<any>['columns']|TableProps<any>['columns']",paraId:1,tocIndex:0},{value:"main",paraId:1,tocIndex:0},{value:"\u72B6\u6001 \u5B58\u50A8",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"initialValues",paraId:1,tocIndex:0},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:0},{value:"Store['store']",paraId:1,tocIndex:0},{value:"searchHead",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355\u8868\u5934\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"searchCardProps",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355 \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableHead",paraId:1,tocIndex:0},{value:"\u8868\u683C\u5934\u90E8\u64CD\u4F5C\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"tableCardProps",paraId:1,tocIndex:0},{value:"\u8868\u683C \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableConfig",paraId:1,tocIndex:0},{value:"\u8868\u683C\u914D\u7F6E",paraId:1,tocIndex:0},{value:"TableProps<any> & { apiName?: string,table?: { page?: number, pageSize?: number, dataSource?: any[],total?: number,selectRows?: any[], selectRowKeys?: any[],pagination?: PageProps,}",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:2,tocIndex:0},{value:`// \u53C2\u6570
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
`,paraId:3,tocIndex:0}]},51550:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(90147);const r=[{value:` npm i carefree-antd-transfer-search
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
`,paraId:3,tocIndex:1}]},57798:function(be,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var j=e(41699);const r=[{value:` npm i carefree-antd-transfer
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
