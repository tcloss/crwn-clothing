import { createSelector } from 'reselect';

const selectShop = state =>  state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop
);


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.values(collections)
);

export const selectCollection = collectionId => createSelector(
    [selectShop],
    collections => collections[collectionId]
);
