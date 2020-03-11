import React from 'react'

import Text from './Text'
import Button from './Button'
import Modal from './Modal'


export default ({ onClose, show, onLogout }) => (
  <Modal title="Logout" show={show} onClose={onClose}>
    <Modal.Body>
      <Text align="center" text="Are you sure you want to logout ?" />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onLogout} text="Logout" style="danger" type="button" />
      <Button onClick={onClose} text="Close" style="info" type="button" />
    </Modal.Footer>
  </Modal>
)
