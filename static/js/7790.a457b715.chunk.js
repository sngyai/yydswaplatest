"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7790],{17790:function(e,t,n){n.d(t,{ZI:function(){return It},zD:function(){return Nt},ZP:function(){return Et}});var s=n(42893),r=n(12204),i=n(19903),a=n(66196),o=n(62069),c=n(69867),d=n(30476),l=n(15387),u=n(80815),p=n(93622),g=n(60476),x=n(25575),m=n(56823),h=n(2304),f=n(20437),I=n(80343),N=n(10362),T=n(48141),A=n(28702),C=n(1152),_=n(79954);C.ZP`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var E=n(15627),w=n(79741),b=n(95202),v=n(97901),j=n(79847),y=n(4572),O=n(98841),k=n(50026),P=n(83884),R=n(99968),S=n(13712),L=n(69574),B=n(58336);var z=n(1004),F=n(12113),D=n(68044),U=n(57174);function G(e,t,n){const{hasPriceAdjustment:s,updatedAssets:r}=(0,D.$)(e,t),i=s&&n,{unchanged:a,priceChanged:o,unavailable:c}=(0,U.K)(r),d=r.length>0,l=o.length>0,u=c.length>0,p=l||u,g=function(e,t,n){return[...e.map((e=>({asset:e,status:z.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:z.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:z.ZJ.REVIEWED})))]}(c,o,a),x=function(e,t,n,s){return e?t?n?z.s.IN_REVIEW:z.s.CONFIRM_REVIEW:s?z.s.CONFIRM_QUOTE:z.s.CONFIRMING_IN_WALLET:z.s.ADDING_TO_BAG}(d,p,l,i);return{newBagItems:g,nextBagStatus:x}}function H(e){return{action:z.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function M(e,t){const n=e.route?e.route.map(H):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var W=n(22495),$=n(45239);var V=n(9170),Z=n(66528);const q=(0,n(98102).F)()((0,V.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),Z.X);function Y(){const{account:e}=(0,u.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isLocked:i,setLocked:a,setItemsInBag:o}=(0,O.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:i,setItemsInBag:a})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:i,setItemsInBag:a}))),c=q((e=>e.tokenTradeInput)),d=(0,S.useMemo)((()=>(0,F.G7)(t)),[t]),[l]=(0,_.yo)(),p=function(){const{provider:e}=(0,u.useWeb3React)(),t=(0,W.p)((e=>e.sendTransaction)),n=(0,$.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:r,reset:i}=(0,O.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,S.useCallback)((async(a,o,c=!1)=>{if(!e)return;const d=await t(e.getSigner(),o,a,c);d&&(s(!1),n(d),r({bagExpanded:!1}),i())}),[e,i,t,r,s,n])}(),g=(0,S.useCallback)((()=>{s&&r(!1),!i&&a(!0),n(z.s.FETCHING_ROUTE)}),[i,s,a,n,r]);return(0,S.useCallback)((async()=>{g(),l({variables:{senderAddress:e||"",nftTrades:(0,F.hI)(d),tokenTrades:c||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(z.s.ADDING_TO_BAG),void a(!1);const t=function(e){return e.filter((e=>e.status!==z.ZJ.UNAVAILABLE)).map((e=>e.asset))}(d),s=!!c,{route:r,routeResponse:i}=M(e.nftRoute,s),{newBagItems:l,nextBagStatus:u}=G(t,r,s);if(o(l),n(u),u===z.s.CONFIRMING_IN_WALLET)return p(i,t,s),void a(!0);a(!1)}})}),[e,l,d,p,g,a,n,o,c])}var K=n(73293);function X(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function J(e,t,n){const s=q((e=>e.setTokenTradeInput)),r=(0,B.pG)(e)&&e.routes,i=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,a=!!n&&!!t;(0,S.useEffect)((()=>{if(!r||!i||!a)return void s(void 0);const o=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:c,v2TokenTradeRouteInputs:d,v3TokenTradeRouteInputs:l}=function(e){const t=[],n=[],s=[],r=e.swaps;for(const i of r)i.route.protocol===K.Protocol.MIXED?t.push(X(i)):i.route.protocol===K.Protocol.V2?n.push(X(i)):s.push(X(i));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:c,tradeType:_.NS.ExactOutput,v2Routes:d,v3Routes:l},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:o,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,a,i,r,s,e])}var Q=n(87253),ee=n(57482),te=n(74969);var ne,se=n(8586),re=n(34578),ie=n(83931),ae=n(39839);function oe(e,t,n,i,a){const o={handleClick:()=>{},buttonText:(0,s.jsx)(r.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[ne.WALLET_NOT_CONNECTED]:{...o,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"VHOVEJ"})},[ne.NOT_SUPPORTED_CHAIN]:{...o,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(r.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,s.jsx)(r.cC,{id:"IwI0rY"})},[ne.INSUFFICIENT_BALANCE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),warningText:(0,s.jsx)(r.cC,{id:"cPcTW+"})},[ne.ERROR]:{...o,warningText:(0,s.jsx)(r.cC,{id:"fWsBTs"})},[ne.IN_WALLET_CONFIRMATION]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"CpEYLQ"})},[ne.PROCESSING_TRANSACTION]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"SqYgw0"})},[ne.FETCHING_TOKEN_ROUTE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"hQHwxA"})},[ne.INVALID_TOKEN_ROUTE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[ne.NO_TOKEN_ROUTE_FOUND]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"dLAScn"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(r.cC,{id:"1u70J/"})},[ne.LOADING_ALLOWANCE]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"TuN3Z4"})},[ne.IN_WALLET_ALLOWANCE_APPROVAL]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"4k/lBP"})},[ne.PROCESSING_APPROVAL]:{...o,buttonText:(0,s.jsx)(r.cC,{id:"gHko4n"})},[ne.REQUIRE_APPROVAL]:{...o,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(r.cC,{id:"kpa6xe"}),buttonText:(0,s.jsx)(r.cC,{id:"Z7ZXbT"})},[ne.CONFIRM_UPDATED_PRICE]:{...o,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(r.cC,{id:"Ejd0wH"}),buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[ne.PRICE_IMPACT_HIGH]:{...o,handleClick:n??(()=>{}),disabled:!1,buttonColor:a?a.priceImpactSeverity.color:o.buttonColor,helperText:(0,s.jsx)(r.cC,{id:"NF0esC"}),helperTextColor:a?a.priceImpactSeverity.color:o.helperTextColor,buttonText:(0,s.jsx)(r.cC,{id:"2AEplS"})},[ne.PAY]:{...o,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),helperText:i?(0,s.jsx)(r.cC,{id:"3BWxOM"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(ne||(ne={}));const ce=Q.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-98f67338-0"})`
  padding: 0px 12px;
`,de=Q.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-98f67338-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,le=(0,Q.default)(g.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-98f67338-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,ue=(0,Q.default)(h.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-98f67338-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,pe=(0,Q.default)(g.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-98f67338-4"})`
  text-align: end;
  overflow: hidden;
`,ge=(0,Q.default)(re.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-98f67338-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,xe=(0,Q.default)(ae.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-98f67338-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,me=(0,Q.default)(ae.Tv.BodySmall).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-98f67338-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,he=(0,Q.default)(h.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-98f67338-8"})`
  gap: 8px;
  cursor: pointer;
`,fe=Q.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-98f67338-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,Ie=(0,Q.default)(I.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-98f67338-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,Ne=(0,Q.default)(h.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-98f67338-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,Te=(0,Q.default)(h.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-98f67338-12"})`
  align-items: center;
  gap: 8px;
`,Ae=(0,Q.default)(ae.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-98f67338-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,Ce=({color:e,children:t})=>t?(0,s.jsxs)(xe,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(ge,{}),t]}):null,_e=({children:e,color:t})=>e?(0,s.jsx)(me,{lineHeight:"16px",$color:t,children:e}):null,Ee=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:i,trade:a})=>{const{formatEther:o,formatNumberOrString:c}=(0,ee.Gb)();return e?i!==L.qx.LOADING||a?(0,s.jsx)(Ae,{color:i===L.qx.LOADING?"neutral3":"neutral1",children:c({input:a?.inputAmount.toExact(),type:ee.sw.NFTToken})}):(0,s.jsx)(ae.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(r.cC,{id:"hwuHLB"})}):(0,s.jsxs)(ae.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[o({input:t.toString(),type:ee.sw.NFTToken}),"\xa0",n?.symbol??"ETH"]})},we=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:i})=>{const{formatNumberOrString:a}=(0,ee.Gb)();return e?(0,s.jsxs)(Ne,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(N.ud,{text:d.ag._({id:"KaCkzz"}),children:(0,s.jsxs)(Te,{children:[(0,s.jsx)(re.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(ae.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,s.jsx)(r.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,s.jsx)(ae.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${a({input:e?.toExact(),type:ee.sw.FiatNFTToken})}`})]}):!i||n!==L.qx.INVALID&&n!==L.qx.NO_ROUTE_FOUND?(0,s.jsx)(Ie,{}):null},be=[z.s.FETCHING_ROUTE,z.s.CONFIRMING_IN_WALLET,z.s.FETCHING_FINAL_ROUTE,z.s.PROCESSING_TRANSACTION],ve=({setModalIsOpen:e,eventProperties:t})=>{const n=(0,p.LK)(),o=(0,Q.useTheme)(),{account:d,chainId:h,connector:I}=(0,u.useWeb3React)(),N=Boolean(d&&h),C=(0,k.P)(),{inputCurrency:F}=q((({inputCurrency:e})=>({inputCurrency:e}))),D=q((e=>e.setInputCurrency)),U=(0,E.U8)("ETH"),G=(0,j.mM)(d??void 0,F&&F.isToken?F:void 0),{isLocked:H,bagStatus:M,setBagExpanded:$,setBagStatus:V}=(0,O.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[Z,K]=(0,S.useState)(!1),X=be.includes(M),re=F??U,ge=!!F&&h===l.ChainId.MAINNET,{universalRouterAddress:xe,universalRouterAddressIsLoading:me}=function(){const{data:e,loading:t}=(0,_.Z6)({fetchPolicy:"no-cache"});return{universalRouterAddress:e?.nftRoute?.toAddress,universalRouterAddressIsLoading:t}}();!function(e){const t=(0,W.p)((e=>e.state)),n=(0,W.p)((e=>e.setState)),s=(0,S.useRef)(t),{setBagStatus:r,setLocked:i}=(0,O.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,S.useEffect)((()=>{W.p.subscribe((e=>s.current=e.state))}),[]),(0,S.useEffect)((()=>{s.current===z.c$.Confirming&&r(z.s.PROCESSING_TRANSACTION),s.current!==z.c$.Denied&&s.current!==z.c$.Invalid||(s.current===z.c$.Invalid?r(z.s.WARNING):r(z.s.CONFIRM_REVIEW),n(z.c$.New),i(!1),e(!1))}),[i,r,e,n,s.current])}(e);const Ie=Y(),Ne=(0,S.useMemo)((()=>(0,y.Z)((0,c.formatEther)(C.toString()),U??void 0)),[U,C]),{state:Te,trade:Ae,maximumAmountIn:ve,allowedSlippage:je}=function(e,t){const{state:n,trade:s}=(0,R.C)(l.TradeType.EXACT_OUTPUT,t,e??void 0,L.R5.API),r=(0,P.Z)((0,B.pG)(s)?s:void 0),i=(0,S.useMemo)((()=>{const e=s?.maximumAmountIn(r);return e?.currency.isToken?e:void 0}),[r,s]);return(0,S.useMemo)((()=>({state:n,trade:s,maximumAmountIn:i,allowedSlippage:r})),[r,i,n,s])}(ge?F:void 0,Ne),ye=(0,w.Z)(ve,function(e,t){if(e)return e===l.ChainId.MAINNET?t??(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):(0,T.EC)(e)?(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(h,xe),L.d7.Classic),Oe=ye.state===w.K.LOADING||me;J(Ae,ye,je);const ke=function(e){const t=(0,Q.useTheme)(),{formatPercent:n}=(0,ee.Gb)();return(0,S.useMemo)((()=>{const s=e?(0,te.QW)(e):void 0,r=s?(0,te.BK)(s):void 0,i="error"===r?t.critical:"warning"===r?t.deprecated_accentWarning:void 0;return s&&r&&i?{priceImpactSeverity:{type:r,color:i},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(Ae),Pe=(0,b.sq)(Ae?.inputAmount),Re=(0,b.sq)(Ne),Se=ge?Pe:Re,{balance:Le}=(0,se.t)(),Be=(0,S.useMemo)((()=>{if(N&&h===l.ChainId.MAINNET){if(F){const e=Ae?.inputAmount;if(!G||!e)return;return!G.lessThan(e)}return(0,c.parseEther)(Le).gte(C)}}),[N,h,F,Le,C,Ae?.inputAmount,G]);(0,S.useEffect)((()=>{V(z.s.ADDING_TO_BAG)}),[F,V]);const ze=(0,v.o)(),{buttonText:Fe,buttonTextColor:De,disabled:Ue,warningText:Ge,warningTextColor:He,helperText:Me,helperTextColor:We,handleClick:$e,buttonColor:Ve}=(0,S.useMemo)((()=>{if(N&&h!==l.ChainId.MAINNET){const e=()=>ze(I,l.ChainId.MAINNET);return oe(ne.NOT_SUPPORTED_CHAIN,o,e)}if(!1===Be)return oe(ne.INSUFFICIENT_BALANCE,o);if(M===z.s.WARNING)return oe(ne.ERROR,o);if(!N){const e=()=>{n(),$({bagExpanded:!1})};return oe(ne.WALLET_NOT_CONNECTED,o,e)}if(M===z.s.FETCHING_FINAL_ROUTE||M===z.s.CONFIRMING_IN_WALLET)return oe(ne.IN_WALLET_CONFIRMATION,o);if(M===z.s.PROCESSING_TRANSACTION)return oe(ne.PROCESSING_TRANSACTION,o);if(ge&&Te!==L.qx.VALID)return Te===L.qx.INVALID?oe(ne.INVALID_TOKEN_ROUTE,o):Te===L.qx.NO_ROUTE_FOUND?oe(ne.NO_TOKEN_ROUTE_FOUND,o):oe(ne.FETCHING_TOKEN_ROUTE,o);const e=ye.state===w.K.REQUIRED,t=()=>e&&ye.approveAndPermit();return Oe?oe(ne.LOADING_ALLOWANCE,o,t):e?ye.isApprovalPending?oe(ne.IN_WALLET_ALLOWANCE_APPROVAL,o,t):ye.isApprovalLoading?oe(ne.PROCESSING_APPROVAL,o,t):oe(ne.REQUIRE_APPROVAL,o,t):M===z.s.CONFIRM_QUOTE?oe(ne.CONFIRM_UPDATED_PRICE,o,Ie):ke&&"error"===ke.priceImpactSeverity.type?oe(ne.PRICE_IMPACT_HIGH,o,Ie,ge,ke):oe(ne.PAY,o,Ie,ge)}),[N,h,Be,M,ge,Te,Oe,ye,ke,o,Ie,ze,I,n,$]),Ze={usd_value:Se?.toExact(),using_erc20:!!F,...t};return(0,s.jsxs)(ce,{children:[(0,s.jsxs)(de,{children:[(0,s.jsxs)(le,{gap:"xs",children:[(0,s.jsxs)(ue,{children:[(0,s.jsx)(g.ZP,{gap:"xs",children:(0,T.EC)(h)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ae.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"JQjhrO"})}),(0,s.jsxs)(he,{onClick:()=>{H||(K(!0),(0,a._P)(i.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(m.Z,{currency:re,size:"24px"}),(0,s.jsx)(ae.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:re?.symbol}),(0,s.jsx)(ie.Z,{size:20,color:o.neutral2})]})]})}),(0,s.jsxs)(pe,{gap:"xs",children:[(0,s.jsx)(ae.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"72c5Qo"})}),(0,s.jsx)(Ee,{usingPayWithAnyToken:ge,totalEthPrice:C,activeCurrency:re,tradeState:Te,trade:Ae})]})]}),(0,s.jsx)(we,{usdcValue:Se,priceImpact:ke,tradeState:Te,usingPayWithAnyToken:ge})]}),(0,s.jsxs)(a.M8,{events:[i.TM.onClick],name:i.Yz.NFT_BUY_BAG_PAY,element:i.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Ze},shouldLogImpression:N&&!Ue,children:[(0,s.jsx)(Ce,{color:He,children:Ge}),(0,s.jsx)(_e,{color:We,children:Me}),(0,s.jsxs)(fe,{"data-testid":"nft-buy-button",onClick:$e,disabled:Ue||X,$backgroundColor:Ve,$color:De,children:[X&&(0,s.jsx)(x.ZP,{size:"20px",stroke:"white"}),Fe]})]})]}),(0,s.jsx)(f.Z,{isOpen:Z,onDismiss:()=>K(!1),onCurrencySelect:e=>{D(e.isNative?void 0:e),e.isToken&&(0,a._P)(i.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:re??void 0,onlyShowCurrenciesWithBalance:!0})]})};var je=n(60120),ye=n(55867),Oe=n(2994),ke=n(54212),Pe=n(5658),Re=n(437),Se=(n(98303),n(86003)),Le=n(56878),Be=n(60198);const ze=Q.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Fe=Q.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${ze} linear;
  animation: ${ze} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,De=()=>(0,s.jsx)(je.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(Fe,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var Ue=n(83164),Ge=n(26030),He=n(15655),Me=n(70453),We=n(41440),$e=(n(46912),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Ve="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Ze="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",qe="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",Ye="_1kuawc7",Ke="rgw6ez3xr";const Xe=(0,Q.default)(Be.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,Je=(0,Q.default)(Be.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,Qe=Q.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,et=({onClick:e})=>(0,s.jsx)(Qe,{onClick:e,children:(0,s.jsx)(Ge.Xv,{})}),tt=()=>(0,s.jsx)(je.n,{position:"relative",background:"loadingBackground",className:Ze,children:(0,s.jsxs)(je.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),nt=({asset:e,usdPrice:t,removeAsset:n,showRemove:r,grayscale:i,isMobile:a})=>{const{formatEther:o,formatNumberOrString:d}=(0,ee.Gb)(),[l,u]=(0,S.useState)(!1),[p,g]=(0,S.useState)(!e.smallImageUrl),[x,m]=(0,S.useState)(!1),h=(0,S.useCallback)((()=>m(!0)),[]),f=(0,S.useCallback)((()=>m(!1)),[]),I=Boolean(r&&x&&!a),N=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,T=o({input:N,type:ee.sw.NFTToken}),A=d({input:t?parseFloat((0,c.formatEther)(N))*t:t,type:ee.sw.FiatNFTToken}),C=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(We.rU,{to:(0,F.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(Oe.X2,{className:Ve,onMouseEnter:h,onMouseLeave:f,children:[(0,s.jsxs)(je.n,{position:"relative",display:"flex",children:[r&&a&&(0,s.jsx)(et,{onClick:C}),!p&&(0,s.jsx)(je.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Le.default)(Ze,i&&!x&&Ye),onLoad:()=>{u(!0)},onError:()=>{g(!0)},visibility:l?"visible":"hidden"}),!l&&(0,s.jsx)(je.n,{position:"absolute",className:`${Ze} ${Me.L}`}),p&&(0,s.jsx)(tt,{})]}),(0,s.jsxs)(Oe.sg,{overflow:"hidden",width:"full",color:i?"neutral2":"neutral1",children:[(0,s.jsxs)(Oe.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(je.n,{className:$e,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(Ue.yT,{})]}),(0,s.jsxs)(Oe.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(je.n,{className:qe,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(Ge.SA,{className:Ke})]})]}),I&&(0,s.jsx)(Xe,{onClick:C,emphasis:Be.eI.medium,size:Be.qE.medium,children:"Remove"}),(!I||a)&&(0,s.jsxs)(Oe.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(je.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[T,"\xa0ETH"]}),(0,s.jsx)(je.n,{className:qe,children:A})]})]})})},st=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:r,isMobile:i})=>{const{formatEther:a}=(0,ee.Gb)(),o=Se.O$.from(e.updatedPriceInfo?.ETHPrice).gt(Se.O$.from(e.priceInfo.ETHPrice)),c=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),d=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(Oe.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:r?"surface3":"transparent",children:[(0,s.jsxs)(Oe.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[o?(0,s.jsx)(Ge.PH,{}):(0,s.jsx)(Ge.HE,{}),(0,s.jsx)(je.n,{children:`Price ${o?"increased":"decreased"} from ${a({input:e.priceInfo.ETHPrice,type:ee.sw.NFTToken})} ETH`})]}),(0,s.jsx)(je.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(nt,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:i})}),(0,s.jsxs)(Oe.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(Je,{onClick:c,emphasis:Be.eI.medium,size:Be.qE.small,children:"Remove"}),(0,s.jsx)(Je,{onClick:d,emphasis:Be.eI.high,size:Be.qE.small,children:"Keep"})]})]})},rt=({assets:e})=>(0,s.jsx)(Oe.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(je.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:Ye},`${e.address}-${e.tokenId}`)))}),it=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:i,isMobile:a})=>{const[o,c]=(0,S.useReducer)((e=>!e),!1),[d,l]=(0,S.useState)(8);if((0,S.useEffect)((()=>{if(!d)return void(r||(n(),i(!1)));const e=setInterval((()=>{l(d-1)}),1e3);return()=>clearInterval(e)}),[d,n,r,i]),!e||0===e.length)return null;const u=e.length>1,p=o||!u;return(0,s.jsx)(Oe.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(Oe.sg,{children:[(0,s.jsxs)(Oe.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(!r&&i(!0),c())},children:[(0,s.jsxs)(Oe.X2,{gap:"12",color:"neutral2",className:He.Km,children:[!p&&(0,s.jsx)(rt,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(Oe.X2,{color:"neutral2",children:o?(0,s.jsx)(Ge.X_,{}):(0,s.jsx)(Ge.Xs,{})}),!r&&(0,s.jsxs)(Oe.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(De,{}),(0,s.jsx)(Ge.Nb,{})]})]}),(0,s.jsx)(Oe.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map((e=>(0,s.jsx)(nt,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:a},e.id)))})]})})},at=()=>{const e=(0,Pe.cP)((e=>e.bagStatus)),t=(0,Pe.cP)((e=>e.setBagStatus)),n=(0,Pe.cP)((e=>e.markAssetAsReviewed)),r=(0,Pe.cP)((e=>e.didOpenUnavailableAssets)),o=(0,Pe.cP)((e=>e.setDidOpenUnavailableAssets)),c=(0,Pe.cP)((e=>e.itemsInBag)),d=(0,Pe.cP)((e=>e.setItemsInBag)),l=(0,Pe.cP)((e=>e.removeAssetsFromBag)),u=(0,Pe.dD)(),p=(0,S.useMemo)((()=>(0,F.G7)(c)),[c]),g=(0,Pe.$N)(),{unchangedAssets:x,priceChangedAssets:m,unavailableAssets:h,availableItems:f}=(0,S.useMemo)((()=>({unchangedAssets:p.filter((e=>e.status===z.ZJ.ADDED_TO_BAG||e.status===z.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:p.filter((e=>e.status===z.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:p.filter((e=>e.status===z.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:p.filter((e=>e.status!==z.ZJ.UNAVAILABLE))})),[p]);return(0,S.useEffect)((()=>{const n=m.length>0,s=p.length>0;n&&(0,a._P)(i.Yz.NFT_BUY_BAG_CHANGED,{usd_value:g,bag_quantity:p,...(0,F.Hj)(m)}),e!==z.s.IN_REVIEW||n||t(s?z.s.CONFIRM_REVIEW:z.s.ADDING_TO_BAG),e!==z.s.CONFIRM_REVIEW||s||t(z.s.ADDING_TO_BAG)}),[e,p,m,t,g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Oe.sg,{display:m.length>0||h.length>0?"flex":"none",children:[h.length>0&&(0,s.jsx)(a.fM,{name:i.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:g,bag_quantity:p.length,...(0,F.Hj)(h)},shouldLogImpression:!0,children:(0,s.jsx)(it,{assets:h,usdPrice:g,clearUnavailableAssets:()=>d(f),didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:o,isMobile:u})}),m.map(((e,t)=>(0,s.jsx)(st,{asset:e,usdPrice:g,markAssetAsReviewed:n,top:0===t&&0===h.length,isMobile:u},e.id)))]}),(0,s.jsx)(Oe.sg,{children:x.slice(0).reverse().map((e=>(0,s.jsx)(nt,{asset:e,usdPrice:g,removeAsset:l,showRemove:!0,isMobile:u},e.id)))})]})};var ot=n(62329);const ct=(0,Q.default)(ae.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-feee1033-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,dt=Q.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-feee1033-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${ot.c}
`,lt=Q.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-feee1033-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ut=Q.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-feee1033-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,pt=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:i})=>{const a=(0,S.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(ut,{children:[(0,s.jsx)(ae.Tv.HeadlineSmall,{children:i?(0,s.jsx)(r.cC,{id:"xNB0TS"}):(0,s.jsx)(r.cC,{id:"EnO7qf"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(lt,{sizing:a,children:e}),(0,s.jsx)(ct,{onClick:n,children:(0,s.jsx)(r.cC,{id:"yYxB17"})})]}),(0,s.jsx)(dt,{onClick:t,children:(0,s.jsx)(Ge.BW,{"data-testid":"nft-bag-close-icon"})})]})};var gt=n(17669);const xt=(0,Q.default)(Oe.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`;var mt=()=>{const e=(0,o.e5)();return(0,s.jsxs)(xt,{children:[(0,s.jsx)(Oe.M5,{children:e?(0,s.jsx)(Ge.JP,{color:gt.Z4.colors.neutral3}):(0,s.jsx)(Ge.Ln,{color:gt.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(Oe.M5,{"data-testid":"nft-no-nfts-selected",className:He.v4,children:"No NFTs selected"}):(0,s.jsxs)(Oe.sg,{gap:"16",children:[(0,s.jsx)(Oe.M5,{"data-testid":"nft-empty-bag",className:He.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(Oe.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})};var ht=({asset:e})=>{const t=(0,Pe.Pc)((e=>e.removeSellAsset)),n=(0,Pe.dD)(),[r,i]=(0,S.useState)(!1),a=()=>i(!r),o=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(Oe.X2,{className:Ve,onMouseEnter:a,onMouseLeave:a,children:[(0,s.jsxs)(je.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(et,{onClick:o}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Ze})]}),(0,s.jsxs)(Oe.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(Oe.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(je.n,{className:$e,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(Oe.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(je.n,{className:qe,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(Ge.SA,{className:Ke})]})]}),r&&!n&&(0,s.jsx)(Xe,{onClick:o,emphasis:Be.eI.medium,size:Be.qE.medium,children:"Remove"})]})};const ft=()=>{const e=(0,Pe.Pc)((e=>e.sellAssets));return(0,s.jsx)(Oe.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(ht,{asset:e},t))):null})},It=320,Nt=360,Tt=Q.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-83712a43-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${It}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Re.k.modalOverTooltip:Re.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${Nt}px;
  }
`,At=Q.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-83712a43-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,Ct=Q.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-83712a43-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,_t=({top:e,show:t})=>(0,s.jsx)(je.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"});var Et=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Pe.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Pe.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:c,bagIsLocked:d,reset:l,bagExpanded:u,toggleBag:p,setBagExpanded:g}=(0,Pe.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:x}=(0,Pe.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),m=(0,o.e5)(),h=(0,o._3)(),f=(0,o.GZ)(),I=(0,Pe.dD)(),N=(0,S.useMemo)((()=>(0,F.G7)(x)),[x]),[T,A]=(0,S.useState)(!1),{userCanScroll:C,scrollRef:_,scrollProgress:E,scrollHandler:w}=(0,Pe.uh)(),b=(0,S.useCallback)((()=>{g({bagExpanded:!1,manualClose:!0})}),[g]);(0,S.useEffect)((()=>{d&&!T&&A(!0)}),[d,T]);const v=N.length>0,j=N.length>0,y=t.length>0,O=Boolean(!m&&!j&&c===z.s.ADDING_TO_BAG||m&&!y),k=(0,S.useMemo)((()=>({...(0,F.Hj)(N.map((e=>e.asset)))})),[N]);return u&&f?(0,s.jsxs)(ye.h,{children:[(0,s.jsxs)(Tt,{"data-testid":"nft-bag",raiseZIndex:I||T,isProfilePage:m,children:[(0,s.jsx)(pt,{numberOfAssets:m?t.length:N.length,closeBag:b,resetFlow:m?e:l,isProfilePage:m}),O&&(0,s.jsx)(mt,{}),(0,s.jsx)(_t,{top:!0,show:C&&E>0}),(0,s.jsx)(Oe.sg,{ref:_,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:w,gap:"12",children:m?(0,s.jsx)(ft,{}):(0,s.jsx)(at,{})}),v&&!m&&(0,s.jsx)(ve,{setModalIsOpen:A,eventProperties:k}),y&&m&&(0,s.jsx)(Ct,{onClick:()=>{p(),n(z.HA.LISTING),(0,a._P)(i.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(r.cC,{id:"xGVfLh"})})]}),h?(0,s.jsx)(At,{onClick:p}):T&&(0,s.jsx)(ke.a,{onClick:()=>d?void 0:A(!1)})]}):null}},54212:function(e,t,n){n.d(t,{a:function(){return o},U:function(){return a}});var s=n(42893),r=n(42826),i=n(60120);n(98303);const a=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o=({onClick:e=r.Z})=>(0,s.jsx)(i.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},50026:function(e,t,n){n.d(t,{B:function(){return p},P:function(){return u}});var s=n(86003),r=n(69867),i=n(15627),a=n(95202),o=n(4572),c=n(1004),d=n(13712),l=n(98841);function u(){const e=(0,l.c)((e=>e.itemsInBag));return(0,d.useMemo)((()=>e.reduce(((e,t)=>t.status!==c.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,i.U8)("ETH"),n=(0,d.useMemo)((()=>(0,o.Z)((0,r.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,a.sq)(n);return(0,d.useMemo)((()=>s?.toExact()),[s])}}}]);
//# sourceMappingURL=7790.a457b715.chunk.js.map