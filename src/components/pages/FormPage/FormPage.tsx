import styles from "./FormPage.module.scss";
import { Form, Inputs } from "../../Form/Form";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useActions } from "../../../hooks/actions";
import { PopUp } from "../../PopUp/PopUp";
import { useState } from "react";
import MainButton from "../../Button/MainButton";
import { Link } from "react-router-dom";

const FormPage = (): JSX.Element => {
  const { addFormData } = useActions();
  const [isPopUpActive, setIsPopUpActive] = useState(false);
  return (
    <>
      <Header />
      <div className="container container_accent">
        <div className="content">
          <div className={styles.form}>
          <h1 className={`title title_3 ${styles.title}`}>
                  Оставьте отзыв
                </h1>
                <p className={`text ${styles.text}`}>
                  Ваше мнение для нас важно
                </p>
            <Form
              onSubmit={function (formData: Inputs): void {
                console.log(formData);
                addFormData(formData);
                setIsPopUpActive(true)
              }}
            ></Form>
          </div>
        </div>
        <PopUp isVisible={isPopUpActive} onClose={() => setIsPopUpActive(false)}>
          <div className={styles.popup}>
        <h2 className="card-title title title title_5">Спасибо за отзыв!</h2>
        <p className="text">Вы можете увидеть свой отзыв на странице с отзывами.</p>
        <Link to="/reviews"><MainButton isDisabled={false} onClick={() => {
            return;
          }}>Читать отзывы</MainButton></Link></div>
        </PopUp>
      </div>
      <Footer />
    </>
  );
};

export { FormPage };
