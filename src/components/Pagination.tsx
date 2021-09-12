import { Center, Button } from "@chakra-ui/react";

type PaginationProps = {
  toPrevious?: any;
  toNext?: any;
  canPrevious: boolean;
  canNext: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  toPrevious,
  toNext,
  canPrevious,
  canNext,
}) => {
  return (
    <Center mb={10}>
      <Button mr={6} disabled={!canPrevious} onClick={toPrevious && toPrevious}>
        Prev
      </Button>
      <Button disabled={!canNext} onClick={toNext && toNext}>
        Next
      </Button>
    </Center>
  );
};

export default Pagination;
