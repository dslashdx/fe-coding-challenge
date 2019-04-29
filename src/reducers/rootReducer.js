import { combineReducers } from 'redux';
import { SetCardData } from './SetCardData';
import { FilterByStatus } from './FilterByStatus';
import { FilterBySearch } from './FilterBySearch';

export default combineReducers({
    SetCardData,
    FilterByStatus,
    FilterBySearch
});