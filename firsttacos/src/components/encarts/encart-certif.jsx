import React from 'react';
import halalImage from '../../Assets/halal-food.jpg';

const EncartCertif = () => {
    return (
        <section className="encart encart-certification">
            <h2>Certificat Halal</h2>
            <img src={halalImage} alt="Halal" className="img-halal" />
            <p className="infos-livraison">Tous nos produits sont certifiés Halal.</p>
        </section>
    );
};

export default EncartCertif;