import axios from 'axios';
import { Job, fetchJobsFailure, fetchJobsRequest, fetchJobsSuccess } from './jobsSlice';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Person, fetchPeopleFailure, fetchPeopleRequest, fetchPeopleSuccess } from './peopleSlice';

const api = axios.create({
    baseURL: 'https://68223cbdb342dce8004d997a.mockapi.io',
});

function* fetchJobsSaga() {
    try {
        const { data } = yield call(() => api.get<Job[]>('/jobs'));
        yield put(fetchJobsSuccess(data))
    }
    catch (err: any) {
        yield put(fetchJobsFailure(err))
    }
}

function* fetchPeopleSaga() {
    try {
        const { data } = yield call(() => api.get<Person[]>('/people'))
        yield put(fetchPeopleSuccess(data))
    } catch (err: any) {
        yield put(fetchPeopleFailure(err))
    }
}
export function* rootSaga(){
    yield all([
        takeLatest(fetchPeopleRequest.type,fetchPeopleSaga),
        takeLatest(fetchJobsRequest.type,fetchJobsSaga),
    ])
}
