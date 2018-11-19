import './styles/index.scss';
import {setMeasures} from './slider';
import {getSize} from './size';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();

const sliders = document.querySelector('.vertical-measures');
const horizontals = document.querySelector('.horizontal-measures');
const size = document.querySelector('#get-size-btn');

sliders.addEventListener('input', setMeasures);
horizontals.addEventListener('input', setMeasures);
size.addEventListener('click', getSize);


