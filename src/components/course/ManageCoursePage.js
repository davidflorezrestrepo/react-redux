import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props, contex) {
        super(props, contex);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };
        this.UpdateCourseState = this.UpdateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            //Necessary to populate form when existing course is loaded directly
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    UpdateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    redirect(path) {
        toastr.success('Course saved');
        this.context.router.push(path);
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => {this.redirect('/courses');
                this.setState({saving: false});
            })
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.UpdateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                loading={this.state.saving}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Pull in the react Router contex so router is available on this.contex.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCoursesById(courses, courseId) {
    const course = courses.filter(course => course.id == courseId);
    if (course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; //from the path '/course/:id'
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };
    if (courseId && state.courses.length > 0) {
        course = getCoursesById(state.courses, courseId);
    }
    const formatedAuthors = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return {
        course: course,
        authors: formatedAuthors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
