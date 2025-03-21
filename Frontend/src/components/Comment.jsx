import Image from './Image'
import { format } from 'timeago.js'
 
const Comment = ({comment}) => {

  return (
    <div className="p-4 bg-orange-50 rounded-xl mb-8">
        <div className="flex items-center gap-4">
            {comment.user.img && <Image
            src={comment.user.img}
            className='w-11 h-11 rounded-full object-cover'
            w='41'
            />}
            <span className="font-medium">{comment.user.username}</span>
            <span className="text-sm text-gray-600">{format(comment.createdAt)}</span>
            </div>
            <div className="mt-5">
                <p>
                  {comment.desc}
                </p>
            </div>
        </div>
  )
}

export default Comment