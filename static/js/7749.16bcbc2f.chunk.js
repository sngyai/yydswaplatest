"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7749],{9482:function(e,r,t){t.d(r,{R_:function(){return n},gS:function(){return s},xr:function(){return a},oj:function(){return i},Co:function(){return o},Yb:function(){return l},fb:function(){return c},hX:function(){return d},rG:function(){return g},FC:function(){return u},rZ:function(){return m}});t(98303),t(46912);var n="e2d0r6e rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez4b9 rgw6ez1dr rgw6ez47l rgw6ez2cx",s="e2d0r6h e2d0r6g rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez173 rgw6ez4ux rgw6ez88d rgw6ez80x rgw6ez8e1",a="rgw6ez14f rgw6ez1bf rgw6ez80p",i="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ezfr rgw6ez8bh rgw6ez45l rgw6ez45r",o="e2d0r6a rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez3t3",l="e2d0r63 e2d0r61 rgw6ez459 rgw6ez2d3 rgw6ez2e4 rgw6ez2il rgw6ez2jm rgw6ez2or rgw6ez289 rgw6ez4b9 rgw6ez7zd rgw6ez895 rgw6ez7zp rgw6ez59f rgw6ez5yr",c="e2d0r6c rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf",d="e2d0r6l rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez4qr rgw6ez4b9 rgw6ez80x rgw6ez7zd",g="e2d0r65 e2d0r61 rgw6ez459 rgw6ez2e3 rgw6ez2jl rgw6ez27x rgw6ez4bf rgw6ezb3 rgw6ezd9",u="e2d0r6n rgw6ez2d3 rgw6ez2il rgw6ez44r rgw6ez80l rgw6ez18x rgw6ez16x rgw6ez4b9 rgw6ez4qr rgw6ezax rgw6ezd9 rgw6ez7zd",m="e2d0r6j e2d0r6g rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez173 rgw6ez4ux rgw6ez88d rgw6ez80x rgw6ez8e1 rgw6ez4d3 rgw6ez7zd"},35253:function(e,r,t){t.d(r,{m:function(){return o}});var n=t(1152),s=t(12113),a=t(13712),i=t(79954);function o(e,r,t){const{data:n,loading:o,fetchMore:l,error:c}=(0,i.YV)({variables:{filter:e,first:r},fetchPolicy:t}),d=n?.nftActivity?.pageInfo?.hasNextPage,g=(0,a.useCallback)((()=>l({variables:{after:n?.nftActivity?.pageInfo?.endCursor}})),[n,l]),u=(0,a.useMemo)((()=>n?.nftActivity?.edges?.map((e=>{const r=e?.node,t=r?.asset;return{collectionAddress:r.address,tokenId:r.tokenId,tokenMetadata:{name:t?.name,imageUrl:t?.image?.url,smallImageUrl:t?.smallImage?.url,metadataUrl:t?.metadataUrl,rarity:{primaryProvider:"Rarity Sniper",providers:t?.rarities?.map((e=>({...e,provider:"Rarity Sniper"})))},suspiciousFlag:t?.suspiciousFlag,standard:t?.nftContract?.standard},eventType:r.type,marketplace:r.marketplace,fromAddress:r.fromAddress,toAddress:r.toAddress,transactionHash:r.transactionHash,orderStatus:r.orderStatus,price:(0,s.K3)(r.price?.value??0),symbol:t?.collection?.image?.url,quantity:r.quantity,url:r.url,eventTimestamp:1e3*r.timestamp}}))),[n]);return(0,a.useMemo)((()=>({nftActivity:u,hasNext:d,loadMore:g,loading:o,error:c})),[d,g,o,u,c])}n.ZP`
  query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) {
    nftActivity(filter: $filter, after: $after, first: $first) {
      edges {
        node {
          id
          address
          tokenId
          asset {
            id
            metadataUrl
            image {
              id
              url
            }
            smallImage {
              id
              url
            }
            name
            rarities {
              id
              provider
              rank
              score
            }
            suspiciousFlag
            nftContract {
              id
              standard
            }
            collection {
              id
              image {
                id
                url
              }
            }
          }
          type
          marketplace
          fromAddress
          toAddress
          transactionHash
          price {
            id
            value
          }
          orderStatus
          quantity
          url
          timestamp
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`},17749:function(e,r,t){t.d(r,{cS:function(){return C},VJ:function(){return b},YQ:function(){return T}});var n=t(42893),s=t(62329),a=t(35253),i=t(60120),o=t(2994),l=t(5658),c=t(1004),d=t(13712),g=t(46642),u=t(41440),m=t(87253),p=t(9482),f=t(61984);t(98303),t(36199);const x=()=>(0,n.jsx)(i.n,{className:"_2kdvfw1 rgw6ez14f rgw6ez1bf rgw6ez80p"}),h=()=>(0,n.jsx)(i.n,{className:"fbjar43 _2kdvfw1 rgw6ez18x rgw6ez81x"}),w=()=>(0,n.jsxs)(i.n,{as:"a",className:p.Yb,children:[(0,n.jsxs)(o.X2,{gap:"16",children:[(0,n.jsx)(x,{}),(0,n.jsx)(h,{})]}),(0,n.jsx)(o.X2,{children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",md:"flex"},children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",lg:"flex"},children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",xl:"flex"},children:(0,n.jsx)(h,{})})]}),z=({rowCount:e})=>(0,n.jsx)(n.Fragment,{children:[...Array(e)].map(((e,r)=>(0,n.jsx)(w,{},r)))}),j=()=>(0,n.jsxs)(o.sg,{marginTop:"36",children:[(0,n.jsx)(b,{}),(0,n.jsx)(z,{rowCount:10})]});var y;!function(e){e.Item="Item",e.Event="Event",e.Price="Price",e.By="By",e.To="To"}(y||(y={}));const v=m.default.div.withConfig({displayName:"Activity__FilterBox",componentId:"sc-1d0f5cfb-0"})`
  display: flex;
  color: ${({isActive:e,theme:r})=>r.neutral1};
  background: ${({isActive:e,theme:r})=>e?r.surface3:r.surface1};
  border: ${({isActive:e,theme:r})=>`1px solid ${r.surface3}`};
  ${s.c};
`,b=()=>(0,n.jsxs)(i.n,{className:p.rG,children:[(0,n.jsx)(i.n,{children:y.Item}),(0,n.jsx)(i.n,{children:y.Event}),(0,n.jsx)(i.n,{display:{sm:"none",md:"block"},children:y.Price}),(0,n.jsx)(i.n,{display:{sm:"none",xl:"block"},children:y.By}),(0,n.jsx)(i.n,{display:{sm:"none",xxl:"block"},children:y.To})]}),k={[c.n$.Listing]:!0,[c.n$.Sale]:!0,[c.n$.Transfer]:!1,[c.n$.CancelListing]:!1},T=(e,r)=>({...e,[r.eventType]:!e[r.eventType]}),C=({contractAddress:e,rarityVerified:r,collectionName:t,chainId:s})=>{const[m,x]=(0,d.useReducer)(T,k),{nftActivity:h,hasNext:w,loadMore:y,loading:C}=(0,a.m)({activityTypes:Object.keys(m).map((e=>e)).filter((e=>m[e])),address:e},25),I=w&&h?.length,A=(0,l.cP)((e=>e.itemsInBag)),N=(0,l.cP)((e=>e.addAssetsToBag)),M=(0,l.cP)((e=>e.removeAssetsFromBag)),$=(0,l.cP)((e=>e.bagExpanded)),S=(0,l.cP)((e=>e.toggleBag)),F=(0,l.dD)(),E=(0,l.$N)(),P=(0,d.useCallback)((function({eventType:e}){const r=m[e];return(0,n.jsx)(v,{className:p.hX,isActive:r,onClick:()=>x({eventType:e}),children:e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[m]);return(0,n.jsxs)(i.n,{marginLeft:{sm:"16",md:"48"},children:[(0,n.jsxs)(o.X2,{gap:"8",paddingTop:{sm:"0",md:"16"},children:[(0,n.jsx)(P,{eventType:c.n$.Listing}),(0,n.jsx)(P,{eventType:c.n$.Sale}),(0,n.jsx)(P,{eventType:c.n$.Transfer})]}),C?(0,n.jsx)(j,{}):h&&(0,n.jsxs)(o.sg,{marginTop:"36",children:[(0,n.jsx)(b,{}),(0,n.jsx)(g.Z,{next:y,hasMore:!!w,loader:I?(0,n.jsx)(z,{rowCount:2}):null,dataLength:h?.length??0,style:{overflow:"unset"},children:h.map(((e,a)=>e.eventType&&(0,n.jsxs)(i.n,{as:u.rU,"data-testid":"nft-activity-row",to:`/nfts/asset/${e.collectionAddress}/${e.tokenId}?origin=activity`,className:p.Yb,children:[(0,n.jsx)(f.Et,{event:e,rarityVerified:r,collectionName:t,eventTimestamp:e.eventTimestamp,isMobile:F}),(0,n.jsx)(f.VM,{eventType:e.eventType,eventTimestamp:e.eventTimestamp,eventTransactionHash:e.transactionHash,price:e.price,isMobile:F}),(0,n.jsx)(f.Ic,{marketplace:e.marketplace,price:e.price}),(0,n.jsx)(f.UM,{address:e.fromAddress,chainId:s}),(0,n.jsx)(f.UM,{address:e.toAddress,chainId:s,desktopLBreakpoint:!0}),(0,n.jsx)(f.Dg,{event:e,collectionName:t,selectAsset:N,removeAsset:M,itemsInBag:A,cartExpanded:$,toggleCart:S,isMobile:F,ethPriceInUSD:E})]},a)))})]})]})}},61984:function(e,r,t){t.d(r,{UM:function(){return I},Dg:function(){return C},VM:function(){return F},Et:function(){return L},Ic:function(){return N}});var n=t(42893),s=t(12204),a=t(19903),i=t(15387),o=t(66196),l=t(10362),c=t(79954),d=t(60120),g=t(2994),u=t(26030),m=t(1004),p=t(12113),f=t(9961);var x=t(3406),h=t(13712),w=t(87253),z=t(39839),j=t(83777),y=t(57482),v=t(34120),b=t(9482);const k=(0,w.default)(z.dL).withConfig({displayName:"ActivityCells__AddressLink",componentId:"sc-e903fab3-0"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  font-weight: 485;
  line-height: 20px;
  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  a:hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  a:focus {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.click};
  }
`,T=(e,r,t)=>{if(r)return t?(0,n.jsx)(s.cC,{id:"t/YqKh"}):(0,n.jsx)(s.cC,{id:"2RtVHm"});switch(e){case c.iF.Executed:return(0,n.jsx)(s.cC,{id:"s9KGXU"});case c.iF.Cancelled:return(0,n.jsx)(s.cC,{id:"vv7kpg"});case c.iF.Expired:return(0,n.jsx)(s.cC,{id:"M1RnFv"});case c.iF.Valid:return(0,n.jsx)(s.cC,{id:"jqzUyM"});default:return null}},C=({event:e,collectionName:r,selectAsset:t,removeAsset:s,itemsInBag:i,cartExpanded:l,toggleCart:u,isMobile:m,ethPriceInUSD:p})=>{const x=(0,h.useMemo)((()=>((e,r,t)=>{const n=e.price?parseFloat(e.price)*t:"0",s=e.price?(0,f.parseEther)(e.price):"";return{address:e.collectionAddress,collectionName:r,imageUrl:e.tokenMetadata?.imageUrl,marketplace:e.marketplace,name:e.tokenMetadata?.name,tokenId:e.tokenId,susFlag:e.tokenMetadata?.suspiciousFlag,smallImageUrl:e.tokenMetadata?.smallImageUrl,collectionSymbol:e.symbol,priceInfo:{USDPrice:n,ETHPrice:s,basePrice:s,baseAsset:"ETH"},tokenType:e.tokenMetadata?.standard}})(e,r,p)),[e,r,p]),w=(0,h.useMemo)((()=>i.some((e=>x.tokenId===e.asset.tokenId&&x.address===e.asset.address))),[x,i]),z=((e,r)=>{if(!r||!e)return!1;const t=Object.keys(c.Wf).map((e=>e.toLowerCase())),n=e===c.iF.Valid,s=t.includes(r.toLowerCase());return n&&s})(e.orderStatus,e.marketplace),j=(0,o.oO)({page:a.yJ.NFT_COLLECTION_PAGE}),y={collection_address:x.address,token_id:x.tokenId,token_type:x.tokenType,...j};return(0,n.jsx)(g.sg,{display:{sm:"none",lg:"flex"},height:"full",justifyContent:"center",marginX:"auto",children:e.eventType===c.y3.Listing&&e.orderStatus?(0,n.jsx)(d.n,{as:"button",className:z&&w?b.rZ:b.gS,onClick:e=>{e.preventDefault(),w?s([x]):t([x]),!w&&!l&&!m&&u(),!w&&(0,o._P)(a.Yz.NFT_BUY_ADDED,{eventProperties:y})},disabled:!z,children:T(e.orderStatus,z,w)}):"-"})},I=({address:e,desktopLBreakpoint:r,chainId:t})=>(0,n.jsx)(g.sg,{display:{sm:"none",xl:r?"none":"flex",xxl:"flex"},className:b.R_,children:(0,n.jsx)(k,{href:(0,v.E)(t??i.ChainId.MAINNET,e??"",v.r.ADDRESS),style:{textDecoration:"none"},children:(0,n.jsx)(d.n,{onClick:e=>e.stopPropagation(),children:e?(0,j.Xn)(e,2):"-"})})}),A=({price:e})=>(0,n.jsx)(l.ud,{text:(0,n.jsx)(d.n,{textAlign:"left",fontSize:"14",fontWeight:"book",color:"neutral2",children:`${e} ETH`}),placement:"top",children:(0,n.jsx)(d.n,{children:`${e.substring(0,5)}... ETH`})}),N=({marketplace:e,price:r})=>{const{formatNumberOrString:t}=(0,y.Gb)(),s=(0,h.useMemo)((()=>r?t({input:parseFloat(r?.toString()),type:y.sw.NFTToken}):null),[t,r]);return(0,n.jsxs)(g.X2,{display:{sm:"none",md:"flex"},gap:"8",children:[e&&(0,p.Dp)(e,"16"),s?s.length>6?(0,n.jsx)(A,{price:s}):(0,n.jsx)(n.Fragment,{children:`${s} ETH`}):(0,n.jsx)(n.Fragment,{children:"-"})]})},M=e=>{switch(e){case c.y3.Listing:return(0,n.jsx)(u.TV,{width:16,height:16});case c.y3.Sale:return(0,n.jsx)(u.QF,{width:16,height:16});case c.y3.Transfer:return(0,n.jsx)(u.dj,{width:16,height:16});case c.y3.CancelListing:return(0,n.jsx)(u.Io,{width:16,height:16});default:return null}},$=({transactionHash:e})=>(0,n.jsx)(g.X2,{onClick:r=>((e,r)=>{e.preventDefault(),window.open(`https://etherscan.io/tx/${r}`,"_blank","noopener,noreferrer")})(r,e),marginLeft:"4",children:(0,n.jsx)(u.Bu,{})}),S=e=>({[c.y3.Listing]:"deprecated_gold",[c.y3.Sale]:"success",[c.y3.Transfer]:"deprecated_violet",[c.y3.CancelListing]:"critical"}[e]),F=({eventType:e,eventTimestamp:r,eventTransactionHash:t,eventOnly:s,price:a,isMobile:i})=>{const{formatNumberOrString:o}=(0,y.Gb)(),l=(0,h.useMemo)((()=>a?o({input:parseFloat(a?.toString()),type:y.sw.NFTToken}):null),[o,a]);return(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",gap:"4",children:[(0,n.jsxs)(g.X2,{className:b.Co,color:S(e),children:[M(e),m.ze[e]]}),r&&!i&&!s&&(0,n.jsxs)(g.X2,{className:b.fb,children:[(0,x.F)(r.toString()),t&&(0,n.jsx)($,{transactionHash:t})]}),i&&a&&(0,n.jsx)(g.X2,{fontSize:"16",fontWeight:"book",color:"neutral1",children:`${l} ETH`})]})},E=()=>(0,n.jsx)(d.n,{position:"relative",style:{background:"#24272e"},className:b.xr,children:(0,n.jsxs)(d.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,n.jsx)("br",{}),"not",(0,n.jsx)("br",{}),"available"]})}),P=({rarity:e,collectionName:r,rarityVerified:t})=>{const{formatNumber:s}=(0,y.Gb)(),a=e.rank||e.providers?.[0].rank;return a?(0,n.jsx)(d.n,{children:(0,n.jsx)(l.ud,{text:(0,n.jsxs)(g.X2,{children:[(0,n.jsx)(d.n,{display:"flex",marginRight:"4",children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(d.n,{width:"full",fontSize:"14",children:t?`Verified by ${r}`:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(d.n,{className:b.FC,children:[(0,n.jsx)(d.n,{paddingTop:"2",paddingBottom:"2",display:"flex",children:s({input:a,type:y.sw.WholeNumber})}),(0,n.jsx)(d.n,{display:"flex",height:"16",children:t?(0,n.jsx)(u.w,{}):null})]})})}):null},_=e=>e?.smallImageUrl||e?.imageUrl,L=({event:e,rarityVerified:r,collectionName:t,eventTimestamp:s,isMobile:a})=>{const[i,o]=(0,h.useState)(!1),[l,c]=(0,h.useState)(!_(e.tokenMetadata));return(0,n.jsxs)(g.X2,{gap:"16",overflow:"hidden",whiteSpace:"nowrap",children:[l?(0,n.jsx)(E,{}):(0,n.jsx)(d.n,{as:"img",alt:e.tokenMetadata?.name||e.tokenId,src:_(e.tokenMetadata),draggable:!1,className:b.xr,style:{background:i?"none":"#24272e"},onLoad:()=>o(!0),onError:()=>c(!0)}),(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",overflow:"hidden",whiteSpace:"nowrap",marginRight:"24",children:[(0,n.jsx)(d.n,{className:b.oj,children:e.tokenMetadata?.name||e.tokenId}),e.tokenMetadata?.rarity&&!a&&(0,n.jsx)(P,{rarity:e.tokenMetadata?.rarity,rarityVerified:r,collectionName:t}),a&&s&&(0,x.F)(s.toString())]})]})}},3406:function(e,r,t){t.d(r,{F:function(){return n}});const n=e=>{const r=parseFloat(e),t=(new Date).getTime()-r,n=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4);return n>0?`${n} day${n>1?"s":""} ago`:s>0?`${s} hour${s>1?"s":""} ago`:a>1?`${a} minutes ago`:"Just now"}}}]);
//# sourceMappingURL=7749.16bcbc2f.chunk.js.map