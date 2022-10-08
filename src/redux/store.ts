import { createStore, combineReducers } from 'redux';

type actionObject = {
    type: string;
    obj: object;
    num: number;
}




const contentData = (state: Array<object> = [], action: actionObject) => {
    switch (action.type) {
        case 'INCREMENT_DATA': [...state, action.obj]
            return
        case 'DECREMENT_CHECK_DATA':
            return
        default:
            return state
    }
}


const reducers = combineReducers({})

export const store = createStore(reducers);