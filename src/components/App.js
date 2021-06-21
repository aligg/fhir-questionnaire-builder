import "../styles.css";
import Form from "./Form";
import Header from "./Header";
import Output from "./Output";
import React from "react";
import { validate } from "../helpers";

const QUESTIONNAIRE_DEFAULT = {
    status: "draft",
    resourceType: "Questionnaire",
};

const App = () => {
    const [data, setData] = React.useState(QUESTIONNAIRE_DEFAULT);
    const [status, setStatus] = React.useState({});

    React.useEffect(() => {
        const status = validate(data);
        setStatus(status);
    }, [data]);

    return (
        <div className="app">
            <Header status={status} />
            <div className="container">
                <Form />
                <Output data={data} />
            </div>
        </div>
    );
};

export default App;
