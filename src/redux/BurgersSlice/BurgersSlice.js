import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [ { 
      title:"Мексіканський",
      price: 80,
      rating: 4.2,
      composition: [ "Булочка","Салат","Сир","Соус Мехіко","Куряча Котлета","Салат","Майонез","Булочка" ],
      background: "#aedada",
      imageUrl: ""
    },
    { 
      title:"Рояль Бургер",
      price: 120,
      rating: 5.1,
      composition: [ "Булочка","Салат","Сир","Соус Тітоньки Меїр","Мясна Котлета","Салат","Майонез","Булочка" ],
      background: "#daaed6",
      imageUrl: ""
    },
    { 
      title:"Бургер із Сиром",
      price: 60,
      rating: 3.8,
      composition: [ "Булочка","Салат","Сир","Майонез","Салат","Булочка" ],
      background: "#aebdda",
      imageUrl: ""
    },
    { 
      title:"Біф Бургер",
      price: 90,
      rating: 4.6,
      composition: [ "Булочка","Салат","Сир","Мясна Котлета","Майонез","Салат","Булочка" ],
      background: "#daaeae",
      imageUrl: ""
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
