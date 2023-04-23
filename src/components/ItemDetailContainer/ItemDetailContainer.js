import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import ScaleLoader from "react-spinners/ScaleLoader"
import { db } from "../../firebase/config"
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState (true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        getDoc (docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))
    }, [])

    return (

        <div className="container my-5">
            {
                loading
                    ? <ScaleLoader
                    color="#19A7CE"
                    height={45}
                    margin={5}
                    width={8}
                    />
                    : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer