"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8654],{86646:function(e,t,i){i.r(t),i.d(t,{default:function(){return ws}});var n=i(42893),s=i(12204),a=i(19903),o=i(80815),r=i(66196),d=i(93622),c=i(60198),l=i(17790),p=i(60476),h=i(2304),m=i(95202),x=i(46217),u=i(4572),g=i(30476),f=i(55867),w=i(54212),j=i(13712),y=i(50595),C=i(34578),_=i(87253),b=i(1990),P=i(39839),I=i(437),S=i(57482);const k=(0,_.default)(p.ZP).withConfig({displayName:"BelowFloorWarningModal__ModalWrapper",componentId:"sc-2aa83e4c-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${I.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${b.j$.sm}px) {
    width: 100%;
  }
`,N=_.default.div.withConfig({displayName:"BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-2aa83e4c-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,v=(0,_.default)(y.Z).withConfig({displayName:"BelowFloorWarningModal__CloseIcon",componentId:"sc-2aa83e4c-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,T=_.default.div.withConfig({displayName:"BelowFloorWarningModal__HazardIconWrap",componentId:"sc-2aa83e4c-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,$=(0,_.default)(c.DF).withConfig({displayName:"BelowFloorWarningModal__ContinueButton",componentId:"sc-2aa83e4c-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,R=_.default.span.withConfig({displayName:"BelowFloorWarningModal__EditListings",componentId:"sc-2aa83e4c-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,E=({listingsBelowFloor:e,closeModal:t,startListing:i})=>{const a=(0,_.useTheme)(),{formatDelta:o}=(0,S.Gb)();return(0,n.jsxs)(f.h,{children:[(0,n.jsxs)(k,{children:[(0,n.jsxs)(N,{children:[(0,n.jsx)(v,{width:24,height:24,onClick:t})," "]}),(0,n.jsx)(T,{children:(0,n.jsx)(C.Z,{height:90,width:90,color:a.critical})}),(0,n.jsx)(P.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,n.jsx)(s.cC,{id:"nJdoNI"})}),(0,n.jsxs)(P.Tv.BodyPrimary,{textAlign:"center",children:[(0,n.jsx)(s.cC,{id:"+VPrZ3",values:{0:1!==e.length?2:1,1:g.ag._({id:"DK8H0x",values:{0:o(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}}),2:g.ag._({id:"7fIIB5",values:{0:e.length}})}}),"\xa0",(0,n.jsx)(s.cC,{id:"LngMh5"})]}),(0,n.jsx)($,{onClick:e=>{e.preventDefault(),e.stopPropagation(),i(),t()},children:(0,n.jsx)(s.cC,{id:"xGVfLh"})}),(0,n.jsx)(R,{onClick:t,children:(0,n.jsx)(s.cC,{id:"jUcBoP"})})]}),(0,n.jsx)(w.a,{onClick:t})]})};var L=i(5658),A=i(21828),M=i(79954),F=i(55831),O=i.n(F);const D=_.default.div.withConfig({displayName:"shared__RemoveIconWrap",componentId:"sc-e1e0e3a1-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,W=(0,_.default)(h.ZP).withConfig({displayName:"shared__TitleRow",componentId:"sc-e1e0e3a1-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var Z,B;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(Z||(Z={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(B||(B={}));const G="0x59728544B08AB483533076417FbBB2fD0B17CE3a",H="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",z="0x1e0049783f008a0085193e00003d00cd54003c71",V="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",X={[H]:z},Y=1e4,J=async e=>{const t=JSON.stringify(e),i=new AbortController,n=new Request("https://temp.api.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:i.signal}),s=setTimeout((()=>i.abort()),6e4);try{const e=await fetch(n);return 200===(await e.json()).code}catch(a){return!1}finally{clearTimeout(s)}},K=async(e,t)=>{const i=`https://temp.api.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,n=await fetch(i,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}}),s=await n.json();return s?.data?.data?.[0]?.id};var U=i(1004),q=i(86003),Q=i(4348),ee=i(69867),te=i(88868),ie=i(13368),ne=i(91101);const se=async e=>{const t=await fetch("https://temp.api.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(await t.json()).success}catch(i){return!1}};var ae=i(7432),oe=i(86784),re=i(7571),de=i(39112),ce=i(95339),le=i(73198),pe=i(14628);const he="tuple(uint256 price, bytes data)",me=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${he}[]`],xe=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${he}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,ue=async(e,t)=>{const i=re.$.encode(me,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),n=(0,le.keccak256)(i),s=await e.send("personal_sign",[n,t.user]);t.r=`0x${s.slice(2,66)}`,t.s=`0x${s.slice(66,130)}`,t.v=parseInt(s.slice(130,132),16),ge(t)},ge=e=>{e.v<27&&(e.v=e.v+27)},fe=e=>re.$.encode([xe],[e]),we=(e,t,i,n=M.hg.Erc721)=>({salt:(()=>{const e=q.O$.from((0,pe.O)(16)).toHexString();return(0,de.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:n===M.hg.Erc721?1:2,deadline:t,currency:ce.d,dataMask:"0x",items:i.map((e=>{return{price:e.price,data:(t=e.tokens,re.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1}),je=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],ye=(e,t)=>({amount:e,recipient:t}),Ce=(e,t,i)=>{const n=e?.basisPoints??0,s=100*(je.find((e=>"OpenSea"===e.name))?.fee??0),a=Y-n-s,o=t.mul(q.O$.from(n)).div(q.O$.from(Y)).toString(),r=t.mul(q.O$.from(a)).div(q.O$.from(Y)).toString(),d=t.mul(q.O$.from(s)).div(q.O$.from(Y)).toString();return{sellerFee:ye(r,i),creatorFee:n>0?ye(o,e?.asset_contract?.payout_address??""):void 0,openSeaFee:s?ye(d,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};async function _e(e,t,i,n,s=0,a){const o=new te.A(n,{conduitKeyToConduit:X,overrides:{defaultConduitKey:H},seaportVersion:"1.5"}),r=await i.getAddress(),d=t.newListings?.find((t=>t.marketplace.name===e.name))?.price;if(!d||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,ee.parseEther)(`${d}`),{sellerFee:i,creatorFee:n,openSeaFee:s}=Ce(t,e,r),c=[i,n,s].filter((e=>void 0!==e)),{executeAllActions:l}=await o.createOrder({offer:[{itemType:t.asset_contract.tokenType===M.hg.Erc721?ie.ItemType.ERC721:ie.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:c,endTime:t.expirationTime.toString(),zone:ne.r_,allowPartialFills:!0},r),p={...await l(),protocol_address:V};a(U.Sb.PENDING);const h=await async function(e){const t=e?JSON.stringify(e):void 0,i=new AbortController,n=new Request("https://temp.api.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:i.signal}),s=setTimeout((()=>i.abort()),O()("60s"));try{const e=await fetch(n);return 200===(await e.json()).code}catch(a){return!1}finally{clearTimeout(s)}}(p);return a(h?U.Sb.APPROVED:U.Sb.FAILED),h}catch(c){return 4001===c.code?a(U.Sb.REJECTED):a(U.Sb.FAILED),!1}case"LooksRare":{const e=A.Xg[A.HL.MAINNET],n=Math.round(Date.now()/1e3),o={isOrderAsk:!0,signer:r,collection:t.asset_contract.address,price:(0,ee.parseEther)(d.toString()),tokenId:q.O$.from(t.tokenId),amount:q.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:q.O$.from(s),startTime:q.O$.from(n),endTime:q.O$.from(t.expirationTime),minPercentageToAsk:q.O$.from(1e4).sub(q.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const c=await(0,A.tI)(i,A.HL.MAINNET,o,G);a(U.Sb.PENDING);const l={signature:c,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:r,isOrderAsk:!0,nonce:s,amount:1,price:(0,ee.parseEther)(d.toString()).toString(),startTime:n,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=await se(l);return a(p?U.Sb.APPROVED:U.Sb.FAILED),p}catch(c){return 4001===c.code?a(U.Sb.REJECTED):a(U.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,ee.parseEther)(d.toString()),tokens:[{token:t.asset_contract.address,tokenId:q.O$.from(t.tokenId),amount:1}]},i=we(r,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=await K(t.asset_contract.address,t.tokenId);await ue(n,i);const s={order:fe(i),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};a(U.Sb.PENDING);const o=await J(s);return a(o?U.Sb.APPROVED:U.Sb.FAILED),o}catch(c){return 4001===c.code?a(U.Sb.REJECTED):a(U.Sb.FAILED),!1}}default:return!1}}async function be(e,t,i){const n=()=>be(e,t,i);i(e,U.Sb.SIGNING,n);const{marketplace:s,collectionAddress:a,nftStandard:o}=e,r=A.Xg[A.HL.MAINNET],d="OpenSea"===s.name?z:"LooksRare"===s.name?e.nftStandard===M.hg.Erc721?G:"0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051":"X2Y2"===s.name?e.nftStandard===M.hg.Erc721?"0xf849de01b080adc3a814fabe1e2087475cf2e354":"0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779":r.TRANSFER_MANAGER_ERC721;a&&await async function(e,t,i,n,s=M.hg.Erc721){const a=new Q.Contract(t,s===M.hg.Erc721?ae:oe,i),o=await i.getAddress();try{if(await a.isApprovedForAll(o,e))return void n(U.Sb.APPROVED);n(U.Sb.SIGNING);const t=await a.setApprovalForAll(e,!0);n(U.Sb.PENDING),1===(await t.wait()).status?n(U.Sb.APPROVED):n(U.Sb.FAILED)}catch(r){4001===r.code?n(U.Sb.REJECTED):n(U.Sb.FAILED)}}(d,a,t,(t=>i(e,t,n)),o)}async function Pe(e,t,i,n,s,a){const o=n(),r=()=>Pe(e,t,i,n,s,a);a(e,U.Sb.SIGNING,r);const{asset:d,marketplace:c}=e;await _e(c,d,t,i,o,(t=>a(e,t,r)))&&"LooksRare"===e.marketplace.name&&s(o+1)}const Ie=e=>{const t=e.reduce(((e,t)=>{if(t.newListings?.length){const i=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),n=i.marketplace.fee+("LooksRare"===i.marketplace.name?50:t?.basisPoints??0)/100;return e+(i.price??0)-(i.price??0)*(n/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function Se(){const e=(0,L.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:i}=(0,L.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,j.useEffect)((()=>{const[n,s]=(e=>{const t=[],i=[];return e.forEach((e=>{e.marketplaces?.forEach((n=>{const s={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:U.Sb.DEFINED,asset:e,marketplace:n,price:e.newListings?.find((e=>e.marketplace.name===n.name))?.price};if(i.push(s),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===n.name))){const i={image:e.asset_contract.image_url,name:e.asset_contract.name,status:U.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:n,nftStandard:e.asset_contract.tokenType};t.push(i)}}))})),[t,i]})(e);t(s),i(n)}),[e,i,t])}const ke=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),Ne=(0,_.default)(c.Yd).withConfig({displayName:"ListingButton__StyledListingButton",componentId:"sc-720b119c-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${b.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,ve=({onClick:e})=>{const{sellAssets:t,showResolveIssues:i,toggleShowResolveIssues:a,issues:o,setIssues:r}=(0,L.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:i,issues:n,setIssues:s})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:i,issues:n,setIssues:s}))),[d,c]=(0,j.useState)(!1),l=(0,L.dD)(),[p,h]=(0,j.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:n,listingsMissingPrice:s,listingsBelowFloor:o,listingsAboveSellOrderFloor:d}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<O()("60s")))),i=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>O()("180d"))),n=[],s=[],a=[];for(const o of e)if(o.newListings)for(const e of o.newListings)e.price?e.price<.8*(o?.floorPrice??0)&&!e.overrideFloorPrice?s.push([o,e]):o.floor_sell_order_price&&e.price>=o.floor_sell_order_price&&o.asset_contract.tokenType!==M.hg.Erc1155&&a.push([o,e]):n.push([o,e]);return{missingExpiration:t,overMaxExpiration:i,listingsMissingPrice:n,listingsBelowFloor:s,listingsAboveSellOrderFloor:a}})(t),c=Number(e)+Number(n)+s.length+d.length;return r(c),!c&&i&&a(),(e||n||d.length)&&!i&&a(),[s,o]}),[t,r,i,a]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ne,{onClick:()=>{o?!i&&a():h.length?c(!0):e()},missingPrices:!!p.length,showResolveIssues:i,children:i?(0,n.jsx)(s.cC,{id:"KbR9EP",values:{0:1!==o?2:1,1:g.ag._({id:"mTYnTI",values:{issues:o}})}}):p.length&&!l?(0,n.jsx)(s.cC,{id:"FULt6J"}):(0,n.jsx)(s.cC,{id:"HmkXCG"})}),d&&(0,n.jsx)(E,{listingsBelowFloor:h,closeModal:()=>c(!1),startListing:e})]})};var Te=i(46591),$e=i(62329),Re=i(10362),Ee=i(26030),Le=i(7178),Ae=i(62878),Me=i(47371),Fe=i(25575),Oe=i(12113),De=i(29304),We=i(40709),Ze=i(18030);const Be=(0,_.default)(p.ZP).withConfig({displayName:"ContentRow__ContentColumn",componentId:"sc-ac4ccdd6-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,Ze.j)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,Ge=(0,_.default)(h.ZP).withConfig({displayName:"ContentRow__ContentRowWrapper",componentId:"sc-ac4ccdd6-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,He=_.default.img.withConfig({displayName:"ContentRow__CollectionIcon",componentId:"sc-ac4ccdd6-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,ze=_.default.img.withConfig({displayName:"ContentRow__AssetIcon",componentId:"sc-ac4ccdd6-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,Ve=_.default.div.withConfig({displayName:"ContentRow__MarketplaceIcon",componentId:"sc-ac4ccdd6-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,Xe=(0,_.default)(P.Tv.SubHeaderSmall).withConfig({displayName:"ContentRow__ContentName",componentId:"sc-ac4ccdd6-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,Ye=_.default.span.withConfig({displayName:"ContentRow__ProceedText",componentId:"sc-ac4ccdd6-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,Je=_.default.span.withConfig({displayName:"ContentRow__FailedText",componentId:"sc-ac4ccdd6-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,Ke=(0,_.default)(Ee.SA).withConfig({displayName:"ContentRow__StyledVerifiedIcon",componentId:"sc-ac4ccdd6-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,Ue=_.default.div.withConfig({displayName:"ContentRow__IconWrapper",componentId:"sc-ac4ccdd6-9"})`
  margin-left: auto;
  margin-right: 0px;
`,qe=(0,_.default)(h.ZP).withConfig({displayName:"ContentRow__ButtonRow",componentId:"sc-ac4ccdd6-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,Qe=_.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,et=_.default.button.withConfig({displayName:"ContentRow__RemoveButton",componentId:"sc-ac4ccdd6-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${Qe}
`,tt=_.default.button.withConfig({displayName:"ContentRow__RetryButton",componentId:"sc-ac4ccdd6-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Qe}
`,it=({row:e,isCollectionApprovalSection:t,removeRow:i})=>{const a=(0,_.useTheme)(),o=(0,j.useRef)(),r=e.status===U.Sb.FAILED||e.status===U.Sb.REJECTED;return(0,j.useEffect)((()=>{e.status===U.Sb.SIGNING&&o.current}),[e.status]),(0,n.jsxs)(Be,{failed:r,children:[(0,n.jsxs)(Ge,{active:e.status===U.Sb.SIGNING||e.status===U.Sb.APPROVED,failed:r,ref:o,children:[t?(0,n.jsx)(He,{src:e.image}):(0,n.jsx)(ze,{src:e.image}),(0,n.jsx)(Ve,{children:(0,Oe.Dp)(e.marketplace.name,"24")}),(0,n.jsx)(Xe,{children:e.name}),t&&e.isVerified&&(0,n.jsx)(Ke,{}),(0,n.jsx)(Ue,{children:e.status===U.Sb.DEFINED||e.status===U.Sb.PENDING?(0,n.jsx)(Fe.ZP,{height:"14px",width:"14px",stroke:e.status===U.Sb.PENDING?a.accent1:a.neutral3}):e.status===U.Sb.SIGNING?(0,n.jsx)(Ye,{children:(0,n.jsx)(s.cC,{id:"CpEYLQ"})}):e.status===U.Sb.APPROVED?(0,n.jsx)(De.Z,{height:"20",width:"20",stroke:a.success}):r&&(0,n.jsxs)(h.ZP,{children:[(0,n.jsx)(We.Z,{height:"20",width:"20",color:a.critical}),(0,n.jsx)(Je,{children:e.status===U.Sb.FAILED?(0,n.jsx)(s.cC,{id:"7Bj3x9"}):(0,n.jsx)(s.cC,{id:"ekCRTP"})})]})})]}),r&&(0,n.jsxs)(qe,{justify:"space-between",children:[(0,n.jsx)(et,{onClick:()=>i(e),children:(0,n.jsx)(s.cC,{id:"t/YqKh"})}),(0,n.jsx)(tt,{onClick:e.callback,children:(0,n.jsx)(s.cC,{id:"6gRgw8"})})]})]})},nt=(0,_.default)(h.ZP).withConfig({displayName:"ListModalSection__SectionHeader",componentId:"sc-fe36f725-0"})`
  justify-content: space-between;
`,st=(0,_.default)(P.Tv.SubHeader).withConfig({displayName:"ListModalSection__SectionTitle",componentId:"sc-fe36f725-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:i})=>i?e.success:t?e.neutral1:e.neutral2};
`,at=(0,_.default)(Ee.g8).withConfig({displayName:"ListModalSection__SectionArrow",componentId:"sc-fe36f725-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${Me.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,ot=(0,_.default)(p.ZP).withConfig({displayName:"ListModalSection__SectionBody",componentId:"sc-fe36f725-3"})`
  border-left: 1.5px solid ${Ae.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${$e.Z}
`,rt=(0,_.default)(Le.Z).withConfig({displayName:"ListModalSection__StyledInfoIcon",componentId:"sc-fe36f725-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,dt=(0,_.default)(p.ZP).withConfig({displayName:"ListModalSection__ContentRowContainer",componentId:"sc-fe36f725-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var ct;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(ct||(ct={}));const lt=({sectionType:e,active:t,content:i,toggleSection:a})=>{const o=(0,_.useTheme)(),r=(0,L.Pc)((e=>e.sellAssets)),d=(0,L.Pc)((e=>e.removeAssetMarketplace)),c=(0,j.useMemo)((()=>!i.some((e=>e.status!==U.Sb.APPROVED))),[i]),l=0===e,m=(0,j.useMemo)((()=>{if(l){const e=i.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[i,l]),x=e=>{if(l){const t=e;for(const e of r)e.asset_contract.address===t.collectionAddress&&d(e,t.marketplace)}else{const t=e;d(t.asset,t.marketplace)}};return(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)(nt,{children:[(0,n.jsxs)(h.ZP,{children:[t||c?(0,n.jsx)(Ee.bT,{fill:c?o.success:o.accent1}):(0,n.jsx)(Ee.rD,{}),(0,n.jsx)(st,{active:t,marginLeft:"12px",approved:c,children:l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.cC,{id:"Z7ZXbT"}),"\xa0",(0,n.jsx)(s.cC,{id:"8KNiOP",values:{0:m??1}})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.cC,{id:"c+Fnce"})," \xa0",i.length,"\xa0"," ",(0,n.jsx)(s.cC,{id:"OOoi9e",values:{0:i.length}})]})})]}),(0,n.jsx)(at,{active:t,secondaryColor:t?o.neutral1:o.neutral2,onClick:a})]}),t&&(0,n.jsxs)(ot,{children:[l&&(0,n.jsxs)(h.ZP,{height:"16px",marginBottom:"16px",children:[(0,n.jsx)(P.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,n.jsx)(s.cC,{id:"CSw5a/"})}),(0,n.jsx)(Re.ud,{text:(0,n.jsx)(s.cC,{id:"VsETB7"}),children:(0,n.jsx)(rt,{})})]}),(0,n.jsx)(dt,{children:i.map((e=>(0,n.jsx)(it,{row:e,removeRow:x,isCollectionApprovalSection:l},e?.name??e.marketplace.name)))})]})]})};var pt=i(77300);const ht=_.default.img.withConfig({displayName:"SuccessScreen__SuccessImage",componentId:"sc-24b0af3c-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,mt=(0,_.default)(h.ZP).withConfig({displayName:"SuccessScreen__SuccessImageWrapper",componentId:"sc-24b0af3c-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${$e.Z}
`,xt=(0,_.default)(p.ZP).withConfig({displayName:"SuccessScreen__ProceedsColumn",componentId:"sc-24b0af3c-2"})`
  text-align: right;
`,ut=_.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${b.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,gt=_.default.button.withConfig({displayName:"SuccessScreen__ReturnButton",componentId:"sc-24b0af3c-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${ut}
`,ft=_.default.a.withConfig({displayName:"SuccessScreen__TweetButton",componentId:"sc-24b0af3c-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${ut}
`,wt=(0,_.default)(h.ZP).withConfig({displayName:"SuccessScreen__TweetRow",componentId:"sc-24b0af3c-5"})`
  justify-content: center;
  gap: 4px;
`,jt=({overlayClick:e})=>{const t=(0,_.useTheme)(),{formatNumberOrString:i}=(0,S.Gb)(),a=(0,L.Pc)((e=>e.sellAssets)),{chainId:r}=(0,o.useWeb3React)(),d=(0,x.Z)(r),{formatCurrencyAmount:c}=(0,S.Gb)(),l=(0,j.useMemo)((()=>Ie(a)),[a]),p=(0,u.Z)(l.toString(),d),g=(0,m.sq)(p);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(W,{children:[(0,n.jsxs)(P.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,n.jsx)(s.cC,{id:"n3Wa1f"}),"\xa0",a.length>1?` ${a.length} `:"","NFT",(0,Oe._6)(a.length),"!"]}),(0,n.jsx)(y.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,n.jsx)(mt,{children:a.map((e=>(0,n.jsx)(ht,{src:e.imageUrl,numImages:a.length},e?.asset_contract?.address??""+e?.tokenId)))}),(0,n.jsxs)(h.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,n.jsx)(P.Tv.SubHeader,{children:(0,n.jsx)(s.cC,{id:"ORzP3x"})}),(0,n.jsxs)(xt,{children:[(0,n.jsxs)(P.Tv.SubHeader,{children:[i({input:l,type:S.sw.NFTToken})," ETH"]}),g&&(0,n.jsx)(P.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:c({amount:g,type:S.sw.FiatTokenPrice})})]})]}),(0,n.jsxs)(h.ZP,{justify:"space-between",flexWrap:"wrap",children:[(0,n.jsx)(gt,{onClick:()=>window.location.reload(),children:(0,n.jsx)(s.cC,{id:"eIO6eZ"})}),(0,n.jsx)(ft,{href:(0,Oe.FX)(a),target:"_blank",rel:"noreferrer",children:(0,n.jsxs)(wt,{children:[(0,n.jsx)(pt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,n.jsx)(s.cC,{id:"BMdkoo"})]})})]})]})},yt=_.default.div.withConfig({displayName:"ListModal__ListModalWrapper",componentId:"sc-c48ef7a-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${I.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${b.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Ct=({overlayClick:e})=>{const{provider:t,chainId:i}=(0,o.useWeb3React)(),d=t?.getSigner(),c=(0,r.oO)({modal:a.KO.NFT_LISTING}),{formatCurrencyAmount:l}=(0,S.Gb)(),p=(0,L.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:h,setLooksRareNonce:g,getLooksRareNonce:C,collectionsRequiringApproval:_,listings:b}=(0,L.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:i,collectionsRequiringApproval:n,listings:s})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:i,collectionsRequiringApproval:n,listings:s}))),I=(0,j.useMemo)((()=>Ie(p)),[p]),[k,N]=(0,j.useReducer)((e=>e===ct.APPROVE?ct.SIGN:ct.APPROVE),ct.APPROVE),v=(0,x.Z)(i),T=(0,u.Z)(I.toString(),v),$=l({amount:(0,m.sq)(T),type:S.sw.FiatTokenPrice}),R=(0,j.useMemo)((()=>_.every((e=>e.status===U.Sb.APPROVED))),[_]),E=(0,j.useMemo)((()=>b.every((e=>e.status===U.Sb.APPROVED))),[b]);(0,j.useEffect)((()=>{R&&((async()=>{if(d&&t){for(const e of b)await Pe(e,d,t,C,g,h);(0,r._P)(a.Yz.NFT_LISTING_COMPLETED,{signatures_approved:b.filter((e=>e.status===U.Sb.APPROVED)),list_quantity:b.length,usd_value:$,...c})}})(),k===ct.APPROVE&&N())}),[R]);const A=(0,j.useCallback)((()=>{E?window.location.reload():e()}),[E,e]);return(0,j.useEffect)((()=>{!b.length&&A()}),[b,A]),(0,n.jsxs)(f.h,{children:[(0,n.jsx)(r.fM,{modal:a.KO.NFT_LISTING,children:(0,n.jsx)(yt,{children:E?(0,n.jsx)(jt,{overlayClick:A}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(W,{children:[(0,n.jsx)(P.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,n.jsx)(s.cC,{id:"k6Nkrt"})}),(0,n.jsx)(y.Z,{size:24,cursor:"pointer",onClick:A})]}),(0,n.jsx)(lt,{sectionType:ct.APPROVE,active:k===ct.APPROVE,content:_,toggleSection:N}),(0,n.jsx)(lt,{sectionType:ct.SIGN,active:k===ct.SIGN,content:b,toggleSection:N})]})})}),(0,n.jsx)(w.a,{onClick:A})]})};var _t=i(55338),bt=i(83931);const Pt=(0,_.default)(p.ZP).withConfig({displayName:"Dropdown__DropdownWrapper",componentId:"sc-2f0c6b6d-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,It=(0,_.default)(h.ZP).withConfig({displayName:"Dropdown__DropdownRow",componentId:"sc-2f0c6b6d-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,St=({dropDownOptions:e,width:t})=>{const i=(0,_.useTheme)();return(0,n.jsx)(Pt,{$width:t,children:e.map((e=>(0,n.jsxs)(It,{onClick:e.onClick,children:[(0,n.jsx)(P.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,n.jsx)(De.Z,{height:20,width:20,color:i.accent1})]},e.displayText)))})};var kt=i(95829),Nt=i(42012),vt=i(74090),Tt=i(15655),$t=i(13678);const Rt=(0,_.default)(p.ZP).withConfig({displayName:"PriceTextInput__PriceTextInputWrapper",componentId:"sc-99cc0811-0"})`
  gap: 12px;
  position: relative;
`,Et=(0,_.default)(h.ZP).withConfig({displayName:"PriceTextInput__InputWrapper",componentId:"sc-99cc0811-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,Lt=_.default.div.withConfig({displayName:"PriceTextInput__CurrencyWrapper",componentId:"sc-99cc0811-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,At=_.default.div.withConfig({displayName:"PriceTextInput__GlobalPriceIcon",componentId:"sc-99cc0811-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,Mt=(0,_.default)(h.ZP).withConfig({displayName:"PriceTextInput__WarningRow",componentId:"sc-99cc0811-4"})`
  gap: 4px;
`,Ft=(0,_.default)(h.ZP).withConfig({displayName:"PriceTextInput__WarningMessage",componentId:"sc-99cc0811-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${b.j$.md}px) {
    right: unset;
  }
`,Ot=_.default.div.withConfig({displayName:"PriceTextInput__WarningAction",componentId:"sc-99cc0811-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,Dt=e=>{let t=(0,n.jsx)(n.Fragment,{});switch(e){case B.BELOW_FLOOR:t=(0,n.jsx)(s.cC,{id:"rKgBmD"});break;case B.ALREADY_LISTED:t=(0,n.jsx)(s.cC,{id:"VnmT/F"})}return t},Wt=({listPrice:e,setListPrice:t,isGlobalPrice:i,setGlobalOverride:a,globalOverride:o,asset:r})=>{const{formatNumberOrString:d,formatDelta:c}=(0,S.Gb)(),[l,p]=(0,j.useState)(B.NONE),h=(0,L.Pc)((e=>e.removeSellAsset)),m=(0,L.Pc)((e=>e.showResolveIssues)),x=(0,j.useRef)(),u=(0,_.useTheme)(),g=100*(1-(e??0)/(r.floorPrice??0)),f=m&&!e||l===B.ALREADY_LISTED||l===B.BELOW_FLOOR&&g>=20?Ae.O9.red400:l===B.BELOW_FLOOR?u.deprecated_accentWarning:i||e?u.accent1:u.neutral2;return function(e,t,i,n){(0,j.useEffect)((()=>{e(B.NONE);const s=n??0;t.current.value=`${s}`,s<(i?.floorPrice??0)&&s>0?e(B.BELOW_FLOOR):i.floor_sell_order_price&&s>=i.floor_sell_order_price&&i.asset_contract.tokenType!==M.hg.Erc1155&&e(B.ALREADY_LISTED)}),[i.asset_contract.tokenType,i?.floorPrice,i.floor_sell_order_price,t,n,e])}(p,x,r,e),(0,n.jsxs)(Rt,{children:[(0,n.jsxs)(Et,{borderColor:f,children:[(0,n.jsx)(vt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Tt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:x,onChange:i=>{if(!e&&i.target.value.includes(".")&&0===parseFloat(i.target.value))return;const n=parseFloat(i.target.value);t(isNaN(n)?void 0:n)}}),(0,n.jsx)(Lt,{listPrice:e,children:"\xa0ETH"}),(i||o)&&(0,n.jsx)(At,{onClick:()=>a(!o),children:o?(0,n.jsx)(Ee.We,{}):(0,n.jsx)($t.Z,{size:20,color:f})})]}),(0,n.jsx)(Ft,{$color:f,children:l!==B.NONE&&(0,n.jsxs)(Mt,{children:[(0,n.jsx)(C.Z,{height:16,width:16,color:f}),(0,n.jsxs)("span",{children:[l===B.BELOW_FLOOR&&`${c(g)} `,Dt(l),"\xa0",l===B.ALREADY_LISTED&&`${d({input:r?.floor_sell_order_price??0,type:S.sw.NFTToken})} ETH`]}),(0,n.jsx)(Ot,{onClick:()=>{l===B.ALREADY_LISTED&&h(r),p(B.NONE)},children:l===B.BELOW_FLOOR?(0,n.jsx)(s.cC,{id:"1QfxQT"}):(0,n.jsx)(s.cC,{id:"vop1s3"})})]})})]})},Zt=(0,_.default)(h.ZP).withConfig({displayName:"RoyaltyTooltip__FeeWrap",componentId:"sc-d16e3c92-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,Bt=(0,_.default)(p.ZP).withConfig({displayName:"RoyaltyTooltip__RoyaltyContainer",componentId:"sc-d16e3c92-1"})`
  gap: 12px;
  padding: 4px 0px;
`,Gt=_.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,Ht=_.default.div.withConfig({displayName:"RoyaltyTooltip__MarketIcon",componentId:"sc-d16e3c92-2"})`
  border-radius: 4px;
  ${Gt}
`,zt=_.default.img.withConfig({displayName:"RoyaltyTooltip__CollectionIcon",componentId:"sc-d16e3c92-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${Gt}
`,Vt=(0,_.default)(P.Tv.BodySmall).withConfig({displayName:"RoyaltyTooltip__FeePercent",componentId:"sc-d16e3c92-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,Xt=(0,_.default)(h.ZP).withConfig({displayName:"RoyaltyTooltip__MaxFeeContainer",componentId:"sc-d16e3c92-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,Yt=({selectedMarkets:e,asset:t,fees:i})=>{const{formatNumberOrString:a,formatDelta:o}=(0,S.Gb)(),r=Math.max(...e.map((e=>ke(e,t)??0)));return(0,n.jsxs)(Bt,{children:[e.map((e=>(0,n.jsxs)(Zt,{children:[(0,n.jsxs)(h.ZP,{children:[(0,n.jsx)(Ht,{children:(0,Oe.Dp)(e.name,"16")}),(0,n.jsxs)(P.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,n.jsx)(s.cC,{id:"9JsPP+"})]})]}),(0,n.jsx)(Vt,{children:o(e.fee)})]},t.collection?.address??""+t.tokenId+e.name+"fee"))),(0,n.jsxs)(Zt,{children:[(0,n.jsxs)(h.ZP,{children:[(0,n.jsx)(zt,{src:t.collection?.imageUrl}),(0,n.jsx)(P.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,n.jsx)(s.cC,{id:"5KArrt"})})]}),(0,n.jsxs)(Vt,{children:[r,"%"]})]}),(0,n.jsxs)(Xt,{children:[(0,n.jsx)(P.Tv.BodySmall,{lineHeight:"16px",children:(0,n.jsx)(s.cC,{id:"b/e652"})}),(0,n.jsxs)(P.Tv.BodySmall,{lineHeight:"16px",color:i?"neutral1":"neutral2",children:[i?a({input:i,type:S.sw.NFTToken}):"-"," ETH"]})]})]})},Jt=(0,_.default)(p.ZP).withConfig({displayName:"MarketplaceRow__LastPriceInfo",componentId:"sc-dd36ece7-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.lg}px) {
    display: flex;
  }
`,Kt=(0,_.default)(p.ZP).withConfig({displayName:"MarketplaceRow__FloorPriceInfo",componentId:"sc-dd36ece7-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,Ut=(0,_.default)(D).withConfig({displayName:"MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-dd36ece7-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,qt=(0,_.default)(h.ZP).withConfig({displayName:"MarketplaceRow__MarketIconsWrapper",componentId:"sc-dd36ece7-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }
`,Qt=(0,_.default)(p.ZP).withConfig({displayName:"MarketplaceRow__MarketIconWrapper",componentId:"sc-dd36ece7-4"})`
  position: relative;
  cursor: pointer;
`,ei=_.default.div.withConfig({displayName:"MarketplaceRow__MarketIcon",componentId:"sc-dd36ece7-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,ti=_.default.div.withConfig({displayName:"MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-dd36ece7-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }
`,ii=(0,_.default)(p.ZP).withConfig({displayName:"MarketplaceRow__FeeColumnWrapper",componentId:"sc-dd36ece7-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,ni=_.default.div.withConfig({displayName:"MarketplaceRow__FeeWrapper",componentId:"sc-dd36ece7-8"})`
  width: min-content;
  white-space: nowrap;
`,si=(0,_.default)(p.ZP).withConfig({displayName:"MarketplaceRow__ReturnColumn",componentId:"sc-dd36ece7-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,ai=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:i,selectedMarkets:s,removeMarket:a,asset:o,expandMarketplaceRows:r,toggleExpandMarketplaceRows:d,rowHovered:c})=>{const{formatNumberOrString:l,formatDelta:p}=(0,S.Gb)(),m=(0,L.Pc)((e=>e.setAssetListPrice)),x=(0,L.Pc)((e=>e.removeAssetMarketplace)),[u,f]=(0,j.useReducer)((e=>!e),!1),[w,y]=(0,j.useReducer)((e=>!e),!1),[C,_]=(0,j.useState)((()=>o.newListings?.find((e=>r?e.marketplace.name===s?.[0].name:!!e.price))?.price)),[b,I]=(0,j.useState)(!1),k=e===Z.SAME_PRICE&&!b,N=k?t:C,v=(0,j.useCallback)((e=>{k?i(e):_(e);for(const t of s)m(o,e,t)}),[o,s,m,i,k]),T=(0,j.useMemo)((()=>{let e=0;for(const t of s){const i=ke(t,o)+t.fee;e=Math.max(i,e)}return e}),[o,s]),$=N&&N*T/100,R=N&&$&&N-$;return function(e,t,i,n,s){(0,j.useEffect)((()=>{let a;e?(n||t(s),a=s):a=n,i(a)}),[e])}(b,_,v,C,t),function(e,t,i,n,s,a,o){(0,j.useEffect)((()=>{o===Z.FLOOR_PRICE?(t(e?.floorPrice),i(e.floorPrice)):o===Z.LAST_PRICE?(t(e.lastPrice),i(e.lastPrice)):o===Z.SAME_PRICE&&(s&&!a?i(s):t(a)),n(!1)}),[o])}(o,_,i,I,C,t,e),(0,j.useEffect)((()=>{k&&v(t)}),[t]),(0,n.jsxs)(h.ZP,{onMouseEnter:y,onMouseLeave:y,children:[(0,n.jsx)(Kt,{children:(0,n.jsx)(P.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:l({input:o.floorPrice,type:S.sw.NFTToken})+o.floorPrice?" ETH":""})}),(0,n.jsx)(Jt,{children:(0,n.jsx)(P.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:o.lastPrice?`${l({input:o.lastPrice,type:S.sw.NFTToken})} ETH`:"-"})}),(0,n.jsxs)(h.ZP,{flex:"2",children:[(r||s.length>1)&&(0,n.jsx)(qt,{onMouseEnter:f,onMouseLeave:f,children:s.map(((e,t)=>(0,n.jsxs)(Qt,{onClick:t=>{t.stopPropagation(),x(o,e),a&&a()},children:[(0,n.jsx)(ei,{index:t,children:(0,Oe.Dp)(e.name,"20")}),(0,n.jsx)(Ut,{hovered:u&&(r??!1),children:(0,n.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+o.collection?.address+o.tokenId)))}),(0,n.jsx)(Wt,{listPrice:N,setListPrice:v,isGlobalPrice:k,setGlobalOverride:I,globalOverride:b,asset:o}),c&&(r&&w||s.length>1)&&(0,n.jsx)(ti,{onClick:d,children:r?(0,n.jsx)(Ee.fJ,{}):(0,n.jsx)(Ee.nG,{})})]}),(0,n.jsx)(ii,{children:(0,n.jsx)(Re.ud,{text:(0,n.jsx)(Yt,{selectedMarkets:s,asset:o,fees:$}),placement:"left",children:(0,n.jsx)(ni,{children:(0,n.jsx)(P.Tv.BodyPrimary,{color:"neutral2",children:T>0?`${p(T)}${s.length>1?g.ag._({id:"ydV21Q"}):""}`:"--%"})})})}),(0,n.jsx)(si,{children:(0,n.jsx)(oi,{ethPrice:R})})]})},oi=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,S.Gb)(),i=(0,Nt.$)();return(0,n.jsx)(h.ZP,{width:"100%",justify:"flex-end",children:(0,n.jsx)(P.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)("span",{children:[t({input:e,type:S.sw.NFTToken})," ETH"]}),(0,n.jsx)(P.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*i,type:S.sw.FiatNFTToken})})]}):"- ETH"})})},ri=(0,_.default)(h.ZP).withConfig({displayName:"NFTListRow__NFTListRowWrapper",componentId:"sc-18902c6d-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,di=_.default.div.withConfig({displayName:"NFTListRow__RemoveIconContainer",componentId:"sc-18902c6d-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,ci=(0,_.default)(h.ZP).withConfig({displayName:"NFTListRow__NFTInfoWrapper",componentId:"sc-18902c6d-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 1.5;
  }
`,li=_.default.img.withConfig({displayName:"NFTListRow__NFTImage",componentId:"sc-18902c6d-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,pi=_.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,hi=(0,_.default)(p.ZP).withConfig({displayName:"NFTListRow__TokenInfoWrapper",componentId:"sc-18902c6d-4"})`
  margin-right: 8px;
  min-width: 0px;
`,mi=_.default.div.withConfig({displayName:"NFTListRow__TokenName",componentId:"sc-18902c6d-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${pi}
`,xi=(0,_.default)(P.Tv.BodySmall).withConfig({displayName:"NFTListRow__CollectionName",componentId:"sc-18902c6d-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${pi};
`,ui=(0,_.default)(p.ZP).withConfig({displayName:"NFTListRow__MarketPlaceRowWrapper",componentId:"sc-18902c6d-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 3;
  }
`,gi=({asset:e,globalPriceMethod:t,globalPrice:i,setGlobalPrice:s,selectedMarkets:a})=>{const[o,r]=(0,j.useReducer)((e=>!e),!1),d=(0,L.Pc)((e=>e.removeSellAsset)),[c,l]=(0,j.useState)([]),[p,h]=(0,j.useReducer)((e=>!e),!1),m=(0,_.useTheme)();return(0,j.useEffect)((()=>{l(JSON.parse(JSON.stringify(a)))}),[a]),(0,n.jsxs)(ri,{onMouseEnter:()=>{!p&&h()},onMouseLeave:()=>{p&&h()},children:[(0,n.jsx)(di,{children:p&&(0,n.jsx)(kt.Z,{size:20,color:m.neutral2,cursor:"pointer",onClick:()=>{d(e)}})}),(0,n.jsxs)(ci,{children:[(0,n.jsx)(li,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,n.jsxs)(hi,{children:[(0,n.jsx)(mi,{children:e.name?e.name:`#${e.tokenId}`}),(0,n.jsxs)(xi,{children:[e.collection?.name,e.collectionIsVerified&&(0,n.jsx)(Ee.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,n.jsx)(ui,{children:o&&c.length>1?c.map((a=>(0,n.jsx)(ai,{globalPriceMethod:t,globalPrice:i,setGlobalPrice:s,selectedMarkets:[a],removeMarket:()=>l(c.filter((e=>e.name!==a.name))),asset:e,expandMarketplaceRows:o,rowHovered:p,toggleExpandMarketplaceRows:r},e.name+a.name))):(0,n.jsx)(ai,{globalPriceMethod:t,globalPrice:i,setGlobalPrice:s,selectedMarkets:c,asset:e,rowHovered:p,toggleExpandMarketplaceRows:r})})]})},fi=_.default.div.withConfig({displayName:"NFTListingsGrid__TableHeader",componentId:"sc-a77714fd-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${b.j$.sm}px) {
    padding-left: 48px;
  }
`,wi=_.default.div.withConfig({displayName:"NFTListingsGrid__NFTHeader",componentId:"sc-a77714fd-1"})`
  flex: 2;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 1.5;
  }
`,ji=(0,_.default)(h.ZP).withConfig({displayName:"NFTListingsGrid__PriceHeaders",componentId:"sc-a77714fd-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${b.j$.md}px) {
    flex: 3;
  }
`,yi=_.default.div.withConfig({displayName:"NFTListingsGrid__LastPriceHeader",componentId:"sc-a77714fd-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.lg}px) {
    display: flex;
  }
`,Ci=_.default.div.withConfig({displayName:"NFTListingsGrid__FloorPriceHeader",componentId:"sc-a77714fd-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,_i=(0,_.default)(h.ZP).withConfig({displayName:"NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-a77714fd-5"})`
  flex: 2;
  gap: 4px;
`,bi=(0,_.default)(p.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPromptContainer",componentId:"sc-a77714fd-6"})`
  position: relative;
  @media screen and (max-width: ${b.j$.sm}px) {
    display: none;
  }
`,Pi=(0,_.default)(h.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPrompt",componentId:"sc-a77714fd-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Ii=(0,_.default)(bt.Z).withConfig({displayName:"NFTListingsGrid__DropdownChevron",componentId:"sc-a77714fd-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Si=_.default.div.withConfig({displayName:"NFTListingsGrid__DropdownContainer",componentId:"sc-a77714fd-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,ki=_.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${b.j$.md}px) {
    display: flex;
  }
`,Ni=_.default.div.withConfig({displayName:"NFTListingsGrid__FeeHeader",componentId:"sc-a77714fd-10"})`
  flex: 1;
  ${ki}
`,vi=_.default.div.withConfig({displayName:"NFTListingsGrid__UserReceivesHeader",componentId:"sc-a77714fd-11"})`
  flex: 1.5;
  ${ki}
`,Ti=_.default.hr.withConfig({displayName:"NFTListingsGrid__RowDivider",componentId:"sc-a77714fd-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,$i=({selectedMarkets:e})=>{const t=(0,L.Pc)((e=>e.sellAssets)),[i,a]=(0,j.useState)(Z.CUSTOM),[o,r]=(0,j.useState)(),[d,c]=(0,j.useReducer)((e=>!e),!1),l=(0,j.useRef)(null);(0,_t.t)(l,d?c:void 0);const h=(0,j.useMemo)((()=>[{displayText:"Custom",isSelected:i===Z.CUSTOM,onClick:()=>{a(Z.CUSTOM),c()}},{displayText:"Floor price",isSelected:i===Z.FLOOR_PRICE,onClick:()=>{a(Z.FLOOR_PRICE),c()}},{displayText:"Last price",isSelected:i===Z.LAST_PRICE,onClick:()=>{a(Z.LAST_PRICE),c()}},{displayText:"Same price",isSelected:i===Z.SAME_PRICE,onClick:()=>{a(Z.SAME_PRICE),c()}}]),[i]);let m;switch(i){case Z.CUSTOM:m=(0,n.jsx)(s.cC,{id:"8Tg/JR"});break;case Z.FLOOR_PRICE:m=(0,n.jsx)(s.cC,{id:"IX1M/E"});break;case Z.LAST_PRICE:m=(0,n.jsx)(s.cC,{id:"HoGOsT"});break;case Z.SAME_PRICE:m=(0,n.jsx)(s.cC,{id:"uK2Qlr"})}return(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)(fi,{children:[(0,n.jsx)(wi,{children:(0,n.jsx)(s.cC,{id:"zJlXbX"})}),(0,n.jsxs)(ji,{children:[(0,n.jsx)(Ci,{children:(0,n.jsx)(s.cC,{id:"WEXsZg"})}),(0,n.jsx)(yi,{children:(0,n.jsx)(s.cC,{id:"RtKKbA"})}),(0,n.jsxs)(_i,{ref:l,children:[(0,n.jsx)(s.cC,{id:"a7u1N9"}),(0,n.jsxs)(bi,{children:[(0,n.jsxs)(Pi,{onClick:c,children:[m," ",(0,n.jsx)(Ii,{isOpen:d})]}),d&&(0,n.jsx)(Si,{children:(0,n.jsx)(St,{dropDownOptions:h,width:200})})]})]}),(0,n.jsx)(Ni,{children:(0,n.jsx)(s.cC,{id:"/mfICu"})}),(0,n.jsx)(vi,{children:(0,n.jsx)(s.cC,{id:"88cUW+"})})]})]}),t.map((s=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(gi,{asset:s,globalPriceMethod:i,globalPrice:o,setGlobalPrice:r,selectedMarkets:e}),t.indexOf(s)<t.length-1&&(0,n.jsx)(Ti,{})]})))]})};var Ri=i(35458),Ei=i(2994),Li=i(71814),Ai=i(17669);const Mi=(0,_.default)(Ei.X2).withConfig({displayName:"SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-45ca7e4-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,Fi=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__FeeText",componentId:"sc-45ca7e4-1"})`
  color: ${({theme:e})=>e.neutral2};
`,Oi=(0,_.default)(Ei.X2).withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-45ca7e4-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${Ri.T1}) {
    width: 220px;
  }
`,Di=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-45ca7e4-3"})`
  display: flex;
`,Wi=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__MarketIcon",componentId:"sc-45ca7e4-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,Zi=(0,_.default)(Ee.g8).withConfig({displayName:"SelectMarketplacesDropdown__Chevron",componentId:"sc-45ca7e4-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,Bi=_.default.div.withConfig({displayName:"SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-45ca7e4-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,Gi=(0,_.default)(Ei.sg).withConfig({displayName:"SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-45ca7e4-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${I.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,Hi=({setSelectedMarkets:e,selectedMarkets:t})=>{const[i,s]=(0,j.useReducer)((e=>!e),!1),a=(0,j.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),o=(0,j.useRef)(null);return(0,_t.t)(o,(()=>i&&s())),(0,n.jsxs)(Bi,{ref:o,children:[(0,n.jsxs)(Oi,{className:Tt.km,onClick:s,children:[(0,n.jsxs)(Di,{children:[t.map(((e,i)=>(0,n.jsx)(Wi,{totalSelected:t.length,index:i,children:(0,Oe.Dp)(e.name,"20")},i))),a]}),(0,n.jsx)(Zi,{isOpen:i,secondaryColor:Ai.Z4.colors.neutral1})]}),(0,n.jsx)(Gi,{isOpen:i,children:je.map((i=>(({market:e,setSelectedMarkets:t,selectedMarkets:i})=>{const s=i.includes(e),[a,o]=(0,j.useReducer)((e=>!e),!1),r=()=>{1===i.length&&s||t(s?i.filter((t=>t!==e)):[...i,e])};return(0,n.jsxs)(Mi,{onMouseEnter:o,onMouseLeave:o,onClick:r,children:[(0,n.jsxs)(Ei.X2,{gap:"12",onClick:r,children:[(0,Oe.Dp)(e.name,"24"),(0,n.jsxs)(Ei.sg,{children:[(0,n.jsx)(P.Tv.BodyPrimary,{children:e.name}),(0,n.jsxs)(Fi,{className:Tt.VJ,children:[e.fee,"% fee"]})]})]}),(0,n.jsx)(Li.X,{hovered:a,checked:s,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,n.jsx)("span",{})})]})})({market:i,setSelectedMarkets:e,selectedMarkets:t})))})]})},zi=(0,_.default)(Ei.sg).withConfig({displayName:"SetDurationModal__ModalWrapper",componentId:"sc-b747ba68-0"})`
  gap: 4px;
  position: relative;
`,Vi=(0,_.default)(Ei.X2).withConfig({displayName:"SetDurationModal__InputWrapper",componentId:"sc-b747ba68-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,Xi=(0,_.default)(Ei.X2).withConfig({displayName:"SetDurationModal__DropdownPrompt",componentId:"sc-b747ba68-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Yi=(0,_.default)(bt.Z).withConfig({displayName:"SetDurationModal__DropdownChevron",componentId:"sc-b747ba68-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Ji=_.default.div.withConfig({displayName:"SetDurationModal__DropdownContainer",componentId:"sc-b747ba68-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${I.k.dropdown};
`,Ki=(0,_.default)(Ei.X2).withConfig({displayName:"SetDurationModal__ErrorMessage",componentId:"sc-b747ba68-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,Ui=(0,_.default)(C.Z).withConfig({displayName:"SetDurationModal__WarningIcon",componentId:"sc-b747ba68-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var qi,Qi;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(qi||(qi={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(Qi||(Qi={}));const en=()=>{const[e,t]=(0,j.useState)(qi.day),[i,a]=(0,j.useState)("7"),[o,r]=(0,j.useState)(Qi.valid),d=(0,L.Pc)((e=>e.setGlobalExpiration)),[c,l]=(0,j.useReducer)((e=>!e),!1),p=(0,j.useRef)(null);(0,_t.t)(p,c?l:void 0);const h=(0,j.useMemo)((()=>[{displayText:"hours",isSelected:e===qi.hour,onClick:()=>{t(qi.hour),l()}},{displayText:"days",isSelected:e===qi.day,onClick:()=>{t(qi.day),l()}},{displayText:"weeks",isSelected:e===qi.week,onClick:()=>{t(qi.week),l()}},{displayText:"months",isSelected:e===qi.month,onClick:()=>{t(qi.month),l()}}]),[e]);let m;switch(e){case qi.hour:m=(0,n.jsx)(s.cC,{id:"JC1A6G",values:{amount:i}});break;case qi.day:m=(0,n.jsx)(s.cC,{id:"/TUNHz",values:{amount:i}});break;case qi.week:m=(0,n.jsx)(s.cC,{id:"v3mlu/",values:{amount:i}});break;case qi.month:m=(0,n.jsx)(s.cC,{id:"zo+8I3",values:{amount:i}})}return(0,j.useEffect)((()=>{const t=tn(parseFloat(i),e);1e3*t-Date.now()<O()("60s")||isNaN(t)?r(Qi.empty):1e3*t-Date.now()>O()("180d")?r(Qi.overMax):r(Qi.valid),d(t)}),[i,e,d]),(0,n.jsxs)(zi,{ref:p,children:[(0,n.jsxs)(Vi,{isInvalid:o!==Qi.valid,children:[(0,n.jsx)(vt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Tt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:i,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{a(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,n.jsxs)(Xi,{onClick:l,children:[m," ",(0,n.jsx)(Yi,{isOpen:c})]}),c&&(0,n.jsx)(Ji,{children:(0,n.jsx)(St,{dropDownOptions:h,width:125})})]}),o!==Qi.valid&&(0,n.jsxs)(Ki,{className:Tt.VJ,children:[" ",(0,n.jsx)(Ui,{})," ",o===Qi.overMax?"Maximum 6 months":"Set duration"]})]})},tn=(e,t)=>Math.round((Date.now()+O()("1h")*(()=>{switch(t){case qi.hour:return 1;case qi.day:return 24;case qi.week:return 168;default:return 720}})()*e)/1e3),nn=(0,_.default)(p.ZP).withConfig({displayName:"ListPage__ListingHeader",componentId:"sc-f59cdf59-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${b.j$.xs}px) {
    gap: 4px;
  }
`,sn=_.default.div.withConfig({displayName:"ListPage__ArrowContainer",componentId:"sc-f59cdf59-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${b.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,an=(0,_.default)(Te.Z).withConfig({displayName:"ListPage__BackArrow",componentId:"sc-f59cdf59-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${b.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,on=(0,_.default)(h.ZP).withConfig({displayName:"ListPage__TitleWrapper",componentId:"sc-f59cdf59-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${b.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,rn=(0,_.default)(h.ZP).withConfig({displayName:"ListPage__ButtonsWrapper",componentId:"sc-f59cdf59-4"})`
  gap: 12px;
  width: min-content;
`,dn=_.default.section.withConfig({displayName:"ListPage__MarketWrap",componentId:"sc-f59cdf59-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,cn=(0,_.default)(h.ZP).withConfig({displayName:"ListPage__ListingHeaderRow",componentId:"sc-f59cdf59-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${b.j$.sm}px) {
    padding-left: 40px;
  }
`,ln=_.default.div.withConfig({displayName:"ListPage__GridWrapper",componentId:"sc-f59cdf59-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,pn=(0,_.default)(h.ZP).withConfig({displayName:"ListPage__FloatingConfirmationBar",componentId:"sc-f59cdf59-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${I.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${b.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${b.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,hn=_.default.div.withConfig({displayName:"ListPage__Overlay",componentId:"sc-f59cdf59-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,mn=(0,_.default)(P.Tv.SubHeader).withConfig({displayName:"ListPage__UsdValue",componentId:"sc-f59cdf59-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${b.j$.lg}px) {
    display: flex;
  }
`,xn=(0,_.default)(h.ZP).withConfig({displayName:"ListPage__ProceedsAndButtonWrapper",componentId:"sc-f59cdf59-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${b.j$.sm}px) {
    gap: 20px;
  }
`,un=(0,_.default)(h.ZP).withConfig({displayName:"ListPage__ProceedsWrapper",componentId:"sc-f59cdf59-12"})`
  width: min-content;
  gap: 16px;
`,gn=_.default.span.withConfig({displayName:"ListPage__EthValueWrapper",componentId:"sc-f59cdf59-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${b.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,fn=()=>{const{formatNumberOrString:e}=(0,S.Gb)(),{setProfilePageState:t}=(0,L.aO)(),{provider:i,chainId:d}=(0,o.useWeb3React)(),c=(0,L.dD)(),l=(0,r.oO)({modal:a.KO.NFT_LISTING}),{formatCurrencyAmount:g}=(0,S.Gb)(),{setGlobalMarketplaces:f,sellAssets:w,issues:y}=(0,L.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:i})=>({setGlobalMarketplaces:e,sellAssets:t,issues:i}))),{listings:C,collectionsRequiringApproval:_,setLooksRareNonce:b,setCollectionStatusAndCallback:I}=(0,L.zM)((({listings:e,collectionsRequiringApproval:t,setLooksRareNonce:i,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setLooksRareNonce:i,setCollectionStatusAndCallback:n}))),k=(0,j.useMemo)((()=>Ie(w)),[w]),N=(0,x.Z)(d),v=(0,u.Z)(k.toString(),N),T=(0,m.sq)(v),$=g({amount:T,type:S.sw.FiatTokenPrice}),[R,E]=(0,j.useReducer)((e=>!e),!1),[A,M]=(0,j.useState)([je[0]]),F=i?.getSigner();Se(),(0,j.useEffect)((()=>{f(A)}),[A,f]);const O={collection_addresses:w.map((e=>e.asset_contract.address)),token_ids:w.map((e=>e.tokenId)),marketplaces:Array.from(new Set(C.map((e=>e.marketplace.name)))),list_quantity:C.length,usd_value:$,...l},D=async()=>{if(!F)return;(0,r._P)(a.Yz.NFT_SELL_START_LISTING,{...O});const e=await F.getAddress(),t=await(async e=>{const t=await fetch(`https://api.looksrare.org/api/v1/orders/nonce?address=${e}`);if(200!==t.status)return void console.log(`LooksRare nonce API errored with status ${t.statusText}`);const i=await t.json();return parseFloat(i.data)})(e);b(t??0);for(const n of _)(i=n.status)!==U.Sb.PAUSED&&i!==U.Sb.APPROVED&&(c?await be(n,F,I):be(n,F,I));var i},W=c?(0,n.jsx)(P.Tv.SubHeader,{children:(0,n.jsx)(s.cC,{id:"lDgVWA"})}):(0,n.jsx)(P.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,n.jsx)(s.cC,{id:"88cUW+"})});return(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)(dn,{children:[(0,n.jsxs)(nn,{children:[(0,n.jsxs)(h.ZP,{children:[(0,n.jsx)(sn,{children:(0,n.jsx)(an,{onClick:()=>t(U.HA.VIEWING)})}),(0,n.jsx)(P.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,n.jsx)(s.cC,{id:"/7Thkl"})})]}),(0,n.jsxs)(cn,{children:[(0,n.jsx)(on,{children:(0,n.jsx)(s.cC,{id:"EjWd3p"})}),(0,n.jsxs)(rn,{children:[(0,n.jsx)(Hi,{setSelectedMarkets:M,selectedMarkets:A}),(0,n.jsx)(en,{})]})]})]}),(0,n.jsx)(ln,{children:(0,n.jsx)($i,{selectedMarkets:A})})]}),(0,n.jsxs)(pn,{issues:!!y,children:[W,(0,n.jsxs)(xn,{children:[(0,n.jsxs)(un,{children:[(0,n.jsxs)(gn,{totalEthListingValue:!!k,children:[k>0?e({input:k,type:S.sw.NFTToken}):"-"," ","ETH"]}),!!T&&(0,n.jsx)(mn,{children:$})]}),(0,n.jsx)(ve,{onClick:()=>{E(),D()}})]})]}),(0,n.jsx)(hn,{}),R&&(0,n.jsx)(Ct,{overlayClick:E})]})};var wn=i(48571),jn=i(60120),yn=i(35837),Cn=i(42223),_n=i(71170),bn=i(21849),Pn=i(80343),In=i(3923),Sn=i(68830),kn=i(94231),Nn=i(90739),vn=i(81983),Tn=i(42826);i(98303),i(46912);const $n=(0,_.default)(Ei.sg).withConfig({displayName:"FilterSidebar__ItemsContainer",componentId:"sc-d8fc8d7e-0"})`
  ${$e.Z}
  height: 100vh;
`,Rn=(0,_.default)(Pn.X).withConfig({displayName:"FilterSidebar__LongLoadingBubble",componentId:"sc-d8fc8d7e-1"})`
  min-height: 15px;
  width: 75%;
`,En=(0,_.default)(Pn.X).withConfig({displayName:"FilterSidebar__SmallLoadingBubble",componentId:"sc-d8fc8d7e-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,Ln=(0,_.default)(Ei.X2).withConfig({displayName:"FilterSidebar__MobileMenuHeader",componentId:"sc-d8fc8d7e-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,An=({style:e})=>(0,n.jsxs)(Ei.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,n.jsxs)(Ei.X2,{display:"flex",flex:"1",children:[(0,n.jsx)(En,{}),(0,n.jsx)(Rn,{})]}),(0,n.jsx)(jn.n,{as:"span",borderColor:"surface3",className:In.MJ,"aria-hidden":"true"})]}),Mn=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:i,walletCollections:s})=>{const a=(0,L.Pr)((e=>e.collectionFilters)),o=(0,L.Pr)((e=>e.setCollectionFilters)),[r,d]=(0,L.wx)(),c=(0,L.dD)(),{sidebarX:l}=(0,Sn.useSpring)({sidebarX:r?0:-360,config:{duration:Me.Kd.medium,easing:Sn.easings.easeOutSine}}),p=(0,j.useMemo)((()=>s&&s?.length>=cs||i),[s,i]);return(0,n.jsx)(jn.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:r?"flex":"none",style:{transform:c?void 0:l.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,n.jsxs)(jn.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[c&&(0,n.jsxs)(Ln,{children:[(0,n.jsx)(P.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(Ee.DX,{height:28,width:28,fill:Ai.Z4.colors.neutral1,onClick:()=>d(!1)})]}),(0,n.jsx)(Fn,{collections:s,collectionFilters:a,setCollectionFilters:o,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:i,hideSearch:p})]})})},Fn=({collections:e,collectionFilters:t,setCollectionFilters:i,fetchNextPage:s,hasNextPage:a,isFetchingNextPage:o,hideSearch:r})=>{const[d,c]=(0,j.useState)(""),[l,p]=(0,j.useState)(e);(0,j.useEffect)((()=>{if(d){const t=e.filter((e=>e.name?.toLowerCase().includes(d.toLowerCase())));p(t)}else p(e)}),[d,e]);const h=(0,j.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),m=a?l.length+1:l.length,x=o?Tn.Z:s,u=(0,j.useCallback)((e=>!a||e<l.length),[l.length,a]),g=(0,j.useCallback)((({index:e,style:s})=>!(!!l&&l[e])||o?(0,n.jsx)(An,{style:s},e):(0,n.jsx)(Dn,{style:s,collection:l[e],collectionFilters:t,setCollectionFilters:i},h(e,l))),[l,o,h,t,i]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(jn.n,{className:Tt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,n.jsx)(jn.n,{paddingBottom:"12",borderRadius:"8",children:(0,n.jsxs)(Ei.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!r&&(0,n.jsx)(On,{collectionSearchText:d,setCollectionSearchText:c}),(0,n.jsx)($n,{children:(0,n.jsx)(kn.Z,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(vn.Z,{isItemLoaded:u,itemCount:m,loadMoreItems:x,children:({onItemsRendered:t,ref:i})=>(0,n.jsx)(Nn.t7,{height:e,width:"100%",itemCount:m,itemSize:44,onItemsRendered:t,itemKey:h,ref:i,children:g})})})})]})})]})},On=({collectionSearchText:e,setCollectionSearchText:t})=>(0,n.jsx)(vt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),Dn=({collection:e,collectionFilters:t,setCollectionFilters:i,style:s})=>{const[a,o]=(0,j.useState)(!1),[r,d]=(0,j.useReducer)((e=>!e),!1),c=(0,j.useCallback)((e=>t.some((t=>t===e))),[t]),l=()=>{o(!a),i(e.address)};return(0,n.jsxs)(Ei.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...s},maxHeight:"44",as:"li",onMouseEnter:d,onMouseLeave:d,onClick:l,children:[(0,n.jsxs)(Ei.X2,{children:[(0,n.jsx)(jn.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,n.jsxs)(jn.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,n.jsx)(Li.X,{checked:c(e.address),hovered:r,onChange:l,children:(0,n.jsx)(jn.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var Wn=i(18683),Zn=i(46642),Bn=i(12694),Gn=i(12835),Hn=i(70453);const zn=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-a6ba35bc-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,Vn=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-a6ba35bc-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,Xn=(0,_.default)(Vn).withConfig({displayName:"ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-a6ba35bc-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,Yn=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-a6ba35bc-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,Jn=(0,_.default)(Vn).withConfig({displayName:"ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-a6ba35bc-4"})`
  justify-content: space-between;
`,Kn=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-a6ba35bc-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,Un=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-a6ba35bc-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,qn=_.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-a6ba35bc-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,Qn=()=>(0,n.jsx)(jn.n,{width:"full",className:Cn.P,children:Array.from(Array(ds),((e,t)=>(0,n.jsx)(qn,{className:Hn.S},t)))}),es=()=>(0,n.jsxs)(zn,{children:[(0,n.jsx)(Xn,{children:(0,n.jsx)(Yn,{className:Hn.S})}),(0,n.jsxs)(Jn,{children:[(0,n.jsx)(Kn,{className:Hn.S}),(0,n.jsx)(Un,{className:Hn.S})]}),(0,n.jsx)(Qn,{})]});var ts=i(14327),is=i(68431),ns=i(80657);const ss=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:i,hideDetails:o})=>{const d=(0,L.Pc)((e=>e.sellAssets)),c=(0,L.Pc)((e=>e.selectSellAsset)),l=(0,L.Pc)((e=>e.removeSellAsset)),p=(0,L.cP)((e=>e.bagExpanded)),h=(0,L.cP)((e=>e.toggleBag)),m=(0,L.dD)(),x=(0,ns.s0)(),u=(0,j.useMemo)((()=>d.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,d]),g=(0,r.oO)(),f=t=>{t?l(e):(c(e),(0,r._P)(a.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...g})),p||d.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||m||h()},w=e.susFlag,y=(0,j.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,n.jsx)(Ee.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,n.jsx)(s.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(s.cC,{id:"9AgVn/"}),disabledInfo:(0,n.jsx)(s.cC,{id:"KWvmby"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,n.jsx)(ts.y,{asset:e,display:y,isSelected:u,isDisabled:Boolean(w),selectAsset:()=>f(!1),unselectAsset:()=>f(!0),onButtonClick:()=>f(u),onCardClick:()=>{o||x((0,is.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:i,testId:"nft-profile-asset"})},as=(0,_.default)(Ei.sg).withConfig({displayName:"ProfilePage__ProfilePageColumn",componentId:"sc-c40541c2-0"})`
  ${Wn.bc}
`,os=_.default.div.withConfig({displayName:"ProfilePage__ProfileHeader",componentId:"sc-c40541c2-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,rs=_.default.div.withConfig({displayName:"ProfilePage__EmptyStateContainer",componentId:"sc-c40541c2-2"})`
  margin-top: 164px;
`,ds=25,cs=300,ls=()=>{const{address:e}=(0,L.tM)(),t=(0,L.Pr)((e=>e.walletCollections)),i=(0,L.Pr)((e=>e.setWalletCollections)),{resetSellAssets:s}=(0,L.Pc)((({reset:e})=>({resetSellAssets:e}))),a=(0,L.Pc)((e=>e.sellAssets)),o=(0,L.cP)((e=>e.toggleBag)),[r,d]=(0,L.wx)(),c=(0,L.dD)(),{data:l,fetchNextPage:p,hasNextPage:h,isFetchingNextPage:m,isSuccess:x}=(0,Bn.useInfiniteQuery)(["ownerCollections",{address:e}],(async({pageParam:t=0})=>{const i=await(async({params:e})=>{let t=!1;for(const s of Object.values(e))void 0===s&&(t=!0);if(t)return[];const i=await fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),n=await i.json();return n?n.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]})({params:{asset_owner:e,offset:""+t*cs,limit:`${cs}`}});return{data:i,nextPage:t+1}}),{getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:15e3,refetchIntervalInBackground:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}),u=(0,j.useMemo)((()=>x?l?.pages.map((e=>e.data)).flat():null),[x,l]);return(0,j.useEffect)((()=>{u&&i(u)}),[u,i]),(0,n.jsxs)(as,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(os,{children:"My NFTs"}),(0,n.jsxs)(Ei.X2,{alignItems:"flex-start",position:"relative",children:[(0,n.jsx)(Mn,{fetchNextPage:p,hasNextPage:h,isFetchingNextPage:m,walletCollections:t}),(!c||!r)&&(0,n.jsx)(j.Suspense,{fallback:(0,n.jsx)(es,{}),children:(0,n.jsx)(ps,{walletCollections:t,isFiltersExpanded:r,setFiltersExpanded:d})})]})]}),a.length>0&&(0,n.jsxs)(Ei.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Tt.v4,children:[a.length," NFT",1===a.length?"":"s",(0,n.jsx)(jn.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:s,lineHeight:"16",children:"Clear"}),(0,n.jsx)(jn.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:o,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},ps=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:i})=>{const{address:s}=(0,L.tM)(),a=(0,L.Pr)((e=>e.setCollectionFilters)),o=(0,L.Pr)((e=>e.collectionFilters)),r=(0,L.Pr)((e=>e.clearCollectionFilters)),d=(0,L.cP)((e=>e.bagExpanded)),[c,l]=(0,j.useState)(),p=(0,L.dD)(),h=(0,L.Pc)((e=>e.sellAssets)),{walletAssets:m,loading:x,hasNext:u,loadMore:g}=(0,wn.b)(s,o,[],ds),{gridX:f}=(0,Sn.useSpring)({gridX:t?300:-16,config:{duration:250,easing:Sn.easings.easeOutSine}});return x?(0,n.jsx)(es,{}):(0,n.jsx)(Ei.sg,{width:"full",children:0===m?.length?(0,n.jsx)(rs,{children:(0,n.jsx)(Gn.f,{})}):(0,n.jsxs)(jn.x,{flexShrink:"0",position:p&&d?"fixed":"static",style:{transform:f.to((e=>`translate(${Number(e)-(!p&&t?300:-16)}px)`))},paddingY:"20",children:[(0,n.jsx)(Ei.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,n.jsx)(_n.L,{isMobile:p,isFiltersExpanded:t,onClick:()=>i(!t)})}),(0,n.jsx)(Ei.X2,{children:(0,n.jsx)(hs,{collections:e,collectionFilters:o,setCollectionFilters:a,clearCollectionFilters:r})}),(0,n.jsx)(Zn.Z,{next:g,hasMore:u??!1,loader:Boolean(u&&m?.length)&&(0,n.jsx)(yn.p,{count:ds}),dataLength:m?.length??0,className:m?.length?Cn.P:void 0,style:{overflow:"unset"},children:m?.length?m.map(((e,t)=>(0,n.jsx)("div",{children:(0,n.jsx)(ss,{asset:e,mediaShouldBePlaying:e.tokenId===c,setCurrentTokenPlayingMedia:l,hideDetails:h.length>0})},t))):null})]})})},hs=({collections:e,collectionFilters:t,setCollectionFilters:i,clearCollectionFilters:s})=>{const a=t=>e?.find((e=>e.address===t)),o=(0,j.useCallback)((()=>s()),[s]);return(0,n.jsxs)(Ei.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(t?.length)&&t.map(((e,t)=>(0,n.jsx)(ms,{collection:a(e),setCollectionFilters:i},`CollectionFilterItem-${e}-${t}`))),Boolean(t?.length)&&(0,n.jsx)(bn.v,{onClick:o,children:"Clear all"})]})},ms=({collection:e,setCollectionFilters:t})=>e?(0,n.jsxs)(Ei.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,n.jsx)(jn.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,n.jsx)(jn.n,{marginLeft:"6",className:"_1bw5dlr8",children:e?.name}),(0,n.jsx)(jn.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,n.jsx)(Ee.aM,{})})]}):null,xs=_.default.div.withConfig({displayName:"profile__ProfilePageWrapper",componentId:"sc-4cb4f59d-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${b.j$.lg}px) {
    height: auto;
  }
`,us=_.default.div.withConfig({displayName:"profile__LoadedAccountPage",componentId:"sc-4cb4f59d-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?l.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${b.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,gs=_.default.div.withConfig({displayName:"profile__Center",componentId:"sc-4cb4f59d-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,fs=(0,_.default)(c.DF).withConfig({displayName:"profile__ConnectWalletButton",componentId:"sc-4cb4f59d-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function ws(){const e=(0,L.aO)((e=>e.state)),t=(0,L.aO)((e=>e.setProfilePageState)),i=(0,L.Pc)((e=>e.reset)),c=(0,L.Pr)((e=>e.clearCollectionFilters)),{account:l}=(0,o.useWeb3React)(),p=(0,j.useRef)(l),h=(0,d.LK)();(0,j.useEffect)((()=>{p.current!==l&&(p.current=l,i(),t(U.HA.VIEWING),c())}),[l,i,t,c]);const m=(0,L.cP)((e=>e.bagExpanded)),x=e===U.HA.LISTING;return(0,n.jsx)(r.fM,{page:a.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,n.jsx)(xs,{children:l?(0,n.jsx)(us,{cartExpanded:m,isListingNfts:x,children:x?(0,n.jsx)(fn,{}):(0,n.jsx)(ls,{})}):(0,n.jsxs)(gs,{children:[(0,n.jsx)(P.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,n.jsx)(s.cC,{id:"xZBwjV"})}),(0,n.jsx)(fs,{onClick:h,children:(0,n.jsx)(P.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)(s.cC,{id:"VHOVEJ"})})})]})})})}}}]);
//# sourceMappingURL=8654.67ffcb9c.chunk.js.map