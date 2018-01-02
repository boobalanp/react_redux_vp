import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const loadCoursesSuccess = (courses) => {
    return {type: types.LOAD_COURSES_SUCCESS,courses};
};

export const updateCourseSuccess = (course) => {
    return {type: types.UPDATE_COURSE_SUCCESS,course};
};

export const createCourseSuccess = (course) => {
    return {type: types.CREATE_COURSE_SUCCESS,course};
};

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        })
    }
}

export function saveCourse(course){
    return function(dispatch,getState){
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw(error);
        })
    }
}
