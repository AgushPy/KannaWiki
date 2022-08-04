import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetMemberById from '@hooks/useGetMemberById';
import { Member } from '../models/member.model';
import '@styles/Profile.scss';

const MemberProfile:FC = () => {
  const [member, setMember] = useState<Member>();
  const memberId: string = useParams().memberId ?? '';

  // Convert date to dd/MM/yyyy format
  const _formatDate = (birthday: Date) : string => {
    return birthday.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})
  };
  // Calculate age using birthday date
  const _calculateAge  = (birthday: Date) : number => { // birthday is a date
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    // console.log(memberId, typeof memberId)
    useGetMemberById(memberId)
      .then(
        (resp: Member) => setMember(resp)
      )
  }, []);

  return (
    <div className='container d-flex'>
      <div className='col-8 flex-grow-1'>
        <h2>{member?.username}</h2>
        <p>{member?.description}</p>
      </div>
      <div className='col-4 flex-grow-1 side'>
        <div className='side-info' style={{backgroundColor:'#777'}}>
          <figure className='side-info-figure'>
            <img className='side-info-img' src={member?.img} alt={`Image of ${member?.name}`}/>
          </figure>

          <ul className='list-group list-group-flush'>
            { // TITLE
              member?.title ?
              <li className='list-group-item grid-item'>
                <span>Title:</span>
                <span>{ member.title }</span>
              </li> : ''
            }

            { // DISCORD
              member?.discord ?
              <li className='list-group-item grid-item'>
                <span>Discord:</span>
                <span>{ member?.discord }</span>
              </li> : ''
            }
            
            { // BIRTHDAY
              member?.birthday ?
              <li className='list-group-item grid-item'>
                <span>Birthday:</span>
                <span>{ _formatDate(member.birthday) }</span>
              </li> : ''
            }
            
            { // AGE
              member?.birthday ?
              <li className='list-group-item grid-item'>
                <span>Edad:</span>
                <span>{ _calculateAge(member.birthday) }</span>
              </li> : ''
            }
          </ul>

        </div>
      </div>
    </div>
  );
}

export default MemberProfile;