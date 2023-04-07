import { useEffect } from "react";

const Contacto = () => {

    const clickear = (e) => {
        console.log(e.stopPropagation())
    }

    useEffect(() => {

        window.addEventListener('click', clickear)

        return () => {
            window.removeEventListener('click', clickear)
        }

    }, [])




    return (
        <div className='container my-5' onClick={clickear}>
            <h3>Contacto</h3>

        </div>
    )
} 

export default Contacto