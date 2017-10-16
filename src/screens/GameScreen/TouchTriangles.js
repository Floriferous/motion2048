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
          <Triangle side="UP" onClickTriangle={onClickTriangle} delay={400} />
          <Triangle
            side="RIGHT"
            onClickTriangle={onClickTriangle}
            delay={600}
          />
          <Triangle side="DOWN" onClickTriangle={onClickTriangle} delay={800} />
          <Triangle
            side="LEFT"
            onClickTriangle={onClickTriangle}
            delay={1000}
          />
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
