import React from 'react'
import './post.css';

export default function Post() {
  return (
    <div className="post">
        <img className='postImg'
            src='https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=1'
            alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam commodi, dolorem voluptatem aliquid accusantium esse suscipit dicta eum ea debitis repellendus perspiciatis delectus nemo quod eveniet at velit modi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam commodi, dolorem voluptatem aliquid accusantium esse suscipit dicta eum ea debitis repellendus perspiciatis delectus nemo quod eveniet at velit modi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam commodi, dolorem voluptatem aliquid accusantium esse suscipit dicta eum ea debitis repellendus perspiciatis delectus nemo quod eveniet at velit modi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam commodi, dolorem voluptatem aliquid accusantium esse suscipit dicta eum ea debitis repellendus perspiciatis delectus nemo quod eveniet at velit modi?
            </p>
    </div>
  )
}
