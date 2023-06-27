import { Box, Card, Divider, List } from '@mui/material'
import React from 'react'
import './sidebar.scss'
import variable from '../../styles/variables.scss'
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


function Sidebar() {
    console.log('variable ', variable)
    const [open, setOpen] = React.useState(true);

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
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton><ListItemButton>
                    <ListItemIcon>
                        <SendIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon sx={{ color: variable.iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
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
                </Collapse>
            </List>
        </Card>
    )
}

export default Sidebar