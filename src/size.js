export const getSize = () => {

  const arr = document.getElementsByClassName('slider-output');
  const tbody = document.getElementById('results-table').getElementsByTagName('tbody')[0];
  const res = [];

  for (const elem of arr) {
    const parsedNum = parseInt(elem.innerHTML);
    const parsedS = parsedNum >= 50 && parsedNum < 100;
    const parsedM = parsedNum > 100 && parsedNum < 150;
    const parsedL = parsedNum > 150 && parsedNum < 200;
    const parsedXL = parsedNum > 200 && parsedNum < 246;

    if ((elem.id === 'chest') && parsedS) {
      res.push({
        type: 'Shirt',
        size: 'S'
      });
    } else if ((elem.id === 'chest') && parsedM) {
      res.push({
        type: 'Shirt',
        size: 'M'
      });
    } else if ((elem.id === 'chest') && parsedL) {
      res.push({
        type: 'Shirt',
        size: 'L'
      });
    } else if ((elem.id === 'chest') && parsedXL) {
      res.push({
        type: 'Shirt',
        size: 'XL'
      });
    }
  }

  for (const row of res) {
    createRow(tbody, row.type, row.size);
  }
};

const createRow = (table, type, size) => {
  const row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = type;
  cell2.innerHTML = size;
};