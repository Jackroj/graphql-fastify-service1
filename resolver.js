const {coursesData} = require('./mockData')

const getCourse = function(args) { 
    const {id} = args;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];

}
const getCourses = function(args) {
    if (args.topic) {
        const {topic} = args;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

const getEvent = (args) =>{
    const { id } = args;
    return {
        id: id,
        title:"title",
        venueName: "venueName",
        address: "address",
        cityName: "cityName"
    }
}

module.exports ={
    getCourse,
    getCourses,
    getEvent
}