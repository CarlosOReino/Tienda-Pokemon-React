import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer transparent text-white mt-5 p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h1 className="display-4"><span className="text-warning">Tienda</span>Pokemon</h1>
                        <p>
                            Tienda Pokemon es tu lugar de confianza para encontrar todos los productos relacionados con Pokemon. Desde cartas hasta juguetes, tenemos todo lo que necesitas.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2>Contacto</h2>
                        <p><i className="fas fa-phone"></i> +123 456 789</p>
                        <p><i className="fas fa-envelope"></i> info@tiendapokemon.com</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2>Síguenos</h2>
                        <a href="https://www.linkedin.com" className="text-white me-3"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a href="https://www.github.com" className="text-white me-3"><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                <div className="text-center mt-3">
                    &copy; 2024 Tienda Pokemon | Diseñado por Carlos
                </div>
            </div>
        </footer>
    );
}

export default Footer;
