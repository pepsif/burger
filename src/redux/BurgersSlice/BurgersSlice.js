import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [ { 
      title:"Мексіканський",
      price: 80,
      rating: 4.2,
      composition: [ "Булочка","Салат","Сир","Соус Мехіко","Куряча Котлета","Салат","Майонез","Булочка" ],
      background: "#aedada",
      imageUrl: "../src/assets/burger1.png"
    },
    { 
      title:"Рояль Бургер",
      price: 120,
      rating: 5.1,
      composition: [ "Булочка","Салат","Сир","Соус Тітоньки Меїр","Мясна Котлета","Салат","Майонез","Булочка" ],
      background: "#daaed6",
      imageUrl: "../src/assets/burger2.png"
    },
    { 
      title:"Бургер із Сиром",
      price: 60,
      rating: 3.8,
      composition: [ "Булочка","Салат","Сир","Майонез","Салат","Булочка" ],
      background: "#aebdda",
      imageUrl: "../src/assets/burger3.png"
    },
    { 
      title:"Біф Бургер",
      price: 90,
      rating: 4.6,
      composition: [ "Булочка","Салат","Сир","Мясна Котлета","Майонез","Салат","Булочка" ],
      background: "#daaeae",
      imageUrl: "../src/assets/burger4.png"
    },
    { 
      title:"Сімейний",
      price: 160,
      rating: 5.3,
      composition: [ "Булочка","Салат","Сир","Соус Мехіко","Куряча Котлета","Салат","Майонез","Булочка" ],
      background: "#daaed6",
      imageUrl: "../src/assets/burger5.png"
    },
    { 
      title:"Байрактар",
      price: 180,
      rating: 4.9,
      composition: [ "Булочка","Салат","Сир","Соус Мехіко","Куряча Котлета","Салат","Майонез","Булочка" ],
      background: "#aedada",
      imageUrl: "../src/assets/burger6.png"
    },
    { 
      title:"ЄН Лав",
      price: 100,
      rating: 4.6,
      composition: [ "Булочка","Салат","Сир","Соус Мехіко","Куряча Котлета","Салат","Майонез","Булочка" ],
      background: "#f7bd44",
      imageUrl: "../src/assets/burger7.png"
    },
    { 
      title:"Полтавський",
      price: 95,
      rating: 4.2,
      composition: [ "Булочка","Салат","Сир","Соус Мехіко","Куряча Котлета","Салат","Майонез","Булочка" ],
      background: "#dadada",
      imageUrl: "../src/assets/burger8.png"
    }
  ]
    
    
} 
     
export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {

    }
})

export default burgersSlice.reducer
