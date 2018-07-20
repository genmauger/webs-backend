const Notification = require('./notification')

const notifications = [
    {
        message: 'Test message',
        recipient: 'user@gmail.com',
        time: '08/04/2018 12:00',
        unread: false
    }
]

Notification.create(notifications)
    .then(() => {
        console.info(`seeded notifications`)

    })