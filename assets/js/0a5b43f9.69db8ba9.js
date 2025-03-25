"use strict";(self.webpackChunkdynamic_installer_doc=self.webpackChunkdynamic_installer_doc||[]).push([[9915],{7781:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"fundamentals/native-variables","title":"\ud83c\udf10 Native Variables","description":"Built-in variables provided by Dynamic Installer.","source":"@site/docs/fundamentals/native-variables.md","sourceDirName":"fundamentals","slug":"/fundamentals/native-variables","permalink":"/DynamicInstaller_Doc/docs/fundamentals/native-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/BlassGO/DynamicInstaller_Doc/edit/main/docs/fundamentals/native-variables.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"native-variables","title":"\ud83c\udf10 Native Variables","description":"Built-in variables provided by Dynamic Installer."},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd27 Variables","permalink":"/DynamicInstaller_Doc/docs/fundamentals/variables"},"next":{"title":"\u2699\ufe0f Subprocesses","permalink":"/DynamicInstaller_Doc/docs/fundamentals/subprocesses"}}');var r=s(4848),d=s(8453);const t={sidebar_position:2,id:"native-variables",title:"\ud83c\udf10 Native Variables",description:"Built-in variables provided by Dynamic Installer."},c="\ud83c\udf10 Native Variables",l={},a=[{value:"Example Usage",id:"example-usage",level:2}];function o(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"-native-variables",children:"\ud83c\udf10 Native Variables"})}),"\n",(0,r.jsx)(i.p,{children:"DI provides these predefined variables for use in your scripts. They give you instant access to device and installer details."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Variable"}),(0,r.jsx)(i.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$TMP"})}),(0,r.jsx)(i.td,{children:"Temporary directory that exists only during execution."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$BOOTMODE"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"true"})," if the device is booted, ",(0,r.jsx)(i.code,{children:"false"})," otherwise."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$ARCH"})}),(0,r.jsxs)(i.td,{children:["Device architecture (",(0,r.jsx)(i.code,{children:"arm64-v8a"})," or ",(0,r.jsx)(i.code,{children:"armeabi-v7a"}),")."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$chipname"})}),(0,r.jsxs)(i.td,{children:["Chipset type (",(0,r.jsx)(i.code,{children:"snapdragon"}),", ",(0,r.jsx)(i.code,{children:"exynos"}),", ",(0,r.jsx)(i.code,{children:"mediatek"}),". ",(0,r.jsx)(i.code,{children:"kirin"}),", ",(0,r.jsx)(i.code,{children:"unisoc"}),")."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$installzip"})}),(0,r.jsx)(i.td,{children:"Path to the ZIP being installed."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$is64bit"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"true"})," if the device is 64-bit, ",(0,r.jsx)(i.code,{children:"false"})," otherwise."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$API"})}),(0,r.jsxs)(i.td,{children:["Android API version number (",(0,r.jsx)(i.code,{children:"33"})," for Android 13)."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$slot"})}),(0,r.jsxs)(i.td,{children:["Active slot (",(0,r.jsx)(i.code,{children:"_a"})," or ",(0,r.jsx)(i.code,{children:"_b"}),") for A/B devices; refresh with ",(0,r.jsx)(i.code,{children:"getarch"}),"."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$dynamic_partitions"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"true"})," if the device uses dynamic partitions, ",(0,r.jsx)(i.code,{children:"false"})," otherwise."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$virtual_partitions"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"true"})," if the device has virtual dynamic partitions, ",(0,r.jsx)(i.code,{children:"false"})," otherwise."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"${n}"})}),(0,r.jsxs)(i.td,{children:["Inserts a newline in strings (",(0,r.jsx)(i.code,{children:'"Line1${n}Line2"'}),")."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$encrypted"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"true"})," if internal memory is encrypted, ",(0,r.jsx)(i.code,{children:"false"})," otherwise."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$di_version"})}),(0,r.jsxs)(i.td,{children:["Full version of Dynamic Installer (e.g., ",(0,r.jsx)(i.code,{children:"4.8-bZ2"}),")."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$main_version"})}),(0,r.jsxs)(i.td,{children:["Main version of DI (e.g., ",(0,r.jsx)(i.code,{children:"4.8"}),", without variant tags)."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$CUSTOM_SETUP"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"0"})," (normal install), ",(0,r.jsx)(i.code,{children:"1"})," (Test Mode), ",(0,r.jsx)(i.code,{children:"2"})," (external like KSU)."]})]})]})]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:'ui_print "-- Installing on $ARCH device with API: $API"\r\n\r\nif $BOOTMODE; then\r\n    ui_print "-- Device is BOOTED"\r\nelse\r\n    ui_print "-- Running in Recovery or something else"\r\nfi\r\n\r\nif $is64bit; then\r\n    ui_print "-- 64-bit device"\r\nelse\r\n    ui_print "-- 32-bit device or something else"\r\nfi\r\n\r\ncreate_file "$TMP/file.txt"   # Create a temporary file\n'})})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>t,x:()=>c});var n=s(6540);const r={},d=n.createContext(r);function t(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);