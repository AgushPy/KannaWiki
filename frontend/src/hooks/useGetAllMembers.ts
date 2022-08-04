const API = process.env.API;
import { Member } from '@models/member.model';

const useGetAllMembers = async (): Promise<Member[]> => {
  let members: Member[] = [];

  const api = `${API}/miembro/lista`;
  await fetch(api)
  .then(resp => resp.json())
  .then(resp => members = resp)
  .catch(e => console.error(e));

  return members;
}

export default useGetAllMembers;