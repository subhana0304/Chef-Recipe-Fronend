import React from 'react'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();


const Blog = () => {


    return (
        <div className=' container my-5 py-5'>

            <div className='text-center mb-5'>

                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='btn btn-success fw-bolder'>Save as PDf</button>}
                </Pdf>

            </div>

            <div ref={ref}>
                <h1 className='text-center text-success'>Blog</h1>
                <div>
                    <h4>What is the differences between uncontrolled and controlled components?</h4>
                    <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                </div>
                <div>
                    <h4>How to validate React props using PropTypes?</h4>
                    <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
                </div>
                <div>
                    <h4>What is the difference between nodejs and express js?</h4>
                    <p>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                </div>
                <div>
                    <h4>What is a custom hook, and why will you create a custom hook?</h4>
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </div>

        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Blog></Blog>, rootElement);
export default Blog;