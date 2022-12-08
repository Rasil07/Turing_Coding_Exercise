import { Router } from "express";
import UserController, {
  DBUSerController,
} from "../../application/controllers/user";
import CONFIG from "../../config/env";

export default function UserRouter() {
  const router: Router = Router();
  const controller =
    CONFIG.use_db === "true" ? DBUSerController() : UserController();

  router.get("/list", controller.listUsers);
  router.get("/:id", controller.getUserById);

  router.post("/add", controller.addUser);
  router.delete("/remove/:id", controller.removeUser);

  return router;
}
