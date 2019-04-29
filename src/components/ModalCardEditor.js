import React, { Component } from 'react';
import { setCardData } from '../actions/actions';
import { connect } from 'react-redux';

import './ModalCardEditor.css';
//TODO:
//  Make adding users and images for users, figure out how ids are generated for users
//  Change date_created on creation
//  Change date_modified on modify
//  Create redux actions for modify and create and hook up here and on the CreateRoleButton and Edit on RoleCard
class ModalCardEditor extends Component {
    render() {
        return (
            <div className="ModalContainer">
                <label htmlFor="ActiveCheck">Active?</label>
                <input className="ActiveCheck" type="checkbox"></input>
                <label htmlFor="Editable">Active?</label>
                <input className="Editable" type="checkbox"></input>
                <label htmlFor="Name"></label>
                <input className="Name"></input>
                <label htmlFor="Type">Type</label>
                <input className="Type"></input>
                <label htmlFor="Description">Description</label>
                <textinput className="Description"></textinput>
                <div>
                {
                    users.map((image) => <img className="userImage" key={"image" + image.id} src={image.photo_url} alt={image.first_name + ' ' + image.last_name} />)
                }
                </div>
            
            
                <div className="createdAt">Date Created:{moment(created_on).format("MM/DD/YYYY")}</div>
                {
                    (editable) ?
                        <div>
                            <button className="editRole">EDIT</button>
                            <button onClick={(e) => deleteCard(id)} className="deleteRole">DELETE</button>
                        </div>
                        :
                        <i className="material-icons">lock</i>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cardData: state.SetCardData.data
    }
}

const mapDispatchToProps = dispatch => ({
    setCardData: data => dispatch(setCardData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCardEditor);
