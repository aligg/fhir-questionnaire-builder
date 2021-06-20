import React from "react";

const Output = ({ data }) => {
    return (
        <div className="output">
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Output;
