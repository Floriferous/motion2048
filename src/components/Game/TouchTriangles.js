import React from 'react';
import PropTypes from 'prop-types';
import Triangle from './Triangle';

const TouchTriangle = ({ ratio, onClickTriangle }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: `scaleX(${1 / ratio})`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'rotate(45deg)',
          }}
        >
          <Triangle side="UP" onClickTriangle={onClickTriangle} />
          <Triangle side="RIGHT" onClickTriangle={onClickTriangle} />
          <Triangle side="DOWN" onClickTriangle={onClickTriangle} />
          <Triangle side="LEFT" onClickTriangle={onClickTriangle} />
        </div>
      </div>
    </div>
  );
};

TouchTriangle.propTypes = {
  ratio: PropTypes.number,
  onClickTriangle: PropTypes.func.isRequired,
};

export default TouchTriangle;
