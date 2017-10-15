import constants from './constants';

const colors = {
  background: '#3e739e',
  box: '#8ec4e6',
  white: '#f8f9fa',
};

const colorArray = [
  '#004400',
  '#116611',
  '#55AA55',
  '#88CC88',
  '#2D882D',
  '#003333',
  '#0D4D4D',
  '#407F7F',
  '#669999',
  '#226666',
  '#AA6C39',
  '#FFD1AA',
  '#D49A6A',
  '#804515',
  '#552700',
  '#AA3939',
  '#FFAAAA',
  '#D46A6A',
  '#801515',
  '#550000',
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
