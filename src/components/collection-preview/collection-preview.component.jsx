import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

const CollectionPreview = ({ id, title, items }) => (
    <div className='collection-preview'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4) 
                   .map(({id, ...remainingProps}) => (
                <CollectionItem key={id} {...remainingProps}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;