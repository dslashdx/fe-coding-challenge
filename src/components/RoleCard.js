import React from 'react';

import "./RoleCard.css";

const RoleCard = ({name, type, description, users, created_on, active, editable}) => {
    return (
        <div className="RoleCard">
            {
                (active) ?
                    null
                :
                    <div>INACTIVE</div>
            }
            <h1>{name}</h1>
            <h2>{type}</h2>
            <div>{description}</div>
            <div>IMAGES</div>
            <div className="footer">
                <div className="createdAt">{created_on}</div>
                {
                    (editable) ?
                        <div>
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    :
                        <i className="material-icons">lock</i>
                }
            </div>
        </div>
    );
}

export default RoleCard;