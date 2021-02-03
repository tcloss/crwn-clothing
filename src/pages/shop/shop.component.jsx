import React from 'react';
import { useParams } from 'react-router-dom';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...remainingProps}) => (
                        <CollectionPreview key={id} {...remainingProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;