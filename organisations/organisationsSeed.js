const Organisation = require('./organisation')

const organisations = [
    {
        org_name: "Coder Accademy",
        contact_name: "Samara",
        contact_no: "+61 3 8683 7093",
        contact_email: "info@coderacademy.edu.au",
        locations: [
            {
                street_add: "Level 13, 120 Spencer Street",
                suburb: "Melbourne",
                state: "VIC",
                pcode: "3000",
                longitude: 0,
                latitude: 0,
                rooms: [
                    { room: "001" },
                    { room: "002" },
                    { room: "003" },
                    { room: "004" },
                    { room: "005" },
                    { room: "006" },
                    { room: "007" }
                ]
            },
            {
                street_add: "Level 2, 7 Kelly Street",
                suburb: "Ultimo",
                state: "NSW",
                pcode: "2007",
                longitude: 0,
                latitude: 0,
                rooms: [
                    { room: "001" },
                    { room: "002" },
                    { room: "003" },
                    { room: "004" },
                    { room: "005" },
                    { room: "006" },
                    { room: "007" },
                    { room: "008" },
                    { room: "009" },
                    { room: "010" }
                ]
            },
            {
                street_add: "205 North Quay",
                suburb: "Brisbane",
                state: "QLD",
                pcode: "4000",
                longitude: 0,
                latitude: 0,
                rooms: [
                    { room: "001" },
                    { room: "002" },
                    { room: "003" }
                ]
            }
        ]
    }
]

Organisation.create(organisations)
    .then(() => {
        console.info(`seeded organisations`)

    })