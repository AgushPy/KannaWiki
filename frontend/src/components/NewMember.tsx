import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Member } from '@models/member.model';
import useGetMemberById from '@hooks/useGetMemberById';

interface props {
  memberId: number;
}

const NewMember:FC<props> = (props) => {
  const [member, setMember] = useState<Member>({} as Member);
  const memberForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    useGetMemberById(props.memberId)
      .then(
        resp => setMember(resp)
      )
      .catch(
        err => console.error(err)
      );
  }, []);

  const newMember = () => {
    if (!memberForm.current) return;
    const formData = new FormData(memberForm.current);
    const data = {
        username: formData.get('username'),
        name: formData.get('name'),
        discord: formData.get('discord') +'#'+ formData.get('discord-tag'),
        title: formData.get('title'),
        birthday: formData.get('birthday'),
        nationality: formData.get('nationality'),
        description: formData.get('description'),
        img: formData.get('img'),
    };

    console.log(data);
  }

  return (
    <div>
      <form action='' className="text-center" ref={memberForm}>

        <div className="form-floating mb-3">
          <input className='form-control' name='name' defaultValue={member.name}/>
          <label className="form-label" htmlFor="name">Name:</label>
        </div>

        <div className="form-floating mb-3">
          <input className='form-control' name='username' defaultValue={member.username}/>
          <label className="form-label" htmlFor="username">Username:</label>
        </div>

        <div className="input-group mb-3">
          <div className="form-floating flex-grow-1">
            <input className='form-control' name='discord'
              defaultValue={member.discord?.slice(0, member.discord.indexOf('#'))}/>
            <label className="form-label" htmlFor="discord">Discord:</label>
          </div>
            <span className="input-group-text">#</span>
            <input className='form-control' type='number' name='discord-tag' placeholder="9999" min="0000" max="9999" minLength={4} maxLength={4}
              defaultValue={member.discord?.slice(member.discord.indexOf('#')+1)}/>
        </div>

        <div className="form-floating mb-3">
          <input className='form-control' name='title' defaultValue={member.title}/>
          <label className="form-label" htmlFor="title">Title:</label>
        </div>

        <div className="form-floating mb-3">
          <textarea className='form-control' name='description' defaultValue={member.description}/>
          <label className="form-label" htmlFor="description">Description:</label>
        </div>

        {/* <div className="input-group mb-3">
          <div className="form-floating flex-grow-1">
            <input className='form-control' name="day" type='number' min="1" max="31" minLength={2} maxLength={2} />
            <label className="form-label" htmlFor="day">Day:</label>
          </div>
          <div className="form-floating flex-grow-1">
            <select className="form-select" name="month">
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <label className="form-label" htmlFor="month">Month:</label>
          </div>
          <div className="form-floating flex-grow-1">
            <input className='form-control' name="year" type='number' min="1950" max="2050" minLength={4} maxLength={4} />
            <label className="form-label" htmlFor="year">Year:</label>
          </div>
        </div> */}
        <div className="form-floating mb-3">
          <input className='form-control' name='birthday' type='date' defaultValue={member.birthday?.toISOString().substring(0,10)}/>
          <label className="form-label" htmlFor="birthday">Birthday:</label>
        </div>

        <div className="form-floating mb-3">
          <input className='form-control' name='nationality' defaultValue={member.nationality}/>
          <label className="form-label" htmlFor="nationality">Nationality:</label>
        </div>

        <div className="form-floating">
          <input className='form-control' name='img' type='url' defaultValue={member.img}/>
          <label className="form-label" htmlFor="img">Image URL:</label>
        </div>

        <button type='button' className='btn btn-primary mt-3' onClick={newMember}>Save changes</button>
      </form>

    </div>
  );
}

export default NewMember;