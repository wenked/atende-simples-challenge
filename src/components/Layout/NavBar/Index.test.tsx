import { shallow, mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import NavBar from './index';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('rendering components', () => {
	it('rendering Navbar without crashing', () => {
		const wrapper = render(
			<MockedProvider>
				<Router>
					<NavBar />
				</Router>
			</MockedProvider>
		);

		expect(wrapper.container.innerHTML).toMatch('Home');
		expect(wrapper.container.innerHTML).toMatch('Films');
		expect(wrapper.container.innerHTML).toMatch('Vehicles');
		expect(wrapper.container.innerHTML).toMatch('People');
	});
});
