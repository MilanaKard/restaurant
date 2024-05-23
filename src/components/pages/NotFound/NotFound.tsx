import Header from "../../Header/Header";
import styles from "./NotFound.module.scss";

const NotFound = (): JSX.Element => {
  return (
    <><Header /><div className="container container_accent">
      <div className={`content ${styles.content}`}>
      <h1 className={`title title_3 ${styles.title}`}>
          404
        </h1>
        <h1 className={`title title_4 ${styles.title}`}>
          Страница не найдена
        </h1>
      </div>
    </div></>
    
  );
};

export default NotFound;
