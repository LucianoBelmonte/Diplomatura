import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/NosotrosPage/';

const novedades = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/nosotrospage');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Nosotros</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (         
                        novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
     );    
}


import '../styles/NosotrosPage.css'
const NosotrosPage = (props) => {
    return (
        <main>
        <div className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptas aperiam asperiores
                repellat rerum ullam necessitatibus eaque commodi natus similique? Ducimus sequi quos ab debitis
                voluptatem amet neque obcaecati. Repellat.</p>
        </div>
            <div className="staff">
                <div className="persona1"></div>
                <h2>Staff</h2>
                <img src="images/nosotros1.jpg" alt="BelmonteLuciano"/>
                <h3>Belmonte Luciano</h3>
                <h4>Fundador</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores ipsum hic aliquam
                    doloribus ea quos sequi suscipit necessitatibus assumenda! Consequuntur ex, esse sapiente nulla
                    ipsam inventore dolore eveniet nobis?</p>
            </div>
            <div className="staff">
            <div className="persona2"></div>
            <h2>Staff</h2>
            <img src="images/nosotros2.jpg" alt="Colaboradora"/>
            <h3>Santillan Laura</h3>
            <h4>Co Fundadora</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores ipsum hic aliquam
                doloribus ea quos sequi suscipit necessitatibus assumenda! Consequuntur ex, esse sapiente nulla
                ipsam inventore dolore eveniet nobis?</p>
        </div>
    </main>
)
}
export default NosotrosPage;