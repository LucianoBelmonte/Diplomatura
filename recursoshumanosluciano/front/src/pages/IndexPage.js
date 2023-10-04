import '../styles/IndexPage.css'
const IndexPage = (props) => {
    return (
        <body>
    <header>
        <div className="holder">
            <img src="images/Logorrhh.png" width="150" alt="RRHH"/>
            <h1> RecursosHumanosLuciano</h1>
        </div>
        </header>     
<main className="holder">
        <div className="columnas">
            <section className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic ipsa corporis earum iusto velit
                    quaerat, quibusdam dolorem pariatur fugiat perspiciatis quod nam officia molestiae? Voluptate harum
                    perferendis quidem magni.</p>
                </section>
                <div className="presentacion">
                    <h2>Presentacion</h2>
                    <div className="Presentacion">
                        <span class="cita">Nos Caracterizamos por nuestro compromiso y responsabilidad</span>
                    </div>                 
                              
                </div>
                <div className="Portada">
                    <img src="1200px.jfif" alt="Empleados"/>
         </div> 
        </div>   
        </main> 
        </body>
 

    )
}
export default IndexPage;