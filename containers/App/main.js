import React, { Component } from 'react';
import actions from '../../actions/actionCreator';
import { CountryStore, CityStore, PriceStore } from '../../store/flightStore';
import options from './data/options';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { country: 'null', city: 'null', price: undefined };

    this.__onChange = this.__onChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  componentDidMount() {
    CountryStore.addChangeListener(this.__onChange);
    CityStore.addChangeListener(this.__onChange);
    PriceStore.addChangeListener(this.__onChange);
  }

  componentWillUnmount() {
    CountryStore.removeChangeListener(this.__onChange);
    CityStore.removeChangeListener(this.__onChange);
    PriceStore.removeChangeListener(this.__onChange);
  }

  __onChange() {
    this.setState({
      country: CountryStore.getCountry(),
      city: CityStore.getCity(),
      price: PriceStore.getPrice()
    });
  }

  handleCountryChange(evt) {
    actions.changeCountry(evt.target.value);
  }

  handleCityChange(evt) {
    actions.changeCity(evt.target.value);
  }
  
  render() {
    const { country, city, price } = this.state;

    return (
      <div>
        <span>国家</span>
        <select name="country" value={country} onChange={this.handleCountryChange}>
          <option value="null">请选择</option>
          <option value="china">中国</option>
          <option value="america">美国</option>
          <option value="italy">意大利</option>
        </select>
        <br />
        <span>城市</span>
        <select name="city" value={city} onChange={this.handleCityChange}>
          <option value="null">请选择</option>
          {options[country]}
        </select>
        <br />
        价格：<span>{price === undefined ? '-' : price}</span>
      </div>
    );
  }
}
