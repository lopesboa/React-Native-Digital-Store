import React from 'react';
import theme from '../theme';
import styled from 'styled-components/native';
import type { TLink } from '../types/core';
import type { Node } from 'react';

const ParamsRow = ({
  text,
  color,
  fontSize,
  fontWeight,
  handler,
}: TLink): Node => {
  return (
    <ParamsRowContainer
      onPress={handler}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </ParamsRowContainer>
  );
};
ParamsRow.defaultProps = {
  handler: null,
  color: theme.palette.secondary.main,
  fontSize: '18px',
  fontWeight: 600,
  text: 'DEFAULT LINK',
};
const ParamsRowContainer = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: 48px;
`;

export default ParamsRow;
