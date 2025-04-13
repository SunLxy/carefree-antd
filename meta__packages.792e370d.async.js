(self.webpackChunkcarefree_antd_root=self.webpackChunkcarefree_antd_root||[]).push([[56],{59340:function(Se,I,e){"use strict";e.r(I),e.d(I,{EditableTableBase:function(){return Qe},Store:function(){return Me},default:function(){return lt}});var F=e(15009),r=e.n(F),b=e(19632),T=e.n(b),O=e(99289),p=e.n(O),P=e(9783),y=e.n(P),W=e(97857),l=e.n(W),Z=e(5574),$=e.n(Z),ae=e(13769),H=e.n(ae),s=e(85893),h=e(45360),j=e(3929),f=e(83622),c=e(67294),B=e(7825),a=e(86738),R=e(42075),ee=function(n){var o=n.optConfig,t=n.isEditing,v=n.isAddEdit,m=n.save,L=n.isOptDelete,g=n.cancel,C=n.onDelete,A=n.edit,M=n.newAdd,G=n.editingKey,ne=n.rowKey,de=n.multiple,ce=n.optDeleteEditingDisabled;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},o),{},{render:function(ye,ve,me){var ie=t(ve),je=v(ve);return o&&o.render?o.render(ye,ve,me,{editable:ie,isNewAdd:je,save:m,cancel:g,onDelete:C,edit:A,newAdd:M,editingKey:G}):ie?(0,s.jsxs)("span",{children:[(0,s.jsx)(B.Z.Link,{onClick:function(){return m(ve[ne],ve,me)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,s.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:je?C.bind(void 0,ve[ne],ve,me):g.bind(void 0,ve[ne]),children:(0,s.jsx)(B.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,s.jsxs)(R.Z,{children:[(0,s.jsx)(B.Z.Link,{disabled:!!G.length&&!de,onClick:function(){return A(ve)},children:"\u7F16\u8F91"}),L&&(0,s.jsx)(a.Z,{disabled:ce&&!!G.length,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return C(ve[ne],ve,me)},children:(0,s.jsx)(B.Z.Link,{disabled:ce&&!!G.length,children:"\u5220\u9664"})})]})}})]},i=ee,u=e(72004),d=e.n(u),V=e(12444),S=e.n(V),z=d()(function E(){var n=this;S()(this,E),y()(this,"store",{}),y()(this,"remove",function(o){delete n.store[o]}),y()(this,"register",function(o,t){n.store[o]=t}),y()(this,"getStore",function(){return n.store}),y()(this,"getToKeyForm",function(o){return n.store["".concat(o)]})}),X=function(n){var o=c.useRef();return n?o.current=n:o.current=new z,[o.current]},U=z,D=e(83062),x=e(88692),N=e(88760),J=e(25278),se=e(13457),K=e(63960),_e=e(3303),Ve=e(67002),Ne=e(86125),Fe=e(59847),ze=e(34041),Xe=e(84567),Je=e(11330),Pe=e(55742),Oe=e(41637),Re=e(68351),Q=e(23799),ge=N.default.RangePicker;function re(E,n){if(E.length){var o=E.join("_");return n?"".concat(n,"_").concat(o):o}}function q(E){return E===void 0||E===!1?[]:Array.isArray(E)?E:[E]}var _=function(n){var o=n.attr,t=n.type,v=n.inputNode,m;if(t==="Input"){var L=o;m=(0,s.jsx)(J.Z,l()({},L))}else if(t==="TextArea"){var g=o;m=(0,s.jsx)(J.Z.TextArea,l()({},g))}else if(t==="InputNumber"){var C=o;m=(0,s.jsx)(se.Z,l()({},C))}else if(t==="AutoComplete"){var A=o;m=(0,s.jsx)(K.Z,l()({},A))}else if(t==="Cascader"){var M=o;m=(0,s.jsx)(_e.Z,l()({},M))}else if(t==="DatePicker"){var G=o;m=(0,s.jsx)(N.default,l()({},G))}else if(t==="Rate"){var ne=o;m=(0,s.jsx)(Ve.Z,l()({},ne))}else if(t==="Slider"){var de=o;m=(0,s.jsx)(Ne.Z,l()({},de))}else if(t==="TreeSelect"){var ce=o;m=(0,s.jsx)(Fe.Z,l()({},ce))}else if(t==="Select"){var Ee=o;m=(0,s.jsx)(ze.default,l()({},Ee))}else if(t==="Checkbox"){var ye=o;m=(0,s.jsx)(Xe.Z.Group,l()({},ye))}else if(t==="Mentions"){var ve=o;m=(0,s.jsx)(Je.Z,l()({},ve))}else if(t==="Radio"){var me=o;m=(0,s.jsx)(Pe.ZP.Group,l()({},me))}else if(t==="Switch"){var ie=o;m=(0,s.jsx)(Oe.Z,l()({},ie))}else if(t==="TimePicker"){var je=o;m=(0,s.jsx)(Re.Z,l()({},je))}else if(t==="Upload"){var $e=o;m=(0,s.jsx)(Q.Z,l()({},$e))}else if(t==="RangePicker"){var pe=o;m=(0,s.jsx)(ge,l()({},pe))}else t==="Custom"&&(m=v);return m},be=["editing","dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","multiple","rowKey","isList","listAttr"],k=["name","rules","preName","itemValue","children","tipAttr","tip"],Y=function(n){var o=n.editing,t=n.dataIndex,v=n.title,m=n.record,L=n.index,g=n.inputNode,C=n.rules,A=n.children,M=n.itemAttr,G=n.type,ne=n.attr,de=n.tip,ce=n.tipAttr,Ee=n.multiple,ye=n.rowKey,ve=n.isList,me=n.listAttr,ie=me===void 0?{}:me,je=H()(n,be),$e=_({attr:ne,type:G,inputNode:g}),pe=function(){return ve&&typeof g=="function"?(0,s.jsx)(x.ZP.List,l()(l()({},ie),{},{name:t,children:function(pn,Pn,an){return g(pn.map(function(rn){return l()(l()({},rn),{},{fieldKey:rn.key})}),Pn,an)}})):(0,s.jsx)(Ue,l()(l()({},M),{},{name:t,rules:C,preName:m[ye],itemValue:m,children:$e,tipAttr:ce,tip:de}))};return(0,s.jsx)("td",l()(l()({},je),{},{children:o?pe():A}))},Ue=function(n){var o=n.name,t=n.rules,v=n.preName,m=v===void 0?"":v,L=n.itemValue,g=n.children,C=n.tipAttr,A=C===void 0?{}:C,M=n.tip,G=H()(n,k);return(0,s.jsx)(x.ZP.Field,l()(l()({},G),{},{name:o,rules:t,children:function(de,ce,Ee){var ye=q(o).length&&ce?ce.name:[],ve=re(ye,m),me=function(pe){var ke=pe;pe&&pe.target&&(ke=pe.target.value),de.onChange(ke)},ie=typeof g=="function"?g(l()(l()({},de),{},{id:ve}),ce,Ee,{record:L}):c.isValidElement(g)?c.cloneElement(g,l()(l()({},de),{},{onChange:me,id:ve})):g,je=ce.errors.map(function($e){return $e}).join(",");return(0,s.jsx)(D.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},A),{},{title:M?M(je):je,open:!!ce.errors.length,children:ie}))}}))},te=Y,oe=c.createContext({formsRef:new U,dataSource:[],rowKey:"id",onValuesChange:function(n,o,t,v){}}),fe=function(n){var o=x.ZP.useForm(),t=$()(o,1),v=t[0],m=c.useContext(oe),L=m.formsRef,g=m.onValuesChange,C=g===void 0?function(){}:g,A=m.dataSource,M=m.rowKey;c.useEffect(function(){return function(){return L.remove("".concat(n["data-row-key"]))}},[]),L.register("".concat(n["data-row-key"]),v);var G=A.find(function(ne){return"".concat(ne[M])==="".concat(n["data-row-key"])});return(0,s.jsx)(x.ZP,{onValuesChange:C.bind(void 0,"".concat(n["data-row-key"]),v),form:v,name:"".concat(n["data-row-key"]),component:!1,initialValues:G||{},children:(0,s.jsx)("tr",l()({},n))})},De=fe,Le=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","store","optDeleteEditingDisabled"],Ie=function(n,o){var t=n.columns,v=n.dataSource,m=v===void 0?[]:v,L=n.onBeforeSave,g=n.onSave,C=n.rowKey,A=C===void 0?"id":C,M=n.optIsFirst,G=M===void 0?!1:M,ne=n.optConfig,de=ne===void 0?{}:ne,ce=n.isOptDelete,Ee=ce===void 0?!1:ce,ye=n.initValue,ve=ye===void 0?{}:ye,me=n.onValuesChange,ie=n.isAdd,je=n.onErr,$e=n.multiple,pe=$e===void 0?!1:$e,ke=n.onBeforeAdd,mn=n.isOpt,pn=mn===void 0?!0:mn,Pn=n.addBtnProps,an=Pn===void 0?{}:Pn,rn=n.store,un=n.optDeleteEditingDisabled,dn=un===void 0?!1:un,Rn=H()(n,Le),An=X(rn),xn=$()(An,1),Ze=xn[0],fn=(0,c.useState)([]),Cn=$()(fn,2),vn=Cn[0],He=Cn[1],On=c.useState([]),Ge=$()(On,2),Ke=Ge[0],Vn=Ge[1],Dn=function(Ce){He(function(Be){return Be.filter(function(Ye){return"".concat(Ye)!=="".concat(Ce)})}),Vn(function(Be){return Be.filter(function(Ye){return"".concat(Ye)!=="".concat(Ce)})})},Qn=c.useMemo(function(){return t.filter(function(xe){return xe.editable}).map(function(xe){return xe.dataIndex})},[t]),Nn=function(Ce){var Be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Ye=Ze.getStore();Ye["".concat(Ce)]&&Ye["".concat(Ce)].setFieldsValue(Be)},Wn=function(Ce){var Be=Ze.getStore();return Be["".concat(Ce)]},Bn=function(Ce){return vn.includes("".concat(Ce[A]))},Un=function(Ce){return Ke.includes("".concat(Ce[A]))},$n=function(){if(!(ke&&!ke())){if(Ke.length===1&&!pe)return void h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");if(vn.length===1&&!pe)return void h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");var Ce=(new Date().getTime()*Math.round(10)).toString(),Be=l()(l()({},ve||{}),{},y()({},A,Ce)),Ye=m.concat([Be]);He(function(en){return en.concat([Ce])}),Vn(function(en){return en.concat([Ce])}),g&&g(Ye,Be)}},Fn=function(Ce){var Be=l()({},Ce);Nn(Ce[A],Be),He(function(Ye){return Ye.concat(["".concat(Ce[A])])})},wn=function(Ce){Dn(Ce),Nn(Ce,{})},Zn=function(Ce,Be,Ye){var en=m.filter(function(bn){return"".concat(bn[A])!=="".concat(Ce)});Dn(Ce),g&&g(en,Be,Be,Ye)},jn=function(){var xe=p()(r()().mark(function Ce(Be,Ye,en){var bn,In,zn,qn;return r()().wrap(function(on){for(;;)switch(on.prev=on.next){case 0:return on.prev=0,on.next=3,Wn(Be).validateFields();case 3:if(bn=on.sent,!(L&&!L(bn,Ye,en))){on.next=6;break}return on.abrupt("return");case 6:In=T()(m),zn=In.findIndex(function(dt){return"".concat(Be)==="".concat(dt[A])}),zn>-1?(qn=In[zn],In.splice(zn,1,l()(l()({},qn),bn))):In.push(bn),g&&g(In,bn,Ye,en),Dn(Be),Wn(Be).resetFields(Qn),on.next=17;break;case 14:on.prev=14,on.t0=on.catch(0),je&&je(on.t0);case 17:case"end":return on.stop()}},Ce,null,[[0,14]])}));return function(Be,Ye,en){return xe.apply(this,arguments)}}(),Hn=pn&&i({optConfig:de,isEditing:Bn,isAddEdit:Un,save:jn,isOptDelete:Ee,cancel:wn,onDelete:Zn,edit:Fn,newAdd:Ke,editingKey:vn,rowKey:A,multiple:pe,optDeleteEditingDisabled:dn})||[],Jn=G?Hn.concat(t):t.concat(Hn),Yn=Jn.map(function(xe){return xe.editable?l()(l()({},xe),{},{onCell:function(Be){return{record:Be,multiple:pe,rowKey:A,dataIndex:xe.dataIndex,title:xe.title,editing:Bn(Be),inputNode:xe.inputNode,rules:xe.rules||[],itemAttr:xe.itemAttr,type:xe.type,attr:xe.attr,tip:xe.tip,tipAttr:xe.tipAttr,isList:xe.isList,listAttr:xe.listAttr}}}):xe}),Mn=function(Ce,Be,Ye,en){if(me){var bn=m.map(function(In){return"".concat(Ce)==="".concat(In[A])?l()(l()({},In),en):l()({},In)});me(bn,Ye,en,Ce,Be)}};return c.useImperativeHandle(o,function(){return{save:jn,onDelete:Zn,edit:Fn,cancel:wn,add:$n,isEditing:Bn,editingKey:vn,newAdd:Ke,isAddEdit:Un,forms:Ze}}),(0,s.jsx)(c.Fragment,{children:(0,s.jsxs)(oe.Provider,{value:{formsRef:Ze,onValuesChange:Mn,dataSource:m,rowKey:A},children:[(0,s.jsx)(j.Z,l()(l()({size:"small",bordered:!0},Rn),{},{components:{body:{row:De,cell:te}},rowKey:A,dataSource:m,columns:Yn,rowClassName:"editable-row",pagination:!1})),ie&&(0,s.jsx)(f.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},an||{}),{},{style:l()({marginTop:10},(an||{}).style||{}),onClick:$n}))]})})},ue=c.forwardRef(Ie),he=ue;he.useStore=X,he.Item=Ue;var le=he,Me=U,Ae=e(25098),w=e.n(Ae),we=e(31996),Te=e.n(we),nn=e(26037),Sn=e.n(nn),We=e(58024),qe=e(17625),tn=function(E){Te()(o,E);var n=Sn()(o);function o(){var t;S()(this,o);for(var v=arguments.length,m=new Array(v),L=0;L<v;L++)m[L]=arguments[L];return t=n.call.apply(n,[this].concat(m)),y()(w()(t),"dataSource",[]),y()(w()(t),"initValue",{}),y()(w()(t),"rowKey",""),y()(w()(t),"onSave",void 0),y()(w()(t),"onBeforeAdd",void 0),y()(w()(t),"multiple",void 0),y()(w()(t),"onBeforeEdit",void 0),y()(w()(t),"onBeforeEditCancel",void 0),y()(w()(t),"onBeforeDelete",void 0),y()(w()(t),"onErr",void 0),y()(w()(t),"onBeforeSave",void 0),y()(w()(t),"fields",void 0),y()(w()(t),"onValuesChange",void 0),y()(w()(t),"formInstance",new Map([])),y()(w()(t),"formInstanceMapValues",new Map([])),y()(w()(t),"main_store",function(){var g=l()(l()({},t.defaultInital),{},{editingKeys:t._createRef([]),newAddKeys:t._createRef([])});return t._ctor(g),w()(t)}),y()(w()(t),"formateKeyToString",function(g){return"".concat(g)}),y()(w()(t),"remove",function(g){t.formInstance.delete(t.formateKeyToString(g))}),y()(w()(t),"register",function(g,C){t.formInstance.set(t.formateKeyToString(g),C)}),y()(w()(t),"getStore",function(){return t.formInstance}),y()(w()(t),"getToKeyForm",function(g){return t.formInstance.get(t.formateKeyToString(g))}),y()(w()(t),"restToKeyFormValue",function(g){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},A=t.getToKeyForm(g);A&&A.setFieldsValue(C)}),y()(w()(t),"isEditing",function(g){var C=t.store.editingKeys,A=C===void 0?[]:C;if(g)return A.includes("".concat(g[t.rowKey]))}),y()(w()(t),"isAddEdit",function(g){var C=t.store.newAddKeys,A=C===void 0?[]:C;if(g)return A.includes("".concat(g[t.rowKey]))}),y()(w()(t),"removeOperateKey",function(g){var C=t.store,A=C.editingKeys,M=A===void 0?[]:A,G=C.newAddKeys,ne=G===void 0?[]:G,de=M.filter(function(Ee){return"".concat(Ee)!=="".concat(g)}),ce=ne.filter(function(Ee){return"".concat(Ee)!=="".concat(g)});t.formInstanceMapValues.delete("".concat(g)),t._setRefStore({editingKeys:de,newAddKeys:ce})}),y()(w()(t),"onAddRow",function(){var g=t.store,C=g.editingKeys,A=C===void 0?[]:C,M=g.newAddKeys,G=M===void 0?[]:M;if(!(typeof t.onBeforeAdd=="function"&&!t.onBeforeAdd())){if(G.length===1&&!t.multiple)return void h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");if(A.length===1&&!t.multiple)return void h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");var ne=(new Date().getTime()*Math.round(10)).toString(),de=l()(l()({},t.initValue||{}),{},y()({},t.rowKey,ne)),ce=T()(t.dataSource||[]).concat([de]);t._setRefStore({editingKeys:T()(A).concat([ne]),newAddKeys:T()(G).concat([ne])}),t.onSave&&t.onSave(ce,de)}}),y()(w()(t),"onDeleteRow",function(g,C){var A=!0;if(typeof t.onBeforeDelete=="function"&&(A=t.onBeforeDelete(g,C)),A){var M=t.formateKeyToString(g[t.rowKey]),G=T()(t.dataSource||[]).filter(function(ne){return"".concat(ne[t.rowKey])!==M});t.removeOperateKey(M),t.onSave&&t.onSave(G,g,g,C)}}),y()(w()(t),"onEditRow",function(g,C){var A=!0;if(typeof t.onBeforeEdit=="function"&&(A=t.onBeforeEdit(g,C)),A){var M=l()({},g),G=t.store.editingKeys,ne=G===void 0?[]:G,de=t.formateKeyToString(g[t.rowKey]);t.formInstanceMapValues.set(de,l()({},g)),t._setRefStore({editingKeys:T()(ne).concat([de])}),t.restToKeyFormValue(de,M)}}),y()(w()(t),"onEditCancel",function(g,C){var A=!0;if(typeof t.onBeforeEditCancel=="function"&&(A=t.onBeforeEditCancel(g,C)),A){var M=t.formateKeyToString(g[t.rowKey]),G=t.formInstanceMapValues.get(M),ne=T()(t.dataSource||[]),de=ne.findIndex(function(Ee){return M==="".concat(Ee[t.rowKey])});if(de>-1){var ce=ne[C];ne.splice(de,1,l()({},G||ce))}else ne.push(G);t.onSave&&t.onSave(ne,g,G,C),t.removeOperateKey(M),t.restToKeyFormValue(M,G)}}),y()(w()(t),"onSaveRow",function(){var g=p()(r()().mark(function C(A,M){var G,ne,de,ce,Ee,ye,ve;return r()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:if(ie.prev=0,G=t.formateKeyToString(A[t.rowKey]),ne=t.getToKeyForm(G),!ne){ie.next=19;break}return ie.next=6,ne.validateFields();case 6:if(de=ie.sent,ce=!0,typeof t.onBeforeSave=="function"&&(ce=t.onBeforeSave(de,A,M)),ce){ie.next=11;break}return ie.abrupt("return");case 11:Ee=T()(t.dataSource||[]),ye=Ee.findIndex(function(je){return G==="".concat(je[t.rowKey])}),ye>-1?(ve=Ee[M],Ee.splice(ye,1,l()(l()({},ve),de))):Ee.push(de),t.onSave&&t.onSave(Ee,de,A,M),t.removeOperateKey(G),ne.resetFields(t.fields||[]),ie.next=20;break;case 19:h.ZP.warning("\u672A\u83B7\u53D6\u5230\u5F53\u524D form \u5B9E\u4F8B");case 20:ie.next=25;break;case 22:ie.prev=22,ie.t0=ie.catch(0),t.onErr&&t.onErr(ie.t0);case 25:case"end":return ie.stop()}},C,null,[[0,22]])}));return function(C,A){return g.apply(this,arguments)}}()),y()(w()(t),"onRowValuesChange",function(g,C,A,M){if(typeof t.onValuesChange=="function"){var G=t.formateKeyToString(g),ne=T()(t.dataSource||[]).map(function(de){return G===t.formateKeyToString(de[t.rowKey])?l()(l()({},de),M):l()({},de)});t.onValuesChange(ne,A,M,g,C)}}),t}return d()(o)}(We.P2),hn=function(n){var o=(0,c.useRef)(null);return o.current||(n?o.current=n:o.current=new tn),o.current},En=(0,c.createContext)(new tn),sn=function(){var n=(0,c.useContext)(En),o=(0,qe.R)(n.store),t=function(L){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ref";g==="none"?n._setStore(L):n._setRefStore(L)},v=o.___temps;return[o,t,n,v]},gn=function(n){var o=n.rowData,t=n.optConfig,v=n.index,m=n.multiple,L=n.isOptDelete,g=n.optDeleteEditingDisabled,C=sn(),A=$()(C,3),M=A[0],G=A[2],ne=M.editingKeys,de=M.newAddKeys,ce=(0,c.useMemo)(function(){return G.isEditing(o)},[ne,o]),Ee=(0,c.useMemo)(function(){return G.isAddEdit(o)},[de,o]),ye=(ne||[]).length;return t&&t.render?t.render(o,o,v):ce?(0,s.jsxs)("span",{children:[(0,s.jsx)(B.Z.Link,{onClick:function(){return G.onSaveRow(o,v)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,s.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return Ee?G.onDeleteRow(o,v):G.onEditCancel(o,v)},children:(0,s.jsx)(B.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,s.jsxs)(R.Z,{children:[(0,s.jsx)(B.Z.Link,{disabled:!!ye&&!m,onClick:function(){return G.onEditRow(o,v)},children:"\u7F16\u8F91"}),L&&(0,s.jsx)(a.Z,{disabled:g&&!!ye,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return G.onDeleteRow(o,v)},children:(0,s.jsx)(B.Z.Link,{disabled:g&&!!ye,children:"\u5220\u9664"})})]})},cn=function(n){var o=n.optConfig;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},o),{},{render:function(v,m,L){return(0,s.jsx)(gn,l()(l()({},n),{},{value:v,index:L,rowData:m}))}})]},Tn=cn,Ln=N.default.RangePicker;function Gn(E,n){if(E.length){var o=E.join("_");return n?"".concat(n,"_").concat(o):o}}function Kn(E){return E===void 0||E===!1?[]:Array.isArray(E)?E:[E]}var _n=function(n){var o=n.attr,t=n.type,v=n.inputNode,m;if(t==="Input"){var L=o;m=(0,s.jsx)(J.Z,l()({},L))}else if(t==="TextArea"){var g=o;m=(0,s.jsx)(J.Z.TextArea,l()({},g))}else if(t==="InputNumber"){var C=o;m=(0,s.jsx)(se.Z,l()({},C))}else if(t==="AutoComplete"){var A=o;m=(0,s.jsx)(K.Z,l()({},A))}else if(t==="Cascader"){var M=o;m=(0,s.jsx)(_e.Z,l()({},M))}else if(t==="DatePicker"){var G=o;m=(0,s.jsx)(N.default,l()({},G))}else if(t==="Rate"){var ne=o;m=(0,s.jsx)(Ve.Z,l()({},ne))}else if(t==="Slider"){var de=o;m=(0,s.jsx)(Ne.Z,l()({},de))}else if(t==="TreeSelect"){var ce=o;m=(0,s.jsx)(Fe.Z,l()({},ce))}else if(t==="Select"){var Ee=o;m=(0,s.jsx)(ze.default,l()({},Ee))}else if(t==="Checkbox"){var ye=o;m=(0,s.jsx)(Xe.Z.Group,l()({},ye))}else if(t==="Mentions"){var ve=o;m=(0,s.jsx)(Je.Z,l()({},ve))}else if(t==="Radio"){var me=o;m=(0,s.jsx)(Pe.ZP.Group,l()({},me))}else if(t==="Switch"){var ie=o;m=(0,s.jsx)(Oe.Z,l()({},ie))}else if(t==="TimePicker"){var je=o;m=(0,s.jsx)(Re.Z,l()({},je))}else if(t==="Upload"){var $e=o;m=(0,s.jsx)(Q.Z,l()({},$e))}else if(t==="RangePicker"){var pe=o;m=(0,s.jsx)(Ln,l()({},pe))}else t==="Custom"&&(m=v);return m},yn=["dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","isList","listAttr"],ln=["name","rules","preName","itemValue","children","tipAttr","tip"],Xn=c.memo(function(E){var n=E.dataIndex,o=E.title,t=E.record,v=E.index,m=E.inputNode,L=E.rules,g=E.children,C=E.itemAttr,A=E.type,M=E.attr,G=E.tip,ne=E.tipAttr,de=E.isList,ce=E.listAttr,Ee=ce===void 0?{}:ce,ye=H()(E,yn),ve=sn(),me=$()(ve,3),ie=me[0],je=me[2],$e=je.rowKey,pe=(0,c.useMemo)(function(){return t?je.isEditing(t):!1},[ie.editingKeys,t]),ke=_n({attr:M,type:A,inputNode:m}),mn=function(){return de&&typeof m=="function"?(0,s.jsx)(x.ZP.List,l()(l()({},Ee),{},{name:n,children:function(an,rn,un){return m(an.map(function(dn){return l()(l()({},dn),{},{fieldKey:dn.key})}),rn,un)}})):(0,s.jsx)(kn,l()(l()({},C),{},{name:n,rules:L,preName:t[$e],itemValue:t,children:ke,tipAttr:ne,tip:G}))};return(0,s.jsx)("td",l()(l()({},ye),{},{children:pe?mn():g}))}),kn=function(n){var o=n.name,t=n.rules,v=n.preName,m=v===void 0?"":v,L=n.itemValue,g=n.children,C=n.tipAttr,A=C===void 0?{}:C,M=n.tip,G=H()(n,ln);return(0,s.jsx)(x.ZP.Field,l()(l()({},G),{},{name:o,rules:t,children:function(de,ce,Ee){var ye=Kn(o).length&&ce?ce.name:[],ve=Gn(ye,m),me=function(pe){var ke=pe;pe&&pe.target&&(ke=pe.target.value),de.onChange(ke)},ie=typeof g=="function"?g(l()(l()({},de),{},{id:ve}),ce,Ee,{record:L}):c.isValidElement(g)?c.cloneElement(g,l()(l()({},de),{},{onChange:me,id:ve})):g,je=ce.errors.map(function($e){return $e}).join(",");return(0,s.jsx)(D.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},A),{},{title:M?M(je):je,open:!!ce.errors.length,children:ie}))}}))},nt=Xn,tt=c.memo(function(E){var n=x.ZP.useForm(),o=$()(n,1),t=o[0],v=sn(),m=$()(v,3),L=m[2];c.useEffect(function(){return function(){return L.remove("".concat(E["data-row-key"]))}},[]),L.register("".concat(E["data-row-key"]),t);var g=(L.dataSource||[]).find(function(C){return"".concat(C[L.rowKey])==="".concat(E["data-row-key"])});return(0,s.jsx)(x.ZP,{onValuesChange:L.onRowValuesChange.bind(void 0,"".concat(E["data-row-key"]),t),form:t,name:"".concat(E["data-row-key"]),component:!1,initialValues:g||{},children:(0,s.jsx)("tr",l()({},E))})}),at=tt,rt=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","editInstance","optDeleteEditingDisabled","onBeforeEdit","onBeforeEditCancel","onBeforeDelete"],Qe=function(n){var o=n.columns,t=n.dataSource,v=t===void 0?[]:t,m=n.onBeforeSave,L=n.onSave,g=n.rowKey,C=g===void 0?"id":g,A=n.optIsFirst,M=A===void 0?!1:A,G=n.optConfig,ne=n.isOptDelete,de=ne===void 0?!1:ne,ce=n.initValue,Ee=ce===void 0?{}:ce,ye=n.onValuesChange,ve=n.isAdd,me=n.onErr,ie=n.multiple,je=ie===void 0?!1:ie,$e=n.onBeforeAdd,pe=n.isOpt,ke=pe===void 0?!0:pe,mn=n.addBtnProps,pn=mn===void 0?{}:mn,Pn=n.editInstance,an=n.optDeleteEditingDisabled,rn=an===void 0?!1:an,un=n.onBeforeEdit,dn=n.onBeforeEditCancel,Rn=n.onBeforeDelete,An=H()(n,rt),xn=c.useMemo(function(){return o.filter(function(He){return He.editable}).map(function(He){return He.dataIndex})},[o]),Ze=hn(Pn);Ze.dataSource=v,Ze.initValue=Ee,Ze.rowKey=C,Ze.onSave=L,Ze.onBeforeAdd=$e,Ze.multiple=je,Ze.onErr=me,Ze.fields=xn,Ze.onValuesChange=ye,Ze.onBeforeSave=m,Ze.onBeforeEdit=un,Ze.onBeforeEditCancel=dn,Ze.onBeforeDelete=Rn;var fn=ke&&Tn({optConfig:G,isOptDelete:de,multiple:je,optDeleteEditingDisabled:rn})||[],Cn=M?fn.concat(o):o.concat(fn),vn=Cn.map(function(He){return He.editable?l()(l()({},He),{},{onCell:function(Ge){return{record:Ge,dataIndex:He.dataIndex,title:He.title,inputNode:He.inputNode,rules:He.rules||[],itemAttr:He.itemAttr,type:He.type,attr:He.attr,tip:He.tip,tipAttr:He.tipAttr,isList:He.isList,listAttr:He.listAttr}}}):He});return(0,s.jsx)(c.Fragment,{children:(0,s.jsxs)(En.Provider,{value:Ze,children:[(0,s.jsx)(j.Z,l()(l()({size:"small",bordered:!0},An),{},{components:{body:{row:at,cell:nt}},rowKey:C,dataSource:v,columns:vn,rowClassName:"editable-row",pagination:!1})),ve&&(0,s.jsx)(f.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},pn||{}),{},{style:l()({marginTop:10},(pn||{}).style||{}),onClick:Ze.onAddRow}))]})})};Qe.useEditInstance=hn,Qe.useEditInstanceContext=sn,Qe.Item=kn;var ot=null,lt=le},29441:function(Se,I,e){"use strict";e.r(I),e.d(I,{default:function(){return lt}});var F=e(97857),r=e.n(F),b=e(5574),T=e.n(b),O=e(13769),p=e.n(O),P=e(85893),y=e(67294),W=e(22150),l=e(71230),Z=e(15746),$=y.createContext({}),ae=function(){return y.useContext($)},H=y.createContext({isFloat:!1,isSetHeight:!1,layout:"horizontal"}),s=function(){return y.useContext(H)},h=e(11950),j=e(45520),f=function(){(0,j.default)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},c=y.createContext({getComponents:f,getStoreState:f,setInitialValues:f,updateValue:f,getItemStore:function(){return{init:f,register:f,getStoreState:f,updateValue:f,getValue:f}}}),B=function(){return y.useContext(c)},a=e(12444),R=e.n(a),ee=e(72004),i=e.n(ee),u=e(9783),d=e.n(u),V=function(){function E(){var n=this;R()(this,E),d()(this,"subForm",{}),d()(this,"subHide",{}),d()(this,"registerId",function(o,t,v){v&&(n.subForm[v]=o,n.subHide[v]=t)}),d()(this,"removeId",function(o){o&&(delete n.subForm[o],delete n.subHide[o])})}return i()(E,[{key:"subForms",get:function(){return this.subForm}},{key:"subHides",get:function(){return this.subHide}}]),E}(),S=function(n){var o=y.useRef();return n?o.current=n:o.current=new V,[o.current]},z=y.createContext(new V),X=function(){return y.useContext(z)},U=function(n){var o=n.form,t=n.subscribe,v=n.name,m=n.hide;v&&t.registerId(o,m,v),y.useEffect(function(){return function(){return t.removeId(v)}},[])},D=function(n){return Array.isArray(n)?n:typeof n=="string"?n.split("_").filter(function(o){return o}):n},x=function(n){var o={};if(n){var t=n.getInternalHooks;o=t(h.ki)}var v=function(g,C){o.dispatch&&o.dispatch({type:"updateValue",namePath:D(g),value:C})},m=function(g){Object.entries(g).forEach(function(C){var A=T()(C,2),M=A[0],G=A[1];v(M,G)})};return r()(r()({},o),{},{updateValue:v,bathUpdateValue:m})},N=function(n){return x(n)},J=function(n){var o=ae(),t=X(),v=B(),m,L=N(o.itemRefHook);if(o){var g=o.watchList;m=g[(n||{}).id]}return y.useEffect(function(){if((o||{}).firstMont){var C=o.itemRefHook.getFieldsValue;typeof m=="function"&&m((n||{}).value,C(!0),r()({},L),v,{forms:t.subForms,hides:t.subHides})}},[JSON.stringify((n||{}).value)]),[L]},se=e(50568),K=e(19632),_e=e.n(K),Ve=e(52677),Ne=e.n(Ve);function Fe(E){return Ne()(E)=="object"&&E!==null&&Object.getPrototypeOf(E)===Object.prototype}function ze(E,n){var o=Array.isArray(E)?_e()(E):r()({},E);return n&&Object.keys(n).forEach(function(t){var v=o[t],m=n[t],L=Fe(v)&&Fe(m);o[t]=L?ze(v,m||{}):m}),o}function Xe(E){for(var n=arguments.length,o=new Array(n>1?n-1:0),t=1;t<n;t++)o[t-1]=arguments[t];return o.reduce(function(v,m){return ze(v,m)},E)}var Je=i()(function E(){var n=this;R()(this,E),d()(this,"store",{}),d()(this,"componentLists",[]),d()(this,"init",function(o){var t=o.props||{},v=t.initialValue;if(v!==void 0){var m=o.getNamePath();m&&(n.store=(0,se.sO)(n.store,m,v))}}),d()(this,"register",function(o){n.componentLists.push(o);var t=o.props||{},v=t.initialValue;return v!==void 0&&o.refresh(),function(){n.componentLists=n.componentLists.filter(function(L){return L!==o});var m=o.getNamePath();m&&(n.store=(0,se.sO)(n.store,m,void 0,!0))}}),d()(this,"getStoreState",function(o){return o?(0,se.NA)(n.store,o):n.store}),d()(this,"getComponents",function(){return n.componentLists}),d()(this,"getStore",function(){return{getComponents:n.getComponents,getStoreState:n.getStoreState,getItemStore:n.getItemStore,setInitialValues:n.setInitialValues,updateValue:n.updateValue,bathUpdateValue:n.bathUpdateValue}}),d()(this,"getItemStore",function(){return{init:n.init,register:n.register,getStoreState:n.getStoreState,updateValue:n.updateValue,getValue:n.getValue,bathUpdateValue:n.bathUpdateValue}}),d()(this,"setInitialValues",function(o,t){t&&(n.store=Xe({},o,n.store))}),d()(this,"getPaths",function(o){return Array.isArray(o)?o:typeof o=="string"?o.split("_").filter(function(t){return t}):[]}),d()(this,"bathUpdateValue",function(o){Object.entries(o).forEach(function(t){var v=T()(t,2),m=v[0],L=v[1],g=n.getPaths(m);n.store=(0,se.sO)(n.store,g,L)}),n.bathNotifyObservers(Object.keys(o))}),d()(this,"updateValue",function(o,t){var v=n.getPaths(o);n.store=(0,se.sO)(n.store,v,t),n.notifyObservers(v)}),d()(this,"getValue",function(o){var t=n.getPaths(o);return(0,se.NA)(n.store,t)}),d()(this,"bathNotifyObservers",function(o){n.componentLists.forEach(function(t){var v=t.refresh,m=t.getNamePath,L=m();o.includes(L.join(""))&&v()})}),d()(this,"notifyObservers",function(o){n.componentLists.forEach(function(t){var v=t.refresh,m=t.getNamePath,L=m();L.join("")===o.join("")&&v()})})}),Pe=function(n){var o=y.useRef();if(!o.current)if(n)o.current=n;else{var t=new Je;o.current=t.getStore()}return[o.current]},Oe=Pe,Re=e(25098),Q=e.n(Re),ge=e(31996),re=e.n(ge),q=e(26037),_=e.n(q),be=function(E){re()(o,E);var n=_()(o);function o(t){var v;if(R()(this,o),v=n.call(this,t),d()(Q()(v),"mounted",!1),d()(Q()(v),"cancelRegisterFunc",function(){}),d()(Q()(v),"getNamePath",function(){var C=v.props,A=C.name,M=C.formName;return Array.isArray(A)?M&&[M].concat(A)||A:M&&[M,A]||[A]}),d()(Q()(v),"refresh",function(){v.mounted&&v.forceUpdate()}),d()(Q()(v),"getValue",function(){var C=v.props.hideContent,A=C.getItemStore(),M=A.getValue;return M(v.getNamePath())}),t.hideContent){var m=t.hideContent,L=m.getItemStore(),g=L.init;g(Q()(v))}return v}return i()(o,[{key:"componentDidMount",value:function(){var v=this.props.hideContent;if(v){var m=v.getItemStore(),L=m.register;this.cancelRegisterFunc=L(this)}this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.cancelRegisterFunc(),this.mounted=!1}},{key:"render",value:function(){var v=this.props.children;return this.getValue()?(0,P.jsx)(y.Fragment,{}):(0,P.jsx)(y.Fragment,{children:v})}}]),o}(y.Component),k=function(n){var o=y.useContext(c);return(0,P.jsx)(be,r()(r()({},n),{},{hideContent:o}))},Y=e(88760),Ue=e(25278),te=e(13457),oe=e(63960),fe=e(3303),De=e(67002),Le=e(86125),Ie=e(59847),ue=e(34041),he=e(84567),le=e(11330),Me=e(55742),Ae=e(41637),w=e(68351),we=e(23799),Te=e(83622),nn=e(48115),Sn=e(80882),We=["children","style"],qe=["children","colProps"],tn=function(n){var o=n.children,t=n.style,v=p()(n,We),m=s(),L=m.isFloat,g=m.isSetHeight,C=m.layout,A={};return L&&(A={float:"left",width:"100%",overflow:"hidden"},g&&(A.height=C==="inline"?54:74)),(0,P.jsx)(Z.Z,r()(r()({span:6},v),{},{style:r()(r()({},A),t||{}),children:o}))},hn=function(n){var o=n.children,t=n.colProps,v=t===void 0?{}:t,m=p()(n,qe);return(0,P.jsx)(tn,r()(r()({},v||{}),{},{children:(0,P.jsx)(ot.Item,r()(r()({},m),{},{children:o}))}))},En=hn,sn=["children"],gn=["children"],cn=["children"],Tn=["style","watch","shouldUpdate","dependencies"],Ln=Y.default.RangePicker,Gn=function(n,o){return Array.isArray(n)?o&&[o].concat(n).join("_")||n.join("_"):o&&"".concat(o,"_").concat(n)||n},Kn=function(n){var o=n||{},t=o.children,v=p()(o,sn),m=J(n),L=T()(m,1),g=L[0];return typeof t=="function"?t(r()(r()({},v),{},{childProps:g})):y.isValidElement(t)?y.cloneElement(t,r()({},v)):t},_n=function(n){var o=n.children,t=p()(n,gn);return(0,P.jsx)(W.Z.Item,r()(r()({},t),{},{children:(0,P.jsx)(Kn,{children:o})}))},yn=function(n){var o=n.children,t=p()(n,cn);return(0,P.jsx)(En,r()(r()({},t),{},{children:(0,P.jsx)(Kn,{children:o})}))},ln=function(n,o){var t=o.colProps,v=t===void 0?{}:t,m=o.itemStyle,L=m===void 0?{}:m,g=o.attrStyle,C=g===void 0?{}:g,A=o.attrProps,M=A===void 0?{}:A,G=o.watchList,ne=o.name,de=o.layout,ce=o.isFloat,Ee=o.isSetHeight;return n.map(function(ye,ve){var me=ye.type,ie=ye.label,je=ye.name,$e=ye.itemAttr,pe=ye.attr,ke=ye.rules,mn=ye.render,pn=ye.isItemList,Pn=ye.isHide,an=ye.colProps,rn=an===void 0?{}:an,un={};ce&&(un={float:"left",width:"100%",overflow:"hidden"},Ee&&(un.height=de==="inline"?54:74));var dn=$e||{},Rn=dn.style,An=Rn===void 0?{}:Rn,xn=dn.watch,Ze=xn===void 0?!0:xn,fn=dn.shouldUpdate,Cn=dn.dependencies,vn=p()(dn,Tn),He=pe||{},On=He.style,Ge=On===void 0?{}:On,Ke;if(me==="Input"){var Vn=pe,Dn=M;Ke=(0,P.jsx)(Ue.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ie)},Dn),Vn),{},{style:r()(r()({},C),Ge)}))}else if(me==="TextArea"){var Qn=pe,Nn=M;Ke=(0,P.jsx)(Ue.Z.TextArea,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ie)},Nn),Qn),{},{style:r()(r()({},C),Ge)}))}else if(me==="InputNumber"){var Wn=pe,Bn=M;Ke=(0,P.jsx)(te.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ie)},Bn),Wn),{},{style:r()(r()({width:"100%"},C),Ge)}))}else if(me==="AutoComplete"){var Un=pe,$n=M;Ke=(0,P.jsx)(oe.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ie)},$n),Un),{},{style:r()(r()({},C),Ge)}))}else if(me==="Cascader"){var Fn=pe,wn=M;Ke=(0,P.jsx)(fe.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ie)},wn),Fn),{},{style:r()(r()({},C),Ge)}))}else if(me==="DatePicker"){var Zn=pe,jn=M;Ke=(0,P.jsx)(Y.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ie)},jn),Zn),{},{style:r()(r()({width:"100%"},C),Ge)}))}else if(me==="Rate"){var Hn=pe,Jn=M;Ke=(0,P.jsx)(De.Z,r()(r()(r()({},Jn),Hn),{},{style:r()(r()({},C),Ge)}))}else if(me==="Slider"){var Yn=pe,Mn=M;Ke=(0,P.jsx)(Le.Z,r()(r()(r()({},Mn),Yn),{},{style:r()(r()({},C),Ge)}))}else if(me==="TreeSelect"){var xe=pe,Ce=M;Ke=(0,P.jsx)(Ie.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ie)},Ce),xe),{},{style:r()(r()({},C),Ge)}))}else if(me==="Select"){var Be=pe,Ye=M;Ke=(0,P.jsx)(ue.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ie)},Ye),Be),{},{style:r()(r()({},C),Ge)}))}else if(me==="Checkbox"){var en=pe,bn=M;Ke=(0,P.jsx)(he.Z.Group,r()(r()(r()({},bn),en),{},{style:r()(r()({},C),Ge)}))}else if(me==="Mentions"){var In=pe,zn=M;Ke=(0,P.jsx)(le.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(ie)},zn),In),{},{style:r()(r()({},C),Ge)}))}else if(me==="Radio"){var qn=pe,st=M;Ke=(0,P.jsx)(Me.ZP.Group,r()(r()(r()({},st),qn),{},{style:r()(r()({},C),Ge)}))}else if(me==="Switch"){var on=pe,dt=M;Ke=(0,P.jsx)(Ae.Z,r()(r()(r()({},dt),on),{},{style:r()(r()({},C),Ge)}))}else if(me==="TimePicker"){var it=pe,ut=M;Ke=(0,P.jsx)(w.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(ie)},ut),it),{},{style:r()(r()({width:"100%"},C),Ge)}))}else if(me==="Upload"){var ct=pe,mt=M;Ke=(0,P.jsx)(we.Z,r()(r()(r()({},mt),ct),{},{style:r()(r()({},C),Ge)}))}else if(me==="RangePicker"){var pt=pe,ft=M;Ke=(0,P.jsx)(Y.default.RangePicker,r()(r()(r()({},ft),pt),{},{style:r()(r()({width:"100%"},C),Ge)}))}else me==="Custom"&&(Ke=mn);if(pn){var vt=Ke,It=je;return(0,P.jsx)(Z.Z,r()(r()(r()({span:6},v||{}),rn||{}),{},{style:r()(r()(r()({},un),{},{height:"auto",overflow:"auto"},(v||{}).style||{}),(rn||{}).style||{}),children:(0,P.jsx)(W.Z.List,r()(r()({},$e),{},{name:It,children:vt}),ve)}),ve)}G&&Object.keys(G).length&&Ze&&G[Gn(je,ne)]&&(Ke=(0,P.jsx)(Kn,{children:Ke},ve));var et={};return fn?et.shouldUpdate=fn:!fn&&Cn?et.dependencies=Cn:!fn&&!Cn&&typeof Ke=="function"&&(et.dependencies=[je]),Ke=(0,P.jsx)(Z.Z,r()(r()(r()({span:6},v||{}),rn||{}),{},{style:r()(r()(r()({},un),(v||{}).style||{}),(rn||{}).style||{}),children:(0,P.jsx)(W.Z.Item,r()(r()(r()({},et),vn),{},{name:je,label:ie,rules:ke,style:r()(r()({marginBottom:8},L),An),children:Ke}))}),ve),Pn&&je?(0,P.jsx)(k,{name:je,formName:ne,children:Ke},ve):Ke})},Xn=function(n){var o=n.onRest,t=n.setExpand,v=n.expand,m=n.displayPre,L=n.searchBtnItem,g=L===void 0?{}:L,C=n.searchBtnProps,A=C===void 0?{}:C,M=n.searchBtnRestProps,G=M===void 0?{}:M,ne=n.itemStyle,de=ne===void 0?{}:ne,ce=g||{},Ee=ce.style,ye=Ee===void 0?{}:Ee;return(0,P.jsxs)(W.Z.Item,r()(r()({label:" "},g),{},{style:r()(r()({marginBottom:8},de),ye),children:[(0,P.jsx)(Te.ZP,r()(r()({type:"primary",htmlType:"submit"},A),{},{children:"\u67E5\u8BE2"})),(0,P.jsx)(Te.ZP,r()(r()({style:{margin:"0 8px"},onClick:o},G),{},{children:"\u91CD\u7F6E"})),!!m&&(0,P.jsx)("a",{style:{fontSize:12},onClick:function(){return t(!v)},children:v?(0,P.jsx)(y.Fragment,{children:(0,P.jsx)(nn.Z,{})}):(0,P.jsx)(y.Fragment,{children:(0,P.jsx)(Sn.Z,{})})})]}))},kn=e(93967),nt=e.n(kn),tt=["config","isSearch","displayPre","searchBtnItem","searchBtnProps","searchBtnRestProps","onRest","rowProps","colProps","children","className","itemStyle","attrStyle","attrProps","watchList","formHide","initialHide","form","subscribe","layout","isFloat","isSetHeight"],at=function(n,o){var t=n.config,v=t===void 0?[]:t,m=n.isSearch,L=n.displayPre,g=n.searchBtnItem,C=g===void 0?{}:g,A=n.searchBtnProps,M=A===void 0?{}:A,G=n.searchBtnRestProps,ne=G===void 0?{}:G,de=n.onRest,ce=de===void 0?function(){}:de,Ee=n.rowProps,ye=Ee===void 0?{}:Ee,ve=n.colProps,me=ve===void 0?{}:ve,ie=n.children,je=n.className,$e=n.itemStyle,pe=$e===void 0?{}:$e,ke=n.attrStyle,mn=ke===void 0?{}:ke,pn=n.attrProps,Pn=pn===void 0?{}:pn,an=n.watchList,rn=n.formHide,un=n.initialHide,dn=n.form,Rn=n.subscribe,An=n.layout,xn=An===void 0?"horizontal":An,Ze=n.isFloat,fn=n.isSetHeight,Cn=p()(n,tt),vn=y.useRef(),He=(0,y.useState)(!1),On=T()(He,2),Ge=On[0],Ke=On[1],Vn=(0,y.useState)(!1),Dn=T()(Vn,2),Qn=Dn[0],Nn=Dn[1],Wn=function(){var xe={colProps:me,itemStyle:pe,attrStyle:mn,attrProps:Pn,watchList:an,name:n.name,layout:xn,isFloat:Ze,isSetHeight:fn};if(m&&L&&!Ge){if(L>v.length){var Ce=L-v.length,Be=y.Children.toArray(ie);if(Ce>Be.length)return(0,P.jsxs)(y.Fragment,{children:[ln(v,xe),Be]});if(Ce<=Be.length){var Ye=Be.slice(0,Ce);return(0,P.jsxs)(y.Fragment,{children:[ln(v,xe),Ye]})}return ln(v,xe)}var en=v.slice(0,L);return ln(en,xe)}return(0,P.jsxs)(y.Fragment,{children:[ln(v,xe),ie]})},Bn=nt()("carefree-form",je);y.useEffect(function(){var Mn;return clearTimeout(Mn),Mn=setTimeout(function(){Nn(!0)},300),function(){return clearTimeout(Mn)}},[]);var Un=W.Z.useForm(dn),$n=T()(Un,1),Fn=$n[0],wn=Oe(rn),Zn=T()(wn,1),jn=Zn[0];y.useMemo(function(){return jn.setInitialValues(un||{},!0)},[]);var Hn=S(Rn),Jn=T()(Hn,1),Yn=Jn[0];return U({name:n.name,form:Fn,subscribe:Yn,hide:jn}),y.useImperativeHandle(o,function(){return vn.current}),(0,P.jsx)(H.Provider,{value:{isFloat:Ze,isSetHeight:fn,layout:xn},children:(0,P.jsx)(c.Provider,{value:jn,children:(0,P.jsx)($.Provider,{value:{firstMont:Qn,watchList:an||{},form:Fn,itemRefHook:vn.current},children:(0,P.jsx)(W.Z,r()(r()({},Cn),{},{form:Fn,layout:xn,className:Bn,ref:vn,children:(0,P.jsxs)(l.Z,r()(r()({gutter:24},ye),{},{style:r()(r()({},Ze?{display:"block",height:"auto",overflow:"hidden"}:{}),(ye||{}).style||{}),children:[Wn(),m&&(0,P.jsx)(Z.Z,r()(r()({span:6},me),{},{style:r()({float:"left",width:"100%",overflow:"hidden"},(me||{}).style||{}),children:(0,P.jsx)(Xn,{onRest:ce,expand:Ge,setExpand:Ke,displayPre:L,searchBtnItem:C,searchBtnProps:M,searchBtnRestProps:ne,itemStyle:pe})}))]}))}))})})})},rt=y.forwardRef(at),Qe=rt;Qe.useForm=W.Z.useForm,Qe.Item=W.Z.Item,Qe.ColItem=En,Qe.ColWatchItem=yn,Qe.Cols=tn,Qe.List=W.Z.List,Qe.Provider=W.Z.Provider,Qe.ItemWatch=_n,Qe.useFormContext=ae,Qe.useFormWatchList=J,Qe.useChildItemFun=N,Qe.getChildItemFun=x,Qe.useFormItemHide=Oe,Qe.HideItem=k,Qe.useSubscribe=S,Qe.FormSubscribeProvider=z,Qe.useFormSubscribeProvider=X,Qe.useSubscribeReginsterId=U;var ot=Qe,lt=ot},93251:function(Se,I,e){"use strict";e.r(I),e.d(I,{default:function(){return ee}});var F=e(97857),r=e.n(F),b=e(9783),T=e.n(b),O=e(5574),p=e.n(O),P=e(13769),y=e.n(P),W=e(85893),l=e(55241),Z=e(34041),$=e(57381),ae=e(96486),H=e(67294),s=e(3929),h=["value","width","onClick","mode","labelInValue","ValueField"],j=function(u,d,V,S,z){if(["tags","multiple"].includes(V)&&Array.isArray(d)){var X=d.find(function(U){return S&&U?U[z]===u[z]:U===d});if(X)return!0}else return S&&d?d[z]===u[z]:d===u[z];return!1},f=function(u){var d=u.value,V=u.width,S=u.onClick,z=u.mode,X=u.labelInValue,U=u.ValueField,D=y()(u,h),x=H.useCallback(j,[JSON.stringify(d)]),N=function(se){var K=x(se,d,z,X,U);return{onClick:function(){return S(se,!K)},style:K&&{background:"#e6f7ff"}||{}}};return(0,W.jsx)("div",{className:"fuzzy-query-table",children:(0,W.jsx)(s.Z,r()({rowKey:U,onRow:N,size:"small",pagination:!1,style:{width:V},scroll:{y:300},columns:[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}]},D))})},c=["onChange","labelInValue","columns","request","debounceTimeout","tipWidth","fieldNames"],B=[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}],a=function(u){var d=u.onChange,V=u.labelInValue,S=V===void 0?!0:V,z=u.columns,X=z===void 0?B:z,U=u.request,D=u.debounceTimeout,x=D===void 0?800:D,N=u.tipWidth,J=u.fieldNames,se=y()(u,c),K=H.useState(0),_e=p()(K,2),Ve=_e[0],Ne=_e[1],Fe=H.useState(!1),ze=p()(Fe,2),Xe=ze[0],Je=ze[1],Pe=H.useState(!1),Oe=p()(Pe,2),Re=Oe[0],Q=Oe[1],ge=H.useState([]),re=p()(ge,2),q=re[0],_=re[1],be=H.useRef(!0),k=H.useMemo(function(){return u.fieldNames&&u.fieldNames.value||"value"},[u.fieldNames]),Y=H.useMemo(function(){return u.fieldNames&&u.fieldNames.label||"label"},[u.fieldNames]),Ue=H.useRef(null);H.useLayoutEffect(function(){if(Ue.current)if(N)Ne(N);else{var he=Ue.current.offsetWidth;Ne(he-30)}},[]);var te=function(le){var Me=le||{},Ae=Me[k],w=Me[Y];return T()(T()({},k,Ae),Y,w)},oe=function(le,Me){var Ae=te(le);if(S||(Ae=le&&Ae[k]),["tags","multiple"].includes(u.mode))Ae=Array.isArray(u.value)?Me?u.value.concat(Ae):u.value.filter(function(w){return S&&w?w[k]!==Ae[k]:w!==Ae}):Me?[Ae]:[];else{if(Q(!1),!Me){Ae=void 0;return}be.current=!1}d&&d(Ae,le)},fe=H.useRef(0),De=H.useMemo(function(){var he=function(Me){if(!be.current){be.current=!0;return}fe.current+=1;var Ae=fe.current;U&&(Je(!0),U(Me).then(function(w){Ae===fe.current&&(_(w),Je(!1))}).catch(function(){_([]),Je(!1)}))};return(0,ae.debounce)(he,x)},[U,x]),Le=function(){var le=q.map(function(Me){var Ae=Me[k],w=Me[Y];return T()(T()({},k,Ae),Y,w)});return le},Ie=function(){if(Array.isArray(u.value)&&S)return u.value.map(function(w){var we=w[k],Te=w[Y];return{label:Te,value:we}});if(u.value&&!u.mode&&S){var le=u.value,Me=le[k],Ae=le[Y];return{label:Ae,value:Me}}return u.value},ue=function(le,Me){var Ae=le;le&&Array.isArray(le)&&Array.isArray(u.value)&&(Ae=S?u.value.filter(function(w){return!!le.find(function(we){return we.value===w[k]})}):u.value.filter(function(w){return!!le.find(function(we){return we===w})})),d&&d(Ae,Me)};return(0,W.jsx)(l.Z,{trigger:"click",placement:"bottomLeft",open:Re,onOpenChange:function(le){Q(le)},content:(0,W.jsx)(f,{columns:X,dataSource:q,value:u.value,width:Ve,mode:u.mode,labelInValue:S,onClick:oe,loading:Xe,ValueField:k}),children:(0,W.jsx)("div",{ref:Ue,className:"popover-select-warp",style:{width:"100%"},children:(0,W.jsx)(Z.default,r()(r()({allowClear:!0,labelInValue:S,filterOption:!1,style:{width:"100%"},onSearch:De,showSearch:!0,fieldNames:J},se),{},{value:Ie(),notFoundContent:Xe?(0,W.jsx)($.Z,{size:"small"}):null,onChange:ue,options:Le(),dropdownStyle:{display:"none"}}))})})},R=a,ee=R},28209:function(Se,I,e){"use strict";e.r(I),e.d(I,{default:function(){return ge}});var F=e(5574),r=e.n(F),b=e(85893),T=e(67294),O=e(97857),p=e.n(O),P=e(29441),y=e(13769),W=e.n(y),l=e(12444),Z=e.n(l),$=e(72004),ae=e.n($),H=e(9783),s=e.n(H),h=e(72278),j=["search","table"],f=function(){function re(q){var _=this;Z()(this,re),s()(this,"store",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),s()(this,"initialValues",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),s()(this,"components",{}),s()(this,"getStringToArr",function(te){return te.split("_")}),s()(this,"getInitValue",function(te){return(0,h.d9)((0,h.U2)(_.initialValues,_.getStringToArr(te)),!1)}),s()(this,"getValue",function(te){return(0,h.U2)(_.store,_.getStringToArr(te))}),s()(this,"setValue",function(te,oe){return _.store=(0,h.t8)(_.store,_.getStringToArr(te),oe),_.store}),s()(this,"setBatchValue",function(te){return Object.entries(te).forEach(function(oe){var fe=r()(oe,2),De=fe[0],Le=fe[1];_.store=(0,h.t8)(_.store,_.getStringToArr(De),Le)}),_.store}),s()(this,"getStore",function(){return _.store}),s()(this,"registerId",function(te,oe){_.components[te]=oe}),s()(this,"unregister",function(te,oe){delete _.components[te],te==="search"?_.setValue(te,oe||_.initialValues.search||{}):te==="table"?_.setValue(te,oe||_.initialValues.table||{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}):_.setValue(te,oe||_.initialValues[te])}),s()(this,"tableLoading",function(te){_.setValue("loading",te),_.updateComponent(["table"])}),s()(this,"updateComponent",function(te){te.forEach(function(oe){_.components[oe]()})});var be=q||{},k=be.search,Y=be.table,Ue=W()(be,j);k&&this.setValue("search",p()({},k)),Y&&this.setValue("table",p()({},Y)),Object.entries(p()({},Ue)).forEach(function(te){var oe=r()(te,2),fe=oe[0],De=oe[1];_.setValue(fe,De)}),this.initialValues=(0,h.d9)(q||{},!1)}return ae()(re,[{key:"stores",get:function(){return this.store}}]),re}(),c=function(q){var _=q.main,be=q.initialValues,k=T.useRef();return _?k.current=_:k.current=new f(be),[k.current]},B=T.createContext(new f),a=function(){return T.useContext(B)},R=T.createContext({}),ee=function(){return T.useContext(R)},i=e(15009),u=e.n(i),d=e(99289),V=e.n(d),S=e(38018),z=e(11238),X=["requestType","headers","data","module"],U=function(){var re=V()(u()().mark(function q(_,be){var k,Y,Ue,te,oe,fe,De,Le,Ie,ue;return u()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return k=be.requestType,Y=be.headers,Ue=be.data,te=be.module,oe=W()(be,X),fe=p()({},Y||{}),De=Ue,k==="json"?(fe=p()({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},fe),typeof De!="string"&&(De=JSON.stringify(De))):k==="form"?(fe=p()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},fe),De=typeof De=="string"?De:S.stringify(De)):fe=p()({Accept:"application/json"},fe),Le=_,te&&(Ie=/^\//.test(_),Le="/".concat(te).concat(Ie?"":"/").concat(_)),le.prev=6,le.next=9,(0,z.ZP)(Le,p()(p()({requestType:k,headers:p()({},fe),data:De},oe),{},{getResponse:!0}));case 9:return ue=le.sent,console.log("\u6DFB\u52A0getResponse\u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u6570\u636E,\u53EF\u4F7F\u7528window.RequestResponse\u83B7\u53D6\u8FD4\u56DEresponse--->",ue),window.RequestResponse=ue.response,le.abrupt("return",ue.data);case 15:throw le.prev=15,le.t0=le.catch(6),le.t0;case 18:case"end":return le.stop()}},q,null,[[6,15]])}));return function(_,be){return re.apply(this,arguments)}}(),D=U,x=function(q,_){return D(q,p()(p()({},_||{}),{},{method:"POST"}))},N=function(q,_){return D(q,p()(p()({},_||{}),{},{method:"GET"}))},J=function(q,_){return D(q,p()(p()({},_||{}),{},{method:"DELETE"}))},se=function(q,_){return D(q,p()(p()({},_||{}),{},{method:"PUT"}))},K=function(q,_){return D(q,p()(p()({},_||{}),{},{method:"PATCH"}))},_e=function(q,_){return D(q,p()(p()({},_||{}),{},{method:"HEAD"}))},Ve=function(q,_){return D(q,p()(p()({},_||{}),{},{method:"OPTIONS"}))},Ne={POST:x,GET:N,DELETE:J,PUT:se,PATCH:K,HEAD:_e,OPTIONS:Ve},Fe=function(){var re=V()(u()().mark(function q(_){var be,k,Y,Ue,te,oe,fe,De,Le,Ie,ue,he,le,Me,Ae,w;return u()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:if(be=_.Api,k=_.main,Y=_.tableConfig,Ue=_.apiName,te=k.setBatchValue,oe=k.getValue,fe=k.tableLoading,De=Y||{},Le=De.table,Ie=be[Ue||"table"]||{},Ie.url){Te.next=6;break}return Te.abrupt("return");case 6:if(Te.prev=6,fe(!0),te({table_page:(Le||{}).page||1,table_pageSize:(Le||{}).page||20}),ue=!0,Ie.before&&(ue=Ie.before(k)),ue){Te.next=13;break}return Te.abrupt("return",void fe(!1));case 13:return he=p()({page:oe("table_page"),pageSize:oe("table_pageSize")},oe("search")),Ie.requestBefore&&(he=Ie.requestBefore(k)),Te.next=17,Ne[Ie.method||"GET"]("".concat(Ie.url),p()(p()({},Ie.options||{}),{},{module:Ie.module,data:he})).catch(function(nn){fe(!1)});case 17:le=Te.sent,Ie.requestAfter?Ie.requestAfter({response:le,main:k}):le&&le.code===200&&(Me=le.data||{},Ae=Me.rows,w=Me.total,te({table_dataSource:Ae||[],table_total:w||0})),fe(!1),Te.next=25;break;case 22:Te.prev=22,Te.t0=Te.catch(6),fe(!1);case 25:case"end":return Te.stop()}},q,null,[[6,22]])}));return function(_){return re.apply(this,arguments)}}(),ze=e(4393),Xe=function(){var q=ee(),_=q.search,be=q.tableConfig,k=q.searchCardProps,Y=q.searchHead,Ue=ee(),te=Ue.Api,oe=te===void 0?{}:te,fe=a(),De=fe.setValue,Le=fe.registerId,Ie=fe.unregister,ue=fe.getInitValue,he=T.useState(""),le=r()(he,2),Me=le[0],Ae=le[1],w=_||{},we=w.isSearch,Te=w.initialValues,nn=w.form,Sn=w.apiName,We=P.default.useForm(nn),qe=r()(We,1),tn=qe[0],hn=function(){Ae(new Date().getTime().toString())},En=function(cn,Tn){De("search",Tn)};T.useEffect(function(){Te&&De("search",Te||{})},[]),Le("search",hn),T.useEffect(function(){return function(){return Ie("search",Te)}},[]),T.useEffect(function(){Te&&(Object.entries(Te).forEach(function(gn){var cn=r()(gn,2),Tn=cn[0],Ln=cn[1];De("search_".concat(Tn),Ln)}),hn())},[]);var sn=T.useMemo(function(){return"bordered"in(k||{})?k.bordered:!!Y},[!!Y,(k||{}).bordered]);return(0,b.jsx)(ze.Z,p()(p()({title:Y&&Y(fe)},k||{}),{},{style:p()({marginBottom:10},(k||{}).style||{}),bodyStyle:p()({padding:sn?12:0},(k||{}).bodyStyle||{}),bordered:sn,children:(0,b.jsx)(P.default,p()(p()(p()({form:tn,initialValues:Te||ue("search")||{}},we?{onFinish:function(cn){_&&_.onFinish?_.onFinish(cn,fe):Fe({main:fe,tableConfig:be,Api:oe,apiName:Sn})},onRest:function(){_&&_.onRest?_.onRest():(De("search",Te||{}),tn.resetFields())}}:{}),_),{},{onValuesChange:En}))}))},Je=Xe,Pe=e(3929),Oe=function(){var q=ee(),_=q.tableConfig,be=q.columns,k=q.tableCardProps,Y=q.Api,Ue=Y===void 0?{}:Y,te=q.tableHead,oe=a(),fe=oe.getValue,De=oe.setValue,Le=oe.setBatchValue,Ie=oe.updateComponent,ue=oe.registerId,he=oe.unregister,le=T.useState(""),Me=r()(le,2),Ae=Me[0],w=Me[1],we=fe("table"),Te=we.page,nn=we.pageSize,Sn=we.total,We=we.dataSource,qe=we.selectRowKeys,tn=_||{},hn=tn.pagination,En=tn.rowSelection,sn=tn.table,gn=tn.apiName,cn=function(){w(new Date().getTime().toString())},Tn=function(yn,ln){Le({table_page:yn,table_pageSize:ln}),_&&_.pagination&&_.pagination.onChange?_.pagination.onChange(yn,ln,oe):Fe({main:oe,tableConfig:_,Api:Ue,apiName:gn})},Ln=T.useMemo(function(){return!!(_&&"pagination"in _&&hn===!1)},[JSON.stringify(hn)]);ue("table",cn),T.useEffect(function(){return function(){return he("table",sn)}},[]),T.useEffect(function(){sn&&(Object.entries(sn).forEach(function(_n){var yn=r()(_n,2),ln=yn[0],Xn=yn[1];De("table_".concat(ln),Xn)}),cn())},[]);var Gn=T.useMemo(function(){return typeof be=="function"?be(oe):be||[]},[be]),Kn=T.useMemo(function(){return"bordered"in(k||{})?k.bordered:!!te},[!!te,(k||{}).bordered]);return(0,b.jsx)(ze.Z,p()(p()({},k||{}),{},{title:te&&te(oe),bodyStyle:p()({padding:0},(k||{}).bodyStyle||{}),bordered:Kn,children:(0,b.jsx)(Pe.Z,p()(p()(p()({rowKey:"id",size:"small",bordered:!0,loading:fe("loading")},_),En?{rowSelection:p()(p()({},En),{},{selectedRowKeys:qe,onChange:function(yn,ln){Le({"table.selectRowKeys":yn,"table.selectRows":ln}),Ie(["table"])}})}:{}),{},{dataSource:We,columns:Gn,pagination:!Ln&&p()(p()({},hn||{}),{},{pageSize:nn,total:Sn,current:Te,onChange:Tn})}))}))},Re=Oe,Q=function(q){var _=c({main:q.main,initialValues:q.initialValues}),be=r()(_,1),k=be[0];return(0,b.jsx)(B.Provider,{value:k,children:(0,b.jsxs)(R.Provider,{value:q,children:[(0,b.jsx)(Je,{}),(0,b.jsx)(Re,{})]})})};Q.useMain=c;var ge=Q},42478:function(Se,I,e){"use strict";e.r(I),e.d(I,{default:function(){return X}});var F=e(15009),r=e.n(F),b=e(9783),T=e.n(b),O=e(97857),p=e.n(O),P=e(99289),y=e.n(P),W=e(5574),l=e.n(W),Z=e(85893),$=e(67294),ae=e(83622),H=e(90814),s=e(96842),h=e(246),j=e(6171),f=e(3929),c=function(D){var x=D.onPageChange,N=D.onSelectedChange,J=D.selectedKeys,se=D.dataList,K=D.page,_e=D.pageSize,Ve=D.total,Ne=D.loading,Fe=D.rowKey,ze=D.columns;return(0,Z.jsx)(f.Z,{loading:Ne,size:"small",bordered:!0,columns:ze||[],rowKey:Fe||"id",dataSource:se,rowSelection:{selectedRowKeys:J,onChange:N},pagination:{current:K,pageSize:_e,total:Ve,onChange:x}})},B=function(D){var x=D.leftTable,N=D.rightTable,J=D.handleOperation;return(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(c,p()({},x))}),(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:80},children:[(0,Z.jsx)(ae.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"add"),type:"primary",children:(0,Z.jsx)(H.Z,{})}),(0,Z.jsx)(ae.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"allAdd"),type:"primary",children:(0,Z.jsx)(s.Z,{})}),(0,Z.jsx)(ae.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"allDelete"),type:"primary",children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)(ae.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"delete"),type:"primary",children:(0,Z.jsx)(j.Z,{})})]}),(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(c,p()({},N))})]})},a=e(29441),R=function(D){var x=D.leftSearchConfig,N=D.rightSearchConfig,J=D.onSearch,se=D.onValuesChange;return(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(a.default,p()(p()({layout:"vertical",isSearch:!0,colProps:{span:12}},x),{},{onFinish:function(){return J("left")},onRest:function(){var _e;(_e=x.form)===null||_e===void 0||_e.resetFields()},onValuesChange:function(_e,Ve){return se(_e,Ve,"left")}}))}),(0,Z.jsx)("div",{style:{width:80}}),(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(a.default,p()(p()({isSearch:!0,layout:"vertical",colProps:{span:12}},N),{},{onRest:function(){var _e;(_e=N.form)===null||_e===void 0||_e.resetFields()},onFinish:function(){return J("right")},onValuesChange:function(_e,Ve){return se(_e,Ve,"right")}}))})]})},ee=e(11238),i=e(12444),u=e.n(i),d=e(72004),V=e.n(d),S=function(){function U(D,x){var N=this;u()(this,U),T()(this,"store",{left:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]},right:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]}}),T()(this,"forceUpdate",void 0),T()(this,"setValue",function(J,se){N.store=p()(p()({},N.store),{},T()({},se,p()(p()({},N.store[se]),J))),N.forceUpdate&&N.forceUpdate()}),x&&Object.keys(x||{}).length&&Object.entries(x).forEach(function(J){var se=l()(J,2),K=se[0],_e=se[1];N.setValue(_e,K)}),this.forceUpdate=D}return V()(U,[{key:"stores",get:function(){return this.store}}]),U}(),z=function(D,x){var N=D.Api,J=D.leftSearchConfig,se=D.rightSearchConfig,K=D.initValue,_e=D.rowKey,Ve=D.columns,Ne=$.useState({left:!1,right:!1}),Fe=l()(Ne,2),ze=Fe[0],Xe=Fe[1],Je=a.default.useForm(D.leftUseForm),Pe=l()(Je,1),Oe=Pe[0],Re=a.default.useForm(D.rightUseForm),Q=l()(Re,1),ge=Q[0],re=$.useState(""),q=l()(re,2),_=q[0],be=q[1],k=function(){be(new Date().getTime().toString())},Y=$.useMemo(function(){return new S(k,K)},[]),Ue=function(){var Le=y()(r()().mark(function Ie(ue){var he,le,Me,Ae,w,we,Te,nn;return r()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:if(he=N[ue],Xe(function(qe){return p()(p()({},qe),{},T()({},ue,!0))}),We.prev=2,le=he.url,Me=he.options,Ae=he.before,w=he.after,we=Ae(Y.stores.left,ue),we!==!1){We.next=7;break}return We.abrupt("return",void Xe(function(qe){return p()(p()({},qe),{},T()({},ue,!1))}));case 7:return We.next=9,(0,ee.ZP)(le,p()(p()({},Me||{}),{},{data:we})).catch(function(qe){Xe(function(tn){return p()(p()({},tn),{},T()({},ue,!1))})});case 9:Te=We.sent,nn=w(Te,ue),nn!==!1&&Y.setValue(nn,ue),Xe(function(qe){return p()(p()({},qe),{},T()({},ue,!1))}),We.next=18;break;case 15:We.prev=15,We.t0=We.catch(2),Xe(function(qe){return p()(p()({},qe),{},T()({},ue,!1))});case 18:case"end":return We.stop()}},Ie,null,[[2,15]])}));return function(ue){return Le.apply(this,arguments)}}(),te=function(Ie,ue,he){Y.setValue({selectedKeys:Ie,selectedRows:ue},he)},oe=function(Ie,ue,he){Y.setValue({page:Ie,pageSize:ue,selectedKeys:[],selectedRows:[]},he),Ue(he)},fe=function(){var Le=y()(r()().mark(function Ie(ue){var he,le,Me,Ae,w,we,Te,nn;return r()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:if(he=N[ue],le=he.url,Me=he.options,Ae=he.before,w=he.after,we=Ae(Y.stores[ue],ue),we!==!1){We.next=5;break}return We.abrupt("return");case 5:return We.next=7,(0,ee.ZP)(le,p()(p()({},Me||{}),{},{data:we}));case 7:Te=We.sent,nn=w(Te,ue),nn!==!1&&(oe(1,Y.stores.left.pageSize,"left"),oe(1,Y.stores.right.pageSize,"right"));case 10:case"end":return We.stop()}},Ie)}));return function(ue){return Le.apply(this,arguments)}}(),De=function(Ie,ue,he){Y.setValue({search:ue},he)};return $.useImperativeHandle(x,function(){return{handleOperation:fe,onPageChange:oe,onSelectedChange:te,onSearch:Ue,store:Y,forceUpdate:k,leftUseForm:Oe,rightUseForm:ge}}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(R,{onValuesChange:De,leftSearchConfig:p()(p()({},J||{}),{},{initialValues:K&&K.left&&K.left.search||{},form:Oe}),rightSearchConfig:p()(p()({},se||{}),{},{initialValues:K&&K.right&&K.right.search||{},form:ge}),onSearch:Ue}),(0,Z.jsx)(B,{handleOperation:fe,leftTable:{rowKey:_e,columns:Ve,page:Y.stores.left.page,pageSize:Y.stores.left.pageSize,total:Y.stores.left.total,dataList:Y.stores.left.dataList,selectedKeys:Y.stores.left.selectedKeys,loading:ze.left,onSelectedChange:function(Ie,ue){return te(Ie,ue,"left")},onPageChange:function(Ie,ue){return oe(Ie,ue||10,"left")}},rightTable:{rowKey:_e,columns:Ve,page:Y.stores.right.page,pageSize:Y.stores.right.pageSize,total:Y.stores.right.total,dataList:Y.stores.right.dataList,selectedKeys:Y.stores.right.selectedKeys,loading:ze.right,onSelectedChange:function(Ie,ue){return te(Ie,ue,"right")},onPageChange:function(Ie,ue){return oe(Ie,ue||10,"right")}}})]})},X=$.forwardRef(z)},12755:function(Se,I,e){"use strict";e.r(I),e.d(I,{default:function(){return R}});var F=e(9783),r=e.n(F),b=e(97857),T=e.n(b),O=e(5574),p=e.n(O),P=e(85893),y=e(67294),W=e(83622),l=e(90814),Z=e(96842),$=e(246),ae=e(6171),H=function(i){var u=i.handleOperation;return(0,P.jsxs)(y.Fragment,{children:[(0,P.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"add"),type:"primary",children:(0,P.jsx)(l.Z,{})}),(0,P.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"allAdd"),type:"primary",children:(0,P.jsx)(Z.Z,{})}),(0,P.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"allDelete"),type:"primary",children:(0,P.jsx)($.Z,{})}),(0,P.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"delete"),type:"primary",children:(0,P.jsx)(ae.Z,{})})]})},s=e(13769),h=e.n(s),j=e(3929),f=["rowSelection","handleSelected","selectedRowKeys","pagination","handlePagination"],c=function(i){var u=i.rowSelection,d=i.handleSelected,V=i.selectedRowKeys,S=i.pagination,z=i.handlePagination,X=h()(i,f),U={pagination:{pageSize:10}};return Reflect.has(i,"pagination")&&(typeof S!="boolean"?U.pagination=T()(T()({},S),{},{onChange:z}):U.pagination=S),(0,P.jsx)(j.Z,T()(T()(T()({size:"small"},X),U),{},{rowSelection:T()(T()({},u||{}),{},{selectedRowKeys:V,onChange:d})}))},B=function(i,u,d){var V=[],S=[],z=[],X=[],U;if(i==="delete"){V=u.rightList.filter(function(N){return!u.rightSelected.selectedRowKeys.includes(N[d])});var D=u.rightList.filter(function(N){var J=u.rightSelected.selectedRowKeys.includes(N[d]),se=u.leftList.find(function(K){return K[d]===N[d]});return!!(J&&!se)});S=D.concat(u.leftList),z=u.rightSelected.selectedRowKeys,X=u.rightSelected.selectedRows,U="right"}else if(i==="allDelete")V=[],u.rightList.forEach(function(N){var J=u.leftList.find(function(se){return se[d]===N[d]});J||S.push(N)}),S=S.concat(u.leftList),U="right";else if(i==="add"){var x=u.leftList.filter(function(N){var J=u.leftSelected.selectedRowKeys.includes(N[d]),se=u.rightList.find(function(K){return K[d]===N[d]});return!!(J&&!se)});V=x.concat(u.rightList),S=u.leftList.filter(function(N){return!u.leftSelected.selectedRowKeys.includes(N[d])}),z=u.leftSelected.selectedRowKeys,X=u.leftSelected.selectedRows,U="left"}else i==="allAdd"&&(u.leftList.forEach(function(N){var J=u.rightList.find(function(se){return se[d]===N[d]});J||V.push(N)}),S=[],V=V.concat(u.rightList),U="left");return{leftList:S,rightList:V,selectedKeys:z,selectedRows:X,selectedType:U}},a=function(i,u){var d=i.leftSelected,V=i.rightSelected,S=i.columns,z=i.rowKey,X=i.leftConfig,U=i.rightConfig,D=i.pagination,x=i.leftDataSource,N=i.rightDataSource,J=i.isQuote,se=J===void 0?!0:J,K=y.useState({leftSelected:{selectedRowKeys:[],selectedRows:[]},rightSelected:{selectedRowKeys:[],selectedRows:[]},leftPagination:{page:1,pageSize:10},rightPagination:{page:1,pageSize:10},leftList:x||[],rightList:N||[]}),_e=p()(K,2),Ve=_e[0],Ne=_e[1],Fe=Ve;d&&d.selectedRowKeys&&(Fe.leftSelected=d),V&&V.selectedRowKeys&&(Fe.rightSelected=d),x&&!se&&(Fe.leftList=x),N&&!se&&(Fe.rightList=N);var ze=function(Re){var Q={pageSize:10};return Reflect.has(i,"pagination")&&(Q=D),Reflect.has(Re||{},"pagination")&&(Q=typeof Re.pagination=="boolean"||typeof D=="boolean"?Re.pagination:T()(T()({},D||{}),Re.pagination||{})),Q},Xe=function(Re,Q,ge){Reflect.has(i,"handleSelected")&&i.handleSelected(Re,Q,ge),Ne(function(re){return T()(T()({},re),{},r()({},"".concat(ge,"Selected"),{selectedRowKeys:Re,selectedRows:Q}))})},Je=function(Re,Q,ge){Reflect.has(i,"handlePagination")&&i.handlePagination(Re,Q,ge),Ne(function(re){return T()(T()({},re),{},r()({},"".concat(ge,"Pagination"),{page:Re,pageSize:Q}))}),Xe([],[],ge)},Pe=function(Re){var Q=B(Re,Fe,z),ge=Q.leftList,re=Q.rightList,q=Q.selectedKeys,_=Q.selectedRows,be=Q.selectedType;Reflect.has(i,"handleOperation")&&i.handleOperation(ge,re,q,_,Re),Ne(function(k){return T()(T()({},k),{},r()(r()(r()({},"".concat(be,"Selected"),{selectedRowKeys:[],selectedRows:[]}),"rightList",re),"leftList",ge))})};return y.useImperativeHandle(u,function(){return{store:Fe,setStore:Ne,handleSelected:Xe,handlePagination:Je,handleOperation:Pe}}),(0,P.jsxs)("div",{className:"carefree-antd-transfer",children:[(0,P.jsx)(c,T()(T()({},X||{}),{},{pagination:ze(X),dataSource:Fe.leftList,className:"between-table",selectedRowKeys:Ve.leftSelected.selectedRowKeys,handlePagination:function(Re,Q){return Je(Re,Q,"left")},handleSelected:function(Re,Q){return Xe(Re,Q,"left")},columns:S,rowKey:z})),(0,P.jsx)("div",{className:"middle-btn",children:(0,P.jsx)(H,{handleOperation:Pe})}),(0,P.jsx)(c,T()(T()({},U||{}),{},{pagination:ze(U),dataSource:Fe.rightList,className:"between-table",selectedRowKeys:Ve.rightSelected.selectedRowKeys,handlePagination:function(Re,Q){return Je(Re,Q,"right")},handleSelected:function(Re,Q){return Xe(Re,Q,"right")},columns:S,rowKey:z}))]})},R=y.forwardRef(a)},98103:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return a}});var r=e(15009),b=e.n(r),T=e(97857),O=e.n(T),p=e(13769),P=e.n(p),y=e(5574),W=e.n(y),l=e(49677),Z=e.n(l),$=e(99289),ae=e.n($),H=e(67294),s=e(81158),h=e(22383),j=e(90359),f=e(79398),c=e(59340),B=["key","name","fieldKey"],a={"edit-table-base-demo-0":{component:H.memo(H.lazy(ae()(b()().mark(function R(){var ee,i,u,d,V,S,z,X,U,D,x,N,J;return b()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return ee=K.sent,i=ee.PlusOutlined,K.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return u=K.sent,d=u.Button,V=u.Form,S=u.Input,z=u.InputNumber,K.t0=Z(),K.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return K.t1=K.sent,(0,K.t0)(K.t1),K.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return X=K.sent,U=X.EditableTableBase,K.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(D=K.sent,x=D.default,N=[],J=0;J<5;J++)N.push({key:J.toString(),name:"Edrward ".concat(J),age:32});return K.abrupt("return",{default:function(){var Ve=x.useState(N),Ne=W()(Ve,2),Fe=Ne[0],ze=Ne[1],Xe=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Je=W()(Xe,2),Pe=Je[0],Oe=Je[1],Re=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(ge){return x.createElement(S,ge)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(ge){return ge&&(ge||[]).filter(function(re){return re}).map(function(re){return re.first}).join(",")},inputNode:function(ge,re,q){var _=re.add,be=re.remove,k=q.errors;return x.createElement(x.Fragment,null,ge.map(function(Y,Ue){var te=Y.key,oe=Y.name,fe=Y.fieldKey,De=P()(Y,B);return x.createElement(EditTable.Item,O()(O()({key:te},De),{},{name:[oe,"first"],fieldKey:[fe,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(S,{placeholder:"First Name"}))}),x.createElement(V.Item,null,x.createElement(d,{type:"dashed",onClick:function(){return _()},icon:x.createElement(i,null)},"Add field"),x.createElement(V.ErrorList,{errors:k})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(z,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",Fe),x.createElement("div",null,x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{isOptDelete:!Pe.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{optDeleteEditingDisabled:!Pe.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{isAdd:!Pe.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{multiple:!Pe.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{optIsFirst:!Pe.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{isOpt:!Pe.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(U,O()({initValue:{address:2193},onValuesChange:function(ge,re,q,_,be){ze(ge)},rowKey:"key",optIsFirst:!0,dataSource:Fe,columns:Re,onSave:function(ge){return ze(ge)},isAdd:!0},Pe)))}});case 27:case"end":return K.stop()}},R)})))),asset:{type:"BLOCK",id:"edit-table-base-demo-0",refAtomIds:["edit-table-base"],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:j,"antd/dist/reset.css":f,"carefree-antd-edit-table":c,react:F||(F=e.t(H,2))},renderOpts:{compile:function(){var R=ae()(b()().mark(function i(){var u,d=arguments;return b()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,e.e(19).then(e.bind(e,4019));case 2:return S.abrupt("return",(u=S.sent).default.apply(u,d));case 3:case"end":return S.stop()}},i)}));function ee(){return R.apply(this,arguments)}return ee}()}}}},70299:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return a}});var r=e(15009),b=e.n(r),T=e(97857),O=e.n(T),p=e(13769),P=e.n(p),y=e(5574),W=e.n(y),l=e(49677),Z=e.n(l),$=e(99289),ae=e.n($),H=e(67294),s=e(76070),h=e(22383),j=e(90359),f=e(79398),c=e(59340),B=["key","name","fieldKey"],a={"packages-edit-table-src-demo-0":{component:H.memo(H.lazy(ae()(b()().mark(function R(){var ee,i,u,d,V,S,z,X,U,D,x,N,J;return b()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return ee=K.sent,i=ee.PlusOutlined,K.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return u=K.sent,d=u.Button,V=u.Form,S=u.Input,z=u.InputNumber,K.t0=Z(),K.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return K.t1=K.sent,(0,K.t0)(K.t1),K.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return X=K.sent,U=X.default,K.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(D=K.sent,x=D.default,N=[],J=0;J<5;J++)N.push({key:J.toString(),name:"Edrward ".concat(J),age:32});return K.abrupt("return",{default:function(){var Ve=x.useState(N),Ne=W()(Ve,2),Fe=Ne[0],ze=Ne[1],Xe=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Je=W()(Xe,2),Pe=Je[0],Oe=Je[1],Re=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(ge){return x.createElement(S,ge)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(ge){return ge&&(ge||[]).filter(function(re){return re}).map(function(re){return re.first}).join(",")},inputNode:function(ge,re,q){var _=re.add,be=re.remove,k=q.errors;return x.createElement(x.Fragment,null,ge.map(function(Y,Ue){var te=Y.key,oe=Y.name,fe=Y.fieldKey,De=P()(Y,B);return x.createElement(U.Item,O()(O()({key:te},De),{},{name:[oe,"first"],fieldKey:[fe,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(S,{placeholder:"First Name"}))}),x.createElement(V.Item,null,x.createElement(d,{type:"dashed",onClick:function(){return _()},icon:x.createElement(i,null)},"Add field"),x.createElement(V.ErrorList,{errors:k})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(z,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",Fe),x.createElement("div",null,x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{isOptDelete:!Pe.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{optDeleteEditingDisabled:!Pe.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{isAdd:!Pe.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{multiple:!Pe.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{optIsFirst:!Pe.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(d,{onClick:function(){Oe(O()(O()({},Pe),{},{isOpt:!Pe.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(U,O()({initValue:{address:2193},onValuesChange:function(ge,re,q,_,be){ze(ge)},rowKey:"key",optIsFirst:!0,dataSource:Fe,columns:Re,onSave:function(ge){return ze(ge)},isAdd:!0},Pe)))}});case 27:case"end":return K.stop()}},R)})))),asset:{type:"BLOCK",id:"packages-edit-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:j,"antd/dist/reset.css":f,"carefree-antd-edit-table":c,react:F||(F=e.t(H,2))},renderOpts:{compile:function(){var R=ae()(b()().mark(function i(){var u,d=arguments;return b()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,e.e(19).then(e.bind(e,4019));case 2:return S.abrupt("return",(u=S.sent).default.apply(u,d));case 3:case"end":return S.stop()}},i)}));function ee(){return R.apply(this,arguments)}return ee}()}}}},56395:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),T=e(5574),O=e.n(T),p=e(49677),P=e.n(p),y=e(99289),W=e.n(y),l=e(67294),Z=e(44097),$=e(79398),ae=e(29441),H={"packages-form-src-md-hide-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,initialHide:{name1:!0},onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-1":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,initialHide:{name1:!0},onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,X){V==="12"?X.updateValue("name1",!1):X.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-2":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0],d=j.useFormItemHide(),V=O()(d,1),S=V[0];return c.useMemo(function(){return S.setInitialValues({name1:!0},!0)},[]),c.createElement("div",null,c.createElement(j,{formHide:S,form:u,onValuesChange:function(X,U){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",U)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},13305:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return j}});var r=e(97857),b=e.n(r),T=e(15009),O=e.n(T),p=e(5574),P=e.n(p),y=e(49677),W=e.n(y),l=e(99289),Z=e.n(l),$=e(67294),ae=e(29434),H=e(90359),s=e(79398),h=e(29441),j={"packages-form-src-md-start-demo-0":{component:$.memo($.lazy(Z()(O()().mark(function f(){var c,B,a,R,ee,i;return O()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=d.sent,B=c.Button,d.t0=W(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,R=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ee=d.sent,i=ee.default,d.abrupt("return",{default:function(){var S=R.useForm(),z=P()(S,1),X=z[0],U=function(){X.validateFields().then(function(x){console.log(x)})};return i.createElement("div",null,i.createElement(B,{onClick:U},"\u68C0\u67E5form\u8868\u5355\u63D0\u4EA4\u79FB\u9664\u7684\u9879\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u503C"),i.createElement(R,{form:X,name:"tests",initialHide:{name1:!0},watchList:{tests_namea:function(x,N,J,se){var K=se.updateValue;x==="12"?se.updateValue("tests_name1",!0):se.updateValue(["tests","name1"],!1),console.log("\u6253\u5370---\u300B",x,N,se,J)}},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD54",name:"name4",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD55",type:"Custom",render:function(){for(var x=arguments.length,N=new Array(x),J=0;J<x;J++)N[J]=arguments[J];return console.log(N),i.createElement("div",null,"----\u6D4B\u8BD55")}},{label:"\u6D4B\u8BD56",name:"name6",type:"Custom",render:i.createElement("div",null,"----\u6D4B\u8BD56")}]}))}});case 18:case"end":return d.stop()}},f)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:H,"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var f=Z()(O()().mark(function B(){var a,R=arguments;return O()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return f.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-1":{component:$.memo($.lazy(Z()(O()().mark(function f(){var c,B,a,R;return O()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=W(),i.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return i.t1=i.sent,(0,i.t0)(i.t1),i.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return c=i.sent,B=c.default,i.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return a=i.sent,R=a.default,i.abrupt("return",{default:function(){return R.createElement(B,{isSearch:!0,displayPre:1,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51",name:"name1",type:"Input"},{label:"\u6D4B\u8BD52",name:"name2",type:"Input"},{label:"\u6D4B\u8BD53",name:"namea3",type:"Input"},{label:"\u6D4B\u8BD54",name:"name4",type:"Input"},{label:"\u6D4B\u8BD55",name:"name5",type:"Input"}]})}});case 14:case"end":return i.stop()}},f)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var f=Z()(O()().mark(function B(){var a,R=arguments;return O()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return f.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-2":{component:$.memo($.lazy(Z()(O()().mark(function f(){var c,B,a,R,ee,i;return O()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=d.sent,B=c.Input,d.t0=W(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,R=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ee=d.sent,i=ee.default,d.abrupt("return",{default:function(){var S=R.useForm(),z=P()(S,1),X=z[0],U=i.useState({}),D=P()(U,2),x=D[0],N=D[1],J=X.getFieldValue,se=R.useChildItemFun(X),K=se.updateValue;return console.log("state",x),i.createElement(R,{form:X,layout:"vertical",isSearch:!0,onValuesChange:function(Ve,Ne){if("names0"in Ve){var Fe;clearTimeout(Fe),Fe=setTimeout(function(){K("names3",Ve.names0),clearTimeout(Fe)},300)}console.log(Ve),N(b()({},Ne))}},i.createElement(R.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},i.createElement(B,null)),i.createElement(R.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},i.createElement(B,null)),J("names".concat(0))!=="12"&&i.createElement(R.ColItem,{label:"\u6D4B\u8BD54",name:"names4",style:{marginBottom:5}},i.createElement(B,null)))}});case 18:case"end":return d.stop()}},f)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:H,"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var f=Z()(O()().mark(function B(){var a,R=arguments;return O()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return f.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-3":{component:$.memo($.lazy(Z()(O()().mark(function f(){var c,B,a,R,ee,i;return O()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=d.sent,B=c.Input,d.t0=W(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,R=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ee=d.sent,i=ee.default,d.abrupt("return",{default:function(){var S=R.useForm(),z=P()(S,1),X=z[0],U=i.useState({}),D=P()(U,2),x=D[0],N=D[1],J=X.getFieldValue,se=R.useChildItemFun(X),K=se.updateValue;return console.log("\u7EC4\u5408--->",x),i.createElement(R,{form:X,layout:"vertical",isSearch:!0,config:[{label:"\u6D4B\u8BD5config",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51config",name:"name1",type:"Input"}],onValuesChange:function(Ve,Ne){N(b()({},Ne))}},i.createElement(R.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},i.createElement(B,null)),i.createElement(R.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},i.createElement(B,null)))}});case 18:case"end":return d.stop()}},f)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:H,"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var f=Z()(O()().mark(function B(){var a,R=arguments;return O()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return f.apply(this,arguments)}return c}()}}}},12360:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),T=e(5574),O=e.n(T),p=e(49677),P=e.n(p),y=e(99289),W=e.n(y),l=e(67294),Z=e(7131),$=e(79398),ae=e(29441),H={"packages-form-src-md-update-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{name:function(V,S,z,X){var U=z.updateValue,D=z.bathUpdateValue;U("name1",V)},name1:function(V,S,z,X){var U=z.updateValue,D=z.bathUpdateValue;D({name2:V,name3:V})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-update-demo-1":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0],d=j.getChildItemFun(u),V=d.updateValue,S=d.bathUpdateValue;return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(X,U){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",U)},watchList:{name:function(X,U,D,x){V("name1",X)},name1:function(X,U,D,x){S({name2:X,name3:X})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},421:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),T=e(5574),O=e.n(T),p=e(49677),P=e.n(p),y=e(99289),W=e.n(y),l=e(67294),Z=e(9087),$=e(79398),ae=e(29441),H={"packages-form-src-md-watch-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,X){var U=z.updateValue;U("name1",V)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD5",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-1":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,X){var U=z.updateValue;U("name1",V)},name1:function(V,S,z,X){var U=z.updateValue;U("name2",V)},name2:function(V,S,z,X){var U=z.updateValue;U("name3",V)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-2":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=a.sent,c=f.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=O()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,initialHide:{name1:!0},onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,X){V==="12"?X.updateValue("name1",!1):X.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},51773:function(Se,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(30372),b={}},89237:function(Se,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(11010),b={}},50968:function(Se,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(70174),b={}},15611:function(Se,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(56296),b={}},87820:function(Se,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(91046),b={}},40352:function(Se,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(49833),b={}},22617:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return H}});var r=e(15009),b=e.n(r),T=e(5574),O=e.n(T),p=e(49677),P=e.n(p),y=e(99289),W=e.n(y),l=e(67294),Z=e(67590),$=e(79398),ae=e(93251),H={"packages-fuzzy-query-src-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,f,c,B;return b()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.t0=P(),R.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return R.t1=R.sent,(0,R.t0)(R.t1),R.next=7,Promise.resolve().then(e.bind(e,93251));case 7:return h=R.sent,j=h.default,R.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return f=R.sent,c=f.default,B=function(){var i=c.useState([]),u=O()(i,2),d=u[0],V=u[1],S=function(){var z=W()(b()().mark(function X(){return b()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",Array.from({length:20}).map(function(x,N){return{label:"\u540D\u79F0---".concat(N),phone:N}}));case 1:case"end":return D.stop()}},X)}));return function(){return z.apply(this,arguments)}}();return c.createElement("div",null,c.createElement(j,{request:S,mode:"multiple",value:d,onChange:V,placeholder:"\u8BF7\u9009\u62E9",columns:[{dataIndex:"label",title:"\u7528\u6237\u540D"},{dataIndex:"phone",title:"\u7535\u8BDD"}],fieldNames:{value:"phone"}}))},R.abrupt("return",{default:B});case 15:case"end":return R.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-fuzzy-query-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
export default Query;`},antd:{type:"NPM",value:"5.24.6"},"carefree-fuzzy-query":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-fuzzy-query":ae,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var f,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},53335:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return Z}});var r=e(15009),b=e.n(r),T=e(99289),O=e.n(T),p=e(67294),P=e(6857),y=e(90359),W=e(29441),l=e(28209),Z={"packages-pro-table-src-demo-0":{component:p.memo(p.lazy(O()(b()().mark(function $(){var ae,H,s,h,j,f,c,B;return b()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return ae=R.sent,H=ae.Input,R.next=6,Promise.resolve().then(e.bind(e,29441));case 6:return s=R.sent,h=s.default,R.next=10,Promise.resolve().then(e.bind(e,28209));case 10:return j=R.sent,f=j.default,R.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return c=R.sent,B=c.default,R.abrupt("return",{default:function(){return B.createElement(f,{Api:{table:{url:"/api/user/select",method:"POST"}},initialValues:{search:{ces1:123}},columns:[{title:"\u8D26\u53F7",dataIndex:"loginName"},{title:"\u7528\u6237\u540D",dataIndex:"userName"},{title:"\u7528\u6237\u624B\u673A\u53F7",dataIndex:"phone"},{title:"\u5E74\u9F84",dataIndex:"age"}],search:{isSearch:!0,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"ces1",type:"Input"}],children:B.createElement(B.Fragment,null,B.createElement(h.ColItem,{name:"namens",label:"\u6D4B\u8BD5 children"},B.createElement(H,{placeholder:"\u8BF7\u8F93\u5165"})))}})}});case 17:case"end":return R.stop()}},$)})))),asset:{type:"BLOCK",id:"packages-pro-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},"carefree-pro-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:y,"carefree-antd-form":W,"carefree-pro-table":l,react:F||(F=e.t(p,2))},renderOpts:{compile:function(){var $=O()(b()().mark(function H(){var s,h=arguments;return b()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(19).then(e.bind(e,4019));case 2:return f.abrupt("return",(s=f.sent).default.apply(s,h));case 3:case"end":return f.stop()}},H)}));function ae(){return $.apply(this,arguments)}return ae}()}}}},40859:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return W}});var r=e(15009),b=e.n(r),T=e(99289),O=e.n(T),p=e(67294),P=e(90147),y=e(42478),W={"packages-transfer-search-src-demo-0":{component:p.memo(p.lazy(O()(b()().mark(function l(){var Z,$,ae,H;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,42478));case 2:return Z=h.sent,$=Z.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return ae=h.sent,H=ae.default,h.abrupt("return",{default:function(){return H.createElement("div",null,H.createElement($,{rowKey:"id",columns:[{title:"\u6807\u9898",dataIndex:"title"}],initValue:{left:{dataList:[{id:1,title:"\u6807\u9898"}]},right:{dataList:[{id:2,title:"\u6807\u98982"}]}},Api:{left:{url:"",options:{},before:function(){return{}},after:function(){return{}}},right:{url:"",before:function(){return{}},after:function(){return{}}},add:{url:"",before:function(){return{}},after:function(){return{}}},allAdd:{url:"",before:function(){return{}},after:function(){return{}}},allDelete:{url:"",before:function(){return{}},after:function(){return{}}},delete:{url:"",before:function(){return{}},after:function(){return{}}}},leftSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]},rightSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]}}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-search-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import TransferSearch from 'carefree-antd-transfer-search';
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
);`},"carefree-antd-transfer-search":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer-search":y,react:F||(F=e.t(p,2))},renderOpts:{compile:function(){var l=O()(b()().mark(function $(){var ae,H=arguments;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(ae=h.sent).default.apply(ae,H));case 3:case"end":return h.stop()}},$)}));function Z(){return l.apply(this,arguments)}return Z}()}}}},86968:function(Se,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return W}});var r=e(15009),b=e.n(r),T=e(99289),O=e.n(T),p=e(67294),P=e(41699),y=e(12755),W={"packages-transfer-src-demo-0":{component:p.memo(p.lazy(O()(b()().mark(function l(){var Z,$,ae,H;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,12755));case 2:return Z=h.sent,$=Z.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return ae=h.sent,H=ae.default,h.abrupt("return",{default:function(){return H.createElement("div",null,H.createElement($,{leftDataSource:[{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:11},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:22},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:33},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:44},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:444},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4444}],rightDataSource:[{a:"\u6D4B\u8BD55",b:"\u6D4B\u8BD5215",id:5},{a:"\u6D4B\u8BD56",b:"\u6D4B\u8BD52116",id:6},{a:"\u6D4B\u8BD57",b:"\u6D4B\u8BD52127",id:7},{a:"\u6D4B\u8BD58",b:"\u6D4B\u8BD52138",id:8}],rowKey:"id",columns:[{dataIndex:"a",title:"\u6807\u9898",align:"center"},{dataIndex:"b",title:"\u68073",align:"center"}]}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Transfer from 'carefree-antd-transfer';
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
);`},"carefree-antd-transfer":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer":y,react:F||(F=e.t(p,2))},renderOpts:{compile:function(){var l=O()(b()().mark(function $(){var ae,H=arguments;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(ae=h.sent).default.apply(ae,H));case 3:case"end":return h.stop()}},$)}));function Z(){return l.apply(this,arguments)}return Z}()}}}},11160:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(81158);const r=[{value:"\u79FB\u9664",paraId:0},{value:"EditTable",paraId:0},{value:"\u4E2D\u7684",paraId:0},{value:"ref",paraId:0},{value:"\u79FB\u9664",paraId:0},{value:"EditTable",paraId:0},{value:"\u4E2D\u7684",paraId:0},{value:"store",paraId:0},{value:"\uFF0C\u6539\u7528",paraId:0},{value:"editInstance",paraId:0},{value:",\u5E76\u4F7F\u7528",paraId:0},{value:"EditableTableBase.useEditInstance()",paraId:0},{value:"\u8FDB\u884C\u521D\u59CB\u5B9E\u4F8B",paraId:0},{value:"\u79FB\u9664",paraId:0},{value:"EditTable",paraId:0},{value:"\u7684",paraId:0},{value:"ColumnsProps",paraId:0},{value:"\u4E2D",paraId:0},{value:"render",paraId:0},{value:"\u7684\u7B2C\u56DB\u4E2A\u53C2\u6570",paraId:0},{value:"\u6DFB\u52A0",paraId:0},{value:"onBeforeEdit",paraId:0},{value:"\u3001",paraId:0},{value:"onBeforeEditCancel",paraId:0},{value:"\u3001",paraId:0},{value:"onBeforeDelete",paraId:0},{value:"\u4E09\u4E2A\u65B9\u6CD5",paraId:0},{value:"\u5728\u5B50\u96C6\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u4F7F\u7528",paraId:0},{value:"EditableTableBase.useEditInstanceContext()",paraId:0},{value:"\u83B7\u53D6",paraId:0},{value:"EditTableBaseInstance",paraId:0},{value:"\u5B9E\u4F8B\u548C\u72B6\u6001\u6570\u636E",paraId:0},{value:"\u7F16\u8F91\u72B6\u6001\u65F6\u53D6\u6D88\u7F16\u8F91\u8FD8\u539F\u7F16\u8F91\u4E4B\u524D\u7684\u6570\u636E",paraId:0},{value:"\u{1F4E2} \u6CE8\u610F\uFF1A\u5982\u679C\u81EA\u5B9A\u4E49\u7F16\u8F91\u5217\u7684\u65F6\u5019\uFF0C\u8C03\u7528\u7F16\u8F91(\u4F7F\u7528\u5B9E\u4F8B\u4E2D",paraId:1},{value:"onEditRow",paraId:1},{value:"\u65B9\u6CD5\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8FDB\u884C\u5B58\u50A8)\u65F6\u6CA1\u6709\u8FDB\u884C\u5B58\u50A8\u6570\u636E\uFF0C\u5728\u53D6\u6D88\u7F16\u8F91\u65F6\uFF0C\u4E0D\u4F1A\u8FD8\u539F\u7F16\u8F91\u4E4B\u524D\u7684\u6570\u636E)",paraId:1},{value:` npm i carefree-antd-edit-table
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
`,paraId:4,tocIndex:3}]},87253:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(76070);const r=[{value:` npm i carefree-antd-edit-table
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
`,paraId:14,tocIndex:4}]},66782:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(44097);const r=[{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:0},{value:"isHide",paraId:0},{value:` \u5C5E\u6027\uFF0C\u5224\u65AD\u8868\u5355\u9879\u662F\u5426\u53EF\u4EE5\u6709\u9690\u85CF\u64CD\u4F5C
\u901A\u8FC7\u8BBE\u7F6E `,paraId:0},{value:"initialHide",paraId:0},{value:" \u5C5E\u6027 \uFF0C\u8BBE\u7F6E\u521D\u59CB\u8868\u5355\u9879\u9690\u85CF\u6216\u5C55\u793A",paraId:0}]},84651:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(29434);const r=[{value:` npm i carefree-antd-form
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
`,paraId:7,tocIndex:4}]},88412:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(7131);const r=[{value:"updateValue",paraId:0},{value:" \u548C ",paraId:0},{value:"bathUpdateValue",paraId:0},{value:" \u65B9\u6CD5\u66F4\u65B0\u8868\u5355\u503C\uFF0C\u53EF\u4EE5\u89E6\u53D1 ",paraId:0},{value:"onValuesChange",paraId:0},{value:" \u4E8B\u4EF6",paraId:0},{value:"\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"getChildItemFun",paraId:1,tocIndex:1},{value:" \u65B9\u6CD5\u83B7\u53D6",paraId:1,tocIndex:1}]},34434:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(9087);const r=[{value:"form \u52A0 ",paraId:0},{value:"watchList",paraId:0},{value:" \u5C5E\u6027, \u5BF9\u8868\u5355\u9879\u66F4\u65B0\u503C\u8FDB\u884C\u76D1\u542C",paraId:0}]},67157:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(30372);const r=[{value:"useSubscribe",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(sub?: Subscribe) => Subscribe[]",paraId:2,tocIndex:0},{value:`const [subscribe] = useSubscribe();
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
`,paraId:16,tocIndex:0}]},68927:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(11010);const r=[{value:"useHideFormItem",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(form?: HideGetStoreProps) => HideGetStoreProps[]",paraId:2,tocIndex:0},{value:`export default () => {
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
`,paraId:15,tocIndex:0}]},25777:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(70174);const r=[{value:"useWatchList",paraId:0,tocIndex:0},{value:"\u6536\u96C6\u5728\u76D1\u542C\u540E\u9700\u8981\u7684\u4E00\u4E9B\u5904\u7406\u6570\u636E\u7684\u65B9\u6CD5",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(props: {[x: string]: any}) => ChildPropsType[]",paraId:2,tocIndex:0},{value:`export const WatchItem = (props: { [x: string]: any }) => {
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

`,paraId:7,tocIndex:0}]},85426:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(56296);const r=[{value:"\u4E00\u4E2A\u4F20\u9012\u5176\u4ED6\u7EC4\u4EF6\u9700\u8981\u7684\u53C2\u6570\u7684 context",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"React.Context<ContextProps>",paraId:1,tocIndex:0},{value:"\u83B7\u53D6 ",paraId:2,tocIndex:1},{value:"FormContext",paraId:2,tocIndex:1},{value:" \u7684\u503C",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"() => ContextProps",paraId:3,tocIndex:1},{value:"\u4E00\u4E2A\u4F20\u9012 \u8868\u5355\u540D\u79F0\u7684 context",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"React.Context<string|number>",paraId:5,tocIndex:2},{value:"\u83B7\u53D6 ",paraId:6,tocIndex:3},{value:"FormParentNameContext",paraId:6,tocIndex:3},{value:" \u7684\u503C",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"() => string|number",paraId:7,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:4},{value:"Form.useForm()",paraId:8,tocIndex:4},{value:" \u8FD4\u56DE\u503C [from] \u8FDB\u884C\u83B7\u53D6\u5B50\u9879\u4E2D\u66F4\u65B0\u503C\u7684\u65B9\u6CD5",paraId:8,tocIndex:4},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:4},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:9,tocIndex:4},{value:"\u83B7\u53D6 ",paraId:10,tocIndex:5},{value:"from.useForm",paraId:10,tocIndex:5},{value:" \u4E2D\u66F4\u65B0",paraId:10,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:11,tocIndex:5},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:11,tocIndex:5}]},13829:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(91046);const r=[{value:"\u6839\u636E rc-field-from \u5C01\u88C5\u7684\u8868\u5355\u8054\u52A8/\u9690\u85CF/\u76D1\u542C \u7EC4\u4EF6\u6216\u5DE5\u5177",paraId:0},{value:`
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
`,paraId:6}]},34836:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(49833);const r=[{value:"\u5B57\u6BB5\u8F6C\u6362\u6210 ",paraId:0,tocIndex:0},{value:"_",paraId:0,tocIndex:0},{value:" \u62FC\u63A5\u7684\u5B57\u7B26\u4E32",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"(path: NamePath) => number | InternalNamePath",paraId:1,tocIndex:0},{value:"\u628A\u8868\u5355\u9879\u5B57\u6BB5\u548C\u8868\u5355\u540D\u79F0 \u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"_",paraId:2,tocIndex:1},{value:" \u62FC\u63A5\u5728\u4E00\u8D77",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"(namePath: InternalNamePath, formName?: string): string | undefined",paraId:3,tocIndex:1},{value:"\u8F6C\u6362\u6210\u6570\u7EC4",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"function toArray<T>(candidate?: T | T[] | false): T[]",paraId:5,tocIndex:2},{value:"\u83B7\u53D6\u662F\u5426\u662F\u5FC5\u586B",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"function getRequired(required: boolean | undefined, rules: Rule[] | undefined, form: FormInstance) => boolean",paraId:7,tocIndex:3}]},64330:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(67590);const r=[{value:` npm i carefree-fuzzy-query
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
`,paraId:4,tocIndex:1}]},59715:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(6857);const r=[{value:"\u96C6\u6210\u67E5\u8BE2\u8868\u5355\u548C\u8868\u683C\uFF0C\u5B9E\u73B0\u5FEB\u901F\u4F7F\u7528\u8868\u5355\u8868\u683C\u8054\u5408\u4F7F\u7528\u7B80\u5355\u5316\uFF0C\u5FEB\u901F\u5B9E\u73B0\u4EE3\u7801\u529F\u80FD",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"Api",paraId:1,tocIndex:0},{value:"\u63A5\u53E3\u8C03\u7528 \u53EF\u4EE5\u8C03\u7528\u7684\u63A5\u53E3",paraId:1,tocIndex:0},{value:"ApiProps",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u8868\u683C columns",paraId:1,tocIndex:0},{value:"(v?: Store) => TableProps<any>['columns']|TableProps<any>['columns']",paraId:1,tocIndex:0},{value:"main",paraId:1,tocIndex:0},{value:"\u72B6\u6001 \u5B58\u50A8",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"initialValues",paraId:1,tocIndex:0},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:0},{value:"Store['store']",paraId:1,tocIndex:0},{value:"searchHead",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355\u8868\u5934\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"searchCardProps",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355 \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableHead",paraId:1,tocIndex:0},{value:"\u8868\u683C\u5934\u90E8\u64CD\u4F5C\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"tableCardProps",paraId:1,tocIndex:0},{value:"\u8868\u683C \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableConfig",paraId:1,tocIndex:0},{value:"\u8868\u683C\u914D\u7F6E",paraId:1,tocIndex:0},{value:"TableProps<any> & { apiName?: string,table?: { page?: number, pageSize?: number, dataSource?: any[],total?: number,selectRows?: any[], selectRowKeys?: any[],pagination?: PageProps,}",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:2,tocIndex:0},{value:`// \u53C2\u6570
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
`,paraId:3,tocIndex:0}]},51550:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(90147);const r=[{value:` npm i carefree-antd-transfer-search
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
`,paraId:3,tocIndex:1}]},57798:function(Se,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(41699);const r=[{value:` npm i carefree-antd-transfer
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
