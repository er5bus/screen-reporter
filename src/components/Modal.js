import React from 'react'

import Button from './Button'
import FadeIn from 'react-fade-in'


const Modal = ({title, children, show, onClose=f=>f}) => {
  if (show) {
    return (
      <div>
        <div className="modal fade show animated fadeIn" role="dialog" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title">{title}</h6>
                <button onClick={onClose} aria-label="Close" className="close" data-dismiss="modal" type="button">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </div>
    )
  }else{
    return null
  }
}


Modal.Body = ({children}) => (
  <div className="modal-body">
    {children}
  </div>
)


Modal.Body.Footer = ({children}) => (
  <div className="modal-body-footer">
    {children}
  </div>
)


Modal.Footer = ({children}) => (
  <div className="modal-footer">
    {children}
  </div>
)

export default Modal
