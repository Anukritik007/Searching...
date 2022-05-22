import {
  ADD_NEW_RESOURCE,
  GET_ALL_RESOURCES,
  EDIT_RESOURCE,
} from "./resourcesActionTypes";
import { AnyAction } from "redux";

const initialState = {
  loading: false,
  data: [
    {
      name: "Anukritik",
      description:
        "Portfolio of Anukritik, an experienced Software engineer. I have a passion for coding, and enjoy bringing ideas to life in the browser.",
      resourceUrl: "https://anukritik.com",
      category: "Web development",
      type: "text",
      previewImgUrl: "/images/aunixWebsite.png",
    },
    {
      name: "Mayank Agrawal",
      description:
        "Portfolio of Mayank Agrawal, an experienced Software engineer.",
      resourceUrl: "https://mayank-dev.in",
      category: "Web development",
      type: "text",
      previewImgUrl: "/images/mukkusWebsite.png",
    },
  ],
  error: "",
};

export const resourcesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_ALL_RESOURCES:
      return state; //TODO: later implement loading when getting data from API

    case ADD_NEW_RESOURCE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_RESOURCE:
      return state; // TODO

    default:
      return state;
  }
};
