import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='container mx-auto my-12'>
            <div className='mb-8 bg-gray-200 p-4'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What are the different ways to manage a state in a React application?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.useState is the first tool you should reach for to manage state in your components.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).
                </p>
            </div>
            <div className='mb-8 bg-gray-200 p-4'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    How does prototypical inheritance work?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    <br />
                    JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                </p>
            </div>
            <div className='mb-8 bg-gray-200 p-4'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is a unit test? Why should we write unit tests?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected.
                </p>
            </div>
            <div className='mb-12 bg-gray-200 p-4'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    React vs. Angular vs. Vue?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.
                </p>
            </div>
        </div>
    );
};

export default Blogs;