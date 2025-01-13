import * as React from "react";
import styles from "./Sort.module.scss";
import { useSelector } from "react-redux";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Sort() {
    const menuOn = useSelector((state) => state.sort.burgers);

    const [value, setValue] = React.useState(0); // Стан для Tabs
    const [price, setPrice] = React.useState(1); // Стан для Select (популярні)

    // Обробка зміни для Tabs
    const handleTabsChange = (event, newValue) => {
        setValue(newValue);
    };

    // Обробка зміни для Select
    const handleSelectChange = (event) => {
        setPrice(event.target.value);
    };

    console.log(menuOn);

    return (
        <section className={styles.sort_section}>
            <div className={styles.sort_container}>
                <Box
                    sx={{
                        display: "flex", // Використовуємо Flexbox
                        justifyContent: "space-between", // Проміжок між елементами
                        alignItems: "center", // Вертикальне вирівнювання
                        width: "100%",
                        bgcolor: "#f5f5f5",
                    }}
                >
                    {/* Tabs займає 70% */}
                    <Tabs
                        value={value}
                        onChange={handleTabsChange} // Обробник для Tabs
                        textColor="inherit"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#000000", // Колір індикатора
                            },
                        }}
                        sx={{
                            flexBasis: "70%", // Задаємо 70% ширини
                            "& .MuiTabs-scroller": {
                                maxWidth: "100%", // Ширина Tabs повністю використовується
                            },
                            "& .MuiTabs-flexContainer": {
                                justifyContent: "space-around", // Розподіл табів із проміжками
                            },
                        }}
                    >
                        <Tab
                            className={styles.sort_title}
                            label="Гамбургери"
                            sx={{ padding: "0" }}
                        />
                        <Tab className={styles.sort_title} label="Кава" sx={{ padding: "0" }} />
                        <Tab className={styles.sort_title} label="Напої" sx={{ padding: "0" }} />
                    </Tabs>

                    {/* FormControl займає 30% */}
                    <FormControl
                        sx={{
                            flexBasis: "30%", // Задаємо 30% ширини
                        }}
                    >
                        <Select
                            labelId="price-filter"
                            id="price-filter"
                            value={price} // Прив'язка до стану Select
                            onChange={handleSelectChange} // Обробник для Select
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none", // Прибирає бордер
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    border: "none", // Бордер при ховері
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    border: "none", // Бордер при фокусі
                                },
                            }}
                        >
                            <MenuItem value={1}>Популярні</MenuItem>
                            <MenuItem value={2}>Від найнижчої</MenuItem>
                            <MenuItem value={3}>Від найбільшої</MenuItem>
                        </Select>
                    </FormControl>
                </Box>


            </div>
        </section>
    );
}
