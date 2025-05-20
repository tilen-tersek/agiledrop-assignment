import "./App.css";
import DefaultWrapper from "./layouts/default/DefaultWrapper.tsx";
import HomePage from "./pages/home/HomePage.tsx";

function App() {
  return (
    <>
      <div id="app">
        <DefaultWrapper>
          <HomePage />
        </DefaultWrapper>
      </div>
    </>
  );
}

export default App;
