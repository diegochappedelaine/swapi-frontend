import { useReducer, useContext, ReactNode, useEffect } from "react";
import AppContext, { ContextProps } from "./AppContext";

const STORAGE_KEY = "SWAPI_REBELS";

const initialState = {
  favorites: [],
};

export type Favorite = string;

const reducer = (
  state: { favorites: Favorite[] },
  action: { type: string; value: Favorite }
) => {
  switch (action.type) {
    case "add-favorite":
      return {
        ...state,
        favorites: [...state.favorites, action.value],
      };

    case "remove-favorite":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((favorite) => favorite !== action.value),
        ],
      };

    case "clear-favorites":
      return {
        ...state,
        favorites: [],
      };

    default:
      throw new Error();
  }
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (state) => {
    const localStorageCard = localStorage.getItem(STORAGE_KEY);
    const favorites = localStorageCard ? JSON.parse(localStorageCard) : [];
    return { ...state, favorites };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favorites));
  }, [state.favorites]);

  const handleFavorite = (value: Favorite) => {
    if (state.favorites.includes(value)) {
      return dispatch({ type: "remove-favorite", value });
    }
    return dispatch({ type: "add-favorite", value });
  };

  const clearFavorites = () => dispatch({ type: "clear-favorites", value: "" });

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleFavorite,
        clearFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext) as ContextProps;
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { useAppContext };

export default AppProvider;
