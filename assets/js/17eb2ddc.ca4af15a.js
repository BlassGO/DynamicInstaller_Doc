"use strict";(self.webpackChunkdynamic_installer_doc=self.webpackChunkdynamic_installer_doc||[]).push([[3963],{3845:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"apk-jar-actions/apk-patch","title":"\ud83d\udee0\ufe0f Patching Tools","description":"Tools for patching APK and JAR files.","source":"@site/docs/apk-jar-actions/apk-patch.mdx","sourceDirName":"apk-jar-actions","slug":"/apk-jar-actions/apk-patch","permalink":"/DynamicInstaller_Doc/docs/apk-jar-actions/apk-patch","draft":false,"unlisted":false,"editUrl":"https://github.com/BlassGO/DynamicInstaller_Doc/edit/main/docs/apk-jar-actions/apk-patch.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"apk-patch","title":"\ud83d\udee0\ufe0f Patching Tools","description":"Tools for patching APK and JAR files."},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udce5 Install Tools","permalink":"/DynamicInstaller_Doc/docs/apk-jar-actions/apk-install"},"next":{"title":"\ud83d\udd27 Advanced Tool Kits","permalink":"/DynamicInstaller_Doc/docs/apk-jar-actions/apk-advanced"}}');var i=s(4848),r=s(8453),t=s(8093);const l={sidebar_position:4,id:"apk-patch",title:"\ud83d\udee0\ufe0f Patching Tools",description:"Tools for patching APK and JAR files."},c="\ud83d\udee0\ufe0f APK/JAR Patching Tools",o={},a=[{value:"apktool",id:"apktool",level:2},{value:"sign",id:"sign",level:2},{value:"decode_xml",id:"decode_xml",level:2},{value:"encode_xml",id:"encode_xml",level:2},{value:"patch_apk",id:"patch_apk",level:2},{value:"make_overlay",id:"make_overlay",level:2}];function h(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\ufe0f-apkjar-patching-tools",children:"\ud83d\udee0\ufe0f APK/JAR Patching Tools"})}),"\n",(0,i.jsx)(n.p,{children:"Utilities for patching Android Apps and JARs."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"apktool",children:"apktool"}),"\n",(0,i.jsx)(n.p,{children:"Runs apktool with custom arguments."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ARG"})}),(0,i.jsx)(n.td,{children:"Apktool options"})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'apktool --help\r\napktool d -f "/sdcard/app.apk" -o "$TMP/output"\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["It is pure ",(0,i.jsx)(n.code,{children:"apktool"}),", totally free of additional controls. This means that you should be manually be careful about apks that could generate errors. It is recommended only apks that do not contain ",(0,i.jsx)(n.code,{children:"images"})," (such as simple overlays, etc.)"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"sign",children:"sign"}),"\n",(0,i.jsx)(n.p,{children:"Runs zipsigner with custom arguments."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ARG"})}),(0,i.jsx)(n.td,{children:"Zipsigner options"})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sign --help\r\nsign "/sdcard/app.apk" "/sdcard/app_signed.apk"\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"decode_xml",children:"decode_xml"}),"\n",(0,i.jsx)(n.p,{children:"Decodes an AndroidManifest.xml file."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"XML"})}),(0,i.jsx)(n.td,{children:"XML file"})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'decode_xml "$TMP/AndroidManifest.xml"\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["It is NOT necessarily compatible with other types of encrypted XMLs, nor of ",(0,i.jsx)(n.code,{children:"res/layout"}),",",(0,i.jsx)(n.code,{children:" res/drawable"}),", ",(0,i.jsx)(n.code,{children:"..."})]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"encode_xml",children:"encode_xml"}),"\n",(0,i.jsx)(n.p,{children:"Encodes an AndroidManifest.xml or other predecoded APK XMLs."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"XML"})}),(0,i.jsx)(n.td,{children:"XML file"})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'encode_xml "$TMP/AndroidManifest.xml"\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"patch_apk",children:"patch_apk"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Supports: ",(0,i.jsx)(t.A,{type:"addon",children:"_addon"})," ",(0,i.jsx)(t.A,{type:"zip",children:"_zip"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Injects a folder into an APK with optional signing/zipaligning."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FOLDER"})}),(0,i.jsx)(n.td,{children:"Folder to inject"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"APK"})}),(0,i.jsx)(n.td,{children:"APK file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OPT"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"sign"}),", ",(0,i.jsx)(n.code,{children:"zipalign"})," (optional)"]})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'patch_apk "FOLDER" SystemUI.apk sign\r\npatch_apk "FOLDER" SystemUI.apk zipalign\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"make_overlay",children:"make_overlay"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Supports: ",(0,i.jsx)(t.A,{type:"addon",children:"_addon"})," ",(0,i.jsx)(t.A,{type:"zip",children:"_zip"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Compiles an overlay for Android 9+."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PRI"})}),(0,i.jsx)(n.td,{children:"Priority level"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PKG"})}),(0,i.jsx)(n.td,{children:"Target package"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"RES"})}),(0,i.jsx)(n.td,{children:"Resource folder"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OUT"})}),(0,i.jsx)(n.td,{children:"Output APK path"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'make_overlay 1 com.android.systemui "FOLDER" "/system/vendor/overlay/test.apk"\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["All contents of the folder are merged into the root of the overlay. For example, the ",(0,i.jsx)(n.code,{children:"res"})," folder should exist within the specified directory (",(0,i.jsx)(n.code,{children:"FOLDER\\res"}),")."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Cannot include images due to apktool limitations."})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8093:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var d=s(8532),i=s(6289),r=s(4848);const t=function(e){let{type:n,children:s,title:t}=e;const{isDarkTheme:l}=(0,d.G)(),c={default:{backgroundColor:"#f0f0f0",color:"#333"},addon:{backgroundColor:"#e1f5fe",color:"#0277bd"},zip:{backgroundColor:"#fce4ec",color:"#ad1457"}},o={default:{backgroundColor:"#424242",color:"#e0e0e0"},addon:{backgroundColor:"#4a6572",color:"#e0f7fa"},zip:{backgroundColor:"#6a1b9a",color:"#fce4ec"}},a=l?o[n]||o.default:c[n]||c.default,h=t||`This action supports the ${s} extension`;return"addon"===n||"zip"===n?(0,r.jsx)(i.A,{to:"/docs/environment/extensions-logic",children:(0,r.jsx)("span",{style:{...a,padding:"2px 6px",borderRadius:"4px",fontSize:"0.8em",margin:"0 4px",cursor:"pointer"},title:h,children:s})}):(0,r.jsx)("span",{style:{...a,padding:"2px 6px",borderRadius:"4px",fontSize:"0.8em",margin:"0 4px",cursor:"help"},title:h,children:s})}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var d=s(6540);const i={},r=d.createContext(i);function t(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);