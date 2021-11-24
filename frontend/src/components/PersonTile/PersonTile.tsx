import Tile from "components/shared/Tile";
import React, { FunctionComponent } from "react";
import {
  PersonTileAddButton,
  PersonTileBirthDate,
  PersonTileImage,
  PersonTileImgWrapper,
  PersonTileWrapper,
} from "./PersonTile.components";
import { ReactComponent as AddIcon } from "images/addUser.svg";
import IconButton from "components/shared/IconButton";

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
    <PersonTileWrapper>
      <Tile text={name} bg={gender}>
        <PersonTileBirthDate>{birthDate}</PersonTileBirthDate>
        <PersonTileImgWrapper>
          {imgUrl && <PersonTileImage src={imgUrl} />}
        </PersonTileImgWrapper>
      </Tile>
      <PersonTileAddButton>
        <IconButton icon={<AddIcon />} color="green" />
      </PersonTileAddButton>
    </PersonTileWrapper>
  );
};

export default PersonTile;
