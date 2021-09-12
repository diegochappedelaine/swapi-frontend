import { FaSpaceShuttle, FaFilm } from "react-icons/fa";
import { IoPeopleOutline, IoBusOutline } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { GiSuspicious } from "react-icons/gi";

import { SwapiRessources } from "types";

type DataTypeIconProps = {
  dataType: SwapiRessources;
};

const DataTypeIcon: React.FC<DataTypeIconProps> = ({ dataType }) => {
  switch (dataType) {
    case SwapiRessources.FILMS:
      return <FaFilm />;
    case SwapiRessources.PEOPLE:
      return <IoPeopleOutline />;
    case SwapiRessources.PLANETS:
      return <BiPlanet />;
    case SwapiRessources.SPECIES:
      return <GiSuspicious />;
    case SwapiRessources.STARSHIPS:
      return <FaSpaceShuttle />;
    case SwapiRessources.VEHICLES:
      return <IoBusOutline />;
  }
};

export default DataTypeIcon;
