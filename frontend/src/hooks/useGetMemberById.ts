const API = process.env.API;
import { Member } from '../models/member.model';

const useGetMemberById = async (id: (string|number)): Promise<Member> => {
  let member: Member = {} as Member;
  const api = `${API}/miembro/${id}`;
  await fetch(api)
  .then(resp => resp.json())
  .then(resp => member = resp)
  .then(resp => member.birthday = new Date(resp.birthday))
  .catch(e => console.error(e));
  
  return member;
}


export default useGetMemberById;