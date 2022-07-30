import React from 'react';
import '@styles/MemberCard.scss';

const MemberCardSimplified = ({member}) => {
  return (
    <div className='card card-simplified'>
      <figure className='rounded-start card-figure'>
        <img src={member.img} className='card-img g-0' alt={`Image of ${member.name}`} />
      </figure>
      <div className='card-body'>
        <h5 className='card-title'>{member.discord}</h5>
        <div>
          <a href='#' className='btn btn-primary mx-auto'>View Profile</a>
        </div>
      </div>
    </div>
  );
}

export default MemberCardSimplified;