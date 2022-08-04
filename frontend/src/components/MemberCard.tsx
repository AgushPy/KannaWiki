import React, { FC } from 'react';
import '@styles/MemberCard.scss';
import { Member } from '../models/member.model';
import { NavLink } from 'react-router-dom';

interface props {
  member: Member;
}

const MemberCard:FC<props> = (props) => {
  const member = props.member;

  return (
    <div className='card card-width'>
      <figure className='rounded-start card-figure'>
        <img src={member.img} className='card-img g-0' alt={`Image of ${member.username}`} />
      </figure>
      <div className='card-body'>
        <h5 className='card-title'>{member.username}</h5>
        <p className='card-text'>{member.title}</p>
        <div className='text-center'>
          <NavLink to={`/member/${member.id}`} className='btn btn-primary mx-auto'>View Profile</NavLink>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;