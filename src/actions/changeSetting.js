const changeSetting = (name, value) => ({
  type: 'CHANGE_SETTING',
  name,
  value,
});

export default changeSetting;
