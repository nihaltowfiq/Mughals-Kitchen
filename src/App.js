import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";
import myStore from "./redux/store";

function App() {
  return (
    <div className="app">
      <Provider store={myStore}>
        <Router>
          <MainComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
