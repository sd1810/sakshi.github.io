(this["webpackJsonpsakshi.github.io"]=this["webpackJsonpsakshi.github.io"]||[]).push([[0],{21:function(e,a,t){},22:function(e,a,t){},24:function(e,a,t){e.exports=t(41)},29:function(e,a,t){},30:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(7),l=t.n(i),c=(t(29),t(12)),r=t.n(c),o=(t(30),t(13)),m=t(16),d=t.n(m);class h extends s.Component{constructor(){super(),this.titles=[],this.state={checked:!1},this.onThemeSwitchChange=this.onThemeSwitchChange.bind(this)}onThemeSwitchChange(e){this.setState({checked:e}),this.setTheme()}setTheme(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}render(){if(this.props.sharedData){var e=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map(e=>[e.toUpperCase(),1500]).flat()}const a=n.a.memo(()=>n.a.createElement(o.a,{className:"title-styles",steps:this.titles,loop:50}),(e,a)=>!0);return n.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},n.a.createElement("div",{className:"row aligner",style:{height:"100%"}},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",null,n.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),n.a.createElement("br",null),n.a.createElement("h1",{className:"mb-0"},n.a.createElement(o.a,{steps:[e],wrapper:"p"})),n.a.createElement("div",{className:"title-container"},n.a.createElement(a,null)),n.a.createElement(d.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:n.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:n.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}var p=h;class u extends s.Component{render(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return n.a.createElement("span",{key:e.name,className:"m-4"},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:e.class})))}));return n.a.createElement("footer",null,n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"social-links"},e),n.a.createElement("div",{className:"copyright py-4 text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("small",null,"Developed by \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}var f=u,E=t(10),g=t(17),v=t.n(g),N=t(18),y=t.n(N),x=t(19),b=t.n(x);class k extends s.Component{render(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.about,t=this.props.resumeBasicInfo.description_header,s=this.props.resumeBasicInfo.description;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{style:{color:"black"}},n.a.createElement("span",null,a)),n.a.createElement("div",{className:"row center mx-auto mb-5"},n.a.createElement("div",{className:"col-md-4 mb-5 center"},n.a.createElement("div",{className:"polaroid"},n.a.createElement("span",{style:{cursor:"auto"}},n.a.createElement("img",{height:"250px",width:"270px",src:e,alt:"Avatar placeholder"}),n.a.createElement(E.Icon,{icon:v.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),n.a.createElement(E.Icon,{icon:y.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),n.a.createElement(E.Icon,{icon:b.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))),n.a.createElement("div",{className:"col-md-8 center"},n.a.createElement("div",{className:"col-md-10"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),n.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},n.a.createElement("br",null),n.a.createElement("span",{className:"wave"},t," :) "),n.a.createElement("br",null),n.a.createElement("br",null),s)))))))}}var w=k,S=t(11),I=(t(37),t(14));class B extends s.Component{render(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){const t=e.technologies;var s=e.mainTech.map((e,a)=>n.a.createElement(I.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)),i=t.map((e,a)=>n.a.createElement(I.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e));return n.a.createElement(S.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:n.a.createElement("i",null,n.a.createElement("img",{src:e.logo,className:"work-icon"})),key:a},n.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},s),n.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),n.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))}));return n.a.createElement("section",{id:"resume",className:"pb-5"},n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title",style:{color:"black"}},n.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),n.a.createElement("div",{className:"col-md-8 mx-auto"},n.a.createElement(S.VerticalTimeline,null,a,n.a.createElement(S.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:n.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}var j=B,D=t(44),C=t(20),A=t.n(C),_=t(21),T=t.n(_),z=t(22),L=t.n(z);t(38);class W extends s.Component{render(){if(this.props.data){const l=this.props.data.technologies,c=this.props.data.images;var e=this.props.data.title,a=this.props.data.description,t=this.props.data.url;if(this.props.data.technologies){var s=l.map((e,a)=>n.a.createElement("li",{className:"list-inline-item mx-3",key:a},n.a.createElement("span",null,n.a.createElement("div",{className:"text-center"},n.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},n.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name))))));if(this.props.data.images)var i=c.map((e,a)=>n.a.createElement("div",{key:a,"data-src":e}))}}return n.a.createElement(D.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),n.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},n.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},n.a.createElement("div",{className:"slider-tab"},n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),n.a.createElement(A.a,{cssModule:[T.a,L.a],animation:"scaleOutAnimation",className:"slider-image"},i)),n.a.createElement("div",{className:"col-md-10 mx-auto"},n.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},e,t?n.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link-href"},n.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),n.a.createElement("p",{className:"modal-description"},a),n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("ul",{className:"list-inline mx-auto"},s)))))}}var P=W;class M extends s.Component{constructor(e){super(e),this.state={deps:{},detailsModalShow:!1}}render(){let e=e=>{this.setState({detailsModalShow:!0,deps:e})};if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},n.a.createElement("span",{className:"portfolio-item d-block"},n.a.createElement("div",{className:"foto",onClick:()=>e(a)},n.a.createElement("div",null,n.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),n.a.createElement("span",{className:"project-date"},a.startDate),n.a.createElement("br",null),n.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title",style:{color:"black"}},n.a.createElement("span",null,a)),n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"row mx-auto"},t)),n.a.createElement(P,{show:this.state.detailsModalShow,onHide:()=>this.setState({detailsModalShow:!1}),data:this.state.deps})))}}var R=M;class F extends s.Component{render(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return n.a.createElement("li",{className:"list-inline-item mx-3",key:a},n.a.createElement("span",null,n.a.createElement("div",{className:"text-center skills-tile"},n.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},n.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return n.a.createElement("section",{id:"skills"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title"},n.a.createElement("span",{className:"text-white"},e))),n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}var H=F;class U extends s.Component{constructor(e){super(),this.state={foo:"bar",resumeData:{},sharedData:{}}}componentDidMount(){this.loadSharedData();this.loadResumeFromPath("res_primaryLanguage.json")}loadResumeFromPath(e){r.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}loadSharedData(){r.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}render(){return n.a.createElement("div",null,n.a.createElement(p,{sharedData:this.state.sharedData.basic_info}),n.a.createElement(w,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),n.a.createElement(R,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(H,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(j,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(f,{sharedBasicInfo:this.state.sharedData.basic_info}))}}var O=U;const V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,a){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;null!=t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(40);window.$primaryLanguage="en",l.a.render(n.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sakshi.github.io",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const a="".concat("/sakshi.github.io","/service-worker.js");V?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(t=>{const s=t.headers.get("content-type");404===t.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):J(e,a)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):J(a,e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.8fd5a6a2.chunk.js.map