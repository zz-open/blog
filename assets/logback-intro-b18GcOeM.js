import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as g,o as y,c as o,w as l,r as h,g as i,h as s,f as c,p as E}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const C={__name:"logback-intro",setup(u,{expose:r}){const e=JSON.parse('{"title":"logback详解","description":"","frontmatter":{"title":"logback详解"},"headers":[{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":2,"title":"默认策略","slug":"默认策略","link":"#默认策略","children":[]},{"level":2,"title":"日志的级别","slug":"日志的级别","link":"#日志的级别","children":[]},{"level":2,"title":"appender","slug":"appender","link":"#appender","children":[{"level":3,"title":"ConsoleAppender","slug":"consoleappender","link":"#consoleappender","children":[]},{"level":3,"title":"FileAppender","slug":"fileappender","link":"#fileappender","children":[]},{"level":3,"title":"RollingFileAppender","slug":"rollingfileappender","link":"#rollingfileappender","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"logger节点","slug":"logger节点","link":"#logger节点","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]}]}],"relativePath":"pages/posts/java-stack/java-log/logback/logback-intro.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/java-log/logback/logback-intro.md","lastUpdated":1732447053000}'),k=g(),t=e.frontmatter||{};return k.meta.frontmatter=Object.assign(k.meta.frontmatter||{},e.frontmatter||{}),E("pageData",e),E("valaxy:frontmatter",t),globalThis.$frontmatter=t,r({frontmatter:{title:"logback详解"}}),(a,n)=>{const p=d;return y(),o(p,{frontmatter:c(t)},{"main-content-md":l(()=>n[0]||(n[0]=[i("p",null,"Logback是Log4j项目的继承者，由Log4j创始人Ceki Gülcü基于过去十年企业级日志系统设计经验打造。Logback比目前所有已存的日志系统要快，它提供了其它日志系统缺失的独特和有用的特性。、",-1),i("h2",{id:"架构",tabindex:"-1"},[s("架构 "),i("a",{class:"header-anchor",href:"#架构","aria-label":'Permalink to "架构"'},"​")],-1),i("p",null,"Logback分为3个模块：logback-core、logback-classic和logback-access。",-1),i("p",null,"core模块为其它两个模块奠定了基础，classic模块拓展了core模块，classic模块意义上来说相当于Log4j的进阶版本。",-1),i("p",null,"Logback-classic模块实现了SLF4J API(simple logging facade for java,日志规范，logback为其中一种实现)，因此能轻易在Logback和其它日志系统(如：log4j、java.util.logging)切换。",-1),i("h2",{id:"默认策略",tabindex:"-1"},[s("默认策略 "),i("a",{class:"header-anchor",href:"#默认策略","aria-label":'Permalink to "默认策略"'},"​")],-1),i("ul",null,[i("li",null,"logback.xml"),i("li",null,"logback-test.xml"),i("li",null,"BasicConfigurator")],-1),i("h2",{id:"日志的级别",tabindex:"-1"},[s("日志的级别 "),i("a",{class:"header-anchor",href:"#日志的级别","aria-label":'Permalink to "日志的级别"'},"​")],-1),i("ul",null,[i("li",null,"ERROR: 40"),i("li",null,"WARN: 30"),i("li",null,"INFO: 20"),i("li",null,"DEBUG: 10"),i("li",null,"TRACE: 0")],-1),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ERROR:"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Level.ERROR."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toInt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 40")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"WARN:"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Level.WARN."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toInt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 30 ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"INFO:"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Level.INFO."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toInt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 20")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"DEBUG:"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Level.DEBUG."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toInt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 10")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"TRACE:"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Level.TRACE."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toInt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 0")])])]),i("button",{class:"collapse"})],-1),i("h2",{id:"appender",tabindex:"-1"},[s("appender "),i("a",{class:"header-anchor",href:"#appender","aria-label":'Permalink to "appender"'},"​")],-1),i("p",null,"附加器, Appender负责将日志信息输出到指定位置, 比如: 控制台、文件、数据库、远程服务等。",-1),i("p",null,"常用的附加器:",-1),i("ul",null,[i("li",null,"ConsoleAppender: 输出日志到控制台"),i("li",null,"FileAppender: 输出日志到文件"),i("li",null,"RollingFileAppender: 日志文件按时间滚动")],-1),i("h3",{id:"consoleappender",tabindex:"-1"},[s("ConsoleAppender "),i("a",{class:"header-anchor",href:"#consoleappender","aria-label":'Permalink to "ConsoleAppender"'},"​")],-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"appender"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"CONSOLE"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ch.qos.logback.core.ConsoleAppender"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%thread] [%-5level] [%logger{36}] [-%kvp]  [-%msg] [%n]</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">[%msg]%n</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"chaset"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">UTF-8</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"chaset"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"target"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">System.out</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"target"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"target"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">System.err</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"target"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"appender"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("h4",{id:"pattern",tabindex:"-1"},[s("pattern "),i("a",{class:"header-anchor",href:"#pattern","aria-label":'Permalink to "pattern"'},"​")],-1),i("ul",null,[i("li",null,[i("a",{href:"https://logback.qos.ch/manual/layouts.html",target:"_blank",rel:"noreferrer"},"pattern格式"),s(" 具体还是看官网")]),i("li",null,"%c: 包名+类名"),i("li",null,"%msg: 日志信息"),i("li",{"yyyy-MM-dd":"","HH:mm:ss.SSS":""},"%d: 日志时间"),i("li",null,"%thread: 线程名"),i("li",null,"%level: 日志级别"),i("li",null,"%logger: 日志名"),i("li",null,"%n: 换行符"),i("li",null,"%throwable: 异常信息"),i("li",null,"%F: 日志所在的文件名"),i("li",null,"%L: 日志所在的行号"),i("li",null,"%M: 日志所在的方法名"),i("li",null,"%l: 日志所在的类名"),i("li",null,"%kvp: 自定义key-value对")],-1),i("h3",{id:"fileappender",tabindex:"-1"},[s("FileAppender "),i("a",{class:"header-anchor",href:"#fileappender","aria-label":'Permalink to "FileAppender"'},"​")],-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"appender"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"FILE"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ch.qos.logback.core.FileAppender"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"file"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">logs/app.log</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"file"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"append"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">true</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"append"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"prudent"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">false</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"prudent"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"immediateFlush"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">true</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"immediateFlush"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"bufferSize"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">8192</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"bufferSize"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"appender"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("h3",{id:"rollingfileappender",tabindex:"-1"},[s("RollingFileAppender "),i("a",{class:"header-anchor",href:"#rollingfileappender","aria-label":'Permalink to "RollingFileAppender"'},"​")],-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"appender"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ROLLINGFILE"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ch.qos.logback.core.rolling.RollingFileAppender"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"rollingPolicy"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ch.qos.logback.core.rolling.TimeBasedRollingPolicy"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"fileNamePattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">logs/app.%d{yyyy-MM-dd}.log</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"fileNamePattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"maxHistory"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">30</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"maxHistory"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"maxFileSize"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">10MB</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"maxFileSize"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"rollingPolicy"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"encoder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"append"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">true</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"append"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"prudent"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">false</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"prudent"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"immediateFlush"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">true</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"immediateFlush"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"bufferSize"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">8192</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"bufferSize"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"appender"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("h3",{id:"configuration",tabindex:"-1"},[s("Configuration "),i("a",{class:"header-anchor",href:"#configuration","aria-label":'Permalink to "Configuration"'},"​")],-1),i("ul",null,[i("li",null,"scan: 是否扫描配置文件，默认true"),i("li",null,"scanPeriod: 扫描配置文件的时间间隔，默认60秒"),i("li",null,"debug: 是否开启debug模式，默认false")],-1),i("h3",{id:"logger节点",tabindex:"-1"},[s("logger节点 "),i("a",{class:"header-anchor",href:"#logger节点","aria-label":'Permalink to "logger节点"'},"​")],-1),i("p",null,"logger节点可以指定日志的级别和输出位置。常用来指定某个包的日志级别和输出位置。",-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"logger"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"com.example.demo"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"level"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"DEBUG"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"appender-ref"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"CONSOLE"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"logger"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("h3",{id:"filter",tabindex:"-1"},[s("filter "),i("a",{class:"header-anchor",href:"#filter","aria-label":'Permalink to "filter"'},"​")],-1),i("p",null,"filter节点可以对日志进行过滤，比如只输出指定级别的日志。",-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ch.qos.logback.classic.filter.LevelFilter"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"level"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">INFO</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"level"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"onMatch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">ACCEPT</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"onMatch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"onMismatch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">DENY</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"onMismatch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1)])),"main-header":l(()=>[h(a.$slots,"main-header")]),"main-header-after":l(()=>[h(a.$slots,"main-header-after")]),"main-nav":l(()=>[h(a.$slots,"main-nav")]),"main-content":l(()=>[h(a.$slots,"main-content")]),"main-content-after":l(()=>[h(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[h(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[h(a.$slots,"main-nav-after")]),comment:l(()=>[h(a.$slots,"comment")]),footer:l(()=>[h(a.$slots,"footer")]),aside:l(()=>[h(a.$slots,"aside")]),"aside-custom":l(()=>[h(a.$slots,"aside-custom")]),default:l(()=>[h(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{C as default};
