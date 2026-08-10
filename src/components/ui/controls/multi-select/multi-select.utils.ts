export const getNextValues = (
  values: string[],
  itemValue: string,
  checked: boolean,
) => {
  if (checked) {
    return Array.from(new Set([...values, itemValue]));
  }
  return values.filter((value) => value !== itemValue);
};