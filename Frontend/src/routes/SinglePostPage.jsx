import Image from '../components/Image'
import { Link, useParams } from 'react-router-dom'
import PostMenuAction from '../components/PostMenuAction'
import Search from '../components/Search'
import Comments from '../components/Comments'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {format} from 'timeago.js'

const fetchPost = async(slug) =>{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
  return res.data
}

const SinglePostPage = () => {

  const { slug } = useParams()

 const {isPending, error, data} = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  })

  if(isPending) return "Loading..."
  if(error) return "Something went wrong!" + error.message
  if(!data) return "Post not found"  

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>{data.title}</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Written by</span>
          <Link className='text-blue-800'>{data.user.username}</Link>
          <span>on</span>
          <Link className='text-blue-800'>{data.category}</Link>
          <span>{format(data.createdAt)}</span>
        </div>
        <p className='text-gray-500 font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet, fuga voluptas dolorem omnis quisquam. Quisquam sit illo cupiditate molestiae soluta? Neque optio nesciunt reprehenderit consectetur vitae dolor, architecto quod?
        </p>
      </div>
      {data.img && <div className="hidden lg:block w-2/5">
        <Image src={data.img}  w='600' className='rounded-2xl'/>
      </div>}
    </div>
   {/* content */}
   <div className="flex flex-col md:flex-row gap-11">
    {/*text*/}
    <div className='lg:text flex flex-col gap-6 text-justify'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates perferendis quidem ducimus laborum delectus dolor harum illum quasi aliquam, officiis dolorum pariatur ipsam explicabo et. Libero saepe, natus non ad earum reprehenderit facere corrupti sequi veniam minus aspernatur quia assumenda at necessitatibus illum commodi eaque consequatur ipsum autem distinctio voluptas. Repellendus culpa reprehenderit maiores quas repellat a perferendis debitis nihil eveniet, dolorem, molestias, iure hic facere possimus harum? Unde, debitis? Totam cum tenetur provident a deserunt sed impedit culpa?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsum soluta. Corporis ullam labore sed ipsam voluptas cumque vero in quibusdam, illo officiis quae mollitia, error saepe similique. Molestiae cupiditate nobis ullam debitis quasi! Libero possimus qui suscipit dignissimos recusandae optio dolorem, nulla tempore illo tenetur fugit accusantium molestias vel, corrupti aspernatur magni ipsum? Soluta excepturi molestias velit error, consequuntur fugit facilis porro, cum possimus dolores modi obcaecati quam sint dignissimos reprehenderit eum odit accusantium pariatur ea quo ullam, facere eaque. Deserunt veritatis aliquid nemo hic voluptas eligendi minima, ad, consectetur earum laudantium aliquam suscipit voluptatum laboriosam numquam expedita distinctio!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo, voluptate, veniam, enim ut est officia illo quos similique corporis fugiat! Labore nemo maiores animi doloremque soluta ipsa laudantium autem molestiae eos adipisci. Consectetur fugiat repellendus cum, nihil reiciendis magni, eaque, sint odio veniam obcaecati rem voluptatum mollitia distinctio aut aspernatur facilis beatae labore optio vero ullam et impedit ad non? Quod omnis similique incidunt dolores, minus minima explicabo consequuntur fuga unde enim iusto qui exercitationem expedita! Nisi hic quibusdam consequatur asperiores aliquid molestiae facilis, quidem harum reiciendis voluptates quis? Architecto, quam! Voluptatibus illum quam, laboriosam a dignissimos cumque amet. At ad nisi nemo dolorum dolorem libero nam veritatis adipisci iusto nesciunt animi, deserunt cupiditate explicabo impedit voluptas officiis nobis iste perspiciatis excepturi blanditiis, esse aut eaque facere! Fugit eaque reprehenderit atque cum et, ab accusamus ducimus iure hic enim provident ratione impedit nulla ut unde laborum in itaque culpa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consectetur dolore repudiandae, commodi deleniti, ut nisi in blanditiis unde impedit tempore cum illum! Similique, nostrum! Commodi qui repellendus numquam nam provident possimus! Natus consectetur, voluptatibus repellendus eum facilis nulla asperiores ipsum. Voluptas perferendis at labore temporibus autem, repudiandae tempora, ducimus doloribus nihil qui delectus ipsam odit aliquam debitis totam minima itaque nam consectetur eligendi amet atque? Tenetur maiores possimus neque corrupti quis, vero quaerat laboriosam voluptate repudiandae natus veritatis quod, itaque nam eos. Ratione recusandae eum adipisci ab sunt fuga a, ea accusamus cupiditate quod nemo aperiam inventore cumque dolorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consectetur dolore repudiandae, commodi deleniti, ut nisi in blanditiis unde impedit tempore cum illum! Similique, nostrum! Commodi qui repellendus numquam nam provident possimus! Natus consectetur, voluptatibus repellendus eum facilis nulla asperiores ipsum. Voluptas perferendis at labore temporibus autem, repudiandae tempora, ducimus doloribus nihil qui delectus ipsam odit aliquam debitis totam minima itaque nam consectetur eligendi amet atque? Tenetur maiores possimus neque corrupti quis, vero quaerat laboriosam voluptate repudiandae natus veritatis quod, itaque nam eos. Ratione recusandae eum adipisci ab sunt fuga a, ea accusamus cupiditate quod nemo aperiam inventore cumque dolorem.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consectetur dolore repudiandae, commodi deleniti, ut nisi in blanditiis unde impedit tempore cum illum! Similique, nostrum! Commodi qui repellendus numquam nam provident possimus! Natus consectetur, voluptatibus repellendus eum facilis nulla asperiores ipsum. Voluptas perferendis at labore temporibus autem, repudiandae tempora, ducimus doloribus nihil qui delectus ipsam odit aliquam debitis totam minima itaque nam consectetur eligendi amet atque? Tenetur maiores possimus neque corrupti quis, vero quaerat laboriosam voluptate repudiandae natus veritatis quod, itaque nam eos. Ratione recusandae eum adipisci ab sunt fuga a, ea accusamus cupiditate quod nemo aperiam inventore cumque dolorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae tempore esse necessitatibus quasi placeat consectetur incidunt excepturi eos temporibus fugiat quidem doloribus quaerat dolor, cum facere tempora quisquam est distinctio. Tenetur totam cumque nostrum vel quibusdam mollitia minima voluptas eligendi suscipit est? Id eveniet, officiis et quidem voluptatum velit, voluptatibus laudantium doloribus dolore natus, autem repellendus odio suscipit nostrum expedita itaque voluptatem iure beatae illo corrupti quos saepe excepturi soluta. Dolor corporis autem numquam reprehenderit officia atque nemo necessitatibus minima, non magnam nostrum distinctio ipsa, repellendus obcaecati temporibus quam ipsam ipsum. Placeat quisquam explicabo quo tempore odit aperiam provident eaque. Rem id dolore blanditiis culpa adipisci quaerat sint harum earum sequi quia tempore ullam, dolor illum, aliquam omnis dignissimos? Animi nesciunt vitae cupiditate officiis provident atque a, ipsum accusantium ab repellendus fugiat laudantium nam vero quia nisi perspiciatis explicabo blanditiis consectetur distinctio alias. Vel fugit, delectus a alias ea autem nemo ipsam veritatis impedit incidunt aut perferendis magnam beatae ratione praesentium fugiat, earum ducimus? Sit debitis quam quibusdam, aperiam nam laboriosam doloribus accusantium autem exercitationem, nemo impedit. Exercitationem, quas quam id impedit nemo aliquam? Esse quaerat inventore ab, animi laudantium sed possimus, vel, maxime voluptas autem dolorum nobis cum?
      </p>
    

    </div>
    {/* menu */}
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Author</h1>
      <div className='flex flex-col gap-4'>

      <div className='flex items-center gap-8'>
       {data.user.img && <Image src={data.user.img} className='w-12 h-12 rounded-full object-cover'
        w='48'
        h='48'
        />
        }
        <Link className='text-teal-600'>{data.user.username}</Link>
      </div>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='flex gap-2'>
          <Link>
          <Image src='facebook.svg'/>
          </Link>
          <Link>
          <Image src='instagram.svg'/>
        </Link>
        </div>
        </div>
      <PostMenuAction post={data}/>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
      <div className='flex flex-col gap-3 text-sm'>
        <Link className='underline'>All</Link>
        <Link className='underline' to='/'>Web Design</Link>
        <Link className='underline' to='/'>Development</Link>
        <Link className='underline' to='/'>Databases</Link>
        <Link className='underline' to='/'>Search Engines</Link>
        <Link className='underline' to='/'>Marketing</Link>
      </div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
      <Search/>
    </div>
   </div>
   <Comments postId={data._id}/>
   </div>

  )
}

export default SinglePostPage
