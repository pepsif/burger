import "./DeliveryPage.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Deivery() {

  useEffect(() => {
    const rootBlock = document.getElementById("root");
    const rootHeight = rootBlock.style.height;

    rootBlock.style.height = "90vh";

    

    return () => {
      rootBlock.style.height = rootHeight;
    };
  });

  return (
    <div className="delivery-section">
      <div className="container delivery-container">
        <div className="delivery-return-block">
          <Link to="/">
            <IoIosArrowBack className="delivery-return-button" />
          </Link>

          {/* <span className="delivery-return-title">тільки в межах міста</span> */}
        </div>
        <h6 className="title">Доставка вашого замовлення</h6>
        <Box
          className="box-form"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Ваше прізвище та ім'я"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Адреса доставки"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Бажаний час доставки"
            variant="outlined"
          />

          <Button className="delivery-submit" variant="contained">Підтвердити доставку</Button>
        </Box>

        <p>Сумма доставки: 30 грн</p>
        <p>Загальний рахунок: 230 грн</p>
      </div>
    </div>
  );
}
