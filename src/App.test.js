import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});

describe('Component: App', () => {

    const wrapper = shallow(<App />);    

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });


    it('renders carousel', () => {   
        const carousel = wrapper.find('Carousel');    
        expect(carousel.exists()).toBe(true);
    });
});