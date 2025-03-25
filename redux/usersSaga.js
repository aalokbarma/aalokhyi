import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  createUserSuccess,
  updateUserSuccess,
  deleteUserSuccess
} from './usersSlice';
import { API_URL } from '../src/Constants/URLs';

function* fetchUsers() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* createUser(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(createUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* updateUser(action) {
  const { id, user } = action.payload;
  try {
    const response = yield call(axios.put, `${API_URL}/${id}`, user);
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* deleteUser(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* usersSaga() {
  yield takeLatest('users/fetchUsersStart', fetchUsers);
  yield takeLatest('users/createUser', createUser);
  yield takeLatest('users/updateUser', updateUser);
  yield takeLatest('users/deleteUser', deleteUser);
}