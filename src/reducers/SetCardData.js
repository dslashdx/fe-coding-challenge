import { ACTION_TYPES } from '../actions/actions';

const defaultState = {
    data: [],
    card: {}
};

export function SetCardData(state = defaultState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_CARD_DATA:
            return { ...state, ...action };

        case ACTION_TYPES.DELETE_CARD:
            return { ...state, data: state.data.filter(card => card.id !== action.id) }

        case ACTION_TYPES.EDIT_CARD:
            return { ...state, ...action };

        default:
            return state;
    }
};
