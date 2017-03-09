import courseReducer from './courseReducer';
import expect from 'expect';
import * as actions from '../actions/courseActions';

describe('Course Reducer', ()=>{
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        let initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        let course = {title: 'C'};
        let action = actions.createCourseSuccess(course);

        let state = courseReducer(initialState, action);

        expect(state.length).toBe(3);
        expect(state[0].title).toBe('A');
        expect(state[1].title).toBe('B');
        expect(state[2].title).toBe('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        let initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'}
        ];

        let course = {id: 'B', title: 'new title B'};
        let action = actions.updateCourseSuccess(course);

        let state = courseReducer(initialState, action);

        expect(state.length).toBe(2);
        expect(state[0].title).toBe('A');
        expect(state[1].title).toBe('new title B');
    });
});
