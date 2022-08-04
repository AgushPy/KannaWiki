import { useState } from "react";
import { Member } from "@models/member.model";

interface state {
  memberToEdit: number;
}

const initialState: state = {
  memberToEdit: -1
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setMemberToEdit = (payload: number = -1) => {
    console.log(payload)
    setState({
      ...state,
      memberToEdit: payload
    });
  }

  return {
    state,
    setMemberToEdit,
  }
}

export default useInitialState;