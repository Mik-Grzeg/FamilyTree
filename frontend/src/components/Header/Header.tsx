import React, { FunctionComponent } from "react";
import BgBar from "components/shared/BgBar";
import { HeaderTextContent, HeaderWrapper } from "./Header.components";
import { useUserContext } from "context/UserContext/useUserContext";

const Header: FunctionComponent = () => {
  const { username } = useUserContext();

  return (
    <HeaderWrapper>
      <HeaderTextContent>
        {username && `Tree of ${username}`}
        {!username && "Family tree generator"}
      </HeaderTextContent>
      <BgBar width={509} color="dark" />
    </HeaderWrapper>
  );
};

export default Header;
