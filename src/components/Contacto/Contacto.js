import './Contacto.css'

const Contacto = () => {


    return (
        <div className='container my-5'>
            <h3 id="cont01">Contáctanos</h3>

            <div class="container my-5">
                <h1 id="contacto">Estamos para vos.</h1>
            </div>

            <div class="container formulario">
                <div class="form-group">
                    <label for="usr">Nombre(s):</label>
                    <input type="text" class="form-control" id="usr"/>
                </div>
                <div class="form-group">
                    <label for="usr">Apellido(s):</label>
                    <input type="text" class="form-control" id="usr"/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
                </div>
                <div class="form-group">
                    <label for="usr">WhatsApp:</label>
                    <input type="text" class="form-control" id="usr"/>
                </div>
                <div class="form-group">
                    <label for="comment">Tu consulta:</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
            </div>
            <div class="container-fluid bsubmit">
                <button type="button" class="btn btn-outline-dark">Enviar</button>
            </div>

        </div>
    )
}

export default Contacto