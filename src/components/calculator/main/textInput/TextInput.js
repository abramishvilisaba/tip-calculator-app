import {
  InputContainer,
  BillInputContainer,
  BillInput,
  InputIcon,
  InputText,
  InputTextError,
} from "./TextInputElements";

const TextInput = ({
  getInput,
  placeholder,
  src,
  text,
  inputValue,
  errorText,
  showError,
  id,
}) => {
  console.log("vall" + inputValue);
  return (
    <>
      <BillInputContainer>
        <InputContainer>
          <InputText id={id}>{text}</InputText>
          <InputTextError id={id} showError={showError}>
            {errorText}
          </InputTextError>
        </InputContainer>
        <InputContainer>
          <InputIcon src={src} alt=" " />
          <BillInput
            id={id}
            showError={showError}
            placeholder={placeholder}
            value={inputValue || ""}
            onInput={(e) => getInput(e)}
          />
        </InputContainer>
      </BillInputContainer>
    </>
  );
};

export default TextInput;
