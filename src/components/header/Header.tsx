import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Link href='/'>
        <Title>HAUS</Title>
      </Link>
      <Link href='/login'>
        <p>login</p>
      </Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;
