import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ScaleLoader from "react-spinners/ScaleLoader"
import { db } from '../../firebase/config'



const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
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