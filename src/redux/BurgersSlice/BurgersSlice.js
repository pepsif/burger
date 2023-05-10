import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeBurgerId: 0,
    data: [{
        id: 0,
        title: "Мексіканський",
        calories: "Calories: 450",
        price: 80,
        rating: 4.2,
        composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
        description: "Мексиканський гамбургер - це 100% яловичина на вогні, маринований огірок, сирний соус та пікантний соус Сальса, підрум'яне булочка з кунжутом та хрусткі чіпси Начос!",
        background: "#aedada",
        imageUrl: "../src/assets/burger1.png"
    },
        {
            id: 1,
            title: "Рояль Бургер",
            calories: "Calories: 390",
            price: 120,
            rating: 5.1,
            composition: ["Булочка", "Салат", "Сир", "Соус Тітоньки Меїр", "Мясна Котлета", "Салат", "Майонез", "Булочка"],
            background: "#daaed6",
            imageUrl: "../src/assets/burger2.png"
        },
        {
            id: 2,
            title: "Бургер із Сиром",
            price: 60,
            calories: "Calories: 310",
            rating: 3.8,
            composition: ["Булочка", "Салат", "Сир", "Майонез", "Салат", "Булочка"],
            background: "#aebdda",
            imageUrl: "../src/assets/burger3.png"
        },
        {
            id: 3,
            title: "Біф Бургер",
            price: 90,
            calories: "Calories: 500",
            rating: 4.6,
            composition: ["Булочка", "Салат", "Сир", "Мясна Котлета", "Майонез", "Салат", "Булочка"],
            background: "#daaeae",
            imageUrl: "../src/assets/burger4.png"
        },
        {
            id: 4,
            title: "Сімейний",
            price: 160,
            calories: "Calories: 480",
            rating: 5.3,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            background: "#daaed6",
            imageUrl: "../src/assets/burger5.png"
        },
        {
            id: 5,
            title: "Байрактар",
            price: 180,
            calories: "Calories: 570",
            rating: 4.9,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            background: "#aedada",
            imageUrl: "../src/assets/burger6.png"
        },
        {
            id: 6,
            title: "ЄН Лав",
            price: 100,
            calories: "Calories: 490",
            rating: 4.6,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            background: "#f7bd44",
            imageUrl: "../src/assets/burger7.png"
        },
        {
            id: 7,
            title: "Полтавський",
            price: 95,
            calories: "Calories: 610",
            rating: 4.2,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            background: "#dadada",
            imageUrl: "../src/assets/burger8.png"
        }
    ]

}

export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {
        setActiveBurgerId: (state,action) => {
            state.activeBurgerId = action.payload

        }
    }
})

export const { setActiveBurgerId } = burgersSlice.actions
export default burgersSlice.reducer
