(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[6],{915:function(e,t,r){"use strict";r(0);var a=r(324),n=r(896),o=r(725),c=r(917),i=r(6),l=r(30),s=r(101),p=r(372),u=r(867),d=r(1),b=["className","color","outline","size"],g=Object(p.a)((function(e){return{primaryBackground:{background:e.palette.primary.main,color:e.palette.background.paper},secondaryBackground:{background:e.palette.secondary.main,color:e.palette.background.paper},errorBackground:{background:e.palette.error.main,color:e.palette.background.paper},warningBackground:{background:e.palette.warning.dark,color:e.palette.background.paper},infoBackground:{background:e.palette.info.main,color:e.palette.background.paper},successBackground:{background:e.palette.success.dark,color:e.palette.background.paper},greyBackground:{background:e.palette.grey[500],color:e.palette.background.paper},primaryOutline:{background:e.palette.background.paper,color:e.palette.primary.main,border:"2px solid ".concat(e.palette.primary.main)},secondaryOutline:{background:e.palette.background.paper,color:e.palette.secondary.main,border:"2px solid ".concat(e.palette.secondary.main)},errorOutline:{background:e.palette.background.paper,color:e.palette.error.main,border:"2px solid ".concat(e.palette.error.main)},warningOutline:{background:e.palette.background.paper,color:e.palette.warning.dark,border:"2px solid ".concat(e.palette.warning.dark)},infoOutline:{background:e.palette.background.paper,color:e.palette.info.main,border:"2px solid ".concat(e.palette.info.main)},successOutline:{background:e.palette.background.paper,color:e.palette.success.dark,border:"2px solid ".concat(e.palette.success.dark)},greyOutline:{background:e.palette.background.paper,color:e.palette.grey[500],border:"2px solid ".concat(e.palette.grey[500])},badge:{width:e.spacing(3.5),height:e.spacing(3.5)},xs:{width:e.spacing(4.25),height:e.spacing(4.25)},sm:{width:e.spacing(5),height:e.spacing(5)},md:{width:e.spacing(7),height:e.spacing(7)},lg:{width:e.spacing(9),height:e.spacing(9)},xl:{width:e.spacing(10.25),height:e.spacing(10.25)}}})),m=function(e){var t=e.className,r=e.color,a=e.outline,n=e.size,o=Object(s.a)(e,b),c=g(),p=[],m=a?[c["".concat(r,"Outline")]].concat(Object(l.a)(p)):[c["".concat(r,"Background")]].concat(Object(l.a)(p));return p=r?m:p,p=n?[c[n]].concat(Object(l.a)(p)):p,t&&(p=t?[].concat(Object(l.a)(p),[t]):p),Object(d.jsx)(u.a,Object(i.a)({className:p.join(" ")},o))};t.a=function(e){var t=e.title,r=e.link,i=e.icon,l=Object(a.a)();return Object(d.jsx)(n.a,{title:t||"Reference",placement:"left",children:Object(d.jsxs)(o.a,{disableRipple:!0,children:[!i&&Object(d.jsx)(m,{component:c.a,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(d.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(d.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:l.palette.primary[800]}),Object(d.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:l.palette.primary.main}),Object(d.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:l.palette.primary[800]}),Object(d.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:l.palette.primary.main})]}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"clip0",children:Object(d.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),i&&Object(d.jsx)(m,{component:c.a,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:i})]})})}},917:function(e,t,r){"use strict";var a=r(9),n=r(4),o=r(7),c=r(2),i=r(0),l=(r(10),r(11)),s=r(226),p=r(29),u=r(190),d=r(16),b=r(13),g=r(20),m=r(191),h=r(40),j=r(145),k=r(189),O=r(227);function f(e){return Object(k.a)("MuiLink",e)}var y=Object(O.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=r(1),v=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(b.a)(j.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return[t.root,t["underline".concat(Object(d.a)(r.underline))],"button"===r.component&&t.button]}})((function(e){var t=e.theme,r=e.styleProps,a=Object(p.b)(t,"palette.".concat(function(e){return w[e]||e}(r.color)))||r.color;return Object(c.a)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(u.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&Object(n.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),V=i.forwardRef((function(e,t){var r=Object(g.a)({props:e,name:"MuiLink"}),n=r.className,p=r.color,u=void 0===p?"primary":p,b=r.component,j=void 0===b?"a":b,k=r.onBlur,O=r.onFocus,y=r.TypographyClasses,w=r.underline,V=void 0===w?"always":w,B=r.variant,M=void 0===B?"inherit":B,N=Object(o.a)(r,v),C=Object(m.a)(),R=C.isFocusVisibleRef,z=C.onBlur,D=C.onFocus,P=C.ref,F=i.useState(!1),T=Object(a.a)(F,2),Z=T[0],A=T[1],S=Object(h.a)(t,P),I=Object(c.a)({},r,{color:u,component:j,focusVisible:Z,underline:V,variant:M}),H=function(e){var t=e.classes,r=e.component,a=e.focusVisible,n=e.underline,o={root:["root","underline".concat(Object(d.a)(n)),"button"===r&&"button",a&&"focusVisible"]};return Object(s.a)(o,f,t)}(I);return Object(x.jsx)(L,Object(c.a)({className:Object(l.a)(H.root,n),classes:y,color:u,component:j,onBlur:function(e){z(e),!1===R.current&&A(!1),k&&k(e)},onFocus:function(e){D(e),!0===R.current&&A(!0),O&&O(e)},ref:S,styleProps:I,variant:M},N))}));t.a=V},924:function(e,t,r){"use strict";r.r(t);r(0);var a=r(372),n=r(480),o=r(146),c=r(915),i=r(1),l=Object(a.a)((function(e){return{frame:{height:"calc(100vh - 210px)",border:"1px solid",borderColor:e.palette.primary.light}}}));t.default=function(){var e=l();return Object(i.jsx)(o.a,{title:"Tabler Icons",secondary:Object(i.jsx)(c.a,{link:"https://tablericons.com/"}),children:Object(i.jsx)(n.a,{sx:{overflow:"hidden"},children:Object(i.jsx)("iframe",{title:"Tabler Icons",className:e.frame,width:"100%",src:"https://tablericons.com/"})})})}}}]);
//# sourceMappingURL=6.e758c62b.chunk.js.map