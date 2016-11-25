import React from "react"
import "whatwg-fetch";

import Item from "./item";

export default class Index extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        }
    };

    componentDidMount() {
        this.fetchStickers();
    }

    componentDidUpdate(prevProps) {
        let oldType = prevProps.params.type;
        let newType = this.props.params.type;
        if (newType !== oldType) {
            this.fetchStickers()
        }
    }

    fetchStickers() {
        fetch("http://localhost:3010/api/stickers/" + this.props.params.type)
            .then(response => response.json()).then(response => {
                if (response.error) {
                    console.error("stickers/index", response.error);
                } else {
                    this.setState({
                        items: response.data
                    });
                }
        }).catch(function(ex) {
            console.error("stickers/index", ex);
        });
    }

    render() {

        let items = this.state.items.map((item, index) => {
            return (
                <Item key={index} item={item} />
            );
        });

        return (
            <div>
                <section className="container">
                    <div className="row">
                        {items}
                    </div>
                </section>
            </div>
        );
    }
}