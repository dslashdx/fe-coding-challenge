import { ACTION_TYPES } from '../actions/actions';

const defaultState = {
    status: 'ActiveAndInactive'
};

export function FilterByStatus(state = defaultState, action) {
    switch (action.type) {
        case ACTION_TYPES.FILTER_BY_STATUS:
            return { ...state, ...action };
        default:
            return state;
    }
};
