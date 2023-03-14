import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { pedirDatos } from '../../Helpers/pedirDatos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((response) =>{
                if(!categoryId){
                    setProductos(response)
                } else {
                    setProductos(response.filter((prod) => prod.category === categoryId))
                }
            })
            .catch((error) =>{
                console.log(error)
            })
            .finally(()=> {
                setLoading (false)
            })
    }, [categoryId])

    return (

        <div className="contenedor">
            <h2>Nuestros productos</h2>
            <hr />

            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }

            {/* <div className='container'>
            <button className='btn btn-success'>Comprar</button>
            </div> */}

        </div>
    )
}

export default ItemListContainer