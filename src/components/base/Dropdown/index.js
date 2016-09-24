import React from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import DropdownMenu from './DropdownMenu'
import DropdownButton from './DropdownButton'

class Dropdown extends React.Component {

  static defaultProps = {
    closeOnOutclick: true,
    component: 'div',
    hasTransition: false,
    openTransitionTime: 250,
    closeTransitionTime: 250,
    transitionDelay: 15
  }

  constructor(props) {
    super(props);

    this.transitionTimeout = null;
    this.delayTimeout = null;
    this.state = {
      isOpen: !!this.props.open,
      isInTransition: !!this.props.open
    }

    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
  }

  componentDidMount() {
    if (this.props.closeOnOutclick) {
      document.addEventListener('click', this.handleDocumentClick)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick)
  }

  handleDocumentClick(e) {
    if (this.state.isOpen && e && e.target) {
      try{
        const node = ReactDOM.findDOMNode(this)
        if (!node.contains(e.target)) {
          this.close()
        }
      } catch(err){
        console.error(err)
        document.removeEventListener('click', this.handleDocumentClick)
      }

    }
  }

  toggle(e) {
    if (this.state.isOpen) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    const { hasTransition } = this.props

    if (!this.state.isOpen) {
      this.setState({
        isOpen: !hasTransition,
        isInTransition: hasTransition
      })

      if (hasTransition) {
        if (this.transitionTimeout)
          clearTimeout(this.transitionTimeout)

        if (this.delayTimeout)
          clearTimeout(this.delayTimeout)

        this.transitionTimeout = setTimeout(
          () => this.setState({ isInTransition: false }), this.props.openTransitionTime
        )
        this.delayTimeout = setTimeout(() => this.setState({ isOpen: true }), this.props.transitionDelay)
      }
    }
  }

  close() {
    const { hasTransition } = this.props

    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        isInTransition: hasTransition
      })

      if (hasTransition) {
        if (this.transitionTimeout)
          clearTimeout(this.transitionTimeout)

        this.transitionTimeout = setTimeout(
          () => this.setState({ isInTransition: false }), this.props.closeTransitionTime
        )
      }
    }
  }

  get className() {
    const { className } = this.props
    const { isOpen, isInTransition } = this.state
    return cx(
      'dropdown',
      {
        'open': isOpen,
        'in-transition': isInTransition
      },
      className
    )
  }

  render() {
    const { children, component:Component } = this.props
    return (
      <Component
        className={ this.className }
      >
        {
          React.Children.map(children, (child) => {
            if (child.type === DropdownButton) {
              return React.cloneElement(child, {
                onClick: e => e.preventDefault() | this.toggle()
              })
            }
            return child
          })
        }
      </Component>
    );
  }
}

export default Dropdown
export { DropdownButton, DropdownMenu }
