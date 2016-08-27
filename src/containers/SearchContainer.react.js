// @flow
import { connect } from 'react-redux'
import SearchForm from '../components/dashboard/SearchForm.react.js'
import { searchCourses, searchTeachers } from '../actions/SearchActions.js'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Function) => ({
  searchCourses: (
    course: string
  ) => {
    dispatch(searchCourses(course))
  },
  searchTeachers: (
    teacher: string
  ) => {
    dispatch(searchTeachers(teacher))
  },
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

export default SearchContainer
