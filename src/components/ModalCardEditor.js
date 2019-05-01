import React, { Component } from 'react';
import { setCardData, selectCard } from '../actions/actions';
import { connect } from 'react-redux';
import moment from 'moment';

import './ModalCardEditor.css';

//TODO:
//  Make adding users and images for users
//  Create redux actions for modify and create and hook up here and on the CreateRoleButton and Edit on RoleCard
//  Implement form validation
class ModalCardEditor extends Component {

    onSubmitHandler = (e) => {
        e.preventDefault();
        const date = (new Date()).toISOString();
        const card = {
            id: parseInt(this.idInput.value),
            name: this.nameInput.value,
            type: this.typeInput.value,
            description: this.descriptionInput.value,
            editable: this.editableInput.value === "on",
            active: this.activeInput.value === "on",
            created_on: this.props.created_on || date,
            modified_on: date,
            users: this.props.selectedCard.users || []
        }
        let newData = this.props.cardData.slice();
        const index = newData.findIndex((element) => element.id === card.id)
        if (index >= 0)
            newData.splice(index, 1, card);
        else
            newData.push(card);

        this.props.setCardData(newData);
        this.props.unsetSelectedCard();
    };

    render() {
        const { id, name, type, description, editable, active, created_on } = this.props.selectedCard;

        return (
            <div className={(Object.keys(this.props.selectedCard).length > 0) ? "ModalContainer" : "hidden"}>
                <form className="CardEditor" onSubmit={this.onSubmitHandler}>
                    <span>
                        <label htmlFor="ActiveCheck">ACTIVE:</label>
                        <input className="ActiveCheck" type="checkbox" ref={(input) => this.activeInput = input} defaultChecked={active}></input>
                    </span>
                    <span>
                        <label htmlFor="Editable">EDITABLE:</label>
                        <input className="Editable" type="checkbox" ref={(input) => this.editableInput = input} defaultChecked={editable}></input>
                    </span>
                    <label htmlFor="id">ID:</label>
                    <input className="id" type="number" step="1" ref={(input) => this.idInput = input} defaultValue={(id) ? id : ''}></input>
                    <label htmlFor="Name">NAME:</label>
                    <input className="Name" ref={(input) => this.nameInput = input} defaultValue={(name) ? name : ''}></input>
                    <label htmlFor="Type">TYPE:</label>
                    <input className="Type" ref={(input) => this.typeInput = input} defaultValue={(type) ? type : ''}></input>
                    <label htmlFor="Description">DESCRIPTION:</label>
                    <input className="Description" ref={(input) => this.descriptionInput = input} defaultValue={(description) ? description : ''}></input>
                    <div>
                        TODO: USERS
                    </div>
                    <span>CREATED ON: {(created_on) ? moment(created_on).format("MM/DD/YYYY") : moment(new Date()).format("MM/DD/YYYY")}</span>
                    <button>SAVE</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cardData: state.SetCardData.data,
        selectedCard: state.SetCardData.card
    }
}

const mapDispatchToProps = dispatch => ({
    setCardData: data => dispatch(setCardData(data)),
    unsetSelectedCard: () => dispatch(selectCard({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCardEditor);
