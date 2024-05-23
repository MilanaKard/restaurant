import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { formActions } from "../store/form.slice";

const actions = {
  ...formActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
