import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props =>
                    (<CollectionOverviewContainer {...props}/>)} />
                <Route path={`${match.path}/:collectionId`} render={props =>
                    (<CollectionPageContainer {...props}/>)} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart ())
})

export default connect(null,mapDispatchToProps)(ShopPage);