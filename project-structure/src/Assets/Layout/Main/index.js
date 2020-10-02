import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../../Components/Auth/Login';
import PrivateRoute from '../../../Components/Auth/PrivateRoute/index';
import Home from '../../../Pages/Home/index';
import Products from '../../../Pages/Products/index';
import ProductDetail from '../../../Components/NewsestBread/ProductDetail/index';
import Kontakt from '../../../Pages/Kontakt/index';
import CreateLogin from '../../../Components/Auth/CreateLogin/index';
import AdminNav from '../../../Components/Auth/AdminNav/index';
import EditProfile from '../../../Components/Auth/EditProfil';
import { LoggedInContext } from '../../../Context/LoggedInContext';
import ManageProducts from '../../../Components/Auth/Manage/Products/index';
import ManageNews from '../../../Components/Auth/Manage/News/index';
import CreateNews from '../../../Components/Auth/Manage/News/CreateNews';
import EditNews from '../../../Components/Auth/Manage/News/EditNews';
import CreateProducts from '../../../Components/Auth/Manage/Products/CreateProducts';
import EditProducts from '../../../Components/Auth/Manage/Products/EditProducts';
import AddIngredienser from '../../../Components/Auth/Manage/Products/AddIngredienser';
import ConfirmLetter from '../../../Components/NewsLetter/ConfirmLetter';

const Main = () => {
  const [loggedin] = useContext(LoggedInContext);

  useEffect(() => {
    if (loggedin === false) {
      localStorage.removeItem('user');
    }
  }, [loggedin]);

  return (
    <main>
      <Switch>
        {/* <Route exact path="/" component={Front} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/login/create" component={CreateLogin} />
        <Route path="/login" component={Login} />
        <Route exact path="/produkter/:productId" component={ProductDetail} />
        <Route exact path="/produkter" component={Products} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/nyhedsbrev/bekræftigelse" component={ConfirmLetter} />
        <PrivateRoute exact path="/admin/edit/profil" component={EditProfile} />
        <PrivateRoute
          exact
          path="/admin/manage/produkter"
          component={ManageProducts}
        />
        <PrivateRoute
          exact
          path="/admin/create/produkter"
          component={CreateProducts}
        />
        <PrivateRoute
          exact
          path="/admin/manage/produkter/:productId"
          component={EditProducts}
        />
        <PrivateRoute
          exact
          path="/admin/manage/produkter/ingredienser/:productId"
          component={AddIngredienser}
        />
        <PrivateRoute
          exact
          path="/admin/manage/nyheder"
          component={ManageNews}
        />
        <PrivateRoute exact path="/admin/create/nyhed" component={CreateNews} />
        <PrivateRoute
          exact
          path="/admin/manage/nyhed/:newsId"
          component={EditNews}
        />
        <PrivateRoute exact path="/admin" component={AdminNav} />
      </Switch>
    </main>
  );
};

export default Main;
