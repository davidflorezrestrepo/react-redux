import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from  './CourseForm';

function setUp(loading) {
    const props = {
        course: {}, loading: loading, errors: {},
        onSave: () => {},
        onChange: () => {}
    };
    const renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    const output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via React TestUtils', () => {
    it('renders a Form and h1', () => {
        const { output } = setUp();
        expect(output.type).toBe('form');
        let [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "save" when not saving', () => {
        const { output } = setUp(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const { output } = setUp(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
});
