import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Tag = props => (
    <span className={cn('notification-tag', props.type)}>
        {props.children}
    </span>
);

Tag.displayName = 'NotificationTagComponent';
Tag.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node
};
export default Tag;
