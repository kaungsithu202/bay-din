import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Questions from './components/Questions.tsx';
import Squares from './components/Squares.tsx';
import './index.css';
import RootLayout from './layout/RootLayout.tsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Questions />,
	},
	{
		path: 'squares/:questionId',
		element: <Squares />,
		// children: [
		// 	{
		// 		path: ':answerId',
		// 		element: <Answer />,
		// 	},
		// ],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootLayout>
			<RouterProvider router={router} />
		</RootLayout>
	</React.StrictMode>
);
