import React from 'react'


import Button from './Button'


export default ({title, children, actionButtonText, closeButtonText='Close', actionButtonOnClick=f=>f, closeButtonOnClick=f=>f}) =>
  <div>
    <div className="modal fade show" role="dialog" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-default">{title}</h6>
            <button aria-label="Close" className="close" data-dismiss="modal" type="button">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <Button onClick={actionButtonOnClick} text={actionButtonText} />
            <Button onClick={closeButtonOnClick} text={closeButtonText} />
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
  </div>

