import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, query, addDoc, writeBatch, where, documentId, getDocs } from "firebase/firestore"


const Checkout = () => {
const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(values.nombre.length < 3){
            alert("Nombre inválido")
            return
        }
        if(values.direccion.length < 3){
            alert("Dirección inválida")
            return
        }
        if(values.email.length < 3){
            alert("Email inválido")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, price: prod.price, cantidad: prod.cantidad, name: prod.product})),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection (db, 'productos')
        const outOfStock = []

        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id)) )

        const response = await getDocs(itemsRef)
        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
            })
        } else {
            alert("Productos sin stock.")
        }



        

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu pedido se realizó exitosamente!</h2>
                <hr />
                <p>Guarda tu número de orden: <strong>{orderId}</strong> </p>
                <Link className="btn btn-outline-primary" to="/">Regresar al inicio</Link>
            </div>
        )
    }

    if(cart.length === 0 ){
        return <Navigate to="/"/>
    }

    return (
        <div className='container my-5'>
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}                    
                    type={"text"}
                    placeholder="Nombre"
                    className="form-control my-2"
                    name="nombre"
                />
                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={"text"}
                    placeholder="Dirección"
                    className="form-control my-2"
                    name="direccion"
                />
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type={"email"}
                    placeholder="Email"
                    className="form-control my-2"
                    name="email"
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout