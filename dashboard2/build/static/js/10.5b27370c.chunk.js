(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[10],{915:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(64),i=n(820),s=n(476),o=n(471),l=n(145),j=n(470),u=n(367),b=n(368),d=n(18),m=n.n(d),x=n(25),h=n(9),g=n(5),O=n(4),p=n(62),f=n(56),v=n(365),w=n(311),y=n(724),C=n(483),I=n(480),N=n(855),S=n(481),k=n(482),E=n(477),R=n(727),P=n(729),W=n(726),z=n(723),D=n(193),T=n.n(D),A=n(110),F=(n(209),n(265),n(45)),L=n(426),M=(n(487),n(171)),U=n(428),B=n.n(U),H=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t},J=n(172),G=n.n(J),V=n(427),_=n.n(V),Z=n(845),$=n(857),q=n(841),K=n(26),Q=n.n(K),X=n(24),Y=n(1),ee=Object(v.a)((function(e){return{redButton:Object(O.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:"".concat(e.palette.grey[100]," !important"),color:"".concat(e.palette.grey[900],"!important"),fontWeight:500},loginIcon:Object(O.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(g.a)({},e.typography.customInput),radioInput:{borderColor:"".concat(e.palette.grey[100]," !important"),color:"".concat(e.palette.grey[900],"!important"),marginTop:"18px",marginBottom:"18px"},input:{backgroundColor:"".concat("light"===e.palette.mode?"#fff !important":"#1a223f")}}})),te=function(e){Object.assign({},e);var t=ee(),n=(Object(L.a)(),Object(w.a)()),c=Object(i.a)((function(e){return e.breakpoints.down("sm")})),o=(Object(f.c)((function(e){return e.customization})),r.a.useState(!1)),j=Object(h.a)(o,2),u=j[0],b=j[1],d=r.a.useState(!0),O=Object(h.a)(d,2),v=O[0],D=O[1],U=r.a.useState(0),J=Object(h.a)(U,2),V=J[0],K=J[1],te=r.a.useState(""),ne=Object(h.a)(te,2),ae=ne[0],re=ne[1],ce=function(e){var t,n=H(e);K(n),re((t=n)<2?{label:"Poor",color:B.a.errorMain}:t<3?{label:"Weak",color:B.a.warningDark}:t<4?{label:"Normal",color:B.a.orangeMain}:t<5?{label:"Good",color:B.a.successMain}:t<6&&{label:"Strong",color:B.a.successDark})};Object(a.useEffect)((function(){ce("123456")}),[]);var ie=Object(a.useState)({email:"",password:"",fName:"",lName:"",institute:"",role:""}),se=Object(h.a)(ie,2),oe=se[0],le=se[1],je=Object(F.g)(),ue=Object(a.useState)(null),be=Object(h.a)(ue,2),de=be[0],me=be[1],xe=Object(a.useState)(""),he=Object(h.a)(xe,2),ge=he[0],Oe=he[1],pe=Object(a.useState)(""),fe=Object(h.a)(pe,2),ve=fe[0],we=fe[1],ye=Object(a.useState)(!1),Ce=Object(h.a)(ye,2),Ie=Ce[0],Ne=Ce[1],Se=function(){Ne(!0)},ke=function(e,t){"clickaway"!==t&&Ne(!1)};return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(y.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:Ie,autoHideDuration:2e3,onClose:ke,message:ve,action:Object(Y.jsx)(r.a.Fragment,{children:Object(Y.jsx)(C.a,{size:"small","aria-label":"close",color:"inherit",onClick:ke,children:Object(Y.jsx)(T.a,{fontSize:"small"})})})}),Object(Y.jsx)(s.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:Object(Y.jsx)(s.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(Y.jsx)(I.a,{sx:{mb:2},children:Object(Y.jsx)(l.a,{variant:"subtitle1",children:"Sign up with Email address"})})})}),Object(Y.jsxs)(s.a,{container:!0,spacing:c?0:2,children:[Object(Y.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(Y.jsx)(N.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",inputProps:{className:t.input},defaultValue:"Joseph",className:t.loginInput,value:oe.fName,onChange:function(e){return le(Object(g.a)(Object(g.a)({},oe),{},{fName:e.target.value}))}})}),Object(Y.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(Y.jsx)(N.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",inputProps:{className:t.input},defaultValue:"Doe",className:t.loginInput,value:oe.lName,onChange:function(e){return le(Object(g.a)(Object(g.a)({},oe),{},{lName:e.target.value}))}})})]}),Object(Y.jsxs)(S.a,{fullWidth:!0,className:t.loginInput,children:[Object(Y.jsx)(k.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address"}),Object(Y.jsx)(E.a,{id:"outlined-adornment-email-register",type:"email",name:"email",inputProps:{className:t.input},value:oe.email,onChange:function(e){return le(Object(g.a)(Object(g.a)({},oe),{},{email:e.target.value}))}})]}),Object(Y.jsxs)(I.a,{sx:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[Object(Y.jsx)(I.a,{sx:{display:"flex",justifyContent:"center",mb:5},children:""!==ge?Object(Y.jsx)("img",{src:ge,alt:"",width:"100px",height:"100px"}):null}),Object(Y.jsxs)(R.a,{variant:"outlined",component:"label",sx:{mb:3},children:["Choose Image",Object(Y.jsx)("input",{type:"file",hidden:!0,onChange:function(e){return function(e){e.preventDefault(),me(e.target.files[0]),Oe(URL.createObjectURL(e.target.files[0]))}(e)}})]})]}),Object(Y.jsxs)(S.a,{className:t.radioInput,component:"fieldset",children:[Object(Y.jsx)(q.a,{component:"legend",children:"Select your role"}),Object(Y.jsxs)($.a,{row:!0,"aria-label":"role",name:"row-radio-buttons-group",value:oe.role,onChange:function(e){return le(Object(g.a)(Object(g.a)({},oe),{},{role:e.target.value}))},children:[Object(Y.jsx)(P.a,{value:"Student",control:Object(Y.jsx)(Z.a,{}),label:"Student"}),Object(Y.jsx)(P.a,{value:"Institute",control:Object(Y.jsx)(Z.a,{}),label:"Institute"}),Object(Y.jsx)(P.a,{value:"Teacher",control:Object(Y.jsx)(Z.a,{}),label:"Teacher"})]})]}),Object(Y.jsxs)(S.a,{fullWidth:!0,className:t.loginInput,children:[Object(Y.jsx)(k.a,{htmlFor:"outlined-adornment-email-register",children:"Institute"}),Object(Y.jsx)(E.a,{id:"outlined-adornment-email-register",name:"institute",inputProps:{className:t.input},value:oe.institute,onChange:function(e){return le(Object(g.a)(Object(g.a)({},oe),{},{institute:e.target.value}))}})]}),Object(Y.jsxs)(S.a,{fullWidth:!0,className:t.loginInput,children:[Object(Y.jsx)(k.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(Y.jsx)(E.a,{sx:{backgroundColor:"".concat("light"===n.palette.mode?"#fff !important":"#1a223f")},id:"outlined-adornment-password-register",type:u?"text":"password",name:"password",label:"Password",value:oe.password,onChange:function(e){return le(Object(g.a)(Object(g.a)({},oe),{},{password:e.target.value}))},endAdornment:Object(Y.jsx)(W.a,{position:"end",children:Object(Y.jsx)(C.a,{"aria-label":"toggle password visibility",onClick:function(){b(!u)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:u?Object(Y.jsx)(G.a,{}):Object(Y.jsx)(_.a,{})})}),inputProps:{className:t.input}})]}),0!==V&&Object(Y.jsx)(S.a,{fullWidth:!0,children:Object(Y.jsx)(I.a,{sx:{mb:2},children:Object(Y.jsxs)(s.a,{container:!0,spacing:2,alignItems:"center",children:[Object(Y.jsx)(s.a,{item:!0,children:Object(Y.jsx)(I.a,{backgroundColor:ae.color,sx:{width:85,height:8,borderRadius:"7px"}})}),Object(Y.jsx)(s.a,{item:!0,children:Object(Y.jsx)(l.a,{variant:"subtitle1",fontSize:"0.75rem",children:ae.label})})]})})}),Object(Y.jsx)(s.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(Y.jsx)(s.a,{item:!0,children:Object(Y.jsx)(P.a,{control:Object(Y.jsx)(z.a,{checked:v,onChange:function(e){return D(e.target.checked)},name:"checked",color:"primary"}),label:Object(Y.jsxs)(l.a,{variant:"subtitle1",children:["Agree with \xa0",Object(Y.jsx)(l.a,{variant:"subtitle1",component:p.b,to:"#",children:"Terms & Condition."})]})})})}),Object(Y.jsx)(I.a,{sx:{mt:2},children:Object(Y.jsx)(M.a,{children:Object(Y.jsx)(R.a,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",onClick:function(e){A.a.createUserWithEmailAndPassword(oe.email,oe.password).then((function(e){var t=e.user,n="".concat(oe.fName," ").concat(oe.lName);sessionStorage.setItem("userName",n),sessionStorage.setItem("userEmail",t.email),sessionStorage.setItem("userId",t.uid),sessionStorage.setItem("userRole",oe.role),new Promise((function(e,t){var n=A.b.storage();n.ref("logos2/".concat(null===de||void 0===de?void 0:de.name)).put(de).on("state_changed",(function(){}),(function(e){t(e),console.log(e)}),(function(){n.ref("logos2").child(de.name).getDownloadURL().then((function(t){e(t)}))}))})).then((function(e){t.updateProfile({displayName:"".concat(oe.fName," ").concat(oe.lName)}).then(Object(x.a)(m.a.mark((function a(){var r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={userId:t.uid,userName:n,userEmail:t.email,userRole:oe.role,userInstitute:oe.institute,logo:e},a.next=3,Q.a.post("".concat(X.b,"/adduser"),r).then((function(e){"Teacher"===oe.role?je("/dashboard/teacher"):je("/dashboard/default")})).catch((function(e){return console.log(e)}));case 3:case"end":return a.stop()}}),a)}))))}))})).catch((function(e){var t=e.message;we(t),Se()}))},children:"Sign up"})})})]})},ne=n(369);t.default=function(){var e=Object(c.a)(),t=Object(i.a)(e.breakpoints.down("sm"));return Object(Y.jsx)(u.a,{children:Object(Y.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(Y.jsx)(s.a,{item:!0,xs:12,children:Object(Y.jsx)(s.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(Y.jsx)(s.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(Y.jsxs)(b.a,{children:[Object(Y.jsx)(s.a,{item:!0,xs:12,children:Object(Y.jsx)("center",{sx:{alignItems:"center"},children:Object(Y.jsx)("img",{src:"/logo.png",height:"50%",width:"50%"})})}),Object(Y.jsxs)(s.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(Y.jsx)(s.a,{item:!0,xs:12,children:Object(Y.jsx)(s.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(Y.jsx)(s.a,{item:!0,children:Object(Y.jsxs)(o.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(Y.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),Object(Y.jsx)(l.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"",children:"Enter your credentials to continue"})]})})})}),Object(Y.jsx)(s.a,{item:!0,xs:12,children:Object(Y.jsx)(te,{})}),Object(Y.jsx)(s.a,{item:!0,xs:12,children:Object(Y.jsx)(j.a,{})})]})]})})})}),Object(Y.jsx)(s.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(Y.jsx)(ne.a,{})})]})})}}}]);
//# sourceMappingURL=10.5b27370c.chunk.js.map