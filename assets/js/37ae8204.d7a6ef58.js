"use strict";(self.webpackChunkdynamic_installer_doc=self.webpackChunkdynamic_installer_doc||[]).push([[9913],{3201:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"apk-jar-actions/apk-install","title":"\ud83d\udce5 Install Tools","description":"Tools for installing APKs.","source":"@site/docs/apk-jar-actions/apk-install.md","sourceDirName":"apk-jar-actions","slug":"/apk-jar-actions/apk-install","permalink":"/DynamicInstaller_Doc/docs/apk-jar-actions/apk-install","draft":false,"unlisted":false,"editUrl":"https://github.com/BlassGO/DynamicInstaller_Doc/edit/main/docs/apk-jar-actions/apk-install.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"apk-install","title":"\ud83d\udce5 Install Tools","description":"Tools for installing APKs."},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\ude80 Launch Tools","permalink":"/DynamicInstaller_Doc/docs/apk-jar-actions/apk-run"},"next":{"title":"\ud83d\udee0\ufe0f Patching Tools","permalink":"/DynamicInstaller_Doc/docs/apk-jar-actions/apk-patch"}}');var l=s(4848),t=s(8453);const r={sidebar_position:3,id:"apk-install",title:"\ud83d\udce5 Install Tools",description:"Tools for installing APKs."},a="\ud83d\udce5 APK/JAR Install Tools",d={},c=[{value:"apk_install",id:"apk_install",level:2},{value:"apk_install_recursive",id:"apk_install_recursive",level:2},{value:"dynamic_install_apk",id:"dynamic_install_apk",level:2}];function o(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"-apkjar-install-tools",children:"\ud83d\udce5 APK/JAR Install Tools"})}),"\n",(0,l.jsx)(e.p,{children:"Utilities for installing Android Apps."}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"apk_install",children:"apk_install"}),"\n",(0,l.jsx)(e.p,{children:"Installs .APK or .APKM files with splits."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Argument"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"APK"})}),(0,l.jsxs)(e.td,{children:['.APK/.APKM file(s) with optional splits (e.g., "main.apk',":split",'.apk")']})]})})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'apk_install "$TMP/Test.apk"\r\napk_install "$TMP/Main.apk:$TMP/Split.apk:$TMP/Split2.apk"\r\napk_install "$TMP/Main.apkm:split_config.ru.apk:split_voip.apk"\n'})}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsxs)(e.p,{children:["It is used the delimiter ",(0,l.jsx)(e.code,{children:":"})," to define external Splits, but you can also define internal Splits names when it comes to an APKM."]})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"apk_install_recursive",children:"apk_install_recursive"}),"\n",(0,l.jsx)(e.p,{children:"Recursively installs .APK/.APKM files from folders."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Argument"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"FOLDER"})}),(0,l.jsx)(e.td,{children:"Folder(s) to scan (multiple allowed)"})]})})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'apk_install_recursive "/sdcard/myapps"\n'})}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.p,{children:"Sub-folders can be created within the folder specified to group a main APK next to its Splits."}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"/sdcard/myapps/\r\n\u251c\u2500\u2500 app1/\r\n\u2502   \u251c\u2500\u2500 Main.apk\r\n\u2502   \u251c\u2500\u2500 Split1.apk\r\n\u2502   \u2514\u2500\u2500 Split2.apk\r\n\u2514\u2500\u2500 app2/\r\n    \u251c\u2500\u2500 Main.apk\r\n    \u251c\u2500\u2500 Split1.apk\r\n    \u2514\u2500\u2500 Split2.apk\n"})})]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"dynamic_install_apk",children:"dynamic_install_apk"}),"\n",(0,l.jsx)(e.p,{children:"Replaces APKs from one folder to another by package."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Flag"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"SRC"})}),(0,l.jsx)(e.td,{children:"Source folder"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"DEST"})}),(0,l.jsx)(e.td,{children:"Destination folder"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"-no-replace (-nr)"})}),(0,l.jsx)(e.td,{children:"Avoid replacing existing APKs"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"-no-add (-na)"})}),(0,l.jsx)(e.td,{children:"Avoid adding new APKs"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"-include (-i) PATH"})}),(0,l.jsx)(e.td,{children:"Extra folders/files to include (multiple allowed)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"-follow-symlinks (-fs)"})}),(0,l.jsx)(e.td,{children:"Search within symlinks"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"-remove-oat"})}),(0,l.jsx)(e.td,{children:"Remove oat folders of old APKs"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"-output PATH"})}),(0,l.jsx)(e.td,{children:"Redirect destination path"})]})]})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'dynamic_install_apk "FOLDER" "/system"\r\ndynamic_install_apk -include "oat" -include "lib" "FOLDER" "/system" -output "/sdcard/results"\n'})}),"\n",(0,l.jsx)(e.admonition,{type:"note",children:(0,l.jsx)(e.p,{children:"The performance is proportional to the amount of APKs of both directories."})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>a});var i=s(6540);const l={},t=i.createContext(l);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);