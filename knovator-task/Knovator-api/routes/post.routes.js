import { Router } from "express";
import Post from "../models/Post.js";
import passport from 'passport'

const router = Router();


router.post(
  "/save/post",
  passport.authenticate("jwt", { session: false }),
  async function (req, res) {


    const userId = req.user._id


    const {
      title,
      body,
      status,
      geolocation: {latitude, longitude}
    } = req.body;

    try {


      const newPost = new Post({
        title,
        body,
        createdBy: userId,
        status: status ?? status,
        geolocation: {
          latitude,
          longitude,
        },
      });

      await newPost.save();
      return res
        .status(200)
        .json({
          success: true,
          message: "Successfully posted a post",
          post: newPost,
        });

    } catch (e) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong while saving post",
            errors: e.message
        })
    }
  }
);


router.get('/fetch/posts', passport.authenticate('jwt', {session: false}), async function(req, res) {
     try {
        const fetchedPosts = await Post.find({})
        if (fetchedPosts.length > 0) return res.status(200).json({success: true, posts: fetchedPosts})
     }catch(e){
        return res.status(400).json({
            success: false,
            message: "something went wrong",
            errors: e.message
        })
     }
})


router.get('/fetch/post/:id', passport.authenticate('jwt', {session: false}), async function(req, res) {
     try {
        const fetchedPost = await Post.findById(req.params.id)
        if (fetchedPost) return res.status(200).json({success: true, post: fetchedPost})
     }catch(e){
        return res.status(400).json({
            success: false,
            message: "something went wrong",
            errors: e.message
        })
     }
})

router.patch('/update/post/:id', passport.authenticate('jwt', {session: false}), async function(req, res) {
    const { title, body, geolocation, status } = req.body
     try {
        const post = await Post.findById(req.params.id)

        if (title) {
            post.title = title
        }
        if (body) {
            post.body = body
        }
        if (geolocation) {
            if (geolocation.latitude){
                post.geolocation.latitude = geolocation.latitude
            }
        if (geolocation.longitude) {
            post.geolocation.longitude = geolocation.longitude
        }
            
      }


        if (status) {
            post.status = status
        }

        await post.save()
        return res.status(200).json({
            success: true,
            message: "Updated post successfully",
            post
        })

     }catch(e){
        return res.status(400).json({
            success: false,
            message: "something went wrong while updating post",
            errors: e.message
        })
     }
})

router.delete('/delete/post/:id', passport.authenticate('jwt', {session: false}), async function(req, res) {
    try {
        await Post.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Deleted successfully", success: true });
  } catch (err) {
        return res.status(404).json({message: "Something went wrong", success: false, error: err.message });
  }
})

router.get('/get/latlong/post', passport.authenticate('jwt', {session: false}), async function(req, res) {
    try {
        let { latitude, longitude} = req.query
        latitude = parseFloat(latitude)
        longitude = parseFloat(longitude)
       
        if (latitude & longitude) {
            const post = await Post.find({geolocation:{ latitude, longitude} })
            return res.status(200).json({success: true, message: "Successfully fetched post", post})
        }

    }catch(e) {
             return res.status(400).json({success: false, message: "Something went wrong", errors: e.message})
    }
})



export default router