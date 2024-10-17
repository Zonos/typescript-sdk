import { gql } from 'graphql-request';

export const fullLandedCost = gql`
  mutation fullLandedCost(
    $itemCreateWorkflowInput: [ItemCreateWorkflowInput!]!
    $landedCostCalculateWorkflowInput: LandedCostWorkFlowInput!
    $partyCreateWorkflowInput: [PartyCreateWorkflowInput!]!
  ) {
    partyCreateWorkflow(input: $partyCreateWorkflowInput) {
      id
      location {
        administrativeArea
        administrativeAreaCode
        countryCode
        line1
        locality
        postalCode
      }
      type
    }

    itemCreateWorkflow(input: $itemCreateWorkflowInput) {
      amount
      countryOfOrigin
      description
      hsCode
      id
      productId
      quantity
      restriction {
        id
      }
    }

    cartonizeWorkflow {
      id
    }

    shipmentRatingCalculateWorkflow {
      id
    }

    landedCostCalculateWorkflow(input: $landedCostCalculateWorkflowInput) {
      amountSubtotals {
        duties
        fees
        shipping
        landedCostTotal
        items
        taxes
      }
      currencyCode
      deMinimis {
        threshold
        type
      }
      id
      method
      remittance {
        amount
      }
      rootId
      shipmentRating {
        displayName
        id
        maxTransitAt
        minTransitAt
        shippingProfile {
          customServiceLevelCode
          landedCostMethod
        }
      }
    }
  }
`;
