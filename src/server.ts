import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Hi'
})

app.listen({
    port: 3333,
})