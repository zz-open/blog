import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as c,o as h,c as f,w as a,r,g as e,h as n,f as g,p}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const B={__name:"integration-myabtis",setup(b,{expose:m}){const l=JSON.parse('{"title":"常用注解","description":"","frontmatter":{"title":"常用注解"},"headers":[{"level":2,"title":"@Bean","slug":"bean","link":"#bean","children":[]},{"level":2,"title":"@Component","slug":"component","link":"#component","children":[]},{"level":2,"title":"@Repository","slug":"repository","link":"#repository","children":[]},{"level":2,"title":"@Controller","slug":"controller","link":"#controller","children":[]},{"level":2,"title":"@Service","slug":"service","link":"#service","children":[]},{"level":2,"title":"@Value","slug":"value","link":"#value","children":[]},{"level":2,"title":"@Qualifier","slug":"qualifier","link":"#qualifier","children":[]},{"level":2,"title":"@ResponseBody","slug":"responsebody","link":"#responsebody","children":[]},{"level":2,"title":"@RequestParam","slug":"requestparam","link":"#requestparam","children":[]},{"level":2,"title":"@RequestMapping","slug":"requestmapping","link":"#requestmapping","children":[]}],"relativePath":"pages/posts/java-stack/spring/integration-myabtis.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/spring/integration-myabtis.md","lastUpdated":1732447053000}'),i=c(),o=l.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},l.frontmatter||{}),p("pageData",l),p("valaxy:frontmatter",o),globalThis.$frontmatter=o,m({frontmatter:{title:"常用注解"}}),(t,s)=>{const d=u;return h(),f(d,{frontmatter:g(o)},{"main-content-md":a(()=>s[0]||(s[0]=[e("h2",{id:"bean",tabindex:"-1"},[n("@Bean "),e("a",{class:"header-anchor",href:"#bean","aria-label":'Permalink to "@Bean"'},"​")],-1),e("p",null,"用在方法上，将当前方法的返回值对象放到容器当中！可以理解为前者是由spring自动创建对象，而@Bean创建对象是交给我们自己来控制。",-1),e("p",null,"@Bean一般出现在方法上面，也可用于自定义注解上",-1),e("h2",{id:"component",tabindex:"-1"},[n("@Component "),e("a",{class:"header-anchor",href:"#component","aria-label":'Permalink to "@Component"'},"​")],-1),e("p",null,"该注解用于将一个类标识为组件（Component）。它是通用的注解，表示一个普通的 Spring 组件。被 @Component 注解标记的类将由 Spring 自动扫描并注册为 Bean，可通过依赖注入等方式使用。",-1),e("h2",{id:"repository",tabindex:"-1"},[n("@Repository "),e("a",{class:"header-anchor",href:"#repository","aria-label":'Permalink to "@Repository"'},"​")],-1),e("p",null,"该注解用于将一个类标识为数据访问层组件（Repository）。通常用于与数据库交互的类，封装了数据访问逻辑。被 @Repository 注解标记的类通常配合其他注解如 @Autowired 进行依赖注入，提供持久化数据的操作。",-1),e("h2",{id:"controller",tabindex:"-1"},[n("@Controller "),e("a",{class:"header-anchor",href:"#controller","aria-label":'Permalink to "@Controller"'},"​")],-1),e("p",null,"该注解用于将一个类标识为控制器层组件（Controller）。通常用于接收请求、处理业务逻辑，并返回视图或数据给客户端。被 @Controller 注解标记的类可以通过 @RequestMapping 或其他相关注解定义请求映射和处理方法。",-1),e("h2",{id:"service",tabindex:"-1"},[n("@Service "),e("a",{class:"header-anchor",href:"#service","aria-label":'Permalink to "@Service"'},"​")],-1),e("p",null,"该注解用于将一个类标识为服务层组件（Service）。通常用于实现业务逻辑的类，可以封装具体的业务操作。被 @Service 注解标记的类通常与 @Repository 注解标记的类配合使用，通过依赖注入调用数据访问层的方法，提供业务服务。",-1),e("h2",{id:"value",tabindex:"-1"},[n("@Value "),e("a",{class:"header-anchor",href:"#value","aria-label":'Permalink to "@Value"'},"​")],-1),e("p",null,"用于注入值到属性或方法参数中。可以通过 SpEL（Spring 表达式语言）进行动态赋值。",-1),e("h2",{id:"qualifier",tabindex:"-1"},[n("@Qualifier "),e("a",{class:"header-anchor",href:"#qualifier","aria-label":'Permalink to "@Qualifier"'},"​")],-1),e("p",null,"与 @Autowired 注解一起使用，用于指定具体的依赖对象的名称，解决依赖注入时的歧义性。",-1),e("h2",{id:"responsebody",tabindex:"-1"},[n("@ResponseBody "),e("a",{class:"header-anchor",href:"#responsebody","aria-label":'Permalink to "@ResponseBody"'},"​")],-1),e("p",null,"用于将方法的返回值直接作为响应体返回给客户端，常用于 RESTful 接口的实现。",-1),e("h2",{id:"requestparam",tabindex:"-1"},[n("@RequestParam "),e("a",{class:"header-anchor",href:"#requestparam","aria-label":'Permalink to "@RequestParam"'},"​")],-1),e("p",null,"用于将请求参数绑定到方法的参数上。",-1),e("h2",{id:"requestmapping",tabindex:"-1"},[n("@RequestMapping "),e("a",{class:"header-anchor",href:"#requestmapping","aria-label":'Permalink to "@RequestMapping"'},"​")],-1),e("p",null,"用于映射 HTTP 请求到方法或控制器类上，定义请求的 URL、HTTP 方法、请求参数等。 类似的还有@GetMapping @PostMapping @PutMapping @DeleteMapping @PatchMapping等",-1)])),"main-header":a(()=>[r(t.$slots,"main-header")]),"main-header-after":a(()=>[r(t.$slots,"main-header-after")]),"main-nav":a(()=>[r(t.$slots,"main-nav")]),"main-content":a(()=>[r(t.$slots,"main-content")]),"main-content-after":a(()=>[r(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[r(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[r(t.$slots,"main-nav-after")]),comment:a(()=>[r(t.$slots,"comment")]),footer:a(()=>[r(t.$slots,"footer")]),aside:a(()=>[r(t.$slots,"aside")]),"aside-custom":a(()=>[r(t.$slots,"aside-custom")]),default:a(()=>[r(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{B as default};