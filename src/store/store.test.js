import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/courseActions';

describe('Store', () => {
    it('should handle creating courses', () => {
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'title1'
        };

        const action = actions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];
        const expected = {
            title: 'title1'
        };
        expect(actual).toEqual(expected);
    });
});
