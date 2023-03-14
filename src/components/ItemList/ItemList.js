import Item from "../Item/Item"

const ItemList = ( {items} ) => {

    return (
        <div>

            <hr />
            <div className='row my-5'>

            { items.map((producto) => <Item key={producto.id} item={producto} />)}
            </div>

        </div>
    )
}

export default ItemList