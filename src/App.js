import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
