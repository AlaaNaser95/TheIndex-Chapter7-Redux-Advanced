import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.props.onFetchAllAuthors();
  }

  getView() {
    if (this.props.loading) {
      <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route
            path="/authors/"
            render={props => (
              <AuthorsList authors={this.props.authors} {...props} />
            )}
          />
        </Switch>
      );
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootauths.authors,
    loading: state.rootauths.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAllAuthors: () => dispatch(actionCreators.fetchAuthors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
