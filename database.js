import { randomUUID } from 'node:crypto'

// Database local
export class database {
    // chave privada
    #cars = new Map()

    create(car) {
        const carId = randomUUID()
        this.#cars.set(carId, car)
    }

    update(id, car) {
        this.#cars.set(id, car)
    }

    delete(id) {
        this.#cars.delete(id)
    }

    list(search) {
        // Converter para Array e enviar
        // Sem o ID
        // return Array.from(this.#cars.values())
        // Com o ID
        return Array.from(this.#cars.entries())
            .map((carList) => {
                const carId = carList[0]
                const data = carList[1]
                return {
                    carId,
                    ...data
                }
            })
            .filter(allCars => {
                if (search) {
                    return allCars.model.includes(search)
                }
                return true
            })
    }
}