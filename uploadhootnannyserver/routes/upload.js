import express from 'express'
import {v4 as uuid} from 'uuid'
import multer from 'multer'
import path from "path"


export const upload = express.Router()


upload.get("/", (req, res) => {
    //check body for category

    //send images
    res.status(200).send("Heres the images")
})


upload.post("/", (req, res) => {
    //save image

    //return response

    res.status(201).send("uploaded image")
})