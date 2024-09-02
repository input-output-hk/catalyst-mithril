"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[4278],{43251:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(74848),a=r(28453);const i={sidebar_position:3,sidebar_label:"Simulation"},o="Mithril protocol simulation",s={id:"mithril/mithril-protocol/simulation",title:"Mithril protocol simulation",description:"- This demo will improve your understanding of the Mithril protocol. By engaging with it, you will gain insights into how participants interact to create a multi-signature and understand the impact of the protocol parameters.",source:"@site/versioned_docs/version-maintained/mithril/mithril-protocol/simulation.md",sourceDirName:"mithril/mithril-protocol",slug:"/mithril/mithril-protocol/simulation",permalink:"/doc/mithril/mithril-protocol/simulation",draft:!1,unlisted:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/mithril/mithril-protocol/simulation.md",tags:[],version:"maintained",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Simulation"},sidebar:"mithrilSideBar",previous:{title:"Certificate Chain in depth",permalink:"/doc/mithril/mithril-protocol/certificates"},next:{title:"Mithril Network",permalink:"/doc/category/mithril-network"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download the source",id:"download-the-source",level:2},{value:"Build the Mithril protocol demo binary",id:"build-the-mithril-protocol-demo-binary",level:2},{value:"Verify the build",id:"verify-the-build",level:2},{value:"Run the simulation",id:"run-the-simulation",level:2},{value:"Case 1: produce a multi-signature",id:"case-1-produce-a-multi-signature",level:3},{value:"Case 2: does not produce a multi-signature",id:"case-2-does-not-produce-a-multi-signature",level:3}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"mithril-protocol-simulation",children:"Mithril protocol simulation"}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["This demo will improve your understanding of the ",(0,n.jsx)(e.strong,{children:"Mithril protocol"}),". By engaging with it, you will gain insights into how participants interact to create a multi-signature and understand the impact of the protocol parameters."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"This simulation is run by a CLI that you will build and run, and that will ultimately generate real Mithril multi-signatures."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"For reproducibility of the results, the simulation uses a deterministic source of randomness."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["During the simulation, some artifacts will be written to an ",(0,n.jsx)(e.code,{children:"artifacts"})," folder, such as ",(0,n.jsx)(e.code,{children:"verification keys"}),", ",(0,n.jsx)(e.code,{children:"individual signatures"})," and ",(0,n.jsx)(e.code,{children:"multi signatures"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(e.p,{children:"Ensure you have the following:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"A computer running Linux (preferred) or macOS"}),"\n",(0,n.jsxs)(e.li,{children:["The latest stable version of the correctly configured ",(0,n.jsx)(e.a,{href:"https://www.rust-lang.org/learn/get-started",children:"Rust toolchain"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"download-the-source",children:"Download the source"}),"\n",(0,n.jsx)(e.p,{children:"You can download the source file from GitHub (HTTPS):"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/input-output-hk/mithril.git\n"})}),"\n",(0,n.jsx)(e.p,{children:"Or (SSH):"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"git clone git@github.com:input-output-hk/mithril.git\n"})}),"\n",(0,n.jsx)(e.h2,{id:"build-the-mithril-protocol-demo-binary",children:"Build the Mithril protocol demo binary"}),"\n",(0,n.jsx)(e.p,{children:"Change the directory:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"cd mithril/demo/protocol-demo\n"})}),"\n",(0,n.jsx)(e.p,{children:"Run tests (optional):"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,n.jsx)(e.p,{children:"Build the executable:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"make build\n"})}),"\n",(0,n.jsx)(e.h2,{id:"verify-the-build",children:"Verify the build"}),"\n",(0,n.jsx)(e.p,{children:"Check that the Mithril client binary is working correctly by running its help function:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"./mithrildemo -h\n"})}),"\n",(0,n.jsx)(e.p,{children:"You should see:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"mithrildemo\nSimple demonstration of the Mithril protocol\n\nUSAGE:\n    mithrildemo [OPTIONS]\n\nOPTIONS:\n    -h, --help                     Print help information\n    -k, --k <K>                    Quorum parameter [default: 5]\n    -m, --m <M>                    Security parameter, upper bound on indices [default: 200]\n        --nmessages <NMESSAGES>    Number of messages to sign [default: 1]\n        --nparties <NPARTIES>      Number of parties [default: 5]\n        --phi-f <PHI_F>            f in phi(w) = 1 - (1 - f)^w, where w is the stake of a\n                                   participant [default: 0.2]\n"})}),"\n",(0,n.jsx)(e.h2,{id:"run-the-simulation",children:"Run the simulation"}),"\n",(0,n.jsxs)(e.admonition,{type:"tip",children:[(0,n.jsx)(e.p,{children:"A friendly reminder about the protocol parameters:"}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"k"}),": the ",(0,n.jsx)(e.code,{children:"quorum"})," parameter represents the minimum number of individual signatures (gathered from multiple participants) required to be aggregated in a multi-signature."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"m"}),": the ",(0,n.jsx)(e.code,{children:"security"})," parameter represents the total number of ",(0,n.jsx)(e.code,{children:"lotteries"})," in which each participant can participate to sign the message."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"phi-f"}),": the parameter that controls the probability of a participant winning a ",(0,n.jsx)(e.code,{children:"lottery"}),". It varies between ",(0,n.jsx)(e.code,{children:"0.0"})," (less chance) and ",(0,n.jsx)(e.code,{children:"1.0"})," (more chance)."]}),"\n"]})]}),"\n",(0,n.jsxs)(e.admonition,{type:"danger",children:[(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"security level"})," of the protocol is highly dependent on the value of the ",(0,n.jsx)(e.code,{children:"protocol parameters"}),"."]}),(0,n.jsx)(e.p,{children:"Therefore, these protocol parameters will be carefully selected by Mithril cryptographers and researchers to guarantee that only genuine stakeholders representing a sufficient threshold of the total stake can combine their individual signatures in a valid multi-signature."})]}),"\n",(0,n.jsx)(e.h3,{id:"case-1-produce-a-multi-signature",children:"Case 1: produce a multi-signature"}),"\n",(0,n.jsxs)(e.p,{children:["Run the simulation with ",(0,n.jsx)(e.code,{children:"5"})," participants:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"./mithrildemo -k 5 -m 50 --phi-f 0.65 --nparties 5\n"})}),"\n",(0,n.jsx)(e.p,{children:"The simulation should succeed and produce (or aggregate) a multi-signature:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'>> Launch Mithril protocol demonstrator with configuration:\nConfig {\n    m: 50,\n    k: 5,\n    phi_f: 0.65,\n    nparties: 5,\n    nmessages: 1,\n}\n\n>> Protocol establishment phase\nParty #0: party created with 826 stakes\nParty #1: party created with 741 stakes\nParty #2: party created with 144 stakes\nParty #3: party created with 734 stakes\nParty #4: party created with 41 stakes\nProtocol established to StmParameters { m: 50, k: 5, phi_f: 0.65 }\n\n>> Protocol initialization phase:\nVerifier: verifier created\nVerifier: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #0: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #1: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #2: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #3: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #4: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nVerifier: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #0: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #1: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #2: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #3: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #4: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nArtifacts written to artifacts/parties-keys.json\n\n>> Protocol operations phase:\nMessage #0 to sign: [119, 36, 224, 63, 184, 216, 74, 55, 106, 67, 184, 244, 21, 24, 161, 28]\nParty #0: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #0: lottery #2 won\nParty #0: lottery #3 won\nParty #0: lottery #8 won\nParty #0: lottery #13 won\nParty #0: lottery #16 won\nParty #0: lottery #17 won\nParty #0: lottery #19 won\nParty #0: lottery #23 won\nParty #0: lottery #25 won\nParty #0: lottery #28 won\nParty #0: lottery #29 won\nParty #0: lottery #31 won\nParty #0: lottery #42 won\nParty #0: lottery #43 won\nParty #0: lottery #46 won\nParty #1: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #1: lottery #2 won\nParty #1: lottery #3 won\nParty #1: lottery #8 won\nParty #1: lottery #13 won\nParty #1: lottery #16 won\nParty #1: lottery #17 won\nParty #1: lottery #19 won\nParty #1: lottery #23 won\nParty #1: lottery #25 won\nParty #1: lottery #29 won\nParty #1: lottery #31 won\nParty #1: lottery #42 won\nParty #1: lottery #43 won\nParty #1: lottery #46 won\nParty #2: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #2: lottery #19 won\nParty #2: lottery #43 won\nParty #2: lottery #46 won\nParty #3: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #3: lottery #2 won\nParty #3: lottery #3 won\nParty #3: lottery #8 won\nParty #3: lottery #13 won\nParty #3: lottery #16 won\nParty #3: lottery #17 won\nParty #3: lottery #19 won\nParty #3: lottery #23 won\nParty #3: lottery #25 won\nParty #3: lottery #29 won\nParty #3: lottery #31 won\nParty #3: lottery #42 won\nParty #3: lottery #43 won\nParty #3: lottery #46 won\nParty #4: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #4: lottery #19 won\nParty #0: aggregate signature computed\nParty #1: aggregate signature computed\nParty #2: aggregate signature computed\nParty #3: aggregate signature computed\nParty #4: aggregate signature computed\nArtifacts written to artifacts/single-signatures.json\nArtifacts written to artifacts/multi-signatures.json\n\n>> Protocol certificate verification phase:\nMessage #0 to verify: 7724e03fb8d84a376a43b8f41518a11c\nParty #0: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #1: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #2: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #3: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #4: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\n\n>> Congratulations, the protocol terminated with success.\n'})}),"\n",(0,n.jsx)(e.h3,{id:"case-2-does-not-produce-a-multi-signature",children:"Case 2: does not produce a multi-signature"}),"\n",(0,n.jsxs)(e.p,{children:["Run the simulation with ",(0,n.jsx)(e.code,{children:"5"})," participants:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"./mithrildemo -k 5 -m 5 --phi-f 0.25 --nparties 5\n"})}),"\n",(0,n.jsx)(e.p,{children:"The simulation should fail and not produce (or aggregate) any multi-signature:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'>> Launch Mithril protocol demonstrator with configuration:\nConfig {\n    m: 5,\n    k: 5,\n    phi_f: 0.25,\n    nparties: 5,\n    nmessages: 1,\n}\n\n>> Protocol establishment phase:\nParty #0: party created with 826 stakes\nParty #1: party created with 741 stakes\nParty #2: party created with 144 stakes\nParty #3: party created with 734 stakes\nParty #4: party created with 41 stakes\nProtocol established to StmParameters { m: 5, k: 5, phi_f: 0.25 }\n\n>> Protocol initialization phase:\nVerifier: verifier created\nVerifier: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #0: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #1: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #2: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #3: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #4: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nVerifier: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #0: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #1: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #2: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #3: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #4: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nArtifacts written to artifacts/parties-keys.json\n\n>> Protocol operations phase:\nMessage #0 to sign: [119, 36, 224, 63, 184, 216, 74, 55, 106, 67, 184, 244, 21, 24, 161, 28]\nParty #0: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #1: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #2: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #3: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #4: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #0: not enough signatures to compute aggregate\nParty #1: not enough signatures to compute aggregate\nParty #2: not enough signatures to compute aggregate\nParty #3: not enough signatures to compute aggregate\nParty #4: not enough signatures to compute aggregate\nArtifacts written to artifacts/single-signatures.json\nArtifacts written to artifacts/multi-signatures.json\n\n>> Protocol certificate verification phase:\nMessage #0 to verify: 7724e03fb8d84a376a43b8f41518a11c\nParty #0: aggregate signature not found 7724e03fb8d84a376a43b8f41518a11c\n\n>> Certificate verification failed: aggregate signature not found.\n'})}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["For more information about the Mithril protocol, refer to the ",(0,n.jsx)(e.a,{href:"/doc/mithril/mithril-protocol/protocol",children:"about Mithril"})," section."]})})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},28453:(t,e,r)=>{r.d(e,{R:()=>o,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function o(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);