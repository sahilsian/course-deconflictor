export default {
    BASE_URL: `http://64.225.68.149:8080/api/v3`,
    //getting all courses from database
    GET_COURSES: () => `/course`,
    GET_COURSE_DECONFLICTED: (courses) => `/course/deconflicted?courses=${courses}`
}