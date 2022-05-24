export const VALIDATE_REGEX_LOGIN = {
  ID: /^\w{5,30}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
};

export const ACCESS_TOKEN = 'access-token';

export const ERROR_TEXT = {
  ID: '올바른 아이디 형식으로 입력해주세요.',
  PASSWORD: '올바른 비밀번호 형식으로 입력해주세요.',
};

export const LOGIN_PROPS = {
  USER_ID: 'userId',
  PASSWORD: 'password',
};


export const PATH = {
  HOME: '/',
  LOGIN: '/login',
}
