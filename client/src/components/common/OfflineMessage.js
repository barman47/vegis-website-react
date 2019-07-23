import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { handleNetworkChange } from '../../actions/networkActions';

class OfflineMessage extends Component {
    constructor () {
        super();
        this.state = {
            network: null
        };
    }

    componentDidMount () {
        if (navigator.onLine){
            this.props.handleNetworkChange('online');  
        } else {
            this.props.handleNetworkChange('offline');
        }
        window.addEventListener('online', this.handleNetworkChange);
        window.addEventListener('offline', this.handleNetworkChange);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.network === false) {
            this.setState({
                network: false
            });
        }

        if (nextProps.network === true) {
            this.setState({
                network: true
            });
        }
    }

    handleNetworkChange = (e) => {
        switch (e.type) {
            case 'online':
                this.setState({
                    network: true
                });
                document.querySelectorAll('.btn').forEach(button => {
                    button.removeAttribute('disabled');
                });
                this.props.handleNetworkChange('online');
                break;

            case 'offline':
                this.setState({
                    network: false
                });
                document.querySelectorAll('.btn').forEach(button => {
                    button.setAttribute('disabled', '');
                });
                this.props.handleNetworkChange('offline');
                break;

            default: 
                break;
        }
    }

    render () {
        return (
            this.state.network
            ?
            null
            : 
            (
                <div className="offline-message">
                    <span className="mdi mdi-access-point-network-off network-signal"></span>
                    <span>No Internet Connection</span>
                </div>
            )
        );
    }
}

OfflineMessage.propTypes = {
    handleNetworkChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    network: state.network
});

export default connect(mapStateToProps, { handleNetworkChange })(OfflineMessage);