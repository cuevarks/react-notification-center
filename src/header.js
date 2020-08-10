import React from 'react';
import PropTypes from 'prop-types';

const NotificationHeader = props => (
    <div className="rn-header">
        <h4>{props.children}</h4>
    </div>
);

NotificationHeader.displayName = 'NotificationHeader';
NotificationHeader.proptypes = {
    children: PropTypes.node.isRequired
};
export default NotificationHeader;
