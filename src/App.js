import Home from "./pages/Home";
import { BoletaProvider } from "./context/BoletaContext";
const App = () => {
  return (
    <BoletaProvider>
      <Home />
    </BoletaProvider>
  );
};

export default App;
