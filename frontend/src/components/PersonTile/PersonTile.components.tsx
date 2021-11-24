import styled from "styled-components";

export const PersonTileWrapper = styled.div`
  position: relative;
`;

export const PersonTileBirthDate = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.s};
  font-family: ${({ theme }) => theme.fonts.families.fancy};
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const PersonTileImgWrapper = styled.div`
  border-radius: 10px;

  background-color: #c4c4c4;

  height: 80px;
  width: 80px;

  margin-top: auto;

  overflow: hidden;
`;

export const PersonTileImage = styled.img`
  height: 80px;
  width: auto;
`;

export const PersonTileAddButton = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: 3;
`;
