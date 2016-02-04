var React = require('react-native');
var {
    StyleSheet,
    Navigator
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');

var ROUTES = {
    signin: Signin,
    signup: Signup,
    tweets: Tweets
};

module.exports = React.createClass({
    componentWillMount: function() {
        Parse.initialize("epHqnJOxMHEKGloGBgZCpn6SIKHdxX5q97a5iVMj", "uZXxWDuXj9msgTzSQAtPKYmWnBWooKGPsU5k7Bp4");
    },
    renderScene: function(route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator}/>
    },
    render: function() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{name: 'signin'}}
                renderScene={this.renderScene}
                configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
                />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
