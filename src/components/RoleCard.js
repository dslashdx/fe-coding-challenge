import React from 'react';
import moment from 'moment';
import { deleteCard } from '../actions/actions';
import { connect } from 'react-redux';

import "./RoleCard.css";

const RoleCard = ({id, name, type, description, users, created_on, active, editable, deleteCard}) => {
    return (
        <div className="RoleCard">
            <div className="RoleCardContent">
                {
                    (active) ?
                        null
                    :
                        <div className="inactiveContainer">
                            <div className="inactiveDisplay">INACTIVE</div>
                        </div>
                }
                <h1>{name}</h1>
                <h2>{type}</h2>
                <div>{description}</div>
                <div>
                {
                    users.map((image) => <img className="userImage" title={image.first_name+' '+image.last_name} key={"image"+image.id} src={image.photo_url} alt={image.first_name+' '+image.last_name}/>)
                }    
                </div>
            </div>
            <div className="footer">
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
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteCard: id => dispatch(deleteCard(id))
})

export default connect(null, mapDispatchToProps)(RoleCard);