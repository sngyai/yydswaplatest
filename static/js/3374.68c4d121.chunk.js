/*! For license information please see 3374.68c4d121.chunk.js.LICENSE.txt */
(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3374],{2380:function(e,n,t){"use strict";t.r(n),t.d(n,{ExploreTab:function(){return xe},default:function(){return ge}});var i=t(42893),r=t(12204),o=t(19903),a=t(66196),s=t(2304),c=t(35458),l=t(86403),d=t(80485),u=t(42528),f=t(68040),p=t(11569),h=t(17487),x=t(55338),m=t(19468),g=t(13712),b=t(96315),v=t(83931),y=t(29304),_=t(80657),k=t(56564),w=t(13120),E=t(87253),j=t(39839),$=t(13352);const C=E.default.div.withConfig({displayName:"NetworkFilter__InternalMenuItem",componentId:"sc-b21b6cfa-0"})`
  flex: 1;
  padding: 12px 8px;
  color: ${({theme:e})=>e.neutral1};

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,T=(0,E.default)(C).withConfig({displayName:"NetworkFilter__InternalLinkMenuItem",componentId:"sc-b21b6cfa-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    background-color: ${({theme:e})=>e.surface3};
    text-decoration: none;
  }

  ${({disabled:e})=>e&&E.css`
      opacity: 60%;
      pointer-events: none;
    `}
`,N=E.default.span.withConfig({displayName:"NetworkFilter__MenuTimeFlyout",componentId:"sc-b21b6cfa-2"})`
  min-width: ${({isInfoExplorePageEnabled:e})=>e?"150px":"240px"};
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  border-radius: 12px 0px 0px 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 48px;
  z-index: 100;

  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>`${e.surface3} transparent`};

  // safari and chrome scrollbar styling
  ::-webkit-scrollbar {
    background: transparent;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.surface3};
    border-radius: 8px;
  }

  ${({isInfoExplorePageEnabled:e})=>e?E.css`
          right: 0px;
          @media screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
            left: 0px;
          }
        `:E.css`
          left: 0px;
        `}
`,I=E.default.div.withConfig({displayName:"NetworkFilter__StyledMenu",componentId:"sc-b21b6cfa-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,P=E.default.div.withConfig({displayName:"NetworkFilter__StyledMenuContent",componentId:"sc-b21b6cfa-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  font-weight: 535;
  vertical-align: middle;
`,O=E.default.span.withConfig({displayName:"NetworkFilter__Chevron",componentId:"sc-b21b6cfa-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:n})=>e?n.neutral1:n.neutral2};
`,S=E.default.div.withConfig({displayName:"NetworkFilter__NetworkLabel",componentId:"sc-b21b6cfa-6"})`
  ${j.cw}
  display: flex;
  gap: 8px;
  align-items: center;
`,L=E.default.div.withConfig({displayName:"NetworkFilter__CheckContainer",componentId:"sc-b21b6cfa-7"})`
  display: flex;
  flex-direction: flex-end;
`,M=(0,E.default)($.Z).withConfig({displayName:"NetworkFilter__NetworkFilterOption",componentId:"sc-b21b6cfa-8"})`
  ${({isInfoExplorePageEnabled:e})=>!e&&"min-width: 156px;"}
`,A=(0,E.default)(d.Z).withConfig({displayName:"NetworkFilter__Tag",componentId:"sc-b21b6cfa-9"})`
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 10px;
  opacity: 1;
  padding: 4px 6px;
`;function R(){const e=(0,E.useTheme)(),n=(0,g.useRef)(null),t=(0,k.Wt)(w.Lk.NETWORK_FILTER),r=(0,k.xk)(w.Lk.NETWORK_FILTER);(0,x.t)(n,t?r:void 0);const o=(0,_.s0)(),{tab:a}=(0,m.useExploreParams)(),s=(0,p.C)(),c=(0,h.Qj)((0,_.UO)().chainName),l=(0,h.Tz)(c),d=(0,f.bt)(l);return(0,i.jsxs)(I,{ref:n,children:[(0,i.jsx)(M,{isInfoExplorePageEnabled:s,onClick:r,"aria-label":"networkFilter",active:t,"data-testid":"tokens-network-filter-selected",children:(0,i.jsxs)(P,{children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(u.Ej,{chainId:l,size:20})," ",!s&&d.label]}),(0,i.jsx)(O,{open:t,children:t?(0,i.jsx)(b.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,i.jsx)(v.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),t&&(0,i.jsxs)(N,{isInfoExplorePageEnabled:s,children:[h.b5.map((n=>{const t=(0,h.Tz)(n),l=(0,f.bt)(t);return(0,i.jsxs)(T,{"data-testid":`tokens-network-filter-option-${n.toLowerCase()}`,onClick:()=>{o(s?`/explore/${a}/${n.toLowerCase()}`:`/tokens/${n.toLowerCase()}`),r()},children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(u.Ej,{chainId:t,size:20})," ",l.label]}),n===c&&(0,i.jsx)(L,{children:(0,i.jsx)(y.Z,{size:16,color:e.accent1})})]},n)})),h.Qr.map((e=>{const n=(0,f.bt)(e);return(0,i.jsxs)(T,{"data-testid":`tokens-network-filter-option-${e}-chain`,disabled:!0,children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(u.Ej,{chainId:e,size:20})," ",n.label]}),(0,i.jsx)(A,{children:"Coming soon"})]},e)}))]})]})}var F=t(65252);var Z=t.p+"static/media/x.381ead042e56a19cb5bcac9d00c29e05.svg",z=t(14526),D=t(67621);const U="20px",B=E.default.div.withConfig({displayName:"SearchBar__SearchBarContainer",componentId:"sc-11945314-0"})`
  display: flex;
  flex: 1;
  ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: flex-end;"}
`,V=E.default.input.withConfig({displayName:"SearchBar__SearchInput",componentId:"sc-11945314-1"})`
  background: no-repeat scroll 7px 7px;
  background-image: url(${F.Z});
  background-size: 20px 20px;
  background-position: 12px center;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  height: 100%;
  width: ${({isInfoExplorePageEnabled:e,isOpen:n})=>e?n?"200px":"0":"min(200px, 100%)"};
  font-size: 16px;
  font-weight: 485;
  padding-left: 40px;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  ${e=>e&&"text-overflow: ellipsis;"}

  :hover {
    background-color: ${({theme:e})=>e.surface1};
  }

  :focus {
    outline: none;
    background-color: ${({theme:e})=>e.surface1};
    border-color: ${({theme:e})=>e.accent1};
    color: ${({theme:e})=>e.neutral1};
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    height: ${U};
    width: ${U};
    background-image: url(${Z});
    margin-right: 10px;
    background-size: ${U} ${U};
    cursor: pointer;
  }

  @media only screen and (max-width: ${c.Uw}) {
    width: ${({isInfoExplorePageEnabled:e,isOpen:n})=>e?n?"min(100%, 200px)":"0":"100%"};
  }
`;function H({tab:e}){const n=(0,D.Dv)(l.fO),[t,s]=(0,g.useState)(n),c=(0,D.yW)(l.fO),d=(0,z.Z)(t,300),u=(0,p.C)(),[f,h]=(0,g.useState)(!1);(0,g.useEffect)((()=>{s(n)}),[n]),(0,g.useEffect)((()=>{c(d)}),[d,c]);const x=()=>h(!0),m=()=>{""===t&&h(!1)};return(0,i.jsx)(B,{isInfoExplorePageEnabled:u,children:(0,i.jsx)(r.cC,{id:"J/hVSQ",values:{0:u?"tokens"===e?"Search tokens":"Search pools":"Filter tokens"},render:({translation:e})=>(0,i.jsx)(a.M8,{events:[o.TM.onFocus],name:o.Je.EXPLORE_SEARCH_SELECTED,element:o.xo.EXPLORE_SEARCH_INPUT,children:(0,i.jsx)(V,{isInfoExplorePageEnabled:u,"data-cy":"explore-tokens-search-input",type:"search",placeholder:`${e}`,id:"searchBar",autoComplete:"off",value:t,onChange:({target:{value:e}})=>s(e),isOpen:f,onFocus:u?x:void 0,onBlur:u?m:void 0})})})})}var J=t(1670),q=t(1152),Q=t(79954);q.ZP`
  query TopTokens100($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
      name
      chain
      address
      symbol
      standard
      market(currency: USD) {
        id
        totalValueLocked {
          id
          value
          currency
        }
        price {
          id
          value
          currency
        }
        pricePercentChange(duration: $duration) {
          id
          currency
          value
        }
        volume(duration: $duration) {
          id
          value
          currency
        }
      }
      project {
        id
        logoUrl
      }
    }
  }
`,q.ZP`
  query TopTokensSparkline($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
      address
      chain
      market(currency: USD) {
        id
        priceHistory(duration: $duration) {
          id
          timestamp
          value
        }
      }
    }
  }
`;const W=20;function X(e){const n=(0,h.Tz)(e),t=(0,h.uw)((0,D.Dv)(l.X3)),{data:i}=(0,h.eE)((0,Q.FL)({variables:{duration:t,chain:e}}),h.u8.Slow),r=(0,g.useMemo)((()=>{const e=n&&i?.topTokens?.map((e=>(0,h.vR)(n,e))),t={};return e?.forEach((e=>e?.address&&(t[e.address]=e?.market?.priceHistory?.filter(h.yL)))),t}),[n,i?.topTokens]),{data:o,loading:a}=(0,h.eE)((0,Q.le)({variables:{duration:t,chain:e}}),h.u8.Fast),s=function(e){const n=(0,D.Dv)(l.AY),t=(0,D.Dv)(l.$E);return(0,g.useMemo)((()=>{if(!e)return;let i=Array.from(e);switch(n){case l.PU.PRICE:i=i.sort(((e,n)=>(n?.market?.price?.value??0)-(e?.market?.price?.value??0)));break;case l.PU.PERCENT_CHANGE:i=i.sort(((e,n)=>(n?.market?.pricePercentChange?.value??0)-(e?.market?.pricePercentChange?.value??0)));break;case l.PU.TOTAL_VALUE_LOCKED:i=i.sort(((e,n)=>(n?.market?.totalValueLocked?.value??0)-(e?.market?.totalValueLocked?.value??0)));break;case l.PU.VOLUME:i=i.sort(((e,n)=>(n?.market?.volume?.value??0)-(e?.market?.volume?.value??0)))}return t?i.reverse():i}),[e,n,t])}((0,g.useMemo)((()=>n&&o?.topTokens?.map((e=>(0,h.vR)(n,e)))),[n,o])),c=(0,g.useMemo)((()=>s?.reduce(((e,n,t)=>n.address?{...e,[n.address]:t+1}:e),{})??{}),[s]),d=function(e){const n=(0,D.Dv)(l.fO),t=(0,g.useMemo)((()=>n.toLowerCase()),[n]);return(0,g.useMemo)((()=>{if(!e)return;let n=e;return t&&(n=n?.filter((e=>{const n=e?.address?.toLowerCase().includes(t),i=e?.name?.toLowerCase().includes(t),r=e?.symbol?.toLowerCase().includes(t);return i||r||n}))),n}),[e,t])}(s);return(0,g.useMemo)((()=>({tokens:d,tokenSortRank:c,loadingTokens:a,sparklines:r})),[d,c,a,r])}var K=t(34578),G=t(57284);const Y=E.default.div.withConfig({displayName:"TokenTable__GridContainer",componentId:"sc-6fd6567b-0"})`
  display: flex;
  flex-direction: column;
  max-width: ${c.y5};
  background-color: ${({theme:e})=>e.surface1};

  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.surface3};
`,ee=E.default.div.withConfig({displayName:"TokenTable__TokenDataContainer",componentId:"sc-6fd6567b-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,ne=E.default.div.withConfig({displayName:"TokenTable__NoTokenDisplay",componentId:"sc-6fd6567b-2"})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  font-weight: 535;
  align-items: center;
  padding: 0px 28px;
  gap: 8px;
`;function te({message:e}){return(0,i.jsxs)(Y,{children:[(0,i.jsx)(G.VJ,{}),(0,i.jsx)(ne,{children:e})]})}const ie=({rowCount:e})=>(0,i.jsx)(i.Fragment,{children:Array(e).fill(null).map(((n,t)=>(0,i.jsx)(G.PI,{first:0===t,last:t===e-1},t)))});function re({rowCount:e=W}){return(0,i.jsxs)(Y,{children:[(0,i.jsx)(G.VJ,{}),(0,i.jsx)(ee,{children:(0,i.jsx)(ie,{rowCount:e})})]})}function oe(){const e=(0,h.Qj)((0,_.UO)().chainName),{tokens:n,tokenSortRank:t,loadingTokens:o,sparklines:a}=X(e);return o&&!n?(0,i.jsx)(re,{rowCount:W}):n?0===n?.length?(0,i.jsx)(te,{message:(0,i.jsx)(r.cC,{id:"k4nIkP"})}):(0,i.jsxs)(Y,{children:[(0,i.jsx)(G.VJ,{}),(0,i.jsx)(ee,{children:n.map(((e,r)=>e?.address&&(0,i.jsx)(G.pS,{tokenListIndex:r,tokenListLength:n.length,token:e,sparklineMap:a,sortRank:t[e.address]},e.address)))})]}):(0,i.jsx)(te,{message:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(K.Z,{size:16}),(0,i.jsx)(r.cC,{id:"lR4CZT"})]})})}var ae=t(10362);const se=E.default.div.withConfig({displayName:"Explore__ExploreContainer",componentId:"sc-a582a304-0"})`
  width: 100%;
  min-width: 320px;
  padding: 68px 12px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding-top: 48px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,ce=E.default.div.withConfig({displayName:"Explore__TitleContainer",componentId:"sc-a582a304-1"})`
  margin-bottom: 32px;
  max-width: ${c.y5};
  margin-left: auto;
  margin-right: auto;
  display: flex;
`,le=E.default.div.withConfig({displayName:"Explore__NavWrapper",componentId:"sc-a582a304-2"})`
  display: flex;
  max-width: ${c.y5};
  margin: 0 auto;
  margin-bottom: ${({isInfoExplorePageEnabled:e})=>e?"16px":"20px"};
  color: ${({theme:e})=>e.neutral3};
  flex-direction: row;

  @media only screen and (max-width: ${c.Uw}) {
    flex-direction: column;
    gap: 8px;
  }

  ${({isInfoExplorePageEnabled:e})=>e&&E.css`
      @media screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
        flex-direction: column;
        gap: 16px;
      }
    `};
`,de=(0,E.default)(s.BA).withConfig({displayName:"Explore__TabBar",componentId:"sc-a582a304-3"})`
  gap: 24px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    gap: 16px;
  }
`,ue=(0,E.default)(j.Tv.HeadlineMedium).withConfig({displayName:"Explore__TabItem",componentId:"sc-a582a304-4"})`
  align-items: center;
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
  cursor: pointer;
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} color`};
`,fe=E.default.div.withConfig({displayName:"Explore__FiltersContainer",componentId:"sc-a582a304-5"})`
  display: flex;
  gap: 8px;
  height: 40px;

  @media only screen and (max-width: ${c.Uw}) {
    ${({isInfoExplorePageEnabled:e})=>!e&&"order: 2;"}
  }

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: space-between;"}
  }
`,pe=(0,E.default)(fe).withConfig({displayName:"Explore__DropdownFilterContainer",componentId:"sc-a582a304-6"})`
  ${({isInfoExplorePageEnabled:e})=>e?E.css`
          @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
            justify-content: flex-start;
          }
        `:E.css`
          @media only screen and (max-width: ${c.Uw}) {
            justify-content: flex-start;
          }
        `};
`,he=(0,E.default)(fe).withConfig({displayName:"Explore__SearchContainer",componentId:"sc-a582a304-7"})`
  ${({isInfoExplorePageEnabled:e})=>!e&&"margin-left: 8px;"}
  width: 100%;

  @media only screen and (max-width: ${c.Uw}) {
    ${({isInfoExplorePageEnabled:e})=>!e&&"order: 1; margin: 0px;"}
  }

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: flex-end;"}
  }
`;var xe;!function(e){e.Tokens="tokens",e.Pools="pools",e.Transactions="transactions"}(xe||(xe={}));const me=[{title:(0,i.jsx)(r.cC,{id:"6RDwJM"}),key:xe.Tokens,component:oe,loggingElementName:o.xo.EXPLORE_TOKENS_TAB},{title:(0,i.jsx)(r.cC,{id:"lQfOr9"}),key:xe.Pools,component:oe,loggingElementName:o.xo.EXPLORE_POOLS_TAB},{title:(0,i.jsx)(r.cC,{id:"4wyw8H"}),key:xe.Transactions,component:oe,loggingElementName:o.xo.EXPLORE_TRANSACTIONS_TAB}];var ge=({initialTab:e})=>{const n=(0,D.oC)(l.fO),t=(0,_.TH)(),s=(0,_.s0)(),c=(0,g.useMemo)((()=>{const n=e&&me.findIndex((n=>n.key===e));return n&&-1!==n?n:0}),[e]),[d,u]=(0,g.useState)(c),f=(0,p.C)(),{tab:h}=(0,m.useExploreParams)();(0,g.useEffect)((()=>{const e=me.findIndex((e=>e.key===h));-1!==e&&u(e)}),[h]),(0,g.useEffect)((()=>{n()}),[t,n]);const{component:x,key:b}=me[d];return(0,i.jsx)(a.fM,{page:f?o.yJ.EXPLORE_PAGE:o.yJ.TOKENS_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(se,{children:[!f&&(0,i.jsx)(ce,{children:(0,i.jsx)(ae.ud,{text:(0,i.jsx)(r.cC,{id:"LkgPBQ"}),placement:"bottom",children:(0,i.jsx)(j.Tv.LargeHeader,{children:(0,i.jsx)(r.cC,{id:"Vzmu+R"})})})}),(0,i.jsxs)(le,{isInfoExplorePageEnabled:f,children:[f&&(0,i.jsx)(de,{"data-testid":"explore-navbar",children:me.map((({title:e,loggingElementName:n,key:t},r)=>(0,i.jsx)(a.M8,{events:[o.TM.onClick],name:o.Gz.NAVBAR_CLICKED,element:n,children:(0,i.jsx)(ue,{onClick:()=>{u(r),s(`/explore/${t}`)},active:d===r,children:e},t)},r)))}),f?(0,i.jsxs)(fe,{isInfoExplorePageEnabled:!0,children:[(0,i.jsxs)(pe,{isInfoExplorePageEnabled:!0,children:[(0,i.jsx)(R,{}),b===xe.Tokens&&(0,i.jsx)(J.ZP,{})]}),(0,i.jsx)(he,{isInfoExplorePageEnabled:!0,children:b!==xe.Transactions&&(0,i.jsx)(H,{tab:b})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(fe,{isInfoExplorePageEnabled:!1,children:[(0,i.jsx)(R,{}),(0,i.jsx)(J.ZP,{})]}),(0,i.jsx)(he,{isInfoExplorePageEnabled:!1,children:(0,i.jsx)(H,{})})]})]}),f?(0,i.jsx)(x,{}):(0,i.jsx)(oe,{})]})})}},19468:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s},useExploreParams:function(){return a}});var i=t(42893),r=t(80657),o=t(2380);function a(){const{tab:e,chainName:n,tokenAddress:t}=(0,r.UO)(),i=Object.values(o.ExploreTab);return e&&!n&&i.includes(e)?{tab:e,chainName:void 0,tokenAddress:t}:e&&!n?{tab:o.ExploreTab.Tokens,chainName:e,tokenAddress:t}:e||n?{tab:e,chainName:n,tokenAddress:t}:{tab:o.ExploreTab.Tokens,chainName:void 0,tokenAddress:void 0}}function s(){const{tab:e,chainName:n,tokenAddress:t}=a();return e&&n&&t?(0,i.jsx)(r.Fg,{to:`/explore/${e}/${n}/${t}`,replace:!0}):n&&t?(0,i.jsx)(r.Fg,{to:`/explore/tokens/${n}/${t}`,replace:!0}):e&&n?(0,i.jsx)(r.Fg,{to:`/explore/${e}/${n}`,replace:!0}):n?(0,i.jsx)(r.Fg,{to:`/explore/tokens/${n}`,replace:!0}):(0,i.jsx)(o.default,{initialTab:e})}},47244:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(41432),r=t.n(i),o=t(13712),a=t(61940),s=t.n(a),c=["top","left","transform","className","children","innerRef"];function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function d(e){var n=e.top,t=void 0===n?0:n,i=e.left,r=void 0===i?0:i,a=e.transform,d=e.className,u=e.children,f=e.innerRef,p=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,c);return o.createElement("g",l({ref:f,className:s()("visx-group",d),transform:a||"translate("+r+", "+t+")"},p),u)}d.propTypes={top:r().number,left:r().number,transform:r().string,className:r().string,children:r().node,innerRef:r().oneOfType([r().string,r().func,r().object])}},4271:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var i=t(41432),r=t.n(i),o=t(82751),a=t.n(o),s=t(13712),c=t(92695),l=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},d.apply(this,arguments)}var u=[];function f(e){var n=e.className,t=e.children,i=e.debounceTime,r=void 0===i?300:i,o=e.ignoreDimensions,f=void 0===o?u:o,p=e.parentSizeStyles,h=void 0===p?{width:"100%",height:"100%"}:p,x=e.enableDebounceLeadingCall,m=void 0===x||x,g=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l),b=(0,s.useRef)(null),v=(0,s.useRef)(0),y=(0,s.useState)({width:0,height:0,top:0,left:0}),_=y[0],k=y[1],w=(0,s.useMemo)((function(){var e=Array.isArray(f)?f:[f];return a()((function(n){k((function(t){return Object.keys(t).filter((function(e){return t[e]!==n[e]})).every((function(n){return e.includes(n)}))?t:n}))}),r,{leading:m})}),[r,m,f]);return(0,s.useEffect)((function(){var e=new c.do((function(e){void 0===e&&(e=[]),e.forEach((function(e){var n=e.contentRect,t=n.left,i=n.top,r=n.width,o=n.height;v.current=window.requestAnimationFrame((function(){w({width:r,height:o,top:i,left:t})}))}))}));return b.current&&e.observe(b.current),function(){window.cancelAnimationFrame(v.current),e.disconnect(),null!=w&&w.cancel&&w.cancel()}}),[w]),s.createElement("div",d({style:h,ref:b,className:n},g),t(d({},_,{ref:b.current,resize:w})))}f.propTypes={className:r().string,debounceTime:r().number,enableDebounceLeadingCall:r().bool,ignoreDimensions:r().oneOfType([r().any,r().arrayOf(r().any)]),children:r().func.isRequired}},14045:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var i=t(13712),r=t(61940),o=t.n(r),a=t(62972),s=t(30349);function c(e){this._context=e}function l(e){return new c(e)}function d(e){return e[0]}function u(e){return e[1]}function f(){var e=d,n=u,t=(0,s.Z)(!0),i=null,r=l,o=null;function c(s){var c,l,d,u=s.length,f=!1;for(null==i&&(o=r(d=(0,a.Z)())),c=0;c<=u;++c)!(c<u&&t(l=s[c],c,s))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+e(l,c,s),+n(l,c,s));if(d)return o=null,d+""||null}return c.x=function(n){return arguments.length?(e="function"==typeof n?n:(0,s.Z)(+n),c):e},c.y=function(e){return arguments.length?(n="function"==typeof e?e:(0,s.Z)(+e),c):n},c.defined=function(e){return arguments.length?(t="function"==typeof e?e:(0,s.Z)(!!e),c):t},c.curve=function(e){return arguments.length?(r=e,null!=i&&(o=r(i)),c):r},c.context=function(e){return arguments.length?(null==e?i=o=null:o=r(i=e),c):i},c}function p(e,n){e(n)}c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n)}}};var h=["children","data","x","y","fill","className","curve","innerRef","defined"];function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},x.apply(this,arguments)}function m(e){var n=e.children,t=e.data,r=void 0===t?[]:t,a=e.x,s=e.y,c=e.fill,l=void 0===c?"transparent":c,d=e.className,u=e.curve,m=e.innerRef,g=e.defined,b=void 0===g?function(){return!0}:g,v=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,h),y=function(e){var n=void 0===e?{}:e,t=n.x,i=n.y,r=n.defined,o=n.curve,a=f();return t&&p(a.x,t),i&&p(a.y,i),r&&a.defined(r),o&&a.curve(o),a}({x:a,y:s,defined:b,curve:u});return n?i.createElement(i.Fragment,null,n({path:y})):i.createElement("path",x({ref:m,className:o()("visx-linepath",d),d:y(r)||"",fill:l,strokeLinecap:"round"},v))}},61940:function(e,n){var t;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var a=r.apply(null,t);a&&e.push(a)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)i.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},62972:function(e,n){"use strict";var t=Math.PI,i=2*t,r=1e-6,o=i-r;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(e,n){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,n){this._+="L"+(this._x1=+e)+","+(this._y1=+n)},quadraticCurveTo:function(e,n,t,i){this._+="Q"+ +e+","+ +n+","+(this._x1=+t)+","+(this._y1=+i)},bezierCurveTo:function(e,n,t,i,r,o){this._+="C"+ +e+","+ +n+","+ +t+","+ +i+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(e,n,i,o,a){e=+e,n=+n,i=+i,o=+o,a=+a;var s=this._x1,c=this._y1,l=i-e,d=o-n,u=s-e,f=c-n,p=u*u+f*f;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=n);else if(p>r)if(Math.abs(f*l-d*u)>r&&a){var h=i-s,x=o-c,m=l*l+d*d,g=h*h+x*x,b=Math.sqrt(m),v=Math.sqrt(p),y=a*Math.tan((t-Math.acos((m+p-g)/(2*b*v)))/2),_=y/v,k=y/b;Math.abs(_-1)>r&&(this._+="L"+(e+_*u)+","+(n+_*f)),this._+="A"+a+","+a+",0,0,"+ +(f*h>u*x)+","+(this._x1=e+k*l)+","+(this._y1=n+k*d)}else this._+="L"+(this._x1=e)+","+(this._y1=n)},arc:function(e,n,a,s,c,l){e=+e,n=+n,l=!!l;var d=(a=+a)*Math.cos(s),u=a*Math.sin(s),f=e+d,p=n+u,h=1^l,x=l?s-c:c-s;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+f+","+p:(Math.abs(this._x1-f)>r||Math.abs(this._y1-p)>r)&&(this._+="L"+f+","+p),a&&(x<0&&(x=x%i+i),x>o?this._+="A"+a+","+a+",0,1,"+h+","+(e-d)+","+(n-u)+"A"+a+","+a+",0,1,"+h+","+(this._x1=f)+","+(this._y1=p):x>r&&(this._+="A"+a+","+a+",0,"+ +(x>=t)+","+h+","+(this._x1=e+a*Math.cos(c))+","+(this._y1=n+a*Math.sin(c))))},rect:function(e,n,t,i){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)+"h"+ +t+"v"+ +i+"h"+-t+"Z"},toString:function(){return this._}},n.Z=s},30349:function(e,n,t){"use strict";function i(e){return function(){return e}}t.d(n,{Z:function(){return i}})},8328:function(e,n,t){var i=t(22160).Symbol;e.exports=i},5757:function(e,n,t){var i=t(8328),r=t(20040),o=t(48755),a=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):o(e)}},80050:function(e,n,t){var i=t(24427),r=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(r,""):e}},50531:function(e,n,t){var i="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=i},20040:function(e,n,t){var i=t(8328),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,s=i?i.toStringTag:void 0;e.exports=function(e){var n=o.call(e,s),t=e[s];try{e[s]=void 0;var i=!0}catch(c){}var r=a.call(e);return i&&(n?e[s]=t:delete e[s]),r}},48755:function(e){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},22160:function(e,n,t){var i=t(50531),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();e.exports=o},24427:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},82751:function(e,n,t){var i=t(85886),r=t(90724),o=t(29727),a=Math.max,s=Math.min;e.exports=function(e,n,t){var c,l,d,u,f,p,h=0,x=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(n){var t=c,i=l;return c=l=void 0,h=n,u=e.apply(i,t)}function v(e){var t=e-p;return void 0===p||t>=n||t<0||m&&e-h>=d}function y(){var e=r();if(v(e))return _(e);f=setTimeout(y,function(e){var t=n-(e-p);return m?s(t,d-(e-h)):t}(e))}function _(e){return f=void 0,g&&c?b(e):(c=l=void 0,u)}function k(){var e=r(),t=v(e);if(c=arguments,l=this,p=e,t){if(void 0===f)return function(e){return h=e,f=setTimeout(y,n),x?b(e):u}(p);if(m)return clearTimeout(f),f=setTimeout(y,n),b(p)}return void 0===f&&(f=setTimeout(y,n)),u}return n=o(n)||0,i(t)&&(x=!!t.leading,d=(m="maxWait"in t)?a(o(t.maxWait)||0,n):d,g="trailing"in t?!!t.trailing:g),k.cancel=function(){void 0!==f&&clearTimeout(f),h=0,c=p=l=f=void 0},k.flush=function(){return void 0===f?u:_(r())},k}},85886:function(e){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},8164:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},83352:function(e,n,t){var i=t(5757),r=t(8164);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==i(e)}},90724:function(e,n,t){var i=t(22160);e.exports=function(){return i.Date.now()}},29727:function(e,n,t){var i=t(80050),r=t(85886),o=t(83352),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var t=s.test(e);return t||c.test(e)?l(e.slice(2),t?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=3374.68c4d121.chunk.js.map