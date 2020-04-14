export const getDateStringFromTimestamp = string => {
  const date = new Date(string);
  return date.toLocaleDateString();
}