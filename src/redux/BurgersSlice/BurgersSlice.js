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
        background: "linear-gradient(90deg, rgba(175,218,216,1) 0%, rgba(71,220,160,.8) 100%)",
        imageUrl: "../src/assets/burger1.png",
        imageForBurgerPage: "/src/assets/burger1.png"
    },
        {
            id: 1,
            title: "Рояль Бургер",
            calories: "Calories: 390",
            price: 120,
            rating: 5.1,
            composition: ["Булочка", "Салат", "Сир", "Соус Тітоньки Меїр", "Мясна Котлета", "Салат", "Майонез", "Булочка"],
            description: "Дві великі котлети з яловичини, булочка, два шматочки сиру “Чеддер”, помідор, цибуля, огірок маринований, салат, соус, приправа.",
            background: "linear-gradient(90deg, rgba(218,174,214,1) 0%, rgba(198,103,189,.8) 100%)",
            imageUrl: "/src/assets/burger2.png",
            imageForBurgerPage: "/src/assets/burger2.png"
        },
        {
            id: 2,
            title: "Бургер із Сиром",
            price: 60,
            calories: "Calories: 310",
            rating: 3.8,
            composition: ["Булочка", "Салат", "Сир", "Майонез", "Салат", "Булочка"],
            description: "Бургер з цибульним соусом та сиром. Соковита свиняча котлетка з начинкою із сиру та солодкуватий соус із цибулі на соєвому соусі.",
            background: "linear-gradient(90deg, rgba(174,189,218,1) 0%, rgba(111,146,213,.9) 100%)",
            imageUrl: "/src/assets/burger3.png",
            imageForBurgerPage: "/src/assets/burger3.png"
        },
        {
            id: 3,
            title: "Біф Бургер",
            price: 90,
            calories: "Calories: 500",
            rating: 4.6,
            composition: ["Булочка", "Салат", "Сир", "Мясна Котлета", "Майонез", "Салат", "Булочка"],
            description: "Пухка булка бріош з соковитою яловичою котлетою, ніжним сиром чедер та хрусткою панчетою з додаванням соусу барбекю та сирно-гірчичного соусу, подається з картопляними діпами, салатом коул-слоу та кетчупом",
            background: "linear-gradient(90deg, rgba(218,174,174,1) 0%, rgba(173,107,107,.9) 100%)",
            imageUrl: "../src/assets/burger4.png",
            imageForBurgerPage: "/src/assets/burger4.png"
        },
        {
            id: 4,
            title: "Сімейний",
            price: 160,
            calories: "Calories: 480",
            rating: 5.3,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            description: "котлети з яловичини, сир крем, булочка пшенична з кунжутом, салат Айсберг, маринований огірок, цибуля ріпчаста, соус \"Ремулат\".",
            background: "linear-gradient(90deg, rgba(218,174,214,1) 0%, rgba(187,95,179,1) 100%)",
            imageUrl: "../src/assets/burger5.png",
            imageForBurgerPage: "/src/assets/burger5.png"
        },
        {
            id: 5,
            title: "Байрактар",
            price: 180,
            calories: "Calories: 570",
            rating: 4.9,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            description: "Булочка на вибір, рослинна котлета, смажене куряче яйце, сир Чеддер, салат Айсберг, копчений перець, червона цибуля, соус Айолі, соус Джемесон",
            background: "linear-gradient(90deg, rgba(174,218,218,1) 0%, rgba(71,220,220,1) 100%)",
            imageUrl: "../src/assets/burger6.png",
            imageForBurgerPage: "/src/assets/burger6.png"
        },
        {
            id: 6,
            title: "ЄН Лав",
            price: 100,
            calories: "Calories: 490",
            rating: 4.6,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            description: "Булочка на вибір, рослинна котлета, огірки, салат Айсберг, помідори, сушена цибуля, соус медовий майонез, соус Цезар",
            background: "linear-gradient(90deg, rgba(247,189,68,1) 0%, rgba(255,172,0,.4) 100%)",
            imageUrl: "../src/assets/burger7.png",
            imageForBurgerPage: "/src/assets/burger7.png"
        },
        {
            id: 7,
            title: "Полтавський",
            price: 95,
            calories: "Calories: 610",
            rating: 4.2,
            composition: ["Булочка", "Салат", "Сир", "Соус Мехіко", "Куряча Котлета", "Салат", "Майонез", "Булочка"],
            description: "Булочка на вибір, рослинна котлета, салат Айсберг, огірки консервовані, червона цибуля, соус Айолі",
            background: "#dadada",
            imageUrl: "../src/assets/burger8.png",
            imageForBurgerPage: "/src/assets/burger8.png"
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
