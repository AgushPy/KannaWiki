const API = process.env.API;
import { Member } from '../models/member.model';

const useGetAllMembers = async () => {
  let members: Member[] = [];

  const allMembers = `${API}/miembro/lista`;
  await fetch(allMembers)
  .then(resp => resp.json())
  .then(resp => { if(resp) members.push(resp) })
  .catch(e => console.error(e));

  return members;
}

export default useGetAllMembers;