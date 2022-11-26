export function PRODUCT_GET(limit) {
  return {
    url: `https://fakestoreapi.com/products?limit=${limit}`,
    options: {
      method: "GET",
    },
  };
}
