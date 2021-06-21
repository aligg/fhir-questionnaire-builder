import React from "react";

const Header = ({ status }) => {
    const statusBar = React.useMemo(() => {
        if (status.valid === undefined) {
            return <p>Loading...</p>;
        } else if (status.valid) {
            return (
                <div className="status-bar">
                    <span role="img" aria-label="green-check" className="emoji">
                        ✅
                    </span>
                    <p>Resource is valid</p>
                </div>
            );
        }
        return (
            <div className="status-bar">
                <span role="img" aria-label="error-icon" className="emoji">
                    🚫
                </span>
                <p>
                    {status.messages
                        .map((err) => {
                            return `Error in ${err.location}: "${err.message}"`;
                        })
                        .join(", ")}
                </p>
            </div>
        );
    }, [status.messages, status.valid]);

    return (
        <header className="app-header">
            <a
                href="https://www.hl7.org/fhir/questionnaire.html"
                target="_blank"
                rel="noreferrer"
            >
                <p>FHIR Questionnaire Builder</p>
            </a>
            {statusBar}
        </header>
    );
};

export default Header;
