import React from 'react'
import { addCount } from '../../actions/counterActions'
import { connect } from 'react-redux'

const Counter = ({ count, onClick }) => {
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={onClick}>{ count }</button>
    </div>
  )
}

Counter.displayName = 'Counter'

function mapStateToProps(state){
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(addCount())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
