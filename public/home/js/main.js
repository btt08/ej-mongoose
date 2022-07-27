const btnSearch = document.getElementById('btn-search');

getAllCars();
getAllManufacturers();

btnSearch.addEventListener('click', async (e) => {
  e.preventDefault();
  const brand = document.getElementById('input-brand').value || null;
  const color = document.getElementById('input-color').value || null;
  const price = document.getElementById('input-price').value || null;
  if (brand || color || price) {
    brand ? `brand=${brand}` : '';
    const response = await fetch(
      `http://localhost:3000/products/search?${brand ? `brand=${brand}` : ''}${color ? `&color=${color}` : ''}${price ? `&price=${price}` : ''}`);
    const data = await response.json();
    const elemContent = document.getElementById('content');
    elemContent.innerHTML = '';
    if (data?.error) elemContent.innerHTML = data.error;
    else {
      for (let i = 0; i < data.result.length; i++) {
        const car = data.result[i];
        const newDiv = document.createElement('div');
        newDiv.classList.add('car');
        for (const property in car) {
          if (property !== '_id') {
            const newP = document.createElement('p');
            newP.innerText = `${property}: ${car[property]}`;
            newDiv.append(newP);
          }
        }
        elemContent.appendChild(newDiv);
      }
    }
  }
});

async function getAllCars() {
  const response = await fetch(
    `http://localhost:3000/products/all`);
  const data = await response.json();
  const elemContent = document.getElementById('content');
  elemContent.innerHTML = '';
  for (let i = 0; i < data.result.length; i++) {
    const car = data.result[i];
    const newDiv = document.createElement('div');
    newDiv.classList.add('car');
    for (const property in car) {
      if (property !== '_id') {
        const newP = document.createElement('p');
        newP.innerText = `${property}: ${car[property]}`;
        newDiv.append(newP);
      }
    }
    elemContent.appendChild(newDiv);
  }
}

async function getAllManufacturers() {
  const response = await fetch(
    `http://localhost:3000/products/manufacturers`);
  const data = await response.json();
  const elemManufacturers = document.getElementById('manufacturers');
  for (let i = 0; i < data.result.length; i++) {
    const manufacturer = data.result[i];
    // const newOption = document.createElement('option');
    // newOption.value = manufacturer.cif;
    // newOption.innerText = manufacturer.name
    elemManufacturers.appendChild(new Option(manufacturer.name, manufacturer.cif));
  }
}