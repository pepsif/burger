import "./DeliveryPage.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import bg from "../../assets/images/burger-delivery-fast-hamburger-car-cheeseburger-as-fast-food-car-mascot-burger-car-design-logotype_726113-2926.jpg";

export default function Delivery() {

  const styles = {
    deliverySection: {
      // background:`url(${bg})`,
    }
  }
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
    <div className="delivery-section" style={styles.deliverySection}>
      <div className="container delivery-container">
        <div className="delivery-return-block">
          <Link to="/">
            <IoIosArrowBack className="delivery-return-button" />
          </Link>

          {/* <span className="delivery-return-title">тільки в межах міста</span> */}
        </div>
        <h6 className="title">Введіть дані для замовлення доставки</h6>
        <Box
          className="box-form"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "100%"} }}
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
            id="outlined-basic"
            label="Адреса доставки"
            variant="filled"
            required

          />
          <TextField
            id="outlined-basic"
            label="Бажаний час доставки"
            variant="filled"
           required
          />

          <Button className="delivery-submit" variant="contained">
            Підтвердити доставку
          </Button>
        </Box>

        <p>Сумма доставки: 30 грн</p>
        <p>Загальний рахунок: 230 грн</p>
      </div>
    </div>
  );
}
