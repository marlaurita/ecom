import mugImage from '../assets/images/mug.svg'
import backpack from '../assets/images/backpack.svg'
import phones from '../assets/images/headphones.svg'
import sneakers from '../assets/images/sneakers.svg'
import watch from '../assets/images/watch.svg'
import plant from '../assets/images/plant.svg'

export interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Taza de cerámica',
        description: 'Taza artesanal',
        price: 12.99,
        image: mugImage
    },
    {
        id: 2,
        name: 'Auriculares',
        description: 'Taza artesanal',
        price: 12.99,
        image: phones
    },
    {
        id: 3,
        name: 'Mochila',
        description: 'Taza artesanal',
        price: 12.99,
        image: backpack
    },
    {
        id: 4,
        name: 'Zapatillas',
        description: 'Taza artesanal',
        price: 12.99,
        image: sneakers
    },
    {
        id: 5,
        name: 'Reloj',
        description: 'Taza artesanal',
        price: 12.99,
        image: watch
    },
    {
        id: 6,
        name: 'Planta',
        description: 'Taza artesanal',
        price: 12.99,
        image: plant
    },

]