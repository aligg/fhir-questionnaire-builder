import Form from "./Form";
import Output from "./Output";
import React from "react";
import { validate } from "../helpers";

const QUESTIONNAIRE_DEFAULT = {
    status: "draft",
    resourceType: "Questionnaire",
};

const BuilderContainer = () => {
    const [data, setData] = React.useState(QUESTIONNAIRE_DEFAULT);

    React.useEffect(() => {
        validate(data);
    }, [data]);

    return (
        <div className="container">
            <Form />
            <Output data={data} />
        </div>
    );
};

export default BuilderContainer;
