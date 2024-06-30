const product = [
  {
    categories: "shoes",
    name: "Jordan",
    price: "$16000",
    description: "Best seller shoes",
  },
  {
    categories: "shoes",
    name: "Addidas",
    price: "$13000",
    description: "Best sports shoes",
  },
  {
    categories: "clothes",
    name: "suit",
    price: "$39000",
    description: "Make yoursrlf smart",
  },
  {
    categories: "fridge",
    name: "LG fridge",
    price: "$40000",
    description: "Make thing cool",
  },
];

const data = product
  .map(
    (item) =>
      `<div class="card">
    <h3>${item.name}</h3>
    <br>
    <p>${item.description}</p>
    <br>
    <h1>${item.price}</h1>
    </div>`
  )
  .join("");

document.getElementById("card").innerHTML = data;

function itemFilter() {
  const productCategory = document.getElementById("product-category").value;
  const searchItem = product.filter((item) => {
    if (productCategory === item.categories) {
      return item;
    }
  });
  const data = searchItem
    .map(
      (item) =>
        `<div class="card">
    <h3>${item.name}</h3>
    <br>
    <p>${item.description}</p>
    <br>
    <h1>${item.price}</h1>
    </div> `
    )
    .join("");

  console.log(data);
  document.getElementById("card").innerHTML = data;
}
