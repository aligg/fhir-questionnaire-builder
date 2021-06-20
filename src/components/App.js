import "../styles.css";
import BuilderContainer from "./BuilderContainer";

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <a
                    href="https://www.hl7.org/fhir/questionnaire.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>FHIR Questionnaire Builder</p>
                </a>
            </header>
            <BuilderContainer />
        </div>
    );
};

export default App;
