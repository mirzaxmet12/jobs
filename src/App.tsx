import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchJobsRequest } from './store/jobsSlice';
import { RootState, AppDispatch } from './store';
import Sidebar from './components/Sidebar';
import { AppBar, Toolbar, Typography, Box, CircularProgress } from '@mui/material';
import JobPage from './pages/jobPage';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: jobs, loading } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  const firstJob = jobs[0]?.jobId || 'Planner';

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Saga App</Typography>
        </Toolbar>
      </AppBar>

      <Box display="flex" height="calc(100vh - 64px)">
        <Sidebar jobs={jobs.map(j => j.jobId)} />
        <Box flex={1} p={2} overflow="auto">
          <Routes>
            <Route path="/" element={<Navigate to={`/jobs/${firstJob}`} replace />} />
            <Route path="/jobs/:jobId" element={<JobPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;

