import React from 'react';
import tacosImage from "../../Assets/tacos.jpeg"
import burgerImage from '../../Assets/burger.jpeg';
import kapsalonImage from "../../Assets/kapsalon.jpeg"

const EncartProduits = () => {
    return (
        <section className="encart div-produits">
            <div className="card-produit card-tacos">
                <img src={tacosImage} alt="tacos" className="img-produit black-white"/>
                <h1 className="titre-produit">Tacos</h1>
                <h2 className="titre-produit style-script">Signature</h2>
            </div>
            <div className="card-produit card-burger">
                <img src={burgerImage} alt="burger" className="img-produit black-white"/>
                <h1 className="titre-produit">Burger</h1>
                <h2 className="style-script">Gourmet</h2>
            </div>
            <div className="card-produit card-kapsalon">
                <img src={kapsalonImage} alt="kapsalon" className="img-produit black-white"/>
                <h1 className="titre-produit">Kapsalon</h1>
                <h2 className="style-script">Signature</h2>
            </div>
        </section>
    );
};

export default EncartProduits;