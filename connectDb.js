import 'dotenv/config'
// dotenv vai salvar todas a variaveis de ambiente em uma vairável global chamada process.env
import postgres from 'postgres';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

export const sql = postgres(URL, { ssl: 'require' })

// const sql = postgres({
//     host: PGHOST,
//     database: PGDATABASE,
//     username: PGUSER,
//     password: PGPASSWORD,
//     port: 5432,
//     ssl: 'require',
//     connection: {
//       options: `project=${ENDPOINT_ID}`,
//     },
//   });

// export default sql