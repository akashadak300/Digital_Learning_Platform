import express from "express"
import { activateUser, getUserInfo, socialAuth, updateUserInfo, userLogin, updateAccessToken, userLogout, userRegistration, updateUserPassword, updateProfilePicture, getAllUsers, updateUserRole, deleteUser } from "../controllers/user.controller.js"
import { authorizeRoles, isAuthenticated } from "../middleware/auth.js";
const userRouter = express.Router();


userRouter.post('/registration', userRegistration);
userRouter.post('/activate-user', activateUser);
userRouter.post('/login', userLogin);
userRouter.get('/logout', isAuthenticated, userLogout);
userRouter.get('/refresh', updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-profile", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updateUserPassword);
userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);
userRouter.get("/all-users", isAuthenticated, authorizeRoles("admin"), getAllUsers);
userRouter.put("/update-user-role", isAuthenticated, authorizeRoles("admin"), updateUserRole);
userRouter.delete("/delete-user/:id", isAuthenticated, authorizeRoles("admin"), deleteUser);
export default userRouter