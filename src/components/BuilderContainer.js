import Form from "./Form";
import Output from "./Output";
import React from "react";

const QUESTIONNAIRE_DEFAULT = {
    status: "draft",
    name: "",
    resourceType: "Questionnaire",
    items: [],
};

const BuilderContainer = () => {
    const [data, setData] = React.useState(QUESTIONNAIRE_DEFAULT);
    return (
        <div className="container">
            <Form />
            <Output data={data} />
        </div>
    );
};

export default BuilderContainer;
