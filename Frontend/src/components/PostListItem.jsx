import { Link } from "react-router-dom"
import Image from './Image'
import {format} from 'timeago.js' 

const PostListItem = ({post}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-11">
        {/* image */}
        {post.img && <div className="md:hidden xl:block xl:w-1/3">
            <Image src={post.img} className='rounded-xl object-cover' w='800'/>
        </div>}
        {/* details */}
        <div className="flex flex-col gap-6">
            <Link to={`/${post.slug}`} className='text-4xl font-semibold'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>Written by</span>
                <Link className="text-blue-800">{post.user.username}</Link>
                <span>on</span>
                <Link className="text-blue-800">{post.category}</Link>
                <span>{format(post.createdAt)}</span>
            </div>
            <p>
            {post.desc}
            </p>
           <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem
