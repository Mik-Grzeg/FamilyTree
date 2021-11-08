import React, { FunctionComponent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import {
  PrivacyPolicyCheckboxElement,
  PrivacyPolicyCheckboxFakeInput,
  PrivacyPolicyCheckboxInput,
  PrivacyPolicyCheckboxWrapper,
  PrivacyPolicyText,
  PrivacyPolicyTrigger,
  StyledTick,
} from "./PrivacyPolicyCheckbox.components";

interface Props {
  register?: UseFormRegisterReturn;
  isError?: boolean;
}

const PrivacyPolicyCheckbox: FunctionComponent<Props> = ({
  register,
  isError,
}) => {
  return (
    <PrivacyPolicyCheckboxWrapper>
      <PrivacyPolicyCheckboxElement>
        <PrivacyPolicyCheckboxFakeInput isError={isError} />
        <PrivacyPolicyCheckboxInput type="checkbox" {...register} />
        <StyledTick />
      </PrivacyPolicyCheckboxElement>
      <PrivacyPolicyText>
        I accept the <PrivacyPolicyTrigger>Privacy Policy</PrivacyPolicyTrigger>
      </PrivacyPolicyText>
    </PrivacyPolicyCheckboxWrapper>
  );
};

export default PrivacyPolicyCheckbox;
