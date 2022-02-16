export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  }).format(number / 100);
};

export const getUniqueValues = () => {};
