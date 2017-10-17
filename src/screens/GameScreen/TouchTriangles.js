import React from 'react';
import PropTypes from 'prop-types';
import Triangle from './Triangle';

const TouchTriangle = ({ ratio, onClickTriangle }) => {
  return (
    <div style={{ ...styles.div, overflow: 'hidden', zIndex: 1 }}>
      <div style={{ ...styles.div, transform: `scaleX(${1 / ratio})` }}>
        <div style={{ ...styles.div, transform: 'rotate(45deg)' }}>
          {['UP', 'RIGHT', 'DOWN', 'LEFT'].map((direction, i) => (
            <Triangle
              side={direction}
              key={direction}
              onClickTriangle={onClickTriangle}
              delay={(i + 2) * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  div: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};

TouchTriangle.propTypes = {
  ratio: PropTypes.number,
  onClickTriangle: PropTypes.func.isRequired,
};

export default TouchTriangle;
