import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// TODO: styles
// TODO: fix

export default function Contact() {
  return (
    <div>This will be a contact</div>
  )
}

// import React from "react";
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import FloatingLabel from 'react-bootstrap/FloatingLabel';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// import useState from 'react';
// import '../../app.css';

// // Here we import a helper function that will check if the email is valid
// import { validateEmail } from '../../utils/helpers';

// // TODO: styles
// // TODO: fix

// function Contact() {

//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email)) {
//       setErrorMessage('Email is invalid');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!(name)) {
//       setErrorMessage(
//         `The name field is required`
//       );
//       return;
//     }
//     if (!(message)) {
//       setErrorMessage(
//         `The message field is required`
//       );
//       return;
//     }
//     alert(`Thank you ${name} for your message`);

//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setName('');
//     setMessage('');
//     setEmail('');
//   };




//   return (
//     <div>
//     <p>Hello {name}</p>
//     <form className="form">
//       <input
//         value={email}
//         name="email"
//         onChange={handleInputChange}
//         type="email"
//         placeholder="johndoe@email.com"
//       />
//       <input
//         value={name}
//         name="name"
//         onChange={handleInputChange}
//         type="text"
//         placeholder="john doe"
//       />
//       <input
//         value={message}
//         name="message"
//         onChange={handleInputChange}
//         type="text"
//         placeholder="Write your message here"
//       />
//       <button type="button" onClick={handleFormSubmit}>Submit</button>
//     </form>
//     {errorMessage && (
//       <div>
//         <p className="error-text">{errorMessage}</p>
//       </div>
//     )}
//   </div>
//   )
// }

// export default Contact;