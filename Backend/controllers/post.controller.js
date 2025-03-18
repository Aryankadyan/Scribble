import ImageKit from "imagekit"
import Post from "../models/post.model.js"

export const getPosts = async (req, res) => {
   const posts = await Post.find()
   res.status(200).json(posts)
}

export const getPost = async (req, res) => {
   const post = await Post.findOne({ slug: req.params.slug })
   res.status(200).json(post)
}

export const createPost = async (req, res) => {
   const clerkUserId = req.auth.userId

   console.log(req.headers)

   if(!clerkUserId){
      return res.status(401).json("Not authenticated!")
   }
   
   const user = await user.findOne({clerkUserId})
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
      privateKey: 'process.env.IMAGEKIT_PRIVATE_KEY',
   })

   export const uploadAuth = async(req, res)=>{
      const result = ImageKit.getAuthenticationParameters()
      res.send(result)
   } 
