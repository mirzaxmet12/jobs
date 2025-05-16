import {  PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface Job{
    id:string;
    jobId:string;
    title:string;
}

interface JobState {
    items:Job[];
    loading:boolean;
    error:string|null;
}

const initialState :JobState={
    items:[],
    loading:false,
    error:null,
}

export const jobsSlice =createSlice({
    name:'jobs',
    initialState,
    reducers:{
        fetchJobsRequest(state){
            state.loading=true;
            state.error=null;
        },
        fetchJobsSuccess(state,action:PayloadAction<Job[]>){
            state.items=action.payload;
            state.loading=false;
        },
        fetchJobsFailure(state,action:PayloadAction<string>){
            state.error=action.payload
            state.loading=false
        },
    },
});

export const {fetchJobsFailure,fetchJobsRequest,fetchJobsSuccess}=jobsSlice.actions;
export default jobsSlice.reducer;
