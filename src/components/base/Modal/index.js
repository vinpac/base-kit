import React from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import { classNamesToObject } from '../../../utils/text-utils'
import { getScrollbarSize } from '../../../utils/dom-utils'

class Modal extends React.Component {

  static defaultProps = {
    containerNode: document.body,
    closeOnOutclick: true,
    fillScrollSpace: true,
    transitionTime: 100
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      inTransition: false
    }

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (!!this.props.open && !this.state.isOpen)
      this.toggle()
  }

  toggle(e) {
    const { containerNode, fillScrollSpace } = this.props
    let { isOpen } = this.state
    isOpen = !isOpen

    if (e && e.target) {
      try {
        const node = ReactDOM.findDOMNode(this.refs.modal)
        if (node.contains(e.target) && node !== e.target)
          return
      } catch(e) {}
    }

    const containerClassname = classNamesToObject(containerNode.className)
    containerNode.className = cx({
      ...containerClassname,
      'modal-open': isOpen
    })

    if (fillScrollSpace) {
      containerNode.style['paddingRight'] = isOpen
        ? `${getScrollbarSize()}px`
        : null
    }

    this.setState({
      isOpen: isOpen,
      inTransition: !isOpen
    })

    if (!isOpen) {
      setTimeout(() => this.setState({ inTransition: false }), this.props.transitionTime);
    }
  }

  get className() {
    const { className, large, small } = this.props
    const { isOpen, inTransition } = this.state
    return cx(
      'modal',
      {
        'modal-lg': large,
        'modal-sm': small,
        'open': isOpen,
        'closed': !isOpen && inTransition
      },
      className
    )
  }

  render() {
    const { children, closeOnOutclick } = this.props
    return (
      <div ref="modal" className={ this.className } onClick={closeOnOutclick ? this.toggle : null}>
        { children }
      </div>
    );
  }
}

export default Modal
