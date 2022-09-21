import * as React from 'react';
import { Outlet } from 'react-router-dom';
import usePopups from './hooks/usePopups';
import { popupsMap } from './data';

export const Popups: React.FC = () => {
	const { mountedPopups, popups } = usePopups();
	return (
		<React.Fragment key='unique'>
			{mountedPopups.map((popup) => {
				const Component = popupsMap[popup];
				if (!Component) {
					return null;
				}

				return <Component isOpen={popups.includes(popup)} key={popup} />;
			})}
			<Outlet />
		</React.Fragment>
	);
};
