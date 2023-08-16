import styles from "./DeliveryPage.module.scss";
import {IoIosArrowBack} from "react-icons/io";

import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Delivery() {

     return (
        <div className={styles.deliverySection}>
            <div className={"container"+" "+ styles.deliveryContainer}>

                <div className={styles.deliveryReturnBlock}>
                    <Link to="/">
                        <IoIosArrowBack className={styles.deliveryReturnButton}/>
                    </Link>

                </div>
                <h6 className={styles.title}>Введіть дані для замовлення доставки</h6>
                <Box
                    className={styles.boxForm}
                    component="form"
                    // sx={{ "& > :not(style)": { m: 1, width: "100%"} }}
                    noValidate
                    autoComplete="off"
                    sx={ {input: { color: "#f0b944", border: "1px solid #f0b944" } ,label: { color:"#f0b944" }   } }
                >
                    <TextField
                        className={styles.textInput}
                        id="outlined-basic"
                        label="Ваше прізвище та ім'я"
                        variant="filled"
                        required
                    />
                    <TextField
                        className={styles.textInput}
                        id="outlined-basic"
                        label="Адреса доставки"
                        variant="filled"
                        required
                    />
                    <TextField
                        className={styles.textInput}
                        id="outlined-basic"
                        label="Бажаний час доставки"
                        variant="filled"
                        required
                    />

                    <Button className={styles.deliverySubmit} variant="contained">
                        Підтвердити доставку
                    </Button>
                </Box>

                <p className={styles.deliveryPrice}>Сумма доставки: 30 грн</p>
                <p className={styles.totalDeliveryPrice}>Загальний рахунок: 230 грн</p>
            </div>
        </div>
    );
}
