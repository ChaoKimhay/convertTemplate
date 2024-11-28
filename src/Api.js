const BASE_URL = "https://api.escuelajs.co/api/v1/";
export const fetchProduct = async () => {
  const response = await fetch(`${BASE_URL}products`);
  return response.json();
};
