<script>
	import '../_index.css';
</script>

<div class="body p-1">
    <header class="pt-5 pl-5">
        <div class="title-area">
            <img class="logo" src="https://kopisusa.com/wp-content/uploads/2021/02/logo-w@2x.png" alt="Kopis Logo" />
            <p class="kern-10 text-xl uppercase">Coffee Questions</p>
        </div>
    </header>
    <main class="mt-10 ml-10">
        <section>
            <h2 class="kern-10 text-xl uppercase">What is Kopis?</h2>
            <p>Kopis builds the software that runs Greenville businesses</p>
            <br/>
            <details x-open>
                <summary>Tell me more!</summary>
                <p>Kopis is a software consultancy with four defining principles:</p>
                <ul class="list-decimal m-5">
                    <li>Lead</li>
                    <li>Respect</li>
                    <li>Impact</li>
                    <li>Simplify</li>
                </ul>
                <div class="mt-5 grid gap-8">
                    <div class="mb-1">
                        <p class="mb-1">To <dfn>Lead</dfn> is to be a confident in knowing where they are going, 
                        which requires a deep understanding of the problem and the solution.  
                        <br/>A leader must continually evaluate and be prepared to adjust these three things:</p>
                        <ul class="list-decimal m-5">
                            <li class="capitalize">what you know</li>
                            <li class="capitalize">what you know you don't know</li>
                            <li class="capitalize">what you don't know you don't know</li>
                        </ul>
                    </div>
                    <div>
                        <p>We have a natural <dfn>respect</dfn> for talented colleagues, but it is also import to be mindful of those we don't agree with.
                            A productive environment requires that we all get along.  
                            Come prepared to <u>play nice</u> and share your insights and concerns in a way that is encouraging and productive.
                            This can demand selflessness and humility and empathy.
                            Be fair and honest and kind.
                        </p>
                    </div>
                    <div>
                        <p class="mb-1">To <dfn>Impact</dfn> is to effect or influence.  In product and customer relational terms, it means to steadily progress.</p>
                        <ul class="list-disc m-5">
                            <li>Understand the problem</li>
                            <li>Articulate the problem</li>
                            <li>Breakdown the problem into smaller problems</li>
                            <li>Provided incremental solutions</li>
                            <li>Adapt and Iterate logically and with consensus</li>
                        </ul>
                        <p class="mt-1">Each step above impacts the relationship with the client, 
                            instilling confidence in the process and growing trust in Kopis.</p>
                        <p class="mt-1">Each misstep has the opposite effect. Software is hard to build and 
                            transparency is an essential component in making a positive impact.</p>
                    </div>
                    <div>
                        <p>To <dfn>Simplify</dfn> is to reduce the complexity of a system by applying  diligence and ingenuity.</p>
                        <p>The software development process offers many opportunities to simplify and it is the defining element of problem solving.
                            <ul class="list-disc m-5">
                                <li>The software development process is a series of steps that can be broken down (<u>simplified</u>) into smaller steps.</li>
                                <li>Refactoring is the process of <u>simplifying</u> the codebase by removing duplication and improving readability.</li>
                                <li>UX design is the process of <u>simplifying</u> the user experience by removing unnecessary steps and improving the flow.</li>
                            </ul>
                    </div>
                </div>
            </details>
        </section>
    </main>
</div>

<style lang="postcss">
    .body {
        color: rgb(91, 91, 194);
        margin: 0;
    }
    
    .logo {
        height: 4rem;
    }
    .kern-10 {
        letter-spacing: 0.1em;
    }

    h1 {
        margin: 0;
    }

    ul > li {
        line-height: 2rem;        
    }

    details > summary {
        cursor: pointer;
    }

    details[open] > summary {
        display: none;
    }


    dfn,
    u {
        text-decoration: double;
        border-bottom: 0.1rem solid red;
    }

</style>