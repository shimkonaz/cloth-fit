import './styles/index.scss';
import {setMeasures} from './slider';
import {getSize} from './size';

const sliders = document.querySelector('.vertical-measures');
const horizontals = document.querySelector('.horizontal-measures');
const size = document.querySelector('#get-size-btn');
// const arr = document.getElementsByClassName('slider-output');

sliders.addEventListener('input', setMeasures);
horizontals.addEventListener('input', setMeasures);
size.addEventListener('click', getSize);


