


const categories = document.querySelector("#categories");
const categoriesItems = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`)

categoriesItems.forEach(item => {
    const title = item.querySelector("h2").textContent; // Başlığı al
    const itemCount = item.querySelectorAll("li").length; // İçindeki li sayısını al
    console.log(`Category: ${title}\n Elements: ${itemCount}`);
});

