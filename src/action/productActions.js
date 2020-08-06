const getAllProducts = async () => {
  const res = await fetch("./data.js");
  const data = res.json();
  console.log(data);
  return { type: "GET_ALL_PRODUCTS", payload: data };
};
