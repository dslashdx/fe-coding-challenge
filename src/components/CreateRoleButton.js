import React from 'react';
import { selectCard } from '../actions/actions';
import { connect } from 'react-redux';
import './CreateRoleButton.css';

const CreateRoleButton = ({ setSelectedCardToNew }) => {
    return (
        <button className="CreateRoleButton" onClick={(e) => setSelectedCardToNew()}>
            CREATE NEW ROLE
        </button>
    );
}

const mapDispatchToProps = dispatch => ({
    setSelectedCardToNew: () => dispatch(selectCard({ id: '' }))
})

export default connect(null, mapDispatchToProps)(CreateRoleButton);

