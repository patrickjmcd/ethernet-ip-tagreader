
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './components/Main';
import Settings from './components/Settings';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="root">
                <Scene 
                    key="main" 
                    component={Main} 
                    title="Tag Values" 
                    initial 
                    rightTitle="Settings"
                    onRight={() => Actions.settings()}
                />
                <Scene key="settings" component={Settings} title="Settings" />
            </Scene>
            
        </Router>
    );
};

export default RouterComponent;
