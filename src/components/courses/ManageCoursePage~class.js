import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadCourses, loadAuthors } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.error("Loading Courses Failed: " + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        console.error("Loading Authors Failed: " + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

//   state = {
//     course: {
//       title: "",
//     },
//   };

//   handleChange = (event) => {
//     const course = { ...this.state.course, title: event.target.value };
//     this.setState({ course });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.actions.createCourse(this.state.course);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h2>Courses</h2>
//         <h3>Add Course</h3>
//         <input
//           type="text"
//           onChange={this.handleChange}
//           value={this.state.course.title}
//         />
//         <input type="submit" value="Save" />

//         {this.props.courses.map((course, i) => (
//           <div key={i + "-" + course.title}>{course.title}</div>
//         ))}
//       </form>
//     );
//   }
