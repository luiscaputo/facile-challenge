import Router from "express";
// Routes
import baseRoute from "./base.routes";
import encriptRoutes from "./encriptName.routes";

const router = Router();

router.use(baseRoute);
router.use(encriptRoutes);

export default router;
