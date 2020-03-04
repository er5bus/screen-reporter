import React from 'react'
import { TwitterPicker } from 'react-color'

import ColorIcon from './ColorIcon'

export default ({ color, onChange, label='Choose a Color' }) => {

  const [displayColorPicker, setDisplayColorPicker] = React.useState(false)

  return (
    <div>
      <div onClick={ () => setDisplayColorPicker(!displayColorPicker) } className="color-picker-label">
        <span>{label}</span> : <ColorIcon color={color} />
      </div>
      { displayColorPicker && <div className="color-picker-popover">
        <div className="color-picker-cover" onClick={ () => setDisplayColorPicker(false) } />
        <TwitterPicker color={ color } onChangeComplete={ onChange } />
      </div>
      }
    </div>
  )
}

