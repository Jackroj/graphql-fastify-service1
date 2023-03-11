module.exports  = `
type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
    event(id: String!): Events
},
type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
},
type Events {
    id: String
    title: String
    venueName: String
    address: String
    cityName: String
}
`;