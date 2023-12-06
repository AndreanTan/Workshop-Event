export const rupiahCurrency = (moneyValue) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(moneyValue);
};
