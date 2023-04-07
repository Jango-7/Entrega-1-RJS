import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { pedirDatos } from '../../Helpers/pedirDatos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ScaleLoader from "react-spinners/ScaleLoader"



const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams()

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
                    ? <ScaleLoader
                    color="#19A7CE"
                    height={45}
                    margin={5}
                    width={8}
                    />
                    : <ItemList items={productos} />
            }

        </div>
    )
}

export default ItemListContainer