import "../styles.css";
import Form from "./Form";
import Header from "./Header";
import Output from "./Output";
import React from "react";
import { reducer } from "../reducer";
import { validate } from "../helpers";

const QUESTIONNAIRE_DEFAULT = {
    status: "draft",
    resourceType: "Questionnaire",
    title: "Untitled Form",
    name: "untitled-form",
    item: [{ type: "string", linkId: "1" }],
};

const App = () => {
    const [state, dispatch] = React.useReducer(reducer, QUESTIONNAIRE_DEFAULT);
    const [status, setStatus] = React.useState({});

    React.useEffect(() => {
        const status = validate(state);
        setStatus(status);
    }, [state]);

    return (
        <div className="app">
            <Header status={status} />
            <div className="container">
                <Form data={state} dispatch={dispatch} />
                <Output data={state} />
            </div>
        </div>
    );
};

export default App;
