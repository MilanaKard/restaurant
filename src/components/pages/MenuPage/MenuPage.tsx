import styles from "./MenuPage.module.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const MenuPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container container_accent">
        <div className="content">
          <h1 className={`title title_main ${styles.title}`}>
           Наше Меню
          </h1>
          <div className={styles.menu}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { MenuPage };
