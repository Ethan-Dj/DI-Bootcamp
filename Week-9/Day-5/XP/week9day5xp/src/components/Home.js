import React from 'react'
import { connect } from 'react-redux';
import Post from './Post';
import { Link } from 'react-router-dom';

const blog = require('./blog.png')


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        { this.props.posts.length == 0? null :
          this.props.posts.map((item,index) => {
            return(
              <>
              <div key={item.id}>
                <h3>{item.title}</h3>
                <h5>{item.body}</h5>
                <img src={blog} />
                <Link to={`/post_id/${index}`}>See More</Link>
              </div>
              </>
            )
          })
          }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: dispatch.change
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
