import Link from 'next/link';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import { ACCESS_TOKEN, PATH } from '../../constants';

const Header = () => {
  const [userToken, setUserToken] = useState<string | undefined>('');

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setUserToken(undefined);
  };

  useEffect(() => {
    setUserToken(localStorage?.getItem(ACCESS_TOKEN) || undefined);
  }, []);

  return (
    <Wrapper>
      <Link href={PATH.HOME}>
        <Title>HAUS</Title>
      </Link>
      {userToken ? (
        <Button type='button' onClick={handleLogout}>
          login out
        </Button>
      ) : (
        <Link href={PATH.LOGIN}>
          <p>login</p>
        </Link>
      )}
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

const Button = styled.button`
  padding: 5px;
  border: 1px solid #ccc;
`;
