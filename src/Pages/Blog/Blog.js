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
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <br />
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={1} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <br />
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={2} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <br />
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={3} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;