import React, { Component } from 'react';
import RoleCard from './RoleCard';
import { setCardData } from '../actions/actions';
import { connect } from 'react-redux';

import './RoleCardContainer.css';

class RoleCardContainer extends Component {
    componentDidMount() {
        //This is just to simulate a fetch() to some api that had this data
        const data = require('../user_roles.json');
        this.props.setCardData(data);
    }

    render() {
        let {cardData} = this.props;
        const {filterStatus, searchTerms} = this.props;
        
        if (filterStatus === "Active")
            cardData = cardData.filter((card) => card.active)
        else if (filterStatus === "Inactive")
            cardData = cardData.filter((card) => !card.active)

        if (searchTerms !== "")
            cardData = cardData.filter((card) => Object.values(card).join(' ').includes(searchTerms));
            
        return (
            <div className="grid-container">
            {
                cardData.map((card) => <RoleCard key={card.id} {...card}/>)
            }
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return {
        cardData: state.SetCardData.data,
        filterStatus: state.FilterByStatus.status,
        searchTerms: state.FilterBySearch.search
    }
}

const mapDispatchToProps = dispatch => ({
    setCardData: data => dispatch(setCardData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoleCardContainer);
