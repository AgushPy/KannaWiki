import { Member } from '@models/member.model';
import React, { FC, JSXElementConstructor, ReactElement } from 'react';

interface props {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  modalId: string;
}

const ModalContainer:FC<props> = (props) => {
  return (
    <div className='modal' tabIndex={-1} id={props.modalId} aria-labelledby='modalLabel' aria-hidden='true' data-bs-backdrop='static' data-bs-keyboard='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>

          <div className='modal-header'>
            <h5 className='modal-title' id='modalLabel'>Modal</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>

          <div className='modal-body'>
            {props.children}
          </div>

          {/* <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            <button type='button' className='btn btn-primary'>Save changes</button>
          </div> */}

        </div>
      </div>
		</div>
  );
}

export default ModalContainer;