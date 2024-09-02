"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[9244],{39239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(74848),i=n(28453);const a={title:"Mithril client CLI 'snapshot' command is removed",authors:[{name:"Mithril Team"}],tags:["mithril client","cli","removed","command","snapshot"]},s=void 0,r={permalink:"/doc/dev-blog/2024/06/12/client-cli-removed-command",source:"@site/blog/2024-06-12-client-cli-removed-command.md",title:"Mithril client CLI 'snapshot' command is removed",description:"The 'snapshot' command of the client CLI is removed",date:"2024-06-12T00:00:00.000Z",tags:[{inline:!0,label:"mithril client",permalink:"/doc/dev-blog/tags/mithril-client"},{inline:!0,label:"cli",permalink:"/doc/dev-blog/tags/cli"},{inline:!0,label:"removed",permalink:"/doc/dev-blog/tags/removed"},{inline:!0,label:"command",permalink:"/doc/dev-blog/tags/command"},{inline:!0,label:"snapshot",permalink:"/doc/dev-blog/tags/snapshot"}],readingTime:.665,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Mithril client CLI 'snapshot' command is removed",authors:[{name:"Mithril Team"}],tags:["mithril client","cli","removed","command","snapshot"]},unlisted:!1,prevItem:{title:"Certification of Cardano transactions",permalink:"/doc/dev-blog/2024/07/30/cardano-transaction-certification"},nextItem:{title:"Mithril client CLI 'snapshot' command is deprecated",permalink:"/doc/dev-blog/2024/03/26/client-cli-deprecated-command"}},c={authorsImageUrls:[void 0]},l=[{value:"The &#39;snapshot&#39; command of the client CLI is removed",id:"the-snapshot-command-of-the-client-cli-is-removed",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"the-snapshot-command-of-the-client-cli-is-removed",children:"The 'snapshot' command of the client CLI is removed"}),"\n",(0,o.jsxs)(t.p,{children:["With the release of the new distribution ",(0,o.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/releases/tag/2423.0",children:"2423"}),", we have removed the ",(0,o.jsx)(t.strong,{children:"snapshot"})," command of the ",(0,o.jsx)(t.strong,{children:"client CLI"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"snapshot"})," command has been superseded by the ",(0,o.jsx)(t.strong,{children:"cardano-db snapshot"})," command."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"snapshot"})," command has been deprecated with the release ",(0,o.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/releases/tag/2412.0",children:"2412"}),", and this has been announced in this ",(0,o.jsx)(t.a,{href:"https://mithril.network/doc/dev-blog/2024/03/26/client-cli-deprecated-command",children:"post"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"In order to proceed to the upgrade, install the latest stable client CLI, and replace the removed command with the new command, e.g.:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"mithril-client -vvv snapshot download latest --json\n"})}),"\n",(0,o.jsx)(t.p,{children:"Should be replaced with"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"mithril-client -vvv cardano-db snapshot download latest --json\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The documentation of the ",(0,o.jsx)(t.strong,{children:"client CLI"})," has been updated accordingly and can be found ",(0,o.jsx)(t.a,{href:"https://mithril.network/doc/manual/developer-docs/nodes/mithril-client#cardano-db",children:"here"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["For any inquiries or assistance, don't hesitate to reach out to the team on the ",(0,o.jsx)(t.a,{href:"https://discord.gg/5kaErDKDRq",children:"Discord channel"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(96540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);