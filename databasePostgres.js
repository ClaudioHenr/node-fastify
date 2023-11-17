import { sql } from './connectDb.js'

export class databasePostgres {
    
    async create(car) {
        const {brand, model} = car
        await sql`INSERT INTO oldcar (brand, model) VALUES (${brand}, ${model})`
    }

    async update(id, car) {
        const {brand, model} = car
        await sql`UPDATE oldcar SET brand = ${brand}, model = ${model} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`DELETE FROM oldcar WHERE id = ${id};`
    }

    async list(search) {
        let cars
        if (search) {
            cars = await sql`SELECT * FROM oldcar WHERE model ilike ${ '%' + search + '%' }`
        } else {
            cars = await sql`SELECT * FROM oldcar`
        }
        return cars
    }   
}