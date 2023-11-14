import { Provider } from "react-redux";
import RoutesApp from "./routes/RoutesApp";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RoutesApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
