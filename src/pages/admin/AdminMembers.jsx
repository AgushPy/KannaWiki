import React, { useEffect, useState } from 'react';
import MemberCardSimplified from '@components/MemberCardSimplified';
import NewMember from '@components/NewMember';
import Modal from '@containers/Modal';
import useCreateMember from '@hooks/useCreateMember';
// import useGetMemberById from '@hooks/useGetMemberById';

const AdminMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers([{
      id: 0,
      name: 'Alexis',
      discord: 'Flamersher',
      title: 'The Owner',
      birthday: new Date(),
      description: 'Is the protagonist',
      phrases: [],
      img: 'https://pbs.twimg.com/profile_images/1422966875542147072/klc4WdJJ_400x400.jpg'
    },
    {
      id: 1,
      name: 'Agustin',
      discord: 'Chopper',
      title: 'Java Dev',
      birthday: new Date(),
      description: 'A backend dev',
      phrases: [],
      img: 'https://pbs.twimg.com/profile_images/1531068908131819522/wA1TVmlp_400x400.jpg'
    },
    {
      id: 2,
      name: 'Gaston',
      discord: 'Goblin',
      title: 'The good (fictional creature)',
      birthday: new Date(),
      description: 'Multiple personality disorder',
      phrases: [],
      img: 'https://media.discordapp.net/attachments/433718894361051136/991371665294512239/unknown_4.png'
    }])//useGetAllMembers();
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Admin Panel - Members</h1>
      <div className='btn btn-group'>
        <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modal'>New User</button>
        <button className='btn btn-secondary' onClick={()=>members.map(member => console.log(useCreateMember(member)))}>Preset</button></div>
      
      
      <Modal>
        <NewMember/>
      </Modal>

      {/* <button className='btn btn-secondary' onClick={()=>useGetMemberById(2)}></button> */}
  
      <div className='cards-group'>
        {members.map(item =>
          (<MemberCardSimplified member={item} key={item.id}/>)
        )}
      </div>
    </div>
  );
}

export default AdminMembers;