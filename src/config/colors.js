import constants from './constants';

const colors = {
  background: '#3e739e',
  box: '#8ec4e6',
  white: '#f8f9fa',
};

const colorArray = [
  '#88CC88',
  '#116611',
  '#669999',
  '#0D4D4D',
  '#AA6C39',
  '#804515',
  '#AA3939',
  '#801515',
  '#550000',
  '#003333',
  '#552700',

  '#55AA55',
  '#2D882D',
  '#004400',
  '#407F7F',
  '#226666',
  '#D49A6A',
  '#FFAAAA',
  '#D46A6A',
];

const getBoxColors = () => {
  const obj = {};
  colorArray.forEach((color, i) => {
    obj[constants.INITIAL_VALUE * Math.pow(2, i)] = color;
  });

  return obj;
};

export const boxColors = getBoxColors();

export default colors;
