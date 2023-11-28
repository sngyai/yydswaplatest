"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9779],{63548:function(e,n,t){t.d(n,{Z:function(){return W}});var r=t(42893),i=t(12204),o=t(19903),a=t(80815),s=t(66196),c=t(13119),d=t(92483),l=t(48141),u=t(40508),p=t(13712),m=t(87253),h=t(39839),f=t(47371),y=t(57482),b=t(44326),g=t(42881),x=t(60198),v=t(45533),w=t(56823),C=t(48972),_=t(2304),N=t(20437),I=t(925);const j=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-3db49bc3-0"})`
  ${f.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,k=m.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-3db49bc3-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,$=(0,m.default)(x.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-3db49bc3-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
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
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,u._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,T=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-3db49bc3-3"})`
  ${f.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,P=m.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-3db49bc3-4"})`
  ${f.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,O=(0,m.default)(P).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-3db49bc3-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,A=m.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-3db49bc3-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,E=(0,m.default)(b.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-3db49bc3-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,S=m.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-3db49bc3-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,R=m.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-3db49bc3-9"})`
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
`,D=(0,m.default)(C.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-3db49bc3-10"})`
  ${c._Q};
  text-align: left;
`,B=(0,m.default)(d.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-3db49bc3-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function W({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:u,currency:f,otherCurrency:b,id:x,showCommonBases:C,showCurrencyAmount:P,disableNonToken:W,renderBalance:M,fiatValue:U,hideBalance:z=!1,pair:V=null,hideInput:G=!1,locked:L=!1,loading:Z=!1,...q}){const[F,K]=(0,p.useState)(!1),{account:H,chainId:X}=(0,a.useWeb3React)(),J=(0,g._h)(H??void 0,f??void 0),Q=(0,m.useTheme)(),{formatCurrencyAmount:Y}=(0,y.Gb)(),ee=(0,p.useCallback)((()=>{K(!1)}),[K]),ne=(0,l.EC)(X);return(0,r.jsxs)(j,{id:x,hideInput:G,...q,children:[!L&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(k,{hideInput:G,disabled:!ne,children:[(0,r.jsxs)(T,{style:G?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!G&&(0,r.jsx)(D,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:Z}),(0,r.jsx)(B,{shouldFetchOnAccountUpdate:F,$fullWidth:G,children:(0,r.jsx)($,{disabled:!ne,visible:void 0!==f,selected:!!f,hideInput:G,className:"open-currency-select-button",onClick:()=>{u&&K(!0)},pointerEvents:u?void 0:"none",children:(0,r.jsxs)(A,{children:[(0,r.jsxs)(_.DA,{children:[V?(0,r.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,r.jsx)(v.Z,{currency0:V.token0,currency1:V.token1,size:24,margin:!0})}):f&&(0,r.jsx)(w.Z,{style:{marginRight:"0.5rem"},currency:f,size:"24px"}),V?(0,r.jsxs)(S,{className:"pair-name-container",children:[V?.token0.symbol,":",V?.token1.symbol]}):(0,r.jsx)(S,{className:"token-symbol-container",active:Boolean(f&&f.symbol),children:(f&&f.symbol&&f.symbol.length>20?f.symbol.slice(0,4)+"..."+f.symbol.slice(f.symbol.length-5,f.symbol.length):f?.symbol)||(0,r.jsx)(i.cC,{id:"T0Y2+3"})})]}),u&&(0,r.jsx)(E,{selected:!!f})]})})})]}),Boolean(!G&&!z&&f)&&(0,r.jsx)(O,{children:(0,r.jsxs)(_.m0,{children:[(0,r.jsx)(c.EG,{$loading:Z,children:U&&(0,r.jsx)(I.x,{fiatValue:U})}),H&&(0,r.jsxs)(_.DA,{style:{height:"17px"},children:[(0,r.jsx)(h.Tv.DeprecatedBody,{onClick:t,color:Q.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!z&&f&&J)&&(M?.(J)||(0,r.jsx)(i.cC,{id:"VuFd5C",values:{0:Y({amount:J,type:y.sw.TokenNonTx})}}))}),Boolean(d&&J)&&(0,r.jsx)(s.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,r.jsx)(R,{onClick:t,children:(0,r.jsx)(i.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,r.jsx)(N.Z,{isOpen:F,onDismiss:ee,onCurrencySelect:u,selectedCurrency:f,otherSelectedCurrency:b,showCommonBases:C,showCurrencyAmount:P,disableNonToken:W})]})}},4987:function(e,n,t){t.d(n,{q:function(){return C},w:function(){return N}});var r=t(42893),i=t(12204),o=t(80815),a=t(8713),s=t(46591),c=t(41440),d=t(80657),l=t(47096),u=t(63498),p=t(40740),m=t(4292),h=t(87253),f=t(39839),y=t(47371),b=t(2304);const g=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-1056be7d-0"})`
  ${y.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,x=(0,h.default)(c.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-1056be7d-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,h.default)(f.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-1056be7d-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,w=(0,h.default)(s.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-1056be7d-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,r.jsx)(g,{children:(0,r.jsxs)(b.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(c.rU,{to:e,children:(0,r.jsx)(w,{})}),(0,r.jsx)(v,{children:(0,r.jsx)(i.cC,{id:"LCFvJr"})})]})})}const _=(0,h.default)(f.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-1056be7d-4"})`
  flex: 1;
  margin: auto;
`;function N({adding:e,creating:n,autoSlippage:t,positionID:s,children:c}){const{chainId:f}=(0,o.useWeb3React)(),y=(0,h.useTheme)(),v=(0,u.T)(),C=(0,d.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:"");return(0,r.jsx)(g,{children:(0,r.jsxs)(b.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(x,{to:C,onClick:()=>{e&&(v((0,p.dA)()),v((0,m.dA)()))},flex:c?"1":void 0,children:(0,r.jsx)(w,{stroke:y.neutral2})}),(0,r.jsx)(_,{textAlign:c?"start":"center",children:n?(0,r.jsx)(i.cC,{id:"ma87bD"}):e?(0,r.jsx)(i.cC,{id:"E6MqGy"}):(0,r.jsx)(i.cC,{id:"cJtosk"})}),c&&(0,r.jsx)(l.xu,{style:{marginRight:".5rem"},children:c}),(0,r.jsx)(a.Z,{autoSlippage:t,chainId:f,hideRoutingSettings:!0})]})})}},48244:function(e,n,t){t.d(n,{U:function(){return r},q:function(){return b}});var r,i=t(75255),o=t(19903),a=t(80815),s=t(66196),c=t(36665),d=t(5976),l=t(15337),u=t(13712),p=t(54479);function m(e,n,t){const{chainId:m}=(0,a.useWeb3React)(),h=e?.currency?.isToken?e.currency:void 0,f=function(e,n,t){const{account:i}=(0,a.useWeb3React)(),o=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:s}=(0,d.Fx)(o,i??void 0,n),c=t(o,n);return(0,u.useMemo)((()=>e&&n?e.currency.isNative?r.APPROVED:s?s.lessThan(e)?c?r.PENDING:r.NOT_APPROVED:r.APPROVED:r.UNKNOWN:r.UNKNOWN),[e,c,n,s])}(e,n,t),y=(0,c.Ib)(h?.address),b=(0,u.useCallback)((async()=>{function t(e){console.warn(`${h?.symbol||"Token"} approval failed:`,e)}if(f!==r.NOT_APPROVED)return t("approve was called unnecessarily");if(!m)return t("no chainId");if(!h)return t("no token");if(!y)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let a=!1;const c=await y.estimateGas.approve(n,i.Bz).catch((()=>(a=!0,y.estimateGas.approve(n,e.quotient.toString()))));return y.approve(n,a?e.quotient.toString():i.Bz,{gasLimit:(0,p.y)(c)}).then((t=>{const r={chain_id:m,token_symbol:h?.symbol,token_address:(0,l.DT)(h)};return(0,s._P)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,r),{response:t,tokenAddress:h.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))}),[f,h,y,e,n,m]);return[f,b]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(r||(r={}));var h=t(97905),f=t(843);function y(e){const n=(0,h.h7)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:r,spenderAddress:i,amount:o}=e;n(t,{type:f.i.APPROVAL,tokenAddress:r,spender:i,amount:o.quotient.toString()})}}))),[n,e])}function b(e,n){const[t,r]=m(e,n,h.wB);return[t,y(r)]}},72714:function(e,n,t){t.d(n,{Z:function(){return s},e:function(){return a}});var r=t(42893),i=t(87253),o=t(437);const a=i.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function s(e){return(0,r.jsx)(a,{...e})}},39515:function(e,n,t){t.d(n,{u:function(){return i}});const r=new(t(15387).Fraction)(1,1);function i(e,n){if(n.lessThan(0)||n.greaterThan(r))throw new Error("Unexpected slippage");return[e.multiply(r.subtract(n)).quotient,e.multiply(r.add(n)).quotient]}},49287:function(e,n,t){var r=t(13712),i=t(41432),o=t.n(i);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,d=s(e,["color","size"]);return r.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Plus",n.Z=c}}]);
//# sourceMappingURL=9779.de7ef3b0.chunk.js.map