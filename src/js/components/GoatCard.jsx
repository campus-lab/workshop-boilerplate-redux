'use strict';

import React from 'react';

const GoatCard = ({goat}) => {
    return (
        <div className="goat-card">
            <div className="goat-card__img">
                <img src={goat.url} />
            </div>
            <div className="goat-card__details">
                <h4>{goat.displayName}</h4>
                <p>{goat.description}</p>
            </div>
        </div>
    );
};

GoatCard.propTypes = {
    goat: React.PropTypes.object.isRequired
}

export default GoatCard;
