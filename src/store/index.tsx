import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddlware from "redux-saga";
import jobsSlice from "./jobsSlice";
import peopleSlice from "./peopleSlice";
import { rootSaga } from "./saga";

const sagaMiddiware = createSagaMiddlware();

export const store = configureStore({
    reducer: {
        jobs: jobsSlice,
        people: peopleSlice,
    },
    middleware: getDefaoultMiddlware => getDefaoultMiddlware({ thunk: false }).concat(sagaMiddiware)
});

sagaMiddiware.run(rootSaga);

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;