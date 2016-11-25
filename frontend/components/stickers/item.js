import React from "react";
import {Link} from "react-router"

export default class Item extends React.Component {

    render() {

        const item = this.props.item;

        return (
            <div key={item.id} className="col-sm-12 col-md-4">
                <div className="panel panel-default" key={item.id}>
                    <div className="panel-heading">
                        <h4 className="panel-title">{item.id}</h4>
                    </div>
                    <div className="panel-body text-center nopadding">
                        <img src={item.images.fixed_height.url} height="200"/>
                    </div>
                </div>
            </div>
        );
    }
}