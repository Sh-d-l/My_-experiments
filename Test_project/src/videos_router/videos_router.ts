import {Router} from "express";
import {videos_repositories} from "../repositories/videos_repositories";
export const testRouter = Router({})

const HTTP_STATUS = {
    OK_200:200,
    CREATED_201:201,
    NO_CONTENT_204: 204,

    BAD_REQ_400: 400,
    NOT_FOUND_404: 404,

    METHOD_NOT_ALLOWED:405,
}
//const arrResolutionVideo = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];

testRouter.post('/videos', (req,res) => {
    const postVideo = videos_repositories.createVideo(req.body.title, req.body.author)
    res.status(200).send(postVideo)
})

testRouter.get ('/videos', (req, res) => {
    const getVideo = videos_repositories.filterVideo(req.body.title, req.body.author)
    res.status(201).send(getVideo)
})

