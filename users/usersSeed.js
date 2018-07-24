const User = require('./user')

const users = [
    {
        email: "testwebs@gmail.com",
        password: '',
        role: 'admin',
        f_name: 'SVETO',
        l_name: 'STOJCEVIC',
        contact_no: '(03) 2345 7093',
        default_location: '120 Spenser St',
        availability: true,
        longitude: 0,
        Latitude: 0,
        skills: []
    },

    {
        email: "samara.jesney@gmail.com",
        password: '1234567',
        role: 'admin',
        f_name: 'SAMARA',
        l_name: 'SAMARA',
        contact_no: '(03) 8683 7093',
        default_location: '120 Spenser',
        availability: true,
        longitude: 0,
        Latitude: 0,
        skills: []
    },
    {
        email: "ruegen@icloud.com",
        password: '',
        role: 'facilitator',
        f_name: 'Reugen',
        l_name: 'Aschenbrenner',
        contact_no: '0466 558 570',
        default_location: '120 Spenser',
        availability: true,
        longitude: 0,
        Latitude: 0,
        skills: []
    }


]

User.create(users)
    .then(() => {
        console.info(`seeded users`)

    })