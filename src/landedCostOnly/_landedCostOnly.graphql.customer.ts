import { gql } from 'graphql-request';

export const landedCostOnly = gql`
  mutation fullLandedCost(
    $partyCreateWorkflowInput: [PartyCreateWorkflowInput!]!
    $itemCreateWorkflowInput: [ItemCreateWorkflowInput!]!
    $landedCostCalculateWorkflowInput: LandedCostWorkFlowInput!
    $shipmentRatingCreateWorkflowInput: ShipmentRatingCreateWorkflowInput!
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

    shipmentRatingCreateWorkflow(input: $shipmentRatingCreateWorkflowInput) {
      id
    }

    landedCostCalculateWorkflow(input: $landedCostCalculateWorkflowInput) {
      amountSubtotals {
        duties
        fees
        shipping
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
