(self.webpackChunkcarefree_antd_root=self.webpackChunkcarefree_antd_root||[]).push([[56],{59340:function(Ce,v,e){"use strict";e.r(v),e.d(v,{EditableTableBase:function(){return ze},Store:function(){return Ye},default:function(){return ot}});var j=e(15009),r=e.n(j),_=e(19632),A=e.n(_),M=e(99289),I=e.n(M),y=e(9783),P=e.n(y),Z=e(97857),l=e.n(Z),w=e(5574),W=e.n(w),te=e(13769),ne=e.n(te),d=e(85893),h=e(45360),f=e(3929),u=e(83622),c=e(67294),O=e(7825),a=e(86738),b=e(42075),U=function(n){var o=n.optConfig,t=n.isEditing,p=n.isAddEdit,m=n.save,V=n.isOptDelete,g=n.cancel,C=n.onDelete,R=n.edit,K=n.newAdd,k=n.editingKey,se=n.rowKey,ue=n.multiple,ve=n.optDeleteEditingDisabled;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},o),{},{render:function(Pe,pe,me){var de=t(pe),De=p(pe);return o&&o.render?o.render(Pe,pe,me,{editable:de,isNewAdd:De,save:m,cancel:g,onDelete:C,edit:R,newAdd:K,editingKey:k}):de?(0,d.jsxs)("span",{children:[(0,d.jsx)(O.Z.Link,{onClick:function(){return m(pe[se],pe,me)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,d.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:De?C.bind(void 0,pe[se],pe,me):g.bind(void 0,pe[se]),children:(0,d.jsx)(O.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,d.jsxs)(b.Z,{children:[(0,d.jsx)(O.Z.Link,{disabled:!!k.length&&!ue,onClick:function(){return R(pe)},children:"\u7F16\u8F91"}),V&&(0,d.jsx)(a.Z,{disabled:ve&&!!k.length,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return C(pe[se],pe,me)},children:(0,d.jsx)(O.Z.Link,{disabled:ve&&!!k.length,children:"\u5220\u9664"})})]})}})]},i=U,S=e(72004),s=e.n(S),$=e(12444),D=e.n($),q=s()(function E(){var n=this;D()(this,E),P()(this,"store",{}),P()(this,"remove",function(o){delete n.store[o]}),P()(this,"register",function(o,t){n.store[o]=t}),P()(this,"getStore",function(){return n.store}),P()(this,"getToKeyForm",function(o){return n.store["".concat(o)]})}),X=function(n){var o=c.useRef();return n?o.current=n:o.current=new q,[o.current]},Q=q,F=e(83062),x=e(88692),N=e(88760),J=e(25278),re=e(13457),L=e(63960),Re=e(3303),Be=e(67002),Ve=e(86125),Oe=e(59847),we=e(34041),Ze=e(84567),Xe=e(11330),ge=e(55742),Ie=e(41637),Ee=e(68351),z=e(23799),ye=N.default.RangePicker;function ae(E,n){if(E.length){var o=E.join("_");return n?"".concat(n,"_").concat(o):o}}function Y(E){return E===void 0||E===!1?[]:Array.isArray(E)?E:[E]}var T=function(n){var o=n.attr,t=n.type,p=n.inputNode,m;if(t==="Input"){var V=o;m=(0,d.jsx)(J.Z,l()({},V))}else if(t==="TextArea"){var g=o;m=(0,d.jsx)(J.Z.TextArea,l()({},g))}else if(t==="InputNumber"){var C=o;m=(0,d.jsx)(re.Z,l()({},C))}else if(t==="AutoComplete"){var R=o;m=(0,d.jsx)(L.Z,l()({},R))}else if(t==="Cascader"){var K=o;m=(0,d.jsx)(Re.Z,l()({},K))}else if(t==="DatePicker"){var k=o;m=(0,d.jsx)(N.default,l()({},k))}else if(t==="Rate"){var se=o;m=(0,d.jsx)(Be.Z,l()({},se))}else if(t==="Slider"){var ue=o;m=(0,d.jsx)(Ve.Z,l()({},ue))}else if(t==="TreeSelect"){var ve=o;m=(0,d.jsx)(Oe.Z,l()({},ve))}else if(t==="Select"){var Te=o;m=(0,d.jsx)(we.default,l()({},Te))}else if(t==="Checkbox"){var Pe=o;m=(0,d.jsx)(Ze.Z.Group,l()({},Pe))}else if(t==="Mentions"){var pe=o;m=(0,d.jsx)(Xe.Z,l()({},pe))}else if(t==="Radio"){var me=o;m=(0,d.jsx)(ge.ZP.Group,l()({},me))}else if(t==="Switch"){var de=o;m=(0,d.jsx)(Ie.Z,l()({},de))}else if(t==="TimePicker"){var De=o;m=(0,d.jsx)(Ee.Z,l()({},De))}else if(t==="Upload"){var We=o;m=(0,d.jsx)(z.Z,l()({},We))}else if(t==="RangePicker"){var fe=o;m=(0,d.jsx)(ye,l()({},fe))}else t==="Custom"&&(m=p);return m},_e=["editing","dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","multiple","rowKey","isList","listAttr"],oe=["name","rules","preName","itemValue","children","tipAttr","tip"],ee=function(n){var o=n.editing,t=n.dataIndex,p=n.title,m=n.record,V=n.index,g=n.inputNode,C=n.rules,R=n.children,K=n.itemAttr,k=n.type,se=n.attr,ue=n.tip,ve=n.tipAttr,Te=n.multiple,Pe=n.rowKey,pe=n.isList,me=n.listAttr,de=me===void 0?{}:me,De=ne()(n,_e),We=T({attr:se,type:k,inputNode:g}),fe=function(){return pe&&typeof g=="function"?(0,d.jsx)(x.ZP.List,l()(l()({},de),{},{name:t,children:function(fn,Pn,an){return g(fn.map(function(rn){return l()(l()({},rn),{},{fieldKey:rn.key})}),Pn,an)}})):(0,d.jsx)(Me,l()(l()({},K),{},{name:t,rules:C,preName:m[Pe],itemValue:m,children:We,tipAttr:ve,tip:ue}))};return(0,d.jsx)("td",l()(l()({},De),{},{children:o?fe():R}))},Me=function(n){var o=n.name,t=n.rules,p=n.preName,m=p===void 0?"":p,V=n.itemValue,g=n.children,C=n.tipAttr,R=C===void 0?{}:C,K=n.tip,k=ne()(n,oe);return(0,d.jsx)(x.ZP.Field,l()(l()({},k),{},{name:o,rules:t,children:function(ue,ve,Te){var Pe=Y(o).length&&ve?ve.name:[],pe=ae(Pe,m),me=function(fe){var Je=fe;fe&&fe.target&&(Je=fe.target.value),ue.onChange(Je)},de=typeof g=="function"?g(l()(l()({},ue),{},{id:pe}),ve,Te,{record:V}):c.isValidElement(g)?c.cloneElement(g,l()(l()({},ue),{},{onChange:me,id:pe})):g,De=ve.errors.map(function(We){return We}).join(",");return(0,d.jsx)(F.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},R),{},{title:K?K(De):De,open:!!ve.errors.length,children:de}))}}))},B=ee,H=c.createContext({formsRef:new Q,dataSource:[],rowKey:"id",onValuesChange:function(n,o,t,p){}}),G=function(n){var o=x.ZP.useForm(),t=W()(o,1),p=t[0],m=c.useContext(H),V=m.formsRef,g=m.onValuesChange,C=g===void 0?function(){}:g,R=m.dataSource,K=m.rowKey;c.useEffect(function(){return function(){return V.remove("".concat(n["data-row-key"]))}},[]),V.register("".concat(n["data-row-key"]),p);var k=R.find(function(se){return"".concat(se[K])==="".concat(n["data-row-key"])});return(0,d.jsx)(x.ZP,{onValuesChange:C.bind(void 0,"".concat(n["data-row-key"]),p),form:p,name:"".concat(n["data-row-key"]),component:!1,initialValues:k||{},children:(0,d.jsx)("tr",l()({},n))})},le=G,Se=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","store","optDeleteEditingDisabled"],he=function(n,o){var t=n.columns,p=n.dataSource,m=p===void 0?[]:p,V=n.onBeforeSave,g=n.onSave,C=n.rowKey,R=C===void 0?"id":C,K=n.optIsFirst,k=K===void 0?!1:K,se=n.optConfig,ue=se===void 0?{}:se,ve=n.isOptDelete,Te=ve===void 0?!1:ve,Pe=n.initValue,pe=Pe===void 0?{}:Pe,me=n.onValuesChange,de=n.isAdd,De=n.onErr,We=n.multiple,fe=We===void 0?!1:We,Je=n.onBeforeAdd,mn=n.isOpt,fn=mn===void 0?!0:mn,Pn=n.addBtnProps,an=Pn===void 0?{}:Pn,rn=n.store,un=n.optDeleteEditingDisabled,sn=un===void 0?!1:un,Rn=ne()(n,Se),An=X(rn),bn=W()(An,1),Ue=bn[0],pn=(0,c.useState)([]),xn=W()(pn,2),vn=xn[0],$e=xn[1],On=c.useState([]),He=W()(On,2),je=He[0],Vn=He[1],Dn=function(xe){$e(function(Fe){return Fe.filter(function(Ge){return"".concat(Ge)!=="".concat(xe)})}),Vn(function(Fe){return Fe.filter(function(Ge){return"".concat(Ge)!=="".concat(xe)})})},Qn=c.useMemo(function(){return t.filter(function(be){return be.editable}).map(function(be){return be.dataIndex})},[t]),Nn=function(xe){var Fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Ge=Ue.getStore();Ge["".concat(xe)]&&Ge["".concat(xe)].setFieldsValue(Fe)},Wn=function(xe){var Fe=Ue.getStore();return Fe["".concat(xe)]},Ln=function(xe){return vn.includes("".concat(xe[R]))},Un=function(xe){return je.includes("".concat(xe[R]))},$n=function(){if(!(Je&&!Je())){if(je.length===1&&!fe){h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");return}if(vn.length===1&&!fe){h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");return}var xe=(new Date().getTime()*Math.round(10)).toString(),Fe=l()(l()({},pe||{}),{},P()({},R,xe)),Ge=m.concat([Fe]);$e(function(qe){return qe.concat([xe])}),Vn(function(qe){return qe.concat([xe])}),g&&g(Ge,Fe)}},Mn=function(xe){var Fe=l()({},xe);Nn(xe[R],Fe),$e(function(Ge){return Ge.concat(["".concat(xe[R])])})},wn=function(xe){Dn(xe),Nn(xe,{})},Hn=function(xe,Fe,Ge){var qe=m.filter(function(En){return"".concat(En[R])!=="".concat(xe)});Dn(xe),g&&g(qe,Fe,Fe,Ge)},jn=function(){var be=I()(r()().mark(function xe(Fe,Ge,qe){var En,In,zn,qn;return r()().wrap(function(on){for(;;)switch(on.prev=on.next){case 0:return on.prev=0,on.next=3,Wn(Fe).validateFields();case 3:if(En=on.sent,!(V&&!V(En,Ge,qe))){on.next=6;break}return on.abrupt("return");case 6:In=A()(m),zn=In.findIndex(function(lt){return"".concat(Fe)==="".concat(lt[R])}),zn>-1?(qn=In[zn],In.splice(zn,1,l()(l()({},qn),En))):In.push(En),g&&g(In,En,Ge,qe),Dn(Fe),Wn(Fe).resetFields(Qn),on.next=17;break;case 14:on.prev=14,on.t0=on.catch(0),De&&De(on.t0);case 17:case"end":return on.stop()}},xe,null,[[0,14]])}));return function(Fe,Ge,qe){return be.apply(this,arguments)}}(),Zn=fn&&i({optConfig:ue,isEditing:Ln,isAddEdit:Un,save:jn,isOptDelete:Te,cancel:wn,onDelete:Hn,edit:Mn,newAdd:je,editingKey:vn,rowKey:R,multiple:fe,optDeleteEditingDisabled:sn})||[],Jn=k?Zn.concat(t):t.concat(Zn),Yn=Jn.map(function(be){return be.editable?l()(l()({},be),{},{onCell:function(Fe){return{record:Fe,multiple:fe,rowKey:R,dataIndex:be.dataIndex,title:be.title,editing:Ln(Fe),inputNode:be.inputNode,rules:be.rules||[],itemAttr:be.itemAttr,type:be.type,attr:be.attr,tip:be.tip,tipAttr:be.tipAttr,isList:be.isList,listAttr:be.listAttr}}}):be}),Fn=function(xe,Fe,Ge,qe){if(me){var En=m.map(function(In){return"".concat(xe)==="".concat(In[R])?l()(l()({},In),qe):l()({},In)});me(En,Ge,qe,xe,Fe)}};return c.useImperativeHandle(o,function(){return{save:jn,onDelete:Hn,edit:Mn,cancel:wn,add:$n,isEditing:Ln,editingKey:vn,newAdd:je,isAddEdit:Un,forms:Ue}}),(0,d.jsx)(c.Fragment,{children:(0,d.jsxs)(H.Provider,{value:{formsRef:Ue,onValuesChange:Fn,dataSource:m,rowKey:R},children:[(0,d.jsx)(f.Z,l()(l()({size:"small",bordered:!0},Rn),{},{components:{body:{row:le,cell:B}},rowKey:R,dataSource:m,columns:Yn,rowClassName:"editable-row",pagination:!1})),de&&(0,d.jsx)(u.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},an||{}),{},{style:l()({marginTop:10},(an||{}).style||{}),onClick:$n}))]})})},ce=c.forwardRef(he),Ke=ce;Ke.useStore=X,Ke.Item=Me;var Le=null,Ye=Q,en=e(25098),ie=e.n(en),Qe=e(31996),Ae=e.n(Qe),nn=e(26037),Cn=e.n(nn),Ne=e(58024),ke=e(17625),tn=function(E){Ae()(o,E);var n=Cn()(o);function o(){var t;D()(this,o);for(var p=arguments.length,m=new Array(p),V=0;V<p;V++)m[V]=arguments[V];return t=n.call.apply(n,[this].concat(m)),P()(ie()(t),"dataSource",[]),P()(ie()(t),"initValue",{}),P()(ie()(t),"rowKey",""),P()(ie()(t),"onSave",void 0),P()(ie()(t),"onBeforeAdd",void 0),P()(ie()(t),"multiple",void 0),P()(ie()(t),"onBeforeEdit",void 0),P()(ie()(t),"onBeforeEditCancel",void 0),P()(ie()(t),"onBeforeDelete",void 0),P()(ie()(t),"onErr",void 0),P()(ie()(t),"onBeforeSave",void 0),P()(ie()(t),"fields",void 0),P()(ie()(t),"onValuesChange",void 0),P()(ie()(t),"formInstance",new Map([])),P()(ie()(t),"main_store",function(){var g=l()(l()({},t.defaultInital),{},{editingKeys:t._createRef([]),newAddKeys:t._createRef([])});return t._ctor(g),ie()(t)}),P()(ie()(t),"formateKeyToString",function(g){return"".concat(g)}),P()(ie()(t),"remove",function(g){t.formInstance.delete(t.formateKeyToString(g))}),P()(ie()(t),"register",function(g,C){t.formInstance.set(t.formateKeyToString(g),C)}),P()(ie()(t),"getStore",function(){return t.formInstance}),P()(ie()(t),"getToKeyForm",function(g){return t.formInstance.get(t.formateKeyToString(g))}),P()(ie()(t),"restToKeyFormValue",function(g){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},R=t.getToKeyForm(g);R&&R.setFieldsValue(C)}),P()(ie()(t),"isEditing",function(g){var C=t.store.editingKeys,R=C===void 0?[]:C;if(g)return R.includes("".concat(g[t.rowKey]))}),P()(ie()(t),"isAddEdit",function(g){var C=t.store.newAddKeys,R=C===void 0?[]:C;if(g)return R.includes("".concat(g[t.rowKey]))}),P()(ie()(t),"removeOperateKey",function(g){var C=t.store,R=C.editingKeys,K=R===void 0?[]:R,k=C.newAddKeys,se=k===void 0?[]:k,ue=K.filter(function(Te){return"".concat(Te)!=="".concat(g)}),ve=se.filter(function(Te){return"".concat(Te)!=="".concat(g)});t._setRefStore({editingKeys:ue,newAddKeys:ve})}),P()(ie()(t),"onAddRow",function(){var g=t.store,C=g.editingKeys,R=C===void 0?[]:C,K=g.newAddKeys,k=K===void 0?[]:K;if(!(typeof t.onBeforeAdd=="function"&&!t.onBeforeAdd())){if(k.length===1&&!t.multiple){h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");return}if(R.length===1&&!t.multiple){h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");return}var se=(new Date().getTime()*Math.round(10)).toString(),ue=l()(l()({},t.initValue||{}),{},P()({},t.rowKey,se)),ve=A()(t.dataSource||[]).concat([ue]);t._setRefStore({editingKeys:A()(R).concat([se]),newAddKeys:A()(k).concat([se])}),t.onSave&&t.onSave(ve,ue)}}),P()(ie()(t),"onDeleteRow",function(g,C){var R=!0;if(typeof t.onBeforeDelete=="function"&&(R=t.onBeforeDelete(g,C)),R){var K=t.formateKeyToString(g[t.rowKey]),k=A()(t.dataSource||[]).filter(function(se){return"".concat(se[t.rowKey])!==K});t.removeOperateKey(K),t.onSave&&t.onSave(k,g,g,C)}}),P()(ie()(t),"onEditRow",function(g,C){var R=!0;if(typeof t.onBeforeEdit=="function"&&(R=t.onBeforeEdit(g,C)),R){var K=l()({},g),k=t.store.editingKeys,se=k===void 0?[]:k,ue=t.formateKeyToString(g[t.rowKey]);t._setRefStore({editingKeys:A()(se).concat([ue])}),t.restToKeyFormValue(ue,K)}}),P()(ie()(t),"onEditCancel",function(g,C){var R=!0;if(typeof t.onBeforeEditCancel=="function"&&(R=t.onBeforeEditCancel(g,C)),R){var K=t.formateKeyToString(g[t.rowKey]);t.removeOperateKey(K),t.restToKeyFormValue(K,{})}}),P()(ie()(t),"onSaveRow",function(){var g=I()(r()().mark(function C(R,K){var k,se,ue,ve,Te,Pe,pe;return r()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:if(de.prev=0,k=t.formateKeyToString(R[t.rowKey]),se=t.getToKeyForm(k),!se){de.next=19;break}return de.next=6,se.validateFields();case 6:if(ue=de.sent,ve=!0,typeof t.onBeforeSave=="function"&&(ve=t.onBeforeSave(ue,R,K)),ve){de.next=11;break}return de.abrupt("return");case 11:Te=A()(t.dataSource||[]),Pe=Te.findIndex(function(De){return k==="".concat(De[t.rowKey])}),Pe>-1?(pe=Te[K],Te.splice(Pe,1,l()(l()({},pe),ue))):Te.push(ue),t.onSave&&t.onSave(Te,ue,R,K),t.removeOperateKey(k),se.resetFields(t.fields||[]),de.next=20;break;case 19:h.ZP.warning("\u672A\u83B7\u53D6\u5230\u5F53\u524D form \u5B9E\u4F8B");case 20:de.next=25;break;case 22:de.prev=22,de.t0=de.catch(0),t.onErr&&t.onErr(de.t0);case 25:case"end":return de.stop()}},C,null,[[0,22]])}));return function(C,R){return g.apply(this,arguments)}}()),P()(ie()(t),"onRowValuesChange",function(g,C,R,K){if(typeof t.onValuesChange=="function"){var k=t.formateKeyToString(g),se=A()(t.dataSource||[]).map(function(ue){return k===t.formateKeyToString(ue[t.rowKey])?l()(l()({},ue),K):l()({},ue)});t.onValuesChange(se,R,K,g,C)}}),t}return s()(o)}(Ne.P2),hn=function(n){var o=(0,c.useRef)(null);return o.current||(n?o.current=n:o.current=new tn),o.current},_n=(0,c.createContext)(new tn),dn=function(){var n=(0,c.useContext)(_n),o=(0,ke.R)(n.store),t=function(V){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ref";g==="none"?n._setStore(V):n._setRefStore(V)},p=o.___temps;return[o,t,n,p]},gn=function(n){var o=n.rowData,t=n.optConfig,p=n.index,m=n.multiple,V=n.isOptDelete,g=n.optDeleteEditingDisabled,C=dn(),R=W()(C,3),K=R[0],k=R[2],se=K.editingKeys,ue=K.newAddKeys,ve=(0,c.useMemo)(function(){return k.isEditing(o)},[se,o]),Te=(0,c.useMemo)(function(){return k.isAddEdit(o)},[ue,o]),Pe=(se||[]).length;return t&&t.render?t.render(o,o,p):ve?(0,d.jsxs)("span",{children:[(0,d.jsx)(O.Z.Link,{onClick:function(){return k.onSaveRow(o,p)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,d.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return Te?k.onDeleteRow(o,p):k.onEditCancel(o,p)},children:(0,d.jsx)(O.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,d.jsxs)(b.Z,{children:[(0,d.jsx)(O.Z.Link,{disabled:!!Pe&&!m,onClick:function(){return k.onEditRow(o,p)},children:"\u7F16\u8F91"}),V&&(0,d.jsx)(a.Z,{disabled:g&&!!Pe,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return k.onDeleteRow(o,p)},children:(0,d.jsx)(O.Z.Link,{disabled:g&&!!Pe,children:"\u5220\u9664"})})]})},cn=function(n){var o=n.optConfig;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},o),{},{render:function(p,m,V){return(0,d.jsx)(gn,l()(l()({},n),{},{value:p,index:V,rowData:m}))}})]},Sn=cn,Bn=N.default.RangePicker;function Gn(E,n){if(E.length){var o=E.join("_");return n?"".concat(n,"_").concat(o):o}}function Kn(E){return E===void 0||E===!1?[]:Array.isArray(E)?E:[E]}var Tn=function(n){var o=n.attr,t=n.type,p=n.inputNode,m;if(t==="Input"){var V=o;m=(0,d.jsx)(J.Z,l()({},V))}else if(t==="TextArea"){var g=o;m=(0,d.jsx)(J.Z.TextArea,l()({},g))}else if(t==="InputNumber"){var C=o;m=(0,d.jsx)(re.Z,l()({},C))}else if(t==="AutoComplete"){var R=o;m=(0,d.jsx)(L.Z,l()({},R))}else if(t==="Cascader"){var K=o;m=(0,d.jsx)(Re.Z,l()({},K))}else if(t==="DatePicker"){var k=o;m=(0,d.jsx)(N.default,l()({},k))}else if(t==="Rate"){var se=o;m=(0,d.jsx)(Be.Z,l()({},se))}else if(t==="Slider"){var ue=o;m=(0,d.jsx)(Ve.Z,l()({},ue))}else if(t==="TreeSelect"){var ve=o;m=(0,d.jsx)(Oe.Z,l()({},ve))}else if(t==="Select"){var Te=o;m=(0,d.jsx)(we.default,l()({},Te))}else if(t==="Checkbox"){var Pe=o;m=(0,d.jsx)(Ze.Z.Group,l()({},Pe))}else if(t==="Mentions"){var pe=o;m=(0,d.jsx)(Xe.Z,l()({},pe))}else if(t==="Radio"){var me=o;m=(0,d.jsx)(ge.ZP.Group,l()({},me))}else if(t==="Switch"){var de=o;m=(0,d.jsx)(Ie.Z,l()({},de))}else if(t==="TimePicker"){var De=o;m=(0,d.jsx)(Ee.Z,l()({},De))}else if(t==="Upload"){var We=o;m=(0,d.jsx)(z.Z,l()({},We))}else if(t==="RangePicker"){var fe=o;m=(0,d.jsx)(Bn,l()({},fe))}else t==="Custom"&&(m=p);return m},yn=["dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","isList","listAttr"],ln=["name","rules","preName","itemValue","children","tipAttr","tip"],Xn=c.memo(function(E){var n=E.dataIndex,o=E.title,t=E.record,p=E.index,m=E.inputNode,V=E.rules,g=E.children,C=E.itemAttr,R=E.type,K=E.attr,k=E.tip,se=E.tipAttr,ue=E.isList,ve=E.listAttr,Te=ve===void 0?{}:ve,Pe=ne()(E,yn),pe=dn(),me=W()(pe,3),de=me[0],De=me[2],We=De.rowKey,fe=(0,c.useMemo)(function(){return t?De.isEditing(t):!1},[de.editingKeys,t]),Je=Tn({attr:K,type:R,inputNode:m}),mn=function(){return ue&&typeof m=="function"?(0,d.jsx)(x.ZP.List,l()(l()({},Te),{},{name:n,children:function(an,rn,un){return m(an.map(function(sn){return l()(l()({},sn),{},{fieldKey:sn.key})}),rn,un)}})):(0,d.jsx)(kn,l()(l()({},C),{},{name:n,rules:V,preName:t[We],itemValue:t,children:Je,tipAttr:se,tip:k}))};return(0,d.jsx)("td",l()(l()({},Pe),{},{children:fe?mn():g}))}),kn=function(n){var o=n.name,t=n.rules,p=n.preName,m=p===void 0?"":p,V=n.itemValue,g=n.children,C=n.tipAttr,R=C===void 0?{}:C,K=n.tip,k=ne()(n,ln);return(0,d.jsx)(x.ZP.Field,l()(l()({},k),{},{name:o,rules:t,children:function(ue,ve,Te){var Pe=Kn(o).length&&ve?ve.name:[],pe=Gn(Pe,m),me=function(fe){var Je=fe;fe&&fe.target&&(Je=fe.target.value),ue.onChange(Je)},de=typeof g=="function"?g(l()(l()({},ue),{},{id:pe}),ve,Te,{record:V}):c.isValidElement(g)?c.cloneElement(g,l()(l()({},ue),{},{onChange:me,id:pe})):g,De=ve.errors.map(function(We){return We}).join(",");return(0,d.jsx)(F.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},R),{},{title:K?K(De):De,open:!!ve.errors.length,children:de}))}}))},nt=Xn,tt=c.memo(function(E){var n=x.ZP.useForm(),o=W()(n,1),t=o[0],p=dn(),m=W()(p,3),V=m[2];c.useEffect(function(){return function(){return V.remove("".concat(E["data-row-key"]))}},[]),V.register("".concat(E["data-row-key"]),t);var g=(V.dataSource||[]).find(function(C){return"".concat(C[V.rowKey])==="".concat(E["data-row-key"])});return(0,d.jsx)(x.ZP,{onValuesChange:V.onRowValuesChange.bind(void 0,"".concat(E["data-row-key"]),t),form:t,name:"".concat(E["data-row-key"]),component:!1,initialValues:g||{},children:(0,d.jsx)("tr",l()({},E))})}),at=tt,rt=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","editInstance","optDeleteEditingDisabled","onBeforeEdit","onBeforeEditCancel","onBeforeDelete"],ze=function(n){var o=n.columns,t=n.dataSource,p=t===void 0?[]:t,m=n.onBeforeSave,V=n.onSave,g=n.rowKey,C=g===void 0?"id":g,R=n.optIsFirst,K=R===void 0?!1:R,k=n.optConfig,se=n.isOptDelete,ue=se===void 0?!1:se,ve=n.initValue,Te=ve===void 0?{}:ve,Pe=n.onValuesChange,pe=n.isAdd,me=n.onErr,de=n.multiple,De=de===void 0?!1:de,We=n.onBeforeAdd,fe=n.isOpt,Je=fe===void 0?!0:fe,mn=n.addBtnProps,fn=mn===void 0?{}:mn,Pn=n.editInstance,an=n.optDeleteEditingDisabled,rn=an===void 0?!1:an,un=n.onBeforeEdit,sn=n.onBeforeEditCancel,Rn=n.onBeforeDelete,An=ne()(n,rt),bn=c.useMemo(function(){return o.filter(function($e){return $e.editable}).map(function($e){return $e.dataIndex})},[o]),Ue=hn(Pn);Ue.dataSource=p,Ue.initValue=Te,Ue.rowKey=C,Ue.onSave=V,Ue.onBeforeAdd=We,Ue.multiple=De,Ue.onErr=me,Ue.fields=bn,Ue.onValuesChange=Pe,Ue.onBeforeSave=m,Ue.onBeforeEdit=un,Ue.onBeforeEditCancel=sn,Ue.onBeforeDelete=Rn;var pn=Je&&Sn({optConfig:k,isOptDelete:ue,multiple:De,optDeleteEditingDisabled:rn})||[],xn=K?pn.concat(o):o.concat(pn),vn=xn.map(function($e){return $e.editable?l()(l()({},$e),{},{onCell:function(He){return{record:He,dataIndex:$e.dataIndex,title:$e.title,inputNode:$e.inputNode,rules:$e.rules||[],itemAttr:$e.itemAttr,type:$e.type,attr:$e.attr,tip:$e.tip,tipAttr:$e.tipAttr,isList:$e.isList,listAttr:$e.listAttr}}}):$e});return(0,d.jsx)(c.Fragment,{children:(0,d.jsxs)(_n.Provider,{value:Ue,children:[(0,d.jsx)(f.Z,l()(l()({size:"small",bordered:!0},An),{},{components:{body:{row:at,cell:nt}},rowKey:C,dataSource:p,columns:vn,rowClassName:"editable-row",pagination:!1})),pe&&(0,d.jsx)(u.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},fn||{}),{},{style:l()({marginTop:10},(fn||{}).style||{}),onClick:Ue.onAddRow}))]})})};ze.useEditInstance=hn,ze.useEditInstanceContext=dn,ze.Item=kn;var st=null,ot=EditTable},29441:function(Ce,v,e){"use strict";e.r(v),e.d(v,{default:function(){return ot}});var j=e(97857),r=e.n(j),_=e(5574),A=e.n(_),M=e(13769),I=e.n(M),y=e(85893),P=e(67294),Z=e(22150),l=e(71230),w=e(15746),W=P.createContext({}),te=function(){return P.useContext(W)},ne=P.createContext({isFloat:!1,isSetHeight:!1,layout:"horizontal"}),d=function(){return P.useContext(ne)},h=e(11950),f=e(45520),u=function(){(0,f.default)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},c=P.createContext({getComponents:u,getStoreState:u,setInitialValues:u,updateValue:u,getItemStore:function(){return{init:u,register:u,getStoreState:u,updateValue:u,getValue:u}}}),O=function(){return P.useContext(c)},a=e(12444),b=e.n(a),U=e(72004),i=e.n(U),S=e(9783),s=e.n(S),$=function(){function E(){var n=this;b()(this,E),s()(this,"subForm",{}),s()(this,"subHide",{}),s()(this,"registerId",function(o,t,p){p&&(n.subForm[p]=o,n.subHide[p]=t)}),s()(this,"removeId",function(o){o&&(delete n.subForm[o],delete n.subHide[o])})}return i()(E,[{key:"subForms",get:function(){return this.subForm}},{key:"subHides",get:function(){return this.subHide}}]),E}(),D=function(n){var o=P.useRef();return n?o.current=n:o.current=new $,[o.current]},q=P.createContext(new $),X=function(){return P.useContext(q)},Q=function(n){var o=n.form,t=n.subscribe,p=n.name,m=n.hide;p&&t.registerId(o,m,p),P.useEffect(function(){return function(){return t.removeId(p)}},[])},F=function(n){return Array.isArray(n)?n:typeof n=="string"?n.split("_").filter(function(o){return o}):n},x=function(n){var o={};if(n){var t=n.getInternalHooks;o=t(h.ki)}var p=function(g,C){o.dispatch&&o.dispatch({type:"updateValue",namePath:F(g),value:C})},m=function(g){Object.entries(g).forEach(function(C){var R=A()(C,2),K=R[0],k=R[1];p(K,k)})};return r()(r()({},o),{},{updateValue:p,bathUpdateValue:m})},N=function(n){return x(n)},J=function(n){var o=te(),t=X(),p=O(),m,V=N(o.itemRefHook);if(o){var g=o.watchList;m=g[(n||{}).id]}return P.useEffect(function(){if((o||{}).firstMont){var C=o.itemRefHook.getFieldsValue;typeof m=="function"&&m((n||{}).value,C(!0),r()({},V),p,{forms:t.subForms,hides:t.subHides})}},[JSON.stringify((n||{}).value)]),[V]},re=e(50568),L=e(19632),Re=e.n(L),Be=e(52677),Ve=e.n(Be);function Oe(E){return Ve()(E)=="object"&&E!==null&&Object.getPrototypeOf(E)===Object.prototype}function we(E,n){var o=Array.isArray(E)?Re()(E):r()({},E);return n&&Object.keys(n).forEach(function(t){var p=o[t],m=n[t],V=Oe(p)&&Oe(m);o[t]=V?we(p,m||{}):m}),o}function Ze(E){for(var n=arguments.length,o=new Array(n>1?n-1:0),t=1;t<n;t++)o[t-1]=arguments[t];return o.reduce(function(p,m){return we(p,m)},E)}var Xe=i()(function E(){var n=this;b()(this,E),s()(this,"store",{}),s()(this,"componentLists",[]),s()(this,"init",function(o){var t=o.props||{},p=t.initialValue;if(p!==void 0){var m=o.getNamePath();m&&(n.store=(0,re.sO)(n.store,m,p))}}),s()(this,"register",function(o){n.componentLists.push(o);var t=o.props||{},p=t.initialValue;return p!==void 0&&o.refresh(),function(){n.componentLists=n.componentLists.filter(function(V){return V!==o});var m=o.getNamePath();m&&(n.store=(0,re.sO)(n.store,m,void 0,!0))}}),s()(this,"getStoreState",function(o){return o?(0,re.NA)(n.store,o):n.store}),s()(this,"getComponents",function(){return n.componentLists}),s()(this,"getStore",function(){return{getComponents:n.getComponents,getStoreState:n.getStoreState,getItemStore:n.getItemStore,setInitialValues:n.setInitialValues,updateValue:n.updateValue,bathUpdateValue:n.bathUpdateValue}}),s()(this,"getItemStore",function(){return{init:n.init,register:n.register,getStoreState:n.getStoreState,updateValue:n.updateValue,getValue:n.getValue,bathUpdateValue:n.bathUpdateValue}}),s()(this,"setInitialValues",function(o,t){t&&(n.store=Ze({},o,n.store))}),s()(this,"getPaths",function(o){return Array.isArray(o)?o:typeof o=="string"?o.split("_").filter(function(t){return t}):[]}),s()(this,"bathUpdateValue",function(o){Object.entries(o).forEach(function(t){var p=A()(t,2),m=p[0],V=p[1],g=n.getPaths(m);n.store=(0,re.sO)(n.store,g,V)}),n.bathNotifyObservers(Object.keys(o))}),s()(this,"updateValue",function(o,t){var p=n.getPaths(o);n.store=(0,re.sO)(n.store,p,t),n.notifyObservers(p)}),s()(this,"getValue",function(o){var t=n.getPaths(o);return(0,re.NA)(n.store,t)}),s()(this,"bathNotifyObservers",function(o){n.componentLists.forEach(function(t){var p=t.refresh,m=t.getNamePath,V=m();o.includes(V.join(""))&&p()})}),s()(this,"notifyObservers",function(o){n.componentLists.forEach(function(t){var p=t.refresh,m=t.getNamePath,V=m();V.join("")===o.join("")&&p()})})}),ge=function(n){var o=P.useRef();if(!o.current)if(n)o.current=n;else{var t=new Xe;o.current=t.getStore()}return[o.current]},Ie=ge,Ee=e(25098),z=e.n(Ee),ye=e(31996),ae=e.n(ye),Y=e(26037),T=e.n(Y),_e=function(E){ae()(o,E);var n=T()(o);function o(t){var p;if(b()(this,o),p=n.call(this,t),s()(z()(p),"mounted",!1),s()(z()(p),"cancelRegisterFunc",function(){}),s()(z()(p),"getNamePath",function(){var C=p.props,R=C.name,K=C.formName;return Array.isArray(R)?K&&[K].concat(R)||R:K&&[K,R]||[R]}),s()(z()(p),"refresh",function(){p.mounted&&p.forceUpdate()}),s()(z()(p),"getValue",function(){var C=p.props.hideContent,R=C.getItemStore(),K=R.getValue;return K(p.getNamePath())}),t.hideContent){var m=t.hideContent,V=m.getItemStore(),g=V.init;g(z()(p))}return p}return i()(o,[{key:"componentDidMount",value:function(){var p=this.props.hideContent;if(p){var m=p.getItemStore(),V=m.register;this.cancelRegisterFunc=V(this)}this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.cancelRegisterFunc(),this.mounted=!1}},{key:"render",value:function(){var p=this.props.children;return this.getValue()?(0,y.jsx)(P.Fragment,{}):(0,y.jsx)(P.Fragment,{children:p})}}]),o}(P.Component),oe=function(n){var o=P.useContext(c);return(0,y.jsx)(_e,r()(r()({},n),{},{hideContent:o}))},ee=e(88760),Me=e(25278),B=e(13457),H=e(63960),G=e(3303),le=e(67002),Se=e(86125),he=e(59847),ce=e(34041),Ke=e(84567),Le=e(11330),Ye=e(55742),en=e(41637),ie=e(68351),Qe=e(23799),Ae=e(83622),nn=e(48115),Cn=e(80882),Ne=["children","style"],ke=["children","colProps"],tn=function(n){var o=n.children,t=n.style,p=I()(n,Ne),m=d(),V=m.isFloat,g=m.isSetHeight,C=m.layout,R={};return V&&(R={float:"left",width:"100%",overflow:"hidden"},g&&(R.height=C==="inline"?54:74)),(0,y.jsx)(w.Z,r()(r()({span:6},p),{},{style:r()(r()({},R),t||{}),children:o}))},hn=function(n){var o=n.children,t=n.colProps,p=t===void 0?{}:t,m=I()(n,ke);return(0,y.jsx)(tn,r()(r()({},p||{}),{},{children:(0,y.jsx)(st.Item,r()(r()({},m),{},{children:o}))}))},_n=hn,dn=["children"],gn=["children"],cn=["children"],Sn=["style","watch","shouldUpdate","dependencies"],Bn=ee.default.RangePicker,Gn=function(n,o){return Array.isArray(n)?o&&[o].concat(n).join("_")||n.join("_"):o&&"".concat(o,"_").concat(n)||n},Kn=function(n){var o=n||{},t=o.children,p=I()(o,dn),m=J(n),V=A()(m,1),g=V[0];return typeof t=="function"?t(r()(r()({},p),{},{childProps:g})):P.isValidElement(t)?P.cloneElement(t,r()({},p)):t},Tn=function(n){var o=n.children,t=I()(n,gn);return(0,y.jsx)(Z.Z.Item,r()(r()({},t),{},{children:(0,y.jsx)(Kn,{children:o})}))},yn=function(n){var o=n.children,t=I()(n,cn);return(0,y.jsx)(_n,r()(r()({},t),{},{children:(0,y.jsx)(Kn,{children:o})}))},ln=function(n,o){var t=o.colProps,p=t===void 0?{}:t,m=o.itemStyle,V=m===void 0?{}:m,g=o.attrStyle,C=g===void 0?{}:g,R=o.attrProps,K=R===void 0?{}:R,k=o.watchList,se=o.name,ue=o.layout,ve=o.isFloat,Te=o.isSetHeight;return n.map(function(Pe,pe){var me=Pe.type,de=Pe.label,De=Pe.name,We=Pe.itemAttr,fe=Pe.attr,Je=Pe.rules,mn=Pe.render,fn=Pe.isItemList,Pn=Pe.isHide,an=Pe.colProps,rn=an===void 0?{}:an,un={};ve&&(un={float:"left",width:"100%",overflow:"hidden"},Te&&(un.height=ue==="inline"?54:74));var sn=We||{},Rn=sn.style,An=Rn===void 0?{}:Rn,bn=sn.watch,Ue=bn===void 0?!0:bn,pn=sn.shouldUpdate,xn=sn.dependencies,vn=I()(sn,Sn),$e=fe||{},On=$e.style,He=On===void 0?{}:On,je;if(me==="Input"){var Vn=fe,Dn=K;je=(0,y.jsx)(Me.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(de)},Dn),Vn),{},{style:r()(r()({},C),He)}))}else if(me==="TextArea"){var Qn=fe,Nn=K;je=(0,y.jsx)(Me.Z.TextArea,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(de)},Nn),Qn),{},{style:r()(r()({},C),He)}))}else if(me==="InputNumber"){var Wn=fe,Ln=K;je=(0,y.jsx)(B.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(de)},Ln),Wn),{},{style:r()(r()({width:"100%"},C),He)}))}else if(me==="AutoComplete"){var Un=fe,$n=K;je=(0,y.jsx)(H.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(de)},$n),Un),{},{style:r()(r()({},C),He)}))}else if(me==="Cascader"){var Mn=fe,wn=K;je=(0,y.jsx)(G.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(de)},wn),Mn),{},{style:r()(r()({},C),He)}))}else if(me==="DatePicker"){var Hn=fe,jn=K;je=(0,y.jsx)(ee.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(de)},jn),Hn),{},{style:r()(r()({width:"100%"},C),He)}))}else if(me==="Rate"){var Zn=fe,Jn=K;je=(0,y.jsx)(le.Z,r()(r()(r()({},Jn),Zn),{},{style:r()(r()({},C),He)}))}else if(me==="Slider"){var Yn=fe,Fn=K;je=(0,y.jsx)(Se.Z,r()(r()(r()({},Fn),Yn),{},{style:r()(r()({},C),He)}))}else if(me==="TreeSelect"){var be=fe,xe=K;je=(0,y.jsx)(he.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(de)},xe),be),{},{style:r()(r()({},C),He)}))}else if(me==="Select"){var Fe=fe,Ge=K;je=(0,y.jsx)(ce.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(de)},Ge),Fe),{},{style:r()(r()({},C),He)}))}else if(me==="Checkbox"){var qe=fe,En=K;je=(0,y.jsx)(Ke.Z.Group,r()(r()(r()({},En),qe),{},{style:r()(r()({},C),He)}))}else if(me==="Mentions"){var In=fe,zn=K;je=(0,y.jsx)(Le.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(de)},zn),In),{},{style:r()(r()({},C),He)}))}else if(me==="Radio"){var qn=fe,dt=K;je=(0,y.jsx)(Ye.ZP.Group,r()(r()(r()({},dt),qn),{},{style:r()(r()({},C),He)}))}else if(me==="Switch"){var on=fe,lt=K;je=(0,y.jsx)(en.Z,r()(r()(r()({},lt),on),{},{style:r()(r()({},C),He)}))}else if(me==="TimePicker"){var it=fe,ut=K;je=(0,y.jsx)(ie.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(de)},ut),it),{},{style:r()(r()({width:"100%"},C),He)}))}else if(me==="Upload"){var ct=fe,mt=K;je=(0,y.jsx)(Qe.Z,r()(r()(r()({},mt),ct),{},{style:r()(r()({},C),He)}))}else if(me==="RangePicker"){var ft=fe,pt=K;je=(0,y.jsx)(ee.default.RangePicker,r()(r()(r()({},pt),ft),{},{style:r()(r()({width:"100%"},C),He)}))}else me==="Custom"&&(je=mn);if(fn){var vt=je,It=De;return(0,y.jsx)(w.Z,r()(r()(r()({span:6},p||{}),rn||{}),{},{style:r()(r()(r()({},un),{},{height:"auto",overflow:"auto"},(p||{}).style||{}),(rn||{}).style||{}),children:(0,y.jsx)(Z.Z.List,r()(r()({},We),{},{name:It,children:vt}),pe)}),pe)}k&&Object.keys(k).length&&Ue&&k[Gn(De,se)]&&(je=(0,y.jsx)(Kn,{children:je},pe));var et={};return pn?et.shouldUpdate=pn:!pn&&xn?et.dependencies=xn:!pn&&!xn&&typeof je=="function"&&(et.dependencies=[De]),je=(0,y.jsx)(w.Z,r()(r()(r()({span:6},p||{}),rn||{}),{},{style:r()(r()(r()({},un),(p||{}).style||{}),(rn||{}).style||{}),children:(0,y.jsx)(Z.Z.Item,r()(r()(r()({},et),vn),{},{name:De,label:de,rules:Je,style:r()(r()({marginBottom:8},V),An),children:je}))}),pe),Pn&&De?(0,y.jsx)(oe,{name:De,formName:se,children:je},pe):je})},Xn=function(n){var o=n.onRest,t=n.setExpand,p=n.expand,m=n.displayPre,V=n.searchBtnItem,g=V===void 0?{}:V,C=n.searchBtnProps,R=C===void 0?{}:C,K=n.searchBtnRestProps,k=K===void 0?{}:K,se=n.itemStyle,ue=se===void 0?{}:se,ve=g||{},Te=ve.style,Pe=Te===void 0?{}:Te;return(0,y.jsxs)(Z.Z.Item,r()(r()({label:" "},g),{},{style:r()(r()({marginBottom:8},ue),Pe),children:[(0,y.jsx)(Ae.ZP,r()(r()({type:"primary",htmlType:"submit"},R),{},{children:"\u67E5\u8BE2"})),(0,y.jsx)(Ae.ZP,r()(r()({style:{margin:"0 8px"},onClick:o},k),{},{children:"\u91CD\u7F6E"})),!!m&&(0,y.jsx)("a",{style:{fontSize:12},onClick:function(){return t(!p)},children:p?(0,y.jsx)(P.Fragment,{children:(0,y.jsx)(nn.Z,{})}):(0,y.jsx)(P.Fragment,{children:(0,y.jsx)(Cn.Z,{})})})]}))},kn=e(93967),nt=e.n(kn),tt=["config","isSearch","displayPre","searchBtnItem","searchBtnProps","searchBtnRestProps","onRest","rowProps","colProps","children","className","itemStyle","attrStyle","attrProps","watchList","formHide","initialHide","form","subscribe","layout","isFloat","isSetHeight"],at=function(n,o){var t=n.config,p=t===void 0?[]:t,m=n.isSearch,V=n.displayPre,g=n.searchBtnItem,C=g===void 0?{}:g,R=n.searchBtnProps,K=R===void 0?{}:R,k=n.searchBtnRestProps,se=k===void 0?{}:k,ue=n.onRest,ve=ue===void 0?function(){}:ue,Te=n.rowProps,Pe=Te===void 0?{}:Te,pe=n.colProps,me=pe===void 0?{}:pe,de=n.children,De=n.className,We=n.itemStyle,fe=We===void 0?{}:We,Je=n.attrStyle,mn=Je===void 0?{}:Je,fn=n.attrProps,Pn=fn===void 0?{}:fn,an=n.watchList,rn=n.formHide,un=n.initialHide,sn=n.form,Rn=n.subscribe,An=n.layout,bn=An===void 0?"horizontal":An,Ue=n.isFloat,pn=n.isSetHeight,xn=I()(n,tt),vn=P.useRef(),$e=(0,P.useState)(!1),On=A()($e,2),He=On[0],je=On[1],Vn=(0,P.useState)(!1),Dn=A()(Vn,2),Qn=Dn[0],Nn=Dn[1],Wn=function(){var be={colProps:me,itemStyle:fe,attrStyle:mn,attrProps:Pn,watchList:an,name:n.name,layout:bn,isFloat:Ue,isSetHeight:pn};if(m&&V&&!He){if(V>p.length){var xe=V-p.length,Fe=P.Children.toArray(de);if(xe>Fe.length)return(0,y.jsxs)(P.Fragment,{children:[ln(p,be),Fe]});if(xe<=Fe.length){var Ge=Fe.slice(0,xe);return(0,y.jsxs)(P.Fragment,{children:[ln(p,be),Ge]})}return ln(p,be)}var qe=p.slice(0,V);return ln(qe,be)}return(0,y.jsxs)(P.Fragment,{children:[ln(p,be),de]})},Ln=nt()("carefree-form",De);P.useEffect(function(){var Fn;return clearTimeout(Fn),Fn=setTimeout(function(){Nn(!0)},300),function(){return clearTimeout(Fn)}},[]);var Un=Z.Z.useForm(sn),$n=A()(Un,1),Mn=$n[0],wn=Ie(rn),Hn=A()(wn,1),jn=Hn[0];P.useMemo(function(){return jn.setInitialValues(un||{},!0)},[]);var Zn=D(Rn),Jn=A()(Zn,1),Yn=Jn[0];return Q({name:n.name,form:Mn,subscribe:Yn,hide:jn}),P.useImperativeHandle(o,function(){return vn.current}),(0,y.jsx)(ne.Provider,{value:{isFloat:Ue,isSetHeight:pn,layout:bn},children:(0,y.jsx)(c.Provider,{value:jn,children:(0,y.jsx)(W.Provider,{value:{firstMont:Qn,watchList:an||{},form:Mn,itemRefHook:vn.current},children:(0,y.jsx)(Z.Z,r()(r()({},xn),{},{form:Mn,layout:bn,className:Ln,ref:vn,children:(0,y.jsxs)(l.Z,r()(r()({gutter:24},Pe),{},{style:r()(r()({},Ue?{display:"block",height:"auto",overflow:"hidden"}:{}),(Pe||{}).style||{}),children:[Wn(),m&&(0,y.jsx)(w.Z,r()(r()({span:6},me),{},{style:r()({float:"left",width:"100%",overflow:"hidden"},(me||{}).style||{}),children:(0,y.jsx)(Xn,{onRest:ve,expand:He,setExpand:je,displayPre:V,searchBtnItem:C,searchBtnProps:K,searchBtnRestProps:se,itemStyle:fe})}))]}))}))})})})},rt=P.forwardRef(at),ze=rt;ze.useForm=Z.Z.useForm,ze.Item=Z.Z.Item,ze.ColItem=_n,ze.ColWatchItem=yn,ze.Cols=tn,ze.List=Z.Z.List,ze.Provider=Z.Z.Provider,ze.ItemWatch=Tn,ze.useFormContext=te,ze.useFormWatchList=J,ze.useChildItemFun=N,ze.getChildItemFun=x,ze.useFormItemHide=Ie,ze.HideItem=oe,ze.useSubscribe=D,ze.FormSubscribeProvider=q,ze.useFormSubscribeProvider=X,ze.useSubscribeReginsterId=Q;var st=ze,ot=SimpleForm},93251:function(Ce,v,e){"use strict";e.r(v),e.d(v,{default:function(){return d}});var j=e(97857),r=e(9783),_=e(5574),A=e(13769),M=e(85893),I=e(96486),y=e(67294),P=null,Z=function(f,u,c,O,a){if(["tags","multiple"].includes(c)&&Array.isArray(u)){var b=u.find(function(U){return O&&U?U[a]===f[a]:U===u});if(b)return!0}else return O&&u?u[a]===f[a]:u===f[a];return!1},l=function(f){var u=f.value,c=f.width,O=f.onClick,a=f.mode,b=f.labelInValue,U=f.ValueField,i=_objectWithoutProperties(f,P),S=__WEBPACK_EXTERNAL_MODULE_react__.default.useCallback(Z,[JSON.stringify(u)]),s=function(D){var q=S(D,u,a,b,U);return{onClick:function(){return O(D,!q)},style:q&&{background:"#e6f7ff"}||{}}};return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_225474f2__.jsx)("div",{className:"fuzzy-query-table",children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_225474f2__.jsx)(__WEBPACK_EXTERNAL_MODULE_antd__.Table,_objectSpread({rowKey:U,onRow:s,size:"small",pagination:!1,style:{width:c},scroll:{y:300},columns:[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}]},i))})},w=null,W=[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}],te=function(f){var u=f.onChange,c=f.labelInValue,O=c===void 0?!0:c,a=f.columns,b=a===void 0?W:a,U=f.request,i=f.debounceTimeout,S=i===void 0?800:i,s=f.tipWidth,$=f.fieldNames,D=_objectWithoutProperties(f,w),q=__WEBPACK_EXTERNAL_MODULE_react__.default.useState(0),X=_slicedToArray(q,2),Q=X[0],F=X[1],x=__WEBPACK_EXTERNAL_MODULE_react__.default.useState(!1),N=_slicedToArray(x,2),J=N[0],re=N[1],L=__WEBPACK_EXTERNAL_MODULE_react__.default.useState(!1),Re=_slicedToArray(L,2),Be=Re[0],Ve=Re[1],Oe=__WEBPACK_EXTERNAL_MODULE_react__.default.useState([]),we=_slicedToArray(Oe,2),Ze=we[0],Xe=we[1],ge=__WEBPACK_EXTERNAL_MODULE_react__.default.useRef(!0),Ie=__WEBPACK_EXTERNAL_MODULE_react__.default.useMemo(function(){return f.fieldNames&&f.fieldNames.value||"value"},[f.fieldNames]),Ee=__WEBPACK_EXTERNAL_MODULE_react__.default.useMemo(function(){return f.fieldNames&&f.fieldNames.label||"label"},[f.fieldNames]),z=__WEBPACK_EXTERNAL_MODULE_react__.default.useRef(null);__WEBPACK_EXTERNAL_MODULE_react__.default.useLayoutEffect(function(){if(z.current)if(s)F(s);else{var Me=z.current.offsetWidth;F(Me-30)}},[]);var ye=function(B){var H=B||{},G=H[Ie],le=H[Ee];return _defineProperty(_defineProperty({},Ie,G),Ee,le)},ae=function(B,H){var G=ye(B);if(O||(G=B&&G[Ie]),["tags","multiple"].includes(f.mode))G=Array.isArray(f.value)?H?f.value.concat(G):f.value.filter(function(le){return O&&le?le[Ie]!==G[Ie]:le!==G}):H?[G]:[];else{if(Ve(!1),!H){G=void 0;return}ge.current=!1}u&&u(G,B)},Y=__WEBPACK_EXTERNAL_MODULE_react__.default.useRef(0),T=__WEBPACK_EXTERNAL_MODULE_react__.default.useMemo(function(){var Me=function(H){if(!ge.current){ge.current=!0;return}Y.current+=1;var G=Y.current;U&&(re(!0),U(H).then(function(le){G===Y.current&&(Xe(le),re(!1))}).catch(function(){Xe([]),re(!1)}))};return(0,__WEBPACK_EXTERNAL_MODULE_lodash__.debounce)(Me,S)},[U,S]),_e=function(){var B=Ze.map(function(H){var G=H[Ie],le=H[Ee];return _defineProperty(_defineProperty({},Ie,G),Ee,le)});return B},oe=function(){if(Array.isArray(f.value)&&O)return f.value.map(function(le){var Se=le[Ie],he=le[Ee];return{label:he,value:Se}});if(f.value&&!f.mode&&O){var B=f.value,H=B[Ie],G=B[Ee];return{label:G,value:H}}return f.value},ee=function(B,H){var G=B;B&&Array.isArray(B)&&Array.isArray(f.value)&&(G=O?f.value.filter(function(le){return!!B.find(function(Se){return Se.value===le[Ie]})}):f.value.filter(function(le){return!!B.find(function(Se){return Se===le})})),u&&u(G,H)};return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_225474f2__.jsx)(__WEBPACK_EXTERNAL_MODULE_antd__.Popover,{trigger:"click",placement:"bottomLeft",open:Be,onOpenChange:function(B){Ve(B)},content:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_225474f2__.jsx)(__WEBPACK_EXTERNAL_MODULE__Table_js_0edb6f6c__.default,{columns:b,dataSource:Ze,value:f.value,width:Q,mode:f.mode,labelInValue:O,onClick:ae,loading:J,ValueField:Ie}),children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_225474f2__.jsx)("div",{ref:z,className:"popover-select-warp",style:{width:"100%"},children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_225474f2__.jsx)(__WEBPACK_EXTERNAL_MODULE_antd__.Select,_objectSpread(_objectSpread({allowClear:!0,labelInValue:O,filterOption:!1,style:{width:"100%"},onSearch:T,showSearch:!0,fieldNames:$},D),{},{value:oe(),notFoundContent:J?(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_225474f2__.jsx)(__WEBPACK_EXTERNAL_MODULE_antd__.Spin,{size:"small"}):null,onChange:ee,options:_e(),dropdownStyle:{display:"none"}}))})})},ne=null,d=FuzzyQuery},28209:function(Ce,v,e){"use strict";e.r(v),e.d(v,{default:function(){return ye}});var j=e(5574),r=e.n(j),_=e(85893),A=e(67294),M=e(97857),I=e.n(M),y=e(29441),P=e(13769),Z=e.n(P),l=e(12444),w=e.n(l),W=e(72004),te=e.n(W),ne=e(9783),d=e.n(ne),h=e(72278),f=["search","table"],u=function(){function ae(Y){var T=this;w()(this,ae),d()(this,"store",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),d()(this,"initialValues",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),d()(this,"components",{}),d()(this,"getStringToArr",function(B){return B.split("_")}),d()(this,"getInitValue",function(B){return(0,h.d9)((0,h.U2)(T.initialValues,T.getStringToArr(B)),!1)}),d()(this,"getValue",function(B){return(0,h.U2)(T.store,T.getStringToArr(B))}),d()(this,"setValue",function(B,H){return T.store=(0,h.t8)(T.store,T.getStringToArr(B),H),T.store}),d()(this,"setBatchValue",function(B){return Object.entries(B).forEach(function(H){var G=r()(H,2),le=G[0],Se=G[1];T.store=(0,h.t8)(T.store,T.getStringToArr(le),Se)}),T.store}),d()(this,"getStore",function(){return T.store}),d()(this,"registerId",function(B,H){T.components[B]=H}),d()(this,"unregister",function(B,H){delete T.components[B],B==="search"?T.setValue(B,H||T.initialValues.search||{}):B==="table"?T.setValue(B,H||T.initialValues.table||{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}):T.setValue(B,H||T.initialValues[B])}),d()(this,"tableLoading",function(B){T.setValue("loading",B),T.updateComponent(["table"])}),d()(this,"updateComponent",function(B){B.forEach(function(H){T.components[H]()})});var _e=Y||{},oe=_e.search,ee=_e.table,Me=Z()(_e,f);oe&&this.setValue("search",I()({},oe)),ee&&this.setValue("table",I()({},ee)),Object.entries(I()({},Me)).forEach(function(B){var H=r()(B,2),G=H[0],le=H[1];T.setValue(G,le)}),this.initialValues=(0,h.d9)(Y||{},!1)}return te()(ae,[{key:"stores",get:function(){return this.store}}]),ae}(),c=function(Y){var T=Y.main,_e=Y.initialValues,oe=A.useRef();return T?oe.current=T:oe.current=new u(_e),[oe.current]},O=A.createContext(new u),a=function(){return A.useContext(O)},b=A.createContext({}),U=function(){return A.useContext(b)},i=e(15009),S=e.n(i),s=e(99289),$=e.n(s),D=e(38018),q=e(11238),X=["requestType","headers","data","module"],Q=function(){var ae=$()(S()().mark(function Y(T,_e){var oe,ee,Me,B,H,G,le,Se,he,ce;return S()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return oe=_e.requestType,ee=_e.headers,Me=_e.data,B=_e.module,H=Z()(_e,X),G=I()({},ee||{}),le=Me,oe==="json"?(G=I()({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},G),typeof le!="string"&&(le=JSON.stringify(le))):oe==="form"?(G=I()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},G),le=typeof le=="string"?le:D.stringify(le)):G=I()({Accept:"application/json"},G),Se=T,B&&(he=/^\//.test(T),Se="/".concat(B).concat(he?"":"/").concat(T)),Le.prev=6,Le.next=9,(0,q.ZP)(Se,I()(I()({requestType:oe,headers:I()({},G),data:le},H),{},{getResponse:!0}));case 9:return ce=Le.sent,console.log("\u6DFB\u52A0getResponse\u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u6570\u636E,\u53EF\u4F7F\u7528window.RequestResponse\u83B7\u53D6\u8FD4\u56DEresponse--->",ce),window.RequestResponse=ce.response,Le.abrupt("return",ce.data);case 15:throw Le.prev=15,Le.t0=Le.catch(6),Le.t0;case 18:case"end":return Le.stop()}},Y,null,[[6,15]])}));return function(T,_e){return ae.apply(this,arguments)}}(),F=Q,x=function(Y,T){return F(Y,I()(I()({},T||{}),{},{method:"POST"}))},N=function(Y,T){return F(Y,I()(I()({},T||{}),{},{method:"GET"}))},J=function(Y,T){return F(Y,I()(I()({},T||{}),{},{method:"DELETE"}))},re=function(Y,T){return F(Y,I()(I()({},T||{}),{},{method:"PUT"}))},L=function(Y,T){return F(Y,I()(I()({},T||{}),{},{method:"PATCH"}))},Re=function(Y,T){return F(Y,I()(I()({},T||{}),{},{method:"HEAD"}))},Be=function(Y,T){return F(Y,I()(I()({},T||{}),{},{method:"OPTIONS"}))},Ve={POST:x,GET:N,DELETE:J,PUT:re,PATCH:L,HEAD:Re,OPTIONS:Be},Oe=function(){var ae=$()(S()().mark(function Y(T){var _e,oe,ee,Me,B,H,G,le,Se,he,ce,Ke,Le,Ye,en,ie;return S()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:if(_e=T.Api,oe=T.main,ee=T.tableConfig,Me=T.apiName,B=oe.setBatchValue,H=oe.getValue,G=oe.tableLoading,le=ee||{},Se=le.table,he=_e[Me||"table"]||{},he.url){Ae.next=6;break}return Ae.abrupt("return");case 6:if(Ae.prev=6,G(!0),B({table_page:(Se||{}).page||1,table_pageSize:(Se||{}).page||20}),ce=!0,he.before&&(ce=he.before(oe)),ce){Ae.next=14;break}return G(!1),Ae.abrupt("return");case 14:return Ke=I()({page:H("table_page"),pageSize:H("table_pageSize")},H("search")),he.requestBefore&&(Ke=he.requestBefore(oe)),Ae.next=18,Ve[he.method||"GET"]("".concat(he.url),I()(I()({},he.options||{}),{},{module:he.module,data:Ke})).catch(function(nn){G(!1)});case 18:Le=Ae.sent,he.requestAfter?he.requestAfter({response:Le,main:oe}):Le&&Le.code===200&&(Ye=Le.data||{},en=Ye.rows,ie=Ye.total,B({table_dataSource:en||[],table_total:ie||0})),G(!1),Ae.next=26;break;case 23:Ae.prev=23,Ae.t0=Ae.catch(6),G(!1);case 26:case"end":return Ae.stop()}},Y,null,[[6,23]])}));return function(T){return ae.apply(this,arguments)}}(),we=e(4393),Ze=function(){var Y=U(),T=Y.search,_e=Y.tableConfig,oe=Y.searchCardProps,ee=Y.searchHead,Me=U(),B=Me.Api,H=B===void 0?{}:B,G=a(),le=G.setValue,Se=G.registerId,he=G.unregister,ce=G.getInitValue,Ke=A.useState(""),Le=r()(Ke,2),Ye=Le[0],en=Le[1],ie=T||{},Qe=ie.isSearch,Ae=ie.initialValues,nn=ie.form,Cn=ie.apiName,Ne=y.default.useForm(nn),ke=r()(Ne,1),tn=ke[0],hn=function(){en(new Date().getTime().toString())},_n=function(cn,Sn){le("search",Sn)};A.useEffect(function(){Ae&&le("search",Ae||{})},[]),Se("search",hn),A.useEffect(function(){return function(){return he("search",Ae)}},[]),A.useEffect(function(){Ae&&(Object.entries(Ae).forEach(function(gn){var cn=r()(gn,2),Sn=cn[0],Bn=cn[1];le("search_".concat(Sn),Bn)}),hn())},[]);var dn=A.useMemo(function(){return"bordered"in(oe||{})?oe.bordered:!!ee},[!!ee,(oe||{}).bordered]);return(0,_.jsx)(we.Z,I()(I()({title:ee&&ee(G)},oe||{}),{},{style:I()({marginBottom:10},(oe||{}).style||{}),bodyStyle:I()({padding:dn?12:0},(oe||{}).bodyStyle||{}),bordered:dn,children:(0,_.jsx)(y.default,I()(I()(I()({form:tn,initialValues:Ae||ce("search")||{}},Qe?{onFinish:function(cn){T&&T.onFinish?T.onFinish(cn,G):Oe({main:G,tableConfig:_e,Api:H,apiName:Cn})},onRest:function(){T&&T.onRest?T.onRest():(le("search",Ae||{}),tn.resetFields())}}:{}),T),{},{onValuesChange:_n}))}))},Xe=Ze,ge=e(3929),Ie=function(){var Y=U(),T=Y.tableConfig,_e=Y.columns,oe=Y.tableCardProps,ee=Y.Api,Me=ee===void 0?{}:ee,B=Y.tableHead,H=a(),G=H.getValue,le=H.setValue,Se=H.setBatchValue,he=H.updateComponent,ce=H.registerId,Ke=H.unregister,Le=A.useState(""),Ye=r()(Le,2),en=Ye[0],ie=Ye[1],Qe=G("table"),Ae=Qe.page,nn=Qe.pageSize,Cn=Qe.total,Ne=Qe.dataSource,ke=Qe.selectRowKeys,tn=T||{},hn=tn.pagination,_n=tn.rowSelection,dn=tn.table,gn=tn.apiName,cn=function(){ie(new Date().getTime().toString())},Sn=function(yn,ln){Se({table_page:yn,table_pageSize:ln}),T&&T.pagination&&T.pagination.onChange?T.pagination.onChange(yn,ln,H):Oe({main:H,tableConfig:T,Api:Me,apiName:gn})},Bn=A.useMemo(function(){return!!(T&&"pagination"in T&&hn===!1)},[JSON.stringify(hn)]);ce("table",cn),A.useEffect(function(){return function(){return Ke("table",dn)}},[]),A.useEffect(function(){dn&&(Object.entries(dn).forEach(function(Tn){var yn=r()(Tn,2),ln=yn[0],Xn=yn[1];le("table_".concat(ln),Xn)}),cn())},[]);var Gn=A.useMemo(function(){return typeof _e=="function"?_e(H):_e||[]},[_e]),Kn=A.useMemo(function(){return"bordered"in(oe||{})?oe.bordered:!!B},[!!B,(oe||{}).bordered]);return(0,_.jsx)(we.Z,I()(I()({},oe||{}),{},{title:B&&B(H),bodyStyle:I()({padding:0},(oe||{}).bodyStyle||{}),bordered:Kn,children:(0,_.jsx)(ge.Z,I()(I()(I()({rowKey:"id",size:"small",bordered:!0,loading:G("loading")},T),_n?{rowSelection:I()(I()({},_n),{},{selectedRowKeys:ke,onChange:function(yn,ln){Se({"table.selectRowKeys":yn,"table.selectRows":ln}),he(["table"])}})}:{}),{},{dataSource:Ne,columns:Gn,pagination:!Bn&&I()(I()({},hn||{}),{},{pageSize:nn,total:Cn,current:Ae,onChange:Sn})}))}))},Ee=Ie,z=function(Y){var T=c({main:Y.main,initialValues:Y.initialValues}),_e=r()(T,1),oe=_e[0];return(0,_.jsx)(O.Provider,{value:oe,children:(0,_.jsxs)(b.Provider,{value:Y,children:[(0,_.jsx)(Xe,{}),(0,_.jsx)(Ee,{})]})})};z.useMain=c;var ye=z},42478:function(Ce,v,e){"use strict";e.r(v),e.d(v,{default:function(){return X}});var j=e(15009),r=e.n(j),_=e(9783),A=e.n(_),M=e(97857),I=e.n(M),y=e(99289),P=e.n(y),Z=e(5574),l=e.n(Z),w=e(85893),W=e(67294),te=e(83622),ne=e(90814),d=e(96842),h=e(246),f=e(6171),u=e(3929),c=function(F){var x=F.onPageChange,N=F.onSelectedChange,J=F.selectedKeys,re=F.dataList,L=F.page,Re=F.pageSize,Be=F.total,Ve=F.loading,Oe=F.rowKey,we=F.columns;return(0,w.jsx)(u.Z,{loading:Ve,size:"small",bordered:!0,columns:we||[],rowKey:Oe||"id",dataSource:re,rowSelection:{selectedRowKeys:J,onChange:N},pagination:{current:L,pageSize:Re,total:Be,onChange:x}})},O=function(F){var x=F.leftTable,N=F.rightTable,J=F.handleOperation;return(0,w.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,w.jsx)("div",{style:{flex:1},children:(0,w.jsx)(c,I()({},x))}),(0,w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:80},children:[(0,w.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"add"),type:"primary",children:(0,w.jsx)(ne.Z,{})}),(0,w.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"allAdd"),type:"primary",children:(0,w.jsx)(d.Z,{})}),(0,w.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"allDelete"),type:"primary",children:(0,w.jsx)(h.Z,{})}),(0,w.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:J.bind(void 0,"delete"),type:"primary",children:(0,w.jsx)(f.Z,{})})]}),(0,w.jsx)("div",{style:{flex:1},children:(0,w.jsx)(c,I()({},N))})]})},a=e(29441),b=function(F){var x=F.leftSearchConfig,N=F.rightSearchConfig,J=F.onSearch,re=F.onValuesChange;return(0,w.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,w.jsx)("div",{style:{flex:1},children:(0,w.jsx)(a.default,I()(I()({layout:"vertical",isSearch:!0,colProps:{span:12}},x),{},{onFinish:function(){return J("left")},onRest:function(){var Re;(Re=x.form)===null||Re===void 0||Re.resetFields()},onValuesChange:function(Re,Be){return re(Re,Be,"left")}}))}),(0,w.jsx)("div",{style:{width:80}}),(0,w.jsx)("div",{style:{flex:1},children:(0,w.jsx)(a.default,I()(I()({isSearch:!0,layout:"vertical",colProps:{span:12}},N),{},{onRest:function(){var Re;(Re=N.form)===null||Re===void 0||Re.resetFields()},onFinish:function(){return J("right")},onValuesChange:function(Re,Be){return re(Re,Be,"right")}}))})]})},U=e(11238),i=e(12444),S=e.n(i),s=e(72004),$=e.n(s),D=function(){function Q(F,x){var N=this;S()(this,Q),A()(this,"store",{left:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]},right:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]}}),A()(this,"forceUpdate",void 0),A()(this,"setValue",function(J,re){N.store=I()(I()({},N.store),{},A()({},re,I()(I()({},N.store[re]),J))),N.forceUpdate&&N.forceUpdate()}),x&&Object.keys(x||{}).length&&Object.entries(x).forEach(function(J){var re=l()(J,2),L=re[0],Re=re[1];N.setValue(Re,L)}),this.forceUpdate=F}return $()(Q,[{key:"stores",get:function(){return this.store}}]),Q}(),q=function(F,x){var N=F.Api,J=F.leftSearchConfig,re=F.rightSearchConfig,L=F.initValue,Re=F.rowKey,Be=F.columns,Ve=W.useState({left:!1,right:!1}),Oe=l()(Ve,2),we=Oe[0],Ze=Oe[1],Xe=a.default.useForm(F.leftUseForm),ge=l()(Xe,1),Ie=ge[0],Ee=a.default.useForm(F.rightUseForm),z=l()(Ee,1),ye=z[0],ae=W.useState(""),Y=l()(ae,2),T=Y[0],_e=Y[1],oe=function(){_e(new Date().getTime().toString())},ee=W.useMemo(function(){return new D(oe,L)},[]),Me=function(){var Se=P()(r()().mark(function he(ce){var Ke,Le,Ye,en,ie,Qe,Ae,nn;return r()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:if(Ke=N[ce],Ze(function(ke){return I()(I()({},ke),{},A()({},ce,!0))}),Ne.prev=2,Le=Ke.url,Ye=Ke.options,en=Ke.before,ie=Ke.after,Qe=en(ee.stores.left,ce),Qe!==!1){Ne.next=8;break}return Ze(function(ke){return I()(I()({},ke),{},A()({},ce,!1))}),Ne.abrupt("return");case 8:return Ne.next=10,(0,U.ZP)(Le,I()(I()({},Ye||{}),{},{data:Qe})).catch(function(ke){Ze(function(tn){return I()(I()({},tn),{},A()({},ce,!1))})});case 10:Ae=Ne.sent,nn=ie(Ae,ce),nn!==!1&&ee.setValue(nn,ce),Ze(function(ke){return I()(I()({},ke),{},A()({},ce,!1))}),Ne.next=19;break;case 16:Ne.prev=16,Ne.t0=Ne.catch(2),Ze(function(ke){return I()(I()({},ke),{},A()({},ce,!1))});case 19:case"end":return Ne.stop()}},he,null,[[2,16]])}));return function(ce){return Se.apply(this,arguments)}}(),B=function(he,ce,Ke){ee.setValue({selectedKeys:he,selectedRows:ce},Ke)},H=function(he,ce,Ke){ee.setValue({page:he,pageSize:ce,selectedKeys:[],selectedRows:[]},Ke),Me(Ke)},G=function(){var Se=P()(r()().mark(function he(ce){var Ke,Le,Ye,en,ie,Qe,Ae,nn;return r()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:if(Ke=N[ce],Le=Ke.url,Ye=Ke.options,en=Ke.before,ie=Ke.after,Qe=en(ee.stores[ce],ce),Qe!==!1){Ne.next=5;break}return Ne.abrupt("return");case 5:return Ne.next=7,(0,U.ZP)(Le,I()(I()({},Ye||{}),{},{data:Qe}));case 7:Ae=Ne.sent,nn=ie(Ae,ce),nn!==!1&&(H(1,ee.stores.left.pageSize,"left"),H(1,ee.stores.right.pageSize,"right"));case 10:case"end":return Ne.stop()}},he)}));return function(ce){return Se.apply(this,arguments)}}(),le=function(he,ce,Ke){ee.setValue({search:ce},Ke)};return W.useImperativeHandle(x,function(){return{handleOperation:G,onPageChange:H,onSelectedChange:B,onSearch:Me,store:ee,forceUpdate:oe,leftUseForm:Ie,rightUseForm:ye}}),(0,w.jsxs)("div",{children:[(0,w.jsx)(b,{onValuesChange:le,leftSearchConfig:I()(I()({},J||{}),{},{initialValues:L&&L.left&&L.left.search||{},form:Ie}),rightSearchConfig:I()(I()({},re||{}),{},{initialValues:L&&L.right&&L.right.search||{},form:ye}),onSearch:Me}),(0,w.jsx)(O,{handleOperation:G,leftTable:{rowKey:Re,columns:Be,page:ee.stores.left.page,pageSize:ee.stores.left.pageSize,total:ee.stores.left.total,dataList:ee.stores.left.dataList,selectedKeys:ee.stores.left.selectedKeys,loading:we.left,onSelectedChange:function(he,ce){return B(he,ce,"left")},onPageChange:function(he,ce){return H(he,ce||10,"left")}},rightTable:{rowKey:Re,columns:Be,page:ee.stores.right.page,pageSize:ee.stores.right.pageSize,total:ee.stores.right.total,dataList:ee.stores.right.dataList,selectedKeys:ee.stores.right.selectedKeys,loading:we.right,onSelectedChange:function(he,ce){return B(he,ce,"right")},onPageChange:function(he,ce){return H(he,ce||10,"right")}}})]})},X=W.forwardRef(q)},12755:function(Ce,v,e){"use strict";e.r(v),e.d(v,{default:function(){return b}});var j=e(9783),r=e.n(j),_=e(97857),A=e.n(_),M=e(5574),I=e.n(M),y=e(85893),P=e(67294),Z=e(83622),l=e(90814),w=e(96842),W=e(246),te=e(6171),ne=function(i){var S=i.handleOperation;return(0,y.jsxs)(P.Fragment,{children:[(0,y.jsx)(Z.ZP,{style:{marginTop:35,width:50},onClick:S.bind(void 0,"add"),type:"primary",children:(0,y.jsx)(l.Z,{})}),(0,y.jsx)(Z.ZP,{style:{marginTop:35,width:50},onClick:S.bind(void 0,"allAdd"),type:"primary",children:(0,y.jsx)(w.Z,{})}),(0,y.jsx)(Z.ZP,{style:{marginTop:35,width:50},onClick:S.bind(void 0,"allDelete"),type:"primary",children:(0,y.jsx)(W.Z,{})}),(0,y.jsx)(Z.ZP,{style:{marginTop:35,width:50},onClick:S.bind(void 0,"delete"),type:"primary",children:(0,y.jsx)(te.Z,{})})]})},d=e(13769),h=e.n(d),f=e(3929),u=["rowSelection","handleSelected","selectedRowKeys","pagination","handlePagination"],c=function(i){var S=i.rowSelection,s=i.handleSelected,$=i.selectedRowKeys,D=i.pagination,q=i.handlePagination,X=h()(i,u),Q={pagination:{pageSize:10}};return Reflect.has(i,"pagination")&&(typeof D!="boolean"?Q.pagination=A()(A()({},D),{},{onChange:q}):Q.pagination=D),(0,y.jsx)(f.Z,A()(A()(A()({size:"small"},X),Q),{},{rowSelection:A()(A()({},S||{}),{},{selectedRowKeys:$,onChange:s})}))},O=function(i,S,s){var $=[],D=[],q=[],X=[],Q;if(i==="delete"){$=S.rightList.filter(function(N){return!S.rightSelected.selectedRowKeys.includes(N[s])});var F=S.rightList.filter(function(N){var J=S.rightSelected.selectedRowKeys.includes(N[s]),re=S.leftList.find(function(L){return L[s]===N[s]});return!!(J&&!re)});D=F.concat(S.leftList),q=S.rightSelected.selectedRowKeys,X=S.rightSelected.selectedRows,Q="right"}else if(i==="allDelete")$=[],S.rightList.forEach(function(N){var J=S.leftList.find(function(re){return re[s]===N[s]});J||D.push(N)}),D=D.concat(S.leftList),Q="right";else if(i==="add"){var x=S.leftList.filter(function(N){var J=S.leftSelected.selectedRowKeys.includes(N[s]),re=S.rightList.find(function(L){return L[s]===N[s]});return!!(J&&!re)});$=x.concat(S.rightList),D=S.leftList.filter(function(N){return!S.leftSelected.selectedRowKeys.includes(N[s])}),q=S.leftSelected.selectedRowKeys,X=S.leftSelected.selectedRows,Q="left"}else i==="allAdd"&&(S.leftList.forEach(function(N){var J=S.rightList.find(function(re){return re[s]===N[s]});J||$.push(N)}),D=[],$=$.concat(S.rightList),Q="left");return{leftList:D,rightList:$,selectedKeys:q,selectedRows:X,selectedType:Q}},a=function(i,S){var s=i.leftSelected,$=i.rightSelected,D=i.columns,q=i.rowKey,X=i.leftConfig,Q=i.rightConfig,F=i.pagination,x=i.leftDataSource,N=i.rightDataSource,J=i.isQuote,re=J===void 0?!0:J,L=P.useState({leftSelected:{selectedRowKeys:[],selectedRows:[]},rightSelected:{selectedRowKeys:[],selectedRows:[]},leftPagination:{page:1,pageSize:10},rightPagination:{page:1,pageSize:10},leftList:x||[],rightList:N||[]}),Re=I()(L,2),Be=Re[0],Ve=Re[1],Oe=Be;s&&s.selectedRowKeys&&(Oe.leftSelected=s),$&&$.selectedRowKeys&&(Oe.rightSelected=s),x&&!re&&(Oe.leftList=x),N&&!re&&(Oe.rightList=N);var we=function(Ee){var z={pageSize:10};return Reflect.has(i,"pagination")&&(z=F),Reflect.has(Ee||{},"pagination")&&(z=typeof Ee.pagination=="boolean"||typeof F=="boolean"?Ee.pagination:A()(A()({},F||{}),Ee.pagination||{})),z},Ze=function(Ee,z,ye){Reflect.has(i,"handleSelected")&&i.handleSelected(Ee,z,ye),Ve(function(ae){return A()(A()({},ae),{},r()({},"".concat(ye,"Selected"),{selectedRowKeys:Ee,selectedRows:z}))})},Xe=function(Ee,z,ye){Reflect.has(i,"handlePagination")&&i.handlePagination(Ee,z,ye),Ve(function(ae){return A()(A()({},ae),{},r()({},"".concat(ye,"Pagination"),{page:Ee,pageSize:z}))}),Ze([],[],ye)},ge=function(Ee){var z=O(Ee,Oe,q),ye=z.leftList,ae=z.rightList,Y=z.selectedKeys,T=z.selectedRows,_e=z.selectedType;Reflect.has(i,"handleOperation")&&i.handleOperation(ye,ae,Y,T,Ee),Ve(function(oe){return A()(A()({},oe),{},r()(r()(r()({},"".concat(_e,"Selected"),{selectedRowKeys:[],selectedRows:[]}),"rightList",ae),"leftList",ye))})};return P.useImperativeHandle(S,function(){return{store:Oe,setStore:Ve,handleSelected:Ze,handlePagination:Xe,handleOperation:ge}}),(0,y.jsxs)("div",{className:"carefree-antd-transfer",children:[(0,y.jsx)(c,A()(A()({},X||{}),{},{pagination:we(X),dataSource:Oe.leftList,className:"between-table",selectedRowKeys:Be.leftSelected.selectedRowKeys,handlePagination:function(Ee,z){return Xe(Ee,z,"left")},handleSelected:function(Ee,z){return Ze(Ee,z,"left")},columns:D,rowKey:q})),(0,y.jsx)("div",{className:"middle-btn",children:(0,y.jsx)(ne,{handleOperation:ge})}),(0,y.jsx)(c,A()(A()({},Q||{}),{},{pagination:we(Q),dataSource:Oe.rightList,className:"between-table",selectedRowKeys:Be.rightSelected.selectedRowKeys,handlePagination:function(Ee,z){return Xe(Ee,z,"right")},handleSelected:function(Ee,z){return Ze(Ee,z,"right")},columns:D,rowKey:q}))]})},b=P.forwardRef(a)},98103:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return a}});var r=e(15009),_=e.n(r),A=e(97857),M=e.n(A),I=e(13769),y=e.n(I),P=e(5574),Z=e.n(P),l=e(49677),w=e.n(l),W=e(99289),te=e.n(W),ne=e(67294),d=e(81158),h=e(22383),f=e(90359),u=e(79398),c=e(59340),O=["key","name","fieldKey"],a={"edit-table-base-demo-0":{component:ne.memo(ne.lazy(te()(_()().mark(function b(){var U,i,S,s,$,D,q,X,Q,F,x,N,J;return _()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return U=L.sent,i=U.PlusOutlined,L.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return S=L.sent,s=S.Button,$=S.Form,D=S.Input,q=S.InputNumber,L.t0=w(),L.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return L.t1=L.sent,(0,L.t0)(L.t1),L.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return X=L.sent,Q=X.EditableTableBase,L.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(F=L.sent,x=F.default,N=[],J=0;J<5;J++)N.push({key:J.toString(),name:"Edrward ".concat(J),age:32});return L.abrupt("return",{default:function(){var Be=x.useState(N),Ve=Z()(Be,2),Oe=Ve[0],we=Ve[1],Ze=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Xe=Z()(Ze,2),ge=Xe[0],Ie=Xe[1],Ee=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(ye){return x.createElement(D,ye)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(ye){return ye&&(ye||[]).filter(function(ae){return ae}).map(function(ae){return ae.first}).join(",")},inputNode:function(ye,ae,Y){var T=ae.add,_e=ae.remove,oe=Y.errors;return x.createElement(x.Fragment,null,ye.map(function(ee,Me){var B=ee.key,H=ee.name,G=ee.fieldKey,le=y()(ee,O);return x.createElement(EditTable.Item,M()(M()({key:B},le),{},{name:[H,"first"],fieldKey:[G,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(D,{placeholder:"First Name"}))}),x.createElement($.Item,null,x.createElement(s,{type:"dashed",onClick:function(){return T()},icon:x.createElement(i,null)},"Add field"),x.createElement($.ErrorList,{errors:oe})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(q,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",Oe),x.createElement("div",null,x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{isOptDelete:!ge.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{optDeleteEditingDisabled:!ge.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{isAdd:!ge.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{multiple:!ge.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{optIsFirst:!ge.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{isOpt:!ge.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(Q,M()({initValue:{address:2193},onValuesChange:function(ye,ae,Y,T,_e){we(ye)},rowKey:"key",optIsFirst:!0,dataSource:Oe,columns:Ee,onSave:function(ye){return we(ye)},isAdd:!0},ge)))}});case 27:case"end":return L.stop()}},b)})))),asset:{type:"BLOCK",id:"edit-table-base-demo-0",refAtomIds:["edit-table-base"],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:f,"antd/dist/reset.css":u,"carefree-antd-edit-table":c,react:j||(j=e.t(ne,2))},renderOpts:{compile:function(){var b=te()(_()().mark(function i(){var S,s=arguments;return _()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,e.e(19).then(e.bind(e,4019));case 2:return D.abrupt("return",(S=D.sent).default.apply(S,s));case 3:case"end":return D.stop()}},i)}));function U(){return b.apply(this,arguments)}return U}()}}}},70299:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return a}});var r=e(15009),_=e.n(r),A=e(97857),M=e.n(A),I=e(13769),y=e.n(I),P=e(5574),Z=e.n(P),l=e(49677),w=e.n(l),W=e(99289),te=e.n(W),ne=e(67294),d=e(76070),h=e(22383),f=e(90359),u=e(79398),c=e(59340),O=["key","name","fieldKey"],a={"packages-edit-table-src-demo-0":{component:ne.memo(ne.lazy(te()(_()().mark(function b(){var U,i,S,s,$,D,q,X,Q,F,x,N,J;return _()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return U=L.sent,i=U.PlusOutlined,L.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return S=L.sent,s=S.Button,$=S.Form,D=S.Input,q=S.InputNumber,L.t0=w(),L.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return L.t1=L.sent,(0,L.t0)(L.t1),L.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return X=L.sent,Q=X.default,L.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(F=L.sent,x=F.default,N=[],J=0;J<5;J++)N.push({key:J.toString(),name:"Edrward ".concat(J),age:32});return L.abrupt("return",{default:function(){var Be=x.useState(N),Ve=Z()(Be,2),Oe=Ve[0],we=Ve[1],Ze=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Xe=Z()(Ze,2),ge=Xe[0],Ie=Xe[1],Ee=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(ye){return x.createElement(D,ye)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(ye){return ye&&(ye||[]).filter(function(ae){return ae}).map(function(ae){return ae.first}).join(",")},inputNode:function(ye,ae,Y){var T=ae.add,_e=ae.remove,oe=Y.errors;return x.createElement(x.Fragment,null,ye.map(function(ee,Me){var B=ee.key,H=ee.name,G=ee.fieldKey,le=y()(ee,O);return x.createElement(Q.Item,M()(M()({key:B},le),{},{name:[H,"first"],fieldKey:[G,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(D,{placeholder:"First Name"}))}),x.createElement($.Item,null,x.createElement(s,{type:"dashed",onClick:function(){return T()},icon:x.createElement(i,null)},"Add field"),x.createElement($.ErrorList,{errors:oe})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(q,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",Oe),x.createElement("div",null,x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{isOptDelete:!ge.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{optDeleteEditingDisabled:!ge.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{isAdd:!ge.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{multiple:!ge.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{optIsFirst:!ge.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(s,{onClick:function(){Ie(M()(M()({},ge),{},{isOpt:!ge.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(Q,M()({initValue:{address:2193},onValuesChange:function(ye,ae,Y,T,_e){we(ye)},rowKey:"key",optIsFirst:!0,dataSource:Oe,columns:Ee,onSave:function(ye){return we(ye)},isAdd:!0},ge)))}});case 27:case"end":return L.stop()}},b)})))),asset:{type:"BLOCK",id:"packages-edit-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:f,"antd/dist/reset.css":u,"carefree-antd-edit-table":c,react:j||(j=e.t(ne,2))},renderOpts:{compile:function(){var b=te()(_()().mark(function i(){var S,s=arguments;return _()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,e.e(19).then(e.bind(e,4019));case 2:return D.abrupt("return",(S=D.sent).default.apply(S,s));case 3:case"end":return D.stop()}},i)}));function U(){return b.apply(this,arguments)}return U}()}}}},56395:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return ne}});var r=e(15009),_=e.n(r),A=e(5574),M=e.n(A),I=e(49677),y=e.n(I),P=e(99289),Z=e.n(P),l=e(67294),w=e(44097),W=e(79398),te=e(29441),ne={"packages-form-src-md-hide-demo-0":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0];return c.createElement("div",null,c.createElement(f,{form:S,initialHide:{name1:!0},onValuesChange:function($,D){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",D)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-1":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0];return c.createElement("div",null,c.createElement(f,{form:S,initialHide:{name1:!0},onValuesChange:function($,D){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",D)},watchList:{namea:function($,D,q,X){$==="12"?X.updateValue("name1",!1):X.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-2":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0],s=f.useFormItemHide(),$=M()(s,1),D=$[0];return c.useMemo(function(){return D.setInitialValues({name1:!0},!0)},[]),c.createElement("div",null,c.createElement(f,{formHide:D,form:S,onValuesChange:function(X,Q){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",Q)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}}}},13305:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return f}});var r=e(97857),_=e.n(r),A=e(15009),M=e.n(A),I=e(5574),y=e.n(I),P=e(49677),Z=e.n(P),l=e(99289),w=e.n(l),W=e(67294),te=e(29434),ne=e(90359),d=e(79398),h=e(29441),f={"packages-form-src-md-start-demo-0":{component:W.memo(W.lazy(w()(M()().mark(function u(){var c,O,a,b,U,i;return M()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=s.sent,O=c.Button,s.t0=Z(),s.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return s.t1=s.sent,(0,s.t0)(s.t1),s.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=s.sent,b=a.default,s.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return U=s.sent,i=U.default,s.abrupt("return",{default:function(){var D=b.useForm(),q=y()(D,1),X=q[0],Q=function(){X.validateFields().then(function(x){console.log(x)})};return i.createElement("div",null,i.createElement(O,{onClick:Q},"\u68C0\u67E5form\u8868\u5355\u63D0\u4EA4\u79FB\u9664\u7684\u9879\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u503C"),i.createElement(b,{form:X,name:"tests",initialHide:{name1:!0},watchList:{tests_namea:function(x,N,J,re){var L=re.updateValue;x==="12"?re.updateValue("tests_name1",!0):re.updateValue(["tests","name1"],!1),console.log("\u6253\u5370---\u300B",x,N,re,J)}},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD54",name:"name4",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD55",type:"Custom",render:function(){for(var x=arguments.length,N=new Array(x),J=0;J<x;J++)N[J]=arguments[J];return console.log(N),i.createElement("div",null,"----\u6D4B\u8BD55")}},{label:"\u6D4B\u8BD56",name:"name6",type:"Custom",render:i.createElement("div",null,"----\u6D4B\u8BD56")}]}))}});case 18:case"end":return s.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:ne,"antd/dist/reset.css":d,"carefree-antd-form":h,react:j||(j=e.t(W,2))},renderOpts:{compile:function(){var u=w()(M()().mark(function O(){var a,b=arguments;return M()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,b));case 3:case"end":return i.stop()}},O)}));function c(){return u.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-1":{component:W.memo(W.lazy(w()(M()().mark(function u(){var c,O,a,b;return M()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=Z(),i.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return i.t1=i.sent,(0,i.t0)(i.t1),i.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return c=i.sent,O=c.default,i.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return a=i.sent,b=a.default,i.abrupt("return",{default:function(){return b.createElement(O,{isSearch:!0,displayPre:1,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51",name:"name1",type:"Input"},{label:"\u6D4B\u8BD52",name:"name2",type:"Input"},{label:"\u6D4B\u8BD53",name:"namea3",type:"Input"},{label:"\u6D4B\u8BD54",name:"name4",type:"Input"},{label:"\u6D4B\u8BD55",name:"name5",type:"Input"}]})}});case 14:case"end":return i.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":d,"carefree-antd-form":h,react:j||(j=e.t(W,2))},renderOpts:{compile:function(){var u=w()(M()().mark(function O(){var a,b=arguments;return M()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,b));case 3:case"end":return i.stop()}},O)}));function c(){return u.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-2":{component:W.memo(W.lazy(w()(M()().mark(function u(){var c,O,a,b,U,i;return M()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=s.sent,O=c.Input,s.t0=Z(),s.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return s.t1=s.sent,(0,s.t0)(s.t1),s.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=s.sent,b=a.default,s.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return U=s.sent,i=U.default,s.abrupt("return",{default:function(){var D=b.useForm(),q=y()(D,1),X=q[0],Q=i.useState({}),F=y()(Q,2),x=F[0],N=F[1],J=X.getFieldValue,re=b.useChildItemFun(X),L=re.updateValue;return console.log("state",x),i.createElement(b,{form:X,layout:"vertical",isSearch:!0,onValuesChange:function(Be,Ve){if("names0"in Be){var Oe;clearTimeout(Oe),Oe=setTimeout(function(){L("names3",Be.names0),clearTimeout(Oe)},300)}console.log(Be),N(_()({},Ve))}},i.createElement(b.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},i.createElement(O,null)),i.createElement(b.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},i.createElement(O,null)),J("names".concat(0))!=="12"&&i.createElement(b.ColItem,{label:"\u6D4B\u8BD54",name:"names4",style:{marginBottom:5}},i.createElement(O,null)))}});case 18:case"end":return s.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:ne,"antd/dist/reset.css":d,"carefree-antd-form":h,react:j||(j=e.t(W,2))},renderOpts:{compile:function(){var u=w()(M()().mark(function O(){var a,b=arguments;return M()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,b));case 3:case"end":return i.stop()}},O)}));function c(){return u.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-3":{component:W.memo(W.lazy(w()(M()().mark(function u(){var c,O,a,b,U,i;return M()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=s.sent,O=c.Input,s.t0=Z(),s.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return s.t1=s.sent,(0,s.t0)(s.t1),s.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=s.sent,b=a.default,s.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return U=s.sent,i=U.default,s.abrupt("return",{default:function(){var D=b.useForm(),q=y()(D,1),X=q[0],Q=i.useState({}),F=y()(Q,2),x=F[0],N=F[1],J=X.getFieldValue,re=b.useChildItemFun(X),L=re.updateValue;return console.log("\u7EC4\u5408--->",x),i.createElement(b,{form:X,layout:"vertical",isSearch:!0,config:[{label:"\u6D4B\u8BD5config",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51config",name:"name1",type:"Input"}],onValuesChange:function(Be,Ve){N(_()({},Ve))}},i.createElement(b.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},i.createElement(O,null)),i.createElement(b.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},i.createElement(O,null)))}});case 18:case"end":return s.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:ne,"antd/dist/reset.css":d,"carefree-antd-form":h,react:j||(j=e.t(W,2))},renderOpts:{compile:function(){var u=w()(M()().mark(function O(){var a,b=arguments;return M()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,b));case 3:case"end":return i.stop()}},O)}));function c(){return u.apply(this,arguments)}return c}()}}}},12360:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return ne}});var r=e(15009),_=e.n(r),A=e(5574),M=e.n(A),I=e(49677),y=e.n(I),P=e(99289),Z=e.n(P),l=e(67294),w=e(7131),W=e(79398),te=e(29441),ne={"packages-form-src-md-update-demo-0":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0];return c.createElement("div",null,c.createElement(f,{form:S,onValuesChange:function($,D){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",D)},watchList:{name:function($,D,q,X){var Q=q.updateValue,F=q.bathUpdateValue;Q("name1",$)},name1:function($,D,q,X){var Q=q.updateValue,F=q.bathUpdateValue;F({name2:$,name3:$})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}},"packages-form-src-md-update-demo-1":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0],s=f.getChildItemFun(S),$=s.updateValue,D=s.bathUpdateValue;return c.createElement("div",null,c.createElement(f,{form:S,onValuesChange:function(X,Q){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",Q)},watchList:{name:function(X,Q,F,x){$("name1",X)},name1:function(X,Q,F,x){D({name2:X,name3:X})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}}}},421:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return ne}});var r=e(15009),_=e.n(r),A=e(5574),M=e.n(A),I=e(49677),y=e.n(I),P=e(99289),Z=e.n(P),l=e(67294),w=e(9087),W=e(79398),te=e(29441),ne={"packages-form-src-md-watch-demo-0":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0];return c.createElement("div",null,c.createElement(f,{form:S,onValuesChange:function($,D){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",D)},watchList:{namea:function($,D,q,X){var Q=q.updateValue;Q("name1",$)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD5",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-1":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0];return c.createElement("div",null,c.createElement(f,{form:S,onValuesChange:function($,D){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",D)},watchList:{namea:function($,D,q,X){var Q=q.updateValue;Q("name1",$)},name1:function($,D,q,X){var Q=q.updateValue;Q("name2",$)},name2:function($,D,q,X){var Q=q.updateValue;Q("name3",$)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-2":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,f=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=a.sent,c=u.default,a.abrupt("return",{default:function(){var U=f.useForm(),i=M()(U,1),S=i[0];return c.createElement("div",null,c.createElement(f,{form:S,initialHide:{name1:!0},onValuesChange:function($,D){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",D)},watchList:{namea:function($,D,q,X){$==="12"?X.updateValue("name1",!1):X.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-antd-form":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}}}},51773:function(Ce,v,e){"use strict";e.r(v),e.d(v,{demos:function(){return _}});var j=e(67294),r=e(30372),_={}},89237:function(Ce,v,e){"use strict";e.r(v),e.d(v,{demos:function(){return _}});var j=e(67294),r=e(11010),_={}},50968:function(Ce,v,e){"use strict";e.r(v),e.d(v,{demos:function(){return _}});var j=e(67294),r=e(70174),_={}},15611:function(Ce,v,e){"use strict";e.r(v),e.d(v,{demos:function(){return _}});var j=e(67294),r=e(56296),_={}},87820:function(Ce,v,e){"use strict";e.r(v),e.d(v,{demos:function(){return _}});var j=e(67294),r=e(91046),_={}},40352:function(Ce,v,e){"use strict";e.r(v),e.d(v,{demos:function(){return _}});var j=e(67294),r=e(49833),_={}},22617:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return ne}});var r=e(15009),_=e.n(r),A=e(5574),M=e.n(A),I=e(49677),y=e.n(I),P=e(99289),Z=e.n(P),l=e(67294),w=e(67590),W=e(79398),te=e(93251),ne={"packages-fuzzy-query-src-demo-0":{component:l.memo(l.lazy(Z()(_()().mark(function d(){var h,f,u,c,O;return _()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.t0=y(),b.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return b.t1=b.sent,(0,b.t0)(b.t1),b.next=7,Promise.resolve().then(e.bind(e,93251));case 7:return h=b.sent,f=h.default,b.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=b.sent,c=u.default,O=function(){var i=c.useState([]),S=M()(i,2),s=S[0],$=S[1],D=function(){var q=Z()(_()().mark(function X(){return _()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",Array.from({length:20}).map(function(x,N){return{label:"\u540D\u79F0---".concat(N),phone:N}}));case 1:case"end":return F.stop()}},X)}));return function(){return q.apply(this,arguments)}}();return c.createElement("div",null,c.createElement(f,{request:D,mode:"multiple",value:s,onChange:$,placeholder:"\u8BF7\u9009\u62E9",columns:[{dataIndex:"label",title:"\u7528\u6237\u540D"},{dataIndex:"phone",title:"\u7535\u8BDD"}],fieldNames:{value:"phone"}}))},b.abrupt("return",{default:O});case 15:case"end":return b.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-fuzzy-query-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
export default Query;`},antd:{type:"NPM",value:"5.24.6"},"carefree-fuzzy-query":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":W,"carefree-fuzzy-query":te,react:j||(j=e.t(l,2))},renderOpts:{compile:function(){var d=Z()(_()().mark(function f(){var u,c=arguments;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,c));case 3:case"end":return a.stop()}},f)}));function h(){return d.apply(this,arguments)}return h}()}}}},53335:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return w}});var r=e(15009),_=e.n(r),A=e(99289),M=e.n(A),I=e(67294),y=e(6857),P=e(90359),Z=e(29441),l=e(28209),w={"packages-pro-table-src-demo-0":{component:I.memo(I.lazy(M()(_()().mark(function W(){var te,ne,d,h,f,u,c,O;return _()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return te=b.sent,ne=te.Input,b.next=6,Promise.resolve().then(e.bind(e,29441));case 6:return d=b.sent,h=d.default,b.next=10,Promise.resolve().then(e.bind(e,28209));case 10:return f=b.sent,u=f.default,b.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return c=b.sent,O=c.default,b.abrupt("return",{default:function(){return O.createElement(u,{Api:{table:{url:"/api/user/select",method:"POST"}},initialValues:{search:{ces1:123}},columns:[{title:"\u8D26\u53F7",dataIndex:"loginName"},{title:"\u7528\u6237\u540D",dataIndex:"userName"},{title:"\u7528\u6237\u624B\u673A\u53F7",dataIndex:"phone"},{title:"\u5E74\u9F84",dataIndex:"age"}],search:{isSearch:!0,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"ces1",type:"Input"}],children:O.createElement(O.Fragment,null,O.createElement(h.ColItem,{name:"namens",label:"\u6D4B\u8BD5 children"},O.createElement(ne,{placeholder:"\u8BF7\u8F93\u5165"})))}})}});case 17:case"end":return b.stop()}},W)})))),asset:{type:"BLOCK",id:"packages-pro-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},"carefree-pro-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:P,"carefree-antd-form":Z,"carefree-pro-table":l,react:j||(j=e.t(I,2))},renderOpts:{compile:function(){var W=M()(_()().mark(function ne(){var d,h=arguments;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(d=u.sent).default.apply(d,h));case 3:case"end":return u.stop()}},ne)}));function te(){return W.apply(this,arguments)}return te}()}}}},40859:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return Z}});var r=e(15009),_=e.n(r),A=e(99289),M=e.n(A),I=e(67294),y=e(90147),P=e(42478),Z={"packages-transfer-search-src-demo-0":{component:I.memo(I.lazy(M()(_()().mark(function l(){var w,W,te,ne;return _()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,42478));case 2:return w=h.sent,W=w.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return te=h.sent,ne=te.default,h.abrupt("return",{default:function(){return ne.createElement("div",null,ne.createElement(W,{rowKey:"id",columns:[{title:"\u6807\u9898",dataIndex:"title"}],initValue:{left:{dataList:[{id:1,title:"\u6807\u9898"}]},right:{dataList:[{id:2,title:"\u6807\u98982"}]}},Api:{left:{url:"",options:{},before:function(){return{}},after:function(){return{}}},right:{url:"",before:function(){return{}},after:function(){return{}}},add:{url:"",before:function(){return{}},after:function(){return{}}},allAdd:{url:"",before:function(){return{}},after:function(){return{}}},allDelete:{url:"",before:function(){return{}},after:function(){return{}}},delete:{url:"",before:function(){return{}},after:function(){return{}}}},leftSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]},rightSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]}}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-search-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import TransferSearch from 'carefree-antd-transfer-search';
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
);`},"carefree-antd-transfer-search":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer-search":P,react:j||(j=e.t(I,2))},renderOpts:{compile:function(){var l=M()(_()().mark(function W(){var te,ne=arguments;return _()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(te=h.sent).default.apply(te,ne));case 3:case"end":return h.stop()}},W)}));function w(){return l.apply(this,arguments)}return w}()}}}},86968:function(Ce,v,e){"use strict";var j;e.r(v),e.d(v,{demos:function(){return Z}});var r=e(15009),_=e.n(r),A=e(99289),M=e.n(A),I=e(67294),y=e(41699),P=e(12755),Z={"packages-transfer-src-demo-0":{component:I.memo(I.lazy(M()(_()().mark(function l(){var w,W,te,ne;return _()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,12755));case 2:return w=h.sent,W=w.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return te=h.sent,ne=te.default,h.abrupt("return",{default:function(){return ne.createElement("div",null,ne.createElement(W,{leftDataSource:[{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:11},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:22},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:33},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:44},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:444},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4444}],rightDataSource:[{a:"\u6D4B\u8BD55",b:"\u6D4B\u8BD5215",id:5},{a:"\u6D4B\u8BD56",b:"\u6D4B\u8BD52116",id:6},{a:"\u6D4B\u8BD57",b:"\u6D4B\u8BD52127",id:7},{a:"\u6D4B\u8BD58",b:"\u6D4B\u8BD52138",id:8}],rowKey:"id",columns:[{dataIndex:"a",title:"\u6807\u9898",align:"center"},{dataIndex:"b",title:"\u68073",align:"center"}]}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Transfer from 'carefree-antd-transfer';
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
);`},"carefree-antd-transfer":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer":P,react:j||(j=e.t(I,2))},renderOpts:{compile:function(){var l=M()(_()().mark(function W(){var te,ne=arguments;return _()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(te=h.sent).default.apply(te,ne));case 3:case"end":return h.stop()}},W)}));function w(){return l.apply(this,arguments)}return w}()}}}},11160:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(81158);const r=[{value:` npm i carefree-antd-edit-table
`,paraId:0,tocIndex:0}]},87253:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(76070);const r=[{value:` npm i carefree-antd-edit-table
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
`,paraId:14,tocIndex:4}]},66782:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(44097);const r=[{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:0},{value:"isHide",paraId:0},{value:` \u5C5E\u6027\uFF0C\u5224\u65AD\u8868\u5355\u9879\u662F\u5426\u53EF\u4EE5\u6709\u9690\u85CF\u64CD\u4F5C
\u901A\u8FC7\u8BBE\u7F6E `,paraId:0},{value:"initialHide",paraId:0},{value:" \u5C5E\u6027 \uFF0C\u8BBE\u7F6E\u521D\u59CB\u8868\u5355\u9879\u9690\u85CF\u6216\u5C55\u793A",paraId:0}]},84651:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(29434);const r=[{value:` npm i carefree-antd-form
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
`,paraId:7,tocIndex:4}]},88412:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(7131);const r=[{value:"updateValue",paraId:0},{value:" \u548C ",paraId:0},{value:"bathUpdateValue",paraId:0},{value:" \u65B9\u6CD5\u66F4\u65B0\u8868\u5355\u503C\uFF0C\u53EF\u4EE5\u89E6\u53D1 ",paraId:0},{value:"onValuesChange",paraId:0},{value:" \u4E8B\u4EF6",paraId:0},{value:"\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"getChildItemFun",paraId:1,tocIndex:1},{value:" \u65B9\u6CD5\u83B7\u53D6",paraId:1,tocIndex:1}]},34434:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(9087);const r=[{value:"form \u52A0 ",paraId:0},{value:"watchList",paraId:0},{value:" \u5C5E\u6027, \u5BF9\u8868\u5355\u9879\u66F4\u65B0\u503C\u8FDB\u884C\u76D1\u542C",paraId:0}]},67157:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(30372);const r=[{value:"useSubscribe",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(sub?: Subscribe) => Subscribe[]",paraId:2,tocIndex:0},{value:`const [subscribe] = useSubscribe();
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
`,paraId:16,tocIndex:0}]},68927:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(11010);const r=[{value:"useHideFormItem",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(form?: HideGetStoreProps) => HideGetStoreProps[]",paraId:2,tocIndex:0},{value:`export default () => {
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
`,paraId:15,tocIndex:0}]},25777:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(70174);const r=[{value:"useWatchList",paraId:0,tocIndex:0},{value:"\u6536\u96C6\u5728\u76D1\u542C\u540E\u9700\u8981\u7684\u4E00\u4E9B\u5904\u7406\u6570\u636E\u7684\u65B9\u6CD5",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(props: {[x: string]: any}) => ChildPropsType[]",paraId:2,tocIndex:0},{value:`export const WatchItem = (props: { [x: string]: any }) => {
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

`,paraId:7,tocIndex:0}]},85426:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(56296);const r=[{value:"\u4E00\u4E2A\u4F20\u9012\u5176\u4ED6\u7EC4\u4EF6\u9700\u8981\u7684\u53C2\u6570\u7684 context",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"React.Context<ContextProps>",paraId:1,tocIndex:0},{value:"\u83B7\u53D6 ",paraId:2,tocIndex:1},{value:"FormContext",paraId:2,tocIndex:1},{value:" \u7684\u503C",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"() => ContextProps",paraId:3,tocIndex:1},{value:"\u4E00\u4E2A\u4F20\u9012 \u8868\u5355\u540D\u79F0\u7684 context",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"React.Context<string|number>",paraId:5,tocIndex:2},{value:"\u83B7\u53D6 ",paraId:6,tocIndex:3},{value:"FormParentNameContext",paraId:6,tocIndex:3},{value:" \u7684\u503C",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"() => string|number",paraId:7,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:4},{value:"Form.useForm()",paraId:8,tocIndex:4},{value:" \u8FD4\u56DE\u503C [from] \u8FDB\u884C\u83B7\u53D6\u5B50\u9879\u4E2D\u66F4\u65B0\u503C\u7684\u65B9\u6CD5",paraId:8,tocIndex:4},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:4},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:9,tocIndex:4},{value:"\u83B7\u53D6 ",paraId:10,tocIndex:5},{value:"from.useForm",paraId:10,tocIndex:5},{value:" \u4E2D\u66F4\u65B0",paraId:10,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:11,tocIndex:5},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:11,tocIndex:5}]},13829:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(91046);const r=[{value:"\u6839\u636E rc-field-from \u5C01\u88C5\u7684\u8868\u5355\u8054\u52A8/\u9690\u85CF/\u76D1\u542C \u7EC4\u4EF6\u6216\u5DE5\u5177",paraId:0},{value:`
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
`,paraId:6}]},34836:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(49833);const r=[{value:"\u5B57\u6BB5\u8F6C\u6362\u6210 ",paraId:0,tocIndex:0},{value:"_",paraId:0,tocIndex:0},{value:" \u62FC\u63A5\u7684\u5B57\u7B26\u4E32",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"(path: NamePath) => number | InternalNamePath",paraId:1,tocIndex:0},{value:"\u628A\u8868\u5355\u9879\u5B57\u6BB5\u548C\u8868\u5355\u540D\u79F0 \u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"_",paraId:2,tocIndex:1},{value:" \u62FC\u63A5\u5728\u4E00\u8D77",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"(namePath: InternalNamePath, formName?: string): string | undefined",paraId:3,tocIndex:1},{value:"\u8F6C\u6362\u6210\u6570\u7EC4",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"function toArray<T>(candidate?: T | T[] | false): T[]",paraId:5,tocIndex:2},{value:"\u83B7\u53D6\u662F\u5426\u662F\u5FC5\u586B",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"function getRequired(required: boolean | undefined, rules: Rule[] | undefined, form: FormInstance) => boolean",paraId:7,tocIndex:3}]},64330:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(67590);const r=[{value:` npm i carefree-fuzzy-query
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
`,paraId:4,tocIndex:1}]},59715:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(6857);const r=[{value:"\u96C6\u6210\u67E5\u8BE2\u8868\u5355\u548C\u8868\u683C\uFF0C\u5B9E\u73B0\u5FEB\u901F\u4F7F\u7528\u8868\u5355\u8868\u683C\u8054\u5408\u4F7F\u7528\u7B80\u5355\u5316\uFF0C\u5FEB\u901F\u5B9E\u73B0\u4EE3\u7801\u529F\u80FD",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"Api",paraId:1,tocIndex:0},{value:"\u63A5\u53E3\u8C03\u7528 \u53EF\u4EE5\u8C03\u7528\u7684\u63A5\u53E3",paraId:1,tocIndex:0},{value:"ApiProps",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u8868\u683C columns",paraId:1,tocIndex:0},{value:"(v?: Store) => TableProps<any>['columns']|TableProps<any>['columns']",paraId:1,tocIndex:0},{value:"main",paraId:1,tocIndex:0},{value:"\u72B6\u6001 \u5B58\u50A8",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"initialValues",paraId:1,tocIndex:0},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:0},{value:"Store['store']",paraId:1,tocIndex:0},{value:"searchHead",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355\u8868\u5934\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"searchCardProps",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355 \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableHead",paraId:1,tocIndex:0},{value:"\u8868\u683C\u5934\u90E8\u64CD\u4F5C\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"tableCardProps",paraId:1,tocIndex:0},{value:"\u8868\u683C \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableConfig",paraId:1,tocIndex:0},{value:"\u8868\u683C\u914D\u7F6E",paraId:1,tocIndex:0},{value:"TableProps<any> & { apiName?: string,table?: { page?: number, pageSize?: number, dataSource?: any[],total?: number,selectRows?: any[], selectRowKeys?: any[],pagination?: PageProps,}",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:2,tocIndex:0},{value:`// \u53C2\u6570
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
`,paraId:3,tocIndex:0}]},51550:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(90147);const r=[{value:` npm i carefree-antd-transfer-search
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
`,paraId:3,tocIndex:1}]},57798:function(Ce,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return r}});var j=e(41699);const r=[{value:` npm i carefree-antd-transfer
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
