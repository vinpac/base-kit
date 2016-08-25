import React from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import { classNamesToObject } from '../../utils/text-utils'
import { getScrollbarSize } from '../../utils/dom-utils';

export default class Modal extends React.Component {

  static defaultProps = {
    containerNode: document.body,
    closeOnOutclick: true,
    fillScrollSpace: true
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (!!this.props.open && !this.state.isOpen)
      this.toggle()
  }

  toggle(e) {
    const { containerNode, closeOnOutclick, fillScrollSpace } = this.props
    let { isOpen } = this.state
    isOpen = !isOpen

    if (closeOnOutclick && e && e.target) {
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
      isOpen: isOpen
    })
  }

  get className() {
    const { className } = this.props
    const { isOpen } = this.state
    return cx(
      'modal',
      {
        'open': isOpen
      },
      className
    )
  }

  render() {
    const { children } = this.props
    return (
      <div ref="modal" className={ this.className } onClick={this.toggle}>
        { children }
      </div>
    );
  }
}
