import styles from "./AdvantageCard.module.scss";

type CardProps = {
  data: {
    text: string;
    title: string;
    imageLink: string;
  };
};

const AdvantageCard = (props: CardProps): JSX.Element => {
  const { data } = props;
  return (
    <div className={styles.card}>
        <div
          className={styles.icon}
          style={{ backgroundImage: `url(${data.imageLink})` }}
        ></div>
      <h3 className={`title title_3 ${styles.title}`}>{data.title}</h3>
      <p className={`text ${styles.text}`}>{data.text}</p>
    </div>
  );
};

export default AdvantageCard;
