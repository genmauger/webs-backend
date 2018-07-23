const User = require('./user')

const users = [
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