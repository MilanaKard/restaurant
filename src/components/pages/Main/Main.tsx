import styles from "./Main.module.scss";
import Header from "../../Header/Header";
import AppearAnimation from "../../AppearAnimation/AppearAnimation";
import ScaleAnimation from "../../ScaleAnimation/ScaleAnimation";
import AdvantageCard from "../../AdvantageCard/AdvantageCard";
import Footer from "../../Footer/Footer";
import MainButton from "../../Button/MainButton";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import { FormCard } from "../../FormCard/FormCard";

const images = ["/png/spices1.png", "/png/spices2.png", "/png/spices3.png"];
const advantagesData = [
  {
    title: "Премиум качество",
    text: "Для наших блюд мы выбираем только высокачественные продукты.",
    imageLink: "/svg/Icon_fish.svg",
  },
  {
    title: "Сезонные овощи",
    text: "Для наших блюд мы выбираем только высокачественные продукты.",
    imageLink: "/svg/Icon_carrot.svg",
  },
  {
    title: "Свежие фрукты",
    text: "Для наших блюд мы выбираем только высокачественные продукты.",
    imageLink: "/svg/Icon_lemon.svg",
  },
];


const Main = () => {
  const { data } = useAppSelector((state) => state.form);

  return (
    <>
      <Header />
      <div className="container container_main">
        <div className="content">
          <div className={styles.grid}>
            <AppearAnimation >
              <div className={styles.item1}>
                <h1 className={`title title_main ${styles.title_main}`}>
                  Правильное питание - часть здорового образа жизни
                </h1>
                <p className={`text ${styles.text}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </p>
                <p className={`title_4 ${styles["scroll-text"]}`}>
                  Scroll - - - - - - - - - -&gt;
                </p>
              </div>
            </AppearAnimation>
            <AppearAnimation>
              <div className={styles.item2}>
                <div className={`image ${styles.image1}`}></div>
                <div className={styles["spices-container"]}>
                  {images.map((image, index) => (
                    <ScaleAnimation delay={(index + 1) * 500}>
                      <div
                        className={`image ${styles.spice}`}
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    </ScaleAnimation>
                  ))}
                </div>
              </div>
            </AppearAnimation>
            <AppearAnimation >
              <div className={styles.item3}>
                <div className={`image ${styles.image2}`}></div>
                <h3 className={`title title_3 ${styles.title_3}`}>
                  Начни планировать свою диету
                </h3>
                <p className={`text ${styles.text}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </p>
              </div>
            </AppearAnimation>
            <AppearAnimation>
              <div className={styles.item4}>
                <p className={`text ${styles.text3}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </p>
                <div className={`image ${styles.image3}`}></div>
              </div>
            </AppearAnimation>
          </div>
        </div>
      </div>
      <div className="container .container_light">
        <div className="content">
          <div className={styles.advantages}>
            {advantagesData.map((advantage) => (
              <AdvantageCard data={advantage}></AdvantageCard>
            ))}
          </div>
        </div>
      </div>
      <div className="container container_accent">
        <div className="content">
          <div className={styles.cook}>
            <div className={`image ${styles.cook__image}`}></div>
            <div className={styles.cook__info}>
              <h2 className={`title title_2 ${styles.cook__title}`}>
                Лучшие повара
              </h2>
              <p className={`text ${styles.cook__text}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.{" "}
              </p>
              <div className={styles["big-leaf"]}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container .container_light">
        <div className="content">
          <h2 className={`title title_1 ${styles.reviews__title}`}>Отзывы</h2>
          <div className={styles.reviews}>
          <FormCard data={data[0]}></FormCard>
          <div className={styles['reviews-buttons']}>
          <Link to="/reviews"><MainButton isDisabled={false} onClick={() => {
            return;
          }}>Читать отзывы</MainButton></Link> <Link to="/form"><MainButton isDisabled={false} onClick={() => {
            return;
          }}>Оставить отзыв</MainButton></Link></div> <FormCard data={data[1]}></FormCard></div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
