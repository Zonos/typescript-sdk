import { gql } from 'graphql-request';

export const catalogItem = gql`
  query catalogItem($id: ID, $productId: String, $sku: String) {
    catalogItem(id: $id, productId: $productId, sku: $sku) {
      attributes {
        key
        value
      }
      brand
      catalogItemReferences {
        catalogItem {
          attributes {
            key
            value
          }
          brand
          catalogItemUrl
          countryOfOrigin
          createdAt
          description
          hsCode
          hsCodes {
            hsCode
          }
          id
          itemType
          material
          measurements {
            source
            type
            unitOfMeasure
            value
          }
          metadata {
            key
            value
          }
          productId
          restrictedCountries
          sku
          updatedAt
        }
        priceRatio
      }
      catalogItemUrl
      countryOfOrigin
      description
      hsCode
      hsCodes {
        hsCode
      }
      id
      itemType
      material
      measurements {
        source
        type
        unitOfMeasure
        value
      }
      metadata {
        key
        value
      }
      packingPreference
      productId
      restrictedCountries
      sku
    }
  }
`;
