let prizes = [];

fetch("prizes.json")
  .then(response => response.json())
  .then(data => {
    prizes = data;
  });

document.getElementById("gachaButton").addEventListener("click", () => {
  if (prizes.length === 0) return;
  const rand = Math.random();
  let cumulative = 0;
  for (const prize of prizes) {
    cumulative += prize.probability;
    if (rand <= cumulative) {
      document.getElementById("result").innerHTML = `
        <p>当たり：${prize.name}</p>
        <img src="${prize.image}" alt="${prize.name}" width="200">
      `;
      break;
    }
  }
});
