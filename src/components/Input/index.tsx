import React from "react";
import { Controller } from "react-hook-form";

import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { IInput } from "./types";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field: {value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />}
        />
        <input />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;
