import React, { FC, JSXElementConstructor, ReactElement } from 'react';
import Header from '@containers/Header';

interface props {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

const Layout:FC<props> = (props) => {
	return (
		<div className='Layout'>
			<Header />
			{props.children}
		</div>
	);
}

export default Layout;