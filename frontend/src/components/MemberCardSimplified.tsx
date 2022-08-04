import React, { FC, useContext } from 'react';
import '@styles/MemberCard.scss';
import { Member } from '@models/member.model';
import ModalContainer from '@containers/ModalContainer';
import NewMember from './NewMember';
import AppContext from '@context/AppContext';
import { Modal } from 'bootstrap';

interface props {
  member: Member;
}

const MemberCardSimplified:FC<props> = (props) => {
  const member = props.member;
  const { setMemberToEdit } = useContext(AppContext);
  
  const toggleModal = () => {
    const modal = document.getElementById(`modal-${member.id}`);
    const myModal = modal ? new Modal(modal) : null;
    myModal?.show();
  }

  return (
    <div className='card card-simplified'>
      <figure className='rounded-start card-figure'>
        <img src={member.img} className='card-img g-0' alt={`Image of ${member.username}`} />
      </figure>
      <div className='card-body'>
        <h5 className='card-title text-center'>{member.username}</h5>
        <div>
          <button className='btn btn-primary mx-auto'
            onClick={() => {setMemberToEdit(member.id); toggleModal();}}>Edit</button>
          {
            <ModalContainer modalId={`modal-${member.id}`}>
              <NewMember memberId={member.id}/>
            </ModalContainer>
          }
          {/* <a href='#' className='btn btn-primary mx-auto'>View Profile</a> */}
        </div>
      </div>
    </div>
  );
}

export default MemberCardSimplified;