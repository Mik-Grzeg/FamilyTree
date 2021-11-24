import Tile from "components/shared/Tile";
import React, { FunctionComponent } from "react";
import {
  PersonTileBirthDate,
  PersonTileImage,
  PersonTileImgWrapper,
} from "./PersonTile.components";

interface Props {
  name: string;
  gender: "male" | "female";
  birthDate: string;
  imgUrl?: string;
}

const PersonTile: FunctionComponent<Props> = ({
  name,
  gender,
  birthDate,
  imgUrl,
}) => {
  return (
    <Tile text={name} bg={gender}>
      <PersonTileBirthDate>{birthDate}</PersonTileBirthDate>
      <PersonTileImgWrapper>
        {imgUrl && <PersonTileImage src={imgUrl} />}
      </PersonTileImgWrapper>
    </Tile>
  );
};

export default PersonTile;
