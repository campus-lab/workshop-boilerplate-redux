const initialState = [
    {
        url: 'http://funny-wall.com/wp-content/uploads/Funny-Goat-Drinking-Beer.jpg',
        displayName: 'Adele',
        description: 'I feel Braaaaad',
        published: 1167609600
    },
    {
        url: 'http://www.ourhenhouse.org/wp-content/uploads/2013/02/goat_peaceful_prairie.jpg',
        displayName: 'Agatha',
        description: 'Shit just goat serious',
        published: 1230768000
    },
    {
        url: 'https://handmadelives.files.wordpress.com/2013/11/goat-best.jpg',
        displayName: 'Alexis',
        description: 'Calm the fuck down I goat this',
        published: 1262304000
    },
    {
        url: 'http://www.ourhenhouse.org/wp-content/uploads/2013/06/goat_farm_sanctuary.jpg',
        displayName: 'Maria Leal',
        description: 'Hey man Goat any grass?',
        published: 1325376000
    },
    {
        url: 'http://creepy.blogs.com/photos/uncategorized/2007/11/27/goat.jpg',
        displayName: 'Amelia',
        description: 'I don’t always eat everything Oh wait, yes i do',
        published: 1355376000
    },
    {
        url: 'http://forum.unity3d.com/attachments/526d8bb21605fb164400000d-jpg.93914/',
        displayName: 'Erika',
        description: 'You have goat To be kidding me',
        published: 1385376000
    },
    {
        url: 'http://randomoverload.org/wp-content/uploads/2016/01/5895hE9398D3F.jpg',
        displayName: 'Louise',
        description: 'Here we Goat Again…',
        published: 1425376000
    },
    {
        url: 'https://c8.staticflickr.com/6/5336/8974131463_1e9ec43e07_c.jpg',
        displayName: 'Marion',
        description: 'Row row row Your goat',
        published: 1395376000
    },
    {
        url: 'http://www.freakingnews.com/pictures/130500/Goat--130756.jpg',
        displayName: 'Nora',
        description: 'For goat’s sake, that’s enough',
        published: 1335376000
    }
];

const goats = (state = initialState, action) => {
    switch (action.type) {
        case 'GOAT_ADD':
            console.info('reducer GOAT_ADD', state, action);
            return [...state, action.goat];
        default:
            console.info('reducer DEFAULT', state);
            return state;
    }
};

export default goats;
