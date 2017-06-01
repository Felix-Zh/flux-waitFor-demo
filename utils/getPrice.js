const priceMap = {
  beijing: 300,
  shanghai: 400,
  guangzhou: 300,
  shenzhen: 200,
  newyork: 1000,
  losangeles: 800,
  florence: 2000,
  roma: 2400,
  venice: 2600
};

export default (city) => {
  return priceMap[city];
};
