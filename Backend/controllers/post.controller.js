import ImageKit from "imagekit"
import Post from "../models/post.model.js"
import User from '../models/user.model.js'

export const getPosts = async (req, res) => {

const page = parseInt(req.query.page) || 1
const limit = parseInt(req.query.limit) || 2

   const posts = await Post.find()
   .populate("user", "username")
   .limit(limit)
   .skip((page - 1) * limit)

   const totalPosts = await Post.countDocuments()
   const hasMore = page * limit < totalPosts

   res.status(200).json({posts, hasMore})
}

export const getPost = async (req, res) => {
   const post = await Post.findOne({ slug: req.params.slug }).populate("user", "username img")
   res.status(200).json(post)
}

export const createPost = async (req, res) => {
   const clerkUserId = req.auth.userId

   console.log(req.headers)

   if(!clerkUserId){
      return res.status(401).json("Not authenticated!")
   }
   
   const user = await User.findOne({clerkUserId})
   if(!user){
      return res.status(404).json("User not found!")
   }

   const newPost = new Post({user: user._id, ...req.body })

   const post = await newPost.save()
   res.status(200).json(post)
}

export const deletePost = async (req, res) => {
   const clerkUserId = req.auth.userId
   if (!clerkUserId) {
      return res.status(401).json("Not authenticated!")
   }

   const role = req.auth.sessionClaims?.metadata?.role || "user"

   if(role === 'admin'){
      await Post.findByIdAndDelete(req.params.id)
      return res.status(200).json("Post has been deleted!")
   }

   const user = await user.findOne({ clerkUserId })
   
   const deletedPost = await Post.findOneAndDelete({_id: req.params.id, user:user._id})

   if(!deletedPost){
   return res.status(403).json("You can delete only your posts!")
   }
       res.status(200).json("Post has been deleted!")
   }

   const imagekit = new ImageKit({
      urlEndpoint: 'process.env.IMAGEKIT_URL_ENDPOINT',
      publicKey: 'process.env.IMAGEKIT_PUBLIC_KEY',
      privateKey:' process.env.IMAGEKIT_PRIVATE_KEY',
   })

   export const uploadAuth = async(req, res)=>{
      const result = imagekit.getAuthenticationParameters()
      res.send(result)
   } 
