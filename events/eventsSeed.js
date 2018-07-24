const Event = require('./event')


const events = [
    {
        "title": {
            "id": "5b55cd9e4bfb468b379302a0"
        },
        "organisation": {
            "id": "5b55ce45b9f4c28b881efd01"
        },
        "facilitatorObjs": [
        {
        "id": "5b55cdfcf4e1cc8b5d0600cf",
        "status": "Pending"
        }
        ],
        "attendees": 0,
        "status": "Pending",
        "creator": null,
        "notes": "trying to get refs working again",
        "onsite": true,
        "bookings": [
        {
        "start": "2018-07-23T13:20:00.586Z",
        "end": "2018-07-23T13:20:00.586Z",
        "location": "Melbourne"
        }
        ],
        "__v": 0
        }
]

Event.create(events)
    .then(() => {
        console.info(`seeded events`)

    })