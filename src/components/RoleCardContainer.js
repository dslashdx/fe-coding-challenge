import React, { Component } from 'react';
import RoleCard from './RoleCard';

import './RoleCardContainer.css';

class RoleCardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardData: []
        }
    }
    componentDidMount() {
        const data = require('../user_roles.json');
        this.setState({cardData: data});
    }

    render() {
        const {cardData} = this.state;
        return (
            <div className="grid-container">
            {
                cardData.map((card) => <RoleCard key={card.id} {...card}/>)
            }
            </div>
        );
    }
}

export default RoleCardContainer;
