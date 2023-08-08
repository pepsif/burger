import styles from "./DeliveryPage.module.scss";
import {IoIosArrowBack} from "react-icons/io";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import bg
    from "../../assets/images/burger-delivery-fast-hamburger-car-cheeseburger-as-fast-food-car-mascot-burger-car-design-logotype_726113-2926.jpg";

export default function Delivery() {

    useEffect(() => {
        const rootBlock = document.getElementById("root");
        const rootHeight = rootBlock.style.height;
        rootBlock.style.background = `url(${bg}) `;
        rootBlock.style.backgroundSize = 'cover'
        rootBlock.style.height = "90vh";

        return () => {
            rootBlock.style.height = rootHeight;
            rootBlock.style.background = "white";
        };
    });

    return (
        <div style={styles.deliverySection}>
            <div className={styles.deliveryContainer}>
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

                        className="text-input"
                        id="outlined-basic"
                        label="Ваше прізвище та ім'я"
                        variant="filled"
                        required


                    />
                    <TextField
                        className="text-input"
                        id="outlined-basic"
                        label="Адреса доставки"
                        variant="filled"
                        required

                    />
                    <TextField
                        className="text-input"
                        id="outlined-basic"
                        label="Бажаний час доставки"
                        variant="filled"
                        required
                    />

                    <Button className="delivery-submit" variant="contained">
                        Підтвердити доставку
                    </Button>
                </Box>

                <p className="delivery-price">Сумма доставки: 30 грн</p>
                <p className="total-delivery-price">Загальний рахунок: 230 грн</p>
            </div>
        </div>
    );
}
