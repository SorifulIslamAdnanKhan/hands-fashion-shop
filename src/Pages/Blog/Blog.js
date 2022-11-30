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
                        <p>There are four main types of state you need to properly manage in your React apps: </p>
                        <ol className='list-decimal p-4'>
                            <li>Local State</li>
                            <li>Server State</li>
                            <li>Global State</li>
                            <li>URL State</li>
                        </ol>
                        <br />
                        <p>Let's talk about how you can manage these states different ways. </p> <br />

                        <p>1. Local State: Local state is most often managed in React using the <strong>useState</strong> hook.</p> <br />

                        <p>2. Server State: You can use react hook <strong>useEffect</strong> to manage this state. But there a couple of handy libraries that make data fetching in React a breeze: SWR and React Query.</p><br />

                        <p>3. Global State: Global state is data we manage across many components. It is necessary when you want to get and update data anywhere in your app, or in multiple components at least. You can use <strong>useContext</strong> to manage global state.</p> <br />

                        <p>4. URL State: URL state is easy to manage. You can use hooks like <strong>useHistory</strong> or <strong>useLocation</strong> to manage URL state.</p>
                    </article>
                </div>
            </div>
            <br />
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <article className='text-lg p-6'>
                        <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It allows an object to inherit the properties and methods of another object. </p> <br />

                        <p>Traditionally, in order to get and set the [Prototype] of an object, people use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p> <br />
                    </article>
                </div>
            </div>
            <br />
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <article className='text-lg p-6'>
                        <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. </p> <br />
                        <p>Let's see why should write unit tests:</p> <br />
                        <ul>
                            <li>To check code quality</li>
                            <li>To find problems and resolve them right way</li>
                            <li>To check changes and helps maintain and adjust code, reducing bugs and defects, and verifying the accuracy of each unit</li>
                            <li>To make the process of debugging easier</li>
                        </ul>
                    </article>
                </div>
            </div>
            <br />
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <article>
                        <p><strong>React:</strong> React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p> <br />
                        <p><strong>Angular:</strong> Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework.</p> <br />
                        <p><strong>Vue:</strong> Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014.</p> <br />
                    </article>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>React</th>
                                    <th>Angular</th>
                                    <th>Vue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <td>Rich library to build modern UI</td>
                                    <td>A framework</td>
                                    <td>A library</td>
                                </tr>
                                <tr className="active">
                                    <th>Written</th>
                                    <td>JavaScript</td>
                                    <td>TypeScript</td>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <th>Language Preference</th>
                                    <td>JSX JavaScript XML</td>
                                    <td>TypeScript</td>
                                    <td>HTML and JavaScript</td>
                                </tr>
                                <tr className="active">
                                    <th>Model</th>
                                    <td>Document Object Model- DOM </td>
                                    <td>Model View Controller -MVC</td>
                                    <td>Document Object Model- DOM</td>
                                </tr>
                                <tr>
                                    <th>Ideal For</th>
                                    <td>Modern web development,iOS and Android apps </td>
                                    <td>Large scale application or enterprise level apps.</td>
                                    <td>Web development and single page applications</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;