import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

class NavigationDrawer extends React.Component {

  static defaultProps = {
    closeOnOutclick: true,
    transitionTime: 200
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.onNavigationButtonClick = this.onNavigationButtonClick.bind(this)
    this.state = {
      isOpen: false,

    }
  }

  toggle() {
    if (this.state.isOpen) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true
      })
    }
  }

  hide() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        inTransition: true
      })

      setTimeout(() => this.setState({ inTransition: false }), this.props.transitionTime);
    }
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
        const backdropNode = ReactDOM.findDOMNode(this.refs.backdrop)

        if (!node.contains(e.target) || e.target === backdropNode) {
          this.hide()
        }
      } catch(err){
        document.removeEventListener('click', this.handleDocumentClick)
      }
    }
  }

  onNavigationButtonClick() {
    this.toggle()
  }

  get className() {
    const { light, right } = this.props
    const { isOpen, inTransition } = this.state

    return cx({
      'nav-drawer': true,
      'nav-drawer-right': right,
      'nav-drawer-light': !!light,
      'open': isOpen,
      'hiding': !isOpen && inTransition
    })
  }

  render() {
    const { children } = this.props

    return (
      <div className={ this.className }>
        { children }
        <div ref="backdrop" className="nav-drawer-backdrop" />
      </div>
    );
  }
}

export default NavigationDrawer
