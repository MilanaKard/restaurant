import styles from "./ReviewPage.module.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { FormCard } from "../../FormCard/FormCard";
import { useAppSelector } from "../../../hooks/redux";
import MainButton from "../../Button/MainButton";
import { Link } from "react-router-dom";

const ReviewPage = (): JSX.Element => {
  const { data } = useAppSelector((state) => state.form);
  return (
    <>
      <Header />
      <div className="container container_accent">
        <div className="content">
          <div className={styles.button}>
            <Link to="/form">
              <MainButton
                isDisabled={false}
                onClick={() => {
                  return;
                }}
              >
                Оставить отзыв
              </MainButton>
            </Link>
          </div>
          <h1 className={`title title_3 ${styles.title}`}>Отзывы</h1>
          <div className={styles.cards}>
            {data.map((formData) => (
              <FormCard data={formData}></FormCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { ReviewPage };
