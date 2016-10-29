'use strict';

import React from 'react';

const Title = () => {
    const title = 'Funny Goatz';
    let titleLength = title.length;
    let html = [];

    for (var i = 0; i < titleLength; i++) {
        html.push(<span key={i} className={`l${i}`}>{title[i]}</span>);
    }

    return <div className="goat-title">{html}</div>;
};

export default Title;

