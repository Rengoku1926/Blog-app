import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${classname} ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>
  )
}
//forward referencing in react
export default Button