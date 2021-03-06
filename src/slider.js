const changeOutput = slider => {
  const output = document.getElementById(slider.id.split('-')[0]);
  output.innerHTML = slider.value + ' cm';
};

export const setMeasures = e => {
  if (e.target !== e.currentTarget) {
    const changedSlider = e.target;
    changeOutput(changedSlider);
  }
};