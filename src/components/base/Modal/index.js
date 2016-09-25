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
    hasTransition: true,
    openTransitionTime: 250,
    closeTransitionTime: 250,
    transitionDelay: 15
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      inTransition: false
    }

    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onBackdropClick = this.onBackdropClick.bind(this);
    this.fillContainerScrollbar = this.fillContainerScrollbar.bind(this)
  }

  componentDidMount() {
    if (!!this.props.open && !this.state.isOpen)
      this.toggle()
  }

  toggle() {
    if (this.state.isOpen) {
      this.close()
    } else {
      this.open()
    }
  }

  fillContainerScrollbar(forceState) {
    let isOpen = forceState !== undefined ? forceState : this.state.isOpen
    const { containerNode } = this.props
    const containerClassname = classNamesToObject(containerNode.className)

    containerNode.className = cx({
      ...containerClassname,
      'modal-open': isOpen
    })

    containerNode.style['paddingRight'] = isOpen
      ? `${getScrollbarSize()}px`
      : null
  }

  open() {
    const { hasTransition, fillScrollSpace, openTransitionTime, transitionDelay } = this.props

    if (!this.state.isOpen) {
      this.setState({
        isOpen: !hasTransition,
        inTransition: hasTransition
      })

      if (fillScrollSpace) {
        this.fillContainerScrollbar(true)
      }

      if (hasTransition) {
        if (this.transitionTimeout)
          clearTimeout(this.transitionTimeout)

        if (this.delayTimeout)
          clearTimeout(this.delayTimeout)

        this.transitionTimeout = setTimeout(
          () => this.setState({ inTransition: false }), openTransitionTime
        )
        this.delayTimeout = setTimeout(() => this.setState({ isOpen: true }), transitionDelay)
      }
    }
  }

  close() {
    const { hasTransition, fillScrollSpace } = this.props

    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        inTransition: hasTransition
      })

      if (fillScrollSpace) {
        this.fillContainerScrollbar(false)
      }

      if (hasTransition) {
        if (this.transitionTimeout)
          clearTimeout(this.transitionTimeout)

        this.transitionTimeout = setTimeout(
          () => this.setState({ inTransition: false }), this.props.closeTransitionTime
        )
      }
    }
  }

  onBackdropClick(e) {
    if (e && e.target && this.state.isOpen) {
      try {
        const node = ReactDOM.findDOMNode(this.refs.modal)

        if (!node.contains(e.target) || node === e.target) {
          this.close()
        }
      } catch(e) {}
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
        'closed': !isOpen && inTransition,
        'in-transition': inTransition
      },
      className
    )
  }

  render() {
    const { children, closeOnOutclick } = this.props
    return (
      <div ref="modal" className={ this.className } onClick={closeOnOutclick ? this.onBackdropClick : null}>
        { children }
      </div>
    );
  }
}

export default Modal
