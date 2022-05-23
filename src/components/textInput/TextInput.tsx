import styled from 'styled-components';

type TextInputType = {
  id: string;
  name: string;
};

const TextInput = ({ id, name }: TextInputType) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <Input type='text' id={id} />
    </>
  );
};

export default TextInput;

const Input = styled.input`
  border: 1px solid #000;
`;
