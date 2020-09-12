(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{},[s("div",{staticStyle:{"max-width":"900px","margin-left":"auto","margin-right":"auto"}},[s("div",{staticStyle:{height:"50px"}}),s("div",{staticClass:"q-ma-md"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit}},[s("div",{},[s("q-expansion-item",{attrs:{"expand-separator":"",label:"Fetcher List 請選擇你想搜尋的站點"},model:{value:e.isFetcherListExpanded,callback:function(t){e.isFetcherListExpanded=t},expression:"isFetcherListExpanded"}},[s("q-card",[s("q-card-section",[s("q-checkbox",{attrs:{label:"All 全選"},on:{input:e.fetcherListAllSelect},model:{value:e.isFetcherListAllSelect,callback:function(t){e.isFetcherListAllSelect=t},expression:"isFetcherListAllSelect"}}),s("q-option-group",{attrs:{name:"accepted_genres",options:e.fetcherListOptions,type:"checkbox",color:"primary",inline:""},model:{value:e.fetcherListAccepted,callback:function(t){e.fetcherListAccepted=t},expression:"fetcherListAccepted"}})],1)],1)],1)],1),s("q-input",{attrs:{label:"Keyword 關鍵字",placeholder:""},scopedSlots:e._u([0!==e.keywords.length?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.keywords=""}}})]},proxy:!0}:null],null,!0),model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),s("q-input",{attrs:{label:"Search engine result limit 搜尋結果數限制",placeholder:""},model:{value:e.resultLimit,callback:function(t){e.resultLimit=t},expression:"resultLimit"}}),s("q-select",{attrs:{options:e.timeLimitOptions,label:"Time Limit 搜尋文章的時間範圍"},model:{value:e.timeLimitModel,callback:function(t){e.timeLimitModel=t},expression:"timeLimitModel"}}),s("q-select",{attrs:{options:e.engineOptions,label:"Search Engine"},model:{value:e.engineModel,callback:function(t){e.engineModel=t},expression:"engineModel"}}),s("q-select",{attrs:{options:e.concurrencyOptions,label:"Parallel Jobs 並行工作數 注：數值越高越耗費系統資源"},model:{value:e.concurrencyModel,callback:function(t){e.concurrencyModel=t},expression:"concurrencyModel"}}),e.isShowStatusBar?s("div",{staticClass:"q-pa-md q-gutter-xs"},[s("div",{staticClass:"q-gutter-md row items-center"},[s("q-spinner-radio",{attrs:{color:"green",size:"2.5em"}}),s("div",{staticClass:"text-h6"},[e._v(e._s(e.statusBarContent))])],1)]):e._e(),s("div",[s("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary",disable:e.isSubmitDisabled}}),s("q-ajax-bar",{ref:"bar",attrs:{position:"bottom",color:"primary",size:"10px","skip-hijack":""}})],1)],1)],1),e.isResultUrlsShow?s("div",{staticClass:"q-ma-md"},[s("q-table",{attrs:{title:"Result Urls",data:e.resultUrlsData,columns:e.resultUrlsColumns,"row-key":"link-href","rows-per-page-options":[0]},scopedSlots:e._u([{key:"top-right",fn:function(){return[s("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:e.exportTable}})]},proxy:!0}],null,!1,1388069608)})],1):e._e()])])},o=[],n=(s("ddb0"),s("ded3")),a=s.n(n),l=s("c973"),r=s.n(l),c=s("a357");const u=(e,t)=>{let s=void 0!==t?t(e):e;return s=void 0===s||null===s?"":String(s),s=s.split('"').join('""'),`"${s}"`};var d={data(){var e=this;return{keywords:"",resultLimit:100,isFetcherListAllSelect:!1,isFetcherListExpanded:!0,isShowStatusBar:!1,statusBarContent:"loading",fetcherListAccepted:[],fetcherListOptions:[],timeLimitModel:"Any",timeLimitOptions:["Any","Day","Week","Month","Year"],concurrencyModel:1,concurrencyOptions:[1,2,3,5,8,10,15,20,25,30],engineModel:"bing",engineOptions:["duckduckgo","bing"],isSubmitDisabled:!1,isResultUrlsShow:!1,resultUrlsData:[],resultUrlsColumns:[{name:"status",label:"Status",align:"left",field:"status",sortable:!0},{name:"name",label:"Title",align:"left",field:"link",sortable:!0},{name:"snippet",label:"Snippet",align:"left",field:"snippet",sortable:!0},{name:"url",label:"Url",align:"center",field:"link-href",sortable:!1}],isFetchJobStarted:!1,searchResultChecker:setInterval(r()((function*(){e.statusBarContent="正在從伺服器檢查結果隊列 Checking If Server Fetched Searched Result",e.isShowStatusBar=!0,yield e.$http.get("/urlLists").then(t=>{if(setTimeout(()=>{e.isShowStatusBar=!1},2800),e.isResultUrlsShow=!0,0===t.data.length)console.info("No Result");else{e.isFetcherListExpanded=!1;let s=0;for(const i of t.data){if(s++>=e.resultLimit)break;const t=a()(a()({},i),{},{status:"waiting"});e.fetchJobQueue.push(t),e.resultUrlsData.push(t)}}e.resultUrlsData.length>0&&(e.isFetchJobStarted||e.fetchJob())})})),6e3),fetchJobQueue:[],workingJobQueue:[]}},methods:{onSubmit(){var e=this;return r()((function*(){console.info("[methods][onSubmit]");const t=e.$refs.bar;e.isSubmitDisabled=!0;for(const s of e.fetcherListAccepted)t.start(),yield e.$http.post("/urlLists",{params:{news:s,keyword:e.keywords,timeLimit:e.timeLimitModel,resultLimit:e.resultLimit,engine:e.engineModel}}).then(e=>{t.stop()});e.isSubmitDisabled=!1}))()},fetcherListAllSelect(e,t){console.info("[methods][fetcherListAllSelect]"),this.isfetcherListAllSelect=e;const s=[];for(const i of this.fetcherListOptions)s.push(i.value);this.isfetcherListAllSelect?this.fetcherListAccepted=s:this.fetcherListAccepted=[]},exportTable(){console.info("[methods][exportTable]");const e=[this.resultUrlsColumns.map(e=>u(e.label))].concat(this.resultUrlsData.map(e=>this.resultUrlsColumns.map(t=>u("function"===typeof t.field?t.field(e):e[void 0===t.field?t.name:t.field],t.format)).join(","))).join("\r\n"),t=new Date,s=`${t.getFullYear()}${t.getMonth()}${t.getDate()}-${t.getHours()}${t.getMinutes()}${t.getSeconds()}`,i=Object(c["a"])(`news-crawler-home-export-${s}.csv`,e,"text/csv");!0!==i&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},fetchJob(){var e=this;return r()((function*(){console.info("[methods][fetchJob]"),e.isFetchJobStarted=!0,e.dispatcher=setInterval(()=>{console.info("[method][pushingWorkingQueue]");while(e.workingJobQueue.length<e.concurrencyModel&&e.fetchJobQueue.length>0&&e.isFetchJobStarted)e.workingJobQueue.push(e.fetchJobQueue.shift());e.fetchJobQueue.length<=0&&e.workingJobQueue.length<=0&&(console.info("[method][fetchJob]: Fetching Done!"),e.isFetchJobStarted=!1,clearInterval(e.dispatcher)),setTimeout(e.jobHandler,2e3)},5e3)}))()},jobHandler(){var e=this;return r()((function*(){if(console.info("[method][getStatus&postJob]"),e.isFetchJobStarted){const t=[];for(const s of e.workingJobQueue)"waiting"===s.status&&(s.status="running",t.push(s));yield e.postJob(t),e.workingJobQueue.length>0&&e.checkStatus(e.workingJobQueue)}}))()},postJob(e){var t=this;return r()((function*(){const s=[];for(const t of e)s.push(t);s.length>0&&(yield t.$http.post("/fetchJob",{jobs:s}).then(e=>{-1===e.data.code&&console.error(e.data.data.msg)}))}))()},checkStatus(e){var t=this;return r()((function*(){const s=[];for(const t of e)s.push(t["link-href"]),t.status="checking";yield t.$http.post("/fetchStatus",{params:{url:s}}).then(s=>{const i=s.data;for(const t of e){const e=i[t["link-href"]],s=e.status;s&&(t.status="completed"===s||"failed"===s?s:"notExist"===s?"failed":"running")}t.workingJobQueue=t.workingJobQueue.filter((e,t,s)=>!("completed"===e.status||"failed"===e.status))})}))()}},mounted(){window.vue=this;const e=this.$refs.bar;e.start(),this.$http.get("/function/listAllNews",{params:{}}).then(t=>{-1===t.data.code?console.error(t.data.data.msg):(e.stop(),this.fetcherListOptions=t.data)})}},h=d,p=s("2877"),f=s("9989"),m=s("0378"),b=s("3b73"),g=s("f09f"),S=s("a370"),k=s("8f8e"),w=s("9f0a"),L=s("27f9"),v=s("0016"),y=s("ddd8"),x=s("9569"),J=s("9c40"),Q=s("7ea5"),q=s("eaac"),A=s("eebe"),F=s.n(A),C=Object(p["a"])(h,i,o,!1,null,null,null);t["default"]=C.exports;F()(C,"components",{QPage:f["a"],QForm:m["a"],QExpansionItem:b["a"],QCard:g["a"],QCardSection:S["a"],QCheckbox:k["a"],QOptionGroup:w["a"],QInput:L["a"],QIcon:v["a"],QSelect:y["a"],QSpinnerRadio:x["a"],QBtn:J["a"],QAjaxBar:Q["a"],QTable:q["a"]})}}]);