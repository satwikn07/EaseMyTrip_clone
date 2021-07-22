
import { ADD_SOURCE_DESTINATION } from './actionTypes';

const initState = {
    city: []
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_SOURCE_DESTINATION: {
            return {
                ...state,
                city: [...state.city,payload]
            }
        }

        default:
            return state
    }
}