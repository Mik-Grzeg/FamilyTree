import React, { FunctionComponent } from "react";
import Loader from "components/Loader";
import { MainWrapper } from "./Main.components";
import UserForm from "components/UserForm";
import { useUserContext } from "context/UserContext/useUserContext";
import PersonTile from "components/PersonTile";

const Main: FunctionComponent = () => {
  const { isPending, isLoggedIn } = useUserContext();
  return (
    <MainWrapper>
      {isPending && <Loader />}
      {/* {!isPending && !isLoggedIn && <UserForm />} */}
      {!isPending && !isLoggedIn && (
        <>
          <PersonTile
            name="John Willson"
            gender="male"
            birthDate="18.12.1990"
          />
          space
          <PersonTile
            name="Lucy Parker"
            gender="female"
            birthDate="02.03.2012"
            imgUrl="https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/35/panda-1_1334159.webp"
          />
        </>
      )}
    </MainWrapper>
  );
};

export default Main;
