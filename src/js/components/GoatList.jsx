'use strict';

import React from 'react';
import GoatCard from '../components/GoatCard';

const GoatList = ({goats}) => {
    return (
        <ul className="goat-list row">
            {goats.map((goat, key) => {
                return (
                    <li key={key} className="column small-12 medium-4">
                        <GoatCard goat={goat} />
                    </li>
                );
            })}
        </ul>
    );
};

GoatList.propTypes = {
    goats: React.PropTypes.array.isRequired
};

export default GoatList;
