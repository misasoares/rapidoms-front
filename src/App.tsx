import { Provider } from "react-redux";
import RoutesApp from "./routes/RoutesApp";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RoutesApp />
    </Provider>
  );
}

export default App;
