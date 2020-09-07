import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import {withFormik} from 'formik'
import * as Yup from 'yup'

const ContactForm = (props) => {
    return (
        <Form className="mt-5">
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label><Badge className="ml-2" variant="warning">5 characters minimum</Badge>
                <Form.Control 
                    type="text" 
                    placeholder="You name"
                    name="name"
                    onChange={props.handleChange}
                    value={props.values.name}
                    onBlur={props.handleBlur}
                ></Form.Control>
                {
                    props.touched.name && props.errors.name 
                        && <span className="text-danger">{props.errors.name}</span>
                }
            </Form.Group>
            <Form.Group controlId="mail">
                <Form.Label>Mail</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="You email"
                    name="mail"
                    onChange={props.handleChange}
                    value={props.values.mail}
                    onBlur={props.handleBlur}
                ></Form.Control>
                {
                    props.touched.mail && props.errors.mail 
                        && <span className="text-danger">{props.errors.mail}</span>
                }
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label><Badge className="ml-2" variant="warning">Between 100 and 300 characters</Badge>
                <Form.Control 
                    as="textarea" 
                    rows="3" 
                    placeholder="You message"
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur={props.handleBlur}
                ></Form.Control>
                {
                    props.touched.message && props.errors.message 
                        && <span className="text-danger">{props.errors.message}</span>
                }
            </Form.Group>
            <Button variant="success" onClick={props.handleSubmit}>
                Send
            </Button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        mail: '',
        message: '',
    }), 
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(5, 'Your name must contain more than 5 characters.')
            .required('You must indicate your name.'),
        mail: Yup.string()
            .email('The mail format is not correct.')
            .required('You must indicate your email.'),
        message: Yup.string()
            .min(100, 'Your message must be at least 100 characters long.')
            .max(300, 'Your message must be less than 300 characters long.')
            .required('You must type a message.')
    }),
    handleSubmit: (values, {props}) => {
        alert('Sent')
    },
})(ContactForm)