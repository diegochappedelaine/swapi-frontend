export const retreiveDataTypeAndIdFromUrl = (url: string) => {
  const array = url.split("/").filter((_) => _.length);

  const id = array[array.length - 1];
  const dataType = array[array.length - 2];
  return { id, dataType };
};
