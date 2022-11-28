export function PRODUCT_GET(limit) {
  return {
    url: `https://fakestoreapi.com/products?limit=${limit}`,
    options: {
      method: "GET",
    },
  };
}

export function ITEM_GET({ id }) {
  return {
    url: `https://fakestoreapi.com/products/${id}`,
    options: {
      method: "GET",
      responseType: "text",
    },
  };
}
