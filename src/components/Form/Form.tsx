import { useEffect, useState } from "react";
import "./Form.scss";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  photo: FileList;
  title: string;
  date: string;
  dishRating: string;
  serviceRating: string;
  order: string;
  isVegetarian: boolean;
  isVegan: boolean;
  text: string;
  id: string;
  imgUrl: string;
};

interface FormProps {
  onSubmit: (formData: Inputs) => void;
}

const Form = ({ onSubmit }: FormProps): JSX.Element => {
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleForm: SubmitHandler<Inputs> = (data) => {
    data.imgUrl = URL.createObjectURL(data.photo[0]);
    data.id = `${data.title}${Math.floor(Math.random() * 9000) + 1000}`;
    onSubmit(data);
  };

  const validateCheckbox = () => {
    const isVegetarian = getValues("isVegetarian");
    const isVegan = getValues("isVegan");
    if (!isVegetarian && isVegan) {
      return false;
    }
    clearErrors(["isVegan", "isVegetarian"]);
    return true;
  };

  const validateDishRating = () => {
    const dishRating = getValues("dishRating");
    return !!dishRating;
  };

  const validateServiceRating = () => {
    const serviceRating = getValues("serviceRating");
    return !!serviceRating;
  };

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  return (
    <form
      className="feedback-form"
      onSubmit={handleSubmit(handleForm)}
      onChange={() => setIsSubmitActive(true)}
    >
      <fieldset>
        <label htmlFor="photo" className="form-label">
          Фото блюда:
        </label>
        <input
          type="file"
          id="photo"
          accept=".jpg, .jpeg, .png"
          {...register("photo", { validate: (value) => !!value[0] })}
        />
        {errors.photo && <p>Фото обязательно.</p>}
        <label htmlFor="title" className="form-label">
          Название блюда:
        </label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: "Поле обязательно для заполнения.",
          })}
        />
        {errors.title && <p>{errors.title.message}</p>}
        <label htmlFor="date" className="form-label">
          Дата заказа блюда:
        </label>
        <input
          type="date"
          id="date"
          max={getCurrentDate()}
          min="2020-01-01"
          {...register("date", {
            required: "Поле обязательно для заполнения.",
          })}
        />
        {errors.date && <p>{errors.date.message}</p>}
        <label className="form-label checkbox-question">На ваш взгляд:</label>
        <div className="checkbox-container">
          <label htmlFor="isVegetarian" className="form-label checkbox-label">
            Блюдо подходит для вегетарианцев
          </label>
          <input
            type="checkbox"
            id="isVegetarian"
            className="form-checkbox"
            {...register("isVegetarian", {
              validate: validateCheckbox,
            })}
          />
        </div>
        <div className="checkbox-container">
          <label htmlFor="isVegan" className="form-label checkbox-label">
            Блюдо подходит для веганов
          </label>
          <input
            type="checkbox"
            id="isVegan"
            className="form-checkbox"
            {...register("isVegan", {
              validate: validateCheckbox,
            })}
          />
        </div>
        {(errors.isVegetarian || errors.isVegan || false) && (
          <p>
            Если блюдо подходит для веганов, то оно подходит и для
            вегетарианцев. Пожалуйста, поставьте галочку.
          </p>
        )}
        <label htmlFor="order" className="form-label order-label">
          Заказ был осуществлен:
        </label>
        <select id="order" {...register("order")}>
          <option value="Ресторан">Ресторан</option>
          <option value="Самовывоз">Самовывоз</option>
          <option value="Доставка">Доставка</option>
        </select>
        <div className="rating-container">
          <p>Оцените блюдо: </p>
          <div className="rating">
            <input
              type="radio"
              id="r1"
              value={5}
              {...register("dishRating", {
                validate: validateDishRating,
              })}
            />
            <label htmlFor="r1"></label>

            <input
              type="radio"
              id="r2"
              value={4}
              {...register("dishRating", {
                validate: validateDishRating,
              })}
            />
            <label htmlFor="r2"></label>

            <input
              type="radio"
              id="r3"
              value={3}
              {...register("dishRating", {
                validate: validateDishRating,
              })}
            />
            <label htmlFor="r3"></label>

            <input
              type="radio"
              id="r4"
              value={2}
              {...register("dishRating", {
                validate: validateDishRating,
              })}
            />
            <label htmlFor="r4"></label>

            <input
              type="radio"
              id="r5"
              value={1}
              {...register("dishRating", {
                validate: validateDishRating,
              })}
            />
            <label htmlFor="r5"></label>
          </div>
        </div>
        {errors.dishRating && <p>Поставьте оценку блюду.</p>}
        <div className="rating-container">
          <p>Оцените сервис: </p>
          <div className="rating">
            <input
              type="radio"
              id="s1"
              value={5}
              {...register("serviceRating", {
                validate: validateServiceRating,
              })}
            />
            <label htmlFor="s1"></label>

            <input
              type="radio"
              id="s2"
              value={4}
              {...register("serviceRating", {
                validate: validateServiceRating,
              })}
            />
            <label htmlFor="s2"></label>

            <input
              type="radio"
              id="r3"
              value={3}
              {...register("serviceRating", {
                validate: validateServiceRating,
              })}
            />
            <label htmlFor="r3"></label>

            <input
              type="radio"
              id="s4"
              value={2}
              {...register("serviceRating", {
                validate: validateServiceRating,
              })}
            />
            <label htmlFor="s4"></label>

            <input
              type="radio"
              id="s5"
              value={1}
              {...register("serviceRating", {
                validate: validateServiceRating,
              })}
            />
            <label htmlFor="s5"></label>
          </div>
        </div>
        {errors.serviceRating && <p>Поставьте оценку сервису.</p>}
        <label htmlFor="text" className="form-label">
          Комментарий:
        </label>
        <textarea
          cols={40}
          rows={10}
          id="text"
          className="form-comment"
          {...register("text", {
            required: "Поле обязательно для заполнения.",
            minLength: {
              value: 100,
              message:
                "Ваше мнение для нас важно. Пожалуйста, оставьте более развернутый комментарий (100 -  300 символов).",
            },
            maxLength: {
              value: 300,
              message:
                "Комментарий превышает максимально допустимую длину (300 символов).",
            },
          })}
        ></textarea>
        {errors.text && <p>{errors.text.message}</p>}
        <input
          type="submit"
          value="Отправить"
          className={`submit-btn ${
            isSubmitActive && Object.keys(errors).length === 0 ? "active" : ""
          }`}
        />
      </fieldset>
    </form>
  );
};

export { Form };
