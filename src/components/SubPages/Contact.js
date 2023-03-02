
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../../app.css';
import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';


const styles = {
  formbox: {
    background: "transparent",
    borderRadius: "0.5rem",
    border: "2px solid rgb(84, 81, 63)",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    marginLeft: "5rem",
    marginRight: "5rem",
    marginBottom: "10rem",
    padding: '2rem'
  }
}

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!(name)) {
      setErrorMessage(
        `The name field is required`
      );
      return;
    }
    if (!(message)) {
      setErrorMessage(
        `The message field is required`
      );
      return;
    }
    alert(`Thank you for your message, ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };




  return (
    <div>
    <h3 className="mb-2">Please reach out to me via the form below:</h3>
        {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
        )}

        <Form className="form" style={styles.formbox}>

        <Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Name" className="mb-2">
                <Form.Control
                  as="textarea"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="john doe"
                />
              </FloatingLabel>
          </Form.Group>

          <Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Email" className="mb-2">
                <Form.Control
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="johndoe@email.com"
                />
              </FloatingLabel>
          </Form.Group>

          <Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-5">
                <Form.Control
                  placeholder="Write your message here"
                  style={{ height: '100px' }}
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                />
              </FloatingLabel>
          </Form.Group>

          <Button type="button" onClick={handleFormSubmit} variant="outline-dark">Submit</Button>
        </Form>
      </div>



  )
}