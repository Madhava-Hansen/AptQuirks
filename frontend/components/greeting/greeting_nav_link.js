import React from 'react';

export const GreetingNavLink = ({handleClick, urlParam, currentUrl, linkName}) => 
	<li 
		className={"nav-link" + (currentUrl === urlParam ? ' isActive' : '')} 
		onClick={handleClick}>
			{linkName}
	</li>


