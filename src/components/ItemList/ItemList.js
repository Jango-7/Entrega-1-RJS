import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ( {items} ) => {

    return (
        <div>

            <div className='row my-5'>

            { items.map((producto) => <Item key={producto.id} item={producto} />)}
            </div>

        </div>
    )
}

export default ItemList