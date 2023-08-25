# 생활코딩 Next.js 공부하기

## 📍 Next.js 설치, 실행하기

### 설치
```
npx create-next-app@latest
```

> `@latest`는 신규 버전으로 설치하겠다는 의미

![스크린샷 2023-08-24 오후 4 10 40](https://github.com/jieun419/NextJs_Study/assets/109754988/285a0e27-17f9-4dbd-b161-de93c30bbbb3)

설정에 맞춰 yes or no 하기 생활코딩에서는 JavaScript로 했지만 공부하는겸 `TypeScript`로 설정

### 실행
```
npm run dev
```
`vite`와 비슷하게 터미널에 `npm run dev` 명령어 입력하면 된다.

---

### 배포
```
npm run build
```
해당 명령어를 실행하면 `.next`폴더에 배포 가능한 애플리케이션이 생성된다.

### 생성된 배포 버전 실행
```
npm run start
```
`.next`폴더의 내용을 바탕으로 서비스를 시작한다.

>![스크린샷 2023-08-25 오후 4 55 28](https://github.com/jieun419/NextJs_Study/assets/109754988/6d178037-8291-4336-9d9f-6c12450dca4f)
>
>배포할 경우 `npm run dev`로 확인했을 때 보다 용량이 혀저히 낮아지는 걸 확인할 수 있다.


---
## 📍 Routing

<a href="https://opentutorials.org/course/5098/32350" target="_blank">강의<a>

>**라우팅 :** 사용자가 접속한 URL의 path에 따라서 콘텐츠를 응답해 주는 작업

```
http://a.com/dashboard/analytics/
```
라는 주소가 있을 때 `/dashboard/analytics/`을 `path`, 
`dashboard`와 `analytics`는 각각 `segment`라고 부른다.

### 작업 방법
```tsx
export default function Create(){
  return <>
    Create!!
  </>
}
```

`create/page.tsx` 파일을 생성한다.
이럴 경우 `/create`로 다시 접속할 경우 정삭적으로 페이지가 노출 된다.

> - `props` 아래의 폴더는 세크먼트를 의미한다. `/create`는 `pages/create`폴더를 의미한다.
> - `pages/create.tsx`폴더가 있다면 해당 파일의 반환 값을 화면에 출력한다.
> - 이 값을 상위 컴포넌트인 `_app.tsx`의 children 위치에 표시gksek.
> - 이때, `pages/index.js`는 무시된다.

### 다이나믹 라우팅

read/1, read/2 의 1,2는 가변적으로 변경되는 경로의 경우 `read`폴더 생성 후 
`[id]`라는 폴더를 만들고 이전과 동일하게 `page.tsx`를 만들어 준면 된다.
```
/read/[id]/page.tsx
```
