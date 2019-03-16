import React from 'react';
import IconWithBadge from "./IconWithBadge";


const HomeIconWithBadge = (props) => {
    // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={0}/>;
}
export default HomeIconWithBadge