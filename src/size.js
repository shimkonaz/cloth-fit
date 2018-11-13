export const getSize = () => {

  const arr = document.getElementsByClassName('slider-output');
  const res = [];

  for (const elem of arr) {
    const parsed = parseInt(elem.innerHTML);
    if(findStr(elem, 'sleeve') && 
      parsed > 50 && 
      parsed < 100) {
      
      res.push({
        type: 'Shirt',
        size: 'M'
      });
    } else if(
      findStr(elem, 'sleeve') && 
      parsed > 100 && 
      parsed < 246
    ) {
      res.push({
        type: 'Shirt',
        size: 'L'
      });
    } else if (
      findStr(elem, 'inseam') && 
      parsed > 50 && 
      parsed < 100
    ) {
      res.push({
        type: 'Trousers',
        size: 'M'
      });
    } else if (
      findStr(elem, 'inseam') && 
      parsed > 100 && 
      parsed < 246
    ) {
      res.push({
        type: 'Trousers',
        size: 'L'
      });
    } else if (
      findStr(elem, 'chest') && 
      parsed > 50 && 
      parsed < 90
    ) {
      res.push({
        type: 'T-Shirt',
        size: 'M'
      }, {
        type: 'Shirt',
        size: 'M'
      });
    } else if (
      findStr(elem, 'chest') && 
      parsed > 90 && 
      parsed < 246
    ) {
      res.push({
        type: 'T-shirt',
        size: 'L'
      }, {
        type: 'Shirt',
        size: 'L'
      });
    } else if (
      findStr(elem, 'waist') && 
      parsed > 50 && 
      parsed < 60
    ) {
      res.push({
        type: 'T-shirt',
        size: 'S'
      }, {
        type: 'Shirt',
        size: 'S'
      });
    } else if (
      findStr(elem, 'waist') && 
      parsed > 60 && 
      parsed < 100
    ) {
      res.push({
        type: 'T-shirt',
        size: 'M'
      }, {
        type: 'Shirt',
        size: 'M'
      });
    } else if (
      findStr(elem, 'waist') && 
      parsed > 100 && 
      parsed < 246
    ) {
      res.push({
        type: 'T-shirt',
        size: 'L'
      }, {
        type: 'Shirt',
        size: 'L'
      });
    } else if (
      findStr(elem, 'hip') && 
      parsed > 50 && 
      parsed < 90
    ) {
      res.push({
        type: 'T-shirt',
        size: 'S'
      }, {
        type: 'Shirt',
        size: 'S'
      });
    } else if (
      findStr(elem, 'hip') && 
      parsed > 90 && 
      parsed < 150
    ) {
      res.push({
        type: 'T-shirt',
        size: 'M'
      }, {
        type: 'Shirt',
        size: 'M'
      });
    } else if (
      findStr(elem, 'hip') && 
      parsed > 150 && 
      parsed < 246
    ) {
      res.push({
        type: 'T-shirt',
        size: 'L'
      }, {
        type: 'Shirt',
        size: 'L'
      });
    } else {
      res.push({
        type: 'nothing to show',
        size: 'nothing to show'
      });
    }
  }

  return res;
}

const findStr = (elem, str) => {
  return elem.id.toString().includes(str);
}
