import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { Header } from '../components/header';
import { TextInput } from '../components/textInput';

const LoginPage: NextPage = () => {
  return (
    <>
      <Header />
      <Form onSubmit={handleLogin}>
        <TextInput id='userId' name='아이디' />
        <TextInput id='password' name='비밀번호' />
        <LoginButton type='submit'>로그인</LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
