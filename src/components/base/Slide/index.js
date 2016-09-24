import React from 'react';
import ReactDOM from 'react-dom'
import SmoothMovement from '../../../utils/SmoothMovement'
import SlideBody from './SlideBody'
import SlidePreviousButton from './SlidePreviousButton'
import SlideNextButton from './SlideNextButton'

class Slide extends React.Component {

  static defaultProps = {
    duration: 10
  }

  constructor(props) {
    super(props);

    this.movement = null;
    this.state = { onCorner: 'left' }

    this.previousPage = this.previousPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.syncCornerState = this.syncCornerState.bind(this)
  }

  previousPage() {
    const node = ReactDOM.findDOMNode(this.refs.body)
    this.syncCornerState(node, 'left')
    if (node.scrollLeft !== 0 && !(this.movement && this.movement.target === 0)) {
      this.scrollTo(Math.max(0, node.scrollLeft - node.offsetWidth))
    }
  }

  nextPage() {
    const node = ReactDOM.findDOMNode(this.refs.body)
    const maxScrollLeft = node.scrollWidth - node.offsetWidth;
    this.syncCornerState(node, 'right')
    if (node.scrollLeft < maxScrollLeft && !(this.movement && this.movement.target >= maxScrollLeft)) {
      this.scrollTo(Math.min(node.scrollLeft + node.offsetWidth, node.scrollWidth - node.offsetWidth))
    }
  }

  syncCornerState(node, goingTo=null) {
    const { onCorner } = this.state;
    if (node.scrollLeft === 0 && goingTo !== 'right') {
      if (onCorner !== 'left') {
        this.setState({ onCorner: 'left' })
      }
    } else if( node.scrollLeft === node.scrollWidth - node.offsetWidth  && goingTo !== 'left') {
      if (onCorner !== 'right') {
        this.setState({ onCorner: 'right' })
      }
    } else if( onCorner !== null) {
      this.setState({ onCorner: null })
    }
  }

  scrollTo(position) {
    const { duration } = this.props;
    const node = ReactDOM.findDOMNode(this.refs.body)
    const self = this
    let velocity = 0

    if (this.movement){
      this.movement.stop()
      velocity = this.movement.velocity
    }

    this.movement = new SmoothMovement(node.scrollLeft, position, velocity);
    this.movement.animate(duration,
      left => {
        node.scrollLeft = left
      },
      movement => {
        self.movement = null
        self.syncCornerState(node)
      }
    )
  }

  render() {
    const { children, className } = this.props
    const { onCorner } = this.state
    const self = this
    return (
      <div className={`slide ${className || ""}`}>
        {
          React.Children.map(children, (child) => {
            switch(child.type) {
              case SlideBody:
                return React.cloneElement(child, {
                  ref: 'body'
                })
              case SlidePreviousButton:
                return React.cloneElement(child, {
                  onClick: self.previousPage,
                  reachedCorner: onCorner === 'left'
                })
            case SlideNextButton:
                return React.cloneElement(child, {
                  onClick: self.nextPage,
                  reachedCorner: onCorner === 'right'
                })
              default:
                return child
            }
          })
        }
      </div>
    );
  }
}


export default Slide
export { SlideBody, SlideNextButton, SlidePreviousButton }
