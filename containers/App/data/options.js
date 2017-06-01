import React from 'react';
import createFragment from 'react-addons-create-fragment';
import _ from 'lodash';


const data = {
  null: [],
  china: [
    {
      text: '北京',
      value: 'beijing'
    },
    {
      text: '上海',
      value: 'shanghai'
    },
    {
      text: '广州',
      value: 'guangzhou'
    },
    {
      text: '深圳',
      value: 'shenzhen'
    }
  ],
  america: [
    {
      text: '纽约',
      value: 'newyork'
    },
    {
      text: '洛杉矶',
      value: 'losangeles'
    }
  ],
  italy: [
    {
      text: '罗马',
      value: 'roma'
    },
    {
      text: '佛罗伦萨',
      value: 'florence'
    },
    {
      text: '威尼斯',
      value: 'venice'
    }
  ]
};

const options = {};

_.forEach(data, (item, key) => {
  const temp = {};

  data[key].forEach(subItem => temp[subItem.value] = <option value={subItem.value}>{subItem.text}</option>);
  options[key] = createFragment(temp);
});

export default options;
