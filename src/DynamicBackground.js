import stringToColors from '../../stringToColors';
import styled from 'styled-components';
import React from 'react';

const DynamicBackground = styled.div`
  height: 100px;
  width: 100px;
  background: ${ props => getBackground(props.string)}
`
const getBackground = (str) => {
  var values = getValuesForString(str);

  return convertValues(values);
}

const getValuesForString = (str) => stringToColors(str);

const convertValues = (colorVals) => {
  switch(colorVals.length) {
    case 1: return oneColorTempl(...colorVals);
    case 2: return twoColorTempl(...colorVals);
    case 3: return threeColorTempl(...colorVals);
    case 4: return fourColorTempl(...colorVals);
    default: return {};
  }
};

const oneColorTempl = (color) => color;

const twoColorTempl = (color1, color2) =>
  background: `linear-gradient(left top, ${color1} 10%, ${color2} 100%)`;

const threeColorTempl = (color1, color2, color3) =>
  `linear-gradient(left top, ${color1} 10%, ${color2} 50%, ${color3} 100%)`;

const fourColorTempl = (color1, color2, color3, color4) =>
  `linear-gradient(left top, ${color1} 10%, ${color2} 33%, ${color3} 50%, ${color4} 100%)`;

export default DynamicBackground;
