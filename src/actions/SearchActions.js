// @flow
import request from 'superagent'
import SearchConstants from '../constants/SearchConstants.js'

export const requestCourses = (course: string) => ({
  type: SearchConstants.REQUEST_COURSES,
  query: course,
})

export const requestTeachers = (teacher: string) => ({
  type: SearchConstants.REQUEST_TEACHERS,
  query: teacher,
})

export const receiveCoursesSuccess = (payload: Object) => ({
  type: SearchConstants.RECEIVE_COURSES_SUCCESS,
  courses: payload.data,
})

export const receiveCoursesFailure = () => ({
  type: SearchConstants.RECEIVE_COURSES_FAILURE,
})

export const receiveTeachersSuccess = (payload: Object) => ({
  type: SearchConstants.RECEIVE_TEACHERS_SUCCESS,
  teachers: payload.data,
})

export const receiveTeachersFailure = () => ({
  type: SearchConstants.RECEIVE_TEACHERS_FAILURE,
})

export const searchCourses = (
  course: string,
) => (dispatch: Function, getState: Function) => {
  dispatch(requestCourses(course))
  request.get(`http://localhost:5000/courses/f/${course}`)
    .set('Authorization', getState().login.authToken)
    .end((err: Object, res: Object) => {
      if (err || res.statusCode !== 200) {
        dispatch(receiveCoursesFailure())
      }
      dispatch(receiveCoursesSuccess(res.body))
    })
}

export const searchTeachers = (
  teacher: string,
) => (dispatch: Function, getState: Function) => {
  dispatch(requestTeachers(teacher))
  request.get(`http://localhost:5000/instructors/f/${teacher}`)
    .set('Authorization', getState().login.authToken)
    .end((err: Object, res: Object) => {
      if (err || res.statusCode !== 200) {
        dispatch(receiveTeachersFailure())
      }
      dispatch(receiveTeachersSuccess(res.body))
    })
}
