import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm } from 'redux-form'
import { domOnlyProps } from '../../Utils.js'

const SearchCard = (props: Object) => {
  const {
    fields: {
      search,
    },
    searchCourses,
    searchTeachers,
  }: {
    fields: Object,
    searchCourses: Function,
    searchTeachers: Function,
  } = props

  return (
    <Paper className="searchContainer">
      <TextField
        {...domOnlyProps(search)}
        className="searchInput"
        fullWidth={true}
        hintText="Search"
      />
      <RaisedButton
        label="Search"
        primary={true}
        onClick={() => {
          // TODO (kentkwu) Move this into redux state
          // Hardcoded until then
          const searchContent = 'courses'

          switch (searchContent) {
            case 'teachers':
              searchTeachers(search.value)
              break
            case 'courses':
              searchCourses(search.value)
              break
            default:
              searchCourses(search.value)
          }
        }}
      />
    </Paper>
  )
}

export default reduxForm({
  form: 'Search',
  fields: ['search'],
})(SearchCard)
