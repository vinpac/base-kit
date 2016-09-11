import React from 'react';

class SlideBody extends React.Component {
  static propTypes = {
    component: React.PropTypes.string,
  };

  render() {
    const { children } = this.props
    return (
      <div className="slide-body" {...this.props}>
        { children }
      </div>
    );
  }
}

export default SlideBody
