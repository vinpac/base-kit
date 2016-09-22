import React from 'react'

class SlideBody extends React.Component {
  render() {
    const { className, children, ...props } = this.props
    return (
      <div className={`slide-body ${className || ""}`} {...props}>
        { children }
      </div>
    )
  }
}

export default SlideBody
