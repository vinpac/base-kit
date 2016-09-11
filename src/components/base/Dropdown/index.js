import React from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import DropdownButton from './DropdownButton'

export default class Dropdown extends React.Component {

  static defaultProps = {
    closeOnOutclick: true,
    component: 'div'
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: !!this.props.open
    }

    this.toggle = this.toggle.bind(this);
    this.onDropdownButtonClick = this.onDropdownButtonClick.bind(this);
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
    if (e && e.target) {
      try{
        const node = ReactDOM.findDOMNode(this)
        if (!node.contains(e.target)) {
          this.hide()
        }
      } catch(err){
        console.error(err)
        document.removeEventListener('click', this.handleDocumentClick)
      }

    }
  }

  toggle(e) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  hide() {
    this.setState({
      isOpen: false
    })
  }

  get className() {
    const { className } = this.props
    const { isOpen } = this.state
    return cx(
      'dropdown',
      {
        'open': isOpen
      },
      className
    )
  }

  onDropdownButtonClick(e) {
    e.preventDefault();
    this.toggle();
  }

  render() {
    const { children } = this.props
    return (
      <this.props.component
        className={ this.className }
      >
        {
          React.Children.map(children, (child) => {
            if (child.type === DropdownButton) {
              return React.cloneElement(child, {
                onClick: this.onDropdownButtonClick
              })
            }
            return child
          })
        }
      </this.props.component>
    );
  }
}
