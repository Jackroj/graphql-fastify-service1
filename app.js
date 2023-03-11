const Fastify = require('fastify')
const mercurius = require('mercurius')
const schema = require('./schema')
const { getCourse, getCourses,getEvent } = require('./resolver')

const app = Fastify()

const resolvers = {
    course: getCourse,
    courses: getCourses,
    event: getEvent
};
(async() => {
    app.register(mercurius, {
        schema: schema,
        resolvers: resolvers,
        graphiql: true,
    })

    app.listen(3005)
})();