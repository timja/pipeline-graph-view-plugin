import {FunctionComponent} from "react";
import * as React from "react";
import StatusIcon from "../status-icon/StatusIcon";

const Component: FunctionComponent = () => {
    const value = {
        // TODO decide if this should be split up or constructed server side
        jobTitle: "Create README.md",
        className: "h2"
    }

    return (
        // @ts-ignore TS-2322 Types bug with props, assume it needs a react upgrade
        <h1 className={value.className}><span style={{marginRight: "0.2em"}}><StatusIcon inProgress={false}/></span>{value.jobTitle}</h1>
    );
}

export default Component;