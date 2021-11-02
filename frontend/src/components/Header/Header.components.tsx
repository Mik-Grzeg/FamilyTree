import styled from "styled-components";
import { centeredDiv } from "styles/mixins";

export const HeaderWrapper = styled.header`
  height: ${({ theme }) => theme.heights.header};
  width: 100vw;

  ${centeredDiv}

  font-family: ${({ theme }) => theme.fonts.families.fancy};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const HeaderTextContent = styled.span`
  position: relative;
  z-index: 1;
`;
