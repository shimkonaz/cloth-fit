export const getSize = () => {
  
  const res = [];
  const arr = document.getElementsByClassName('slider-output');
  const tbody = document.getElementById('results-table').getElementsByTagName('tbody')[0];

  for (const elem of arr) {
    switchMeasures(elem, res);
    
  }

  for (const row of res) {
    createRow(tbody, row.type, row.size);
  }
};

const getSizeValue = v => {
  let res;

  if (v >= 50 && v < 100) {
    res = 'S';
  } else if (v > 100 && v < 150) {
    res = 'M';
  } else if (v > 150 && v < 200) {
    res = 'L';
  } else if (v > 200 && v < 246) {
    res = 'XL';
  } else {
    res = '';
  }

  return res;
};

const switchMeasures = (elem, res) => {
  const v = parseInt(elem.innerHTML);

  switch (elem.id) {
    case 'chest':
      res.push({
        type: 'Shirt',
        size: getSizeValue(v)
      });
      break;

    case 'waist':
      res.push({
        type: 'Shirt',
        size: getSizeValue(v)
      });
      break;

    case 'hip':
      res.push({
        type: 'Shirt',
        size: getSizeValue(v)
      });
      break;

    case 'height':
      res.push({
        type: 'Smoking',
        size: getSizeValue(v)
      });
      break;

    case 'sleeve':
      res.push({
        type: 'T-Shirt',
        size: getSizeValue(v)
      });
      break;

    case 'inseam':
      res.push({
        type: 'Trousers',
        size: getSizeValue(v)
      });
  }
};

const createRow = (table, type, size) => {
  const row = table.insertRow(-1);
  row.className = 'row';
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.className = 'type';
  cell1.innerHTML = type;
  cell2.innerHTML = size;
};
