import styled from 'styled-components';
import { stringToColors, harmonies } from '../../stringToColors';

const oneColorTempl = color => color;

const twoColorTempl = (color1, color2) =>
 `linear-gradient(left top, ${color1} 10%, ${color2} 100%)`;

const threeColorTempl = (color1, color2, color3) =>
  `linear-gradient(left top, ${color1} 10%, ${color2} 50%, ${color3} 100%)`;

const fourColorTempl = (color1, color2, color3, color4) =>
  `linear-gradient(left top, ${color1} 10%, ${color2} 33%, ${color3} 50%, ${color4} 100%)`;

const getValuesForString = (str, harmonyFunc) =>
  stringToColors(str, harmonyFunc);

const convertValues = (colorVals) => {
  switch (colorVals.length) {
    case 1: return oneColorTempl(...colorVals);
    case 2: return twoColorTempl(...colorVals);
    case 3: return threeColorTempl(...colorVals);
    case 4: return fourColorTempl(...colorVals);
    default: return {};
  }
};

const mapPropToHarmony = (harmStr) => {
  switch (harmStr) {
    case 'triadic': return harmonies.triadic;
    case 'tetradic': return harmonies.tetradic;
    case 'analagous': return harmonies.analagous;
    case 'splitComplimentary': return harmonies.splitComplimentary;
    case 'complimentary': return harmonies.complimentary;
    default: return harmonies.tetradic;
  }
};

const getBackground = (str, harmony) => {
  const harmonyFunc = mapPropToHarmony(harmony);
  const values = getValuesForString(str, harmonyFunc);

  return convertValues(values);
};

const DynamicBackground = styled.div`
  height: 100px;
  width: 100px;
  background: ${props => getBackground(props.string, props.harmony)}
`;

export default DynamicBackground;
