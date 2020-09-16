import React from 'react'
import axios from 'axios'
import '../App.css'
import { DialogTitle, Button, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
    },
    container: {
        display: 'flex',
        alignContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
}))

const ContactForm = (props) => {
    const handleClose = () => {
        props.closeFunction()
    }

    const initialForm = {
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    }

    const [contactForm, setContactForm] = React.useState(initialForm)
    const classes = useStyles()
    // const sendFormUrl = "hello"


    // const postForm = async () => {
    //     let headers = {
    //         'Content-Type': 'application/json'
    //     }
    //     console.log('ContactForm %o', contactForm)
    //     await axios
    //         .post(sendFormUrl, contactForm, { headers: headers })
    //         .then((response) => {
    //             console.log('Status %o', response)
    //             handleClose()
    //         })
    //         .catch((error) => {
    //             console.log('post form error %o', error)
    //         })
    // }

    const handleSetContactFormRequest = event => {
        setContactForm({
            ...contactForm,
            [event.target.name]: event.target.value
        })
    }

    return (
        <React.Fragment>
            <DialogTitle>
                Contact Us
            </DialogTitle>
            <ValidatorForm 
                // onSubmit={postForm}
                className={classes.container}
            >
                <FormControl component="fieldset" className={classes.formControl}>
                    <TextValidator
                        id="name"
                        label="Client Name"
                        name="name"
                        value={contactForm.name}
                        validators={(
                            'required',
                            'matchRegexp:^[a-zA-Z0-9]+$',
                            'minStringLength:2',
                            'maxStringLength:20'
                        )}
                        errorMessages={(
                            'This is a required field',
                            'Alphabets only',
                            'Must be at least 2 characters',
                            'Must be at most 20 characters'
                        )}
                        onChange={handleSetContactFormRequest}
                    />
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <TextValidator
                        id="email"
                        label="Client Email"
                        name="email"
                        value={contactForm.email}
                        validators={(
                            'required',
                            'matchRegexp:^[a-zA-Z0-9]+$',
                            'minStringLength:2',
                            'maxStringLength:20'
                        )}
                        errorMessages={(
                            'This is a required field',
                            'Alphabets only',
                            'Must be at least 2 characters',
                            'Must be at most 20 characters'
                        )}
                        onChange={handleSetContactFormRequest}
                    />
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <TextValidator
                        id="phoneNumber"
                        label="Client Phone Number"
                        name="phoneNumber"
                        value={contactForm.phoneNumber}
                        validators={(
                            'required',
                            'matchRegexp:^[a-zA-Z0-9]+$',
                            'minStringLength:2',
                            'maxStringLength:20'
                        )}
                        errorMessages={(
                            'This is a required field',
                            'Alphabets only',
                            'Must be at least 2 characters',
                            'Must be at most 20 characters'
                        )}
                        onChange={handleSetContactFormRequest}
                    />
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <TextValidator
                        id="message"
                        label="Client Message"
                        name="message"
                        value={contactForm.message}
                        validators={(
                            'required',
                            'matchRegexp:^[a-zA-Z0-9]+$',
                            'minStringLength:2',
                            'maxStringLength:20'
                        )}
                        errorMessages={(
                            'This is a required field',
                            'Alphabets only',
                            'Must be at least 2 characters',
                            'Must be at most 20 characters'
                        )}
                        onChange={handleSetContactFormRequest}
                    />
                </FormControl>
            </ValidatorForm>
            <Button type="submit" color="primary">
                Submit
            </Button>
            <Button onClick={handleClose} color="secondary">
                Close
            </Button>
        </React.Fragment>
    )
}

export default ContactForm