import React from 'react';
import halalImage from '../../Assets/halal-food.jpg';

const EncartCertif = () => {
    return (
        <section className="encart encart-certification">
            <h2>Certificat Halal</h2>
            <p className="infos-livraison">Tous nos produits sont certifiés Halal</p>
            <img src={halalImage} alt="Halal" className="img-halal" />
        </section>
    );
};

export default EncartCertif;