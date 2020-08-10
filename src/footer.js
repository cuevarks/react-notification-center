import React from 'react';
import PropTypes from 'prop-types';

const NotificationFooter = props => <div className="rn-footer">{props.children}</div>;

NotificationFooter.displayName = 'NotificationHeader';
NotificationFooter.proptypes = {
    children: PropTypes.node.isRequired
};
export default NotificationFooter;
