const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export const priceConverted = (price) => intl.format(price);
export function useCurrency(price) {
  console.log(priceConverted(price));
  return priceConverted(price);
}
