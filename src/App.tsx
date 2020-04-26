import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/home";
import StockEdit from "./component/stock/stock-edit";
import ProfileEdit from "./component/profile/profile-edit";
import StockAdd from "./component/stock/stock-add";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
export default function App() {
  return (
    <Router>
      <Layout className="container no-gutters blue">
        <Header>HEADER</Header>
        <hr />
        <div className="content container no-gutters">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stocks/:id">
              <StockEdit />
            </Route>
            <Route path="/profiles/:id">
              <ProfileEdit />
            </Route>

            <Route path="/stock-add">
              <StockAdd />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Layout>
    </Router>
  );
}
