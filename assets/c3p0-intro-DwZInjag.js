import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as o,o as g,c as y,w as a,r as l,g as i,h as s,f as c,p as r}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const v={__name:"c3p0-intro",setup(m,{expose:E}){const h=JSON.parse('{"title":"c3p0详解","description":"","frontmatter":{"title":"c3p0详解"},"headers":[{"level":2,"title":"如何连接数据库","slug":"如何连接数据库","link":"#如何连接数据库","children":[{"level":3,"title":"直接代码编写参数配置","slug":"直接代码编写参数配置","link":"#直接代码编写参数配置","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}]}],"relativePath":"pages/posts/java-stack/jdbc/c3p0/c3p0-intro.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/jdbc/c3p0/c3p0-intro.md","lastUpdated":1732447053000}'),e=o(),k=h.frontmatter||{};return e.meta.frontmatter=Object.assign(e.meta.frontmatter||{},h.frontmatter||{}),r("pageData",h),r("valaxy:frontmatter",k),globalThis.$frontmatter=k,E({frontmatter:{title:"c3p0详解"}}),(t,n)=>{const p=d;return g(),y(p,{frontmatter:c(k)},{"main-content-md":a(()=>n[0]||(n[0]=[i("ul",null,[i("li",null,[i("a",{href:"https://www.mchange.com/projects/c3p0/",target:"_blank",rel:"noreferrer"},"c3p0官网")])],-1),i("h2",{id:"如何连接数据库",tabindex:"-1"},[s("如何连接数据库 "),i("a",{class:"header-anchor",href:"#如何连接数据库","aria-label":'Permalink to "如何连接数据库"'},"​")],-1),i("h3",{id:"直接代码编写参数配置",tabindex:"-1"},[s("直接代码编写参数配置 "),i("a",{class:"header-anchor",href:"#直接代码编写参数配置","aria-label":'Permalink to "直接代码编写参数配置"'},"​")],-1),i("h3",{id:"配置文件",tabindex:"-1"},[s("配置文件 "),i("a",{class:"header-anchor",href:"#配置文件","aria-label":'Permalink to "配置文件"'},"​")],-1),i("p",null,"文件名固定就叫 c3p0-config.xml , 不允许修改",-1),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//空参，自动到classpath目录下面加载“c3p0-config.xml”配置文件---配置文件的存储位置和名称必须是这样，且使用“默认配置”")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"ComboPooledDataSource pool "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ComboPooledDataSource"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//加载“c3p0-config.xml”文件中定义的“demo”这个配置元素")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"ComboPooledDataSource pool "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ComboPooledDataSource"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"demo"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")])])]),i("button",{class:"collapse"})],-1),i("p",null,"示例:",-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<?"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"xml"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"1.0"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," encoding"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"UTF-8"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"?>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"c3p0-config"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"default-config"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"user"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">root</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"password"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">root</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"driverClass"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">com.mysql.cj.jdbc.Driver</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"jdbcUrl"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">jdbc:mysql://192.168.200.253:3306/jdbc?useSSL=false"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"&amp;"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"serverTimezone=UTC"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"&amp;"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"characterEncoding=utf-8</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        <!--高级参数-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        <!--当连接池中的连接耗尽的时候c3p0一次同时获取的连接数。Default: 3 -->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"acquireIncrement"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">5</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        <!--初始缓冲池大小，最小和最大连接数量-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"initialPoolSize"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">20</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"minPoolSize"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">2</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"maxPoolSize"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">40</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"default-config"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    <!--也可自定义名称引用，默认加载 default-config -->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"named-config"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"myC3p0"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"c3p0-config"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1)])),"main-header":a(()=>[l(t.$slots,"main-header")]),"main-header-after":a(()=>[l(t.$slots,"main-header-after")]),"main-nav":a(()=>[l(t.$slots,"main-nav")]),"main-content":a(()=>[l(t.$slots,"main-content")]),"main-content-after":a(()=>[l(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[l(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[l(t.$slots,"main-nav-after")]),comment:a(()=>[l(t.$slots,"comment")]),footer:a(()=>[l(t.$slots,"footer")]),aside:a(()=>[l(t.$slots,"aside")]),"aside-custom":a(()=>[l(t.$slots,"aside-custom")]),default:a(()=>[l(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{v as default};
