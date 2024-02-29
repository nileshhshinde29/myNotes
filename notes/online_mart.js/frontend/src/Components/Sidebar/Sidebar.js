import { Box, Card, Divider, List } from '@mui/material'
import React from 'react'
import './sidebar.scss'
// import variable from '../../styles/variables.scss'
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
let variable = {
    primaryColor: '#232828',
    primaryLight: '#efe9e7',
    secondaryColor: 'hsl(180, 10%, 26%)',
    tertiaryColor: '#C7511F',

    primaryButton: '#C7511F',
    secondaryButton: '#313939',
    iconColor: '#ba790a',
}


function Sidebar() {
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Card className='hide-for-mobile ' style={{ backgroundColor: variable.primaryColor, color: 'white' }} sx={{ borderRadius: '0px', height: '100vh', }} >
            <List sx={{ height: '62px' }} ></List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={() => navigate('/home')}>
                    <ListItemIcon>
                        <SendIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <DraftsIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate('/cart')}>
                    <ListItemIcon>
                        <SendIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Previous Orders" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Customer Service" />
                </ListItemButton>
                {/* <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse> */}
            </List>
        </Card>
    )
}

export default Sidebar