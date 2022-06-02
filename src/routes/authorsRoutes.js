import express from "express";
import AuthorController from "../controller/authorsController.js";


const router = express.Router();

router
  .get("/authors", AuthorController.getAuthors)
  .get("/authors/:id" , AuthorController.getAuthorId)
  .post("/authors", AuthorController.registerAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("/authors/:id" , AuthorController.deleteAuthor)

export default router;
