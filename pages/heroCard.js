
import React from 'react';
import ColorGrad from '../components/ColorGrad'; 
import CardGrid from '../components/CardGrid';

const HomePage = () => {
  const cards = [
    { id: 1, title: 'Ahri', imageUrl: '/ahri.jpg', linkTo: '/AhriPage' },
    { id: 2, title: 'Bwonsamdi', imageUrl: '/bwonsamdi.jpg', linkTo: '/BwonsamdiPage' },
    { id: 3, title: 'Elise', imageUrl: '/elise.jpg', linkTo: '/ElisePage' },
    { id: 4, title: 'Garosh Helscream', imageUrl: '/gar.jpg', linkTo: '/GaroshPage' },
    { id: 5, title: 'Akali', imageUrl: '/akali.jpg', linkTo: '/AkaliPage' },
    { id: 6, title: 'Morgana', imageUrl: '/morgana.jpg', linkTo: '/MorganaPage' },
    { id: 7, title: 'Thrall', imageUrl: '/thrall3.jpg', linkTo: '/ThrallPage' },
    { id: 8, title: 'Neeko', imageUrl: '/Neeko.jpg', linkTo: '/NeekoPage' },
    { id: 9, title: 'Sylvanas windrunner', imageUrl: '/sylvanas.jpg', linkTo: '/SylvanasPage' },
    { id: 10, title: 'Jaina Proudmore', imageUrl: '/jaina.webp', linkTo: '/JainaPage' },
    { id: 11, title: 'Bane Bloodhoof', imageUrl: '/bain4.webp', linkTo: '/BanePage' },
    { id: 12, title: 'Varien Wryn', imageUrl: '/varien2.webp', linkTo: '/VarienPage' },
  ];

  return (
    <div>
      <ColorGrad /> 
      
      <CardGrid cards={cards} />
    </div>
  );
};

export default HomePage;






