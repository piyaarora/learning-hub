import {
    ADD_BOOTCAMP,
    // GET_BOOTCAMP,
    // GET_BOOTCAMPS,
    // GET_BOOTCAMP_BY_DIST,
    // UPDATE_BOOTCAMP,
    // DELETE_BOOTCAMP,
    // UPLOAD_PHOTO
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_BOOTCAMP:
            return {
                ...state,
                bootcamps: [...state.bootcamps, action.payload]
            }
        default:
            return state;
    }
}