import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import AuthService from './utils/AuthService';
import AppliedRoute from './routes/AppliedRoute';
import BaseApp from "./components/Base/BaseApp";


class App extends Component {
    constructor(props) {
        super(props);
        const authService = new AuthService();
        this.state = {
            isAuthenticated: authService.loggedIn()
        };
    }

    render() {
        return (
            <div style={{backgroundColor:'#e0e0e0'}}>
                <BrowserRouter forceRefresh={true} >
                    <Switch>
                        <AppliedRoute path="/" name="BaseApp" component={BaseApp} />
                    </Switch>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;



/*  <div className="container">
                    <div id="map"></div>
                    <script>
                        {{SCRIPT}}
                    </script>
                </div>


<CardGallery itemslist={itemslist}/>
 */
