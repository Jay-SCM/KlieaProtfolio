
import React from 'react';
import CardGrid from '../components/CardGrid';

const HomePage = () => {
  const cards = [
        { id: 1, title: 'Ahri', imageUrl: '/ahri.jpg', linkTo: '/AhriPage' },
        { id: 2, title: 'Bwonsamdi', imageUrl: '/bwonsamdi.jpg', linkTo: '/cards/card2' },
        { id: 3, title: 'Elise', imageUrl: '/elise.jpg', linkTo: '/cards/card3' },
        { id: 4, title: 'Garosh Helscream', imageUrl: '/gar.jpg', linkTo: '/cards/card4' },
        { id: 5, title: 'Akali', imageUrl: '/akali.jpg', linkTo: '/cards/card5' },
        { id: 6, title: 'Morgana', imageUrl: '/morgana.jpg', linkTo: '/cards/card6' },
        { id: 7, title: 'Thrall', imageUrl: '/thrall3.jpg', linkTo: '/cards/card7' },
        { id: 8, title: 'Neeko', imageUrl: '/Neeko.jpg', linkTo: '/cards/card8' },
        { id: 9, title: 'Sylvanas windrunner', imageUrl: '/sylvanas.jpg', linkTo: '/cards/card9' },
        { id: 10, title: 'Jaina Proudmore', imageUrl: '/jaina.webp', linkTo: '/cards/card10' },
        { id: 11, title: 'Bane Bloodhoof', imageUrl: '/bain4.webp', linkTo: '/cards/card11' },
        { id: 12, title: 'Varien Wryn', imageUrl: '/varien2.webp', linkTo: '/cards/card12' },
      ];

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <CardGrid cards={cards} />
    </div>
  );
};

export default HomePage;





