const API = process.env.API;
import { Member } from '../models/member.model';
import Axios from 'axios'

const useCreateMember = async (member: Member) => {
  Axios.post(`${API}/miembro/crear`, member)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });
}

export default useCreateMember;