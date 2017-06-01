import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import actionTypes from '../constants/actionTypes';
import getDefaultCity from 'utils/getDefaultCity';
import getPrice from 'utils/getPrice';


// country store
export const CountryStore = Object.assign({}, EventEmitter.prototype, {
  country: '',
  getCountry() {
    return this.country;
  },
  updateCountry(newCountry) {
    this.country = newCountry;
  },
  addChangeListener(handler) {
    this.on('change', handler);
  },
  removeChangeListener(handler) {
    this.removeListener('change', handler);
  },
  emitChange() {
    this.emit('change');
  }
});

CountryStore.dispatchToken = AppDispatcher.register(action => {
  const { changeCountry } = actionTypes;

  switch (action.type) {
    case changeCountry:
      CountryStore.updateCountry(action.payload);
      CountryStore.emitChange();
  }
});

// city store
export const CityStore = Object.assign({}, EventEmitter.prototype, {
  city: '',
  getCity() {
    return this.city;
  },
  updateCity(newCity) {
    this.city = newCity;
  },
  addChangeListener(handler) {
    this.on('change', handler);
  },
  removeChangeListener(handler) {
    this.removeListener('change', handler);
  },
  emitChange() {
    this.emit('change');
  }
});

CityStore.dispatchToken = AppDispatcher.register(action => {
  const { changeCity, changeCountry } = actionTypes;

  switch (action.type) {
    case changeCity:
      CityStore.updateCity(action.payload);
      CityStore.emitChange();
      break;
    case changeCountry:
      AppDispatcher.waitFor([CountryStore.dispatchToken]);

      CityStore.updateCity(getDefaultCity(CountryStore.getCountry()));
      CityStore.emitChange();
      break;
  }
});

// price store
export const PriceStore = Object.assign({}, EventEmitter.prototype, {
  price: 0,
  getPrice() {
    return this.price;
  },
  updatePrice(newPrice) {
    this.price = newPrice;
  },
  addChangeListener(handler) {
    this.on('change', handler);
  },
  removeChangeListener(handler) {
    this.removeListener('change', handler);
  },
  emitChange() {
    this.emit('change');
  }
});

PriceStore.dispatchToken = AppDispatcher.register(action => {
  const { changeCity, changeCountry } = actionTypes;

  switch (action.type) {
    case changeCity:
    case changeCountry:
      AppDispatcher.waitFor([CountryStore.dispatchToken, CityStore.dispatchToken]);

      PriceStore.updatePrice(getPrice(CityStore.getCity()));
      PriceStore.emitChange();
      break;
  }
});
