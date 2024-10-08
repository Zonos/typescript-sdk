/* eslint-disable */
import type { GraphQLClient, RequestOptions } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Decimal: number;
  ZonedDateTime: string;
};

export type ZonosAddressMatchThreshold =
  | 'EXACT_ADMINISTRATIVE_AREA'
  | 'EXACT_COUNTRY'
  | 'EXACT_HOUSE'
  | 'EXACT_LOCALITY'
  | 'EXACT_POSTAL_CODE'
  | 'EXACT_ROAD'
  | 'EXACT_UNIT';

export type ZonosAlcoholRecipientType =
  | 'CONSUMER'
  | 'LICENSEE';

export type ZonosAmountRange = {
  max?: InputMaybe<Scalars['Decimal']>;
  min?: InputMaybe<Scalars['Decimal']>;
};

/** A breakdown of the monetary amounts included in the `Order`. */
export type ZonosAmountSubtotals = {
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
export type ZonosAppearanceSettings = {
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
  mode: ZonosMode;
  /** The organization this AppearanceSettings belongs to */
  organization: Scalars['ID'];
  /** Specifies what `ElementsUIStyle` should be used */
  style: ZonosElementsUiStyle;
  /** Specifies whether to display in dark or light mode */
  theme: ZonosElementsUiTheme;
  /** When the AppearanceSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the AppearanceSettings */
  updatedBy: Scalars['ID'];
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution: Maybe<ZonosZonosAttribution>;
};

/** Input type for updating an existing AppearanceSettings object. */
export type ZonosAppearanceSettingsUpdateInput = {
  /** A hex color code used for providing brand accent colors across the UI */
  colorPrimary?: InputMaybe<Scalars['String']>;
  /** A hex color code used for providing brand accent colors across the UI */
  colorSecondary?: InputMaybe<Scalars['String']>;
  /** The font family used for display. Comes from Google Fonts */
  fontFamily?: InputMaybe<Scalars['String']>;
  /** Specifies a link to your organization's logo as an external URL. If not specified, a placeholder image will be used. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** Specifies what `ElementsUIStyle` should be used */
  style?: InputMaybe<ZonosElementsUiStyle>;
  /** Specifies whether to display in dark or light mode */
  theme?: InputMaybe<ZonosElementsUiTheme>;
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution?: InputMaybe<ZonosZonosAttribution>;
};

export type ZonosAppliedItemRestrictions = {
  __typename?: 'AppliedItemRestrictions';
  /** Denotes the highest level of restriction matched */
  action: Maybe<ZonosItemRestrictionAction>;
  /** Country in which the item originates. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  id: Scalars['ID'];
  /** Human readable item description */
  itemDescription: Maybe<Scalars['String']>;
  /** HS code for this item. */
  itemHsCode: Scalars['String'];
  /** External id for consumers mapping if desired */
  itemId: Maybe<Scalars['String']>;
  /** list of applicable item restrictions */
  itemRestrictions: Maybe<Array<Maybe<ZonosItemRestriction>>>;
};

export type ZonosBatteryDetail = {
  __typename?: 'BatteryDetail';
  /** Indicates what material the battery is made of. */
  material: ZonosBatteryMaterialType;
  /** Indicates how the battery is arranged in the package. */
  packingType: ZonosBatteryPackingType;
};

export type ZonosBatteryDetailInput = {
  /** Indicates what material the battery is made of. */
  material: ZonosBatteryMaterialType;
  /** Indicates how the battery is arranged in the package. */
  packingType: ZonosBatteryPackingType;
};

export type ZonosBatteryMaterialType =
  | 'LITHIUM_ION'
  | 'LITHIUM_METAL';

export type ZonosBatteryPackingType =
  /** Battery is contained inside an item in the package */
  | 'BATTERY_INSIDE_EQUIPMENT'
  /** The package only contains a battery/batteries. */
  | 'BATTERY_ONLY'
  /** Battery is packaged with the equipment and not contained in the item */
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT';

export type ZonosBillingOptionCode =
  | 'DDP_AND_DDU'
  | 'SHIPPER_ONLY'
  | 'THIRD_PARTY'
  | 'UNAVAILABLE';

export type ZonosBulkJob = {
  __typename?: 'BulkJob';
  /** The number of rows that errored out during import */
  errorCount: Maybe<Scalars['Int']>;
  /** Unsuccessful rows and their error messages */
  errorMessages: Maybe<Array<Maybe<ZonosUploadErrors>>>;
  /** The ID of the BulkJob */
  id: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** Current status of the BulkJob */
  status: Maybe<ZonosBulkJobStatus>;
  /** The total number of rows in a CSV upload */
  totalCount: Maybe<Scalars['Int']>;
  /** The number of rows that successfully were saved */
  uploadCount: Maybe<Scalars['Int']>;
};

export type ZonosBulkJobStatus =
  | 'ERROR'
  | 'FILE_SAVED'
  | 'INITIALIZED'
  | 'PROCESSING';

/** A `Carrier` is a shipping provider that Zonos supports through its products and services. Carriers enable the shipping of goods from one country to another based on the availability of a `ServiceLevel` to the country. */
export type ZonosCarrier = {
  __typename?: 'Carrier';
  /** A unique identifier tied to a Carrier. */
  code: Scalars['String'];
  /** A list of country-specific restrictions a `Carrier` should be aware of (e.g., weight, dimensions, pricing). */
  countryConstraints: Maybe<Array<ZonosCountryConstraint>>;
  /** When this Carrier was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Carrier. */
  createdBy: Scalars['ID'];
  /** The Carrier's API credentials. */
  credentials: Maybe<Array<ZonosCarrierCredential>>;
  /** A unique identifier for the Carrier. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the Carrier. */
  name: Scalars['String'];
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  /** Provides a list of `ServiceLevel`s that are supported by the Carrier. */
  serviceLevels: Maybe<Array<ZonosServiceLevel>>;
  /** When this Carrier was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Carrier. */
  updatedBy: Scalars['ID'];
};

/** A `CarrierAccount` is an account number that is associated with a carrier for a given customer or group of customers. Rates may vary across carrier accounts, depending on the customer and volume with the carrier. Shipments cannot be created without a `carrierAccount`. */
export type ZonosCarrierAccount = {
  __typename?: 'CarrierAccount';
  /** The `Carrier` associated with this CarrierAccount. */
  carrier: ZonosCarrier;
  /** When the CarrierAccount was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierAccount. */
  createdBy: Scalars['ID'];
  /** Where the credentials are stored. */
  credentialProvider: ZonosCredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials: Maybe<Array<Maybe<ZonosCarrierAccountCredential>>>;
  /** A unique identifier for the CarrierAccount. */
  id: Scalars['ID'];
  /** Indicates what type of integration this CarrierAccount supports either SOAP or REST. */
  integrationType: ZonosCarrierAccountIntegrationType;
  /** Specifies whether the CarrierAccount is in live or test mode. */
  mode: ZonosMode;
  /** The `Organization` associated with the CarrierAccount. */
  organization: Scalars['ID'];
  /** Rate type for the carrier account. Either `RETAIL` or `NEGOTIATED`. */
  rateType: Maybe<ZonosCarrierAccountRateType>;
  /** Indicates whether this CarrierAccount was registered through Zonos APIs or another source */
  registrationType: ZonosCarrierAccountRegistrationType;
  /** When the CarrierAccount was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CarrierAccount. */
  updatedBy: Scalars['ID'];
};

/** Options to specify the API type to apply to the credentials. */
export type ZonosCarrierAccountApiUsage =
  /** Used when billing third party for duty and tax. */
  | 'BILL_DUTY_TAX'
  /** "Used when connecting to a Label API. */
  | 'LABEL'
  /** Used when connecting to a Rating API. */
  | 'RATING';

/** The storage of the credential value for a specific type of credential used by a carrier. */
export type ZonosCarrierAccountCredential = {
  __typename?: 'CarrierAccountCredential';
  /** The type of credential that applies to the value. */
  type: ZonosCarrierCredentialTypeCode;
  /** The code used as the `Credential` token. */
  value: Scalars['String'];
};

export type ZonosCarrierAccountIntegrationType =
  | 'REST'
  | 'SOAP';

export type ZonosCarrierAccountRateType =
  | 'NEGOTIATED'
  | 'RETAIL';

export type ZonosCarrierAccountRegistrationType =
  | 'OTHER'
  | 'ZONOS';

export type ZonosCarrierAccountsFilter = {
  /** A carrier code to filter the list of accounts */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** ID of the `Carrier` the account is associated with */
  carrierId?: InputMaybe<Scalars['ID']>;
};

/** Enum value indicating if Zonos supports the Carrier API for Rating and/or Labels */
export type ZonosCarrierApiSupportType =
  | 'SUPPORTED'
  | 'UNSUPPORTED';

export type ZonosCarrierBillingInvoice = {
  __typename?: 'CarrierBillingInvoice';
  /** The total amount due for this invoice */
  amount: Scalars['Decimal'];
  /** The carrier reference number for this invoice */
  carrierReferenceNumber: Scalars['String'];
  /** When the `CarrierBillingInvoice` was created in the system */
  createdAt: Scalars['DateTime'];
  /** User who added the invoice to the system */
  createdBy: Scalars['ID'];
  /** The currency the invoice amount is represented in */
  currencyCode: ZonosCurrencyCode;
  /** The date payment is due for this `CarrierBillingInvoice` */
  dueAt: Scalars['DateTime'];
  /** ID prefixed with carrier_billing_invoice_ */
  id: Scalars['ID'];
  /** The Invoice processor details */
  invoiceProcessorDetail: Maybe<ZonosInvoiceProcessorDetail>;
  /** Paginated individual line items represented on this `CarrierBillingInvoice` */
  lineItems: Array<ZonosCarrierBillingInvoiceLineItem>;
  /** Any metadata associated with this `CarrierBillingInvoice` */
  metadata: Maybe<Array<ZonosMetadata>>;
  /** Whether the object is in live or test */
  mode: ZonosMode;
  /** The `Organization` identifier associated with the CarrierBillingInvoice. */
  organizationId: Scalars['ID'];
  /** The status of the payment for this invoice */
  status: ZonosCarrierBillingInvoiceStatus;
  /** Timestamp for when status changed */
  statusTransitions: Array<ZonosCarrierBillingInvoiceStatusTransition>;
  /** When the `CarrierBillingInvoice` was updated */
  updatedAt: Scalars['DateTime'];
  /** The user that updated the `CarrierBillingInvoice` */
  updatedBy: Scalars['ID'];
};

export type ZonosCarrierBillingInvoiceConnection = {
  __typename?: 'CarrierBillingInvoiceConnection';
  /** Field edges */
  edges: Array<ZonosCarrierBillingInvoiceEdge>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

export type ZonosCarrierBillingInvoiceCreateInput = {
  /** The total amount due for this invoice */
  amount: Scalars['Decimal'];
  /** The currency the amounts of this invoice are represented in */
  currencyCode: ZonosCurrencyCode;
  /** The date the payment of this `CarrierBillingInvoice` is due. If null, the `CarrierBillingInvoice` will be due immediately */
  dueAt?: InputMaybe<Scalars['DateTime']>;
  /** The URL for the invoice if available */
  invoiceUrl?: InputMaybe<Scalars['String']>;
  /** The line items contained within this invoice */
  lineItems: Array<ZonosCarrierBillingInvoiceLineItemInput>;
  /** Any metadata associated with this `CarrierBillingInvoiceLineItem` */
  metadata?: InputMaybe<Array<ZonosMetadataInput>>;
  /** The payor carrier account number */
  payorAccountNumber: Scalars['String'];
  /** The reference number for this invoice */
  referenceNumber: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceEdge = {
  __typename?: 'CarrierBillingInvoiceEdge';
  /** Cursor pointing to this edge for use in pagination */
  cursor: Scalars['String'];
  /** The `CarrierBillingInvoice` object located at this edge in the current pagination connection */
  node: ZonosCarrierBillingInvoice;
};

export type ZonosCarrierBillingInvoiceFilter = {
  /** Represents a range of dates, before, or after the creation date */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** Represents a range of dates, before, or after the due date */
  dueAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** The payor carrier account number */
  payorAccountNumber?: InputMaybe<Scalars['String']>;
  /** The status of payment for a `CarrierBillingInvoice` */
  status?: InputMaybe<ZonosCarrierBillingInvoiceStatus>;
};

export type ZonosCarrierBillingInvoiceLineItem = {
  __typename?: 'CarrierBillingInvoiceLineItem';
  /** The amount due for this invoice line */
  amount: Scalars['Decimal'];
  /** The charge type for the this`CarrierBillingInvoiceLineItem` */
  chargeType: ZonosCarrierInvoiceLineItemChargeType;
  /** When the `CarrierBillingInvoice` was created in the system */
  createdAt: Scalars['DateTime'];
  /** User who added the invoice to the system */
  createdBy: Scalars['ID'];
  /** The currency the invoice line item amount is represented in */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** A description of the invoice line */
  description: Maybe<Scalars['String']>;
  /** ID prefixed with carrier_invoice_line_item_ */
  id: Scalars['ID'];
  /** Any metadata associated with this `CarrierBillingInvoiceLineItem` */
  metadata: Maybe<Array<ZonosMetadata>>;
  /** The carrier reference(s) for this invoice line */
  references: Maybe<Array<ZonosCarrierBillingInvoiceLineItemReference>>;
  /** The carrier service level code for this invoice line if applicable */
  serviceLevel: Maybe<Scalars['String']>;
  /** The carrier tracking number for this invoice line */
  trackingNumber: Scalars['String'];
  /** When the `CarrierBillingInvoice` was updated */
  updatedAt: Scalars['DateTime'];
  /** The user that updated the `CarrierBillingInvoice` */
  updatedBy: Scalars['ID'];
};

export type ZonosCarrierBillingInvoiceLineItemInput = {
  /** The amount due for this invoice line */
  amount: Scalars['Decimal'];
  /** The charge type for the this`CarrierBillingInvoiceLineItem` */
  chargeType: ZonosCarrierInvoiceLineItemChargeType;
  /** The currency the invoice line item amount is represented in */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** A description of the invoice line */
  description?: InputMaybe<Scalars['String']>;
  /** Any metadata associated with this `CarrierBillingInvoiceLineItem` */
  metadata?: InputMaybe<Array<ZonosMetadataInput>>;
  /** The carrier reference(s) for this invoice line */
  references?: InputMaybe<Array<ZonosCarrierBillingInvoiceLineItemReferenceInput>>;
  /** The carrier service level for this invoice line */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The carrier tracking number for this invoice line */
  trackingNumber: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceLineItemReference = {
  __typename?: 'CarrierBillingInvoiceLineItemReference';
  referenceType: ZonosCarrierBillingInvoiceLineItemReferenceType;
  value: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceLineItemReferenceInput = {
  referenceType: ZonosCarrierBillingInvoiceLineItemReferenceType;
  value: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceLineItemReferenceType =
  | 'ACCOUNT_ORDER_NUMBER'
  | 'SHIPMENT_REFERENCE_NUMBER'
  | 'ZONOS_ORDER_ID';

/** Statuses that a `CarrierBillingInvoice` can go through */
export type ZonosCarrierBillingInvoiceStatus =
  /** Invoice drafted pending finalize */
  | 'DRAFT'
  /** Invoice creation failed */
  | 'FAILED'
  /** Invoice created pending payment */
  | 'OPEN'
  /** Invoice paid */
  | 'PAID'
  /** Invoice pending creation */
  | 'PENDING'
  /** Invoice has not been paid and is uncollectable by the system. You may void the invoice and attempt collection another way */
  | 'UNCOLLECTIBLE'
  /** Invoice has been voided */
  | 'VOIDED';

export type ZonosCarrierBillingInvoiceStatusTransition = {
  __typename?: 'CarrierBillingInvoiceStatusTransition';
  /** DateTime indicating when this status change occurred */
  createdAt: Scalars['DateTime'];
  /** ID of the `User` who changed this status */
  createdBy: Scalars['ID'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `CarrierBillingInvoice` at the associated createdAt */
  status: ZonosCarrierBillingInvoiceStatus;
};

/** Carrier Connection */
export type ZonosCarrierConnection = {
  __typename?: 'CarrierConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosCarrierEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** Specifies the components of the credential required to access a `Carrier`'s API. */
export type ZonosCarrierCredential = {
  __typename?: 'CarrierCredential';
  /** When this CarrierCredential was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierCredential. */
  createdBy: Scalars['ID'];
  /** Specifies whether the field is visible to a merchant. */
  display: ZonosVisibilityCode;
  /** A unique identifier for the CarrierCredential. */
  id: Scalars['ID'];
  /** The name of the CarrierCredential field as denoted by the `Carrier`. */
  label: Scalars['String'];
  /** The sequence that this credential will appear to the user. */
  sequence: Scalars['Int'];
  /** The credential type that is being updated for a `Carrier`. */
  type: ZonosCarrierCredentialTypeCode;
  /** The regex syntax that is required for the CarrierCredential field. */
  validationPattern: Maybe<Scalars['String']>;
};

export type ZonosCarrierCredentialTypeCode =
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
export type ZonosCarrierEdge = {
  __typename?: 'CarrierEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosCarrier>;
};

export type ZonosCarrierInvoiceAccountNumberMapping = ZonosNode & {
  __typename?: 'CarrierInvoiceAccountNumberMapping';
  /** The account number given by the carrier of this CarrierInvoiceAccountNumberMapping. */
  accountNumber: Maybe<Scalars['String']>;
  /** The carrier of this CarrierInvoiceAccountNumberMapping. */
  carrier: ZonosInvoiceCarrier;
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
export type ZonosCarrierInvoiceAccountNumberMappingConnection = {
  __typename?: 'CarrierInvoiceAccountNumberMappingConnection';
  /** Field edges */
  edges: Array<ZonosCarrierInvoiceAccountNumberMappingEdge>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosCarrierInvoiceAccountNumberMappingCreateInput = {
  /** The account number given by the carrier of the `CarrierInvoiceAccountNumberMapping` to be created. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier of the `CarrierInvoiceAccountNumberMapping` to be created. */
  carrier: ZonosInvoiceCarrier;
  /** The company name given by the carrier of this `CarrierInvoiceAccountNumberMapping` to be created */
  companyName?: InputMaybe<Scalars['String']>;
  /** The Zonos store ID of the `CarrierInvoiceAccountNumberMapping` to be created. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization: Scalars['ID'];
};

/** CarrierInvoiceAccountNumberMapping Edge */
export type ZonosCarrierInvoiceAccountNumberMappingEdge = {
  __typename?: 'CarrierInvoiceAccountNumberMappingEdge';
  /** Field cursor */
  cursor: Scalars['String'];
  /** Field node */
  node: ZonosCarrierInvoiceAccountNumberMapping;
};

export type ZonosCarrierInvoiceAccountNumberMappingFilter = {
  /** The account number related to `CarrierInvoiceAccountNumberMapping`s. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier related to `CarrierInvoiceAccountNumberMapping`s. */
  carrier?: InputMaybe<ZonosInvoiceCarrier>;
  /** The company name given by the carrier of this CarrierInvoiceAccountNumberMapping`s */
  companyName?: InputMaybe<Scalars['String']>;
  /** The legacy store ID related to `CarrierInvoiceAccountNumberMapping`s. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
};

export type ZonosCarrierInvoiceAccountNumberMappingUpdateInput = {
  /** The account number given by the carrier of the `CarrierInvoiceAccountNumberMapping` to update. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier of the `CarrierInvoiceAccountNumberMapping` to update. */
  carrier?: InputMaybe<ZonosInvoiceCarrier>;
  /** The company name given by the carrier of this `CarrierInvoiceAccountNumberMapping` to update */
  companyName?: InputMaybe<Scalars['String']>;
  /** The ID of the `CarrierInvoiceAccountNumberMapping` object to update. */
  id: Scalars['ID'];
  /** The Zonos store ID of the `CarrierInvoiceAccountNumberMapping` to update. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization?: InputMaybe<Scalars['ID']>;
};

export type ZonosCarrierInvoiceLineItemBillingCreateInput = {
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

/** Enum value representing the type of charge for a line item */
export type ZonosCarrierInvoiceLineItemChargeType =
  | 'DEFERMENT_FEE'
  | 'DISBURSEMENT_FEE'
  | 'DUTY_TAX_FEE'
  | 'IMPORT_DUTY'
  | 'IMPORT_TAX'
  | 'OTHER'
  | 'PROCESSING_FEE'
  | 'SHIPPING';

export type ZonosCarrierInvoiceLineItemReconcileInput = {
  /** ID of the `CarrierInvoiceLineItem` this `Reconciliation` object will be associated with */
  lineItemId: Scalars['ID'];
  /** Optional ID of the `Order` to reference when looking for existing billing records or transactions */
  orderId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCarrierInvoiceLocation = {
  __typename?: 'CarrierInvoiceLocation';
  /** The state or province full name */
  administrativeArea: Maybe<Scalars['String']>;
  /** Abbreviated code for the state or province */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** The two-letter ISO country code */
  countryCode: ZonosCountryCode;
  /** Latitude of this location */
  latitude: Maybe<Scalars['Decimal']>;
  /** Address line 1 */
  line1: Maybe<Scalars['String']>;
  /** Address line 2 */
  line2: Maybe<Scalars['String']>;
  /** Address line 3 */
  line3: Maybe<Scalars['String']>;
  /** Address line 4 */
  line4: Maybe<Scalars['String']>;
  /** Locality (city) of this location */
  locality: Maybe<Scalars['String']>;
  /** Longitude of the location */
  longitude: Maybe<Scalars['Decimal']>;
  /** Plus code associated with the location */
  plusCode: Maybe<Scalars['String']>;
  /** Postal code for the location */
  postalCode: Maybe<Scalars['String']>;
  /** The type of property; COMMERCIAL or RESIDENTIAL */
  propertyType: Maybe<ZonosPropertyType>;
};

export type ZonosCarrierInvoiceLocationCreateInput = {
  /** The state or province full name */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** Abbreviated code for the state or province */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The two-letter ISO country code */
  countryCode?: InputMaybe<ZonosCountryCode>;
  /** Latitude of the location */
  latitude?: InputMaybe<Scalars['Decimal']>;
  /** Address line 1 */
  line1?: InputMaybe<Scalars['String']>;
  /** Address line 2 */
  line2?: InputMaybe<Scalars['String']>;
  /** Address line 3 */
  line3?: InputMaybe<Scalars['String']>;
  /** Adress line 4 */
  line4?: InputMaybe<Scalars['String']>;
  /** Locality (city) of the location */
  locality?: InputMaybe<Scalars['String']>;
  /** Longitude of the location */
  longitude?: InputMaybe<Scalars['Decimal']>;
  /** Plus code associated with the location */
  plusCode?: InputMaybe<Scalars['String']>;
  /** Postal code for the location */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The type of property i.e. COMMERCIAL or RESIDENTIAL */
  propertyType?: InputMaybe<ZonosPropertyType>;
};

export type ZonosCarrierInvoiceParty = {
  __typename?: 'CarrierInvoiceParty';
  /** Timestamp of when this `CarrierInvoiceParty` was created */
  createdAt: Scalars['DateTime'];
  /** ID of the `User` who created this `CarrierInvoiceParty` */
  createdBy: Scalars['ID'];
  /** Location object related to this `CarrierInvoiceParty` */
  location: Maybe<ZonosCarrierInvoiceLocation>;
  /** Object with details of the person related to this `CarrierInvoiceParty` */
  person: Maybe<ZonosCarrierInvoicePerson>;
  /** The type of party i.e. ORIGIN, DESTINATION */
  type: Maybe<ZonosPartyType>;
  /** Timestamp of when this `CarrierInvoiceParty` was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** ID of the `User` who most recently updated this `CarrierInvoiceParty` */
  updatedBy: Scalars['ID'];
};

export type ZonosCarrierInvoicePartyCreateInput = {
  /** Input for location details */
  location?: InputMaybe<ZonosCarrierInvoiceLocationCreateInput>;
  /** Input for details of the person associated with the invoice */
  person?: InputMaybe<ZonosCarrierInvoicePersonCreateInput>;
  /** The type of party i.e. ORIGIN, DESTINATION */
  type: ZonosPartyType;
};

export type ZonosCarrierInvoicePerson = {
  __typename?: 'CarrierInvoicePerson';
  /** Name of the company this person is associated with */
  companyName: Maybe<Scalars['String']>;
  /** E-mail address for this person */
  email: Maybe<Scalars['String']>;
  /** First name of the person */
  firstName: Maybe<Scalars['String']>;
  /** Last name of the person */
  lastName: Maybe<Scalars['String']>;
  /** Phone number associated with this person */
  phone: Maybe<Scalars['String']>;
};

export type ZonosCarrierInvoicePersonCreateInput = {
  /** Name of the company this person is associated with */
  companyName?: InputMaybe<Scalars['String']>;
  /** E-mail address for this person */
  email?: InputMaybe<Scalars['String']>;
  /** First name of the person */
  firstName?: InputMaybe<Scalars['String']>;
  /** Last name of the person */
  lastName?: InputMaybe<Scalars['String']>;
  /** Phone number associated with this person */
  phone?: InputMaybe<Scalars['String']>;
};

/** A search for a specific `Carrier` or group of carriers. */
export type ZonosCarriersFilter = {
  /** Enum value to filter by supported or unsupported API carrier accounts */
  apiSupport?: InputMaybe<ZonosCarrierApiSupportType>;
  /** A unique identifier tied to a `Carrier`. */
  code?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The humanly memorable display name for the `Carrier`. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A `Cart` represents a collection of `Item`s. */
export type ZonosCart = {
  __typename?: 'Cart';
  /** A list of `CartAdjustment`s. */
  adjustments: Array<ZonosCartAdjustment>;
  /** When this `Cart` was created. */
  createdAt: Scalars['DateTime'];
  /** The user that created this `Cart`. */
  createdBy: Scalars['ID'];
  /** The `Cart`'s unique identifier. */
  id: Scalars['ID'];
  /** The `Items` to add to the cart. */
  items: Array<ZonosItem>;
  /** metadata for the cart */
  metadata: Array<ZonosCartMetadata>;
  /** The organization's id that the cart belongs to */
  organizationId: Scalars['ID'];
  /** When this `Cart` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** User who most recently updated this `Cart`. */
  updatedBy: Scalars['ID'];
};

/** A `CartAdjustment` represents a change/discount to the `Cart`'s amounts. */
export type ZonosCartAdjustment = {
  __typename?: 'CartAdjustment';
  /** The amount of the adjustment */
  amount: Scalars['Decimal'];
  /** Currency the `Adjustment` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** A description of the adjustment */
  description: Scalars['String'];
  /** the product id for an item specific adjustment */
  productId: Maybe<Scalars['String']>;
  /** The sku for an item specific adjustment */
  sku: Maybe<Scalars['String']>;
  /** The type of adjustment */
  type: ZonosCartAdjustmentType;
};

export type ZonosCartAdjustmentInput = {
  /** The amount of the adjustment */
  amount: Scalars['Decimal'];
  /** Currency the `Adjustment` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** A description of the adjustment */
  description?: InputMaybe<Scalars['String']>;
  /** the product id for an item specific adjustment */
  productId?: InputMaybe<Scalars['String']>;
  /** The sku for an item specific adjustment */
  sku?: InputMaybe<Scalars['String']>;
  /** The type of adjustment */
  type: ZonosCartAdjustmentType;
};

export type ZonosCartAdjustmentType =
  | 'CART_TOTAL'
  | 'ITEM'
  | 'SHIPPING';

/** An auto-generated type for paginating through multiple `Cart`s. */
export type ZonosCartConnection = {
  __typename?: 'CartConnection';
  /** A list of `edges`. */
  edges: Array<ZonosCartEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
  /** The total count of the carts in the connection. */
  totalCount: Scalars['Int'];
};

export type ZonosCartCreateInput = {
  /** A list of `CartAdjustment`s. */
  adjustments?: InputMaybe<Array<ZonosCartAdjustmentInput>>;
  /** The `Item` to add to the cart. */
  items: Array<ZonosItemInput>;
  /** metadata for the cart */
  metadata?: InputMaybe<Array<ZonosCartMetadataInput>>;
};

/** An auto-generated type used in pagination. */
export type ZonosCartEdge = {
  __typename?: 'CartEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The object located at this `Edge`. */
  node: ZonosCart;
};

/** Metadata for the cart */
export type ZonosCartMetadata = {
  __typename?: 'CartMetadata';
  /** The key for the metadata */
  key: Scalars['String'];
  /** The value for the metadata */
  value: Scalars['String'];
};

export type ZonosCartMetadataInput = {
  /** The key for the metadata */
  key: Scalars['String'];
  /** The value for the metadata */
  value: Scalars['String'];
};

export type ZonosCartUpdateInput = {
  /** A list of `CartAdjustment`s. */
  adjustments?: InputMaybe<Array<ZonosCartAdjustmentInput>>;
  /** The id of the cart to update */
  id: Scalars['ID'];
  /** The `Item` to add to the cart. */
  itemsAdd?: InputMaybe<Array<ZonosItemInput>>;
  /** The `Item` to remove from the cart. */
  itemsRemove?: InputMaybe<Array<Scalars['ID']>>;
  /** metadata for the cart */
  metadata?: InputMaybe<Array<ZonosCartMetadataInput>>;
};

export type ZonosCarton = {
  __typename?: 'Carton';
  /** The monetary amount insured for the `packingCarton` */
  amountInsured: Maybe<Scalars['Decimal']>;
  /** When this `Carton` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `Carton` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `packingCarton` */
  height: Scalars['Decimal'];
  /** Carton ID, prefixed with `carton_` */
  id: Scalars['ID'];
  /** The items associated with the `packingCarton` */
  items: Maybe<Array<ZonosCartonItem>>;
  /** The numeric length of the `packingCarton` */
  length: Scalars['Decimal'];
  /** Whether the `Carton` is in test or live mode */
  mode: ZonosMode;
  /** The name of the packaging option on the carton */
  name: Maybe<Scalars['String']>;
  /** The organization that owns the `Carton` */
  organization: Scalars['ID'];
  /**
   * The packaging option associated with the `packingCarton`
   * @deprecated source, name, and type are now on the `Carton`
   */
  packagingOption: Maybe<ZonosPackagingOption>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** Where the item is shipping from */
  shipFrom: Maybe<ZonosLocation>;
  /** The order's destination (customer address) */
  shipTo: Maybe<ZonosLocation>;
  /** The source of the carton size */
  source: Maybe<ZonosPackagingOptionSource>;
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
  /** When this `Carton` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `Carton`. */
  updatedBy: Scalars['ID'];
  /** The heaviness of the packingCarton, using a numeric value */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `packingCarton` */
  width: Scalars['Decimal'];
};

export type ZonosCartonCreateInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<ZonosCartonCreateItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: ZonosPackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosCartonCreateItemInput = {
  /** The country of origin for the `cartonItem` */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The HS code for the `cartonItem` */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The `Item` id that will be associated with the `CartonItem`. */
  item: Scalars['ID'];
  /** The name of the `cartonItem` for use on label */
  labelName?: InputMaybe<Scalars['String']>;
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
};

export type ZonosCartonCreateWorkflowInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type?: InputMaybe<ZonosPackagingType>;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

/** A `CartonItem` represents an item that has been assigned to be packed to a `Carton` */
export type ZonosCartonItem = {
  __typename?: 'CartonItem';
  /** The country of origin for the `cartonItem` */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** The type of dimensional unit associated with the `cartonItem` */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `cartonItem` */
  height: Scalars['Decimal'];
  /** The HS code for the `cartonItem` */
  hsCode: Maybe<Scalars['String']>;
  /** The original item associated with `cartonItem` */
  item: ZonosItem;
  /** The name of the `cartonItem` for use on label */
  labelName: Maybe<Scalars['String']>;
  /** The numeric height of the `cartonItem` */
  length: Scalars['Decimal'];
  /** How many cartonItems are included in a given `packingCarton` */
  quantity: Scalars['Int'];
  /** The type of packaging required to pack the cartonItem */
  type: ZonosPackagingType;
  /** The numeric weight of the `cartonItem` */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `cartonItem` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `cartonItem` */
  width: Scalars['Decimal'];
};

export type ZonosCartonizationSettings = {
  __typename?: 'CartonizationSettings';
  /** Timestamp of when the CartonizationSettings were created */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the CartonizationSettings */
  createdBy: Scalars['ID'];
  /** Indicates if dynamic packaging is enabled/disabled during cartonization */
  dynamicPackaging: ZonosDynamicPackagingStatus;
  /** Unique identifier for the CartonizationSettings */
  id: Scalars['ID'];
  /** ID of the `Organization` these CartonizationSettings belong to */
  organizationId: Scalars['ID'];
  /** Timestamp of when the CartonizationSettings were most recently updated */
  updatedAt: Scalars['DateTime'];
  /** ID of the user who most recently updated the CartonizationSettings */
  updatedBy: Scalars['ID'];
};

export type ZonosCartonizationSettingsUpdateInput = {
  /** Indicates if dynamic packaging is enabled/disabled during cartonization */
  dynamicPackaging: ZonosDynamicPackagingStatus;
};

export type ZonosCartonizeInput = {
  /** The id of the `root` that will own the carton */
  rootId: Scalars['ID'];
};

export type ZonosCartonsFilter = {
  /** Filter cartons by root id */
  rootId: Scalars['ID'];
};

/** A representation of a `CatalogItem`. */
export type ZonosCatalogItem = {
  __typename?: 'CatalogItem';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** Other `CatalogItem` attributes. */
  attributes: Maybe<Array<Maybe<ZonosItemAttribute>>>;
  /** The marketing name associated with an item. */
  brand: Maybe<Scalars['String']>;
  /** Catalog Items that are referenced by this CatalogItem */
  catalogItemReferences: Array<ZonosCatalogItemReference>;
  /** The `CatalogItem` location. */
  catalogItemUrl: Maybe<Scalars['String']>;
  /** The classificationId if a catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** Country configuration for the item. */
  configurations: Maybe<Array<Maybe<ZonosCatalogItemConfiguration>>>;
  /** Where a CatalogItem is manufactured. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** The description of the item for customs */
  customsDescription: Maybe<Scalars['String']>;
  /** The `CatalogItem` full description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<ZonosDutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode: Maybe<Scalars['String']>;
  /** hsCodes overrides, country or attribute specific for the item */
  hsCodes: Maybe<Array<Maybe<ZonosCatalogItemHsCode>>>;
  /** The ID of the `CatalogItem`. */
  id: Scalars['ID'];
  /** The url of an image. */
  imageUrl: Maybe<Scalars['String']>;
  /** Country inclusive pricing for the item */
  inclusivePrices: Maybe<Array<ZonosCatalogItemInclusivePrice>>;
  /** The item's key that is used to identify the catalog item. */
  itemKey: Scalars['String'];
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ZonosItemType>;
  /** The `CatalogItem` material composition. */
  material: Maybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements: Maybe<Array<Maybe<ZonosItemMeasurement>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata: Maybe<Array<Maybe<ZonosItemMetadata>>>;
  /** Whether this `Item` was created in live or test mode. */
  mode: ZonosMode;
  /** The primary name of a `CatalogItem`. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference: Maybe<ZonosPackingPreference>;
  /** Product ID of the `CatalogItem`. */
  productId: Maybe<Scalars['String']>;
  /** Optional administrative area where this item originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries: Maybe<Array<Maybe<ZonosCountryCode>>>;
  /** SKU of this `CatalogItem`. */
  sku: Maybe<Scalars['String']>;
  /** Source of `CatalogItem`. */
  source: ZonosCatalogItemSource;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogItemBulkJobConnection = {
  __typename?: 'CatalogItemBulkJobConnection';
  edges: Array<ZonosCatalogItemBulkJobEdge>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Scalars['Int'];
};

export type ZonosCatalogItemBulkJobEdge = {
  __typename?: 'CatalogItemBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosBulkJob>;
};

export type ZonosCatalogItemBulkJobsFilter = {
  /** Current status of the BulkJob */
  status?: InputMaybe<ZonosBulkJobStatus>;
};

export type ZonosCatalogItemConfiguration = {
  __typename?: 'CatalogItemConfiguration';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<ZonosDutyTaxFeeConfiguration>;
  /** The id of the configuration catalog item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogItemConfigurationInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosCatalogItemConfigurationUpdateInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** The id of the hsCode item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
};

export type ZonosCatalogItemConnection = {
  __typename?: 'CatalogItemConnection';
  edges: Maybe<Array<Maybe<ZonosCatalogItemEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosCatalogItemEdge = {
  __typename?: 'CatalogItemEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosCatalogItem>;
};

export type ZonosCatalogItemExportJobAction =
  | 'EMAIL'
  | 'NONE';

export type ZonosCatalogItemExportJobCreateInput = {
  /** The action that should be performed when the job is finished. */
  action: ZonosCatalogItemExportJobAction;
};

export type ZonosCatalogItemFilter = {
  /** Filter to catalogItems with `amount` set. */
  hasAmount?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the metadata key and value. */
  metadata?: InputMaybe<Array<ZonosKeyValueFilterInput>>;
  /** Fuzzy search by the `CatalogItem` name. */
  name?: InputMaybe<Scalars['String']>;
  /** Filter by the `CatalogItem` productId. @deprecated use `productIds` instead. */
  productId?: InputMaybe<Scalars['String']>;
  /** Filter by productIds. */
  productIds?: InputMaybe<Array<Scalars['String']>>;
  /** Filter by the `CatalogItem` shipToCountry. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Filter by the `CatalogItem` sku. @deprecated use `skus` instead. */
  sku?: InputMaybe<Scalars['String']>;
  /** Filter by skus. */
  skus?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosCatalogItemHsCode = {
  __typename?: 'CatalogItemHsCode';
  /** The classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The HsCode of the item. */
  hsCode: Maybe<Scalars['String']>;
  /** The source of the hsCode for this HsCode */
  hsCodeSource: Maybe<ZonosHsCodeSource>;
  /** The id of the hsCode catalog item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogItemHsCodeInput = {
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The source of the hsCode for this HsCode */
  hsCodeSource?: InputMaybe<ZonosHsCodeSource>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosCatalogItemHsCodeUpdateInput = {
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The source of the hsCode for this HsCode */
  hsCodeSource?: InputMaybe<ZonosHsCodeSource>;
  /** The id of the hsCode item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
};

export type ZonosCatalogItemInclusivePrice = {
  __typename?: 'CatalogItemInclusivePrice';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** The amount of inclusive price. */
  amountInclusive: Maybe<Scalars['Decimal']>;
  /** Calculated amount */
  calculated: ZonosInclusivePriceBreakdown;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** The exchange rate id used to convert the amounts for inclusive pricing. */
  exchangeRateId: Scalars['ID'];
  /** The id of the configuration catalog item */
  id: Scalars['ID'];
  /** the inclusive price history id we used to calculate (can be prefixed ip_country_history or ip_history) */
  inclusivePriceHistoryId: Scalars['ID'];
  /** the inclusive price setting id we used to calculate */
  inclusivePriceSettingId: Scalars['ID'];
  /** The itemKey of the catalog item */
  itemKey: Scalars['String'];
  /** the landed cost quote id used to create the inclusive price */
  landedCostQuoteId: Scalars['ID'];
  /** The organization id of the catalog item inclusive price */
  organizationId: Scalars['String'];
  /** the preferred amount */
  preferred: ZonosInclusivePriceBreakdown;
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
  /** Whether this price has been sync to a merchant catalog */
  status: ZonosCatalogItemInclusivePriceStatus;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogItemInclusivePriceStatus =
  | 'ACTIVE'
  | 'ARCHIVED'
  | 'FAILED'
  | 'IGNORED'
  | 'PENDING';

/** A representation of a `CatalogItem` to be created. */
export type ZonosCatalogItemInput = {
  /** The amount of a `CatalogItem`. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** The marketing name associated with an item. */
  brand?: InputMaybe<Scalars['String']>;
  /** Catalog items that are referenced by this CatalogItem */
  catalogItemReferences?: InputMaybe<Array<ZonosCatalogItemReferenceInput>>;
  /** The `CatalogItem` page url. */
  catalogItemUrl?: InputMaybe<Scalars['String']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** Where a `CatalogItem` is created. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The description of the item for customs */
  customsDescription?: InputMaybe<Scalars['String']>;
  /** The primary description of a `CatalogItem`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode?: InputMaybe<Scalars['String']>;
  /** When providing a country-specific HS code the ship-to country is needed. @deprecated use `CatalogItemHsCodeInput` instead */
  hsCodeShipToCountry?: InputMaybe<ZonosCountryCode>;
  /** The url of an image. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** The `CatalogItem` material composition. */
  material?: InputMaybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
  /** The name of a `CatalogItem`. */
  name?: InputMaybe<Scalars['String']>;
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference?: InputMaybe<ZonosPackingPreference>;
  /** Product ID of this `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `CatalogItem` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosCatalogItemReference = {
  __typename?: 'CatalogItemReference';
  /** The reference catalog item */
  catalogItem: ZonosCatalogItem;
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio: Maybe<Scalars['Decimal']>;
};

export type ZonosCatalogItemReferenceInput = {
  /** The reference catalog item */
  catalogItem: Scalars['ID'];
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosCatalogItemSource =
  | 'CLASSIFICATION'
  | 'LEGACY_MIGRATION'
  | 'USER_PROVIDED';

/** A representation of a `CatalogItem` to be updated. */
export type ZonosCatalogItemUpdateInput = {
  /** The amount of a `CatalogItem`. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Other item attributes. */
  attributes?: InputMaybe<Array<ZonosItemAttributeInput>>;
  /** The marketing name associated with an item. */
  brand?: InputMaybe<Scalars['String']>;
  /** Catalog items that are referenced by this CatalogItem */
  catalogItemReferences?: InputMaybe<Array<ZonosCatalogItemReferenceInput>>;
  /** The `CatalogItem` page url. */
  catalogItemUrl?: InputMaybe<Scalars['String']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** Where a `CatalogItem` is created. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The description of the item for customs */
  customsDescription?: InputMaybe<Scalars['String']>;
  /** The primary description of a `CatalogItem`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode?: InputMaybe<Scalars['String']>;
  /** When providing a country-specific HS code the ship-to country is needed. @deprecated use `CatalogItemHsCodeInput` instead */
  hsCodeShipToCountry?: InputMaybe<ZonosCountryCode>;
  /** The url of an image. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** The `CatalogItem` material composition. */
  material?: InputMaybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements?: InputMaybe<Array<ZonosItemMeasurementInput>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata?: InputMaybe<Array<ZonosItemMetadataInput>>;
  /** The name of a `CatalogItem`. */
  name?: InputMaybe<Scalars['String']>;
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference?: InputMaybe<ZonosPackingPreference>;
  /** Product ID of this `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `CatalogItem` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosCatalogItemUpdateMethod =
  /** ALL: Updates all fields of the catalog item based on the input provided. This method sets fields to null if null values are provided in the input, ensuring the catalog item exactly mirrors the input. */
  | 'ALL'
  /** NON_NULL: Updates existing catalog item fields with non-null values provided in the input. Fields in the input that are null are ignored, and corresponding existing fields are not modified. */
  | 'NON_NULL';

export type ZonosCatalogSetting = {
  __typename?: 'CatalogSetting';
  /** The date and time the `CatalogSetting` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogSetting`. */
  createdBy: Scalars['ID'];
  /** The id of the `CatalogSetting`. */
  id: Scalars['ID'];
  /**
   * determines whether inclusive price is active
   * @deprecated No longer supported
   */
  inclusivePriceStatus: Maybe<ZonosInclusivePriceStatus>;
  /** The unique key preference for finding a `CatalogItem`. */
  itemKeyPreference: ZonosItemKeyPreference;
  /** The default currency for an organization. */
  nativeCurrency: Maybe<ZonosCurrencyCode>;
  /** The organization id that the `CatalogSetting` belongs to. */
  organizationId: Scalars['ID'];
  /** The status of the `CatalogSetting`. */
  status: ZonosCatalogStatus;
  /** The date and time the `CatalogSetting` was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who last updated the `CatalogSetting`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogSettingCreateInput = {
  /** The inclusive price status. */
  inclusivePriceStatus?: InputMaybe<ZonosInclusivePriceStatus>;
  /** The unique key preference for finding a `CatalogItem`. */
  itemKeyPreference?: InputMaybe<ZonosItemKeyPreference>;
  /** The native currency for an organization. */
  nativeCurrency?: InputMaybe<ZonosCurrencyCode>;
  /** The Status of the `CatalogSetting`. */
  status: ZonosCatalogStatus;
};

export type ZonosCatalogSettingMigrateResponse = {
  __typename?: 'CatalogSettingMigrateResponse';
  catalogSetting: ZonosCatalogSetting;
  itemKeyPreferenceResult: ZonosItemKeyPreference;
};

export type ZonosCatalogSettingMigrationAction =
  | 'EVALUATE'
  | 'MIGRATE';

export type ZonosCatalogSettingMigrationInput = {
  /** The action to perform */
  action: ZonosCatalogSettingMigrationAction;
  organizationId: Scalars['ID'];
};

export type ZonosCatalogSettingUpdateInput = {
  /** The unique key preference for finding a `CatalogItem`. */
  itemKeyPreference?: InputMaybe<ZonosItemKeyPreference>;
  /** The native currency for an organization. */
  nativeCurrency?: InputMaybe<ZonosCurrencyCode>;
  /** The status of the `CatalogSetting`. */
  status?: InputMaybe<ZonosCatalogStatus>;
};

export type ZonosCatalogStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosClassification = {
  __typename?: 'Classification';
  /** Alternate HS codes that could apply to the item. */
  alternates: Array<ZonosClassificationAlternate>;
  /** The category hierarchy associated with an item for classification. */
  categories: Array<Scalars['String']>;
  /** Measures the confidence in accuracy of an HS code generated by Classify. 1.0=100%. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** Configuration used in creating the `Classification`. */
  configuration: ZonosClassificationConfiguration;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** When this `Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Classification. */
  createdBy: Scalars['ID'];
  /** The calculated description for customs. */
  customsDescription: Maybe<Scalars['String']>;
  /** This is the full description associated with an item. */
  description: Maybe<Scalars['String']>;
  /** The HsCode object. */
  hsCode: Maybe<ZonosHsCode>;
  /** This is the status of the customer or third party provided hsCode. */
  hsCodeProvidedValidation: Array<ZonosHsCodeProvidedValidation>;
  /** A unique identifier for the Classification. */
  id: Scalars['ID'];
  /** The location of an image related to an item. */
  imageUrl: Maybe<Scalars['String']>;
  /** The manual classification associated with the classification. */
  manualClassification: Maybe<ZonosManualClassification>;
  /** The material composition of an item for classification. */
  material: Maybe<Scalars['String']>;
  /** Whether this `Item` was created in live or test mode. */
  mode: ZonosMode;
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

export type ZonosClassificationAlternate = {
  __typename?: 'ClassificationAlternate';
  /** The probability mass associated with this subheading */
  probabilityMass: Scalars['Decimal'];
  /** The alternate subheading */
  subheadingAlternate: ZonosHsCode;
  /** The list of tariff alternates within that particular subheading */
  tariffAlternates: Array<ZonosHsCode>;
};

export type ZonosClassificationBulkExportJob = {
  __typename?: 'ClassificationBulkExportJob';
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /** The url where the csv has been uploaded to */
  exportUrl: Scalars['String'];
  /** Unique identifier of the job. */
  id: Scalars['ID'];
  /** ID of the associated organization. */
  organizationId: Scalars['ID'];
  /** Count of processed items in the job. */
  processedCount: Scalars['Int'];
  /** Current status of the job. */
  status: ZonosClassificationBulkExportJobStatus;
  /** Total count of items to process in the job. */
  totalCount: Scalars['Int'];
};

export type ZonosClassificationBulkExportJobConnection = {
  __typename?: 'ClassificationBulkExportJobConnection';
  edges: Array<ZonosClassificationBulkExportJobEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosClassificationBulkExportJobEdge = {
  __typename?: 'ClassificationBulkExportJobEdge';
  cursor: Scalars['String'];
  node: ZonosClassificationBulkExportJob;
};

export type ZonosClassificationBulkExportJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosClassificationBulkExportJobsFilter = {
  /** Current status of the Bulk Export Job */
  status?: InputMaybe<ZonosClassificationBulkExportJobStatus>;
};

export type ZonosClassificationBulkJob = {
  __typename?: 'ClassificationBulkJob';
  /** The classifications associated with a bulk job */
  classifications: Maybe<ZonosClassificationConnection>;
  /** The list of Country Codes where we will make classifications */
  classifyToCountries: Array<ZonosCountryCode>;
  /**
   * The confidence score for each classification to be returned
   * @deprecated No longer supported
   */
  confidenceScoreDisplayStatus: Maybe<ZonosConfidenceScoreDisplayStatus>;
  /** When this `Bulk Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Bulk Classification. */
  createdBy: Scalars['ID'];
  /** The number of rows that errored out during import */
  errorCount: Scalars['Int'];
  /** Unsuccessful rows and their error messages */
  errorMessages: Array<ZonosClassificationUploadError>;
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
  status: ZonosClassificationBulkJobStatus;
  /** The total number of rows in a CSV upload multiplied by the number of countries in the request */
  totalCount: Scalars['Int'];
  /** When this `Bulk Classification` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Bulk Classification. */
  updatedBy: Scalars['ID'];
  /** The number of rows that successfully were saved */
  uploadCount: Scalars['Int'];
};


export type ZonosClassificationBulkJobClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type ZonosClassificationBulkJobConnection = {
  __typename?: 'ClassificationBulkJobConnection';
  edges: Array<ZonosClassificationBulkJobEdge>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Scalars['Int'];
};

export type ZonosClassificationBulkJobEdge = {
  __typename?: 'ClassificationBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosClassificationBulkJob>;
};

export type ZonosClassificationBulkJobExportCreateInput = {
  confidenceScoreDisplayStatus?: InputMaybe<ZonosConfidenceScoreDisplayStatus>;
  id: Scalars['ID'];
};

export type ZonosClassificationBulkJobExportInput = {
  confidenceScoreDisplayStatus?: InputMaybe<ZonosConfidenceScoreDisplayStatus>;
};

export type ZonosClassificationBulkJobStatus =
  | 'CLASSIFIED'
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosClassificationBulkJobUpdateInput = {
  /** The ID of the BulkJob */
  id: Scalars['ID'];
  /** The list of Country Codes where we will make classifications */
  status: ZonosClassificationBulkJobStatus;
};

export type ZonosClassificationBulkJobUrlResponse = {
  __typename?: 'ClassificationBulkJobUrlResponse';
  bulkJob: ZonosClassificationBulkJob;
  url: Scalars['String'];
};

export type ZonosClassificationBulkJobsFilter = {
  /** Current status of the BulkJob */
  status: ZonosClassificationBulkJobStatus;
};

export type ZonosClassificationCalculateInput = {
  /** The category hierarchy associated with an item for classification. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Configurations relating to how the item should be classified. */
  configuration?: InputMaybe<ZonosClassificationConfigurationInput>;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
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

export type ZonosClassificationCalculateOrigin =
  /** Get all classifications this is the default. */
  | 'ALL'
  /** The classification was created by a batch request. */
  | 'BULK'
  /** The classification was created by an individual request. */
  | 'SINGLE';

export type ZonosClassificationCalculateSource =
  /** The bulk method of the classification of the external source. */
  | 'BULK'
  /** The requesting source of the classification is external. */
  | 'EXTERNAL'
  /** The requesting source of the classification is internal. */
  | 'INTERNAL'
  /** The requesting source of the classification is legacy. */
  | 'LEGACY'
  /** The single method of the classification of the external source. */
  | 'SINGLE';

export type ZonosClassificationConfiguration = {
  __typename?: 'ClassificationConfiguration';
  /** The group id that links a set of classifications */
  groupId: Maybe<Scalars['String']>;
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. */
  hsCodeProvided: Maybe<Scalars['String']>;
  /** How the hsCodeProvided ought to be used. */
  hsCodeProvidedTreatment: Maybe<ZonosHsCodeProvidedTreatment>;
  /** The unique key identifying the item to be classified. */
  itemKey: Maybe<Scalars['String']>;
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Maybe<Scalars['String']>;
  /** The product id provided at time of classification input */
  productId: Maybe<Scalars['String']>;
  /** The ship to countries for this `Classification`. */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** The stock keeping unit of the input item this can help us connect to a catalog item */
  sku: Maybe<Scalars['String']>;
};

export type ZonosClassificationConfigurationInput = {
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. Classifications are limited to its guidance. */
  hsCodeProvided?: InputMaybe<Scalars['String']>;
  /** How the hsCodeProvided ought to be used. */
  hsCodeProvidedTreatment?: InputMaybe<ZonosHsCodeProvidedTreatment>;
  /** Specification for which type of hsCode response is being requested */
  hsCodeType?: InputMaybe<ZonosHsCodeType>;
  /** The unique key identifying the item to be classified. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile?: InputMaybe<Scalars['String']>;
  /** A user provided Id to link the the classification output */
  productId?: InputMaybe<Scalars['String']>;
  /** The ship to countries for this `Classification`. */
  shipToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The stock keeping unit of the input item this can help us connect to a catalog item */
  sku?: InputMaybe<Scalars['String']>;
};

/** An auto-generated type for paginating through multiple `Classification`. */
export type ZonosClassificationConnection = {
  __typename?: 'ClassificationConnection';
  /** A list of `ClassificationEdge`. */
  edges: Array<ZonosClassificationEdge>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `Classification` items. */
  totalCount: Maybe<Scalars['Int']>;
};

/** An auto-generated type used in pagination. */
export type ZonosClassificationEdge = {
  __typename?: 'ClassificationEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `ClassificationEdge`. */
  node: Maybe<ZonosClassification>;
};

/** Filters for `Classification` resources. */
export type ZonosClassificationFilter = {
  /** Filter results by hsCode this property requires an exact match on the provided value. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Filter results by product id. */
  productId?: InputMaybe<Scalars['String']>;
  /** Filter results by CountryCode */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Filter by classification job origin */
  source?: InputMaybe<ZonosClassificationCalculateOrigin>;
};

export type ZonosClassificationJobLink = {
  __typename?: 'ClassificationJobLink';
  bulkJob: ZonosClassificationBulkJob;
  classification: ZonosClassification;
};

export type ZonosClassificationMarketProfileCalculateInput = {
  /** The organization id to create the market profile for. */
  organizationId: Scalars['String'];
  /** The url of the organizations website. */
  url: Scalars['String'];
};

export type ZonosClassificationMethod =
  /** The classification was created by a batch request. */
  | 'AUGMENTED'
  /** The classification was created by an individual request. */
  | 'CALCULATED';

export type ZonosClassificationRequestField =
  | 'CATEGORY'
  | 'DESCRIPTION'
  | 'NAME';

export type ZonosClassificationSetting = {
  __typename?: 'ClassificationSetting';
  /** The date and time when the setting was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the setting. */
  createdBy: Scalars['ID'];
  /** The unique identifier of the ManualClassificationSetting. */
  id: Scalars['ID'];
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Scalars['String'];
  /** The ID of the organization this setting applies to. */
  organizationId: Scalars['ID'];
  /** The date and time when the setting was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who last updated the setting. */
  updatedBy: Scalars['ID'];
};

export type ZonosClassificationSettingCreateInput = {
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Scalars['String'];
};

export type ZonosClassificationSettingUpdateInput = {
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Scalars['String'];
};

export type ZonosClassificationStageUploadInput = {
  /** The list of Country Codes where we will make classifications */
  classifyToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The confidence score for each classification to be returned */
  confidenceScoreDisplayStatus?: InputMaybe<ZonosConfidenceScoreDisplayStatus>;
  /** The fileName of the Bulk Job */
  fileName?: InputMaybe<Scalars['String']>;
};

export type ZonosClassificationUploadError = {
  __typename?: 'ClassificationUploadError';
  message: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['String']>;
  rowId: Maybe<Scalars['Int']>;
  sku: Maybe<Scalars['String']>;
};

export type ZonosClassifySetting = {
  __typename?: 'ClassifySetting';
  boostedProductCategories: Array<Maybe<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
  mode: ZonosMode;
  organization: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type ZonosClassifySupportedData = {
  __typename?: 'ClassifySupportedData';
  /** A list of countries supported by Classify. */
  countries: Array<ZonosCountryCode>;
};

export type ZonosClearanceType =
  | 'COMMERCIAL'
  | 'POSTAL';

/** Enum value describing the type of CollectInvoiceFee */
export type ZonosCollectFeeCalculationType =
  /** Indicates a 'flat' fee amount i.e. $1.00 per invoice */
  | 'FLAT'
  /** Indicates a 'percent' based fee amount i.e. 5% of invoice amount */
  | 'PERCENT';

export type ZonosCollectInvoice = {
  __typename?: 'CollectInvoice';
  /** The total amount due for this `CollectInvoice` */
  amountDue: Scalars['Decimal'];
  /** The currency the `CollectInvoice` amount is represented in */
  currencyCode: ZonosCurrencyCode;
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
  lineItems: Array<ZonosCollectInvoiceLineItem>;
  /** Whether the object is in live or test */
  mode: ZonosMode;
  /** The payor `Party` associated with this `CollectInvoice`. */
  party: ZonosParty;
  /** The status of the payment for this `CollectInvoice`. */
  status: ZonosInvoiceStatus;
  /** Timestamp for when the status changed. */
  statusTransitions: Array<ZonosCollectInvoiceStatusTransition>;
  /** The tracking number associated with this `CollectInvoice`. */
  trackingNumber: Scalars['String'];
};

export type ZonosCollectInvoiceCreateInput = {
  /** The currency that the amounts of this `CollectInvoice` are represented in. */
  currencyCode: ZonosCurrencyCode;
  /** The line items contained within this `CollectInvoice`. */
  lineItems: Array<ZonosCollectInvoiceLineItemCreateInput>;
  /** The destination PartyID for he payor of the invoice. */
  partyId: Scalars['String'];
  /** The status of payment for this `CollectInvoice`. */
  status: ZonosInvoiceStatus;
  /** The tracking number associated with this `CollectInvoice`. */
  trackingNumber: Scalars['String'];
};

export type ZonosCollectInvoiceCustomField = {
  __typename?: 'CollectInvoiceCustomField';
  /** The name of the custom field that will appear on the invoice */
  name: Scalars['String'];
  /** The value of the custom field that will appear on the invoice` */
  value: Scalars['String'];
};

export type ZonosCollectInvoiceCustomFieldInput = {
  /** The name of the custom field that will appear on the invoice */
  name: Scalars['String'];
  /** The value of the custom field that will appear on the invoice` */
  value: Scalars['String'];
};

export type ZonosCollectInvoiceError = {
  __typename?: 'CollectInvoiceError';
  errorType: ZonosErrorType;
  invoiceId: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  trackingNumber: Scalars['String'];
};

export type ZonosCollectInvoiceFee = {
  __typename?: 'CollectInvoiceFee';
  /** The amount to be used when applying this CollectInvoiceFee */
  amount: Scalars['Decimal'];
  /** The type of calculation to use when applying this CollectInvoiceFee */
  calculationType: ZonosCollectFeeCalculationType;
  /** The currency the amount of this fee will be represented in (or converted if necessary) */
  currencyCode: ZonosCurrencyCode;
  /** Description of the fee being applied, and will display on the invoice */
  description: Scalars['String'];
  /** DateTime representing when collection for this fee will discontinue. If null, the fee will remain active indefinitely. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** Unique ID associated with this CollectInvoiceFee */
  id: Scalars['ID'];
  /** DateTime representing when collection for this fee will begin on invoices. */
  startsAt: Scalars['DateTime'];
};

export type ZonosCollectInvoiceFeeConfiguration = {
  __typename?: 'CollectInvoiceFeeConfiguration';
  /** A custom fee specified by the account holder that will be added to invoices created by Collect */
  accountHolderFees: Array<ZonosCollectInvoiceFee>;
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
  zonosFees: Array<ZonosCollectInvoiceFee>;
};

export type ZonosCollectInvoiceFeeConfigurationInput = {
  /** Custom fee(s) specified by the account holder that will be added to invoices created by Collect */
  accountHolderFees?: InputMaybe<Array<ZonosCollectInvoiceFeeInput>>;
  /** Fee(s) from Zonos that will be added to invoices created by Collect */
  zonosFees: Array<ZonosCollectInvoiceFeeInput>;
};

export type ZonosCollectInvoiceFeeInput = {
  /** The amount to be used when applying this CollectInvoiceFee */
  amount: Scalars['Decimal'];
  /** The type of calculation to use when applying this CollectInvoiceFee */
  calculationType?: InputMaybe<ZonosCollectFeeCalculationType>;
  /** The currency the amount of this fee will be represented in (or converted if necessary) */
  currencyCode: ZonosCurrencyCode;
  /** Description of the fee being applied, and will display on the invoice */
  description: Scalars['String'];
  /** DateTime representing when collection for this fee will discontinue. If null, the fee will remain active indefinitely. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** Optional ID of the CollectInvoiceFee to update. If null, a new CollectInvoiceFee will be created */
  id?: InputMaybe<Scalars['ID']>;
  /** DateTime representing when collection for this fee will begin on invoices. If null, the current time will be set. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
};

export type ZonosCollectInvoiceFeeUpdateInput = {
  /** New DateTime representing when collection for this fee will discontinue. Cannot be updated if existing endsAt has passed. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** ID of the CollectInvoiceFee to update */
  id: Scalars['ID'];
};

export type ZonosCollectInvoiceLineItem = {
  __typename?: 'CollectInvoiceLineItem';
  /** The amount due for this `CollectInvoiceLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge description for the `CollectInvoiceLineItem`. */
  chargeType: Maybe<ZonosCollectInvoiceLineItemChargeType>;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** A description of the invoice line item. */
  description: Scalars['String'];
  /** Unique identifier for the `CollectInvoiceLineItem`. */
  id: Scalars['ID'];
  /** Any metadata associated with this `CollectInvoiceLineItem`. */
  metadata: Maybe<Array<ZonosMetadata>>;
};

/** Assigned type of `CollectInvoiceLineItemCharge` */
export type ZonosCollectInvoiceLineItemChargeType =
  | 'DUTY'
  | 'DUTY_TAX'
  | 'FEE'
  | 'OTHER'
  | 'TAX';

export type ZonosCollectInvoiceLineItemCreateInput = {
  /** The amount due for this `CollectInvoiceLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge description for the `CollectInvoiceLineItem`. */
  chargeType: ZonosCollectInvoiceLineItemChargeType;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: ZonosCurrencyCode;
  /** A description of the invoice line item. */
  description?: InputMaybe<Scalars['String']>;
  /** Any metadata associated with this `CollectInvoiceLineItem`. */
  metadata?: InputMaybe<Array<ZonosMetadataInput>>;
};

export type ZonosCollectInvoiceResult = ZonosCollectInvoice | ZonosCollectInvoiceError;

export type ZonosCollectInvoiceSettings = {
  __typename?: 'CollectInvoiceSettings';
  /** A hex color code used for secondary brand colors on invoices */
  accentColor: Maybe<Scalars['String']>;
  /** A hex color code used for primary brand colors on invoices */
  brandColor: Maybe<Scalars['String']>;
  /** A list of up to four `CustomField` to be displayed on invoices sent to customers */
  customFields: Array<ZonosCollectInvoiceCustomField>;
  /** A block of text to display in the footer of created invoices */
  defaultFooter: Maybe<Scalars['String']>;
  /** An enum value representing the language to use when generating invoice PDFs */
  defaultLanguage: Maybe<ZonosInvoiceLanguageCode>;
  /** A block of text to be used as the default memo for created invoices. Commonly used as a notes or thank you section */
  defaultMemo: Maybe<Scalars['String']>;
  /** The ID of the `Organization` these settings are associated with */
  organizationId: Scalars['ID'];
};

export type ZonosCollectInvoiceSettingsUpdateInput = {
  /** A hex color code used for secondary brand colors on invoices */
  accentColor?: InputMaybe<Scalars['String']>;
  /** A hex color code used for primary brand colors on invoices */
  brandColor?: InputMaybe<Scalars['String']>;
  /** A list of up to four `CustomField` to be displayed on invoices sent to customers */
  customFields?: InputMaybe<Array<ZonosCollectInvoiceCustomFieldInput>>;
  /** A block of text to display in the footer of created invoices */
  defaultFooter?: InputMaybe<Scalars['String']>;
  /** An enum value representing the language invoice PDFs will be generated in */
  defaultLanguage?: InputMaybe<ZonosInvoiceLanguageCode>;
  /** A block of text to be used as the default memo for created invoices. Commonly used as a notes or thank you section */
  defaultMemo?: InputMaybe<Scalars['String']>;
};

export type ZonosCollectInvoiceStatusTransition = {
  __typename?: 'CollectInvoiceStatusTransition';
  /** When this status transition was created. */
  createdAt: Scalars['DateTime'];
  /** Who updated the status */
  createdBy: Scalars['ID'];
  /** Any additional information required for this status transition. */
  note: Maybe<Scalars['String']>;
  /** The status of this status transition. */
  status: ZonosInvoiceStatus;
};

export type ZonosCollectInvoiceUpdateInput = {
  /** The ID of the `CollectInvoice` to update */
  id: Scalars['ID'];
  /** A note regarding the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The status of the payment for this invoice */
  status: ZonosInvoiceStatus;
};

/** `CollectSubmission` type representing a CollectSubmission notice to collect Duty & Taxes. */
export type ZonosCollectSubmission = {
  __typename?: 'CollectSubmission';
  /** The amount that the `CollectSubmission` was billed for. */
  amount: Scalars['Decimal'];
  /** The creation date of the `CollectSubmission`. */
  createdAt: Scalars['DateTime'];
  /** A unique identifier of who generated the `CollectSubmission` record. */
  createdBy: Scalars['ID'];
  /** The currency code that the `CollectSubmission` was billed in. */
  currencyCode: ZonosCurrencyCode;
  /** The url to the file used to create the `CollectSubmission`. */
  fileUrl: Maybe<Scalars['String']>;
  /** The `CollectSubmission`'s unique identifier. */
  id: Scalars['ID'];
  /** The internal invoice number of the `CollectSubmission`. */
  invoice: Maybe<ZonosCollectInvoice>;
  /** A list of `CollectSubmissionLineItem`s that belong to this CollectSubmission */
  lineItems: Array<ZonosCollectSubmissionLineItem>;
  /** The billing information of the `CollectSubmission`'s payor. */
  parties: Array<ZonosParty>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber: Maybe<Scalars['String']>;
  /** The `CollectSubmission`'s current status. */
  status: ZonosCollectSubmissionStatusCode;
  /** A record of a `CollectSubmission`'s status transition history. */
  statusTransitions: Array<ZonosCollectSubmissionStatusTransition>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber: Scalars['String'];
};

/** An auto-generated type for paginating through multiple `CollectSubmission`s. */
export type ZonosCollectSubmissionConnection = {
  __typename?: 'CollectSubmissionConnection';
  /** A list of `Edges` */
  edges: Array<ZonosCollectSubmissionEdge>;
  /** Pagination information about the connection */
  pageInfo: ZonosPageInfo;
  /** The total number of `CollectSubmission` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosCollectSubmissionCreateWorkflowInput = {
  /** The currency code that the `CollectSubmission` was billed in. */
  currencyCode: ZonosCurrencyCode;
  /** A list of line items for the `CollectInvoice` object associated with this `CollectSubmission`. */
  lineItems: Array<ZonosCollectSubmissionLineItemInput>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber: Scalars['String'];
};

/** An auto-generated type used in pagination. */
export type ZonosCollectSubmissionEdge = {
  __typename?: 'CollectSubmissionEdge';
  /** A string used to identify this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge` */
  node: Maybe<ZonosCollectSubmission>;
};

export type ZonosCollectSubmissionFileInfoInput = {
  contentType: ZonosContentType;
  fileName: Scalars['String'];
};

export type ZonosCollectSubmissionFilter = {
  /** The minimum and maximum value of the amounts to search for `CollectSubmission`s. */
  amountBetween?: InputMaybe<ZonosAmountRange>;
  /** Represents a range of dates, before, or after the creation date */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** The currency that the amount is represented in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The internal invoice number of the `CollectSubmission`. */
  invoice?: InputMaybe<Scalars['ID']>;
  /** The billing information for the `Party` responsible for paying the `CollectSubmission`. */
  party?: InputMaybe<Scalars['ID']>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** The `CollectSubmission`'s current status. */
  status?: InputMaybe<ZonosCollectSubmissionStatusCode>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosCollectSubmissionLineItem = {
  __typename?: 'CollectSubmissionLineItem';
  /** The amount due for this `CollectSubmissionLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge type for the `CollectInvoiceLineItem`. */
  chargeType: ZonosCollectSubmissionLineItemChargeType;
  /** Timestamp of when this CollectSubmissionLineItem was created */
  createdAt: Scalars['DateTime'];
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: ZonosCurrencyCode;
  /** A dynamic description of the line item charge. */
  description: Scalars['String'];
  /** A unique ID associated with this CollectSubmissionLineItem */
  id: Scalars['ID'];
};

export type ZonosCollectSubmissionLineItemChargeType =
  | 'DUTY'
  | 'DUTY_TAX'
  | 'FEE'
  | 'OTHER'
  | 'TAX';

export type ZonosCollectSubmissionLineItemInput = {
  /** The amount due for this `CollectSubmissionLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge type for the `CollectInvoiceLineItem`. */
  chargeType: ZonosCollectSubmissionLineItemChargeType;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: ZonosCurrencyCode;
  /** A dynamic description of the line item charge. */
  description?: InputMaybe<Scalars['String']>;
};

export type ZonosCollectSubmissionProcessInput = {
  /** The filename of the object to process */
  fileName: Scalars['String'];
  /** The prefix of the object(s) to process */
  prefix: Scalars['String'];
};

/** Input type used to re-try invoice creation for `CollectSubmission`s that already exist */
export type ZonosCollectSubmissionRetryInput = {
  id: Scalars['ID'];
};

export type ZonosCollectSubmissionStatusCode =
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
export type ZonosCollectSubmissionStatusTransition = {
  __typename?: 'CollectSubmissionStatusTransition';
  /** DateTime indicating when this status change occurred */
  createdAt: Scalars['DateTime'];
  /** The identifier of who triggered the status change. */
  createdBy: Scalars['ID'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `CollectSubmission` at the associated DateTime */
  status: ZonosCollectSubmissionStatusCode;
};

export type ZonosCollectSubmissionUpdateInput = {
  /** The ID of the `CollectSubmission` to update */
  id: Scalars['ID'];
  /** The `CollectSubmission`'s current status. */
  status?: InputMaybe<ZonosCollectSubmissionStatusCode>;
};

export type ZonosCollectSubmissionUploadUrl = {
  __typename?: 'CollectSubmissionUploadUrl';
  /** The name to give the `CollectSubmission` object */
  fileName: Scalars['String'];
  /** The shared prefix to give the `CollectSubmission` object key */
  prefix: Scalars['String'];
  /** The pre-signed upload URL used to store the `CollectSubmission` object */
  url: Scalars['String'];
};

export type ZonosCollectSubmissionUploadUrlInput = {
  fileInfo: Array<ZonosCollectSubmissionFileInfoInput>;
  uploadEventId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCollectUploadError = {
  __typename?: 'CollectUploadError';
  /** The line number of the uploaded file where the error occurred during processing */
  lineNumber: Maybe<Scalars['Int']>;
  /** A message describing the error that occurred */
  message: Scalars['String'];
  /** The tracking number of the `CollectSubmission` that was being processed when the error occurred */
  trackingNumber: Maybe<Scalars['String']>;
};

export type ZonosCollectUploadEvent = {
  __typename?: 'CollectUploadEvent';
  /** A list of `CollectSubmission` objects that are a result of processing the uploaded file */
  collectSubmissions: Array<ZonosCollectSubmission>;
  /** Creation date and time of this `CollectUploadEvent` */
  createdAt: Scalars['DateTime'];
  /** A list of errors that occurred while processing this `CollectUploadEvent` */
  errors: Array<ZonosCollectUploadError>;
  /** Unique ID associated with this `CollectUploadEvent` */
  id: Scalars['ID'];
  /** Enum value representing the status of this `CollectUploadEvent` */
  status: ZonosCollectUploadStatus;
  /** A `CollectSubmissionUploadUrl` associated with this `CollectUploadEvent` */
  url: ZonosCollectSubmissionUploadUrl;
};

export type ZonosCollectUploadEventConnection = {
  __typename?: 'CollectUploadEventConnection';
  /** A list of edges */
  edges: Array<ZonosCollectUploadEventEdge>;
  /** Pagination information about this connection */
  pageInfo: ZonosPageInfo;
  /** Total number of `CollectUploadEvent` objects available given the current filter */
  totalCount: Scalars['Int'];
};

export type ZonosCollectUploadEventEdge = {
  __typename?: 'CollectUploadEventEdge';
  /** A string cursor used to identify this object in the current connection */
  cursor: Maybe<Scalars['String']>;
  /** The `CollectUploadEvent` located at this edge */
  node: Maybe<ZonosCollectUploadEvent>;
};

export type ZonosCollectUploadEventFilter = {
  /** A `DateTimeRange` to filter `CollectUploadEvent` objects by their createdAt field */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** The name of the file used in the upload */
  fileName?: InputMaybe<Scalars['String']>;
  /** The folder prefix generated during URL creation */
  prefix?: InputMaybe<Scalars['String']>;
  /** The status of the `CollectUploadEvent` */
  status?: InputMaybe<ZonosCollectUploadStatus>;
};

export type ZonosCollectUploadStatus =
  | 'FAILED'
  | 'PENDING'
  | 'PROCESSING'
  | 'SUCCEEDED'
  | 'SUCCEEDED_WITH_ERRORS';

export type ZonosConfidenceScoreDisplayStatus =
  | 'DISABLED'
  | 'ENABLED';

/** A constraint is an object that is required when applying a `countryConstraint` to a `serviceLevel`. These constraints are typically based on price, quantity, volume, or weight. */
export type ZonosConstraint = {
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
  type: ZonosConstraintType;
  /** Represents the unit based on the type that applies to the Constraint. */
  unitOfMeasure: ZonosConstraintUnitCode;
  /** When this Constraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Constraint. */
  updatedBy: Scalars['ID'];
};

export type ZonosConstraintType =
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
export type ZonosConstraintUnitCode =
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

export type ZonosContentType =
  | 'CSV';

export type ZonosControlType =
  | 'EXPORT'
  | 'IMPORT';

export type ZonosCountryCode =
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

/** A `CountryConstraint` can be assigned to a `ServiceLevel` to limit countries that are supported by a given `ServiceLevel`. These can also be used to limit shipments supported by the `serviceLevel` and origin/destination based on value, weight, quantity, or volume of given items in a shipment. */
export type ZonosCountryConstraint = {
  __typename?: 'CountryConstraint';
  /** Represents a constraint around a specific attribute that applies to all countries. */
  constraints: Maybe<Array<Maybe<ZonosConstraint>>>;
  /** When this CountryConstraint was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CountryConstraint. */
  createdBy: Scalars['ID'];
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling: Maybe<ZonosBillingOptionCode>;
  /** A unique identifier for the CountryConstraint. */
  id: Scalars['ID'];
  /** List of incoterms supported by the CountryConstraint. */
  incoterm: Maybe<Array<ZonosIncotermCode>>;
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<ZonosCountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<ZonosCountryCode>;
  /** `TransitTime` breakdown that applies to the CountryConstraint. */
  transitTime: Maybe<ZonosTransitTime>;
  /** When this CountryConstraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CountryConstraint. */
  updatedBy: Scalars['ID'];
  /** The `WeightUnitCode` required by the CountryConstraint. */
  weightUnit: Maybe<ZonosWeightUnitCode>;
};

export type ZonosCountryFieldLabel = {
  __typename?: 'CountryFieldLabel';
  /** The country code */
  countryCode: ZonosCountryCode;
  /** The field labels for the location */
  location: ZonosCountryLocationFieldLabel;
  /** The field labels for the person */
  person: ZonosCountryPersonFieldLabel;
};

export type ZonosCountryFieldLabelCreateInput = {
  /** The country code */
  countryCode: ZonosCountryCode;
  /** The field labels for the location */
  location: ZonosCountryLocationFieldLabelCreateInput;
  /** The field labels for the person */
  person: ZonosCountryPersonFieldLabelCreateInput;
};

export type ZonosCountryLocationFieldLabel = {
  __typename?: 'CountryLocationFieldLabel';
  /** The administrative area field label */
  administrativeArea: ZonosFieldFormat;
  /** The administrative area code field label */
  administrativeAreaCode: ZonosFieldFormat;
  /** The country code field label */
  countryCode: ZonosFieldFormat;
  /** The first line field label */
  line1: ZonosFieldFormat;
  /** The second line field label */
  line2: ZonosFieldFormat;
  /** The third line field label */
  line3: ZonosFieldFormat;
  /** The fourth line field label */
  line4: ZonosFieldFormat;
  /** The locality field label */
  locality: ZonosFieldFormat;
  /** The postal code field label */
  postalCode: ZonosFieldFormat;
};

export type ZonosCountryLocationFieldLabelCreateInput = {
  /** The administrative area field label */
  administrativeArea: ZonosFieldFormatCreateInput;
  /** The administrative area code field label */
  administrativeAreaCode: ZonosFieldFormatCreateInput;
  /** The country code field label */
  countryCode: ZonosFieldFormatCreateInput;
  /** The first line field label */
  line1: ZonosFieldFormatCreateInput;
  /** The second line field label */
  line2: ZonosFieldFormatCreateInput;
  /** The third line field label */
  line3: ZonosFieldFormatCreateInput;
  /** The fourth line field label */
  line4: ZonosFieldFormatCreateInput;
  /** The locality field label */
  locality: ZonosFieldFormatCreateInput;
  /** The postal code field label */
  postalCode: ZonosFieldFormatCreateInput;
};

export type ZonosCountryPersonFieldLabel = {
  __typename?: 'CountryPersonFieldLabel';
  /** The company name field label */
  companyName: ZonosFieldFormat;
  /** The email field label */
  email: ZonosFieldFormat;
  /** The first name field label */
  firstName: ZonosFieldFormat;
  /** The last name field label */
  lastName: ZonosFieldFormat;
  /** The phone field label */
  phone: ZonosFieldFormat;
};

export type ZonosCountryPersonFieldLabelCreateInput = {
  /** The company name field label */
  companyName: ZonosFieldFormatCreateInput;
  /** The email field label */
  email: ZonosFieldFormatCreateInput;
  /** The first name field label */
  firstName: ZonosFieldFormatCreateInput;
  /** The last name field label */
  lastName: ZonosFieldFormatCreateInput;
  /** The phone field label */
  phone: ZonosFieldFormatCreateInput;
};

export type ZonosCreateCartonInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<ZonosCreateCartonItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: ZonosPackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosCreateCartonItemInput = {
  /** The item id that will be associated with the CartonItem */
  item: Scalars['ID'];
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
};

export type ZonosCreateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type ZonosCreateDashboardSettingsInput = {
  defaultDisplayCurrency: Scalars['String'];
  defaultDisplayLanguage: Scalars['String'];
  defaultDisplayLocal: Scalars['String'];
  defaultDisplayTimezone: Scalars['String'];
  defaultUnit: ZonosDashboardUnit;
  displayName: Scalars['String'];
  multiFactorAuth: ZonosMultiFactorAuthSetting;
};

export type ZonosCreateExchangeRateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  sourceCurrencyCode: ZonosCurrencyCode;
  targetCurrencyCode: ZonosCurrencyCode;
  type: ZonosExchangeRateType;
};

export type ZonosCreateLocationInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: ZonosCountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<ZonosPropertyType>;
};

export type ZonosCreatePartyInput = {
  location?: InputMaybe<ZonosCreateLocationInput>;
  person?: InputMaybe<ZonosCreatePersonInput>;
  referenceId?: InputMaybe<Scalars['ID']>;
  type: ZonosPartyType;
};

export type ZonosCreatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek: ZonosDay;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: ZonosEndOfDayBehavior;
  /** How often payouts occur, in days. */
  frequencyDays: Scalars['Int'];
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod: ZonosLcgBillingMethod;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Scalars['Int'];
  /** Specifies which system to use for billing order complete fees */
  orderCompleteBillingMethod: ZonosOrderCompleteBillingMethod;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod: ZonosOrderTransactionBillingMethod;
};

export type ZonosCreatePersonInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ZonosCreateShippingSettingsInput = {
  /** A rough estimate of item weight when calculating shipping, if no per-item weights are provided. */
  defaultWeightMultiplier: Scalars['Decimal'];
  /** ID of the `Preferred Packaging Option` for this `Organization`. */
  preferredPackagingOptionId?: InputMaybe<Scalars['ID']>;
};

/** Options for where the credentials are stored. */
export type ZonosCredentialProvider =
  /** General use retail/published rates. */
  | 'GENERAL'
  /** Organization-specific credentials. */
  | 'ORGANIZATION';

export type ZonosCurrencyCode =
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

export type ZonosCurrencyFormat = {
  __typename?: 'CurrencyFormat';
  /** The currency code that applies to the `currencyFormat` */
  currencyCode: ZonosCurrencyCode;
  /** The character used to separate the whole units from the fractional units */
  decimalDelimiter: Scalars['String'];
  /** The number of decimal places to display for the currency */
  scale: Scalars['Int'];
  /** The characters used as a symbol of the currency */
  symbol: Scalars['String'];
  /** The location of where the symbol is displayed */
  symbolLocation: Maybe<ZonosCurrencySymbolLocation>;
  /** The character used as the thousands separate */
  thousandsDelimiter: Scalars['String'];
};

export type ZonosCurrencySymbolLocation =
  /** display after the currency amount */
  | 'AFTER'
  /** display before the currency amount */
  | 'BEFORE';

export type ZonosCustomDeclarationInput = {
  /** The custom declaration text to be used when creating labels */
  customDeclarationStatement?: InputMaybe<Scalars['String']>;
  /** The Id of the custom declaration */
  id?: InputMaybe<Scalars['ID']>;
  /** The origin country code for which the declaration applies */
  shipFromCountry?: InputMaybe<Array<ZonosCountryCode>>;
  /** The destination country code(s) for which the declaration applies */
  shipToCountry?: InputMaybe<Array<ZonosCountryCode>>;
};

export type ZonosCustomDeclarationStatement = {
  __typename?: 'CustomDeclarationStatement';
  /** The custom declaration text to be used when creating labels */
  createdAt: Scalars['DateTime'];
  /** The user who created the custom declaration */
  createdBy: Scalars['ID'];
  /** The custom declaration text to be used when creating labels */
  customDeclarationStatement: Scalars['String'];
  /** The Id of the custom declaration */
  id: Scalars['ID'];
  /** The origin country code(s) for which the declaration applies */
  shipFromCountry: Array<ZonosCountryCode>;
  /** The distination country code(s) for which the declaration applies */
  shipToCountry: Array<ZonosCountryCode>;
  /** The timestamp when the custom declaration was updated */
  updatedAt: Scalars['DateTime'];
  /** The user who updated the custom declaration */
  updatedBy: Scalars['ID'];
};

export type ZonosCustomerInvoiceFile = {
  __typename?: 'CustomerInvoiceFile';
  fileUrl: Scalars['String'];
  invoiceReferenceId: Scalars['String'];
};

export type ZonosCustomerInvoiceFileCreateInput = {
  invoiceReferenceId: Scalars['String'];
  zonosUrl: Scalars['String'];
};

export type ZonosCustomsDescription = {
  __typename?: 'CustomsDescription';
  categories: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: Maybe<Scalars['String']>;
  customsDescription: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  hsCode: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Maybe<Scalars['String']>;
  itemId: Maybe<Scalars['String']>;
  material: Maybe<Scalars['String']>;
  mode: ZonosMode;
  name: Scalars['String'];
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Maybe<Scalars['String']>;
};

export type ZonosCustomsDescriptionCombineAndCreateInput = {
  /** The items on the shipment. */
  items: Array<ZonosCustomsDescriptionCombineAndCreateItemInput>;
  /** The ship to countries for this shipment. */
  shipToCountry?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsDescriptionCombineAndCreateItemInput = {
  /** The category hierarchy associated with an item for classification. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** This is the hsCode to be used on the commercial invoice. */
  hsCode: Scalars['String'];
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The items physical age */
  itemAge?: InputMaybe<Scalars['String']>;
  /** The id of the item. */
  itemId?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for classification. */
  material?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The product id provided at time of classification input */
  productId?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsDescriptionsCreateInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  hsCodeProvided?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  itemAge?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['String']>;
  material?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  productId?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsDocument = {
  __typename?: 'CustomsDocument';
  /** The date and time when the CustomsDocument was created */
  createdAt: Scalars['DateTime'];
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: ZonosCustomsDocumentType;
  /** External ID of the CustomsDocument. Only applicable if this document was uploaded to a carrier. */
  externalId: Maybe<Scalars['String']>;
  /** Name of the file */
  fileName: Maybe<Scalars['String']>;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: ZonosCustomsDocumentFileType;
  /** The URL of where the CustomsDocument file is stored */
  fileUrl: Scalars['String'];
  /** A unique ID associated with the CustomsDocument */
  id: Scalars['ID'];
};

export type ZonosCustomsDocumentCarrier =
  | 'DHL'
  | 'FEDEX'
  | 'UPS';

export type ZonosCustomsDocumentConnection = {
  __typename?: 'CustomsDocumentConnection';
  /** A list of `CustomsDocumentEdge` objects */
  edges: Array<ZonosCustomsDocumentEdge>;
  /** `PageInfo` about the connection */
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosCustomsDocumentCreateInput = {
  /** ID of the `CustomsSpec` the `CustomsDocument` will be associated with */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: ZonosCustomsDocumentType;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: ZonosCustomsDocumentFileType;
  /** URL to the location of the file */
  fileUrl: Scalars['String'];
  /** ID of the `Shipment` the `CustomsDocument` will be associated with */
  shipmentId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCustomsDocumentEdge = {
  __typename?: 'CustomsDocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The `CustomsDocument` at the end of the edge */
  node: ZonosCustomsDocument;
};

export type ZonosCustomsDocumentFileType =
  | 'JPG'
  | 'PDF'
  | 'PNG'
  | 'TXT';

export type ZonosCustomsDocumentFilter = {
  /** Filter by the createdAt within a `DateTimeRange` */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** Filter by the `CustomsSpec` ID */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** Filter by the type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType?: InputMaybe<ZonosCustomsDocumentType>;
};

export type ZonosCustomsDocumentGenerateInput = {
  /** The ID of the `CustomsSpec` that the CustomsDocument is associated with */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: ZonosCustomsDocumentType;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: ZonosCustomsDocumentFileType;
};

export type ZonosCustomsDocumentType =
  | 'CERTIFICATE_OF_ORIGIN'
  | 'COMMERCIAL_INVOICE'
  | 'OTHER';

/** A `CustomsItem` is the product of a `CustomsSpec` and includes improved item data */
export type ZonosCustomsItem = {
  __typename?: 'CustomsItem';
  /** The total price amount for this item */
  amount: Scalars['Decimal'];
  /** The country that this item originates from */
  countryOfOrigin: ZonosCountryCode;
  /** Where this origin information came from */
  countryOfOriginSource: ZonosItemValueSource;
  /** The description of this item for the purpose of clearance */
  description: Scalars['String'];
  /** The HS code that describes this item */
  hsCode: Scalars['String'];
  /** The source of the HS code classification */
  hsCodeSource: ZonosItemValueSource;
  /** The items associated with the `CustomsItem` */
  items: Array<ZonosItem>;
  /** The province that this item originates from */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** Where this province information came from */
  provinceOfOriginSource: Maybe<ZonosItemValueSource>;
  /** The total number of this item */
  quantity: Scalars['Decimal'];
};

export type ZonosCustomsMetadata = {
  __typename?: 'CustomsMetadata';
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value: Maybe<Scalars['String']>;
};

export type ZonosCustomsMetadataInput = {
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsSpec = ZonosNode & {
  __typename?: 'CustomsSpec';
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotals;
  /** Objects including other details about the `CustomsSpec` */
  attributes: Maybe<Array<ZonosCustomsSpecAttribute>>;
  /** The `Carton` objects that are tied to this `CustomsSpec` */
  cartons: Maybe<Array<ZonosCarton>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType: Maybe<ZonosClearanceType>;
  /** The timestamp of when this `CustomsSpec` was created */
  createdAt: Scalars['DateTime'];
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: ZonosCurrencyCode;
  /** A list of `CustomsDocument` objects that are associated with this `CustomsSpec` */
  customsDocuments: Array<ZonosCustomsDocument>;
  /** The `CustomsItem` objects that are a result of generating this `CustomsSpec` */
  customsItems: Maybe<Array<ZonosCustomsItem>>;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement: Maybe<Scalars['String']>;
  /** `CustomsSpec` ID prefixed with `customs_spec_` */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: ZonosIncotermCode;
  /** Optional metadata key/value pairs */
  metadata: Maybe<Array<ZonosCustomsMetadata>>;
  /** The `Mode` this `CustomsSpec` was created in */
  mode: ZonosMode;
  /** The `Organization` associated with the `CustomsSpec` */
  organization: Scalars['ID'];
  /** A list of parties associated with the `CustomsSpec` */
  parties: Maybe<Array<ZonosParty>>;
  /** The customs term for the end use of this export */
  reasonForExport: ZonosLandedCostEndUse;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel: Maybe<Scalars['String']>;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Maybe<Scalars['String']>;
  /** The timestamp of when this `CustomsSpec` was updated */
  updatedAt: Scalars['DateTime'];
};

/** Subtotal amounts of how the `Order` amount was calculated. */
export type ZonosCustomsSpecAmountSubtotals = {
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
export type ZonosCustomsSpecAmountSubtotalsInput = {
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

export type ZonosCustomsSpecAttribute = {
  __typename?: 'CustomsSpecAttribute';
  /** Where this `CustomsSpec` is originating from */
  source: ZonosCustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: ZonosCustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export type ZonosCustomsSpecAttributeInput = {
  /** Where this `CustomsSpec` is originating from */
  source: ZonosCustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: ZonosCustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export type ZonosCustomsSpecAttributeType =
  | 'ACCOUNT_NUMBER'
  | 'B13A'
  | 'ECCN'
  | 'EORI'
  | 'ITN'
  | 'ORDER_NUMBER'
  | 'PURCHASE_ORDER_NUMBER';

export type ZonosCustomsSpecConnection = {
  __typename?: 'CustomsSpecConnection';
  edges: Maybe<Array<Maybe<ZonosCustomsSpecEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosCustomsSpecCreateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<ZonosCustomsSpecAttributeInput>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType?: InputMaybe<ZonosClearanceType>;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: ZonosCurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: ZonosIncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<ZonosCustomsMetadataInput>>;
  /** The `Organization` associated with the `CustomsSpec` */
  organization?: InputMaybe<Scalars['ID']>;
  /** The customs term for the end use of this export */
  reasonForExport: ZonosLandedCostEndUse;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The `Shipment` ID that this `CustomsSpec` is attached to */
  shipmentId: Scalars['ID'];
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsSpecEdge = {
  __typename?: 'CustomsSpecEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosCustomsSpec>;
};

export type ZonosCustomsSpecFilter = {
  between?: InputMaybe<ZonosDateTimeRange>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsSpecGenerateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotalsInput;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: ZonosCurrencyCode;
  /** The `Shipment` ID that this `CustomsSpec` is attached to */
  shipmentId: Scalars['ID'];
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Scalars['String'];
};

export type ZonosCustomsSpecSourceType =
  | 'API_REQUEST'
  | 'CATALOG'
  | 'CLASSIFY'
  | 'ORGANIZATION_SETTING';

export type ZonosCustomsSpecUpdateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<ZonosCustomsSpecAttributeInput>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType?: InputMaybe<ZonosClearanceType>;
  /** The currency the totals for this `CustomsSpec` are represented in */
  currencyCode: ZonosCurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** `CustomsSpec` ID prefixed with `customs_spec_` */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: ZonosIncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<ZonosCustomsMetadataInput>>;
  /** The customs term for the end use of this export */
  reasonForExport: ZonosLandedCostEndUse;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosDashboardSettings = {
  __typename?: 'DashboardSettings';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  defaultDisplayCurrency: Maybe<Scalars['String']>;
  defaultDisplayLanguage: Maybe<Scalars['String']>;
  defaultDisplayLocal: Maybe<Scalars['String']>;
  defaultDisplayTimezone: Maybe<Scalars['String']>;
  defaultUnit: Maybe<ZonosDashboardUnit>;
  displayName: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode: ZonosMode;
  multiFactorAuth: Maybe<ZonosMultiFactorAuthSetting>;
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type ZonosDashboardUnit =
  | 'IMPERIAL'
  | 'METRIC';

export type ZonosDateTimeRange = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
};

export type ZonosDay =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

/** Represents a de minimis amount on a `LandedCost` quote, what it applies to, and how it was assessed */
export type ZonosDeMinimis = {
  __typename?: 'DeMinimis';
  /** Human readable formula indicating how this de minimis was calculated */
  formula: Scalars['String'];
  /** INCOTERM used to assess the de minimis value */
  method: ZonosIncotermCode;
  /** Additional note */
  note: Scalars['String'];
  /** Indicates whether the de mimimis is above or below the threshold */
  threshold: ZonosDeMinimisThreshold;
  /** What this de minimis applies to */
  type: ZonosDeMinimisType;
};

export type ZonosDeMinimisInput = {
  /** Human-readable formula indicating how this `DeMinimis` was calculated. */
  formula: Scalars['String'];
  /** INCOTERM used to assess the `DeMinimis` value. */
  method: ZonosIncotermCode;
  /** Human-readable description of the `DeMinimis`. */
  note: Scalars['String'];
  /** Whether the `DeMimimis` is above or below the threshold. */
  threshold: ZonosDeMinimisThreshold;
  /** What this `DeMinimis` applies to. */
  type: ZonosDeMinimisType;
};

export type ZonosDeMinimisThreshold =
  /** De minimis was above threshold */
  | 'ABOVE'
  /** De minimis was below threshold */
  | 'BELOW';

export type ZonosDeMinimisType =
  /** De minimis applies to duty */
  | 'DUTY'
  /** De minimis applies to fees */
  | 'FEE'
  /** De minimis applies to tax */
  | 'TAX';

export type ZonosDeleteJob = {
  __typename?: 'DeleteJob';
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /** Unique identifier of the delete job. */
  id: Scalars['String'];
  /** ID of the associated organization. */
  organization: Scalars['ID'];
  /** Count of catalog items that have been deleted. */
  processedCount: Scalars['Int'];
  /** Current status of the job. */
  status: ZonosDeleteJobStatus;
  /** Total count of catalog items that will be deleted. */
  totalCount: Scalars['Int'];
  /** Last update date of the job. */
  updatedAt: Scalars['DateTime'];
  /** ID of the user who last updated the job. */
  updatedBy: Scalars['ID'];
};

export type ZonosDeleteJobEdge = {
  __typename?: 'DeleteJobEdge';
  /** Cursor for pagination. */
  cursor: Scalars['String'];
  /** The delete job at the end of the edge. */
  node: ZonosDeleteJob;
};

export type ZonosDeleteJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosDeleteJobsConnection = {
  __typename?: 'DeleteJobsConnection';
  /** A list of delete job edges. */
  edges: Array<ZonosDeleteJobEdge>;
  /** Information for pagination. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total count of delete jobs. */
  totalCount: Scalars['Int'];
};

export type ZonosDeleteJobsFilter = {
  /** Filters delete jobs by their status. */
  status?: InputMaybe<ZonosDeleteJobStatus>;
};

export type ZonosDeliveryType =
  | 'CONSOLIDATED'
  | 'COURIER'
  | 'POSTAL';

export type ZonosDeniedParty = {
  __typename?: 'DeniedParty';
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** Known aliases for the denied party */
  aliases: Maybe<Array<Maybe<Scalars['String']>>>;
  companyName: Maybe<Scalars['String']>;
  countryCode: Maybe<ZonosCountryCode>;
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

/** The suggested action to take when a party match is found. */
export type ZonosDeniedPartyAction =
  /** No action is required as there were no matches found on the party screening. */
  | 'NO_MATCHES'
  /** The `PartyScreening`.`matches` should be reviewed to see the potential denied party matches. */
  | 'REVIEW';

/** DeniedParty Connection */
export type ZonosDeniedPartyConnection = {
  __typename?: 'DeniedPartyConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosDeniedPartyEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** DeniedParty Edge */
export type ZonosDeniedPartyEdge = {
  __typename?: 'DeniedPartyEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosDeniedParty>;
};

export type ZonosDeniedPartyLocationInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: ZonosCountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<ZonosPropertyType>;
};

export type ZonosDeniedPartyPersonInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ZonosDescriptionOverride = {
  __typename?: 'DescriptionOverride';
  /** A string value to be used to override item descriptions */
  overrideValue: Scalars['String'];
  /** Describes the scope of description overrides */
  scope: ZonosDescriptionOverrideScope;
};

export type ZonosDescriptionOverrideInput = {
  /** Describes the scope of description overrides */
  overrideValue: Scalars['String'];
  /** Describes the scope of description overrides */
  scope: ZonosDescriptionOverrideScope;
};

/** Enum value describing the scope of description overrides. */
export type ZonosDescriptionOverrideScope =
  /** Only override the item descriptions on customs documents */
  | 'CUSTOMS'
  /** Override the item descriptions on customs documents and labels */
  | 'CUSTOMS_AND_LABELS'
  /** Only override the item descriptions on labels */
  | 'LABELS';

export type ZonosDimensionalUnitCode =
  | 'CENTIMETER'
  | 'DECIMETER'
  | 'FOOT'
  | 'INCH'
  | 'METER'
  | 'MILLIMETER'
  | 'YARD';

export type ZonosDocumentFilingType =
  /** The documents associated with the label were sent electronically */
  | 'ELECTRONIC'
  /** The documents associated with the label are available to be downloaded */
  | 'HARD_COPY';

/** Represents a duty amount on a `LandedCost` quote */
export type ZonosDuty = {
  __typename?: 'Duty';
  /** `Duty` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Duty` amount is in. @deprecated use currencyCode instead. */
  currency: ZonosCurrencyCode;
  /** Currency the `Duty` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Human-readable description of this `Duty`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Duty` amounts */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Human readable formula indicating how this duty was calculated */
  formula: Scalars['String'];
  /** `Item` that this duty amount applies to */
  item: Maybe<ZonosItem>;
  /** Additional note for this `Duty`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this duty amount */
  payee: Maybe<ZonosParty>;
  /** `Party` responsible for rendering payment on this duty amount */
  payor: Maybe<ZonosParty>;
  /** Type of `Duty`. */
  type: ZonosLandedCostFeeType;
};

export type ZonosDutyInput = {
  /** `Duty` price amount. */
  amount: Scalars['Decimal'];
  /** Currency the `Duty` amount is in. '@deprecated' use currencyCode instead. */
  currency?: InputMaybe<ZonosCurrencyCode>;
  /** Currency the `Duty` amount is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable description of this `Duty`. */
  description?: InputMaybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Duty` amounts. */
  exchangeRate?: InputMaybe<Scalars['ID']>;
  /** Human-readable formula indicating how this `Duty` was calculated. */
  formula: Scalars['String'];
  /** `Item` this `Duty` amount applies to. */
  item?: InputMaybe<Scalars['ID']>;
  /** Additional note for this `Duty`. */
  note?: InputMaybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this `Duty` amount. */
  payee?: InputMaybe<Scalars['ID']>;
  /** `Party` responsible for rendering payment on this `Duty` amount. */
  payor?: InputMaybe<Scalars['ID']>;
  /** Type of `Duty`. */
  type?: InputMaybe<ZonosLandedCostFeeType>;
};

export type ZonosDutyRate = {
  __typename?: 'DutyRate';
  items: Array<ZonosDutyRateItem>;
  shipFromCountry: ZonosCountryCode;
  shipToCountry: ZonosCountryCode;
};

export type ZonosDutyRateInput = {
  items: Array<ZonosDutyRateItemInput>;
  shipFromCountry: ZonosCountryCode;
  shipToCountry: ZonosCountryCode;
  targetCurrency?: InputMaybe<ZonosCurrencyCode>;
};

export type ZonosDutyRateItem = {
  __typename?: 'DutyRateItem';
  amount: Scalars['Decimal'];
  formula: Maybe<Scalars['String']>;
  /** External id used for referencing */
  itemId: Maybe<Scalars['String']>;
  rate: Scalars['Decimal'];
};

export type ZonosDutyRateItemInput = {
  amount: Scalars['Decimal'];
  countryOfOrigin: ZonosCountryCode;
  currencyCode: ZonosCurrencyCode;
  hsCode: Scalars['String'];
  /** External id used for referencing */
  itemId?: InputMaybe<Scalars['String']>;
  shippingAmount: Scalars['Decimal'];
  weightAmount: Scalars['Decimal'];
  weightUnit: ZonosLandedCostWeightUnit;
};

export type ZonosDutyTaxFeeConfiguration =
  | 'EXCLUDE_ALL'
  | 'EXCLUDE_DUTY'
  | 'EXCLUDE_FEE'
  | 'EXCLUDE_TAX'
  | 'INCLUDE_ALL'
  | 'INCLUDE_TAX';

export type ZonosDynamicPackagingStatus =
  | 'DISABLED'
  | 'ENABLED';

/** Determines the base visual style for an AppearanceSettings object. */
export type ZonosElementsUiStyle =
  | 'ROUNDED'
  | 'SHARP';

/** Determines the base color theme for an AppearanceSettings object. */
export type ZonosElementsUiTheme =
  | 'DARK'
  | 'LIGHT'
  | 'SYSTEM';

export type ZonosEndOfDayBehavior =
  | 'EXEMPT'
  | 'REQUIRED';

export type ZonosErrorDetail =
  /** The deadline expired before the operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire. HTTP Mapping: 504 Gateway Timeout Error Type: UNAVAILABLE */
  | 'DEADLINE_EXCEEDED'
  /** The server detected that the client is exhibiting a behavior that might be generating excessive load. HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm Error Type: UNAVAILABLE */
  | 'ENHANCE_YOUR_CALM'
  /** The requested field is not found in the schema. This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a query is valid, but is unable to return a result (if, for example, a specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be returned by the server to signify that the requested field is not known to exist. This may be returned in lieu of failing the entire query. See also `PERMISSION_DENIED` for cases where the requested field is invalid only for the given user or class of users. HTTP Mapping: 404 Not Found Error Type: BAD_REQUEST */
  | 'FIELD_NOT_FOUND'
  /** The client specified an invalid argument. Note that this differs from `FAILED_PRECONDITION`. `INVALID_ARGUMENT` indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name). HTTP Mapping: 400 Bad Request Error Type: BAD_REQUEST */
  | 'INVALID_ARGUMENT'
  /** The provided cursor is not valid. The most common usage for this error is when a client is paginating through a list that uses stateful cursors. In that case, the provided cursor may be expired. HTTP Mapping: 404 Not Found Error Type: NOT_FOUND */
  | 'INVALID_CURSOR'
  /** Unable to perform operation because a required resource is missing. Example: Client is attempting to refresh a list, but the specified list is expired. This requires an action by the client to get a new list. If the user is simply trying GET a resource that is not found, use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE is to be used particularly when the user is performing an operation that requires a particular resource to exist. HTTP Mapping: 400 Bad Request or 500 Internal Server Error Error Type: FAILED_PRECONDITION */
  | 'MISSING_RESOURCE'
  /** Service Error. There is a problem with an upstream service. This may be returned if a gateway receives an unknown error from a service or if a service is unreachable. If a request times out which waiting on a response from a service, `DEADLINE_EXCEEDED` may be returned instead. If a service returns a more specific error Type, the specific error Type may be returned instead. HTTP Mapping: 502 Bad Gateway Error Type: UNAVAILABLE */
  | 'SERVICE_ERROR'
  /** Request failed due to network errors. HTTP Mapping: 503 Unavailable Error Type: UNAVAILABLE */
  | 'TCP_FAILURE'
  /** Request throttled based on server concurrency limits. HTTP Mapping: 503 Unavailable Error Type: UNAVAILABLE */
  | 'THROTTLED_CONCURRENCY'
  /** Request throttled based on server CPU limits HTTP Mapping: 503 Unavailable. Error Type: UNAVAILABLE */
  | 'THROTTLED_CPU'
  /** The operation is not implemented or is not currently supported/enabled. HTTP Mapping: 501 Not Implemented Error Type: BAD_REQUEST */
  | 'UNIMPLEMENTED'
  /** Unknown error. This error should only be returned when no other error detail applies. If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN. HTTP Mapping: 500 Internal Server Error */
  | 'UNKNOWN';

export type ZonosErrorType =
  /** Bad Request. There is a problem with the request. Retrying the same request is not likely to succeed. An example would be a query or argument that cannot be deserialized. HTTP Mapping: 400 Bad Request */
  | 'BAD_REQUEST'
  /** The operation was rejected because the system is not in a state required for the operation's execution. For example, the directory to be deleted is non-empty, an rmdir operation is applied to a non-directory, etc. Service implementers can use the following guidelines to decide between `FAILED_PRECONDITION` and `UNAVAILABLE`: - Use `UNAVAILABLE` if the client can retry just the failing call. - Use `FAILED_PRECONDITION` if the client should not retry until the system state has been explicitly fixed. E.g., if an "rmdir" fails because the directory is non-empty, `FAILED_PRECONDITION` should be returned since the client should not retry unless the files are deleted from the directory. HTTP Mapping: 400 Bad Request or 500 Internal Server Error */
  | 'FAILED_PRECONDITION'
  /** Internal error. An unexpected internal error was encountered. This means that some invariants expected by the underlying system have been broken. This error code is reserved for serious errors. HTTP Mapping: 500 Internal Server Error */
  | 'INTERNAL'
  /** The requested entity was not found. This could apply to a resource that has never existed (e.g. bad resource id), or a resource that no longer exists (e.g. cache expired.) Note to server developers: if a request is denied for an entire class of users, such as gradual feature rollout or undocumented allowlist, `NOT_FOUND` may be used. If a request is denied for some users within a class of users, such as user-based access control, `PERMISSION_DENIED` must be used. HTTP Mapping: 404 Not Found */
  | 'NOT_FOUND'
  /** The caller does not have permission to execute the specified operation. `PERMISSION_DENIED` must not be used for rejections caused by exhausting some resource or quota. `PERMISSION_DENIED` must not be used if the caller cannot be identified (use `UNAUTHENTICATED` instead for those errors). This error Type does not imply the request is valid or the requested entity exists or satisfies other pre-conditions. HTTP Mapping: 403 Forbidden */
  | 'PERMISSION_DENIED'
  /** The request does not have valid authentication credentials. This is intended to be returned only for routes that require authentication. HTTP Mapping: 401 Unauthorized */
  | 'UNAUTHENTICATED'
  /** Currently Unavailable. The service is currently unavailable. This is most likely a transient condition, which can be corrected by retrying with a backoff. HTTP Mapping: 503 Unavailable */
  | 'UNAVAILABLE'
  /** Unknown error. For example, this error may be returned when an error code received from another address space belongs to an error space that is not known in this address space. Also errors raised by APIs that do not return enough error information may be converted to this error. If a client sees an unknown errorType, it will be interpreted as UNKNOWN. Unknown errors MUST NOT trigger any special behavior. These MAY be treated by an implementation as being equivalent to INTERNAL. When possible, a more specific error should be provided. HTTP Mapping: 520 Unknown Error */
  | 'UNKNOWN';

export type ZonosExchangeRate = {
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
  mode: ZonosMode;
  rate: Scalars['Decimal'];
  sourceCurrencyCode: ZonosCurrencyCode;
  targetCurrencyCode: ZonosCurrencyCode;
  targetFormat: Maybe<ZonosCurrencyFormat>;
  type: ZonosExchangeRateType;
};

export type ZonosExchangeRateCreateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  sourceCurrencyCode: ZonosCurrencyCode;
  targetCurrencyCode: ZonosCurrencyCode;
  type: ZonosExchangeRateType;
};

export type ZonosExchangeRateLinkInput = {
  exchangeRateIds: Array<Scalars['ID']>;
  referenceId: Scalars['String'];
};

export type ZonosExchangeRateType =
  /** Zonos guaranteed rate */
  | 'GUARANTEED'
  /** Average rate for that day - NOT GUARANTEED */
  | 'MID_MARKET';

export type ZonosExportJob = {
  __typename?: 'ExportJob';
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /** Expiration date of the job. */
  expiresAt: Scalars['DateTime'];
  /** Unique identifier of the job. */
  id: Scalars['ID'];
  /** ID of the associated organization. */
  organization: Scalars['ID'];
  /** Count of processed items in the job. */
  processedCount: Scalars['Int'];
  /** Current status of the job. */
  status: ZonosExportJobStatus;
  /** Total count of items to process in the job. */
  totalCount: Scalars['Int'];
  /** Last update date of the job. */
  updatedAt: Scalars['DateTime'];
  /** ID of the user who last updated the job. */
  updatedBy: Scalars['ID'];
  /** URL to access the export job results. */
  url: Scalars['String'];
};

export type ZonosExportJobConnection = {
  __typename?: 'ExportJobConnection';
  /** A list of export job edges. */
  edges: Array<ZonosExportJobEdge>;
  /** Information for pagination. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total count of export jobs. */
  totalCount: Scalars['Int'];
};

export type ZonosExportJobEdge = {
  __typename?: 'ExportJobEdge';
  /** Cursor for pagination. */
  cursor: Maybe<Scalars['String']>;
  /** The export job at the end of the edge. */
  node: ZonosExportJob;
};

export type ZonosExportJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosExportJobsFilter = {
  /** Filters export jobs by their status. */
  status?: InputMaybe<ZonosExportJobStatus>;
};

export type ZonosFailedSyncJobRecord = {
  /** ID of the catalog item inclusive price that failed to sync. */
  catalogItemInclusivePriceId: Scalars['ID'];
  /** Error that caused the sync to fail. */
  errorMessage: Scalars['String'];
};

/** Represents a fee amount on a `LandedCost` quote */
export type ZonosFee = {
  __typename?: 'Fee';
  /** `Fee` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Fee` amount is in. @deprecated use currencyCode instead. */
  currency: ZonosCurrencyCode;
  /** Currency the `Fee` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Human readable description of this `Fee`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Fee` amounts */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Human readable formula indicating how this fee was calculated */
  formula: Scalars['String'];
  /** `Item` this `Fee` amount applies to */
  item: Maybe<ZonosItem>;
  /** Additional note for this `Fee`. */
  note: Maybe<Scalars['String']>;
  /** Party responsible for receving payment on this `Fee` */
  payee: Maybe<ZonosParty>;
  /** Party responsible for rendering payment on this `Fee` */
  payor: Maybe<ZonosParty>;
  /** Type of fee */
  type: ZonosLandedCostFeeType;
};

export type ZonosFeeInput = {
  /** `Fee` price amount. */
  amount: Scalars['Decimal'];
  /** Currency the `Fee` amount is in. @deprecated Use currencyCode instead. */
  currency?: InputMaybe<ZonosCurrencyCode>;
  /** Currency the `Fee` amount is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable description of this `Fee`. */
  description?: InputMaybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Fee` amounts. */
  exchangeRate?: InputMaybe<Scalars['ID']>;
  /** Human-readable formula indicating how this `Fee` was calculated. */
  formula: Scalars['String'];
  /** `Item` this `Fee` amount applies to. */
  item?: InputMaybe<Scalars['ID']>;
  /** Human-readable description of the `Fee`. */
  note?: InputMaybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this `Fee`. */
  payee?: InputMaybe<Scalars['ID']>;
  /** `Party` responsible for rendering payment on this `Fee`. */
  payor?: InputMaybe<Scalars['ID']>;
  /** Type of fee. @deprecated Use feeType instead */
  type?: InputMaybe<ZonosLandedCostFeeType>;
};

export type ZonosFeeRuleLocaleType =
  | 'DOMESTIC'
  | 'EITHER'
  | 'INTERNATIONAL';

export type ZonosFieldFormat = {
  __typename?: 'FieldFormat';
  /** The field label */
  label: Scalars['String'];
  /** The field pattern */
  pattern: Scalars['String'];
  /** The field status */
  status: ZonosFieldStatus;
};

export type ZonosFieldFormatCreateInput = {
  /** The field label */
  label: Scalars['String'];
  /** The field pattern */
  pattern: Scalars['String'];
  /** The field status */
  status: ZonosFieldStatus;
};

export type ZonosFieldStatus =
  | 'HIDDEN'
  | 'REQUIRED'
  | 'VISIBLE';

/** A `FulfillmentCenter` services a specified organization and is responsible for receiving/managing inventory and shipping orders to customers. A `fulfillmentCenter` may support specific carriers and will service specified `shippingZones`. */
export type ZonosFulfillmentCenter = {
  __typename?: 'FulfillmentCenter';
  /** When this FulfillmentCenter was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the FulfillmentCenter */
  createdBy: Scalars['ID'];
  /** A unique identifier for the FulfillmentCenter. */
  id: Scalars['ID'];
  /** Specifies whether the FulfillmentCenter is in live or test mode. */
  mode: ZonosMode;
  /** The humanly-memorable display name for the FulfillmentCenter. */
  name: Scalars['String'];
  /** The `Organization` associated with the FulfillmentCenter. */
  organization: Scalars['ID'];
  /** The `Party` to use for the FulfillmentCenter */
  party: ZonosParty;
  /** the type of fulfillmentCenter. you can have only ONE PRIMARY fulfillmentCenter */
  type: ZonosFulfillmentCenterType;
  /** When this FulfillmentCenter was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the FulfillmentCenter. */
  updatedBy: Scalars['ID'];
};

export type ZonosFulfillmentCenterFilter = {
  /** Type of FulfillmentCenter. You can have only one PRIMARY FulfillmentCenter. */
  type?: InputMaybe<ZonosFulfillmentCenterType>;
};

export type ZonosFulfillmentCenterType =
  | 'CONSOLIDATION_CENTER'
  | 'PRIMARY'
  | 'STANDARD';

export type ZonosFulfillmentItem = {
  __typename?: 'FulfillmentItem';
  /** `Item` from the original `Order`. */
  item: ZonosItem;
  /** The quantity of the `Item` that has not been fulfilled yet. */
  quantity: Scalars['Int'];
};

export type ZonosGeneralCarrierAccountFilter = {
  /** The `CarrierAccountApiUsage` for the account */
  apiUsage?: InputMaybe<ZonosCarrierAccountApiUsage>;
  /** The `code` associated with the `Carrier` of the account */
  carrierCode?: InputMaybe<Scalars['String']>;
};

/** Determines how Zonos Hello should handle currency conversion. */
export type ZonosHelloCurrencyBehavior =
  | 'DISABLED'
  | 'ENABLED';

/** Determines how Zonos Hello should handle live duty/tax estimations. */
export type ZonosHelloEstimateBehavior =
  | 'DISABLED'
  | 'ENABLED';

/** Determines where Hello should display on mobile */
export type ZonosHelloMobileLocation =
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'TOP_LEFT'
  | 'TOP_RIGHT';

/** Determines whether Hello should display peeks */
export type ZonosHelloPeekMessageBehavior =
  | 'DISABLED'
  | 'ENABLED';

/** Determines how Zonos Hello should handle restricted items. */
export type ZonosHelloRestrictionBehavior =
  | 'DISABLED'
  | 'RESTRICT_AND_BLOCK'
  | 'RESTRICT_AND_WARN';

/** Allows configuration of Zonos Hello. These settings can be overridden by the `zonos.init` function in the Zonos Elements SDK. */
export type ZonosHelloSettings = {
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
  currencyBehavior: ZonosHelloCurrencyBehavior;
  /** CSS selector for your site's currency/money fields */
  currencyElementSelector: Scalars['String'];
  /** How Hello should handle on-the-fly duty/tax estimation */
  dutyTaxEstimationBehavior: ZonosHelloEstimateBehavior;
  /** Optional list of URL patterns to not display Hello on. Regex matching supported */
  excludedUrlPatterns: Array<Scalars['String']>;
  /** Regex pattern matching the URL of your site's homepage */
  homepageUrlPattern: Maybe<Scalars['String']>;
  /** A unique identifier for the HelloSettings */
  id: Scalars['ID'];
  /** Where Hello should display on mobile */
  mobileLocation: ZonosHelloMobileLocation;
  /** Whether this HelloSettings is in live or test mode */
  mode: ZonosMode;
  /** The organization this HelloSettings belongs to */
  organization: Scalars['ID'];
  /** Whether or not Hello should display peek messages in its collapsed view */
  peekMessageBehavior: ZonosHelloPeekMessageBehavior;
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
  restrictionBehavior: ZonosHelloRestrictionBehavior;
  /**
   * Deprecated. see visibilityStatus.
   * @deprecated Use `visibilityStatus` field on `HelloSettings` instead
   */
  status: Maybe<ZonosHelloStatus>;
  /** Determines billing status for Hello */
  subscriptionStatus: ZonosHelloSubscriptionStatus;
  /** When the HelloSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the HelloSettings */
  updatedBy: Scalars['ID'];
  /** The current status of the HelloSettings */
  visibilityStatus: ZonosHelloVisibilityStatus;
};

/** Deprecated: see HelloVisibilityStatus. */
export type ZonosHelloStatus =
  | 'DISABLED'
  | 'ENABLED';

/** Determines billing status for Hello */
export type ZonosHelloSubscriptionStatus =
  | 'ACTIVE'
  | 'INACTIVE';

/** Determines whether is enabled or not */
export type ZonosHelloVisibilityStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosHsCode = {
  __typename?: 'HsCode';
  /** The numerically formatted HS code. */
  code: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  codeType: ZonosHsCodeType;
  /** The 2-digit ISO representation of a country. */
  countryCode: Maybe<ZonosCountryCode>;
  /** Combination of WCO and tariff schedule definitions. */
  description: ZonosHsCodeDescription;
  /** Date when an HS code becomes valid. */
  effectiveAt: Scalars['DateTime'];
  /** Date when an HS code is no longer valid. */
  expiresAt: Maybe<Scalars['DateTime']>;
  /** HS Code fragments */
  fragments: Array<ZonosHsCodeFragment>;
  /** The WCO version of the harmonized system, represented as a year. */
  majorVersion: ZonosWcoVersion;
  /** The country-specific version of the WCO core library. */
  minorVersion: Maybe<Scalars['String']>;
};

export type ZonosHsCodeDescription = {
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

export type ZonosHsCodeFragment = {
  __typename?: 'HsCodeFragment';
  /** The numerically formatted HS code fragment. */
  code: Scalars['String'];
  /** The description of the Hs code level. */
  description: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  type: ZonosHsCodeType;
};

export type ZonosHsCodeFragmentsFilter = {
  /** The country to filter by. */
  country?: InputMaybe<ZonosCountryCode>;
  /** The partial HS code to filter by. */
  partialCode: Scalars['String'];
};

export type ZonosHsCodeProvidedTreatment =
  /** Checks whether the hsCodeProvided exists and is in line with the description. If so, it will refine the classification, fixing all digits in hsCodeProvided. If not, it will classify from scratch */
  | 'CHECK_COHERENCE'
  /** Ignores the hsCodeProvided. */
  | 'IGNORE'
  /** Checks whether the hsCodeProvided exists. If so, it will refine the classification, fixing all digits in hsCodeProvided. If not, it will classify from scratch */
  | 'VALIDATE_ONLY';

export type ZonosHsCodeProvidedValidation = {
  __typename?: 'HsCodeProvidedValidation';
  /** The numerically formatted HS code fragment. */
  code: Scalars['String'];
  /** The description of the Hs code level. */
  result: ZonosHsCodeValidation;
  /** The HS Code level, i.e. heading. */
  type: ZonosHsCodeType;
};

export type ZonosHsCodeSource =
  /** HS code (all digits) sourced via the Zonos Classify API (includes Classify on the fly) */
  | 'CLASSIFY'
  /** Zonos fallback HS code, this is the default HS code used when no other HS code is available */
  | 'FALLBACK'
  /** HS code provided by the user or from a catalog was corrected or completed by Classify due to partial correctness or short length. */
  | 'HYBRID'
  /** HS code is user provided from Zonos Catalog, their own catalog, or directly by from the user & successfully validated by Classify */
  | 'USER_PROVIDED';

export type ZonosHsCodeType =
  | 'CHAPTER'
  | 'EXPORT'
  | 'HEADING'
  | 'SECTION'
  | 'SUBHEADING'
  | 'TARIFF';

export type ZonosHsCodeValidateInput = {
  /** The list of countries to validate the HS code against. */
  countries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** The HS code to validate. */
  hsCode: Scalars['String'];
};

export type ZonosHsCodeValidation =
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

export type ZonosHsCodeValidationSummary = {
  __typename?: 'HsCodeValidationSummary';
  /** The 2-digit ISO representation of a country. */
  country: ZonosCountryCode;
  /** The Hs code provided by the user. */
  hsCode: ZonosHsCode;
  /** The validation for the provided hsCode. */
  hsCodeProvidedValidation: Array<ZonosHsCodeProvidedValidation>;
};

export type ZonosInclusivePriceBreakdown = {
  __typename?: 'InclusivePriceBreakdown';
  duties: Scalars['Decimal'];
  fees: Scalars['Decimal'];
  taxes: Scalars['Decimal'];
  total: Scalars['Decimal'];
};

export type ZonosInclusivePriceCalculateJobFilter = {
  /** Current status of the BulkJob */
  status?: InputMaybe<ZonosInclusivePriceCalculateJobStatus>;
};

/** Current status of the inclusivePriceCalculateJob. */
export type ZonosInclusivePriceCalculateJobStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'COMPLETED_WITH_ERRORS'
  | 'FAILED'
  | 'IN_PROGRESS';

export type ZonosInclusivePriceConnection = {
  __typename?: 'InclusivePriceConnection';
  edges: Array<ZonosInclusivePriceEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosInclusivePriceCountryHistoryFilter = {
  countries?: InputMaybe<Array<ZonosCountryCode>>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ZonosInclusivePriceEdge = {
  __typename?: 'InclusivePriceEdge';
  cursor: Scalars['String'];
  node: ZonosCatalogItemInclusivePrice;
};

export type ZonosInclusivePriceFilter = {
  /** Filter inclusive prices by country. */
  country?: InputMaybe<ZonosCountryCode>;
  /** Filter inclusive prices by catalog item. */
  itemKeys?: InputMaybe<Array<Scalars['String']>>;
  /** Filter inclusive prices by status */
  status?: InputMaybe<ZonosCatalogItemInclusivePriceStatus>;
};

export type ZonosInclusivePriceHistoryFilter = {
  countries?: InputMaybe<Array<ZonosCountryCode>>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ZonosInclusivePriceHistoryUploadError = {
  __typename?: 'InclusivePriceHistoryUploadError';
  message: Scalars['String'];
};

export type ZonosInclusivePriceStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export type ZonosInclusivePriceSyncJob = {
  __typename?: 'InclusivePriceSyncJob';
  /** Country code for the sync job. */
  country: ZonosCountryCode;
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /**
   * List of catalog item ids that failed to sync. @deprecated
   * @deprecated Use failedItemKeys instead
   */
  failedCatalogItemIds: Maybe<Array<Scalars['ID']>>;
  /** Count of inclusive prices that have failed to sync. */
  failedCount: Scalars['Int'];
  /** List of catalog item inclusive prices that failed to sync. */
  failedItemKeys: Maybe<Array<Scalars['String']>>;
  /** Unique identifier of the InclusivePriceSyncJob. */
  id: Scalars['ID'];
  /** ID of the associated organization. */
  organizationId: Scalars['ID'];
  /** Current status of the job. */
  status: ZonosInclusivePriceSyncJobStatus;
  /** Count of inclusive prices that have been synced. */
  syncedCount: Scalars['Int'];
  /** Total count of inclusive prices that will be synced. */
  totalCount: Scalars['Int'];
  /** Last update date of the job. */
  updatedAt: Scalars['DateTime'];
  /** ID of the user who last updated the job. */
  updatedBy: Scalars['ID'];
};

export type ZonosInclusivePriceSyncJobDetail = {
  __typename?: 'InclusivePriceSyncJobDetail';
  /** Catalog item inclusive price associated with the catalog item and sync job */
  inclusivePrice: ZonosCatalogItemInclusivePrice;
  /** Item key of the catalog item associated with the catalog item inclusive price and sync job */
  itemKey: Scalars['String'];
};

export type ZonosInclusivePriceSyncJobDetailsConnection = {
  __typename?: 'InclusivePriceSyncJobDetailsConnection';
  /** A list of inclusive price sync job edges. */
  edges: Array<ZonosInclusivePriceSyncJobDetailsEdge>;
  /** Information for pagination. */
  pageInfo: ZonosPageInfo;
  /** Total count of price sync jobs. */
  totalCount: Scalars['Int'];
};

export type ZonosInclusivePriceSyncJobDetailsEdge = {
  __typename?: 'InclusivePriceSyncJobDetailsEdge';
  /** Cursor for pagination. */
  cursor: Scalars['String'];
  /** The price sync job at the end of the edge. */
  node: ZonosInclusivePriceSyncJobDetail;
};

export type ZonosInclusivePriceSyncJobDetailsFilter = {
  /** Filters inclusive price sync job details by inclusive price sync job id. */
  inclusivePriceSyncJobId: Scalars['ID'];
  /** Filters inclusive price sync job details by the provided item keys. */
  itemKeys?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosInclusivePriceSyncJobEdge = {
  __typename?: 'InclusivePriceSyncJobEdge';
  /** Cursor for pagination. */
  cursor: Scalars['String'];
  /** The price sync job at the end of the edge. */
  node: ZonosInclusivePriceSyncJob;
};

export type ZonosInclusivePriceSyncJobStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'COMPLETED_WITH_ERRORS'
  | 'FAILED'
  | 'INITIALIZED'
  | 'IN_PROGRESS';

export type ZonosInclusivePriceSyncJobUpdateInput = {
  /** Catalog Item Inclusive Price IDs that failed during the sync job. */
  failedSyncJobRecords?: InputMaybe<Array<ZonosFailedSyncJobRecord>>;
  /** ID of the inclusive price sync job to update. */
  id: Scalars['ID'];
  /** New status of the job. */
  status: ZonosInclusivePriceSyncJobStatus;
};

export type ZonosInclusivePriceSyncJobsActionableFilter = {
  /** The country of the actionable inclusive price sync job */
  countries?: InputMaybe<Array<ZonosCountryCode>>;
};

export type ZonosInclusivePriceSyncJobsConnection = {
  __typename?: 'InclusivePriceSyncJobsConnection';
  /** A list of inclusive price sync job edges. */
  edges: Array<ZonosInclusivePriceSyncJobEdge>;
  /** Information for pagination. */
  pageInfo: ZonosPageInfo;
  /** Total count of price sync jobs. */
  totalCount: Scalars['Int'];
};

export type ZonosInclusivePriceSyncJobsFilter = {
  /** Filters inclusive price sync jobs by the country. */
  countries?: InputMaybe<Array<ZonosCountryCode>>;
  /** Filters inclusive price sync jobs by their status. */
  status?: InputMaybe<ZonosInclusivePriceSyncJobStatus>;
};

/** International Commercial Terms */
export type ZonosIncotermCode =
  /** Cost, Insurance & Freight */
  | 'CIF'
  | 'CUSTOM'
  /** Delivered At Place */
  | 'DAP'
  /** Delivered Duty Paid */
  | 'DDP'
  /** Free On Board */
  | 'FOB';

export type ZonosInvoiceCarrier =
  | 'APC'
  | 'ASENDIA'
  | 'BOX_C'
  | 'BROAD_REACH'
  | 'DHL'
  | 'DHL_ECOM'
  | 'EPOST'
  | 'FEDEX'
  | 'LANDMARK'
  | 'UPS';

/** Enum value representing all of languages that are supported for creating invoice PDFs */
export type ZonosInvoiceLanguageCode =
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

export type ZonosInvoiceProcessor =
  | 'STRIPE';

export type ZonosInvoiceProcessorDetail = {
  __typename?: 'InvoiceProcessorDetail';
  /** The URL of the processor hosted Invoice */
  hostedInvoiceUrl: Scalars['String'];
  /** The external processor invoice identifier */
  id: Scalars['String'];
  /** The external processor invoice reference number */
  referenceNumber: Scalars['String'];
};

/** Statuses that an `Invoice` can go through */
export type ZonosInvoiceStatus =
  | 'RECEIVED'
  | 'RECONCILED'
  | 'VOIDED';

/** An `Item` represents the input for a shopping cart `Item` to be quoted for Landed Cost, Shipment Rating, etc. `Item` is not intended to be stored and used long-term for things like the catalog; it is purely a method for moving data around. */
export type ZonosItem = {
  __typename?: 'Item';
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** `Item` price all inclusive amount if inclusive amount is enabled. */
  amountInclusive: Maybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. */
  attributes: Maybe<Array<Maybe<ZonosItemAttribute>>>;
  /** Link to an existing `CatalogItem` that contains more info about this `Item`. */
  catalogItem: Maybe<ZonosCatalogItem>;
  /** Country where the `Item` originates. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** Indicates where the `CountryOfOrigin` was sourced from. */
  countryOfOriginSource: Maybe<ZonosItemValueSource>;
  /** When this `Item` was created. */
  createdAt: Scalars['DateTime'];
  /** The user that created this `Item`. */
  createdBy: Scalars['ID'];
  /** The currency this `Item` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The description of the `Item` for customs. */
  customsDescription: Maybe<Scalars['String']>;
  customsSpecs: Array<ZonosCustomsSpec>;
  /** Human-readable `Item` description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<ZonosDutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode: Maybe<Scalars['String']>;
  /** Indicates where the HS code for this `Item` was acquired. */
  hsCodeSource: Maybe<ZonosItemValueSource>;
  /** `Item` ID, prefixed with `item_`. */
  id: Scalars['ID'];
  /** Optional URL to an image that represents this `Item`. */
  imageUrl: Maybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ZonosItemType>;
  /** List of `Item` weights and dimensions. */
  measurements: Maybe<Array<Maybe<ZonosItemMeasurement>>>;
  /** User-accessible key/value metadata. */
  metadata: Maybe<Array<Maybe<ZonosItemMetadata>>>;
  /** Whether this `Item` was created in live or test mode. */
  mode: ZonosMode;
  /** Human readable item name. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** The packing options of the item */
  packingPreference: Maybe<ZonosPackingPreference>;
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
  restriction: Maybe<ZonosRestrictedItem>;
  /** SKU of this Item. */
  sku: Maybe<Scalars['String']>;
  /** When this `Item` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** User who most recently updated this `Item`. */
  updatedBy: Scalars['ID'];
};

export type ZonosItemAttribute = {
  __typename?: 'ItemAttribute';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ZonosItemAttributeInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Item Connection */
export type ZonosItemConnection = {
  __typename?: 'ItemConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosItemEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** Input to create a new Item. */
export type ZonosItemCreateWorkflowInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** HS code source for this `Item`. */
  hsCodeSource?: InputMaybe<ZonosItemValueSource>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
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
export type ZonosItemEdge = {
  __typename?: 'ItemEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosItem>;
};

/** Input to create a new Item. */
export type ZonosItemInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** HS code source for this `Item`. */
  hsCodeSource?: InputMaybe<ZonosItemValueSource>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
  /** Name of the `Item`. */
  name?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** References any object that is joined with the item */
  referenceId?: InputMaybe<Scalars['ID']>;
  /** depricated: ID of the root with which this Item is associated. */
  rootId?: InputMaybe<Scalars['ID']>;
  /** SKU of the `Item`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosItemKeyPreference =
  | 'NONE'
  | 'PRODUCT_ID'
  | 'SKU';

/** Represents `Item` weight, dimension, or other specific `Measurement`. */
export type ZonosItemMeasurement = {
  __typename?: 'ItemMeasurement';
  /** Where the `Measurement` is sourced from. */
  source: ZonosItemValueSource;
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ZonosItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ZonosItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export type ZonosItemMeasurementInput = {
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ZonosItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ZonosItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export type ZonosItemMeasurementType =
  | 'HEIGHT'
  | 'LENGTH'
  | 'WEIGHT'
  | 'WIDTH';

export type ZonosItemMetadata = {
  __typename?: 'ItemMetadata';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ZonosItemMetadataInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosItemRestriction = {
  __typename?: 'ItemRestriction';
  /** list of country codes controls apply to */
  applicableCountries: Maybe<Array<Maybe<ZonosCountryCode>>>;
  /** Human readable summary of the goods. */
  appliesTo: Maybe<Scalars['String']>;
  /** Countries that implemented the control */
  controlCountries: Maybe<Array<Maybe<ZonosCountryCode>>>;
  /** Human readable summary of the control. */
  controlSummary: Maybe<Scalars['String']>;
  /** Denotes if the control is EXPORT or IMPORT */
  controlType: ZonosControlType;
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
  type: ZonosItemRestrictionType;
};

/** Denotes if the user should continue to review the results further or not. Will be displayed as NO_MATCH or REVIEW. */
export type ZonosItemRestrictionAction =
  | 'NO_MATCH'
  | 'OBSERVATIONS_APPLY'
  | 'PROHIBITIONS_APPLY'
  | 'RESTRICTIONS_APPLY';

export type ZonosItemRestrictionApplyInput = {
  /** The items needing to be checked for restrictions. */
  items: Array<ZonosItemRestrictionInput>;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold?: InputMaybe<ZonosItemRestrictionType>;
  /** Origin country. */
  shipFromCountry: ZonosCountryCode;
  /** Destination country. */
  shipToCountry: ZonosCountryCode;
};

export type ZonosItemRestrictionInput = {
  /** Country in which the item originates. */
  countryOfOrigin: ZonosCountryCode;
  /** Human readable item description */
  description?: InputMaybe<Scalars['String']>;
  /** HS code for this item. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** External id for consumers mapping if desired */
  itemId?: InputMaybe<Scalars['String']>;
};

/** The resulting of applying the restriction to a list of items. */
export type ZonosItemRestrictionResult = {
  __typename?: 'ItemRestrictionResult';
  /** When this RestrictionResult was created */
  createdAt: Scalars['DateTime'];
  /** The user that created this RestrictionResult */
  createdBy: Scalars['ID'];
  /** RestrictionResult ID, prefixed with `restriction_result_` */
  id: Scalars['ID'];
  items: Array<Maybe<ZonosAppliedItemRestrictions>>;
  /** Denotes if this is LIVE or TEST */
  mode: ZonosMode;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold: ZonosItemRestrictionType;
  /** Origin country. */
  shipFromCountry: ZonosCountryCode;
  /** Destination country. */
  shipToCountry: ZonosCountryCode;
};

/** ItemRestrictionResult Connection */
export type ZonosItemRestrictionResultConnection = {
  __typename?: 'ItemRestrictionResultConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosItemRestrictionResultEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** ItemRestrictionResult Edge */
export type ZonosItemRestrictionResultEdge = {
  __typename?: 'ItemRestrictionResultEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosItemRestrictionResult>;
};

export type ZonosItemRestrictionType =
  | 'OBSERVATION'
  | 'PROHIBITION'
  | 'RESTRICTION';

export type ZonosItemType =
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

export type ZonosItemUnitOfMeasure =
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

export type ZonosItemUpdateInput = {
  /** `Item` price amount. @deprecated */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. @deprecated */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** Country where the `Item` originates. @deprecated */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency this `Item` price amount is in. @deprecated */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable `Item` description. @deprecated */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** HS code for this `Item`. @deprecated */
  hsCode?: InputMaybe<Scalars['String']>;
  /** HS code source for this `Item`. */
  hsCodeSource?: InputMaybe<ZonosItemValueSource>;
  /** ID of `Item` to update. */
  id?: InputMaybe<Scalars['ID']>;
  /** Optional URL to an image that represents this `Item`. @deprecated */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Data to update in `Item`. */
  item?: InputMaybe<ZonosItemInput>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** List of `Item` weights and dimensions. @deprecated */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** User-accessible key/value metadata. @deprecated */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
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

export type ZonosItemValueSource =
  | 'API_REQUEST'
  | 'CATALOG'
  | 'CLASSIFY'
  | 'FALLBACK'
  | 'HYBRID'
  | 'ORGANIZATION_SETTING'
  | 'USER_PROVIDED';

export type ZonosItemsUpdateInput = {
  items: Array<ZonosItemUpdateInput>;
};

export type ZonosKeyValueFilterInput = {
  /** The key of the attribute. */
  key?: InputMaybe<Scalars['String']>;
  /** The value of the attribute. */
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosLabel = {
  __typename?: 'Label';
  /** The carrier that the label was created for */
  carrier: ZonosCarrier;
  /** The date and time this Label was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Label */
  createdBy: Scalars['ID'];
  /** The way in which the documents were filed for the label */
  documentFiling: ZonosDocumentFilingType;
  /** A unique identifier for the label */
  id: Scalars['ID'];
  /** A list of amounts associated with the label */
  labelAmounts: Maybe<Array<ZonosLabelAmount>>;
  /** Indicates the desired type of file for the label */
  labelFileType: ZonosLabelFileType;
  /** Base64 encoded image of the label created by the carrier */
  labelImage: Scalars['String'];
  /** Indicates the desired size of the label */
  labelSize: ZonosLabelSize;
  /** The label request sent to the carrier */
  requestLog: Maybe<ZonosLabelRequestLog>;
  /** The carton that the label was created for */
  shipmentCarton: Scalars['ID'];
  /** The current status of the label */
  status: ZonosLabelStatusType;
  /** A list of changes to the status of the label */
  statusTransitions: Array<ZonosLabelStatusTransition>;
  /** The tracking number associated with the label */
  trackingNumber: Scalars['String'];
  /** The url where the label is stored */
  url: Scalars['String'];
};

export type ZonosLabelAmount = {
  __typename?: 'LabelAmount';
  /** The value of the amount */
  amount: Scalars['Decimal'];
  /** The type of amount */
  amountType: ZonosLabelAmountType;
  /** The currency that the amount is in */
  currencyCode: ZonosCurrencyCode;
};

export type ZonosLabelAmountType =
  /** Added fee to the cost of the label */
  | 'FEE'
  /** Insurance value on the label */
  | 'INSURANCE'
  /** The postage quote received from the Carrier */
  | 'QUOTE';

export type ZonosLabelConnection = {
  __typename?: 'LabelConnection';
  /** A list of `LabelEdge` objects */
  edges: Array<ZonosLabelEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `Label` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosLabelCreateInput = {
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** ITN Number to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<ZonosLabelSize>;
  /** The shipment for which the label is being generated */
  shipment: Scalars['ID'];
};

export type ZonosLabelCreateWorkflowInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<ZonosLabelSize>;
};

export type ZonosLabelEdge = {
  __typename?: 'LabelEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `Label` object located at this edge */
  node: Maybe<ZonosLabel>;
};

export type ZonosLabelFileType =
  /** Label will be saved in a PDF format */
  | 'PDF'
  /** Label will be saved in a ZPL format */
  | 'ZPL';

export type ZonosLabelFilter = {
  /** The carrier for which the label was generated */
  carrier?: InputMaybe<Scalars['ID']>;
  /** A date range to filter Label objects by their created date */
  createdDate?: InputMaybe<ZonosDateTimeRange>;
  /** A status to filter Label objects by their current status */
  status?: InputMaybe<ZonosLabelStatusType>;
};

/** LabelRequestLog represents the carrier request and response used to retrieve a `Label` */
export type ZonosLabelRequestLog = {
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

export type ZonosLabelRequestLogConnection = {
  __typename?: 'LabelRequestLogConnection';
  /** A list of `LabelRequestLogEdge` objects */
  edges: Array<ZonosLabelRequestLogEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `LabelRequestLog` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosLabelRequestLogEdge = {
  __typename?: 'LabelRequestLogEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `LabelRequestLog` object located at this edge */
  node: Maybe<ZonosLabelRequestLog>;
};

export type ZonosLabelRequestLogFilter = {
  /** An id of the `Label` associated with the LabelRequestLog */
  labelId?: InputMaybe<Scalars['ID']>;
  /** An id of the `Shipment` associated with the LabelRequestLog */
  shipmentId?: InputMaybe<Scalars['ID']>;
};

export type ZonosLabelSettings = {
  __typename?: 'LabelSettings';
  /** Timestamp of when the LabelSettings were created */
  createdAt: Scalars['DateTime'];
  /** The user who created the LabelSettings */
  createdBy: Scalars['ID'];
  /** A customDeclaration object to be used when creating labels */
  customDeclarationStatements: Array<ZonosCustomDeclarationStatement>;
  /** The default alternate return address to be used when creating labels */
  declaredValue: Scalars['Decimal'];
  /** `DescriptionOverride` gives the option to override descriptions displayed on labels, customs documents, or both */
  descriptionOverride: Maybe<ZonosDescriptionOverride>;
  /** Unique identifier for this `LabelSettings` object */
  id: Scalars['ID'];
  /** Indicates the default file type used when creating labels */
  labelFileType: Maybe<ZonosLabelFileType>;
  /** Indicates the default size to use when creating labels */
  labelSize: Maybe<ZonosLabelSize>;
  /** The ID of the `Organization` these LabelSettings belong to */
  organization: Scalars['ID'];
  /** Default `ServiceLevel` to use when creating labels. */
  serviceLevel: Maybe<ZonosServiceLevel>;
  /** Indicates who will be responsible for paying the shipping charges */
  shippingPayment: Maybe<ZonosShippingPaymentType>;
  /** When the LabelSettings were most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the LabelSettings */
  updatedBy: Scalars['ID'];
};

export type ZonosLabelSettingsUpdateInput = {
  /** A customDeclaration object to be used when creating labels */
  customDeclarationStatements?: InputMaybe<Array<ZonosCustomDeclarationInput>>;
  /** The amount of the declared value to be used when creating labels */
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  /** `DescriptionOverride` gives the option to override descriptions displayed on labels, customs documents, or both */
  descriptionOverride?: InputMaybe<ZonosDescriptionOverrideInput>;
  /** Indicates the default file type used when creating labels */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the default size to use when creating labels */
  labelSize?: InputMaybe<ZonosLabelSize>;
  /** ID of the `ServiceLevel` to use as the default */
  serviceLevel?: InputMaybe<Scalars['ID']>;
  /** Indicates who will be responsible for paying the shipping charges */
  shippingPayment?: InputMaybe<ZonosShippingPaymentType>;
};

export type ZonosLabelSize =
  /** 8x11 label size */
  | 'EIGHT_BY_ELEVEN'
  /** 4x8 label size */
  | 'FOUR_BY_EIGHT'
  /** 4x6 label size */
  | 'FOUR_BY_SIX';

export type ZonosLabelSpecInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<ZonosLabelSize>;
};

export type ZonosLabelStatusTransition = {
  __typename?: 'LabelStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Label` at the associated DateTime */
  status: ZonosLabelStatusType;
};

export type ZonosLabelStatusType =
  | 'CREATED'
  | 'VOIDED';

export type ZonosLabelVoidInput = {
  /** Label to be voided */
  id: Scalars['ID'];
  /** Optional note about reason to be voided */
  note?: InputMaybe<Scalars['String']>;
};

/** A `LandedCost` represents the result of a landed cost calculation. `LandedCost` quotes belong to a `Root` resource and additionally include a `ShipmentRating` resource with additional details about the shipping costs */
export type ZonosLandedCost = {
  __typename?: 'LandedCost';
  /** Amount totals for duties, taxes, fees */
  amountSubtotals: Maybe<ZonosLandedCostAmountSubtotals>;
  /** When this `LandedCost` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `LandedCost` */
  createdBy: Scalars['ID'];
  /** Currency code of the LandedCost. */
  currencyCode: ZonosCurrencyCode;
  /** A list of de minimis thresholds and what values they apply to */
  deMinimis: Array<ZonosDeMinimis>;
  /** A list of duties assessed for this `LandedCost` */
  duties: Array<ZonosDuty>;
  /** End use for items included in this quote */
  endUse: ZonosLandedCostEndUse;
  /** A list of fees assessed for this `LandedCost` */
  fees: Array<ZonosFee>;
  /** `LandedCost` resource ID, prefixed with `landed_cost_` */
  id: Scalars['ID'];
  /** Indicates if the landed cost is covered by the Zonos Landed Cost Guarantee */
  landedCostGuaranteeCode: ZonosLandedCostGuaranteeCode;
  /** INCOTERM used to perform calculations */
  method: ZonosIncotermCode;
  /** Indicates whether this `LandedCost` was created in live or test mode */
  mode: ZonosMode;
  /** `Organization` that this `LandedCost` belongs to */
  organization: Scalars['ID'];
  /** The taxes that should be remitted. */
  remittance: Array<ZonosLandedCostRemittance>;
  /** `Root` resource that this `LandedCost` belongs to */
  root: Maybe<ZonosRoot>;
  /** `Root` resource ID that this `LandedCost` belongs to */
  rootId: Scalars['ID'];
  /** `ShipmentRating` that contains shipping cost and other related details for this `LandedCost` */
  shipmentRating: ZonosShipmentRating;
  /** Indicates what method Zonos used to calculate the tariff rates for this `LandedCost` */
  tariffRate: ZonosLandedCostTariffRate;
  taxId: Maybe<ZonosTaxId>;
  /** A list of taxes assessed for this `LandedCost` */
  taxes: Array<ZonosTax>;
  /** When this `LandedCost` was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `LandedCost` */
  updatedBy: Scalars['ID'];
};

/** The subtotals that make up a landed cost. */
export type ZonosLandedCostAmountSubtotals = {
  __typename?: 'LandedCostAmountSubtotals';
  /** Total amount of all discounts. */
  discounts: Maybe<Scalars['Decimal']>;
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

export type ZonosLandedCostBillingPartyType =
  | 'CUSTOMER'
  | 'MERCHANT'
  | 'THIRD_PARTY'
  | 'ZONOS';

export type ZonosLandedCostBillingRuleFilter = {
  /** Return `LandedCostBillingRule` resources by the associated organization Id. */
  organizationId?: InputMaybe<Scalars['String']>;
};

export type ZonosLandedCostCalculationMethod =
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

export type ZonosLandedCostConnection = {
  __typename?: 'LandedCostConnection';
  edges: Maybe<Array<Maybe<ZonosLandedCostEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosLandedCostCreateInput = {
  /** Currency to use for the landed cost subtotals. */
  currencyCode: ZonosCurrencyCode;
  /** A list of `DeMinimis` thresholds and what values they apply to. */
  deMinimis?: InputMaybe<Array<ZonosDeMinimisInput>>;
  /** A list of duties assessed for this `LandedCost`. */
  duties?: InputMaybe<Array<ZonosDutyInput>>;
  /** End use for `Items` included in this quote. */
  endUse: ZonosLandedCostEndUse;
  /** A list of `Fee`s assessed for this `LandedCost`. */
  fees?: InputMaybe<Array<ZonosFeeInput>>;
  /** quote type */
  quoteType?: InputMaybe<ZonosLandedCostQuoteType>;
  /** `Root` resource ID that this `LandedCost` belongs to. */
  rootId: Scalars['ID'];
  /** `ShipmentRating` that contains shipping cost and other related details for this `LandedCost`. */
  shipmentRating: Scalars['ID'];
  /** Indicates what method Zonos should use to calculate the `TariffRate`s for this quote. */
  tariffRate: ZonosLandedCostTariffRate;
  /** A list of taxes assessed for this `LandedCost`. */
  taxes?: InputMaybe<Array<ZonosTaxInput>>;
};

export type ZonosLandedCostEdge = {
  __typename?: 'LandedCostEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosLandedCost>;
};

export type ZonosLandedCostEndUse =
  /** Item quoted will be resold upon import */
  | 'FOR_RESALE'
  /** Item quoted will not be resold upon import (e.g. personal use, gift) */
  | 'NOT_FOR_RESALE';

export type ZonosLandedCostFeeType =
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
  | 'PARTNER_REV_SHARE'
  | 'SHIPPING'
  | 'TAX'
  | 'ZONOS_ACCESS_FEE'
  | 'ZONOS_LANDED_COST'
  | 'ZONOS_LANDED_COST_GUARANTEE'
  | 'ZONOS_MERCHANT_FEE'
  | 'ZONOS_MERCHANT_PROCESSING'
  | 'ZONOS_TRANSACTION';

export type ZonosLandedCostFilter = {
  /** Return `LandedCost` resources created after a given (inclusive) */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Return `LandedCost` resources created before a given date (inclusive) */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
  shipFromCountry?: InputMaybe<ZonosCountryCode>;
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

/** any enum added here also needs to be added in orderService legacy. bounce orderDgs add logic to feeContext accordingly and landedCostBillingRuleContext */
export type ZonosLandedCostGuaranteeCode =
  /** Zonos covers any landed cost discrepancies and this quote has inclusive price items in it. */
  | 'INCLUSIVE_PRICE'
  /** No guarantee */
  | 'NOT_APPLICABLE'
  | 'POSTAL_DDP'
  | 'POSTAL_DDP_INCLUSIVE_PRICE'
  /** Zonos covers any landed cost discrepancies */
  | 'ZONOS';

export type ZonosLandedCostInclusivePrice = {
  __typename?: 'LandedCostInclusivePrice';
  landedCost: ZonosLandedCost;
};

export type ZonosLandedCostInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<ZonosLandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: ZonosLandedCostEndUse;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<ZonosIncotermCode>;
  /** `Root` resource that this `LandedCost` will belong to */
  rootId: Scalars['ID'];
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: ZonosLandedCostTariffRate;
};

/** The method to use for the landed cost calculation. */
export type ZonosLandedCostMethod =
  /** Only provide a DAP quote */
  | 'DAP_FORCED'
  /** Provide both a DDP and DAP quote */
  | 'DDP_AND_DAP'
  /** Only provide a DDP */
  | 'DDP_FORCED'
  /** provide a DDP quote but return a DAP quote if DDP is not allowed */
  | 'DDP_PREFERRED';

export type ZonosLandedCostQuoteType =
  /** this quote is for auditing purpose */
  | 'AUDITING'
  /** Regular checkout quote. */
  | 'CHECKOUT'
  /** this quote is an inclusive quote associated with a catalogItem */
  | 'INCLUSIVE_PRICE';

/** Represents the tax remittance values required by specific entities. */
export type ZonosLandedCostRemittance = {
  __typename?: 'LandedCostRemittance';
  /** The price amount of the tax remittance. */
  amount: Scalars['Decimal'];
  /** The type of tax remittance. */
  description: Scalars['String'];
  /** A note on where to remit the tax remittance. */
  note: Scalars['String'];
};

export type ZonosLandedCostTariffRate =
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

export type ZonosLandedCostWeightUnit =
  | 'CG'
  | 'CT'
  | 'G'
  | 'KG'
  | 'LB'
  | 'MG'
  | 'OZ'
  | 'T';

export type ZonosLandedCostWorkFlowInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<ZonosLandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: ZonosLandedCostEndUse;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<ZonosIncotermCode>;
  /** Id of the landed cost associated with a source LCG transaction. This is provided only when changes are required to an LCG transaction that would require a re-calculation of duties, taxes and fees. The source landed cost must fall within the guarantee window (default: 90 days) and have the same parties and currencies as the re-calculated landed cost. */
  sourceLandedCostId?: InputMaybe<Scalars['String']>;
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: ZonosLandedCostTariffRate;
};

export type ZonosLanguageCode =
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

export type ZonosLcgBillingMethod =
  | 'BILLING_DGS'
  | 'LEGACY';

/** An implementation of `ReconciliationCharge` that represents an `OrderTransaction` used in Legacy APIs */
export type ZonosLegacyOrderTransactionCharge = ZonosReconciliationCharge & {
  __typename?: 'LegacyOrderTransactionCharge';
  /** The sum of the transaction fees for this `LegacyOrderTransaction` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `LegacyOrderTransactionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this `LegacyOrderTransactionCharge` */
  createdBy: Scalars['ID'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for this `LegacyOrderTransactionCharge` */
  id: Scalars['ID'];
  /** The ID of the legacy order transaction this object represents */
  legacyOrderTransactionId: Scalars['Int'];
  /** An optional note about this `LegacyOrderTransactionCharge` */
  note: Maybe<Scalars['String']>;
  /** A list of `TransactionFee` objects to describe transaction amounts */
  transactionFees: Array<ZonosTransactionFee>;
};

export type ZonosLocation = {
  __typename?: 'Location';
  administrativeArea: Maybe<Scalars['String']>;
  administrativeAreaCode: Maybe<Scalars['String']>;
  countryCode: ZonosCountryCode;
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
  metadata: Maybe<Array<Maybe<ZonosPartyMetadata>>>;
  mode: ZonosMode;
  organization: Scalars['ID'];
  plusCode: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  propertyType: Maybe<ZonosPropertyType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type ZonosLocationCreateInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: ZonosCountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<ZonosPropertyType>;
};

export type ZonosManualClassification = {
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
  manualClassificationRequest: ZonosManualClassificationRequest;
  /** The ID of the organization associated with this classification. */
  organizationId: Scalars['ID'];
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry: Maybe<ZonosCountryCode>;
};

export type ZonosManualClassificationBulkJob = {
  __typename?: 'ManualClassificationBulkJob';
  /** The list of Country Codes where we will make manual classifications */
  classifyToCountries: Array<ZonosCountryCode>;
  /** When this `Manual Classification Request Bulk Job` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Manual Classification Request Bulk Job. */
  createdBy: Scalars['ID'];
  /** The number of rows that errored out during import */
  errorCount: Scalars['Int'];
  /** Unsuccessful rows and their error messages */
  errorMessages: Array<ZonosManualClassificationRequestUploadError>;
  /** The hour allotment for the manual classifications in the bulk job */
  hourAllotment: Maybe<Scalars['Int']>;
  /** The ID of the ManualClassificationRequest BulkJob */
  id: Scalars['ID'];
  /** The number of manual classification requests that have been invalidated */
  invalidatedCount: Scalars['Int'];
  /** The manual classification associated with a bulk job */
  manualClassifications: Maybe<ZonosManualClassificationConnection>;
  /** The uploaded customer created name of the manual classification request bulk job usually the filename */
  name: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organizationId: Scalars['ID'];
  /** The number of rows that have been successfully manually classified */
  processedCount: Scalars['Int'];
  /** Current status of the BulkJob */
  status: ZonosManualClassificationBulkJobStatus;
  /** The total number of rows in a CSV upload */
  totalCount: Scalars['Int'];
};


export type ZonosManualClassificationBulkJobManualClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type ZonosManualClassificationBulkJobConnection = {
  __typename?: 'ManualClassificationBulkJobConnection';
  edges: Array<ZonosManualClassificationBulkJobEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationBulkJobEdge = {
  __typename?: 'ManualClassificationBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: ZonosManualClassificationBulkJob;
};

export type ZonosManualClassificationBulkJobInitializeResponse = {
  __typename?: 'ManualClassificationBulkJobInitializeResponse';
  manualClassificationBulkJob: ZonosManualClassificationBulkJob;
  uploadUrl: Scalars['String'];
};

export type ZonosManualClassificationBulkJobStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'MANUALLY_CLASSIFIED'
  | 'PROCESSING';

export type ZonosManualClassificationBulkJobUrlResponse = {
  __typename?: 'ManualClassificationBulkJobUrlResponse';
  exportUrl: Scalars['String'];
  manualClassificationBulkJob: ZonosManualClassificationBulkJob;
};

export type ZonosManualClassificationBulkJobsFilter = {
  /** Current status of the BulkJob */
  status: ZonosManualClassificationBulkJobStatus;
};

export type ZonosManualClassificationConnection = {
  __typename?: 'ManualClassificationConnection';
  edges: Array<ZonosManualClassificationEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationCreateInput = {
  /** The HS code assigned to the item. */
  hsCode: Scalars['String'];
  /** The unique key identifying the item. */
  itemKey: Scalars['String'];
  organizationId: Scalars['ID'];
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Visibility status of the provided HS code. */
  visibilityStatus?: InputMaybe<ZonosProvidedHsCodeVisibilityStatus>;
};

export type ZonosManualClassificationEdge = {
  __typename?: 'ManualClassificationEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosManualClassification>;
};

export type ZonosManualClassificationRequest = {
  __typename?: 'ManualClassificationRequest';
  /** The date and time when the request was archived. */
  archivedAt: Maybe<Scalars['DateTime']>;
  /** The ID of the user who archived the request. */
  archivedBy: Maybe<Scalars['ID']>;
  /** Categories associated with the item to be classified. */
  categories: Maybe<Array<Scalars['String']>>;
  /** The unique identifier of the classification associated with this request. */
  classification: Maybe<ZonosClassification>;
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
  shipToCountry: Maybe<ZonosCountryCode>;
  /** The status of the manual classification request. */
  status: ZonosManualClassificationRequestStatus;
};

export type ZonosManualClassificationRequestConnection = {
  __typename?: 'ManualClassificationRequestConnection';
  edges: Array<ZonosManualClassificationRequestEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationRequestCreateInput = {
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
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosManualClassificationRequestCreateResponse = {
  __typename?: 'ManualClassificationRequestCreateResponse';
  manualClassificationRequest: ZonosManualClassificationRequest;
  result: ZonosManualClassificationRequestCreateStatus;
};

export type ZonosManualClassificationRequestCreateStatus =
  /** The request was created successfully. */
  | 'CREATED'
  /** The request was not created successfully. */
  | 'EXISTING';

export type ZonosManualClassificationRequestEdge = {
  __typename?: 'ManualClassificationRequestEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosManualClassificationRequest>;
};

export type ZonosManualClassificationRequestStatus =
  | 'COMPLETED'
  | 'INVALIDATED'
  | 'PENDING'
  | 'RESERVED';

export type ZonosManualClassificationRequestUploadError = {
  __typename?: 'ManualClassificationRequestUploadError';
  message: Scalars['String'];
  rowNumber: Scalars['Int'];
};

export type ZonosManualClassificationRequestsFilter = {
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
  /** Filters requests that are due before the current time */
  overdue?: InputMaybe<Scalars['Boolean']>;
  /** Filters requests intended to ship to a specific country. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Determines the sorting order of the requests, defaults to priority. */
  sort?: InputMaybe<Array<InputMaybe<ZonosManualClassificationRequestsSorting>>>;
  /** Filters requests by their status, default is pending. */
  status?: InputMaybe<ZonosManualClassificationRequestStatus>;
};

export type ZonosManualClassificationRequestsReserveInput = {
  /** Defines the amount of `ManualClassificationRequest`s to reserve. Defaults to 50. */
  reservationAmount?: InputMaybe<Scalars['Int']>;
};

export type ZonosManualClassificationRequestsSorting =
  | 'HS_CODE'
  | 'PRIORITY';

export type ZonosManualClassificationSetting = {
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
  sensitiveFields: Array<ZonosClassificationRequestField>;
  /** The status of the manual classification setting. If disabled, manual classification will not be triggered. */
  status: ZonosManualClassificationSettingStatus;
  /** The date and time when the setting was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who last updated the setting. */
  updatedBy: Scalars['ID'];
};

export type ZonosManualClassificationSettingCreateInput = {
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment: Scalars['Int'];
  /** The minimum confidence score a `Classification` can have before triggering a `ManualClassificationRequest`. */
  minConfidenceThreshold: Scalars['Decimal'];
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields: Array<ZonosClassificationRequestField>;
  /** The status of the manual classification setting. If disabled, manual classification request will not be triggered. */
  status?: InputMaybe<ZonosManualClassificationSettingStatus>;
};

export type ZonosManualClassificationSettingStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosManualClassificationSettingUpdateInput = {
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment?: InputMaybe<Scalars['Int']>;
  /** The updated minimum confidence score threshold for manual classification. */
  minConfidenceThreshold?: InputMaybe<Scalars['Decimal']>;
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields?: InputMaybe<Array<ZonosClassificationRequestField>>;
  /** The status of the manual classification setting. If disabled, manual classification request will not be triggered. */
  status?: InputMaybe<ZonosManualClassificationSettingStatus>;
};

export type ZonosManualClassificationStageUploadInput = {
  /** The list of Country Codes where we will make manual classifications */
  classifyToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The fileName of the Bulk Job */
  fileName: Scalars['String'];
  /** The hour allotment for the manual classifications in the bulk job */
  hourAllotment?: InputMaybe<Scalars['Int']>;
};

export type ZonosManualClassificationStatus =
  | 'ACTIVE'
  | 'ARCHIVED';

export type ZonosManualClassificationValidateInput = {
  /** Categories of the item. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The description of the item. */
  description?: InputMaybe<Scalars['String']>;
  /** Unique key identifying the item to be classified. */
  itemKey: Scalars['String'];
  /** The name or title of the item. */
  name?: InputMaybe<Scalars['String']>;
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosManualClassificationValidateResponse = {
  __typename?: 'ManualClassificationValidateResponse';
  invalidManualClassificationRequests: Array<ZonosManualClassificationRequest>;
  invalidManualClassifications: Array<ZonosManualClassification>;
  validManualClassification: Maybe<ZonosManualClassification>;
};

export type ZonosManualClassificationsFilter = {
  /** Filters classifications associated with a specific item key. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** Filters classifications intended for a specific ship-to country. */
  shipToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** Filters classifications by their status. */
  status?: InputMaybe<ZonosManualClassificationStatus>;
  /** Filters based on the visibility status of the providedHsCode at the time of manual classification. */
  visibilityStatus?: InputMaybe<ZonosProvidedHsCodeVisibilityStatus>;
};

/** They type of match found on the party screening. */
export type ZonosMatchType =
  /** The field matched exactly with the potential denied party. */
  | 'EXACT_MATCH'
  /** The field partially matched with the potential denied party. */
  | 'NO_MATCH'
  /** The field partially matched with the potential denied party. */
  | 'PARTIAL_MATCH';

export type ZonosMetadata = {
  __typename?: 'Metadata';
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosMetadataInput = {
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosMode =
  | 'LIVE'
  | 'TEST';

export type ZonosMultiFactorAuthSetting =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosMutation = {
  __typename?: 'Mutation';
  /** Create a `CarrierBillingInvoice` */
  carrierBillingInvoiceCreate: Array<Maybe<ZonosCarrierBillingInvoice>>;
  /** Void an existing `CarrierBillingInvoice` */
  carrierBillingInvoiceVoid: Maybe<ZonosCarrierBillingInvoice>;
  /** Create a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingCreate: Array<Maybe<ZonosCarrierInvoiceAccountNumberMapping>>;
  /** Delete a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingDelete: ZonosResult;
  /** Update a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingUpdate: Array<Maybe<ZonosCarrierInvoiceAccountNumberMapping>>;
  /** Reconcile a `CarrierInvoiceLineItem` by manually billing a specified amount */
  carrierInvoiceLineItemBillingCreate: Array<ZonosReconciliation>;
  /** Reconcile a `CarrierInvoiceLineItem` by checking for existing billing records or transactions */
  carrierInvoiceLineItemReconcile: Array<ZonosReconciliation>;
  /** Create A new cart for a group of items */
  cartCreate: ZonosCart;
  /** Update a cart with new items or remove items */
  cartUpdate: ZonosCart;
  /** Use the current state of the cart in the workflow. */
  cartWorkflow: ZonosCart;
  /** Update the CartonizationSettings for the callers organization */
  cartonizationSettingsUpdate: ZonosCartonizationSettings;
  /** Creates a `Carton` from a workflow request */
  cartonizeWorkflow: Maybe<Array<Maybe<ZonosCarton>>>;
  /** Creates `Carton's` from a workflow request */
  cartonsCreateWorkflow: Maybe<Array<Maybe<ZonosCarton>>>;
  /** Create one or many `CatalogItem`. */
  catalogItemCreate: Array<ZonosCatalogItem>;
  /** Delete one or many `CatalogItem`. */
  catalogItemDelete: ZonosResult;
  /** Creates a new catalog item delete job. */
  catalogItemDeleteJobCreate: ZonosDeleteJob;
  /** Creates a new catalog item export job for the given catalog item IDs. */
  catalogItemExportByIds: ZonosExportJob;
  /** Creates a new catalog item export job and will send an email to the caller when complete. */
  catalogItemExportJobCreate: ZonosExportJob;
  /** Update one or many `CatalogItem`. */
  catalogItemUpdate: Array<ZonosCatalogItem>;
  /** Allows an API consumer to calculate a new `Classification` using the provided inputs. */
  classificationsCalculate: Array<ZonosClassification>;
  classificationsCalculateWithAugmentation: Array<ZonosClassification>;
  /** Creates the `collectInvoiceFeeConfiguration` for the calling tokens `Organization` */
  collectInvoiceFeeConfigurationCreate: ZonosCollectInvoiceFeeConfiguration;
  /** Creates a fee for an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeCreate: ZonosCollectInvoiceFee;
  /** Updates a fee on an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeUpdate: ZonosCollectInvoiceFee;
  /** Adds a Zonos fee for an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeZonosCreate: ZonosCollectInvoiceFee;
  /** Updates a Zonos fee on an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeZonosUpdate: ZonosCollectInvoiceFee;
  collectInvoiceSettingsUpdate: ZonosCollectInvoiceSettings;
  /** Create a `CollectSubmission` object for manual invoicing. */
  collectSubmissionCreateWorkflow: ZonosCollectSubmission;
  /** Process `CollectSubmission` objects. Internal only */
  collectSubmissionProcess: Array<ZonosCollectSubmission>;
  /** Re-process existing CollectSubmission(s) in order to retry invoice creation in case of failure */
  collectSubmissionRetry: Array<ZonosCollectSubmission>;
  /** Update an existing `CollectSubmission` record with the input parameters. */
  collectSubmissionUpdate: Array<ZonosCollectSubmission>;
  /** Generate upload URLs for `CollectInvoice` objects that will share a common `Prefix` */
  collectSubmissionUploadUrlGenerate: Array<ZonosCollectSubmissionUploadUrl>;
  customerInvoiceFilesCreate: Array<Maybe<ZonosCustomerInvoiceFile>>;
  customsDescriptionsCombineAndCreate: Array<ZonosCustomsDescription>;
  customsDescriptionsCreate: Array<ZonosCustomsDescription>;
  /** Creates `CustomsDocument`s from existing files and attaches them to a `Shipment` or `CustomsSpec` */
  customsDocumentCreate: Array<ZonosCustomsDocument>;
  /** Generates `CustomsDocument`s from the given inputs */
  customsDocumentGenerate: Array<ZonosCustomsDocument>;
  /** Create a new `CustomsSpec` object */
  customsSpecCreate: Array<Maybe<ZonosCustomsSpec>>;
  /** Enhance existing customs data into a new `CustomsSpec` object */
  customsSpecGenerate: Array<Maybe<ZonosCustomsSpec>>;
  /** Update an existing `CustomsSpec` object */
  customsSpecUpdate: Array<Maybe<ZonosCustomsSpec>>;
  deleteClassifySetting: ZonosResult;
  /** Create a new `ExchangeRate` */
  exchangeRateCreate: Maybe<ZonosExchangeRate>;
  /** Validates an HS code against a list of countries. */
  hsCodesValidate: Array<ZonosHsCodeValidationSummary>;
  /** Create new `Items` */
  itemCreateWorkflow: Array<ZonosItem>;
  itemRestrictionApply: ZonosItemRestrictionResult;
  /** Create new `Items`. */
  itemsCreate: Array<ZonosItem>;
  labelCreateWorkflow: Array<ZonosLabel>;
  /** Create a new `CustomDeclarationStatement` object */
  labelSettingsCustomDeclarationCreate: ZonosLabelSettings;
  /** Delete an existing `CustomDeclarationStatement` object */
  labelSettingsCustomDeclarationDelete: ZonosLabelSettings;
  /** Updates the `LabelSettings` associated with the calling `Organization`s token */
  labelSettingsUpdate: ZonosLabelSettings;
  /** Allows an API consumer to calculate a new `LandedCost` quote */
  landedCostCalculateWorkflow: Maybe<Array<Maybe<ZonosLandedCost>>>;
  /** Allows an API consumer to create a new `LandedCost` object. */
  landedCostCreate: Maybe<ZonosLandedCost>;
  /** Add a note on an order */
  orderAddNote: Maybe<ZonosOrder>;
  /** Add a tracking number to an order */
  orderAddTrackingNumber: Maybe<ZonosOrder>;
  /** Cancel an order */
  orderCancel: ZonosOrder;
  /** Create an order from a landed cost quote */
  orderCreate: Maybe<ZonosOrder>;
  /** Delete a note on an order */
  orderDeleteNote: Maybe<ZonosOrder>;
  /** Create an order from a legacy Zonos order */
  orderLink: Maybe<Array<Maybe<ZonosOrder>>>;
  /**
   * Refund an order
   * @deprecated Use OrderRefundCreate
   */
  orderRefund: ZonosOrder;
  /** Create a new OrderRefund */
  orderRefundCreate: ZonosOrderRefund;
  /** Remove a tracking number from an order */
  orderRemoveTrackingNumber: Maybe<ZonosOrder>;
  /** Update the accountOrderNumber of an order */
  orderUpdateAccountOrderNumber: ZonosOrder;
  /** Update the amount subtotals of an order */
  orderUpdateAmountSubtotals: Array<ZonosOrder>;
  /** Update a note on an order */
  orderUpdateNote: Maybe<ZonosOrder>;
  /** Update the destination or payor party information on an order */
  orderUpdateParty: Maybe<ZonosOrder>;
  /** Allows an API consumer to create a new `PackagingOption`s */
  packagingOptionCreate: Maybe<Array<Maybe<ZonosPackagingOption>>>;
  /** Allows an API consumer to delete an existing `PackagingOption` */
  packagingOptionDelete: Maybe<ZonosResult>;
  partyCreate: ZonosParty;
  partyCreateWorkflow: Array<ZonosParty>;
  partyScreen: Maybe<ZonosPartyScreening>;
  /** Create a new `PddpCountrySpec` object */
  pddpCountrySpecCreate: Maybe<Array<ZonosPddpCountrySpec>>;
  /** Update an existing `PddpCountrySpec` object */
  pddpCountrySpecUpdate: Maybe<Array<ZonosPddpCountrySpec>>;
  /** Updates the `PddpSettings` associated with the calling `Organization`s token */
  pddpSettingsUpdate: ZonosPddpSettings;
  /** Create and submit a PDDP submission. */
  pddpSubmissionCreate: Array<ZonosPddpSubmission>;
  rootCreate: Maybe<ZonosRoot>;
  shipmentBulkCreate: Array<ZonosShipmentBulkCreateResult>;
  /** Creates a new `ShipmentConsolidation` from the given input. */
  shipmentConsolidationCreate: ZonosShipmentConsolidation;
  /** Updates a `ShipmentConsolidation` by adding a shipment, changing the status, or both. */
  shipmentConsolidationUpdate: ZonosShipmentConsolidation;
  /** @deprecated Use `shipmentCreateWorkflow` instead. */
  shipmentCreate: Maybe<ZonosShipment>;
  shipmentCreateWorkflow: Maybe<ZonosShipment>;
  /** Allows an API consumer to calculate possible `ShipmentRating`s based on the organization's configured settings. */
  shipmentRatingCalculateWorkflow: Array<ZonosShipmentRating>;
  /** Allows an API consumer to create a `shipmentRating`. */
  shipmentRatingCreateWorkflow: Maybe<ZonosShipmentRating>;
  shipmentStatusUpdate: Maybe<ZonosShipment>;
  shipmentsCreateFromOrder: Array<ZonosShipment>;
  /** Creates a new `Webhook`. */
  webhookCreate: Maybe<ZonosWebhook>;
  /** Deletes an existing `Webhook`. */
  webhookDelete: Maybe<ZonosResult>;
  /** Updates an existing `Webhook`. */
  webhookUpdate: Maybe<ZonosWebhook>;
};


export type ZonosMutationCarrierBillingInvoiceCreateArgs = {
  input: Array<ZonosCarrierBillingInvoiceCreateInput>;
};


export type ZonosMutationCarrierBillingInvoiceVoidArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationCarrierInvoiceAccountNumberMappingCreateArgs = {
  input: Array<ZonosCarrierInvoiceAccountNumberMappingCreateInput>;
};


export type ZonosMutationCarrierInvoiceAccountNumberMappingDeleteArgs = {
  input: Scalars['ID'];
};


export type ZonosMutationCarrierInvoiceAccountNumberMappingUpdateArgs = {
  input: Array<ZonosCarrierInvoiceAccountNumberMappingUpdateInput>;
};


export type ZonosMutationCarrierInvoiceLineItemBillingCreateArgs = {
  input: Array<ZonosCarrierInvoiceLineItemBillingCreateInput>;
};


export type ZonosMutationCarrierInvoiceLineItemReconcileArgs = {
  input: Array<ZonosCarrierInvoiceLineItemReconcileInput>;
};


export type ZonosMutationCartCreateArgs = {
  input: ZonosCartCreateInput;
};


export type ZonosMutationCartUpdateArgs = {
  input: ZonosCartUpdateInput;
};


export type ZonosMutationCartWorkflowArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationCartonizationSettingsUpdateArgs = {
  input: ZonosCartonizationSettingsUpdateInput;
};


export type ZonosMutationCartonsCreateWorkflowArgs = {
  input: Array<ZonosCartonCreateWorkflowInput>;
};


export type ZonosMutationCatalogItemCreateArgs = {
  input: Array<ZonosCatalogItemInput>;
};


export type ZonosMutationCatalogItemDeleteArgs = {
  input: Array<Scalars['ID']>;
};


export type ZonosMutationCatalogItemExportByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type ZonosMutationCatalogItemExportJobCreateArgs = {
  input: InputMaybe<ZonosCatalogItemExportJobCreateInput>;
};


export type ZonosMutationCatalogItemUpdateArgs = {
  input: Array<ZonosCatalogItemInput>;
};


export type ZonosMutationClassificationsCalculateArgs = {
  input: Array<ZonosClassificationCalculateInput>;
};


export type ZonosMutationClassificationsCalculateWithAugmentationArgs = {
  input: Array<ZonosClassificationCalculateInput>;
};


export type ZonosMutationCollectInvoiceFeeConfigurationCreateArgs = {
  input: ZonosCollectInvoiceFeeConfigurationInput;
};


export type ZonosMutationCollectInvoiceFeeCreateArgs = {
  input: ZonosCollectInvoiceFeeInput;
};


export type ZonosMutationCollectInvoiceFeeUpdateArgs = {
  input: ZonosCollectInvoiceFeeUpdateInput;
};


export type ZonosMutationCollectInvoiceFeeZonosCreateArgs = {
  input: ZonosCollectInvoiceFeeInput;
};


export type ZonosMutationCollectInvoiceFeeZonosUpdateArgs = {
  input: ZonosCollectInvoiceFeeUpdateInput;
};


export type ZonosMutationCollectInvoiceSettingsUpdateArgs = {
  input: ZonosCollectInvoiceSettingsUpdateInput;
};


export type ZonosMutationCollectSubmissionCreateWorkflowArgs = {
  input: ZonosCollectSubmissionCreateWorkflowInput;
};


export type ZonosMutationCollectSubmissionProcessArgs = {
  input: Array<ZonosCollectSubmissionProcessInput>;
};


export type ZonosMutationCollectSubmissionRetryArgs = {
  input: Array<ZonosCollectSubmissionRetryInput>;
};


export type ZonosMutationCollectSubmissionUpdateArgs = {
  input: Array<ZonosCollectSubmissionUpdateInput>;
};


export type ZonosMutationCollectSubmissionUploadUrlGenerateArgs = {
  input: ZonosCollectSubmissionUploadUrlInput;
};


export type ZonosMutationCustomerInvoiceFilesCreateArgs = {
  input: Array<ZonosCustomerInvoiceFileCreateInput>;
};


export type ZonosMutationCustomsDescriptionsCombineAndCreateArgs = {
  input: ZonosCustomsDescriptionCombineAndCreateInput;
};


export type ZonosMutationCustomsDescriptionsCreateArgs = {
  input: Array<ZonosCustomsDescriptionsCreateInput>;
};


export type ZonosMutationCustomsDocumentCreateArgs = {
  input: Array<ZonosCustomsDocumentCreateInput>;
};


export type ZonosMutationCustomsDocumentGenerateArgs = {
  input: Array<ZonosCustomsDocumentGenerateInput>;
};


export type ZonosMutationCustomsSpecCreateArgs = {
  input: Array<ZonosCustomsSpecCreateInput>;
};


export type ZonosMutationCustomsSpecGenerateArgs = {
  input: Array<ZonosCustomsSpecGenerateInput>;
};


export type ZonosMutationCustomsSpecUpdateArgs = {
  input: Array<ZonosCustomsSpecUpdateInput>;
};


export type ZonosMutationDeleteClassifySettingArgs = {
  id: Scalars['String'];
};


export type ZonosMutationExchangeRateCreateArgs = {
  input: ZonosExchangeRateCreateInput;
};


export type ZonosMutationHsCodesValidateArgs = {
  input: Array<ZonosHsCodeValidateInput>;
};


export type ZonosMutationItemCreateWorkflowArgs = {
  input: Array<ZonosItemCreateWorkflowInput>;
};


export type ZonosMutationItemRestrictionApplyArgs = {
  input: ZonosItemRestrictionApplyInput;
};


export type ZonosMutationItemsCreateArgs = {
  input: Array<ZonosItemInput>;
};


export type ZonosMutationLabelCreateWorkflowArgs = {
  input: InputMaybe<ZonosLabelCreateWorkflowInput>;
};


export type ZonosMutationLabelSettingsCustomDeclarationCreateArgs = {
  input: ZonosLabelSettingsUpdateInput;
};


export type ZonosMutationLabelSettingsCustomDeclarationDeleteArgs = {
  input: InputMaybe<Array<Scalars['ID']>>;
};


export type ZonosMutationLabelSettingsUpdateArgs = {
  input: ZonosLabelSettingsUpdateInput;
};


export type ZonosMutationLandedCostCalculateWorkflowArgs = {
  input: ZonosLandedCostWorkFlowInput;
};


export type ZonosMutationLandedCostCreateArgs = {
  input: ZonosLandedCostCreateInput;
};


export type ZonosMutationOrderAddNoteArgs = {
  input: ZonosOrderNoteCreateInput;
};


export type ZonosMutationOrderAddTrackingNumberArgs = {
  input: InputMaybe<ZonosOrderAddTrackingNumberInput>;
};


export type ZonosMutationOrderCancelArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationOrderCreateArgs = {
  input: ZonosOrderCreateInput;
};


export type ZonosMutationOrderDeleteNoteArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationOrderLinkArgs = {
  input: Array<ZonosOrderLinkInput>;
};


export type ZonosMutationOrderRefundArgs = {
  input: ZonosOrderRefundInput;
};


export type ZonosMutationOrderRefundCreateArgs = {
  input: ZonosOrderRefundInput;
};


export type ZonosMutationOrderRemoveTrackingNumberArgs = {
  input: InputMaybe<ZonosOrderRemoveTrackingNumberInput>;
};


export type ZonosMutationOrderUpdateAccountOrderNumberArgs = {
  input: ZonosOrderUpdateAccountOrderNumberInput;
};


export type ZonosMutationOrderUpdateAmountSubtotalsArgs = {
  input: Array<ZonosOrderUpdateAmountSubtotalsInput>;
};


export type ZonosMutationOrderUpdateNoteArgs = {
  input: ZonosOrderNoteUpdateInput;
};


export type ZonosMutationOrderUpdatePartyArgs = {
  input: ZonosOrderUpdatePartyInput;
};


export type ZonosMutationPackagingOptionCreateArgs = {
  input: Array<ZonosPackagingOptionCreateInput>;
};


export type ZonosMutationPackagingOptionDeleteArgs = {
  input: InputMaybe<Scalars['ID']>;
};


export type ZonosMutationPartyCreateArgs = {
  input: ZonosPartyCreateInput;
};


export type ZonosMutationPartyCreateWorkflowArgs = {
  input: Array<ZonosPartyCreateWorkflowInput>;
};


export type ZonosMutationPartyScreenArgs = {
  input: ZonosPartyScreenInput;
};


export type ZonosMutationPddpCountrySpecCreateArgs = {
  input: Array<ZonosPddpCountrySpecCreateInput>;
};


export type ZonosMutationPddpCountrySpecUpdateArgs = {
  input: Array<ZonosPddpCountrySpecUpdateInput>;
};


export type ZonosMutationPddpSettingsUpdateArgs = {
  input: ZonosPddpSettingsUpdateInput;
};


export type ZonosMutationPddpSubmissionCreateArgs = {
  input: ZonosPddpSubmissionCreateInput;
};


export type ZonosMutationShipmentBulkCreateArgs = {
  input: ZonosShipmentBulkCreateInput;
};


export type ZonosMutationShipmentConsolidationCreateArgs = {
  input: ZonosShipmentConsolidationCreateInput;
};


export type ZonosMutationShipmentConsolidationUpdateArgs = {
  input: ZonosShipmentConsolidationUpdateInput;
};


export type ZonosMutationShipmentCreateArgs = {
  input: ZonosShipmentCreateInput;
};


export type ZonosMutationShipmentCreateWorkflowArgs = {
  input: ZonosShipmentCreateWorkflowInput;
};


export type ZonosMutationShipmentRatingCalculateWorkflowArgs = {
  input: InputMaybe<ZonosShipmentRatingCalculateWorkflowInput>;
};


export type ZonosMutationShipmentRatingCreateWorkflowArgs = {
  input: ZonosShipmentRatingCreateWorkflowInput;
};


export type ZonosMutationShipmentStatusUpdateArgs = {
  input: ZonosShipmentStatusUpdateInput;
};


export type ZonosMutationShipmentsCreateFromOrderArgs = {
  input: ZonosShipmentsCreateFromOrderInput;
};


export type ZonosMutationWebhookCreateArgs = {
  input: ZonosWebhookCreateInput;
};


export type ZonosMutationWebhookDeleteArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationWebhookUpdateArgs = {
  input: ZonosWebhookUpdateInput;
};

export type ZonosNode = {
  id: Scalars['ID'];
};

export type ZonosOnlineStoreSettings = {
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
  mode: ZonosMode;
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

export type ZonosOnlineStoreSettingsUpdateInput = {
  /** A list of domains to allow Elements to send frontend requests from. Hello and Checkout will not function for domains not listed here. */
  allowedDomains?: InputMaybe<Array<Scalars['String']>>;
  /** Which shopping cart platform your ecommerce store uses. */
  platform?: InputMaybe<Scalars['String']>;
  /** The URL to your online storefront. */
  url?: InputMaybe<Scalars['String']>;
};

export type ZonosOrder = {
  __typename?: 'Order';
  /** The order number from the `Organization`. */
  accountOrderNumber: Maybe<Scalars['String']>;
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosAmountSubtotals;
  /** The `Cartons` that are included in the `Order`. */
  cartons: Maybe<Array<ZonosCarton>>;
  /** When this `Order` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order. */
  createdBy: Scalars['ID'];
  /** The currency this `Order` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for the Order. */
  id: Scalars['ID'];
  /** The `Items` that are included in the `Order`. */
  items: Maybe<Array<ZonosItem>>;
  /** The `landedCost` calculations that are included in the `Order`. */
  landedCosts: Maybe<Array<ZonosLandedCost>>;
  /** Other `Order` details. */
  metadata: Maybe<Array<Maybe<ZonosOrderMetadata>>>;
  /** Specifies whether the Order is in live or test mode. */
  mode: ZonosMode;
  /** The notes associated with an order`. */
  notes: Maybe<Array<Maybe<ZonosOrderNote>>>;
  /** The `Organization` associated with the Order. */
  organization: Scalars['ID'];
  /** The relevant party contact information for the `Order`. */
  parties: Maybe<Array<ZonosParty>>;
  /** The reference information that is included in the `Order`. */
  references: Maybe<Array<ZonosOrderReference>>;
  /** A List of refunds on the order */
  refunds: Maybe<Array<ZonosOrderRefund>>;
  /** List of remittances */
  remittance: Maybe<Array<Maybe<ZonosRemittance>>>;
  root: Maybe<ZonosRoot>;
  /** The `shipmentRatings` that are included in the `Order`. */
  shipmentRatings: Maybe<Array<ZonosShipmentRating>>;
  shipments: Array<ZonosShipment>;
  /** The status of the `Order`. */
  status: ZonosOrderStatus;
  /** Timestamp for when the status changed. */
  statusTransitions: Array<ZonosOrderStatusTransition>;
  /** The main tracking number for the `order`. */
  trackingNumbers: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `Order` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Order. */
  updatedBy: Scalars['ID'];
  /** The Zonos order id is an ID that is shorter and easier to use than the UUID */
  zonosOrderId: Maybe<Scalars['String']>;
};

export type ZonosOrderAddTrackingNumberInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** Boolean to not send sync back to legacy */
  syncToLegacy?: InputMaybe<Scalars['Boolean']>;
  /** The main tracking number for the `order`. */
  trackingNumbers: Array<Scalars['String']>;
};

export type ZonosOrderCompleteBillingMethod =
  | 'BILLING_DGS'
  | 'LEGACY';

/** Order Connection */
export type ZonosOrderConnection = {
  __typename?: 'OrderConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosOrderEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

export type ZonosOrderCreateInput = {
  /** The order number from the `organization`. */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** The ID of the billing `party`. */
  billTo?: InputMaybe<Scalars['ID']>;
  currencyCode: ZonosCurrencyCode;
  /** The grand total of the order. It will be rounded to the nearest penny. */
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  /** The landedCost id that the order will be created from. */
  landedCostId: Scalars['ID'];
  /** Other `Order` details. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosOrderMetadataInput>>>;
  /** The reference information associated to the order. */
  references?: InputMaybe<Array<InputMaybe<ZonosOrderReferenceInput>>>;
  /** The `id` of the destination `party` if different from the landedCost destination party. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** Optional field for details to create `Shipment` objects associated with this `Order`. */
  shipmentDetails?: InputMaybe<Array<ZonosOrderShipmentDetailInput>>;
  /** The source platform of the order. */
  source?: InputMaybe<Scalars['String']>;
};

/** Order Edge */
export type ZonosOrderEdge = {
  __typename?: 'OrderEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosOrder>;
};

export type ZonosOrderFulfillmentProgressResult = {
  __typename?: 'OrderFulfillmentProgressResult';
  /** List of `Shipment` objects from an `Order` that were fulfilled. Only contains shipments that do not have a status = VOIDED. */
  fulfilled: Array<ZonosShipment>;
  /** List of `FulfillmentItem` objects that relate to an `Order`. Indicates the original `Item` and the quantity that has yet to be fulfilled. */
  notFulfilled: Array<ZonosFulfillmentItem>;
};

export type ZonosOrderLinkInput = {
  /** The Zonos account id that the order belongs to */
  account?: InputMaybe<Scalars['String']>;
  /** The account's external order number */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** The Zonos order id */
  orderId?: InputMaybe<Scalars['String']>;
};

export type ZonosOrderMetadata = {
  __typename?: 'OrderMetadata';
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosOrderMetadataInput = {
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosOrderNote = {
  __typename?: 'OrderNote';
  /** When this `Order Note` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order Note. */
  createdBy: Scalars['ID'];
  /** When this `Order Note` was deleted. */
  deletedAt: Maybe<Scalars['DateTime']>;
  /** The user who deleted the Order Note. */
  deletedBy: Maybe<Scalars['ID']>;
  /** The ID of the `Order Note`. */
  id: Scalars['ID'];
  /** Note text */
  note: Scalars['String'];
  /** The type of note */
  type: ZonosOrderNoteType;
  /** When this `Order Note` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Order Note. */
  updatedBy: Scalars['ID'];
};

export type ZonosOrderNoteCreateInput = {
  /** Note text */
  note: Scalars['String'];
  /** The ID of the `Order` to create a note for */
  orderId: Scalars['ID'];
  /** The type of note` */
  type: ZonosOrderNoteType;
};

/** the Type on an `Order Note` */
export type ZonosOrderNoteType =
  | 'COMMENT'
  | 'NOTIFICATION_SENT'
  | 'ORDER_CHANGE'
  | 'SHIPMENT'
  | 'STATUS';

export type ZonosOrderNoteUpdateInput = {
  /** The ID of the `Order Note` to update */
  id: Scalars['ID'];
  /** Note text */
  note: Scalars['String'];
};

/** Reference information provided by Zonos about the order. */
export type ZonosOrderReference = {
  __typename?: 'OrderReference';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

/** Order reference Information input */
export type ZonosOrderReferenceInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosOrderRefund = {
  __typename?: 'OrderRefund';
  /** The total amount of the refund subtotals */
  amount: Scalars['Decimal'];
  /** When this `OrderRefund` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `OrderRefund`. */
  createdBy: Scalars['ID'];
  /** The currency of the refund amount and subtotals. */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for the `OrderRefund`. */
  id: Scalars['ID'];
  /** A description for the refund */
  note: Maybe<Scalars['String']>;
  /** `Order` that this `OrderRefund` belongs to */
  order: ZonosOrder;
  /** The subtotal amounts and types for the refund */
  subtotals: Array<ZonosOrderRefundSubtotal>;
};

export type ZonosOrderRefundInput = {
  /** The currency the refund totals are in */
  currencyCode: ZonosCurrencyCode;
  /** The `ID` of the `Order` to refund */
  id: Scalars['ID'];
  /** A description for the refund */
  note?: InputMaybe<Scalars['String']>;
  /** The subtotal amounts and types for the refund */
  subtotals?: InputMaybe<Array<ZonosOrderRefundSubtotalInput>>;
};

export type ZonosOrderRefundSubtotal = {
  __typename?: 'OrderRefundSubtotal';
  /** Amount for this subtotal type for the refund */
  amount: Scalars['Decimal'];
  /** Refund subtotal type */
  type: ZonosOrderRefundSubtotalType;
};

export type ZonosOrderRefundSubtotalInput = {
  amount: Scalars['Decimal'];
  type: ZonosOrderRefundSubtotalType;
};

/** The type for the refund subtotal */
export type ZonosOrderRefundSubtotalType =
  | 'DUTY_TAX_FEE'
  | 'ITEM'
  | 'SHIPPING';

export type ZonosOrderRemoveTrackingNumberInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** The main tracking number for the `order`. */
  trackingNumbers: Array<Scalars['String']>;
};

export type ZonosOrderShipmentCartonInput = {
  /** Unit of measurement for the dimensions of this carton. Default value is INCH. */
  dimensionalUnit?: InputMaybe<ZonosDimensionalUnitCode>;
  /** Height of the carton. */
  height: Scalars['Decimal'];
  /** Item details of the items packaged inside the carton. */
  items: Array<ZonosOrderShipmentCartonItemInput>;
  /** Length of the carton. */
  length: Scalars['Decimal'];
  /** Tracking number associated with this carton. */
  trackingNumber?: InputMaybe<Scalars['String']>;
  /** Weight of the carton. */
  weight: Scalars['Decimal'];
  /** Unit of measurement for the weight of this carton. Default value is POUND. */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
  /** Width of this carton. */
  width: Scalars['Decimal'];
};

export type ZonosOrderShipmentCartonItemInput = {
  /** The country of origin for the `Item`. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** HS code of the `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The reference to the item being included in the carton. Can be SKU, Product ID, or the `Item.id`. */
  itemReference: Scalars['String'];
  /** The quantity of the `Item` that is packaged inside this carton. Default value is 1. */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ZonosOrderShipmentCreateInput = {
  /** Optional `FulfillmentCenter` ID. If not provided, the ORIGIN `Party` on the `Order` will be used. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** Optional `ServiceLevel` ID or code. If not provided, the `ServiceLevel` on the `Order.landedCost` will be used. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** Details about the cartons included in this Shipment. */
  shipmentCartons: Array<ZonosShipmentCartonInput>;
  /** Optional master tracking number referring to the entire Shipment. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosOrderShipmentDetailInput = {
  /** ID of the `FulfillmentCenter` the shipment is being shipped from. If not provided, the PRIMARY `FulfilmentCenter` will be used. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** Identifier for the `ServiceLevel` to be used to create the `Shipment`. Can be the `id` or `code` and must be associated with a valid `ServiceLevel`. If not provided, the `ServiceLevel` on the `LandedCost.shipmentRating` for the Order will be used. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** List of inputs with details about the packages inside the `Shipment` being created. */
  shipmentCartons: Array<ZonosOrderShipmentCartonInput>;
  /** Optional master tracking number for the `Shipment` being created. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** Assigned status for `Order` */
export type ZonosOrderStatus =
  | 'CANCELED'
  | 'COMPLETED'
  | 'FRAUD_HOLD'
  | 'IN_TRANSIT_TO_CONSOLIDATION_CENTER'
  | 'OPEN'
  | 'PARTIALLY_SHIPPED'
  | 'PAYMENT_FAILED'
  | 'PAYMENT_PENDING';

export type ZonosOrderStatusTransition = {
  __typename?: 'OrderStatusTransition';
  /** When this `Order` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order. */
  createdBy: Scalars['ID'];
  /** Any additional information required for this status transition. */
  note: Maybe<Scalars['String']>;
  /** The status of this status transition. */
  status: ZonosOrderStatus;
};

export type ZonosOrderTransactionBillingMethod =
  | 'BILLING_DGS'
  | 'LEGACY';

export type ZonosOrderUpdateAccountOrderNumberInput = {
  /** The order number from the `Organization`. */
  accountOrderNumber: Scalars['String'];
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** Boolean to not send sync back to legacy */
  syncToLegacy?: InputMaybe<Scalars['Boolean']>;
};

export type ZonosOrderUpdateAmountSubtotalsInput = {
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  orderId: Scalars['ID'];
};

export type ZonosOrderUpdatePartyInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** The new `id` of the destination or payor `party` to use for the order. */
  partyId: Scalars['ID'];
};

export type ZonosOrdersFilter = {
  /** Return the `Order` resource with the given accountOrderNumber */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** Return `Order` resources created within a given date range */
  between?: InputMaybe<ZonosDateTimeRange>;
  /** Return `Order` resources created within a given status */
  status?: InputMaybe<ZonosOrderStatus>;
  /** Return `Order` resources created within a given store ID */
  storeId?: InputMaybe<Scalars['String']>;
};

export type ZonosOrganization = {
  __typename?: 'Organization';
  id: Scalars['String'];
};

/** A `packagingOption` represents a box that can be used to ship an item */
export type ZonosPackagingOption = {
  __typename?: 'PackagingOption';
  /** When the `packagingOption` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `PackagingOption` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** PackagingOption ID, prefixed with `packagingOption_` */
  id: Scalars['ID'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** Whether the `packagingOption` is in test or live mode */
  mode: ZonosMode;
  /** The name the `organization` is using for a particular `packagingOption` */
  name: Scalars['String'];
  /** The `organization` associated with the `packagingOption` */
  organization: Scalars['ID'];
  /** The source from where the `PackagingOption` was generated */
  source: ZonosPackagingOptionSource;
  /** The status of the `packagingOption` */
  status: ZonosPackagingOptionStatus;
  /** The packaging style (box, polybag, letter, etc.) */
  type: ZonosPackagingType;
  /** When the `packagingOption` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `PackagingOption`. */
  updatedBy: Scalars['ID'];
  /** The maximum weight of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

/** A type for paginating through multiple packaging options. */
export type ZonosPackagingOptionConnection = {
  __typename?: 'PackagingOptionConnection';
  /** A list of `edges`. */
  edges: Maybe<Array<Maybe<ZonosPackagingOptionEdge>>>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `PackagingOption` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosPackagingOptionCreateInput = {
  /** The measurement units of the height, length and width */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** A memorable name for the package option. If one is not provided it will be named based on the length X width X height (ie. 10x8x4) */
  name?: InputMaybe<Scalars['String']>;
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
  /** The weight capacity of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packagingOption` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

export type ZonosPackagingOptionDeleteAction =
  | 'DELETE'
  | 'DISABLE';

/** A type used in pagination. */
export type ZonosPackagingOptionEdge = {
  __typename?: 'PackagingOptionEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<ZonosPackagingOption>;
};

export type ZonosPackagingOptionSource =
  | 'DEFAULT'
  | 'DYNAMIC'
  | 'ORGANIZATION';

export type ZonosPackagingOptionStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosPackagingOptionsDeleteDuplicatesInput = {
  /** Whether the packaging option should be deleted or disabled. */
  action?: InputMaybe<ZonosPackagingOptionDeleteAction>;
  /** The `Organization` ID */
  organizationIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type ZonosPackagingOptionsFilter = {
  /** The `PackagingOptionSource` you are filtering by. */
  source?: InputMaybe<ZonosPackagingOptionSource>;
  /** The status you are filtering by. */
  status?: InputMaybe<ZonosPackagingOptionStatus>;
  /** The `PackagingType` you are filtering by. */
  type?: InputMaybe<ZonosPackagingType>;
};

export type ZonosPackagingType =
  | 'ENVELOPE'
  | 'FLAT'
  | 'PACKAGE'
  | 'PAK'
  | 'PARCEL'
  | 'POLYBAG'
  | 'TUBE';

export type ZonosPackingPreference =
  /** The item can be shipped with other items in a box */
  | 'CONSOLIDATED'
  /** The item is shipped alone */
  | 'SHIPS_ALONE';

export type ZonosPageInfo = {
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

export type ZonosPartiesToTransaction =
  | 'NON_RELATED'
  | 'RELATED';

export type ZonosParty = {
  __typename?: 'Party';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  id: Scalars['ID'];
  location: Maybe<ZonosLocation>;
  mode: ZonosMode;
  organization: Scalars['ID'];
  /** @deprecated Use `organization` instead */
  organizationId: Scalars['ID'];
  person: Maybe<ZonosPerson>;
  type: Maybe<ZonosPartyType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type ZonosPartyCreateInput = {
  /** If provided all fields from the existing party will be copied to the new party, except for any non-null fields explicitly provided in the input */
  existingPartyId?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<ZonosLocationCreateInput>;
  person?: InputMaybe<ZonosPersonCreateInput>;
  referenceId?: InputMaybe<Scalars['ID']>;
  type: ZonosPartyType;
};

export type ZonosPartyCreateWorkflowInput = {
  location?: InputMaybe<ZonosCreateLocationInput>;
  person?: InputMaybe<ZonosCreatePersonInput>;
  type: ZonosPartyType;
};

export type ZonosPartyFilter = {
  referenceId: Scalars['ID'];
};

export type ZonosPartyMetadata = {
  __typename?: 'PartyMetadata';
  key: Scalars['String'];
  value: Maybe<Scalars['String']>;
};

export type ZonosPartyMetadataInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosPartyScreenInput = {
  location?: InputMaybe<ZonosDeniedPartyLocationInput>;
  person?: InputMaybe<ZonosDeniedPartyPersonInput>;
};

/** The match found on the party screening. */
export type ZonosPartyScreenMatch = {
  __typename?: 'PartyScreenMatch';
  /** The administrative area code match type. */
  administrativeAreaCode: Maybe<ZonosMatchType>;
  /** The company match type. */
  companyName: Maybe<ZonosMatchType>;
  /** The country code match type. */
  countryCode: Maybe<ZonosMatchType>;
  /** The denied party that was matched. */
  deniedParty: Maybe<ZonosDeniedParty>;
  /** The line1 match type. */
  line1: Maybe<ZonosMatchType>;
  /** The line2 match type. */
  line2: Maybe<ZonosMatchType>;
  /** The locality/city match type. */
  locality: Maybe<ZonosMatchType>;
  /** The contact name match type. */
  name: Maybe<ZonosMatchType>;
  /** The postal code match type. */
  postalCode: Maybe<ZonosMatchType>;
  /** The score of the matched denied party. */
  scores: Maybe<ZonosScreeningScores>;
};

/** The screening result for a party. */
export type ZonosPartyScreening = {
  __typename?: 'PartyScreening';
  /** Indicates the type of action required for the party screening */
  action: ZonosDeniedPartyAction;
  /** When this `deniedParty` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `deniedParty` */
  createdBy: Scalars['ID'];
  /** Denied Party Screening ID, prefixed with `deniedParty_`. */
  id: Scalars['ID'];
  /** The fields that had an match with a potential denied party */
  matches: Array<ZonosPartyScreenMatch>;
  /** The mode of the party screening */
  mode: ZonosMode;
  /** Party that was used to query the API */
  party: ZonosParty;
};

export type ZonosPartyScreeningConnection = {
  __typename?: 'PartyScreeningConnection';
  edges: Maybe<Array<Maybe<ZonosPartyScreeningEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosPartyScreeningEdge = {
  __typename?: 'PartyScreeningEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosPartyScreening>;
};

export type ZonosPartyScreeningFilter = {
  action?: InputMaybe<ZonosDeniedPartyAction>;
  country?: InputMaybe<ZonosCountryCode>;
};

export type ZonosPartyScreeningSetting = {
  __typename?: 'PartyScreeningSetting';
  /** Default value is EXACT_LOCALITY */
  addressMatchThreshold: Maybe<ZonosAddressMatchThreshold>;
  id: Scalars['ID'];
  /** Default value is 0.8 */
  nameMatchDecisionThreshold: Maybe<Scalars['Decimal']>;
};

export type ZonosPartyScreeningSettingInput = {
  addressMatchThreshold?: InputMaybe<ZonosAddressMatchThreshold>;
  nameMatchDecisionThreshold?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosPartyType =
  | 'DESTINATION'
  | 'ORIGIN'
  | 'PAYEE'
  | 'PAYOR';

export type ZonosPaymentsSettings = {
  __typename?: 'PaymentsSettings';
  /** When these `paymentsSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these `paymentsSettings`. */
  createdBy: Scalars['String'];
  /** The day of the week payouts occur. */
  dayOfWeek: Maybe<ZonosDay>;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: Maybe<ZonosEndOfDayBehavior>;
  /** How often payouts occur, in days. */
  frequencyDays: Maybe<Scalars['Int']>;
  /**
   * A unique identifier for the PaymentsSettings.
   * @deprecated Not needed, we will find the object associated to the passed in credential's organization.
   */
  id: Maybe<Scalars['String']>;
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod: Maybe<ZonosLcgBillingMethod>;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Maybe<Scalars['Int']>;
  /** Specifies whether the PaymentsSettings is in live or test mode. */
  mode: ZonosMode;
  /** Specifies which system to use for billing order complete fees */
  orderCompleteBillingMethod: Maybe<ZonosOrderCompleteBillingMethod>;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod: Maybe<ZonosOrderTransactionBillingMethod>;
  /** The `Organization` associated with the PaymentsSettings. */
  organization: Maybe<Scalars['String']>;
  /** When these `PaymentsSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the PaymentsSettings. */
  updatedBy: Scalars['String'];
};

/** An amount type and value associated with a PDDP submission */
export type ZonosPddpAmount = {
  __typename?: 'PddpAmount';
  /** The monetary amount associated with the PDDP submission */
  amount: Scalars['Decimal'];
  /** The type of the amount associated with the PDDP submission */
  amountType: ZonosPddpAmountType;
  /** The currency used for the amount */
  currencyCode: ZonosCurrencyCode;
};

/** The type of an amount associated with a PDDP submission */
export type ZonosPddpAmountType =
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

export type ZonosPddpCountrySpec = {
  __typename?: 'PddpCountrySpec';
  /** The `ID` of the PddpCountrySpec countrycode */
  countryCode: ZonosCountryCode;
  /** The dateTime of the PddpCountrySpec creation */
  createdAt: Scalars['DateTime'];
  /** The user who created the PddpCountrySpec */
  createdBy: Scalars['ID'];
  /** The unique identifier for the PddpCountrySpec */
  id: Scalars['ID'];
  /** Service levels available for the merchant to use */
  serviceLevels: Maybe<Array<ZonosServiceLevel>>;
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) */
  status: ZonosPddpCountrySpecStatus;
  /** The dateTime and info of the status transitions of the PddpCountrySpec */
  statusTransitions: Array<ZonosPddpCountrySpecStatusTransition>;
  /** The dateTime of the PddpCountrySpec last update */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** The user who last updated the PddpCountrySpec */
  updatedBy: Maybe<Scalars['ID']>;
};

/** Auto-generated types for paginating through multiple `PddpCountrySpec` objects. */
export type ZonosPddpCountrySpecConnection = {
  __typename?: 'PddpCountrySpecConnection';
  /** A list of `PddpCountrySpecEdge` objects */
  edges: Array<ZonosPddpCountrySpecEdge>;
  /** `PageInfo` about the connection */
  pageInfo: Maybe<ZonosPageInfo>;
};

export type ZonosPddpCountrySpecCreateInput = {
  /** The `ID` of the PddpCountrySpec countrycode */
  countryCode: ZonosCountryCode;
  /** Service levels available for the merchant to use */
  serviceLevels: Array<Scalars['ID']>;
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) - default is DISABLED */
  status?: InputMaybe<ZonosPddpCountrySpecStatus>;
};

export type ZonosPddpCountrySpecEdge = {
  __typename?: 'PddpCountrySpecEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The `PddpCountrySpec` at the end of the edge */
  node: Maybe<ZonosPddpCountrySpec>;
};

export type ZonosPddpCountrySpecStatus =
  /** The PddpCountrySpec is ACTIVE - default is DISABLED */
  | 'ACTIVE'
  | 'DISABLED';

export type ZonosPddpCountrySpecStatusTransition = {
  __typename?: 'PddpCountrySpecStatusTransition';
  /** The dateTime of the status transition */
  createdAt: Scalars['DateTime'];
  /** "The user who created the PddpCountrySpec */
  createdBy: Scalars['ID'];
  /** The notes for the status transition */
  note: Scalars['String'];
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) */
  status: ZonosPddpCountrySpecStatus;
};

export type ZonosPddpCountrySpecUpdateInput = {
  /** The `ID` of the PddpCountrySpec countrycode */
  countryCode?: InputMaybe<ZonosCountryCode>;
  /** The `ID` of the PddpCountrySpec */
  id: Scalars['ID'];
  /** The status transition note commenting the change */
  note?: InputMaybe<Scalars['String']>;
  /** Service levels available for the merchant to use */
  serviceLevels?: InputMaybe<Array<Scalars['String']>>;
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) */
  status?: InputMaybe<ZonosPddpCountrySpecStatus>;
};

export type ZonosPddpSettings = {
  __typename?: 'PddpSettings';
  /** Timestamp of when the PddpSettings were created */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the PddpSettings */
  createdBy: Scalars['ID'];
  /** List of `CountryCode`(s) PDDP is enabled for */
  enabledCountries: Array<ZonosCountryCode>;
  /** Unique identifier for this `PddpSettings` object */
  id: Scalars['ID'];
  /** ID of the `Organization` these PddpSettings belong to */
  organization: Scalars['ID'];
  /** The PddpStatus of the PddpSettings */
  status: ZonosPddpStatus;
  /** Timestamp of when the PddpSettings were updated most recently */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who most recently updated the PddpSettings */
  updatedBy: Scalars['ID'];
};

export type ZonosPddpSettingsUpdateInput = {
  /** List of `CountryCode`(s) PDDP is enabled for */
  enabledCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The PddpStatus of the PddpSettings */
  status: ZonosPddpStatus;
};

export type ZonosPddpStatus =
  /** PDDP is enabled */
  | 'ACTIVE'
  /** PDDP is disabled */
  | 'DISABLED';

/** A PDDP submission and related information */
export type ZonosPddpSubmission = ZonosNode & {
  __typename?: 'PddpSubmission';
  /** An array of associated PDDP Amounts */
  amounts: Array<ZonosPddpAmount>;
  /** The timestamp of when the submission was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the submission */
  createdBy: Scalars['ID'];
  /** The currency being used for the submission */
  destinationCurrency: ZonosCurrencyCode;
  /** The destination postal operator, UPU Code */
  destinationPost: Scalars['String'];
  /** The ID of the submission */
  id: Scalars['ID'];
  /** The ID of the `Order` this submission is associated with */
  orderId: Scalars['ID'];
  /** The origin postal operator, UPU Code */
  originPost: Maybe<Scalars['String']>;
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier: Maybe<Scalars['String']>;
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
  /** The tracking number of the submission */
  trackingNumber: Scalars['String'];
  /** Type of PDDP */
  type: Maybe<ZonosPddpType>;
};

/** A collection of PDDP submissions and related information to aid in pagination */
export type ZonosPddpSubmissionConnection = {
  __typename?: 'PddpSubmissionConnection';
  /** A list of edges which contains the PDDP Submissions */
  edges: Array<ZonosPddpSubmissionEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of PDDP Submissions in this connection */
  totalCount: Scalars['Int'];
};

/** The required information to create a PDDP submission */
export type ZonosPddpSubmissionCreateInput = {
  /** The ID of the associated IPC Retailer, if not given Zonos' ID will be used */
  ipcRetailerId?: InputMaybe<Scalars['String']>;
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
};

/** An edge in a connection that contains a cursor and the PDDP submission */
export type ZonosPddpSubmissionEdge = {
  __typename?: 'PddpSubmissionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission */
  node: Maybe<ZonosPddpSubmission>;
};

/** Set of filters to make a query for PDDP submissions. */
export type ZonosPddpSubmissionFilter = {
  /** A date range for wen the PDDP submission was created to filter by */
  createdDate?: InputMaybe<ZonosDateTimeRange>;
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
export type ZonosPddpSubmissionLog = {
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
export type ZonosPddpSubmissionLogConnection = {
  __typename?: 'PddpSubmissionLogConnection';
  /** A list of edges which contains the PDDP Submission Logs */
  edges: Array<ZonosPddpSubmissionLogEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of PDDP Submission logs in this connection */
  totalCount: Scalars['Int'];
};

/** An edge in a connection that contains a cursor and the PDDP submission log */
export type ZonosPddpSubmissionLogEdge = {
  __typename?: 'PddpSubmissionLogEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission Log */
  node: Maybe<ZonosPddpSubmissionLog>;
};

/** Set of filters to make a query for PDDP submission logs. */
export type ZonosPddpSubmissionLogFilter = {
  /** A date range for when the PDDP submission was created to filter by */
  createdDate?: InputMaybe<ZonosDateTimeRange>;
  /** The ID of the associated `Order` */
  orderId?: InputMaybe<Scalars['String']>;
  /** The associated PDDP Submission */
  pddpSubmission?: InputMaybe<Scalars['String']>;
};

export type ZonosPddpType =
  | 'CANADA_POST'
  | 'IPC';

export type ZonosPerson = {
  __typename?: 'Person';
  companyName: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Maybe<Scalars['String']>;
  metadata: Maybe<Array<Maybe<ZonosPartyMetadata>>>;
  mode: ZonosMode;
  organization: Scalars['ID'];
  phone: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type ZonosPersonCreateInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ZonosPropertyType =
  | 'COMMERCIAL'
  | 'RESIDENTAL'
  | 'RESIDENTIAL';

export type ZonosProvidedHsCodeVisibilityStatus =
  | 'NOT_VISIBLE'
  | 'VISIBLE';

/** interface Node { id: ID! } */
export type ZonosQuery = {
  __typename?: 'Query';
  /** Returns a `Carrier` resource by ID. */
  carrier: Maybe<ZonosCarrier>;
  /** Returns a `CarrierAccount` by ID */
  carrierAccount: Maybe<ZonosCarrierAccount>;
  /** Returns all the information tied to the `Carrier` that a specified organization uses. */
  carrierAccounts: Maybe<Array<Maybe<ZonosCarrierAccount>>>;
  /** Retrieve a `CarrierBillingInvoice` by ID */
  carrierBillingInvoice: Maybe<ZonosCarrierBillingInvoice>;
  /** Retrieve a `CarrierBillingInvoiceConnection` based on a `CarrierBillingInvoiceFilter` criteria */
  carrierBillingInvoices: ZonosCarrierBillingInvoiceConnection;
  /** Returns a `Carrier` based on a `string` code. */
  carrierByCode: Maybe<ZonosCarrier>;
  /** Retrieve a `CarrierInvoiceAccountNumberMapping` by ID */
  carrierInvoiceAccountNumberMapping: Maybe<ZonosCarrierInvoiceAccountNumberMapping>;
  /** Retrieve `CarrierInvoiceAccountNumberMappingConnection`s based on a `CarrierInvoiceAccountNumberMappingFilter` criteria */
  carrierInvoiceAccountNumberMappings: ZonosCarrierInvoiceAccountNumberMappingConnection;
  /** Returns a list of `Carrier` resources by ID. */
  carriers: Maybe<Array<Maybe<ZonosCarrier>>>;
  /** Returns an `Cart` resource by ID. */
  cart: Maybe<ZonosCart>;
  /** Returns a `Carton` resource by `ID` */
  carton: Maybe<ZonosCarton>;
  /** Query for the CartonizationSettings associated with the callers organization */
  cartonizationSettings: ZonosCartonizationSettings;
  /** Returns a list of `Carton` objects that apply to a `root` */
  cartons: Maybe<Array<Maybe<ZonosCarton>>>;
  /** Returns a list of `Item` resources. */
  carts: ZonosCartConnection;
  /** Returns a `CatalogItem` by ID. */
  catalogItem: Maybe<ZonosCatalogItem>;
  /** Retrieves a catalog item delete job by its ID. */
  catalogItemDeleteJob: Maybe<ZonosDeleteJob>;
  /** Retrieves a list of catalog item delete jobs. */
  catalogItemDeleteJobs: Maybe<ZonosDeleteJobsConnection>;
  /** Retrieves a catalog item export job by its ID. */
  catalogItemExportJob: Maybe<ZonosExportJob>;
  /** Retrieves a list of catalog item export jobs. */
  catalogItemExportJobs: Maybe<ZonosExportJobConnection>;
  /** Returns a list of `CatalogItem`. */
  catalogItems: Maybe<ZonosCatalogItemConnection>;
  /** Returns a `Classification` resource by ID. */
  classification: Maybe<ZonosClassification>;
  /** Returns a list of `Classification` resources. */
  classifications: Maybe<ZonosClassificationConnection>;
  /** Returns data about what Classify supports. */
  classifySupportedData: ZonosClassifySupportedData;
  /** Query a `CollectInvoice` by its internal ID. */
  collectInvoice: Maybe<ZonosCollectInvoice>;
  /** Returns the current `CollectInvoiceFeeConfiguration` for the calling tokens `Organization` */
  collectInvoiceFeeConfiguration: Maybe<ZonosCollectInvoiceFeeConfiguration>;
  collectInvoiceSettings: Maybe<ZonosCollectInvoiceSettings>;
  /** Query for a `CollectSubmission` based on ID. */
  collectSubmission: Maybe<ZonosCollectSubmission>;
  /** Query for a list of `CollectSubmission`s based on provided filter params. */
  collectSubmissions: ZonosCollectSubmissionConnection;
  /** Query a `CollectUploadEvent` object by ID */
  collectUploadEvent: ZonosCollectUploadEvent;
  collectUploadEvents: ZonosCollectUploadEventConnection;
  /** Get the field labels for a country */
  countryFieldLabel: ZonosCountryFieldLabel;
  /** Returns a `CurrencyFormat` resource by CurrencyCode */
  currencyFormat: Maybe<ZonosCurrencyFormat>;
  /** Query for a CustomsDocument by ID */
  customsDocument: Maybe<ZonosCustomsDocument>;
  /** Query for a paginated connection of CustomsDocuments */
  customsDocuments: ZonosCustomsDocumentConnection;
  /** Query for any `CustomsDocument` objects associated with the given reference ID. */
  customsDocumentsByReferenceId: Array<ZonosCustomsDocument>;
  /** Retrieve a `CustomsSpec` by ID */
  customsSpec: Maybe<ZonosCustomsSpec>;
  /** Retrieve a list of `CustomsSpec` objects */
  customsSpecs: Maybe<ZonosCustomsSpecConnection>;
  /** Returns an `ExchangeRate` resource by ID. */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Returns a `FulfillmentCenter` object by ID. */
  fulfillmentCenter: Maybe<ZonosFulfillmentCenter>;
  /** Returns a list of `FulfillmentCenter` objects for an `Organization` */
  fulfillmentCenters: Maybe<Array<ZonosFulfillmentCenter>>;
  getPerson: Maybe<ZonosPerson>;
  /** Returns `HelloSettings` associated with the current token's `Organization` */
  helloSettings: Maybe<ZonosHelloSettings>;
  /** Returns a list of matching HsCode fragments. */
  hsCodeFragments: Array<ZonosHsCodeFragment>;
  /** Returns an `Item` resource by ID. */
  item: Maybe<ZonosItem>;
  itemRestriction: Maybe<ZonosItemRestriction>;
  itemRestrictionResult: Maybe<ZonosItemRestrictionResult>;
  itemRestrictionResults: Maybe<ZonosItemRestrictionResultConnection>;
  /** Returns a list of `Item` resources. */
  items: Maybe<ZonosItemConnection>;
  label: Maybe<ZonosLabel>;
  /** Return a list of LabelRequestLogs by labelId and/or shipmentId */
  labelRequestLogs: Maybe<ZonosLabelRequestLogConnection>;
  /** Returns the `LabelSettings` for the calling token's `Organization` */
  labelSettings: ZonosLabelSettings;
  labels: Maybe<ZonosLabelConnection>;
  /** Returns a `LandedCost` resource by `ID` */
  landedCost: Maybe<ZonosLandedCost>;
  /** Returns a list of `LandedCost` resources */
  landedCosts: Maybe<ZonosLandedCostConnection>;
  location: Maybe<ZonosLocation>;
  order: Maybe<ZonosOrder>;
  /** Finds all items for an `Order` that are shipped and not yet shipped. */
  orderFulfillmentProgress: ZonosOrderFulfillmentProgressResult;
  orders: Maybe<ZonosOrderConnection>;
  /** Returns a `PackagingOption` resource by `ID` */
  packagingOption: Maybe<ZonosPackagingOption>;
  /**
   * Deprecated method to return a list of `PackagingOption` objects that apply to an `organization`, use packagingOptionsConnection instead
   * @deprecated use packagingOptionsConnection instead
   */
  packagingOptions: Maybe<Array<Maybe<ZonosPackagingOption>>>;
  /** Returns a list of `PackagingOption` objects that apply to an `organization` */
  packagingOptionsConnection: Maybe<ZonosPackagingOptionConnection>;
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  partiesFindAllById: Maybe<Array<Maybe<ZonosParty>>>;
  party: Maybe<ZonosParty>;
  partyScreening: Maybe<ZonosPartyScreening>;
  partyScreenings: Maybe<ZonosPartyScreeningConnection>;
  /** Retrieve a `PddpCountrySpec` by ID */
  pddpCountrySpec: Maybe<ZonosPddpCountrySpec>;
  /** Retrieve a list of `PddpCountrySpec` objects */
  pddpCountrySpecs: Maybe<ZonosPddpCountrySpecConnection>;
  /** Returns the `PddpSettings` for the calling token's `Organization` */
  pddpSettings: ZonosPddpSettings;
  /** Return a PDDP submission by an ID. */
  pddpSubmission: Maybe<ZonosPddpSubmission>;
  /** Return a PDDP submission log by an ID. */
  pddpSubmissionLog: Maybe<ZonosPddpSubmissionLog>;
  /** Returns a paginated list of PDDP submissions logs. */
  pddpSubmissionLogs: Maybe<ZonosPddpSubmissionLogConnection>;
  /** Returns a paginated list of PDDP submissions. */
  pddpSubmissions: Maybe<ZonosPddpSubmissionConnection>;
  /** Query for a `Reconciliation` by ID */
  reconciliation: Maybe<ZonosReconciliation>;
  /** Returns a `ServiceLevel` resource by ID. */
  serviceLevel: Maybe<ZonosServiceLevel>;
  /** Returns a `ServiceLevelArea` resource by ID. */
  serviceLevelArea: Maybe<ZonosServiceLevelArea>;
  /** Retreive the ServiceLevelAreas for a giving ServiceLevel optionally filtering by a destination location */
  serviceLevelAreas: Maybe<Array<Maybe<ZonosServiceLevelArea>>>;
  /** Returns a `ServiceLevelRateChart` by ID. */
  serviceLevelRateChart: Maybe<ZonosServiceLevelRateChart>;
  /** Returns a list of `ServiceLevelRateChart` objects that apply to a `ServiceLevel` */
  serviceLevelRateCharts: Maybe<Array<Maybe<ZonosServiceLevelRateChart>>>;
  /** Returns a list of `ServiceLevel` resources for an organization. */
  serviceLevels: Maybe<Array<Maybe<ZonosServiceLevel>>>;
  shipment: Maybe<ZonosShipment>;
  /** Query for a `ShipmentConsolidation` by ID */
  shipmentConsolidation: Maybe<ZonosShipmentConsolidation>;
  /** Query for a paginated connection of `ShipmentConsolidation` objects */
  shipmentConsolidations: Maybe<ZonosShipmentConsolidationConnection>;
  /** Returns a `ShipmentRating` resource by ID. */
  shipmentRating: Maybe<ZonosShipmentRating>;
  /** Returns a `ShipmentRatingConnection` resource with the given filters and pagination parameters. */
  shipmentRatings: ZonosShipmentRatingConnection;
  shipments: Maybe<ZonosShipmentConnection>;
  /** Returns a `ShippingProfile` by ID. */
  shippingProfile: Maybe<ZonosShippingProfile>;
  /** Returns a `ShippingProfileRateChart` by ID */
  shippingProfileRateChart: Maybe<ZonosShippingProfileRateChart>;
  /** Returns a list of `ShippingProfileRateChart` objects that apply to a `ShippingProfile` */
  shippingProfileRateCharts: Maybe<Array<Maybe<ZonosShippingProfileRateChart>>>;
  /** Returns a list of `ShippingProfile` objects that apply to an `Organization`. */
  shippingProfiles: Maybe<Array<Maybe<ZonosShippingProfile>>>;
  /** Returns a Shipping Store Settings resource by store id. */
  shippingStoreSettings: Maybe<ZonosShippingStoreSettings>;
  /** Returns a `ShippingZone` resource by ID. */
  shippingZone: Maybe<ZonosShippingZone>;
  /** Returns a list of `ShippingZone` resources for an organization. */
  shippingZones: Maybe<Array<Maybe<ZonosShippingZone>>>;
  taxIds: Maybe<Array<Maybe<ZonosTaxId>>>;
  /** Returns a `Webhook` resource by `ID`. */
  webhook: Maybe<ZonosWebhook>;
  /** Returns a `WebhookLog` resource by `ID`. */
  webhookLog: Maybe<ZonosWebhookLog>;
  /** Returns a list of `WebhookLog` resources. */
  webhookLogs: ZonosWebhookLogConnection;
  /** Returns a list of `Webhook` resources. */
  webhooks: ZonosWebhookConnection;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierAccountArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierAccountsArgs = {
  filter: InputMaybe<ZonosCarrierAccountsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierBillingInvoiceArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierBillingInvoicesArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCarrierBillingInvoiceFilter>;
  first: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierByCodeArgs = {
  code: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierInvoiceAccountNumberMappingArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierInvoiceAccountNumberMappingsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCarrierInvoiceAccountNumberMappingFilter>;
  first?: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarriersArgs = {
  filter: InputMaybe<ZonosCarriersFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCartArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCartonArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCartonsArgs = {
  filter: InputMaybe<ZonosCartonsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCartsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemArgs = {
  id: InputMaybe<Scalars['ID']>;
  productId: InputMaybe<Scalars['String']>;
  sku: InputMaybe<Scalars['String']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemDeleteJobArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemDeleteJobsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosDeleteJobsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemExportJobArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemExportJobsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosExportJobsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCatalogItemFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryClassificationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosClassificationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectInvoiceArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectSubmissionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectSubmissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCollectSubmissionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectUploadEventArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectUploadEventsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCollectUploadEventFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCountryFieldLabelArgs = {
  countryCode: ZonosCountryCode;
};


/** interface Node { id: ID! } */
export type ZonosQueryCurrencyFormatArgs = {
  input: ZonosCurrencyCode;
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsDocumentArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsDocumentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCustomsDocumentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsDocumentsByReferenceIdArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsSpecArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsSpecsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCustomsSpecFilter>;
  first: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryExchangeRateArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryFulfillmentCenterArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryFulfillmentCentersArgs = {
  filter: InputMaybe<ZonosFulfillmentCenterFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryGetPersonArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryHsCodeFragmentsArgs = {
  filter: ZonosHsCodeFragmentsFilter;
};


/** interface Node { id: ID! } */
export type ZonosQueryItemArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryItemRestrictionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryItemRestrictionResultArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryItemRestrictionResultsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryLabelArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryLabelRequestLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosLabelRequestLogFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryLabelsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosLabelFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryLandedCostArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryLandedCostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosLandedCostFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryLocationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryOrderArgs = {
  orderId: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryOrderFulfillmentProgressArgs = {
  orderId: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryOrdersArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosOrdersFilter>;
  first: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPackagingOptionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPackagingOptionsArgs = {
  filter: InputMaybe<ZonosPackagingOptionsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPackagingOptionsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPackagingOptionsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPartiesArgs = {
  input: InputMaybe<ZonosPartyFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPartiesFindAllByIdArgs = {
  input: Array<Scalars['ID']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPartyArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPartyScreeningArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPartyScreeningsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPartyScreeningFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpCountrySpecArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpCountrySpecsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionLogArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPddpSubmissionLogFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPddpSubmissionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryReconciliationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelAreaArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelAreasArgs = {
  filter: InputMaybe<ZonosServiceLevelAreasFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelRateChartArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelRateChartsArgs = {
  filter: InputMaybe<ZonosServiceLevelRateChartsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelsArgs = {
  carrier: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosServiceLevelFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentConsolidationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentConsolidationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosShipmentConsolidationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentRatingArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentRatingsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosShipmentRatingFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosShipmentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingProfileArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingProfileRateChartArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingProfileRateChartsArgs = {
  filter: InputMaybe<ZonosShippingProfileRateChartsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingProfilesArgs = {
  filter: InputMaybe<ZonosShippingProfilesFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingStoreSettingsArgs = {
  storeId: Scalars['Int'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingZoneArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingZonesArgs = {
  filter: InputMaybe<ZonosShippingZonesFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryTaxIdsArgs = {
  filter: InputMaybe<ZonosTaxIdFilterInput>;
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhookArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhookLogArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhookLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosWebhookLogsFilterInput>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhooksArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosWebhooksFilterInput>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type ZonosQueueDataMigrationInput = {
  /** The area of data to migrate, such as Shipping or Catalog. If no value is provided, all areas will be queued. */
  dataArea?: InputMaybe<Scalars['String']>;
  /** The 'storeId' to be migrated. */
  storeId: Scalars['Int'];
};

export type ZonosReconciliation = {
  __typename?: 'Reconciliation';
  /** List of `ReconciliationCharge` objects associated with this Reconciliation */
  charges: Array<ZonosReconciliationCharge>;
  /** Date and time of when this `Reconciliation` object was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this `Reconciliation` */
  createdBy: Scalars['ID'];
  /** The ID of this Reconciliation object */
  id: Scalars['ID'];
  /** Optional note about this `Reconciliation` object */
  note: Maybe<Scalars['String']>;
};

export type ZonosReconciliationCharge = {
  /** The amount of the `ReconciliationCharge` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `StripeSubscriptionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for this `ReconciliationCharge` */
  id: Scalars['ID'];
  /** An optional note about this `ReconciliationCharge` */
  note: Maybe<Scalars['String']>;
};

export type ZonosRemittance = {
  __typename?: 'Remittance';
  amount: Scalars['Decimal'];
  description: Scalars['String'];
  note: Scalars['String'];
};

/** A `RestrictedItem represent an item that has been restricted. 3 ways an item can be restricted: via catalog's restricted countries, a rule, or itemRestriction API. */
export type ZonosRestrictedItem = {
  __typename?: 'RestrictedItem';
  /** The action taken on the restricted item. */
  action: ZonosRestrictedItemAction;
  /** `CatalogItem` if the restriction was due to catalog */
  catalogItem: Maybe<ZonosCatalogItem>;
  /** `RestrictedItem` ID, prefixed with `restricted_item_`. */
  id: Scalars['ID'];
  /** `Item` that was restricted. */
  item: ZonosItem;
  /** `itemRestrictions` if the restriction was due to restricted item result */
  itemRestrictions: Maybe<ZonosItemRestrictionResult>;
  /** the reason this item was restricted */
  reason: Scalars['String'];
  /** `Rule` if the restriction was due to a rule */
  rule: Maybe<ZonosRule>;
};

export type ZonosRestrictedItemAction =
  /** Block the item from being included in the landed cost calculations. */
  | 'BLOCK'
  /** Block all items from being included in the landed cost calculations. */
  | 'BLOCK_ALL'
  /** Warn the user that the item is restricted. keep the item included in the landed cost calculations. */
  | 'WARN';

export type ZonosResult =
  | 'FAILURE'
  | 'SUCCESS';

export type ZonosResultMessage = {
  __typename?: 'ResultMessage';
  message: Maybe<Scalars['String']>;
  result: ZonosResult;
};

/** A `Root` serves as a wrapper for various resources, such as `LandedCost` and `ShipmentRating` */
export type ZonosRoot = {
  __typename?: 'Root';
  cartons: Maybe<Array<Maybe<ZonosCarton>>>;
  exchangeRates: Array<ZonosExchangeRate>;
  /** A unique identifier for the Root. */
  id: Scalars['ID'];
  items: Maybe<Array<Maybe<ZonosItem>>>;
  landedCosts: Maybe<Array<Maybe<ZonosLandedCost>>>;
  /** The `Order` placed between the root `parties`. */
  order: Maybe<ZonosOrder>;
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  restrictedItems: Maybe<Array<Maybe<ZonosRestrictedItem>>>;
  shipment: Maybe<ZonosShipment>;
  shipmentRatings: Maybe<Array<Maybe<ZonosShipmentRating>>>;
};

/** Root Connection */
export type ZonosRootConnection = {
  __typename?: 'RootConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosRootEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** Root Edge */
export type ZonosRootEdge = {
  __typename?: 'RootEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosRoot>;
};

export type ZonosRootsFilter = {
  /** Return `LandedCost` resources created after a given date */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Return `LandedCost` resources created before a given date */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
};

export type ZonosRoundingMethod =
  | 'CUSTOM'
  | 'HUNDREDTH'
  | 'NONE'
  | 'TENTH'
  | 'THOUSANDTH'
  | 'WHOLE';

export type ZonosRule = {
  __typename?: 'Rule';
  id: Scalars['ID'];
};

export type ZonosScreenExistingPartyInput = {
  partyId: Scalars['ID'];
};

export type ZonosScreenPartyInput = {
  location?: InputMaybe<ZonosDeniedPartyLocationInput>;
  person?: InputMaybe<ZonosDeniedPartyPersonInput>;
};

/** The screening scores for the party screening. */
export type ZonosScreeningScores = {
  __typename?: 'ScreeningScores';
  /** The score for the party screening's location. */
  location: Maybe<Scalars['Decimal']>;
  /** The score for the party screening's name. */
  name: Maybe<Scalars['Decimal']>;
  /** The overall score for the party screening's name and location combined. */
  overall: Maybe<Scalars['Decimal']>;
};

/** A `ServiceLevel` is a predefined service provided by a `Carrier` to a given country or region. `ServiceLevel` will impact time in transit and the associated shipment rating. `ServiceLevel` eligibility may be impacted by product attributes, such as value and dimensions. */
export type ZonosServiceLevel = {
  __typename?: 'ServiceLevel';
  /** Enumerated value that specifies whether a ServiceLevel is available to all customers or is specifically contracted */
  availability: ZonosServiceLevelAvailability;
  /** The `Carrier` associated with ServiceLevel. */
  carrier: ZonosCarrier;
  /** The code for the ServiceLevel as defined by the external carrier API */
  carrierApiCode: Scalars['String'];
  /** The code used to generate labels for this ServiceLevel defined by the external carrier API. */
  carrierLabelApiCode: Maybe<Scalars['String']>;
  /** The enumerated value of ServiceLevel options that can be sent in the API. */
  code: Scalars['String'];
  /** The list of restrictions that exist around countries, weights, dims, and prices for a ServiceLevel. */
  countryConstraints: Maybe<Array<ZonosCountryConstraint>>;
  /** When this `serviceLevel` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevel. */
  createdBy: Scalars['ID'];
  /** The method of delivery that indicates how the clearance is processed with this ServiceLevel. */
  deliveryType: Maybe<ZonosDeliveryType>;
  /** A unique identifier for the ServiceLevel. */
  id: Scalars['ID'];
  /** The ServiceLevel display name as prescribed by the `Carrier`. */
  name: Scalars['String'];
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  /** Transit Time breakdown that applies to the ServiceLevel. */
  transitTime: Maybe<ZonosTransitTime>;
  /** When this ServiceLevel was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevel. */
  updatedBy: Scalars['ID'];
};

/** A `serviceLevelArea` object is a grouping of countries, regions, or zip codes that can be associated with a `serviceLevel`. Usage of this will only happen in conjunction with rate charts. */
export type ZonosServiceLevelArea = {
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
  mode: ZonosMode;
  /** The humanly-memorable display name for the ServiceLevelArea. */
  name: Scalars['String'];
  /** Regular expression of postal codes that apply to the area. */
  postalCodePattern: Maybe<Scalars['String']>;
  /** The `ServiceLevel` that the area is being used for. */
  serviceLevel: ZonosServiceLevel;
  /** When the ServiceLevelArea was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelArea. */
  updatedBy: Scalars['ID'];
};

/** Filter the areas that apply to a service level down to a single country, administrative area and postal code */
export type ZonosServiceLevelAreasFilter = {
  /** A single administrative area code if one applies to this location */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The country code for the location */
  countryCode?: InputMaybe<ZonosCountryCode>;
  /** A single postal code if one applies to the location */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The ID of the `ServiceLevel` */
  serviceLevel: Scalars['ID'];
};

export type ZonosServiceLevelAvailability =
  | 'CONTRACTED'
  | 'DISABLED'
  | 'GENERAL';

/** ServiceLevel Connection */
export type ZonosServiceLevelConnection = {
  __typename?: 'ServiceLevelConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosServiceLevelEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** ServiceLevel Edge */
export type ZonosServiceLevelEdge = {
  __typename?: 'ServiceLevelEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosServiceLevel>;
};

export type ZonosServiceLevelFilter = {
  /** The carrier the service level belongs to. */
  carrier?: InputMaybe<Scalars['String']>;
  /** The Zonos specific human readable service level code */
  code?: InputMaybe<Scalars['String']>;
};

/** A ServiceLevelRateChart would apply to a specific service level. The ServiceLevelRateChart would be used before a external carrier API. */
export type ZonosServiceLevelRateChart = {
  __typename?: 'ServiceLevelRateChart';
  /** When this ServiceLevelRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevelRateChart. */
  createdBy: Scalars['ID'];
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<ZonosCountryCode>;
  /** A unique identifier for the ServiceLevelRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ServiceLevelRateChart. */
  locations: Maybe<Array<ZonosShippingRateLocation>>;
  /** Specifies whether the ServiceLevelRateChart is in live or test mode. */
  mode: ZonosMode;
  /** The specific rate values that apply to the given ServiceLevelRateChart. */
  rates: Array<ZonosShippingRate>;
  /** The `ServiceLevel` associated with the ServiceLevelRateChart. */
  serviceLevel: ZonosServiceLevel;
  /** When this ServiceLevelRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelRateChart. */
  updatedBy: Scalars['ID'];
};

export type ZonosServiceLevelRateChartsFilter = {
  /** The ID of the `ServiceLevel`. */
  serviceLevel: Scalars['ID'];
};

export type ZonosShipment = ZonosNode & {
  __typename?: 'Shipment';
  /** The date and time this Shipment was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Shipment */
  createdBy: Scalars['ID'];
  customsDocuments: Array<ZonosCustomsDocument>;
  customsSpec: Maybe<ZonosCustomsSpec>;
  /** The declared value (insurance) of the shipment */
  declaredValue: Maybe<Scalars['Decimal']>;
  /** Exemption code for shipments requiring an ITN */
  exemption: Maybe<Scalars['String']>;
  /** The `FulfillmentCenter` that was used to fulfill the Shipment. */
  fulfillmentCenter: Maybe<ZonosFulfillmentCenter>;
  /** A unique identifier for the shipment */
  id: Scalars['ID'];
  /** ITN that was applied on the label request */
  itnNumber: Maybe<Scalars['String']>;
  /** The `Order` associated with this Shipment */
  order: Maybe<ZonosOrder>;
  /** All of the `Party`s involved with this Shipment */
  parties: Array<ZonosParty>;
  pddpSubmission: Maybe<ZonosPddpSubmission>;
  /** The `ServiceLevel` utilized by the `Carrier` for this Shipment */
  serviceLevel: ZonosServiceLevel;
  /** A list of `ShipmentCarton`s related to this Shipment */
  shipmentCartons: Array<ZonosShipmentCarton>;
  /** The `ShipmentConsolidation` this Shipment belongs to */
  shipmentConsolidation: Maybe<ZonosShipmentConsolidation>;
  /** The scheduled shipment date for this `Shipment` */
  shipmentDate: Maybe<Scalars['DateTime']>;
  /** Indicates whether the Shipment is international or domestic */
  shipmentType: ZonosShipmentType;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices: Maybe<Array<ZonosShipmentSpecialService>>;
  /** The status of the shipment */
  status: ZonosShipmentStatusType;
  /** A list of statuses of the shipment */
  statusTransitions: Array<ZonosShipmentStatusTransition>;
  /**
   * An optional master tracking
   * @deprecated Use `trackingDetails` field instead.
   */
  tracking: Maybe<ZonosTracking>;
  /** All tracking details associated with this Shipment */
  trackingDetails: Array<ZonosTracking>;
};

export type ZonosShipmentAmountType =
  | 'BUFFER'
  | 'DISCOUNT'
  | 'FUEL_SURCHARGE'
  | 'INSURANCE'
  | 'PUBLISHED_RATE'
  | 'SURCHARGE';

export type ZonosShipmentBulkCreateError = {
  __typename?: 'ShipmentBulkCreateError';
  /** Name of the `Carrier` that threw the error during label creation. Will be null if error did not occur during label processing. */
  carrierName: Maybe<Scalars['String']>;
  /** Error message that was returned during Shipment or Label processing. */
  errorMessage: Maybe<Scalars['String']>;
  /** ID of the `Order` that threw the error during Shipment or Label processing. */
  orderId: Scalars['ID'];
};

export type ZonosShipmentBulkCreateInput = {
  /** A list of IDs or accountOrderNumber(s) associated with the `Order`(s) to create `Shipment`(s) and `Label`(s) for. Maximum size of 50. */
  orderReferenceIds: Array<Scalars['ID']>;
};

export type ZonosShipmentBulkCreateResult = ZonosShipment | ZonosShipmentBulkCreateError;

export type ZonosShipmentCarton = ZonosNode & {
  __typename?: 'ShipmentCarton';
  /** Details for a package containing alcohol. */
  alcoholRecipientType: Maybe<ZonosAlcoholRecipientType>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail: Maybe<ZonosBatteryDetail>;
  /** The `Carton` related to this ShipmentCarton */
  carton: ZonosCarton;
  /** A unique identifier for this ShipmentCarton */
  id: Scalars['ID'];
  label: Maybe<ZonosLabel>;
  /** Signature option type to apply at the package level. */
  signatureOptionType: Maybe<ZonosSignatureOptionType>;
  /** A list of `ShipmentCartonSpecialService`s that apply to this `ShipmentCarton` */
  specialServices: Maybe<Array<ZonosShipmentCartonSpecialService>>;
  /** The `Tracking` related to this ShipmentCarton */
  tracking: Maybe<ZonosTracking>;
};

export type ZonosShipmentCartonInput = {
  /** The measurement units of the height, length and width for the `ShipmentCarton`'s `Carton` */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `ShipmentCarton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The list of `Item`s included in this `ShipmentCarton` */
  items: Array<ZonosShipmentCartonItemInput>;
  /** The numeric length of the `ShipmentCarton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** Input field including details for all special services required at the package level */
  specialServiceDetails?: InputMaybe<ZonosShipmentCartonSpecialServiceDetailInput>;
  /** The tracking number for this specific Carton, if different than the tracking number for the entire `Shipment` */
  trackingNumber?: InputMaybe<Scalars['String']>;
  /** The weight of the `ShipmentCarton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShipmentCarton`. */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `ShipmentCarton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosShipmentCartonItemInput = {
  /** The country of origin for the `Item` in this `ShipmentCarton` */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The HS code for the `Item` in this `ShipmentCarton` */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The reference to the item included in this `ShipmentCarton`: SKU, Product ID, or `Item` ID */
  itemReference: Scalars['String'];
  /** The name of the `Item` in this `ShipmentCarton` */
  labelName?: InputMaybe<Scalars['String']>;
  /** The quantity of the `Item` in this `ShipmentCarton` */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ZonosShipmentCartonSpecialService =
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

export type ZonosShipmentCartonSpecialServiceDetailInput = {
  /** Details for a package containing alcohol. Required if ALCOHOL is present in `serviceTypes`. */
  alcoholRecipientType?: InputMaybe<ZonosAlcoholRecipientType>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail?: InputMaybe<ZonosBatteryDetailInput>;
  /** List of `ShipmentCartonSpecialService` options to apply at the package level. */
  serviceTypes?: InputMaybe<Array<ZonosShipmentCartonSpecialService>>;
  /** Signature option type to apply at the package level. Required if SIGNATURE_OPTION is present in `serviceTypes`. */
  signatureOptionType?: InputMaybe<ZonosSignatureOptionType>;
};

export type ZonosShipmentConnection = {
  __typename?: 'ShipmentConnection';
  edges: Maybe<Array<Maybe<ZonosShipmentEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

/** ShipmentConsolidation is used to consolidate shipments to send to a carrier. For UPS, this would facilitate the Worldwide Economy master carton functionality. */
export type ZonosShipmentConsolidation = {
  __typename?: 'ShipmentConsolidation';
  /** Timestamp of when this ShipmentConsolidation was initially created. */
  createdAt: Scalars['DateTime'];
  /** ID of the batch that was created by the carrier. For UPS, this would be the Master Carton ID. */
  externalId: Scalars['String'];
  /** Unique identifier for the ShipmentConsolidation. */
  id: Scalars['ID'];
  /** `Shipment`(s) associated with this ShipmentConsolidation. */
  shipments: Array<ZonosShipment>;
  /** Indicates if this ShipmentConsolidation is open or closed. */
  status: ZonosShipmentConsolidationStatus;
  /** List of `ShipmentConsolidationStatusTransition` to show a history of status changes. */
  statusTransitions: Array<ZonosShipmentConsolidationStatusTransition>;
};

export type ZonosShipmentConsolidationConnection = {
  __typename?: 'ShipmentConsolidationConnection';
  /** A list of `ShipmentConsolidationEdge` objects. */
  edges: Array<ZonosShipmentConsolidationEdge>;
  /** Pagination info for the connection object. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total count of `ShipmentConsolidation` objects that match the given filter criteria. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosShipmentConsolidationCreateInput = {
  /** Batch ID provided by the carrier. For UPS, this would be the Master Carton ID. */
  externalId: Scalars['String'];
  /** Initial `Shipment` ID to start the `ShipmentConsolidation`. */
  shipmentId: Scalars['ID'];
};

export type ZonosShipmentConsolidationEdge = {
  __typename?: 'ShipmentConsolidationEdge';
  /** String cursor pointing to this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The `ShipmentConsolidation` associated with this edge. */
  node: ZonosShipmentConsolidation;
};

export type ZonosShipmentConsolidationFilter = {
  /** Filter by when the `ShipmentConsolidation` was created. */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** ID of a `Shipment` that is part of the ShipmentConsolidation */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** Filter by the status of the `ShipmentConsolidation`. */
  status?: InputMaybe<ZonosShipmentConsolidationStatus>;
};

export type ZonosShipmentConsolidationStatus =
  | 'CLOSED'
  | 'OPEN';

export type ZonosShipmentConsolidationStatusTransition = {
  __typename?: 'ShipmentConsolidationStatusTransition';
  /** Timestamp of when this status changed occurred. */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change. */
  note: Maybe<Scalars['String']>;
  /** Status of this `ShipmentConsolidation`. */
  status: ZonosShipmentConsolidationStatus;
};

export type ZonosShipmentConsolidationUpdateInput = {
  /** ID of the `ShipmentConsolidation` to update. */
  id: Scalars['ID'];
  /** ID of the `Shipment` to add to the `ShipmentConsolidation`. If `status` is provided in the input, `shipmentId` will be added to the consolidation, and then the desired status will be set. */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** Desired status for the `ShipmentConsolidation`. Should be null unless the consolidation should be closed. */
  status?: InputMaybe<ZonosShipmentConsolidationStatus>;
};

export type ZonosShipmentCreateInput = {
  /** The declared value (insurance) of the shipment */
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** A flag to say if a `CustomSpec` should be generated from this Shipment */
  generateCustoms: Scalars['Boolean'];
  /** A flag to say if a `Label` should be generated from this Shipment */
  generateLabel: Scalars['Boolean'];
  /** ITN to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** The optional label specifications for the `Label` to be generated */
  labelSpec?: InputMaybe<ZonosLabelSpecInput>;
  /** The ID or accountOrderNumber of the `Order` this Shipment belongs to */
  orderId: Scalars['ID'];
  /** The list of `Party`s related to this Shipment, if different than all the parties on the `Order` */
  parties?: InputMaybe<Array<Scalars['ID']>>;
  /** The `ServiceLevel` code or id that the shipment is shipping with, if different that the service level on the `Order` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** A list of details about the `ShipmentCarton`s for this Shipment, if the items and packaging options are different than those on the `Order` */
  shipmentCartons?: InputMaybe<Array<ZonosShipmentCartonInput>>;
  /** ID of the `ShipmentConsolidation` this Shipment will belong to */
  shipmentConsolidationId?: InputMaybe<Scalars['ID']>;
  /** A specified date for a future shipment */
  shipmentDate?: InputMaybe<Scalars['DateTime']>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices?: InputMaybe<Array<ZonosShipmentSpecialService>>;
  /** The optional tracking number related to the shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosShipmentCreateWorkflowInput = {
  /** The declared value (insurance) of the shipment */
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** Optional ID of the `FulfillmentCenter` this Shipment is being fulfilled from. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** Boolean value to indicate if a `CustomSpec` should be generated from this `Shipment` */
  generateCustoms?: InputMaybe<Scalars['Boolean']>;
  /** Boolean value to indicate if a `Label` should be generated for the `ShipmentCarton`(s) in this `Shipment` */
  generateLabel?: InputMaybe<Scalars['Boolean']>;
  /** ITN to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** The optional label specifications for the `Label` to be generated */
  labelSpec?: InputMaybe<ZonosLabelSpecInput>;
  /** ID or accountOrderNumber of the `Order` this Shipment will belong to. Required if no `Party` or `Carton` objects are present. */
  orderId?: InputMaybe<Scalars['ID']>;
  /** ID or `code` of the `ServiceLevel` to be used for this Shipment. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** Special service details to apply at the ShipmentCarton level */
  shipmentCartonSpecialServices?: InputMaybe<ZonosShipmentCartonSpecialServiceDetailInput>;
  /** Optional field to specify `ShipmentCarton` objects associated with the Shipment. */
  shipmentCartons?: InputMaybe<Array<ZonosShipmentCartonInput>>;
  /** ID of the `ShipmentConsolidation` this Shipment will belong to */
  shipmentConsolidationId?: InputMaybe<Scalars['ID']>;
  /** A specified date for a future shipment */
  shipmentDate?: InputMaybe<Scalars['DateTime']>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices?: InputMaybe<Array<ZonosShipmentSpecialService>>;
  /** Tracking numbers associated with this Shipment */
  trackingNumbers?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosShipmentEdge = {
  __typename?: 'ShipmentEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosShipment>;
};

export type ZonosShipmentFilter = {
  /** The ID of the `Order` this Shipment belongs to */
  orderId?: InputMaybe<Scalars['ID']>;
  /** A `ServiceLevel` ID that is used for a Shipment */
  serviceLevelId?: InputMaybe<Scalars['String']>;
  /** A date range to filter Shipment objects by their ship date */
  shipDate?: InputMaybe<ZonosDateTimeRange>;
  /** The type of Shipment */
  shipmentType?: InputMaybe<ZonosShipmentType>;
  /** The tracking number associated with the Shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** A Shipment rating quote that can be displayed. */
export type ZonosShipmentRating = {
  __typename?: 'ShipmentRating';
  /** The quoted amount for the ShipmentRating. */
  amount: Scalars['Decimal'];
  /** Subtotal amounts of how the ShipmentRating amount was calculated. */
  amountSubtotals: ZonosShipmentRatingSubtotals;
  /** When this ShipmentRating was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShipmentRating */
  createdBy: Scalars['ID'];
  /** The currency this ShipmentRating price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Breakdown of the details returned from the carrier. */
  details: Maybe<Array<ZonosShipmentRatingDetail>>;
  /** The customer facing display name of the ShipmentRating. */
  displayName: Scalars['String'];
  /** A unique identifier for the ShipmentRating. */
  id: Scalars['ID'];
  /** The ISO-8601 timestamp of when the delivery will be delivered */
  maxTransitAt: Maybe<Scalars['DateTime']>;
  /** The ISO-8601 timestamp of when the delivery could first be delivered */
  minTransitAt: Maybe<Scalars['DateTime']>;
  /** For shipments that contain multiple fulfillment warehouses the multipleShipFromRatings will contain the individual `ShipmentRating` calculations. The aggregated totals will be reflected on the parent object. In these cases the shipFrom location will be null. */
  multipleShipFromRatings: Maybe<Array<Maybe<ZonosShipmentRating>>>;
  /** The `Organization` associated with the ShipmentRating */
  organization: Scalars['ID'];
  /** The `ServiceLevel` code associated with the ShipmentRating. */
  serviceLevelCode: Scalars['String'];
  /** The `Location` associated with the origin of the shipment. */
  shipFrom: Maybe<ZonosLocation>;
  /** Specifies the `Carton`'s destination. */
  shipTo: Maybe<ZonosLocation>;
  /** The `Carton` data included in the ShipmentRating. */
  shipmentRatingCartons: Array<ZonosShipmentRatingCarton>;
  /** The `ShippingProfile` associated with the ShipmentRating. */
  shippingProfile: Maybe<ZonosShippingProfile>;
  /** When this ShipmentRating was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShipmentRating. */
  updatedBy: Scalars['ID'];
};

export type ZonosShipmentRatingBatteryDetail = {
  /** Indicates what material the battery is composed of */
  materialType: ZonosShipmentRatingBatteryMaterialType;
  /** Indicates how the battery is packaged within the shipment */
  packingType: ZonosShipmentRatingBatteryPackingType;
};

export type ZonosShipmentRatingBatteryMaterialType =
  /** Indicates battery is a lithium ion battery */
  | 'LITHIUM_ION'
  /** Indicates battery is a lithium metal battery */
  | 'LITHIUM_METAL';

export type ZonosShipmentRatingBatteryPackingType =
  /** Battery is contained inside an item in the package */
  | 'BATTERY_INSIDE_EQUIPMENT'
  /** The package only contains a battery/batteries. */
  | 'BATTERY_ONLY'
  /** Battery is packaged with the equipment and not contained in the item */
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT';

export type ZonosShipmentRatingCalculateQuoterWorkflowInput = {
  /** Container for special service details to apply to the `ShipmentRating` */
  specialServiceDetail?: InputMaybe<ZonosShipmentRatingSpecialServiceDetail>;
};

export type ZonosShipmentRatingCalculateWorkflowInput = {
  /** Specifies what profiles to be used for rating. ZONE is the default and will only return rates for profiles in the corresponding `ShippingZone` */
  rateType?: InputMaybe<ZonosShipmentRatingRateType>;
  /** Container for special service details to apply to the `ShipmentRating` */
  specialServiceDetail?: InputMaybe<ZonosShipmentRatingSpecialServiceDetail>;
};

/** The Carton details containing the package dimensions and items included in the `ShipmentRating` */
export type ZonosShipmentRatingCarton = {
  __typename?: 'ShipmentRatingCarton';
  /** The monetary amount to insure a `Carton` for to account for unexpected incidents. */
  amountInsured: Scalars['Decimal'];
  /** The `Carton` associated with the ShipmentRatingCarton */
  carton: ZonosCarton;
  /** The weight the carrier is charging for this carton. This could be actual or dimensional weight of the carton. */
  chargeableWeight: Maybe<Scalars['Decimal']>;
  /** The `dimensionalWeight` factor used to determine the `dimensionalWeight`. */
  dimensionalFactor: Maybe<Scalars['Int']>;
  /** The calculated `dimensionalWeight` of the carton. */
  dimensionalWeight: Maybe<Scalars['Decimal']>;
};

export type ZonosShipmentRatingConnection = {
  __typename?: 'ShipmentRatingConnection';
  /** A list of edges containing `ShipmentRatingEdge` objects of the current page in the connection */
  edges: Array<ZonosShipmentRatingEdge>;
  /** `PageInfo` for the current pagination connection */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of objects that apply to the given filters */
  totalCount: Maybe<Scalars['Int']>;
};

/** Input to create a non-calculated shipmentRating. */
export type ZonosShipmentRatingCreateWorkflowInput = {
  /** The amount for the `ShipmentRating`. */
  amount: Scalars['Decimal'];
  /** The currency this `ShipmentRating` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The customer facing display name of the `ShipmentRating`. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The `ServiceLevel` code associated with the `ShipmentRating`. */
  serviceLevelCode: Scalars['String'];
};

/** A surcharge or discount breakdown provided by the carrier. */
export type ZonosShipmentRatingDetail = {
  __typename?: 'ShipmentRatingDetail';
  /** Amount for each charge as defined by the `Carrier`. */
  amount: Scalars['Decimal'];
  /** Unique identifier that will be tied to each fee that is charged by the carrier for the `ShipmentRating`. */
  carrierCode: Scalars['String'];
  /** The type of fee that is being broken down as part of the `ShipmentRating`. */
  type: ZonosShipmentAmountType;
};

export type ZonosShipmentRatingEdge = {
  __typename?: 'ShipmentRatingEdge';
  /** A cursor pointing to this `ShipmentRating` in the current connection */
  cursor: Scalars['String'];
  /** The `ShipmentRating` object */
  node: ZonosShipmentRating;
};

export type ZonosShipmentRatingFilter = {
  /** A range of DateTime to filter by the createdAt field */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** A two-letter ISO country code */
  destinationCountry?: InputMaybe<ZonosCountryCode>;
  /** A two-letter ISO country code */
  originCountry?: InputMaybe<ZonosCountryCode>;
  /** The ID of the `ServiceLevel` the `ShipmentRating` was calculated from */
  serviceLevel?: InputMaybe<Scalars['ID']>;
};

export type ZonosShipmentRatingRateType =
  /** Will return rates for all profiles, regardless of `ShippingZone` association that are associated with valid service levels. */
  | 'LABEL_ENABLED'
  /** Will only return rates for profiles in the `ShippingZone` for the origin and destination locations. */
  | 'ZONE';

export type ZonosShipmentRatingSignatureOptionType =
  /** An adult signature is required */
  | 'ADULT'
  /** Signature requirement based on the service level default */
  | 'DEFAULT'
  /** Direct signature required */
  | 'DIRECT'
  /** Indirect signature required */
  | 'INDIRECT';

export type ZonosShipmentRatingSpecialServiceDetail = {
  /** Detail input required when BATTERY is present in `serviceTypes` */
  batteryDetail?: InputMaybe<ZonosShipmentRatingBatteryDetail>;
  /** List of `ShipmentRatingSpecialServiceTypes` to apply to the `ShipmentRating` */
  serviceTypes: Array<ZonosShipmentRatingSpecialServiceType>;
  /** Specifies the type of signature required. Required when SIGNATURE_OPTION is present in `serviceTypes` */
  signatureOptionType?: InputMaybe<ZonosShipmentRatingSignatureOptionType>;
};

export type ZonosShipmentRatingSpecialServiceType =
  | 'ALCOHOL'
  | 'BATTERY'
  | 'CUT_FLOWERS'
  | 'DANGEROUS_GOODS'
  | 'DRY_ICE'
  | 'SATURDAY_DELIVERY'
  | 'SIGNATURE_OPTION'
  | 'SUNDAY_DELIVERY';

/** Subtotal amounts of how the `ShipmentRating` amount was calculated */
export type ZonosShipmentRatingSubtotals = {
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

export type ZonosShipmentSpecialService =
  | 'CONSOLIDATION'
  | 'CUT_FLOWERS'
  | 'DRY_ICE'
  | 'EXTENDED_AREA'
  | 'RETURN_SHIPMENT'
  | 'SATURDAY_DELIVERY'
  | 'SATURDAY_PICKUP'
  | 'SCHEDULED_DELIVERY'
  | 'SINGLE_SHIPMENT';

export type ZonosShipmentStatusTransition = {
  __typename?: 'ShipmentStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Shipment` at the associated DateTime */
  status: ZonosShipmentStatusType;
};

export type ZonosShipmentStatusType =
  /** Default status */
  | 'CREATED'
  /** Shipment was delivered */
  | 'DELIVERED'
  /** Shipment was delivered to the consolidation center */
  | 'DELIVERED_TO_CONSOLIDATION_CENTER'
  /** Shipment is in transit to the destination */
  | 'IN_TRANSIT'
  /** Shipment is in transit to the consolidation center */
  | 'IN_TRANSIT_TO_CONSOLIDATION_CENTER'
  /** Shipment was canceled */
  | 'VOIDED';

export type ZonosShipmentStatusUpdateInput = {
  /** Optional note about the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The shipment which status should be updated */
  shipment: Scalars['ID'];
  /** The new status type the shipment should be updated to */
  status: ZonosShipmentStatusType;
};

export type ZonosShipmentType =
  | 'DOMESTIC'
  | 'INTERNATIONAL';

export type ZonosShipmentsCreateFromOrderInput = {
  /** The ID of the `Order` to create and associate shipments with. */
  orderId: Scalars['ID'];
  /** List of inputs containing Shipment details. */
  shipments: Array<ZonosOrderShipmentCreateInput>;
};

export type ZonosShippingPaymentType =
  /** The shipper will be responsible for paying shipping charges. Default value. */
  | 'SENDER'
  /** A third party will be responsible for paying shipping charges */
  | 'THIRD_PARTY';

/** A ShippingProfile object is used to map a `ServiceLevel` to an `Organization`. Allowing the Organization to adjust the display name and apply rate charts to the service level. */
export type ZonosShippingProfile = {
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
  landedCostMethod: Maybe<ZonosLandedCostMethod>;
  /** Specifies whether the ShippingProfile is in live or test mode. */
  mode: ZonosMode;
  /** The humanly-memorable display name of the ShippingProfile. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingProfile. */
  organization: Scalars['ID'];
  /** The `ServiceLevel` associated with the ShippingProfile. */
  serviceLevel: ZonosServiceLevel;
  /** The `ShippingProfileRateCharts` that apply to this profile. */
  shippingRates: Maybe<Array<ZonosShippingProfileRateChart>>;
  /** `TransitTime` breakdown that applies to the ShippingProfile. */
  transitTime: Maybe<ZonosTransitTime>;
  /** When this ShippingProfile was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfile. */
  updatedBy: Scalars['ID'];
};

/** A `ShippingProfileRateChart` would apply to a specific shipping profile. The `ShippingProfileRateChart` would be used before any `ServiceLevelRateChart` as well as any external carrier API. */
export type ZonosShippingProfileRateChart = {
  __typename?: 'ShippingProfileRateChart';
  /** When this ShippingProfileRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingProfileRateChart. */
  createdBy: Scalars['ID'];
  /** The dimensional weight factor to be used for the supplied rates. */
  dimensionalWeightFactor: Scalars['Decimal'];
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<ZonosCountryCode>;
  /** A unique identifier for the ShippingProfileRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ShippingProfileRateChart. */
  locations: Maybe<Array<ZonosShippingRateLocation>>;
  /** Specifies whether the ShippingProfileRateChart is in live or test mode. */
  mode: ZonosMode;
  /** The specific rate values that apply to the given ShippingProfileRateChart. */
  rates: Array<ZonosShippingRate>;
  /** The `ShippingProfile` associated with the ShippingProfileRateChart. */
  shippingProfile: ZonosShippingProfile;
  /** When this ShippingProfileRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfileRateChart. */
  updatedBy: Scalars['ID'];
};

export type ZonosShippingProfileRateChartsFilter = {
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
};

export type ZonosShippingProfilesFilter = {
  /** The ID or `code` of the `Carrier`. */
  carrier?: InputMaybe<Scalars['ID']>;
  /** The ID or `code` of the `ServiceLevel`. */
  serviceLevel?: InputMaybe<Scalars['ID']>;
};

/** A Shipping rate that is based on either weight our currency amount */
export type ZonosShippingRate = ZonosShippingRateAmount | ZonosShippingRateWeight;

/** A `ShippingRateAmount` defines the range in a specific currency unit that applies to a given rate amount */
export type ZonosShippingRateAmount = {
  __typename?: 'ShippingRateAmount';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ZonosShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The inclusive maximum amount that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum amount that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The `currencyCode` that defines the min/max values. */
  unit: ZonosCurrencyCode;
};

/** Specify how the rate amount would be applied. */
export type ZonosShippingRateCalculation =
  /** The rate uses the amount as it was entered. */
  | 'FIXED'
  /** The rate multiplies the amount by the units. */
  | 'PER_UNIT';

/** A `ShippingRateLocation` is used to limit the destination that would apply to a `ShippingProfileRateChart`. */
export type ZonosShippingRateLocation = {
  __typename?: 'ShippingRateLocation';
  /** Which administrative area the shipper must be located in to trigger this configuration. */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** A single country code if one applies to this location. */
  countryCode: Maybe<ZonosCountryCode>;
  /** A pre-defined area or carrier zone that applies to the rate. */
  serviceLevelArea: Maybe<ZonosServiceLevelArea>;
};

/** A `ShippingRateWeight` defines the range in a specific weight unit that applies to a given rate amount */
export type ZonosShippingRateWeight = {
  __typename?: 'ShippingRateWeight';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ZonosShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The inclusive maximum weight that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum weight that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShippingRate`. */
  unit: ZonosWeightUnitCode;
};

export type ZonosShippingSettings = {
  __typename?: 'ShippingSettings';
  /** When these `shippingSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these `shippingSettings`. */
  createdBy: Scalars['String'];
  /** A rough estimate of item weight when calculating shipping, if no per-item weights are provided. */
  defaultWeightMultiplier: Scalars['Decimal'];
  /** A unique identifier for the ShippingSettings. */
  id: Scalars['String'];
  /** Specifies whether the ShippingSettings is in live or test mode. */
  mode: ZonosMode;
  /** The `Organization` associated with the ShippingSettings. */
  organization: Scalars['String'];
  /** ID of the `Preferred Packaging Option` for this `Organization`. */
  preferredPackagingOptionId: Maybe<Scalars['ID']>;
  /** When these `ShippingSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingSettings. */
  updatedBy: Scalars['String'];
};

/** A `ShippingStoreSettings` object represents store-specific settings for shipping related processes. */
export type ZonosShippingStoreSettings = {
  __typename?: 'ShippingStoreSettings';
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
export type ZonosShippingZone = {
  __typename?: 'ShippingZone';
  /** A list of two-letter ISO country codes that are supported by this ShippingZone. */
  countryCodes: Maybe<Array<ZonosCountryCode>>;
  /** When the ShippingZone was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingZone. */
  createdBy: Scalars['ID'];
  /** The default `FulfillmentCenter` that services the ShippingZone. */
  fulfillmentCenter: Maybe<ZonosFulfillmentCenter>;
  /** A unique identifier for the ShippingZone. */
  id: Scalars['ID'];
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration: ZonosZoneLandedCostConfiguration;
  /** Specifies whether the ShippingZone is in live or test mode. */
  mode: ZonosMode;
  /** The humanly-memorable display name for the ShippingZone. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingZone. */
  organization: Scalars['ID'];
  /** A list of shipping profiles associated with the ShippingZone. */
  profiles: Maybe<Array<ZonosShippingProfile>>;
  /** When the ShippingZone was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingZone. */
  updatedBy: Scalars['ID'];
};

export type ZonosShippingZonesFilter = {
  /** A two-letter ISO country code. */
  countryCode: ZonosCountryCode;
};

export type ZonosSignatureOptionType =
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

export type ZonosStageUploadResult = {
  __typename?: 'StageUploadResult';
  /** ID of the `StagedUploadResult`. */
  id: Scalars['ID'];
  /** URL designating where to upload the resource. */
  url: Scalars['String'];
};

export type ZonosStoreFeeRule = {
  __typename?: 'StoreFeeRule';
  /** The carrier associated with the StoreFeeRule */
  carrierId: Maybe<Scalars['Int']>;
  /** When this StoreFeeRule was created. */
  createdAt: Scalars['DateTime'];
  /** When this StoreFeeRule was deleted. */
  deletedAt: Maybe<Scalars['DateTime']>;
  /** The formula that implements the StoreFeeRule */
  formula: Maybe<Scalars['String']>;
  /** A unique identifier for the StoreFeeRule. */
  id: Scalars['Int'];
  /** The conditions in which the StoreFeeRule will apply */
  ifStatement: Scalars['String'];
  /** The label of the StoreFeeRule */
  label: Maybe<Scalars['String']>;
  /** The localeType of the StoreFeeRule */
  localeType: Maybe<ZonosFeeRuleLocaleType>;
  /** A note to describe the StoreFeeRule */
  note: Maybe<Scalars['String']>;
  /** The organization associated with the StoreFeeRule */
  organizationId: Scalars['String'];
  /** The processing group associated with the StoreFeeRule */
  processingGroup: Maybe<Scalars['Int']>;
  /** The service level associated with the StoreFeeRule */
  serviceLevelId: Maybe<Scalars['Int']>;
  /** The country an item ships from that implements the StoreFeeRule */
  shipFromCountry: Maybe<ZonosCountryCode>;
  /** The country an item ships to that implements the StoreFeeRule */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** The id of the store associated with the StoreFeeRule */
  storeId: Scalars['Int'];
  /** Whether of not the StoreFeeRule is can be taxed */
  taxable: Maybe<Scalars['Boolean']>;
  /** The following step after the StoreFeeRule is applied */
  then: Scalars['String'];
  /** The type of the StoreFeeRule */
  type: Maybe<ZonosStoreFeeRuleType>;
  /** When this StoreFeeRule was most recently updated */
  updatedAt: Scalars['DateTime'];
};

export type ZonosStoreFeeRuleFilter = {
  /** Return `StoreFeeRule` resources by the associated organization Id. */
  organizationId?: InputMaybe<Scalars['String']>;
};

export type ZonosStoreFeeRuleType =
  | 'CUSTOM'
  | 'NEGOTIABLE'
  | 'NON_NEGOTIABLE'
  | 'REQUIRED_CUSTOM'
  | 'REQUIRED_NEGOTIABLE'
  | 'REQUIRED_NON_NEGOTIABLE'
  | 'TRANSITORY';

/** An implementation of `ReconciliationCharge` that represents a charge submitted by Zonos to Stripe */
export type ZonosStripeSubscriptionCharge = ZonosReconciliationCharge & {
  __typename?: 'StripeSubscriptionCharge';
  /** The sum of the transaction fees for this `LegacyOrderTransaction` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `StripeSubscriptionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for this `StripeSubscriptionCharge` */
  id: Scalars['ID'];
  /** An optional note about this `StripeSubscriptionCharge` */
  note: Maybe<Scalars['String']>;
  /** The Stripe charge that Zonos used to bill the merchant */
  zonosStripeCharge: ZonosZonosStripeCharge;
};

/** Represents a tax amount on a `LandedCost` quote */
export type ZonosTax = {
  __typename?: 'Tax';
  /** `Tax` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Tax` amount is in. @deprecated use currencyCode instead. */
  currency: ZonosCurrencyCode;
  /** Currency the `Tax` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Human-readable description of this `Tax`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Tax` amounts */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Human readable formula indicating how this tax was calculated */
  formula: Scalars['String'];
  /** `Item` that this tax amount applies to */
  item: Maybe<ZonosItem>;
  /** Additional note for this `Tax`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this tax amount */
  payee: Maybe<ZonosParty>;
  /** `Party` responsible for rendering payment on this tax amount */
  payor: Maybe<ZonosParty>;
  /** Type of `Tax`. */
  type: ZonosLandedCostFeeType;
};

export type ZonosTaxCalculationType =
  | 'CIF'
  | 'CUSTOM'
  | 'FOB';

export type ZonosTaxId = {
  __typename?: 'TaxId';
  administrativeAreaCode: Maybe<Scalars['String']>;
  allowLowValueOrders: Maybe<Scalars['Boolean']>;
  countryCode: ZonosCountryCode;
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['ID']>;
  effectiveAt: Maybe<Scalars['DateTime']>;
  expiresAt: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  method: ZonosTaxMethodType;
  mode: Maybe<ZonosMode>;
  organization: Maybe<Scalars['ID']>;
  sendEmails: Maybe<Scalars['Boolean']>;
  taxIdNumber: Scalars['String'];
  type: ZonosTaxIdType;
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['ID']>;
};

export type ZonosTaxIdFilterInput = {
  administrativeAreaCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCodes?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  taxIdType?: InputMaybe<Array<InputMaybe<ZonosTaxIdType>>>;
};

export type ZonosTaxIdType =
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

export type ZonosTaxInput = {
  /** `Tax` price amount. */
  amount: Scalars['Decimal'];
  /** Currency the `Tax` amount is in. @deprecated use currencyCode instead. */
  currency?: InputMaybe<ZonosCurrencyCode>;
  /** Currency the `Tax` amount is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable description of this `Tax`. */
  description?: InputMaybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Tax` amounts. */
  exchangeRate?: InputMaybe<Scalars['ID']>;
  /** Human readable formula indicating how this `Tax` was calculated. */
  formula: Scalars['String'];
  /** `Item` this `Tax` amount applies to. */
  item?: InputMaybe<Scalars['ID']>;
  /** Additional note for this `Tax`. */
  note?: InputMaybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this `Tax` amount. */
  payee?: InputMaybe<Scalars['ID']>;
  /** `Party` responsible for rendering payment on this `Tax` amount. */
  payor?: InputMaybe<Scalars['ID']>;
  /** Type of `Tax`. */
  type?: InputMaybe<ZonosLandedCostFeeType>;
};

export type ZonosTaxMethodType =
  | 'CONSIGNMENT'
  | 'DEFAULT'
  | 'DOMESTIC'
  | 'DOMESTIC_LCG'
  | 'SELLER_OF_RECORD';

export type ZonosThirdPartyAccountType =
  | 'DHL'
  | 'FEDEX'
  | 'UPS'
  | 'USPS';

export type ZonosTracking = ZonosNode & {
  __typename?: 'Tracking';
  /** A unique identifier for this Tracking */
  id: Scalars['ID'];
  /**
   * The `Label` related to this Tracking
   * @deprecated Use label field on ShipmentCarton for label details
   */
  label: Maybe<ZonosLabel>;
  /** The tracking number related to this Tracking */
  number: Scalars['String'];
  /** The tracking url for this Tracking */
  url: Scalars['String'];
};

export type ZonosTrackingEventTypeCode =
  | 'CANCELED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'PICKED_UP'
  | 'PRE_TRANSIT';

export type ZonosTransactionFee = {
  __typename?: 'TransactionFee';
  /** The total amount of the transaction */
  amount: Scalars['Decimal'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** The type of the `TransactionFee` */
  type: ZonosTransactionFeeType;
};

export type ZonosTransactionFeeType =
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

export type ZonosTransitTime = {
  __typename?: 'TransitTime';
  /** ISO-8601 timestamp of when the delivery will be delivered. Only the time portion will be used. */
  guaranteedDelivery: Maybe<Scalars['DateTime']>;
  /** The maximum number of transit days. */
  max: Maybe<Scalars['Int']>;
  /** The minimum number of transit days. */
  min: Maybe<Scalars['Int']>;
  /** Indicates what type of value the min and max fields represent. (default: days) */
  type: Maybe<ZonosTransitTypeCode>;
};

export type ZonosTransitTypeCode =
  | 'BUSINESS_DAYS'
  | 'DAYS'
  | 'WEEKS';

export type ZonosUpdateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type ZonosUpdateDashboardSettingsInput = {
  defaultDisplayCurrency?: InputMaybe<Scalars['String']>;
  defaultDisplayLanguage?: InputMaybe<Scalars['String']>;
  defaultDisplayLocal?: InputMaybe<Scalars['String']>;
  defaultDisplayTimezone?: InputMaybe<Scalars['String']>;
  defaultUnit?: InputMaybe<ZonosDashboardUnit>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  multiFactorAuth?: InputMaybe<ZonosMultiFactorAuthSetting>;
};

export type ZonosUpdatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek?: InputMaybe<ZonosDay>;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior?: InputMaybe<ZonosEndOfDayBehavior>;
  /** How often payouts occur, in days. */
  frequencyDays?: InputMaybe<Scalars['Int']>;
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod?: InputMaybe<ZonosLcgBillingMethod>;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum?: InputMaybe<Scalars['Int']>;
  /** Specifies which system to use for billing order complete fees */
  orderCompleteBillingMethod?: InputMaybe<ZonosOrderCompleteBillingMethod>;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod?: InputMaybe<ZonosOrderTransactionBillingMethod>;
};

export type ZonosUpdateShippingSettingsInput = {
  /** A rough estimate of item weight when calculating shipping, if no per-item weights are provided. */
  defaultWeightMultiplier?: InputMaybe<Scalars['Decimal']>;
  /** ID of the `Preferred Packaging Option` for this `Organization`. */
  preferredPackagingOptionId?: InputMaybe<Scalars['ID']>;
};

export type ZonosUploadErrors = {
  __typename?: 'UploadErrors';
  message: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['String']>;
  sku: Maybe<Scalars['String']>;
};

export type ZonosVisibilityCode =
  | 'HIDE'
  | 'OPTIONAL'
  | 'REQUIRED';

export type ZonosVolumeUnitCode =
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

export type ZonosWcoVersion =
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

export type ZonosWebhook = {
  __typename?: 'Webhook';
  /** When this Webhook was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Webhook. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the Webhook. */
  id: Scalars['ID'];
  /** Whether this Webhook is in live or test mode */
  mode: ZonosMode;
  /** The `Organization` associated with the Webhook. */
  organizationId: Scalars['ID'];
  /** The query that will be sent in the webhook request. */
  query: Scalars['String'];
  /** Client secret key to validate request authentication */
  secret: Scalars['String'];
  /** The status of the Webhook. */
  status: ZonosWebhookStatus;
  /** The type of Webhook. */
  type: ZonosWebhookType;
  /** When this Webhook was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Webhook. */
  updatedBy: Scalars['ID'];
  /** The url to send the Webhook to. */
  url: Scalars['String'];
};

/** An auto-generated type for paginating through multiple `Webhook`s. */
export type ZonosWebhookConnection = {
  __typename?: 'WebhookConnection';
  /** A list of `edges`. */
  edges: Array<ZonosWebhookEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
  /** The total count of the items in the connection. */
  totalCount: Scalars['Int'];
};

export type ZonosWebhookCreateInput = {
  /** The status of the webhook. */
  status: ZonosWebhookStatus;
  /** The type of Webhook. */
  type: ZonosWebhookType;
  /** The url to send the Webhook to. */
  url: Scalars['String'];
};

/** An auto-generated type used in pagination. */
export type ZonosWebhookEdge = {
  __typename?: 'WebhookEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<ZonosWebhook>;
};

export type ZonosWebhookLog = {
  __typename?: 'WebhookLog';
  /** When this Webhook was created. */
  createdAt: Scalars['DateTime'];
  /** A unique identifier for the WebhookLog. */
  id: Scalars['ID'];
  /** Whether this WebhookLog is in live or test mode */
  mode: ZonosMode;
  /** The `Organization` associated with the Webhook. */
  organizationId: Scalars['ID'];
  /** The request body sent to the webhook url. */
  request: Scalars['String'];
  /** The http response status code. */
  responseStatus: Maybe<Scalars['Int']>;
  /** The type of webhook. */
  type: ZonosWebhookType;
  /** The url to send the webhook to. */
  url: Scalars['String'];
  /** The webhook that this log is associated with. */
  webhook: Maybe<ZonosWebhook>;
};

/** An auto-generated type for paginating through multiple `WebhookLog`s. */
export type ZonosWebhookLogConnection = {
  __typename?: 'WebhookLogConnection';
  /** A list of `edges`. */
  edges: Array<ZonosWebhookLogEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
};

/** An auto-generated type used in pagination. */
export type ZonosWebhookLogEdge = {
  __typename?: 'WebhookLogEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<ZonosWebhookLog>;
};

export type ZonosWebhookLogsFilterInput = {
  /** Filter by the webhook type. */
  type?: InputMaybe<ZonosWebhookType>;
};

export type ZonosWebhookStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosWebhookType =
  | 'INCLUSIVE_PRICE_SYNC_READY'
  | 'IP_SETTING_STATUS_CHANGED'
  /** Any change on this Enum must also be applied on webhook-client/src/main/java/com/zonos/webhookclient/wrappers/WebhookType.java */
  | 'ORDER_CANCELED'
  | 'ORDER_CREATED'
  | 'ORDER_STATUS_CHANGED'
  | 'ORDER_UPDATED'
  | 'SHIPMENT_CANCELED'
  | 'SHIPMENT_CREATED';

export type ZonosWebhookUpdateInput = {
  /** The unique identifier for the Webhook. */
  id: Scalars['ID'];
  /** The status of the webhook. */
  status?: InputMaybe<ZonosWebhookStatus>;
  /** The type of webhook. */
  type?: InputMaybe<ZonosWebhookType>;
  /** The url to send the webhook to. */
  url?: InputMaybe<Scalars['String']>;
};

export type ZonosWebhooksFilterInput = {
  /** Filter by the webhook type. */
  type?: InputMaybe<ZonosWebhookType>;
};

export type ZonosWeightUnitCode =
  | 'GRAM'
  | 'KILOGRAM'
  | 'OUNCE'
  | 'POUND';

export type ZonosZoneLandedCostConfiguration =
  /** The landed cost method will be DAP. */
  | 'DAP_FORCED'
  /** The landed cost method will be determined by the `LandedCostMethod` on the `ShippingProfile` used in this zone. */
  | 'SHIPPING_PROFILE';

export type ZonosZonosAttribution =
  | 'DISABLED'
  | 'ENABLED';

/** `ZonosStripeCharge` is an object that represents what Zonos billed a merchant through Stripe for a subscription item */
export type ZonosZonosStripeCharge = {
  __typename?: 'ZonosStripeCharge';
  /** A timestamp of when this ZonosStripeCharge was created */
  createdAt: Scalars['DateTime'];
  /** The confirmation ID returned by Stripe for this ZonosStripeCharge */
  stripeConfirmationId: Scalars['String'];
  /** The Stripe subscription item ID this charge was billed to */
  stripeSubscriptionItemId: Scalars['String'];
  /** The `TransactionFee` object associated with this ZonosStripeCharge */
  transactionFee: ZonosTransactionFee;
  /** The price per unit for this ZonosStripeCharge */
  unitPrice: Scalars['Decimal'];
  /** The number of units that were billed for this ZonosStripeCharge */
  units: Scalars['Int'];
};

export type ZonosCatalogItemQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  productId: InputMaybe<Scalars['String']>;
  sku: InputMaybe<Scalars['String']>;
}>;


export type ZonosCatalogItemQuery = (
  { __typename?: 'Query' }
  & { catalogItem: Maybe<(
    { __typename?: 'CatalogItem' }
    & Pick<ZonosCatalogItem, 'brand' | 'catalogItemUrl' | 'countryOfOrigin' | 'description' | 'hsCode' | 'id' | 'itemType' | 'material' | 'packingPreference' | 'productId' | 'restrictedCountries' | 'sku'>
    & { attributes: Maybe<Array<Maybe<(
      { __typename?: 'ItemAttribute' }
      & Pick<ZonosItemAttribute, 'key' | 'value'>
    )>>>, catalogItemReferences: Array<(
      { __typename?: 'CatalogItemReference' }
      & Pick<ZonosCatalogItemReference, 'priceRatio'>
      & { catalogItem: (
        { __typename?: 'CatalogItem' }
        & Pick<ZonosCatalogItem, 'brand' | 'catalogItemUrl' | 'countryOfOrigin' | 'createdAt' | 'description' | 'hsCode' | 'id' | 'itemType' | 'material' | 'productId' | 'restrictedCountries' | 'sku' | 'updatedAt'>
        & { attributes: Maybe<Array<Maybe<(
          { __typename?: 'ItemAttribute' }
          & Pick<ZonosItemAttribute, 'key' | 'value'>
        )>>>, hsCodes: Maybe<Array<Maybe<(
          { __typename?: 'CatalogItemHsCode' }
          & Pick<ZonosCatalogItemHsCode, 'hsCode'>
        )>>>, measurements: Maybe<Array<Maybe<(
          { __typename?: 'ItemMeasurement' }
          & Pick<ZonosItemMeasurement, 'source' | 'type' | 'unitOfMeasure' | 'value'>
        )>>>, metadata: Maybe<Array<Maybe<(
          { __typename?: 'ItemMetadata' }
          & Pick<ZonosItemMetadata, 'key' | 'value'>
        )>>> }
      ) }
    )>, hsCodes: Maybe<Array<Maybe<(
      { __typename?: 'CatalogItemHsCode' }
      & Pick<ZonosCatalogItemHsCode, 'hsCode'>
    )>>>, measurements: Maybe<Array<Maybe<(
      { __typename?: 'ItemMeasurement' }
      & Pick<ZonosItemMeasurement, 'source' | 'type' | 'unitOfMeasure' | 'value'>
    )>>>, metadata: Maybe<Array<Maybe<(
      { __typename?: 'ItemMetadata' }
      & Pick<ZonosItemMetadata, 'key' | 'value'>
    )>>> }
  )> }
);

export type ZonosClassificationsCalculateMutationVariables = Exact<{
  inputs: Array<ZonosClassificationCalculateInput> | ZonosClassificationCalculateInput;
}>;


export type ZonosClassificationsCalculateMutation = (
  { __typename?: 'Mutation' }
  & { classificationsCalculate: Array<(
    { __typename?: 'Classification' }
    & Pick<ZonosClassification, 'confidenceScore'>
    & { hsCode: Maybe<(
      { __typename?: 'HsCode' }
      & Pick<ZonosHsCode, 'code'>
    )> }
  )> }
);

export type ZonosFullLandedCostMutationVariables = Exact<{
  itemCreateWorkflowInput: Array<ZonosItemCreateWorkflowInput> | ZonosItemCreateWorkflowInput;
  landedCostCalculateWorkflowInput: ZonosLandedCostWorkFlowInput;
  partyCreateWorkflowInput: Array<ZonosPartyCreateWorkflowInput> | ZonosPartyCreateWorkflowInput;
}>;


export type ZonosFullLandedCostMutation = (
  { __typename?: 'Mutation' }
  & { partyCreateWorkflow: Array<(
    { __typename?: 'Party' }
    & Pick<ZonosParty, 'id' | 'type'>
    & { location: Maybe<(
      { __typename?: 'Location' }
      & Pick<ZonosLocation, 'administrativeArea' | 'administrativeAreaCode' | 'countryCode' | 'line1' | 'locality' | 'postalCode'>
    )> }
  )>, itemCreateWorkflow: Array<(
    { __typename?: 'Item' }
    & Pick<ZonosItem, 'amount' | 'countryOfOrigin' | 'description' | 'hsCode' | 'id' | 'productId' | 'quantity'>
    & { restriction: Maybe<(
      { __typename?: 'RestrictedItem' }
      & Pick<ZonosRestrictedItem, 'id'>
    )> }
  )>, cartonizeWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'Carton' }
    & Pick<ZonosCarton, 'id'>
  )>>>, shipmentRatingCalculateWorkflow: Array<(
    { __typename?: 'ShipmentRating' }
    & Pick<ZonosShipmentRating, 'id'>
  )>, landedCostCalculateWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'LandedCost' }
    & Pick<ZonosLandedCost, 'currencyCode' | 'id' | 'method' | 'rootId'>
    & { amountSubtotals: Maybe<(
      { __typename?: 'LandedCostAmountSubtotals' }
      & Pick<ZonosLandedCostAmountSubtotals, 'duties' | 'fees' | 'shipping' | 'taxes'>
    )>, deMinimis: Array<(
      { __typename?: 'DeMinimis' }
      & Pick<ZonosDeMinimis, 'threshold' | 'type'>
    )>, remittance: Array<(
      { __typename?: 'LandedCostRemittance' }
      & Pick<ZonosLandedCostRemittance, 'amount'>
    )>, shipmentRating: (
      { __typename?: 'ShipmentRating' }
      & Pick<ZonosShipmentRating, 'displayName' | 'id' | 'maxTransitAt' | 'minTransitAt'>
      & { shippingProfile: Maybe<(
        { __typename?: 'ShippingProfile' }
        & Pick<ZonosShippingProfile, 'customServiceLevelCode' | 'landedCostMethod'>
      )> }
    ) }
  )>>> }
);

export type ZonosLandedCostOnlyMutationVariables = Exact<{
  partyCreateWorkflowInput: Array<ZonosPartyCreateWorkflowInput> | ZonosPartyCreateWorkflowInput;
  itemCreateWorkflowInput: Array<ZonosItemCreateWorkflowInput> | ZonosItemCreateWorkflowInput;
  landedCostCalculateWorkflowInput: ZonosLandedCostWorkFlowInput;
  shipmentRatingCreateWorkflowInput: ZonosShipmentRatingCreateWorkflowInput;
}>;


export type ZonosLandedCostOnlyMutation = (
  { __typename?: 'Mutation' }
  & { partyCreateWorkflow: Array<(
    { __typename?: 'Party' }
    & Pick<ZonosParty, 'id' | 'type'>
    & { location: Maybe<(
      { __typename?: 'Location' }
      & Pick<ZonosLocation, 'administrativeArea' | 'administrativeAreaCode' | 'countryCode' | 'line1' | 'locality' | 'postalCode'>
    )> }
  )>, itemCreateWorkflow: Array<(
    { __typename?: 'Item' }
    & Pick<ZonosItem, 'amount' | 'countryOfOrigin' | 'description' | 'hsCode' | 'id' | 'productId' | 'quantity'>
    & { restriction: Maybe<(
      { __typename?: 'RestrictedItem' }
      & Pick<ZonosRestrictedItem, 'id'>
    )> }
  )>, cartonizeWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'Carton' }
    & Pick<ZonosCarton, 'id'>
  )>>>, shipmentRatingCreateWorkflow: Maybe<(
    { __typename?: 'ShipmentRating' }
    & Pick<ZonosShipmentRating, 'id'>
  )>, landedCostCalculateWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'LandedCost' }
    & Pick<ZonosLandedCost, 'currencyCode' | 'id' | 'method' | 'rootId'>
    & { amountSubtotals: Maybe<(
      { __typename?: 'LandedCostAmountSubtotals' }
      & Pick<ZonosLandedCostAmountSubtotals, 'duties' | 'fees' | 'shipping' | 'taxes'>
    )>, deMinimis: Array<(
      { __typename?: 'DeMinimis' }
      & Pick<ZonosDeMinimis, 'threshold' | 'type'>
    )>, remittance: Array<(
      { __typename?: 'LandedCostRemittance' }
      & Pick<ZonosLandedCostRemittance, 'amount'>
    )>, shipmentRating: (
      { __typename?: 'ShipmentRating' }
      & Pick<ZonosShipmentRating, 'displayName' | 'id' | 'maxTransitAt' | 'minTransitAt'>
      & { shippingProfile: Maybe<(
        { __typename?: 'ShippingProfile' }
        & Pick<ZonosShippingProfile, 'customServiceLevelCode' | 'landedCostMethod'>
      )> }
    ) }
  )>>> }
);


export const CatalogItemDocument = `
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
export const ClassificationsCalculateDocument = `
    mutation classificationsCalculate($inputs: [ClassificationCalculateInput!]!) {
  classificationsCalculate(input: $inputs) {
    confidenceScore
    hsCode {
      code
    }
  }
}
    `;
export const FullLandedCostDocument = `
    mutation fullLandedCost($itemCreateWorkflowInput: [ItemCreateWorkflowInput!]!, $landedCostCalculateWorkflowInput: LandedCostWorkFlowInput!, $partyCreateWorkflowInput: [PartyCreateWorkflowInput!]!) {
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
export const LandedCostOnlyDocument = `
    mutation landedCostOnly($partyCreateWorkflowInput: [PartyCreateWorkflowInput!]!, $itemCreateWorkflowInput: [ItemCreateWorkflowInput!]!, $landedCostCalculateWorkflowInput: LandedCostWorkFlowInput!, $shipmentRatingCreateWorkflowInput: ShipmentRatingCreateWorkflowInput!) {
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    catalogItem(variables?: ZonosCatalogItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZonosCatalogItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosCatalogItemQuery>(CatalogItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'catalogItem', 'query', variables);
    },
    classificationsCalculate(variables: ZonosClassificationsCalculateMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZonosClassificationsCalculateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosClassificationsCalculateMutation>(ClassificationsCalculateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'classificationsCalculate', 'mutation', variables);
    },
    fullLandedCost(variables: ZonosFullLandedCostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZonosFullLandedCostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosFullLandedCostMutation>(FullLandedCostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fullLandedCost', 'mutation', variables);
    },
    landedCostOnly(variables: ZonosLandedCostOnlyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZonosLandedCostOnlyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosLandedCostOnlyMutation>(LandedCostOnlyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'landedCostOnly', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;