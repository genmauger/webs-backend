const Workshop = require('./Workshop')

const workshops = [
    {
        workshop_name: "Hands on Coding for Beginners",
        skills_required: []
    },{
        workshop_name: "Hands on Coding for Intermediate",
        skills_required: []
    },{
        workshop_name: "Mobile App Development with Swift",
        skills_required: []
    },{
        workshop_name: "Introduction to IOT and Arduino",
        skills_required: []
    },{
        workshop_name: "Unity Game Development for Beginners",
        skills_required: []
    },{
        workshop_name: "Unity Gamemaker for Kids",
        skills_required: []
    },{
        workshop_name: "Build a Web App (HTML, CSS and Javascript",
        skills_required: []
    },{
        workshop_name: "Coding and Robotics for Kids",
        skills_required: []
    },{
        workshop_name: "Intro to Javascript",
        skills_required: []
    },{
        workshop_name: "Become a Digital Artist",
        skills_required: []
    },{
        workshop_name: "Create VFX in Film",
        skills_required: []
    },{
        workshop_name: "Code Your World",
        skills_required: []
    },{
        workshop_name: "Immersive Robotics",
        skills_required: []
    },{
        workshop_name: "Gamers Unite",
        skills_required: []
    },{
        workshop_name: "Virtual Reality (VR) Experience",
        skills_required: []
    },{
        workshop_name: "Digital Technologies",
        skills_required: []
    }
]

Workshop.create(workshops)
.then(() => {
    console.log("Seeded Workshops")
})