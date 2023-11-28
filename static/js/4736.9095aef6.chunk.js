"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4736],{77113:function(e,t,i){i.r(t),i.d(t,{BannerWrapper:function(){return fi},CollectionBannerLoading:function(){return gi},default:function(){return _i}});var n=i(42893),r=i(19903),a=i(80815),s=i(66196),o=i(60476),l=i(62329),d=i(2304),c=i(80343),p=i(20555),g=i(49912),h=i(17790),u=i(60120),m=i(2994),x=i(15655),f=i(5658),w=i(50026),y=i(12113),j=i(57482);i(98303),i(46912);const b=()=>{const e=(0,f.cP)((e=>e.itemsInBag)),t=(0,f.cP)((e=>e.toggleBag)),i=(0,w.P)(),r=(0,w.B)(),{formatEther:a,formatNumberOrString:s}=(0,j.Gb)(),o=e.length>0;return(0,n.jsxs)(m.X2,{display:{sm:o?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,n.jsxs)(m.X2,{gap:"8",children:[(0,n.jsx)(u.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,n.jsx)(u.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,n.jsxs)(m.sg,{children:[(0,n.jsx)(u.n,{className:x.d1,fontWeight:"medium",children:(0,y.t)(e.length,"NFT")}),(0,n.jsxs)(m.X2,{gap:"8",children:[(0,n.jsxs)(u.n,{className:x.d1,children:[`${a({input:i.toString(),type:j.sw.NFTToken})}`," ETH"]}),(0,n.jsx)(u.n,{color:"neutral2",className:x.Km,children:s({input:r,type:j.sw.FiatNFTToken})})]})]})]}),(0,n.jsx)(u.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var C=i(17749),v=i(87253),_=(i(36199),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),k="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const T=(0,v.default)(m.X2).withConfig({displayName:"ActivitySwitcher__BaseActivityContainer",componentId:"sc-12fe17f6-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,N=new Array(2).fill(null).map(((e,t)=>(0,n.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),I=({showActivity:e,toggleActivity:t})=>{const i=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(T,{gap:"24",marginBottom:"16",children:i?N:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.n,{as:"button",className:e?_:k,onClick:()=>e&&t(),children:"Items"}),(0,n.jsx)(s.M8,{events:[r.TM.onClick],element:r.xo.NFT_ACTIVITY_TAB,name:r.Yz.NFT_ACTIVITY_SELECTED,children:(0,n.jsx)(u.n,{as:"button",className:e?k:_,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var S=i(86003),z=i(69867),P=i(56878),$=i(79954),E=i(82627),R=i(14526),M=i(12204),F=i(14327),B=i(83164),A=i(13712);const L=({asset:e,isMobile:t,mediaShouldBePlaying:i,setCurrentTokenPlayingMedia:a,uniformAspectRatio:o,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c})=>{const{formatEther:p}=(0,j.Gb)(),g=(0,f.cP)((e=>e.bagManuallyClosed)),h=(0,f.cP)((e=>e.addAssetsToBag)),u=(0,f.cP)((e=>e.removeAssetsFromBag)),m=(0,f.cP)((e=>e.itemsInBag)),x=(0,f.cP)((e=>e.bagExpanded)),w=(0,f.cP)((e=>e.setBagExpanded)),y=(0,s.oO)({page:r.yJ.NFT_COLLECTION_PAGE}),{isSelected:b}=(0,A.useMemo)((()=>({isSelected:m.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,m]),C=e.notForSale||S.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),v=e?.rarity?.providers?e.rarity.providers[0]:void 0,_=(0,A.useCallback)((()=>{S.O$.from(e.priceInfo?.ETHPrice??0).gt(0)&&(h([e]),x||t||g||w({bagExpanded:!0}),(0,s._P)(r.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...y}))}),[h,e,x,g,t,w,y]),k=(0,A.useCallback)((()=>{u([e])}),[e,u]),T=(0,A.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,n.jsx)(B.yT,{}):null,primaryInfoRight:e.rarity&&v?(0,n.jsx)(B.SD,{provider:v}):null,secondaryInfo:C?"":`${p({input:e.priceInfo.ETHPrice,type:j.sw.NFTToken})} ETH`,selectedInfo:(0,n.jsx)(M.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(M.cC,{id:"2RtVHm"}),disabledInfo:(0,n.jsx)(M.cC,{id:"i/2ImT"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,p,C,v]);return(0,n.jsx)(F.y,{asset:e,display:T,isSelected:b,isDisabled:Boolean(e.notForSale),selectAsset:_,unselectAsset:k,mediaShouldBePlaying:i,uniformAspectRatio:o,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:a,testId:"nft-collection-asset"})};var H,O=i(42223),D=i(55338),Y=i(26030),W=i(17669),X="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",U="_10b1b4vc",Z="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",V="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",K="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",G="_10b1b4v2",q=i(50413),J=i(2761),Q=i(9170);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(H||(H={}));const ee=(0,J.Ue)()((0,Q.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,i)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:i}})))}})),{name:"useTraitsOpen"}));var te=i(39839),ie=i(71814);const ne=(0,v.default)(m.X2).withConfig({displayName:"MarketplaceSelect__FilterItemWrapper",componentId:"sc-94e770fe-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,re=(0,v.default)(m.X2).withConfig({displayName:"MarketplaceSelect__MarketNameWrapper",componentId:"sc-94e770fe-1"})`
  gap: 10px;
`,ae={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},se=({title:e,element:t,onClick:i})=>(0,n.jsxs)(ne,{onClick:i,children:[(0,n.jsx)(te.Tv.BodyPrimary,{children:e}),(0,n.jsx)(te.Tv.SubHeaderSmall,{children:t})]}),oe=({title:e,value:t,addMarket:i,removeMarket:a,isMarketSelected:o,count:l})=>{const[d,c]=(0,A.useState)(!1),[p,g]=(0,A.useReducer)((e=>!e),!1);(0,A.useEffect)((()=>{c(o)}),[o]);const h=e=>{e.preventDefault(),d?(a(t),c(!1)):(i(t),c(!0)),(0,s._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.MARKETPLACE})},m=(0,n.jsx)(ie.X,{checked:d,hovered:p,onChange:h,children:(0,n.jsx)(u.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),x=(0,n.jsxs)(re,{children:[(0,y.Dp)(e,"16"),e]});return(0,n.jsx)("div",{onMouseEnter:g,onMouseLeave:g,children:(0,n.jsx)(se,{title:x,element:m,onClick:h})},t)},le=({title:e,items:t,onClick:i,isOpen:r})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.n,{className:Z,opacity:r?"1":"0"}),(0,n.jsxs)(u.n,{as:"details",className:(0,P.default)(x.Nf,!r&&G),open:r,borderRadius:r?"0":"12",children:[(0,n.jsxs)(u.n,{as:"summary",className:`${K} ${G}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:i,children:[e,(0,n.jsx)(u.n,{display:"flex",alignItems:"center",children:(0,n.jsx)(u.n,{className:X,style:{transform:`rotate(${r?0:180}deg)`},children:(0,n.jsx)(Y.g8,{className:U})})})]}),(0,n.jsx)(m.sg,{className:V,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),de=()=>{const{addMarket:e,removeMarket:t,markets:i,marketCount:r}=(0,q.PY)((({markets:e,marketCount:t,removeMarket:i,addMarket:n})=>({markets:e,marketCount:t,removeMarket:i,addMarket:n}))),[a,s]=(0,A.useState)(!!i.length),o=ee((e=>e.setTraitsOpen)),l=(0,A.useMemo)((()=>Object.entries(ae).map((([a,s])=>(0,n.jsx)(oe,{title:s,value:a,count:r?.[a]||0,addMarket:e,removeMarket:t,isMarketSelected:i.includes(a)},a)))),[e,r,t,i]);return(0,n.jsx)(le,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),s(!a),o(H.MARKPLACE_INDEX,!a)},isOpen:a})};var ce=i(29304);const pe=(0,v.default)(ce.Z).withConfig({displayName:"FilterSortDropdown__CheckIcon",componentId:"sc-c4c806a4-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,ge=({sortDropDownOptions:e})=>{const[t,i]=(0,A.useState)(!1),r=e=>{e.preventDefault(),i(!t)},a=e.map((e=>(0,n.jsx)(he,{dropDownOption:e,parentOnClick:r},e.displayText)));return(0,n.jsx)(le,{title:"Sort by",items:a,onClick:r,isOpen:t})},he=({dropDownOption:e,parentOnClick:t})=>{const i=(0,f.PY)((e=>e.sortBy)),r=void 0!==e.sortBy&&i===e.sortBy?(0,n.jsx)(pe,{}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)(se,{title:e.displayText,element:r,onClick:i=>{i.preventDefault(),t(i),e.onClick()}})},ue=({dropDownOptions:e,inFilters:t,mini:i,miniPrompt:r,top:a,left:s})=>{const o=(0,f.PY)((e=>e.sortBy)),[l,d]=(0,A.useReducer)((e=>!e),!1),[c,p]=(0,A.useReducer)((e=>!e),!1),[g,h]=(0,A.useState)(o),w=(0,f.Iv)((e=>e.isCollectionStatsLoading)),[y,j]=(0,A.useState)(0);(0,A.useEffect)((()=>{h(o)}),[o]);const b=(0,A.useRef)(null);(0,D.t)(b,(()=>l&&d())),(0,A.useEffect)((()=>j(0)),[e]);const C=(0,A.useMemo)((()=>e[g].reverseOnClick||e[g].reverseIndex),[g,e]),v=w?220:t?"full":i?"min":y||"300px";return(0,n.jsxs)(u.n,{ref:b,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:v},children:[(0,n.jsx)(u.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:i?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":i?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:w?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,P.default)(l&&!i&&"_12q7kth0"),children:!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&C&&(0,n.jsxs)(m.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick)e[g].reverseOnClick?.(),p();else{const t=e[g].reverseIndex??1;e[t-1].onClick(),h(t-1)}},children:[e[g].reverseOnClick&&(c?(0,n.jsx)(Y.iB,{}):(0,n.jsx)(Y.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,n.jsx)(Y.iB,{}):(0,n.jsx)(Y.L7,{}))]}),(0,n.jsx)(u.n,{marginLeft:C?"4":"0",marginRight:i?"2":"0",color:"neutral1",className:x.km,children:i?r:l?"Sort by":e[g].displayText})]}),(0,n.jsx)(Y.g8,{secondaryColor:i?W.Z4.colors.neutral1:void 0,secondaryWidth:i?"20":void 0,secondaryHeight:i?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,n.jsx)(u.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:i?void 0:"0",borderTopRightRadius:i?void 0:"0",overflowY:"hidden",transition:"250",display:l||!y?"block":"none",visibility:y?"visible":"hidden",marginTop:i?"12":"0",className:(0,P.default)(!i&&"_12q7kth1"),style:{top:a?`${a}px`:"inherit",left:t?"16px":s?`${s}px`:"inherit"},children:y?l&&e.map(((t,r)=>(0,n.jsx)(me,{option:t,index:r,mini:i,onClick:()=>{e[r].onClick(),h(r),d(),c&&p()}},r))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,n.jsx)(xe,{option:e,index:t,setMaxWidth:j},t)))})]})},me=({option:e,index:t,onClick:i,mini:r})=>(0,n.jsx)(u.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:r?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:i,cursor:"pointer",children:(0,n.jsx)(u.n,{marginLeft:"8",className:x.km,children:e.displayText})},t),xe=({option:e,index:t,setMaxWidth:i})=>{const r=(0,A.useRef)(null);return(0,A.useLayoutEffect)((()=>{r&&r.current&&i(Math.ceil(r.current.getBoundingClientRect().width)+52)})),(0,n.jsx)(u.n,{position:"absolute",ref:r,children:(0,n.jsx)(me,{option:e,index:t})},t)};var fe=i(70453),we=i(37506);const ye=(0,J.Ue)()((0,Q.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var je=i(1004);const be="undefined"!==typeof window;const Ce=()=>{const e=!!be&&window.innerWidth<W.AV.sm?"nft-anchor-mobile":"nft-anchor";window.document.getElementById(e)?.scrollIntoView({behavior:"smooth"})};var ve=i(37515);const _e=e=>{const t={...e};for(const n in t){const e=t[n],i=f.initialCollectionFilterState[n];JSON.stringify(e)===JSON.stringify(i)&&delete t[n]}t.all!==f.initialCollectionFilterState.buyNow&&delete t.all;const i=f.i9[f.initialCollectionFilterState.sortBy];return t.sort===i&&delete t.sort,t},ke=(e,t)=>{const i={...e};["traits","markets"].forEach((e=>{i[e]||(i[e]=[]),i[e]&&"string"===typeof i[e]&&(i[e]=[i[e]])}));try{const{buyNow:e,search:n}=f.initialCollectionFilterState;if(Object.entries(f.i9).forEach((([e,t])=>{t===i.sort&&(i.sortBy=Number(e))})),i.buyNow=!(void 0===i.all?!e:i.all),i.search=void 0===i.search?n:String(i.search),2===i.traits.length){const[e,t]=i.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(i.traits=[`${e},${t}`])}i.traits=i.traits.map((e=>{const i=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[n,r]=i.split(","),a=t.traits&&t.traits[n].find((e=>e.trait_value===r));return a??{trait_type:n,trait_value:r,trait_count:0}}))}catch(n){i.traits=[]}return i};var Te=i(46642),Ne=i(80657),Ie=i(35837),Se=i(21849),ze=(i(43704),i(263));const Pe=v.default.div.withConfig({displayName:"Sweep__SweepContainer",componentId:"sc-3f327a09-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,$e=(0,v.default)(ze.Z).withConfig({displayName:"Sweep__StyledSlider",componentId:"sc-3f327a09-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ee=v.default.div.withConfig({displayName:"Sweep__SweepLeftmostContainer",componentId:"sc-3f327a09-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Re=v.default.div.withConfig({displayName:"Sweep__SweepRightmostContainer",componentId:"sc-3f327a09-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Me=v.default.div.withConfig({displayName:"Sweep__SweepHeaderContainer",componentId:"sc-3f327a09-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Fe=v.default.div.withConfig({displayName:"Sweep__SweepSubContainer",componentId:"sc-3f327a09-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Be=v.default.input.withConfig({displayName:"Sweep__InputContainer",componentId:"sc-3f327a09-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Ae=v.default.div.withConfig({displayName:"Sweep__ToggleContainer",componentId:"sc-3f327a09-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,Le=v.default.div.withConfig({displayName:"Sweep__ToggleSwitch",componentId:"sc-3f327a09-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,He=v.default.div.withConfig({displayName:"Sweep__NftDisplayContainer",componentId:"sc-3f327a09-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,Oe=v.default.div.withConfig({displayName:"Sweep__NftHolder",componentId:"sc-3f327a09-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,De=RegExp("^(0|[1-9][0-9]*)$"),Ye=RegExp("^\\d*\\.?\\d{0,2}$"),We=({nfts:e})=>(0,n.jsx)(He,{children:[...Array(3)].map(((t,i)=>(0,n.jsx)(Oe,{index:i,src:e.length-1>=i?e[e.length-1-i].smallImageUrl:void 0},i)))}),Xe=({contractAddress:e,minPrice:t,maxPrice:i})=>{const r=(0,v.useTheme)(),{formatEther:a}=(0,j.Gb)(),[s,o]=(0,A.useReducer)((e=>!e),!0),[l,d]=(0,A.useState)(""),c=(0,f.cP)((e=>e.addAssetsToBag)),p=(0,f.cP)((e=>e.removeAssetsFromBag)),g=(0,f.cP)((e=>e.itemsInBag)),h=(0,f.cP)((e=>e.lockSweepItems)),u=(0,f.cP)((e=>e.setBagExpanded)),m=(0,f.PY)((e=>e.traits)),x=(0,f.PY)((e=>e.markets)),w=Ze(e,"others",t,i),b=Ze(e,je.Fz.Sudoswap,t,i),C=Ze(e,je.Fz.NFTX,t,i),_=Ze(e,je.Fz.NFT20,t,i),{data:k}=(0,E.he)(w),{data:T}=(0,E.he)(b),{data:N}=(0,E.he)(C),{data:I}=(0,E.he)(_),{sortedAssets:P,sortedAssetsTotalEth:$}=(0,A.useMemo)((()=>{if(!k&&!T&&!N&&!I)return{sortedAssets:void 0,sortedAssetsTotalEth:S.O$.from(0)};let e=0,t=0,i=[];T&&(i=[...i,...T]),N&&(i=[...i,...N]),I&&(i=[...i,...I]);const n=i.filter((e=>e.marketplace===je.Fz.Sudoswap&&!e.susFlag));i.forEach((i=>{if(!i.susFlag)if(i.marketplace===je.Fz.Sudoswap){const e=(0,y.Pu)(i,n.filter((e=>(0,y.zA)(i,e))).findIndex((e=>e.tokenId===i.tokenId)));i.priceInfo.ETHPrice=e??"0"}else{const n=i.marketplace===je.Fz.NFTX,r=(0,y.Pu)(i,n?e:t);S.O$.from(r).gt(0)&&(n?e++:t++),i.priceInfo.ETHPrice=r}})),i=k?k.concat(i):i,i.sort(((e,t)=>S.O$.from(e.priceInfo.ETHPrice).gt(S.O$.from(t.priceInfo.ETHPrice))?1:-1));let r=i.filter((e=>S.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return r=r.slice(0,Math.max(k?.length??0,T?.length??0,N?.length??0,I?.length??0)),{sortedAssets:r,sortedAssetsTotalEth:r.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0))}}),[k,T,N,I]),{sweepItemsInBag:R,sweepEthPrice:F}=(0,A.useMemo)((()=>{const t=g.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),i=t.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:i}}),[g,e]);(0,A.useEffect)((()=>{0===R.length&&d("")}),[R]),(0,A.useEffect)((()=>{h(e)}),[e,m,x,t,i,h]);const B=e=>{if(P)if(s)0===R.length&&e>0&&u({bagExpanded:!0}),R.length<e?c(P.slice(R.length,e),!0):p(R.slice(e,R.length),!0),d(e<1?"":e.toString());else{const t=(0,z.parseEther)(e.toString());if(F.lte(t)){let e=R.length,i=F;const n=[];for(;e<P.length&&i.add(S.O$.from(P[e].priceInfo.ETHPrice)).lte(t);)n.push(P[e]),i=i.add(S.O$.from(P[e].priceInfo.ETHPrice)),e++;n.length>0&&(0===R.length&&u({bagExpanded:!0}),c(n,!0))}else{let e=R.length-1,i=F;const n=[];for(;e>=0&&i.gt(t);)n.push(R[e]),i=i.sub(S.O$.from(R[e].priceInfo.ETHPrice)),e--;n.length>0&&p(n,!0)}d(0===e?"":e.toFixed(2))}};return(0,n.jsxs)(Pe,{"data-testid":"nft-sweep-slider",children:[(0,n.jsxs)(Ee,{children:[(0,n.jsx)(Me,{children:(0,n.jsx)(te.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,n.jsx)(M.cC,{id:"ZC4hNh"})})}),(0,n.jsxs)(Fe,{children:[(0,n.jsx)($e,{defaultValue:0,min:0,max:s?P?.length??0:parseFloat((0,z.formatEther)($).toString()),value:s?R.length:parseFloat((0,z.formatEther)(F.toString())),step:s?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${r.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${r.surface3}`},onChange:e=>{"number"===typeof e&&P&&(s?(Math.floor(e)!==Math.floor(""!==l?parseFloat(l):0)&&B(Math.floor(e)),d(e<1?"":e.toString())):(B(e),d(0===e?"":e.toFixed(2))))}}),(0,n.jsx)(Be,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:s&&""!==l?Math.floor(parseFloat(l)):l,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(B(0),d("")):(s&&De.test(t)||!s&&Ye.test(t))&&(B(parseFloat(t)),d(t))}}),(0,n.jsxs)(Ae,{onClick:()=>{d(""),p(R),o()},children:[(0,n.jsx)(Le,{active:s,children:"Items"}),(0,n.jsx)(Le,{active:!s,children:"ETH"})]})]})]}),(0,n.jsxs)(Re,{children:[(0,n.jsx)(te.Tv.SubHeader,{"font-size":"14px",children:`${a({input:F.toString(),type:j.sw.NFTToken})} ETH`}),(0,n.jsx)(We,{nfts:R})]})]})},Ue=[je.Fz.Opensea,je.Fz.X2Y2,je.Fz.LooksRare];function Ze(e,t,i,n){const r=(0,f.PY)((e=>e.traits)),a=(0,f.PY)((e=>e.markets)),s=!!a.length;return(0,A.useMemo)((()=>{if(s){if("others"===t){const t=a.filter((e=>!(0,je.g7)(e)));return t.length>0?{contractAddress:e,traits:r,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!a.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case je.Fz.Sudoswap:case je.Fz.NFTX:case je.Fz.NFT20:return{contractAddress:e,traits:r,markets:[t],price:{low:i,high:n,symbol:"ETH"}};case"others":return{contractAddress:e,traits:r,markets:Ue,price:{low:i,high:n,symbol:"ETH"}}}}),[e,s,t,a,n,i,r])}const Ve=v.default.div.withConfig({displayName:"TraitChip__TraitChipWrap",componentId:"sc-29602959-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ke=v.default.div.withConfig({displayName:"TraitChip__CrossIconWrap",componentId:"sc-29602959-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,Ge=({onClick:e,value:t})=>(0,n.jsxs)(Ve,{children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)(Ke,{onClick:e,children:(0,n.jsx)(Y.aM,{cursor:"pointer"})})]}),qe=new Map,Je=v.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Qe=v.default.div.withConfig({displayName:"CollectionNfts__ActionsContainer",componentId:"sc-c6569a9f-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Je}
`,et=v.default.div.withConfig({displayName:"CollectionNfts__ActionsSubContainer",componentId:"sc-c6569a9f-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,tt=v.default.div.withConfig({displayName:"CollectionNfts__SortDropdownContainer",componentId:"sc-c6569a9f-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,it=v.default.div.withConfig({displayName:"CollectionNfts__EmptyCollectionWrapper",componentId:"sc-c6569a9f-3"})`
  display: block;
  text-align: center;
`,nt=v.default.span.withConfig({displayName:"CollectionNfts__ViewFullCollection",componentId:"sc-c6569a9f-4"})`
  ${l.c}
`,rt=v.default.div.withConfig({displayName:"CollectionNfts__InfiniteScrollWrapper",componentId:"sc-c6569a9f-5"})`
  ${Je}
`,at=v.default.div.withConfig({displayName:"CollectionNfts__SweepButton",componentId:"sc-c6569a9f-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:i})=>e&&!t?i.deprecated_accentTextLightPrimary:i.neutral1};
  background: ${({theme:e,toggled:t,disabled:i})=>!i&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,st=(0,v.default)(te.Tv.BodyPrimary).withConfig({displayName:"CollectionNfts__SweepText",componentId:"sc-c6569a9f-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,ot=(0,v.default)(m.X2).withConfig({displayName:"CollectionNfts__MarketNameWrapper",componentId:"sc-c6569a9f-8"})`
  gap: 8px;
`,lt=({height:e})=>(0,n.jsx)(u.n,{width:"full",className:O.P,children:(0,n.jsx)(Ie.p,{height:e})}),dt=()=>(0,n.jsx)(rt,{children:(0,n.jsxs)(m.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,n.jsxs)(m.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,n.jsx)(u.n,{className:fe.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,n.jsx)(u.n,{className:fe.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,n.jsx)(u.n,{className:fe.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,n.jsx)(lt,{})]})}),ct=(e,t)=>{const i=[{displayText:"Price: Low to High",onClick:()=>e(f.hn.LowToHigh),reverseIndex:2,sortBy:f.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(f.hn.HighToLow),reverseIndex:1,sortBy:f.hn.HighToLow}];return t?i.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(f.hn.RareToCommon),reverseIndex:4,sortBy:f.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(f.hn.CommonToRare),reverseIndex:3,sortBy:f.hn.CommonToRare}]):i},pt=({contractAddress:e,collectionStats:t,rarityVerified:i})=>{const{chainId:o}=(0,a.useWeb3React)(),l=(0,f.PY)((e=>e.traits)),d=(0,f.PY)((e=>e.minPrice)),c=(0,f.PY)((e=>e.maxPrice)),p=(0,f.PY)((e=>e.markets)),h=(0,f.PY)((e=>e.sortBy)),w=(0,f.PY)((e=>e.search)),j=(0,f.PY)((e=>e.setMarketCount)),b=(0,f.PY)((e=>e.setSortBy)),C=(0,f.PY)((e=>e.buyNow)),v=ye((e=>e.setPriceRangeLow)),_=ye((e=>e.priceRangeLow)),k=ye((e=>e.priceRangeHigh)),T=ye((e=>e.setPriceRangeHigh)),N=ye((e=>e.setPrevMinMax)),I=(0,we.I)((e=>e.setIsCollectionNftsLoading)),M=(0,f.PY)((e=>e.removeTrait)),F=(0,f.PY)((e=>e.removeMarket)),B=(0,f.PY)((e=>e.reset)),H=(0,f.PY)((e=>e.setMinPrice)),D=(0,f.PY)((e=>e.setMaxPrice)),W=(0,f.PY)((e=>e.setHasRarity)),X=(0,f.cP)((e=>e.toggleBag)),U=(0,f.cP)((e=>e.bagExpanded)),Z=(0,f.cP)((e=>e.itemsInBag)),V=(0,R.Z)(d,500),K=(0,R.Z)(c,500),G=(0,R.Z)(w,500),[q,J]=(0,A.useState)(je.Yp.unset),[Q,ee]=(0,A.useState)(),[te,ie]=(0,A.useState)(!1),ne={address:e,orderBy:f.AZ[h].field,asc:f.AZ[h].asc,filter:{listed:C,marketplaces:p.length>0?p.map((e=>e.toUpperCase())):void 0,maxPrice:K?(0,z.parseEther)(K.toString()).toString():void 0,minPrice:V?(0,z.parseEther)(V.toString()).toString():void 0,tokenSearchQuery:G,traits:l.length>0?l.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:E.iQ},{data:re,loading:se,hasNext:oe,loadMore:le}=(0,E.gP)(ne),de=(0,A.useCallback)((e=>{const t=Z.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===je.Fz.Sudoswap){const i=Z.filter((t=>(0,y.zA)(e,t.asset)));return t?i.findIndex((t=>t.asset.tokenId===e.tokenId)):i.length}return t?Z.filter((t=>(0,y.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):Z.filter((t=>(0,y.H8)(e,t.asset))).length}),[Z]),ce=(0,A.useCallback)((e=>(0,y.Pu)(e,de(e))),[de]),pe=(0,A.useMemo)((()=>{if(!re||!re.some((e=>e.marketplace&&(0,je.g7)(e.marketplace))))return re;const e=[...re];return e.forEach((e=>e.marketplace&&(0,je.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ce(e)??"0"))),h!==f.hn.HighToLow&&h!==f.hn.LowToHigh||e.sort(((e,t)=>{const i=S.O$.from(e.priceInfo?.ETHPrice??0),n=S.O$.from(t.priceInfo?.ETHPrice??0);if(i.gt(0)&&n.lte(0))return-1;if(n.gt(0)&&i.lte(0))return 1;const r=i.sub(n);return r.gt(0)?h===f.hn.LowToHigh?1:-1:r.lt(0)?h===f.hn.LowToHigh?-1:1:0})),e}),[re,h,ce]),[ge,he]=(0,A.useState)(),[me,xe]=(0,f.wx)(),fe=(0,A.useRef)(null),be=(0,f.dD)(),ze=(0,g.e)();(0,A.useEffect)((()=>{I(se)}),[se,I]);const Pe=(0,A.useMemo)((()=>{const e=(0,y.oY)(qe,t?.address,pe)??!1;return W(e),e}),[t.address,pe,W]),$e=(0,A.useMemo)((()=>ct(b,Pe)),[Pe,b]);(0,A.useEffect)((()=>(ie(!1),()=>{f.PY.setState(f.initialCollectionFilterState)})),[e]);const Ee=(0,A.useMemo)((()=>pe?pe.map((e=>(0,n.jsx)(L,{asset:e,isMobile:be,mediaShouldBePlaying:e.tokenId===ge,setCurrentTokenPlayingMedia:he,rarityVerified:i,uniformAspectRatio:q,setUniformAspectRatio:J,renderedHeight:Q,setRenderedHeight:ee},e.address+e.tokenId))):null),[pe,be,ge,i,q,Q]),Re=pe&&pe.length>0,Me=Re&&pe[0]&&pe[0]?.tokenType===$.hg.Erc1155,Fe=(0,A.useMemo)((()=>V&&K?`Price: ${V} - ${K} ETH`:V?`Min. Price: ${V} ETH`:K?`Max Price: ${K} ETH`:void 0),[V,K]);(0,A.useEffect)((()=>{const e={};t?.marketplaceCount?.forEach((({marketplace:t,count:i})=>{e[t]=i})),j(e),fe.current=f.PY.getState()}),[t?.marketplaceCount,j]);const Be=(0,Ne.TH)();(0,A.useEffect)((()=>{if(t?.traits){const e=((e,t)=>{if(!e.search)return;const i=ve.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return ke(i,t)})(Be,t);requestAnimationFrame((()=>{e&&f.PY.setState(e)})),f.PY.subscribe((e=>{JSON.stringify(fe.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((i=>{switch(i){case"traits":{const i=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=i;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=f.i9[e.sortBy];break;default:t[i]=e[i]}}));const i=_e(t),n=window.location.href.split("?")[0],r=ve.stringify(i,{arrayFormat:"comma"});window.history.replaceState({},"",`${n}${r&&`?${r}`}`)})(e),fe.current=e)}))}}),[Be]),(0,A.useEffect)((()=>{J(je.Yp.unset),ee(void 0)}),[e]),(0,A.useEffect)((()=>{if(t&&t.stats?.floor_price){const e=t.stats?.floor_price,i=10*t.stats?.floor_price;""===_&&v(e?.toFixed(2)),""===k&&T(i.toFixed(2))}}),[t,_,k,T,v]);const Ae=(0,A.useCallback)((()=>{Me||(te||(Ce(),U||be||X()),ie(!te))}),[U,Me,be,te,X]),Le=(0,A.useCallback)((()=>{B(),N([0,100]),Ce()}),[B,N]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,n.jsxs)(Qe,{children:[(0,n.jsxs)(et,{children:[(0,n.jsx)(s.M8,{events:[r.TM.onClick],element:r.xo.NFT_FILTER_BUTTON,name:r.Yz.NFT_FILTER_OPENED,shouldLogImpression:!me,properties:{collection_address:e,chain_id:o},children:(0,n.jsx)(Bt.L,{isMobile:be,isFiltersExpanded:me,collectionCount:pe?.[0]?.totalCount??0,onClick:()=>{U&&!ze.xl&&X(),xe(!me)}})}),(0,n.jsx)(tt,{isFiltersExpanded:me,children:(0,n.jsx)(ue,{dropDownOptions:$e})}),(0,n.jsx)(gt,{})]}),!Me&&(0,n.jsxs)(at,{toggled:te,disabled:Me,className:x.km,onClick:Ae,"data-testid":"nft-sweep-button",children:[(0,n.jsx)(Y.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,n.jsx)(st,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,n.jsxs)(rt,{children:[te&&(0,n.jsx)(Xe,{contractAddress:e,minPrice:V,maxPrice:K}),(0,n.jsxs)(m.X2,{paddingTop:p.length||l.length||Fe?"12":"0",gap:"8",flexWrap:"wrap",children:[p.map((e=>(0,n.jsx)(Ge,{value:(0,n.jsxs)(ot,{children:[(0,y.Dp)(e,"16"),ae[e]]}),onClick:()=>{Ce(),F(e)}},e))),l.map((e=>(0,n.jsx)(Ge,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,y._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{Ce(),M(e)}},e.trait_value))),Fe&&(0,n.jsx)(Ge,{value:Fe,onClick:()=>{Ce(),H(""),D(""),N([0,100])}}),Boolean(l.length||p.length||Fe)&&(0,n.jsx)(Se.v,{onClick:Le,children:"Clear All"})]})]})]}),(0,n.jsx)(rt,{children:se?(0,n.jsx)(lt,{height:Q}):(0,n.jsx)(Te.Z,{next:le,hasMore:oe??!1,loader:Boolean(oe&&Re)&&(0,n.jsx)(Ie.p,{}),dataLength:pe?.length??0,style:{overflow:"unset"},className:Re?O.P:void 0,children:Re?Ee:(0,n.jsx)(m.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,n.jsxs)(it,{children:[(0,n.jsx)("p",{className:x.Es,children:"No NFTS found"}),(0,n.jsx)(u.n,{onClick:B,type:"button",className:(0,P.default)(x.Km,x.km),color:"accent1",cursor:"pointer",children:(0,n.jsx)(nt,{children:"View full collection"})})]})})})})]})};const gt=()=>{const e=(0,q.PY)((e=>e.setSearch)),t=(0,q.PY)((e=>e.search)),i=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(u.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:i?"":"Search by name",className:(0,P.default)(i&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var ht=i(86682);const ut=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var mt=i(51871),xt=i.n(mt),ft="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",wt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",yt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const jt=v.default.div.withConfig({displayName:"CollectionStats__PercentChange",componentId:"sc-12f6ab1e-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,bt=v.default.div.withConfig({displayName:"CollectionStats__CollectionNameText",componentId:"sc-12f6ab1e-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,Ct=v.default.div.withConfig({displayName:"CollectionStats__CollectionNameTextLoading",componentId:"sc-12f6ab1e-2"})`
  ${fe.S}
  height: 32px;
  width: 236px;
`,vt=v.default.div.withConfig({displayName:"CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-12f6ab1e-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,_t=({children:e,href:t})=>(0,n.jsx)(u.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),kt=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vt,{onClick:i,children:t?(0,n.jsx)(Y.DX,{width:"28",height:"28",fill:W.Z4.colors.neutral2}):(0,n.jsx)(Y.ws,{width:"28",height:"20",fill:W.Z4.colors.neutral2})}),t&&(0,n.jsxs)(m.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,n.jsx)(_t,{href:e.discordUrl,children:(0,n.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(Y.D7,{width:28,height:28,color:W.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,n.jsx)(_t,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(u.n,{margin:"auto",paddingTop:"6",children:(0,n.jsx)(Y.Zm,{fill:W.Z4.colors.neutral2,color:W.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,n.jsx)(_t,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(u.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,n.jsx)(Y.yu,{fill:W.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,n.jsx)(_t,{href:e.externalUrl,children:(0,n.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(Y.O1,{fill:W.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),Tt=({children:e,href:t})=>(0,n.jsx)(m.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),Nt=({collectionStats:e,name:t,isVerified:i,isMobile:r,collectionSocialsIsOpen:a,toggleCollectionSocials:s})=>{const o=(0,we.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(m.X2,{justifyContent:"space-between",children:[(0,n.jsxs)(m.X2,{minWidth:"0",children:[o?(0,n.jsx)(Ct,{}):(0,n.jsx)(bt,{isVerified:i,className:r?x.td:x.Es,children:t}),i&&(0,n.jsx)(Y.SA,{style:{width:"32px",height:"32px"}}),(0,n.jsxs)(m.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,n.jsx)(Tt,{href:e.discordUrl??"",children:(0,n.jsx)(Y.D7,{fill:W.Z4.colors.neutral2,color:W.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,n.jsx)(Tt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(Y.Zm,{fill:W.Z4.colors.neutral2,color:W.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,n.jsx)(Tt,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(Y.yu,{fill:W.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,n.jsx)(Tt,{href:e.externalUrl??"",children:(0,n.jsx)(Y.O1,{fill:W.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),r&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,n.jsx)(kt,{collectionStats:e,collectionSocialsIsOpen:a,toggleCollectionSocials:s})]})},It=v.default.div.withConfig({displayName:"CollectionStats__CollectionDescriptionText",componentId:"sc-12f6ab1e-4"})`
  vertical-align: top;
  text-overflow: ellipsis;

  ${({readMore:e})=>e?v.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:v.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,St=v.default.span.withConfig({displayName:"CollectionStats__ReadMore",componentId:"sc-12f6ab1e-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,zt=()=>(0,n.jsx)(u.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),Pt=({description:e})=>{const[t,i]=(0,A.useState)(!1),[r,a]=(0,A.useReducer)((e=>!e),!1),s=(0,A.useRef)(null),o=(0,A.useRef)(null),l=(0,we.I)((e=>e.isCollectionStatsLoading)),d=(0,f.dD)();return(0,A.useEffect)((()=>{s&&o&&s.current&&o.current&&(o.current.getBoundingClientRect().width>=s.current?.getBoundingClientRect().width-112||o.current.getBoundingClientRect().width>=590)?i(!0):i(!1)}),[o,s,l,e]),l?(0,n.jsx)(zt,{}):(0,n.jsxs)(u.n,{ref:s,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,n.jsx)(It,{readMore:r,ref:o,className:d?x.Km:x.d1,children:(0,n.jsx)(xt(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,n.jsxs)(St,{className:d?x.Km:x.d1,onClick:a,children:["show ",r?"less":"more"]})]})},$t=({children:e,label:t,shouldHide:i})=>(0,n.jsxs)(u.n,{display:i?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,n.jsx)(te.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,n.jsx)(u.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Et=e=>new Array(e?3:5).fill(null).map(((t,i)=>(0,n.jsxs)(u.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,n.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,n.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${i}`))),Rt=({stats:e,isMobile:t,...i})=>{const{formatNumberOrString:r,formatDelta:a}=(0,j.Gb)(),s=e?.stats?.total_supply?ut((e.stats.num_owners??0)/e.stats.total_supply*100):0,o=e.stats?r({input:e.stats.total_supply??0,type:j.sw.NFTCollectionStats}):0,l=e?.stats?.total_supply?ut((e.stats.total_listings??0)/e.stats.total_supply*100):0,d=(0,we.I)((e=>e.isCollectionStatsLoading)),c=r({input:Number(e.stats?.total_volume)??0,type:j.sw.NFTCollectionStats}),p=r({input:e.stats?.floor_price??0,type:j.sw.NFTTokenFloorPrice}),h=a(Math.round(Math.abs(e?.stats?.one_day_floor_change??0))),u=(0,f.cP)((e=>e.bagExpanded)),x=(0,g.e)(),w=t||!x.lg&&u;return(0,n.jsx)(m.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...i,children:d?Et(t??!1):(0,n.jsxs)(n.Fragment,{children:[e.stats?.floor_price?(0,n.jsxs)($t,{label:"Global floor",shouldHide:!1,children:[p," ETH"]}):null,void 0!==e.stats?.one_day_floor_change?(0,n.jsx)($t,{label:"Floor 24H",shouldHide:!1,children:(0,n.jsxs)(jt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,n.jsx)(ht.Kx,{delta:e?.stats?.one_day_floor_change}),h]})}):null,e.stats?.total_volume?(0,n.jsxs)($t,{label:"Total volume",shouldHide:!1,children:[c," ETH"]}):null,o?(0,n.jsx)($t,{label:"Items",shouldHide:t??!1,children:o}):null,s&&e.standard!==je.iv.ERC1155?(0,n.jsxs)($t,{label:"Unique owners",shouldHide:w??!1,children:[s,"%"]}):null,e.stats?.total_listings&&e.standard!==je.iv.ERC1155?(0,n.jsxs)($t,{label:"Listed",shouldHide:w??!1,children:[l,"%"]}):null]})})},Mt=({isMobile:e})=>(0,n.jsxs)(m.sg,{position:"relative",width:"full",children:[(0,n.jsx)(u.n,{className:wt}),(0,n.jsx)(u.n,{className:ft}),(0,n.jsxs)(u.n,{className:yt,children:[(0,n.jsx)(u.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt,{}),(0,n.jsx)(m.X2,{gap:"60",marginTop:"20",children:Et(!1)})]})]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt,{}),(0,n.jsx)(m.X2,{gap:"20",marginTop:"20",children:Et(!0)})]})]}),Ft=({stats:e,isMobile:t})=>{const[i,r]=(0,A.useReducer)((e=>!e),!1),a=(0,we.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(u.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?i?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[a&&(0,n.jsx)(u.n,{as:"div",borderRadius:"round",position:"absolute",className:wt}),(0,n.jsx)(u.n,{as:a?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:a?ft:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,n.jsxs)(u.n,{className:yt,children:[(0,n.jsx)(Nt,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:i,toggleCollectionSocials:r}),(e.description||a)&&!t&&(0,n.jsx)(Pt,{description:e.description??""}),(0,n.jsx)(Rt,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||a)&&t&&(0,n.jsx)(Pt,{description:e.description??""}),(0,n.jsx)("div",{id:"nft-anchor-mobile"}),(0,n.jsx)(Rt,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var Bt=i(71170),At=i(74090),Lt=i(97297),Ht="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Ot=v.default.div.withConfig({displayName:"TraitsHeader__ChildreMobileWrapper",componentId:"sc-ead2a0ec-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Dt=e=>{const{children:t,index:i,title:r}=e,[a,s]=(0,A.useState)(!1),o=ee((e=>e.traitsOpen)),l=ee((e=>e.setTraitsOpen)),d=(0,f.dD)(),c=void 0!==i&&o[i-1],p=i!==H.TRAIT_START_INDEX;return(0,A.useEffect)((()=>{void 0!==i&&l(i,a)}),[a,i,l]),(0,n.jsxs)(n.Fragment,{children:[p&&(0,n.jsx)(u.n,{className:(0,P.default)(x.Nf,!a&&G,Z),opacity:!c&&a&&0!==i?"1":"0",marginTop:c?"0":"8"}),(0,n.jsxs)(u.n,{as:"details",className:(0,P.default)(x.Nf,!a&&G),open:a,children:[(0,n.jsxs)(u.n,{as:"summary",className:`${K} ${G}`,onClick:e=>{e.preventDefault(),s(!a)},children:[r,(0,n.jsxs)(u.n,{display:"flex",alignItems:"center",children:[(0,n.jsx)(u.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,n.jsx)(u.n,{className:X,style:{transform:`rotate(${a?0:180}deg)`},children:(0,n.jsx)(Y.g8,{className:U})})]})]}),(0,n.jsx)(Ot,{isMobile:d,children:t})]})]})},Yt=(0,v.default)(ze.Z).withConfig({displayName:"PriceRange__StyledSlider",componentId:"sc-7655689-0"})`
  cursor: pointer;
`,Wt=()=>{const[e,t]=(0,A.useState)(""),i=(0,q.PY)((e=>e.setMinPrice)),a=(0,q.PY)((e=>e.setMaxPrice)),o=(0,q.PY)((e=>e.minPrice)),l=(0,q.PY)((e=>e.maxPrice)),d=ye((e=>e.priceRangeLow)),c=ye((e=>e.priceRangeHigh)),p=ye((e=>e.setPriceRangeLow)),g=ye((e=>e.setPriceRangeHigh)),h=ye((e=>e.prevMinMax)),f=ye((e=>e.setPrevMinMax)),w=(0,v.useTheme)(),y=(0,Ne.TH)();(0,A.useEffect)((()=>{i(""),a(""),p(""),g("")}),[y.pathname,i,a,p,g]);const j=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},b=i=>{i.currentTarget.placeholder=e,t(""),(o||l)&&(0,s._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.PRICE_RANGE})};return(0,n.jsxs)(Dt,{title:"Price range",index:H.PRICE_RANGE_INDEX,children:[(0,n.jsxs)(m.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,n.jsx)(m.X2,{position:"relative",children:(0,n.jsx)(At.A,{style:{width:"126px"},className:Ht,placeholder:d,onChange:e=>{const[,t]=h;if(e.currentTarget.value){const i=parseInt(e.currentTarget.value)-parseInt(d),n=Math.floor(i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)>=parseInt(l)?f([t,t]):f([n,t])}else f([0,t]);i(e.currentTarget.value.toString()),Ce()},onFocus:j,value:o,onBlur:b})}),(0,n.jsx)(u.n,{className:x.d1,children:"to"}),(0,n.jsx)(m.X2,{position:"relative",children:(0,n.jsx)(At.A,{style:{width:"126px"},className:Ht,placeholder:c,value:l,onChange:e=>{const[t]=h;if(e.currentTarget.value){const i=parseInt(c)-parseInt(e.currentTarget.value),n=Math.floor(100-i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)<=parseInt(o)?f([t,t]):f([t,n])}else f([t,100]);a(e.currentTarget.value),Ce()},onFocus:j,onBlur:b})})]}),(0,n.jsx)(m.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,n.jsx)(Yt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:h,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Lt.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,n]=e,r=parseFloat(c.replace(/,/g,"")),s=parseFloat(d.replace(/,/g,"")),o=r-s,l=r-(100-n)/100*o;i((t/100*o+s).toFixed(2).toString()),a(l.toFixed(2).toString()),0===t&&i(""),100===n&&a(""),f(e)}})})]})};var Xt=i(36633),Ut=i(36450),Zt=i(94231),Vt=i(90739);const Kt=({trait:e,addTrait:t,removeTrait:i,isTraitSelected:a,style:o})=>{const[l,d]=(0,A.useState)(!1),[c,p]=(0,A.useState)(!1),g=()=>p(!c),h=(0,q.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:f,trait_value:w,trait_type:y}=(0,q.PY)((e=>e.showFullTraitName));(0,A.useEffect)((()=>{d(a)}),[a]);const j=n=>{n.preventDefault(),Ce(),l?(i(e),d(!1)):(t(e),d(!0)),(0,s._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.TRAIT})},b=f&&y===e.trait_type&&w===e.trait_value;return(0,n.jsxs)(m.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${x.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...o},maxHeight:"44",onMouseEnter:g,onMouseLeave:g,onClick:j,children:[(0,n.jsx)(u.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:b?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&h({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>h({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Ut._)(Number(e.trait_value))}`:e.trait_value}),(0,n.jsx)(ie.X,{checked:l,hovered:c,onChange:j,children:(0,n.jsx)(u.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!b&&e.trait_count})})]},e.trait_value)},Gt=({traits:e,type:t,index:i})=>{const r=(0,q.PY)((e=>e.addTrait)),a=(0,q.PY)((e=>e.removeTrait)),s=(0,q.PY)((e=>e.traits)),[o,l]=(0,A.useState)(""),d=(0,R.Z)(o,300),c=(0,A.useMemo)((()=>e.filter((e=>e.trait_value?.toString().toLowerCase().includes(d.toLowerCase())))),[d,e]),p=(0,A.useCallback)((function({data:e,index:t,style:i}){const o=e[t],l=s.find((({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value)));return(0,n.jsx)(Kt,{style:i,isTraitSelected:!!l,trait:o,addTrait:r,removeTrait:a})}),[s,r,a]),g=(0,A.useCallback)(((e,t)=>{const i=t[e];return`${i.trait_type}_${i.trait_value}_${e}`}),[]);return e.length?(0,n.jsxs)(Dt,{index:i,numTraits:e.length,title:t,children:[(0,n.jsx)(At.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,n.jsx)(m.sg,{className:V,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,n.jsx)(Zt.Z,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(Vt.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:i})=>(0,n.jsx)(p,{style:t,data:i,index:e},g(e,i))})})})]}):null},qt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:i}=(0,f.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),r=(0,f.PY)((e=>e.setSortBy)),a=(0,f.PY)((e=>e.hasRarity)),[s,o]=(0,A.useReducer)((e=>!e),!1),l=()=>{i(!t)},d=(0,A.useMemo)((()=>ct(r,a??!1)),[a,r]);return(0,n.jsxs)(u.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,n.jsx)(m.X2,{width:"full",justifyContent:"space-between"}),(0,n.jsxs)(m.sg,{marginTop:"8",children:[(0,n.jsxs)(m.X2,{justifyContent:"space-between",className:`${K} ${G}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:o,onMouseLeave:o,children:[(0,n.jsx)(u.n,{"data-testid":"nft-collection-filter-buy-now",className:x.v4,children:"Buy now"}),(0,n.jsx)(ie.X,{hovered:s,checked:t,onClick:l,children:(0,n.jsx)("span",{})})]}),Xt.tq&&(0,n.jsx)(ge,{sortDropDownOptions:d}),(0,n.jsx)(de,{}),(0,n.jsx)(Wt,{}),Object.entries(e).length>0&&(0,n.jsx)(u.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,n.jsx)(m.sg,{children:Object.entries(e).map((([e,t],i)=>(0,n.jsx)(Gt,{type:e,traits:t,index:i+H.TRAIT_START_INDEX},e)))})]})]})};var Jt=i(18683);const Qt=(0,v.default)(o.ZP).withConfig({displayName:"CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-15bf9a08-0"})`
  ${Jt.bc}
`,ei=(0,v.default)(o.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledColumn",componentId:"sc-15bf9a08-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.zD+16}px)`:"100%"};
  }
`,ti=(0,v.default)(d.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledRow",componentId:"sc-15bf9a08-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,ii=()=>{const e=(0,f.cP)((e=>e.bagExpanded)),t=(0,f.dD)();return(0,n.jsxs)(ei,{isBagExpanded:e,children:[(0,n.jsx)(fi,{children:(0,n.jsx)(gi,{})}),(0,n.jsxs)(Qt,{children:[(0,n.jsx)(Mt,{isMobile:t}),(0,n.jsx)(ti,{children:N})]}),(0,n.jsx)(dt,{})]})};var ni;!function(e){e.UNSUPPORTED_TOKEN_AND_NFT_POLICY="https://support.uniswap.org/hc/en-us/articles/18783694078989-Unsupported-Token-Policy"}(ni||(ni={}));var ri=i(34578);const ai=(0,v.default)(o.ZP).withConfig({displayName:"UnavailableCollectionPage__Container",componentId:"sc-339e086d-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,si=(0,v.default)(te.dL).withConfig({displayName:"UnavailableCollectionPage__StyledExternalLink",componentId:"sc-339e086d-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function oi({isBlocked:e}){const t=(0,v.useTheme)();return e?(0,n.jsxs)(ai,{children:[(0,n.jsx)(ri.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,n.jsx)(te.Tv.HeadlineMedium,{children:(0,n.jsx)(M.cC,{id:"nSkGHi"})}),(0,n.jsx)(te.m_,{to:"/nfts",children:(0,n.jsx)(M.cC,{id:"WFlfJ1"})}),(0,n.jsx)(si,{href:ni.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,n.jsx)(M.cC,{id:"f6ybgN"})})]}):(0,n.jsxs)(ai,{children:[(0,n.jsx)(te.Tv.HeadlineMedium,{children:(0,n.jsx)(M.cC,{id:"Ctk3ja"})}),(0,n.jsx)(te.m_,{to:"/nfts",children:(0,n.jsx)(M.cC,{id:"WFlfJ1"})})]})}var li=i(68830),di=i(47371),ci=i(437);const pi={},gi=(0,v.default)(c.X).withConfig({displayName:"collection__CollectionBannerLoading",componentId:"sc-ea1da3ac-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,hi=(0,v.default)(o.ZP).withConfig({displayName:"collection__CollectionContainer",componentId:"sc-ea1da3ac-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,ui=(0,li.animated)(hi),mi=v.default.div.withConfig({displayName:"collection__CollectionAssetsContainer",componentId:"sc-ea1da3ac-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,xi=(0,li.animated)(mi),fi=v.default.div.withConfig({displayName:"collection__BannerWrapper",componentId:"sc-ea1da3ac-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,wi=v.default.div.withConfig({displayName:"collection__Banner",componentId:"sc-ea1da3ac-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,yi=(0,v.default)(o.ZP).withConfig({displayName:"collection__CollectionDescriptionSection",componentId:"sc-ea1da3ac-5"})`
  ${Jt.bc}
`,ji=v.default.div.withConfig({displayName:"collection__FiltersContainer",componentId:"sc-ea1da3ac-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${ci.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,bi=(0,v.default)(d.ZP).withConfig({displayName:"collection__MobileFilterHeader",componentId:"sc-ea1da3ac-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,Ci=(0,v.default)(d.ZP).withConfig({displayName:"collection__CollectionDisplaySection",componentId:"sc-ea1da3ac-8"})`
  align-items: flex-start;
  position: relative;
`,vi=v.default.button.withConfig({displayName:"collection__IconWrapper",componentId:"sc-ea1da3ac-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${l.c}
`;var _i=()=>{const{contractAddress:e}=(0,Ne.UO)(),t=(0,f.dD)(),[i,o]=(0,f.wx)(),{pathname:l}=(0,Ne.TH)(),d=(0,Ne.s0)(),c=l.includes("/activity"),u=(0,f.PY)((e=>e.setMarketCount)),m=(0,f.cP)((e=>e.bagExpanded)),x=(0,f.cP)((e=>e.setBagExpanded)),{chainId:w}=(0,a.useWeb3React)(),j=(0,g.e)(),{data:v,loading:_}=(0,p.K)(e),{CollectionContainerWidthChange:k}=(0,li.useSpring)({CollectionContainerWidthChange:m&&!t?(j.xxxl?h.zD:h.ZI)+16:0,config:{duration:di.Kd.medium,easing:li.easings.easeOutSine}}),{gridWidthOffset:T}=(0,li.useSpring)({gridWidthOffset:i&&!t?332:0,config:{duration:di.Kd.medium,easing:li.easings.easeOutSine}});if((0,A.useEffect)((()=>{const e={};v?.marketplaceCount?.forEach((({marketplace:t,count:i})=>{e[t]=i})),u(e)}),[v?.marketplaceCount,u]),(0,A.useEffect)((()=>{m&&i&&!j.xl&&o(!1)}),[m,i,j,o]),(0,A.useEffect)((()=>{x({bagExpanded:!1,manualClose:!1})}),[]),_)return(0,n.jsx)(ii,{});if(!v.name)return(0,n.jsx)(oi,{});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.fM,{page:r.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:e,chain_id:w,is_activity_view:c},shouldLogImpression:!0,children:(0,n.jsx)(ui,{style:{width:k.to((e=>`calc(100% - ${e}px)`))},children:e&&!y._P.includes(e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(fi,{children:(0,n.jsx)(wi,{src:v?.bannerImageUrl?`${v.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,n.jsxs)(yi,{children:[v&&(0,n.jsx)(Ft,{stats:v,isMobile:t}),(0,n.jsx)("div",{id:"nft-anchor"}),(0,n.jsx)(I,{showActivity:c,toggleActivity:()=>{i&&o(!1),d(c?`/nfts/collection/${e}`:`/nfts/collection/${e}/activity`)}})]}),(0,n.jsxs)(Ci,{children:[(0,n.jsx)(ji,{isMobile:t,isFiltersExpanded:i,children:i&&(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsxs)(bi,{children:[(0,n.jsx)(te.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(vi,{onClick:()=>o(!1),children:(0,n.jsx)(Y.BW,{})})]}),(0,n.jsx)(qt,{traitsByGroup:v?.traits??pi})]})}),(0,n.jsx)(xi,{hideUnderneath:t&&(i||m),style:{transform:T.to((e=>`translate(${e}px)`)),width:T.to((e=>`calc(100% - ${e}px)`))},children:c?e&&(0,n.jsx)(C.cS,{contractAddress:e,rarityVerified:v?.rarityVerified??!1,collectionName:v?.name??"",chainId:w}):e&&v&&(0,n.jsx)(A.Suspense,{fallback:(0,n.jsx)(dt,{}),children:(0,n.jsx)(pt,{collectionStats:v,contractAddress:e,rarityVerified:v?.rarityVerified})})})]})]}):(0,n.jsx)(oi,{isBlocked:!0})})}),(0,n.jsx)(b,{})]})}}}]);
//# sourceMappingURL=4736.9095aef6.chunk.js.map