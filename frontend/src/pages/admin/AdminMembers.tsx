import React, { FC, useContext, useEffect, useState } from 'react';
import MemberCardSimplified from '@components/MemberCardSimplified';
import { Member } from '@models/member.model';
import useGetAllMembers from '@hooks/useGetAllMembers';
import AppContext from '@context/AppContext';

const AdminMembers:FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const { setMemberToEdit } = useContext(AppContext);

  useEffect(() => {
    useGetAllMembers()
      .then(
        resp => setMembers(resp)
      )
  }, []);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Admin Panel - Members</h1>
      <div className='btn btn-group'>
        {/* <button className='btn btn-primary' onClick={() => {setMemberToEdit(-1), useToggleModal()}}>New User</button> */}
        {/* <button className='btn btn-secondary' onClick={useToggleModal}>Preset</button> */}
      </div>
      
      <div className='cards-group'>
        {members.map((item: Member) =>
          (<MemberCardSimplified member={item} key={item.id} />)
        )}
      </div>
    </div>
  );
}

export default AdminMembers;