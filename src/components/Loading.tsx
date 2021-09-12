import { LoadingSpinner } from "assets";
import { Grid, Image } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Grid placeItems={"center"} height={"500px"}>
      <Image src={LoadingSpinner} alt="Loading ..." width={"200px"} />
    </Grid>
  );
};

export default Loading;
