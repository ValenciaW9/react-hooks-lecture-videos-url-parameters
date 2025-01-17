import About from "./About";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

function App() {
    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/projects">
                    <ProjectList />
                </Route>
                <Route exact path="/projects/:id">
                    <ProjectDetail />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;