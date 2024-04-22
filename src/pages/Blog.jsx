import React, { useEffect } from 'react'
import './All.css'
import { FaArrowRightLong } from "react-icons/fa6";
import kitab from '../images/kitab.jpg'
import teyyare from '../images/teyyare.jpg'
import komp from '../images/komp.jpg'
import ressam from '../images/ressam.jpg'
import dosan from '../images/dosan.webp'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogCards } from '../slice/BlogSlice';
import { Link } from 'react-router-dom';
import { fetchBlog } from '../slice/BlogCardSlice';


const Blog = () => {
  const dispatch = useDispatch()

  const BlogCards = useSelector((state) => state.blogcards.items)
  const Blogs = useSelector((state) => state.blog.items)

  useEffect(() => {
    dispatch(fetchBlogCards());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBlog());

  }, [dispatch])



  return (
    <div>
      <div className='cr3'>
        <div className='part1'>
          {Blogs &&
            Blogs.map((item,id) => (
              <Link key={id}>
                <div>
                  <img className='bigpic' src={item.image} alt="" />
                </div>
                <div className='part1text'>
                  <div className='text11'>{item.title}</div>
                  <div>Daha çox <FaArrowRightLong /></div>
                </div>
              </Link>
            ))}

        </div>
        <div className='part2'>
        {Blogs &&
            Blogs.map((item) => (
          <Link>
            <div className='part2box'>
              <img className='blogpic' src={item.image} alt="" />
              <div className='part2text'>
                <div className='text1'>{item.title}</div>
                <div>Daha çox <FaArrowRightLong /></div>
              </div>
            </div>
          </Link>
            ))}
        </div>
      </div>
      <div className='baslig123'>
        <div className='blogy'>🚀 Bloq yazıları</div>
        <div className='ist'>İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və təcrübələrini kəşf edin.</div>
      </div>
      <div className='cards'>
        {BlogCards &&
          BlogCards.map((item) => (
            <Link>
              <div className='card'>
                <div><img className='cardsimg' src={item.image} alt="" /></div>
                <div className='cardtexts'>
                  <div className='guzgu'>{item.title}</div>
                  <div className='baslig'>{item.info}</div>
                  <div className='yol'>{item.owner}</div>
                </div>
              </div>
            </Link>

          ))}

      </div>

    </div>
  )
}

export default Blog