"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[317],{56588:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(42893),o=n(12204),r=n(84071),s=n(34578),c=n(87253),a=n(10362);const d=c.default.div.withConfig({displayName:"RangeBadge__BadgeWrapper",componentId:"sc-5538a536-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,l=c.default.div.withConfig({displayName:"RangeBadge__BadgeText",componentId:"sc-5538a536-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=c.default.span.withConfig({displayName:"RangeBadge__ActiveDot",componentId:"sc-5538a536-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=c.default.div.withConfig({displayName:"RangeBadge__LabelText",componentId:"sc-5538a536-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:t}){const n=(0,c.useTheme)();return(0,i.jsx)(d,{children:e?(0,i.jsx)(a.ud,{text:(0,i.jsx)(o.cC,{id:"MZPP7t"}),children:(0,i.jsxs)(p,{color:n.neutral2,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{id:"D87pha"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})}):t?(0,i.jsx)(a.ud,{text:(0,i.jsx)(o.cC,{id:"aIvv/z"}),children:(0,i.jsxs)(p,{color:n.success,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{id:"vOyUlD"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(a.ud,{text:(0,i.jsx)(o.cC,{id:"IwiTcw"}),children:(0,i.jsxs)(p,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{id:"i3Z+/Z"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})})})}},94160:function(e,t,n){var i=n(42893),o=n(10362),r=n(13712);const s=n(87253).default.span.withConfig({displayName:"HoverInlineText__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`;t.Z=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:c=!1,fontSize:a,textColor:d,link:l,...u})=>{const[p,m]=(0,r.useState)(!1);return e?e.length>t?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(s,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:n,adjustSize:c,textColor:d,link:l,fontSize:a,...u,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(s,{margin:n,adjustSize:c,link:l,fontSize:a,textColor:d,...u,children:e}):(0,i.jsx)("span",{})}},22230:function(e,t,n){n.d(t,{N:function(){return A},Z:function(){return M}});var i=n(42893),o=n(12204),r=n(15387),s=n(35206),c=n(56588),a=n(45533),d=n(94160),l=n(25575),u=n(2304),p=n(15627),m=n(58127),f=n(46109),h=n(13712),x=n(41440),g=n(4292),w=n(87253),I=n(1990),_=n(39839),b=n(57482),y=n(49111),k=n(58025);const j=(0,w.default)(x.rU).withConfig({displayName:"PositionListItem__LinkRow",componentId:"sc-c6f6cae0-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${I.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,v=w.default.div.withConfig({displayName:"PositionListItem__DataLineItem",componentId:"sc-c6f6cae0-1"})`
  font-size: 14px;
`,C=(0,w.default)(v).withConfig({displayName:"PositionListItem__RangeLineItem",componentId:"sc-c6f6cae0-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,S=w.default.span.withConfig({displayName:"PositionListItem__DoubleArrow",componentId:"sc-c6f6cae0-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,T=(0,w.default)(_.Tv.BodySmall).withConfig({displayName:"PositionListItem__RangeText",componentId:"sc-c6f6cae0-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,L=(0,w.default)(_.Tv.UtilityBadge).withConfig({displayName:"PositionListItem__FeeTierText",componentId:"sc-c6f6cae0-5"})`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,N=(0,w.default)(_.Tv.BodySmall).withConfig({displayName:"PositionListItem__ExtentsText",componentId:"sc-c6f6cae0-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,P=w.default.div.withConfig({displayName:"PositionListItem__PrimaryPositionIdData",componentId:"sc-c6f6cae0-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function A(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([k.h1,k.Hz,k.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(k.Fl),k.ML].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function M({token0:e,token1:t,tokenId:n,fee:x,liquidity:w,tickLower:I,tickUpper:k}){const{formatDelta:v,formatTickPrice:M}=(0,b.Gb)(),E=(0,p.dQ)(e),$=(0,p.dQ)(t),O=E?(0,y.B)(E):void 0,R=$?(0,y.B)($):void 0,[,z]=(0,f.AI)(O??void 0,R??void 0,x),D=(0,h.useMemo)((()=>{if(z)return new s.Position({pool:z,liquidity:w.toString(),tickLower:I,tickUpper:k})}),[w,z,I,k]),U=(0,m.Z)(x,I,k),{priceLower:X,priceUpper:q,quote:B,base:Z}=A(D),G=B&&(0,y.B)(B),W=Z&&(0,y.B)(Z),V=!!z&&(z.tickCurrent<I||z.tickCurrent>=k),Y="/pools/"+n,K=w?.eq(0);return(0,i.jsxs)(j,{to:Y,children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(a.Z,{currency0:W,currency1:G,size:18,margin:!0}),(0,i.jsxs)(_.Tv.SubHeader,{children:["\xa0",G?.symbol,"\xa0/\xa0",W?.symbol]}),(0,i.jsx)(L,{children:(0,i.jsx)(o.cC,{id:"J/hVSQ",values:{0:v(parseFloat(new r.Percent(x,1e6).toSignificant()))}})})]}),(0,i.jsx)(c.Z,{removed:K,inRange:!V})]}),X&&q?(0,i.jsxs)(C,{children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(N,{children:(0,i.jsx)(o.cC,{id:"0uYsLP"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:M({price:X,atLimit:U,direction:g.Mb.LOWER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(d.Z,{text:G?.symbol}),2:(0,i.jsx)(d.Z,{text:W?.symbol??""})}})]})," ",(0,i.jsxs)(_.Pw,{children:[(0,i.jsx)(S,{children:"\u2194"})," "]}),(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(S,{children:"\u2194"})," "]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(N,{children:(0,i.jsx)(o.cC,{id:"BniuBY"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:M({price:q,atLimit:U,direction:g.Mb.UPPER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(d.Z,{text:G?.symbol}),2:(0,i.jsx)(d.Z,{maxCharacters:10,text:W?.symbol})}})]})]}):(0,i.jsx)(l.ZP,{})]})}},58127:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(35206),o=n(13712),r=n(4292);function s(e,t,n){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},46109:function(e,t,n){n.d(t,{AI:function(){return g},Oh:function(){return x},tK:function(){return h}});var i=n(45433),o=n(15387),r=n(40409),s=n(35206),c=n(80815),a=n(44998),d=n.n(a),l=n(61646),u=n(13712);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=new i.vU(r.Mt);let f=class{static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:r}=n,c=`${e}:${o}:${r}:${i.toString()}`,a=this.addresses.find((e=>e.key===c));if(a)return a.address;const d={key:c,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(d),d.address}static getPool(e,t,n,i,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const c=this.pools.find((s=>s.token0===e&&s.token1===t&&s.fee===n&&d().EQ(s.sqrtRatioX96,i)&&d().EQ(s.liquidity,o)&&s.tickCurrent===r));if(c)return c;const a=new s.Pool(e,t,n,i,o,r);return this.pools.unshift(a),a}};var h;function x(e){const{chainId:t}=(0,c.useWeb3React)(),n=(0,u.useMemo)((()=>t?e.map((([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,o=t.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,n]:[o,i,n]}})):new Array(e.length)),[t,e]),i=(0,u.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map((t=>t&&f.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]),r=(0,l._Y)(i,m,"slot0"),s=(0,l._Y)(i,m,"liquidity");return(0,u.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[h.INVALID,null];const[o,c,a]=i;if(!r[t])return[h.INVALID,null];const{result:d,loading:l,valid:u}=r[t];if(!s[t])return[h.INVALID,null];const{result:p,loading:m,valid:x}=s[t];if(!i||!u||!x)return[h.INVALID,null];if(l||m)return[h.LOADING,null];if(!d||!p)return[h.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[h.NOT_EXISTS,null];try{const e=f.getPool(o,c,a,d.sqrtPriceX96,p[0],d.tick);return[h.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[h.NOT_EXISTS,null]}}))),[s,e,r,n])}function g(e,t,n){return x((0,u.useMemo)((()=>[[e,t,n]]),[e,t,n]))[0]}p(f,"MAX_ENTRIES",128),p(f,"pools",[]),p(f,"addresses",[]),function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(h||(h={}))},59991:function(e,t,n){n.d(t,{W:function(){return d},n:function(){return a}});var i=n(86003),o=n(61646),r=n(13712),s=n(36665);function c(e){const t=(0,s.GL)(),n=(0,r.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),c=(0,o.es)(t,"positions",n),a=(0,r.useMemo)((()=>c.some((({loading:e})=>e))),[c]),d=(0,r.useMemo)((()=>c.some((({error:e})=>e))),[c]),l=(0,r.useMemo)((()=>{if(!a&&!d&&e)return c.map(((t,n)=>{const i=e[n],o=t.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[a,d,c,e]);return{loading:a,positions:l?.map(((e,t)=>({...e,tokenId:n[t][0]})))}}function a(e){const t=c(e?[e]:void 0);return{loading:t.loading,position:t.positions?.[0]}}function d(e){const t=(0,s.GL)(),{loading:n,result:a}=(0,o.Wk)(t,"balanceOf",[e??void 0]),d=a?.[0]?.toNumber(),l=(0,r.useMemo)((()=>{if(d&&e){const t=[];for(let n=0;n<d;n++)t.push([e,n]);return t}return[]}),[e,d]),u=(0,o.es)(t,"tokenOfOwnerByIndex",l),p=(0,r.useMemo)((()=>u.some((({loading:e})=>e))),[u]),m=(0,r.useMemo)((()=>e?u.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,u]),{positions:f,loading:h}=c(m);return{loading:p||n||h,positions:f}}},55494:function(e,t,n){n.d(t,{DC:function(){return c},ER:function(){return a},bb:function(){return d},im:function(){return s},pr:function(){return l}});var i=n(13119),o=n(47096),r=n(87253);const s=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,c=(0,r.default)(o.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=r.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,r.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`}}]);
//# sourceMappingURL=317.3a85e98c.chunk.js.map