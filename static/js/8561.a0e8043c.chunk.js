"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8561],{63548:function(e,t,n){n.d(t,{Z:function(){return L}});var i=n(42893),r=n(12204),o=n(19903),s=n(80815),a=n(66196),c=n(13119),l=n(92483),d=n(48141),u=n(40508),p=n(13712),h=n(87253),m=n(39839),x=n(47371),g=n(57482),f=n(44326),y=n(42881),j=n(60198),b=n(45533),v=n(56823),C=n(48972),w=n(2304),N=n(20437),R=n(925);const _=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-3db49bc3-0"})`
  ${x.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:t})=>t?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,E=h.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-3db49bc3-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:t,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":e.surface2};\n    }\n  `}
`,k=(0,h.default)(j.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-3db49bc3-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:t})=>e?t.surface1:t.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:t})=>e?t.surface2:(0,u._j)(.05,t.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,I=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-3db49bc3-3"})`
  ${x.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,T=h.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-3db49bc3-4"})`
  ${x.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,S=(0,h.default)(T).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-3db49bc3-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,A=h.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-3db49bc3-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,O=(0,h.default)(f.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-3db49bc3-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
    stroke-width: 1.5px;
  }
`,B=h.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-3db49bc3-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,M=h.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-3db49bc3-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,U=(0,h.default)(C.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-3db49bc3-10"})`
  ${c._Q};
  text-align: left;
`,D=(0,h.default)(l.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-3db49bc3-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function L({value:e,onUserInput:t,onMax:n,showMaxButton:l,onCurrencySelect:u,currency:x,otherCurrency:f,id:j,showCommonBases:C,showCurrencyAmount:T,disableNonToken:L,renderBalance:P,fiatValue:$,hideBalance:z=!1,pair:Y=null,hideInput:F=!1,locked:W=!1,loading:q=!1,...Z}){const[G,H]=(0,p.useState)(!1),{account:V,chainId:K}=(0,s.useWeb3React)(),J=(0,y._h)(V??void 0,x??void 0),X=(0,h.useTheme)(),{formatCurrencyAmount:Q}=(0,g.Gb)(),ee=(0,p.useCallback)((()=>{H(!1)}),[H]),te=(0,d.EC)(K);return(0,i.jsxs)(_,{id:j,hideInput:F,...Z,children:[!W&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(E,{hideInput:F,disabled:!te,children:[(0,i.jsxs)(I,{style:F?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!F&&(0,i.jsx)(U,{className:"token-amount-input",value:e,onUserInput:t,disabled:!te,$loading:q}),(0,i.jsx)(D,{shouldFetchOnAccountUpdate:G,$fullWidth:F,children:(0,i.jsx)(k,{disabled:!te,visible:void 0!==x,selected:!!x,hideInput:F,className:"open-currency-select-button",onClick:()=>{u&&H(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(A,{children:[(0,i.jsxs)(w.DA,{children:[Y?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(b.Z,{currency0:Y.token0,currency1:Y.token1,size:24,margin:!0})}):x&&(0,i.jsx)(v.Z,{style:{marginRight:"0.5rem"},currency:x,size:"24px"}),Y?(0,i.jsxs)(B,{className:"pair-name-container",children:[Y?.token0.symbol,":",Y?.token1.symbol]}):(0,i.jsx)(B,{className:"token-symbol-container",active:Boolean(x&&x.symbol),children:(x&&x.symbol&&x.symbol.length>20?x.symbol.slice(0,4)+"..."+x.symbol.slice(x.symbol.length-5,x.symbol.length):x?.symbol)||(0,i.jsx)(r.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(O,{selected:!!x})]})})})]}),Boolean(!F&&!z&&x)&&(0,i.jsx)(S,{children:(0,i.jsxs)(w.m0,{children:[(0,i.jsx)(c.EG,{$loading:q,children:$&&(0,i.jsx)(R.x,{fiatValue:$})}),V&&(0,i.jsxs)(w.DA,{style:{height:"17px"},children:[(0,i.jsx)(m.Tv.DeprecatedBody,{onClick:n,color:X.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!z&&x&&J)&&(P?.(J)||(0,i.jsx)(r.cC,{id:"VuFd5C",values:{0:Q({amount:J,type:g.sw.TokenNonTx})}}))}),Boolean(l&&J)&&(0,i.jsx)(a.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(M,{onClick:n,children:(0,i.jsx)(r.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(N.Z,{isOpen:G,onDismiss:ee,onCurrencySelect:u,selectedCurrency:x,otherSelectedCurrency:f,showCommonBases:C,showCurrencyAmount:T,disableNonToken:L})]})}},4987:function(e,t,n){n.d(t,{q:function(){return C},w:function(){return N}});var i=n(42893),r=n(12204),o=n(80815),s=n(8713),a=n(46591),c=n(41440),l=n(80657),d=n(47096),u=n(63498),p=n(40740),h=n(4292),m=n(87253),x=n(39839),g=n(47371),f=n(2304);const y=m.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-1056be7d-0"})`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,j=(0,m.default)(c.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-1056be7d-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,m.default)(x.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-1056be7d-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,v=(0,m.default)(a.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-1056be7d-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(c.rU,{to:e,children:(0,i.jsx)(v,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,m.default)(x.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-1056be7d-4"})`
  flex: 1;
  margin: auto;
`;function N({adding:e,creating:t,autoSlippage:n,positionID:a,children:c}){const{chainId:x}=(0,o.useWeb3React)(),g=(0,m.useTheme)(),b=(0,u.T)(),C=(0,l.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(a?`/${a.toString()}`:"");return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(j,{to:C,onClick:()=>{e&&(b((0,p.dA)()),b((0,h.dA)()))},flex:c?"1":void 0,children:(0,i.jsx)(v,{stroke:g.neutral2})}),(0,i.jsx)(w,{textAlign:c?"start":"center",children:t?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),c&&(0,i.jsx)(d.xu,{style:{marginRight:".5rem"},children:c}),(0,i.jsx)(s.Z,{autoSlippage:n,chainId:x,hideRoutingSettings:!0})]})})}},19969:function(e,t,n){n.d(t,{SS:function(){return h},sq:function(){return l},MN:function(){return d},RF:function(){return u},uO:function(){return p},I8:function(){return c}});var i=n(87253),r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",s=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",a=n(60476);const c=(0,i.default)(a.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,d=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${s});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,i.default)(a.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},71607:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(42893),r=n(12204),o=n(80815),s=n(60198),a=n(42246),c=n(60476),l=n(56823),d=n(79371),u=n(2304),p=n(13712),h=n(87253),m=n(39839),x=n(437),g=n(15627),f=n(34120);const y=h.default.div.withConfig({displayName:"UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-b083a83b-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${x.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,j=(0,h.default)(s.qL).withConfig({displayName:"UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-b083a83b-1"})`
  text-decoration: none;
`,b=(0,h.default)(m.Tv.DeprecatedBlue).withConfig({displayName:"UnsupportedCurrencyFooter__AddressText",componentId:"sc-b083a83b-2"})`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function v({show:e,currencies:t}){const{chainId:n}=(0,o.useWeb3React)(),[s,h]=(0,p.useState)(!1),x=n&&t?t.map((e=>e?.wrapped)):[],v=(0,g.l6)();return(0,i.jsxs)(y,{show:e,children:[(0,i.jsx)(d.Z,{isOpen:s,onDismiss:()=>h(!1),children:(0,i.jsx)(a.ZP,{padding:"2rem",children:(0,i.jsxs)(c.Tz,{gap:"lg",children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsx)(m.Tv.DeprecatedMediumHeader,{children:(0,i.jsx)(r.cC,{id:"7Osz32"})}),(0,i.jsx)(m.Tw,{onClick:()=>h(!1),"data-testid":"close-icon"})]}),x.map((e=>e&&v&&Object.keys(v).includes(e.address)&&(0,i.jsx)(a.nq,{"data-testid":"unsupported-token-card",children:(0,i.jsxs)(c.Tz,{gap:"10px",children:[(0,i.jsxs)(u.BA,{gap:"5px",align:"center",children:[(0,i.jsx)(l.Z,{currency:e,size:"24px"}),(0,i.jsx)(m.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),n&&(0,i.jsx)(m.dL,{href:(0,f.E)(n,e.address,f.r.ADDRESS),children:(0,i.jsx)(b,{children:e.address})})]})},e.address?.concat("not-supported")))),(0,i.jsx)(c.Tz,{gap:"lg",children:(0,i.jsx)(m.Tv.DeprecatedBody,{fontWeight:535,children:(0,i.jsx)(r.cC,{id:"l7X7DE"})})})]})})}),(0,i.jsx)(j,{padding:"0",onClick:()=>h(!0),"data-testid":"read-more-button",children:(0,i.jsx)(m.Tv.DeprecatedBlue,{children:(0,i.jsx)(r.cC,{id:"bIjYSY"})})})]})}},52240:function(e,t,n){n.r(t),n.d(t,{default:function(){return Zt}});var i=n(42893),r=n(80815),o=n(80657),s=n(58025),a=n(86003),c=n(12204),l=n(19903),d=n(15387),u=n(35206),p=n(66196),h=n(93622),m=n(34578),x=n(87253),g=n(39839);const f=x.default.div.withConfig({displayName:"OwnershipWarning__ExplainerText",componentId:"sc-bef8de1f-0"})`
  color: ${({theme:e})=>e.neutral2};
`,y=x.default.div.withConfig({displayName:"OwnershipWarning__TitleRow",componentId:"sc-bef8de1f-1"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${({theme:e})=>e.deprecated_accentWarning};
  margin-bottom: 8px;
`,j=x.default.div.withConfig({displayName:"OwnershipWarning__Wrapper",componentId:"sc-bef8de1f-2"})`
  background-color: ${({theme:e})=>e.deprecated_accentWarningSoft};
  border-radius: 16px;
  margin-top: 12px;
  max-width: 480px;
  padding: 12px 20px;
  width: 100%;
`;var b=({ownerAddress:e})=>(0,i.jsxs)(j,{children:[(0,i.jsxs)(y,{children:[(0,i.jsx)(m.Z,{style:{marginRight:"8px"}}),(0,i.jsx)(g.Tv.SubHeader,{color:"deprecated_accentWarning",children:(0,i.jsx)(c.cC,{id:"r6y+jM"})})]}),(0,i.jsx)(f,{children:(0,i.jsx)(c.cC,{id:"7o/WJ5",values:{ownerAddress:e}})})]}),v=n(71607),C=n(48141),w=n(44922),N=n(61646),R=n(72714),_=n(96234),E=n(13712),k=n(41440),I=n(47096),T=n(33699),S=n(80608),A=n(75808),O=n(57482),B=n(60198),M=n(42246),U=n(60476),D=n(63548),L=n(26900),P=n(94160),$=n(25575),z=n(90937),Y=n(40508),F=n(49855),W=n(41432),q=n.n(W);function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Z.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=G(e,["color","size"]);return E.createElement("svg",Z({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),E.createElement("path",{d:"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"}),E.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));H.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},H.displayName="CloudOff";var V=H;function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},K.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=J(e,["color","size"]);return E.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),E.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),E.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),E.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"}))}));X.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},X.displayName="BarChart2";var Q=X,ee=n(84811),te=n(4292),ne=n(11275);const ie=x.default.path.withConfig({displayName:"Area__Path",componentId:"sc-a0a3ffe3-0"})`
  opacity: 0.5;
  stroke: ${({fill:e,theme:t})=>e??t.accent1};
  fill: ${({fill:e,theme:t})=>e??t.accent1};
`,re=({series:e,xScale:t,yScale:n,xValue:r,yValue:o,fill:s})=>(0,E.useMemo)((()=>(0,i.jsx)(ie,{fill:s,d:(0,ne.SOn)().curve(ne.jsv).x((e=>t(r(e)))).y1((e=>n(o(e)))).y0(n(0))(e.filter((e=>{const n=t(r(e));return n>0&&n<=window.innerWidth})))??void 0})),[s,e,t,r,n,o]),oe=x.default.g.withConfig({displayName:"AxisBottom__StyledGroup",componentId:"sc-86793c1c-0"})`
  line {
    display: none;
  }

  text {
    color: ${({theme:e})=>e.neutral2};
    transform: translateY(5px);
  }
`,se=({axisGenerator:e})=>(0,i.jsx)("g",{ref:t=>{t&&(0,ne.Ys)(t).call(e).call((e=>e.select(".domain").remove()))}}),ae=({xScale:e,innerHeight:t,offset:n=0})=>(0,E.useMemo)((()=>(0,i.jsx)(oe,{transform:`translate(0, ${t+n})`,children:(0,i.jsx)(se,{axisGenerator:(0,ne.LLu)(e).ticks(6)})})),[t,n,e]),ce=e=>["M 0 0",`v ${e}`,"m 1 0","V 0","M 0 1","h 12","q 2 0, 2 2","v 22","q 0 2 -2 2","h -12","z"].join(" "),le=()=>["m 5 7","v 14","M 0 0","m 9 7","v 14","z"].join(" "),de=({color:e,size:t=10,margin:n=10})=>(0,i.jsx)("polygon",{points:`0 0, ${t} ${t}, 0 ${t}`,transform:` translate(${t+n}, ${n}) rotate(45) `,fill:e,stroke:e,strokeWidth:"4",strokeLinejoin:"round"}),ue=x.default.path.withConfig({displayName:"Brush__Handle",componentId:"sc-f6266828-0"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 3;
  stroke: ${({color:e})=>e};
  fill: ${({color:e})=>e};
`,pe=x.default.path.withConfig({displayName:"Brush__HandleAccent",componentId:"sc-f6266828-1"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 1.5;
  stroke: ${({theme:e})=>e.white};
  opacity: ${({theme:e})=>e.opacity.hover};
`,he=x.default.g.withConfig({displayName:"Brush__LabelGroup",componentId:"sc-f6266828-2"})`
  opacity: ${({visible:e})=>e?"1":"0"};
  transition: opacity 300ms;
`,me=x.default.rect.withConfig({displayName:"Brush__TooltipBackground",componentId:"sc-f6266828-3"})`
  fill: ${({theme:e})=>e.surface3};
`,xe=x.default.text.withConfig({displayName:"Brush__Tooltip",componentId:"sc-f6266828-4"})`
  text-anchor: middle;
  font-size: 13px;
  fill: ${({theme:e})=>e.neutral1};
`,ge=(e,t,n)=>{const i=e.map((e=>n(e).toFixed(1))),r=t.map((e=>n(e).toFixed(1)));return i.every(((e,t)=>e===r[t]))},fe=({id:e,xScale:t,interactive:n,brushLabelValue:r,brushExtent:o,setBrushExtent:s,innerWidth:a,innerHeight:c,westHandleColor:l,eastHandleColor:d})=>{const u=(0,E.useRef)(null),p=(0,E.useRef)(null),[h,m]=(0,E.useState)(o),[x,g]=(0,E.useState)(!1),[f,y]=(0,E.useState)(!1),j=(0,w.Z)(o),b=(0,E.useCallback)((e=>{const{type:n,selection:i,mode:r}=e;if(!i)return void m(null);const a=i.map(t.invert);"end"!==n||ge(o,a,t)||s(a,r),m(a)}),[t,o,s]);(0,E.useEffect)((()=>{m(o)}),[o]),(0,E.useEffect)((()=>{u.current&&(p.current=(0,ne.Yud)().extent([[Math.max(2,t(0)),0],[a-2,c]]).handleSize(30).filter((()=>n)).on("brush end",b),p.current((0,ne.Ys)(u.current)),j&&ge(o,j,t)&&(0,ne.Ys)(u.current).transition().call(p.current.move,o.map(t)),(0,ne.Ys)(u.current).selectAll(".selection").attr("stroke","none").attr("fill-opacity","0.1").attr("fill",`url(#${e}-gradient-selection)`))}),[o,b,e,c,a,n,j,t]),(0,E.useEffect)((()=>{u.current&&p.current&&p.current.move((0,ne.Ys)(u.current),o.map(t))}),[o,t]),(0,E.useEffect)((()=>{g(!0);const e=setTimeout((()=>g(!1)),1500);return()=>clearTimeout(e)}),[h]);const v=h&&t(h[0])>20,C=h&&t(h[1])>a-20,N=h&&(t(h[0])<0||t(h[1])<0),R=h&&(t(h[0])>a||t(h[1])>a),_=h&&t(h[0])>=0&&t(h[0])<=a,k=h&&t(h[1])>=0&&t(h[1])<=a;return(0,E.useMemo)((()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:`${e}-gradient-selection`,x1:"0%",y1:"100%",x2:"100%",y2:"100%",children:[(0,i.jsx)("stop",{stopColor:l}),(0,i.jsx)("stop",{stopColor:d,offset:"1"})]}),(0,i.jsx)("clipPath",{id:`${e}-brush-clip`,children:(0,i.jsx)("rect",{x:"0",y:"0",width:a,height:c})})]}),(0,i.jsx)("g",{ref:u,clipPath:`url(#${e}-brush-clip)`,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)}),h&&(0,i.jsxs)(i.Fragment,{children:[_?(0,i.jsxs)("g",{transform:`translate(${Math.max(0,t(h[0]))}, 0), scale(${v?"-1":"1"}, 1)`,children:[(0,i.jsxs)("g",{children:[(0,i.jsx)(ue,{color:l,d:ce(c)}),(0,i.jsx)(pe,{d:le()})]}),(0,i.jsxs)(he,{transform:`translate(50,0), scale(${v?"1":"-1"}, 1)`,visible:x||f,children:[(0,i.jsx)(me,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,i.jsx)(xe,{transform:"scale(-1, 1)",y:"15",dominantBaseline:"middle",children:r("w",h[0])})]})]}):null,k?(0,i.jsxs)("g",{transform:`translate(${t(h[1])}, 0), scale(${C?"-1":"1"}, 1)`,children:[(0,i.jsxs)("g",{children:[(0,i.jsx)(ue,{color:d,d:ce(c)}),(0,i.jsx)(pe,{d:le()})]}),(0,i.jsxs)(he,{transform:`translate(50,0), scale(${C?"-1":"1"}, 1)`,visible:x||f,children:[(0,i.jsx)(me,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,i.jsx)(xe,{y:"15",dominantBaseline:"middle",children:r("e",h[1])})]})]}):null,N&&(0,i.jsx)(de,{color:l}),R&&(0,i.jsx)("g",{transform:`translate(${a}, 0) scale(-1, 1)`,children:(0,i.jsx)(de,{color:d})})]})]})),[r,d,k,C,v,f,e,c,a,h,R,x,N,l,_,t])},ye=x.default.line.withConfig({displayName:"Line__StyledLine",componentId:"sc-6eaa82df-0"})`
  opacity: 0.5;
  stroke-width: 2;
  stroke: ${({theme:e})=>e.neutral1};
  fill: none;
`,je=({value:e,xScale:t,innerHeight:n})=>(0,E.useMemo)((()=>(0,i.jsx)(ye,{x1:t(e),y1:"0",x2:t(e),y2:n})),[e,t,n]);function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},be.apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ce=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=ve(e,["color","size"]);return E.createElement("svg",be({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),E.createElement("polyline",{points:"1 4 1 10 7 10"}),E.createElement("polyline",{points:"23 20 23 14 17 14"}),E.createElement("path",{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))}));Ce.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Ce.displayName="RefreshCcw";var we=Ce;function Ne(){return Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ne.apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _e=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=Re(e,["color","size"]);return E.createElement("svg",Ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),E.createElement("circle",{cx:"11",cy:"11",r:"8"}),E.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),E.createElement("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),E.createElement("line",{x1:"8",y1:"11",x2:"14",y2:"11"}))}));_e.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},_e.displayName="ZoomIn";var Ee=_e;function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ke.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Te=(0,E.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=Ie(e,["color","size"]);return E.createElement("svg",ke({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),E.createElement("circle",{cx:"11",cy:"11",r:"8"}),E.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),E.createElement("line",{x1:"8",y1:"11",x2:"14",y2:"11"}))}));Te.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Te.displayName="ZoomOut";var Se=Te;const Ae=x.default.div.withConfig({displayName:"Zoom__Wrapper",componentId:"sc-3a525a68-0"})`
  display: grid;
  grid-template-columns: repeat(${({count:e})=>e.toString()}, 1fr);
  grid-gap: 6px;

  position: absolute;
  top: -32px;
  right: 0;
`,Oe=(0,x.default)(B.Ux).withConfig({displayName:"Zoom__Button",componentId:"sc-3a525a68-1"})`
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
    color: ${({theme:e})=>e.neutral1};
  }

  width: 32px;
  height: 32px;
  padding: 4px;
`,Be=x.default.rect.withConfig({displayName:"Zoom__ZoomOverlay",componentId:"sc-3a525a68-2"})`
  fill: transparent;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;function Me({svg:e,xScale:t,setZoom:n,width:r,height:o,resetBrush:s,showResetButton:a,zoomLevels:c}){const l=(0,E.useRef)(),[d,u,p,h]=(0,E.useMemo)((()=>[()=>e&&l.current&&(0,ne.Ys)(e).transition().call(l.current.scaleBy,2),()=>e&&l.current&&(0,ne.Ys)(e).transition().call(l.current.scaleBy,.5),()=>e&&l.current&&(0,ne.Ys)(e).transition().call(l.current.scaleTo,.5),()=>e&&l.current&&(0,ne.Ys)(e).call(l.current.transform,ne.CRH.translate(0,0).scale(1)).transition().call(l.current.scaleTo,.5)]),[e]);return(0,E.useEffect)((()=>{e&&(l.current=(0,ne.sPX)().scaleExtent([c.min,c.max]).extent([[0,0],[r,o]]).on("zoom",(({transform:e})=>n(e))),(0,ne.Ys)(e).call(l.current))}),[o,r,n,e,t,l,c,c.max,c.min]),(0,E.useEffect)((()=>{p()}),[p,c]),(0,i.jsxs)(Ae,{count:a?3:2,children:[a&&(0,i.jsx)(Oe,{onClick:()=>{s(),h()},disabled:!1,children:(0,i.jsx)(we,{size:16})}),(0,i.jsx)(Oe,{onClick:d,disabled:!1,children:(0,i.jsx)(Ee,{size:16})}),(0,i.jsx)(Oe,{onClick:u,disabled:!1,children:(0,i.jsx)(Se,{size:16})})]})}const Ue=e=>e.price0,De=e=>e.activeLiquidity;function Le({id:e="liquidityChartRangeInput",data:{series:t,current:n},ticksAtLimit:r,styles:o,dimensions:{width:s,height:a},margins:c,interactive:l=!0,brushDomain:d,brushLabels:u,onBrushDomainChange:p,zoomLevels:h}){const m=(0,E.useRef)(null),[x,g]=(0,E.useState)(null),[f,y]=(0,E.useMemo)((()=>[a-c.top-c.bottom,s-c.left-c.right]),[s,a,c]),{xScale:j,yScale:b}=(0,E.useMemo)((()=>{const e={xScale:(0,ne.BYU)().domain([n*h.initialMin,n*h.initialMax]).range([0,y]),yScale:(0,ne.BYU)().domain([0,(0,ne.Fp7)(t,De)]).range([f,0])};if(x){const t=x.rescaleX(e.xScale);e.xScale.domain(t.domain())}return e}),[n,h.initialMin,h.initialMax,y,t,f,x]);return(0,E.useEffect)((()=>{g(null)}),[h]),(0,E.useEffect)((()=>{d||p(j.domain(),void 0)}),[d,p,j]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Me,{svg:m.current,xScale:j,setZoom:g,width:y,height:a,resetBrush:()=>{p([n*h.initialMin,n*h.initialMax],"reset")},showResetButton:Boolean(r[te.Mb.LOWER]||r[te.Mb.UPPER]),zoomLevels:h}),(0,i.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${s} ${a}`,style:{overflow:"visible"},children:[(0,i.jsxs)("defs",{children:[(0,i.jsx)("clipPath",{id:`${e}-chart-clip`,children:(0,i.jsx)("rect",{x:"0",y:"0",width:y,height:a})}),d&&(0,i.jsx)("mask",{id:`${e}-chart-area-mask`,children:(0,i.jsx)("rect",{fill:"white",x:j(d[0]),y:"0",width:j(d[1])-j(d[0]),height:f})})]}),(0,i.jsxs)("g",{transform:`translate(${c.left},${c.top})`,children:[(0,i.jsxs)("g",{clipPath:`url(#${e}-chart-clip)`,children:[(0,i.jsx)(re,{series:t,xScale:j,yScale:b,xValue:Ue,yValue:De}),d&&(0,i.jsx)("g",{mask:`url(#${e}-chart-area-mask)`,children:(0,i.jsx)(re,{series:t,xScale:j,yScale:b,xValue:Ue,yValue:De,fill:o.area.selection})}),(0,i.jsx)(je,{value:n,xScale:j,innerHeight:f}),(0,i.jsx)(ae,{xScale:j,innerHeight:f})]}),(0,i.jsx)(Be,{width:y,height:a,ref:m}),(0,i.jsx)(fe,{id:e,xScale:j,interactive:l,brushLabelValue:u,brushExtent:d??j.domain(),innerWidth:y,innerHeight:f,setBrushExtent:p,westHandleColor:o.brush.handle.west,eastHandleColor:o.brush.handle.east})]})]})]})}var Pe=n(91101),$e=n(68222),ze=n(56762),Ye=n(44998),Fe=n.n(Ye),We=n(55831),qe=n.n(We);const Ze=8;function Ge(e,t,n,i,r,o){let s={...n},a=[];for(let c=r+(o?1:-1);o?c<i.length:c>=0;o?c++:c--){const n=Number(i[c].tick),r={liquidityActive:s.liquidityActive,tick:n,liquidityNet:Fe().BigInt(i[c].liquidityNet),price0:(0,u.tickToPrice)(e,t,n).toFixed(Ze)};o?r.liquidityActive=Fe().add(s.liquidityActive,Fe().BigInt(i[c].liquidityNet)):!o&&Fe().notEqual(s.liquidityNet,Fe().BigInt(0))&&(r.liquidityActive=Fe().subtract(s.liquidityActive,s.liquidityNet)),a.push(r),s=r}return o||(a=a.reverse()),a}var He=n(36665),Ve=n(46109);const Ke=8,Je=[d.ChainId.ARBITRUM_ONE,d.ChainId.ARBITRUM_GOERLI],Xe={blocksPerFetch:2},Qe=(e,t)=>e&&t?Math.floor(e/u.TICK_SPACINGS[t])*u.TICK_SPACINGS[t]:void 0,et=(e,t)=>Math.floor(e/t/256);const tt=1e3;function nt(e,t,n){const i=!e||!Je.includes(e.chainId),o=function(e,t,n,i=125){const[o,s]=(0,E.useState)([]),[a,c]=(0,Ve.AI)(e,t,n),l=n&&u.TICK_SPACINGS[n],p=c?.tickCurrent&&l?(0,u.nearestUsableTick)(c?.tickCurrent,l):void 0,{chainId:h}=(0,r.useWeb3React)(),m=e&&t&&n&&a===Ve.tK.EXISTS?u.Pool.getAddress(e?.wrapped,t?.wrapped,n,void 0,h?d.V3_CORE_FACTORY_ADDRESSES[h]:void 0):void 0,x=(0,E.useMemo)((()=>l&&p?et(p-i*l,l):void 0),[l,p,i]),g=(0,E.useMemo)((()=>l&&p?et(p+i*l,l):void 0),[l,p,i]),f=(0,E.useMemo)((()=>g&&x&&m&&m!==Pe.r_?new Array(g-x+1).fill(0).map(((e,t)=>t+x)).map((e=>[m,e])):[]),[x,g,m]),y=(0,He.jT)(),j=(0,N.es)(f.length>0?y:void 0,"getPopulatedTicksInWord",f,Xe),b=(0,E.useMemo)((()=>j.some((({error:e})=>e))),[j]),v=(0,E.useMemo)((()=>j.some((({loading:e})=>e))),[j]),C=(0,E.useMemo)((()=>j.some((({syncing:e})=>e))),[j]),w=(0,E.useMemo)((()=>j.some((({valid:e})=>e))),[j]),R=(0,E.useMemo)((()=>j.map((({result:e})=>e?.populatedTicks)).reduce(((e,t)=>[...e,...t?.map((e=>({tick:e.tick,liquidityNet:Fe().BigInt(e.liquidityNet)})))??[]]),[])),[j]);return(0,E.useEffect)((()=>{s([])}),[e,t,n]),(0,E.useEffect)((()=>{C||v||b||!w||s(R.sort(((e,t)=>e.tick-t.tick)))}),[b,v,C,R,w]),(0,E.useMemo)((()=>({isLoading:v,IsSyncing:C,isError:b,isValid:w,tickData:o})),[v,C,b,w,o])}(i?void 0:e,t,n),[s,a]=(0,E.useState)(0),[c,l]=(0,E.useState)([]),{data:p,error:h,loading:m}=function(e,t,n,i=0){const{chainId:o}=(0,r.useWeb3React)(),s=e&&t&&n?u.Pool.getAddress(e?.wrapped,t?.wrapped,n,void 0,o?d.V3_CORE_FACTORY_ADDRESSES[o]:void 0):void 0;return(0,$e.K_)({variables:{poolAddress:s?.toLowerCase(),skip:i},skip:!s,pollInterval:qe()("30s"),client:ze.l8})}(i?e:void 0,t,n,s);return(0,E.useEffect)((()=>{p?.ticks.length&&(l((e=>[...e,...p.ticks])),p.ticks.length===tt&&a((e=>e+tt)))}),[p?.ticks]),{isLoading:i?m||p?.ticks.length===tt:o.isLoading,error:i?h:o.isError,ticks:i?c:o.tickData}}function it({currencyA:e,currencyB:t,feeAmount:n}){const{isLoading:i,error:r,data:o}=function(e,t,n){const i=(0,Ve.AI)(e,t,n),r=(0,E.useMemo)((()=>Qe(i[1]?.tickCurrent,n)),[i,n]),{isLoading:o,error:s,ticks:a}=nt(e,t,n);return(0,E.useMemo)((()=>{if(!e||!t||void 0===r||i[0]!==Ve.tK.EXISTS||!a||0===a.length||o)return{isLoading:o||i[0]===Ve.tK.LOADING,error:s,activeTick:r,data:void 0};const n=e?.wrapped,c=t?.wrapped,l=a.findIndex((({tick:e})=>e>r))-1;if(l<0)return console.error("TickData pivot not found"),{isLoading:o,error:s,activeTick:r,data:void 0};const d={liquidityActive:Fe().BigInt(i[1]?.liquidity??0),tick:r,liquidityNet:Number(a[l].tick)===r?Fe().BigInt(a[l].liquidityNet):Fe().BigInt(0),price0:(0,u.tickToPrice)(n,c,r).toFixed(Ke)},p=Ge(n,c,d,a,l,!0),h=Ge(n,c,d,a,l,!1).concat(d).concat(p);return{isLoading:o,error:s,activeTick:r,data:h}}),[e,t,r,i,a,o,s])}(e,t,n),s=(0,E.useCallback)((()=>{if(!o?.length)return;const e=[];for(let t=0;t<o.length;t++){const n=o[t],i={activeLiquidity:parseFloat(n.liquidityActive.toString()),price0:parseFloat(n.price0)};i.activeLiquidity>0&&e.push(i)}return e}),[o]);return(0,E.useMemo)((()=>({isLoading:i,error:r,formattedData:i?void 0:s()})),[i,r,s])}const rt={[u.FeeAmount.LOWEST]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[u.FeeAmount.LOW]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[u.FeeAmount.MEDIUM]:{initialMin:.5,initialMax:2,min:1e-5,max:20},[u.FeeAmount.HIGH]:{initialMin:.5,initialMax:2,min:1e-5,max:20}},ot=x.default.div.withConfig({displayName:"LiquidityChartRangeInput__ChartWrapper",componentId:"sc-dc0aeb6-0"})`
  position: relative;
  width: 100%;
  max-height: 200px;
  justify-content: center;
  align-content: center;
`;function st({message:e,icon:t}){return(0,i.jsxs)(U.lg,{style:{height:"100%",justifyContent:"center"},children:[t,e&&(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{padding:10,marginTop:"20px",textAlign:"center",children:e})]})}function at({currencyA:e,currencyB:t,feeAmount:n,ticksAtLimit:r,price:o,priceLower:s,priceUpper:a,onLeftRangeInput:l,onRightRangeInput:d,interactive:p}){const h=(0,x.useTheme)(),m=(0,z.r)(e?.wrapped),g=(0,z.r)(t?.wrapped),f=e&&t&&e?.wrapped.sortsBefore(t?.wrapped),{isLoading:y,error:j,formattedData:b}=it({currencyA:e,currencyB:t,feeAmount:n}),v=(0,E.useCallback)(((e,t)=>{let n=Number(e[0]);const i=Number(e[1]);n<=0&&(n=1/10**6),(0,ee.dC)((()=>{(!r[f?te.Mb.LOWER:te.Mb.UPPER]||"handle"===t||"reset"===t)&&n>0&&l(n.toFixed(6)),(!r[f?te.Mb.UPPER:te.Mb.LOWER]||"reset"===t)&&i>0&&i<1e35&&d(i.toFixed(6))}))}),[f,l,d,r]);p=p&&Boolean(b?.length);const C=(0,E.useMemo)((()=>{const e=f?s:a?.invert(),t=f?a:s?.invert();return e&&t?[parseFloat(e?.toSignificant(6)),parseFloat(t?.toSignificant(6))]:void 0}),[f,s,a]),{formatDelta:w}=(0,O.Gb)(),N=(0,E.useCallback)(((e,t)=>{if(!o)return"";if("w"===e&&r[f?te.Mb.LOWER:te.Mb.UPPER])return"0";if("e"===e&&r[f?te.Mb.UPPER:te.Mb.LOWER])return"\u221e";const n=(t<o?-1:1)*((Math.max(t,o)-Math.min(t,o))/o)*100;return o?""+((Math.sign(n)<0?"-":"")+w(n)):""}),[w,f,o,r]),R=!e||!t||void 0===b&&!y;return(0,i.jsx)(U.Tz,{gap:"md",style:{minHeight:"200px"},children:R?(0,i.jsx)(st,{message:(0,i.jsx)(c.cC,{id:"OZUH85"}),icon:(0,i.jsx)(F.Z,{size:56,stroke:h.neutral1})}):y?(0,i.jsx)(st,{icon:(0,i.jsx)($.ZP,{size:"40px",stroke:h.neutral2})}):j?(0,i.jsx)(st,{message:(0,i.jsx)(c.cC,{id:"79D0qY"}),icon:(0,i.jsx)(V,{size:56,stroke:h.neutral2})}):b&&0!==b.length&&o?(0,i.jsx)(ot,{children:(0,i.jsx)(Le,{data:{series:b,current:o},dimensions:{width:560,height:200},margins:{top:10,right:2,bottom:20,left:0},styles:{area:{selection:h.accent1},brush:{handle:{west:(0,Y.p_)(.1,m)??h.critical,east:(0,Y.p_)(.1,g)??h.accent1}}},interactive:p,brushLabels:N,brushDomain:C,onBrushDomainChange:v,zoomLevels:rt[n??u.FeeAmount.MEDIUM],ticksAtLimit:r})}):(0,i.jsx)(st,{message:(0,i.jsx)(c.cC,{id:"rH6vg9"}),icon:(0,i.jsx)(Q,{size:56,stroke:h.neutral2})})})}var ct=n(4987),lt=n(56588),dt=n(45533),ut=n(19969),pt=n(56823),ht=n(51745),mt=n(2304),xt=n(49111);const gt=({position:e,title:t,inRange:n,baseCurrencyDefault:r,ticksAtLimit:o})=>{const s=(0,x.useTheme)(),{formatCurrencyAmount:a,formatDelta:l,formatPrice:d,formatTickPrice:u}=(0,O.Gb)(),p=(0,xt.B)(e.pool.token0),h=(0,xt.B)(e.pool.token1),[m,f]=(0,E.useState)(r?r===p?p:r===h?h:p:p),y=m===p,j=y?h:p,b=y?e.pool.priceOf(e.pool.token0):e.pool.priceOf(e.pool.token1),v=y?e.token0PriceLower:e.token0PriceUpper.invert(),C=y?e.token0PriceUpper:e.token0PriceLower.invert(),w=(0,E.useCallback)((()=>{f(j)}),[j]),N=e?.liquidity&&Fe().equal(e?.liquidity,Fe().BigInt(0));return(0,i.jsxs)(U.Tz,{gap:"md",style:{marginTop:"0.5rem"},children:[(0,i.jsxs)(mt.m0,{style:{marginBottom:"0.5rem"},children:[(0,i.jsxs)(mt.DA,{children:[(0,i.jsx)(dt.Z,{currency0:p??void 0,currency1:h??void 0,size:24,margin:!0}),(0,i.jsxs)(g.Tv.DeprecatedLabel,{ml:"10px",fontSize:"24px",children:[p?.symbol," / ",h?.symbol]})]}),(0,i.jsx)(lt.Z,{removed:N,inRange:n})]}),(0,i.jsx)(M.hl,{children:(0,i.jsxs)(U.Tz,{gap:"md",children:[(0,i.jsxs)(mt.m0,{children:[(0,i.jsxs)(mt.DA,{children:[(0,i.jsx)(pt.Z,{currency:p}),(0,i.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:p?.symbol})]}),(0,i.jsx)(mt.DA,{children:(0,i.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:a({amount:e.amount0})})})]}),(0,i.jsxs)(mt.m0,{children:[(0,i.jsxs)(mt.DA,{children:[(0,i.jsx)(pt.Z,{currency:h}),(0,i.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:h?.symbol})]}),(0,i.jsx)(mt.DA,{children:(0,i.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:a({amount:e.amount1})})})]}),(0,i.jsx)(ut.SS,{}),(0,i.jsxs)(mt.m0,{children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"EU3wU4"})}),(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"J/hVSQ",values:{0:l(e?.pool?.fee/Pe.PM)}})})]})]})}),(0,i.jsxs)(U.Tz,{gap:"md",children:[(0,i.jsxs)(mt.m0,{children:[t?(0,i.jsx)(g.Tv.DeprecatedMain,{children:t}):(0,i.jsx)("div",{}),(0,i.jsx)(ht.Z,{currencyA:y?p:h,currencyB:y?h:p,handleRateToggle:w})]}),(0,i.jsxs)(mt.m0,{children:[(0,i.jsx)(M.hl,{width:"48%",padding:"8px",children:(0,i.jsxs)(U.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"EQs1sJ"})}),(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:u({price:v,atLimit:o,direction:te.Mb.LOWER})}),(0,i.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"7Z4WfS",values:{0:j.symbol,1:m.symbol}})}),(0,i.jsx)(g.Tv.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,i.jsx)(c.cC,{id:"WgTuci",values:{0:m?.symbol}})})]})}),(0,i.jsx)(M.hl,{width:"48%",padding:"8px",children:(0,i.jsxs)(U.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"5etEUX"})}),(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:u({price:C,atLimit:o,direction:te.Mb.UPPER})}),(0,i.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"7Z4WfS",values:{0:j.symbol,1:m.symbol}})}),(0,i.jsx)(g.Tv.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,i.jsx)(c.cC,{id:"WgTuci",values:{0:j?.symbol}})})]})})]}),(0,i.jsx)(M.hl,{padding:"12px ",children:(0,i.jsxs)(U.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"DWd30U"})}),(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{children:`${d({price:b,type:O.sw.TokenTx})} `}),(0,i.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"7Z4WfS",values:{0:j.symbol,1:m.symbol}})})]})})]})]})};var ft=n(22614);const yt=(0,x.default)(B.JU).attrs((()=>({padding:"6px",$borderRadius:"8px"}))).withConfig({displayName:"PresetsButtons__Button",componentId:"sc-1074f274-0"})`
  color: ${({theme:e})=>e.neutral1};
  flex: 1;
`;function jt({onSetFullRange:e}){return(0,i.jsx)(mt.BA,{gap:"4px",width:"auto",children:(0,i.jsx)(yt,{"data-testid":"set-full-range",onClick:e,children:(0,i.jsx)(g.Tv.DeprecatedBody,{fontSize:12,children:(0,i.jsx)(c.cC,{id:"5IHTSS"})})})})}var bt=n(85729),vt=n(36727),Ct=n(15627),wt=n(48244),Nt=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]'),Rt=n(68434);var _t=n(92930),Et=n(95202),kt=n(57282),It=n(59991),Tt=n(97905),St=n(843),At=n(64614);const Ot=new(n(45433).vU)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function Bt(e,t){if(!e.currency.isToken)throw new Error("Must call with an amount of token");const n=Ot.encodeFunctionData("approve",[t,(0,u.toHex)(e.quotient)]);return{to:e.currency.address,data:n,value:"0x0"}}var Mt=n(54479),Ut=n(21103),Dt=n(96700),Lt=n(55494);const Pt=x.default.div.withConfig({displayName:"Review__Wrapper",componentId:"sc-66673065-0"})`
  padding-top: 12px;
`;function $t({position:e,outOfRange:t,ticksAtLimit:n}){return(0,i.jsx)(Pt,{children:(0,i.jsx)(U.Tz,{gap:"lg",children:e?(0,i.jsx)(gt,{position:e,inRange:!t,ticksAtLimit:n,title:"Selected Range"}):null})})}var zt=n(28233);const Yt=new d.Percent(50,1e4),Ft=(0,x.default)(R.e).withConfig({displayName:"AddLiquidity__StyledBodyWrapper",componentId:"sc-8e16e1d4-0"})`
  padding: ${({$hasExistingPosition:e})=>e?"10px":0};
  max-width: 640px;
`;function Wt(){const{chainId:e}=(0,r.useWeb3React)();return(0,C.EC)(e)?(0,i.jsx)(qt,{}):(0,i.jsx)(_.PositionPageUnsupportedContent,{})}function qt(){const e=(0,o.s0)(),{currencyIdA:t,currencyIdB:n,feeAmount:f,tokenId:y}=(0,o.UO)(),{account:j,chainId:C,provider:R}=(0,r.useWeb3React)(),_=(0,x.useTheme)(),$=(0,p.oO)(),z=(0,h.LK)(),Y=(0,Tt.h7)(),F=(0,He.GL)(),{position:W,loading:q}=(0,It.n)(y?a.O$.from(y):void 0),Z=!!W&&!q,{position:G}=function(e){const t=(0,Ct.U8)(e?.token0),n=(0,Ct.U8)(e?.token1),[,i]=(0,Ve.AI)(t??void 0,n??void 0,e?.fee);let r;return i&&e&&(r=new u.Position({pool:i,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper})),{position:r,pool:i??void 0}}(W),H=f&&Object.values(u.FeeAmount).includes(parseFloat(f))?parseFloat(f):void 0,V=(0,Ct.U8)(t),K=(0,Ct.U8)(n),J=V&&K&&V.wrapped.equals(K.wrapped)?void 0:K,{independentField:X,typedValue:Q,startPriceTypedValue:ee}=(0,T.KS)(),{pool:ne,ticks:ie,dependentField:re,price:oe,pricesAtTicks:se,pricesAtLimit:ae,parsedAmounts:ce,currencyBalances:le,position:de,noLiquidity:ue,currencies:pe,errorMessage:he,invalidPool:me,invalidRange:xe,outOfRange:ge,depositADisabled:fe,depositBDisabled:ye,invertPrice:je,ticksAtLimit:be}=(0,T.m2)(V??void 0,J??void 0,H,V??void 0,G),{formatPrice:ve}=(0,O.Gb)(),Ce=ve({price:je?oe?.invert():oe,type:O.sw.TokenTx}),{onFieldAInput:we,onFieldBInput:Ne,onLeftRangeInput:Re,onRightRangeInput:_e,onStartPriceInput:Ee}=(0,T.EG)(ue),ke=!he&&!xe,[Ie,Te]=(0,E.useState)(!1),[Se,Ae]=(0,E.useState)(!1),Oe=(0,kt.Z)(),[Be,Me]=(0,E.useState)(""),Ue={[X]:Q,[re]:ce[re]?.toSignificant(6)??""},De={[te.gN.CURRENCY_A]:(0,Et.sq)(ce[te.gN.CURRENCY_A]),[te.gN.CURRENCY_B]:(0,Et.sq)(ce[te.gN.CURRENCY_B])},Le=[te.gN.CURRENCY_A,te.gN.CURRENCY_B].reduce(((e,t)=>({...e,[t]:(0,Dt.i)(le[t])})),{}),$e=[te.gN.CURRENCY_A,te.gN.CURRENCY_B].reduce(((e,t)=>({...e,[t]:Le[t]?.equalTo(ce[t]??"0")})),{}),ze=function(){const{account:e}=(0,r.useWeb3React)(),t=(0,Rt.Z)();return(0,He.cq)(t?e??void 0:void 0,Nt,!0)}(),[Ye,Fe]=(0,wt.q)(ze?void 0:ce[te.gN.CURRENCY_A],C?d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C]:void 0),[We,qe]=(0,wt.q)(ze?void 0:ce[te.gN.CURRENCY_B],C?d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C]:void 0),Ze=(0,At.eq)(ge?Pe.fI:Yt);async function Ge(){if(C&&R&&j&&F&&V&&J&&de&&j&&Oe){const e=V.isNative?V:J.isNative?J:void 0,{calldata:t,value:n}=Z&&y?u.NonfungiblePositionManager.addCallParameters(de,{tokenId:y,slippageTolerance:Ze,deadline:Oe.toString(),useNative:e}):u.NonfungiblePositionManager.addCallParameters(de,{slippageTolerance:Ze,recipient:j,deadline:Oe.toString(),useNative:e,createPool:ue});let i={to:d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C],data:t,value:n};if(ze){const e=ce[te.gN.CURRENCY_A],t=ce[te.gN.CURRENCY_B],n=[...e&&e.currency.isToken?[Bt(e,d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C])]:[],...t&&t.currency.isToken?[Bt(t,d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C])]:[],{to:i.to,data:i.data,value:i.value}],r=ze.interface.encodeFunctionData("wc_multiCall",[n]);i={to:ze.address,data:r,value:"0x0"}}const r=await R.getSigner().getChainId();if(C!==r)throw new A.CJ;Ae(!0),R.getSigner().estimateGas(i).then((e=>{const t={...i,gasLimit:(0,Mt.y)(e)};return R.getSigner().sendTransaction(t).then((e=>{Ae(!1);const t={type:St.i.ADD_LIQUIDITY_V3_POOL,baseCurrencyId:(0,Ut.H)(V),quoteCurrencyId:(0,Ut.H)(J),createPool:Boolean(ue),expectedAmountBaseRaw:ce[te.gN.CURRENCY_A]?.quotient?.toString()??"0",expectedAmountQuoteRaw:ce[te.gN.CURRENCY_B]?.quotient?.toString()??"0",feeAmount:de.pool.fee};Y(e,t),Me(e.hash),(0,p._P)(l.vp.ADD_LIQUIDITY_SUBMITTED,{label:[pe[te.gN.CURRENCY_A]?.symbol,pe[te.gN.CURRENCY_B]?.symbol].join("/"),...$,...t})}))})).catch((e=>{console.error("Failed to send transaction",e),Ae(!1),4001!==e?.code&&console.error(e)}))}}const Ke=(0,E.useCallback)(((e,t)=>{const n=(0,Ut.H)(e);if(n===t)return[n,void 0];{const e="ETH"===n||void 0!==C&&n===s.Fl[C]?.address,i=void 0!==t&&("ETH"===t||void 0!==C&&t===s.Fl[C]?.address);return e&&i?[n,void 0]:[n,t]}}),[C]),Je=(0,E.useCallback)((t=>{const[i,r]=Ke(t,n);e(void 0===r?`/add/${i}`:`/add/${i}/${r}`)}),[Ke,n,e]),Xe=(0,E.useCallback)((n=>{const[i,r]=Ke(n,t);e(void 0===r?`/add/${i}`:`/add/${r}/${i}`)}),[Ke,t,e]),Qe=(0,E.useCallback)((i=>{Re(""),_e(""),e(`/add/${t}/${n}/${i}`)}),[t,n,e,Re,_e]),et=(0,E.useCallback)((()=>{Te(!1),Be&&(we(""),e("/pools")),Me("")}),[e,we,Be]),tt=(0,_t.G)(pe?.CURRENCY_A,pe?.CURRENCY_B),nt=(0,E.useCallback)((()=>{we(""),Ne(""),Re(""),_e(""),e("/add")}),[e,we,Ne,Re,_e]),{[te.Mb.LOWER]:it,[te.Mb.UPPER]:rt}=ie,{[te.Mb.LOWER]:ot,[te.Mb.UPPER]:st}=se,{getDecrementLower:lt,getIncrementLower:dt,getDecrementUpper:ut,getIncrementUpper:pt,getSetFullRange:xt}=(0,T.a6)(V??void 0,J??void 0,H,it,rt,ne),yt=!ze&&Ye!==wt.U.APPROVED&&!!ce[te.gN.CURRENCY_A],Ot=!ze&&We!==wt.U.APPROVED&&!!ce[te.gN.CURRENCY_B],Pt=`Supplying ${fe?"":ce[te.gN.CURRENCY_A]?.toSignificant(6)} ${fe?"":pe[te.gN.CURRENCY_A]?.symbol} ${ge?"":"and"} ${ye?"":ce[te.gN.CURRENCY_B]?.toSignificant(6)} ${ye?"":pe[te.gN.CURRENCY_B]?.symbol}`,[Wt,qt]=(0,k.lr)(),Zt=(0,E.useCallback)((()=>{xt();const e=ae[te.Mb.LOWER];e&&Wt.set("minPrice",e.toSignificant(5));const t=ae[te.Mb.UPPER];t&&Wt.set("maxPrice",t.toSignificant(5)),qt(Wt)}),[xt,ae,Wt,qt]),Gt=(0,w.Z)(Wt);(0,E.useEffect)((()=>{const e=Wt.get("minPrice"),t=Gt?.get("minPrice");!e||"string"!==typeof e||isNaN(e)||t&&t===e||Re(e)}),[Wt]),(0,E.useEffect)((()=>{const e=Wt.get("maxPrice"),t=Gt?.get("maxPrice");!e||"string"!==typeof e||isNaN(e)||t&&t===e||_e(e)}),[Wt]);const Ht=()=>tt?(0,i.jsx)(B.DF,{disabled:!0,$borderRadius:"12px",padding:"12px",children:(0,i.jsx)(g.Tv.DeprecatedMain,{mb:"4px",children:(0,i.jsx)(c.cC,{id:"Iac4Ia"})})}):j?(0,i.jsxs)(U.Tz,{gap:"md",children:[(Ye===wt.U.NOT_APPROVED||Ye===wt.U.PENDING||We===wt.U.NOT_APPROVED||We===wt.U.PENDING)&&ke&&(0,i.jsxs)(mt.m0,{children:[yt&&(0,i.jsx)(B.DF,{onClick:Fe,disabled:Ye===wt.U.PENDING,width:Ot?"48%":"100%",children:Ye===wt.U.PENDING?(0,i.jsx)(Lt.bb,{children:(0,i.jsx)(c.cC,{id:"MfyhMG",values:{0:pe[te.gN.CURRENCY_A]?.symbol}})}):(0,i.jsx)(c.cC,{id:"fgGids",values:{0:pe[te.gN.CURRENCY_A]?.symbol}})}),Ot&&(0,i.jsx)(B.DF,{onClick:qe,disabled:We===wt.U.PENDING,width:yt?"48%":"100%",children:We===wt.U.PENDING?(0,i.jsx)(Lt.bb,{children:(0,i.jsx)(c.cC,{id:"MfyhMG",values:{0:pe[te.gN.CURRENCY_B]?.symbol}})}):(0,i.jsx)(c.cC,{id:"fgGids",values:{0:pe[te.gN.CURRENCY_B]?.symbol}})})]}),(0,i.jsx)(B.Kd,{onClick:()=>{Te(!0)},disabled:!ke||!ze&&Ye!==wt.U.APPROVED&&!fe||!ze&&We!==wt.U.APPROVED&&!ye,error:!ke&&!!ce[te.gN.CURRENCY_A]&&!!ce[te.gN.CURRENCY_B],children:(0,i.jsx)(I.xv,{fontWeight:535,children:he||(0,i.jsx)(c.cC,{id:"rdUucN"})})})]}):(0,i.jsx)(p.M8,{events:[l.TM.onClick],name:l.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:l.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(B.Sy,{onClick:z,$borderRadius:"12px",padding:"12px",children:(0,i.jsx)(c.cC,{id:"VHOVEJ"})})}),Vt=De[te.gN.CURRENCY_A],Kt=De[te.gN.CURRENCY_B],Jt=(0,E.useMemo)((()=>({data:Vt?parseFloat(Vt.toSignificant()):void 0,isLoading:!1})),[Vt]),Xt=(0,E.useMemo)((()=>({data:Kt?parseFloat(Kt.toSignificant()):void 0,isLoading:!1})),[Kt]),Qt=(0,N.Wk)(y?F:null,"ownerOf",[y]).result?.[0],en=(0,S.K)(Qt,j)||(0,S.K)(W?.operator,j),tn=Boolean(Z&&j&&!en);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(zt.zH,{children:[(0,i.jsx)(vt.Z,{isOpen:Ie,onDismiss:et,attemptingTxn:Se,hash:Be,reviewContent:()=>(0,i.jsx)(vt.p,{title:(0,i.jsx)(c.cC,{id:"OBdohg"}),onDismiss:et,topContent:()=>(0,i.jsx)($t,{parsedAmounts:ce,position:de,existingPosition:G,priceLower:ot,priceUpper:st,outOfRange:ge,ticksAtLimit:be}),bottomContent:()=>(0,i.jsx)(B.DF,{style:{marginTop:"1rem"},onClick:Ge,children:(0,i.jsx)(I.xv,{fontWeight:535,fontSize:20,children:(0,i.jsx)(c.cC,{id:"m16xKo"})})})}),pendingText:Pt}),(0,i.jsxs)(Ft,{$hasExistingPosition:Z,children:[(0,i.jsx)(ct.w,{creating:!1,adding:!0,positionID:y,autoSlippage:Yt,showBackLink:!Z,children:!Z&&(0,i.jsx)(mt.ZP,{justifyContent:"flex-end",style:{width:"fit-content",minWidth:"fit-content"},children:(0,i.jsx)(zt.SF,{children:(0,i.jsx)(B.oD,{onClick:nt,children:(0,i.jsx)(g.Tv.DeprecatedBlue,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"yYxB17"})})})})})}),(0,i.jsx)(zt.im,{children:(0,i.jsxs)(zt.Sx,{wide:!Z,children:[(0,i.jsxs)(U.Tz,{gap:"lg",children:[!Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(U.Tz,{gap:"md",children:[(0,i.jsx)(mt.m0,{paddingBottom:"20px",children:(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"nxRg31"})})}),(0,i.jsxs)(mt.m0,{gap:"md",children:[(0,i.jsx)(D.Z,{value:Ue[te.gN.CURRENCY_A],onUserInput:we,hideInput:!0,onMax:()=>{we(Le[te.gN.CURRENCY_A]?.toExact()??"")},onCurrencySelect:Je,showMaxButton:!$e[te.gN.CURRENCY_A],currency:pe[te.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena",showCommonBases:!0}),(0,i.jsx)(D.Z,{value:Ue[te.gN.CURRENCY_B],hideInput:!0,onUserInput:Ne,onCurrencySelect:Xe,onMax:()=>{Ne(Le[te.gN.CURRENCY_B]?.toExact()??"")},showMaxButton:!$e[te.gN.CURRENCY_B],currency:pe[te.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb",showCommonBases:!0})]}),(0,i.jsx)(L.Z,{disabled:!J||!V,feeAmount:H,handleFeePoolSelect:Qe,currencyA:V??void 0,currencyB:J??void 0})]})," "]}),Z&&G&&(0,i.jsx)(gt,{position:G,title:(0,i.jsx)(c.cC,{id:"dWPDm3"}),inRange:!ge,ticksAtLimit:be})]}),!Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(zt.DD,{gap:"md",disabled:!H||me,children:[(0,i.jsxs)(mt.m0,{children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"5CZbyC"})}),Boolean(V&&J)&&(0,i.jsxs)(mt.DA,{gap:"8px",children:[(0,i.jsx)(jt,{onSetFullRange:Zt}),(0,i.jsx)(ht.Z,{currencyA:V,currencyB:J,handleRateToggle:()=>{be[te.Mb.LOWER]||be[te.Mb.UPPER]||(Re((je?ot:st?.invert())?.toSignificant(6)??""),_e((je?st:ot?.invert())?.toSignificant(6)??""),we(Ue[te.gN.CURRENCY_B]??"")),e(`/add/${n}/${t}${H?"/"+H:""}`)}})]})]}),(0,i.jsx)(ft.Z,{priceLower:ot,priceUpper:st,getDecrementLower:lt,getIncrementLower:dt,getDecrementUpper:ut,getIncrementUpper:pt,onLeftRangeInput:Re,onRightRangeInput:_e,currencyA:V,currencyB:J,feeAmount:H,ticksAtLimit:be}),ge&&(0,i.jsx)(M.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(mt.m0,{children:[(0,i.jsx)(m.Z,{stroke:_.deprecated_yellow3,size:"16px"}),(0,i.jsx)(g.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"b+KjnH"})})]})}),xe&&(0,i.jsx)(M.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(mt.m0,{children:[(0,i.jsx)(m.Z,{stroke:_.deprecated_yellow3,size:"16px"}),(0,i.jsx)(g.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"Jh223O"})})]})})]}),(0,i.jsx)(zt.DD,{gap:"md",disabled:!H||me,children:ue?(0,i.jsxs)(U.Tz,{gap:"md",children:[ue&&(0,i.jsx)(M.Pj,{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"1rem 1rem"},children:(0,i.jsx)(g.Tv.DeprecatedBody,{fontSize:14,style:{fontWeight:535},textAlign:"left",color:_.accent1,children:(0,i.jsx)(c.cC,{id:"X6T02b"})})}),(0,i.jsx)(M.nq,{padding:"12px",children:(0,i.jsx)(zt.Fy,{className:"start-price-input",value:ee,onUserInput:Ee})}),(0,i.jsxs)(mt.m0,{style:{backgroundColor:_.surface1,padding:"12px",borderRadius:"12px"},children:[(0,i.jsx)(g.Tv.DeprecatedMain,{children:(0,i.jsx)(c.cC,{id:"Ay/EYV",values:{0:V?.symbol}})}),(0,i.jsx)(g.Tv.DeprecatedMain,{children:oe?(0,i.jsx)(g.Tv.DeprecatedMain,{children:(0,i.jsxs)(mt.DA,{children:[(0,i.jsx)(P.Z,{maxCharacters:20,text:je?oe?.invert()?.toSignificant(8):oe?.toSignificant(8)})," ",(0,i.jsxs)("span",{style:{marginLeft:"4px"},children:[J?.symbol," per ",V?.symbol]})]})}):"-"})]})]}):(0,i.jsxs)(i.Fragment,{children:[Boolean(oe&&V&&J&&!ue)&&(0,i.jsx)(U.Tz,{gap:"2px",style:{marginTop:"0.5rem"},children:(0,i.jsx)(c.cC,{id:"7k623k",values:{0:oe&&(0,i.jsx)(P.Z,{maxCharacters:20,text:Ce}),1:V&&(0,i.jsxs)(g.Tv.DeprecatedBody,{color:"text2",fontSize:12,children:[J?.symbol," per ",V.symbol]})},components:{0:(0,i.jsx)(g.Tv.DeprecatedMain,{fontWeight:535,fontSize:12,color:"text1"}),1:(0,i.jsx)(g.Tv.DeprecatedBody,{fontWeight:535,fontSize:20,color:"text1"})}})}),(0,i.jsx)(at,{currencyA:V??void 0,currencyB:J??void 0,feeAmount:H,ticksAtLimit:be,price:oe?parseFloat((je?oe.invert():oe).toSignificant(8)):void 0,priceLower:ot,priceUpper:st,onLeftRangeInput:Re,onRightRangeInput:_e,interactive:!Z})]})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(zt.DD,{disabled:me||xe||ue&&!ee,children:(0,i.jsxs)(U.Tz,{gap:"md",children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{children:Z?(0,i.jsx)(c.cC,{id:"BRi+RY"}):(0,i.jsx)(c.cC,{id:"MU9s7M"})}),(0,i.jsx)(D.Z,{value:Ue[te.gN.CURRENCY_A],onUserInput:we,onMax:()=>{we(Le[te.gN.CURRENCY_A]?.toExact()??"")},showMaxButton:!$e[te.gN.CURRENCY_A],currency:pe[te.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena",fiatValue:Jt,showCommonBases:!0,locked:fe}),(0,i.jsx)(D.Z,{value:Ue[te.gN.CURRENCY_B],onUserInput:Ne,onMax:()=>{Ne(Le[te.gN.CURRENCY_B]?.toExact()??"")},showMaxButton:!$e[te.gN.CURRENCY_B],fiatValue:Xt,currency:pe[te.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb",showCommonBases:!0,locked:ye})]})})}),(0,i.jsx)(Ht,{})]})})]}),tn&&(0,i.jsx)(b,{ownerAddress:Qt}),tt&&(0,i.jsx)(v.Z,{show:tt,currencies:[pe.CURRENCY_A,pe.CURRENCY_B]})]}),(0,i.jsx)(bt.c,{})]})}function Zt(){const{currencyIdA:e,currencyIdB:t}=(0,o.UO)(),{chainId:n}=(0,r.useWeb3React)(),a="ETH"===e||void 0!==n&&e===s.Fl[n]?.address,c="ETH"===t||void 0!==n&&t===s.Fl[n]?.address;return e&&t&&(e.toLowerCase()===t.toLowerCase()||a&&c)?(0,i.jsx)(o.Fg,{to:`/add/${e}`,replace:!0}):(0,i.jsx)(Wt,{})}},80608:function(e,t,n){function i(e,t){return!(!e||!t)&&(e===t||e.toLowerCase()===t.toLowerCase())}n.d(t,{K:function(){return i}})},49855:function(e,t,n){var i=n(13712),r=n(41432),o=n.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=(0,i.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,l=a(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Inbox",t.Z=c}}]);
//# sourceMappingURL=8561.a0e8043c.chunk.js.map