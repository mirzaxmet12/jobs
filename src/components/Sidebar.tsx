import { NavLink } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Box } from '@mui/material';


interface Props {
    jobs: string[];
}


function Sidebar(props: Props) {
    const { jobs } = props

    return (
        <Box width={240} borderRight={1} borderColor="divider" overflow="auto">
            <List disablePadding>
                {jobs.map(job => (
                    <ListItemButton
                        key={job}
                        component={NavLink}
                        to={`/jobs/${job}`}
                        sx={{ '&.active': { backgroundColor: 'action.selected' } }}
                    >
                        <ListItemText primary={job} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
};

export default Sidebar;
