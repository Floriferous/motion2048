const niceNumber = value =>
  value === 0
    ? 0
    : String(Math.round(Number(Math.round(value))))
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export default niceNumber;
