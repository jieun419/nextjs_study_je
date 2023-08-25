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
