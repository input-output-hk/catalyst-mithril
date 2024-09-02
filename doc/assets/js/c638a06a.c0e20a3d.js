"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[9489],{71802:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(74848),r=i(28453);const s={title:"Genesis Certificate support added",authors:[{name:"Mithril Team"}],tags:["genesis","certificate","breaking-change"]},a=void 0,o={permalink:"/doc/dev-blog/2022/09/07/genesis-certificate-feature",source:"@site/blog/2022-09-07-genesis-certificate-feature.md",title:"Genesis Certificate support added",description:"Update: The PR has been merged and the feature is being deployed on the GCP Mithril Aggregator.",date:"2022-09-07T00:00:00.000Z",tags:[{inline:!0,label:"genesis",permalink:"/doc/dev-blog/tags/genesis"},{inline:!0,label:"certificate",permalink:"/doc/dev-blog/tags/certificate"},{inline:!0,label:"breaking-change",permalink:"/doc/dev-blog/tags/breaking-change"}],readingTime:1.12,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Genesis Certificate support added",authors:[{name:"Mithril Team"}],tags:["genesis","certificate","breaking-change"]},unlisted:!1,prevItem:{title:"Signers list computation in Certificates",permalink:"/doc/dev-blog/2022/09/12/certificate-signers-list"}},h={authorsImageUrls:[void 0]},l=[{value:"This afternoon, we plan to merge the PR that activates the Genesis Certificate feature on the GCP Mithril Aggregator",id:"this-afternoon-we-plan-to-merge-the-pr-that-activates-the-genesis-certificate-feature-on-the-gcp-mithril-aggregator",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Update"}),": The PR has been merged and the feature is being deployed on the GCP Mithril Aggregator."]}),"\n",(0,n.jsx)(t.h3,{id:"this-afternoon-we-plan-to-merge-the-pr-that-activates-the-genesis-certificate-feature-on-the-gcp-mithril-aggregator",children:"This afternoon, we plan to merge the PR that activates the Genesis Certificate feature on the GCP Mithril Aggregator"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"PR"}),": ",(0,n.jsx)(t.code,{children:"Implement Real Genesis Certificate"})," ",(0,n.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/pull/438",children:"#438"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Issue"}),": ",(0,n.jsx)(t.code,{children:"Bootstrap Certificate Chain w/ Genesis Certificate"})," ",(0,n.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues/364",children:"#364"})]}),"\n",(0,n.jsx)(t.p,{children:"This will involve some manual operations that will prevent temporarily the service to be running:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["We will have to reset the stores of the ",(0,n.jsx)(t.code,{children:"Snapshots"})," and ",(0,n.jsx)(t.code,{children:"Certificates"}),". This means that the ",(0,n.jsx)(t.a,{href:"https://mithril.network/explorer/",children:"Mithril Explorer"})," will display a ",(0,n.jsx)(t.code,{children:"No snapshot available"})," message."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The Mithril Signers will have to wait until the next epoch ",(0,n.jsx)(t.code,{children:"#30"})," to be able to sign. This means that we should see the first available ",(0,n.jsx)(t.code,{children:"Snapshot"})," 1 hour after the epoch transition."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The SPOs that are currently running a Mithril Signer will have to recompile their node in order ot take advantage of the latest improvements (such as the registration of the nodes that will take few minutes instead of few hours). However, the previously compiled node will be able to contribute to signatures."}),"\n",(0,n.jsxs)(t.p,{children:["In order to restore a Mithril Snapshot, a Mithril Client will now need access to the ",(0,n.jsx)(t.code,{children:"Genesis Verification Key"})," by adding an environment variable when running: ",(0,n.jsx)(t.code,{children:"GENESIS_VERIFICATION_KEY=$(wget -q -O - https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Feel free to reach out to us on the ",(0,n.jsx)(t.a,{href:"https://discord.gg/5kaErDKDRq",children:"Discord channel"})," for questions and/or help."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);