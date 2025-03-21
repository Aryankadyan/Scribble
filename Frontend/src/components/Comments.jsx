import Comment from "./Comment"
import axios from 'axios'
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import {useAuth} from  '@clerk/clerk-react'
import {toast} from 'react-toastify'

const fetchComments = async(postId)=>{
    const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`
    )

return res.data
}

const Comments = ({postId}) => {

  const {getToken} = useAuth()

    const {isPending, error, data} = useQuery({
        queryKey: ["comments", postId],
        queryFn: () => fetchComments(postId),
      })

      const queryClient = useQueryClient()

      const mutation = useMutation({
          mutationFn: async (newComment) => {
            const token = await getToken();
            return axios.post(`${import.meta.env.VITE_API_URL}/comments`,newComment, {
              headers: { 
                    Authorization: `Bearer ${token}`,
              }
            }) 
          },  
          onSuccess:(res)=>{
            toast.success("Post has been created")
          
          }
        })
    
      if(isPending) return "Loading..."
      if(error) return "Something went wrong!" + error.message
  
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <div className="flex items-center justify-between gap-8 w-full">
            <textarea placeholder="Write a comment..." className="w-full p-4 rounded-xl"/>
                <button className="bg-orange-500 px-4 py-3 text-white font-medium rounded-xl">Send</button>
        </div>
        {data.map((comment)=>{
          <Comment key = {comment._id} comment={comment} />
        })}
        <Comment/>        
        <Comment/>        
        <Comment/>        
        <Comment/>        
        <Comment/>        
        <Comment/>        
        <Comment/>        

    </div>
  )
}

export default Comments