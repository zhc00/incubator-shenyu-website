"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[92687],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32009:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"2.4.1",sidebar_position:3,keywords:["release-notes"],description:"release-notes"},u="2.4.1",p={unversionedId:"2.4.1-release",id:"2.4.1-release",isDocsHomePage:!1,title:"2.4.1",description:"release-notes",source:"@site/event/2.4.1-release.md",sourceDirName:".",slug:"/2.4.1-release",permalink:"/event/2.4.1-release",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/event/2.4.1-release.md",version:"current",lastUpdatedBy:"hutaishi",lastUpdatedAt:1651677557,formattedLastUpdatedAt:"5/4/2022",sidebarPosition:3,frontMatter:{title:"2.4.1",sidebar_position:3,keywords:["release-notes"],description:"release-notes"},sidebar:"community",previous:{title:"2.4.2",permalink:"/event/2.4.2-release"},next:{title:"2.4.0",permalink:"/event/2.4.0-release"}},s=[{value:"New Features",id:"new-features",children:[]},{value:"API Changes",id:"api-changes",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"241"},"2.4.1"),(0,i.kt)("h2",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support PostgreSQL for admin"),(0,i.kt)("li",{parentName:"ul"},"Support dynamic loading plugin"),(0,i.kt)("li",{parentName:"ul"},"Support local modification data mode"),(0,i.kt)("li",{parentName:"ul"},"Add Websocket plugin"),(0,i.kt)("li",{parentName:"ul"},"Add CryptorRequest plugin"),(0,i.kt)("li",{parentName:"ul"},"Add CryptorResponse plugin"),(0,i.kt)("li",{parentName:"ul"},"Support Grayscale Release for SpringCloud"),(0,i.kt)("li",{parentName:"ul"},"Support Grayscale Release for Apache Dubbo"),(0,i.kt)("li",{parentName:"ul"},"Implement the async dubbo invoking for alibaba-dubbo"),(0,i.kt)("li",{parentName:"ul"},"Support external cross filter config"),(0,i.kt)("li",{parentName:"ul"},"Support sign plugin custom dynamic sign provider")),(0,i.kt)("h2",{id:"api-changes"},"API Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refactor shenyu config in yaml")),(0,i.kt)("h2",{id:"enhancement"},"Enhancement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Optimze code about dubbo async call"),(0,i.kt)("li",{parentName:"ul"},"Add loadbalancer common module"),(0,i.kt)("li",{parentName:"ul"},"Optimize sql init"),(0,i.kt)("li",{parentName:"ul"},"Refactor Admin PageHelper to query list"),(0,i.kt)("li",{parentName:"ul"},"Optimize GlobalErrorHandler"),(0,i.kt)("li",{parentName:"ul"},"Optimize the return value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"skip")," method interface of ",(0,i.kt)("inlineCode",{parentName:"li"},"ShenyuPlugin")," to boolean"),(0,i.kt)("li",{parentName:"ul"},"Optimize register rules"),(0,i.kt)("li",{parentName:"ul"},"Modify dubbo and sofa param resolve service"),(0,i.kt)("li",{parentName:"ul"},"Refactor sign plugin api"),(0,i.kt)("li",{parentName:"ul"},"Remove websocket filter")),(0,i.kt)("h2",{id:"refactor"},"Refactor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove lombok dependency"),(0,i.kt)("li",{parentName:"ul"},"Remove mapstruct dependency"),(0,i.kt)("li",{parentName:"ul"},"Support JDK8 ~ JDK15"),(0,i.kt)("li",{parentName:"ul"},"Add missing plugin_handle sql for plugin motan")),(0,i.kt)("h2",{id:"bug-fix"},"Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix JsonSyntaxException in jwt plugin"),(0,i.kt)("li",{parentName:"ul"},"Fix sql miss for resilience4j plugin handler"),(0,i.kt)("li",{parentName:"ul"},"Fix disruptor problem of hold event data in consume event"),(0,i.kt)("li",{parentName:"ul"},"Fix deadlock bug of HealthCheckTask"),(0,i.kt)("li",{parentName:"ul"},"Fix client retry the connection add log and increase sleep time"),(0,i.kt)("li",{parentName:"ul"},"Fix the default_group of nacos"),(0,i.kt)("li",{parentName:"ul"},"Fix maven ignore and docker entrypoint"),(0,i.kt)("li",{parentName:"ul"},"Fix admin Return password question"),(0,i.kt)("li",{parentName:"ul"},"Fix LDAP query built from user-controlled source"),(0,i.kt)("li",{parentName:"ul"},"Fix the IP address retrieval error"),(0,i.kt)("li",{parentName:"ul"},"Fix Gson toJson is null"),(0,i.kt)("li",{parentName:"ul"},"Fix the index out of range bug for context path."),(0,i.kt)("li",{parentName:"ul"},"Fix monitor init metrics label bug"),(0,i.kt)("li",{parentName:"ul"},"Fix GlobalErrorHandler error object to map bug by JacksonUtils.toMap"),(0,i.kt)("li",{parentName:"ul"},"Fix modify response plugin order bug"),(0,i.kt)("li",{parentName:"ul"},"Fix the bug of register"),(0,i.kt)("li",{parentName:"ul"},"Fix sofa plugin register metadata and parameters resolve"),(0,i.kt)("li",{parentName:"ul"},"Fix motan ,dubbo, sofa plugin metadata init bug")))}m.isMDXComponent=!0}}]);