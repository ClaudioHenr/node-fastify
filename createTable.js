import { sql } from './connectDb.js'

sql`DROP TABLE IF EXISTS oldcar;`.then(() => console.log('Table droped'))

sql`
    CREATE TABLE oldCar(
        id SERIAL PRIMARY KEY, 
        brand TEXT,
        model TEXT
    );
`.then(() => console.log('Table old cars created...'))