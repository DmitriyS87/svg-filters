import React, {Fragment} from 'react';
import './Playground.css';
import PropTypes from 'prop-types';

import Filter from '../../containers/Filter';
import PlaygroundSwitcher from '../../containers/PlaygroundSwitcher';

import './gray-cells.png';

const Playground = ({filterId, playgroundType = 'image-and-text'}) => {
  const filterUrl = filterId ? `url(#${filterId})` : '';

  const getSvgContentByPlaygroundType = () => {
    if (playgroundType === 'image') {
      return (
        <image
          x="10%" y="10%"
          width="80%" height="80%"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref="https://placekitten.com/800/400"
          filter={filterUrl}
        />
      );
    }

    if (playgroundType === 'text') {
      return (
        <g filter={filterUrl}>
          <text
            x="50%" y="50%"
            dy=".35em"
            textAnchor="middle">Text</text>
        </g>
      );
    }

    return (
      <Fragment>
        <image
          x="10%" y="10%"
          width="80%" height="50%"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref="https://placekitten.com/800/400"
          filter={filterUrl}
        />

        <g filter={filterUrl}>
          <text
            x="50%" y="79%"
            dy=".35em"
            textAnchor="middle">Text</text>
        </g>
      </Fragment>
    );
  };

  return (
    <section className={`Playground Playground--${playgroundType}`}>
      <h2 className="visuallyhidden">Live demo</h2>
      <div className="Playground__image">
        <PlaygroundSwitcher/>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="Playground__svg"
        >

          <defs>
            <Filter/>
          </defs>

          <svg>
            {getSvgContentByPlaygroundType()}
          </svg>
        </svg>
      </div>
    </section>
  );
};

export default Playground;

Playground.propTypes = {
  filterId: PropTypes.string,
  playgroundType: PropTypes.string
};
