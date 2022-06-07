import styled from 'styled-components';

type TextInputType = {
  id: string;
  name: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputType> = ({ id, name, onBlur }) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <Input type='text' id={id} onBlur={onBlur} />
    </>
  );
};

export default TextInput;

const Input = styled.input`
  border: 1px solid #000;
`;
