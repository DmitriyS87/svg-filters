import React from 'react';
import PropTypes from 'prop-types';

import deepClone from '../../helpers/deepClone';

import Primitive from '../Primitive';

const Filter = ({primitives}) => (
  <filter id="filter">
    {primitives.map(primitive => {

      if (primitive.children) {
        primitive = deepClone(primitive);
        primitive.children = primitive.children.map(item => {

          return (
            <Primitive
              key={item.id}
              primitive={item}/>
          );
        });
      }

      return (
        <Primitive
          key={primitive.id}
          primitive={primitive}/>
      );
    })}
  </filter>
);

export default Filter;

Filter.propTypes = {
  primitives: PropTypes.array.isRequired
};