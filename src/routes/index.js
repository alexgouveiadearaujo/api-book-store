import express from "express";
import router from "./booksRoutes.js";

const routes = (app)=> {
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"cursoNode"})
    })

    app.use(
        express.json(),
        router
    )
}

export default routes;