import React, { Component } from "react";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

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
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
