"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6234],{51745:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(42893),r=t(12204),s=t(87253);const c=s.default.button.withConfig({displayName:"MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,o=s.default.span.withConfig({displayName:"MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function d({currencyA:e,currencyB:n,handleRateToggle:t}){const s=e?.wrapped,d=n?.wrapped,a=s&&d&&s.sortsBefore(d);return s&&d?(0,i.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:t,children:(0,i.jsxs)(c,{width:"fit-content",children:[(0,i.jsx)(o,{isActive:a,fontSize:"12px",children:(0,i.jsx)(r.cC,{id:"J/hVSQ",values:{0:a?e.symbol:n.symbol}})}),(0,i.jsx)(o,{isActive:!a,fontSize:"12px",children:(0,i.jsx)(r.cC,{id:"J/hVSQ",values:{0:a?n.symbol:e.symbol}})})]})}):null}},46443:function(e,n,t){t.d(n,{t:function(){return x}});var i=t(86003),r=t(15387),s=t(61646),c=t(92796),o=t(13712),d=t(49111),a=t(36665);const l=i.O$.from(2).pow(128).sub(1);function x(e,n,t=!1){const i=(0,a.GL)(!1),x=(0,s.Wk)(n?i:null,"ownerOf",[n]).result?.[0],u=n?.toHexString(),h=(0,c.ZP)(),[p,m]=(0,o.useState)();return(0,o.useEffect)((()=>{!async function(){if(i&&u&&x)try{const e=await i.callStatic.collect({tokenId:u,recipient:x,amount0Max:l,amount1Max:l},{from:x});m([e.amount0,e.amount1])}catch{}}()}),[i,u,x,h]),e&&p?[r.CurrencyAmount.fromRawAmount(t?e.token0:(0,d.B)(e.token0),p[0].toString()),r.CurrencyAmount.fromRawAmount(t?e.token1:(0,d.B)(e.token1),p[1].toString())]:[void 0,void 0]}},96234:function(e,n,t){t.r(n),t.d(n,{PositionPageUnsupportedContent:function(){return ye},default:function(){return ve}});var i=t(42893),r=t(86003),s=t(12204),c=t(19903),o=t(15387),d=t(35206),a=t(80815),l=t(66196),x=t(80485),u=t(60198),h=t(42246),p=t(60476),m=t(45533),g=t(13119),j=t(56823),f=t(2304),y=t(20095),v=t(36772),w=t(36727),b=t(48141),C=t(17487),T=t(15627),P=t(36665),D=t(58127),k=t(46109),S=t(95202),I=t(46443),M=t(59991),R=t(61646),A=t(46217),_=t(13712),z=t(41440),L=t(80657),$=t(4292),N=t(97905),E=t(87253),W=t(39839),B=t(21103),O=t(75808),Z=t(57482),q=t(49111),U=t(56588),F=t(22230),H=t(51745),G=t(85729);const J="data:application/json;base64,";var Q=t(843),V=t(54479),K=t(34120),Y=t(55494);const X=(0,E.default)(u.DF).withConfig({displayName:"PositionPage__PositionPageButtonPrimary",componentId:"sc-c8f22c94-0"})`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,ee=E.default.div.withConfig({displayName:"PositionPage__PageWrapper",componentId:"sc-c8f22c94-1"})`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,ne=E.default.div.withConfig({displayName:"PositionPage__BadgeText",componentId:"sc-c8f22c94-2"})`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,te=(0,E.default)((({end:e,...n})=>(0,i.jsx)(W.Tv.DeprecatedLabel,{...n}))).withConfig({displayName:"PositionPage__Label",componentId:"sc-c8f22c94-3"})`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,ie=E.default.span.withConfig({displayName:"PositionPage__ExtentsText",componentId:"sc-c8f22c94-4"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,re=(0,E.default)(W.Tv.DeprecatedMain).withConfig({displayName:"PositionPage__HoverText",componentId:"sc-c8f22c94-5"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,se=E.default.span.withConfig({displayName:"PositionPage__DoubleArrow",componentId:"sc-c8f22c94-6"})`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,ce=(0,E.default)(f.m0).withConfig({displayName:"PositionPage__ResponsiveRow",componentId:"sc-c8f22c94-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,oe=(0,E.default)(ce).withConfig({displayName:"PositionPage__ActionButtonResponsiveRow",componentId:"sc-c8f22c94-8"})`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,de=(0,E.default)(u.gn).withConfig({displayName:"PositionPage__ResponsiveButtonConfirmed",componentId:"sc-c8f22c94-9"})`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,ae=E.default.div.withConfig({displayName:"PositionPage__NFTGrid",componentId:"sc-c8f22c94-10"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,le=E.default.canvas.withConfig({displayName:"PositionPage__NFTCanvas",componentId:"sc-c8f22c94-11"})`
  grid-area: overlap;
`,xe=E.default.img.withConfig({displayName:"PositionPage__NFTImage",componentId:"sc-c8f22c94-12"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`;function ue({inverted:e,pool:n,currencyQuote:t,currencyBase:r}){const{formatPrice:c}=(0,Z.Gb)();return n&&t&&r?(0,i.jsx)(h.hl,{padding:"12px",children:(0,i.jsxs)(p.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"DWd30U"})}),(0,i.jsx)(W.Tv.DeprecatedMediumHeader,{textAlign:"center",children:c({price:e?n.token1Price:n.token0Price,type:Z.sw.TokenTx})}),(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:t?.symbol,1:r?.symbol}})})]})}):null}const he=({children:e,chainId:n,address:t})=>{const r=b.Iy[n];return(0,i.jsx)(W.bm,{to:`/tokens/${r}/${t}`,children:e})},pe=({children:e,chainId:n,address:t})=>(0,i.jsx)(W.dL,{href:(0,K.E)(n,t,K.r.TOKEN),children:e});function me({chainId:e,currency:n}){const t=n?.address;if("number"===typeof e&&t){const r=(0,C.bx)(e)?he:pe;return(0,i.jsx)(r,{chainId:e,address:t,children:(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsxs)(W.Tv.DeprecatedMain,{children:[n?.symbol," \u2197"]})]})})}return(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(W.Tv.DeprecatedMain,{children:n?.symbol})]})}function ge(e,n,t){const i=n.getContext("2d");if(i){let{width:r,height:s}=e;const c=r/s;s=t,r=Math.round(c*t),n.width=r*devicePixelRatio,n.height=s*devicePixelRatio,n.style.width=r+"px",n.style.height=s+"px",i.scale(devicePixelRatio,devicePixelRatio),i.clearRect(0,0,r,s),i.drawImage(e,0,0,r,s)}}function je({image:e,height:n}){const[t,r]=(0,_.useState)(!1),s=(0,_.useRef)(null),c=(0,_.useRef)(null);return(0,i.jsxs)(ae,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{c.current&&s.current&&ge(c.current,s.current,n),r(!1)},children:[(0,i.jsx)(le,{ref:s}),(0,i.jsx)(xe,{ref:c,src:e,hidden:!t,onLoad:()=>{c.current&&s.current&&ge(c.current,s.current,n)}})]})}const fe=({priceLower:e,priceUpper:n,quote:t,base:i,invert:r})=>({priceUpper:r?e?.invert():n,priceLower:r?n?.invert():e,quote:r?i:t,base:r?t:i});function ye(){return(0,i.jsx)(ee,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)(W.Tv.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,i.jsx)(s.cC,{id:"Ij/sE3"})}),(0,i.jsx)(W.Tv.BodyPrimary,{style:{marginBottom:"32px"},children:(0,i.jsx)(s.cC,{id:"Jbim1e"})}),(0,i.jsx)(X,{as:z.rU,to:"/pools",width:"fit-content",children:(0,i.jsx)(s.cC,{id:"7IwSeQ"})})]})})}function ve(){const{chainId:e}=(0,a.useWeb3React)();return(0,b.EC)(e)?(0,i.jsx)(be,{}):(0,i.jsx)(ye,{})}const we=(0,E.default)(f.DA).withConfig({displayName:"PositionPage__PositionLabelRow",componentId:"sc-c8f22c94-13"})({flexWrap:"wrap",gap:8});function be(){const{tokenId:e}=(0,L.UO)(),{chainId:n,account:t,provider:b}=(0,a.useWeb3React)(),C=(0,E.useTheme)(),{formatCurrencyAmount:X,formatDelta:ae,formatTickPrice:le}=(0,Z.Gb)(),xe=function(e){if(e)try{return r.O$.from(e)}catch(n){return}}(e),{loading:he,position:pe}=(0,M.n)(xe),{token0:ge,token1:ve,fee:be,liquidity:Ce,tickLower:Te,tickUpper:Pe,tokenId:De}=pe||{},ke=Ce?.eq(0),Se=function(e){const n=(0,P.GL)(),t=(0,_.useMemo)((()=>[e instanceof r.O$?e.toHexString():e?.toString(16)]),[e]),{result:i,error:s,loading:c,valid:o}=(0,R.Wk)(n,"tokenURI",t,{...R.DB,gasRequired:3e6});return(0,_.useMemo)((()=>{if(s||!o||!e)return{valid:!1,loading:!1};if(c)return{valid:!0,loading:!0};if(!i)return{valid:!1,loading:!1};const[n]=i;if(!n||!n.startsWith(J))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(n.slice(J.length)))}}catch(s){return{valid:!1,loading:!1}}}),[s,c,i,e,o])}(xe),Ie=(0,T.dQ)(ge),Me=(0,T.dQ)(ve),Re=Ie?(0,q.B)(Ie):void 0,Ae=Me?(0,q.B)(Me):void 0,[_e,ze]=(0,_.useState)(!1),Le=(0,A.Z)(n).wrapped.symbol,[$e,Ne]=(0,k.AI)(Ie??void 0,Me??void 0,be),Ee=(0,_.useMemo)((()=>{if(Ne&&Ce&&"number"===typeof Te&&"number"===typeof Pe)return new d.Position({pool:Ne,liquidity:Ce.toString(),tickLower:Te,tickUpper:Pe})}),[Ce,Ne,Te,Pe]),We=(0,D.Z)(be,Te,Pe),Be=(0,F.N)(Ee),[Oe,Ze]=(0,_.useState)(!1),{priceLower:qe,priceUpper:Ue,base:Fe}=fe({priceLower:Be.priceLower,priceUpper:Be.priceUpper,quote:Be.quote,base:Be.base,invert:Oe}),He=Me?Fe?.equals(Me):void 0,Ge=He?Re:Ae,Je=He?Ae:Re,Qe=(0,_.useMemo)((()=>qe&&Ne&&Ue?function(e,n,t){try{if(!n.greaterThan(e))return 100;if(!n.lessThan(t))return 0;const i=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(t.toSignificant(15)),s=Number.parseFloat(n.toSignificant(15)),c=Math.floor(1/((Math.sqrt(i*r)-Math.sqrt(r*s))/(s-Math.sqrt(r*s))+1)*100);if(c<0||c>100)throw Error("Out of range");return c}catch{return}}(He?Ue.invert():qe,Ne.token0Price,He?qe.invert():Ue):void 0),[He,Ne,qe,Ue]),[Ve,Ke]=(0,I.t)(Ne??void 0,pe?.tokenId,_e),Ye=Ne?_e?Ne.token0:(0,q.B)(Ne.token0):void 0,Xe=Ne?_e?Ne.token1:(0,q.B)(Ne.token1):void 0,[en,nn]=(0,_.useState)(!1),[tn,rn]=(0,_.useState)(null),sn=(0,N.ub)(tn??void 0),[cn,on]=(0,_.useState)(!1),dn=(0,S.ZP)(Ie??void 0),an=(0,S.ZP)(Me??void 0),ln=(0,_.useMemo)((()=>{if(!dn||!an||!Ve||!Ke)return null;const e=Ve?.wrapped,n=Ke?.wrapped;if(!e||!n)return null;const t=dn.quote(e),i=an.quote(n);return t.add(i)}),[dn,an,Ve,Ke]),xn=(0,_.useMemo)((()=>{if(!dn||!an||!Ee)return null;const e=dn.quote(Ee.amount0),n=an.quote(Ee.amount1);return e.add(n)}),[dn,an,Ee]),un=(0,N.h7)(),hn=(0,P.GL)(),pn=(0,_.useCallback)((async()=>{if(!Ye||!Xe||!n||!hn||!t||!De||!b)return;nn(!0);const{calldata:e,value:i}=d.NonfungiblePositionManager.collectCallParameters({tokenId:De.toString(),expectedCurrencyOwed0:Ve??o.CurrencyAmount.fromRawAmount(Ye,0),expectedCurrencyOwed1:Ke??o.CurrencyAmount.fromRawAmount(Xe,0),recipient:t}),r={to:hn.address,data:e,value:i},s=await b.getSigner().getChainId();if(n!==s)throw new O.CJ;b.getSigner().estimateGas(r).then((e=>{const n={...r,gasLimit:(0,V.y)(e)};return b.getSigner().sendTransaction(n).then((e=>{rn(e.hash),nn(!1),(0,l._P)(c.vp.COLLECT_LIQUIDITY_SUBMITTED,{source:c.GM.V3,label:[Ye.symbol,Xe.symbol].join("/")}),un(e,{type:Q.i.COLLECT_FEES,currencyId0:(0,B.H)(Ye),currencyId1:(0,B.H)(Xe),expectedCurrencyOwed0:Ve?.quotient.toString()??o.CurrencyAmount.fromRawAmount(Ye,0).toExact(),expectedCurrencyOwed1:Ke?.quotient.toString()??o.CurrencyAmount.fromRawAmount(Xe,0).toExact()})}))})).catch((e=>{nn(!1),console.error(e)}))}),[n,Ve,Ke,Ye,Xe,hn,t,De,un,b]),mn=(0,R.Wk)(De?hn:null,"ownerOf",[De]).result?.[0],gn=mn===t||pe?.operator===t,jn=He?Ve:Ke,fn=He?Ke:Ve,yn=Ne&&"number"===typeof Te?Ne.tickCurrent<Te:void 0,vn=Ne&&"number"===typeof Pe?Ne.tickCurrent>=Pe:void 0,wn="boolean"===typeof yn&&"boolean"===typeof vn&&(!yn&&!vn);function bn(){return(0,i.jsxs)(p.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,i.jsx)(h.hl,{padding:"12px 16px",children:(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:jn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(W.Tv.DeprecatedMain,{children:jn?X({amount:jn}):"-"})]}),(0,i.jsx)(W.Tv.DeprecatedMain,{children:jn?.currency?.symbol})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:fn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(W.Tv.DeprecatedMain,{children:fn?X({amount:fn}):"-"})]}),(0,i.jsx)(W.Tv.DeprecatedMain,{children:fn?.currency?.symbol})]})]})}),(0,i.jsx)(W.Tv.DeprecatedItalic,{children:(0,i.jsx)(s.cC,{id:"R8aNfS"})}),(0,i.jsx)(u.DF,{"data-testid":"modal-collect-fees-button",onClick:pn,children:(0,i.jsx)(s.cC,{id:"vR1m9d"})})]})}const Cn=Boolean(gn&&(Ve?.greaterThan(0)||Ke?.greaterThan(0))&&Re&&Ae&&(Re.isNative||Ae.isNative)&&!tn);return pe||he?he||$e===k.tK.LOADING||!be?(0,i.jsxs)(Y.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}):(0,i.jsx)(l.fM,{page:c.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ee,{children:[(0,i.jsx)(w.Z,{isOpen:cn,onDismiss:()=>on(!1),attemptingTxn:en,hash:tn??"",reviewContent:()=>(0,i.jsx)(w.p,{title:(0,i.jsx)(s.cC,{id:"tu/fxg"}),onDismiss:()=>on(!1),topContent:bn}),pendingText:(0,i.jsx)(s.cC,{id:"SGG5Oz"})}),(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsxs)(p.Tz,{gap:"sm",children:[(0,i.jsx)(z.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pools",children:(0,i.jsx)(re,{children:(0,i.jsx)(s.cC,{id:"sYYMH3"})})}),(0,i.jsxs)(ce,{children:[(0,i.jsxs)(we,{children:[(0,i.jsx)(m.Z,{currency0:Je,currency1:Ge,size:24,margin:!0}),(0,i.jsxs)(W.Tv.DeprecatedLabel,{fontSize:"24px",mr:"10px",children:["\xa0",Ge?.symbol,"\xa0/\xa0",Je?.symbol]}),(0,i.jsx)(x.Z,{style:{marginRight:"8px"},children:(0,i.jsx)(ne,{children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:ae(parseFloat(new o.Percent(be,1e6).toSignificant()))}})})}),(0,i.jsx)(U.Z,{removed:ke,inRange:wn})]}),gn&&(0,i.jsxs)(oe,{children:[Re&&Ae&&be&&De?(0,i.jsx)(u.Ux,{as:z.rU,to:`/add/${(0,B.H)(Re)}/${(0,B.H)(Ae)}/${be}/${De}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,i.jsx)(s.cC,{id:"3pgmAj"})}):null,De&&!ke?(0,i.jsx)(u.Hm,{as:z.rU,to:`/remove/${De}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,i.jsx)(s.cC,{id:"cJtosk"})}):null]})]})]}),(0,i.jsxs)(ce,{align:"flex-start",children:[(0,i.jsx)(W.Pw,{style:{height:"100%",marginRight:12},children:"result"in Se?(0,i.jsxs)(h.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,i.jsx)(je,{image:Se.result.image,height:400}),"number"===typeof n&&mn&&!gn?(0,i.jsx)(W.dL,{href:(0,K.E)(n,mn,K.r.ADDRESS),children:(0,i.jsx)(s.cC,{id:"LtI9AS"})}):null]}):(0,i.jsx)(h.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,i.jsx)(g.tG,{})})}),(0,i.jsxs)(p.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,i.jsx)(h.Wm,{children:(0,i.jsxs)(p.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsx)(te,{children:(0,i.jsx)(s.cC,{id:"6y2TB3"})}),xn?.greaterThan(new o.Fraction(1,100))?(0,i.jsx)(W.Tv.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:X({amount:xn,type:Z.sw.FiatTokenPrice})}})}):(0,i.jsx)(W.Tv.DeprecatedLargeHeader,{color:C.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"eKC+EC"})})]}),(0,i.jsx)(h.hl,{padding:"12px 16px",children:(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(me,{chainId:n,currency:Ge}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(W.Tv.DeprecatedMain,{children:X({amount:He?Ee?.amount0:Ee?.amount1})}),"number"!==typeof Qe||ke?null:(0,i.jsx)(x.Z,{style:{marginLeft:"10px"},children:(0,i.jsx)(ne,{children:(0,i.jsx)(s.cC,{id:"hbO8db",values:{0:He?Qe:100-Qe}})})})]})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(me,{chainId:n,currency:Je}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(W.Tv.DeprecatedMain,{children:X({amount:He?Ee?.amount1:Ee?.amount0})}),"number"!==typeof Qe||ke?null:(0,i.jsx)(x.Z,{style:{marginLeft:"10px"},children:(0,i.jsx)(ne,{children:(0,i.jsx)(s.cC,{id:"hbO8db",values:{0:He?100-Qe:Qe}})})})]})]})]})})]})}),(0,i.jsx)(h.Wm,{children:(0,i.jsxs)(p.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsx)(p.Tz,{gap:"md",children:(0,i.jsxs)(f.m0,{style:{alignItems:"flex-start"},children:[(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsx)(te,{children:(0,i.jsx)(s.cC,{id:"XCqY8/"})}),ln?.greaterThan(new o.Fraction(1,100))?(0,i.jsx)(W.Tv.DeprecatedLargeHeader,{color:C.success,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:X({amount:ln,type:Z.sw.FiatTokenPrice})}})}):(0,i.jsx)(W.Tv.DeprecatedLargeHeader,{color:C.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"eKC+EC"})})]}),gn&&(Ve?.greaterThan(0)||Ke?.greaterThan(0)||tn)?(0,i.jsx)(de,{"data-testid":"collect-fees-button",disabled:en||!!tn,confirmed:!!tn&&!sn,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>on(!0),children:tn&&!sn?(0,i.jsx)(W.Tv.DeprecatedMain,{color:C.neutral1,children:(0,i.jsx)(s.cC,{id:"Jpq3gO"})}):sn||en?(0,i.jsxs)(W.Tv.DeprecatedMain,{color:C.neutral1,children:[" ",(0,i.jsx)(y.bb,{children:(0,i.jsx)(s.cC,{id:"1RB9kv"})})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(W.Tv.DeprecatedMain,{color:C.white,children:(0,i.jsx)(s.cC,{id:"h5pjuM"})})})}):null]})}),(0,i.jsx)(h.hl,{padding:"12px 16px",children:(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:jn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(W.Tv.DeprecatedMain,{children:jn?.currency?.symbol})]}),(0,i.jsx)(f.DA,{children:(0,i.jsx)(W.Tv.DeprecatedMain,{children:jn?X({amount:jn}):"-"})})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:fn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(W.Tv.DeprecatedMain,{children:fn?.currency?.symbol})]}),(0,i.jsx)(f.DA,{children:(0,i.jsx)(W.Tv.DeprecatedMain,{children:fn?X({amount:fn}):"-"})})]})]})}),Cn&&(0,i.jsx)(p.Tz,{gap:"md",children:(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(W.Tv.DeprecatedMain,{children:(0,i.jsx)(s.cC,{id:"oCijuv",values:{nativeWrappedSymbol:Le}})}),(0,i.jsx)(v.Z,{id:"receive-as-weth",isActive:_e,toggle:()=>ze((e=>!e))})]})})]})})]})]}),(0,i.jsx)(h.Wm,{children:(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(te,{display:"flex",style:{marginRight:"12px"},children:(0,i.jsx)(s.cC,{id:"7Bu2+f"})}),(0,i.jsx)(W.v_,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U.Z,{removed:ke,inRange:wn}),(0,i.jsx)("span",{style:{width:"8px"}})]})})]}),(0,i.jsx)(f.DA,{children:Je&&Ge&&(0,i.jsx)(H.Z,{currencyA:Je,currencyB:Ge,handleRateToggle:()=>Ze(!Oe)})})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(h.hl,{padding:"12px",width:"100%",children:(0,i.jsxs)(p.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"EQs1sJ"})}),(0,i.jsx)(W.Tv.DeprecatedMediumHeader,{textAlign:"center",children:le({price:qe,atLimit:We,direction:$.Mb.LOWER,numberType:Z.sw.TokenTx})}),(0,i.jsxs)(ie,{children:[" ",(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:Ge?.symbol,1:Je?.symbol}})]}),wn&&(0,i.jsx)(W.Tv.DeprecatedSmall,{color:C.neutral3,children:(0,i.jsx)(s.cC,{id:"NxMldE",values:{0:Je?.symbol}})})]})}),(0,i.jsx)(se,{children:"\u27f7"}),(0,i.jsx)(h.hl,{padding:"12px",width:"100%",children:(0,i.jsxs)(p.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"5etEUX"})}),(0,i.jsx)(W.Tv.DeprecatedMediumHeader,{textAlign:"center",children:le({price:Ue,atLimit:We,direction:$.Mb.UPPER,numberType:Z.sw.TokenTx})}),(0,i.jsxs)(ie,{children:[" ",(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:Ge?.symbol,1:Je?.symbol}})]}),wn&&(0,i.jsx)(W.Tv.DeprecatedSmall,{color:C.neutral3,children:(0,i.jsx)(s.cC,{id:"NxMldE",values:{0:Ge?.symbol}})})]})})]}),(0,i.jsx)(ue,{inverted:He,pool:Ne,currencyQuote:Ge,currencyBase:Je})]})})]})]}),(0,i.jsx)(G.c,{})]})}):(0,i.jsx)(ye,{})}}}]);
//# sourceMappingURL=6234.a99bc7df.chunk.js.map