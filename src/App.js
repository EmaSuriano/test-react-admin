// in App.js
import React, { Component } from 'react';
import buildGraphcoolProvider from './adapter';
import { Admin, Resource } from 'react-admin';

import UserActions from './resources/User';
import PostActions from './resources/Post';

const GRAPH_COOL_API =
  'https://api.graph.cool/simple/v1/cjnhbz0dg5kut0115hzroup9o';
const HASURA_API =
  'https://hasura-hacktoberfest-app.herokuapp.com/v1alpha1/graphql';

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }
  componentDidMount() {
    buildGraphcoolProvider({
      clientOptions: {
        uri: HASURA_API,
      },
    }).then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="user" {...UserActions} />
        {/* <Resource name="Post" {...PostActions} /> */}
      </Admin>
    );
  }
}

export default App;
