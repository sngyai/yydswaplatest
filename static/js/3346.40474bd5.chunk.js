"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3346],{64850:function(e,t,i){i.d(t,{m:function(){return r}});var n=i(42893);const r=e=>(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:"#9B9B9B"})})},98947:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(42893),r=i(40508),a=i(87253),s=i(39839);const o=(0,a.default)(s.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,r._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function d({name:e,link:t}){return(0,n.jsxs)(o,{href:t,children:[e,(0,n.jsx)("sup",{children:"\u2197"})]})}},57669:function(e,t,i){i.r(t),i.d(t,{default:function(){return Ut}});var n=i(42893),r=i(19903),a=i(66196),s=i(69867),o=i(1152),d=i(12113),l=i(13712),c=i(79954);o.ZP`
  query Details($address: String!, $tokenId: String!) {
    nftAssets(address: $address, filter: { listed: false, tokenIds: [$tokenId] }) {
      edges {
        node {
          id
          name
          ownerAddress
          image {
            url
          }
          smallImage {
            url
          }
          originalImage {
            url
          }
          tokenId
          description
          animationUrl
          suspiciousFlag
          creator {
            address
            profileImage {
              url
            }
            isVerified
          }
          collection {
            name
            isVerified
            numAssets
            twitterName
            discordUrl
            homepageUrl
            image {
              url
            }
            nftContracts {
              address
              standard
            }
            description
          }
          listings(first: 1) {
            edges {
              node {
                address
                createdAt
                endAt
                id
                maker
                marketplace
                marketplaceUrl
                orderHash
                price {
                  currency
                  value
                }
                quantity
                startAt
                status
                taker
                tokenId
                type
                protocolParameters
              }
              cursor
            }
          }
          rarities {
            provider
            rank
            score
          }
          metadataUrl
          traits {
            name
            value
          }
        }
      }
    }
  }
`;var p=i(62329),m=i(98947),f=i(10362),h=i(35253),x=i(60120),u=i(17749),g=i(17669),y="_1cf9gnw1";const C=()=>(0,n.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:g.Z4.colors.neutral2,className:y}),(0,n.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:g.Z4.colors.neutral2,className:y}),(0,n.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:g.Z4.colors.neutral2,className:y})]});var w=i(80815),j=i(64850),b=i(48571),_=i(26030),v=i(5658),I=i(1004),N=i(41440),A=i(80657),k=i(87253),$=i(39839),T=i(83777),S=i(57482);const D=k.css`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
    z-index: 0;
  }
`,P=k.default.div.withConfig({displayName:"AssetPriceDetails__Container",componentId:"sc-b3406a1b-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,F=k.default.div.withConfig({displayName:"AssetPriceDetails__BestPriceContainer",componentId:"sc-b3406a1b-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
`,L=k.default.div.withConfig({displayName:"AssetPriceDetails__HeaderRow",componentId:"sc-b3406a1b-2"})`
  display: flex;
  justify-content: space-between;
`,H=k.default.div.withConfig({displayName:"AssetPriceDetails__PriceRow",componentId:"sc-b3406a1b-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,U=k.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButton",componentId:"sc-b3406a1b-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:t,useAccentColor:i})=>t?e.critical:i?e.accent1:e.surface3};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${D}
`,O=k.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-b3406a1b-5"})`
  position: relative;
`,B=(0,k.default)($.Tv.BodySecondary).withConfig({displayName:"AssetPriceDetails__Tertiary",componentId:"sc-b3406a1b-6"})`
  color: ${({theme:e})=>e.neutral3};
`,E=k.default.a.withConfig({displayName:"AssetPriceDetails__UploadLink",componentId:"sc-b3406a1b-7"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${p.c}
`,z=k.default.div.withConfig({displayName:"AssetPriceDetails__NotForSaleContainer",componentId:"sc-b3406a1b-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Z=k.default.div.withConfig({displayName:"AssetPriceDetails__DiscoveryContainer",componentId:"sc-b3406a1b-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,R=k.default.a.withConfig({displayName:"AssetPriceDetails__OwnerText",componentId:"sc-b3406a1b-10"})`
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;

  ${p.c}
`,M=k.default.div.withConfig({displayName:"AssetPriceDetails__OwnerInformationContainer",componentId:"sc-b3406a1b-11"})`
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,V=k.default.div.withConfig({displayName:"AssetPriceDetails__AssetInfoContainer",componentId:"sc-b3406a1b-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,X=k.default.div.withConfig({displayName:"AssetPriceDetails__AssetHeader",componentId:"sc-b3406a1b-13"})`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 535;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.neutral1};
`,G=k.default.div.withConfig({displayName:"AssetPriceDetails__CollectionNameContainer",componentId:"sc-b3406a1b-14"})`
  display: flex;
  justify-content: space-between;
`,W=k.default.span.withConfig({displayName:"AssetPriceDetails__CollectionHeader",componentId:"sc-b3406a1b-15"})`
  font-size: 16px;
  font-weight: 485;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${p.c};
`,q=k.default.span.withConfig({displayName:"AssetPriceDetails__VerifiedIconContainer",componentId:"sc-b3406a1b-16"})`
  position: relative;
`,Y=(0,k.default)(_.SA).withConfig({displayName:"AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-b3406a1b-17"})`
  position: absolute;
  top: 0px;
`,J=(0,k.default)(N.rU).withConfig({displayName:"AssetPriceDetails__DefaultLink",componentId:"sc-b3406a1b-18"})`
  text-decoration: none;
`,Q=(0,k.default)($.dL).withConfig({displayName:"AssetPriceDetails__MarketplaceIcon",componentId:"sc-b3406a1b-19"})`
  display: flex;
  align-items: center;
`,K=({asset:e})=>{const t=(0,A.s0)(),i=(0,v.$N)(),s=(0,v.aO)((e=>e.setProfilePageState)),o=(0,v.Pc)((e=>e.selectSellAsset)),c=(0,v.Pc)((e=>e.reset)),{formatEther:p,formatNumberOrString:m}=(0,S.Gb)(),f=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,h=f?.endAt?new Date(f.endAt):void 0,x=(0,l.useMemo)((()=>i&&e.floor_sell_order_price?i*e.floor_sell_order_price:void 0),[i,e.floor_sell_order_price]),u=(0,a.oO)(),g=()=>{c(),t("/nfts/profile"),o(e),(0,a._P)(r.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...u}),s(I.HA.LISTING)};return(0,n.jsxs)(F,{children:[(0,n.jsxs)(L,{children:[(0,n.jsx)($.Tv.SubHeader,{color:"accent1",children:f?"Your Price":"List for Sale"}),f&&(0,n.jsx)(Q,{href:f.marketplaceUrl,children:(0,d.Dp)(f.marketplace,"20")})]}),(0,n.jsx)(H,{children:f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)($.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[p({input:e.priceInfo?.ETHPrice,type:S.sw.NFTToken})," ","ETH"]}),x&&(0,n.jsx)($.Tv.BodySecondary,{lineHeight:"24px",children:m({input:x,type:S.sw.FiatNFTToken})})]}):(0,n.jsx)($.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),h&&(0,n.jsxs)($.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,d.zO)(h)]}),f?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(U,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:g,children:(0,n.jsx)($.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,n.jsx)(U,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:g,children:(0,n.jsx)($.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},ee=(0,k.default)(N.rU).withConfig({displayName:"AssetPriceDetails__StyledLink",componentId:"sc-b3406a1b-20"})`
  text-decoration: none;
  ${p.c}
`,te=({collectionName:e,collectionUrl:t})=>{const i=(0,k.useTheme)();return(0,n.jsx)(F,{children:(0,n.jsxs)(z,{children:[(0,n.jsx)(_.Io,{width:"79px",height:"79px",color:i.neutral3}),(0,n.jsx)($.Tv.SubHeader,{children:"Not for sale"}),(0,n.jsxs)(Z,{children:[(0,n.jsx)($.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,n.jsx)(ee,{to:`/nfts/collection/${t}`,children:(0,n.jsx)($.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},ie=({asset:e,collection:t})=>{const{account:i}=(0,w.useWeb3React)(),{formatEther:r,formatNumberOrString:a}=(0,S.Gb)(),s=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,o=s?.endAt?new Date(s.endAt):void 0,c=(0,v.cP)((e=>e.itemsInBag)),p=(0,v.cP)((e=>e.addAssetsToBag)),m=(0,v.cP)((e=>e.removeAssetsFromBag)),f=(0,v.cP)((e=>e.toggleBag)),h=(0,v.cP)((e=>e.bagExpanded)),x=(0,v.p6)(e),u=[{address:e.address,tokenId:e.tokenId}],{walletAssets:g}=(0,b.b)(i??"",[],u,1),y=(0,l.useMemo)((()=>g?.[0]),[g]),{assetInBag:C}=(0,l.useMemo)((()=>({assetInBag:c.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address))})),[e,c]),_=e.ownerAddress&&!!y&&i?.toLowerCase()===e.ownerAddress?.toLowerCase(),I=s&&e.priceInfo;return(0,n.jsxs)(P,{children:[(0,n.jsxs)(V,{children:[(0,n.jsxs)(G,{children:[(0,n.jsx)(J,{to:`/nfts/collection/${e.address}`,children:(0,n.jsxs)(W,{children:[t.collectionName,(0,n.jsx)(q,{children:t.isVerified&&(0,n.jsx)(Y,{})})]})}),(0,n.jsx)(E,{onClick:()=>{window.open((0,d.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,n.jsx)(j.m,{})})]}),(0,n.jsx)(X,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),_?(0,n.jsx)(K,{asset:y}):I?(0,n.jsxs)(F,{children:[(0,n.jsxs)(L,{children:[(0,n.jsx)($.Tv.SubHeader,{color:"accent1",children:"Best Price"}),(0,n.jsx)(Q,{href:s.marketplaceUrl,children:(0,d.Dp)(s.marketplace,"20")})]}),(0,n.jsxs)(H,{children:[(0,n.jsxs)($.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[r({input:e.priceInfo.ETHPrice,type:S.sw.NFTToken})," ETH"]}),x&&(0,n.jsx)($.Tv.BodySecondary,{lineHeight:"24px",children:a({input:x,type:S.sw.FiatNFTToken})})]}),o&&o>new Date&&(0,n.jsxs)(B,{fontSize:"14px",children:["Sale ends: ",(0,d.zO)(o)]}),(0,n.jsx)("div",{children:(0,n.jsx)(O,{children:(0,n.jsx)(U,{assetInBag:C,margin:!0,useAccentColor:!0,onClick:()=>{C?m([e]):p([e]),C||h||f()},children:(0,n.jsx)($.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:C?"Remove":"Add to Bag"})})})})})]}):(0,n.jsx)(te,{collectionName:t.collectionName??"this collection",collectionUrl:e.address}),I&&(0,n.jsxs)(M,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,n.jsx)($.Tv.BodySmall,{color:"neutral2",lineHeight:"20px",children:"Seller:"}),(0,n.jsx)(R,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,n.jsxs)("span",{children:[" ",_?"You":e.ownerAddress&&(0,T.Xn)(e.ownerAddress,2)]})})]})]})};var ne=i(2994),re=i(17380),ae=i(60858),se=i(46642),oe=i(12204),de=i(80343),le=i(61984),ce=i(3406);const pe=k.default.tr.withConfig({displayName:"AssetActivity__TR",componentId:"sc-b204afe-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.surface3}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,me=k.default.th.withConfig({displayName:"AssetActivity__TH",componentId:"sc-b204afe-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,fe=k.default.table.withConfig({displayName:"AssetActivity__Table",componentId:"sc-b204afe-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,he=k.default.td.withConfig({displayName:"AssetActivity__TD",componentId:"sc-b204afe-3"})`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,xe=k.default.div.withConfig({displayName:"AssetActivity__PriceContainer",componentId:"sc-b204afe-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,ue=k.default.a.withConfig({displayName:"AssetActivity__Link",componentId:"sc-b204afe-5"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.c}
`,ge=k.default.div.withConfig({displayName:"AssetActivity__ActivityContainer",componentId:"sc-b204afe-6"})`
  max-height: 310px;
  overflow: auto;

  ${p.Z}
`,ye=(0,k.default)(de.X).withConfig({displayName:"AssetActivity__LoadingCell",componentId:"sc-b204afe-7"})`
  height: 20px;
  width: 80px;
`,Ce=({children:e})=>(0,n.jsx)(ge,{id:"activityContainer",children:(0,n.jsxs)(fe,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)(me,{children:(0,n.jsx)(oe.cC,{id:"0pC/y6"})}),(0,n.jsx)(me,{children:(0,n.jsx)(oe.cC,{id:"a7u1N9"})}),(0,n.jsx)(me,{children:(0,n.jsx)(oe.cC,{id:"g+0MOn"})}),(0,n.jsx)(me,{children:(0,n.jsx)(oe.cC,{id:"/jQctM"})}),(0,n.jsx)(me,{children:(0,n.jsx)(oe.cC,{id:"LhMjLm"})})]})}),(0,n.jsx)("tbody",{children:e})]})}),we=({cellCount:e})=>(0,n.jsx)(pe,{children:Array(e).fill(null).map(((e,t)=>(0,n.jsx)(he,{children:(0,n.jsx)(ye,{})},t)))}),je=({rowCount:e})=>(0,n.jsx)(Ce,{children:Array(e).fill(null).map(((e,t)=>(0,n.jsx)(we,{cellCount:5},t)))});var be=({events:e})=>{const{formatNumberOrString:t}=(0,S.Gb)();return(0,n.jsx)(Ce,{children:e&&e.map(((e,i)=>{const{eventTimestamp:r,eventType:a,fromAddress:s,marketplace:o,price:l,toAddress:c,transactionHash:p}=e,m=l?t({input:parseFloat(l),type:S.sw.NFTToken}):null;return a?(0,n.jsxs)(pe,{children:[(0,n.jsx)(he,{children:(0,n.jsx)(le.VM,{eventType:a,eventTimestamp:r,eventTransactionHash:p,eventOnly:!0})}),(0,n.jsx)(he,{children:m&&(0,n.jsxs)(xe,{children:[o&&(0,d.Dp)(o,"16"),m," ETH"]})}),(0,n.jsx)(he,{children:s&&(0,n.jsx)(ue,{href:`https://etherscan.io/address/${s}`,target:"_blank",rel:"noopener noreferrer",children:(0,T.Xn)(s,2)})}),(0,n.jsx)(he,{children:c&&(0,n.jsx)(ue,{href:`https://etherscan.io/address/${c}`,target:"_blank",rel:"noopener noreferrer",children:(0,T.Xn)(c,2)})}),(0,n.jsx)(he,{children:r&&(0,ce.F)(r.toString())})]},i):null}))})},_e=(i(98303),i(46912),"_1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53"),ve=i(38641),Ie=i(26);const Ne=k.default.div.withConfig({displayName:"DetailsContainer__Details",componentId:"sc-de46507c-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ae=k.default.div.withConfig({displayName:"DetailsContainer__Header",componentId:"sc-de46507c-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
`,ke=k.default.div.withConfig({displayName:"DetailsContainer__Body",componentId:"sc-de46507c-2"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,$e=k.default.span.withConfig({displayName:"DetailsContainer__Center",componentId:"sc-de46507c-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${p.c}
`,Te=k.default.a.withConfig({displayName:"DetailsContainer__CreatorLink",componentId:"sc-de46507c-4"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.c}
`,Se=(0,k.default)(Ie.Z).withConfig({displayName:"DetailsContainer__CopyIcon",componentId:"sc-de46507c-5"})`
  cursor: pointer;
`,De=({header:e,body:t})=>(0,n.jsxs)("div",{children:[(0,n.jsx)(Ae,{children:e}),(0,n.jsx)(ke,{children:t})]});var Pe=({asset:e,collection:t})=>{const{formatNumber:i}=(0,S.Gb)(),{address:r,tokenId:a,tokenType:s,creator:o}=e,{totalSupply:d}=t,[,c]=(0,ve.Z)(),p=(0,l.useCallback)((()=>{c(r??"")}),[r,c]);return(0,n.jsxs)(Ne,{children:[(0,n.jsx)(De,{header:"Contract address",body:(0,n.jsxs)($e,{onClick:p,children:[(0,T.Xn)(r,2)," ",(0,n.jsx)(Se,{size:13})]})}),(0,n.jsx)(De,{header:"Token ID",body:a.length>9?(m=a,`${m.substring(0,4)}...${m.substring(m.length-4,m.length)}`):a}),(0,n.jsx)(De,{header:"Token standard",body:s}),(0,n.jsx)(De,{header:"Blockchain",body:"Ethereum"}),(0,n.jsx)(De,{header:"Total supply",body:`${i({input:d??0,type:S.sw.WholeNumber})}`}),(0,n.jsx)(De,{header:"Creator",body:o?.address&&(0,n.jsx)(Te,{href:`https://etherscan.io/address/${o.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,T.Xn)(o.address,2)})})]});var m},Fe=i(96315),Le=i(83931);const He=k.default.div.withConfig({displayName:"InfoContainer__Header",componentId:"sc-cc63c57f-0"})`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.surface1};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:t}}})=>k.css`background-color ${e.medium} ${t.ease}`};
`,Ue=k.default.span.withConfig({displayName:"InfoContainer__PrimaryHeader",componentId:"sc-cc63c57f-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  line-height: 28px;
  font-size: 20px;
`,Oe=k.default.span.withConfig({displayName:"InfoContainer__SecondaryHeader",componentId:"sc-cc63c57f-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,Be=k.default.span.withConfig({displayName:"InfoContainer__SecondaryHeaderContainer",componentId:"sc-cc63c57f-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.neutral1};
`,Ee=k.default.div.withConfig({displayName:"InfoContainer__ContentContainer",componentId:"sc-cc63c57f-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.surface1};
`;var ze=({children:e,primaryHeader:t,secondaryHeader:i,defaultOpen:r,...a})=>{const[s,o]=(0,l.useState)(!!r);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(He,{...a,isOpen:s,onClick:()=>o(!s),children:[(0,n.jsxs)(Ue,{children:[t," ",(0,n.jsx)(Oe,{children:i})]}),(0,n.jsx)(Be,{children:s?(0,n.jsx)(Fe.Z,{}):(0,n.jsx)(Le.Z,{})})]}),s&&(0,n.jsx)(Ee,{children:e})]})},Ze=i(37515);const Re=k.default.div.withConfig({displayName:"TraitsContainer__Grid",componentId:"sc-87c51ec6-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,Me=(0,k.default)(N.rU).withConfig({displayName:"TraitsContainer__GridItemContainer",componentId:"sc-87c51ec6-1"})`
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${p.c}
  min-width: 0;
`,Ve=k.default.div.withConfig({displayName:"TraitsContainer__TraitType",componentId:"sc-87c51ec6-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,Xe=k.default.div.withConfig({displayName:"TraitsContainer__TraitValue",componentId:"sc-87c51ec6-3"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,Ge=({trait:e,collectionAddress:t})=>{const{trait_type:i,trait_value:r}=e,a=Ze.stringify({traits:[`("${i}","${r}")`]},{arrayFormat:"comma"});return(0,n.jsxs)(Me,{to:`/nfts/collection/${t}?${a}`,children:[(0,n.jsx)(Ve,{children:i}),(0,n.jsx)(Xe,{children:r})]})};var We=({asset:e})=>{const t=(0,l.useMemo)((()=>e.traits?.sort(((e,t)=>e.trait_type.localeCompare(t.trait_type)))),[e]);return(0,n.jsx)(Re,{children:t?.map((t=>(0,n.jsx)(Ge,{trait:t,collectionAddress:e.address},t.trait_type)))})};const qe=k.default.div.withConfig({displayName:"AssetDetails__AssetPriceDetailsContainer",componentId:"sc-2f81a59c-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,Ye=k.default.div.withConfig({displayName:"AssetDetails__MediaContainer",componentId:"sc-2f81a59c-1"})`
  display: flex;
  justify-content: center;
`,Je=k.default.div.withConfig({displayName:"AssetDetails__Column",componentId:"sc-2f81a59c-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,Qe=k.default.a.withConfig({displayName:"AssetDetails__AddressTextLink",componentId:"sc-2f81a59c-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${p.c};
`,Ke=k.default.div.withConfig({displayName:"AssetDetails__SocialsContainer",componentId:"sc-2f81a59c-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,et=k.default.div.withConfig({displayName:"AssetDetails__DescriptionText",componentId:"sc-2f81a59c-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,tt=k.default.span.withConfig({displayName:"AssetDetails__RarityWrap",componentId:"sc-2f81a59c-6"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,it=k.default.div.withConfig({displayName:"AssetDetails__EmptyActivitiesContainer",componentId:"sc-2f81a59c-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral1};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,nt=(0,k.default)(N.rU).withConfig({displayName:"AssetDetails__Link",componentId:"sc-2f81a59c-8"})`
  color: ${({theme:e})=>e.accent1};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${p.c};
`,rt=k.default.div.withConfig({displayName:"AssetDetails__ActivitySelectContainer",componentId:"sc-2f81a59c-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${p.Z}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,at=k.default.div.withConfig({displayName:"AssetDetails__ContentNotAvailable",componentId:"sc-2f81a59c-10"})`
  display: flex;
  background-color: ${({theme:e})=>e.surface1};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,st=k.default.div.withConfig({displayName:"AssetDetails__FilterBox",componentId:"sc-2f81a59c-11"})`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 535;
  line-height: 14px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${p.c};
`,ot=k.default.span.withConfig({displayName:"AssetDetails__ByText",componentId:"sc-2f81a59c-12"})`
  font-size: 14px;
  line-height: 20px;
`,dt=k.default.img.withConfig({displayName:"AssetDetails__Img",componentId:"sc-2f81a59c-13"})`
  background-color: white;
`,lt=k.default.div.withConfig({displayName:"AssetDetails__HoverImageContainer",componentId:"sc-2f81a59c-14"})`
  display: flex;
  margin-right: 4px;
`,ct=k.default.div.withConfig({displayName:"AssetDetails__HoverContainer",componentId:"sc-2f81a59c-15"})`
  display: flex;
`,pt=k.default.span.withConfig({displayName:"AssetDetails__ContainerText",componentId:"sc-2f81a59c-16"})`
  font-size: 14px;
`,mt=({imageUrl:e,animationUrl:t,name:i,collectionName:r,dominantColor:a})=>(0,n.jsxs)(x.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,n.jsx)(x.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:t}),(0,n.jsx)("img",{className:_e,src:e,alt:i||r,style:{"--shadow":`rgba(${a.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),ft={[I.n$.Listing]:!0,[I.n$.Sale]:!0,[I.n$.Transfer]:!1,[I.n$.CancelListing]:!1};var ht;!function(e){e.Audio="audio",e.Video="video",e.Image="image",e.Embed="embed"}(ht||(ht={}));const xt=({mediaType:e,asset:t,dominantColor:i})=>{const r={"--shadow":`rgba(${i.join(", ")}, 0.5)`};switch(e){case ht.Video:return(0,n.jsx)("video",{src:t.animationUrl,className:_e,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:r});case ht.Image:return(0,n.jsx)("img",{className:_e,src:t.imageUrl,alt:t.name||t.collectionName,style:r});case ht.Audio:return(0,n.jsx)(mt,{...t,dominantColor:i});case ht.Embed:return(0,n.jsx)("div",{className:"_1yohfdw2",children:(0,n.jsx)("iframe",{title:t.name??`${t.collectionName} #${t.tokenId}`,src:t.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",style:r,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},ut=({asset:e,collection:t})=>{const{formatNumberOrString:i}=(0,S.Gb)(),[r]=(0,l.useState)([0,0,0]),{rarityProvider:a}=(0,l.useMemo)((()=>e.rarity?{rarityProvider:e?.rarity?.providers?.find((({provider:t})=>t===e.rarity?.primaryProvider))}:{}),[e.rarity]),s=(0,l.useMemo)((()=>(0,re.F)(e.animationUrl??"")?ht.Audio:(0,ae.W)(e.animationUrl??"")?ht.Video:e.animationUrl?ht.Embed:ht.Image),[e]),{address:o,tokenId:d}=e,{nftActivity:p}=(0,h.m)({activityTypes:[c.y3.Sale],address:o,tokenId:d},1,"no-cache"),x=p?.[0]?.price,y=x?i({input:parseFloat(x),type:S.sw.NFTToken}):void 0,[w,j]=(0,l.useReducer)(u.YQ,ft),b=(0,l.useCallback)((function({eventType:e}){const t=w[e];return(0,n.jsx)(st,{backgroundColor:t?g.gR.color.surface1:g.Z4.colors.surface3,onClick:()=>j({eventType:e}),children:e===I.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[w]),{nftActivity:_,hasNext:v,loadMore:N,loading:A,error:k}=(0,h.m)({activityTypes:Object.keys(w).map((e=>e)).filter((e=>w[e])),address:o,tokenId:d},25),$=e?.rarity?.providers?.[0],[D,P]=(0,l.useState)(!1);return(0,n.jsxs)(Je,{children:[(0,n.jsx)(Ye,{children:void 0===e.imageUrl||D?(0,n.jsx)(at,{children:"Content not available yet"}):s===ht.Image?(0,n.jsx)(dt,{className:_e,src:e.imageUrl,alt:e.name||t.collectionName,onError:()=>P(!0)}):(0,n.jsx)(xt,{asset:e,mediaType:s,dominantColor:r})}),(0,n.jsx)(qe,{children:(0,n.jsx)(ie,{asset:e,collection:t})}),e.traits&&(0,n.jsx)(ze,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:a&&$&&$.score?(0,n.jsx)(f.ud,{text:(0,n.jsxs)(ct,{children:[(0,n.jsx)(lt,{children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(pt,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(tt,{children:["Rarity: ",i({input:$.score,type:S.sw.WholeNumber})]})}):null,children:(0,n.jsx)(We,{asset:e})}),(0,n.jsx)(ze,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:y?`Last Sale: ${y} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(rt,{$isHorizontalScroll:!0,children:[(0,n.jsx)(b,{eventType:I.n$.Listing}),(0,n.jsx)(b,{eventType:I.n$.Sale}),(0,n.jsx)(b,{eventType:I.n$.Transfer}),(0,n.jsx)(b,{eventType:I.n$.CancelListing})]}),A?(0,n.jsx)(je,{rowCount:10}):_&&_.length>0?(0,n.jsx)(se.Z,{next:N,hasMore:!!v,loader:A&&(0,n.jsx)(ne.M5,{children:(0,n.jsx)(C,{})}),dataLength:_?.length??0,scrollableTarget:"activityContainer",children:(0,n.jsx)(be,{events:_})}):(0,n.jsx)(n.Fragment,{children:!k&&_&&(0,n.jsxs)(it,{children:[(0,n.jsx)("div",{children:"No activities yet"}),(0,n.jsx)(nt,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,n.jsx)(ze,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ot,{children:"By "}),e?.creator&&e.creator?.address&&(0,n.jsx)(Qe,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,T.Xn)(e.creator.address,2)}),(0,n.jsx)(et,{"data-testid":"nft-details-description-text",children:t.collectionDescription}),(0,n.jsxs)(Ke,{children:[t.externalUrl&&(0,n.jsx)(m.Z,{name:"Website",link:`${t.externalUrl}`}),t.twitterUrl&&(0,n.jsx)(m.Z,{name:"Twitter",link:`https://twitter.com/${t.twitterUrl}`}),t.discordUrl&&(0,n.jsx)(m.Z,{name:"Discord",link:t.discordUrl})]})]})}),(0,n.jsx)(ze,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,n.jsx)(Pe,{asset:e,collection:t})})]})};var gt=i(60476),yt=i(25575),Ct=i(18683);const wt="960px",jt=(0,k.default)(de.X).withConfig({displayName:"AssetDetailsLoading__Title",componentId:"sc-d1f2fecc-0"})`
  height: 16px;
  width: 136px;
`,bt=(0,k.default)(de.X).withConfig({displayName:"AssetDetailsLoading__SubTitle",componentId:"sc-d1f2fecc-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${wt}) {
    width: 100%;
  }
`,_t=(0,k.default)(de.X).withConfig({displayName:"AssetDetailsLoading__Seller",componentId:"sc-d1f2fecc-2"})`
  height: 16px;
  width: 40px;
`,vt=(0,k.default)(de.X).withConfig({displayName:"AssetDetailsLoading__SellerAddress",componentId:"sc-d1f2fecc-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,It=(0,k.default)(de.X).withConfig({displayName:"AssetDetailsLoading__PrimaryBody",componentId:"sc-d1f2fecc-4"})`
  width: 100%;
  height: 260px;
`,Nt=(0,k.default)(de.X).withConfig({displayName:"AssetDetailsLoading__ActivityLoader",componentId:"sc-d1f2fecc-5"})`
  width: 100%;
  height: 428px;
`,At=(0,k.default)(gt.ZP).withConfig({displayName:"AssetDetailsLoading__PrimaryContent",componentId:"sc-d1f2fecc-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${wt}) {
    max-width: 100%;
  }
`,kt=k.default.div.withConfig({displayName:"AssetDetailsLoading__LoaderContainer",componentId:"sc-d1f2fecc-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,$t=(0,k.default)(de.X).withConfig({displayName:"AssetDetailsLoading__BuyNowContainer",componentId:"sc-d1f2fecc-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${wt}) {
    width: 100%;
  }
`,Tt=k.default.div.withConfig({displayName:"AssetDetailsLoading__LoadingContainer",componentId:"sc-d1f2fecc-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${Ct.bc}

  @media (max-width: ${wt}) {
    max-width: 100%;
    margin-top: 0;
  }
`,St=(0,k.default)(gt.ZP).withConfig({displayName:"AssetDetailsLoading__StyledColumn",componentId:"sc-d1f2fecc-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${wt}) {
    max-width: 100%;
  }
`,Dt=(0,k.default)(gt.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-d1f2fecc-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${wt}) {
    display: none;
  }
`,Pt=(0,k.default)(gt.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-d1f2fecc-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${wt}) {
    display: flex;
  }
`,Ft=()=>{const e=(0,k.useTheme)();return(0,n.jsxs)(Tt,{children:[(0,n.jsxs)(St,{children:[(0,n.jsx)(kt,{children:(0,n.jsx)(yt.ZP,{stroke:e.accent1,size:"40px"})}),(0,n.jsxs)(Pt,{children:[(0,n.jsxs)(gt.ZP,{children:[(0,n.jsx)(jt,{}),(0,n.jsx)(bt,{})]}),(0,n.jsx)($t,{}),(0,n.jsxs)(gt.ZP,{children:[(0,n.jsx)(_t,{}),(0,n.jsx)(vt,{})]})]}),(0,n.jsxs)(At,{children:[(0,n.jsx)(It,{}),(0,n.jsx)(Nt,{}),(0,n.jsx)(It,{}),(0,n.jsx)(It,{})]})]}),(0,n.jsxs)(Dt,{children:[(0,n.jsxs)(gt.ZP,{children:[(0,n.jsx)(jt,{}),(0,n.jsx)(bt,{})]}),(0,n.jsx)($t,{}),(0,n.jsxs)(gt.ZP,{children:[(0,n.jsx)(_t,{}),(0,n.jsx)(vt,{})]})]})]})},Lt=k.default.div.withConfig({displayName:"Asset__AssetContainer",componentId:"sc-8bdece75-0"})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,Ht=k.default.div.withConfig({displayName:"Asset__AssetPriceDetailsContainer",componentId:"sc-8bdece75-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`;var Ut=()=>{const{tokenId:e="",contractAddress:t=""}=(0,A.UO)(),{data:i,loading:o}=function(e,t){const{data:i,loading:n}=(0,c.xw)({variables:{address:e,tokenId:t}}),r=i?.nftAssets?.edges[0]?.node,a=r?.collection,o=r?.listings?.edges[0]?.node,p=(0,s.parseEther)((0,d.K3)(o?.price?.value?.toString()??"0")).toString();return(0,l.useMemo)((()=>({data:[{id:r?.id,address:e,notForSale:null===r?.listings,collectionName:r?.collection?.name,collectionSymbol:r?.collection?.image?.url,imageUrl:r?.image?.url,animationUrl:r?.animationUrl,marketplace:o?.marketplace.toLowerCase(),name:r?.name,priceInfo:{ETHPrice:p,baseAsset:"ETH",baseDecimals:"18",basePrice:p},susFlag:r?.suspiciousFlag,sellorders:r?.listings?.edges.map((e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0}))),smallImageUrl:r?.smallImage?.url,tokenId:t,tokenType:r?.collection?.nftContracts?.[0]?.standard,collectionIsVerified:r?.collection?.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:r?.rarities?.map((e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"})))},ownerAddress:r?.ownerAddress,creator:{profile_img_url:r?.creator?.profileImage?.url??"",address:r?.creator?.address??""},metadataUrl:r?.metadataUrl??"",traits:r?.traits?.map((e=>({trait_type:e.name??"",trait_value:e.value??""})))},{collectionDescription:a?.description,collectionImageUrl:a?.image?.url,collectionName:a?.name,isVerified:a?.isVerified,totalSupply:a?.numAssets,twitterUrl:a?.twitterName,discordUrl:a?.discordUrl,externalUrl:a?.homepageUrl}],loading:n})),[e,r,a,p,o?.marketplace,n,t])}(t,e),[p,m]=i;return o?(0,n.jsx)(Ft,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.fM,{page:r.yJ.NFT_DETAILS_PAGE,properties:{collection_address:t,token_id:e},shouldLogImpression:!0,children:p&&m?(0,n.jsxs)(Lt,{children:[(0,n.jsx)(ut,{collection:m,asset:p}),(0,n.jsx)(Ht,{children:(0,n.jsx)(ie,{collection:m,asset:p})})]}):null})})}},4579:function(e){var t="%[a-f0-9]{2}",i=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function r(e,t){try{return[decodeURIComponent(e.join(""))]}catch(a){}if(1===e.length)return e;t=t||1;var i=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],r(i),r(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(i)||[],n=1;n<t.length;n++)t=(e=r(t,n).join("")).match(i)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var i={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=n.exec(e);r;){try{i[r[0]]=decodeURIComponent(r[0])}catch(t){var s=a(r[0]);s!==r[0]&&(i[r[0]]=s)}r=n.exec(e)}i["%C2"]="\ufffd";for(var o=Object.keys(i),d=0;d<o.length;d++){var l=o[d];e=e.replace(new RegExp(l,"g"),i[l])}return e}(e)}}},27283:function(e){e.exports=function(e,t){for(var i={},n=Object.keys(e),r=Array.isArray(t),a=0;a<n.length;a++){var s=n[a],o=e[s];(r?-1!==t.indexOf(s):t(s,o,e))&&(i[s]=o)}return i}},37515:function(e,t,i){const n=i(24134),r=i(4579),a=i(87175),s=i(27283),o=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function c(e,t){return t.decode?r(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function m(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const i=function(e){let t;switch(e.arrayFormat){case"index":return(e,i,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=i):n[e]=i};case"bracket":return(e,i,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],i):n[e]=[i]:n[e]=i};case"colon-list-separator":return(e,i,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],i):n[e]=[i]:n[e]=i};case"comma":case"separator":return(t,i,n)=>{const r="string"==typeof i&&i.includes(e.arrayFormatSeparator),a="string"==typeof i&&!r&&c(i,e).includes(e.arrayFormatSeparator);i=a?c(i,e):i;const s=r||a?i.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===i?i:c(i,e);n[t]=s};case"bracket-separator":return(t,i,n)=>{const r=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!r)return void(n[t]=i?c(i,e):i);const a=null===i?[]:i.split(e.arrayFormatSeparator).map((t=>c(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,i)=>{void 0!==i[e]?i[e]=[].concat(i[e],t):i[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const r of e.split("&")){if(""===r)continue;let[e,s]=a(t.decode?r.replace(/\+/g," "):r,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?s:c(s,t),i(c(e,t),s,n)}for(const r of Object.keys(n)){const e=n[r];if("object"==typeof e&&null!==e)for(const i of Object.keys(e))e[i]=h(e[i],t);else n[r]=h(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const i=n[t];return Boolean(i)&&"object"==typeof i&&!Array.isArray(i)?e[t]=p(i):e[t]=i,e}),Object.create(null))}t.extract=f,t.parse=x,t.stringify=(e,t)=>{if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const i=i=>t.skipNull&&null==e[i]||t.skipEmptyString&&""===e[i],n=function(e){switch(e.arrayFormat){case"index":return t=>(i,n)=>{const r=i.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,[l(t,e),"[",r,"]"].join("")]:[...i,[l(t,e),"[",l(r,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,[l(t,e),"[]"].join("")]:[...i,[l(t,e),"[]=",l(n,e)].join("")];case"colon-list-separator":return t=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,[l(t,e),":list="].join("")]:[...i,[l(t,e),":list=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return i=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:(r=null===r?"":r,0===n.length?[[l(i,e),t,l(r,e)].join("")]:[[n,l(r,e)].join(e.arrayFormatSeparator)])}default:return t=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,l(t,e)]:[...i,[l(t,e),"=",l(n,e)].join("")]}}(t),r={};for(const s of Object.keys(e))i(s)||(r[s]=e[s]);const a=Object.keys(r);return!1!==t.sort&&a.sort(t.sort),a.map((i=>{const r=e[i];return void 0===r?"":null===r?l(i,t):Array.isArray(r)?0===r.length&&"bracket-separator"===t.arrayFormat?l(i,t)+"[]":r.reduce(n(i),[]).join("&"):l(i,t)+"="+l(r,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[i,n]=a(e,"#");return Object.assign({url:i.split("?")[0]||"",query:x(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:c(n,t)}:{})},t.stringifyUrl=(e,i)=>{i=Object.assign({encode:!0,strict:!0,[o]:!0},i);const n=m(e.url).split("?")[0]||"",r=t.extract(e.url),a=t.parse(r,{sort:!1}),s=Object.assign(a,e.query);let d=t.stringify(s,i);d&&(d=`?${d}`);let c=function(e){let t="";const i=e.indexOf("#");return-1!==i&&(t=e.slice(i)),t}(e.url);return e.fragmentIdentifier&&(c=`#${i[o]?l(e.fragmentIdentifier,i):e.fragmentIdentifier}`),`${n}${d}${c}`},t.pick=(e,i,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[o]:!1},n);const{url:r,query:a,fragmentIdentifier:d}=t.parseUrl(e,n);return t.stringifyUrl({url:r,query:s(a,i),fragmentIdentifier:d},n)},t.exclude=(e,i,n)=>{const r=Array.isArray(i)?e=>!i.includes(e):(e,t)=>!i(e,t);return t.pick(e,r,n)}},87175:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const i=e.indexOf(t);return-1===i?[e]:[e.slice(0,i),e.slice(i+t.length)]}},24134:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=3346.40474bd5.chunk.js.map