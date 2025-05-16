import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPeopleRequest } from '../store/peopleSlice';
import { RootState, AppDispatch } from '../store';
import { Typography, CircularProgress, Box } from '@mui/material';
import People from '../components/People';

const JobPage: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((s: RootState) => s.people);

    useEffect(() => {
        dispatch(fetchPeopleRequest());
    }, [dispatch]);

    if (loading) return <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>;
    if (error) return <Typography color="error">{error}</Typography>;

    const filtered = items.filter(p => p.job === jobId);
    console.log(items);

    return (
        <Box>
            <Typography variant="h5" gutterBottom>{jobId}</Typography>
            <People people={filtered} />
        </Box>
    );
};

export default JobPage;
