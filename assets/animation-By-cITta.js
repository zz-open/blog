import{k as a,ak as o,al as t,s as r}from"./app-boVvO3tb.js";import{c as u}from"./index-BRXJGymZ.js";function y(i){const e=a(!1),{top:n}=o(i);return t(i,([{isIntersecting:s}])=>{e.value=s}),{show:()=>{e.value||window.scrollTo(0,n.value)}}}function d(i,e){r(i,{initial:{opacity:0,y:e.y||40},enter:{opacity:1,y:0,transition:{delay:e.i*(e.delay||50),type:"spring",ease:u.easeIn,damping:8,duration:e.duration||400}}})}export{d as a,y as u};