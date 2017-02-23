import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <TextInput
                name="title"
                label="Tilte"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>
            <TextInput
                name="authorId"
                label="AuthorId"
                value={course.authorId}
                onChange={onChange}
                error={errors.authorId}/>
            <SelectInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}/>
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}/>
            <input
                type="submit"
                disabled={loading}
                value={ loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;