import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Card, CardMedia, Grid } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const { item } = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button sx={{ marginLeft: '10px' }} onClick={handleOpen} className='btn-primary' size="small"> <ShoppingCartRoundedIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>

                    <div sx={{ fontWeight: 900 }}>{item.productName}</div>
                    <Grid container sm={12} spacing={2} sx={{ margin: '5px', padding: '40px 5px', border: '1px solid black' }}>
                        <Grid item sm={4}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="120"
                                image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            />
                        </Grid>

                        <Grid item sm={7}>
                            <p>Description:</p>
                            {item.productDetails}
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button sx={{ margin: '5px' }} className='btn-primary'>Add</Button>
                        <Button sx={{ margin: '5px' }} onClick={() => handleClose()} className='btn-primary'>Cancel</Button>
                    </Box>
                </Card>
            </Modal>
        </div>
    );
}
