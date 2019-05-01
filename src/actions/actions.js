export const ACTION_TYPES = {
    SET_CARD_DATA: "SET_CARD_DATA",
    DELETE_CARD: "DELETE_CARD",
    FILTER_BY_STATUS: "FILTER_BY_STATUS",
    FILTER_BY_SEARCH: "FILTER_BY_SEARCH",
    EDIT_CARD: "EDIT_CARD"
}

export const setCardData = data => ({
    type: ACTION_TYPES.SET_CARD_DATA,
    data
});

export const deleteCard = id => ({
    type: ACTION_TYPES.DELETE_CARD,
    id
});

export const filterByStatus = status => ({
    type: ACTION_TYPES.FILTER_BY_STATUS,
    status
});

export const filterBySearch = search => ({
    type: ACTION_TYPES.FILTER_BY_SEARCH,
    search
});

export const selectCard = card => ({
    type: ACTION_TYPES.EDIT_CARD,
    card
})