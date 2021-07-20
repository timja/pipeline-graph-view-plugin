// @flow

import React from 'react';
import OriginalLinkify, {LinkifyProps} from 'linkifyjs/react';
import PropTypes from "prop-types";

// Makes sure we only linkify explicit URLs with expected protocols
function validateURL(value: string) {
    const explicitURL = /^(http|https|file|ftp|mailto):/i;
    return explicitURL.test(value);
}

type Props = LinkifyProps;

/**
 * Thin wrapper around http://soapbox.github.io/linkifyjs/ react component that (by default) only linkifies prefixed
 * URLs. Also allows us to expose this via JDL so the rest of BO doesn't need to install it.
 *
 * NB: This is currently tested by ResultItem-spec
 *
 * @param props
 */
export const Linkify = (props: Props) => {
    const childOptions = {
        validate: validateURL,
        ...(props.options || {}),
    };

    const childProps = {
        ...props,
        options: childOptions,
    };

    return <OriginalLinkify {...childProps} />;
};

Linkify.propTypes = {
    // @ts-ignore
    ...OriginalLinkify.propTypes,
    options: PropTypes.object,
};
// @ts-ignore
Linkify.defaultProps = OriginalLinkify.defaultProps;
