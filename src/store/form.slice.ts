import { createSlice } from "@reduxjs/toolkit";

type FormStateType = {
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
  }[];
};

const initialState: FormStateType = {
data: [{
  id: 'ab13',
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Som_tam_thai.JPG/800px-Som_tam_thai.JPG",
  title: "Сом там",
  text: "Сом там или салат из зеленой папайи – это блюдо северо-восточного Таиланда, которое является одной из визитных карточек тайской национальной кухни и пользуется популярностью среди туристов.",
  dishRating: "5",
  serviceRating: "5",
  order: "Ресторан",
  date: '2024-05-13',
  isVegan: false,
  isVegetarian: false,
}, {
id: 'an51',
imgUrl: "https://images.unsplash.com/photo-1621341258668-b2bf005a9f97",
title: "Ризотто с грибами",
text: "Ризотто - блюдо итальянской кухни из риса, с мягким, сливочным вкусом. Первое письменное упоминание о нём встречается только в XIX веке.",
dishRating: "5",
serviceRating: "5",
order: "Самовывоз",
date: '2024-04-20',
isVegan: true,
isVegetarian: true,
},
]
};


export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData(state, action) {
      state.data = [...state.data, action.payload];
    },
  },
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
