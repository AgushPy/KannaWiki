import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className='modal' tabIndex='-1' id="modal" aria-labelledby="modalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>

          <div className='modal-header'>
            <h5 className='modal-title' id='modalLabel'>Modal</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>

          <div className='modal-body'>
            {children}
          </div>

          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            <button type='button' className='btn btn-primary'>Save changes</button>
          </div>

        </div>
      </div>
		</div>
  );
}

export default Modal;