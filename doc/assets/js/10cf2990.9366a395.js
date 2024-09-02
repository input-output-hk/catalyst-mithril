"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[6411],{79225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(74848),t=s(28453);const r={slug:3,title:"3. Release process and versioning\n",authors:[{name:"Mithril Team"}],tags:["Accepted"],date:new Date("2022-10-21T00:00:00.000Z")},a=void 0,l={permalink:"/doc/adr/3",source:"@site/adr/003-release/index.md",title:"3. Release process and versioning\n",description:"Status",date:"2022-10-21T00:00:00.000Z",tags:[{inline:!0,label:"Accepted",permalink:"/doc/adr/tags/accepted"}],readingTime:2.995,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{slug:"3",title:"3. Release process and versioning\n",authors:[{name:"Mithril Team"}],tags:["Accepted"],date:"2022-10-21T00:00:00.000Z"},unlisted:!1,prevItem:{title:"4. Mithril Network Upgrade Strategy\n",permalink:"/doc/adr/4"},nextItem:{title:"2. Use simple structured logging\n",permalink:"/doc/adr/2"}},o={authorsImageUrls:[void 0]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Versioning",id:"versioning",level:3},{value:"Release process",id:"release-process",level:3},{value:"Decision",id:"decision",level:2},{value:"Release Process",id:"release-process-1",level:3},{value:"Hotfix Release",id:"hotfix-release",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.p,{children:"Accepted"}),"\n",(0,i.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(n.p,{children:"In order to deliver regularly the software to our users, we should implement a release process based on a predictable versioning scheme."}),"\n",(0,i.jsx)(n.h3,{id:"versioning",children:"Versioning"}),"\n",(0,i.jsx)(n.p,{children:"A Release Version determines a distribution of determined node versions and underlying libraries."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Our softwares must be able to interact seamlessly with other Mithril software."}),"\n",(0,i.jsx)(n.li,{children:"Our softwares must be able to be hosted on crates.io."}),"\n",(0,i.jsx)(n.li,{children:"Our softwares must clearly indicate compatibility with other Mithril components to end users."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"release-process",children:"Release process"}),"\n",(0,i.jsx)(n.p,{children:"A Release is a software package that is built once and then promoted from the testing environment to the production environment. It can be signed."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keep it simple."}),"\n",(0,i.jsx)(n.li,{children:"Automated as much as possible: all points not requiring human decision shall be automated."}),"\n",(0,i.jsx)(n.li,{children:"Minimize the mean time to release."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsx)(n.p,{children:"There are 3 versioned layers in the Mithril stack:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTTP API protocol to ensure compatibility in the communication between nodes (use Semver)."}),"\n",(0,i.jsx)(n.li,{children:"Crate version: each node & library has its own version (use Semver). The commit digest is automatically added to the version by the CI pipeline."}),"\n",(0,i.jsxs)(n.li,{children:["Release Version: the distribution version (use version scheme ",(0,i.jsx)(n.strong,{children:"YYWW.patch"})," | ",(0,i.jsx)(n.strong,{children:"YYWW.patch-name"}),"). The VERSION file is computed by the pipeline from the tag release."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The documentation is tied to a Release Version."}),"\n",(0,i.jsx)(n.h3,{id:"release-process-1",children:"Release Process"}),"\n",(0,i.jsx)(n.p,{children:"Starting just after a new release has been made:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Develop on a dedicated development branch."}),"\n",(0,i.jsxs)(n.li,{children:["When merging PR on main: update the ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," files with version of the updated nodes."]}),"\n",(0,i.jsxs)(n.li,{children:["Once merged, the CI creates an ",(0,i.jsx)(n.code,{children:"unstable"})," tag & release which is deployed on testing environment."]}),"\n",(0,i.jsxs)(n.li,{children:["Push a tag using the distribution version format on this commit with a ",(0,i.jsx)(n.code,{children:"-prerelease"})," suffix."]}),"\n",(0,i.jsxs)(n.li,{children:["The CI gets the built artifacts associated with this commit and generates a named pre-release which is deployed on ",(0,i.jsx)(n.code,{children:"pre-release"})," for testing."]}),"\n",(0,i.jsxs)(n.li,{children:["Push a tag using the distribution version format on this commit without the ",(0,i.jsx)(n.code,{children:"-prerelease"})," suffix."]}),"\n",(0,i.jsxs)(n.li,{children:["The CI gets the built artifacts associated with this commit and generates a named release which is deployed on ",(0,i.jsx)(n.code,{children:"pre-release"})," for testing."]}),"\n",(0,i.jsxs)(n.li,{children:["In the release GitHub interface, edit the newly generated release, uncheck the ",(0,i.jsx)(n.code,{children:"This is a pre-release"})," checkbox."]}),"\n",(0,i.jsxs)(n.li,{children:["The CI gets the built artifacts associated with this commit and generates a named release which is deployed on ",(0,i.jsx)(n.code,{children:"release"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Create a commit:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"to promote the documentation website from future to current."}),"\n",(0,i.jsx)(n.li,{children:"to update the SQL schema with alterations from the previous release."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(30525).A+"",children:(0,i.jsx)(n.img,{alt:"Release Process",src:s(50661).A+"",width:"1220",height:"819"})})}),"\n",(0,i.jsx)(n.h3,{id:"hotfix-release",children:"Hotfix Release"}),"\n",(0,i.jsx)(n.p,{children:"\u200b\nIn case of a blocking issue (following a distribution release) on the release environment that requires an immediate fix:\n\u200b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a branch on the last release tag with the following scheme: ",(0,i.jsx)(n.code,{children:"hotfix/{last_distribution-version}.{last_patch_number + 1}"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Development of the fix is done on this branch."}),"\n",(0,i.jsxs)(n.li,{children:["After each commit on this branch, the CI creates an ",(0,i.jsx)(n.code,{children:"unstable"})," tag & release which is not deployed on testing environment (testing must be done on an ad hoc environment manually created)."]}),"\n",(0,i.jsxs)(n.li,{children:["Push a tag on the branch last commit using the branch distribution version with a ",(0,i.jsx)(n.code,{children:"-hotfix"})," suffix."]}),"\n",(0,i.jsxs)(n.li,{children:["The CI gets the built artifacts associated with this commit and generates a named pre-release which is deployed on ",(0,i.jsx)(n.code,{children:"pre-release"})," for testing."]}),"\n",(0,i.jsxs)(n.li,{children:["In the release GitHub interface, edit the newly generated release, uncheck the ",(0,i.jsx)(n.code,{children:"This is a pre-release"})," checkbox."]}),"\n",(0,i.jsxs)(n.li,{children:["The CI gets the built artifacts associated with this commit and generates a named release which is deployed on ",(0,i.jsx)(n.code,{children:"release"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Merge the hotfix branch on main branch (and adapt the changes if they are not compatible with the current main branch)."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},30525:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/release_process-a9ce55af510cd542b71e68a485251004.jpg"},50661:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/release_process-a9ce55af510cd542b71e68a485251004.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);