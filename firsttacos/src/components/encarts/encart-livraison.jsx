import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const EncartCommande = () => {
    return (

<section className="encart encart-livraison">
    <h2><FontAwesomeIcon icon={faTruck} /> Livraison</h2>
    <p className="infos-livraison">Faites-vous livrer GRATUITEMENT en 45 minutes.</p>
    <p className="lieux-livraison">Nous livrons le soir sur Croix et Wasquehal (à partir de 13€).</p>
</section>

    )
}

export default EncartCommande;