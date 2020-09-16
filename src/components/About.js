import React from 'react'
import { DialogActions, DialogTitle, DialogContent, Button } from '@material-ui/core'

const About = (props) => {
    const handleClose = () => {
        props.closeFunction()
    }

    return (
        <React.Fragment>
            <DialogTitle>
                Hello
            </DialogTitle>
            <DialogContent>
                What's up homie
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default About