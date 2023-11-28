"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5649,9111],{6053:function(e,t,n){n.d(t,{G:function(){return r}});var i=n(80815),o=n(48141);function r(){const{chainId:e}=(0,i.useWeb3React)();return e&&o.Ep.includes(e)}},83951:function(e,t,n){n.r(t),n.d(t,{default:function(){return Oe}});var i,o,r,a=n(42893),s=n(12204),d=n(19903),l=n(80815),c=n(66196),p=n(93622),x=n(60198),f=n(60476),u=n(13712),h=n(41440),m=n(87253),g=n(39839);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},j.apply(this,arguments)}function y(e,t){let{title:n,titleId:a,...s}=e;return u.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},s),n?u.createElement("title",{id:a},n):null,i||(i=u.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=u.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=u.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const w=u.forwardRef(y);n.p;var v,C=n(55338),b=n(56564),_=n(13120);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(v||(v={}));const k=(0,m.default)(w).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-ac391358-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,T=m.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-ac391358-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,O=m.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-ac391358-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=v.RIGHT})=>e===v.RIGHT?m.css`
          right: 0rem;
        `:m.css`
          left: 0rem;
        `};
`,I=(0,m.default)(g.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-ac391358-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,L=(0,m.default)(h.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-ac391358-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,P=(0,m.default)(I).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-ac391358-5"})`
  width: max-content;
  text-decoration: none;
`;var N=n(22230),E=n(1990);const $=m.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-dcaf7249-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${E.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,z=m.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-dcaf7249-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${E.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${E.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,M=m.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-dcaf7249-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,W=m.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-dcaf7249-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function H({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)($,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(s.cC,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,a.jsx)(W,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,a.jsx)(s.cC,{id:"GOctE4"}):(0,a.jsx)(s.cC,{id:"l+HNUa"})})]}),(0,a.jsxs)(z,{children:[(0,a.jsx)(s.cC,{id:"LcLwJZ"}),(0,a.jsx)(M,{children:(0,a.jsx)(W,{onClick:()=>{t(!n)},children:n?(0,a.jsx)(s.cC,{id:"GOctE4"}):(0,a.jsx)(s.cC,{id:"l+HNUa"})})})]}),e.map((e=>(0,a.jsx)(N.Z,{...e},e.tokenId.toString())))]})}var R=n(2304),S=n(85729),B=n(48141),A=n(25243),Z=n(6053),F=n(59991),G=n(34578),U=n(49855),D=n(47212),J=n(41432),q=n.n(J);function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Q.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Y=(0,u.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,a=V(e,["color","size"]);return u.createElement("svg",Q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),u.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),u.createElement("polyline",{points:"2 17 12 22 22 17"}),u.createElement("polyline",{points:"2 12 12 17 22 12"}))}));Y.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Y.displayName="Layers";var K=Y;function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},X.apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var te=(0,u.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,a=ee(e,["color","size"]);return u.createElement("svg",X({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),u.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),u.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));te.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},te.displayName="BookOpen";var ne=te,ie=n(83931),oe=n(64614),re=n(68040);const ae=m.default.section.withConfig({displayName:"CTACards__CTASection",componentId:"sc-d54cea6f-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,se=(0,m.default)(g.dL).withConfig({displayName:"CTACards__CTA",componentId:"sc-d54cea6f-1"})`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,de=(0,m.default)(g.Tv.DeprecatedLabel).withConfig({displayName:"CTACards__HeaderText",componentId:"sc-d54cea6f-2"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,le=(0,m.default)(f.Tz).withConfig({displayName:"CTACards__ResponsiveColumn",componentId:"sc-d54cea6f-3"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function ce(){const{chainId:e}=(0,l.useWeb3React)(),{infoLink:t}=(0,re.o7)(e);return(0,a.jsxs)(ae,{children:[(0,a.jsx)(se,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,a.jsxs)(le,{children:[(0,a.jsxs)(de,{children:[(0,a.jsx)(s.cC,{id:"4xl+7r"})," \u2197"]}),(0,a.jsx)(g.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,a.jsx)(s.cC,{id:"xTN8Uu"})})]})}),(0,a.jsx)(se,{"data-testid":"cta-infolink",href:t+"pools",children:(0,a.jsxs)(le,{children:[(0,a.jsxs)(de,{style:{alignSelf:"flex-start"},children:[(0,a.jsx)(s.cC,{id:"T6amNF"})," \u2197"]}),(0,a.jsx)(g.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,a.jsx)(s.cC,{id:"sX+nNt"})})]})})]})}var pe=n(55494);const xe=(0,m.default)(f.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-a7a850fc-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,fe=(0,m.default)(R.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-a7a850fc-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,ue=(0,m.default)(R.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-a7a850fc-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,he=(0,m.default)((({flyoutAlignment:e=v.RIGHT,ToggleUI:t,menuItems:n,...i})=>{const o=(0,u.useRef)(),r=(0,b.Wt)(_.Lk.POOL_OVERVIEW_OPTIONS),s=(0,b.xk)(_.Lk.POOL_OVERVIEW_OPTIONS);(0,C.t)(o,r?s:void 0);const d=t||k;return(0,a.jsxs)(T,{ref:o,...i,children:[(0,a.jsx)(d,{onClick:s}),r&&(0,a.jsx)(O,{flyoutAlignment:e,children:n.map((({content:e,link:t,external:n},i)=>n?(0,a.jsx)(P,{href:t,children:e},i):(0,a.jsx)(L,{to:t,children:e},i)))})]})})).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-a7a850fc-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,me=m.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-a7a850fc-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,ge=(0,m.default)(x.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-a7a850fc-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,je=(0,m.default)(g.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-a7a850fc-6"})`
  align-items: center;
  display: flex;
`,ye=m.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-a7a850fc-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,we=m.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,ve=(0,m.default)(G.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-a7a850fc-8"})`
  ${we}
`,Ce=(0,m.default)(U.Z).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-a7a850fc-9"})`
  ${we}
`,be=(0,m.default)(x.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-a7a850fc-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,_e=m.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-a7a850fc-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function ke(){return(0,a.jsxs)(pe.pr,{children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]})}function Te(){const e=(0,m.useTheme)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(xe,{children:(0,a.jsx)(f.Tz,{gap:"lg",justify:"center",children:(0,a.jsxs)(f.Tz,{gap:"lg",style:{width:"100%"},children:[(0,a.jsx)(fe,{padding:"0",children:(0,a.jsx)(g.Tv.LargeHeader,{children:(0,a.jsx)(s.cC,{id:"lQfOr9"})})}),(0,a.jsx)(_e,{children:(0,a.jsx)(ye,{children:(0,a.jsxs)(g.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,a.jsx)(ve,{strokeWidth:1.2}),(0,a.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,a.jsx)(s.cC,{id:"nFZR3H"})})]})})})]})})}),(0,a.jsx)(S.c,{})]})}function Oe(){const{account:e,chainId:t}=(0,l.useWeb3React)(),n=(0,Z.G)(),i=(0,p.LK)(),o=(0,m.useTheme)(),[r,j]=(0,oe.QP)(),{positions:y,loading:w}=(0,F.W)(e),[C,b]=y?.reduce(((e,t)=>(e[t.liquidity?.isZero()?1:0].push(t),e)),[[],[]])??[[],[]],_=(0,u.useMemo)((()=>[...C,...r?[]:b]),[b,C,r]),k=(0,A.J)(_);if(!(0,B.EC)(t))return(0,a.jsx)(Te,{});const T=Boolean(!e),O=[{content:(0,a.jsxs)(me,{children:[(0,a.jsx)(s.cC,{id:"y5rS9U"}),(0,a.jsx)(D.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,a.jsxs)(me,{children:[(0,a.jsx)(s.cC,{id:"F+Ocff"}),(0,a.jsx)(K,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,a.jsxs)(me,{children:[(0,a.jsx)(s.cC,{id:"rjZpLn"}),(0,a.jsx)(ne,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,a.jsxs)(c.fM,{page:d.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,a.jsx)(xe,{children:(0,a.jsx)(f.Tz,{gap:"lg",justify:"center",children:(0,a.jsxs)(f.Tz,{gap:"lg",style:{width:"100%"},children:[(0,a.jsxs)(fe,{padding:"0",children:[(0,a.jsx)(g.Tv.LargeHeader,{children:(0,a.jsx)(s.cC,{id:"lQfOr9"})}),(0,a.jsxs)(ue,{children:[n&&(0,a.jsx)(he,{menuItems:O,flyoutAlignment:v.LEFT,ToggleUI:e=>(0,a.jsx)(ge,{...e,children:(0,a.jsxs)(je,{children:[(0,a.jsx)(s.cC,{id:"2FYpfJ"}),(0,a.jsx)(ie.Z,{size:15})]})})}),(0,a.jsxs)(be,{"data-cy":"join-pool-button",id:"join-pool-button",as:h.rU,to:"/add/ETH",children:["+ ",(0,a.jsx)(s.cC,{id:"1k0YWs"})]})]})]}),(0,a.jsx)(_e,{children:w?(0,a.jsx)(ke,{}):k&&b&&k.length>0?(0,a.jsx)(H,{positions:k,setUserHideClosedPositions:j,userHideClosedPositions:r}):(0,a.jsxs)(ye,{children:[(0,a.jsxs)(g.Tv.BodyPrimary,{color:o.neutral3,textAlign:"center",children:[(0,a.jsx)(Ce,{strokeWidth:1,style:{marginTop:"2em"}}),(0,a.jsx)("div",{children:(0,a.jsx)(s.cC,{id:"YgSnQ0"})})]}),!T&&b.length>0&&(0,a.jsx)(x.oD,{style:{marginTop:".5rem"},onClick:()=>j(!r),children:(0,a.jsx)(s.cC,{id:"GOctE4"})}),T&&(0,a.jsx)(c.M8,{events:[d.TM.onClick],name:d.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:d.xo.CONNECT_WALLET_BUTTON,children:(0,a.jsx)(x.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:i,children:(0,a.jsx)(s.cC,{id:"GdzYJ9"})})})]})}),(0,a.jsx)(g.Pw,{children:(0,a.jsx)(ce,{})})]})})}),(0,a.jsx)(S.c,{})]})}},49111:function(e,t,n){n.d(t,{B:function(){return r}});var i=n(48141),o=n(58025);function r(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&o.Fl[t]?.equals(e)?(0,o.gX)(e.chainId):e}},49855:function(e,t,n){var i=n(13712),o=n(41432),r=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,d=void 0===r?24:r,l=s(e,["color","size"]);return i.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));d.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},d.displayName="Inbox",t.Z=d}}]);
//# sourceMappingURL=5649.86bce84d.chunk.js.map