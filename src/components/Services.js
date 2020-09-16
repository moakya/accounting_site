import React from 'react'
import { DialogActions, DialogTitle, DialogContent, Button } from '@material-ui/core'

const Services = (props) => {
    const handleClose = () => {
        props.closeFunction()
    }

    return (
        <React.Fragment>
            <DialogTitle>
                Bruh
            </DialogTitle>
            <DialogContent>
                Whachu up to
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default Services