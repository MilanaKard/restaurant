import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={() => {
            navigate("/");
          }}
        >
        </div>
        <ul className={styles.navigation}>
          <li><Link to="/menu">Меню</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
