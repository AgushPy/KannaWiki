import React, { useEffect, useState } from 'react';
import useGetAllMembers from '@hooks/useGetAllMembers';
import MemberCard from '../components/MemberCard';

const Home = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers([{
      id: 0,
      name: 'Alexis',
      discord: 'Flamersher',
      title: 'The Owner',
      birthday: '27/08/2002',
      description: 'Is the protagonist',
      phrases: [],
      img: 'https://pbs.twimg.com/profile_images/1422966875542147072/klc4WdJJ_400x400.jpg'
    },
    {
      id: 1,
      name: 'Agustin',
      discord: 'Chopper',
      title: 'Java Dev',
      birthday: '30/12/2000',
      description: 'A backend dev',
      phrases: [],
      img: 'https://pbs.twimg.com/profile_images/1531068908131819522/wA1TVmlp_400x400.jpg'
    },
    {
      id: 2,
      name: 'Gaston',
      discord: 'Goblin',
      title: 'The good (fictional creature)',
      birthday: '25/02/2003',
      description: 'Multiple personality disorder',
      phrases: [],
      img: 'https://media.discordapp.net/attachments/433718894361051136/991371665294512239/unknown_4.png'
    }])//useGetAllMembers();
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <div>
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