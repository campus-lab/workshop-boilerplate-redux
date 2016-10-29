import * as types from '../constants/ActionTypes'

export const goatAdd = (goat) => {
    console.log('action goatAdd:', goat);
    return {type: types.GOAT_ADD, goat: goat};
};
