import Comment from "./Comment"
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@clerk/clerk-react'
import { toast } from 'react-toastify'

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  )

  return res.data
}

const Comments = ({ postId }) => {

  const { getToken } = useAuth()

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] })
    },
    onError: (error) => {
      toast.error(error.response.data)
    }
  })

  if (isPending) return "Loading..."
  if (error) return "Something went wrong!" + error.message

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      desc: formData.get('desc')
    }

    mutation.mutate(data)
  }

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-11">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form onSubmit={handleSubmit} className="flex items-center justify-between gap-8 w-full">
        <textarea
          name='desc'
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl" />
        <button className="bg-orange-500 px-4 py-3 text-white font-medium rounded-xl">Send</button>
      </form>
      {data.map((comment) => {
        <Comment key={comment._id} comment={comment} />
      })}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments