import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: boolean;
  DateTime: string;
  Decimal: number;
  Float: number;
  ID: string;
  Int: number;
  String: string;
  ZonedDateTime: string;
};

export type AddressMatchThreshold =
  | 'EXACT_ADMINISTRATIVE_AREA'
  | 'EXACT_COUNTRY'
  | 'EXACT_HOUSE'
  | 'EXACT_LOCALITY'
  | 'EXACT_POSTAL_CODE'
  | 'EXACT_ROAD'
  | 'EXACT_UNIT';

export type AlcoholRecipientType = 'CONSUMER' | 'LICENSEE';

export type AmountInclusiveDetail = {
  __typename?: 'AmountInclusiveDetail';
  calculated: PriceBreakdown;
  converted: Scalars['Decimal'];
  /** the details of the landed cost quote where the subtotals comes from */
  landedCostQuote: LandedCost;
  manual: Maybe<Scalars['Decimal']>;
  preferred: PriceBreakdown;
  rounded: Scalars['Decimal'];
};

export type AmountRange = {
  max?: InputMaybe<Scalars['Decimal']>;
  min?: InputMaybe<Scalars['Decimal']>;
};

/** A breakdown of the monetary amounts included in the `Order`. */
export type AmountSubtotals = {
  __typename?: 'AmountSubtotals';
  /** The subtotal of duties in an order. */
  duties: Scalars['Decimal'];
  /** The subtotal of fees in an order. */
  fees: Scalars['Decimal'];
  /** The subtotal for all the `Item`s in an order. */
  items: Scalars['Decimal'];
  /** The subtotal for the shipping fee in an order. */
  shipping: Scalars['Decimal'];
  /** The subtotal for taxes in an order. */
  taxes: Scalars['Decimal'];
  /** Variance between provided grand total and calculation. */
  variance: Scalars['Decimal'];
};

/** Represents an organization's shared theme settings which get used across Zonos Checkout, Zonos Hello, and other shopper-facing experiences. */
export type AppearanceSettings = {
  __typename?: 'AppearanceSettings';
  /** A hex color code used for providing brand accent colors across the UI */
  colorPrimary: Scalars['String'];
  /** A hex color code used for providing brand accent colors across the UI */
  colorSecondary: Scalars['String'];
  /** When the AppearanceSettings was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the AppearanceSettings */
  createdBy: Scalars['ID'];
  /** The font family used for display. Comes from Google Fonts */
  fontFamily: Scalars['String'];
  /** A unique identifier for the AppearanceSettings */
  id: Scalars['ID'];
  /** Specifies a link to your organization's logo as an external URL. If not specified, a placeholder image will be used. */
  logoUrl: Scalars['String'];
  /** Whether this AppearanceSettings is in live or test mode */
  mode: Mode;
  /** The organization this AppearanceSettings belongs to */
  organization: Scalars['ID'];
  /** Specifies what `ElementsUIStyle` should be used */
  style: ElementsUiStyle;
  /** Specifies whether to display in dark or light mode */
  theme: ElementsUiTheme;
  /** When the AppearanceSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the AppearanceSettings */
  updatedBy: Scalars['ID'];
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution: Maybe<ZonosAttribution>;
};

/** Input type for updating an existing AppearanceSettings object. */
export type AppearanceSettingsUpdateInput = {
  /** A hex color code used for providing brand accent colors across the UI */
  colorPrimary?: InputMaybe<Scalars['String']>;
  /** A hex color code used for providing brand accent colors across the UI */
  colorSecondary?: InputMaybe<Scalars['String']>;
  /** The font family used for display. Comes from Google Fonts */
  fontFamily?: InputMaybe<Scalars['String']>;
  /** Specifies a link to your organization's logo as an external URL. If not specified, a placeholder image will be used. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** Specifies what `ElementsUIStyle` should be used */
  style?: InputMaybe<ElementsUiStyle>;
  /** Specifies whether to display in dark or light mode */
  theme?: InputMaybe<ElementsUiTheme>;
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution?: InputMaybe<ZonosAttribution>;
};

export type AppliedItemRestrictions = {
  __typename?: 'AppliedItemRestrictions';
  /** Denotes the highest level of restriction matched */
  action: Maybe<ItemRestrictionAction>;
  /** Country in which the item originates. */
  countryOfOrigin: Maybe<CountryCode>;
  id: Scalars['ID'];
  /** Human readable item description */
  itemDescription: Maybe<Scalars['String']>;
  /** HS code for this item. */
  itemHsCode: Scalars['String'];
  /** External id for consumers mapping if desired */
  itemId: Maybe<Scalars['String']>;
  /** list of applicable item restrictions */
  itemRestrictions: Maybe<Array<Maybe<ItemRestriction>>>;
};

export type BatteryDetail = {
  __typename?: 'BatteryDetail';
  /** Indicates what material the battery is made of. */
  material: BatteryMaterialType;
  /** Indicates how the battery is arranged in the package. */
  packingType: BatteryPackingType;
};

export type BatteryDetailInput = {
  /** Indicates what material the battery is made of. */
  material: BatteryMaterialType;
  /** Indicates how the battery is arranged in the package. */
  packingType: BatteryPackingType;
};

export type BatteryMaterialType = 'LITHIUM_ION' | 'LITHIUM_METAL';

export type BatteryPackingType =
  /** Battery is contained inside an item in the package */
  | 'BATTERY_INSIDE_EQUIPMENT'
  /** The package only contains a battery/batteries. */
  | 'BATTERY_ONLY'
  /** Battery is packaged with the equipment and not contained in the item */
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT';

export type BillingOptionCode =
  | 'DDP_AND_DDU'
  | 'SHIPPER_ONLY'
  | 'THIRD_PARTY'
  | 'UNAVAILABLE';

export type BulkJob = {
  __typename?: 'BulkJob';
  /** The number of rows that errored out during import */
  errorCount: Maybe<Scalars['Int']>;
  /** Unsuccessful rows and their error messages */
  errorMessages: Maybe<Array<Maybe<UploadErrors>>>;
  /** The ID of the BulkJob */
  id: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** Current status of the BulkJob */
  status: Maybe<BulkJobStatus>;
  /** The total number of rows in a CSV upload */
  totalCount: Maybe<Scalars['Int']>;
  /** The number of rows that successfully were saved */
  uploadCount: Maybe<Scalars['Int']>;
};

export type BulkJobStatus =
  | 'ERROR'
  | 'FILE_SAVED'
  | 'INITIALIZED'
  | 'PROCESSING';

/**
 * A `Carrier` is a shipping provider that Zonos supports through its products and services.
 * Carriers enable the shipping of goods from one country to another based on the availability of a `ServiceLevel` to the country.
 */
export type Carrier = {
  __typename?: 'Carrier';
  /** A unique identifier tied to a Carrier. */
  code: Scalars['String'];
  /** A list of country-specific restrictions a `Carrier` should be aware of (e.g., weight, dimensions, pricing). */
  countryConstraints: Maybe<Array<CountryConstraint>>;
  /** When this Carrier was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Carrier. */
  createdBy: Scalars['ID'];
  /** The Carrier's API credentials. */
  credentials: Maybe<Array<CarrierCredential>>;
  /** A unique identifier for the Carrier. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the Carrier. */
  name: Scalars['String'];
  parties: Maybe<Array<Maybe<Party>>>;
  /** Provides a list of `ServiceLevel`s that are supported by the Carrier. */
  serviceLevels: Maybe<Array<ServiceLevel>>;
  /** When this Carrier was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Carrier. */
  updatedBy: Scalars['ID'];
};

/**
 * A `CarrierAccount` is an account number that is associated with a carrier for a given customer or group of customers.
 * Rates may vary across carrier accounts, depending on the customer and volume with the carrier.
 * Shipments cannot be created without a `carrierAccount`.
 */
export type CarrierAccount = {
  __typename?: 'CarrierAccount';
  /** A monetary amount specified by the merchant as a buffer for any additional fees. */
  additionalFee: Maybe<Scalars['Decimal']>;
  /** The `Carrier` associated with this CarrierAccount. */
  carrier: Carrier;
  /** When the CarrierAccount was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierAccount. */
  createdBy: Scalars['ID'];
  /** Where the credentials are stored. */
  credentialProvider: CredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials: Maybe<Array<Maybe<CarrierAccountCredential>>>;
  /** A unique identifier for the CarrierAccount. */
  id: Scalars['ID'];
  /** Indicates what type of integration this CarrierAccount supports either SOAP or REST. */
  integrationType: CarrierAccountIntegrationType;
  /** Specifies whether the CarrierAccount is in live or test mode. */
  mode: Mode;
  /** The `Organization` associated with the CarrierAccount. */
  organization: Scalars['ID'];
  /** Rate type for the carrier account. Either `RETAIL` or `NEGOTIATED`. */
  rateType: Maybe<CarrierAccountRateType>;
  /** Indicates whether this CarrierAccount was registered through Zonos APIs or another source */
  registrationType: CarrierAccountRegistrationType;
  /** Describes the `additionalFee` as a percentage. */
  shippingPercentIncrease: Maybe<Scalars['Decimal']>;
  /** When the CarrierAccount was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CarrierAccount. */
  updatedBy: Scalars['ID'];
};

/** Options to specify the API type to apply to the credentials. */
export type CarrierAccountApiUsage =
  /** Used when billing third party for duty and tax. */
  | 'BILL_DUTY_TAX'
  /** "Used when connecting to a Label API. */
  | 'LABEL'
  /** Used when connecting to a Rating API. */
  | 'RATING';

/** The storage of the credential value for a specific type of credential used by a carrier. */
export type CarrierAccountCredential = {
  __typename?: 'CarrierAccountCredential';
  /** The type of credential that applies to the value. */
  type: Maybe<CarrierCredentialTypeCode>;
  /** The code used as the `Credential` token. */
  value: Maybe<Scalars['String']>;
};

export type CarrierAccountIntegrationType = 'REST' | 'SOAP';

export type CarrierAccountRateType = 'NEGOTIATED' | 'RETAIL';

export type CarrierAccountRegistrationType = 'OTHER' | 'ZONOS';

export type CarrierAccountsFilter = {
  /** A carrier code to filter the list of accounts */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** ID of the `Carrier` the account is associated with */
  carrierId?: InputMaybe<Scalars['ID']>;
};

/** Carrier Connection */
export type CarrierConnection = {
  __typename?: 'CarrierConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<CarrierEdge>>>;
  /** Field pageInfo */
  pageInfo: PageInfo;
};

/** Specifies the components of the credential required to access a `Carrier`'s API. */
export type CarrierCredential = {
  __typename?: 'CarrierCredential';
  /** When this CarrierCredential was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierCredential. */
  createdBy: Scalars['ID'];
  /** Specifies whether the field is visible to a merchant. */
  display: VisibilityCode;
  /** A unique identifier for the CarrierCredential. */
  id: Scalars['ID'];
  /** The name of the CarrierCredential field as denoted by the `Carrier`. */
  label: Scalars['String'];
  /** The sequence that this credential will appear to the user. */
  sequence: Scalars['Int'];
  /** The credential type that is being updated for a `Carrier`. */
  type: CarrierCredentialTypeCode;
  /** The regex syntax that is required for the CarrierCredential field. */
  validationPattern: Maybe<Scalars['String']>;
};

export type CarrierCredentialTypeCode =
  | 'ACCESS_LICENSE_NUMBER'
  | 'ACCOUNT_NUMBER'
  | 'API_KEY'
  | 'API_PASSWORD'
  | 'API_TOKEN'
  | 'CUSTOMER_ID'
  | 'METER_NUMBER'
  | 'PAYMENT_COUNTRY_CODE'
  | 'SENDER_LOCATION'
  | 'SHIPPER_NUMBER'
  | 'SITE_ID'
  | 'USER_ID';

/** Carrier Edge */
export type CarrierEdge = {
  __typename?: 'CarrierEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Carrier>;
};

export type CarrierInvoice = Invoice &
  Node & {
    __typename?: 'CarrierInvoice';
    /** The total amount due for this invoice */
    amountDue: Scalars['Decimal'];
    /** The carrier who created this invoice */
    carrier: InvoiceCarrier;
    /** When the `carrierInvoice` was created in the system */
    createdAt: Scalars['DateTime'];
    /** User who added the invoice to the system */
    createdBy: Scalars['ID'];
    /** The currency the invoice amount is represented in */
    currencyCode: CurrencyCode;
    /** The date payment is due for this `CarrierInvoice` */
    dueDate: Scalars['DateTime'];
    /** ID prefixed with carrier_invoice_ */
    id: Scalars['ID'];
    /** The creation date of this `CarrierInvoice` by the carrier */
    invoiceDate: Scalars['DateTime'];
    /** The invoice number of this `CarrierInvoice` */
    invoiceNumber: Scalars['String'];
    /** The URL where we pull the invoice from */
    invoiceUrl: Maybe<Scalars['String']>;
    /** Paginated individual line items represented on this `CarrierInvoice` */
    lineItems: CarrierInvoiceLineItemConnection;
    /** Whether the object is in live or test */
    mode: Mode;
    /** The `Organization` this CarrierInvoice belongs to (may be null if multiple organizations are on the same invoice) */
    organization: Maybe<Organization>;
    /** The parties associated with the invoice */
    parties: Maybe<Array<CarrierInvoiceParty>>;
    /** The prefix this invoice was processed with */
    prefix: Maybe<Scalars['String']>;
    /** The status of the payment for this invoice */
    status: InvoiceStatus;
    /** Timestamp for when status changed */
    statusTransitions: Array<InvoiceStatusTransition>;
    /** When the `carrierInvoice` was updated */
    updatedAt: Scalars['DateTime'];
    /** The user that updated the `carrierInvoice` */
    updatedBy: Scalars['ID'];
  };

export type CarrierInvoiceLineItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CarrierInvoiceLineItemFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type CarrierInvoiceAccountNumberMapping = Node & {
  __typename?: 'CarrierInvoiceAccountNumberMapping';
  /** The account number given by the carrier of this CarrierInvoiceAccountNumberMapping. */
  accountNumber: Maybe<Scalars['String']>;
  /** The carrier of this CarrierInvoiceAccountNumberMapping. */
  carrier: InvoiceCarrier;
  /** The company name given by the carrier of this CarrierInvoiceAccountNumberMapping */
  companyName: Maybe<Scalars['String']>;
  /** When this CarrierInvoiceAccountNumberMapping was created. */
  createdAt: Scalars['DateTime'];
  /** User who added this CarrierInvoiceAccountNumberMapping. */
  createdBy: Scalars['ID'];
  /** The ID of this CarrierInvoiceAccountNumberMapping. */
  id: Scalars['ID'];
  /** The Zonos store ID of this CarrierInvoiceAccountNumberMapping. */
  legacyStoreId: Maybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization: Scalars['ID'];
  /** When this CarrierInvoiceAccountNumberMapping was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user that updated this CarrierInvoiceAccountNumberMapping. */
  updatedBy: Scalars['ID'];
};

/** CarrierInvoiceAccountNumberMapping Connection */
export type CarrierInvoiceAccountNumberMappingConnection = {
  __typename?: 'CarrierInvoiceAccountNumberMappingConnection';
  /** Field edges */
  edges: Array<CarrierInvoiceAccountNumberMappingEdge>;
  /** Field pageInfo */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CarrierInvoiceAccountNumberMappingCreateInput = {
  /** The account number given by the carrier of the `CarrierInvoiceAccountNumberMapping` to be created. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier of the `CarrierInvoiceAccountNumberMapping` to be created. */
  carrier: InvoiceCarrier;
  /** The company name given by the carrier of this `CarrierInvoiceAccountNumberMapping` to be created */
  companyName?: InputMaybe<Scalars['String']>;
  /** The Zonos store ID of the `CarrierInvoiceAccountNumberMapping` to be created. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization: Scalars['ID'];
};

/** CarrierInvoiceAccountNumberMapping Edge */
export type CarrierInvoiceAccountNumberMappingEdge = {
  __typename?: 'CarrierInvoiceAccountNumberMappingEdge';
  /** Field cursor */
  cursor: Scalars['String'];
  /** Field node */
  node: CarrierInvoiceAccountNumberMapping;
};

export type CarrierInvoiceAccountNumberMappingFilter = {
  /** The account number related to `CarrierInvoiceAccountNumberMapping`s. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier related to `CarrierInvoiceAccountNumberMapping`s. */
  carrier?: InputMaybe<InvoiceCarrier>;
  /** The company name given by the carrier of this CarrierInvoiceAccountNumberMapping`s */
  companyName?: InputMaybe<Scalars['String']>;
  /** The legacy store ID related to `CarrierInvoiceAccountNumberMapping`s. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
};

export type CarrierInvoiceAccountNumberMappingUpdateInput = {
  /** The account number given by the carrier of the `CarrierInvoiceAccountNumberMapping` to update. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier of the `CarrierInvoiceAccountNumberMapping` to update. */
  carrier?: InputMaybe<InvoiceCarrier>;
  /** The company name given by the carrier of this `CarrierInvoiceAccountNumberMapping` to update */
  companyName?: InputMaybe<Scalars['String']>;
  /** The ID of the `CarrierInvoiceAccountNumberMapping` object to update. */
  id: Scalars['ID'];
  /** The Zonos store ID of the `CarrierInvoiceAccountNumberMapping` to update. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization?: InputMaybe<Scalars['ID']>;
};

/** CarrierInvoice Connection */
export type CarrierInvoiceConnection = {
  __typename?: 'CarrierInvoiceConnection';
  /** Field edges */
  edges: Array<CarrierInvoiceEdge>;
  /** Field pageInfo */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CarrierInvoiceCreateInput = {
  /** The total amount due for this invoice */
  amountDue: Scalars['Decimal'];
  /** The carrier this invoice is billed from */
  carrier: InvoiceCarrier;
  /** The currency that the amounts of this invoice are represented in */
  currencyCode: CurrencyCode;
  /** The due date for the payment of this `CarrierInvoice` */
  dueDate: Scalars['DateTime'];
  /** The date this `CarrierInvoice` was created */
  invoiceDate: Scalars['DateTime'];
  /** The invoice number of this invoice */
  invoiceNumber: Scalars['String'];
  /** The URL for the invoice if available */
  invoiceUrl?: InputMaybe<Scalars['String']>;
  /** The line items contained within this invoice */
  lineItems: Array<CarrierInvoiceLineItemInput>;
  /** The ID of the `Organization` this invoice belongs to. (May be null if the invoice contains lines from multiple organizations */
  organizationId?: InputMaybe<Scalars['ID']>;
  /** the `party` details associated with the `carrierInvoice' */
  parties?: InputMaybe<Array<CarrierInvoicePartyCreateInput>>;
  /** The status of payment for this invoice */
  status: InvoiceStatus;
};

/** CarrierInvoice Edge */
export type CarrierInvoiceEdge = {
  __typename?: 'CarrierInvoiceEdge';
  /** Field cursor */
  cursor: Scalars['String'];
  /** Field node */
  node: CarrierInvoice;
};

export type CarrierInvoiceFileInfoInput = {
  /** The content type of the file being uploaded */
  contentType: Scalars['String'];
  /** The name of the file being uploaded */
  fileName: Scalars['String'];
};

export type CarrierInvoiceFilter = {
  /** The carrier that generated the invoice */
  carrier?: InputMaybe<InvoiceCarrier>;
  /** Represents a range of dates, before, or after the creation date */
  createdAtBetween?: InputMaybe<DateTimeRange>;
  /** Represents a range of dates, before, or after the due date */
  dueDateBetween?: InputMaybe<DateTimeRange>;
  /** Represents a range of dates, before, or after the invoice date */
  invoiceDateBetween?: InputMaybe<DateTimeRange>;
  /** The prefix the files for this invoice were uploaded with */
  prefix?: InputMaybe<Scalars['String']>;
  /** The status of payment for a `CarrierInvoice` */
  status?: InputMaybe<InvoiceStatus>;
};

export type CarrierInvoiceLineItem = {
  __typename?: 'CarrierInvoiceLineItem';
  /** The amount due for this invoice line */
  amount: Scalars['Decimal'];
  /** When the `carrierInvoice` was created in the system */
  createdAt: Scalars['DateTime'];
  /** User who added the invoice to the system */
  createdBy: Scalars['ID'];
  /** The currency the invoice line item amount is represented in */
  currencyCode: Maybe<CurrencyCode>;
  /** Customer number this line item applies to */
  customerNumber: Maybe<Scalars['String']>;
  /** A description of the invoice line */
  description: Maybe<Scalars['String']>;
  /** ID prefixed with carrier_invoice_line_item_ */
  id: Scalars['ID'];
  /** The individual line item charges that make up the CarrierInvoiceLineItem amount */
  lineItemCharges: Array<CarrierInvoiceLineItemCharge>;
  /** Any metadata associated with this `CarrierInvoiceLineItem` */
  metadata: Maybe<Array<Metadata>>;
  /** The parties associated with this invoice line */
  parties: Array<CarrierInvoiceParty>;
  /** The `Reconciliation` object associated with this invoice line */
  reconciliation: Maybe<Reconciliation>;
  /** The organization ID associated to this invoice line */
  reconciliationOrganization: Maybe<Scalars['ID']>;
  /** The carrier service level code for this invoice line if applicable */
  serviceLevel: Maybe<Scalars['String']>;
  /** The carrier shipment reference for this invoice line */
  shipmentReference: Maybe<Scalars['String']>;
  /** The status of this invoice line item */
  status: InvoiceStatus;
  /** The carrier tracking number for this invoice line */
  trackingNumber: Scalars['String'];
  /** When the `carrierInvoice` was updated */
  updatedAt: Scalars['DateTime'];
  /** The user that updated the `carrierInvoice` */
  updatedBy: Scalars['ID'];
  /** The weight of the CarrierInvoiceLineItem */
  weight: Maybe<Scalars['Decimal']>;
  /** The weight unit code of the weight. Required if weight is present */
  weightUnit: Maybe<WeightUnitCode>;
  /** The ID of the legacy order this `CarrierInvoiceLineItem` is associated with */
  zonosOrderNumber: Maybe<Scalars['String']>;
};

export type CarrierInvoiceLineItemBillingCreateInput = {
  /** The amount that needs to be billed to reconcile the line item */
  amount: Scalars['Decimal'];
  /** ID of the `CarrierInvoiceLineItem` this `Reconciliation` object is associated with */
  lineItemId: Scalars['ID'];
  /** Optional note about this `Reconciliation` object */
  note?: InputMaybe<Scalars['String']>;
  /** The ID of the `Order` this `Reconciliation` will apply to */
  orderId?: InputMaybe<Scalars['ID']>;
  /** The ID of the `Organization` being billed for this line item */
  organizationId: Scalars['ID'];
};

export type CarrierInvoiceLineItemCharge = {
  __typename?: 'CarrierInvoiceLineItemCharge';
  /** The amount of the line item charge */
  amount: Scalars['Decimal'];
  /** The description of the charge */
  description: Scalars['String'];
  /** The type enum associated with this invoice line */
  type: CarrierInvoiceLineItemChargeType;
};

export type CarrierInvoiceLineItemChargeInput = {
  /** The amount of the line item charge */
  amount: Scalars['Decimal'];
  /** The description of the charge */
  description: Scalars['String'];
  /** The type enum associated with this invoice line */
  type: CarrierInvoiceLineItemChargeType;
};

/** Assigned type of `CarrierInvoiceLineItemCharge` */
export type CarrierInvoiceLineItemChargeType =
  | 'DEFERMENT_FEE'
  | 'DISBURSEMENT_FEE'
  | 'DUTY_TAX_FEE'
  | 'IMPORT_DUTY'
  | 'IMPORT_TAX'
  | 'OTHER'
  | 'PROCESSING_FEE'
  | 'SHIPPING';

/** CarrierInvoiceLineItem Connection */
export type CarrierInvoiceLineItemConnection = {
  __typename?: 'CarrierInvoiceLineItemConnection';
  /** Field edges */
  edges: Array<CarrierInvoiceLineItemEdge>;
  /** Field pageInfo */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** CarrierInvoiceLineItem Edge */
export type CarrierInvoiceLineItemEdge = {
  __typename?: 'CarrierInvoiceLineItemEdge';
  /** Field cursor */
  cursor: Scalars['String'];
  /** Field node */
  node: CarrierInvoiceLineItem;
};

export type CarrierInvoiceLineItemFilter = {
  invoiceId?: InputMaybe<Scalars['ID']>;
  /** Filter matching `CarrierInvoice` records based on matching shipmentReference field */
  shipmentReference?: InputMaybe<Scalars['String']>;
  /** Filter matching `CarrierInvoice` records based on matching trackingNumber field */
  trackingNumber?: InputMaybe<Scalars['String']>;
  /** Filter matching `CarrierInvoice` records based on `CarrierInvoiceLineItemChargeType` records based on matching line items with LineItemType */
  type?: InputMaybe<CarrierInvoiceLineItemChargeType>;
};

export type CarrierInvoiceLineItemInput = {
  /** The amount due for this invoice line */
  amount: Scalars['Decimal'];
  /** The currency the invoice line item amount is represented in */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Customer number this line item applies to */
  customerNumber?: InputMaybe<Scalars['String']>;
  /** A description of the invoice line */
  description?: InputMaybe<Scalars['String']>;
  /** The individual line item charges that make up the CarrierInvoiceLineItem amount */
  lineItemCharges: Array<CarrierInvoiceLineItemChargeInput>;
  /** Any metadata associated with this `CarrierInvoiceLineItem` */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** The parties associated with this invoice line */
  parties?: InputMaybe<Array<CarrierInvoicePartyCreateInput>>;
  /** The organization ID associated to this invoice line */
  reconciliationOrganization?: InputMaybe<Scalars['ID']>;
  /** The carrier service level for this invoice line */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The carrier shipment reference for this invoice line */
  shipmentReference?: InputMaybe<Scalars['String']>;
  /** The carrier tracking number for this invoice line */
  trackingNumber: Scalars['String'];
  /** The weight of the CarrierInvoiceLineItem */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The weight unit code of the weight. Required if weight is present */
  weightUnit?: InputMaybe<WeightUnitCode>;
};

export type CarrierInvoiceLineItemReconcileInput = {
  /** ID of the `CarrierInvoiceLineItem` this `Reconciliation` object will be associated with */
  lineItemId: Scalars['ID'];
  /** Optional ID of the `Order` to reference when looking for existing billing records or transactions */
  orderId?: InputMaybe<Scalars['ID']>;
};

export type CarrierInvoiceLineItemUpdateInput = {
  /** The ID of the `CarrierInvoiceLineItem` object to update */
  id: Scalars['ID'];
  /** The ID of the legacy order this `CarrierInvoiceLineItem` is associated with */
  zonosOrderNumber?: InputMaybe<Scalars['String']>;
};

export type CarrierInvoiceLocation = {
  __typename?: 'CarrierInvoiceLocation';
  administrativeArea: Maybe<Scalars['String']>;
  administrativeAreaCode: Maybe<Scalars['String']>;
  countryCode: CountryCode;
  latitude: Maybe<Scalars['Decimal']>;
  line1: Maybe<Scalars['String']>;
  line2: Maybe<Scalars['String']>;
  line3: Maybe<Scalars['String']>;
  line4: Maybe<Scalars['String']>;
  locality: Maybe<Scalars['String']>;
  longitude: Maybe<Scalars['Decimal']>;
  plusCode: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  propertyType: Maybe<PropertyType>;
};

export type CarrierInvoiceLocationCreateInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<CountryCode>;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyType>;
};

export type CarrierInvoiceParty = {
  __typename?: 'CarrierInvoiceParty';
  createdAt: Scalars['DateTime'];
  location: Maybe<CarrierInvoiceLocation>;
  person: Maybe<CarrierInvoicePerson>;
  type: Maybe<PartyType>;
};

export type CarrierInvoicePartyCreateInput = {
  location?: InputMaybe<CarrierInvoiceLocationCreateInput>;
  person?: InputMaybe<CarrierInvoicePersonCreateInput>;
  type: PartyType;
};

export type CarrierInvoicePerson = {
  __typename?: 'CarrierInvoicePerson';
  companyName: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  mode: Mode;
  phone: Maybe<Scalars['String']>;
};

export type CarrierInvoicePersonCreateInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CarrierInvoiceProcessInput = {
  /** The carrier that the invoice was billed from */
  carrier: InvoiceCarrier;
  /** The filename of the object to process */
  fileName?: InputMaybe<Scalars['String']>;
  /** The prefix of the object(s) to process */
  prefix?: InputMaybe<Scalars['String']>;
};

export type CarrierInvoiceUpdateInput = {
  /** The ID of the `CarrierInvoice` to update */
  id: Scalars['ID'];
  /** A note regarding the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The status of the payment for this invoice */
  status: InvoiceStatus;
};

export type CarrierInvoiceUploadUrlInput = {
  /** The carrier this invoices was created by */
  carrier: InvoiceCarrier;
  /** Object containing informatino about the file being uploaded */
  fileInfo: Array<CarrierInvoiceFileInfoInput>;
  /** The ID of the `Organization` the invoice belongs to */
  organizationId?: InputMaybe<Scalars['ID']>;
};

/** A search for a specific `Carrier` or group of carriers. */
export type CarriersFilter = {
  /** A unique identifier tied to a `Carrier`. */
  code?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The humanly memorable display name for the `Carrier`. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Carton = {
  __typename?: 'Carton';
  /** The monetary amount insured for the `packingCarton` */
  amountInsured: Maybe<Scalars['Decimal']>;
  /** When this `Carton` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `Carton` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packingCarton` */
  height: Scalars['Decimal'];
  /** Carton ID, prefixed with `carton_` */
  id: Scalars['ID'];
  /** The items associated with the `packingCarton` */
  items: Maybe<Array<CartonItem>>;
  /** The numeric length of the `packingCarton` */
  length: Scalars['Decimal'];
  /** Whether the `Carton` is in test or live mode */
  mode: Mode;
  /** The name of the packaging option on the carton */
  name: Maybe<Scalars['String']>;
  /** The organization that owns the `Carton` */
  organization: Scalars['ID'];
  /**
   * The packaging option associated with the `packingCarton`
   * @deprecated source, name, and type are now on the `Carton`
   */
  packagingOption: Maybe<PackagingOption>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** Where the item is shipping from */
  shipFrom: Maybe<Location>;
  /** The order's destination (customer address) */
  shipTo: Maybe<Location>;
  /** The source of the carton size */
  source: Maybe<PackagingOptionSource>;
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
  /** When this `Carton` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `Carton`. */
  updatedBy: Scalars['ID'];
  /** The heaviness of the packingCarton, using a numeric value */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packingCarton` */
  width: Scalars['Decimal'];
};

export type CartonCreateInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<CartonCreateItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: PackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type CartonCreateItemInput = {
  /** The country of origin for the `cartonItem` */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The HS code for the `cartonItem` */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The `Item` id that will be associated with the `CartonItem`. */
  item: Scalars['ID'];
  /** The name of the `cartonItem` for use on label */
  labelName?: InputMaybe<Scalars['String']>;
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
};

export type CartonCreateWorkflowInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type?: InputMaybe<PackagingType>;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit?: InputMaybe<WeightUnitCode>;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

/** A `CartonItem` represents an item that has been assigned to be packed to a `Carton` */
export type CartonItem = {
  __typename?: 'CartonItem';
  /** The country of origin for the `cartonItem` */
  countryOfOrigin: Maybe<CountryCode>;
  /** The type of dimensional unit associated with the `cartonItem` */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `cartonItem` */
  height: Scalars['Decimal'];
  /** The HS code for the `cartonItem` */
  hsCode: Maybe<Scalars['String']>;
  /** The original item associated with `cartonItem` */
  item: Item;
  /** The name of the `cartonItem` for use on label */
  labelName: Maybe<Scalars['String']>;
  /** The numeric height of the `cartonItem` */
  length: Scalars['Decimal'];
  /** How many cartonItems are included in a given `packingCarton` */
  quantity: Scalars['Int'];
  /** The type of packaging required to pack the cartonItem */
  type: PackagingType;
  /** The numeric weight of the `cartonItem` */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `cartonItem` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `cartonItem` */
  width: Scalars['Decimal'];
};

export type CartonizeInput = {
  /** The id of the `root` that will own the carton */
  rootId: Scalars['ID'];
};

export type CartonsFilter = {
  /** Filter cartons by root id */
  rootId: Scalars['ID'];
};

/** A representation of a `CatalogItem`. */
export type CatalogItem = {
  __typename?: 'CatalogItem';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** Other `CatalogItem` attributes. */
  attributes: Maybe<Array<Maybe<ItemAttribute>>>;
  /** The marketing name associated with an item. */
  brand: Maybe<Scalars['String']>;
  /** Catalog Items that are referenced by this CatalogItem */
  catalogItemReferences: Array<CatalogItemReference>;
  /** The `CatalogItem` location. */
  catalogItemUrl: Maybe<Scalars['String']>;
  /** The classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** Country configuration for the item. */
  configurations: Maybe<Array<Maybe<CatalogItemConfiguration>>>;
  /** Where a CatalogItem is manufactured. */
  countryOfOrigin: Maybe<CountryCode>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<CurrencyCode>;
  /** The description of the item for customs */
  customsDescription: Maybe<Scalars['String']>;
  /** The `CatalogItem` full description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode: Maybe<Scalars['String']>;
  /** hsCodes overrides, country or attribute specific for the item */
  hsCodes: Maybe<Array<Maybe<CatalogItemHsCode>>>;
  /** The ID of the `CatalogItem`. */
  id: Scalars['ID'];
  /** The url of an image. */
  imageUrl: Maybe<Scalars['String']>;
  /** Country inclusive pricing for the item */
  inclusivePrices: Maybe<Array<CatalogItemInclusivePrice>>;
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ItemType>;
  /** The `CatalogItem` material composition. */
  material: Maybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements: Maybe<Array<Maybe<ItemMeasurement>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata: Maybe<Array<Maybe<ItemMetadata>>>;
  /** Whether this `Item` was created in live or test mode. */
  mode: Mode;
  /** The primary name of a `CatalogItem`. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference: Maybe<PackingPreference>;
  /** Product ID of the `CatalogItem`. */
  productId: Maybe<Scalars['String']>;
  /** Optional administrative area where this item originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries: Maybe<Array<Maybe<CountryCode>>>;
  /** SKU of this `CatalogItem`. */
  sku: Maybe<Scalars['String']>;
  /** Source of `CatalogItem`. */
  source: CatalogItemSource;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemBulkJobConnection = {
  __typename?: 'CatalogItemBulkJobConnection';
  edges: Array<CatalogItemBulkJobEdge>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type CatalogItemBulkJobEdge = {
  __typename?: 'CatalogItemBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<BulkJob>;
};

export type CatalogItemBulkJobsFilter = {
  /** Current status of the BulkJob */
  status?: InputMaybe<BulkJobStatus>;
};

export type CatalogItemConfiguration = {
  __typename?: 'CatalogItemConfiguration';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** The id of the configuration catalog item */
  id: Maybe<Scalars['Int']>;
  /** Ship to country */
  shipToCountry: Maybe<CountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemConfigurationInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: CountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemConfigurationUpdateInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** The id of the hsCode item */
  id: Scalars['Int'];
  /** Ship to country */
  shipToCountry: CountryCode;
};

export type CatalogItemConnection = {
  __typename?: 'CatalogItemConnection';
  edges: Maybe<Array<Maybe<CatalogItemEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type CatalogItemEdge = {
  __typename?: 'CatalogItemEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<CatalogItem>;
};

export type CatalogItemExportJobAction = 'EMAIL' | 'NONE';

export type CatalogItemExportJobCreateInput = {
  /** The action that should be performed when the job is finished. */
  action: CatalogItemExportJobAction;
};

export type CatalogItemFilter = {
  hasAmount?: InputMaybe<Scalars['Boolean']>;
  productId?: InputMaybe<Scalars['String']>;
  shipToCountry?: InputMaybe<CountryCode>;
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemHsCode = {
  __typename?: 'CatalogItemHsCode';
  /** The classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The HsCode of the item. */
  hsCode: Maybe<Scalars['String']>;
  /** The id of the hsCode catalog item */
  id: Maybe<Scalars['Int']>;
  /** Ship to country */
  shipToCountry: Maybe<CountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemHsCodeInput = {
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: CountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemHsCodeUpdateInput = {
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The id of the hsCode item */
  id: Scalars['Int'];
  /** Ship to country */
  shipToCountry: CountryCode;
};

export type CatalogItemInclusivePrice = {
  __typename?: 'CatalogItemInclusivePrice';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** The amount of inclusive price. */
  amountInclusive: Maybe<Scalars['Decimal']>;
  /** The details of the inclusive price. */
  amountInclusiveDetail: Maybe<AmountInclusiveDetail>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<CurrencyCode>;
  /** The exchange rate we used to convert the amounts for inclusive pricing. */
  exchangeRate: Maybe<ExchangeRate>;
  /** The id of the configuration catalog item */
  id: Maybe<Scalars['Int']>;
  /** Ship to country */
  shipToCountry: CountryCode;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

/** A representation of a `CatalogItem` to be created. */
export type CatalogItemInput = {
  /** The amount of a `CatalogItem`. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** The marketing name associated with an item. */
  brand?: InputMaybe<Scalars['String']>;
  /** Catalog items that are referenced by this CatalogItem */
  catalogItemReferences?: InputMaybe<Array<CatalogItemReferenceInput>>;
  /** The `CatalogItem` page url. */
  catalogItemUrl?: InputMaybe<Scalars['String']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** Where a `CatalogItem` is created. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** The description of the item for customs */
  customsDescription?: InputMaybe<Scalars['String']>;
  /** The primary description of a `CatalogItem`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode?: InputMaybe<Scalars['String']>;
  /** When providing a country-specific HS code the ship-to country is needed. @deprecated use `CatalogItemHsCodeInput` instead */
  hsCodeShipToCountry?: InputMaybe<CountryCode>;
  /** The url of an image. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** The `CatalogItem` material composition. */
  material?: InputMaybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** The name of a `CatalogItem`. */
  name?: InputMaybe<Scalars['String']>;
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference?: InputMaybe<PackingPreference>;
  /** Product ID of this `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `CatalogItem` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemReference = {
  __typename?: 'CatalogItemReference';
  /** The reference catalog item */
  catalogItem: CatalogItem;
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio: Maybe<Scalars['Decimal']>;
};

export type CatalogItemReferenceInput = {
  /** The reference catalog item */
  catalogItem: Scalars['ID'];
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio?: InputMaybe<Scalars['Decimal']>;
};

export type CatalogItemSource =
  | 'CLASSIFICATION'
  | 'LEGACY_MIGRATION'
  | 'USER_PROVIDED';

export type CatalogSetting = {
  __typename?: 'CatalogSetting';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  id: Scalars['ID'];
  /** determines whether inclusive price is active */
  inclusivePriceStatus: Maybe<InclusivePriceStatus>;
  /** The default currency for an organization. */
  nativeCurrency: Maybe<CurrencyCode>;
  organizationId: Scalars['ID'];
  status: CatalogStatus;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type CatalogSettingCreateInput = {
  nativeCurrency?: InputMaybe<CurrencyCode>;
  status: CatalogStatus;
};

export type CatalogSettingUpdateInput = {
  nativeCurrency?: InputMaybe<CurrencyCode>;
  status?: InputMaybe<CatalogStatus>;
};

export type CatalogStatus = 'DISABLED' | 'ENABLED';

export type Classification = {
  __typename?: 'Classification';
  /** Alternate HS codes that could apply to the item. */
  alternates: Array<ClassificationAlternate>;
  /** The category hierarchy associated with an item for classification. */
  categories: Array<Scalars['String']>;
  /** Measures the confidence in accuracy of an HS code generated by Classify. 1.0=100%. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** Configuration used in creating the `Classification`. */
  configuration: ClassificationConfiguration;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin: Maybe<CountryCode>;
  /** When this `Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Classification. */
  createdBy: Scalars['ID'];
  /** The calculated description for customs. */
  customsDescription: Maybe<Scalars['String']>;
  /** This is the full description associated with an item. */
  description: Maybe<Scalars['String']>;
  /** The HsCode object. */
  hsCode: Maybe<HsCode>;
  /** This is the status of the customer or third party provided hsCode. */
  hsCodeProvidedValidation: Array<HsCodeProvidedValidation>;
  /** A unique identifier for the Classification. */
  id: Scalars['ID'];
  /** The location of an image related to an item. */
  imageUrl: Maybe<Scalars['String']>;
  /** The manual classification associated with the classification. */
  manualClassification: Maybe<ManualClassification>;
  /** The material composition of an item for classification. */
  material: Maybe<Scalars['String']>;
  /** Whether this `Item` was created in live or test mode. */
  mode: Mode;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The `Organization` associated with the CatalogItem. */
  organization: Scalars['ID'];
  /** The id provided at time of classification input. */
  productId: Maybe<Scalars['String']>;
  /** When this `Classification` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Classification. */
  updatedBy: Scalars['ID'];
};

export type ClassificationAlternate = {
  __typename?: 'ClassificationAlternate';
  /** The probability mass associated with this subheading */
  probabilityMass: Scalars['Decimal'];
  /** The alternate subheading */
  subheadingAlternate: HsCode;
  /** The list of tariff alternates within that particular subheading */
  tariffAlternates: Array<HsCode>;
};

export type ClassificationBulkJob = {
  __typename?: 'ClassificationBulkJob';
  /** The classifications associated with a bulk job */
  classifications: Maybe<ClassificationConnection>;
  /** The list of Country Codes where we will make classifications */
  classifyToCountries: Array<CountryCode>;
  /** When this `Bulk Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Bulk Classification. */
  createdBy: Scalars['ID'];
  /** The number of rows that errored out during import */
  errorCount: Scalars['Int'];
  /** Unsuccessful rows and their error messages */
  errorMessages: Array<ClassificationUploadError>;
  /** The S3 url where classifications are stashed */
  exportUrl: Maybe<Scalars['String']>;
  /** The ID of the BulkJob */
  id: Scalars['ID'];
  /** The pre-signed url provided by AWS */
  importUrl: Maybe<Scalars['String']>;
  /** The uploaded customer created name of the bulk job usually the filename */
  name: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** The number of rows that have been successfully classified */
  processedCount: Scalars['Int'];
  /** Current status of the BulkJob */
  status: ClassificationBulkJobStatus;
  /** The total number of rows in a CSV upload multiplied by the number of countries in the request */
  totalCount: Scalars['Int'];
  /** When this `Bulk Classification` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Bulk Classification. */
  updatedBy: Scalars['ID'];
  /** The number of rows that successfully were saved */
  uploadCount: Scalars['Int'];
};

export type ClassificationBulkJobClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type ClassificationBulkJobConnection = {
  __typename?: 'ClassificationBulkJobConnection';
  edges: Array<ClassificationBulkJobEdge>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type ClassificationBulkJobEdge = {
  __typename?: 'ClassificationBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ClassificationBulkJob>;
};

export type ClassificationBulkJobStatus =
  | 'CLASSIFIED'
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ClassificationBulkJobUpdateInput = {
  /** The ID of the BulkJob */
  id: Scalars['ID'];
  /** The list of Country Codes where we will make classifications */
  status: ClassificationBulkJobStatus;
};

export type ClassificationBulkJobsFilter = {
  /** Current status of the BulkJob */
  status: ClassificationBulkJobStatus;
};

export type ClassificationCalculateInput = {
  /** The category hierarchy associated with an item for classification. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Configurations relating to how the item should be classified. */
  configuration?: InputMaybe<ClassificationConfigurationInput>;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The items physical age */
  itemAge?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for classification. */
  material?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The product id provided at time of classification input */
  productId?: InputMaybe<Scalars['String']>;
};

export type ClassificationCalculateSource =
  /** The  requesting source of the classification is external. */
  | 'EXTERNAL'
  /** The requesting source of the classification is internal. */
  | 'INTERNAL'
  /** The requesting source of the classification is legacy. */
  | 'LEGACY';

export type ClassificationConfiguration = {
  __typename?: 'ClassificationConfiguration';
  /** The group id that links a set of classifications */
  groupId: Maybe<Scalars['String']>;
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. */
  hsCodeProvided: Maybe<Scalars['String']>;
  /** How the hsCodeProvided ought to be used. */
  hsCodeProvidedTreatment: Maybe<HsCodeProvidedTreatment>;
  /** The unique key identifying the item to be classified. */
  itemKey: Maybe<Scalars['String']>;
  /** The product id provided at time of classification input */
  productId: Maybe<Scalars['String']>;
  /** The ship to countries for this `Classification`. */
  shipToCountry: Maybe<CountryCode>;
  /** The stock keeping unit of the input item this can help us connect to a catalog item */
  sku: Maybe<Scalars['String']>;
};

export type ClassificationConfigurationInput = {
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. Classifications are limited to its guidance. */
  hsCodeProvided?: InputMaybe<Scalars['String']>;
  /** How the hsCodeProvided ought to be used. */
  hsCodeProvidedTreatment?: InputMaybe<HsCodeProvidedTreatment>;
  /** Specification for which type of hsCode response is being requested */
  hsCodeType?: InputMaybe<HsCodeType>;
  /** The unique key identifying the item to be classified. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** A user provided Id to link the the classification output */
  productId?: InputMaybe<Scalars['String']>;
  /** The ship to countries for this `Classification`. */
  shipToCountries?: InputMaybe<Array<CountryCode>>;
  /** The stock keeping unit of the input item this can help us connect to a catalog item */
  sku?: InputMaybe<Scalars['String']>;
};

/** An auto-generated type for paginating through multiple `Classification`. */
export type ClassificationConnection = {
  __typename?: 'ClassificationConnection';
  /** A list of `ClassificationEdge`. */
  edges: Array<ClassificationEdge>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `Classification` items. */
  totalCount: Maybe<Scalars['Int']>;
};

/** An auto-generated type used in pagination. */
export type ClassificationEdge = {
  __typename?: 'ClassificationEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `ClassificationEdge`. */
  node: Maybe<Classification>;
};

/** Filters for `Classification` resources. */
export type ClassificationFilter = {
  /** Filter results by hsCode this property requires an exact match on the provided value. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Filter results by product id. */
  productId?: InputMaybe<Scalars['String']>;
  /** Filter results by CountryCode */
  shipToCountry?: InputMaybe<CountryCode>;
};

export type ClassificationJobLink = {
  __typename?: 'ClassificationJobLink';
  bulkJob: ClassificationBulkJob;
  classification: Classification;
};

export type ClassificationRequestField = 'CATEGORY' | 'DESCRIPTION' | 'NAME';

export type ClassificationStageUploadInput = {
  /** The list of Country Codes where we will make classifications */
  classifyToCountries?: InputMaybe<Array<CountryCode>>;
  /** The fileName of the Bulk Job */
  fileName?: InputMaybe<Scalars['String']>;
};

export type ClassificationUploadError = {
  __typename?: 'ClassificationUploadError';
  message: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['String']>;
  rowId: Maybe<Scalars['Int']>;
  sku: Maybe<Scalars['String']>;
};

export type ClassifySetting = {
  __typename?: 'ClassifySetting';
  boostedProductCategories: Array<Maybe<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
  mode: Mode;
  organization: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type ClassifySupportedData = {
  __typename?: 'ClassifySupportedData';
  /** A list of countries supported by Classify. */
  countries: Array<CountryCode>;
};

export type ClearanceType = 'COMMERCIAL' | 'POSTAL';

/** Enum value describing the type of CollectInvoiceFee */
export type CollectFeeCalculationType =
  /** Indicates a 'flat' fee amount i.e. $1.00 per invoice */
  | 'FLAT'
  /** Indicates a 'percent' based fee amount i.e. 5% of invoice amount */
  | 'PERCENT';

export type CollectInvoice = {
  __typename?: 'CollectInvoice';
  /** The total amount due for this `CollectInvoice` */
  amountDue: Scalars['Decimal'];
  /** The currency the `CollectInvoice` amount is represented in */
  currencyCode: CurrencyCode;
  /** The date payment is due for this `CollectInvoice` */
  dueDate: Scalars['DateTime'];
  /** ID from the Node interface */
  id: Scalars['ID'];
  /** The creation date of this `CollectInvoice`. */
  invoiceDate: Scalars['DateTime'];
  /** The external invoice number associated with this `CollectInvoice` */
  invoiceNumber: Scalars['String'];
  /** The customer facing URL where we pull the external invoice from */
  invoiceUrl: Maybe<Scalars['String']>;
  /** The line items associated with this `CollectInvoice`. */
  lineItems: Array<CollectInvoiceLineItem>;
  /** Whether the object is in live or test */
  mode: Mode;
  /** The payor `Party` associated with this `CollectInvoice`. */
  party: Party;
  /** The status of the payment for this `CollectInvoice`. */
  status: InvoiceStatus;
  /** Timestamp for when the status changed. */
  statusTransitions: Array<CollectInvoiceStatusTransition>;
  /** The tracking number associated with this `CollectInvoice`. */
  trackingNumber: Scalars['String'];
};

export type CollectInvoiceCreateInput = {
  /** The currency that the amounts of this `CollectInvoice` are represented in. */
  currencyCode: CurrencyCode;
  /** The line items contained within this `CollectInvoice`. */
  lineItems: Array<CollectInvoiceLineItemCreateInput>;
  /** The destination PartyID for he payor of the invoice. */
  partyId: Scalars['String'];
  /** The status of payment for this `CollectInvoice`. */
  status: InvoiceStatus;
  /** The tracking number associated with this `CollectInvoice`. */
  trackingNumber: Scalars['String'];
};

export type CollectInvoiceCustomField = {
  __typename?: 'CollectInvoiceCustomField';
  /** The name of the custom field that will appear on the invoice */
  name: Scalars['String'];
  /** The value of the custom field that will appear on the invoice` */
  value: Scalars['String'];
};

export type CollectInvoiceCustomFieldInput = {
  /** The name of the custom field that will appear on the invoice */
  name: Scalars['String'];
  /** The value of the custom field that will appear on the invoice` */
  value: Scalars['String'];
};

export type CollectInvoiceError = {
  __typename?: 'CollectInvoiceError';
  errorType: ErrorType;
  invoiceId: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  trackingNumber: Scalars['String'];
};

export type CollectInvoiceFee = {
  __typename?: 'CollectInvoiceFee';
  /** The amount to be used when applying this CollectInvoiceFee */
  amount: Scalars['Decimal'];
  /** The type of calculation to use when applying this CollectInvoiceFee */
  calculationType: CollectFeeCalculationType;
  /** The currency the amount of this fee will be represented in (or converted if necessary) */
  currencyCode: CurrencyCode;
  /** Description of the fee being applied, and will display on the invoice */
  description: Scalars['String'];
  /** DateTime representing when collection for this fee will discontinue. If null, the fee will remain active indefinitely. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** Unique ID associated with this CollectInvoiceFee */
  id: Scalars['ID'];
  /** DateTime representing when collection for this fee will begin on invoices. */
  startsAt: Scalars['DateTime'];
};

export type CollectInvoiceFeeConfiguration = {
  __typename?: 'CollectInvoiceFeeConfiguration';
  /** A custom fee specified by the account holder that will be added to invoices created by Collect */
  accountHolderFees: Array<CollectInvoiceFee>;
  /** Timestamp of when this CollectInvoiceFeeConfiguration was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this CollectInvoiceFeeConfiguration */
  createdBy: Scalars['ID'];
  /** A unique identifier for this CollectInvoiceFeeConfiguration */
  id: Scalars['ID'];
  /** Timestamp of when this CollectInvoiceFeeConfiguration was last updated */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who last updated this CollectInvoiceFeeConfiguration */
  updatedBy: Scalars['ID'];
  /** A fee from Zonos that will be added to invoices created by Collect */
  zonosFees: Array<CollectInvoiceFee>;
};

export type CollectInvoiceFeeConfigurationInput = {
  /** Custom fee(s) specified by the account holder that will be added to invoices created by Collect */
  accountHolderFees?: InputMaybe<Array<CollectInvoiceFeeInput>>;
  /** Fee(s) from Zonos that will be added to invoices created by Collect */
  zonosFees: Array<CollectInvoiceFeeInput>;
};

export type CollectInvoiceFeeInput = {
  /** The amount to be used when applying this CollectInvoiceFee */
  amount: Scalars['Decimal'];
  /** The type of calculation to use when applying this CollectInvoiceFee */
  calculationType?: InputMaybe<CollectFeeCalculationType>;
  /** The currency the amount of this fee will be represented in (or converted if necessary) */
  currencyCode: CurrencyCode;
  /** Description of the fee being applied, and will display on the invoice */
  description: Scalars['String'];
  /** DateTime representing when collection for this fee will discontinue. If null, the fee will remain active indefinitely. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** Optional ID of the CollectInvoiceFee to update. If null, a new CollectInvoiceFee will be created */
  id?: InputMaybe<Scalars['ID']>;
  /** DateTime representing when collection for this fee will begin on invoices. If null, the current time will be set. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
};

export type CollectInvoiceFeeUpdateInput = {
  /** New DateTime representing when collection for this fee will discontinue. Cannot be updated if existing endsAt has passed. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** ID of the CollectInvoiceFee to update */
  id: Scalars['ID'];
};

export type CollectInvoiceLineItem = {
  __typename?: 'CollectInvoiceLineItem';
  /** The amount due for this `CollectInvoiceLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge description for the `CollectInvoiceLineItem`. */
  chargeType: Maybe<CollectInvoiceLineItemChargeType>;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: Maybe<CurrencyCode>;
  /** A description of the invoice line item. */
  description: Scalars['String'];
  /** Unique identifier for the `CollectInvoiceLineItem`. */
  id: Scalars['ID'];
  /** Any metadata associated with this `CollectInvoiceLineItem`. */
  metadata: Maybe<Array<Metadata>>;
};

/** Assigned type of `CollectInvoiceLineItemCharge` */
export type CollectInvoiceLineItemChargeType =
  | 'DUTY'
  | 'DUTY_TAX'
  | 'FEE'
  | 'OTHER'
  | 'TAX';

export type CollectInvoiceLineItemCreateInput = {
  /** The amount due for this `CollectInvoiceLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge description for the `CollectInvoiceLineItem`. */
  chargeType: CollectInvoiceLineItemChargeType;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: CurrencyCode;
  /** A description of the invoice line item. */
  description?: InputMaybe<Scalars['String']>;
  /** Any metadata associated with this `CollectInvoiceLineItem`. */
  metadata?: InputMaybe<Array<MetadataInput>>;
};

export type CollectInvoiceResult = CollectInvoice | CollectInvoiceError;

export type CollectInvoiceSettings = {
  __typename?: 'CollectInvoiceSettings';
  /** A hex color code used for secondary brand colors on invoices */
  accentColor: Maybe<Scalars['String']>;
  /** A hex color code used for primary brand colors on invoices */
  brandColor: Maybe<Scalars['String']>;
  /** A list of up to four `CustomField` to be displayed on invoices sent to customers */
  customFields: Array<CollectInvoiceCustomField>;
  /** A block of text to display in the footer of created invoices */
  defaultFooter: Maybe<Scalars['String']>;
  /** An enum value representing the language to use when generating invoice PDFs */
  defaultLanguage: Maybe<InvoiceLanguageCode>;
  /** A block of text to be used as the default memo for created invoices. Commonly used as a notes or thank you section */
  defaultMemo: Maybe<Scalars['String']>;
  /** The ID of the `Organization` these settings are associated with */
  organizationId: Scalars['ID'];
};

export type CollectInvoiceSettingsUpdateInput = {
  /** A hex color code used for secondary brand colors on invoices */
  accentColor?: InputMaybe<Scalars['String']>;
  /** A hex color code used for primary brand colors on invoices */
  brandColor?: InputMaybe<Scalars['String']>;
  /** A list of up to four `CustomField` to be displayed on invoices sent to customers */
  customFields?: InputMaybe<Array<CollectInvoiceCustomFieldInput>>;
  /** A block of text to display in the footer of created invoices */
  defaultFooter?: InputMaybe<Scalars['String']>;
  /** An enum value representing the language invoice PDFs will be generated in */
  defaultLanguage?: InputMaybe<InvoiceLanguageCode>;
  /** A block of text to be used as the default memo for created invoices. Commonly used as a notes or thank you section */
  defaultMemo?: InputMaybe<Scalars['String']>;
};

export type CollectInvoiceStatusTransition = {
  __typename?: 'CollectInvoiceStatusTransition';
  /** When this status transition was created. */
  createdAt: Scalars['DateTime'];
  /** Any additional information required for this status transition. */
  note: Maybe<Scalars['String']>;
  /** The status of this status transition. */
  status: InvoiceStatus;
};

export type CollectInvoiceUpdateInput = {
  /** The ID of the `CollectInvoice` to update */
  id: Scalars['ID'];
  /** A note regarding the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The status of the payment for this invoice */
  status: InvoiceStatus;
};

/** `CollectSubmission` type representing a CollectSubmission notice to collect Duty & Taxes. */
export type CollectSubmission = {
  __typename?: 'CollectSubmission';
  /** The amount that the `CollectSubmission` was billed for. */
  amount: Scalars['Decimal'];
  /** The creation date of the `CollectSubmission`. */
  createdAt: Scalars['DateTime'];
  /** A unique identifier of who generated the `CollectSubmission` record. */
  createdBy: Scalars['ID'];
  /** The currency code that the `CollectSubmission` was billed in. */
  currencyCode: CurrencyCode;
  /** The url to the file used to create the `CollectSubmission`. */
  fileUrl: Maybe<Scalars['String']>;
  /** The `CollectSubmission`'s unique identifier. */
  id: Scalars['ID'];
  /** The internal invoice number of the `CollectSubmission`. */
  invoice: Maybe<CollectInvoice>;
  /** A list of `CollectSubmissionLineItem`s that belong to this CollectSubmission */
  lineItems: Array<CollectSubmissionLineItem>;
  /** The billing information of the `CollectSubmission`'s payor. */
  parties: Array<Party>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber: Maybe<Scalars['String']>;
  /** The `CollectSubmission`'s current status. */
  status: CollectSubmissionStatusCode;
  /** A record of a `CollectSubmission`'s status transition history. */
  statusTransitions: Array<CollectSubmissionStatusTransition>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber: Scalars['String'];
};

/** An auto-generated type for paginating through multiple `CollectSubmission`s. */
export type CollectSubmissionConnection = {
  __typename?: 'CollectSubmissionConnection';
  /** A list of `Edges` */
  edges: Array<CollectSubmissionEdge>;
  /** Pagination information about the connection */
  pageInfo: PageInfo;
  /** The total number of `CollectSubmission` objects in the connection */
  totalCount: Scalars['Int'];
};

export type CollectSubmissionCreateWorkflowInput = {
  /** The currency code that the `CollectSubmission` was billed in. */
  currencyCode: CurrencyCode;
  /** A list of line items for the `CollectInvoice` object associated with this `CollectSubmission`. */
  lineItems: Array<CollectSubmissionLineItemInput>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber: Scalars['String'];
};

/** An auto-generated type used in pagination. */
export type CollectSubmissionEdge = {
  __typename?: 'CollectSubmissionEdge';
  /** A string used to identify this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge` */
  node: Maybe<CollectSubmission>;
};

export type CollectSubmissionFileInfoInput = {
  contentType: ContentType;
  fileName: Scalars['String'];
};

export type CollectSubmissionFilter = {
  /** The minimum and maximum value of the  amounts to search for `CollectSubmission`s. */
  amountBetween?: InputMaybe<AmountRange>;
  /** Represents a range of dates, before, or after the creation date */
  createdAtBetween?: InputMaybe<DateTimeRange>;
  /** The currency that the amount is represented in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** The internal invoice number of the `CollectSubmission`. */
  invoice?: InputMaybe<Scalars['ID']>;
  /** The billing information for the `Party` responsible for paying the `CollectSubmission`. */
  party?: InputMaybe<Scalars['ID']>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** The `CollectSubmission`'s current status. */
  status?: InputMaybe<CollectSubmissionStatusCode>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type CollectSubmissionLineItem = {
  __typename?: 'CollectSubmissionLineItem';
  /** The amount due for this `CollectSubmissionLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge type for the `CollectInvoiceLineItem`. */
  chargeType: CollectSubmissionLineItemChargeType;
  /** Timestamp of when this CollectSubmissionLineItem was created */
  createdAt: Scalars['DateTime'];
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: CurrencyCode;
  /** A dynamic description of the line item charge. */
  description: Scalars['String'];
  /** A unique ID associated with this CollectSubmissionLineItem */
  id: Scalars['ID'];
};

export type CollectSubmissionLineItemChargeType =
  | 'DUTY'
  | 'DUTY_TAX'
  | 'FEE'
  | 'OTHER'
  | 'TAX';

export type CollectSubmissionLineItemInput = {
  /** The amount due for this `CollectSubmissionLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge type for the `CollectInvoiceLineItem`. */
  chargeType: CollectSubmissionLineItemChargeType;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: CurrencyCode;
  /** A dynamic description of the line item charge. */
  description?: InputMaybe<Scalars['String']>;
};

export type CollectSubmissionProcessInput = {
  /** The filename of the object to process */
  fileName: Scalars['String'];
  /** The prefix of the object(s) to process */
  prefix: Scalars['String'];
};

/** Input type used to re-try invoice creation for `CollectSubmission`s that already exist */
export type CollectSubmissionRetryInput = {
  id: Scalars['ID'];
};

export type CollectSubmissionStatusCode =
  /** Indicates the shipment for the CollectSubmission has been abandoned. Collect Invoice will be voided. */
  | 'ABANDONED'
  /** Indicates the shipment for the CollectSubmission is being held. */
  | 'HELD'
  /** Indicates the a Collect Invoice has not been created for this CollectSubmission. */
  | 'INVOICE_PENDING'
  /** Indicates the CollectSubmission has an open invoice and is awaiting payment. */
  | 'OPENED'
  /** Indicates the CollectSubmission invoice has been paid. */
  | 'PAID'
  /** Indicates the shipment for the CollectSubmission has been returned to the origin. Collect Invoice will be voided. */
  | 'RETURNED'
  /** Indicates the CollectSubmission is voided. Collect Invoice will be voided. */
  | 'VOIDED';

/** `CollectSubmissionStatusTransition` type that records the history of a `CollectSubmission`s status transitions. */
export type CollectSubmissionStatusTransition = {
  __typename?: 'CollectSubmissionStatusTransition';
  /** DateTime indicating when this status change occurred */
  createdAt: Scalars['DateTime'];
  /** The identifier of who triggered the status change. */
  createdBy: Scalars['ID'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `CollectSubmission` at the associated DateTime */
  status: CollectSubmissionStatusCode;
};

export type CollectSubmissionUpdateInput = {
  /** The ID of the `CollectSubmission` to update */
  id: Scalars['ID'];
  /** The `CollectSubmission`'s current status. */
  status?: InputMaybe<CollectSubmissionStatusCode>;
};

export type CollectSubmissionUploadUrl = {
  __typename?: 'CollectSubmissionUploadUrl';
  /** The name to give the `CollectSubmission` object */
  fileName: Scalars['String'];
  /** The shared prefix to give the `CollectSubmission` object key */
  prefix: Scalars['String'];
  /** The pre-signed upload URL used to store the `CollectSubmission` object */
  url: Scalars['String'];
};

export type CollectSubmissionUploadUrlInput = {
  fileInfo: Array<CollectSubmissionFileInfoInput>;
  uploadEventId?: InputMaybe<Scalars['ID']>;
};

export type CollectUploadError = {
  __typename?: 'CollectUploadError';
  /** The line number of the uploaded file where the error occurred during processing */
  lineNumber: Maybe<Scalars['Int']>;
  /** A message describing the error that occurred */
  message: Scalars['String'];
  /** The tracking number of the `CollectSubmission` that was being processed when the error occurred */
  trackingNumber: Maybe<Scalars['String']>;
};

export type CollectUploadEvent = {
  __typename?: 'CollectUploadEvent';
  /** A list of `CollectSubmission` objects that are a result of processing the uploaded file */
  collectSubmissions: Array<CollectSubmission>;
  /** Creation date and time of this `CollectUploadEvent` */
  createdAt: Scalars['DateTime'];
  /** A list of errors that occurred while processing this `CollectUploadEvent` */
  errors: Array<CollectUploadError>;
  /** Unique ID associated with this `CollectUploadEvent` */
  id: Scalars['ID'];
  /** Enum value representing the status of this `CollectUploadEvent` */
  status: CollectUploadStatus;
  /** A `CollectSubmissionUploadUrl` associated with this `CollectUploadEvent` */
  url: CollectSubmissionUploadUrl;
};

export type CollectUploadEventConnection = {
  __typename?: 'CollectUploadEventConnection';
  /** A list of edges */
  edges: Array<CollectUploadEventEdge>;
  /** Pagination information about this connection */
  pageInfo: PageInfo;
  /** Total number of `CollectUploadEvent` objects available given the current filter */
  totalCount: Scalars['Int'];
};

export type CollectUploadEventEdge = {
  __typename?: 'CollectUploadEventEdge';
  /** A string cursor used to identify this object in the current connection */
  cursor: Maybe<Scalars['String']>;
  /** The `CollectUploadEvent` located at this edge */
  node: Maybe<CollectUploadEvent>;
};

export type CollectUploadEventFilter = {
  /** A `DateTimeRange` to filter `CollectUploadEvent` objects by their createdAt field */
  createdAtBetween?: InputMaybe<DateTimeRange>;
  /** The name of the file used in the upload */
  fileName?: InputMaybe<Scalars['String']>;
  /** The folder prefix generated during URL creation */
  prefix?: InputMaybe<Scalars['String']>;
  /** The status of the `CollectUploadEvent` */
  status?: InputMaybe<CollectUploadStatus>;
};

export type CollectUploadStatus =
  | 'FAILED'
  | 'PENDING'
  | 'PROCESSING'
  | 'SUCCEEDED'
  | 'SUCCEEDED_WITH_ERRORS';

/**
 * A constraint is an object that is required when applying a `countryConstraint` to a `serviceLevel`.
 * These constraints are typically based on price, quantity, volume, or weight.
 */
export type Constraint = {
  __typename?: 'Constraint';
  /** When this Constraint was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Constraint. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the Constraint. */
  id: Scalars['ID'];
  /** The maximum amount that applies to the Constraint. */
  max: Maybe<Scalars['Decimal']>;
  /** The minimum amount that applies to the Constraint. */
  min: Maybe<Scalars['Decimal']>;
  /** Indicates what type of value the min and max fields represent. */
  type: ConstraintType;
  /** Represents the unit based on the type that applies to the Constraint. */
  unitOfMeasure: ConstraintUnitCode;
  /** When this Constraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Constraint. */
  updatedBy: Scalars['ID'];
};

export type ConstraintType =
  | 'GIRTH'
  | 'GIRTH_AND_LENGTH'
  | 'HEIGHT'
  | 'LENGTH'
  | 'PRICE'
  | 'QUANTITY'
  | 'VOLUME'
  | 'WEIGHT'
  | 'WIDTH';

/** Any CurrencyCode, WeightUnitCode, DimensionalUnitCode or VolumeUnitCode */
export type ConstraintUnitCode =
  /** United Arab Emirates Dirham */
  | 'AED'
  /** Afghan Afghani (؋) */
  | 'AFN'
  /** Albanian Lek (Lek) */
  | 'ALL'
  /** Armenian Dram (֏) */
  | 'AMD'
  /** NL Antillian Guilder (ƒ) */
  | 'ANG'
  /** Angolan Kwanza (Kz) */
  | 'AOA'
  /** Argentine Peso */
  | 'ARS'
  /** Australian Dollar ($) */
  | 'AUD'
  /** Aruban Florin (ƒ) */
  | 'AWG'
  /** Azerbaijani Manat (ман) */
  | 'AZN'
  /** Bosnia and Herzegovina Convertible Mark (KM) */
  | 'BAM'
  | 'BARREL_PETROLEUM'
  /** Barbadian Dollar ($) */
  | 'BBD'
  /** Bangladeshi Taka (৳) */
  | 'BDT'
  /** Bulgarian Lev (лв) */
  | 'BGN'
  /** Bahraini Dinar */
  | 'BHD'
  /** Burundian franc (FBu) */
  | 'BIF'
  /** Bermudian Dollar ($) */
  | 'BMD'
  /** Brunei Dollar */
  | 'BND'
  /** Bolivian Boliviano ($b) */
  | 'BOB'
  /** Brazilian Real (R$) */
  | 'BRL'
  /** Bahamian Dollar ($) */
  | 'BSD'
  /** Bitcoin */
  | 'BTC'
  /** Bhutanese Ngultrum */
  | 'BTN'
  | 'BUSHEL_UK'
  | 'BUSHEL_US_DRY'
  /** Botswana Pula (P) */
  | 'BWP'
  /** New Belarusian Ruble */
  | 'BYN'
  /** Belarusian ruble (Br) */
  | 'BYR'
  /** Belize Dollar (BZ$) */
  | 'BZD'
  /** Canadian Dollar ($) */
  | 'CAD'
  | 'CARAT'
  /** Congolese Franc (FC) */
  | 'CDF'
  | 'CENTIGRAM'
  | 'CENTILITER_CL'
  | 'CENTIMETER'
  /** Swiss Franc (CHF) */
  | 'CHF'
  /** Unidad de Fomento (UF) */
  | 'CLF'
  /** Chilean Peso */
  | 'CLP'
  /** Chinese Yuan Renminbi (¥) */
  | 'CNY'
  /** Colombian Peso */
  | 'COP'
  /** Costa Rican Colón (₡) */
  | 'CRC'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  /** Cuban Convertible Peso */
  | 'CUC'
  /** Cuban Peso */
  | 'CUP'
  /** Cape Verdean escudo */
  | 'CVE'
  /** Czech Koruna (Kč) */
  | 'CZK'
  | 'DECALITER_DAL'
  | 'DECILITER'
  | 'DECIMETER'
  /** Djiboutian franc (Fdj) */
  | 'DJF'
  /** Danish Krone (kr) */
  | 'DKK'
  /** Dominican Peso (RD$) */
  | 'DOP'
  /** Algerian Dinar (دج) */
  | 'DZD'
  /** Egyptian Pound (£) */
  | 'EGP'
  /** Eritrean Nakfa */
  | 'ERN'
  /** Ethiopian Birr (Br) */
  | 'ETB'
  /** Euro (€) */
  | 'EUR'
  /** Fiji Dollar */
  | 'FJD'
  /** Falkland Islands Pound (£) */
  | 'FKP'
  | 'FLUID_DRAM_FL_DR'
  | 'FLUID_OUNCE_FL_OZ'
  | 'FLUID_OUNCE_UK'
  | 'FOOT'
  | 'GALLON_FLUID'
  | 'GALLON_UK'
  /** British Pound (£) */
  | 'GBP'
  /** Georgian Lari (ლ) */
  | 'GEL'
  /** Guernsey Pound */
  | 'GGP'
  /** Ghanaian Cedi */
  | 'GHS'
  | 'GILL_GI'
  /** Gibraltar Pound (£) */
  | 'GIP'
  /** Gambian Dalasi (D) */
  | 'GMD'
  /** Guinean franc (FG) */
  | 'GNF'
  | 'GRAM'
  /** Guatemalan Quetzal (Q) */
  | 'GTQ'
  /** Guyanese Dollar ($) */
  | 'GYD'
  | 'HECTOLITER'
  /** Hong Kong Dollar */
  | 'HKD'
  /** Honduran Lempira (L) */
  | 'HNL'
  /** Croatian Kuna (kn) */
  | 'HRK'
  /** Haitian Gourde */
  | 'HTG'
  /** Hungarian Forint (Ft) */
  | 'HUF'
  /** Indonesian rupiah (Rp) */
  | 'IDR'
  /** Isreali New Shekel (₪) */
  | 'ILS'
  /** Manx pound */
  | 'IMP'
  | 'INCH'
  /** Indian Rupee (Rs) */
  | 'INR'
  /** Iraqi Dinar */
  | 'IQD'
  /** Iranian Rial */
  | 'IRR'
  /** Iceland Krona (kr) */
  | 'ISK'
  /** Jersey Pound */
  | 'JEP'
  /** Jamaican Dollar (J$) */
  | 'JMD'
  /** Jordanian Dinar */
  | 'JOD'
  /** Japanese Yen (¥) */
  | 'JPY'
  /** Kenyan Shilling (KSh) */
  | 'KES'
  /** Kyrgyzstani Som (лв) */
  | 'KGS'
  /** Cambodian Riel (៛) */
  | 'KHR'
  | 'KILOGRAM'
  | 'KILOLITER'
  /** Comorian franc (CF) */
  | 'KMF'
  /** North Korean Won */
  | 'KPW'
  /** South-Korean Won (₩) */
  | 'KRW'
  /** Kuwaiti Dinar */
  | 'KWD'
  /** Cayman Islands Dollar ($) */
  | 'KYD'
  /** Kazakhastan Tenge (лв) */
  | 'KZT'
  /** Lao Kip (₭) */
  | 'LAK'
  /** Lebanese Pound (£) */
  | 'LBP'
  | 'LITER'
  /** Sri Lanka Rupee (Rs) */
  | 'LKR'
  /** Liberian Dollar ($) */
  | 'LRD'
  /** Lesotho Loti (L) */
  | 'LSL'
  /** Lithuanian Litas (Lt) */
  | 'LTL'
  /** Latvian Lats */
  | 'LVL'
  /** Libyan Dinar */
  | 'LYD'
  /** Moroccan Dirham */
  | 'MAD'
  /** Moldovan Leu */
  | 'MDL'
  | 'METER'
  /** Malagasy ariary (Ar) */
  | 'MGA'
  | 'MICROLITER'
  | 'MILLIGRAM'
  | 'MILLILITER_ML'
  | 'MILLIMETER'
  | 'MINIM_MIN'
  /** Macedonian Denar (ден) */
  | 'MKD'
  /** Myanmar Kyat (K) */
  | 'MMK'
  /** Mongolian Tögrög (₮) */
  | 'MNT'
  /** Macanese Pataca */
  | 'MOP'
  /** Mauritanian ouguiya (UM) */
  | 'MRO'
  /** Mauritius Rupee (Rs) */
  | 'MUR'
  /** Maldive Rufiyaa */
  | 'MVR'
  /** Malawian Kwacha (MK) */
  | 'MWK'
  /** Mexican Peso ($) */
  | 'MXN'
  /** Malaysian Ringgit (RM) */
  | 'MYR'
  /** Mozambican Metical (MT) */
  | 'MZN'
  /** Namibian Dollar ($) */
  | 'NAD'
  /** Nigerian Naira (₦) */
  | 'NGN'
  /** Nicaraguan Córdoba (C$) */
  | 'NIO'
  /** Norwegian Kroner (kr) */
  | 'NOK'
  /** Nepalese Rupee (Rs) */
  | 'NPR'
  /** New Zealand Dollar ($) */
  | 'NZD'
  /** Omani Rial (﷼) */
  | 'OMR'
  | 'OUNCE'
  /** Panamanian Balboa (B/.) */
  | 'PAB'
  | 'PECK_US_DRY'
  /** Peruvian Nuevo Sol (S/.) */
  | 'PEN'
  /** Papua New Guinean Kina (K) */
  | 'PGK'
  /** Philippine Peso (Php) */
  | 'PHP'
  | 'PINT_FLUID'
  | 'PINT_UK'
  | 'PINT_US_DRY'
  /** Pakistani Rupee (₨) */
  | 'PKR'
  /** Polish Zloty (zł) */
  | 'PLN'
  | 'POUND'
  /** Paraguayan guaraní (₲) */
  | 'PYG'
  /** Qatari Rial (﷼) */
  | 'QAR'
  | 'QUART_FLUID'
  | 'QUART_UK'
  | 'QUART_US_DRY'
  /** Romanian Leu (lei) */
  | 'RON'
  /** Serbian Dinar (Дин.) */
  | 'RSD'
  /** Russian Rouble (руб) */
  | 'RUB'
  /** Rwandan franc (FRw) */
  | 'RWF'
  /** Saudi Riyal (﷼) */
  | 'SAR'
  /** Solomon Islands Dollar ($) */
  | 'SBD'
  /** Seychellois Rupee (₨) */
  | 'SCR'
  /** Sudanese Pound */
  | 'SDG'
  /** Swedish Krona (kr) */
  | 'SEK'
  /** Singapore Dollar */
  | 'SGD'
  /** Saint Helenian Pound (£) */
  | 'SHP'
  /** Sierra Leonean Leone */
  | 'SLL'
  /** Somali Shilling (S) */
  | 'SOS'
  /** Surinamese Dollar ($) */
  | 'SRD'
  /** São Tomé and Príncipe Dobra (Db) */
  | 'STD'
  /** Salvadoran Colón ($) */
  | 'SVC'
  /** Syrian Pound */
  | 'SYP'
  /** Swazi Lilangeni (L) */
  | 'SZL'
  /** Thai Baht (฿) */
  | 'THB'
  /** Tajikistani Somoni */
  | 'TJS'
  /** Turkmenistani Manat */
  | 'TMT'
  /** Tunisian Dinar */
  | 'TND'
  | 'TON'
  /** Tongan Paʻanga (T$ ) */
  | 'TOP'
  /** Turkish Lira (TL) */
  | 'TRY'
  /** Trinidad/Tobago Dollar (TT$) */
  | 'TTD'
  /** Taiwan Dollar (NT$) */
  | 'TWD'
  /** Tanzanian Shilling (TSh) */
  | 'TZS'
  /** Ukraine Hryvnia (₴) */
  | 'UAH'
  /** Ugandan shilling (USh) */
  | 'UGX'
  /** US Dollar ($) */
  | 'USD'
  /** Uruguayan Peso ($U) */
  | 'UYU'
  /** Uzbekistani Som (лв) */
  | 'UZS'
  /** Venezuelan Bolívar Fuerte */
  | 'VEF'
  /** Vietnamese dong (₫) */
  | 'VND'
  /** Vanuatu vatu (VT) */
  | 'VUV'
  /** Samoan Tala */
  | 'WST'
  /** Central African CFA franc (FCFA) */
  | 'XAF'
  /** Silver (troy ounce) */
  | 'XAG'
  /** Gold (troy ounce) */
  | 'XAU'
  /** East Caribbean Dollar ($) */
  | 'XCD'
  /** Special Drawing Rights */
  | 'XDR'
  /** West African CFA franc (CFA) */
  | 'XOF'
  /** CFP franc (F) */
  | 'XPF'
  | 'YARD'
  /** Yemeni Rial (﷼) */
  | 'YER'
  /** South African Rand (R) */
  | 'ZAR'
  /** Zambian Kwacha (K) */
  | 'ZMK'
  /** Zambian Kwacha (ZK) */
  | 'ZMW'
  /** Zimbabwean Dollar */
  | 'ZWL';

export type ContentType = 'CSV';

export type ControlType = 'EXPORT' | 'IMPORT';

export type CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'IC'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

/**
 * A `CountryConstraint` can be assigned to a `ServiceLevel` to limit countries that are supported by a given `ServiceLevel`.
 * These can also be used to limit shipments supported by the `serviceLevel` and origin/destination based on value, weight, quantity, or volume of given items in a shipment.
 */
export type CountryConstraint = {
  __typename?: 'CountryConstraint';
  /** Represents a constraint around a specific attribute that applies to all countries. */
  constraints: Maybe<Array<Maybe<Constraint>>>;
  /** When this CountryConstraint was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CountryConstraint. */
  createdBy: Scalars['ID'];
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling: Maybe<BillingOptionCode>;
  /** A unique identifier for the CountryConstraint. */
  id: Scalars['ID'];
  /** List of incoterms supported by the CountryConstraint. */
  incoterm: Maybe<Array<IncotermCode>>;
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<CountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<CountryCode>;
  /** `TransitTime` breakdown that applies to the CountryConstraint. */
  transitTime: Maybe<TransitTime>;
  /** When this CountryConstraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CountryConstraint. */
  updatedBy: Scalars['ID'];
  /** The `WeightUnitCode` required by the CountryConstraint. */
  weightUnit: Maybe<WeightUnitCode>;
};

export type CreateCartonInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<CreateCartonItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: PackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type CreateCartonItemInput = {
  /** The item id that will be associated with the CartonItem */
  item: Scalars['ID'];
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
};

export type CreateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type CreateDashboardSettingsInput = {
  defaultDisplayCurrency: Scalars['String'];
  defaultDisplayLanguage: Scalars['String'];
  defaultDisplayLocal: Scalars['String'];
  defaultDisplayTimezone: Scalars['String'];
  defaultUnit: DashboardUnit;
  displayName: Scalars['String'];
  multiFactorAuth: MultiFactorAuthSetting;
};

export type CreateExchangeRateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  sourceCurrencyCode: CurrencyCode;
  targetCurrencyCode: CurrencyCode;
  type: ExchangeRateType;
};

export type CreateLocationInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyType>;
};

export type CreatePackagingOptionInput = {
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** A memorable name for the package option. If one is not provided it will be named based on the length X width X height (ie. 10x8x4) */
  name?: InputMaybe<Scalars['String']>;
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
  /** The weight capacity of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packagingOption` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

export type CreatePartyInput = {
  location?: InputMaybe<CreateLocationInput>;
  person?: InputMaybe<CreatePersonInput>;
  referenceId?: InputMaybe<Scalars['ID']>;
  type: PartyType;
};

export type CreatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek: Day;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: EndOfDayBehavior;
  /** How often payouts occur, in days. */
  frequencyDays: Scalars['Int'];
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Scalars['Int'];
};

export type CreatePersonInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateShippingSettingsInput = {
  defaultWeightMultiplier: Scalars['Decimal'];
};

/** Options for where the credentials are stored. */
export type CredentialProvider =
  /** General use retail/published rates. */
  | 'GENERAL'
  /** Organization-specific credentials. */
  | 'ORGANIZATION';

export type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTC'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'IMP'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JEP'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'ZWL';

export type CurrencyFormat = {
  __typename?: 'CurrencyFormat';
  /** The currency code that applies to the `currencyFormat` */
  currencyCode: CurrencyCode;
  /** The character used to separate the whole units from the fractional units */
  decimalDelimiter: Scalars['String'];
  /** The number of decimal places to display for the currency */
  scale: Scalars['Int'];
  /** The characters used as a symbol of the currency */
  symbol: Scalars['String'];
  /** The location of where the symbol is displayed */
  symbolLocation: Maybe<CurrencySymbolLocation>;
  /** The character used as the thousands separate */
  thousandsDelimiter: Scalars['String'];
};

export type CurrencySymbolLocation =
  /** display after the currency amount */
  | 'AFTER'
  /** display before the currency amount */
  | 'BEFORE';

export type CustomerInvoiceFile = {
  __typename?: 'CustomerInvoiceFile';
  fileUrl: Scalars['String'];
  invoiceReferenceId: Scalars['String'];
};

export type CustomerInvoiceFileCreateInput = {
  invoiceReferenceId: Scalars['String'];
  zonosUrl: Scalars['String'];
};

export type CustomsDescription = {
  __typename?: 'CustomsDescription';
  categories: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: Maybe<Scalars['String']>;
  customsDescription: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  hsCode: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Maybe<Scalars['String']>;
  material: Maybe<Scalars['String']>;
  mode: Mode;
  name: Scalars['String'];
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Maybe<Scalars['String']>;
};

export type CustomsDescriptionsCreateInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  hsCodeProvided?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  itemAge?: InputMaybe<Scalars['String']>;
  material?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  productId?: InputMaybe<Scalars['String']>;
};

export type CustomsDocument = {
  __typename?: 'CustomsDocument';
  /** The date and time when the CustomsDocument was created */
  createdAt: Scalars['DateTime'];
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: CustomsDocumentType;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: CustomsDocumentFileType;
  /** The URL of where the CustomsDocument file is stored */
  fileUrl: Scalars['String'];
  /** A unique ID associated with the CustomsDocument */
  id: Scalars['ID'];
};

export type CustomsDocumentConnection = {
  __typename?: 'CustomsDocumentConnection';
  /** A list of `CustomsDocumentEdge` objects */
  edges: Array<CustomsDocumentEdge>;
  /** `PageInfo` about the connection */
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type CustomsDocumentCreateInput = {
  /** ID of the `CustomsSpec` the `CustomsDocument` will be associated with */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: CustomsDocumentType;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: CustomsDocumentFileType;
  /** URL to the location of the file */
  fileUrl: Scalars['String'];
  /** ID of the `Shipment` the `CustomsDocument` will be associated with */
  shipmentId?: InputMaybe<Scalars['ID']>;
};

export type CustomsDocumentEdge = {
  __typename?: 'CustomsDocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The `CustomsDocument` at the end of the edge */
  node: CustomsDocument;
};

export type CustomsDocumentFileType = 'PDF' | 'TXT';

export type CustomsDocumentFilter = {
  /** Filter by the createdAt within a `DateTimeRange` */
  createdAt?: InputMaybe<DateTimeRange>;
  /** Filter by the `CustomsSpec` ID */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** Filter by the type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType?: InputMaybe<CustomsDocumentType>;
};

export type CustomsDocumentGenerateInput = {
  /** The ID of the `CustomsSpec` that the CustomsDocument is associated with */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: CustomsDocumentType;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: CustomsDocumentFileType;
};

export type CustomsDocumentType =
  | 'CERTIFICATE_OF_ORIGIN'
  | 'COMMERCIAL_INVOICE'
  | 'OTHER';

/** A `CustomsItem` is the product of a `CustomsSpec` and includes improved item data */
export type CustomsItem = {
  __typename?: 'CustomsItem';
  /** The total price amount for this item */
  amount: Scalars['Decimal'];
  /** The country that this item originates from */
  countryOfOrigin: CountryCode;
  /** Where this origin information came from */
  countryOfOriginSource: ItemValueSource;
  /** The description of this item for the purpose of clearance */
  description: Scalars['String'];
  /** The HS code that describes this item */
  hsCode: Scalars['String'];
  /** The source of the HS code classification */
  hsCodeSource: ItemValueSource;
  /** The items associated with the `CustomsItem` */
  items: Array<Item>;
  /** The province that this item originates from */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** Where this province information came from */
  provinceOfOriginSource: Maybe<ItemValueSource>;
  /** The total number of this item */
  quantity: Scalars['Decimal'];
};

export type CustomsMetadata = {
  __typename?: 'CustomsMetadata';
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value: Maybe<Scalars['String']>;
};

export type CustomsMetadataInput = {
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value?: InputMaybe<Scalars['String']>;
};

export type CustomsSpec = Node & {
  __typename?: 'CustomsSpec';
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotals;
  /** Objects including other details about the `CustomsSpec` */
  attributes: Maybe<Array<CustomsSpecAttribute>>;
  /** The `Carton` objects that are tied to this `CustomsSpec` */
  cartons: Maybe<Array<Carton>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType: Maybe<ClearanceType>;
  /** The timestamp of when this `CustomsSpec` was created */
  createdAt: Scalars['DateTime'];
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: CurrencyCode;
  /** A list of `CustomsDocument` objects that are associated with this `CustomsSpec` */
  customsDocuments: Array<CustomsDocument>;
  /** The `CustomsItem` objects that are a result of generating this `CustomsSpec` */
  customsItems: Maybe<Array<CustomsItem>>;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement: Maybe<Scalars['String']>;
  /** `CustomsSpec` ID prefixed with `customs_spec_` */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: IncotermCode;
  /** Optional metadata key/value pairs */
  metadata: Maybe<Array<CustomsMetadata>>;
  /** The `Mode` this `CustomsSpec` was created in */
  mode: Mode;
  /** The `Organization` associated with the `CustomsSpec` */
  organization: Scalars['ID'];
  /** A list of parties associated with the `CustomsSpec` */
  parties: Maybe<Array<Party>>;
  /** The customs term for the end use of this export */
  reasonForExport: LandedCostEndUse;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel: Maybe<Scalars['String']>;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Maybe<Scalars['String']>;
  /** The timestamp of when this `CustomsSpec` was updated */
  updatedAt: Scalars['DateTime'];
};

/** Subtotal amounts of how the `Order` amount was calculated. */
export type CustomsSpecAmountSubtotals = {
  __typename?: 'CustomsSpecAmountSubtotals';
  /** The total duties amount */
  duties: Maybe<Scalars['Decimal']>;
  /** The total fees amount */
  fees: Maybe<Scalars['Decimal']>;
  /** The total cost of insurance */
  insurance: Maybe<Scalars['Decimal']>;
  /** The total cost of the items */
  items: Maybe<Scalars['Decimal']>;
  /** The total cost of shipping */
  shipping: Maybe<Scalars['Decimal']>;
  /** The total tax amount */
  taxes: Maybe<Scalars['Decimal']>;
};

/** Subtotal amounts of how the `Order` amount was calculated. */
export type CustomsSpecAmountSubtotalsInput = {
  /** The total duties amount */
  duties?: InputMaybe<Scalars['Decimal']>;
  /** The total fees amount */
  fees?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of insurance */
  insurance?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of the items */
  items?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of shipping */
  shipping?: InputMaybe<Scalars['Decimal']>;
  /** The total tax amount */
  taxes?: InputMaybe<Scalars['Decimal']>;
};

export type CustomsSpecAttribute = {
  __typename?: 'CustomsSpecAttribute';
  /** Where this `CustomsSpec` is originating from */
  source: CustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: CustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export type CustomsSpecAttributeInput = {
  /** Where this `CustomsSpec` is originating from */
  source: CustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: CustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export type CustomsSpecAttributeType =
  | 'ACCOUNT_NUMBER'
  | 'B13A'
  | 'ECCN'
  | 'EORI'
  | 'ITN'
  | 'ORDER_NUMBER'
  | 'PURCHASE_ORDER_NUMBER';

export type CustomsSpecConnection = {
  __typename?: 'CustomsSpecConnection';
  edges: Maybe<Array<Maybe<CustomsSpecEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type CustomsSpecCreateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<CustomsSpecAttributeInput>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType?: InputMaybe<ClearanceType>;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: CurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: IncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<CustomsMetadataInput>>;
  /** The `Organization` associated with the `CustomsSpec` */
  organization?: InputMaybe<Scalars['ID']>;
  /** The customs term for the end use of this export */
  reasonForExport: LandedCostEndUse;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The `Shipment` ID that this `CustomsSpec` is attached to */
  shipmentId: Scalars['ID'];
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type CustomsSpecEdge = {
  __typename?: 'CustomsSpecEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<CustomsSpec>;
};

export type CustomsSpecFilter = {
  between?: InputMaybe<DateTimeRange>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type CustomsSpecGenerateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotalsInput;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: CurrencyCode;
  /** The `Shipment` ID that this `CustomsSpec` is attached to */
  shipmentId: Scalars['ID'];
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Scalars['String'];
};

export type CustomsSpecSourceType =
  | 'API_REQUEST'
  | 'CATALOG'
  | 'CLASSIFY'
  | 'ORGANIZATION_SETTING';

export type CustomsSpecUpdateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<CustomsSpecAttributeInput>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType?: InputMaybe<ClearanceType>;
  /** The currency the totals for this `CustomsSpec` are represented in */
  currencyCode: CurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** `CustomsSpec` ID prefixed with `customs_spec_` */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: IncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<CustomsMetadataInput>>;
  /** The customs term for the end use of this export */
  reasonForExport: LandedCostEndUse;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type DashboardSettings = {
  __typename?: 'DashboardSettings';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  defaultDisplayCurrency: Maybe<Scalars['String']>;
  defaultDisplayLanguage: Maybe<Scalars['String']>;
  defaultDisplayLocal: Maybe<Scalars['String']>;
  defaultDisplayTimezone: Maybe<Scalars['String']>;
  defaultUnit: Maybe<DashboardUnit>;
  displayName: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode: Mode;
  multiFactorAuth: Maybe<MultiFactorAuthSetting>;
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type DashboardUnit = 'IMPERIAL' | 'METRIC';

export type DateTimeRange = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
};

export type Day =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

/** Represents a de minimis amount on a `LandedCost` quote, what it applies to, and how it was assessed */
export type DeMinimis = {
  __typename?: 'DeMinimis';
  /** Human readable formula indicating how this de minimis was calculated */
  formula: Scalars['String'];
  /** INCOTERM used to assess the de minimis value */
  method: IncotermCode;
  /** Additional note */
  note: Scalars['String'];
  /** Indicates whether the de mimimis is above or below the threshold */
  threshold: DeMinimisThreshold;
  /** What this de minimis applies to */
  type: DeMinimisType;
};

export type DeMinimisThreshold =
  /** De minimis was above threshold */
  | 'ABOVE'
  /** De minimis was below threshold */
  | 'BELOW';

export type DeMinimisType =
  /** De minimis applies to duty */
  | 'DUTY'
  /** De minimis applies to fees */
  | 'FEE'
  /** De minimis applies to tax */
  | 'TAX';

export type DeleteJob = {
  __typename?: 'DeleteJob';
  /**  Creation date of the job.  */
  createdAt: Scalars['DateTime'];
  /**  ID of the user who created the job.  */
  createdBy: Scalars['ID'];
  /**  Unique identifier of the delete job.  */
  id: Scalars['String'];
  /**  ID of the associated organization.  */
  organization: Scalars['ID'];
  /**  Count of catalog items that have been deleted.  */
  processedCount: Scalars['Int'];
  /**  Current status of the job.  */
  status: DeleteJobStatus;
  /**  Total count of catalog items that will be deleted.  */
  totalCount: Scalars['Int'];
  /**  Last update date of the job.  */
  updatedAt: Scalars['DateTime'];
  /**  ID of the user who last updated the job.  */
  updatedBy: Scalars['ID'];
};

export type DeleteJobEdge = {
  __typename?: 'DeleteJobEdge';
  /**  Cursor for pagination.  */
  cursor: Scalars['String'];
  /**  The delete job at the end of the edge.  */
  node: DeleteJob;
};

export type DeleteJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type DeleteJobsConnection = {
  __typename?: 'DeleteJobsConnection';
  /**  A list of delete job edges.  */
  edges: Array<DeleteJobEdge>;
  /**  Information for pagination.  */
  pageInfo: Maybe<PageInfo>;
  /**  Total count of delete jobs.  */
  totalCount: Scalars['Int'];
};

export type DeleteJobsFilter = {
  /**  Filters delete jobs by their status.  */
  status?: InputMaybe<DeleteJobStatus>;
};

export type DeliveryType = 'CONSOLIDATED' | 'COURIER' | 'POSTAL';

export type DeniedParty = {
  __typename?: 'DeniedParty';
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** Known aliases for the denied party */
  aliases: Maybe<Array<Maybe<Scalars['String']>>>;
  companyName: Maybe<Scalars['String']>;
  countryCode: Maybe<CountryCode>;
  /** When this `DeniedParty` was created */
  createdAt: Scalars['DateTime'];
  /** When this `DeniedParty` stops applying. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** DeniedParty ID, prefixed with `denied_party_` */
  id: Scalars['ID'];
  line1: Maybe<Scalars['String']>;
  line2: Maybe<Scalars['String']>;
  locality: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  /** The source of the denied party. */
  source: Maybe<Scalars['String']>;
  /** Link to the source information. */
  sourceUrls: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `DeniedParty` begins to take affect. */
  startsAt: Maybe<Scalars['DateTime']>;
};

export type DeniedPartyAction = 'NO_MATCHES' | 'REVIEW';

/** DeniedParty Connection */
export type DeniedPartyConnection = {
  __typename?: 'DeniedPartyConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<DeniedPartyEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** DeniedParty Edge */
export type DeniedPartyEdge = {
  __typename?: 'DeniedPartyEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<DeniedParty>;
};

export type DeniedPartyLocationInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyType>;
};

export type DeniedPartyPersonInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type DescriptionOverride = {
  __typename?: 'DescriptionOverride';
  /** A string value to be used to override item descriptions */
  overrideValue: Scalars['String'];
  /** Describes the scope of description overrides */
  scope: DescriptionOverrideScope;
};

export type DescriptionOverrideInput = {
  /** Describes the scope of description overrides */
  overrideValue: Scalars['String'];
  /** Describes the scope of description overrides */
  scope: DescriptionOverrideScope;
};

/** Enum value describing the scope of description overrides. */
export type DescriptionOverrideScope =
  /** Only override the item descriptions on customs documents */
  | 'CUSTOMS'
  /** Override the item descriptions on customs documents and labels */
  | 'CUSTOMS_AND_LABELS'
  /** Only override the item descriptions on labels */
  | 'LABELS';

export type DimensionalUnitCode =
  | 'CENTIMETER'
  | 'DECIMETER'
  | 'FOOT'
  | 'INCH'
  | 'METER'
  | 'MILLIMETER'
  | 'YARD';

export type DocumentFilingType =
  /** The documents associated with the label were sent electronically */
  | 'ELECTRONIC'
  /** The documents associated with the label are available to be downloaded */
  | 'HARD_COPY';

/** Represents a duty amount on a `LandedCost` quote */
export type Duty = {
  __typename?: 'Duty';
  /** `Duty` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Duty` amount is in. @deprecated use currencyCode instead. */
  currency: CurrencyCode;
  /** Currency the `Duty` amount is in. */
  currencyCode: CurrencyCode;
  /** Human-readable description of this `Duty`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Duty` amounts */
  exchangeRate: Maybe<ExchangeRate>;
  /** Human readable formula indicating how this duty was calculated */
  formula: Scalars['String'];
  /** `Item` that this duty amount applies to */
  item: Maybe<Item>;
  /** Additional note for this `Duty`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this duty amount */
  payee: Maybe<Party>;
  /** `Party` responsible for rendering payment on this duty amount */
  payor: Maybe<Party>;
  /** Type of `Duty`. */
  type: LandedCostFeeType;
};

export type DutyRate = {
  __typename?: 'DutyRate';
  items: Array<DutyRateItem>;
  shipFromCountry: CountryCode;
  shipToCountry: CountryCode;
};

export type DutyRateInput = {
  items: Array<DutyRateItemInput>;
  shipFromCountry: CountryCode;
  shipToCountry: CountryCode;
  targetCurrency?: InputMaybe<CurrencyCode>;
};

export type DutyRateItem = {
  __typename?: 'DutyRateItem';
  amount: Scalars['Decimal'];
  formula: Maybe<Scalars['String']>;
  /** External id used for referencing */
  itemId: Maybe<Scalars['String']>;
  rate: Scalars['Decimal'];
};

export type DutyRateItemInput = {
  amount: Scalars['Decimal'];
  countryOfOrigin: CountryCode;
  currencyCode: CurrencyCode;
  hsCode: Scalars['String'];
  /** External id used for referencing */
  itemId?: InputMaybe<Scalars['String']>;
  shippingAmount: Scalars['Decimal'];
  weightAmount: Scalars['Decimal'];
  weightUnit: LandedCostWeightUnit;
};

export type DutyTaxFeeConfiguration =
  | 'EXCLUDE_ALL'
  | 'EXCLUDE_DUTY'
  | 'EXCLUDE_FEE'
  | 'EXCLUDE_TAX'
  | 'INCLUDE_ALL'
  | 'INCLUDE_TAX';

/** Determines the base visual style for an AppearanceSettings object. */
export type ElementsUiStyle = 'ROUNDED' | 'SHARP';

/** Determines the base color theme for an AppearanceSettings object. */
export type ElementsUiTheme = 'DARK' | 'LIGHT' | 'SYSTEM';

export type EndOfDayBehavior = 'EXEMPT' | 'REQUIRED';

export type ErrorDetail =
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  | 'DEADLINE_EXCEEDED'
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  | 'ENHANCE_YOUR_CALM'
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  | 'FIELD_NOT_FOUND'
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  | 'INVALID_ARGUMENT'
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  | 'INVALID_CURSOR'
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  | 'MISSING_RESOURCE'
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  | 'SERVICE_ERROR'
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  | 'TCP_FAILURE'
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  | 'THROTTLED_CONCURRENCY'
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  | 'THROTTLED_CPU'
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  | 'UNIMPLEMENTED'
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  | 'UNKNOWN';

export type ErrorType =
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  | 'BAD_REQUEST'
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  | 'FAILED_PRECONDITION'
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  | 'INTERNAL'
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  | 'NOT_FOUND'
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  | 'PERMISSION_DENIED'
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  | 'UNAUTHENTICATED'
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  | 'UNAVAILABLE'
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  | 'UNKNOWN';

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  /** When this `ExchangeRate` was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier for the authorized user or API token that created the ExchangeRate. */
  createdBy: Scalars['ID'];
  /** When this `ExchangeRate` should stop being evaluated. */
  expiresAt: Scalars['DateTime'];
  /** A unique identifier for the ExchangeRate. */
  id: Scalars['ID'];
  /** Specifies whether the ExchangeRate is in live or test mode. */
  mode: Mode;
  rate: Scalars['Decimal'];
  sourceCurrencyCode: CurrencyCode;
  targetCurrencyCode: CurrencyCode;
  targetFormat: Maybe<CurrencyFormat>;
  type: ExchangeRateType;
};

export type ExchangeRateCreateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  sourceCurrencyCode: CurrencyCode;
  targetCurrencyCode: CurrencyCode;
  type: ExchangeRateType;
};

export type ExchangeRateType =
  /** Zonos guaranteed rate */
  | 'GUARANTEED'
  /** Average rate for that day - NOT GUARANTEED */
  | 'MID_MARKET';

export type ExportJob = {
  __typename?: 'ExportJob';
  /**  Creation date of the job.  */
  createdAt: Scalars['DateTime'];
  /**  ID of the user who created the job.  */
  createdBy: Scalars['ID'];
  /**  Expiration date of the job.  */
  expiresAt: Scalars['DateTime'];
  /**  Unique identifier of the job.  */
  id: Scalars['ID'];
  /**  ID of the associated organization.  */
  organization: Scalars['ID'];
  /**  Count of processed items in the job.  */
  processedCount: Scalars['Int'];
  /**  Current status of the job.  */
  status: ExportJobStatus;
  /**  Total count of items to process in the job.  */
  totalCount: Scalars['Int'];
  /**  Last update date of the job.  */
  updatedAt: Scalars['DateTime'];
  /**  ID of the user who last updated the job.  */
  updatedBy: Scalars['ID'];
  /**  URL to access the export job results.  */
  url: Scalars['String'];
};

export type ExportJobConnection = {
  __typename?: 'ExportJobConnection';
  /**  A list of export job edges.  */
  edges: Array<ExportJobEdge>;
  /**  Information for pagination.  */
  pageInfo: Maybe<PageInfo>;
  /**  Total count of export jobs.  */
  totalCount: Scalars['Int'];
};

export type ExportJobEdge = {
  __typename?: 'ExportJobEdge';
  /**  Cursor for pagination.  */
  cursor: Maybe<Scalars['String']>;
  /**  The export job at the end of the edge.  */
  node: ExportJob;
};

export type ExportJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ExportJobsFilter = {
  /**  Filters export jobs by their status.  */
  status?: InputMaybe<ExportJobStatus>;
};

/** Represents a fee amount on a `LandedCost` quote */
export type Fee = {
  __typename?: 'Fee';
  /** `Fee` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Fee` amount is in. @deprecated use currencyCode instead. */
  currency: CurrencyCode;
  /** Currency the `Fee` amount is in. */
  currencyCode: CurrencyCode;
  /** Human readable description of this `Fee`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Fee` amounts */
  exchangeRate: Maybe<ExchangeRate>;
  /** Human readable formula indicating how this fee was calculated */
  formula: Scalars['String'];
  /** `Item` this `Fee` amount applies to */
  item: Maybe<Item>;
  /** Additional note for this `Fee`. */
  note: Maybe<Scalars['String']>;
  /** Party responsible for receving payment on this `Fee` */
  payee: Maybe<Party>;
  /** Party responsible for rendering payment on this `Fee` */
  payor: Maybe<Party>;
  /** Type of fee */
  type: LandedCostFeeType;
};

/**
 * A `FulfillmentCenter` services a specified organization and is responsible for receiving/managing inventory and
 * shipping orders to customers. A `fulfillmentCenter` may support specific carriers and will service specified `shippingZones`.
 */
export type FulfillmentCenter = {
  __typename?: 'FulfillmentCenter';
  /** When this FulfillmentCenter was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the FulfillmentCenter */
  createdBy: Scalars['ID'];
  /** A unique identifier for the FulfillmentCenter. */
  id: Scalars['ID'];
  /** Specifies whether the FulfillmentCenter is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name for the FulfillmentCenter. */
  name: Scalars['String'];
  /** The `Organization` associated with the FulfillmentCenter. */
  organization: Scalars['ID'];
  /** The `Party` to use for the FulfillmentCenter */
  party: Party;
  /** the type of fulfillmentCenter. you can have only ONE PRIMARY fulfillmentCenter */
  type: Maybe<FulfillmentCenterType>;
  /** When this FulfillmentCenter was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the FulfillmentCenter. */
  updatedBy: Scalars['ID'];
};

export type FulfillmentCenterType = 'PRIMARY' | 'STANDARD';

export type GeneralCarrierAccountFilter = {
  /** The `CarrierAccountApiUsage` for the account */
  apiUsage?: InputMaybe<CarrierAccountApiUsage>;
  /** The `code` associated with the `Carrier` of the account */
  carrierCode?: InputMaybe<Scalars['String']>;
};

/** Determines how Zonos Hello should handle currency conversion. */
export type HelloCurrencyBehavior = 'DISABLED' | 'ENABLED';

/** Determines how Zonos Hello should handle live duty/tax estimations. */
export type HelloEstimateBehavior = 'DISABLED' | 'ENABLED';

/** Determines where Hello should display on mobile */
export type HelloMobileLocation =
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'TOP_LEFT'
  | 'TOP_RIGHT';

/** Determines whether Hello should display peeks */
export type HelloPeekMessageBehavior = 'DISABLED' | 'ENABLED';

/** Determines how Zonos Hello should handle restricted items. */
export type HelloRestrictionBehavior =
  | 'DISABLED'
  | 'RESTRICT_AND_BLOCK'
  | 'RESTRICT_AND_WARN';

/** Allows configuration of Zonos Hello. These settings can be overridden by the `zonos.init` function in the Zonos Elements SDK. */
export type HelloSettings = {
  __typename?: 'HelloSettings';
  /**
   * A list of domains to allow Hello to send frontend requests from. Hello will not function for domains not listed here.
   * @deprecated Use `allowedDomains` field on `OnlineStoreSetting` instead
   */
  allowedDomains: Array<Scalars['String']>;
  /** CSS selector for a DOM element for Hello to visually anchor to */
  anchorElementSelector: Scalars['String'];
  /** Regex pattern matching the URL of your site's cart page */
  cartUrlPattern: Maybe<Scalars['String']>;
  /** When the HelloSettings was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the HelloSettings */
  createdBy: Scalars['ID'];
  /** How Hello should handle currency conversion */
  currencyBehavior: HelloCurrencyBehavior;
  /** CSS selector for your site's currency/money fields */
  currencyElementSelector: Scalars['String'];
  /** How Hello should handle on-the-fly duty/tax estimation */
  dutyTaxEstimationBehavior: HelloEstimateBehavior;
  /** Optional list of URL patterns to not display Hello on. Regex matching supported */
  excludedUrlPatterns: Array<Scalars['String']>;
  /** Regex pattern matching the URL of your site's homepage */
  homepageUrlPattern: Maybe<Scalars['String']>;
  /** A unique identifier for the HelloSettings */
  id: Scalars['ID'];
  /** Where Hello should display on mobile */
  mobileLocation: HelloMobileLocation;
  /** Whether this HelloSettings is in live or test mode */
  mode: Mode;
  /** The organization this HelloSettings belongs to */
  organization: Scalars['ID'];
  /** Whether or not Hello should display peek messages in its collapsed view */
  peekMessageBehavior: HelloPeekMessageBehavior;
  /** If peek messages are enabled, how many seconds before they should appear after page load */
  peekMessageDelay: Scalars['Decimal'];
  /** Which element is used for the product add to cart buttons. Used to power the item restrictions feature */
  productAddToCartElementSelector: Maybe<Scalars['String']>;
  /** Which element is used for the product descriptions. Used to power the item restrictions feature */
  productDescriptionElementSelector: Maybe<Scalars['String']>;
  /** Regex pattern matching the URL of your site's product detail page */
  productDetailUrlPattern: Maybe<Scalars['String']>;
  /** Regex pattern matching the URL of your site's product list/category list pages */
  productListUrlPattern: Maybe<Scalars['String']>;
  /** Which element is used for the product prices. Used to power the item restrictions feature */
  productPriceElementSelector: Maybe<Scalars['String']>;
  /** Which element is used for the product name. Used to power the item restrictions feature */
  productTitleElementSelector: Maybe<Scalars['String']>;
  /** How Hello should handle item restrictions */
  restrictionBehavior: HelloRestrictionBehavior;
  /**
   * Deprecated. see visibilityStatus.
   * @deprecated Use `visibilityStatus` field on `HelloSettings` instead
   */
  status: Maybe<HelloStatus>;
  /** Determines billing status for Hello */
  subscriptionStatus: HelloSubscriptionStatus;
  /** When the HelloSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the HelloSettings */
  updatedBy: Scalars['ID'];
  /** The current status of the HelloSettings */
  visibilityStatus: HelloVisibilityStatus;
};

/** Deprecated: see HelloVisibilityStatus. */
export type HelloStatus = 'DISABLED' | 'ENABLED';

/** Determines billing status for Hello */
export type HelloSubscriptionStatus = 'ACTIVE' | 'INACTIVE';

/** Determines whether is enabled or not */
export type HelloVisibilityStatus = 'DISABLED' | 'ENABLED';

export type HsCode = {
  __typename?: 'HsCode';
  /** The numerically formatted HS code. */
  code: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  codeType: HsCodeType;
  /** The 2-digit ISO representation of a country. */
  countryCode: Maybe<CountryCode>;
  /** Combination of WCO and tariff schedule definitions. */
  description: HsCodeDescription;
  /** Date when an HS code becomes valid. */
  effectiveAt: Scalars['DateTime'];
  /** Date when an HS code is no longer valid. */
  expiresAt: Maybe<Scalars['DateTime']>;
  /** HS Code fragments */
  fragments: Array<HsCodeFragment>;
  /** The WCO version of the harmonized system, represented as a year. */
  majorVersion: WcoVersion;
  /** The country-specific version of the WCO core library. */
  minorVersion: Maybe<Scalars['String']>;
};

export type HsCodeDescription = {
  __typename?: 'HsCodeDescription';
  /** A modified version of the description based on the official schedule but meant to be easily understood. */
  friendly: Maybe<Scalars['String']>;
  /** A description derived from parent descriptions. */
  full: Maybe<Scalars['String']>;
  /** A shortened description derived from parent descriptions. */
  fullTruncated: Maybe<Scalars['String']>;
  /** The description taken directly from the applicable schedule. */
  htsItem: Scalars['String'];
};

export type HsCodeFragment = {
  __typename?: 'HsCodeFragment';
  /** The numerically formatted HS code fragment. */
  code: Scalars['String'];
  /** The description of the Hs code level. */
  description: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  type: HsCodeType;
};

export type HsCodeFragmentsFilter = {
  /** The country to filter by. */
  country?: InputMaybe<CountryCode>;
  /** The partial HS code to filter by. */
  partialCode: Scalars['String'];
};

export type HsCodeProvidedTreatment =
  /** Checks whether the hsCodeProvided exists and is in line with the description. If so, it will refine the classification, fixing all digits in hsCodeProvided. If not, it will classify from scratch */
  | 'CHECK_COHERENCE'
  /** Ignores the hsCodeProvided. */
  | 'IGNORE'
  /** Checks whether the hsCodeProvided exists. If so, it will refine the classification, fixing all digits in hsCodeProvided. If not, it will classify from scratch */
  | 'VALIDATE_ONLY';

export type HsCodeProvidedValidation = {
  __typename?: 'HsCodeProvidedValidation';
  /** The numerically formatted HS code fragment. */
  code: Scalars['String'];
  /** The description of the Hs code level. */
  result: HsCodeValidation;
  /** The HS Code level, i.e. heading. */
  type: HsCodeType;
};

export type HsCodeType =
  | 'CHAPTER'
  | 'EXPORT'
  | 'HEADING'
  | 'SECTION'
  | 'SUBHEADING'
  | 'TARIFF';

export type HsCodeValidateInput = {
  /** The list of countries to validate the HS code against. */
  countries?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  /** The HS code to validate. */
  hsCode: Scalars['String'];
};

export type HsCodeValidation =
  /** HS code is valid and coherent. */
  | 'COHERENT'
  /** HS code is not currently valid. */
  | 'INVALID'
  /** HS code wasn't provided. */
  | 'NOT_APPLICABLE'
  /** HS code is valid but not coherent. */
  | 'NOT_COHERENT'
  /** HS code is valid but only somewhat coherent. */
  | 'SOMEWHAT_COHERENT'
  /** HS code is valid but not checked for coherence. */
  | 'VALID';

export type HsCodeValidationSummary = {
  __typename?: 'HsCodeValidationSummary';
  /** The 2-digit ISO representation of a country. */
  country: CountryCode;
  /** The Hs code provided by the user. */
  hsCode: HsCode;
  /** The validation for the provided hsCode. */
  hsCodeProvidedValidation: Array<HsCodeProvidedValidation>;
};

export type InclusivePriceStatus = 'ACTIVE' | 'INACTIVE';

/** International Commercial Terms */
export type IncotermCode =
  /** Cost, Insurance & Freight */
  | 'CIF'
  | 'CUSTOM'
  /** Delivered At Place */
  | 'DAP'
  /** Delivered Duty Paid */
  | 'DDP'
  /** Free On Board */
  | 'FOB';

/** Represents the fields that all Invoice types will share */
export type Invoice = {
  /** The total amount due for this invoice */
  amountDue: Scalars['Decimal'];
  /** The currency the invoice amount is represented in */
  currencyCode: CurrencyCode;
  /** The date payment is due for this `CarrierInvoice` */
  dueDate: Scalars['DateTime'];
  /** ID from the Node interface */
  id: Scalars['ID'];
  /** The creation date of this `CarrierInvoice` by the carrier */
  invoiceDate: Scalars['DateTime'];
  /** The invoice number of this `CarrierInvoice` */
  invoiceNumber: Scalars['String'];
  /** The URL where we pull the invoice from */
  invoiceUrl: Maybe<Scalars['String']>;
  /** Whether the object is in live or test */
  mode: Mode;
  /** The status of the payment for this invoice */
  status: InvoiceStatus;
  /** Timestamp for when status changed */
  statusTransitions: Array<InvoiceStatusTransition>;
};

export type InvoiceCarrier =
  | 'APC'
  | 'ASENDIA'
  | 'BOX_C'
  | 'DHL'
  | 'DHL_ECOM'
  | 'EPOST'
  | 'FEDEX'
  | 'LANDMARK'
  | 'UPS';

export type InvoiceFilter = {
  /** Represents a range of dates, before, or after the due date */
  dueDateBetween?: InputMaybe<DateTimeRange>;
  /** Represents a range of dates, before, or after the invoice date */
  invoiceDateBetween?: InputMaybe<DateTimeRange>;
  /** The status of payment for a `CarrierInvoice` */
  status?: InputMaybe<InvoiceStatus>;
};

/** Enum value representing all of languages that are supported for creating invoice PDFs */
export type InvoiceLanguageCode =
  /** Bulgarian */
  | 'BG'
  /** Czech */
  | 'CS'
  /** Danish */
  | 'DA'
  /** German */
  | 'DE'
  /** Greek */
  | 'EL'
  /** English */
  | 'EN'
  /** Spanish */
  | 'ES'
  /** Finnish */
  | 'FI'
  /** Filipino (Philipines) */
  | 'FIL'
  /** French (France) */
  | 'FR'
  /** French (Canada) */
  | 'FR_CA'
  /** Croatian */
  | 'HR'
  /** Hungarian */
  | 'HU'
  /** Indonesian */
  | 'ID'
  /** Italian */
  | 'IT'
  /** Japanese */
  | 'JA'
  /** Korean */
  | 'KO'
  /** Lithuanian */
  | 'LT'
  /** Latvian */
  | 'LV'
  /** Mongolian */
  | 'MN'
  /** Malay */
  | 'MS'
  /** Maltese */
  | 'MT'
  /** Dutch */
  | 'NL'
  /** Norwegian */
  | 'NO'
  /** Polish */
  | 'PL'
  /** Portuguese (Portugal) */
  | 'PT'
  /** Portuguese (Brazil) */
  | 'PT_BR'
  /** Romanian */
  | 'RO'
  /** Russian */
  | 'RU'
  /** Slovak */
  | 'SK'
  /** Slovenian */
  | 'SL'
  /** Swedish */
  | 'SV'
  /** Thai */
  | 'TH'
  /** Turkish */
  | 'TR'
  /** Vietnamese */
  | 'VI'
  /** Chinese Simplified (China) */
  | 'ZH'
  /** Chinese Traditional (Hong Kong) */
  | 'ZH_HK'
  /** Chinese Traditional (Taiwan) */
  | 'ZH_TW';

/** Statuses that a `CarrierInvoice` can go through */
export type InvoiceStatus = 'RECEIVED' | 'RECONCILED' | 'VOIDED';

export type InvoiceStatusTransition = {
  __typename?: 'InvoiceStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `CarrierInvoice` at the associated DateTime */
  status: InvoiceStatus;
};

export type InvoiceUploadUrl = {
  __typename?: 'InvoiceUploadUrl';
  /** The carrier that the invoice was billed from */
  carrier: InvoiceCarrier;
  /** The name to give the invoice object */
  fileName: Scalars['String'];
  /** The shared prefix to give the invoice object key */
  prefix: Scalars['String'];
  /** The presigned upload URL used to store the invoice object */
  url: Scalars['String'];
};

/**
 * An `Item` represents the input for a shopping cart `Item` to be quoted for Landed Cost, Shipment Rating,
 * etc. `Item` is not intended to be stored and used long-term for things like the catalog; it is
 * purely a method for moving data around.
 */
export type Item = {
  __typename?: 'Item';
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** `Item` price all inclusive amount if inclusive amount is enabled. */
  amountInclusive: Maybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. */
  attributes: Maybe<Array<Maybe<ItemAttribute>>>;
  /** Link to an existing `CatalogItem` that contains more info about this `Item`. */
  catalogItem: Maybe<CatalogItem>;
  /** Country where the `Item` originates. */
  countryOfOrigin: Maybe<CountryCode>;
  /** Indicates where the `CountryOfOrigin` was sourced from. */
  countryOfOriginSource: Maybe<ItemValueSource>;
  /** When this `Item` was created. */
  createdAt: Scalars['DateTime'];
  /** The user that created this `Item`. */
  createdBy: Scalars['ID'];
  /** The currency this `Item` price amount is in. */
  currencyCode: CurrencyCode;
  /** The description of the `Item` for customs. */
  customsDescription: Maybe<Scalars['String']>;
  customsSpecs: Array<CustomsSpec>;
  /** Human-readable `Item` description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode: Maybe<Scalars['String']>;
  /** Indicates where the HS code for this `Item` was acquired. */
  hsCodeSource: Maybe<ItemValueSource>;
  /** `Item` ID, prefixed with `item_`. */
  id: Scalars['ID'];
  /** Optional URL to an image that represents this `Item`. */
  imageUrl: Maybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ItemType>;
  /** List of `Item` weights and dimensions. */
  measurements: Maybe<Array<Maybe<ItemMeasurement>>>;
  /** User-accessible key/value metadata. */
  metadata: Maybe<Array<Maybe<ItemMetadata>>>;
  /** Whether this `Item` was created in live or test mode. */
  mode: Mode;
  /** Human readable item name. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** The packing options of the item */
  packingPreference: Maybe<PackingPreference>;
  /**
   * The product ID of the parent `Item` for multi-SKU situations.
   * @deprecated No longer supported
   */
  parentProductId: Maybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId: Scalars['String'];
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** when the item is restricted, this property will have some details as to why. */
  restriction: Maybe<RestrictedItem>;
  /** SKU of this Item. */
  sku: Maybe<Scalars['String']>;
  /** When this `Item` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** User who most recently updated this `Item`. */
  updatedBy: Scalars['ID'];
};

export type ItemAttribute = {
  __typename?: 'ItemAttribute';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ItemAttributeInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Item Connection */
export type ItemConnection = {
  __typename?: 'ItemConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ItemEdge>>>;
  /** Field pageInfo */
  pageInfo: PageInfo;
};

/** Input to create a new Item. */
export type ItemCreateWorkflowInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: CurrencyCode;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** Name of the `Item`. */
  name?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** SKU of the `Item`. */
  sku?: InputMaybe<Scalars['String']>;
};

/** Item Edge */
export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Item>;
};

/** Input to create a new Item. */
export type ItemInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: CurrencyCode;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** Name of the `Item`. */
  name?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** ID of the root with which this Item is associated. */
  rootId?: InputMaybe<Scalars['ID']>;
  /** SKU of the `Item`. */
  sku?: InputMaybe<Scalars['String']>;
};

/** Represents `Item` weight, dimension, or other specific `Measurement`. */
export type ItemMeasurement = {
  __typename?: 'ItemMeasurement';
  /** Where the `Measurement` is sourced from. */
  source: ItemValueSource;
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export type ItemMeasurementInput = {
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export type ItemMeasurementType = 'HEIGHT' | 'LENGTH' | 'WEIGHT' | 'WIDTH';

export type ItemMetadata = {
  __typename?: 'ItemMetadata';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ItemMetadataInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ItemRestriction = {
  __typename?: 'ItemRestriction';
  /** list of country codes controls apply to */
  applicableCountries: Maybe<Array<Maybe<CountryCode>>>;
  /** Human readable summary of the goods. */
  appliesTo: Maybe<Scalars['String']>;
  /** Countries that implemented the control */
  controlCountries: Maybe<Array<Maybe<CountryCode>>>;
  /** Human readable summary of the control. */
  controlSummary: Maybe<Scalars['String']>;
  /** Denotes if the control is EXPORT or IMPORT */
  controlType: ControlType;
  /** When this `Restriction` was created */
  createdAt: Scalars['DateTime'];
  /** When this `Restriction stops applying. */
  endsAt: Maybe<Scalars['DateTime']>;
  /**
   * Human readable summary of the goods.
   * @deprecated Use `appliesTo` instead.
   */
  goodsSummary: Maybe<Scalars['String']>;
  /** HS code for this item. */
  hsCode: Scalars['String'];
  /** Item Restriction ID, prefixed with `item_restriction_`. */
  id: Scalars['ID'];
  /** Human readable description of the Restriction. */
  note: Scalars['String'];
  /** The source of the restriction. */
  sources: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When the restriction takes effect. */
  startsAt: Maybe<Scalars['DateTime']>;
  /** The category of restriction that applies to the item being sent. These will be categorized as OBSERVATION, PROHIBITION, or RESTRICTION. */
  type: ItemRestrictionType;
};

/** Denotes if the user should continue to review the results further or not. Will be displayed as NO_MATCH or REVIEW. */
export type ItemRestrictionAction =
  | 'NO_MATCH'
  | 'OBSERVATIONS_APPLY'
  | 'PROHIBITIONS_APPLY'
  | 'RESTRICTIONS_APPLY';

export type ItemRestrictionApplyInput = {
  /** The items needing to be checked for restrictions. */
  items: Array<ItemRestrictionInput>;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold?: InputMaybe<ItemRestrictionType>;
  /** Origin country. */
  shipFromCountry: CountryCode;
  /** Destination country. */
  shipToCountry: CountryCode;
};

export type ItemRestrictionInput = {
  /** Country in which the item originates. */
  countryOfOrigin: CountryCode;
  /** Human readable item description */
  description?: InputMaybe<Scalars['String']>;
  /** HS code for this item. */
  hsCode: Scalars['String'];
  /** External id for consumers mapping if desired */
  itemId?: InputMaybe<Scalars['String']>;
};

/** The resulting of applying the restriction to a list of items. */
export type ItemRestrictionResult = {
  __typename?: 'ItemRestrictionResult';
  /** When this RestrictionResult was created */
  createdAt: Scalars['DateTime'];
  /** The user that created this RestrictionResult */
  createdBy: Scalars['ID'];
  /** RestrictionResult ID, prefixed with `restriction_result_` */
  id: Scalars['ID'];
  items: Array<Maybe<AppliedItemRestrictions>>;
  /** Denotes if this is LIVE or TEST */
  mode: Mode;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold: ItemRestrictionType;
  /** Origin country. */
  shipFromCountry: CountryCode;
  /** Destination country. */
  shipToCountry: CountryCode;
};

/** ItemRestrictionResult Connection */
export type ItemRestrictionResultConnection = {
  __typename?: 'ItemRestrictionResultConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ItemRestrictionResultEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** ItemRestrictionResult Edge */
export type ItemRestrictionResultEdge = {
  __typename?: 'ItemRestrictionResultEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ItemRestrictionResult>;
};

export type ItemRestrictionType = 'OBSERVATION' | 'PROHIBITION' | 'RESTRICTION';

export type ItemRestrictionsResult = {
  __typename?: 'ItemRestrictionsResult';
  id: Scalars['ID'];
};

export type ItemType =
  /** The item is a bundle of other items */
  | 'BUNDLE'
  /** The item is a digital good */
  | 'DIGITAL_GOOD'
  /** A part of an item */
  | 'PARTIAL_ITEM'
  /** The item is a physical good */
  | 'PHYSICAL_GOOD'
  /** The item is a service */
  | 'SERVICE'
  /** The item is a subscription */
  | 'SUBSCRIPTION';

export type ItemUnitOfMeasure =
  | 'CENTIMETER'
  | 'FOOT'
  | 'GRAM'
  | 'INCH'
  | 'KILOGRAM'
  | 'METER'
  | 'MILLIMETER'
  | 'OUNCE'
  | 'POUND'
  | 'YARD';

export type ItemUpdateInput = {
  /** `Item` price amount. @deprecated */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. @deprecated */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** Country where the `Item` originates. @deprecated */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency this `Item` price amount is in. @deprecated */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Human-readable `Item` description. @deprecated */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. @deprecated */
  hsCode?: InputMaybe<Scalars['String']>;
  /** ID of `Item` to update. */
  id?: InputMaybe<Scalars['ID']>;
  /** Optional URL to an image that represents this `Item`. @deprecated */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Data to update in `Item`. */
  item?: InputMaybe<ItemInput>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** List of `Item` weights and dimensions. @deprecated */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** User-accessible key/value metadata. @deprecated */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** Name of the `Item`. @deprecated */
  name?: InputMaybe<Scalars['String']>;
  /** The product ID of the parent `Item` for multi-SKU situations. @deprecated */
  parentProductId?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. @deprecated */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. @deprecated */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. @deprecated */
  quantity?: InputMaybe<Scalars['Int']>;
  /** ID of the root with which this Item is associated. @deprecated */
  rootId?: InputMaybe<Scalars['ID']>;
  /** SKU of this Item. @deprecated */
  sku?: InputMaybe<Scalars['String']>;
};

export type ItemValueSource =
  | 'API_REQUEST'
  | 'CATALOG'
  | 'ORGANIZATION_SETTING';

export type ItemsUpdateInput = {
  items: Array<ItemUpdateInput>;
};

export type Label = {
  __typename?: 'Label';
  /** The carrier that the label was created for */
  carrier: Carrier;
  /** The date and time this Label was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Label */
  createdBy: Scalars['ID'];
  /** The way in which the documents were filed for the label */
  documentFiling: DocumentFilingType;
  /** A unique identifier for the label */
  id: Scalars['ID'];
  /** A list of amounts associated with the label */
  labelAmounts: Maybe<Array<LabelAmount>>;
  /** Indicates the desired type of file for the label */
  labelFileType: LabelFileType;
  /** Base64 encoded image of the label created by the carrier */
  labelImage: Scalars['String'];
  /** Indicates the desired size of the label */
  labelSize: LabelSize;
  /** The label request sent to the carrier */
  requestLog: Maybe<LabelRequestLog>;
  /** The carton that the label was created for */
  shipmentCarton: Scalars['ID'];
  /** The current status of the label */
  status: LabelStatusType;
  /** A list of changes to the status of the label */
  statusTransitions: Array<LabelStatusTransition>;
  /** The tracking number associated with the label */
  trackingNumber: Scalars['String'];
  /** The url where the label is stored */
  url: Scalars['String'];
};

export type LabelAmount = {
  __typename?: 'LabelAmount';
  /** The value of the amount */
  amount: Scalars['Decimal'];
  /** The type of amount */
  amountType: LabelAmountType;
  /** The currency that the amount is in */
  currencyCode: CurrencyCode;
};

export type LabelAmountType =
  /** Added fee to the cost of the label */
  | 'FEE'
  /** Insurance value on the label */
  | 'INSURANCE'
  /** The postage quote received from the Carrier */
  | 'QUOTE';

export type LabelConnection = {
  __typename?: 'LabelConnection';
  /** A list of `LabelEdge` objects */
  edges: Array<LabelEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `Label` objects in the connection */
  totalCount: Scalars['Int'];
};

export type LabelCreateInput = {
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** ITN Number to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<LabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<LabelSize>;
  /** The shipment for which the label is being generated */
  shipment: Scalars['ID'];
};

export type LabelCreateWorkflowInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<LabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<LabelSize>;
};

export type LabelEdge = {
  __typename?: 'LabelEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `Label` object located at this edge */
  node: Maybe<Label>;
};

export type LabelFileType =
  /** Label will be saved in a PDF format */
  | 'PDF'
  /** Label will be saved in a ZPL format */
  | 'ZPL';

export type LabelFilter = {
  /** The carrier for which the label was generated */
  carrier?: InputMaybe<Scalars['ID']>;
  /** A date range to filter Label objects by their created date */
  createdDate?: InputMaybe<DateTimeRange>;
  /** A status to filter Label objects by their current status */
  status?: InputMaybe<LabelStatusType>;
};

/** LabelRequestLog represents the carrier request and response used to retrieve a `Label` */
export type LabelRequestLog = {
  __typename?: 'LabelRequestLog';
  /** The date and time this LabelRequestLog was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the organization that created the LabelRequestLog */
  createdBy: Scalars['ID'];
  /** A unique identifier for the LabelRequestLog */
  id: Scalars['ID'];
  /** An id of the `Label` associated with the LabelRequestLog */
  labelId: Maybe<Scalars['ID']>;
  /** The request body sent to the carrier */
  request: Maybe<Scalars['String']>;
  /** The response body returned by the carrier */
  response: Maybe<Scalars['String']>;
  /** An id of the `Shipment` associated with the LabelRequestLog */
  shipmentId: Maybe<Scalars['ID']>;
};

export type LabelRequestLogConnection = {
  __typename?: 'LabelRequestLogConnection';
  /** A list of `LabelRequestLogEdge` objects */
  edges: Array<LabelRequestLogEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `LabelRequestLog` objects in the connection */
  totalCount: Scalars['Int'];
};

export type LabelRequestLogEdge = {
  __typename?: 'LabelRequestLogEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `LabelRequestLog` object located at this edge */
  node: Maybe<LabelRequestLog>;
};

export type LabelRequestLogFilter = {
  /** An id of the `Label` associated with the LabelRequestLog */
  labelId?: InputMaybe<Scalars['ID']>;
  /** An id of the `Shipment` associated with the LabelRequestLog */
  shipmentId?: InputMaybe<Scalars['ID']>;
};

export type LabelSettings = {
  __typename?: 'LabelSettings';
  /** Timestamp of when the LabelSettings were created */
  createdAt: Scalars['DateTime'];
  /** The user who created the LabelSettings */
  createdBy: Scalars['ID'];
  /** `DescriptionOverride` gives the option to override descriptions displayed on labels, customs documents, or both */
  descriptionOverride: Maybe<DescriptionOverride>;
  /** Unique identifier for this `LabelSettings` object */
  id: Scalars['ID'];
  /** Indicates the default file type used when creating labels */
  labelFileType: Maybe<LabelFileType>;
  /** Indicates the default size to use when creating labels */
  labelSize: Maybe<LabelSize>;
  /** The ID of the `Organization` these LabelSettings belong to */
  organization: Scalars['ID'];
  /** Indicates who will be responsible for paying the shipping charges */
  shippingPayment: Maybe<ShippingPaymentType>;
  /** When the LabelSettings were most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the LabelSettings */
  updatedBy: Scalars['ID'];
};

export type LabelSettingsUpdateInput = {
  /** `DescriptionOverride` gives the option to override descriptions displayed on labels, customs documents, or both */
  descriptionOverride?: InputMaybe<DescriptionOverrideInput>;
  /** Indicates the default file type used when creating labels */
  labelFileType?: InputMaybe<LabelFileType>;
  /** Indicates the default size to use when creating labels */
  labelSize?: InputMaybe<LabelSize>;
  /** Indicates who will be responsible for paying the shipping charges */
  shippingPayment?: InputMaybe<ShippingPaymentType>;
};

export type LabelSize =
  /** 8x11 label size */
  | 'EIGHT_BY_ELEVEN'
  /** 4x8 label size */
  | 'FOUR_BY_EIGHT'
  /** 4x6 label size */
  | 'FOUR_BY_SIX';

export type LabelSpecInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<LabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<LabelSize>;
};

export type LabelStatusTransition = {
  __typename?: 'LabelStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Label` at the associated DateTime */
  status: LabelStatusType;
};

export type LabelStatusType = 'CREATED' | 'VOIDED';

export type LabelVoidInput = {
  /** Label to be voided */
  id: Scalars['ID'];
  /** Optional note about reason to be voided */
  note?: InputMaybe<Scalars['String']>;
};

/**
 * A `LandedCost` represents the result of a landed cost calculation. `LandedCost` quotes belong to a `Root`
 * resource and additionally include a `ShipmentRating` resource with additional details about the shipping
 * costs
 */
export type LandedCost = {
  __typename?: 'LandedCost';
  /** Amount totals for duties, taxes, fees */
  amountSubtotals: Maybe<LandedCostAmountSubtotals>;
  /** When this `LandedCost` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `LandedCost` */
  createdBy: Scalars['ID'];
  /** Currency code of the LandedCost. */
  currencyCode: CurrencyCode;
  /** A list of de minimis thresholds and what values they apply to */
  deMinimis: Array<DeMinimis>;
  /** A list of duties assessed for this `LandedCost` */
  duties: Array<Duty>;
  /** End use for items included in this quote */
  endUse: LandedCostEndUse;
  /** A list of fees assessed for this `LandedCost` */
  fees: Array<Fee>;
  /** `LandedCost` resource ID, prefixed with `landed_cost_` */
  id: Scalars['ID'];
  /** Indicates if the landed cost is covered by the Zonos Landed Cost Guarantee */
  landedCostGuaranteeCode: LandedCostGuaranteeCode;
  /** INCOTERM used to perform calculations */
  method: IncotermCode;
  /** Indicates whether this `LandedCost` was created in live or test mode */
  mode: Mode;
  /** `Organization` that this `LandedCost` belongs to */
  organization: Scalars['ID'];
  /** The taxes that should be remitted. */
  remittance: Array<LandedCostRemittance>;
  /** `Root` resource that this `LandedCost` belongs to */
  root: Maybe<Root>;
  /** `Root` resource ID that this `LandedCost` belongs to */
  rootId: Scalars['ID'];
  /** `ShipmentRating` that contains shipping cost and other related details for this `LandedCost` */
  shipmentRating: ShipmentRating;
  /** Indicates what method Zonos used to calculate the tariff rates for this `LandedCost` */
  tariffRate: LandedCostTariffRate;
  taxId: Maybe<TaxId>;
  /** A list of taxes assessed for this `LandedCost` */
  taxes: Array<Tax>;
  /** When this `LandedCost` was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `LandedCost` */
  updatedBy: Scalars['ID'];
};

/** The subtotals that make up a landed cost. */
export type LandedCostAmountSubtotals = {
  __typename?: 'LandedCostAmountSubtotals';
  /** Total amount of all duties. */
  duties: Scalars['Decimal'];
  /** Total amount of all fees. */
  fees: Scalars['Decimal'];
  /** Total amount of all items. */
  items: Scalars['Decimal'];
  /** Total amount of duties, taxes, and fees. */
  landedCostTotal: Scalars['Decimal'];
  /** Total amount of shipping. */
  shipping: Scalars['Decimal'];
  /** Total amount of all taxes. */
  taxes: Scalars['Decimal'];
};

export type LandedCostBillingPartyType =
  | 'CUSTOMER'
  | 'MERCHANT'
  | 'THIRD_PARTY'
  | 'ZONOS';

export type LandedCostCalculationMethod =
  /** Only provide a DAP quote. */
  | 'DAP'
  /** Only provide a DDP. */
  | 'DDP'
  /** Provide both a DDP and DAP quote. */
  | 'DDP_AND_DAP'
  /** provide a DDP quote but return a DAP quote if DDP is not allowed. */
  | 'DDP_PREFERRED'
  /** Use the Zonos configured profile settings to provide a DDP or DAP quote. */
  | 'ZONOS_CONFIGURED';

export type LandedCostConnection = {
  __typename?: 'LandedCostConnection';
  edges: Maybe<Array<Maybe<LandedCostEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type LandedCostEdge = {
  __typename?: 'LandedCostEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<LandedCost>;
};

export type LandedCostEndUse =
  /** Item quoted will be resold upon import */
  | 'FOR_RESALE'
  /** Item quoted will not be resold upon import (e.g. personal use, gift) */
  | 'NOT_FOR_RESALE';

export type LandedCostFeeType =
  | 'ADDITIONAL_TARIFF_LINES'
  | 'ADJUSTMENT'
  | 'ADVANCEMENT'
  | 'BROKERAGE_FEE'
  | 'BUFFER'
  | 'COD'
  | 'COUNTRY'
  | 'CURRENCY_CONVERSION_FEE'
  | 'DDP_SERVICE_FEE'
  | 'DUTY'
  | 'INCLUSIVE_PRICE_ADJUSTMENT'
  | 'INCLUSIVE_PRICING'
  | 'ITEM'
  | 'OTHER'
  | 'SHIPPING'
  | 'TAX'
  | 'ZONOS_ACCESS_FEE'
  | 'ZONOS_LANDED_COST'
  | 'ZONOS_LANDED_COST_GUARANTEE'
  | 'ZONOS_MERCHANT_FEE'
  | 'ZONOS_MERCHANT_PROCESSING'
  | 'ZONOS_TRANSACTION';

export type LandedCostFilter = {
  /** Return `LandedCost` resources created after a given  (inclusive) */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Return `LandedCost` resources created before a given date (inclusive) */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
  shipFromCountry?: InputMaybe<CountryCode>;
  shipToCountry?: InputMaybe<CountryCode>;
};

export type LandedCostGuaranteeCode =
  /** No guarantee */
  | 'NOT_APPLICABLE'
  /** Zonos covers any landed cost discrepancies */
  | 'ZONOS';

export type LandedCostGuaranteeType = 'DISABLED' | 'ENABLED';

export type LandedCostInclusivePrice = {
  __typename?: 'LandedCostInclusivePrice';
  landedCost: LandedCost;
};

export type LandedCostInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<LandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: LandedCostEndUse;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<IncotermCode>;
  /** `Root` resource that this `LandedCost` will belong to */
  rootId: Scalars['ID'];
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: LandedCostTariffRate;
};

/** The method to use for the landed cost calculation. */
export type LandedCostMethod =
  /** Only provide a DAP quote */
  | 'DAP_FORCED'
  /** Provide both a DDP and DAP quote */
  | 'DDP_AND_DAP'
  /** Only provide a DDP  */
  | 'DDP_FORCED'
  /** provide a DDP quote but return a DAP quote if DDP is not allowed */
  | 'DDP_PREFERRED';

/** Represents the tax remittance values required by specific entities. */
export type LandedCostRemittance = {
  __typename?: 'LandedCostRemittance';
  /** The price amount of the tax remittance. */
  amount: Scalars['Decimal'];
  /** The type of tax remittance. */
  description: Scalars['String'];
  /** A note on where to remit the tax remittance. */
  note: Scalars['String'];
};

export type LandedCostSettings = {
  __typename?: 'LandedCostSettings';
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['String']>;
  defaultCountryOfOrigin: Maybe<CountryCode>;
  defaultCustomsDescription: Maybe<Scalars['String']>;
  defaultHarmonizedCode: Maybe<Scalars['String']>;
  disableDiscountedFee: Scalars['Boolean'];
  id: Scalars['String'];
  landedCostGuarantee: Maybe<LandedCostGuaranteeType>;
  minimumHsCodeLength: Maybe<Scalars['Int']>;
  mode: Mode;
  organization: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['String']>;
};

export type LandedCostTariffRate =
  /** Exact tariff rate for provided HS code will be used. If not possible, an error will be returned */
  | 'EXACT'
  /** Maximum tariff rate for provided HS code will be used */
  | 'MAXIMUM'
  /** Median tariff rate for provided HS code will be used */
  | 'MEDIAN'
  /** Lowest tariff rate for provided HS code will be used */
  | 'MINIMUM'
  /** Zonos will attempt to calculate best tariff rate for provided HS code (recomended) */
  | 'ZONOS_PREFERRED';

export type LandedCostWeightUnit =
  | 'CG'
  | 'CT'
  | 'G'
  | 'KG'
  | 'LB'
  | 'MG'
  | 'OZ'
  | 'T';

export type LandedCostWorkFlowInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<LandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: LandedCostEndUse;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<IncotermCode>;
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: LandedCostTariffRate;
};

export type LanguageCode =
  /** Afrikaans */
  | 'AF'
  /** Amharic */
  | 'AM'
  /** Arabic */
  | 'AR'
  /** Azerbaijani */
  | 'AZ'
  /** Belarusian */
  | 'BE'
  /** Bulgarian */
  | 'BG'
  /** Bengali */
  | 'BN'
  /** Bosnian */
  | 'BS'
  /** Catalan */
  | 'CA'
  /** Cebuano */
  | 'CEB'
  /** Corsican */
  | 'CO'
  /** Czech */
  | 'CS'
  /** Welsh */
  | 'CY'
  /** Danish */
  | 'DA'
  /** German */
  | 'DE'
  /** Greek */
  | 'EL'
  /** English */
  | 'EN'
  /** Esperanto */
  | 'EO'
  /** Spanish */
  | 'ES'
  /** Estonian */
  | 'ET'
  /** Basque */
  | 'EU'
  /** Persian */
  | 'FA'
  /** Finnish */
  | 'FI'
  /** French */
  | 'FR'
  /** Frisian */
  | 'FY'
  /** Irish */
  | 'GA'
  /** Scots Gaelic */
  | 'GD'
  /** Galician */
  | 'GL'
  /** Gujarati */
  | 'GU'
  /** Hausa */
  | 'HA'
  /** Hawaiian */
  | 'HAW'
  /** Hebrew (2 possible values) */
  | 'HE'
  /** Hindi */
  | 'HI'
  /** Hmong */
  | 'HMN'
  /** Croatian */
  | 'HR'
  /** Haitian Creole */
  | 'HT'
  /** Hungarian */
  | 'HU'
  /** Armenian */
  | 'HY'
  /** Indonesian */
  | 'ID'
  /** Igbo */
  | 'IG'
  /** Icelandic */
  | 'IS'
  /** Italian */
  | 'IT'
  | 'IW'
  /** Japanese */
  | 'JA'
  /** Javanese */
  | 'JV'
  /** Georgian */
  | 'KA'
  /** Kazakh */
  | 'KK'
  /** Khmer */
  | 'KM'
  /** Kannada */
  | 'KN'
  /** Korean */
  | 'KO'
  /** Kurdish */
  | 'KU'
  /** Kyrgyz */
  | 'KY'
  /** Luxembourgish */
  | 'LB'
  /** Lao */
  | 'LO'
  /** Lithuanian */
  | 'LT'
  /** Latvian */
  | 'LV'
  /** Malagasy */
  | 'MG'
  /** Maori */
  | 'MI'
  /** Macedonian */
  | 'MK'
  /** Malayalam */
  | 'ML'
  /** Mongolian */
  | 'MN'
  /** Marathi */
  | 'MR'
  /** Malay */
  | 'MS'
  /** Maltese */
  | 'MT'
  /** Myanmar (Burmese) */
  | 'MY'
  /** Napali */
  | 'NE'
  /** Dutch */
  | 'NL'
  /** Norwegian */
  | 'NO'
  /** Nyanja (Chichewa) */
  | 'NY'
  /** Odia (Oriya) */
  | 'OR'
  /** Punjabi */
  | 'PA'
  /** Polish */
  | 'PL'
  /** Pashto */
  | 'PS'
  /** Portuguese (Portugal, Brazil) */
  | 'PT'
  /** Romanian */
  | 'RO'
  /** Russian */
  | 'RU'
  /** Kinyarwanda */
  | 'RW'
  /** Sindhi */
  | 'SD'
  /** Sinhala (Sinhalese) */
  | 'SI'
  /** Slovak */
  | 'SK'
  /** Slovenian */
  | 'SL'
  /** Samoan */
  | 'SM'
  /** Shona */
  | 'SN'
  /** Somali */
  | 'SO'
  /** Albanian */
  | 'SQ'
  /** Serbian */
  | 'SR'
  /** Sesotho */
  | 'ST'
  /** Sundanese */
  | 'SU'
  /** Swedish */
  | 'SV'
  /** Swahili */
  | 'SW'
  /** Tamil */
  | 'TA'
  /** Telugu */
  | 'TE'
  /** Tajik */
  | 'TG'
  /** Thai */
  | 'TH'
  /** Turkmen */
  | 'TK'
  /** Tagalog (Filipino) */
  | 'TL'
  /** Turkish */
  | 'TR'
  /** Tatar */
  | 'TT'
  /** Uyghur */
  | 'UG'
  /** Ukrainian */
  | 'UK'
  /** Urdu */
  | 'UR'
  /** Uzbek */
  | 'UZ'
  /** Vietnamese */
  | 'VI'
  /** Xhosa */
  | 'XH'
  /** Yiddish */
  | 'YI'
  /** Yoruba */
  | 'YO'
  /** Chinese (Simplified) */
  | 'ZH_CN'
  /** Chinese (Traditional) */
  | 'ZH_TW'
  /** Zulu */
  | 'ZU';

export type LcgBillingMethod = 'BILLING_DGS' | 'LEGACY';

/** An implementation of `ReconciliationCharge` that represents an `OrderTransaction` used in Legacy APIs */
export type LegacyOrderTransactionCharge = ReconciliationCharge & {
  __typename?: 'LegacyOrderTransactionCharge';
  /** The sum of the transaction fees for this `LegacyOrderTransaction` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `LegacyOrderTransactionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this `LegacyOrderTransactionCharge` */
  createdBy: Scalars['ID'];
  /** The currency the amount is displayed in */
  currencyCode: CurrencyCode;
  /** A unique identifier for this `LegacyOrderTransactionCharge` */
  id: Scalars['ID'];
  /** The ID of the legacy order transaction this object represents */
  legacyOrderTransactionId: Scalars['Int'];
  /** An optional note about this `LegacyOrderTransactionCharge` */
  note: Maybe<Scalars['String']>;
  /** A list of `TransactionFee` objects to describe transaction amounts */
  transactionFees: Array<TransactionFee>;
};

export type Location = {
  __typename?: 'Location';
  administrativeArea: Maybe<Scalars['String']>;
  administrativeAreaCode: Maybe<Scalars['String']>;
  countryCode: CountryCode;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  id: Scalars['ID'];
  latitude: Maybe<Scalars['Decimal']>;
  line1: Maybe<Scalars['String']>;
  line2: Maybe<Scalars['String']>;
  line3: Maybe<Scalars['String']>;
  line4: Maybe<Scalars['String']>;
  locality: Maybe<Scalars['String']>;
  longitude: Maybe<Scalars['Decimal']>;
  metadata: Maybe<Array<Maybe<PartyMetadata>>>;
  mode: Mode;
  organization: Scalars['ID'];
  plusCode: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  propertyType: Maybe<PropertyType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type LocationCreateInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyType>;
};

export type ManualClassification = {
  __typename?: 'ManualClassification';
  /** The date and time when the classification was archived. */
  archivedAt: Maybe<Scalars['DateTime']>;
  /** The ID of the user who archived the classification. */
  archivedBy: Maybe<Scalars['ID']>;
  /** The date and time when the classification was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the classification. */
  createdBy: Scalars['ID'];
  /** The Harmonized System (HS) code assigned to the item. */
  hsCode: Scalars['String'];
  /** The unique identifier of the ManualClassification. */
  id: Scalars['ID'];
  /** The unique key identifying the item associated with this classification. */
  itemKey: Scalars['String'];
  /** The ManualClassificationRequest associated with this classification. */
  manualClassificationRequest: ManualClassificationRequest;
  /** The ID of the organization associated with this classification. */
  organizationId: Scalars['ID'];
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry: Maybe<CountryCode>;
};

export type ManualClassificationConnection = {
  __typename?: 'ManualClassificationConnection';
  edges: Array<ManualClassificationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ManualClassificationCreateInput = {
  /** The HS code assigned to the item. */
  hsCode: Scalars['String'];
  /** The unique key identifying the item. */
  itemKey: Scalars['String'];
  organizationId: Scalars['ID'];
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry?: InputMaybe<CountryCode>;
  /** Visibility status of the provided HS code. */
  visibilityStatus?: InputMaybe<ProvidedHsCodeVisibilityStatus>;
};

export type ManualClassificationEdge = {
  __typename?: 'ManualClassificationEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ManualClassification>;
};

export type ManualClassificationRequest = {
  __typename?: 'ManualClassificationRequest';
  /** The date and time when the request was archived. */
  archivedAt: Maybe<Scalars['DateTime']>;
  /** The ID of the user who archived the request. */
  archivedBy: Maybe<Scalars['ID']>;
  /** Categories associated with the item to be classified. */
  categories: Maybe<Array<Scalars['String']>>;
  /** The unique identifier of the classification associated with this request. */
  classification: Maybe<Classification>;
  /** The confidence score associated with the classification request. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** The date and time when the request was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the request. */
  createdBy: Scalars['ID'];
  /** A description of the item to be classified. */
  description: Maybe<Scalars['String']>;
  /** The due date for completing the manual classification. */
  dueAt: Scalars['DateTime'];
  /** The unique identifier of the ManualClassificationRequest. */
  id: Scalars['ID'];
  /** The URL of an image of the item to be classified. */
  imageUrl: Maybe<Scalars['String']>;
  /** The unique key identifying the item to be classified. */
  itemKey: Scalars['String'];
  /** The material composition of the item, if applicable. */
  material: Maybe<Scalars['String']>;
  /** The name or title of the item to be classified. */
  name: Scalars['String'];
  /** The ID of the organization making the classification request. */
  organizationId: Scalars['ID'];
  /** The provided HS code for the item. */
  providedHsCode: Scalars['String'];
  /** The ID of the user who has reserved the request. */
  reservedBy: Maybe<Scalars['ID']>;
  /** The date and time when the request was reserved. */
  reservedUntil: Maybe<Scalars['DateTime']>;
  /** The country code for which this classification request is applicable. */
  shipToCountry: Maybe<CountryCode>;
  /** The status of the manual classification request. */
  status: ManualClassificationRequestStatus;
};

export type ManualClassificationRequestConnection = {
  __typename?: 'ManualClassificationRequestConnection';
  edges: Array<ManualClassificationRequestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ManualClassificationRequestCreateInput = {
  /** Categories associated with the classification request. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Confidence score of the automatic classification, if any. */
  confidenceScore?: InputMaybe<Scalars['Decimal']>;
  /** Description of the item for manual classification. */
  description?: InputMaybe<Scalars['String']>;
  /** URL of the item's image for reference. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Unique key identifying the item to be classified. */
  itemKey: Scalars['String'];
  /** Material composition of the item, if known. */
  material?: InputMaybe<Scalars['String']>;
  /** Name or title of the item. */
  name: Scalars['String'];
  /** HS code provided by the requester, if any. */
  providedHsCode?: InputMaybe<Scalars['String']>;
  /** Country code for the ship-to country. */
  shipToCountry?: InputMaybe<CountryCode>;
};

export type ManualClassificationRequestCreateResponse = {
  __typename?: 'ManualClassificationRequestCreateResponse';
  manualClassificationRequest: ManualClassificationRequest;
  result: ManualClassificationRequestCreateStatus;
};

export type ManualClassificationRequestCreateStatus =
  /** The request was created successfully. */
  | 'CREATED'
  /** The request was not created successfully. */
  | 'EXISTING';

export type ManualClassificationRequestEdge = {
  __typename?: 'ManualClassificationRequestEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ManualClassificationRequest>;
};

export type ManualClassificationRequestStatus =
  | 'COMPLETED'
  | 'INVALIDATED'
  | 'PENDING'
  | 'RESERVED';

export type ManualClassificationRequestsFilter = {
  /** Filters requests created after a specific date. */
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests created before a specific date. */
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests due after a specific date. */
  dueAfter?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests due before a specific date. */
  dueBefore?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests associated with a specific itemKey. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** Filters requests associated with a specific organization ID. */
  organizationId?: InputMaybe<Scalars['ID']>;
  /** Filters requests intended to ship to a specific country. */
  shipToCountry?: InputMaybe<CountryCode>;
  /** Determines the sorting order of the requests, defaults to priority. */
  sort?: InputMaybe<Array<InputMaybe<ManualClassificationRequestsSorting>>>;
  /** Filters requests by their status, default is pending. */
  status?: InputMaybe<ManualClassificationRequestStatus>;
};

export type ManualClassificationRequestsReserveInput = {
  /** Defines the amount of `ManualClassificationRequest`s to reserve. Defaults to 50. */
  reservationAmount?: InputMaybe<Scalars['Int']>;
};

export type ManualClassificationRequestsSorting = 'HS_CODE' | 'PRIORITY';

export type ManualClassificationSetting = {
  __typename?: 'ManualClassificationSetting';
  /** The date and time when the setting was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the setting. */
  createdBy: Scalars['ID'];
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment: Scalars['Int'];
  /** The unique identifier of the ManualClassificationSetting. */
  id: Scalars['ID'];
  /** The minimum amount of confidence in a classification before it is sent to the Manual Classification Queue. It cannot be higher than .50 */
  minConfidenceThreshold: Scalars['Decimal'];
  /** The ID of the organization this setting applies to. */
  organizationId: Scalars['ID'];
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields: Array<ClassificationRequestField>;
  /** The status of the manual classification setting. If disabled, manual classification will not be triggered. */
  status: ManualClassificationSettingStatus;
  /** The date and time when the setting was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who last updated the setting. */
  updatedBy: Scalars['ID'];
};

export type ManualClassificationSettingCreateInput = {
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment: Scalars['Int'];
  /** The minimum confidence score a `Classification` can have before triggering a `ManualClassificationRequest`. */
  minConfidenceThreshold: Scalars['Decimal'];
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields: Array<ClassificationRequestField>;
  /** The status of the manual classification setting. If disabled, manual classification request will not be triggered. */
  status?: InputMaybe<ManualClassificationSettingStatus>;
};

export type ManualClassificationSettingStatus = 'DISABLED' | 'ENABLED';

export type ManualClassificationSettingUpdateInput = {
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment?: InputMaybe<Scalars['Int']>;
  /** The updated minimum confidence score threshold for manual classification. */
  minConfidenceThreshold?: InputMaybe<Scalars['Decimal']>;
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields?: InputMaybe<Array<ClassificationRequestField>>;
  /** The status of the manual classification setting. If disabled, manual classification request will not be triggered. */
  status?: InputMaybe<ManualClassificationSettingStatus>;
};

export type ManualClassificationStatus = 'ACTIVE' | 'ARCHIVED';

export type ManualClassificationValidateInput = {
  /** Categories of the item. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The description of the item. */
  description?: InputMaybe<Scalars['String']>;
  /** Unique key identifying the item to be classified. */
  itemKey: Scalars['String'];
  /** The name or title of the item. */
  name?: InputMaybe<Scalars['String']>;
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry?: InputMaybe<CountryCode>;
};

export type ManualClassificationValidateResponse = {
  __typename?: 'ManualClassificationValidateResponse';
  invalidManualClassificationRequests: Array<ManualClassificationRequest>;
  invalidManualClassifications: Array<ManualClassification>;
  validManualClassification: Maybe<ManualClassification>;
};

export type ManualClassificationsFilter = {
  /** Filters classifications associated with a specific item key. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** Filters classifications intended for a specific ship-to country. */
  shipToCountries?: InputMaybe<Array<CountryCode>>;
  /** Filters classifications by their status. */
  status?: InputMaybe<ManualClassificationStatus>;
  /** Filters based on the visibility status of the providedHsCode at the time of manual classification. */
  visibilityStatus?: InputMaybe<ProvidedHsCodeVisibilityStatus>;
};

export type MatchType = 'EXACT_MATCH' | 'NO_MATCH' | 'PARTIAL_MATCH';

export type Metadata = {
  __typename?: 'Metadata';
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type MetadataInput = {
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type Mode = 'LIVE' | 'TEST';

export type MultiFactorAuthSetting = 'DISABLED' | 'ENABLED';

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingCreate: Array<
    Maybe<CarrierInvoiceAccountNumberMapping>
  >;
  /** Delete a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingDelete: Result;
  /** Update a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingUpdate: Array<
    Maybe<CarrierInvoiceAccountNumberMapping>
  >;
  /** Create a `CarrierInvoice` */
  carrierInvoiceCreate: Array<Maybe<CarrierInvoice>>;
  /** Reconcile a `CarrierInvoiceLineItem` by manually billing a specified amount */
  carrierInvoiceLineItemBillingCreate: Array<Reconciliation>;
  /** Reconcile a `CarrierInvoiceLineItem` by checking for existing billing records or transactions */
  carrierInvoiceLineItemReconcile: Array<Reconciliation>;
  /** Update an existing `CarrierInvoiceLineItem` */
  carrierInvoiceLineItemUpdate: Array<Maybe<CarrierInvoiceLineItem>>;
  /** Generate upload URLs for carrier invoice objects that will share a common `prefix` */
  carrierInvoiceUploadUrlGenerate: Array<InvoiceUploadUrl>;
  /** Creates a `Carton` from a workflow request */
  cartonizeWorkflow: Maybe<Array<Maybe<Carton>>>;
  /** Creates `Carton's` from a workflow request */
  cartonsCreateWorkflow: Maybe<Array<Maybe<Carton>>>;
  /** Create one or many `CatalogItem`. */
  catalogItemCreate: Array<CatalogItem>;
  /** Delete one or many `CatalogItem`. */
  catalogItemDelete: Result;
  /**  Creates a new catalog item delete job.  */
  catalogItemDeleteJobCreate: DeleteJob;
  /**  Creates a new catalog item export job for the given catalog item IDs.  */
  catalogItemExportByIds: ExportJob;
  /**  Creates a new catalog item export job and will send an email to the caller when complete. */
  catalogItemExportJobCreate: ExportJob;
  /** Update one or many `CatalogItem`. */
  catalogItemUpdate: Array<CatalogItem>;
  /** Allows an API consumer to calculate a new `Classification` using the provided inputs. */
  classificationsCalculate: Array<Classification>;
  /** Creates the `collectInvoiceFeeConfiguration` for the calling tokens `Organization` */
  collectInvoiceFeeConfigurationCreate: CollectInvoiceFeeConfiguration;
  /** Creates a fee for an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeCreate: CollectInvoiceFee;
  /** Updates a fee on an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeUpdate: CollectInvoiceFee;
  /** Adds a Zonos fee for an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeZonosCreate: CollectInvoiceFee;
  /** Updates a Zonos fee on an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeZonosUpdate: CollectInvoiceFee;
  collectInvoiceSettingsUpdate: CollectInvoiceSettings;
  /** Create a `CollectSubmission` object for manual invoicing. */
  collectSubmissionCreateWorkflow: CollectSubmission;
  /** Process `CollectSubmission` objects. Internal only */
  collectSubmissionProcess: Array<CollectSubmission>;
  /** Re-process existing CollectSubmission(s) in order to retry invoice creation in case of failure */
  collectSubmissionRetry: Array<CollectSubmission>;
  /** Update an existing `CollectSubmission` record with the input parameters. */
  collectSubmissionUpdate: Array<CollectSubmission>;
  /** Generate upload URLs for `CollectInvoice` objects that will share a common `Prefix` */
  collectSubmissionUploadUrlGenerate: Array<CollectSubmissionUploadUrl>;
  customerInvoiceFilesCreate: Array<Maybe<CustomerInvoiceFile>>;
  customsDescriptionsCreate: Array<CustomsDescription>;
  /** Creates `CustomsDocument`s from existing files and attaches them to a `Shipment` or `CustomsSpec` */
  customsDocumentCreate: Array<CustomsDocument>;
  /** Generates `CustomsDocument`s from the given inputs */
  customsDocumentGenerate: Array<CustomsDocument>;
  /** Create a new `CustomsSpec` object */
  customsSpecCreate: Array<Maybe<CustomsSpec>>;
  /** Enhance existing customs data into a new `CustomsSpec` object */
  customsSpecGenerate: Array<Maybe<CustomsSpec>>;
  /** Update an existing `CustomsSpec` object */
  customsSpecUpdate: Array<Maybe<CustomsSpec>>;
  deleteClassifySetting: Result;
  /** Create a new `ExchangeRate` */
  exchangeRateCreate: Maybe<ExchangeRate>;
  /** Validates an HS code against a list of countries. */
  hsCodesValidate: Array<HsCodeValidationSummary>;
  /** Create new `Items` */
  itemCreateWorkflow: Array<Item>;
  itemRestrictionApply: ItemRestrictionResult;
  /** Create new `Items`. */
  itemsCreate: Array<Item>;
  labelCreateWorkflow: Array<Label>;
  /** Updates the `LabelSettings` associated with the calling `Organization`s token */
  labelSettingsUpdate: LabelSettings;
  /** Allows an API consumer to calculate a new `LandedCost` quote */
  landedCostCalculateWorkflow: Maybe<Array<Maybe<LandedCost>>>;
  /** Add a tracking number to an order */
  orderAddTrackingNumber: Maybe<Order>;
  /** Cancel an order */
  orderCancel: Order;
  /** Create an order from a landed cost quote */
  orderCreate: Maybe<Order>;
  /** Create an order from a legacy Zonos order */
  orderLink: Maybe<Array<Maybe<Order>>>;
  /** Refund an order */
  orderRefund: Order;
  /** Remove a tracking number from an order */
  orderRemoveTrackingNumber: Maybe<Order>;
  /** Update the accountOrderNumber of an order */
  orderUpdateAccountOrderNumber: Order;
  /** Update the amount subtotals of an order */
  orderUpdateAmountSubtotals: Array<Order>;
  /** Allows an API consumer to create a new `PackagingOption`s */
  packagingOptionCreate: Maybe<Array<Maybe<PackagingOption>>>;
  /** Allows an API consumer to delete an existing `PackagingOption` */
  packagingOptionDelete: Maybe<Result>;
  partyCreate: Party;
  partyCreateWorkflow: Array<Party>;
  partyScreen: Maybe<PartyScreening>;
  /** Create and sumbit a PDDP submission. */
  pddpSubmissionCreate: Array<PddpSubmission>;
  rootCreate: Maybe<Root>;
  /** Creates a new `ShipmentConsolidation` from the given input. */
  shipmentConsolidationCreate: ShipmentConsolidation;
  /** Updates a `ShipmentConsolidation` by adding a shipment, changing the status, or both. */
  shipmentConsolidationUpdate: ShipmentConsolidation;
  shipmentCreate: Maybe<Shipment>;
  shipmentCreateWorkflow: Maybe<Shipment>;
  /** Allows an API consumer to calculate possible `ShipmentRating`s based on the organization's configured settings. */
  shipmentRatingCalculateWorkflow: Array<ShipmentRating>;
  /** Allows an API consumer to create a `shipmentRating`. */
  shipmentRatingCreateWorkflow: Maybe<ShipmentRating>;
  shipmentStatusUpdate: Maybe<Shipment>;
};

export type MutationCarrierInvoiceAccountNumberMappingCreateArgs = {
  input: Array<CarrierInvoiceAccountNumberMappingCreateInput>;
};

export type MutationCarrierInvoiceAccountNumberMappingDeleteArgs = {
  input: Scalars['ID'];
};

export type MutationCarrierInvoiceAccountNumberMappingUpdateArgs = {
  input: Array<CarrierInvoiceAccountNumberMappingUpdateInput>;
};

export type MutationCarrierInvoiceCreateArgs = {
  input: Array<CarrierInvoiceCreateInput>;
};

export type MutationCarrierInvoiceLineItemBillingCreateArgs = {
  input: Array<CarrierInvoiceLineItemBillingCreateInput>;
};

export type MutationCarrierInvoiceLineItemReconcileArgs = {
  input: Array<CarrierInvoiceLineItemReconcileInput>;
};

export type MutationCarrierInvoiceLineItemUpdateArgs = {
  input: Array<CarrierInvoiceLineItemUpdateInput>;
};

export type MutationCarrierInvoiceUploadUrlGenerateArgs = {
  input: CarrierInvoiceUploadUrlInput;
};

export type MutationCartonsCreateWorkflowArgs = {
  input: Array<CartonCreateWorkflowInput>;
};

export type MutationCatalogItemCreateArgs = {
  input: Array<CatalogItemInput>;
};

export type MutationCatalogItemDeleteArgs = {
  input: Array<Scalars['ID']>;
};

export type MutationCatalogItemExportByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationCatalogItemExportJobCreateArgs = {
  input: InputMaybe<CatalogItemExportJobCreateInput>;
};

export type MutationCatalogItemUpdateArgs = {
  input: Array<CatalogItemInput>;
};

export type MutationClassificationsCalculateArgs = {
  input: Array<ClassificationCalculateInput>;
};

export type MutationCollectInvoiceFeeConfigurationCreateArgs = {
  input: CollectInvoiceFeeConfigurationInput;
};

export type MutationCollectInvoiceFeeCreateArgs = {
  input: CollectInvoiceFeeInput;
};

export type MutationCollectInvoiceFeeUpdateArgs = {
  input: CollectInvoiceFeeUpdateInput;
};

export type MutationCollectInvoiceFeeZonosCreateArgs = {
  input: CollectInvoiceFeeInput;
};

export type MutationCollectInvoiceFeeZonosUpdateArgs = {
  input: CollectInvoiceFeeUpdateInput;
};

export type MutationCollectInvoiceSettingsUpdateArgs = {
  input: CollectInvoiceSettingsUpdateInput;
};

export type MutationCollectSubmissionCreateWorkflowArgs = {
  input: CollectSubmissionCreateWorkflowInput;
};

export type MutationCollectSubmissionProcessArgs = {
  input: Array<CollectSubmissionProcessInput>;
};

export type MutationCollectSubmissionRetryArgs = {
  input: Array<CollectSubmissionRetryInput>;
};

export type MutationCollectSubmissionUpdateArgs = {
  input: Array<CollectSubmissionUpdateInput>;
};

export type MutationCollectSubmissionUploadUrlGenerateArgs = {
  input: CollectSubmissionUploadUrlInput;
};

export type MutationCustomerInvoiceFilesCreateArgs = {
  input: Array<CustomerInvoiceFileCreateInput>;
};

export type MutationCustomsDescriptionsCreateArgs = {
  input: Array<CustomsDescriptionsCreateInput>;
};

export type MutationCustomsDocumentCreateArgs = {
  input: Array<CustomsDocumentCreateInput>;
};

export type MutationCustomsDocumentGenerateArgs = {
  input: Array<CustomsDocumentGenerateInput>;
};

export type MutationCustomsSpecCreateArgs = {
  input: Array<CustomsSpecCreateInput>;
};

export type MutationCustomsSpecGenerateArgs = {
  input: Array<CustomsSpecGenerateInput>;
};

export type MutationCustomsSpecUpdateArgs = {
  input: Array<CustomsSpecUpdateInput>;
};

export type MutationDeleteClassifySettingArgs = {
  id: Scalars['String'];
};

export type MutationExchangeRateCreateArgs = {
  input: ExchangeRateCreateInput;
};

export type MutationHsCodesValidateArgs = {
  input: Array<HsCodeValidateInput>;
};

export type MutationItemCreateWorkflowArgs = {
  input: Array<ItemCreateWorkflowInput>;
};

export type MutationItemRestrictionApplyArgs = {
  input: ItemRestrictionApplyInput;
};

export type MutationItemsCreateArgs = {
  input: Array<ItemInput>;
};

export type MutationLabelCreateWorkflowArgs = {
  input: InputMaybe<LabelCreateWorkflowInput>;
};

export type MutationLabelSettingsUpdateArgs = {
  input: LabelSettingsUpdateInput;
};

export type MutationLandedCostCalculateWorkflowArgs = {
  input: LandedCostWorkFlowInput;
};

export type MutationOrderAddTrackingNumberArgs = {
  input: InputMaybe<OrderAddTrackingNumberInput>;
};

export type MutationOrderCancelArgs = {
  id: Scalars['ID'];
};

export type MutationOrderCreateArgs = {
  input: OrderCreateInput;
};

export type MutationOrderLinkArgs = {
  input: Array<OrderLinkInput>;
};

export type MutationOrderRefundArgs = {
  input: OrderRefundInput;
};

export type MutationOrderRemoveTrackingNumberArgs = {
  input: InputMaybe<OrderRemoveTrackingNumberInput>;
};

export type MutationOrderUpdateAccountOrderNumberArgs = {
  input: OrderUpdateAccountOrderNumberInput;
};

export type MutationOrderUpdateAmountSubtotalsArgs = {
  input: Array<OrderUpdateAmountSubtotalsInput>;
};

export type MutationPackagingOptionCreateArgs = {
  input: Array<PackagingOptionCreateInput>;
};

export type MutationPackagingOptionDeleteArgs = {
  input: InputMaybe<Scalars['ID']>;
};

export type MutationPartyCreateArgs = {
  input: PartyCreateInput;
};

export type MutationPartyCreateWorkflowArgs = {
  input: Array<PartyCreateWorkflowInput>;
};

export type MutationPartyScreenArgs = {
  input: PartyScreenInput;
};

export type MutationPddpSubmissionCreateArgs = {
  input: PddpSubmissionCreateInput;
};

export type MutationShipmentConsolidationCreateArgs = {
  input: ShipmentConsolidationCreateInput;
};

export type MutationShipmentConsolidationUpdateArgs = {
  input: ShipmentConsolidationUpdateInput;
};

export type MutationShipmentCreateArgs = {
  input: ShipmentCreateInput;
};

export type MutationShipmentCreateWorkflowArgs = {
  input: ShipmentCreateWorkflowInput;
};

export type MutationShipmentRatingCalculateWorkflowArgs = {
  input: InputMaybe<ShipmentRatingCalculateWorkflowInput>;
};

export type MutationShipmentRatingCreateWorkflowArgs = {
  input: ShipmentRatingCreateWorkflowInput;
};

export type MutationShipmentStatusUpdateArgs = {
  input: ShipmentStatusUpdateInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type OnlineStoreSettings = {
  __typename?: 'OnlineStoreSettings';
  /** A list of domains to allow Elements to send frontend requests from. Hello and Checkout will not function for domains not listed here. */
  allowedDomains: Array<Scalars['String']>;
  /** When these `onlineStoreSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these OnlineStoreSettings. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the OnlineStoreSettings. */
  id: Scalars['ID'];
  /** Specifies whether the OnlineStoreSettings is in live or test mode. */
  mode: Mode;
  /** The `Organization` associated with the OnlineStoreSettings. */
  organizationId: Scalars['ID'];
  /** Which shopping cart platform your ecommerce store uses. */
  platform: Scalars['String'];
  /** When these `OnlineStoreSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the OnlineStoreSettings. */
  updatedBy: Scalars['ID'];
  /** The URL to your online storefront. */
  url: Scalars['String'];
};

export type OnlineStoreSettingsUpdateInput = {
  /** A list of domains to allow Elements to send frontend requests from. Hello and Checkout will not function for domains not listed here. */
  allowedDomains?: InputMaybe<Array<Scalars['String']>>;
  /** Which shopping cart platform your ecommerce store uses. */
  platform?: InputMaybe<Scalars['String']>;
  /** The URL to your online storefront. */
  url?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  /** The order number from the `Organization`. */
  accountOrderNumber: Maybe<Scalars['String']>;
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: AmountSubtotals;
  /** The `Cartons` that are included in the `Order`. */
  cartons: Maybe<Array<Carton>>;
  /** When this `Order` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order. */
  createdBy: Scalars['ID'];
  /** The currency this `Order` price amount is in. */
  currencyCode: CurrencyCode;
  /** A unique identifier for the Order. */
  id: Scalars['ID'];
  /** The `Items` that are included in the `Order`. */
  items: Maybe<Array<Item>>;
  /** The `landedCost` calculations that are included in the `Order`. */
  landedCosts: Maybe<Array<LandedCost>>;
  /** Other `Order` details. */
  metadata: Maybe<Array<Maybe<OrderMetadata>>>;
  /** Specifies whether the Order is in live or test mode. */
  mode: Mode;
  /** The `Organization` associated with the Order. */
  organization: Scalars['ID'];
  /** The relevant party contact information for the `Order`. */
  parties: Maybe<Array<Party>>;
  /** The reference information that is included in the `Order`. */
  references: Maybe<Array<OrderReference>>;
  /** List of remittances */
  remittance: Maybe<Array<Maybe<Remittance>>>;
  root: Maybe<Root>;
  /** The `shipmentRatings` that are included in the `Order`. */
  shipmentRatings: Maybe<Array<ShipmentRating>>;
  /** The status of the `Order`. */
  status: OrderStatus;
  /** Timestamp for when the status changed. */
  statusTransitions: Array<OrderStatusTransition>;
  /** The main tracking number for the `order`. */
  trackingNumbers: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `Order` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Order. */
  updatedBy: Scalars['ID'];
};

export type OrderAddTrackingNumberInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** The main tracking number for the `order`. */
  trackingNumbers: Array<Scalars['String']>;
};

export type OrderCompleteBillingMethod = 'BILLING_DGS' | 'LEGACY';

/** Order Connection */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<OrderEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

export type OrderCreateInput = {
  /** The order number from the `organization`. */
  accountOrderNumber: Scalars['String'];
  /** The ID of the billing `party`. */
  billTo?: InputMaybe<Scalars['ID']>;
  currencyCode: CurrencyCode;
  /** The grand total of the order. It will be rounded to the nearest penny. */
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  /** The landedCost id that the order will be created from. */
  landedCostId: Scalars['ID'];
  /** Other `Order` details. */
  metadata?: InputMaybe<Array<InputMaybe<OrderMetadataInput>>>;
  /** The `id` of the destination `party` if different from the landedCost destination party. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The source platform of the order. */
  source?: InputMaybe<Scalars['String']>;
  /** The tracking numbers for the `order`. */
  trackingNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Order Edge */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Order>;
};

export type OrderLinkInput = {
  /** The Zonos account id that the order belongs to */
  account?: InputMaybe<Scalars['String']>;
  /** The account's external order number */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** The Zonos order id */
  orderId?: InputMaybe<Scalars['String']>;
};

export type OrderMetadata = {
  __typename?: 'OrderMetadata';
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type OrderMetadataInput = {
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

/** Reference information provided by Zonos about the order. */
export type OrderReference = {
  __typename?: 'OrderReference';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type OrderRefundInput = {
  /** The amount to refund */
  amount: Scalars['Decimal'];
  /** The currency the refund amount is in */
  currencyCode: CurrencyCode;
  /** The `ID` of the `Order` to refund */
  id: Scalars['ID'];
  /** A description for the refund */
  note?: InputMaybe<Scalars['String']>;
};

export type OrderRemoveTrackingNumberInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** The main tracking number for the `order`. */
  trackingNumbers: Array<Scalars['String']>;
};

/** Assigned status for `Order` */
export type OrderStatus =
  | 'CANCELED'
  | 'COMPLETED'
  | 'FRAUD_HOLD'
  | 'OPEN'
  | 'PAYMENT_FAILED'
  | 'PAYMENT_PENDING';

export type OrderStatusTransition = {
  __typename?: 'OrderStatusTransition';
  /** When this `Order` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order. */
  createdBy: Scalars['ID'];
  /** Any additional information required for this status transition. */
  note: Maybe<Scalars['String']>;
  /** The status of this status transition. */
  status: OrderStatus;
};

export type OrderTransactionBillingMethod = 'BILLING_DGS' | 'LEGACY';

export type OrderUpdateAccountOrderNumberInput = {
  /** The order number from the `Organization`. */
  accountOrderNumber: Scalars['String'];
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
};

export type OrderUpdateAmountSubtotalsInput = {
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  orderId: Scalars['ID'];
};

export type OrdersFilter = {
  /** Return the `Order` resource with the given accountOrderNumber */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** Return `Order` resources created within a given date range */
  between?: InputMaybe<DateTimeRange>;
  /** Return `Order` resources created within a given store ID */
  storeId?: InputMaybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String'];
};

/** A `packagingOption` represents a box that can be used to ship an item */
export type PackagingOption = {
  __typename?: 'PackagingOption';
  /** When the `packagingOption` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `PackagingOption` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** PackagingOption ID, prefixed with `packagingOption_` */
  id: Scalars['ID'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** Whether the `packagingOption` is in test or live mode */
  mode: Mode;
  /** The name the `organization` is using for a particular `packagingOption` */
  name: Scalars['String'];
  /** The `organization` associated with the `packagingOption` */
  organization: Scalars['ID'];
  /** The source from where the `PackagingOption` was generated */
  source: PackagingOptionSource;
  /** The status of the `packagingOption` */
  status: PackagingOptionStatus;
  /** The packaging style (box, polybag, letter, etc.) */
  type: PackagingType;
  /** When the `packagingOption` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `PackagingOption`. */
  updatedBy: Scalars['ID'];
  /** The maximum weight of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

/** A type for paginating through multiple packaging options. */
export type PackagingOptionConnection = {
  __typename?: 'PackagingOptionConnection';
  /** A list of `edges`. */
  edges: Maybe<Array<Maybe<PackagingOptionEdge>>>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `PackagingOption` objects in the connection */
  totalCount: Scalars['Int'];
};

export type PackagingOptionCreateInput = {
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** A memorable name for the package option. If one is not provided it will be named based on the length X width X height (ie. 10x8x4) */
  name?: InputMaybe<Scalars['String']>;
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
  /** The weight capacity of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packagingOption` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

export type PackagingOptionDeleteAction = 'DELETE' | 'DISABLE';

/** A type used in pagination. */
export type PackagingOptionEdge = {
  __typename?: 'PackagingOptionEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<PackagingOption>;
};

export type PackagingOptionSource = 'DEFAULT' | 'DYNAMIC' | 'ORGANIZATION';

export type PackagingOptionStatus = 'DISABLED' | 'ENABLED';

export type PackagingOptionsDeleteDuplicatesInput = {
  /** Whether the packaging option should be deleted or disabled. */
  action?: InputMaybe<PackagingOptionDeleteAction>;
  /** The `Organization` ID */
  organizationIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type PackagingOptionsFilter = {
  /** The `PackagingOptionSource` you are filtering by. */
  source?: InputMaybe<PackagingOptionSource>;
  /** The status you are filtering by. */
  status?: InputMaybe<PackagingOptionStatus>;
  /** The `PackagingType` you are filtering by. */
  type?: InputMaybe<PackagingType>;
};

export type PackagingType =
  | 'ENVELOPE'
  | 'FLAT'
  | 'PACKAGE'
  | 'PAK'
  | 'PARCEL'
  | 'POLYBAG'
  | 'TUBE';

export type PackingPreference =
  /** The item can be shipped with other items in a box */
  | 'CONSOLIDATED'
  /** The item is shipped alone */
  | 'SHIPS_ALONE';

export type PageInfo = {
  __typename?: 'PageInfo';
  /** Field endCursor */
  endCursor: Maybe<Scalars['String']>;
  /** Field hasNextPage */
  hasNextPage: Scalars['Boolean'];
  /** Field hasPreviousPage */
  hasPreviousPage: Scalars['Boolean'];
  /** Field startCursor */
  startCursor: Maybe<Scalars['String']>;
};

export type PartiesToTransaction = 'NON_RELATED' | 'RELATED';

export type Party = {
  __typename?: 'Party';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  id: Scalars['ID'];
  location: Maybe<Location>;
  mode: Mode;
  organization: Scalars['ID'];
  /** @deprecated Use `organization` instead */
  organizationId: Scalars['ID'];
  person: Maybe<Person>;
  type: Maybe<PartyType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type PartyCreateInput = {
  location?: InputMaybe<LocationCreateInput>;
  person?: InputMaybe<PersonCreateInput>;
  referenceId?: InputMaybe<Scalars['ID']>;
  type: PartyType;
};

export type PartyCreateWorkflowInput = {
  location?: InputMaybe<CreateLocationInput>;
  person?: InputMaybe<CreatePersonInput>;
  type: PartyType;
};

export type PartyFilter = {
  referenceId: Scalars['ID'];
};

export type PartyMetadata = {
  __typename?: 'PartyMetadata';
  key: Scalars['String'];
  value: Maybe<Scalars['String']>;
};

export type PartyMetadataInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type PartyScreenInput = {
  location?: InputMaybe<DeniedPartyLocationInput>;
  person?: InputMaybe<DeniedPartyPersonInput>;
};

export type PartyScreenMatch = {
  __typename?: 'PartyScreenMatch';
  administrativeAreaCode: Maybe<MatchType>;
  companyName: Maybe<MatchType>;
  countryCode: Maybe<MatchType>;
  deniedParty: Maybe<DeniedParty>;
  line1: Maybe<MatchType>;
  line2: Maybe<MatchType>;
  locality: Maybe<MatchType>;
  name: Maybe<MatchType>;
  postalCode: Maybe<MatchType>;
  scores: Maybe<ScreeningScores>;
};

export type PartyScreening = {
  __typename?: 'PartyScreening';
  /** Indicates the type of action required for the party screening */
  action: DeniedPartyAction;
  /** When this `deniedParty` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `deniedParty` */
  createdBy: Scalars['ID'];
  /** Denied Party Screening ID, prefixed with `deniedParty_`. */
  id: Scalars['ID'];
  /** The fields that had an match with a potential denied party */
  matches: Array<PartyScreenMatch>;
  mode: Mode;
  /** Party that was used to query the API */
  party: Party;
};

export type PartyScreeningConnection = {
  __typename?: 'PartyScreeningConnection';
  edges: Maybe<Array<Maybe<PartyScreeningEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type PartyScreeningEdge = {
  __typename?: 'PartyScreeningEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<PartyScreening>;
};

export type PartyScreeningFilter = {
  action?: InputMaybe<DeniedPartyAction>;
  country?: InputMaybe<CountryCode>;
};

export type PartyScreeningSetting = {
  __typename?: 'PartyScreeningSetting';
  /** Default value is EXACT_LOCALITY */
  addressMatchThreshold: Maybe<AddressMatchThreshold>;
  id: Scalars['ID'];
  /** Default value is 0.8 */
  nameMatchDecisionThreshold: Maybe<Scalars['Decimal']>;
};

export type PartyScreeningSettingInput = {
  addressMatchThreshold?: InputMaybe<AddressMatchThreshold>;
  nameMatchDecisionThreshold?: InputMaybe<Scalars['Decimal']>;
};

export type PartyType = 'DESTINATION' | 'ORIGIN' | 'PAYEE' | 'PAYOR';

export type PaymentsSettings = {
  __typename?: 'PaymentsSettings';
  /** When these `paymentsSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these `paymentsSettings`. */
  createdBy: Scalars['String'];
  /** The day of the week payouts occur. */
  dayOfWeek: Maybe<Day>;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: Maybe<EndOfDayBehavior>;
  /** How often payouts occur, in days. */
  frequencyDays: Maybe<Scalars['Int']>;
  /** A unique identifier for the PaymentsSettings. */
  id: Scalars['String'];
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod: Maybe<LcgBillingMethod>;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Maybe<Scalars['Int']>;
  /** Specifies whether the PaymentsSettings is in live or test mode. */
  mode: Mode;
  /** Specifies which system to use for billing order complete fees */
  orderCompleteBillingMethod: Maybe<OrderCompleteBillingMethod>;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod: Maybe<OrderTransactionBillingMethod>;
  /** The `Organization` associated with the PaymentsSettings. */
  organization: Maybe<Scalars['String']>;
  /** When these `PaymentsSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the PaymentsSettings. */
  updatedBy: Scalars['String'];
};

/** An amount type and value associated with a PDDP submission */
export type PddpAmount = {
  __typename?: 'PddpAmount';
  /** The monetary amount associated with the PDDP submission */
  amount: Scalars['Decimal'];
  /** The type of the amount associated with the PDDP submission */
  amountType: PddpAmountType;
  /** The currency used for the amount */
  currencyCode: CurrencyCode;
};

/** The type of an amount associated with a PDDP submission */
export type PddpAmountType =
  /** The total of all products, shipping, duties, and taxes. Does not include surcharges. */
  | 'FLC_TOTAL_COST'
  /** The monetary value of the products shipped */
  | 'INSURED_VALUE'
  /** The cost of shipping the products */
  | 'SHIPPING_COST'
  /** The duty associated with the products shipped */
  | 'SHOPPING_CART_DUTY'
  /** The tax associated with the products shipped */
  | 'SHOPPING_CART_TAX'
  /** The total monetary value of the products shipped */
  | 'SHOPPING_CART_VALUE'
  /** Any additional surcharges associated with the products shipped */
  | 'SURCHARGE_VALUE';

/** A PDDP submission and related information */
export type PddpSubmission = Node & {
  __typename?: 'PddpSubmission';
  /** An array of associated PDDP Amounts */
  amounts: Array<PddpAmount>;
  /** The timestamp of when the submission was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the submission */
  createdBy: Scalars['ID'];
  /** The currency being used for the submission */
  destinationCurrency: CurrencyCode;
  /** The destination postal operator, UPU Code */
  destinationPost: Scalars['String'];
  /** The ID of the submission */
  id: Scalars['ID'];
  /** The ID of the `Order` this submission is associated with */
  orderId: Scalars['ID'];
  /** The origin postal operator, UPU Code */
  originPost: Scalars['String'];
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier: Scalars['String'];
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
  /** The tracking number of the submission */
  trackingNumber: Scalars['String'];
};

/** A collection of PDDP submissions and related information to aid in pagination */
export type PddpSubmissionConnection = {
  __typename?: 'PddpSubmissionConnection';
  /** A list of edges which contains the PDDP Submissions */
  edges: Array<PddpSubmissionEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<PageInfo>;
  /** The total number of PDDP Submissions in this connection */
  totalCount: Scalars['Int'];
};

/** The required information to create a PDDP submission */
export type PddpSubmissionCreateInput = {
  /** The ID of the associated IPC Retailer, if not given Zonos' ID will be used */
  ipcRetailerId?: InputMaybe<Scalars['String']>;
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
};

/** An edge in a connection that contains a cursor and the PDDP submission */
export type PddpSubmissionEdge = {
  __typename?: 'PddpSubmissionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission */
  node: Maybe<PddpSubmission>;
};

/** Set of filters to make a query for PDDP submissions. */
export type PddpSubmissionFilter = {
  /** A date range for wen the PDDP submission was created to filter by */
  createdDate?: InputMaybe<DateTimeRange>;
  /** The destination postal operator, UPU Code */
  destinationPost?: InputMaybe<Scalars['String']>;
  /** The ID of the `Order` the PDDP submission is associated with */
  orderId?: InputMaybe<Scalars['ID']>;
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier?: InputMaybe<Scalars['String']>;
  /** The ID of the `Shipment` the PddpSubmission is tied to */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** The tracking number of the submission */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** A log for a PDDP submission and related information */
export type PddpSubmissionLog = {
  __typename?: 'PddpSubmissionLog';
  /** The timestamp when the log was created */
  createdAt: Scalars['DateTime'];
  /** The User ID of the person who created the log */
  createdBy: Scalars['ID'];
  /** The ID of the log */
  id: Scalars['ID'];
  /** The ID of the PDDP submission associated with the log */
  pddpSubmission: Maybe<Scalars['ID']>;
  /** The request from the PDDP submission */
  request: Scalars['String'];
  /** The response from the PDDP submission */
  response: Scalars['String'];
  /** ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
};

/** A collection of PDDP submission logs and related information to aid in pagination */
export type PddpSubmissionLogConnection = {
  __typename?: 'PddpSubmissionLogConnection';
  /** A list of edges which contains the PDDP Submission Logs */
  edges: Array<PddpSubmissionLogEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<PageInfo>;
  /** The total number of PDDP Submission logs in this connection */
  totalCount: Scalars['Int'];
};

/** An edge in a connection that contains a cursor and the PDDP submission log */
export type PddpSubmissionLogEdge = {
  __typename?: 'PddpSubmissionLogEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission Log */
  node: Maybe<PddpSubmissionLog>;
};

/** Set of filters to make a query for PDDP submission logs. */
export type PddpSubmissionLogFilter = {
  /** A date range for when the PDDP submission was created to filter by */
  createdDate?: InputMaybe<DateTimeRange>;
  /** The ID of the associated `Order` */
  orderId?: InputMaybe<Scalars['String']>;
  /** The associated PDDP Submission */
  pddpSubmission?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  companyName: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Maybe<Scalars['String']>;
  metadata: Maybe<Array<Maybe<PartyMetadata>>>;
  mode: Mode;
  organization: Scalars['ID'];
  phone: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type PersonCreateInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type PriceBreakdown = {
  __typename?: 'PriceBreakdown';
  duties: Maybe<Scalars['Decimal']>;
  fees: Maybe<Scalars['Decimal']>;
  shipping: Maybe<Scalars['Decimal']>;
  taxes: Maybe<Scalars['Decimal']>;
  total: Maybe<Scalars['Decimal']>;
};

export type PropertyType = 'COMMERCIAL' | 'RESIDENTAL' | 'RESIDENTIAL';

export type ProvidedHsCodeVisibilityStatus = 'NOT_VISIBLE' | 'VISIBLE';

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type Query = {
  __typename?: 'Query';
  /** Returns a `Carrier` resource by ID. */
  carrier: Maybe<Carrier>;
  /** Returns a `CarrierAccount` by ID */
  carrierAccount: Maybe<CarrierAccount>;
  /** Returns all the information tied to the `Carrier` that a specified organization uses. */
  carrierAccounts: Maybe<Array<Maybe<CarrierAccount>>>;
  /** Returns  a `Carrier` based on a `string` code. */
  carrierByCode: Maybe<Carrier>;
  /** Retrieve a `CarrierInvoice` by ID */
  carrierInvoice: Maybe<CarrierInvoice>;
  /** Retrieve a `CarrierInvoiceAccountNumberMapping` by ID */
  carrierInvoiceAccountNumberMapping: Maybe<CarrierInvoiceAccountNumberMapping>;
  /** Retrieve `CarrierInvoiceAccountNumberMappingConnection`s based on a `CarrierInvoiceAccountNumberMappingFilter` criteria */
  carrierInvoiceAccountNumberMappings: CarrierInvoiceAccountNumberMappingConnection;
  carrierInvoiceLineItems: CarrierInvoiceLineItemConnection;
  /** Retrieve a `CarrierInvoiceConnection` based on a `CarrierInvoiceFilter` criteria */
  carrierInvoices: Maybe<CarrierInvoiceConnection>;
  /** Returns a list of `Carrier` resources by ID. */
  carriers: Maybe<Array<Maybe<Carrier>>>;
  /** Returns a `Carton` resource by `ID` */
  carton: Maybe<Carton>;
  /** Returns a list of `Carton` objects that apply to a `root` */
  cartons: Maybe<Array<Maybe<Carton>>>;
  /** Returns a `CatalogItem` by ID. */
  catalogItem: Maybe<CatalogItem>;
  /**  Retrieves a catalog item delete job by its ID.  */
  catalogItemDeleteJob: Maybe<DeleteJob>;
  /**  Retrieves a list of catalog item delete jobs.  */
  catalogItemDeleteJobs: Maybe<DeleteJobsConnection>;
  /**  Retrieves a catalog item export job by its ID.  */
  catalogItemExportJob: Maybe<ExportJob>;
  /**  Retrieves a list of catalog item export jobs.  */
  catalogItemExportJobs: Maybe<ExportJobConnection>;
  /** Returns a list of `CatalogItem`. */
  catalogItems: Maybe<CatalogItemConnection>;
  /** Returns a `Classification` resource by ID. */
  classification: Maybe<Classification>;
  /** Returns a list of `Classification` resources. */
  classifications: Maybe<ClassificationConnection>;
  /** Returns data about what Classify supports. */
  classifySupportedData: ClassifySupportedData;
  /** Query a `CollectInvoice` by its internal ID. */
  collectInvoice: Maybe<CollectInvoice>;
  /** Returns the current `CollectInvoiceFeeConfiguration` for the calling tokens `Organization` */
  collectInvoiceFeeConfiguration: Maybe<CollectInvoiceFeeConfiguration>;
  collectInvoiceSettings: Maybe<CollectInvoiceSettings>;
  /** Query for a `CollectSubmission` based on ID. */
  collectSubmission: Maybe<CollectSubmission>;
  /** Query for a list of `CollectSubmission`s based on provided filter params. */
  collectSubmissions: CollectSubmissionConnection;
  /** Query a `CollectUploadEvent` object by ID */
  collectUploadEvent: CollectUploadEvent;
  collectUploadEvents: CollectUploadEventConnection;
  /** Returns a `CurrencyFormat` resource by CurrencyCode */
  currencyFormat: Maybe<CurrencyFormat>;
  /** Query for a CustomsDocument by ID */
  customsDocument: Maybe<CustomsDocument>;
  /** Query for a paginated connection of CustomsDocuments */
  customsDocuments: CustomsDocumentConnection;
  /** Retrieve a `CustomsSpec` by ID */
  customsSpec: Maybe<CustomsSpec>;
  /** Retrieve a list of `CustomsSpec` objects */
  customsSpecs: Maybe<CustomsSpecConnection>;
  /** Returns an `ExchangeRate` resource by ID. */
  exchangeRate: Maybe<ExchangeRate>;
  /** Returns a `FulfillmentCenter` object by ID. */
  fulfillmentCenter: Maybe<FulfillmentCenter>;
  /** Returns a list of `FulfillmentCenter` objects for an `Organization` */
  fulfillmentCenters: Maybe<Array<Maybe<FulfillmentCenter>>>;
  getPerson: Maybe<Person>;
  /** Returns `HelloSettings` associated with the current token's `Organization` */
  helloSettings: Maybe<HelloSettings>;
  /** Returns a list of matching HsCode fragments. */
  hsCodeFragments: Array<HsCodeFragment>;
  /** Returns an `Item` resource by ID. */
  item: Maybe<Item>;
  itemRestrictionResult: Maybe<ItemRestrictionResult>;
  itemRestrictionResults: Maybe<ItemRestrictionResultConnection>;
  /** Returns a list of `Item` resources. */
  items: Maybe<ItemConnection>;
  label: Maybe<Label>;
  /** Return a list of LabelRequestLogs by labelId and/or shipmentId */
  labelRequestLogs: Maybe<LabelRequestLogConnection>;
  /** Returns the `LabelSettings` for the calling token's `Organization` */
  labelSettings: LabelSettings;
  labels: Maybe<LabelConnection>;
  /** Returns a `LandedCost` resource by `ID` */
  landedCost: Maybe<LandedCost>;
  /** Returns a list of `LandedCost` resources */
  landedCosts: Maybe<LandedCostConnection>;
  location: Maybe<Location>;
  order: Maybe<Order>;
  orders: Maybe<OrderConnection>;
  /** Returns a `PackagingOption` resource by `ID` */
  packagingOption: Maybe<PackagingOption>;
  /**
   * Deprecated method to return a list of `PackagingOption` objects that apply to an `organization`, use packagingOptionsConnection instead
   * @deprecated use packagingOptionsConnection instead
   */
  packagingOptions: Maybe<Array<Maybe<PackagingOption>>>;
  /** Returns a list of `PackagingOption` objects that apply to an `organization` */
  packagingOptionsConnection: Maybe<PackagingOptionConnection>;
  parties: Maybe<Array<Maybe<Party>>>;
  partiesFindAllById: Maybe<Array<Maybe<Party>>>;
  party: Maybe<Party>;
  partyScreening: Maybe<PartyScreening>;
  partyScreenings: Maybe<PartyScreeningConnection>;
  /** Return a PDDP submission by an ID. */
  pddpSubmission: Maybe<PddpSubmission>;
  /** Return a PDDP submission log by an ID. */
  pddpSubmissionLog: Maybe<PddpSubmissionLog>;
  /** Returns a paginated list of PDDP submissions logs. */
  pddpSubmissionLogs: Maybe<PddpSubmissionLogConnection>;
  /** Returns a paginated list of PDDP submissions. */
  pddpSubmissions: Maybe<PddpSubmissionConnection>;
  /** Query for a `Reconciliation` by ID */
  reconciliation: Maybe<Reconciliation>;
  /** Returns a `ServiceLevel` resource by ID. */
  serviceLevel: Maybe<ServiceLevel>;
  /** Returns a `ServiceLevelArea` resource by ID. */
  serviceLevelArea: Maybe<ServiceLevelArea>;
  /** Retreive the ServiceLevelAreas for a giving ServiceLevel optionally filtering by a destination location */
  serviceLevelAreas: Maybe<Array<Maybe<ServiceLevelArea>>>;
  /** Returns a `ServiceLevelRateChart` by ID. */
  serviceLevelRateChart: Maybe<ServiceLevelRateChart>;
  /** Returns a list of `ServiceLevelRateChart` objects that apply to a `ServiceLevel` */
  serviceLevelRateCharts: Maybe<Array<Maybe<ServiceLevelRateChart>>>;
  /** Returns a list of `ServiceLevel` resources for an organization. */
  serviceLevels: Maybe<Array<Maybe<ServiceLevel>>>;
  shipment: Maybe<Shipment>;
  /** Query for a `ShipmentConsolidation` by ID */
  shipmentConsolidation: Maybe<ShipmentConsolidation>;
  /** Query for a paginated connection of `ShipmentConsolidation` objects */
  shipmentConsolidations: Maybe<ShipmentConsolidationConnection>;
  /** Returns a `ShipmentRating` resource by ID. */
  shipmentRating: Maybe<ShipmentRating>;
  /** Returns a `ShipmentRatingConnection` resource with the given filters and pagination parameters. */
  shipmentRatings: ShipmentRatingConnection;
  shipments: Maybe<ShipmentConnection>;
  /** Returns a `ShippingProfile` by ID. */
  shippingProfile: Maybe<ShippingProfile>;
  /** Returns a `ShippingProfileRateChart` by ID */
  shippingProfileRateChart: Maybe<ShippingProfileRateChart>;
  /** Returns a list of `ShippingProfileRateChart` objects that apply to a `ShippingProfile` */
  shippingProfileRateCharts: Maybe<Array<Maybe<ShippingProfileRateChart>>>;
  /** Returns a list of `ShippingProfile` objects that apply to an `Organization`. */
  shippingProfiles: Maybe<Array<Maybe<ShippingProfile>>>;
  /** Returns a Shipping Store Settings resource by store id. */
  shippingStoreSettings: Maybe<ShippingStoreSettings>;
  /** Returns a `ShippingZone` resource by ID. */
  shippingZone: Maybe<ShippingZone>;
  /** Returns a list of `ShippingZone` resources for an organization. */
  shippingZones: Maybe<Array<Maybe<ShippingZone>>>;
  taxIds: Maybe<Array<Maybe<TaxId>>>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierAccountArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierAccountsArgs = {
  filter: InputMaybe<CarrierAccountsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierByCodeArgs = {
  code: Scalars['String'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierInvoiceArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierInvoiceAccountNumberMappingArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierInvoiceAccountNumberMappingsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CarrierInvoiceAccountNumberMappingFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierInvoiceLineItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CarrierInvoiceLineItemFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierInvoicesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CarrierInvoiceFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarriersArgs = {
  filter: InputMaybe<CarriersFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCartonArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCartonsArgs = {
  filter: InputMaybe<CartonsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCatalogItemArgs = {
  id: InputMaybe<Scalars['ID']>;
  productId: InputMaybe<Scalars['String']>;
  sku: InputMaybe<Scalars['String']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCatalogItemDeleteJobArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCatalogItemDeleteJobsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<DeleteJobsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCatalogItemExportJobArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCatalogItemExportJobsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ExportJobsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCatalogItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CatalogItemFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryClassificationArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ClassificationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCollectInvoiceArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCollectSubmissionArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCollectSubmissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CollectSubmissionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCollectUploadEventArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCollectUploadEventsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CollectUploadEventFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCurrencyFormatArgs = {
  input: CurrencyCode;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCustomsDocumentArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCustomsDocumentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CustomsDocumentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCustomsSpecArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCustomsSpecsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CustomsSpecFilter>;
  first: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryExchangeRateArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryFulfillmentCenterArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryGetPersonArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryHsCodeFragmentsArgs = {
  filter: HsCodeFragmentsFilter;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryItemArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryItemRestrictionResultArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryItemRestrictionResultsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLabelArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLabelRequestLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<LabelRequestLogFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLabelsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<LabelFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLandedCostArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLandedCostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<LandedCostFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLocationArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryOrderArgs = {
  orderId: Scalars['String'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryOrdersArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<OrdersFilter>;
  first: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPackagingOptionArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPackagingOptionsArgs = {
  filter: InputMaybe<PackagingOptionsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPackagingOptionsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PackagingOptionsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartiesArgs = {
  input: InputMaybe<PartyFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartiesFindAllByIdArgs = {
  input: Array<Scalars['ID']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartyArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartyScreeningArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartyScreeningsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PartyScreeningFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionLogArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PddpSubmissionLogFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PddpSubmissionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryReconciliationArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelAreaArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelAreasArgs = {
  filter: InputMaybe<ServiceLevelAreasFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelRateChartArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelRateChartsArgs = {
  filter: InputMaybe<ServiceLevelRateChartsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelsArgs = {
  carrier: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ServiceLevelFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentConsolidationArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentConsolidationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ShipmentConsolidationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentRatingArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentRatingsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ShipmentRatingFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ShipmentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfileArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfileRateChartArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfileRateChartsArgs = {
  filter: InputMaybe<ShippingProfileRateChartsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfilesArgs = {
  filter: InputMaybe<ShippingProfilesFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingStoreSettingsArgs = {
  storeId: Scalars['Int'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingZoneArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingZonesArgs = {
  filter: InputMaybe<ShippingZonesFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryTaxIdsArgs = {
  filter: InputMaybe<TaxIdFilterInput>;
};

export type QueueDataMigrationInput = {
  /** The area of data to migrate, such as Shipping or Catalog. If no value is provided, all areas will be queued. */
  dataArea?: InputMaybe<Scalars['String']>;
  /** The 'storeId' to be migrated. */
  storeId: Scalars['Int'];
};

export type Reconciliation = {
  __typename?: 'Reconciliation';
  /** List of `ReconciliationCharge` objects associated with this Reconciliation */
  charges: Array<ReconciliationCharge>;
  /** Date and time of when this `Reconciliation` object was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this `Reconciliation` */
  createdBy: Scalars['ID'];
  /** The ID of this Reconciliation object */
  id: Scalars['ID'];
  /** Optional note about this `Reconciliation` object */
  note: Maybe<Scalars['String']>;
};

export type ReconciliationCharge = {
  /** The amount of the `ReconciliationCharge` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `StripeSubscriptionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount is displayed in */
  currencyCode: CurrencyCode;
  /** A unique identifier for this `ReconciliationCharge` */
  id: Scalars['ID'];
  /** An optional note about this `ReconciliationCharge` */
  note: Maybe<Scalars['String']>;
};

export type Remittance = {
  __typename?: 'Remittance';
  amount: Scalars['Decimal'];
  description: Scalars['String'];
  note: Scalars['String'];
};

/**
 * A `RestrictedItem represent an item that has been restricted.
 * 3 ways an item can be restricted: via catalog's restricted countries, a rule, or itemRestriction API.
 */
export type RestrictedItem = {
  __typename?: 'RestrictedItem';
  /** The action taken on the restricted item. */
  action: RestrictedItemAction;
  /** `CatalogItem` if the restriction was due to catalog  */
  catalogItem: Maybe<CatalogItem>;
  /** `RestrictedItem` ID, prefixed with `restricted_item_`. */
  id: Scalars['ID'];
  /** `Item` that was restricted. */
  item: Item;
  /** `itemRestrictions` if the restriction was due to restricted item result  */
  itemRestrictions: Maybe<ItemRestrictionsResult>;
  /** the reason this item was restricted */
  reason: Scalars['String'];
  /** `Rule` if the restriction was due to a rule  */
  rule: Maybe<Rule>;
};

export type RestrictedItemAction =
  /** Block the item from being included in the landed cost calculations. */
  | 'BLOCK'
  /** Block all items from being included in the landed cost calculations. */
  | 'BLOCK_ALL'
  /** Warn the user that the item is restricted. keep the item included in the landed cost calculations. */
  | 'WARN';

export type Result = 'FAILURE' | 'SUCCESS';

/** A `Root` serves as a wrapper for various resources, such as `LandedCost` and `ShipmentRating` */
export type Root = {
  __typename?: 'Root';
  cartons: Maybe<Array<Maybe<Carton>>>;
  exchangeRates: Array<ExchangeRate>;
  /** A unique identifier for the Root. */
  id: Scalars['ID'];
  items: Maybe<Array<Maybe<Item>>>;
  landedCosts: Maybe<Array<Maybe<LandedCost>>>;
  /** The `Order` placed between the root `parties`. */
  order: Maybe<Order>;
  parties: Maybe<Array<Maybe<Party>>>;
  restrictedItems: Maybe<Array<Maybe<RestrictedItem>>>;
  shipment: Maybe<Shipment>;
  shipmentRatings: Maybe<Array<Maybe<ShipmentRating>>>;
};

/** Root Connection */
export type RootConnection = {
  __typename?: 'RootConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<RootEdge>>>;
  /** Field pageInfo */
  pageInfo: PageInfo;
};

/** Root Edge */
export type RootEdge = {
  __typename?: 'RootEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Root>;
};

export type RootsFilter = {
  /** Return `LandedCost` resources created after a given date */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Return `LandedCost` resources created before a given date */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
};

export type Rule = {
  __typename?: 'Rule';
  id: Scalars['ID'];
};

export type ScreenExistingPartyInput = {
  partyId: Scalars['ID'];
};

export type ScreenPartyInput = {
  location?: InputMaybe<DeniedPartyLocationInput>;
  person?: InputMaybe<DeniedPartyPersonInput>;
};

export type ScreeningScores = {
  __typename?: 'ScreeningScores';
  location: Maybe<Scalars['Decimal']>;
  name: Maybe<Scalars['Decimal']>;
  overall: Maybe<Scalars['Decimal']>;
};

/**
 * A `ServiceLevel` is a predefined service provided by a `Carrier` to a given country or region.
 * `ServiceLevel` will impact time in transit and the associated shipment rating.
 * `ServiceLevel` eligibility may be impacted by product attributes, such as value and dimensions.
 */
export type ServiceLevel = {
  __typename?: 'ServiceLevel';
  /** Enumerated value that specifies whether a ServiceLevel is available to all customers or is specifically contracted */
  availability: ServiceLevelAvailability;
  /** The `Carrier` associated with ServiceLevel. */
  carrier: Carrier;
  /** The code for the ServiceLevel as defined by the external carrier API */
  carrierApiCode: Scalars['String'];
  /** The code used to generate labels for this ServiceLevel defined by the external carrier API. */
  carrierLabelApiCode: Maybe<Scalars['String']>;
  /** The enumerated value of ServiceLevel options that can be sent in the API. */
  code: Scalars['String'];
  /** The list of restrictions that exist around countries, weights, dims, and prices for a ServiceLevel. */
  countryConstraints: Maybe<Array<CountryConstraint>>;
  /** When this `serviceLevel` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevel. */
  createdBy: Scalars['ID'];
  /** The method of delivery that indicates how the clearance is processed with this ServiceLevel. */
  deliveryType: Maybe<DeliveryType>;
  /** A unique identifier for the ServiceLevel. */
  id: Scalars['ID'];
  /** The ServiceLevel display name as prescribed by the `Carrier`. */
  name: Scalars['String'];
  parties: Maybe<Array<Maybe<Party>>>;
  /** Transit Time breakdown that applies to the ServiceLevel. */
  transitTime: Maybe<TransitTime>;
  /** When this ServiceLevel was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevel. */
  updatedBy: Scalars['ID'];
};

/**
 * A `serviceLevelArea` object is a grouping of countries, regions, or zip codes that can be associated with a `serviceLevel`.
 * Usage of this will only happen in conjunction with rate charts.
 */
export type ServiceLevelArea = {
  __typename?: 'ServiceLevelArea';
  /** The search pattern of an administrative area or region code of the country. */
  administrativeAreaCodePattern: Maybe<Scalars['String']>;
  /** The search pattern of the country code. */
  countryCodePattern: Maybe<Scalars['String']>;
  /** When the ServiceLevelArea was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevelArea. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the ServiceLevelArea. */
  id: Scalars['ID'];
  /** Specifies whether the ServiceLevelArea is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name for the ServiceLevelArea. */
  name: Scalars['String'];
  /** Regular expression of postal codes that apply to the area. */
  postalCodePattern: Maybe<Scalars['String']>;
  /** The `ServiceLevel` that the area is being used for. */
  serviceLevel: ServiceLevel;
  /** When the ServiceLevelArea was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelArea. */
  updatedBy: Scalars['ID'];
};

/** Filter the areas that apply to a service level down to a single country, administrative area and postal code */
export type ServiceLevelAreasFilter = {
  /** A single administrative area code if one applies to this location */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The country code for the location */
  countryCode?: InputMaybe<CountryCode>;
  /** A single postal code if one applies to the location */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The ID of the `ServiceLevel` */
  serviceLevel: Scalars['ID'];
};

export type ServiceLevelAvailability = 'CONTRACTED' | 'DISABLED' | 'GENERAL';

/** ServiceLevel Connection */
export type ServiceLevelConnection = {
  __typename?: 'ServiceLevelConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ServiceLevelEdge>>>;
  /** Field pageInfo */
  pageInfo: PageInfo;
};

/** ServiceLevel Edge */
export type ServiceLevelEdge = {
  __typename?: 'ServiceLevelEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ServiceLevel>;
};

export type ServiceLevelFilter = {
  /** The carrier the service level belongs to. */
  carrier?: InputMaybe<Scalars['String']>;
  /** The Zonos specific human readable service level code */
  code?: InputMaybe<Scalars['String']>;
};

/**
 * A ServiceLevelRateChart would apply to a specific service level.
 * The ServiceLevelRateChart would be used before a external carrier API.
 */
export type ServiceLevelRateChart = {
  __typename?: 'ServiceLevelRateChart';
  /** When this ServiceLevelRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevelRateChart. */
  createdBy: Scalars['ID'];
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<CountryCode>;
  /** A unique identifier for the ServiceLevelRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ServiceLevelRateChart. */
  locations: Maybe<Array<ShippingRateLocation>>;
  /** Specifies whether the ServiceLevelRateChart is in live or test mode. */
  mode: Mode;
  /** The specific rate values that apply to the given ServiceLevelRateChart. */
  rates: Array<ShippingRate>;
  /** The `ServiceLevel` associated with the ServiceLevelRateChart. */
  serviceLevel: ServiceLevel;
  /** When this ServiceLevelRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelRateChart. */
  updatedBy: Scalars['ID'];
};

export type ServiceLevelRateChartsFilter = {
  /** The ID of the `ServiceLevel`. */
  serviceLevel: Scalars['ID'];
};

export type Shipment = Node & {
  __typename?: 'Shipment';
  /** The date and time this Shipment was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Shipment */
  createdBy: Scalars['ID'];
  customsDocuments: Array<CustomsDocument>;
  customsSpec: Maybe<CustomsSpec>;
  /** Exemption code for shipments requiring an ITN */
  exemption: Maybe<Scalars['String']>;
  /** A unique identifier for the shipment */
  id: Scalars['ID'];
  /** ITN that was applied on the label request */
  itnNumber: Maybe<Scalars['String']>;
  /** The `Order` associated with this Shipment */
  order: Maybe<Order>;
  /** All of the `Party`s involved with this Shipment */
  parties: Array<Party>;
  /** The `ServiceLevel` utilized by the `Carrier` for this Shipment */
  serviceLevel: ServiceLevel;
  /** A list of `ShipmentCarton`s related to this Shipment */
  shipmentCartons: Array<ShipmentCarton>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices: Maybe<Array<ShipmentSpecialService>>;
  /** The status of the shipment */
  status: Maybe<ShipmentStatusType>;
  /** A list of statuses of the shipment */
  statusTransitions: Array<ShipmentStatusTransition>;
  /** An optional master tracking */
  tracking: Maybe<Tracking>;
};

export type ShipmentAmountType =
  | 'BUFFER'
  | 'DISCOUNT'
  | 'FUEL_SURCHARGE'
  | 'INSURANCE'
  | 'PUBLISHED_RATE'
  | 'SURCHARGE';

export type ShipmentCarton = Node & {
  __typename?: 'ShipmentCarton';
  /** Details for a package containing alcohol. */
  alcoholRecipientType: Maybe<AlcoholRecipientType>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail: Maybe<BatteryDetail>;
  /** The `Carton` related to this ShipmentCarton */
  carton: Carton;
  /** A unique identifier for this ShipmentCarton */
  id: Scalars['ID'];
  label: Maybe<Label>;
  /** Signature option type to apply at the package level. */
  signatureOptionType: Maybe<SignatureOptionType>;
  /** A list of `ShipmentCartonSpecialService`s that apply to this `ShipmentCarton` */
  specialServices: Maybe<Array<ShipmentCartonSpecialService>>;
  /** The `Tracking` related to this ShipmentCarton */
  tracking: Maybe<Tracking>;
};

export type ShipmentCartonInput = {
  /** The measurement units of the height, length and width for the `ShipmentCarton`'s `Carton` */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `ShipmentCarton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The list of `Item`s included in this `ShipmentCarton` */
  items: Array<ShipmentCartonItemInput>;
  /** The numeric length of the `ShipmentCarton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** Input field including details for all special services required at the package level */
  specialServiceDetails?: InputMaybe<ShipmentCartonSpecialServiceDetailInput>;
  /** The tracking number for this specific Carton, if different than the tracking number for the entire `Shipment` */
  trackingNumber?: InputMaybe<Scalars['String']>;
  /** The weight of the `ShipmentCarton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShipmentCarton`. */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `ShipmentCarton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ShipmentCartonItemInput = {
  /** The country of origin for the `Item` in this `ShipmentCarton` */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The HS code for the `Item` in this `ShipmentCarton` */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The reference to the item included in this `ShipmentCarton`: SKU, Product ID, or `Item` ID */
  itemReference: Scalars['String'];
  /** The name of the `Item` in this `ShipmentCarton` */
  labelName?: InputMaybe<Scalars['String']>;
  /** The quantity of the `Item` in this `ShipmentCarton` */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ShipmentCartonSpecialService =
  /** Indicates this package contains alcohol. `alcoholRecipientType` field is required when this value is present. */
  | 'ALCOHOL'
  /** Indicates this package contains some form of battery. `batteryDetail` field is required when this value is present. */
  | 'BATTERY'
  | 'BATTERY_INSIDE_EQUIPMENT'
  | 'BATTERY_ONLY'
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT'
  /** Indicates this package contains some form of dangerous good. */
  | 'DANGEROUS_GOODS'
  /** Indicates this package contains dry ice. */
  | 'DRY_ICE'
  /** Indicates this package may require a signature when being delivered. */
  | 'SIGNATURE_OPTION';

export type ShipmentCartonSpecialServiceDetailInput = {
  /** Details for a package containing alcohol. Required if ALCOHOL is present in `serviceTypes`. */
  alcoholRecipientType?: InputMaybe<AlcoholRecipientType>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail?: InputMaybe<BatteryDetailInput>;
  /** List of `ShipmentCartonSpecialService` options to apply at the package level. */
  serviceTypes?: InputMaybe<Array<ShipmentCartonSpecialService>>;
  /** Signature option type to apply at the package level. Required if SIGNATURE_OPTION is present in `serviceTypes`. */
  signatureOptionType?: InputMaybe<SignatureOptionType>;
};

export type ShipmentConnection = {
  __typename?: 'ShipmentConnection';
  edges: Maybe<Array<Maybe<ShipmentEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

/**
 * ShipmentConsolidation is used to consolidate shipments to send to a carrier. For UPS, this would facilitate the Worldwide Economy
 * master carton functionality.
 */
export type ShipmentConsolidation = {
  __typename?: 'ShipmentConsolidation';
  /** Timestamp of when this ShipmentConsolidation was initially created. */
  createdAt: Scalars['DateTime'];
  /** ID of the batch that was created by the carrier. For UPS, this would be the Master Carton ID. */
  externalId: Scalars['String'];
  /** Unique identifier for the ShipmentConsolidation. */
  id: Scalars['ID'];
  /** `Shipment`(s) associated with this ShipmentConsolidation. */
  shipments: Array<Shipment>;
  /** Indicates if this ShipmentConsolidation is open or closed. */
  status: ShipmentConsolidationStatus;
  /** List of `ShipmentConsolidationStatusTransition` to show a history of status changes. */
  statusTransitions: Array<ShipmentConsolidationStatusTransition>;
};

export type ShipmentConsolidationConnection = {
  __typename?: 'ShipmentConsolidationConnection';
  /** A list of `ShipmentConsolidationEdge` objects. */
  edges: Array<ShipmentConsolidationEdge>;
  /** Pagination info for the connection object. */
  pageInfo: Maybe<PageInfo>;
  /** Total count of `ShipmentConsolidation` objects that match the given filter criteria. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ShipmentConsolidationCreateInput = {
  /** Batch ID provided by the carrier. For UPS, this would be the Master Carton ID. */
  externalId: Scalars['String'];
  /** Initial `Shipment` ID to start the `ShipmentConsolidation`. */
  shipmentId: Scalars['ID'];
};

export type ShipmentConsolidationEdge = {
  __typename?: 'ShipmentConsolidationEdge';
  /** String cursor pointing to this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The `ShipmentConsolidation` associated with this edge. */
  node: ShipmentConsolidation;
};

export type ShipmentConsolidationFilter = {
  /** Filter by when the `ShipmentConsolidation` was created. */
  createdAt?: InputMaybe<DateTimeRange>;
  /** ID of a `Shipment` that is part of the ShipmentConsolidation */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** Filter by the status of the `ShipmentConsolidation`. */
  status?: InputMaybe<ShipmentConsolidationStatus>;
};

export type ShipmentConsolidationStatus = 'CLOSED' | 'OPEN';

export type ShipmentConsolidationStatusTransition = {
  __typename?: 'ShipmentConsolidationStatusTransition';
  /** Timestamp of when this status changed occurred. */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change. */
  note: Maybe<Scalars['String']>;
  /** Status of this `ShipmentConsolidation`. */
  status: ShipmentConsolidationStatus;
};

export type ShipmentConsolidationUpdateInput = {
  /** ID of the `ShipmentConsolidation` to update. */
  id: Scalars['ID'];
  /** ID of the `Shipment` to add to the `ShipmentConsolidation`. If `status` is provided in the input, `shipmentId` will be added to the consolidation, and then the desired status will be set. */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** Desired status for the `ShipmentConsolidation`. Should be null unless the consolidation should be closed. */
  status?: InputMaybe<ShipmentConsolidationStatus>;
};

export type ShipmentCreateInput = {
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** A flag to say if a `CustomSpec` should be generated from this Shipment */
  generateCustoms: Scalars['Boolean'];
  /** A flag to say if a `Label` should be generated from this Shipment */
  generateLabel: Scalars['Boolean'];
  /** ITN to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** The optional label specifications for the `Label` to be generated */
  labelSpec?: InputMaybe<LabelSpecInput>;
  /** The ID of the `Order` this Shipment belongs to */
  orderId: Scalars['ID'];
  /** The list of `Party`s related to this Shipment, if different than all the parties on the `Order` */
  parties?: InputMaybe<Array<Scalars['ID']>>;
  /** The `ServiceLevel` code or id that the shipment is shipping with, if different that the service level on the `Order` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** A list of details about the `ShipmentCarton`s for this Shipment, if the items and packaging options are different than those on the `Order` */
  shipmentCartons?: InputMaybe<Array<ShipmentCartonInput>>;
  /** ID of the `ShipmentConsolidation` this Shipment will belong to */
  shipmentConsolidationId?: InputMaybe<Scalars['ID']>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices?: InputMaybe<Array<ShipmentSpecialService>>;
  /** The optional tracking number related to the shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ShipmentCreateWorkflowInput = {
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** ITN to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** ID of the `Order` this Shipment will belong to. Required if no `Party` or `Carton` objects are present. */
  orderId?: InputMaybe<Scalars['ID']>;
  /** ID or `code` of the `ServiceLevel` to be used for this Shipment. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** Special service details to apply at the ShipmentCarton level */
  shipmentCartonSpecialServices?: InputMaybe<ShipmentCartonSpecialServiceDetailInput>;
  /** ID of the `ShipmentConsolidation` this Shipment will belong to */
  shipmentConsolidationId?: InputMaybe<Scalars['ID']>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices?: InputMaybe<Array<ShipmentSpecialService>>;
  /** The optional tracking number related to the shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ShipmentEdge = {
  __typename?: 'ShipmentEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Shipment>;
};

export type ShipmentFilter = {
  /** The ID of the `Order` this Shipment belongs to */
  orderId?: InputMaybe<Scalars['ID']>;
  /** A `ServiceLevel` ID that is used for a Shipment */
  serviceLevelId?: InputMaybe<Scalars['String']>;
  /** A date range to filter Shipment objects by their ship date */
  shipDate?: InputMaybe<DateTimeRange>;
  /** The tracking number associated with the Shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** A Shipment rating quote that can be displayed. */
export type ShipmentRating = {
  __typename?: 'ShipmentRating';
  /** The quoted amount for the ShipmentRating. */
  amount: Scalars['Decimal'];
  /** Subtotal amounts of how the ShipmentRating amount was calculated. */
  amountSubtotals: ShipmentRatingSubtotals;
  /** When this ShipmentRating was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShipmentRating */
  createdBy: Scalars['ID'];
  /** The currency this ShipmentRating price amount is in. */
  currencyCode: CurrencyCode;
  /** Breakdown of the details returned from the carrier. */
  details: Maybe<Array<ShipmentRatingDetail>>;
  /** The customer facing display name of the ShipmentRating. */
  displayName: Scalars['String'];
  /** A unique identifier for the ShipmentRating. */
  id: Scalars['ID'];
  /** The ISO-8601 timestamp of when the delivery will be delivered */
  maxTransitAt: Maybe<Scalars['DateTime']>;
  /** The ISO-8601 timestamp of when the delivery could first be delivered */
  minTransitAt: Maybe<Scalars['DateTime']>;
  /**
   * For shipments that contain multiple fulfillment warehouses the multipleShipFromRatings will contain the individual `ShipmentRating` calculations.
   * The aggregated totals will be reflected on the parent object. In these cases the shipFrom location will be null.
   */
  multipleShipFromRatings: Maybe<Array<Maybe<ShipmentRating>>>;
  /** The `Organization` associated with the ShipmentRating */
  organization: Scalars['ID'];
  /** The `ServiceLevel` code associated with the ShipmentRating. */
  serviceLevelCode: Scalars['String'];
  /** The `Location` associated with the origin of the shipment. */
  shipFrom: Maybe<Location>;
  /** Specifies the `Carton`'s destination. */
  shipTo: Maybe<Location>;
  /** The `Carton` data included in the ShipmentRating. */
  shipmentRatingCartons: Array<ShipmentRatingCarton>;
  /** The `ShippingProfile` associated with the ShipmentRating. */
  shippingProfile: Maybe<ShippingProfile>;
  /** When this ShipmentRating was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShipmentRating. */
  updatedBy: Scalars['ID'];
};

export type ShipmentRatingBatteryDetail = {
  /** Indicates what material the battery is composed of */
  materialType: ShipmentRatingBatteryMaterialType;
  /** Indicates how the battery is packaged within the shipment */
  packingType: ShipmentRatingBatteryPackingType;
};

export type ShipmentRatingBatteryMaterialType =
  /** Indicates battery is a lithium ion battery */
  | 'LITHIUM_ION'
  /** Indicates battery is a lithium metal battery */
  | 'LITHIUM_METAL';

export type ShipmentRatingBatteryPackingType =
  /** Battery is contained inside an item in the package */
  | 'BATTERY_INSIDE_EQUIPMENT'
  /** The package only contains a battery/batteries. */
  | 'BATTERY_ONLY'
  /** Battery is packaged with the equipment and not contained in the item */
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT';

export type ShipmentRatingCalculateQuoterWorkflowInput = {
  /** Container for special service details to apply to the `ShipmentRating` */
  specialServiceDetail?: InputMaybe<ShipmentRatingSpecialServiceDetail>;
};

export type ShipmentRatingCalculateWorkflowInput = {
  /** Container for special service details to apply to the `ShipmentRating` */
  specialServiceDetail?: InputMaybe<ShipmentRatingSpecialServiceDetail>;
};

/** The Carton details containing the package dimensions and items included in the `ShipmentRating` */
export type ShipmentRatingCarton = {
  __typename?: 'ShipmentRatingCarton';
  /** The monetary amount to insure a `Carton` for to account for unexpected incidents. */
  amountInsured: Scalars['Decimal'];
  /** The `Carton` associated with the ShipmentRatingCarton */
  carton: Carton;
  /** The weight the carrier is charging for this carton. This could be actual or dimensional weight of the carton. */
  chargeableWeight: Maybe<Scalars['Decimal']>;
  /** The `dimensionalWeight` factor used to determine the `dimensionalWeight`. */
  dimensionalFactor: Maybe<Scalars['Int']>;
  /** The calculated `dimensionalWeight` of the carton. */
  dimensionalWeight: Maybe<Scalars['Decimal']>;
};

export type ShipmentRatingConnection = {
  __typename?: 'ShipmentRatingConnection';
  /** A list of edges containing `ShipmentRatingEdge` objects of the current page in the connection */
  edges: Array<ShipmentRatingEdge>;
  /** `PageInfo` for the current pagination connection */
  pageInfo: Maybe<PageInfo>;
  /** The total number of objects that apply to the given filters */
  totalCount: Maybe<Scalars['Int']>;
};

/** Input to create a non-calculated shipmentRating. */
export type ShipmentRatingCreateWorkflowInput = {
  /** The amount for the `ShipmentRating`. */
  amount: Scalars['Decimal'];
  /** The currency this `ShipmentRating` price amount is in. */
  currencyCode: CurrencyCode;
  /** The customer facing display name of the `ShipmentRating`. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The `ServiceLevel` code associated with the `ShipmentRating`. */
  serviceLevelCode: Scalars['String'];
};

/** A surcharge or discount breakdown provided by the carrier. */
export type ShipmentRatingDetail = {
  __typename?: 'ShipmentRatingDetail';
  /** Amount for each charge as defined by the `Carrier`. */
  amount: Scalars['Decimal'];
  /** Unique identifier that will be tied to each fee that is charged by the carrier for the `ShipmentRating`. */
  carrierCode: Scalars['String'];
  /** The type of fee that is being broken down as part of the `ShipmentRating`. */
  type: ShipmentAmountType;
};

export type ShipmentRatingEdge = {
  __typename?: 'ShipmentRatingEdge';
  /** A cursor pointing to this `ShipmentRating` in the current connection */
  cursor: Scalars['String'];
  /** The `ShipmentRating` object */
  node: ShipmentRating;
};

export type ShipmentRatingFilter = {
  /** A range of DateTime to filter by the createdAt field */
  createdAtBetween?: InputMaybe<DateTimeRange>;
  /** A two-letter ISO country code */
  destinationCountry?: InputMaybe<CountryCode>;
  /** A two-letter ISO country code */
  originCountry?: InputMaybe<CountryCode>;
  /** The ID of the `ServiceLevel` the `ShipmentRating` was calculated from */
  serviceLevel?: InputMaybe<Scalars['ID']>;
};

export type ShipmentRatingSignatureOptionType =
  /** An adult signature is required */
  | 'ADULT'
  /** Signature requirement based on the service level default */
  | 'DEFAULT'
  /** Direct signature required */
  | 'DIRECT'
  /** Indirect signature required */
  | 'INDIRECT';

export type ShipmentRatingSpecialServiceDetail = {
  /** Detail input required when BATTERY is present in `serviceTypes` */
  batteryDetail?: InputMaybe<ShipmentRatingBatteryDetail>;
  /** List of `ShipmentRatingSpecialServiceTypes` to apply to the `ShipmentRating` */
  serviceTypes: Array<ShipmentRatingSpecialServiceType>;
  /** Specifies the type of signature required. Required when SIGNATURE_OPTION is present in `serviceTypes` */
  signatureOptionType?: InputMaybe<ShipmentRatingSignatureOptionType>;
};

export type ShipmentRatingSpecialServiceType =
  | 'ALCOHOL'
  | 'BATTERY'
  | 'CUT_FLOWERS'
  | 'DANGEROUS_GOODS'
  | 'DRY_ICE'
  | 'SATURDAY_DELIVERY'
  | 'SIGNATURE_OPTION'
  | 'SUNDAY_DELIVERY';

/** Subtotal amounts of how the `ShipmentRating` amount was calculated */
export type ShipmentRatingSubtotals = {
  __typename?: 'ShipmentRatingSubtotals';
  /** Amount charged for the fuel surcharge by the `Carrier`. */
  fuelSurcharge: Maybe<Scalars['Decimal']>;
  /** Cost to insure items that is charged by the `Carrier`. */
  insuranceCost: Maybe<Scalars['Decimal']>;
  /** The sum of any other surcharges that are not individually broken down by the `Carrier` (residential falls into this bucket). */
  otherSurcharge: Maybe<Scalars['Decimal']>;
  /** Cost of shipping as defined by the `Carrier`. */
  shipping: Scalars['Decimal'];
};

export type ShipmentSpecialService =
  | 'CONSOLIDATION'
  | 'CUT_FLOWERS'
  | 'DRY_ICE'
  | 'EXTENDED_AREA'
  | 'RETURN_SHIPMENT'
  | 'SATURDAY_DELIVERY'
  | 'SATURDAY_PICKUP'
  | 'SCHEDULED_DELIVERY'
  | 'SINGLE_SHIPMENT';

export type ShipmentStatusTransition = {
  __typename?: 'ShipmentStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Shipment` at the associated DateTime */
  status: ShipmentStatusType;
};

export type ShipmentStatusType =
  /** Default status */
  | 'CREATED'
  /** Shipment was canceled */
  | 'VOIDED';

export type ShipmentStatusUpdateInput = {
  /** Optional note about the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The shipment which status should be updated */
  shipment: Scalars['ID'];
  /** The new status type the shipment should be updated to */
  status: ShipmentStatusType;
};

export type ShipmentType = 'DOMESTIC' | 'INTERNATIONAL';

export type ShippingPaymentType =
  /** The shipper will be responsible for paying shipping charges. Default value. */
  | 'SENDER'
  /** A third party will be responsible for paying shipping charges */
  | 'THIRD_PARTY';

/**
 * A ShippingProfile object is used to map a `ServiceLevel` to an `Organization`. Allowing the Organization to adjust
 * the display name and apply rate charts to the service level.
 */
export type ShippingProfile = {
  __typename?: 'ShippingProfile';
  /** When this ShippingProfile was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingProfile. */
  createdBy: Scalars['ID'];
  /** A customized carrier service level code to identify how to fulfill the shipment. */
  customServiceLevelCode: Maybe<Scalars['String']>;
  /** A unique identifier for the ShippingProfile. */
  id: Scalars['ID'];
  /** The method to use for the landed cost calculation for the ShippingProfile. */
  landedCostMethod: Maybe<LandedCostMethod>;
  /** Specifies whether the ShippingProfile is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name of the ShippingProfile. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingProfile. */
  organization: Scalars['ID'];
  /** The `ServiceLevel` associated with the ShippingProfile. */
  serviceLevel: ServiceLevel;
  /** The shipping percent increase */
  shippingPercentIncrease: Maybe<Scalars['Decimal']>;
  /** The `ShippingProfileRateCharts` that apply to this profile. */
  shippingRates: Maybe<Array<ShippingProfileRateChart>>;
  /** The shipping value increase */
  shippingValueIncrease: Maybe<Scalars['Decimal']>;
  /** `TransitTime` breakdown that applies to the ShippingProfile. */
  transitTime: Maybe<TransitTime>;
  /** When this ShippingProfile was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfile. */
  updatedBy: Scalars['ID'];
};

/**
 * A `ShippingProfileRateChart` would apply to a specific shipping profile.
 * The `ShippingProfileRateChart` would be used before any `ServiceLevelRateChart` as well as any external carrier API.
 */
export type ShippingProfileRateChart = {
  __typename?: 'ShippingProfileRateChart';
  /** When this ShippingProfileRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingProfileRateChart. */
  createdBy: Scalars['ID'];
  /** The dimensional weight factor to be used for the supplied rates.  */
  dimensionalWeightFactor: Scalars['Decimal'];
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<CountryCode>;
  /** A unique identifier for the ShippingProfileRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ShippingProfileRateChart. */
  locations: Maybe<Array<ShippingRateLocation>>;
  /** Specifies whether the ShippingProfileRateChart is in live or test mode. */
  mode: Mode;
  /** The specific rate values that apply to the given ShippingProfileRateChart. */
  rates: Array<ShippingRate>;
  /** The `ShippingProfile` associated with the ShippingProfileRateChart. */
  shippingProfile: ShippingProfile;
  /** When this ShippingProfileRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfileRateChart. */
  updatedBy: Scalars['ID'];
};

export type ShippingProfileRateChartsFilter = {
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
};

export type ShippingProfilesFilter = {
  /** The ID of the `ServiceLevel`. */
  serviceLevel: Scalars['ID'];
};

/** A Shipping rate that is based on either weight our currency amount */
export type ShippingRate = ShippingRateAmount | ShippingRateWeight;

/** A `ShippingRateAmount` defines the range in a specific currency unit that applies to a given rate amount */
export type ShippingRateAmount = {
  __typename?: 'ShippingRateAmount';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: CurrencyCode;
  /** The inclusive maximum amount that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum amount that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The `currencyCode` that defines the min/max values. */
  unit: CurrencyCode;
};

/** Specify how the rate amount would be applied. */
export type ShippingRateCalculation =
  /** The rate uses the amount as it was entered. */
  | 'FIXED'
  /** The rate multiplies the amount by the units. */
  | 'PER_UNIT';

/** A `ShippingRateLocation` is used to limit the destination that would apply to a `ShippingProfileRateChart`. */
export type ShippingRateLocation = {
  __typename?: 'ShippingRateLocation';
  /** Which administrative area the shipper must be located in to trigger this configuration. */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** A single country code if one applies to this location. */
  countryCode: Maybe<CountryCode>;
  /** A pre-defined area or carrier zone that applies to the rate. */
  serviceLevelArea: Maybe<ServiceLevelArea>;
};

/** A `ShippingRateWeight` defines the range in a specific weight unit that applies to a given rate amount */
export type ShippingRateWeight = {
  __typename?: 'ShippingRateWeight';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: CurrencyCode;
  /** The inclusive maximum weight that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum weight that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShippingRate`. */
  unit: WeightUnitCode;
};

export type ShippingSettings = {
  __typename?: 'ShippingSettings';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  defaultWeightMultiplier: Scalars['Decimal'];
  id: Scalars['String'];
  mode: Mode;
  organization: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

/** A `ShippingStoreSettings` object represents store-specific settings for shipping related processes. */
export type ShippingStoreSettings = {
  __typename?: 'ShippingStoreSettings';
  /** An additional fee that can be added to `ShippingRate`s */
  additionalFee: Maybe<Scalars['Decimal']>;
  /** When ShippingStoreSettings was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingStoreSettings. */
  createdBy: Scalars['ID'];
  /** Display transit time inline */
  displayTransitTimeInline: Maybe<Scalars['Boolean']>;
  /** A buffer amount to be applied to duty and tax amounts */
  dutyTaxBuffer: Maybe<Scalars['Decimal']>;
  /** A buffer represented as a percentage to be applied to duty and tax amounts */
  dutyTaxBufferPercent: Maybe<Scalars['Decimal']>;
  /** Fulfillment days */
  fulfillmentDays: Maybe<Scalars['Int']>;
  /** A unique identifier for the ShippingStoreSettings. */
  id: Scalars['ID'];
  /** Landed cost countries */
  landedCostCountries: Maybe<Scalars['String']>;
  /** Landed cost prepay */
  landedCostPrepay: Maybe<Scalars['String']>;
  /** Pickup time */
  pickupTime: Maybe<Scalars['DateTime']>;
  /** Shipping percent increase */
  shippingPercentIncrease: Maybe<Scalars['Decimal']>;
  /** The ID of the store these settings apply to */
  storeId: Scalars['Int'];
  /** The stores Tax Payer Identification (TIN) number */
  tinNumber: Maybe<Scalars['String']>;
  /** The type of TIN number ex. Business National, Personal State */
  tinType: Maybe<Scalars['String']>;
  /** When ShippingStoreSettings was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingStoreSettings. */
  updatedBy: Scalars['ID'];
};

/** A `ShippingZone` is a group of countries that will be serviced by a `FulfillmentCenter`. */
export type ShippingZone = {
  __typename?: 'ShippingZone';
  /** A list of two-letter ISO country codes that are supported by this ShippingZone. */
  countryCodes: Maybe<Array<CountryCode>>;
  /** When the ShippingZone was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingZone. */
  createdBy: Scalars['ID'];
  /** The default `FulfillmentCenter` that services the ShippingZone. */
  fulfillmentCenter: Maybe<FulfillmentCenter>;
  /** A unique identifier for the ShippingZone. */
  id: Scalars['ID'];
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration: ZoneLandedCostConfiguration;
  /** Specifies whether the ShippingZone is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name for the ShippingZone. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingZone. */
  organization: Scalars['ID'];
  /** A list of shipping profiles associated with the ShippingZone. */
  profiles: Maybe<Array<ShippingProfile>>;
  /** When the ShippingZone was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingZone. */
  updatedBy: Scalars['ID'];
};

export type ShippingZonesFilter = {
  /** A two-letter ISO country code. */
  countryCode: CountryCode;
};

export type SignatureOptionType =
  /** An adult signature is required */
  | 'ADULT'
  /** Signature requirement based on the service level default */
  | 'DEFAULT'
  /** Direct signature required */
  | 'DIRECT'
  /** Indirect signature required */
  | 'INDIRECT'
  /** No signature required */
  | 'NONE';

export type StageUploadResult = {
  __typename?: 'StageUploadResult';
  /** ID of the `StagedUploadResult`. */
  id: Scalars['ID'];
  /** URL designating where to upload the resource. */
  url: Scalars['String'];
};

/** An implementation of `ReconciliationCharge` that represents a charge submitted by Zonos to Stripe */
export type StripeSubscriptionCharge = ReconciliationCharge & {
  __typename?: 'StripeSubscriptionCharge';
  /** The sum of the transaction fees for this `LegacyOrderTransaction` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `StripeSubscriptionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount is displayed in */
  currencyCode: CurrencyCode;
  /** A unique identifier for this `StripeSubscriptionCharge` */
  id: Scalars['ID'];
  /** An optional note about this `StripeSubscriptionCharge` */
  note: Maybe<Scalars['String']>;
  /** The Stripe charge that Zonos used to bill the merchant */
  zonosStripeCharge: ZonosStripeCharge;
};

/** Represents a tax amount on a `LandedCost` quote */
export type Tax = {
  __typename?: 'Tax';
  /** `Tax` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Tax` amount is in. @deprecated use currencyCode instead. */
  currency: CurrencyCode;
  /** Currency the `Tax` amount is in. */
  currencyCode: CurrencyCode;
  /** Human-readable description of this `Tax`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Tax` amounts */
  exchangeRate: Maybe<ExchangeRate>;
  /** Human readable formula indicating how this tax was calculated */
  formula: Scalars['String'];
  /** `Item` that this tax amount applies to */
  item: Maybe<Item>;
  /** Additional note for this `Tax`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this tax amount */
  payee: Maybe<Party>;
  /** `Party` responsible for rendering payment on this tax amount */
  payor: Maybe<Party>;
  /** Type of `Tax`. */
  type: LandedCostFeeType;
};

export type TaxCalculationType = 'CIF' | 'CUSTOM' | 'FOB';

export type TaxId = {
  __typename?: 'TaxId';
  administrativeAreaCode: Maybe<Scalars['String']>;
  allowLowValueOrders: Maybe<Scalars['Boolean']>;
  countryCode: CountryCode;
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['ID']>;
  effectiveAt: Maybe<Scalars['DateTime']>;
  expiresAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  method: TaxMethodType;
  mode: Maybe<Mode>;
  organization: Maybe<Scalars['ID']>;
  sendEmails: Maybe<Scalars['Boolean']>;
  taxIdNumber: Scalars['String'];
  type: TaxIdType;
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['ID']>;
};

export type TaxIdFilterInput = {
  administrativeAreaCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCodes?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  taxIdType?: InputMaybe<Array<InputMaybe<TaxIdType>>>;
};

export type TaxIdInput = {
  administrativeAreaCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowLowValueOrders?: InputMaybe<Scalars['Boolean']>;
  countryCode: CountryCode;
  effectiveAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  method: TaxMethodType;
  sendEmails?: InputMaybe<Scalars['Boolean']>;
  taxIdNumber: Scalars['String'];
  type: TaxIdType;
};

export type TaxIdType =
  /** Brazil CNPJ/CPF Federal Tax */
  | 'CNP'
  /** Deferment account duties only */
  | 'DAN'
  /** Deferment account duties, taxes, and fees only */
  | 'DTF'
  /** Data Universal Numbering System */
  | 'DUN'
  /** Employer Identification Number */
  | 'EIN'
  /** Economic Operator registration ID */
  | 'EORI'
  /** Federal Tax ID */
  | 'FED'
  /** Free Trade Zone ID */
  | 'FTZ'
  /** VAT registration */
  | 'GST'
  /** GB VAT (foreign) registration */
  | 'HMRC'
  /** Import One Stop Shop */
  | 'IOSS'
  /** Oversees Registered Supplier */
  | 'LVG'
  /** AUSid GST registration */
  | 'OSR'
  /** Social Security Number */
  | 'SSN'
  /** #State Tax ID */
  | 'STA'
  /** Deferment account tax only */
  | 'TAN'
  /** VAT on E-Commerce */
  | 'VOEC';

export type TaxMethodType = 'CONSIGNMENT' | 'DEFAULT' | 'DOMESTIC';

export type Tracking = Node & {
  __typename?: 'Tracking';
  /** A unique identifier for this Tracking */
  id: Scalars['ID'];
  /**
   * The `Label` related to this Tracking
   * @deprecated Use label field on ShipmentCarton for label details
   */
  label: Maybe<Label>;
  /** The tracking number related to this Tracking */
  number: Scalars['String'];
  /** The tracking url for this Tracking */
  url: Scalars['String'];
};

export type TrackingEventTypeCode =
  | 'CANCELED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'PICKED_UP'
  | 'PRE_TRANSIT';

export type TransactionFee = {
  __typename?: 'TransactionFee';
  /** The total amount of the transaction */
  amount: Scalars['Decimal'];
  /** The currency the amount is displayed in */
  currencyCode: CurrencyCode;
  /** The type of the `TransactionFee` */
  type: TransactionFeeType;
};

export type TransactionFeeType =
  /** `TransactionFee` type representing duty and tax fees */
  | 'DUTY_TAX'
  /** `TransactionFee` type representing Zonos' LCG percentage fee */
  | 'LCG_PERCENTAGE'
  /** `TransactionFee` type representing Zonos' LCG per shipment */
  | 'LCG_PER_SHIPMENT'
  /** `TransactionFee` type representing merchant fees */
  | 'MERCHANT'
  /** `TransactionFee` type representing shipping fees */
  | 'SHIPPING';

export type TransitTime = {
  __typename?: 'TransitTime';
  /** ISO-8601 timestamp of when the delivery will be delivered. Only the time portion will be used. */
  guaranteedDelivery: Maybe<Scalars['DateTime']>;
  /** The maximum number of transit days. */
  max: Maybe<Scalars['Int']>;
  /** The minimum number of transit days. */
  min: Maybe<Scalars['Int']>;
  /** Indicates what type of value the min and max fields represent. (default: days) */
  type: Maybe<TransitTypeCode>;
};

export type TransitTypeCode = 'BUSINESS_DAYS' | 'DAYS' | 'WEEKS';

export type UpdateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type UpdateDashboardSettingsInput = {
  defaultDisplayCurrency?: InputMaybe<Scalars['String']>;
  defaultDisplayLanguage?: InputMaybe<Scalars['String']>;
  defaultDisplayLocal?: InputMaybe<Scalars['String']>;
  defaultDisplayTimezone?: InputMaybe<Scalars['String']>;
  defaultUnit?: InputMaybe<DashboardUnit>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  multiFactorAuth?: InputMaybe<MultiFactorAuthSetting>;
};

export type UpdatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek: Day;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: EndOfDayBehavior;
  /** How often payouts occur, in days. */
  frequencyDays: Scalars['Int'];
  /** A unique identifier for the PaymentsSettings. */
  id: Scalars['String'];
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Scalars['Int'];
};

export type UpdateShippingSettingsInput = {
  defaultWeightMultiplier: Scalars['Decimal'];
  id: Scalars['String'];
};

export type UploadErrors = {
  __typename?: 'UploadErrors';
  message: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['String']>;
  sku: Maybe<Scalars['String']>;
};

export type VisibilityCode = 'HIDE' | 'OPTIONAL' | 'REQUIRED';

export type VolumeUnitCode =
  | 'BARREL_PETROLEUM'
  | 'BUSHEL_UK'
  | 'BUSHEL_US_DRY'
  | 'CENTILITER_CL'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  | 'DECALITER_DAL'
  | 'DECILITER'
  | 'FLUID_DRAM_FL_DR'
  | 'FLUID_OUNCE_FL_OZ'
  | 'FLUID_OUNCE_UK'
  | 'GALLON_FLUID'
  | 'GALLON_UK'
  | 'GILL_GI'
  | 'HECTOLITER'
  | 'KILOLITER'
  | 'LITER'
  | 'MICROLITER'
  | 'MILLILITER_ML'
  | 'MINIM_MIN'
  | 'PECK_US_DRY'
  | 'PINT_FLUID'
  | 'PINT_UK'
  | 'PINT_US_DRY'
  | 'QUART_FLUID'
  | 'QUART_UK'
  | 'QUART_US_DRY';

export type WcoVersion =
  | 'WCO_1997'
  | 'WCO_2002'
  | 'WCO_2007'
  | 'WCO_2012'
  | 'WCO_2017'
  | 'WCO_2022'
  | 'WCO_2027'
  | 'WCO_2032'
  | 'WCO_2037'
  | 'WCO_2042'
  | 'WCO_2047'
  | 'WCO_2052'
  | 'WCO_2057'
  | 'WCO_2062'
  | 'WCO_2067'
  | 'WCO_2072';

export type WeightUnitCode = 'GRAM' | 'KILOGRAM' | 'OUNCE' | 'POUND';

export type ZoneLandedCostConfiguration =
  /** The landed cost method will be DAP. */
  | 'DAP_FORCED'
  /** The landed cost method will be determined by the `LandedCostMethod` on the `ShippingProfile` used in this zone. */
  | 'SHIPPING_PROFILE';

export type ZonosAttribution = 'DISABLED' | 'ENABLED';

/** `ZonosStripeCharge` is an object that represents what Zonos billed a merchant through Stripe for a subscription item */
export type ZonosStripeCharge = {
  __typename?: 'ZonosStripeCharge';
  /** A timestamp of when this ZonosStripeCharge was created */
  createdAt: Scalars['DateTime'];
  /** The confirmation ID returned by Stripe for this ZonosStripeCharge */
  stripeConfirmationId: Scalars['String'];
  /** The Stripe subscription item ID this charge was billed to */
  stripeSubscriptionItemId: Scalars['String'];
  /** The `TransactionFee` object associated with this ZonosStripeCharge */
  transactionFee: TransactionFee;
  /** The price per unit for this ZonosStripeCharge */
  unitPrice: Scalars['Decimal'];
  /** The number of units that were billed for this ZonosStripeCharge */
  units: Scalars['Int'];
};

export type CatalogItemQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  productId: InputMaybe<Scalars['String']>;
  sku: InputMaybe<Scalars['String']>;
}>;

export type CatalogItemQuery = { __typename?: 'Query' } & {
  catalogItem: Maybe<
    { __typename?: 'CatalogItem' } & Pick<
      CatalogItem,
      | 'brand'
      | 'catalogItemUrl'
      | 'countryOfOrigin'
      | 'description'
      | 'hsCode'
      | 'id'
      | 'itemType'
      | 'material'
      | 'packingPreference'
      | 'productId'
      | 'restrictedCountries'
      | 'sku'
    > & {
        attributes: Maybe<
          Array<
            Maybe<
              { __typename?: 'ItemAttribute' } & Pick<
                ItemAttribute,
                'key' | 'value'
              >
            >
          >
        >;
        catalogItemReferences: Array<
          { __typename?: 'CatalogItemReference' } & Pick<
            CatalogItemReference,
            'priceRatio'
          > & {
              catalogItem: { __typename?: 'CatalogItem' } & Pick<
                CatalogItem,
                | 'brand'
                | 'catalogItemUrl'
                | 'countryOfOrigin'
                | 'createdAt'
                | 'description'
                | 'hsCode'
                | 'id'
                | 'itemType'
                | 'material'
                | 'productId'
                | 'restrictedCountries'
                | 'sku'
                | 'updatedAt'
              > & {
                  attributes: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'ItemAttribute' } & Pick<
                          ItemAttribute,
                          'key' | 'value'
                        >
                      >
                    >
                  >;
                  hsCodes: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'CatalogItemHsCode' } & Pick<
                          CatalogItemHsCode,
                          'hsCode'
                        >
                      >
                    >
                  >;
                  measurements: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'ItemMeasurement' } & Pick<
                          ItemMeasurement,
                          'source' | 'type' | 'unitOfMeasure' | 'value'
                        >
                      >
                    >
                  >;
                  metadata: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'ItemMetadata' } & Pick<
                          ItemMetadata,
                          'key' | 'value'
                        >
                      >
                    >
                  >;
                };
            }
        >;
        hsCodes: Maybe<
          Array<
            Maybe<
              { __typename?: 'CatalogItemHsCode' } & Pick<
                CatalogItemHsCode,
                'hsCode'
              >
            >
          >
        >;
        measurements: Maybe<
          Array<
            Maybe<
              { __typename?: 'ItemMeasurement' } & Pick<
                ItemMeasurement,
                'source' | 'type' | 'unitOfMeasure' | 'value'
              >
            >
          >
        >;
        metadata: Maybe<
          Array<
            Maybe<
              { __typename?: 'ItemMetadata' } & Pick<
                ItemMetadata,
                'key' | 'value'
              >
            >
          >
        >;
      }
  >;
};

export type ClassificationsCalculateMutationVariables = Exact<{
  inputs: Array<ClassificationCalculateInput> | ClassificationCalculateInput;
}>;

export type ClassificationsCalculateMutation = { __typename?: 'Mutation' } & {
  classificationsCalculate: Array<
    { __typename?: 'Classification' } & Pick<
      Classification,
      'confidenceScore'
    > & { hsCode: Maybe<{ __typename?: 'HsCode' } & Pick<HsCode, 'code'>> }
  >;
};

export type FullLandedCostMutationVariables = Exact<{
  itemCreateWorkflowInput:
    | Array<ItemCreateWorkflowInput>
    | ItemCreateWorkflowInput;
  landedCostCalculateWorkflowInput: LandedCostWorkFlowInput;
  partyCreateWorkflowInput:
    | Array<PartyCreateWorkflowInput>
    | PartyCreateWorkflowInput;
}>;

export type FullLandedCostMutation = { __typename?: 'Mutation' } & {
  cartonizeWorkflow: Maybe<
    Array<Maybe<{ __typename?: 'Carton' } & Pick<Carton, 'id'>>>
  >;
  itemCreateWorkflow: Array<
    { __typename?: 'Item' } & Pick<
      Item,
      | 'amount'
      | 'countryOfOrigin'
      | 'description'
      | 'hsCode'
      | 'id'
      | 'productId'
      | 'quantity'
    > & {
        restriction: Maybe<
          { __typename?: 'RestrictedItem' } & Pick<RestrictedItem, 'id'>
        >;
      }
  >;
  landedCostCalculateWorkflow: Maybe<
    Array<
      Maybe<
        { __typename?: 'LandedCost' } & Pick<
          LandedCost,
          'currencyCode' | 'id' | 'method' | 'rootId'
        > & {
            amountSubtotals: Maybe<
              { __typename?: 'LandedCostAmountSubtotals' } & Pick<
                LandedCostAmountSubtotals,
                'duties' | 'fees' | 'shipping' | 'taxes'
              >
            >;
            deMinimis: Array<
              { __typename?: 'DeMinimis' } & Pick<
                DeMinimis,
                'threshold' | 'type'
              >
            >;
            remittance: Array<
              { __typename?: 'LandedCostRemittance' } & Pick<
                LandedCostRemittance,
                'amount'
              >
            >;
            shipmentRating: { __typename?: 'ShipmentRating' } & Pick<
              ShipmentRating,
              'displayName' | 'id' | 'maxTransitAt' | 'minTransitAt'
            > & {
                shippingProfile: Maybe<
                  { __typename?: 'ShippingProfile' } & Pick<
                    ShippingProfile,
                    'customServiceLevelCode' | 'landedCostMethod'
                  >
                >;
              };
          }
      >
    >
  >;
  partyCreateWorkflow: Array<
    { __typename?: 'Party' } & Pick<Party, 'id' | 'type'> & {
        location: Maybe<
          { __typename?: 'Location' } & Pick<
            Location,
            | 'administrativeArea'
            | 'administrativeAreaCode'
            | 'countryCode'
            | 'line1'
            | 'locality'
            | 'postalCode'
          >
        >;
      }
  >;
  shipmentRatingCalculateWorkflow: Array<
    { __typename?: 'ShipmentRating' } & Pick<ShipmentRating, 'id'>
  >;
};

export const CatalogItemDocument = gql`
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
export const ClassificationsCalculateDocument = gql`
  mutation classificationsCalculate($inputs: [ClassificationCalculateInput!]!) {
    classificationsCalculate(input: $inputs) {
      confidenceScore
      hsCode {
        code
      }
    }
  }
`;
export const FullLandedCostDocument = gql`
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

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    catalogItem(
      variables?: CatalogItemQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CatalogItemQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<CatalogItemQuery>(CatalogItemDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'catalogItem',
        'query'
      );
    },
    classificationsCalculate(
      variables: ClassificationsCalculateMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ClassificationsCalculateMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<ClassificationsCalculateMutation>(
            ClassificationsCalculateDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'classificationsCalculate',
        'mutation'
      );
    },
    fullLandedCost(
      variables: FullLandedCostMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<FullLandedCostMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<FullLandedCostMutation>(
            FullLandedCostDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'fullLandedCost',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
