(self.webpackChunkcarefree_antd_root=self.webpackChunkcarefree_antd_root||[]).push([[521],{4521:function(u,T,n){"use strict";n.r(T),n.d(T,{Store:function(){return le},default:function(){return ht}});var $=n(15009),N=n.n($),H=n(19632),V=n.n(H),B=n(9783),b=n.n(B),L=n(5574),z=n.n(L);function ae(d,e,t,i,c,r,h){try{var f=d[r](h),m=f.value}catch(p){t(p);return}f.done?e(m):Promise.resolve(m).then(i,c)}function Pe(d){return function(){var e=this,t=arguments;return new Promise(function(i,c){var r=d.apply(e,t);function h(m){ae(r,i,c,h,f,"next",m)}function f(m){ae(r,i,c,h,f,"throw",m)}h(void 0)})}}function a(){return a=Object.assign?Object.assign.bind():function(d){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(d[i]=t[i])}return d},a.apply(this,arguments)}function ee(d,e){if(d==null)return{};var t={},i=Object.keys(d),c,r;for(r=0;r<i.length;r++)c=i[r],!(e.indexOf(c)>=0)&&(t[c]=d[c]);return t}var F=n(67294),oe=n(45360),Ve=n(95639),we=n(71577),Oe=n(72004),Re=n.n(Oe),$e=n(12444),Ne=n.n($e),se=Re()(function d(){var e=this;Ne()(this,d),this.store={},this.remove=function(t){delete e.store[t]},this.register=function(t,i){e.store[t]=i},this.getStore=function(){return e.store},this.getToKeyForm=function(t){return e.store[""+t]}}),ue=function(e){var t=F.useRef();return e?t.current=e:t.current=new se,[t.current]},le=se,U=n(24407),o=n(85893),Be=void 0,de=F.createContext({formsRef:new le,dataSource:[],rowKey:"id",onValuesChange:function(e,t,i,c){}}),Le=function(e){var t=U.ZP.useForm(),i=z()(t,1),c=i[0],r=F.useContext(de),h=r.formsRef,f=r.onValuesChange,m=f===void 0?function(){}:f,p=r.dataSource,j=r.rowKey;F.useEffect(function(){return function(){return h.remove(""+e["data-row-key"])}},[]),h.register(""+e["data-row-key"],c);var C=p.find(function(A){return""+A[j]==""+e["data-row-key"]});return(0,o.jsx)(U.ZP,{onValuesChange:m.bind(Be,""+e["data-row-key"],c),form:c,name:""+e["data-row-key"],component:!1,initialValues:C||{},children:(0,o.jsx)("tr",a({},e))})},Me=Le,Ge=n(83062),fe=n(22174),ve=n(69677),He=n(17376),We=n(49288),ze=n(69606),Ue=n(34913),Je=n(71338),Qe=n(59847),Xe=n(34041),Ye=n(32808),ke=n(11330),qe=n(55742),_e=n(72269),et=n(68351),tt=n(23799),nt=fe.Z.RangePicker;function rt(d,e){if(d.length){var t=d.join("_");return e?e+"_"+t:t}}function it(d){return d===void 0||d===!1?[]:Array.isArray(d)?d:[d]}var at=function(e){var t=e.attr,i=e.type,c=e.inputNode,r=void 0;if(i==="Input"){var h=t;r=(0,o.jsx)(ve.Z,a({},h))}else if(i==="TextArea"){var f=t;r=(0,o.jsx)(ve.Z.TextArea,a({},f))}else if(i==="InputNumber"){var m=t;r=(0,o.jsx)(He.Z,a({},m))}else if(i==="AutoComplete"){var p=t;r=(0,o.jsx)(We.Z,a({},p))}else if(i==="Cascader"){var j=t;r=(0,o.jsx)(ze.Z,a({},j))}else if(i==="DatePicker"){var C=t;r=(0,o.jsx)(fe.Z,a({},C))}else if(i==="Rate"){var A=t;r=(0,o.jsx)(Ue.Z,a({},A))}else if(i==="Slider"){var I=t;r=(0,o.jsx)(Je.Z,a({},I))}else if(i==="TreeSelect"){var x=t;r=(0,o.jsx)(Qe.Z,a({},x))}else if(i==="Select"){var M=t;r=(0,o.jsx)(Xe.Z,a({},M))}else if(i==="Checkbox"){var w=t;r=(0,o.jsx)(Ye.Z.Group,a({},w))}else if(i==="Mentions"){var g=t;r=(0,o.jsx)(ke.Z,a({},g))}else if(i==="Radio"){var S=t;r=(0,o.jsx)(qe.ZP.Group,a({},S))}else if(i==="Switch"){var O=t;r=(0,o.jsx)(_e.Z,a({},O))}else if(i==="TimePicker"){var K=t;r=(0,o.jsx)(et.Z,a({},K))}else if(i==="Upload"){var P=t;r=(0,o.jsx)(tt.Z,a({},P))}else if(i==="RangePicker"){var E=t;r=(0,o.jsx)(nt,a({},E))}else i==="Custom"&&(r=c);return r},ot=["editing","dataIndex","title","record","index","inputNode","rules","children","itemAttr","type","attr","tip","tipAttr","multiple","rowKey","isList","listAttr"],st=["name","rules","preName","itemValue","children","tipAttr","tip"],ut=function(e){var t=e.editing,i=e.dataIndex,c=e.record,r=e.inputNode,h=e.rules,f=e.children,m=e.itemAttr,p=e.type,j=e.attr,C=e.tip,A=e.tipAttr,I=e.rowKey,x=e.isList,M=e.listAttr,w=M===void 0?{}:M,g=ee(e,ot),S=at({attr:j,type:p,inputNode:r}),O=function(){return x&&typeof r=="function"?(0,o.jsx)(U.ZP.List,a({},w,{name:i,children:function(E,W,Q){return r(E.map(function(X){return a({},X,{fieldKey:X.key})}),W,Q)}})):(0,o.jsx)(ce,a({},m,{name:i,rules:h,preName:c[I],itemValue:c,children:S,tipAttr:A,tip:C}))};return(0,o.jsx)("td",a({},g,{children:t?O():f}))},ce=function(e){var t=e.name,i=e.rules,c=e.preName,r=c===void 0?"":c,h=e.itemValue,f=e.children,m=e.tipAttr,p=m===void 0?{}:m,j=e.tip,C=ee(e,st);return(0,o.jsx)(U.ZP.Field,a({},C,{name:t,rules:i,children:function(I,x,M){var w=it(t).length&&x?x.name:[],g=rt(w,r),S=function(E){var W=E;E&&E.target&&(W=E.target.value),I.onChange(W)},O=typeof f=="function"?f(a({},I,{id:g}),x,M,{record:h}):F.isValidElement(f)?F.cloneElement(f,a({},I,{onChange:S,id:g})):f,K=x.errors.map(function(P){return P}).join(",");return(0,o.jsx)(Ge.Z,a({color:"#fff",overlayInnerStyle:{color:"red"}},p,{title:j?j(K):K,visible:!!x.errors.length,children:O}))}}))},lt=ut,J=n(48997),pe=n(86738),dt=n(26713),me=void 0,ft=function(e){var t=e.optConfig,i=e.isEditing,c=e.isAddEdit,r=e.save,h=e.isOptDelete,f=e.cancel,m=e.onDelete,p=e.edit,j=e.newAdd,C=e.editingKey,A=e.rowKey,I=e.multiple,x=e.optDeleteEditingDisabled;return[a({title:"\u64CD\u4F5C",align:"center",width:120},t,{render:function(w,g,S){var O=i(g),K=c(g);return t&&t.render?t.render(w,g,S,{editable:O,isNewAdd:K,save:r,cancel:f,onDelete:m,edit:p,newAdd:j,editingKey:C}):O?(0,o.jsxs)("span",{children:[(0,o.jsx)(J.Z.Link,{onClick:function(){return r(g[A],g,S)},style:{marginRight:8},children:"\u4FDD\u5B58"}),(0,o.jsx)(pe.Z,{title:"\u662F\u5426\u53D6\u6D88\u5F53\u524D\u884C\u7F16\u8F91?",okText:"\u662F",cancelText:"\u5426",onConfirm:K?m.bind(me,g[A],g,S):f.bind(me,g[A]),children:(0,o.jsx)(J.Z.Link,{children:"\u53D6\u6D88"})})]}):(0,o.jsxs)(dt.Z,{children:[(0,o.jsx)(J.Z.Link,{disabled:!!C.length&&!I,onClick:function(){return p(g)},children:"\u7F16\u8F91"}),h&&(0,o.jsx)(pe.Z,{disabled:x&&!!C.length,title:"\u662F\u5426\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",okText:"\u662F",cancelText:"\u5426",onConfirm:function(){return m(g[A],g,S)},children:(0,o.jsx)(J.Z.Link,{disabled:x&&!!C.length,children:"\u5220\u9664"})})]})}})]},vt=ft,ct=["columns","dataSource","onBeforeSave","onSave","rowKey","optIsFirst","optConfig","isOptDelete","initValue","onValuesChange","isAdd","onErr","multiple","onBeforeAdd","isOpt","addBtnProps","store","optDeleteEditingDisabled"],pt=function(e,t){var i=e.columns,c=e.dataSource,r=c===void 0?[]:c,h=e.onBeforeSave,f=e.onSave,m=e.rowKey,p=m===void 0?"id":m,j=e.optIsFirst,C=j===void 0?!1:j,A=e.optConfig,I=A===void 0?{}:A,x=e.isOptDelete,M=x===void 0?!1:x,w=e.initValue,g=w===void 0?{}:w,S=e.onValuesChange,O=e.isAdd,K=e.onErr,P=e.multiple,E=P===void 0?!1:P,W=e.onBeforeAdd,Q=e.isOpt,X=Q===void 0?!0:Q,ge=e.addBtnProps,he=ge===void 0?{}:ge,yt=e.store,ye=e.optDeleteEditingDisabled,xt=ye===void 0?!1:ye,Ct=ee(e,ct),At=ue(yt),jt=z()(At,1),Y=jt[0],St=(0,F.useState)([]),xe=z()(St,2),k=xe[0],ne=xe[1],Et=F.useState([]),Ce=z()(Et,2),q=Ce[0],Ae=Ce[1],re=function(s){ne(function(v){return v.filter(function(y){return""+y!=""+s})}),Ae(function(v){return v.filter(function(y){return""+y!=""+s})})},Dt=F.useMemo(function(){return i.filter(function(l){return l.editable}).map(function(l){return l.dataIndex})},[i]),je=function(s,v){v===void 0&&(v={});var y=Y.getStore();y[""+s]&&y[""+s].setFieldsValue(v)},Se=function(s){var v=Y.getStore();return v[""+s]},ie=function(s){return k.includes(""+s[p])},Ee=function(s){return q.includes(""+s[p])},De=function(){if(!(W&&!W())){if(q.length===1&&!E){oe.ZP.warn("\u53EA\u80FD\u65B0\u589E\u4E00\u884C");return}if(k.length===1&&!E){oe.ZP.warn("\u53EA\u80FD\u7F16\u8F91\u4E00\u884C");return}var s=(new Date().getTime()*Math.round(10)).toString(),v=a({},g||{},b()({},p,s)),y=r.concat([v]);ne(function(Z){return Z.concat([s])}),Ae(function(Z){return Z.concat([s])}),f&&f(y,v)}},be=function(s){var v=a({},s);je(s[p],v),ne(function(y){return y.concat([""+s[p]])})},Fe=function(s){re(s),je(s,{})},Ze=function(s,v,y){var Z=r.filter(function(G){return""+G[p]!=""+s});re(s),f&&f(Z,v,v,y)},Te=function(){var l=Pe(N()().mark(function s(v,y,Z){var G,R,_,Ke;return N()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,Se(v).validateFields();case 3:if(G=D.sent,!(h&&!h(G,y,Z))){D.next=6;break}return D.abrupt("return");case 6:R=V()(r),_=R.findIndex(function(Tt){return""+v==""+Tt[p]}),_>-1?(Ke=R[_],R.splice(_,1,a({},Ke,G))):R.push(G),f&&f(R,G,y,Z),re(v),Se(v).resetFields(Dt),D.next=17;break;case 14:D.prev=14,D.t0=D.catch(0),K&&K(D.t0);case 17:case"end":return D.stop()}},s,null,[[0,14]])}));return function(v,y,Z){return l.apply(this,arguments)}}(),Ie=X&&vt({optConfig:I,isEditing:ie,isAddEdit:Ee,save:Te,isOptDelete:M,cancel:Fe,onDelete:Ze,edit:be,newAdd:q,editingKey:k,rowKey:p,multiple:E,optDeleteEditingDisabled:xt})||[],bt=C?Ie.concat(i):i.concat(Ie),Ft=bt.map(function(l){return l.editable?a({},l,{onCell:function(v){return{record:v,multiple:E,rowKey:p,dataIndex:l.dataIndex,title:l.title,editing:ie(v),inputNode:l.inputNode,rules:l.rules||[],itemAttr:l.itemAttr,type:l.type,attr:l.attr,tip:l.tip,tipAttr:l.tipAttr,isList:l.isList,listAttr:l.listAttr}}}):l}),Zt=function(s,v,y,Z){if(S){var G=r.map(function(R){return""+s==""+R[p]?a({},R,Z):a({},R)});S(G,y,Z,s,v)}};return F.useImperativeHandle(t,function(){return{save:Te,onDelete:Ze,edit:be,cancel:Fe,add:De,isEditing:ie,editingKey:k,newAdd:q,isAddEdit:Ee,forms:Y}}),(0,o.jsx)(F.Fragment,{children:(0,o.jsxs)(de.Provider,{value:{formsRef:Y,onValuesChange:Zt,dataSource:r,rowKey:p},children:[(0,o.jsx)(Ve.Z,a({size:"small",bordered:!0},Ct,{components:{body:{row:Me,cell:lt}},rowKey:p,dataSource:r,columns:Ft,rowClassName:"editable-row",pagination:!1})),O&&(0,o.jsx)(we.ZP,a({type:"dashed",block:!0,children:"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"},he||{},{style:a({marginTop:10},(he||{}).style||{}),onClick:De}))]})})},mt=F.forwardRef(pt),te=mt;te.useStore=ue,te.Item=ce;var gt=te,ht=gt},96446:function(u,T,n){var $=n(37923);function N(H){if(Array.isArray(H))return $(H)}u.exports=N,u.exports.__esModule=!0,u.exports.default=u.exports},12444:function(u){function T(n,$){if(!(n instanceof $))throw new TypeError("Cannot call a class as a function")}u.exports=T,u.exports.__esModule=!0,u.exports.default=u.exports},72004:function(u,T,n){var $=n(51883);function N(V,B){for(var b=0;b<B.length;b++){var L=B[b];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(V,$(L.key),L)}}function H(V,B,b){return B&&N(V.prototype,B),b&&N(V,b),Object.defineProperty(V,"prototype",{writable:!1}),V}u.exports=H,u.exports.__esModule=!0,u.exports.default=u.exports},96936:function(u){function T(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}u.exports=T,u.exports.__esModule=!0,u.exports.default=u.exports},88619:function(u){function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u.exports=T,u.exports.__esModule=!0,u.exports.default=u.exports},19632:function(u,T,n){var $=n(96446),N=n(96936),H=n(96263),V=n(88619);function B(b){return $(b)||N(b)||H(b)||V()}u.exports=B,u.exports.__esModule=!0,u.exports.default=u.exports}}]);
