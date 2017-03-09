import * as actions from './courseActions';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as types from './actionTypes';
import expect from 'expect';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('course actions', ()=> {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //here's an example call to nock
        // nock('http://example.com/')
        //     .get('/courses')
        //     .reply(200, { body: { courses: [{ id:1, firstName: 'fName', lastName: 'lName'}]}});

        const store = mockStore({courses: []});
        store.dispatch(actions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});
