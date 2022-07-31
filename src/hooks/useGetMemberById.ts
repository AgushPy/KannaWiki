const API = process.env.API;
import { Member } from '../models/member.model';

const useGetMemberById = async (id: number) => {
  // let member: Member = new Member();
  let member;
  const api = `${API}/miembro/${id}`;
  await fetch(api)
  .then(resp => resp.json())
  .then(resp => member = resp)
  .catch(e => console.error(e));

  return member;
}


export default useGetMemberById;