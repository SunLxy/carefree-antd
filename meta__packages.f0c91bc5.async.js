(self.webpackChunkcarefree_antd_root=self.webpackChunkcarefree_antd_root||[]).push([[56],{59340:function(Ce,I,e){"use strict";e.r(I),e.d(I,{EditableTableBase:function(){return Qe},Store:function(){return Me},default:function(){return lt}});var F=e(15009),r=e.n(F),b=e(19632),T=e.n(b),A=e(99289),f=e.n(A),y=e(9783),P=e.n(y),W=e(97857),l=e.n(W),Z=e(5574),$=e.n(Z),te=e(13769),w=e.n(te),s=e(85893),h=e(45360),j=e(3929),p=e(83622),c=e(67294),B=e(7825),a=e(86738),R=e(42075),ee=function(n){var o=n.optConfig,t=n.isEditing,v=n.isAddEdit,m=n.save,L=n.isOptDelete,g=n.cancel,C=n.onDelete,O=n.edit,K=n.newAdd,q=n.editingKey,de=n.rowKey,ue=n.multiple,ve=n.optDeleteEditingDisabled;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},o),{},{render:function(ye,pe,ce){var se=t(pe),je=v(pe);return o&&o.render?o.render(ye,pe,ce,{editable:se,isNewAdd:je,save:m,cancel:g,onDelete:C,edit:O,newAdd:K,editingKey:q}):se?(0,s.jsxs)("span",{children:[(0,s.jsx)(B.Z.Link,{onClick:function(){return m(pe[de],pe,ce)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,s.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:je?C.bind(void 0,pe[de],pe,ce):g.bind(void 0,pe[de]),children:(0,s.jsx)(B.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,s.jsxs)(R.Z,{children:[(0,s.jsx)(B.Z.Link,{disabled:!!q.length&&!ue,onClick:function(){return O(pe)},children:"\u7F16\u8F91"}),L&&(0,s.jsx)(a.Z,{disabled:ve&&!!q.length,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return C(pe[de],pe,ce)},children:(0,s.jsx)(B.Z.Link,{disabled:ve&&!!q.length,children:"\u5220\u9664"})})]})}})]},i=ee,u=e(72004),d=e.n(u),V=e(12444),S=e.n(V),z=d()(function E(){var n=this;S()(this,E),P()(this,"store",{}),P()(this,"remove",function(o){delete n.store[o]}),P()(this,"register",function(o,t){n.store[o]=t}),P()(this,"getStore",function(){return n.store}),P()(this,"getToKeyForm",function(o){return n.store["".concat(o)]})}),G=function(n){var o=c.useRef();return n?o.current=n:o.current=new z,[o.current]},U=z,D=e(83062),x=e(88692),N=e(88760),Q=e(25278),le=e(13457),M=e(63960),_e=e(3303),Ve=e(67002),Ne=e(86125),Fe=e(59847),ze=e(34041),Xe=e(84567),Je=e(11330),Pe=e(55742),Ae=e(41637),Te=e(68351),X=e(23799),ge=N.default.RangePicker;function ae(E,n){if(E.length){var o=E.join("_");return n?"".concat(n,"_").concat(o):o}}function k(E){return E===void 0||E===!1?[]:Array.isArray(E)?E:[E]}var _=function(n){var o=n.attr,t=n.type,v=n.inputNode,m;if(t==="Input"){var L=o;m=(0,s.jsx)(Q.Z,l()({},L))}else if(t==="TextArea"){var g=o;m=(0,s.jsx)(Q.Z.TextArea,l()({},g))}else if(t==="InputNumber"){var C=o;m=(0,s.jsx)(le.Z,l()({},C))}else if(t==="AutoComplete"){var O=o;m=(0,s.jsx)(M.Z,l()({},O))}else if(t==="Cascader"){var K=o;m=(0,s.jsx)(_e.Z,l()({},K))}else if(t==="DatePicker"){var q=o;m=(0,s.jsx)(N.default,l()({},q))}else if(t==="Rate"){var de=o;m=(0,s.jsx)(Ve.Z,l()({},de))}else if(t==="Slider"){var ue=o;m=(0,s.jsx)(Ne.Z,l()({},ue))}else if(t==="TreeSelect"){var ve=o;m=(0,s.jsx)(Fe.Z,l()({},ve))}else if(t==="Select"){var Oe=o;m=(0,s.jsx)(ze.default,l()({},Oe))}else if(t==="Checkbox"){var ye=o;m=(0,s.jsx)(Xe.Z.Group,l()({},ye))}else if(t==="Mentions"){var pe=o;m=(0,s.jsx)(Je.Z,l()({},pe))}else if(t==="Radio"){var ce=o;m=(0,s.jsx)(Pe.ZP.Group,l()({},ce))}else if(t==="Switch"){var se=o;m=(0,s.jsx)(Ae.Z,l()({},se))}else if(t==="TimePicker"){var je=o;m=(0,s.jsx)(Te.Z,l()({},je))}else if(t==="Upload"){var $e=o;m=(0,s.jsx)(X.Z,l()({},$e))}else if(t==="RangePicker"){var me=o;m=(0,s.jsx)(ge,l()({},me))}else t==="Custom"&&(m=v);return m},be=["editing","dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","multiple","rowKey","isList","listAttr"],Y=["name","rules","preName","itemValue","children","tipAttr","tip"],J=function(n){var o=n.editing,t=n.dataIndex,v=n.title,m=n.record,L=n.index,g=n.inputNode,C=n.rules,O=n.children,K=n.itemAttr,q=n.type,de=n.attr,ue=n.tip,ve=n.tipAttr,Oe=n.multiple,ye=n.rowKey,pe=n.isList,ce=n.listAttr,se=ce===void 0?{}:ce,je=w()(n,be),$e=_({attr:de,type:q,inputNode:g}),me=function(){return pe&&typeof g=="function"?(0,s.jsx)(x.ZP.List,l()(l()({},se),{},{name:t,children:function(fn,Pn,an){return g(fn.map(function(rn){return l()(l()({},rn),{},{fieldKey:rn.key})}),Pn,an)}})):(0,s.jsx)(Ue,l()(l()({},K),{},{name:t,rules:C,preName:m[ye],itemValue:m,children:$e,tipAttr:ve,tip:ue}))};return(0,s.jsx)("td",l()(l()({},je),{},{children:o?me():O}))},Ue=function(n){var o=n.name,t=n.rules,v=n.preName,m=v===void 0?"":v,L=n.itemValue,g=n.children,C=n.tipAttr,O=C===void 0?{}:C,K=n.tip,q=w()(n,Y);return(0,s.jsx)(x.ZP.Field,l()(l()({},q),{},{name:o,rules:t,children:function(ue,ve,Oe){var ye=k(o).length&&ve?ve.name:[],pe=ae(ye,m),ce=function(me){var ke=me;me&&me.target&&(ke=me.target.value),ue.onChange(ke)},se=typeof g=="function"?g(l()(l()({},ue),{},{id:pe}),ve,Oe,{record:L}):c.isValidElement(g)?c.cloneElement(g,l()(l()({},ue),{},{onChange:ce,id:pe})):g,je=ve.errors.map(function($e){return $e}).join(",");return(0,s.jsx)(D.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},O),{},{title:K?K(je):je,open:!!ve.errors.length,children:se}))}}))},ne=J,re=c.createContext({formsRef:new U,dataSource:[],rowKey:"id",onValuesChange:function(n,o,t,v){}}),fe=function(n){var o=x.ZP.useForm(),t=$()(o,1),v=t[0],m=c.useContext(re),L=m.formsRef,g=m.onValuesChange,C=g===void 0?function(){}:g,O=m.dataSource,K=m.rowKey;c.useEffect(function(){return function(){return L.remove("".concat(n["data-row-key"]))}},[]),L.register("".concat(n["data-row-key"]),v);var q=O.find(function(de){return"".concat(de[K])==="".concat(n["data-row-key"])});return(0,s.jsx)(x.ZP,{onValuesChange:C.bind(void 0,"".concat(n["data-row-key"]),v),form:v,name:"".concat(n["data-row-key"]),component:!1,initialValues:q||{},children:(0,s.jsx)("tr",l()({},n))})},De=fe,Le=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","store","optDeleteEditingDisabled"],Ie=function(n,o){var t=n.columns,v=n.dataSource,m=v===void 0?[]:v,L=n.onBeforeSave,g=n.onSave,C=n.rowKey,O=C===void 0?"id":C,K=n.optIsFirst,q=K===void 0?!1:K,de=n.optConfig,ue=de===void 0?{}:de,ve=n.isOptDelete,Oe=ve===void 0?!1:ve,ye=n.initValue,pe=ye===void 0?{}:ye,ce=n.onValuesChange,se=n.isAdd,je=n.onErr,$e=n.multiple,me=$e===void 0?!1:$e,ke=n.onBeforeAdd,mn=n.isOpt,fn=mn===void 0?!0:mn,Pn=n.addBtnProps,an=Pn===void 0?{}:Pn,rn=n.store,un=n.optDeleteEditingDisabled,dn=un===void 0?!1:un,Rn=w()(n,Le),On=G(rn),xn=$()(On,1),He=xn[0],pn=(0,c.useState)([]),Cn=$()(pn,2),vn=Cn[0],we=Cn[1],An=c.useState([]),Ge=$()(An,2),Ke=Ge[0],Vn=Ge[1],Dn=function(xe){we(function(Be){return Be.filter(function(Ye){return"".concat(Ye)!=="".concat(xe)})}),Vn(function(Be){return Be.filter(function(Ye){return"".concat(Ye)!=="".concat(xe)})})},Qn=c.useMemo(function(){return t.filter(function(Ee){return Ee.editable}).map(function(Ee){return Ee.dataIndex})},[t]),Nn=function(xe){var Be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Ye=He.getStore();Ye["".concat(xe)]&&Ye["".concat(xe)].setFieldsValue(Be)},Wn=function(xe){var Be=He.getStore();return Be["".concat(xe)]},Bn=function(xe){return vn.includes("".concat(xe[O]))},Un=function(xe){return Ke.includes("".concat(xe[O]))},$n=function(){if(!(ke&&!ke())){if(Ke.length===1&&!me)return void h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");if(vn.length===1&&!me)return void h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");var xe=(new Date().getTime()*Math.round(10)).toString(),Be=l()(l()({},pe||{}),{},P()({},O,xe)),Ye=m.concat([Be]);we(function(en){return en.concat([xe])}),Vn(function(en){return en.concat([xe])}),g&&g(Ye,Be)}},Fn=function(xe){var Be=l()({},xe);Nn(xe[O],Be),we(function(Ye){return Ye.concat(["".concat(xe[O])])})},Zn=function(xe){Dn(xe),Nn(xe,{})},Hn=function(xe,Be,Ye){var en=m.filter(function(bn){return"".concat(bn[O])!=="".concat(xe)});Dn(xe),g&&g(en,Be,Be,Ye)},jn=function(){var Ee=f()(r()().mark(function xe(Be,Ye,en){var bn,In,zn,qn;return r()().wrap(function(on){for(;;)switch(on.prev=on.next){case 0:return on.prev=0,on.next=3,Wn(Be).validateFields();case 3:if(bn=on.sent,!(L&&!L(bn,Ye,en))){on.next=6;break}return on.abrupt("return");case 6:In=T()(m),zn=In.findIndex(function(dt){return"".concat(Be)==="".concat(dt[O])}),zn>-1?(qn=In[zn],In.splice(zn,1,l()(l()({},qn),bn))):In.push(bn),g&&g(In,bn,Ye,en),Dn(Be),Wn(Be).resetFields(Qn),on.next=17;break;case 14:on.prev=14,on.t0=on.catch(0),je&&je(on.t0);case 17:case"end":return on.stop()}},xe,null,[[0,14]])}));return function(Be,Ye,en){return Ee.apply(this,arguments)}}(),wn=fn&&i({optConfig:ue,isEditing:Bn,isAddEdit:Un,save:jn,isOptDelete:Oe,cancel:Zn,onDelete:Hn,edit:Fn,newAdd:Ke,editingKey:vn,rowKey:O,multiple:me,optDeleteEditingDisabled:dn})||[],Jn=q?wn.concat(t):t.concat(wn),Yn=Jn.map(function(Ee){return Ee.editable?l()(l()({},Ee),{},{onCell:function(Be){return{record:Be,multiple:me,rowKey:O,dataIndex:Ee.dataIndex,title:Ee.title,editing:Bn(Be),inputNode:Ee.inputNode,rules:Ee.rules||[],itemAttr:Ee.itemAttr,type:Ee.type,attr:Ee.attr,tip:Ee.tip,tipAttr:Ee.tipAttr,isList:Ee.isList,listAttr:Ee.listAttr}}}):Ee}),Mn=function(xe,Be,Ye,en){if(ce){var bn=m.map(function(In){return"".concat(xe)==="".concat(In[O])?l()(l()({},In),en):l()({},In)});ce(bn,Ye,en,xe,Be)}};return c.useImperativeHandle(o,function(){return{save:jn,onDelete:Hn,edit:Fn,cancel:Zn,add:$n,isEditing:Bn,editingKey:vn,newAdd:Ke,isAddEdit:Un,forms:He}}),(0,s.jsx)(c.Fragment,{children:(0,s.jsxs)(re.Provider,{value:{formsRef:He,onValuesChange:Mn,dataSource:m,rowKey:O},children:[(0,s.jsx)(j.Z,l()(l()({size:"small",bordered:!0},Rn),{},{components:{body:{row:De,cell:ne}},rowKey:O,dataSource:m,columns:Yn,rowClassName:"editable-row",pagination:!1})),se&&(0,s.jsx)(p.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},an||{}),{},{style:l()({marginTop:10},(an||{}).style||{}),onClick:$n}))]})})},ie=c.forwardRef(Ie),he=ie;he.useStore=G,he.Item=Ue;var oe=he,Me=U,Re=e(25098),H=e.n(Re),Ze=e(31996),Se=e.n(Ze),nn=e(26037),Sn=e.n(nn),We=e(58024),qe=e(17625),tn=function(E){Se()(o,E);var n=Sn()(o);function o(){var t;S()(this,o);for(var v=arguments.length,m=new Array(v),L=0;L<v;L++)m[L]=arguments[L];return t=n.call.apply(n,[this].concat(m)),P()(H()(t),"dataSource",[]),P()(H()(t),"initValue",{}),P()(H()(t),"rowKey",""),P()(H()(t),"onSave",void 0),P()(H()(t),"onBeforeAdd",void 0),P()(H()(t),"multiple",void 0),P()(H()(t),"onBeforeEdit",void 0),P()(H()(t),"onBeforeEditCancel",void 0),P()(H()(t),"onBeforeDelete",void 0),P()(H()(t),"onErr",void 0),P()(H()(t),"onBeforeSave",void 0),P()(H()(t),"fields",void 0),P()(H()(t),"onValuesChange",void 0),P()(H()(t),"formInstance",new Map([])),P()(H()(t),"main_store",function(){var g=l()(l()({},t.defaultInital),{},{editingKeys:t._createRef([]),newAddKeys:t._createRef([])});return t._ctor(g),H()(t)}),P()(H()(t),"formateKeyToString",function(g){return"".concat(g)}),P()(H()(t),"remove",function(g){t.formInstance.delete(t.formateKeyToString(g))}),P()(H()(t),"register",function(g,C){t.formInstance.set(t.formateKeyToString(g),C)}),P()(H()(t),"getStore",function(){return t.formInstance}),P()(H()(t),"getToKeyForm",function(g){return t.formInstance.get(t.formateKeyToString(g))}),P()(H()(t),"restToKeyFormValue",function(g){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=t.getToKeyForm(g);O&&O.setFieldsValue(C)}),P()(H()(t),"isEditing",function(g){var C=t.store.editingKeys,O=C===void 0?[]:C;if(g)return O.includes("".concat(g[t.rowKey]))}),P()(H()(t),"isAddEdit",function(g){var C=t.store.newAddKeys,O=C===void 0?[]:C;if(g)return O.includes("".concat(g[t.rowKey]))}),P()(H()(t),"removeOperateKey",function(g){var C=t.store,O=C.editingKeys,K=O===void 0?[]:O,q=C.newAddKeys,de=q===void 0?[]:q,ue=K.filter(function(Oe){return"".concat(Oe)!=="".concat(g)}),ve=de.filter(function(Oe){return"".concat(Oe)!=="".concat(g)});t._setRefStore({editingKeys:ue,newAddKeys:ve})}),P()(H()(t),"onAddRow",function(){var g=t.store,C=g.editingKeys,O=C===void 0?[]:C,K=g.newAddKeys,q=K===void 0?[]:K;if(!(typeof t.onBeforeAdd=="function"&&!t.onBeforeAdd())){if(q.length===1&&!t.multiple)return void h.ZP.warning("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");if(O.length===1&&!t.multiple)return void h.ZP.warning("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");var de=(new Date().getTime()*Math.round(10)).toString(),ue=l()(l()({},t.initValue||{}),{},P()({},t.rowKey,de)),ve=T()(t.dataSource||[]).concat([ue]);t._setRefStore({editingKeys:T()(O).concat([de]),newAddKeys:T()(q).concat([de])}),t.onSave&&t.onSave(ve,ue)}}),P()(H()(t),"onDeleteRow",function(g,C){var O=!0;if(typeof t.onBeforeDelete=="function"&&(O=t.onBeforeDelete(g,C)),O){var K=t.formateKeyToString(g[t.rowKey]),q=T()(t.dataSource||[]).filter(function(de){return"".concat(de[t.rowKey])!==K});t.removeOperateKey(K),t.onSave&&t.onSave(q,g,g,C)}}),P()(H()(t),"onEditRow",function(g,C){var O=!0;if(typeof t.onBeforeEdit=="function"&&(O=t.onBeforeEdit(g,C)),O){var K=l()({},g),q=t.store.editingKeys,de=q===void 0?[]:q,ue=t.formateKeyToString(g[t.rowKey]);t._setRefStore({editingKeys:T()(de).concat([ue])}),t.restToKeyFormValue(ue,K)}}),P()(H()(t),"onEditCancel",function(g,C){var O=!0;if(typeof t.onBeforeEditCancel=="function"&&(O=t.onBeforeEditCancel(g,C)),O){var K=t.formateKeyToString(g[t.rowKey]);t.removeOperateKey(K),t.restToKeyFormValue(K,{})}}),P()(H()(t),"onSaveRow",function(){var g=f()(r()().mark(function C(O,K){var q,de,ue,ve,Oe,ye,pe;return r()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:if(se.prev=0,q=t.formateKeyToString(O[t.rowKey]),de=t.getToKeyForm(q),!de){se.next=19;break}return se.next=6,de.validateFields();case 6:if(ue=se.sent,ve=!0,typeof t.onBeforeSave=="function"&&(ve=t.onBeforeSave(ue,O,K)),ve){se.next=11;break}return se.abrupt("return");case 11:Oe=T()(t.dataSource||[]),ye=Oe.findIndex(function(je){return q==="".concat(je[t.rowKey])}),ye>-1?(pe=Oe[K],Oe.splice(ye,1,l()(l()({},pe),ue))):Oe.push(ue),t.onSave&&t.onSave(Oe,ue,O,K),t.removeOperateKey(q),de.resetFields(t.fields||[]),se.next=20;break;case 19:h.ZP.warning("\u672A\u83B7\u53D6\u5230\u5F53\u524D form \u5B9E\u4F8B");case 20:se.next=25;break;case 22:se.prev=22,se.t0=se.catch(0),t.onErr&&t.onErr(se.t0);case 25:case"end":return se.stop()}},C,null,[[0,22]])}));return function(C,O){return g.apply(this,arguments)}}()),P()(H()(t),"onRowValuesChange",function(g,C,O,K){if(typeof t.onValuesChange=="function"){var q=t.formateKeyToString(g),de=T()(t.dataSource||[]).map(function(ue){return q===t.formateKeyToString(ue[t.rowKey])?l()(l()({},ue),K):l()({},ue)});t.onValuesChange(de,O,K,g,C)}}),t}return d()(o)}(We.P2),hn=function(n){var o=(0,c.useRef)(null);return o.current||(n?o.current=n:o.current=new tn),o.current},En=(0,c.createContext)(new tn),sn=function(){var n=(0,c.useContext)(En),o=(0,qe.R)(n.store),t=function(L){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ref";g==="none"?n._setStore(L):n._setRefStore(L)},v=o.___temps;return[o,t,n,v]},gn=function(n){var o=n.rowData,t=n.optConfig,v=n.index,m=n.multiple,L=n.isOptDelete,g=n.optDeleteEditingDisabled,C=sn(),O=$()(C,3),K=O[0],q=O[2],de=K.editingKeys,ue=K.newAddKeys,ve=(0,c.useMemo)(function(){return q.isEditing(o)},[de,o]),Oe=(0,c.useMemo)(function(){return q.isAddEdit(o)},[ue,o]),ye=(de||[]).length;return t&&t.render?t.render(o,o,v):ve?(0,s.jsxs)("span",{children:[(0,s.jsx)(B.Z.Link,{onClick:function(){return q.onSaveRow(o,v)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,s.jsx)(a.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return Oe?q.onDeleteRow(o,v):q.onEditCancel(o,v)},children:(0,s.jsx)(B.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,s.jsxs)(R.Z,{children:[(0,s.jsx)(B.Z.Link,{disabled:!!ye&&!m,onClick:function(){return q.onEditRow(o,v)},children:"\u7F16\u8F91"}),L&&(0,s.jsx)(a.Z,{disabled:g&&!!ye,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return q.onDeleteRow(o,v)},children:(0,s.jsx)(B.Z.Link,{disabled:g&&!!ye,children:"\u5220\u9664"})})]})},cn=function(n){var o=n.optConfig;return[l()(l()({title:"\u64CD\u4F5C",align:"center",width:120},o),{},{render:function(v,m,L){return(0,s.jsx)(gn,l()(l()({},n),{},{value:v,index:L,rowData:m}))}})]},_n=cn,Ln=N.default.RangePicker;function Gn(E,n){if(E.length){var o=E.join("_");return n?"".concat(n,"_").concat(o):o}}function Kn(E){return E===void 0||E===!1?[]:Array.isArray(E)?E:[E]}var Tn=function(n){var o=n.attr,t=n.type,v=n.inputNode,m;if(t==="Input"){var L=o;m=(0,s.jsx)(Q.Z,l()({},L))}else if(t==="TextArea"){var g=o;m=(0,s.jsx)(Q.Z.TextArea,l()({},g))}else if(t==="InputNumber"){var C=o;m=(0,s.jsx)(le.Z,l()({},C))}else if(t==="AutoComplete"){var O=o;m=(0,s.jsx)(M.Z,l()({},O))}else if(t==="Cascader"){var K=o;m=(0,s.jsx)(_e.Z,l()({},K))}else if(t==="DatePicker"){var q=o;m=(0,s.jsx)(N.default,l()({},q))}else if(t==="Rate"){var de=o;m=(0,s.jsx)(Ve.Z,l()({},de))}else if(t==="Slider"){var ue=o;m=(0,s.jsx)(Ne.Z,l()({},ue))}else if(t==="TreeSelect"){var ve=o;m=(0,s.jsx)(Fe.Z,l()({},ve))}else if(t==="Select"){var Oe=o;m=(0,s.jsx)(ze.default,l()({},Oe))}else if(t==="Checkbox"){var ye=o;m=(0,s.jsx)(Xe.Z.Group,l()({},ye))}else if(t==="Mentions"){var pe=o;m=(0,s.jsx)(Je.Z,l()({},pe))}else if(t==="Radio"){var ce=o;m=(0,s.jsx)(Pe.ZP.Group,l()({},ce))}else if(t==="Switch"){var se=o;m=(0,s.jsx)(Ae.Z,l()({},se))}else if(t==="TimePicker"){var je=o;m=(0,s.jsx)(Te.Z,l()({},je))}else if(t==="Upload"){var $e=o;m=(0,s.jsx)(X.Z,l()({},$e))}else if(t==="RangePicker"){var me=o;m=(0,s.jsx)(Ln,l()({},me))}else t==="Custom"&&(m=v);return m},yn=["dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","isList","listAttr"],ln=["name","rules","preName","itemValue","children","tipAttr","tip"],Xn=c.memo(function(E){var n=E.dataIndex,o=E.title,t=E.record,v=E.index,m=E.inputNode,L=E.rules,g=E.children,C=E.itemAttr,O=E.type,K=E.attr,q=E.tip,de=E.tipAttr,ue=E.isList,ve=E.listAttr,Oe=ve===void 0?{}:ve,ye=w()(E,yn),pe=sn(),ce=$()(pe,3),se=ce[0],je=ce[2],$e=je.rowKey,me=(0,c.useMemo)(function(){return t?je.isEditing(t):!1},[se.editingKeys,t]),ke=Tn({attr:K,type:O,inputNode:m}),mn=function(){return ue&&typeof m=="function"?(0,s.jsx)(x.ZP.List,l()(l()({},Oe),{},{name:n,children:function(an,rn,un){return m(an.map(function(dn){return l()(l()({},dn),{},{fieldKey:dn.key})}),rn,un)}})):(0,s.jsx)(kn,l()(l()({},C),{},{name:n,rules:L,preName:t[$e],itemValue:t,children:ke,tipAttr:de,tip:q}))};return(0,s.jsx)("td",l()(l()({},ye),{},{children:me?mn():g}))}),kn=function(n){var o=n.name,t=n.rules,v=n.preName,m=v===void 0?"":v,L=n.itemValue,g=n.children,C=n.tipAttr,O=C===void 0?{}:C,K=n.tip,q=w()(n,ln);return(0,s.jsx)(x.ZP.Field,l()(l()({},q),{},{name:o,rules:t,children:function(ue,ve,Oe){var ye=Kn(o).length&&ve?ve.name:[],pe=Gn(ye,m),ce=function(me){var ke=me;me&&me.target&&(ke=me.target.value),ue.onChange(ke)},se=typeof g=="function"?g(l()(l()({},ue),{},{id:pe}),ve,Oe,{record:L}):c.isValidElement(g)?c.cloneElement(g,l()(l()({},ue),{},{onChange:ce,id:pe})):g,je=ve.errors.map(function($e){return $e}).join(",");return(0,s.jsx)(D.Z,l()(l()({color:"#fff",overlayInnerStyle:{color:"red"}},O),{},{title:K?K(je):je,open:!!ve.errors.length,children:se}))}}))},nt=Xn,tt=c.memo(function(E){var n=x.ZP.useForm(),o=$()(n,1),t=o[0],v=sn(),m=$()(v,3),L=m[2];c.useEffect(function(){return function(){return L.remove("".concat(E["data-row-key"]))}},[]),L.register("".concat(E["data-row-key"]),t);var g=(L.dataSource||[]).find(function(C){return"".concat(C[L.rowKey])==="".concat(E["data-row-key"])});return(0,s.jsx)(x.ZP,{onValuesChange:L.onRowValuesChange.bind(void 0,"".concat(E["data-row-key"]),t),form:t,name:"".concat(E["data-row-key"]),component:!1,initialValues:g||{},children:(0,s.jsx)("tr",l()({},E))})}),at=tt,rt=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","editInstance","optDeleteEditingDisabled","onBeforeEdit","onBeforeEditCancel","onBeforeDelete"],Qe=function(n){var o=n.columns,t=n.dataSource,v=t===void 0?[]:t,m=n.onBeforeSave,L=n.onSave,g=n.rowKey,C=g===void 0?"id":g,O=n.optIsFirst,K=O===void 0?!1:O,q=n.optConfig,de=n.isOptDelete,ue=de===void 0?!1:de,ve=n.initValue,Oe=ve===void 0?{}:ve,ye=n.onValuesChange,pe=n.isAdd,ce=n.onErr,se=n.multiple,je=se===void 0?!1:se,$e=n.onBeforeAdd,me=n.isOpt,ke=me===void 0?!0:me,mn=n.addBtnProps,fn=mn===void 0?{}:mn,Pn=n.editInstance,an=n.optDeleteEditingDisabled,rn=an===void 0?!1:an,un=n.onBeforeEdit,dn=n.onBeforeEditCancel,Rn=n.onBeforeDelete,On=w()(n,rt),xn=c.useMemo(function(){return o.filter(function(we){return we.editable}).map(function(we){return we.dataIndex})},[o]),He=hn(Pn);He.dataSource=v,He.initValue=Oe,He.rowKey=C,He.onSave=L,He.onBeforeAdd=$e,He.multiple=je,He.onErr=ce,He.fields=xn,He.onValuesChange=ye,He.onBeforeSave=m,He.onBeforeEdit=un,He.onBeforeEditCancel=dn,He.onBeforeDelete=Rn;var pn=ke&&_n({optConfig:q,isOptDelete:ue,multiple:je,optDeleteEditingDisabled:rn})||[],Cn=K?pn.concat(o):o.concat(pn),vn=Cn.map(function(we){return we.editable?l()(l()({},we),{},{onCell:function(Ge){return{record:Ge,dataIndex:we.dataIndex,title:we.title,inputNode:we.inputNode,rules:we.rules||[],itemAttr:we.itemAttr,type:we.type,attr:we.attr,tip:we.tip,tipAttr:we.tipAttr,isList:we.isList,listAttr:we.listAttr}}}):we});return(0,s.jsx)(c.Fragment,{children:(0,s.jsxs)(En.Provider,{value:He,children:[(0,s.jsx)(j.Z,l()(l()({size:"small",bordered:!0},On),{},{components:{body:{row:at,cell:nt}},rowKey:C,dataSource:v,columns:vn,rowClassName:"editable-row",pagination:!1})),pe&&(0,s.jsx)(p.ZP,l()(l()({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},fn||{}),{},{style:l()({marginTop:10},(fn||{}).style||{}),onClick:He.onAddRow}))]})})};Qe.useEditInstance=hn,Qe.useEditInstanceContext=sn,Qe.Item=kn;var ot=null,lt=oe},29441:function(Ce,I,e){"use strict";e.r(I),e.d(I,{default:function(){return lt}});var F=e(97857),r=e.n(F),b=e(5574),T=e.n(b),A=e(13769),f=e.n(A),y=e(85893),P=e(67294),W=e(22150),l=e(71230),Z=e(15746),$=P.createContext({}),te=function(){return P.useContext($)},w=P.createContext({isFloat:!1,isSetHeight:!1,layout:"horizontal"}),s=function(){return P.useContext(w)},h=e(11950),j=e(45520),p=function(){(0,j.default)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},c=P.createContext({getComponents:p,getStoreState:p,setInitialValues:p,updateValue:p,getItemStore:function(){return{init:p,register:p,getStoreState:p,updateValue:p,getValue:p}}}),B=function(){return P.useContext(c)},a=e(12444),R=e.n(a),ee=e(72004),i=e.n(ee),u=e(9783),d=e.n(u),V=function(){function E(){var n=this;R()(this,E),d()(this,"subForm",{}),d()(this,"subHide",{}),d()(this,"registerId",function(o,t,v){v&&(n.subForm[v]=o,n.subHide[v]=t)}),d()(this,"removeId",function(o){o&&(delete n.subForm[o],delete n.subHide[o])})}return i()(E,[{key:"subForms",get:function(){return this.subForm}},{key:"subHides",get:function(){return this.subHide}}]),E}(),S=function(n){var o=P.useRef();return n?o.current=n:o.current=new V,[o.current]},z=P.createContext(new V),G=function(){return P.useContext(z)},U=function(n){var o=n.form,t=n.subscribe,v=n.name,m=n.hide;v&&t.registerId(o,m,v),P.useEffect(function(){return function(){return t.removeId(v)}},[])},D=function(n){return Array.isArray(n)?n:typeof n=="string"?n.split("_").filter(function(o){return o}):n},x=function(n){var o={};if(n){var t=n.getInternalHooks;o=t(h.ki)}var v=function(g,C){o.dispatch&&o.dispatch({type:"updateValue",namePath:D(g),value:C})},m=function(g){Object.entries(g).forEach(function(C){var O=T()(C,2),K=O[0],q=O[1];v(K,q)})};return r()(r()({},o),{},{updateValue:v,bathUpdateValue:m})},N=function(n){return x(n)},Q=function(n){var o=te(),t=G(),v=B(),m,L=N(o.itemRefHook);if(o){var g=o.watchList;m=g[(n||{}).id]}return P.useEffect(function(){if((o||{}).firstMont){var C=o.itemRefHook.getFieldsValue;typeof m=="function"&&m((n||{}).value,C(!0),r()({},L),v,{forms:t.subForms,hides:t.subHides})}},[JSON.stringify((n||{}).value)]),[L]},le=e(50568),M=e(19632),_e=e.n(M),Ve=e(52677),Ne=e.n(Ve);function Fe(E){return Ne()(E)=="object"&&E!==null&&Object.getPrototypeOf(E)===Object.prototype}function ze(E,n){var o=Array.isArray(E)?_e()(E):r()({},E);return n&&Object.keys(n).forEach(function(t){var v=o[t],m=n[t],L=Fe(v)&&Fe(m);o[t]=L?ze(v,m||{}):m}),o}function Xe(E){for(var n=arguments.length,o=new Array(n>1?n-1:0),t=1;t<n;t++)o[t-1]=arguments[t];return o.reduce(function(v,m){return ze(v,m)},E)}var Je=i()(function E(){var n=this;R()(this,E),d()(this,"store",{}),d()(this,"componentLists",[]),d()(this,"init",function(o){var t=o.props||{},v=t.initialValue;if(v!==void 0){var m=o.getNamePath();m&&(n.store=(0,le.sO)(n.store,m,v))}}),d()(this,"register",function(o){n.componentLists.push(o);var t=o.props||{},v=t.initialValue;return v!==void 0&&o.refresh(),function(){n.componentLists=n.componentLists.filter(function(L){return L!==o});var m=o.getNamePath();m&&(n.store=(0,le.sO)(n.store,m,void 0,!0))}}),d()(this,"getStoreState",function(o){return o?(0,le.NA)(n.store,o):n.store}),d()(this,"getComponents",function(){return n.componentLists}),d()(this,"getStore",function(){return{getComponents:n.getComponents,getStoreState:n.getStoreState,getItemStore:n.getItemStore,setInitialValues:n.setInitialValues,updateValue:n.updateValue,bathUpdateValue:n.bathUpdateValue}}),d()(this,"getItemStore",function(){return{init:n.init,register:n.register,getStoreState:n.getStoreState,updateValue:n.updateValue,getValue:n.getValue,bathUpdateValue:n.bathUpdateValue}}),d()(this,"setInitialValues",function(o,t){t&&(n.store=Xe({},o,n.store))}),d()(this,"getPaths",function(o){return Array.isArray(o)?o:typeof o=="string"?o.split("_").filter(function(t){return t}):[]}),d()(this,"bathUpdateValue",function(o){Object.entries(o).forEach(function(t){var v=T()(t,2),m=v[0],L=v[1],g=n.getPaths(m);n.store=(0,le.sO)(n.store,g,L)}),n.bathNotifyObservers(Object.keys(o))}),d()(this,"updateValue",function(o,t){var v=n.getPaths(o);n.store=(0,le.sO)(n.store,v,t),n.notifyObservers(v)}),d()(this,"getValue",function(o){var t=n.getPaths(o);return(0,le.NA)(n.store,t)}),d()(this,"bathNotifyObservers",function(o){n.componentLists.forEach(function(t){var v=t.refresh,m=t.getNamePath,L=m();o.includes(L.join(""))&&v()})}),d()(this,"notifyObservers",function(o){n.componentLists.forEach(function(t){var v=t.refresh,m=t.getNamePath,L=m();L.join("")===o.join("")&&v()})})}),Pe=function(n){var o=P.useRef();if(!o.current)if(n)o.current=n;else{var t=new Je;o.current=t.getStore()}return[o.current]},Ae=Pe,Te=e(25098),X=e.n(Te),ge=e(31996),ae=e.n(ge),k=e(26037),_=e.n(k),be=function(E){ae()(o,E);var n=_()(o);function o(t){var v;if(R()(this,o),v=n.call(this,t),d()(X()(v),"mounted",!1),d()(X()(v),"cancelRegisterFunc",function(){}),d()(X()(v),"getNamePath",function(){var C=v.props,O=C.name,K=C.formName;return Array.isArray(O)?K&&[K].concat(O)||O:K&&[K,O]||[O]}),d()(X()(v),"refresh",function(){v.mounted&&v.forceUpdate()}),d()(X()(v),"getValue",function(){var C=v.props.hideContent,O=C.getItemStore(),K=O.getValue;return K(v.getNamePath())}),t.hideContent){var m=t.hideContent,L=m.getItemStore(),g=L.init;g(X()(v))}return v}return i()(o,[{key:"componentDidMount",value:function(){var v=this.props.hideContent;if(v){var m=v.getItemStore(),L=m.register;this.cancelRegisterFunc=L(this)}this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.cancelRegisterFunc(),this.mounted=!1}},{key:"render",value:function(){var v=this.props.children;return this.getValue()?(0,y.jsx)(P.Fragment,{}):(0,y.jsx)(P.Fragment,{children:v})}}]),o}(P.Component),Y=function(n){var o=P.useContext(c);return(0,y.jsx)(be,r()(r()({},n),{},{hideContent:o}))},J=e(88760),Ue=e(25278),ne=e(13457),re=e(63960),fe=e(3303),De=e(67002),Le=e(86125),Ie=e(59847),ie=e(34041),he=e(84567),oe=e(11330),Me=e(55742),Re=e(41637),H=e(68351),Ze=e(23799),Se=e(83622),nn=e(48115),Sn=e(80882),We=["children","style"],qe=["children","colProps"],tn=function(n){var o=n.children,t=n.style,v=f()(n,We),m=s(),L=m.isFloat,g=m.isSetHeight,C=m.layout,O={};return L&&(O={float:"left",width:"100%",overflow:"hidden"},g&&(O.height=C==="inline"?54:74)),(0,y.jsx)(Z.Z,r()(r()({span:6},v),{},{style:r()(r()({},O),t||{}),children:o}))},hn=function(n){var o=n.children,t=n.colProps,v=t===void 0?{}:t,m=f()(n,qe);return(0,y.jsx)(tn,r()(r()({},v||{}),{},{children:(0,y.jsx)(ot.Item,r()(r()({},m),{},{children:o}))}))},En=hn,sn=["children"],gn=["children"],cn=["children"],_n=["style","watch","shouldUpdate","dependencies"],Ln=J.default.RangePicker,Gn=function(n,o){return Array.isArray(n)?o&&[o].concat(n).join("_")||n.join("_"):o&&"".concat(o,"_").concat(n)||n},Kn=function(n){var o=n||{},t=o.children,v=f()(o,sn),m=Q(n),L=T()(m,1),g=L[0];return typeof t=="function"?t(r()(r()({},v),{},{childProps:g})):P.isValidElement(t)?P.cloneElement(t,r()({},v)):t},Tn=function(n){var o=n.children,t=f()(n,gn);return(0,y.jsx)(W.Z.Item,r()(r()({},t),{},{children:(0,y.jsx)(Kn,{children:o})}))},yn=function(n){var o=n.children,t=f()(n,cn);return(0,y.jsx)(En,r()(r()({},t),{},{children:(0,y.jsx)(Kn,{children:o})}))},ln=function(n,o){var t=o.colProps,v=t===void 0?{}:t,m=o.itemStyle,L=m===void 0?{}:m,g=o.attrStyle,C=g===void 0?{}:g,O=o.attrProps,K=O===void 0?{}:O,q=o.watchList,de=o.name,ue=o.layout,ve=o.isFloat,Oe=o.isSetHeight;return n.map(function(ye,pe){var ce=ye.type,se=ye.label,je=ye.name,$e=ye.itemAttr,me=ye.attr,ke=ye.rules,mn=ye.render,fn=ye.isItemList,Pn=ye.isHide,an=ye.colProps,rn=an===void 0?{}:an,un={};ve&&(un={float:"left",width:"100%",overflow:"hidden"},Oe&&(un.height=ue==="inline"?54:74));var dn=$e||{},Rn=dn.style,On=Rn===void 0?{}:Rn,xn=dn.watch,He=xn===void 0?!0:xn,pn=dn.shouldUpdate,Cn=dn.dependencies,vn=f()(dn,_n),we=me||{},An=we.style,Ge=An===void 0?{}:An,Ke;if(ce==="Input"){var Vn=me,Dn=K;Ke=(0,y.jsx)(Ue.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(se)},Dn),Vn),{},{style:r()(r()({},C),Ge)}))}else if(ce==="TextArea"){var Qn=me,Nn=K;Ke=(0,y.jsx)(Ue.Z.TextArea,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(se)},Nn),Qn),{},{style:r()(r()({},C),Ge)}))}else if(ce==="InputNumber"){var Wn=me,Bn=K;Ke=(0,y.jsx)(ne.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(se)},Bn),Wn),{},{style:r()(r()({width:"100%"},C),Ge)}))}else if(ce==="AutoComplete"){var Un=me,$n=K;Ke=(0,y.jsx)(re.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(se)},$n),Un),{},{style:r()(r()({},C),Ge)}))}else if(ce==="Cascader"){var Fn=me,Zn=K;Ke=(0,y.jsx)(fe.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(se)},Zn),Fn),{},{style:r()(r()({},C),Ge)}))}else if(ce==="DatePicker"){var Hn=me,jn=K;Ke=(0,y.jsx)(J.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(se)},jn),Hn),{},{style:r()(r()({width:"100%"},C),Ge)}))}else if(ce==="Rate"){var wn=me,Jn=K;Ke=(0,y.jsx)(De.Z,r()(r()(r()({},Jn),wn),{},{style:r()(r()({},C),Ge)}))}else if(ce==="Slider"){var Yn=me,Mn=K;Ke=(0,y.jsx)(Le.Z,r()(r()(r()({},Mn),Yn),{},{style:r()(r()({},C),Ge)}))}else if(ce==="TreeSelect"){var Ee=me,xe=K;Ke=(0,y.jsx)(Ie.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(se)},xe),Ee),{},{style:r()(r()({},C),Ge)}))}else if(ce==="Select"){var Be=me,Ye=K;Ke=(0,y.jsx)(ie.default,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(se)},Ye),Be),{},{style:r()(r()({},C),Ge)}))}else if(ce==="Checkbox"){var en=me,bn=K;Ke=(0,y.jsx)(he.Z.Group,r()(r()(r()({},bn),en),{},{style:r()(r()({},C),Ge)}))}else if(ce==="Mentions"){var In=me,zn=K;Ke=(0,y.jsx)(oe.Z,r()(r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat(se)},zn),In),{},{style:r()(r()({},C),Ge)}))}else if(ce==="Radio"){var qn=me,st=K;Ke=(0,y.jsx)(Me.ZP.Group,r()(r()(r()({},st),qn),{},{style:r()(r()({},C),Ge)}))}else if(ce==="Switch"){var on=me,dt=K;Ke=(0,y.jsx)(Re.Z,r()(r()(r()({},dt),on),{},{style:r()(r()({},C),Ge)}))}else if(ce==="TimePicker"){var it=me,ut=K;Ke=(0,y.jsx)(H.Z,r()(r()(r()({placeholder:"\u8BF7\u9009\u62E9".concat(se)},ut),it),{},{style:r()(r()({width:"100%"},C),Ge)}))}else if(ce==="Upload"){var ct=me,mt=K;Ke=(0,y.jsx)(Ze.Z,r()(r()(r()({},mt),ct),{},{style:r()(r()({},C),Ge)}))}else if(ce==="RangePicker"){var ft=me,pt=K;Ke=(0,y.jsx)(J.default.RangePicker,r()(r()(r()({},pt),ft),{},{style:r()(r()({width:"100%"},C),Ge)}))}else ce==="Custom"&&(Ke=mn);if(fn){var vt=Ke,It=je;return(0,y.jsx)(Z.Z,r()(r()(r()({span:6},v||{}),rn||{}),{},{style:r()(r()(r()({},un),{},{height:"auto",overflow:"auto"},(v||{}).style||{}),(rn||{}).style||{}),children:(0,y.jsx)(W.Z.List,r()(r()({},$e),{},{name:It,children:vt}),pe)}),pe)}q&&Object.keys(q).length&&He&&q[Gn(je,de)]&&(Ke=(0,y.jsx)(Kn,{children:Ke},pe));var et={};return pn?et.shouldUpdate=pn:!pn&&Cn?et.dependencies=Cn:!pn&&!Cn&&typeof Ke=="function"&&(et.dependencies=[je]),Ke=(0,y.jsx)(Z.Z,r()(r()(r()({span:6},v||{}),rn||{}),{},{style:r()(r()(r()({},un),(v||{}).style||{}),(rn||{}).style||{}),children:(0,y.jsx)(W.Z.Item,r()(r()(r()({},et),vn),{},{name:je,label:se,rules:ke,style:r()(r()({marginBottom:8},L),On),children:Ke}))}),pe),Pn&&je?(0,y.jsx)(Y,{name:je,formName:de,children:Ke},pe):Ke})},Xn=function(n){var o=n.onRest,t=n.setExpand,v=n.expand,m=n.displayPre,L=n.searchBtnItem,g=L===void 0?{}:L,C=n.searchBtnProps,O=C===void 0?{}:C,K=n.searchBtnRestProps,q=K===void 0?{}:K,de=n.itemStyle,ue=de===void 0?{}:de,ve=g||{},Oe=ve.style,ye=Oe===void 0?{}:Oe;return(0,y.jsxs)(W.Z.Item,r()(r()({label:" "},g),{},{style:r()(r()({marginBottom:8},ue),ye),children:[(0,y.jsx)(Se.ZP,r()(r()({type:"primary",htmlType:"submit"},O),{},{children:"\u67E5\u8BE2"})),(0,y.jsx)(Se.ZP,r()(r()({style:{margin:"0 8px"},onClick:o},q),{},{children:"\u91CD\u7F6E"})),!!m&&(0,y.jsx)("a",{style:{fontSize:12},onClick:function(){return t(!v)},children:v?(0,y.jsx)(P.Fragment,{children:(0,y.jsx)(nn.Z,{})}):(0,y.jsx)(P.Fragment,{children:(0,y.jsx)(Sn.Z,{})})})]}))},kn=e(93967),nt=e.n(kn),tt=["config","isSearch","displayPre","searchBtnItem","searchBtnProps","searchBtnRestProps","onRest","rowProps","colProps","children","className","itemStyle","attrStyle","attrProps","watchList","formHide","initialHide","form","subscribe","layout","isFloat","isSetHeight"],at=function(n,o){var t=n.config,v=t===void 0?[]:t,m=n.isSearch,L=n.displayPre,g=n.searchBtnItem,C=g===void 0?{}:g,O=n.searchBtnProps,K=O===void 0?{}:O,q=n.searchBtnRestProps,de=q===void 0?{}:q,ue=n.onRest,ve=ue===void 0?function(){}:ue,Oe=n.rowProps,ye=Oe===void 0?{}:Oe,pe=n.colProps,ce=pe===void 0?{}:pe,se=n.children,je=n.className,$e=n.itemStyle,me=$e===void 0?{}:$e,ke=n.attrStyle,mn=ke===void 0?{}:ke,fn=n.attrProps,Pn=fn===void 0?{}:fn,an=n.watchList,rn=n.formHide,un=n.initialHide,dn=n.form,Rn=n.subscribe,On=n.layout,xn=On===void 0?"horizontal":On,He=n.isFloat,pn=n.isSetHeight,Cn=f()(n,tt),vn=P.useRef(),we=(0,P.useState)(!1),An=T()(we,2),Ge=An[0],Ke=An[1],Vn=(0,P.useState)(!1),Dn=T()(Vn,2),Qn=Dn[0],Nn=Dn[1],Wn=function(){var Ee={colProps:ce,itemStyle:me,attrStyle:mn,attrProps:Pn,watchList:an,name:n.name,layout:xn,isFloat:He,isSetHeight:pn};if(m&&L&&!Ge){if(L>v.length){var xe=L-v.length,Be=P.Children.toArray(se);if(xe>Be.length)return(0,y.jsxs)(P.Fragment,{children:[ln(v,Ee),Be]});if(xe<=Be.length){var Ye=Be.slice(0,xe);return(0,y.jsxs)(P.Fragment,{children:[ln(v,Ee),Ye]})}return ln(v,Ee)}var en=v.slice(0,L);return ln(en,Ee)}return(0,y.jsxs)(P.Fragment,{children:[ln(v,Ee),se]})},Bn=nt()("carefree-form",je);P.useEffect(function(){var Mn;return clearTimeout(Mn),Mn=setTimeout(function(){Nn(!0)},300),function(){return clearTimeout(Mn)}},[]);var Un=W.Z.useForm(dn),$n=T()(Un,1),Fn=$n[0],Zn=Ae(rn),Hn=T()(Zn,1),jn=Hn[0];P.useMemo(function(){return jn.setInitialValues(un||{},!0)},[]);var wn=S(Rn),Jn=T()(wn,1),Yn=Jn[0];return U({name:n.name,form:Fn,subscribe:Yn,hide:jn}),P.useImperativeHandle(o,function(){return vn.current}),(0,y.jsx)(w.Provider,{value:{isFloat:He,isSetHeight:pn,layout:xn},children:(0,y.jsx)(c.Provider,{value:jn,children:(0,y.jsx)($.Provider,{value:{firstMont:Qn,watchList:an||{},form:Fn,itemRefHook:vn.current},children:(0,y.jsx)(W.Z,r()(r()({},Cn),{},{form:Fn,layout:xn,className:Bn,ref:vn,children:(0,y.jsxs)(l.Z,r()(r()({gutter:24},ye),{},{style:r()(r()({},He?{display:"block",height:"auto",overflow:"hidden"}:{}),(ye||{}).style||{}),children:[Wn(),m&&(0,y.jsx)(Z.Z,r()(r()({span:6},ce),{},{style:r()({float:"left",width:"100%",overflow:"hidden"},(ce||{}).style||{}),children:(0,y.jsx)(Xn,{onRest:ve,expand:Ge,setExpand:Ke,displayPre:L,searchBtnItem:C,searchBtnProps:K,searchBtnRestProps:de,itemStyle:me})}))]}))}))})})})},rt=P.forwardRef(at),Qe=rt;Qe.useForm=W.Z.useForm,Qe.Item=W.Z.Item,Qe.ColItem=En,Qe.ColWatchItem=yn,Qe.Cols=tn,Qe.List=W.Z.List,Qe.Provider=W.Z.Provider,Qe.ItemWatch=Tn,Qe.useFormContext=te,Qe.useFormWatchList=Q,Qe.useChildItemFun=N,Qe.getChildItemFun=x,Qe.useFormItemHide=Ae,Qe.HideItem=Y,Qe.useSubscribe=S,Qe.FormSubscribeProvider=z,Qe.useFormSubscribeProvider=G,Qe.useSubscribeReginsterId=U;var ot=Qe,lt=ot},93251:function(Ce,I,e){"use strict";e.r(I),e.d(I,{default:function(){return ee}});var F=e(97857),r=e.n(F),b=e(9783),T=e.n(b),A=e(5574),f=e.n(A),y=e(13769),P=e.n(y),W=e(85893),l=e(55241),Z=e(34041),$=e(57381),te=e(96486),w=e(67294),s=e(3929),h=["value","width","onClick","mode","labelInValue","ValueField"],j=function(u,d,V,S,z){if(["tags","multiple"].includes(V)&&Array.isArray(d)){var G=d.find(function(U){return S&&U?U[z]===u[z]:U===d});if(G)return!0}else return S&&d?d[z]===u[z]:d===u[z];return!1},p=function(u){var d=u.value,V=u.width,S=u.onClick,z=u.mode,G=u.labelInValue,U=u.ValueField,D=P()(u,h),x=w.useCallback(j,[JSON.stringify(d)]),N=function(le){var M=x(le,d,z,G,U);return{onClick:function(){return S(le,!M)},style:M&&{background:"#e6f7ff"}||{}}};return(0,W.jsx)("div",{className:"fuzzy-query-table",children:(0,W.jsx)(s.Z,r()({rowKey:U,onRow:N,size:"small",pagination:!1,style:{width:V},scroll:{y:300},columns:[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}]},D))})},c=["onChange","labelInValue","columns","request","debounceTimeout","tipWidth","fieldNames"],B=[{dataIndex:"label",title:"\u540D\u79F0"},{dataIndex:"value",title:"\u7F16\u53F7"}],a=function(u){var d=u.onChange,V=u.labelInValue,S=V===void 0?!0:V,z=u.columns,G=z===void 0?B:z,U=u.request,D=u.debounceTimeout,x=D===void 0?800:D,N=u.tipWidth,Q=u.fieldNames,le=P()(u,c),M=w.useState(0),_e=f()(M,2),Ve=_e[0],Ne=_e[1],Fe=w.useState(!1),ze=f()(Fe,2),Xe=ze[0],Je=ze[1],Pe=w.useState(!1),Ae=f()(Pe,2),Te=Ae[0],X=Ae[1],ge=w.useState([]),ae=f()(ge,2),k=ae[0],_=ae[1],be=w.useRef(!0),Y=w.useMemo(function(){return u.fieldNames&&u.fieldNames.value||"value"},[u.fieldNames]),J=w.useMemo(function(){return u.fieldNames&&u.fieldNames.label||"label"},[u.fieldNames]),Ue=w.useRef(null);w.useLayoutEffect(function(){if(Ue.current)if(N)Ne(N);else{var he=Ue.current.offsetWidth;Ne(he-30)}},[]);var ne=function(oe){var Me=oe||{},Re=Me[Y],H=Me[J];return T()(T()({},Y,Re),J,H)},re=function(oe,Me){var Re=ne(oe);if(S||(Re=oe&&Re[Y]),["tags","multiple"].includes(u.mode))Re=Array.isArray(u.value)?Me?u.value.concat(Re):u.value.filter(function(H){return S&&H?H[Y]!==Re[Y]:H!==Re}):Me?[Re]:[];else{if(X(!1),!Me){Re=void 0;return}be.current=!1}d&&d(Re,oe)},fe=w.useRef(0),De=w.useMemo(function(){var he=function(Me){if(!be.current){be.current=!0;return}fe.current+=1;var Re=fe.current;U&&(Je(!0),U(Me).then(function(H){Re===fe.current&&(_(H),Je(!1))}).catch(function(){_([]),Je(!1)}))};return(0,te.debounce)(he,x)},[U,x]),Le=function(){var oe=k.map(function(Me){var Re=Me[Y],H=Me[J];return T()(T()({},Y,Re),J,H)});return oe},Ie=function(){if(Array.isArray(u.value)&&S)return u.value.map(function(H){var Ze=H[Y],Se=H[J];return{label:Se,value:Ze}});if(u.value&&!u.mode&&S){var oe=u.value,Me=oe[Y],Re=oe[J];return{label:Re,value:Me}}return u.value},ie=function(oe,Me){var Re=oe;oe&&Array.isArray(oe)&&Array.isArray(u.value)&&(Re=S?u.value.filter(function(H){return!!oe.find(function(Ze){return Ze.value===H[Y]})}):u.value.filter(function(H){return!!oe.find(function(Ze){return Ze===H})})),d&&d(Re,Me)};return(0,W.jsx)(l.Z,{trigger:"click",placement:"bottomLeft",open:Te,onOpenChange:function(oe){X(oe)},content:(0,W.jsx)(p,{columns:G,dataSource:k,value:u.value,width:Ve,mode:u.mode,labelInValue:S,onClick:re,loading:Xe,ValueField:Y}),children:(0,W.jsx)("div",{ref:Ue,className:"popover-select-warp",style:{width:"100%"},children:(0,W.jsx)(Z.default,r()(r()({allowClear:!0,labelInValue:S,filterOption:!1,style:{width:"100%"},onSearch:De,showSearch:!0,fieldNames:Q},le),{},{value:Ie(),notFoundContent:Xe?(0,W.jsx)($.Z,{size:"small"}):null,onChange:ie,options:Le(),dropdownStyle:{display:"none"}}))})})},R=a,ee=R},28209:function(Ce,I,e){"use strict";e.r(I),e.d(I,{default:function(){return ge}});var F=e(5574),r=e.n(F),b=e(85893),T=e(67294),A=e(97857),f=e.n(A),y=e(29441),P=e(13769),W=e.n(P),l=e(12444),Z=e.n(l),$=e(72004),te=e.n($),w=e(9783),s=e.n(w),h=e(72278),j=["search","table"],p=function(){function ae(k){var _=this;Z()(this,ae),s()(this,"store",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),s()(this,"initialValues",{search:{},loading:!1,table:{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}}),s()(this,"components",{}),s()(this,"getStringToArr",function(ne){return ne.split("_")}),s()(this,"getInitValue",function(ne){return(0,h.d9)((0,h.U2)(_.initialValues,_.getStringToArr(ne)),!1)}),s()(this,"getValue",function(ne){return(0,h.U2)(_.store,_.getStringToArr(ne))}),s()(this,"setValue",function(ne,re){return _.store=(0,h.t8)(_.store,_.getStringToArr(ne),re),_.store}),s()(this,"setBatchValue",function(ne){return Object.entries(ne).forEach(function(re){var fe=r()(re,2),De=fe[0],Le=fe[1];_.store=(0,h.t8)(_.store,_.getStringToArr(De),Le)}),_.store}),s()(this,"getStore",function(){return _.store}),s()(this,"registerId",function(ne,re){_.components[ne]=re}),s()(this,"unregister",function(ne,re){delete _.components[ne],ne==="search"?_.setValue(ne,re||_.initialValues.search||{}):ne==="table"?_.setValue(ne,re||_.initialValues.table||{page:1,pageSize:20,total:0,dataSource:[],selectRows:[],selectRowKeys:[]}):_.setValue(ne,re||_.initialValues[ne])}),s()(this,"tableLoading",function(ne){_.setValue("loading",ne),_.updateComponent(["table"])}),s()(this,"updateComponent",function(ne){ne.forEach(function(re){_.components[re]()})});var be=k||{},Y=be.search,J=be.table,Ue=W()(be,j);Y&&this.setValue("search",f()({},Y)),J&&this.setValue("table",f()({},J)),Object.entries(f()({},Ue)).forEach(function(ne){var re=r()(ne,2),fe=re[0],De=re[1];_.setValue(fe,De)}),this.initialValues=(0,h.d9)(k||{},!1)}return te()(ae,[{key:"stores",get:function(){return this.store}}]),ae}(),c=function(k){var _=k.main,be=k.initialValues,Y=T.useRef();return _?Y.current=_:Y.current=new p(be),[Y.current]},B=T.createContext(new p),a=function(){return T.useContext(B)},R=T.createContext({}),ee=function(){return T.useContext(R)},i=e(15009),u=e.n(i),d=e(99289),V=e.n(d),S=e(38018),z=e(11238),G=["requestType","headers","data","module"],U=function(){var ae=V()(u()().mark(function k(_,be){var Y,J,Ue,ne,re,fe,De,Le,Ie,ie;return u()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return Y=be.requestType,J=be.headers,Ue=be.data,ne=be.module,re=W()(be,G),fe=f()({},J||{}),De=Ue,Y==="json"?(fe=f()({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},fe),typeof De!="string"&&(De=JSON.stringify(De))):Y==="form"?(fe=f()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},fe),De=typeof De=="string"?De:S.stringify(De)):fe=f()({Accept:"application/json"},fe),Le=_,ne&&(Ie=/^\//.test(_),Le="/".concat(ne).concat(Ie?"":"/").concat(_)),oe.prev=6,oe.next=9,(0,z.ZP)(Le,f()(f()({requestType:Y,headers:f()({},fe),data:De},re),{},{getResponse:!0}));case 9:return ie=oe.sent,console.log("\u6DFB\u52A0getResponse\u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u6570\u636E,\u53EF\u4F7F\u7528window.RequestResponse\u83B7\u53D6\u8FD4\u56DEresponse--->",ie),window.RequestResponse=ie.response,oe.abrupt("return",ie.data);case 15:throw oe.prev=15,oe.t0=oe.catch(6),oe.t0;case 18:case"end":return oe.stop()}},k,null,[[6,15]])}));return function(_,be){return ae.apply(this,arguments)}}(),D=U,x=function(k,_){return D(k,f()(f()({},_||{}),{},{method:"POST"}))},N=function(k,_){return D(k,f()(f()({},_||{}),{},{method:"GET"}))},Q=function(k,_){return D(k,f()(f()({},_||{}),{},{method:"DELETE"}))},le=function(k,_){return D(k,f()(f()({},_||{}),{},{method:"PUT"}))},M=function(k,_){return D(k,f()(f()({},_||{}),{},{method:"PATCH"}))},_e=function(k,_){return D(k,f()(f()({},_||{}),{},{method:"HEAD"}))},Ve=function(k,_){return D(k,f()(f()({},_||{}),{},{method:"OPTIONS"}))},Ne={POST:x,GET:N,DELETE:Q,PUT:le,PATCH:M,HEAD:_e,OPTIONS:Ve},Fe=function(){var ae=V()(u()().mark(function k(_){var be,Y,J,Ue,ne,re,fe,De,Le,Ie,ie,he,oe,Me,Re,H;return u()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:if(be=_.Api,Y=_.main,J=_.tableConfig,Ue=_.apiName,ne=Y.setBatchValue,re=Y.getValue,fe=Y.tableLoading,De=J||{},Le=De.table,Ie=be[Ue||"table"]||{},Ie.url){Se.next=6;break}return Se.abrupt("return");case 6:if(Se.prev=6,fe(!0),ne({table_page:(Le||{}).page||1,table_pageSize:(Le||{}).page||20}),ie=!0,Ie.before&&(ie=Ie.before(Y)),ie){Se.next=13;break}return Se.abrupt("return",void fe(!1));case 13:return he=f()({page:re("table_page"),pageSize:re("table_pageSize")},re("search")),Ie.requestBefore&&(he=Ie.requestBefore(Y)),Se.next=17,Ne[Ie.method||"GET"]("".concat(Ie.url),f()(f()({},Ie.options||{}),{},{module:Ie.module,data:he})).catch(function(nn){fe(!1)});case 17:oe=Se.sent,Ie.requestAfter?Ie.requestAfter({response:oe,main:Y}):oe&&oe.code===200&&(Me=oe.data||{},Re=Me.rows,H=Me.total,ne({table_dataSource:Re||[],table_total:H||0})),fe(!1),Se.next=25;break;case 22:Se.prev=22,Se.t0=Se.catch(6),fe(!1);case 25:case"end":return Se.stop()}},k,null,[[6,22]])}));return function(_){return ae.apply(this,arguments)}}(),ze=e(4393),Xe=function(){var k=ee(),_=k.search,be=k.tableConfig,Y=k.searchCardProps,J=k.searchHead,Ue=ee(),ne=Ue.Api,re=ne===void 0?{}:ne,fe=a(),De=fe.setValue,Le=fe.registerId,Ie=fe.unregister,ie=fe.getInitValue,he=T.useState(""),oe=r()(he,2),Me=oe[0],Re=oe[1],H=_||{},Ze=H.isSearch,Se=H.initialValues,nn=H.form,Sn=H.apiName,We=y.default.useForm(nn),qe=r()(We,1),tn=qe[0],hn=function(){Re(new Date().getTime().toString())},En=function(cn,_n){De("search",_n)};T.useEffect(function(){Se&&De("search",Se||{})},[]),Le("search",hn),T.useEffect(function(){return function(){return Ie("search",Se)}},[]),T.useEffect(function(){Se&&(Object.entries(Se).forEach(function(gn){var cn=r()(gn,2),_n=cn[0],Ln=cn[1];De("search_".concat(_n),Ln)}),hn())},[]);var sn=T.useMemo(function(){return"bordered"in(Y||{})?Y.bordered:!!J},[!!J,(Y||{}).bordered]);return(0,b.jsx)(ze.Z,f()(f()({title:J&&J(fe)},Y||{}),{},{style:f()({marginBottom:10},(Y||{}).style||{}),bodyStyle:f()({padding:sn?12:0},(Y||{}).bodyStyle||{}),bordered:sn,children:(0,b.jsx)(y.default,f()(f()(f()({form:tn,initialValues:Se||ie("search")||{}},Ze?{onFinish:function(cn){_&&_.onFinish?_.onFinish(cn,fe):Fe({main:fe,tableConfig:be,Api:re,apiName:Sn})},onRest:function(){_&&_.onRest?_.onRest():(De("search",Se||{}),tn.resetFields())}}:{}),_),{},{onValuesChange:En}))}))},Je=Xe,Pe=e(3929),Ae=function(){var k=ee(),_=k.tableConfig,be=k.columns,Y=k.tableCardProps,J=k.Api,Ue=J===void 0?{}:J,ne=k.tableHead,re=a(),fe=re.getValue,De=re.setValue,Le=re.setBatchValue,Ie=re.updateComponent,ie=re.registerId,he=re.unregister,oe=T.useState(""),Me=r()(oe,2),Re=Me[0],H=Me[1],Ze=fe("table"),Se=Ze.page,nn=Ze.pageSize,Sn=Ze.total,We=Ze.dataSource,qe=Ze.selectRowKeys,tn=_||{},hn=tn.pagination,En=tn.rowSelection,sn=tn.table,gn=tn.apiName,cn=function(){H(new Date().getTime().toString())},_n=function(yn,ln){Le({table_page:yn,table_pageSize:ln}),_&&_.pagination&&_.pagination.onChange?_.pagination.onChange(yn,ln,re):Fe({main:re,tableConfig:_,Api:Ue,apiName:gn})},Ln=T.useMemo(function(){return!!(_&&"pagination"in _&&hn===!1)},[JSON.stringify(hn)]);ie("table",cn),T.useEffect(function(){return function(){return he("table",sn)}},[]),T.useEffect(function(){sn&&(Object.entries(sn).forEach(function(Tn){var yn=r()(Tn,2),ln=yn[0],Xn=yn[1];De("table_".concat(ln),Xn)}),cn())},[]);var Gn=T.useMemo(function(){return typeof be=="function"?be(re):be||[]},[be]),Kn=T.useMemo(function(){return"bordered"in(Y||{})?Y.bordered:!!ne},[!!ne,(Y||{}).bordered]);return(0,b.jsx)(ze.Z,f()(f()({},Y||{}),{},{title:ne&&ne(re),bodyStyle:f()({padding:0},(Y||{}).bodyStyle||{}),bordered:Kn,children:(0,b.jsx)(Pe.Z,f()(f()(f()({rowKey:"id",size:"small",bordered:!0,loading:fe("loading")},_),En?{rowSelection:f()(f()({},En),{},{selectedRowKeys:qe,onChange:function(yn,ln){Le({"table.selectRowKeys":yn,"table.selectRows":ln}),Ie(["table"])}})}:{}),{},{dataSource:We,columns:Gn,pagination:!Ln&&f()(f()({},hn||{}),{},{pageSize:nn,total:Sn,current:Se,onChange:_n})}))}))},Te=Ae,X=function(k){var _=c({main:k.main,initialValues:k.initialValues}),be=r()(_,1),Y=be[0];return(0,b.jsx)(B.Provider,{value:Y,children:(0,b.jsxs)(R.Provider,{value:k,children:[(0,b.jsx)(Je,{}),(0,b.jsx)(Te,{})]})})};X.useMain=c;var ge=X},42478:function(Ce,I,e){"use strict";e.r(I),e.d(I,{default:function(){return G}});var F=e(15009),r=e.n(F),b=e(9783),T=e.n(b),A=e(97857),f=e.n(A),y=e(99289),P=e.n(y),W=e(5574),l=e.n(W),Z=e(85893),$=e(67294),te=e(83622),w=e(90814),s=e(96842),h=e(246),j=e(6171),p=e(3929),c=function(D){var x=D.onPageChange,N=D.onSelectedChange,Q=D.selectedKeys,le=D.dataList,M=D.page,_e=D.pageSize,Ve=D.total,Ne=D.loading,Fe=D.rowKey,ze=D.columns;return(0,Z.jsx)(p.Z,{loading:Ne,size:"small",bordered:!0,columns:ze||[],rowKey:Fe||"id",dataSource:le,rowSelection:{selectedRowKeys:Q,onChange:N},pagination:{current:M,pageSize:_e,total:Ve,onChange:x}})},B=function(D){var x=D.leftTable,N=D.rightTable,Q=D.handleOperation;return(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(c,f()({},x))}),(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:80},children:[(0,Z.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"add"),type:"primary",children:(0,Z.jsx)(w.Z,{})}),(0,Z.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"allAdd"),type:"primary",children:(0,Z.jsx)(s.Z,{})}),(0,Z.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"allDelete"),type:"primary",children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)(te.ZP,{style:{margin:"10px 0px"},onClick:Q.bind(void 0,"delete"),type:"primary",children:(0,Z.jsx)(j.Z,{})})]}),(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(c,f()({},N))})]})},a=e(29441),R=function(D){var x=D.leftSearchConfig,N=D.rightSearchConfig,Q=D.onSearch,le=D.onValuesChange;return(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(a.default,f()(f()({layout:"vertical",isSearch:!0,colProps:{span:12}},x),{},{onFinish:function(){return Q("left")},onRest:function(){var _e;(_e=x.form)===null||_e===void 0||_e.resetFields()},onValuesChange:function(_e,Ve){return le(_e,Ve,"left")}}))}),(0,Z.jsx)("div",{style:{width:80}}),(0,Z.jsx)("div",{style:{flex:1},children:(0,Z.jsx)(a.default,f()(f()({isSearch:!0,layout:"vertical",colProps:{span:12}},N),{},{onRest:function(){var _e;(_e=N.form)===null||_e===void 0||_e.resetFields()},onFinish:function(){return Q("right")},onValuesChange:function(_e,Ve){return le(_e,Ve,"right")}}))})]})},ee=e(11238),i=e(12444),u=e.n(i),d=e(72004),V=e.n(d),S=function(){function U(D,x){var N=this;u()(this,U),T()(this,"store",{left:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]},right:{search:{},selectedKeys:[],selectedRows:[],page:1,pageSize:20,total:0,dataList:[]}}),T()(this,"forceUpdate",void 0),T()(this,"setValue",function(Q,le){N.store=f()(f()({},N.store),{},T()({},le,f()(f()({},N.store[le]),Q))),N.forceUpdate&&N.forceUpdate()}),x&&Object.keys(x||{}).length&&Object.entries(x).forEach(function(Q){var le=l()(Q,2),M=le[0],_e=le[1];N.setValue(_e,M)}),this.forceUpdate=D}return V()(U,[{key:"stores",get:function(){return this.store}}]),U}(),z=function(D,x){var N=D.Api,Q=D.leftSearchConfig,le=D.rightSearchConfig,M=D.initValue,_e=D.rowKey,Ve=D.columns,Ne=$.useState({left:!1,right:!1}),Fe=l()(Ne,2),ze=Fe[0],Xe=Fe[1],Je=a.default.useForm(D.leftUseForm),Pe=l()(Je,1),Ae=Pe[0],Te=a.default.useForm(D.rightUseForm),X=l()(Te,1),ge=X[0],ae=$.useState(""),k=l()(ae,2),_=k[0],be=k[1],Y=function(){be(new Date().getTime().toString())},J=$.useMemo(function(){return new S(Y,M)},[]),Ue=function(){var Le=P()(r()().mark(function Ie(ie){var he,oe,Me,Re,H,Ze,Se,nn;return r()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:if(he=N[ie],Xe(function(qe){return f()(f()({},qe),{},T()({},ie,!0))}),We.prev=2,oe=he.url,Me=he.options,Re=he.before,H=he.after,Ze=Re(J.stores.left,ie),Ze!==!1){We.next=7;break}return We.abrupt("return",void Xe(function(qe){return f()(f()({},qe),{},T()({},ie,!1))}));case 7:return We.next=9,(0,ee.ZP)(oe,f()(f()({},Me||{}),{},{data:Ze})).catch(function(qe){Xe(function(tn){return f()(f()({},tn),{},T()({},ie,!1))})});case 9:Se=We.sent,nn=H(Se,ie),nn!==!1&&J.setValue(nn,ie),Xe(function(qe){return f()(f()({},qe),{},T()({},ie,!1))}),We.next=18;break;case 15:We.prev=15,We.t0=We.catch(2),Xe(function(qe){return f()(f()({},qe),{},T()({},ie,!1))});case 18:case"end":return We.stop()}},Ie,null,[[2,15]])}));return function(ie){return Le.apply(this,arguments)}}(),ne=function(Ie,ie,he){J.setValue({selectedKeys:Ie,selectedRows:ie},he)},re=function(Ie,ie,he){J.setValue({page:Ie,pageSize:ie,selectedKeys:[],selectedRows:[]},he),Ue(he)},fe=function(){var Le=P()(r()().mark(function Ie(ie){var he,oe,Me,Re,H,Ze,Se,nn;return r()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:if(he=N[ie],oe=he.url,Me=he.options,Re=he.before,H=he.after,Ze=Re(J.stores[ie],ie),Ze!==!1){We.next=5;break}return We.abrupt("return");case 5:return We.next=7,(0,ee.ZP)(oe,f()(f()({},Me||{}),{},{data:Ze}));case 7:Se=We.sent,nn=H(Se,ie),nn!==!1&&(re(1,J.stores.left.pageSize,"left"),re(1,J.stores.right.pageSize,"right"));case 10:case"end":return We.stop()}},Ie)}));return function(ie){return Le.apply(this,arguments)}}(),De=function(Ie,ie,he){J.setValue({search:ie},he)};return $.useImperativeHandle(x,function(){return{handleOperation:fe,onPageChange:re,onSelectedChange:ne,onSearch:Ue,store:J,forceUpdate:Y,leftUseForm:Ae,rightUseForm:ge}}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(R,{onValuesChange:De,leftSearchConfig:f()(f()({},Q||{}),{},{initialValues:M&&M.left&&M.left.search||{},form:Ae}),rightSearchConfig:f()(f()({},le||{}),{},{initialValues:M&&M.right&&M.right.search||{},form:ge}),onSearch:Ue}),(0,Z.jsx)(B,{handleOperation:fe,leftTable:{rowKey:_e,columns:Ve,page:J.stores.left.page,pageSize:J.stores.left.pageSize,total:J.stores.left.total,dataList:J.stores.left.dataList,selectedKeys:J.stores.left.selectedKeys,loading:ze.left,onSelectedChange:function(Ie,ie){return ne(Ie,ie,"left")},onPageChange:function(Ie,ie){return re(Ie,ie||10,"left")}},rightTable:{rowKey:_e,columns:Ve,page:J.stores.right.page,pageSize:J.stores.right.pageSize,total:J.stores.right.total,dataList:J.stores.right.dataList,selectedKeys:J.stores.right.selectedKeys,loading:ze.right,onSelectedChange:function(Ie,ie){return ne(Ie,ie,"right")},onPageChange:function(Ie,ie){return re(Ie,ie||10,"right")}}})]})},G=$.forwardRef(z)},12755:function(Ce,I,e){"use strict";e.r(I),e.d(I,{default:function(){return R}});var F=e(9783),r=e.n(F),b=e(97857),T=e.n(b),A=e(5574),f=e.n(A),y=e(85893),P=e(67294),W=e(83622),l=e(90814),Z=e(96842),$=e(246),te=e(6171),w=function(i){var u=i.handleOperation;return(0,y.jsxs)(P.Fragment,{children:[(0,y.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"add"),type:"primary",children:(0,y.jsx)(l.Z,{})}),(0,y.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"allAdd"),type:"primary",children:(0,y.jsx)(Z.Z,{})}),(0,y.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"allDelete"),type:"primary",children:(0,y.jsx)($.Z,{})}),(0,y.jsx)(W.ZP,{style:{marginTop:35,width:50},onClick:u.bind(void 0,"delete"),type:"primary",children:(0,y.jsx)(te.Z,{})})]})},s=e(13769),h=e.n(s),j=e(3929),p=["rowSelection","handleSelected","selectedRowKeys","pagination","handlePagination"],c=function(i){var u=i.rowSelection,d=i.handleSelected,V=i.selectedRowKeys,S=i.pagination,z=i.handlePagination,G=h()(i,p),U={pagination:{pageSize:10}};return Reflect.has(i,"pagination")&&(typeof S!="boolean"?U.pagination=T()(T()({},S),{},{onChange:z}):U.pagination=S),(0,y.jsx)(j.Z,T()(T()(T()({size:"small"},G),U),{},{rowSelection:T()(T()({},u||{}),{},{selectedRowKeys:V,onChange:d})}))},B=function(i,u,d){var V=[],S=[],z=[],G=[],U;if(i==="delete"){V=u.rightList.filter(function(N){return!u.rightSelected.selectedRowKeys.includes(N[d])});var D=u.rightList.filter(function(N){var Q=u.rightSelected.selectedRowKeys.includes(N[d]),le=u.leftList.find(function(M){return M[d]===N[d]});return!!(Q&&!le)});S=D.concat(u.leftList),z=u.rightSelected.selectedRowKeys,G=u.rightSelected.selectedRows,U="right"}else if(i==="allDelete")V=[],u.rightList.forEach(function(N){var Q=u.leftList.find(function(le){return le[d]===N[d]});Q||S.push(N)}),S=S.concat(u.leftList),U="right";else if(i==="add"){var x=u.leftList.filter(function(N){var Q=u.leftSelected.selectedRowKeys.includes(N[d]),le=u.rightList.find(function(M){return M[d]===N[d]});return!!(Q&&!le)});V=x.concat(u.rightList),S=u.leftList.filter(function(N){return!u.leftSelected.selectedRowKeys.includes(N[d])}),z=u.leftSelected.selectedRowKeys,G=u.leftSelected.selectedRows,U="left"}else i==="allAdd"&&(u.leftList.forEach(function(N){var Q=u.rightList.find(function(le){return le[d]===N[d]});Q||V.push(N)}),S=[],V=V.concat(u.rightList),U="left");return{leftList:S,rightList:V,selectedKeys:z,selectedRows:G,selectedType:U}},a=function(i,u){var d=i.leftSelected,V=i.rightSelected,S=i.columns,z=i.rowKey,G=i.leftConfig,U=i.rightConfig,D=i.pagination,x=i.leftDataSource,N=i.rightDataSource,Q=i.isQuote,le=Q===void 0?!0:Q,M=P.useState({leftSelected:{selectedRowKeys:[],selectedRows:[]},rightSelected:{selectedRowKeys:[],selectedRows:[]},leftPagination:{page:1,pageSize:10},rightPagination:{page:1,pageSize:10},leftList:x||[],rightList:N||[]}),_e=f()(M,2),Ve=_e[0],Ne=_e[1],Fe=Ve;d&&d.selectedRowKeys&&(Fe.leftSelected=d),V&&V.selectedRowKeys&&(Fe.rightSelected=d),x&&!le&&(Fe.leftList=x),N&&!le&&(Fe.rightList=N);var ze=function(Te){var X={pageSize:10};return Reflect.has(i,"pagination")&&(X=D),Reflect.has(Te||{},"pagination")&&(X=typeof Te.pagination=="boolean"||typeof D=="boolean"?Te.pagination:T()(T()({},D||{}),Te.pagination||{})),X},Xe=function(Te,X,ge){Reflect.has(i,"handleSelected")&&i.handleSelected(Te,X,ge),Ne(function(ae){return T()(T()({},ae),{},r()({},"".concat(ge,"Selected"),{selectedRowKeys:Te,selectedRows:X}))})},Je=function(Te,X,ge){Reflect.has(i,"handlePagination")&&i.handlePagination(Te,X,ge),Ne(function(ae){return T()(T()({},ae),{},r()({},"".concat(ge,"Pagination"),{page:Te,pageSize:X}))}),Xe([],[],ge)},Pe=function(Te){var X=B(Te,Fe,z),ge=X.leftList,ae=X.rightList,k=X.selectedKeys,_=X.selectedRows,be=X.selectedType;Reflect.has(i,"handleOperation")&&i.handleOperation(ge,ae,k,_,Te),Ne(function(Y){return T()(T()({},Y),{},r()(r()(r()({},"".concat(be,"Selected"),{selectedRowKeys:[],selectedRows:[]}),"rightList",ae),"leftList",ge))})};return P.useImperativeHandle(u,function(){return{store:Fe,setStore:Ne,handleSelected:Xe,handlePagination:Je,handleOperation:Pe}}),(0,y.jsxs)("div",{className:"carefree-antd-transfer",children:[(0,y.jsx)(c,T()(T()({},G||{}),{},{pagination:ze(G),dataSource:Fe.leftList,className:"between-table",selectedRowKeys:Ve.leftSelected.selectedRowKeys,handlePagination:function(Te,X){return Je(Te,X,"left")},handleSelected:function(Te,X){return Xe(Te,X,"left")},columns:S,rowKey:z})),(0,y.jsx)("div",{className:"middle-btn",children:(0,y.jsx)(w,{handleOperation:Pe})}),(0,y.jsx)(c,T()(T()({},U||{}),{},{pagination:ze(U),dataSource:Fe.rightList,className:"between-table",selectedRowKeys:Ve.rightSelected.selectedRowKeys,handlePagination:function(Te,X){return Je(Te,X,"right")},handleSelected:function(Te,X){return Xe(Te,X,"right")},columns:S,rowKey:z}))]})},R=P.forwardRef(a)},98103:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return a}});var r=e(15009),b=e.n(r),T=e(97857),A=e.n(T),f=e(13769),y=e.n(f),P=e(5574),W=e.n(P),l=e(49677),Z=e.n(l),$=e(99289),te=e.n($),w=e(67294),s=e(81158),h=e(22383),j=e(90359),p=e(79398),c=e(59340),B=["key","name","fieldKey"],a={"edit-table-base-demo-0":{component:w.memo(w.lazy(te()(b()().mark(function R(){var ee,i,u,d,V,S,z,G,U,D,x,N,Q;return b()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return ee=M.sent,i=ee.PlusOutlined,M.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return u=M.sent,d=u.Button,V=u.Form,S=u.Input,z=u.InputNumber,M.t0=Z(),M.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return M.t1=M.sent,(0,M.t0)(M.t1),M.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return G=M.sent,U=G.EditableTableBase,M.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(D=M.sent,x=D.default,N=[],Q=0;Q<5;Q++)N.push({key:Q.toString(),name:"Edrward ".concat(Q),age:32});return M.abrupt("return",{default:function(){var Ve=x.useState(N),Ne=W()(Ve,2),Fe=Ne[0],ze=Ne[1],Xe=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Je=W()(Xe,2),Pe=Je[0],Ae=Je[1],Te=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(ge){return x.createElement(S,ge)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(ge){return ge&&(ge||[]).filter(function(ae){return ae}).map(function(ae){return ae.first}).join(",")},inputNode:function(ge,ae,k){var _=ae.add,be=ae.remove,Y=k.errors;return x.createElement(x.Fragment,null,ge.map(function(J,Ue){var ne=J.key,re=J.name,fe=J.fieldKey,De=y()(J,B);return x.createElement(EditTable.Item,A()(A()({key:ne},De),{},{name:[re,"first"],fieldKey:[fe,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(S,{placeholder:"First Name"}))}),x.createElement(V.Item,null,x.createElement(d,{type:"dashed",onClick:function(){return _()},icon:x.createElement(i,null)},"Add field"),x.createElement(V.ErrorList,{errors:Y})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(z,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",Fe),x.createElement("div",null,x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{isOptDelete:!Pe.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{optDeleteEditingDisabled:!Pe.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{isAdd:!Pe.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{multiple:!Pe.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{optIsFirst:!Pe.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{isOpt:!Pe.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(U,A()({initValue:{address:2193},onValuesChange:function(ge,ae,k,_,be){ze(ge)},rowKey:"key",optIsFirst:!0,dataSource:Fe,columns:Te,onSave:function(ge){return ze(ge)},isAdd:!0},Pe)))}});case 27:case"end":return M.stop()}},R)})))),asset:{type:"BLOCK",id:"edit-table-base-demo-0",refAtomIds:["edit-table-base"],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:j,"antd/dist/reset.css":p,"carefree-antd-edit-table":c,react:F||(F=e.t(w,2))},renderOpts:{compile:function(){var R=te()(b()().mark(function i(){var u,d=arguments;return b()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,e.e(19).then(e.bind(e,4019));case 2:return S.abrupt("return",(u=S.sent).default.apply(u,d));case 3:case"end":return S.stop()}},i)}));function ee(){return R.apply(this,arguments)}return ee}()}}}},70299:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return a}});var r=e(15009),b=e.n(r),T=e(97857),A=e.n(T),f=e(13769),y=e.n(f),P=e(5574),W=e.n(P),l=e(49677),Z=e.n(l),$=e(99289),te=e.n($),w=e(67294),s=e(76070),h=e(22383),j=e(90359),p=e(79398),c=e(59340),B=["key","name","fieldKey"],a={"packages-edit-table-src-demo-0":{component:w.memo(w.lazy(te()(b()().mark(function R(){var ee,i,u,d,V,S,z,G,U,D,x,N,Q;return b()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,22383));case 2:return ee=M.sent,i=ee.PlusOutlined,M.next=6,Promise.resolve().then(e.bind(e,90359));case 6:return u=M.sent,d=u.Button,V=u.Form,S=u.Input,z=u.InputNumber,M.t0=Z(),M.next=14,Promise.resolve().then(e.bind(e,79398));case 14:return M.t1=M.sent,(0,M.t0)(M.t1),M.next=18,Promise.resolve().then(e.bind(e,59340));case 18:return G=M.sent,U=G.default,M.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:for(D=M.sent,x=D.default,N=[],Q=0;Q<5;Q++)N.push({key:Q.toString(),name:"Edrward ".concat(Q),age:32});return M.abrupt("return",{default:function(){var Ve=x.useState(N),Ne=W()(Ve,2),Fe=Ne[0],ze=Ne[1],Xe=x.useState({isAdd:!0,isOpt:!0,optIsFirst:!0,optDeleteEditingDisabled:!1}),Je=W()(Xe,2),Pe=Je[0],Ae=Je[1],Te=[{title:"name",dataIndex:"name",width:"15%",editable:!0,type:"Custom",inputNode:function(ge){return x.createElement(S,ge)}},{title:"isList",dataIndex:"list",width:"15%",editable:!0,type:"Custom",isList:!0,render:function(ge){return ge&&(ge||[]).filter(function(ae){return ae}).map(function(ae){return ae.first}).join(",")},inputNode:function(ge,ae,k){var _=ae.add,be=ae.remove,Y=k.errors;return x.createElement(x.Fragment,null,ge.map(function(J,Ue){var ne=J.key,re=J.name,fe=J.fieldKey,De=y()(J,B);return x.createElement(U.Item,A()(A()({key:ne},De),{},{name:[re,"first"],fieldKey:[fe,"first"],rules:[{required:!0,whitespace:!0,message:"Missing first name"}]}),x.createElement(S,{placeholder:"First Name"}))}),x.createElement(V.Item,null,x.createElement(d,{type:"dashed",onClick:function(){return _()},icon:x.createElement(i,null)},"Add field"),x.createElement(V.ErrorList,{errors:Y})))}},{title:"age",dataIndex:"age",width:"15%",editable:!0,type:"Custom",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],inputNode:x.createElement(z,null)},{title:"age1",dataIndex:"age1",width:"15%",editable:!0,type:"AutoComplete",attr:{style:{width:"100%"},options:[{label:"12",value:"12"},{label:"1233",value:"1233"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"age2",dataIndex:"age2",width:"15%",editable:!0,type:"Select",attr:{style:{width:"100%"},showSearch:!0,options:[{label:12,value:12},{label:14,value:14}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{title:"address",dataIndex:"address",width:"20%",editable:!0,type:"Input"}];return console.log("data--->",Fe),x.createElement("div",null,x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{isOptDelete:!Pe.isOptDelete}))}},"\u5220\u9664\u6309\u94AE"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{optDeleteEditingDisabled:!Pe.optDeleteEditingDisabled}))}},"\u5220\u9664\u6309\u94AE\u7F16\u8F91\u7981\u7528"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{isAdd:!Pe.isAdd}))}},"\u65B0\u589E\u6309\u94AE"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{multiple:!Pe.multiple}))}},"\u591A\u884C\u7F16\u8F91"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{optIsFirst:!Pe.optIsFirst}))}},"\u64CD\u4F5C\u5217\u524D\u6216\u540E"),x.createElement(d,{onClick:function(){Ae(A()(A()({},Pe),{},{isOpt:!Pe.isOpt}))}},"\u65E0\u64CD\u4F5C\u5217"),x.createElement(U,A()({initValue:{address:2193},onValuesChange:function(ge,ae,k,_,be){ze(ge)},rowKey:"key",optIsFirst:!0,dataSource:Fe,columns:Te,onSave:function(ge){return ze(ge)},isAdd:!0},Pe)))}});case 27:case"end":return M.stop()}},R)})))),asset:{type:"BLOCK",id:"packages-edit-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { PlusOutlined } from '@ant-design/icons';
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
};`},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-edit-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,antd:j,"antd/dist/reset.css":p,"carefree-antd-edit-table":c,react:F||(F=e.t(w,2))},renderOpts:{compile:function(){var R=te()(b()().mark(function i(){var u,d=arguments;return b()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,e.e(19).then(e.bind(e,4019));case 2:return S.abrupt("return",(u=S.sent).default.apply(u,d));case 3:case"end":return S.stop()}},i)}));function ee(){return R.apply(this,arguments)}return ee}()}}}},56395:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return w}});var r=e(15009),b=e.n(r),T=e(5574),A=e.n(T),f=e(49677),y=e.n(f),P=e(99289),W=e.n(P),l=e(67294),Z=e(44097),$=e(79398),te=e(29441),w={"packages-form-src-md-hide-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,initialHide:{name1:!0},onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-1":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,initialHide:{name1:!0},onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,G){V==="12"?G.updateValue("name1",!1):G.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-hide-demo-2":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0],d=j.useFormItemHide(),V=A()(d,1),S=V[0];return c.useMemo(function(){return S.setInitialValues({name1:!0},!0)},[]),c.createElement("div",null,c.createElement(j,{formHide:S,form:u,onValuesChange:function(G,U){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",U)},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-hide-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},13305:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return j}});var r=e(97857),b=e.n(r),T=e(15009),A=e.n(T),f=e(5574),y=e.n(f),P=e(49677),W=e.n(P),l=e(99289),Z=e.n(l),$=e(67294),te=e(29434),w=e(90359),s=e(79398),h=e(29441),j={"packages-form-src-md-start-demo-0":{component:$.memo($.lazy(Z()(A()().mark(function p(){var c,B,a,R,ee,i;return A()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=d.sent,B=c.Button,d.t0=W(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,R=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ee=d.sent,i=ee.default,d.abrupt("return",{default:function(){var S=R.useForm(),z=y()(S,1),G=z[0],U=function(){G.validateFields().then(function(x){console.log(x)})};return i.createElement("div",null,i.createElement(B,{onClick:U},"\u68C0\u67E5form\u8868\u5355\u63D0\u4EA4\u79FB\u9664\u7684\u9879\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u503C"),i.createElement(R,{form:G,name:"tests",initialHide:{name1:!0},watchList:{tests_namea:function(x,N,Q,le){var M=le.updateValue;x==="12"?le.updateValue("tests_name1",!0):le.updateValue(["tests","name1"],!1),console.log("\u6253\u5370---\u300B",x,N,le,Q)}},colProps:{span:12},layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD54",name:"name4",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\u7EC4\u540D\u79F0"}]},{label:"\u6D4B\u8BD55",type:"Custom",render:function(){for(var x=arguments.length,N=new Array(x),Q=0;Q<x;Q++)N[Q]=arguments[Q];return console.log(N),i.createElement("div",null,"----\u6D4B\u8BD55")}},{label:"\u6D4B\u8BD56",name:"name6",type:"Custom",render:i.createElement("div",null,"----\u6D4B\u8BD56")}]}))}});case 18:case"end":return d.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:w,"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var p=Z()(A()().mark(function B(){var a,R=arguments;return A()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return p.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-1":{component:$.memo($.lazy(Z()(A()().mark(function p(){var c,B,a,R;return A()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=W(),i.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return i.t1=i.sent,(0,i.t0)(i.t1),i.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return c=i.sent,B=c.default,i.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return a=i.sent,R=a.default,i.abrupt("return",{default:function(){return R.createElement(B,{isSearch:!0,displayPre:1,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51",name:"name1",type:"Input"},{label:"\u6D4B\u8BD52",name:"name2",type:"Input"},{label:"\u6D4B\u8BD53",name:"namea3",type:"Input"},{label:"\u6D4B\u8BD54",name:"name4",type:"Input"},{label:"\u6D4B\u8BD55",name:"name5",type:"Input"}]})}});case 14:case"end":return i.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var p=Z()(A()().mark(function B(){var a,R=arguments;return A()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return p.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-2":{component:$.memo($.lazy(Z()(A()().mark(function p(){var c,B,a,R,ee,i;return A()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=d.sent,B=c.Input,d.t0=W(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,R=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ee=d.sent,i=ee.default,d.abrupt("return",{default:function(){var S=R.useForm(),z=y()(S,1),G=z[0],U=i.useState({}),D=y()(U,2),x=D[0],N=D[1],Q=G.getFieldValue,le=R.useChildItemFun(G),M=le.updateValue;return console.log("state",x),i.createElement(R,{form:G,layout:"vertical",isSearch:!0,onValuesChange:function(Ve,Ne){if("names0"in Ve){var Fe;clearTimeout(Fe),Fe=setTimeout(function(){M("names3",Ve.names0),clearTimeout(Fe)},300)}console.log(Ve),N(b()({},Ne))}},i.createElement(R.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},i.createElement(B,null)),i.createElement(R.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},i.createElement(B,null)),Q("names".concat(0))!=="12"&&i.createElement(R.ColItem,{label:"\u6D4B\u8BD54",name:"names4",style:{marginBottom:5}},i.createElement(B,null)))}});case 18:case"end":return d.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:w,"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var p=Z()(A()().mark(function B(){var a,R=arguments;return A()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return p.apply(this,arguments)}return c}()}},"packages-form-src-md-start-demo-3":{component:$.memo($.lazy(Z()(A()().mark(function p(){var c,B,a,R,ee,i;return A()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return c=d.sent,B=c.Input,d.t0=W(),d.next=7,Promise.resolve().then(e.bind(e,79398));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.next=11,Promise.resolve().then(e.bind(e,29441));case 11:return a=d.sent,R=a.default,d.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return ee=d.sent,i=ee.default,d.abrupt("return",{default:function(){var S=R.useForm(),z=y()(S,1),G=z[0],U=i.useState({}),D=y()(U,2),x=D[0],N=D[1],Q=G.getFieldValue,le=R.useChildItemFun(G),M=le.updateValue;return console.log("\u7EC4\u5408--->",x),i.createElement(R,{form:G,layout:"vertical",isSearch:!0,config:[{label:"\u6D4B\u8BD5config",name:"namea",type:"Input"},{label:"\u6D4B\u8BD51config",name:"name1",type:"Input"}],onValuesChange:function(Ve,Ne){N(b()({},Ne))}},i.createElement(R.ColItem,{label:"\u6D4B\u8BD5antd",name:"names0",style:{marginBottom:5}},i.createElement(B,null)),i.createElement(R.ColItem,{label:"\u6D4B\u8BD53",name:"names3",style:{marginBottom:5}},i.createElement(B,null)))}});case 18:case"end":return d.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-form-src-md-start-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:w,"antd/dist/reset.css":s,"carefree-antd-form":h,react:F||(F=e.t($,2))},renderOpts:{compile:function(){var p=Z()(A()().mark(function B(){var a,R=arguments;return A()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(a=i.sent).default.apply(a,R));case 3:case"end":return i.stop()}},B)}));function c(){return p.apply(this,arguments)}return c}()}}}},12360:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return w}});var r=e(15009),b=e.n(r),T=e(5574),A=e.n(T),f=e(49677),y=e.n(f),P=e(99289),W=e.n(P),l=e(67294),Z=e(7131),$=e(79398),te=e(29441),w={"packages-form-src-md-update-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{name:function(V,S,z,G){var U=z.updateValue,D=z.bathUpdateValue;U("name1",V)},name1:function(V,S,z,G){var U=z.updateValue,D=z.bathUpdateValue;D({name2:V,name3:V})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-update-demo-1":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0],d=j.getChildItemFun(u),V=d.updateValue,S=d.bathUpdateValue;return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(G,U){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",U)},watchList:{name:function(G,U,D,x){V("name1",G)},name1:function(G,U,D,x){S({name2:G,name3:G})}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"name",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-update-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},421:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return w}});var r=e(15009),b=e.n(r),T=e(5574),A=e.n(T),f=e(49677),y=e.n(f),P=e(99289),W=e.n(P),l=e(67294),Z=e(9087),$=e(79398),te=e(29441),w={"packages-form-src-md-watch-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,G){var U=z.updateValue;U("name1",V)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD5",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-1":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,G){var U=z.updateValue;U("name1",V)},name1:function(V,S,z,G){var U=z.updateValue;U("name2",V)},name2:function(V,S,z,G){var U=z.updateValue;U("name3",V)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD52",name:"name2",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD53",name:"name3",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}},"packages-form-src-md-watch-demo-2":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=y(),a.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.next=7,Promise.resolve().then(e.bind(e,29441));case 7:return h=a.sent,j=h.default,a.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=a.sent,c=p.default,a.abrupt("return",{default:function(){var ee=j.useForm(),i=A()(ee,1),u=i[0];return c.createElement("div",null,c.createElement(j,{form:u,initialHide:{name1:!0},onValuesChange:function(V,S){console.log("\u6253\u5370\u64CD\u4F5C\u7684\u503C\uFF1AallValue--->",S)},watchList:{namea:function(V,S,z,G){V==="12"?G.updateValue("name1",!1):G.updateValue("name1",!0)}},colProps:{span:12},layout:"vertical",config:[{label:"\u8BF7\u8F93\u5165`12`\u6D4B\u8BD5",name:"namea",type:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]},{label:"\u6D4B\u8BD51",name:"name1",type:"Input",isHide:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]}]}))}});case 14:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-form-src-md-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
};`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-antd-form":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},51773:function(Ce,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(30372),b={}},89237:function(Ce,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(11010),b={}},50968:function(Ce,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(70174),b={}},15611:function(Ce,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(56296),b={}},87820:function(Ce,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(91046),b={}},40352:function(Ce,I,e){"use strict";e.r(I),e.d(I,{demos:function(){return b}});var F=e(67294),r=e(49833),b={}},22617:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return w}});var r=e(15009),b=e.n(r),T=e(5574),A=e.n(T),f=e(49677),y=e.n(f),P=e(99289),W=e.n(P),l=e(67294),Z=e(67590),$=e(79398),te=e(93251),w={"packages-fuzzy-query-src-demo-0":{component:l.memo(l.lazy(W()(b()().mark(function s(){var h,j,p,c,B;return b()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.t0=y(),R.next=3,Promise.resolve().then(e.bind(e,79398));case 3:return R.t1=R.sent,(0,R.t0)(R.t1),R.next=7,Promise.resolve().then(e.bind(e,93251));case 7:return h=R.sent,j=h.default,R.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return p=R.sent,c=p.default,B=function(){var i=c.useState([]),u=A()(i,2),d=u[0],V=u[1],S=function(){var z=W()(b()().mark(function G(){return b()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",Array.from({length:20}).map(function(x,N){return{label:"\u540D\u79F0---".concat(N),phone:N}}));case 1:case"end":return D.stop()}},G)}));return function(){return z.apply(this,arguments)}}();return c.createElement("div",null,c.createElement(j,{request:S,mode:"multiple",value:d,onChange:V,placeholder:"\u8BF7\u9009\u62E9",columns:[{dataIndex:"label",title:"\u7528\u6237\u540D"},{dataIndex:"phone",title:"\u7535\u8BDD"}],fieldNames:{value:"phone"}}))},R.abrupt("return",{default:B});case 15:case"end":return R.stop()}},s)})))),asset:{type:"BLOCK",id:"packages-fuzzy-query-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import 'antd/dist/reset.css';
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
export default Query;`},antd:{type:"NPM",value:"5.24.6"},"carefree-fuzzy-query":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"antd/dist/reset.css":$,"carefree-fuzzy-query":te,react:F||(F=e.t(l,2))},renderOpts:{compile:function(){var s=W()(b()().mark(function j(){var p,c=arguments;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,c));case 3:case"end":return a.stop()}},j)}));function h(){return s.apply(this,arguments)}return h}()}}}},53335:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return Z}});var r=e(15009),b=e.n(r),T=e(99289),A=e.n(T),f=e(67294),y=e(6857),P=e(90359),W=e(29441),l=e(28209),Z={"packages-pro-table-src-demo-0":{component:f.memo(f.lazy(A()(b()().mark(function $(){var te,w,s,h,j,p,c,B;return b()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,90359));case 2:return te=R.sent,w=te.Input,R.next=6,Promise.resolve().then(e.bind(e,29441));case 6:return s=R.sent,h=s.default,R.next=10,Promise.resolve().then(e.bind(e,28209));case 10:return j=R.sent,p=j.default,R.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return c=R.sent,B=c.default,R.abrupt("return",{default:function(){return B.createElement(p,{Api:{table:{url:"/api/user/select",method:"POST"}},initialValues:{search:{ces1:123}},columns:[{title:"\u8D26\u53F7",dataIndex:"loginName"},{title:"\u7528\u6237\u540D",dataIndex:"userName"},{title:"\u7528\u6237\u624B\u673A\u53F7",dataIndex:"phone"},{title:"\u5E74\u9F84",dataIndex:"age"}],search:{isSearch:!0,layout:"vertical",config:[{label:"\u6D4B\u8BD5",name:"ces1",type:"Input"}],children:B.createElement(B.Fragment,null,B.createElement(h.ColItem,{name:"namens",label:"\u6D4B\u8BD5 children"},B.createElement(w,{placeholder:"\u8BF7\u8F93\u5165"})))}})}});case 17:case"end":return R.stop()}},$)})))),asset:{type:"BLOCK",id:"packages-pro-table-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd';
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
);`},antd:{type:"NPM",value:"5.24.6"},"carefree-antd-form":{type:"NPM",value:"2.0.3"},"carefree-pro-table":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:P,"carefree-antd-form":W,"carefree-pro-table":l,react:F||(F=e.t(f,2))},renderOpts:{compile:function(){var $=A()(b()().mark(function w(){var s,h=arguments;return b()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(19).then(e.bind(e,4019));case 2:return p.abrupt("return",(s=p.sent).default.apply(s,h));case 3:case"end":return p.stop()}},w)}));function te(){return $.apply(this,arguments)}return te}()}}}},40859:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return W}});var r=e(15009),b=e.n(r),T=e(99289),A=e.n(T),f=e(67294),y=e(90147),P=e(42478),W={"packages-transfer-search-src-demo-0":{component:f.memo(f.lazy(A()(b()().mark(function l(){var Z,$,te,w;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,42478));case 2:return Z=h.sent,$=Z.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return te=h.sent,w=te.default,h.abrupt("return",{default:function(){return w.createElement("div",null,w.createElement($,{rowKey:"id",columns:[{title:"\u6807\u9898",dataIndex:"title"}],initValue:{left:{dataList:[{id:1,title:"\u6807\u9898"}]},right:{dataList:[{id:2,title:"\u6807\u98982"}]}},Api:{left:{url:"",options:{},before:function(){return{}},after:function(){return{}}},right:{url:"",before:function(){return{}},after:function(){return{}}},add:{url:"",before:function(){return{}},after:function(){return{}}},allAdd:{url:"",before:function(){return{}},after:function(){return{}}},allDelete:{url:"",before:function(){return{}},after:function(){return{}}},delete:{url:"",before:function(){return{}},after:function(){return{}}}},leftSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]},rightSearch:{config:[{label:"\u6807\u9898",name:"name1",type:"Input"},{label:"\u6807\u9898",name:"name2",type:"Input"}]}}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-search-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import TransferSearch from 'carefree-antd-transfer-search';
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
);`},"carefree-antd-transfer-search":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer-search":P,react:F||(F=e.t(f,2))},renderOpts:{compile:function(){var l=A()(b()().mark(function $(){var te,w=arguments;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(te=h.sent).default.apply(te,w));case 3:case"end":return h.stop()}},$)}));function Z(){return l.apply(this,arguments)}return Z}()}}}},86968:function(Ce,I,e){"use strict";var F;e.r(I),e.d(I,{demos:function(){return W}});var r=e(15009),b=e.n(r),T=e(99289),A=e.n(T),f=e(67294),y=e(41699),P=e(12755),W={"packages-transfer-src-demo-0":{component:f.memo(f.lazy(A()(b()().mark(function l(){var Z,$,te,w;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,12755));case 2:return Z=h.sent,$=Z.default,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return te=h.sent,w=te.default,h.abrupt("return",{default:function(){return w.createElement("div",null,w.createElement($,{leftDataSource:[{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:11},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:22},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:33},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:44},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:444},{a:"\u6D4B\u8BD51",b:"\u6D4B\u8BD521",id:1111},{a:"\u6D4B\u8BD52",b:"\u6D4B\u8BD5211",id:2222},{a:"\u6D4B\u8BD53",b:"\u6D4B\u8BD5212",id:3333},{a:"\u6D4B\u8BD54",b:"\u6D4B\u8BD5213",id:4444}],rightDataSource:[{a:"\u6D4B\u8BD55",b:"\u6D4B\u8BD5215",id:5},{a:"\u6D4B\u8BD56",b:"\u6D4B\u8BD52116",id:6},{a:"\u6D4B\u8BD57",b:"\u6D4B\u8BD52127",id:7},{a:"\u6D4B\u8BD58",b:"\u6D4B\u8BD52138",id:8}],rowKey:"id",columns:[{dataIndex:"a",title:"\u6807\u9898",align:"center"},{dataIndex:"b",title:"\u68073",align:"center"}]}))}});case 9:case"end":return h.stop()}},l)})))),asset:{type:"BLOCK",id:"packages-transfer-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Transfer from 'carefree-antd-transfer';
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
);`},"carefree-antd-transfer":{type:"NPM",value:"2.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"carefree-antd-transfer":P,react:F||(F=e.t(f,2))},renderOpts:{compile:function(){var l=A()(b()().mark(function $(){var te,w=arguments;return b()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(te=h.sent).default.apply(te,w));case 3:case"end":return h.stop()}},$)}));function Z(){return l.apply(this,arguments)}return Z}()}}}},11160:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(81158);const r=[{value:` npm i carefree-antd-edit-table
`,paraId:0,tocIndex:0}]},87253:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(76070);const r=[{value:` npm i carefree-antd-edit-table
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
`,paraId:14,tocIndex:4}]},66782:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(44097);const r=[{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:0},{value:"isHide",paraId:0},{value:` \u5C5E\u6027\uFF0C\u5224\u65AD\u8868\u5355\u9879\u662F\u5426\u53EF\u4EE5\u6709\u9690\u85CF\u64CD\u4F5C
\u901A\u8FC7\u8BBE\u7F6E `,paraId:0},{value:"initialHide",paraId:0},{value:" \u5C5E\u6027 \uFF0C\u8BBE\u7F6E\u521D\u59CB\u8868\u5355\u9879\u9690\u85CF\u6216\u5C55\u793A",paraId:0}]},84651:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(29434);const r=[{value:` npm i carefree-antd-form
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
`,paraId:7,tocIndex:4}]},88412:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(7131);const r=[{value:"updateValue",paraId:0},{value:" \u548C ",paraId:0},{value:"bathUpdateValue",paraId:0},{value:" \u65B9\u6CD5\u66F4\u65B0\u8868\u5355\u503C\uFF0C\u53EF\u4EE5\u89E6\u53D1 ",paraId:0},{value:"onValuesChange",paraId:0},{value:" \u4E8B\u4EF6",paraId:0},{value:"\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"getChildItemFun",paraId:1,tocIndex:1},{value:" \u65B9\u6CD5\u83B7\u53D6",paraId:1,tocIndex:1}]},34434:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(9087);const r=[{value:"form \u52A0 ",paraId:0},{value:"watchList",paraId:0},{value:" \u5C5E\u6027, \u5BF9\u8868\u5355\u9879\u66F4\u65B0\u503C\u8FDB\u884C\u76D1\u542C",paraId:0}]},67157:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(30372);const r=[{value:"useSubscribe",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(sub?: Subscribe) => Subscribe[]",paraId:2,tocIndex:0},{value:`const [subscribe] = useSubscribe();
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
`,paraId:16,tocIndex:0}]},68927:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(11010);const r=[{value:"useHideFormItem",paraId:0,tocIndex:0},{value:"\u72B6\u6001\u5B58\u50A8 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(form?: HideGetStoreProps) => HideGetStoreProps[]",paraId:2,tocIndex:0},{value:`export default () => {
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
`,paraId:15,tocIndex:0}]},25777:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(70174);const r=[{value:"useWatchList",paraId:0,tocIndex:0},{value:"\u6536\u96C6\u5728\u76D1\u542C\u540E\u9700\u8981\u7684\u4E00\u4E9B\u5904\u7406\u6570\u636E\u7684\u65B9\u6CD5",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:0},{value:"(props: {[x: string]: any}) => ChildPropsType[]",paraId:2,tocIndex:0},{value:`export const WatchItem = (props: { [x: string]: any }) => {
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

`,paraId:7,tocIndex:0}]},85426:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(56296);const r=[{value:"\u4E00\u4E2A\u4F20\u9012\u5176\u4ED6\u7EC4\u4EF6\u9700\u8981\u7684\u53C2\u6570\u7684 context",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"React.Context<ContextProps>",paraId:1,tocIndex:0},{value:"\u83B7\u53D6 ",paraId:2,tocIndex:1},{value:"FormContext",paraId:2,tocIndex:1},{value:" \u7684\u503C",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"() => ContextProps",paraId:3,tocIndex:1},{value:"\u4E00\u4E2A\u4F20\u9012 \u8868\u5355\u540D\u79F0\u7684 context",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"React.Context<string|number>",paraId:5,tocIndex:2},{value:"\u83B7\u53D6 ",paraId:6,tocIndex:3},{value:"FormParentNameContext",paraId:6,tocIndex:3},{value:" \u7684\u503C",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"() => string|number",paraId:7,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:4},{value:"Form.useForm()",paraId:8,tocIndex:4},{value:" \u8FD4\u56DE\u503C [from] \u8FDB\u884C\u83B7\u53D6\u5B50\u9879\u4E2D\u66F4\u65B0\u503C\u7684\u65B9\u6CD5",paraId:8,tocIndex:4},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:4},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:9,tocIndex:4},{value:"\u83B7\u53D6 ",paraId:10,tocIndex:5},{value:"from.useForm",paraId:10,tocIndex:5},{value:" \u4E2D\u66F4\u65B0",paraId:10,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:11,tocIndex:5},{value:"(form: FormInstance) => GetChildItemFunRenter",paraId:11,tocIndex:5}]},13829:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(91046);const r=[{value:"\u6839\u636E rc-field-from \u5C01\u88C5\u7684\u8868\u5355\u8054\u52A8/\u9690\u85CF/\u76D1\u542C \u7EC4\u4EF6\u6216\u5DE5\u5177",paraId:0},{value:`
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
`,paraId:6}]},34836:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(49833);const r=[{value:"\u5B57\u6BB5\u8F6C\u6362\u6210 ",paraId:0,tocIndex:0},{value:"_",paraId:0,tocIndex:0},{value:" \u62FC\u63A5\u7684\u5B57\u7B26\u4E32",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"(path: NamePath) => number | InternalNamePath",paraId:1,tocIndex:0},{value:"\u628A\u8868\u5355\u9879\u5B57\u6BB5\u548C\u8868\u5355\u540D\u79F0 \u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"_",paraId:2,tocIndex:1},{value:" \u62FC\u63A5\u5728\u4E00\u8D77",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:1},{value:"(namePath: InternalNamePath, formName?: string): string | undefined",paraId:3,tocIndex:1},{value:"\u8F6C\u6362\u6210\u6570\u7EC4",paraId:4,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:2},{value:"function toArray<T>(candidate?: T | T[] | false): T[]",paraId:5,tocIndex:2},{value:"\u83B7\u53D6\u662F\u5426\u662F\u5FC5\u586B",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"function getRequired(required: boolean | undefined, rules: Rule[] | undefined, form: FormInstance) => boolean",paraId:7,tocIndex:3}]},64330:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(67590);const r=[{value:` npm i carefree-fuzzy-query
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
`,paraId:4,tocIndex:1}]},59715:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(6857);const r=[{value:"\u96C6\u6210\u67E5\u8BE2\u8868\u5355\u548C\u8868\u683C\uFF0C\u5B9E\u73B0\u5FEB\u901F\u4F7F\u7528\u8868\u5355\u8868\u683C\u8054\u5408\u4F7F\u7528\u7B80\u5355\u5316\uFF0C\u5FEB\u901F\u5B9E\u73B0\u4EE3\u7801\u529F\u80FD",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"Api",paraId:1,tocIndex:0},{value:"\u63A5\u53E3\u8C03\u7528 \u53EF\u4EE5\u8C03\u7528\u7684\u63A5\u53E3",paraId:1,tocIndex:0},{value:"ApiProps",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u8868\u683C columns",paraId:1,tocIndex:0},{value:"(v?: Store) => TableProps<any>['columns']|TableProps<any>['columns']",paraId:1,tocIndex:0},{value:"main",paraId:1,tocIndex:0},{value:"\u72B6\u6001 \u5B58\u50A8",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"initialValues",paraId:1,tocIndex:0},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:0},{value:"Store['store']",paraId:1,tocIndex:0},{value:"searchHead",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355\u8868\u5934\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"searchCardProps",paraId:1,tocIndex:0},{value:"\u67E5\u8BE2\u8868\u5355 \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableHead",paraId:1,tocIndex:0},{value:"\u8868\u683C\u5934\u90E8\u64CD\u4F5C\u6309\u94AE",paraId:1,tocIndex:0},{value:"(v: Store) => React.ReactNode",paraId:1,tocIndex:0},{value:"tableCardProps",paraId:1,tocIndex:0},{value:"\u8868\u683C \u5916\u5C42 card",paraId:1,tocIndex:0},{value:"CardProps",paraId:1,tocIndex:0},{value:"tableConfig",paraId:1,tocIndex:0},{value:"\u8868\u683C\u914D\u7F6E",paraId:1,tocIndex:0},{value:"TableProps<any> & { apiName?: string,table?: { page?: number, pageSize?: number, dataSource?: any[],total?: number,selectRows?: any[], selectRowKeys?: any[],pagination?: PageProps,}",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:2,tocIndex:0},{value:`// \u53C2\u6570
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
`,paraId:3,tocIndex:0}]},51550:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(90147);const r=[{value:` npm i carefree-antd-transfer-search
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
`,paraId:3,tocIndex:1}]},57798:function(Ce,I,e){"use strict";e.r(I),e.d(I,{texts:function(){return r}});var F=e(41699);const r=[{value:` npm i carefree-antd-transfer
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
