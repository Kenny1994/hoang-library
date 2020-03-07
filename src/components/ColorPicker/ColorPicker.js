import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ColorPickerItem from './ColorPickerItem';
import {SketchPicker} from 'react-color';
import {Popover} from '@shopify/polaris';
import {buildStyle} from './utils';

/**
 * Render a color picker for choosing colors
 *
 * @param {Array} colors
 * @param {string} value
 * @param {Function} onChange
 * @param {boolean} isDefault
 * @return {React.ReactElement}
 * @constructor
 */
export default function ColorPicker(
  {
    value,
    onChange,
    initialColors,
    isDefault = false
  }
) {
  const [isCustom, setIsCustom] = useState(false);
  const [isFirst, setIsFirst] = useState(isDefault);
  const [customColor, setCustomColor] = useState('');
  const [isOpenPicker, setIsOpenPicker] = useState(false);

  const handleOpenPicker = useCallback(() => {
    setIsOpenPicker(true);
    setIsFirst(false);
  }, []);

  const handleClosePicker = useCallback(() => {
    setIsOpenPicker(false);
  }, []);

  useEffect(() => {
    if (initialColors.indexOf(value) < 0 && !isFirst) {
      setCustomColor(value);
      setIsCustom(true);
    } else {
      setIsCustom(false);
    }
  }, [value, initialColors, isFirst]);

  const activatorClassName = isCustom
    ? 'Polaris-ColorPicker__ColorItem--selected'
    : '';

  const activator = (
    <div
      style={buildStyle(customColor)}
      className={`Polaris-ColorPicker__ColorItem Polaris-ColorPicker__ColorItemChooser ${activatorClassName}`}
      onClick={handleOpenPicker}
    />
  );

  const handleChangeOnSketchPicker = useCallback(color => {
    setCustomColor(color.hex);
    onChange(color.hex);
    setIsCustom(true);
  }, []);
  const handleChangeOnColorPickerItem = useCallback(
    color => {
      setIsCustom(false);
      onChange(color);
    },
    [onChange, setIsCustom]
  );

  return (
    <div className="Polaris-ColorPicker--alternative">
      <div className="Polaris-ColorPicker__Colors">
        {initialColors.map(patternColor => (
          <ColorPickerItem
            key={patternColor}
            color={patternColor}
            selected={patternColor === value}
            onClick={handleChangeOnColorPickerItem}
          />
        ))}
      </div>
      <Popover
        active={isOpenPicker}
        activator={activator}
        onClose={handleClosePicker}
      >
        <div
          style={{
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
          }}
          onClick={handleClosePicker}
        />
        <SketchPicker
          color={customColor}
          onChange={handleChangeOnSketchPicker}
        />
      </Popover>
    </div>
  );
}

ColorPicker.propTypes = {
  initialColors: PropTypes.array,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDefault: PropTypes.bool
};
