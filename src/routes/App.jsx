import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MemberProfile from '@pages/MemberProfile';
import AdminMembers from '@pages/admin/AdminMembers';
import '@styles/style.scss';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route index element={<Home />} />
						{/* MEMBERS */}
						<Route path='member'>
							<Route path=':id' element={<MemberProfile />} />
						</Route>
						{/* ADMIN */}
						<Route path='admin'>
							<Route path='members' element={<AdminMembers />} />
						</Route>
						{/* <Route path="about" element={<About />} />
						<Route path="dashboard" element={<Dashboard />} /> */}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;