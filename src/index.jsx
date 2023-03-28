import { createRoot } from "react-dom/client";
import { MainView} from "./components/main-view/main-view";
//import "bootstrap/dist/css/bootstrap.min.css";
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import { Container } from "react-bootstrap";

//Main component (will eventually use all the others)
const App = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

// Main component (will eventually use all the others)
//const MyFlixApplication = () => {
//  return (
//    <div className="my-flix">
//      <div>Good morning</div>
//    </div>
//  );
//};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<App />);