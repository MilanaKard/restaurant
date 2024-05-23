import "./FormCard.scss";

export type FormCardProps = {
  data: {
    id: string;
    imgUrl: string;
    title: string;
    text: string;
    dishRating: string;
    serviceRating: string;
    order: string;
    date?: string;
    isVegan?: boolean;
    isVegetarian?: boolean;
    [index: string]: string | boolean | number | FileList | undefined;
  };
};

export const FormCard = ({ data }: FormCardProps): JSX.Element => {
  const {
    imgUrl,
    title,
    text,
    dishRating,
    serviceRating,
    order,
    date,
    isVegan,
    isVegetarian,
  } = data;

  return (
    <div className={`card-item`}>
      <div className="card-img" style={{ backgroundImage: `url(${imgUrl})` }} />
      <div className="card-info">
        <h2 className="card-title title title title_5">{title}</h2>
        {isVegetarian !== undefined && (
          <div>
            <p className="card-vegetarian text">Для вегетарианцев</p>
            <div className={isVegetarian ? "card-right" : "card-wrong"}></div>
          </div>
        )}
        {isVegan !== undefined && (
          <div>
            <p className="card-vegan text">Для веганов</p>
            <div className={isVegan ? "card-right" : "card-wrong"}></div>
          </div>
        )}
        <p className="card-additional text">Оценка блюда: {dishRating}/5</p>
        <p className="card-additional text">Оценка сервиса: {serviceRating}/5</p>
        <p className="card-text text">{text}</p>
        {date && <p className="card-date text">{date}, {order}</p>}
      </div>
    </div>
  );
};
