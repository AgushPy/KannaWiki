import React, { FC, useEffect, useState } from 'react';
import MemberCard from '@components/MemberCard';
import useGetAllMembers from '@hooks/useGetAllMembers';
import { Member } from '../models/member.model';

const Home:FC = () => {
  const [members, setMembers] = useState([] as Member[]);

  useEffect(() => {
    useGetAllMembers()
      .then(
        (resp: Member[]) => setMembers(resp)
      )
  }, []);

  return (
    <div>
      <h1 className='text-center'>This is the home</h1>
      <div className='cards-group'>
        {members.map((item: Member) =>
          (<MemberCard member={item} key={item.id}/>)
        )}
      </div>
    </div>
  );
}

export default Home;