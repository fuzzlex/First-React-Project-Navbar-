import Home from "./pages/home";
import Project from "./pages/project";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () =>{
    return(
    <Router basename={process.env.PUBLIC_URL}>
    <Route  path="/project" component={Project} />
    <Route exact path="/" component={Home} />
    </Router>
    );
};

export default App;