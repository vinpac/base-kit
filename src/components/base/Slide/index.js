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

    this.previousPage = this.previousPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  previousPage() {
    const node = ReactDOM.findDOMNode(this.refs.body)
    if (node.scrollLeft !== 0 && !(this.movement && this.movement.target === 0)) {
      this.scrollTo(Math.max(0, node.scrollLeft - node.offsetWidth))
    }
  }

  nextPage() {
    const node = ReactDOM.findDOMNode(this.refs.body)
    const maxScrollLeft = node.scrollWidth - node.offsetWidth;
    if (node.scrollLeft < maxScrollLeft && !(this.movement && this.movement.target >= maxScrollLeft)) {
      this.scrollTo(Math.min(node.scrollLeft + node.offsetWidth, node.scrollWidth))
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
      }
    )
  }

  render() {
    const { children, className } = this.props
    const self = this
    return (
      <div className={`slide ${className}`}>
        {
          React.Children.map(children, (child) => {
            switch(child.type) {
              case SlideBody:
                return React.cloneElement(child, {
                  ref: 'body'
                })
              case SlidePreviousButton:
                return React.cloneElement(child, {
                  onClick: self.previousPage
                })
            case SlideNextButton:
                return React.cloneElement(child, {
                  onClick: self.nextPage
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
