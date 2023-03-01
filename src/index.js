const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

fastify.listen(3000, (err, address) => {
    if (err) throw err
    console.log(`Server listening on ${address}`)
})
