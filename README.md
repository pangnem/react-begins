# react-begins

## Lab 1

- 이 프로젝트 폴더가 아닌 다른 폴더(예: C:\Users\dooley\temp)에서 새 React 앱을 생성하시오.

    > cd  C:\Users\dooley\temp
    > npx create-react-app my-app

- 프로젝트를 개발 모드로 시작

    > yarn start

- 브라우저로 http://localhost:3000/ 화면이 뜨는지 확인

- VS Code 에디터로 src/App.js를 열고 App 함수를 아래와 같이 변경하고 저장

```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React World!</h1>
        <p>
          시작이 반이다
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

- 프로젝트를 다시 빌드하거나 다시 시작하지 않아도 브라우저에 변경 사항이 반영되는지 확인

