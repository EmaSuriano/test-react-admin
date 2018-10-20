// in App.js
import React, { Component } from 'react';
import buildGraphcoolProvider from './adapter';
import { Admin, Resource } from 'react-admin';

import UserActions from './resources/User';
import PostActions from './resources/Post';

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }
  componentDidMount() {
    buildGraphcoolProvider({
      clientOptions: {
        uri: 'https://api.graph.cool/simple/v1/cjnhbz0dg5kut0115hzroup9o',
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
        <Resource name="User" {...UserActions} />
        <Resource name="Post" {...PostActions} />
      </Admin>
    );
  }
}

export default App;
