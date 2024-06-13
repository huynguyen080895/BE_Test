import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRouter = (app)=>{
  router.get('/api/categories',homeController.getCategory);
  router.get('/api/games',homeController.getGames);
  return app.use('/',router);
}
export default initWebRouter;