import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as E,o as m,c as g,w as a,r as e,g as i,h as s,f as c,p as k}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const D={__name:"faq",setup(y,{expose:o}){const l=JSON.parse('{"title":"常见问题","description":"","frontmatter":{"title":"常见问题"},"headers":[{"level":2,"title":"conflicts with existing, non-compatible bean definition of same name and class","slug":"conflicts-with-existing-non-compatible-bean-definition-of-same-name-and-class","link":"#conflicts-with-existing-non-compatible-bean-definition-of-same-name-and-class","children":[]},{"level":2,"title":"关于文件上传","slug":"关于文件上传","link":"#关于文件上传","children":[]}],"relativePath":"pages/posts/java-stack/spring-mvc/faq.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/spring-mvc/faq.md","lastUpdated":1732447053000}'),h=E(),n=l.frontmatter||{};return h.meta.frontmatter=Object.assign(h.meta.frontmatter||{},l.frontmatter||{}),k("pageData",l),k("valaxy:frontmatter",n),globalThis.$frontmatter=n,o({frontmatter:{title:"常见问题"}}),(t,r)=>{const p=d;return m(),g(p,{frontmatter:c(n)},{"main-content-md":a(()=>r[0]||(r[0]=[i("h2",{id:"conflicts-with-existing-non-compatible-bean-definition-of-same-name-and-class",tabindex:"-1"},[s("conflicts with existing, non-compatible bean definition of same name and class "),i("a",{class:"header-anchor",href:"#conflicts-with-existing-non-compatible-bean-definition-of-same-name-and-class","aria-label":'Permalink to "conflicts with existing, non-compatible bean definition of same name and class"'},"​")],-1),i("p",null,"SpringMVC中所有的bean（例如@controll，@service，@Component 等注解的类）都是应该是采用类似键值对(key/value)的映射方式处理的。",-1),i("p",null,"而当中的键，默认是用bean类名（非全类名）作为键。这样，如果不同包下面的两个bean 重名的话，就会导致SpringMVC的容器管理中的 map中的key重复了。",-1),i("p",null,"根本原因就是没用全路径类名做映射关系，所以注意Controller类名不要重复，或者注解后边进行重命名即可。",-1),i("h2",{id:"关于文件上传",tabindex:"-1"},[s("关于文件上传 "),i("a",{class:"header-anchor",href:"#关于文件上传","aria-label":'Permalink to "关于文件上传"'},"​")],-1),i("ul",null,[i("li",null,[i("a",{href:"https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-servlet/multipart.html",target:"_blank",rel:"noreferrer"},"multipart")])],-1),i("p",null,"spring6之后使用StandardServletMultipartResolver",-1),i("p",null,"spring6之前使用CommonsMultipartResolver",-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"<!--spring6 之后-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"bean"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"multipartResolver"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"org.springframework.web.multipart.support.StandardServletMultipartResolver"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"<!--spring6 之前-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"bean"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"multipartResolver"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"org.springframework.web.multipart.commons.CommonsMultipartResolver"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    <!--设定上传文件的编码-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"defaultEncoding"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"UTF-8"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    <!--文件上传最大值为5MB, 5*1024*1024-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"maxUploadSize"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"5242880"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    <!--设定文件上传写入内存的最大值，如果超过这个值，则写入临时文件-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"maxInMemorySize"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"40960"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"   <!--延迟文件解析-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"property"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"resolveLazily"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"false"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"bean")])])]),i("button",{class:"collapse"})],-1)])),"main-header":a(()=>[e(t.$slots,"main-header")]),"main-header-after":a(()=>[e(t.$slots,"main-header-after")]),"main-nav":a(()=>[e(t.$slots,"main-nav")]),"main-content":a(()=>[e(t.$slots,"main-content")]),"main-content-after":a(()=>[e(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(t.$slots,"main-nav-after")]),comment:a(()=>[e(t.$slots,"comment")]),footer:a(()=>[e(t.$slots,"footer")]),aside:a(()=>[e(t.$slots,"aside")]),"aside-custom":a(()=>[e(t.$slots,"aside-custom")]),default:a(()=>[e(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{D as default};
