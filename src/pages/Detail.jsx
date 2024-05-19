import React, { useEffect } from 'react'
import './All.css'
import ulduzz from '../images/ulduzz.webp'
// import tulke from '../images/tulke.webp'
import { IoEyeOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FiWatch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../slice/DetailSlice';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../slice/BlogCardSlice';
import { fetchBlogCards } from '../slice/BlogSlice';
// import Blog from './Blog';
// import BlogCardSlice from '../slice/BlogCardSlice';


const Detail = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();

  const BlogCards = useSelector((state) => state.blogcards.items);  

  useEffect(() => {
    dispatch(fetchBlogCards())
  }, [dispatch]);

  const item = BlogCards.find(blog => blog.id === (id));
  return (
    <div className='detailsec'>
      <div className='detailcolor'>


      </div>
      
      <div className='detailcontainer'  key={item.id}>
        <div className='dpart1'>
          <div className='ulduz-text'>{item.owner}</div>
          <div className='baxiss'><div><IoEyeOutline />13 Baxış</div> <div><GoClock />07.05.2024</div> <div><FiWatch />3 dəq oxuma</div></div>
          <div className='tulkue'>{item.title}</div>
          <div className='basligg'>{item.info}</div>
        </div>
        <div><img className='telke' src={item.image} alt="" /></div>
        <div className='detailtexts'>
          <div className='bas'>{item.info}</div>
          <div className='lorem'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, nemo tempora. Minus numquam, itaque molestiae recusandae explicabo quas illo sint ea odio reprehenderit qui voluptate similique pariatur! Harum aliquid similique, aliquam rem commodi illum. Dolores a itaque porro repellat? Tenetur iusto fuga incidunt optio tempore quod nam praesentium necessitatibus eum voluptates eaque nisi, aliquam odio modi assumenda ratione vero in et, dicta expedita qui ab! Amet, recusandae deleniti iste quo nisi illo incidunt beatae voluptatibus reiciendis, fugiat repudiandae fugit, aspernatur delectus enim odio culpa doloremque? Quae natus totam sunt enim, est sit hic vitae iusto quasi unde fugit ex quisquam neque nostrum accusamus. Neque, illo, distinctio dolorum cumque, iste dignissimos ratione totam assumenda soluta quo id minus! Eligendi natus pariatur quam reiciendis. Nulla vitae vero quae quasi repudiandae? Ex expedita consequatur dolorum fuga, reiciendis quo. Animi quas qui suscipit inventore recusandae ea, tenetur deserunt nulla accusamus distinctio! Fugiat optio ducimus temporibus, suscipit asperiores placeat sequi commodi! Rem eveniet laboriosam similique nesciunt possimus! Laboriosam amet earum laborum rem vitae voluptatibus atque inventore unde fugit delectus tempora, cupiditate nulla sunt ducimus quod. Accusantium, ipsa quisquam et architecto est ipsam ratione voluptas odio modi laboriosam dicta iste rem distinctio incidunt qui possimus deleniti officia consectetur. Necessitatibus recusandae quod doloremque soluta dolorum et quis, sunt cumque asperiores quia fugiat, culpa nesciunt nobis in vero, repellendus exercitationem ab esse perferendis natus. Velit quos expedita iure praesentium voluptas odio aperiam libero eos, labore sunt, asperiores, dolores rerum. Voluptas recusandae dignissimos qui tempore ullam, est vero atque error iusto distinctio. Eos fugiat debitis, maxime ut expedita neque asperiores quas, nulla ratione voluptas recusandae aperiam odio consequuntur voluptate doloremque tenetur corrupti dignissimos dolorem ipsum voluptates ex ab quam nobis aliquam. Laboriosam aliquid magni nostrum quaerat a commodi magnam vel ad eaque neque, nihil ut sequi? Aspernatur veniam ad natus perferendis iusto enim numquam modi saepe quisquam deleniti velit ducimus mollitia ipsa, repudiandae vero repellat odio corrupti. Quos eaque, earum suscipit facilis ea nobis placeat iste. Sed amet impedit suscipit inventore ab consequuntur necessitatibus! Delectus odit, vel repellat repellendus porro, quasi inventore et id dolorum sed harum, eveniet asperiores quidem at. Ipsam facilis quae voluptatem sit quo facere minus iste, quod at architecto laudantium quisquam voluptatibus non possimus maxime ex animi doloremque. Possimus cupiditate assumenda deleniti labore facilis asperiores tempore eveniet excepturi. Nemo neque quasi cupiditate laboriosam ea quisquam veritatis impedit dolorum sed hic, obcaecati officiis illo porro vero possimus nobis? Quis dicta rem delectus eius officia inventore iste quos natus, qui cum perspiciatis sequi, cumque hic tempora quaerat distinctio laborum sapiente error. Eligendi assumenda vero, quasi quaerat inventore nam atque rem dolores quos optio, velit amet nihil, nulla ratione officia repudiandae laudantium magnam. Sit ullam, est voluptates molestiae delectus officiis pariatur atque eligendi voluptatum aliquid rerum amet fugit maxime reprehenderit accusamus numquam blanditiis tenetur ea possimus corrupti saepe! Perferendis eaque cumque atque ipsam fugit! Iusto molestiae quasi dolore quis perferendis eveniet autem necessitatibus explicabo quo accusamus consequatur accusantium, numquam et magnam sit officiis rem atque eum doloribus quod fuga nobis. Consectetur dicta vitae reiciendis alias, quidem magnam quos odit dolores temporibus aliquid quas harum quaerat incidunt pariatur ratione veniam nisi aliquam, ullam repellendus officia doloremque quod aut necessitatibus cumque. Iure autem illo natus hic repellat nisi recusandae distinctio minima molestias accusantium consequuntur, similique odio, exercitationem ipsa officiis, harum est fugiat temporibus dignissimos explicabo cupiditate delectus vel aut! Fugiat explicabo repudiandae quaerat, earum officiis dolore. Debitis aut possimus aspernatur laudantium libero consequuntur earum quaerat recusandae quam deserunt dicta ad cumque error ducimus itaque, facilis inventore eius illum molestiae quisquam, beatae quas modi. Rem vitae minus laudantium, dolorem aut odit. Eveniet, dolorum quae sunt velit optio a, ullam ipsam, aut sequi fuga assumenda tenetur quibusdam? Qui iste ex consequatur repellendus fuga alias quidem ratione iure molestiae a quo molestias, iusto cupiditate quis explicabo numquam nisi ipsa sed sunt provident. Vitae culpa adipisci voluptate mollitia quasi, ea fugiat assumenda provident eligendi praesentium dolor tempora placeat optio quidem? Dolores, suscipit? Voluptatum accusamus sed ut, magni tenetur, expedita neque eum non, dolorum doloribus libero eligendi. Laboriosam nobis, nesciunt magni libero qui distinctio ullam amet consequatur maxime. Eligendi obcaecati fugit similique harum inventore cupiditate debitis, consequuntur velit modi. Quae, omnis tempore minus at doloribus modi, dolor excepturi pariatur quasi reprehenderit nam totam eos laudantium ullam nesciunt laboriosam. Tempora aut ipsa, harum eum similique iusto suscipit eius doloremque obcaecati voluptatibus quam id odit sapiente repellat enim maxime. Eos, sequi aut dolor est architecto fuga facere odit iusto voluptas ipsam eius. Blanditiis, fuga praesentium ullam atque ipsam eaque dolor labore architecto accusamus magnam ut, nesciunt perspiciatis dolorem nobis tempora. Nemo perferendis soluta iusto saepe placeat perspiciatis facilis sint exercitationem natus, totam sequi expedita ex culpa repellendus corrupti optio qui ipsa ullam alias molestiae quos laudantium et repellat? Eaque dolorum reiciendis dolor excepturi, quas accusamus recusandae deleniti saepe nam voluptas inventore officia officiis corporis quis sit repellat aliquid sunt dolorem impedit. Ducimus deserunt non labore ad, natus quaerat necessitatibus dolore nam, nihil obcaecati cum nostrum aliquid architecto. Corrupti, laudantium veniam perferendis quia labore atque non iusto ut corporis officiis repellendus quibusdam at doloremque illum vitae ipsa voluptates repudiandae omnis ratione a necessitatibus maiores natus laborum. Perferendis distinctio at id incidunt beatae sapiente quaerat harum iste vero inventore sunt, porro, magni quam ut. Quam quos sunt maxime id, distinctio impedit quibusdam cumque inventore quod maiores eos possimus laboriosam delectus dolore nihil laudantium tenetur voluptatum repellendus vel rerum tempore perferendis facere! Sit minima error consequuntur suscipit laborum, iure quod temporibus amet obcaecati recusandae repellendus nobis. Voluptate, cum eaque. Facilis et excepturi, aut sed recusandae doloremque iusto architecto soluta non ipsa repellendus tenetur modi quis odit earum, ipsam aliquid explicabo accusamus. Incidunt, pariatur saepe reprehenderit expedita commodi quae vel ad blanditiis rem alias, eligendi quia facilis accusantium debitis error voluptatem illo autem quos delectus. Facilis delectus iusto nulla impedit exercitationem, voluptas atque molestiae nobis et ab rerum in fuga quos omnis possimus ratione officia sit. Distinctio libero dolorem cupiditate exercitationem pariatur animi saepe, tempore necessitatibus assumenda non molestias facilis consequuntur?
          </div>
        </div>
      </div>
        

    </div>
  )
}

export default Detail