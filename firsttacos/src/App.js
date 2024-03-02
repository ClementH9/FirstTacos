import React from 'react';
import './App.css';
import Header from './components/header/header';
import EncartProduits from './components/encarts/encart-produits';
import EncartAutresProduits from './components/encarts/encart-autres-produits';
import EncartCommande from './components/encarts/encart-commande';
import EncartLivraison from './components/encarts/encart-livraison';
import EncartCertif from './components/encarts/encart-certif';
import Footer from './components/footer/footer';

function App() {
  return (
<body>
  <div class="container">
    <main>
      <Header />
      <EncartProduits />
      <EncartAutresProduits />
      <EncartCommande />
      <EncartLivraison />
      <EncartCertif />
      <Footer />
    </main>
  </div>
</body>
  );
}

export default App;
