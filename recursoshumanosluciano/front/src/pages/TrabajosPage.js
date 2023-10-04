import '../styles/TrabajosPage.css'
const TrabajosPage = (props) => {
    return (
<body>
    <header>
        <div className="holder">
            <img src="images/Logorrhh.png" width="150" alt="RRHH"/>
            <h1> RecursosHumanosLuciano</h1>
        </div>
    </header>
    <nav>
        <ul className="holder">
            <li><a href="index.html">Home</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a class="activo" href="trabajos.html">Trabajos</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
    <main className="holder">
        <div className="trabajos">
            <img src="images/trabajo1.jpg" alt=""/>
            <img src="images/trabajo2.jpg" alt=""/>
            <img src="images/trabajo3.jpg" alt=""/>
            <img src="images/trabajo4.jpg" alt=""/>
            <img src="images/trabajo5.jpg" alt=""/>
        </div>
    </main>
</body>





        )

}
export default TrabajosPage;