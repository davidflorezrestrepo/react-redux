import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from  './CourseForm';

function setUp(loading) {
    const props = {
        course: {}, loading: loading, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
    it('renders a Form and h1', () => {
        const wrapper = setUp(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "save" when not saving', () => {
        const wrapper = setUp(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setUp(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});
