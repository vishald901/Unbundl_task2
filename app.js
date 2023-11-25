let packSize = 0;
const packItems = new Map();
function addToPack(choclate, price) {
  if (packSize >= 8) {
    alert("You have reached the maximum quantity!");
    return;
  }

  packSize++;

  document.getElementById(
    "pack-summary"
  ).innerText = `Your Pack (${packSize}/8)`;

  if (packItems.has(choclate)) {
    packItems.set(choclate, packItems.get(choclate) + price);
  } else {
    packItems.set(choclate, 1 * price);
  }
  console.log(packItems);
  updatePackSummary();
}
function removeFromPack(choclate, price) {
  if (!packItems.has(choclate)) {
    return;
  }

  packSize--;

  document.getElementById(
    "pack-summary"
  ).innerText = `Your Pack (${packSize}/8)`;

  if (packItems.has(choclate) && packItems.get(choclate) > 0) {
    packItems.set(choclate, packItems.get(choclate) - price);
  }
  if (packItems.get(choclate) == 0) {
    packItems.delete(choclate);
  }
  console.log(packItems);
  updatePackSummary();
}

function updatePackSummary() {
  const packSummaryList = document.getElementById("pack-items");
  packSummaryList.innerHTML = "";

  let totalPrice = 0;

  packItems.forEach((price, choclate) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${choclate}: ${price}`;
    packSummaryList.appendChild(listItem);

    // const price = document.querySelector(`[data-price="${price}"]`).getAttribute('data-price');
    totalPrice += price;
  });

  document.getElementById("total-price").innerText = totalPrice;
}
