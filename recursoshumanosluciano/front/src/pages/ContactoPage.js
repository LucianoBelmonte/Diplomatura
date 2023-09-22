const ContactoPage=(props) => {
    return (
<body>
    <header>
        <div className="holder">
            <img src="Logorrhh.png" width="150" alt="RRHH"/>
            <h1> RecursosHumanosLuciano</h1>
        </div>
    </header>
    <nav>
        <ul className="holder">
            <li><a href="index.html">Home</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="trabajos.html">Trabajos</a></li>
            <li><a class="activo" href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
    <main class="holder">
        <div>
            <h2>Comunicate con nosotros</h2>
            <form action="method" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input for="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div>
            <p class="info">Comunicate con Nosotros</p>
            <h4>Telefono:0000</h4>
            <h4>Sede:00000</h4>
            <h4>Mail:xxxxx@gmail</h4>
            <h4>Intagram: xxxxx</h4>
        </div>

    </main>
</body>
        )
 
    }
    export default ContactoPage;
    