(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function m(){}function z(e){return e()}function $(){return Object.create(null)}function v(e){e.forEach(z)}function I(e){return typeof e=="function"}function R(e,s){return e!=e?s==s:e!==s||e&&typeof e=="object"||typeof e=="function"}function D(e){return Object.keys(e).length===0}function E(e,s,t){e.insertBefore(s,t||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function j(e){return document.createElement(e)}function M(e,s,t){t==null?e.removeAttribute(s):e.getAttribute(s)!==t&&e.setAttribute(s,t)}function N(e){return Array.from(e.childNodes)}let k;function u(e){k=e}const c=[],W=[],f=[],A=[],G=Promise.resolve();let y=!1;function B(){y||(y=!0,G.then(C))}function g(e){f.push(e)}const w=new Set;let d=0;function C(){if(d!==0)return;const e=k;do{try{for(;d<c.length;){const s=c[d];d++,u(s),H(s.$$)}}catch(s){throw c.length=0,d=0,s}for(u(null),c.length=0,d=0;W.length;)W.pop()();for(let s=0;s<f.length;s+=1){const t=f[s];w.has(t)||(w.add(t),t())}f.length=0}while(c.length);for(;A.length;)A.pop()();y=!1,w.clear(),u(e)}function H(e){if(e.fragment!==null){e.update(),v(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(g)}}const p=new Set;let U;function O(e,s){e&&e.i&&(p.delete(e),e.i(s))}function X(e,s,t,r){if(e&&e.o){if(p.has(e))return;p.add(e),U.c.push(()=>{p.delete(e),r&&(t&&e.d(1),r())}),e.o(s)}else r&&r()}function Y(e){e&&e.c()}function K(e,s,t,r){const{fragment:a,after_update:i}=e.$$;a&&a.m(s,t),r||g(()=>{const l=e.$$.on_mount.map(z).filter(I);e.$$.on_destroy?e.$$.on_destroy.push(...l):v(l),e.$$.on_mount=[]}),i.forEach(g)}function F(e,s){const t=e.$$;t.fragment!==null&&(v(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}function Q(e,s){e.$$.dirty[0]===-1&&(c.push(e),B(),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function P(e,s,t,r,a,i,l,L=[-1]){const h=k;u(e);const o=e.$$={fragment:null,ctx:[],props:i,update:m,not_equal:a,bound:$(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:$(),dirty:L,skip_bound:!1,root:s.target||h.$$.root};l&&l(o.root);let x=!1;if(o.ctx=t?t(e,s.props||{},(n,_,...q)=>{const T=q.length?q[0]:_;return o.ctx&&a(o.ctx[n],o.ctx[n]=T)&&(!o.skip_bound&&o.bound[n]&&o.bound[n](T),x&&Q(e,n)),_}):[],o.update(),x=!0,v(o.before_update),o.fragment=r?r(o.ctx):!1,s.target){if(s.hydrate){const n=N(s.target);o.fragment&&o.fragment.l(n),n.forEach(b)}else o.fragment&&o.fragment.c();s.intro&&O(e.$$.fragment),K(e,s.target,s.anchor,s.customElement),C()}u(h)}class S{$destroy(){F(this,1),this.$destroy=m}$on(s,t){if(!I(t))return m;const r=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return r.push(t),()=>{const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}$set(s){this.$$set&&!D(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}}function V(e){let s;return{c(){s=j("div"),s.innerHTML=`<header class="pt-5 pl-5 svelte-15s6mmr"><div class="title-area"><img class="logo svelte-15s6mmr" src="https://kopisusa.com/wp-content/uploads/2021/02/logo-w@2x.png" alt="Kopis Logo"/> 
			<p class="kern-10 text-xl uppercase svelte-15s6mmr">Coffee Questions</p> 
			<p class="text-xs svelte-15s6mmr">DISCLAIMER - this is a fake site</p></div> 
		<hr/></header> 
	<main class="mt-10 ml-10 svelte-15s6mmr"><section class="svelte-15s6mmr"><h2 class="kern-10 text-xl uppercase svelte-15s6mmr">What is Kopis?</h2> 
			<p class="svelte-15s6mmr">True or False? <dfn class="svelte-15s6mmr">Kopis</dfn> is derived from the a Greek word <ruby>κοπίς</ruby>, which
				means &quot;to cut, to strike.&quot; It is the name of a type of sword suitable for combat while
				sitting atop a horse.</p> 
			<br/> 
			<details class="svelte-15s6mmr"><summary class="svelte-15s6mmr">Reveal the answer!</summary> 
				<p class="svelte-15s6mmr">False.<br/>A <dfn class="svelte-15s6mmr">Kopis</dfn> is a cup of bitter coffee.</p> 
				<br/> 
				<p class="svelte-15s6mmr">No, it&#39;s a sword, but <i>Kopis</i> is also the name of a company that builds software for
					Greenville businesses.
					<i>Kopis</i> is aptly named because one of its defining principles, to <u class="svelte-15s6mmr">simplify</u>,
					requires cutting away non-essentials.
					<br/> 
					<br/> 
					<dfn class="svelte-15s6mmr">Kopis</dfn> is the software consultancy with these four defining principles:</p> 
				<ul class="list-decimal m-5 svelte-15s6mmr"><li class="svelte-15s6mmr">Lead</li> 
					<li class="svelte-15s6mmr">Respect</li> 
					<li class="svelte-15s6mmr">Impact</li> 
					<li class="svelte-15s6mmr">Simplify</li></ul> 
				<div class="mt-5 grid gap-8"><div class="mb-1"><p class="mb-1 svelte-15s6mmr">To <dfn class="svelte-15s6mmr">Lead</dfn> is to be a confident in knowing where they are going, which
							requires a deep understanding of the problem and the solution.
							<br/>A leader must continually evaluate and be prepared to adjust to three things:</p> 
						<ul class="list-decimal m-5 svelte-15s6mmr"><li class="capitalize svelte-15s6mmr">What you know</li> 
							<li class="capitalize svelte-15s6mmr">What you know you don&#39;t know</li> 
							<li class="capitalize svelte-15s6mmr">What you don&#39;t know you don&#39;t know</li></ul></div> 
					<div><p class="svelte-15s6mmr">To <dfn class="svelte-15s6mmr">respect</dfn> is to show a natural appreciation for talented colleagues, but
							it is also an appreciation for those we routinely outperform. A productive environment
							requires that we all get grow. Come prepared to <u class="svelte-15s6mmr">play nice</u> and share your insights
							and concerns in a way that is encouraging and productive. This can demand selflessness
							and humility and empathy. Be fair, be honest, be kind.</p></div> 
					<div><p class="mb-1 svelte-15s6mmr">To <dfn class="svelte-15s6mmr">Impact</dfn> is to effect or influence. In both product and relational terms, it
							means to steadily progress. Correct and purposeful software has sustained impact, but seeing
							a product mature can also positively impact us. Who does not enjoy seeing order emerge?</p> 
						<p class="mt-1 svelte-15s6mmr">There is design-impact resulting from working openly. Each step forward impacts the
							relationship with the client, instilling confidence in the process and growing trust
							in Kopis.</p> 
						<ul class="list-disc m-5 svelte-15s6mmr"><li class="svelte-15s6mmr">Understand the problem</li> 
							<li class="svelte-15s6mmr">Articulate the problem</li> 
							<li class="svelte-15s6mmr">Divide the problem</li> 
							<li class="svelte-15s6mmr">Provided incremental solutions</li> 
							<li class="svelte-15s6mmr">Adapt and Iterate logically and with consensus</li></ul> 
						<p class="mt-1 svelte-15s6mmr">Each misstep has the opposite effect. Software is hard to build and transparency is an
							essential component in making a positive impact.</p></div> 
					<div><p class="svelte-15s6mmr">To <dfn class="svelte-15s6mmr">Simplify</dfn> is to reduce the complexity of a system by applying diligence and
							ingenuity.</p> 
						<p class="svelte-15s6mmr">The software development process offers many opportunities to simplify and it is the
							defining element of problem solving.</p> 
						<ul class="list-disc m-5 svelte-15s6mmr"><li class="svelte-15s6mmr">The software development process is a series of steps that can be broken down (<u class="svelte-15s6mmr">simplified</u>) into smaller steps.</li> 
							<li class="svelte-15s6mmr">Refactoring is the process of <u class="svelte-15s6mmr">simplifying</u> the codebase by removing duplication
								and improving readability.</li> 
							<li class="svelte-15s6mmr">UX design is the process of <u class="svelte-15s6mmr">simplifying</u> the user experience by removing unnecessary
								steps and improving the flow.</li></ul></div></div></details></section> 
		<section class="svelte-15s6mmr"><h2 class="kern-10 text-xl uppercase svelte-15s6mmr">How does Kopis provide accurate estimates?</h2> 
			<p class="svelte-15s6mmr">True or False? We guess.</p> 
			<br/> 
			<details class="svelte-15s6mmr"><summary class="svelte-15s6mmr">Reveal the answer!</summary> 
				<p class="svelte-15s6mmr">Correct. The only way to know how long something will take is to do it. Every project is
					unique and knowing the duration ahead of time is simply not possible. <br/>
					A single person cannot estimate the number of gumballs in a jar, but a crowd can. We are not
					counting gumballs, but we produce countable parts. Accurate estimates require a
					<u class="svelte-15s6mmr">deep discovery</u>
					phase where objectives are identified, the domain language is established, the scope is &quot;understood&quot;,
					and the team can begins to organize and identify the work.</p> 
				<ul class="list-disc ml-5 svelte-15s6mmr"><li class="svelte-15s6mmr">Agree with the customer on the problem</li> 
					<li class="svelte-15s6mmr">Agree with the customer and the team on the solution</li> 
					<li class="svelte-15s6mmr">Agree with the team on the decomposition of work</li> 
					<li class="svelte-15s6mmr">Poll teammates for estimates</li> 
					<li class="svelte-15s6mmr">Calculate the (weighted) average</li></ul> 
				<br/> 
				<p class="svelte-15s6mmr">Code is the ultimate decomposition tool and at some point the design process must move
					into the IDE. Code is also specialized and time intensive, so before coding begins it is
					essential that all the &quot;things we know we don&#39;t know&quot; are identified and a list of
					&quot;ilities&quot; has been considered, reducing the &quot;things we didn&#39;t know we didn&#39;t know&quot; and
					increasing both the &quot;things we know we know&quot; and the &quot;things we know we don&#39;t know&quot;.
					<br/>Only then does discovery moves into the code laboratory. Once the results of those
					experiments are fed back into the discovery faze and no new unknown emerge, we consider
					the discovery phase complete and begin computing estimates.</p> 
				<br/> 
				<details class="svelte-15s6mmr"><summary class="svelte-15s6mmr">What are &quot;Ilities&quot;???</summary> 
					<p class="svelte-15s6mmr">The <dfn class="svelte-15s6mmr">ilities</dfn> of software architecture refer to various qualities or characteristics
						that good software architecture should possess. Some of the most common &quot;ilities&quot; include:</p> 
					<br/> 
					<dl class="svelte-15s6mmr"><dt class="svelte-15s6mmr">Scalability</dt><dd class="svelte-15s6mmr">The ability of the software to handle increasing workloads without a decrease in
							performance.
						</dd><dt class="svelte-15s6mmr">Availability</dt><dd class="svelte-15s6mmr">the degree to which the software is operational and accessible when required.</dd><dt class="svelte-15s6mmr">Maintainability</dt><dd class="svelte-15s6mmr">the ease with which the software can be modified to correct faults, improve its
							performance, or adapt to changing environments.
						</dd><dt class="svelte-15s6mmr">Usability</dt><dd class="svelte-15s6mmr">the ease with which the software can be used by end-users.</dd><dt class="svelte-15s6mmr">Security</dt><dd class="svelte-15s6mmr">the measures taken to protect the software from unauthorized access or malicious
							attacks.
						</dd><dt class="svelte-15s6mmr">Testability</dt><dd class="svelte-15s6mmr">the ease with which the software can be tested to ensure that it meets specified
							requirements.
						</dd><dt class="svelte-15s6mmr">Portability</dt><dd class="svelte-15s6mmr">the ease with which the software can be transferred from one environment to another.</dd></dl> 
					<dl class="svelte-15s6mmr"><dt class="svelte-15s6mmr">Flexibility</dt><dd class="svelte-15s6mmr">the ability of the software to adapt to changing requirements and environments.</dd><dt class="svelte-15s6mmr">Reliability</dt><dd class="svelte-15s6mmr">the dependability of the software to perform its intended functions under specified
							conditions.
						</dd><dt class="svelte-15s6mmr">Performance</dt><dd class="svelte-15s6mmr">the speed and efficiency with which the software carries out its functions.</dd><dt class="svelte-15s6mmr">Manageability</dt><dd class="svelte-15s6mmr">the ease with which the software can be monitored, managed, and controlled.</dd><dt class="svelte-15s6mmr">Interoperability</dt><dd class="svelte-15s6mmr">the ability of the software to work effectively with other software systems.</dd><dt class="svelte-15s6mmr">Reusability</dt><dd class="svelte-15s6mmr">the ability of the software to be used in multiple contexts without modification.
						</dd><dt class="svelte-15s6mmr">Extensibility</dt><dd class="svelte-15s6mmr">the ability of the software to be expanded or modified to accommodate new features or
							functions.
						</dd><dt class="svelte-15s6mmr">Modularity</dt><dd class="svelte-15s6mmr">the degree to which the software can be divided into independent, functional
							components.
						</dd><dt class="svelte-15s6mmr">Robustness</dt><dd class="svelte-15s6mmr">the ability of the software to continue functioning correctly even in the presence of
							unexpected inputs or errors.
						</dd><dt class="svelte-15s6mmr">Compatibility</dt><dd class="svelte-15s6mmr">the ability of the software to work correctly with other systems and technologies.
						</dd><dt class="svelte-15s6mmr">Efficiency</dt><dd class="svelte-15s6mmr">the ability of the software to use resources effectively and minimize waste.</dd><dt class="svelte-15s6mmr">Resilience</dt><dd class="svelte-15s6mmr">the ability of the software to recover from failures and continue functioning
							correctly.</dd></dl> 
					<dl class="svelte-15s6mmr"><dt class="svelte-15s6mmr">Configurability</dt><dd class="svelte-15s6mmr">the ability of the software to be adjusted or configured to meet specific needs or
							requirements.
						</dd><dt class="svelte-15s6mmr">Localization</dt><dd class="svelte-15s6mmr">the ability of the software to be adapted for use in different locales or regions.
						</dd><dt class="svelte-15s6mmr">Adaptability</dt><dd class="svelte-15s6mmr">the ability of the software to be modified or adapted to changing requirements or
							environments.
						</dd><dt class="svelte-15s6mmr">Portability</dt><dd class="svelte-15s6mmr">the ability of the software to be executed on different hardware or operating systems
							with minimal modification.
						</dd><dt class="svelte-15s6mmr">Cost-effectiveness</dt><dd class="svelte-15s6mmr">the ability of the software to be developed, deployed, and maintained at a reasonable
							cost.
						</dd><dt class="svelte-15s6mmr">Accessibility</dt><dd class="svelte-15s6mmr">the ability of the software to be used by people with disabilities.</dd><dt class="svelte-15s6mmr">Auditability</dt><dd class="svelte-15s6mmr">the ability of the software to be audited to determine if it is functioning correctly
							and securely.
						</dd><dt class="svelte-15s6mmr">Resurrectability</dt><dd class="svelte-15s6mmr">the ability of the software to recover from disasters or failures and continue
							functioning correctly.
						</dd><dt class="svelte-15s6mmr">Backward compatibility</dt><dd class="svelte-15s6mmr">the ability of the software to work with earlier versions of itself or other software
							systems.
						</dd><dt class="svelte-15s6mmr">Forward compatibility</dt><dd class="svelte-15s6mmr">the ability of the software to work with future versions of itself or other software
							systems.
						</dd><dt class="svelte-15s6mmr">Ease of deployment</dt><dd class="svelte-15s6mmr">the ease with which the software can be deployed or installed into a production
							environment.
						</dd><dt class="svelte-15s6mmr">Ease of operation</dt><dd class="svelte-15s6mmr">the ease with which the software can be operated or used by end-users.</dd></dl> 
					<dl class="svelte-15s6mmr"><dt class="svelte-15s6mmr">Interoperability</dt><dd class="svelte-15s6mmr">the ability of the software to work with other software systems.</dd><dt class="svelte-15s6mmr">Performance efficiency</dt><dd class="svelte-15s6mmr">the ability of the software to perform its functions quickly and efficiently.</dd><dt class="svelte-15s6mmr">Robustness</dt><dd class="svelte-15s6mmr">the ability of the software to handle unexpected inputs and conditions without
							failure.
						</dd><dt class="svelte-15s6mmr">Recovery</dt><dd class="svelte-15s6mmr">the ability of the software to recover from failures and continue functioning
							correctly.
						</dd><dt class="svelte-15s6mmr">Resilience</dt><dd class="svelte-15s6mmr">the ability of the software to withstand stress and recover from adverse conditions.
						</dd><dt class="svelte-15s6mmr">Extensibility</dt><dd class="svelte-15s6mmr">the ability of the software to be extended or added to in the future to meet new
							requirements.
						</dd><dt class="svelte-15s6mmr">Replaceability</dt><dd class="svelte-15s6mmr">the ability of the software to be replaced by another software system without
							significant disruption.
						</dd><dt class="svelte-15s6mmr">Reusability</dt><dd class="svelte-15s6mmr">the ability of the software to be reused in other software systems or applications.
						</dd><dt class="svelte-15s6mmr">Transferability</dt><dd class="svelte-15s6mmr">the ability of the software to be transferred from one system to another with minimal
							modification.
						</dd><dt class="svelte-15s6mmr">Compatibility</dt><dd class="svelte-15s6mmr">the ability of the software to work with other software systems, hardware systems, or
							environments.</dd></dl> 
					<br/> 
					<p class="svelte-15s6mmr">It is a cute name for a long and non-standard list of widgets you can pack into the
						software machinery. They are not meant to be formal areas of design, but specialized
						lights designed to probe the various dark corners are the problem domain. Here are some
						more of a much larger list of concerns that may appear be relevant to the solution:</p> 
					<br/> 
					<ul class="grid grid-fit svelte-15s6mmr"><li class="svelte-15s6mmr">Authentication</li> 
						<li class="svelte-15s6mmr">Authorization</li> 
						<li class="svelte-15s6mmr">Access Control</li> 
						<li class="svelte-15s6mmr">Configuration</li> 
						<li class="svelte-15s6mmr">Deployment</li> 
						<li class="svelte-15s6mmr">Documentation</li> 
						<li class="svelte-15s6mmr">Encryption</li> 
						<li class="svelte-15s6mmr">Error Handling</li> 
						<li class="svelte-15s6mmr">Logging</li> 
						<li class="svelte-15s6mmr">Monitoring</li> 
						<li class="svelte-15s6mmr">Testing</li> 
						<li class="svelte-15s6mmr">Usability</li> 
						<li class="svelte-15s6mmr">Version Control</li> 
						<li class="svelte-15s6mmr">Network Indifference</li></ul></details></details></section> 
		<section class="svelte-15s6mmr"><h2 class="kern-10 text-xl uppercase svelte-15s6mmr">Is working for <i>Kopis</i> a job or an adventure?</h2> 
			<p class="svelte-15s6mmr">True or False? Working at Kopis is an adventure?</p> 
			<br/> 
			<details class="svelte-15s6mmr"><summary class="svelte-15s6mmr">Reveal the answer!</summary> 
				<p class="svelte-15s6mmr">False. It is a job, but here are a few things we do to make it a little more adventurous.</p> 
				<br/> 
				<h2 class="svelte-15s6mmr">Gumballs</h2> 
				<p class="svelte-15s6mmr">Remember those &quot;ilities&quot; we were talking about earlier? Yeah, we actually printed them on
					gumballs! When we are taking on a new project we get around the table and Andy gives us a
					stack of quarters. If the project is large and the client is willing, he give us a lot of
					quarters. We take the first quarter to the gumball machine, drop in the quarter and see
					what comes out! Occasionally it makes no sense, but generally there is applicability
					(yeah, I know). Once, while working on a church landing page, we got &quot;resurrectablility&quot;.
					We all laughed and then we got to work. We were able to resurrect the church&#39;s website
					with the help of a few more gumballs.
					<br/>
					Why do we do it this way instead of going through an organized list? Because it is fun and
					it gets us talking about the project. We get to know each other better and we get to know the
					project better. It is a great way to start a project. A more systematic approach soon follows,
					but the gumball approach gives us all something to chew on (yup).</p> 
				<h2 class="svelte-15s6mmr">Puzzles</h2> 
				<p class="svelte-15s6mmr">We believe in &quot;ilites&quot; so much that we have created hexagon-shaped puzzle pieces that we
					assemble after a project has been completed to memorialize the architectural blueprint of
					that solution.</p> 
				<br/> 
				<h2 class="svelte-15s6mmr">Pranks</h2> 
				<p class="svelte-15s6mmr">You literally would not believe the lengths to which some of our employees go to ensure
					you get your fair share of humility. I&#39;ll simply direct you to <u class="svelte-15s6mmr"><a href="https://kopisusa.com/art-good-office-prank/">The Art of a Good Office Prank</a>.</u></p> 
				<br/> 
				<h2 class="svelte-15s6mmr">Pair Programming</h2> 
				<p class="svelte-15s6mmr">Let&#39;s face it, we are pretty good at cranking out code from the flow-zone but sometimes we
					get stuck. Some problems are hard and rubber duck debugging is not enough. When that
					happens, we help each other get better. One way we do this by pairing up and working
					through the problem together. This is one aspect of <u class="svelte-15s6mmr">respect</u> and a way we grow both professionally
					and as human beings.</p></details></section> 
		<section class="svelte-15s6mmr"><h2 class="kern-10 text-xl uppercase svelte-15s6mmr">How do clients stay informed?</h2> 
			<p class="svelte-15s6mmr">True or False? We have an automated facsimile service that pushes the daily changelog.</p> 
			<br/> 
			<details class="svelte-15s6mmr"><summary class="svelte-15s6mmr">Reveal the answer!</summary> 
				<p class="svelte-15s6mmr">False. Our clients stay informed about the progress of their project through our <u class="svelte-15s6mmr">live access</u>
					program. Our first priority is to build a CI/CD pipeline that puts the latest builds in front
					of our client as pragmatically as possible. When the architecture is still unknown this may
					be a link to a single README file detailing our design progress. For web it is an endpoint.
					For Desktop as well as iOS and Android we have in-app upgrade notifications. These updates
					require two-factor authentication so <b>only</b> stakeholders see them.</p> 
				<p class="svelte-15s6mmr">Software development is a complex process and is rarely a steady progression. Redesigns
					occur, functionality breaks, sites crash, but our customers learn to appreciate these
					challenges and through it all, we not only value their feedback, but we insist on it
					throughout the journey with in-app surveys and A/B testing.</p> 
				<p class="svelte-15s6mmr">This level of transparency and vulnerability is the iron that keeps Kopis sharp.</p></details></section> 
		<section class="svelte-15s6mmr"><h2 class="kern-10 text-xl uppercase svelte-15s6mmr">What is the secret to success?</h2> 
			<p class="svelte-15s6mmr">True or False? We have a secret sauce that we use to make our clients happy.</p> 
			<br/> 
			<details class="svelte-15s6mmr"><summary class="svelte-15s6mmr">Reveal the answer!</summary> 
				<p class="svelte-15s6mmr">True! We have a secret sauce that we use to make our clients happy. It is a proprietary
					blend of
					<dfn class="svelte-15s6mmr">respect</dfn>, <dfn class="svelte-15s6mmr">responsibility</dfn>, <dfn class="svelte-15s6mmr">reliability</dfn>, and
					<dfn class="svelte-15s6mmr">relevance</dfn>. We have found that when we treat our clients with respect, we are
					able to build a relationship that is based on trust. When we are responsible, we are able
					to deliver on our promises. When we are reliable, we are able to deliver on time. When we
					are relevant, we are able to deliver the right solution. When we do all of these things,
					we are able to build long-lasting relationships with our clients.</p> 
				<p class="svelte-15s6mmr">All of these qualities come from <u class="svelte-15s6mmr">listening well</u> and validating our understanding by
					encouraging communication throughout the development process. One part of this is the
					<u class="svelte-15s6mmr">live access</u>
					program that we mentioned earlier. Another part is our
					<u class="svelte-15s6mmr">status updates</u> we push into version control. We have found that these updates are a
					great way to communicate internally to keep us informed about project concerns and to seek
					clarity. Responses can be made via a commit, comment or all depending on the need.</p> 
				<p class="svelte-15s6mmr">It&#39;s important to define the problem correct, and those gumballs are not the only physical
					props we use to achieve success. We also have past experience captured as <u class="svelte-15s6mmr">architectural blueprints</u> in the form hexagonal puzzle pieces. We re-create the puzzle of a similar solution and re-evaluate
					the various &quot;ilities&quot; in the light of present-day technology and the specifics of this challenge.
					Can we simplify the puzzle? Can we improve the puzzle? Is something missing? We literally have
					an ever-growing bag of tricks in the form of 6-sided puzzle pieces, each with a different aspect
					of the development process printed on it.</p></details></section> 
		<section class="svelte-15s6mmr"><h2 class="kern-10 text-xl uppercase svelte-15s6mmr">How does Kopis find and keep great people?</h2> 
			<p class="svelte-15s6mmr">True or False? Kopis only hires the very best.</p> 
			<br/> 
			<details class="svelte-15s6mmr"><summary class="svelte-15s6mmr">Reveal the answer!</summary> 
				<p class="svelte-15s6mmr">False. That would be a very short list of otherwise dysfunctional people. Kopis looks for
					people that own their mistakes and strive to improve. They need people that understand
					clients come to us for solutions not problems in the form of missed deadlines, unexpected
					solutions and hostile relationships. The success of Kopis depends on people putting ego
					aside, working diligently and speaking plainly about what they know and do not know, what
					they can and cannot do. They feel and obligation to speak openly about concerns, are
					willing to share work-in-progress and are generally comfortable being vulnerable. They are
					principled and practical. They pursue their craft, but not at the customers expense.</p> 
				<p class="svelte-15s6mmr">When we find someone like <b>that</b>, they naturally become part of the Kopis family,
					because that is who we are. We work with them to ensure they are fairly compensated so
					they can continue to grow with us.</p> 
				<p class="svelte-15s6mmr">Our avatars assume our strengths and weaknesses, and both are literally a badge of honor.
					We strive to be the best we can be, and that generally means focusing on our strengths and
					avoiding our weaknesses. There is no shame in earning a &quot;rosie&quot; or &quot;rembrandt&quot; badge
					because of a talkative nature or lack of UX skills, nor should much pride be associated
					with &quot;mokoto&quot; for ones innate ability to accurately estimate work. These badges are ways
					of saying, we know you, you are unique and you matter to us.</p> 
				<p class="svelte-15s6mmr">One final note on keeping great people...we live in Greenville. That is not to say we
					reside in Greenville but we experience Greenville. Developers trend toward introvert, but
					we all benefit from enriching experiences. This may mean lunch, laser tag or an in-office
					potluck, but life is too short and work is too long to not know our colleagues.</p></details></section></main>`,M(s,"class","body p-1 svelte-15s6mmr")},m(t,r){E(t,s,r)},p:m,i:m,o:m,d(t){t&&b(s)}}}class J extends S{constructor(s){super(),P(this,s,null,V,R,{})}}function Z(e){let s,t,r;return t=new J({}),{c(){s=j("main"),Y(t.$$.fragment)},m(a,i){E(a,s,i),K(t,s,null),r=!0},p:m,i(a){r||(O(t.$$.fragment,a),r=!0)},o(a){X(t.$$.fragment,a),r=!1},d(a){a&&b(s),F(t)}}}class ee extends S{constructor(s){super(),P(this,s,null,Z,R,{})}}new ee({target:document.getElementById("app")});
//# sourceMappingURL=index-000872d9.js.map
