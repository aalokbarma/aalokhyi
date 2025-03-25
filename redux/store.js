import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import usersReducer from './usersSlice';
import usersSaga from './usersSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(usersSaga);

export default store;