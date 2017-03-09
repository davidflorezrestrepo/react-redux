import {authorsFormattedForDropdown} from './selectors';
import expect from 'expect';

describe('slectors authorsFormattedForDropdown', () => {
    it('should return data formatted to use in dropdowns', () => {
        const authors = [
            { id:'id1', firstName:'fn1', lastName:'ln1' },
            { id:'id2', firstName:'fn2', lastName:'ln2' }
        ];
        const expectedAuthors = [
            {value:'id1', text:'fn1 ln1'},
            {value:'id2', text:'fn2 ln2'}
        ];

        expect(authorsFormattedForDropdown(authors)).toEqual(expectedAuthors);
    });
});
