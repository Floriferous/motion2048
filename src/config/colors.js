import constants from './constants';

const colors = {
  background: 'linear-gradient(to right, #536976, #292e49)',
  secondary: 'linear-gradient(to right, #ffe259, #ffa751)',
  white: '#f8f9fa',
};

const colorArray = [
  '#88CC88', // 200
  '#116611', // 400
  '#669999', // 800
  '#0D4D4D', // 1600
  '#AA6C39', // 3200
  '#804515', // 6400
  '#AA3939', // 12800
  '#801515', // 25600
  'linear-gradient(to right, #076585, #fff)', // 51200
  'linear-gradient(to right, #e65c00, #f9d423)', // 102400
  'linear-gradient(to right, #1488cc, #2b32b2)', // 204800
  'linear-gradient(red, yellow, lime, aqua, blue, magenta, red)', // 409600
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
