import { fastify } from 'fastify'
import { databasePostgres } from './databasePostgres.js'

const databaseCars = new databasePostgres()

const server = fastify()

server.get('/', (req, res) => {
    console.send('Welcome...')
})

// Rota para criar
server.post('/cars', async (req, res) => {
    const { brand, model } = req.body
    await databaseCars.create({
        brand: brand,
        model: model
    })
    return res.status(201).send()
})

// Rota para listar
server.get('/cars', async (req, res) => {
    const search = req.query.search
    const cars = await databaseCars.list(search)
    return cars
    // Não precisa necessariamente do req, res
    //return res.send(cars)
})

server.put('/car/:id', async (req, res) => {
    const carId = req.params.id
    const { brand, model } = req.body
    await databaseCars.update(carId, {
        brand: brand,
        model: model
    })
    return res.status(204).send()
})

server.delete('/car/:id', async (req, res) => {
    const carId = req.params.id
    await databaseCars.delete(carId)
    return res.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
})