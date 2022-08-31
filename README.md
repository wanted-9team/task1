# 원티드 프리온보딩 6차 1차 과제

## 과제 설명

원티드 프리온보딩 프론트엔드 선발 과제의 Best Practice를 만들고 제출합니다.

[👉 선발 과제 관련 링크](https://github.com/walking-sunset/selection-task)

## 배포 URL
[바로 실행하기]({링크 넣어야 해요요오오})

테스트 계정
- ID: {넣어야 해요오오}
- PW: {넣어야 해요오오}

## 9팀 소개
- 팀장: 김다윤 @many-yun 

    <a href="https://github.com/wanted-9team/task1/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=wanted-9team/task1" />
    </a>
    <div>
    @onurleft @blcklamb @many-yun @jaehyeon74 @sacultang @hlezg08
    </div>

Made with [contributors-img](https://contrib.rocks).

## 과제 달성 사항 및 해결 방법

### :: 1. 로그인 / 회원가입

- &#9745; `/` 경로에 로그인 / 회원가입 기능을 개발해주세요
  - &#9745; 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
  - &#9745; 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.

#### Assignment1

- &#9745; 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - &#9745; 이메일 조건: `@` 포함
  - &#9745; 비밀번호 조건: 8자 이상
  - &#9745; 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
  - 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

> 참고 파일: [[src/components/signIn/SignUp.jsx](https://github.com/wanted-9team/task1/blob/main/src/components/signUp/SignUp.jsx)] 
<br> 회원가입시 필요한 email, password 를 userInfo 라는 state로 관리하도록 하고, passwordconfirm 은 따로 state로 관리하여
추후 password와 일치하는지를 확인하여 유효성 검사를 실시하였습니다.<br>
유효성 검사는 useMemo 훅을 이용하여 email, password 검사 및 password, passwordConfirm 이 일치하는지 판별하여 유효성검사를 판별하도록 하였습니다. 버튼 활성화 여부는 버튼 기본 props인 disabled를 활용합니다.

#### Assignment2

- &#9745; 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동해주세요
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - &#9745; 응답받은 JWT는 로컬 스토리지에 저장해주세요


#### Assignment3

- &#9745; 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - &#9745; 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - &#9745; 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

> 참고 파일: [[src/App.jsx](https://github.com/wanted-9team/task1/blob/main/src/App.jsx)] 
<br> 렌더링될 때마다 localStorage의 accessToken을 불러와 App.jsx 단에서 판단한 뒤 있으면 `/todo`로, 없으면 `/`로 이동합니다.

---

### :: 2. 투두 리스트

#### Assignment4

- &#9745; `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- &#9745; 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- &#9745; 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요


#### Assignment5

- &#9745; 투두 리스트의 수정, 삭제 기능을 구현해주세요
  - &#9745; 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
  - &#9745; 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
  - &#9745; 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요



## 레포지토리 구조
### 기술 스택
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>

<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

- 선택 이유: 
    - 컴포넌트 이름을 가독성 좋게 구성할 수 있기 때문에 유지 보수에 좋습니다. 
    - 컴포넌트 단위로 스타일을 지정해줄 수 있어 재사용성이 높습니다.
    - 컴포넌트의 props를 활용해서 경우에 따른 스타일을 적용시켜 줄 수 있습니다. 
    - 클래스나, 태그 중복에 의한 스타일 에러를 막아주기 때문에 일반 css나 scss보다 유용합니다. 
    - 기본적으로 scss와 비슷한 문법으로 사용법이 어렵지 않습니다. 
    - css-in-js 라이브러리중 가장 널리 쓰이며, 참고할 수 있는 자료가 많습니다.

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

<br>
<details>
<summary style="font-size:17px">폴더 구조</summary>

```
│  App.jsx
│  index.jsx
│
├─api
│   └─index.js
│
├─components
│	├─todo
│   │   ├─TodoCreate.jsx
│   │   ├─TodoHead.jsx
│   │   ├─TodoItem.jsx
│   │   └─TodoList.jsx
│   │
│	├─signIn
│	│   └─SignIn.jsx
│   │
│	└─signUp
│		└─SignUp.jsx
│
├─pages
│	├─Auth.tsx
│   └─Todo.tsx
│
├─styles
│	├─Todo.style.ts
│	├─Auth.style.ts
│   └─global.ts
│
├─utils
│   ├─auth.ts
│   ├─todo.ts
│   └─token.ts
└─types
	├─auth.ts
	└─todo.ts
```
</details>
