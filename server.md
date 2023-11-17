// import { createServer } from 'node:http'

// const server = createServer((req, res) => {
//     res.write('Dae man testando legal oloko bicho')
//     return res.end()
// })

// server.listen(3333)


// import { fastify } from 'fastify'

// const server = fastify()

// server.get('/', () => {
//     return 'Bem vindo'
// })

// server.get('/pag1', () => {
//     return 'outra página GET'
// })

// server.post('/pag1', () => {
//     return 'Página POST'
// })

// server.listen({
//     port: 3333
// })

// BD em memoria
// import { fastify } from 'fastify'
// import { database } from './database.js'

// const databaseCars = new database()

// const server = fastify()

// server.get('/', () => {
// })

// // Rota para criar
// server.post('/cars', (req, res) => {
//     const { brand, model } = req.body
//     databaseCars.create({
//         brand: brand,
//         model: model
//     })
//     return res.status(201).send()
// })

// // Rota para listar
// server.get('/cars', (req, res) => {
//     const search = req.query.search
//     const cars = databaseCars.list(search)
//     return cars
//     // Não precisa necessariamente do req, res
//     //return res.send(cars)
// })

// server.put('/car/:id', (req, res) => {
//     const carId = req.params.id
//     const { brand, model } = req.body
//     databaseCars.update(carId, {
//         brand: brand,
//         model: model
//     })
//     return res.status(204).send()
// })

// server.delete('/car/:id', (req, res) => {
//     const carId = req.params.id
//     databaseCars.delete(carId)
//     return res.status(204).send()
// })

// server.listen({
//     port: 3333
// })