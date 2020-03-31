import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        <div>PostList</div>
      </div>
    )
  }
}

export default connect(
  null,
  { fetchPost }
)(PostList);