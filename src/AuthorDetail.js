import React, { Component } from "react";
import axios from "axios";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class AuthorDetail extends Component {
  componentDidMount() {
    this.props.onFetchAuthor(this.props.match.params.authorID);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.author;
      return (
        <div className="author">
          <div>
            <h3>{author.first_name + " " + author.last_name}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={author.first_name + " " + author.last_name}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    author: state.rootauth.author,
    loading: state.rootauth.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAuthor: id => dispatch(actionCreators.fetchAuthorDetail(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetail);
