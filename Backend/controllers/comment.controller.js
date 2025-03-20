import Comment from '../models/comment.model.js'

export const getPostComments = async(req, res)=>{
   const comments = await Comment.find({post: req.params.postId})
   .populate("user", 'username img')
   .sort({createdAt: -1})

   res.json(comments)
}
export const addComment = async(req, res)=>{
    const clerkUserId = req.auth.clerkUserId
    const postId = req.params.postId

    if(!clerkUserId){
        return res.status(404).json("Not authenticated")
    }
    const user = User.findOne({clerkUserId})

    const newComment = new Comment.save()

    res.status(201).json(savedComment)
}
export const deleteComment = async(req, res)=>{}