import styles from "./DeliveryPage.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

export default function Delivery() {
  return (
    <div className={styles.deliverySection}>
      <div className={"container" + " " + styles.deliveryContainer}>
        <div className={styles.deliveryReturnBlock}>
          <Link to="/">
            <IoIosArrowBack className={styles.deliveryReturnButton} />
          </Link>
        </div>
        <h6 className={styles.title}>Введіть дані для замовлення доставки</h6>

        <Formik
          initialValues={{
            firstName: "",
            adressDelivery: "",
            desireTimeDelivery: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className={styles.boxForm}>
            <label htmlFor="firstName">Ваше Ім'я</label>
            <Field className={styles.textInput} id="firstName" name="firstName" />

            <label htmlFor="adressDelivery">Адреса доставки</label>
            <Field className={styles.textInput} id="adressDelivery" name="adressDelivery"  />

            <label htmlFor="desirTimeDelivery">Бажаний час доставки</label>
            <Field className={styles.textInput} id="desireTimeDelivery" name="desireTimeDelivery"  />
           
            <button className={styles.deliverySubmit} type="submit">Підтвердити Замовлення</button>
          </Form>
        </Formik>

        <p className={styles.deliveryPrice}>Сумма доставки: 30 грн</p>
        <p className={styles.totalDeliveryPrice}>Загальний рахунок: 230 грн</p>
      </div>
    </div>
  );
}
