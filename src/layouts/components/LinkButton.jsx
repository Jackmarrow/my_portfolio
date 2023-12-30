import React from 'react'
import './LinkButton.scss';

const LinkButton = ({children}) => {
  return (
    <button type="button" className="link-btn">
        {children}
    </button>
  )
}

export default LinkButton