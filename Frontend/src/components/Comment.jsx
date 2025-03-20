import Image from './Image'
 
const Comment = () => {

  return (
    <div className="p-4 bg-orange-50 rounded-xl mb-8">
        <div className="flex items-center gap-4">
            <Image
            src='userImg.jpeg'
            className='w-11 h-11 rounded-full object-cover'
            w='41'
            />
            <span className="font-medium">Aryan Kadyan</span>
            <span className="text-sm text-gray-600">2 days ago</span>
            </div>
            <div className="mt-5">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis iste doloribus corrupti impedit mollitia enim officiis dolores excepturi cupiditate, voluptatum iure iusto aut praesentium nostrum inventore.
                </p>
            </div>
        </div>
  )
}

export default Comment