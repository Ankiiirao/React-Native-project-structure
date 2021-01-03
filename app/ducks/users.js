export const IMAGES = {
    LOAD: 'IMAGES_LOAD',
    LOAD_SUCCESS: 'IMAGES_LOAD_SUCCESS',
    LOAD_FAIL: 'IMAGES_LOAD_FAIL',
};


export const ADD_NUMBER = "ADD_NUMBER"


export const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

export const loadImages = () => ({
    type: IMAGES.LOAD,
});




const imagesReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default imagesReducer;