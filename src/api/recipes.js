import apiClient from "./client";

const getAllrecipes = () =>
  apiClient.get("/recipes/v2", {
    params: {
      type: "public",
      q: "",
      cuisineType: "Asian",
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APP_KEY,
    },
  });

const getAllBreakfastRecipes = () =>
  apiClient.get("/recipes/v2", {
    params: {
      type: "public",
      q: "",
      mealType: "Breakfast",
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APP_KEY,
    },
  });

const getAllLunchRecipes = () =>
  apiClient.get("/recipes/v2", {
    params: {
      type: "public",
      q: "",
      mealType: "Lunch",
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APP_KEY,
    },
  });

const getAllDinnerRecipes = () =>
  apiClient.get("/recipes/v2", {
    params: {
      type: "public",
      q: "",
      mealType: "Dinner",
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APP_KEY,
    },
  });

const getAllSnackRecipes = () =>
  apiClient.get("/recipes/v2", {
    params: {
      type: "public",
      q: "",
      mealType: "Snack",
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APP_KEY,
    },
  });

const getAllTeatimeRecipes = () =>
  apiClient.get("/recipes/v2", {
    params: {
      type: "public",
      q: "",
      mealType: "Teatime",
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APP_KEY,
    },
  });

const getSearchedItem = (query) =>
  apiClient.get("/recipes/v2", {
    params: {
      type: "public",
      q: query,
      mealType: "Teatime",
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APP_KEY,
    },
  });

const recipeApi = {
  getAllrecipes,
  getAllBreakfastRecipes,
  getAllLunchRecipes,
  getAllDinnerRecipes,
  getAllSnackRecipes,
  getAllTeatimeRecipes,
  getSearchedItem,
};

export default recipeApi;
