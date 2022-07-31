import React, { useEffect, useState } from 'react';
import useGetAllMembers from '@hooks/useGetAllMembers';
import MemberCard from '@components/MemberCard';

const Home = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    useGetAllMembers()
      .then(
        resp => setMembers(resp)
      )
  }, []);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>This is the home</h1>
      <div className='cards-group'>
        {members.map(item =>
          (<MemberCard member={item} key={item.id}/>)
        )}
      </div>
    </div>
  );
}

export default Home;