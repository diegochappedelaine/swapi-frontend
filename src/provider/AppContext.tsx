import { createContext } from "react";
import { Favorite } from "./AppProvider";

export type ContextProps = {
  favorites: Favorite[];
  handleFavorite: (favorite: Favorite) => void;
  clearFavorites: () => void;
};

const AppContext = createContext<Partial<ContextProps>>({});

export default AppContext;
