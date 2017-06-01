const defaultCityMap = {
  china: 'beijing',
  america: 'newyork',
  italy: 'roma'
};

export default (country) => {
  return defaultCityMap[country];
};
