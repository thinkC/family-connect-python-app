import React, { useState, useEffect } from 'react';
import FamilyConnect from './FamilyConnect';


function FamilyConnectList() {
    const [familyPosts, setFamilyPosts] = useState([]);
    const fetchData = async () => {
        try {
        const response = await fetch("http://127.0.0.1:8000/posts");
        const data = await response.json();
        console.log(data.data)
        setFamilyPosts(data.data);
        } catch (error) {
        console.error(`Error fetching family posts: ${error}`);
        }
  };

    useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
{familyPosts.map((post)=>{
        console.log(post)
return < FamilyConnect key={post.id} post={post} />
    })}
    </>
  )
}

export default FamilyConnectList