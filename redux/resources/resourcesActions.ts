import {
  GET_ALL_RESOURCES,
  ADD_NEW_RESOURCE,
  EDIT_RESOURCE,
} from "./resourcesActionTypes";
import { IResource } from "../../interfaces/Interfaces";

export const getAllResources = () => {
  return {
    type: GET_ALL_RESOURCES,
  };
};

export const addNewResource = (resource: IResource) => {
  return {
    type: ADD_NEW_RESOURCE,
    payload: resource,
  };
};

export const editResource = (resource: IResource) => {
  return {
    type: EDIT_RESOURCE,
    payload: resource,
  };
};
