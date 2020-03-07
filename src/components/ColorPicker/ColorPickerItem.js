import React, {useCallback} from 'react';
import * as PropTypes from 'prop-types';
import {buildStyle} from './utils';

/**
 * Render a color picker item for choosing
 *
 * @param {string} color
 * @param {boolean} selected
 * @param {Function} onClick
 * @return {React.ReactElement}
 * @constructor
 */
export default function ColorPickerItem({color, onClick, selected = false}) {
  let className = 'Polaris-ColorPicker__ColorItem';
  if (selected) {
    className = `${className} Polaris-ColorPicker__ColorItem--selected`;
  }
  const styles = buildStyle(color);
  const handleClick = useCallback(() => {
    onClick(color);
  }, []);
  return <div onClick={handleClick} className={className} style={styles} />;
}

ColorPickerItem.propTypes = {
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
