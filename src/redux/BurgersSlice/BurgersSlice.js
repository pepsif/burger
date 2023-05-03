import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [ { title:"Мексіканський",
      price: 80,
      composition: [ "Булочка","Салат","Сир","Соус Мехіко","Куряча Котлета","Салат","Майонез","Булочка" ],
      background: "#aedada",
      imageUrl: ""
    },
    { title:"Рояль Бургер",
      price: 120,
      composition: [ "Булочка","Салат","Сир","Соус Тітоньки Меїр","Мясна Котлета","Салат","Майонез","Булочка" ],
      background: "#aedada",
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
