import React, { Component } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

class StoreItem extends Component {
    componentDidMount () {
        var elems = document.querySelectorAll('.materialboxed');
        // eslint-disable-next-line
        var instances = M.Materialbox.init(elems);
    }
    render (src, alt, itemName, dataCaption ) {
        return (
            <div className="col s12 m6 l3">
                <div className="card medium hoverable">
                    <div className="card-image">
                        <img className="responsive-img materialboxed" 
                            src={this.props.src} 
                            alt={this.props.alt} 
                            data-caption={this.props.dataCaption} />
                    </div>
                    <div className="card-action center">
                        <span>{this.props.itemName}</span>
                    </div>
                </div>
        </div>
        );
    }
}

StoreItem.propType = ({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired
});

export default StoreItem;