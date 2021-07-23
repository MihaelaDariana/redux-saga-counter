import { put,call,takeEvery, takeLatest,delay } from '@redux-saga/core/effects';

export function* incrementAsync(){
    yield delay(1000)
    yield put({type:'Increment'})
    
}

export default function* rootSaga(){
    yield takeEvery('IncrementAsync',incrementAsync)
}