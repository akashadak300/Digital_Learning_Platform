import express from "express"
import { addQuestion, addReply, addReview, addReviewReply, deleteCourse, editCourse, generateVideoUrl, getAllCourse, getAllCoursesForAdmin, getCourseContent, getSingleCourse, uploadCourse } from "../controllers/course.controller.js";
import { authorizeRoles, isAuthenticated } from "../middleware/auth.js";
const courseRouter = express.Router();


courseRouter.post('/upload-course', isAuthenticated, authorizeRoles("admin"), uploadCourse);
courseRouter.put('/edit-course/:id', isAuthenticated, authorizeRoles("admin"), editCourse);
courseRouter.get('/get-course/:id', getSingleCourse);
courseRouter.get('/get-course', getAllCourse);
courseRouter.get('/get-course-content/:id', isAuthenticated, getCourseContent);
courseRouter.put('/add-question', isAuthenticated, addQuestion);
courseRouter.put('/add-answer', isAuthenticated, addReply);
courseRouter.put('/add-review/:id', isAuthenticated, addReview);
courseRouter.put('/add-review-reply', isAuthenticated, authorizeRoles("admin"), addReviewReply);
courseRouter.get('/all-course', isAuthenticated, authorizeRoles("admin"), getAllCoursesForAdmin);
courseRouter.delete('/delete-course/:id', isAuthenticated, authorizeRoles("admin"), deleteCourse);
courseRouter.post('/getVdoCipherOTP', generateVideoUrl)
export default courseRouter;