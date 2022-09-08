# 가계부

수익, 지출을 기록할 수 있다

# Start

> - git clone https://github.com/detail54/account-book.git
> - yarn install
> - yarn dev

# dependencies

```json
  "dependencies": {
    "@prisma/client": "^4.0.0",
    "axios": "^0.27.2",
    "cookies-next": "^2.1.1",
    "env-cmd": "^10.1.0",
    "jsonwebtoken": "^8.5.1",
    "next": "^12.2.3",
    "next-auth": "^4.10.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-query": "^3.39.1",
    "recoil": "^0.7.5",
    "styled-components": "^5.3.5",
    "styled-normalize": "^8.0.7",
    "ts-node": "^10.9.1",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@types/jsonwebtoken": "^8.5.8",
    "@types/next-auth": "^3.15.0",
    "@types/node": "^18.0.6",
    "@types/react": "18.0.14",
    "@types/react-dom": "18.0.5",
    "@types/react-query": "^1.2.9",
    "@types/styled-components": "^5.1.25",
    "@types/uuid": "^8.3.4",
    "@typescript-eslint/eslint-plugin": "^5.30.5",
    "@typescript-eslint/parser": "^5.30.5",
    "babel-plugin-styled-components": "^2.0.7",
    "eslint": "8.19.0",
    "eslint-config-airbnb": "18.2.1",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-next": "12.2.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.30.1",
    "prettier": "^2.7.1",
    "prisma": "^4.0.0",
    "typescript": "^4.7.4"
  }
```

- database: sqlite
- prisma: db컨트롤
- cookies-next: http header의 쿠키정보를 가져오기위해 사용
- jsonwebtoken: jwt 인코딩, 디코딩하기 위해 사용
- axios: api 통신
- next-auth: 로그인 세션 구현을 위해 사용
- react-query: api에서 받아온 서버state를 캐싱하기 위해 사용
- recoil: client state를 전역으로 관리하기 위해 사용
- uuid: 개발중 파일이 변경되면 빌드를 하면서 atom의 state가 재 선언되는데<br />
  이때 해당 이전에 생성된 atom의 고유 key값을 재사용 하면서 에러가 발생한다.<br />
  성능적인 이슈는 없다고 하지만 에러메세지가 뜨지 않게 하기위해 난수를 생성하여 key값 지정하는데 사용.
