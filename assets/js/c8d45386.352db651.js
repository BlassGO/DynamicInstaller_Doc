"use strict";(self.webpackChunkdynamic_installer_doc=self.webpackChunkdynamic_installer_doc||[]).push([[1724],{6829:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"general-actions/execution","title":"\u2699\ufe0f Execution Tools","description":"Tools for running programs and scripts.","source":"@site/docs/general-actions/execution.mdx","sourceDirName":"general-actions","slug":"/general-actions/execution","permalink":"/DynamicInstaller_Doc/docs/general-actions/execution","draft":false,"unlisted":false,"editUrl":"https://github.com/BlassGO/DynamicInstaller_Doc/edit/main/docs/general-actions/execution.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"sidebar_position":14,"id":"execution","title":"\u2699\ufe0f Execution Tools","description":"Tools for running programs and scripts."},"sidebar":"tutorialSidebar","previous":{"title":"\u270f\ufe0f Editing Files Tools","permalink":"/DynamicInstaller_Doc/docs/general-actions/editing-files"},"next":{"title":"\ud83d\udd24 String Manipulation Tools","permalink":"/DynamicInstaller_Doc/docs/general-actions/strings"}}');var i=r(4848),t=r(8453),l=r(8093);const d={sidebar_position:14,id:"execution",title:"\u2699\ufe0f Execution Tools",description:"Tools for running programs and scripts."},c="\u2699\ufe0f Execution Tools",o={},a=[{value:"run",id:"run",level:2},{value:"run_wait",id:"run_wait",level:2},{value:"run_jar",id:"run_jar",level:2},{value:"run_jar_class",id:"run_jar_class",level:2}];function h(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\ufe0f-execution-tools",children:"\u2699\ufe0f Execution Tools"})}),"\n",(0,i.jsx)(n.p,{children:"Utilities for executing files and processes."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"run",children:"run"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Supports: ",(0,i.jsx)(l.A,{type:"addon",children:"_addon"})," ",(0,i.jsx)(l.A,{type:"zip",children:"_zip"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Runs a file and saves the result in a variable."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VAR"})}),(0,i.jsx)(n.td,{children:"Variable for result"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FILE"})}),(0,i.jsx)(n.td,{children:"File to run"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ARG"})}),(0,i.jsx)(n.td,{children:"Arguments (multiple allowed)"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'run log1 "$TMP/busybox" chmod --help\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"run_wait",children:"run_wait"}),"\n",(0,i.jsx)(n.p,{children:"Limits execution time of an action."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TIME"})}),(0,i.jsx)(n.td,{children:"Time limit in seconds"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ACTION"})}),(0,i.jsx)(n.td,{children:"Action to run"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ARG"})}),(0,i.jsx)(n.td,{children:"Arguments (multiple allowed)"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'run_wait 5 run log1 "$TMP/busybox" echo HUH\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Experimental feature."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"run_jar",children:"run_jar"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Supports: ",(0,i.jsx)(l.A,{type:"addon",children:"_addon"})," ",(0,i.jsx)(l.A,{type:"zip",children:"_zip"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Runs a DEXed JAR file using the Android Dalvik VM."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JAR"})}),(0,i.jsx)(n.td,{children:"JAR file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ARG"})}),(0,i.jsx)(n.td,{children:"Arguments (multiple allowed)"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'run_jar "$TMP/apktool.jar" --help\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Requires Dalvik VM; not all JARs work."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"run_jar_class",children:"run_jar_class"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Supports: ",(0,i.jsx)(l.A,{type:"addon",children:"_addon"})," ",(0,i.jsx)(l.A,{type:"zip",children:"_zip"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Runs a specific class in a DEXed JAR file."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JAR"})}),(0,i.jsx)(n.td,{children:"JAR file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CLASS"})}),(0,i.jsx)(n.td,{children:"Class to run"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ARG"})}),(0,i.jsx)(n.td,{children:"Arguments (multiple allowed)"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'run_jar_class "$TMP/apktool.jar" "brut.apktool.Main" --help\n'})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8093:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var s=r(8532),i=r(6289),t=r(4848);const l=function(e){let{type:n,children:r,title:l}=e;const{isDarkTheme:d}=(0,s.G)(),c={default:{backgroundColor:"#f0f0f0",color:"#333"},addon:{backgroundColor:"#e1f5fe",color:"#0277bd"},zip:{backgroundColor:"#fce4ec",color:"#ad1457"}},o={default:{backgroundColor:"#424242",color:"#e0e0e0"},addon:{backgroundColor:"#4a6572",color:"#e0f7fa"},zip:{backgroundColor:"#6a1b9a",color:"#fce4ec"}},a=d?o[n]||o.default:c[n]||c.default,h=l||`This action supports the ${r} extension`;return"addon"===n||"zip"===n?(0,t.jsx)(i.A,{to:"/docs/environment/extensions-logic",children:(0,t.jsx)("span",{style:{...a,padding:"2px 6px",borderRadius:"4px",fontSize:"0.8em",margin:"0 4px",cursor:"pointer"},title:h,children:r})}):(0,t.jsx)("span",{style:{...a,padding:"2px 6px",borderRadius:"4px",fontSize:"0.8em",margin:"0 4px",cursor:"help"},title:h,children:r})}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(6540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);