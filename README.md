# next-reactQuery-boilerplat

> - react v18.2.0
> - next v12.2.0
> - react-query v3.39.1
> - axios v0.27.2
> - styled-components v5.3.5
> - styled-normalize v8.0.7

# start

> - yarn install
> - local: yarn start
> - development: yarn start:dev
> - production: yarn serve (yarn build && env-cmd -f .env.production npx serve -s build)
> - <strong><span style='background-color: #f7dd; color: black'>실제 사용시 .gitignore에 .env파일들 주석 해제 해야함.</span></strong>

## directory structure

```
└── src
    ├── components
    │   ├── atoms
    │   │   └── ....
    │   ├── molecules
    │   │   └── ....
    │   ├── organisms
    │   │   └── ....
    │   └── templates
    │       └── ....
    ├── hooks
    │   ├── api
    │   │   ├── defaultQueryErrHandlers.ts
    │   │   ├── defaultMutationErrHandlers.ts
    │   │   ├── interface.ts
    │   │   └── urls.ts
    │   ├── useApiError.ts
    │   ├── useReactQuery.ts
    │   └── ...
    ├── layout
    │   ├── Footer.styles.ts
    │   ├── Footer.tsx
    │   ├── Header.styles.ts
    │   ├── Header.tsx
    │   └── Main.tsx
    ├── pages
    │   ├── post
    │   │   ├── [id].tsx
    │   │   ├── index.styles.ts
    │   │   └── index.tsx
    │   ├── _app.tsx
    │   ├── document.tsx
    │   └── index.tsx
    │       └── index.tsx
    ├── styles
    │   ├── GlobalStyle.ts
    │   ├── styled.d.ts
    │   ├── ThemeDark.ts
    │   └── ThemeRight.tsx
    └── utils
        ├── axios.ts
        └── reactQuery.ts
```

# Head 관리

- 공통 meta data는 \_document.tsx에 작성을 하고, src/layout/Main.tsx 에서 계속 변경되는 url 정보나 추가 props 정보로 동적으로 변경되야 하는 meta data들을 설정해놓고 \_app.tsx 에서 Component, pageProps, router 데이터를 넘기면서 Main.tsx 호출한다.

## server state

- axios를 사용하여 api 통신한다.<br />
  instance 객체를 생성하여 기본 설정값을 세팅 해 놓고 import 해서 사용.
  https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/utils/axios.ts#L1-L12
- src/hooks/api/urls.ts 에서 api Url 관리.
- src/hooks/api/interface.ts 에서 api 데이터들의 interface 관리.

- react-query를 사용하여 server state관리.<br />
  QueryClient의 기본설정 적용.<br />
  https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/utils/reactQuery.ts#L1-L12

- src/hooks/useReactQuery.ts<br />
  useQuery와 useMutation을 한번 더 감싸서 각 component의 api호출 hook에서 넘겨준 값을 기준으로 옵션을 분기하여 처리한다.
  https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/hooks/useReactQuery.ts#L49-L110

- <strong>error처리</strong><br />

  1. src/hooks/api/defaultQueryErrHandlers.ts | defaultMutationErrHandlers.ts 에서 useQuery와 useMutation에 default로 적용할 error callback을 respose status별로 선언.
     https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/hooks/api/defaultQueryErrHandlers.ts#L1-L22
  2. src/hooks/useReactQuery.ts 에서 useQuery와 useMutation에서 property로 받아온 onError콜백이 없을경우 위에서 선언된 default err callback으로 세팅.
  3. default err 외에 다른 error callback을 사용할 경우, src/hooks/useApiError.ts에 선언되어있는 TErrorHandlers 타입의 객체를 인자로 넘겨주거나, onError 함수를 넘겨주면 된다.
  4. error callback의 우선 순위는<br />
     onError > errorHandlers > defaultErrHandlers<br />
     위 순서로, onError값을 넘겨줄때 가장 우선순위가 높고 그 다음으로 TErrorHandlers 타입의 객체를 넘겨줬을 때 이다.
  5. http status 외에 다른 상태에 대한 callback을 선언 하고싶다면 useApiError.ts에서 해당 키값을 분기처리 해야한다.

- <strong>흐름</strong><br />

  1. useReactQuery.ts -> useQuery와 useMutation 래핑하여 설정.
  2. usePost.ts -> 각 hook에서 필요한 api호출 데이터를 useReactQuery의 useQuery와 useMutation을 사용하여 리턴. 이때 넘기지 않을 중간에 위치한 값은 undefined로 설정.
     https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/hooks/usePost.ts#L1-L46
  3. 각 component 에서 hook 호출.

  ```ts
  /// query
  const posts: NextPage = () => {
    const { getPosts } = usePost()
    const { data: postsData, isLoading } = getPosts()

    ...
  }

  //// mutation
  const mutationAdd = addPost((oldData, newData) => [...oldData, newData])
  const onSubmit = async () => {
    try {
      await mutationAdd.mutateAsync({
        title,
        body,
        userId,
      })
      navigate(-1)
    } catch (e) {
      navigate('/posts')
    }
  }
  ```

## PreFetch

- \_app.tsx 에서 Hydrate로 감싸줌.
- useReactQuery.ts 에 usePrefetchQuery hook을 설정해 놓고 각 컴포넌트에서 usePrefetchQuery hoook을 컴포넌트 함수 아래에서 호출한다.

```ts
// useReactQuery.ts > usePrefetchQuery
export const fetcher = async <T>({
  queryKey,
  pageParam,
}: Omit<QueryFunctionContext<TQueryKey>, 'meta'>): Promise<T> => {
  const [url, params] = queryKey
  const { data } = await api.get<T>(url, { params: { ...params, pageParam } })

  return data
}

export const usePrefetchQuery = async <T>(url: string, params?: object) => {
  await queryClient.prefetchQuery<T, AxiosError, T, TQueryKey>(
    [url, params],
    ({ queryKey }) => fetcher({ queryKey }),
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// pages/posts/index.tsx
const posts: NextPage = () => {
  ...
}

export default posts

usePrefetchQuery<IPost[]>(API_URL.POSTS) // prefetch

```

## style

1. <strong>ssr적용 (공식문서 참고)</strong>

   > - \_document.tsx https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/pages/_document.tsx#L11-L34
   > - .babelrc https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/.babelrc#L1-L13

2. <strong>pattern</strong>

   > - common components의 경우 atomic pattern을 적용하여<br /><br />
   >   | src/components/atoms <br />
   >   | src/components/molecules <br />
   >   | src/components/organisms <br />
   >   | src/components/templates <br /><br />
   >   이렇게 4가지로 구분하였으며, 각 디렉터리에 요소들을 분리하기 위해서 추가로 하위 디렉터리를 만들어 구분한다.

3. <strong>Theme</strong>

   > - src/ThemeRight.ts: DefaultTheme를 기준으로하여 기본 테마에 적용할 스타일 값 선언.
   > - src/ThemeDark.ts: DefaultTheme를 기준으로하여 다크 테마에 적용할 스타일 값 선언.

4. <strong>style props interface</strong>

   > - src/styles/styled.d.ts 에서 모든 style관련된 타입을 선언.

5. <strong>GlobalStyle</strong>

   > - src/GlobalStyle.ts: 전역 스타일. 기본적으로 적용해 놓을 스타일 작성.

6. <strong>create styled components</strong>

   > - 같은 Elements type 의 components를 여러개 만들 경우 basic style을 가지고 있는 compnenet를 만들어 하위에서 상속받아서 사용.
   > - basic styled components는 generic에 IStyleProps interface를 상속받은 interface를 넣고, props들을 열거하여 theme와 그 외 props값을 같이 사용할 수 있게 한다.
   >   https://github.com/detail54/next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/components/atoms/button/Button.styles.ts#L1-L43
