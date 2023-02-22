import './ItemListContainer.css'


const ItemListContainer = ( {greeting} ) => {
    return (

        <div className="contenedor">
            <h2>Item List Container</h2>
            <hr />
            {greeting}

            <div className='container'>
            <button className='btn btn-success'>Comprar</button>
            </div>

        </div>
    )
}

export default ItemListContainer