import React, { useState } from 'react';
import '../styles/PizzaMenu.css'; // Assurez-vous que ce fichier CSS est bien référencé

const PizzaMenu = () => {
  // Données centralisées pour les pizzas
  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      description: 'Classic Margherita with tomato and mozzarella',
      category: 'Classic Pizzas',
      image: require('../assets/images/Margherita.png'), // Remplacez par le chemin correct
      prices: { Small: 13, Medium: 15, Large: 17 },
    },
    {
      id: 2,
      name: 'Pepperoni',
      description: 'Delicious pepperoni on a crispy crust',
      category: 'Classic Pizzas',
      image: require('../assets/images/Pepperoni.png'),
      prices: { Small: 15, Medium: 17, Large: 20 },
    },
    {
      id: 3,
      name: 'Veggie Supreme',
      description: 'Loaded with fresh veggies and mozzarella',
      category: 'Specialty Pizzas',
      image: require('../assets/images/Veggie.png'),
      prices: { Small: 15, Medium: 19, Large: 25 },
    },
    {
      id: 4,
      name: 'BBQ Chicken',
      description: 'Chicken, BBQ sauce, and fresh veggies',
      category: 'Specialty Pizzas',
      image: require('../assets/images/BBQ.png'),
      prices: { Small: 15, Medium: 19, Large: 25 },
    },
    {
      id: 5,
      name: 'Truffle Delight',
      description: 'Truffle oil, mushrooms, and a creamy base',
      category: 'Gourmet Pizzas',
      image: require('../assets/images/Truffle.png'),
      prices: { Small: 20, Medium: 23, Large: 27 },
    },
    {
      id: 6,
      name: 'Seafood Supreme',
      description: 'Seafood medley, cheese, and a garlic sauce',
      category: 'Gourmet Pizzas',
      image: require('../assets/images/Seafood.png'),
      prices: { Small: 22, Medium: 27, Large: 30 },
    },
  ];

  // État pour la taille sélectionnée
  const [selectedSizes, setSelectedSizes] = useState(
    pizzas.reduce((acc, pizza) => ({ ...acc, [pizza.id]: 'Medium' }), {})
  );

  // Gestion des changements de taille
  const handleSizeChange = (event, pizzaId) => {
    setSelectedSizes({ ...selectedSizes, [pizzaId]: event.target.value });
  };

  // Gestion du clic sur "Commander"
  const handleOrderClick = (pizzaName, size) => {
    alert(`You have ordered a ${size} ${pizzaName}.`);
  };

  // Catégories uniques
  const categories = [...new Set(pizzas.map((pizza) => pizza.category))];

  return (
    <div className="pizza-menu-container">
      <h2 className="menu-title">Pizza Menu</h2>

      {categories.map((category) => (
        <div key={category} className="pizza-category">
          <h3>{category}</h3>
          {pizzas
            .filter((pizza) => pizza.category === category)
            .map((pizza) => (
              <div key={pizza.id} className="pizza-item">
                <img src={pizza.image} alt={`${pizza.name} Pizza`} />
                <h4>{pizza.name}</h4>
                <p>{pizza.description}</p>
                <div className="size-selector">
                  <label>Select Size:</label>
                  <select
                    value={selectedSizes[pizza.id]}
                    onChange={(e) => handleSizeChange(e, pizza.id)}
                  >
                    {Object.keys(pizza.prices).map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="price">
                  {Math.round(pizza.prices[selectedSizes[pizza.id]])} DT
                </p>
                <button
                  className="order-button"
                  onClick={() =>
                    handleOrderClick(pizza.name, selectedSizes[pizza.id])
                  }
                >
                  Order Now
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default PizzaMenu;
