import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

const EncartCommande = () => {
    return (
        <section className="encart encart-commande">
            <div>
                <h2>Commandez en ligne</h2>
            </div>
            <div className="button-order">
                <a href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=398049e0-2a0d-431a-9580-811ad27003ae"><button><FontAwesomeIcon icon={faAt} /> Commande en ligne</button></a>
                <a href="tel:0320379623"><button><FontAwesomeIcon icon={faPhone} /> 03 20 37 96 23</button></a>
            </div>
        </section>
    )
    }

export default EncartCommande;