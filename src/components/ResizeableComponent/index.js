import React from 'react'

export default class ResizeableComponent extends React.Component {
    componentWillMount() {
        var mql = window.matchMedia(`(min-width: 1000px)`);
        mql.addListener(this.mediaQueryChanged.bind(this));
        this.setState({mql: mql, small: !mql.matches});
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({small: !this.state.mql.matches});
    }

}
