import React from 'react';
import './home.css';
import NavBarTop from '../../components/navBarTop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenSnack(true);
    };

    const handleCloseOnly = () => {
        setOpen(false);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };


    return (
        <div className="home">
            <div className="container">
                <NavBarTop />
                <CircularProgress className="progressCircle" />
                <Fab onClick={handleClickOpen} style={{ position: 'absolute', top: '90%', left: '95%', width: '40px', height: '40px' }} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>

            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                aria-labelledby="form-dialog-title"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle id="form-dialog-title">New Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Write a new post here. Send images, videos, text or even the same podcast.
                        Ensure greater reach of your publication using the reach boost.
                        <p>Att Quantum Lab</p>
                    </DialogContentText>

                    {/* IMG Input */}
                    <div className="imgInput">
                        <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" />
                        <label className="label" htmlFor="icon-button-file">
                            Click to add image
                        </label>
                    </div>

                    {/* Text Input */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New Post"
                        type="text"
                        fullWidth
                    />
                </DialogContent>

                {/* Functional Buttons */}
                <DialogActions>
                    <Button onClick={handleCloseOnly} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>

            {/* SnackBar */}
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert style={{ backgroundColor: 'var(--azul)' }} onClose={handleCloseSnack} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Home;