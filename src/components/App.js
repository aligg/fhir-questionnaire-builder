import "../App.css";
import BuilderContainer from "./BuilderContainer";

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <p>FHIR Questionnaire Builder</p>
            </header>
            <BuilderContainer />
        </div>
    );
};

export default App;
