import React from 'react';

const Blog = () => {
    return (
        <section className='mt-8 p-4'>
            <h2 className="text-3xl text-center p-4">Blogs</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1.  What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <article className='text-lg p-6'>
                        <p className='p-4'>
                            There are four main types of state you need to properly manage in your React apps:
                            <ol className='list-decimal p-4'>
                                <li>Local State</li>
                                <li>Server State</li>
                                <li>Global State</li>
                                <li>URL State</li>
                            </ol>
                            Let's talk about how you can manage these states different ways. <br />

                            1. Local State: Local state is most often managed in React using the <strong>useState</strong> hook. <br />

                            2. Server State <br />

                            3. Global State: Global state is data we manage across many components. It is necessary when you want to get and update data anywhere in your app, or in multiple components at least.

                        </p>

                    </article>
                </div>
            </div>
            <br />
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <br />
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <br />
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;