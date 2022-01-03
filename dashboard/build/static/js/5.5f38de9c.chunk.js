(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[5],{870:function(e,t,a){"use strict";a(0);var r=a(298),c=a(863),n=a(698),o=a(872),i=a(5),s=a(31),l=a(110),d=a(341),j=a(835),b=a(1),p=["className","color","outline","size"],m=Object(d.a)((function(e){return{primaryBackground:{background:e.palette.primary.main,color:e.palette.background.paper},secondaryBackground:{background:e.palette.secondary.main,color:e.palette.background.paper},errorBackground:{background:e.palette.error.main,color:e.palette.background.paper},warningBackground:{background:e.palette.warning.dark,color:e.palette.background.paper},infoBackground:{background:e.palette.info.main,color:e.palette.background.paper},successBackground:{background:e.palette.success.dark,color:e.palette.background.paper},greyBackground:{background:e.palette.grey[500],color:e.palette.background.paper},primaryOutline:{background:e.palette.background.paper,color:e.palette.primary.main,border:"2px solid ".concat(e.palette.primary.main)},secondaryOutline:{background:e.palette.background.paper,color:e.palette.secondary.main,border:"2px solid ".concat(e.palette.secondary.main)},errorOutline:{background:e.palette.background.paper,color:e.palette.error.main,border:"2px solid ".concat(e.palette.error.main)},warningOutline:{background:e.palette.background.paper,color:e.palette.warning.dark,border:"2px solid ".concat(e.palette.warning.dark)},infoOutline:{background:e.palette.background.paper,color:e.palette.info.main,border:"2px solid ".concat(e.palette.info.main)},successOutline:{background:e.palette.background.paper,color:e.palette.success.dark,border:"2px solid ".concat(e.palette.success.dark)},greyOutline:{background:e.palette.background.paper,color:e.palette.grey[500],border:"2px solid ".concat(e.palette.grey[500])},badge:{width:e.spacing(3.5),height:e.spacing(3.5)},xs:{width:e.spacing(4.25),height:e.spacing(4.25)},sm:{width:e.spacing(5),height:e.spacing(5)},md:{width:e.spacing(7),height:e.spacing(7)},lg:{width:e.spacing(9),height:e.spacing(9)},xl:{width:e.spacing(10.25),height:e.spacing(10.25)}}})),u=function(e){var t=e.className,a=e.color,r=e.outline,c=e.size,n=Object(l.a)(e,p),o=m(),d=[],u=r?[o["".concat(a,"Outline")]].concat(Object(s.a)(d)):[o["".concat(a,"Background")]].concat(Object(s.a)(d));return d=a?u:d,d=c?[o[c]].concat(Object(s.a)(d)):d,t&&(d=t?[].concat(Object(s.a)(d),[t]):d),Object(b.jsx)(j.a,Object(i.a)({className:d.join(" ")},n))};t.a=function(e){var t=e.title,a=e.link,i=e.icon,s=Object(r.a)();return Object(b.jsx)(c.a,{title:t||"Reference",placement:"left",children:Object(b.jsxs)(n.a,{disableRipple:!0,children:[!i&&Object(b.jsx)(u,{component:o.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(b.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(b.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:s.palette.primary[800]}),Object(b.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:s.palette.primary.main}),Object(b.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:s.palette.primary[800]}),Object(b.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:s.palette.primary.main})]}),Object(b.jsx)("defs",{children:Object(b.jsx)("clipPath",{id:"clip0",children:Object(b.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),i&&Object(b.jsx)(u,{component:o.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:i})]})})}},872:function(e,t,a){"use strict";var r=a(9),c=a(4),n=a(7),o=a(2),i=a(0),s=(a(11),a(10)),l=a(215),d=a(28),j=a(181),b=a(16),p=a(12),m=a(20),u=a(182),x=a(39),h=a(143),g=a(180),O=a(216);function w(e){return Object(g.a)("MuiLink",e)}var k=Object(O.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),f=a(1),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(p.a)(h.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(a.underline))],"button"===a.component&&t.button]}})((function(e){var t=e.theme,a=e.ownerState,r=Object(d.b)(t,"palette.".concat(function(e){return v[e]||e}(a.color)))||a.color;return Object(o.a)({},"none"===a.underline&&{textDecoration:"none"},"hover"===a.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===a.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(j.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===a.component&&Object(c.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(k.focusVisible),{outline:"auto"}))})),V=i.forwardRef((function(e,t){var a=Object(m.a)({props:e,name:"MuiLink"}),c=a.className,d=a.color,j=void 0===d?"primary":d,p=a.component,h=void 0===p?"a":p,g=a.onBlur,O=a.onFocus,k=a.TypographyClasses,v=a.underline,V=void 0===v?"always":v,B=a.variant,M=void 0===B?"inherit":B,S=Object(n.a)(a,y),C=Object(u.a)(),N=C.isFocusVisibleRef,R=C.onBlur,z=C.onFocus,D=C.ref,F=i.useState(!1),Z=Object(r.a)(F,2),A=Z[0],P=Z[1],T=Object(x.a)(t,D),H=Object(o.a)({},a,{color:j,component:h,focusVisible:A,underline:V,variant:M}),I=function(e){var t=e.classes,a=e.component,r=e.focusVisible,c=e.underline,n={root:["root","underline".concat(Object(b.a)(c)),"button"===a&&"button",r&&"focusVisible"]};return Object(l.a)(n,w,t)}(H);return Object(f.jsx)(L,Object(o.a)({className:Object(s.a)(I.root,c),classes:k,color:j,component:h,onBlur:function(e){R(e),!1===N.current&&P(!1),g&&g(e)},onFocus:function(e){z(e),!0===N.current&&P(!0),O&&O(e)},ref:T,ownerState:H,variant:M},S))}));t.a=V},876:function(e,t,a){"use strict";a.r(t);a(0);var r=a(298),c=a(456),n=a(458),o=a(454),i=a(302),s=a(144),l=a(870),d=a(89),j=a(1),b=function(e){var t=e.shadow,a=Object(r.a)();return Object(j.jsx)(c.a,{sx:{mb:3,boxShadow:t},children:Object(j.jsx)(n.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:3,bgcolor:a.palette.primary.light,color:a.palette.grey[800]},children:Object(j.jsxs)(n.a,{sx:{color:"inherit"},children:["boxShadow: ",t]})})})};t.default=function(){return Object(j.jsx)(s.a,{title:"Basic Shadow",secondary:Object(j.jsx)(l.a,{link:"https://next.material-ui.com/system/shadows/"}),children:Object(j.jsx)(o.a,{container:!0,spacing:d.b,children:Object(j.jsx)(o.a,{item:!0,xs:12,children:Object(j.jsx)(i.a,{title:"Basic Shadow",children:Object(j.jsxs)(o.a,{container:!0,spacing:d.b,children:[Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"0"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"1"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"2"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"3"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"4"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"5"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"6"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"7"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"8"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"9"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"10"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"11"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"12"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"13"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"14"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"15"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"16"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"17"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"18"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"19"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"20"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"21"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"22"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"23"})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b,{shadow:"24"})})]})})})})})}}}]);
//# sourceMappingURL=5.5f38de9c.chunk.js.map