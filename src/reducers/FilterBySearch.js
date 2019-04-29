import { ACTION_TYPES } from '../actions/actions';

const defaultState = {
    search: ""
};

export function FilterBySearch(state = defaultState, action) {
    switch (action.type) {
        case ACTION_TYPES.FILTER_BY_SEARCH:
            return { ...state, ...action };
        default:
            return state;
    }
};
