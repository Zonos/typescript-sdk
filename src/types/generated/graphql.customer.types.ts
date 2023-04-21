import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
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
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Decimal: number;
  ZonedDateTime: string;
};

/** The breakdown of the amounts that are included in the `order`. */
export type AmountSubtotals = {
  __typename?: 'AmountSubtotals';
  duties: Scalars['Decimal'];
  fees: Scalars['Decimal'];
  items: Scalars['Decimal'];
  shipping: Scalars['Decimal'];
  taxes: Scalars['Decimal'];
  variance: Scalars['Decimal'];
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
  /** list of applicable item restrictions */
  itemRestrictions: Maybe<Array<Maybe<ItemRestriction>>>;
};

export type BillingOptionCode =
  | 'DDP_AND_DDU'
  | 'SHIPPER_ONLY'
  | 'THIRD_PARTY'
  | 'UNAVAILABLE';

export type BrandingSetting = {
  __typename?: 'BrandingSetting';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  iconUrl: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logoUrl: Maybe<Scalars['String']>;
  mode: Mode;
  organization: Scalars['String'];
  primaryColor: Maybe<Scalars['String']>;
  secondaryColor: Maybe<Scalars['String']>;
  theme: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

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
  | 'FILE_UPLOADED'
  | 'INITIALIZED';

/** Provides a `ShipmentRating` for an order based on values associated with the given `Root` ID. */
export type CalculateShipmentRatingsInput = {
  /** The `Root` resource that this `ShipmentRating` belongs to. */
  rootId: Scalars['ID'];
};

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
  /** Specifies whether the CarrierAccount is in live or test mode. */
  mode: Mode;
  /** The `Organization` associated with the CarrierAccount. */
  organization: Scalars['ID'];
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

export type CarrierAccountCreateInput = {
  /** A monetary amount specified by the merchant as a buffer for any additional fees. */
  additionalFee?: InputMaybe<Scalars['Decimal']>;
  /** The `Carrier` associated with this `CarrierAccount`. */
  carrier: Scalars['ID'];
  /** Where the credentials are stored. */
  credentialProvider: CredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials?: InputMaybe<Array<CarrierAccountCredentialCreateInput>>;
  /** Describes the `additionalFee` as a percentage. */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** Boolean value indicating if the carrier account was registered through Zonos services */
  zonosRegistered?: InputMaybe<Scalars['Boolean']>;
};

/** The storage of the credential value for a specific type of credential used by a carrier. */
export type CarrierAccountCredential = {
  __typename?: 'CarrierAccountCredential';
  /** The type of credential that applies to the value. */
  type: Maybe<CarrierCredentialTypeCode>;
  /** The code used as the `Credential` token. */
  value: Maybe<Scalars['String']>;
};

export type CarrierAccountCredentialCreateInput = {
  /** The type of credential that applies to the value. */
  type: CarrierCredentialTypeCode;
  /** The value of the credential. */
  value: Scalars['String'];
};

export type CarrierAccountUpdateInput = {
  /** Where the credentials are stored. */
  credentialProvider: CredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials: Array<CarrierAccountCredentialCreateInput>;
  /** A unique identifier for the CarrierAccount. */
  id: Scalars['ID'];
};

export type CarrierAccountsFilter = {
  /** A carrier code to filter the list of accounts */
  carrierCode?: InputMaybe<Scalars['String']>;
};

/** Carrier Connection */
export type CarrierConnection = {
  __typename?: 'CarrierConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<CarrierEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

export type CarrierCreateCredentialInput = {
  /** Specifies whether the field is visible to a merchant. */
  display: VisibilityCode;
  /** The name of the `CarrierCredential` field as denoted by the `Carrier`. */
  label: Scalars['String'];
  /** The credential type that is being used for a `Carrier`. */
  type: CarrierCredentialTypeCode;
  /** The regex syntax that is required for the `carrierCredential` field. */
  validationPattern?: InputMaybe<Scalars['String']>;
};

export type CarrierCreateInput = {
  /** A unique identifier tied to a `Carrier`. */
  code?: InputMaybe<Scalars['String']>;
  /** The `Carrier`'s API credentials. */
  credentials?: InputMaybe<Array<CarrierCreateCredentialInput>>;
  /** The humanly-memorable display name for the `Carrier`. */
  name: Scalars['String'];
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

export type CarrierUpdateInput = {
  /** The `Carrier`'s API credentials. */
  credentials?: InputMaybe<Array<CarrierCreateCredentialInput>>;
  /** A unique identifier for the Carrier. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the `Carrier`. */
  name: Scalars['String'];
};

/** A search for a specific `Carrier` or group of carriers. */
export type CarriersFilter = {
  /** A unique identifier tied to a `Carrier`. */
  code?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The humanly memorable display name for the `Carrier`. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**  An order receipt page might want to list all of the cartons in an order. */
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
  organization: Scalars['ID'];
  /** The packaging option associated with the `packingCarton` */
  packagingOption: Maybe<PackagingOption>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** Where the item is shipping from */
  shipFrom: Maybe<Location>;
  /** The order's destination (customer address) */
  shipTo: Maybe<Location>;
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
  /** The item id that will be associated with the CartonItem */
  item: Scalars['ID'];
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
};

/** A `CartonItem` represents an item that has been assigned to be packed to a `Carton` */
export type CartonItem = {
  __typename?: 'CartonItem';
  /** The type of dimensional unit associated with the `cartonItem` */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `cartonItem` */
  height: Scalars['Decimal'];
  /** The original item associated with `cartonItem` */
  item: Item;
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
  /** The `CatalogItem` location. */
  catalogItemUrl: Maybe<Scalars['String']>;
  /** the classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** country configuration for the item. */
  configurations: Maybe<Array<Maybe<CatalogItemConfiguration>>>;
  /** Where a CatalogItem is manufactured. */
  countryOfOrigin: Maybe<CountryCode>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<CurrencyCode>;
  /** The `CatalogItem` full description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** the default hsCode for the product */
  hsCode: Maybe<Scalars['String']>;
  /** hsCodes overrides, country or attribute specific for the item */
  hsCodes: Maybe<Array<Maybe<CatalogItemHsCode>>>;
  /** The ID of the `CatalogItem`. */
  id: Scalars['ID'];
  /** The url of an image. */
  imageUrl: Maybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ItemType>;
  /** The `CatalogItem` material composition. */
  material: Maybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements: Maybe<Array<Maybe<ItemMeasurement>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata: Maybe<Array<Maybe<ItemMetadata>>>;
  /** The primary name of a `CatalogItem`. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** Product ID of the `CatalogItem`. */
  productId: Maybe<Scalars['String']>;
  /** Optional administrative area where this item originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** a list of restricted country code */
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

export type CatalogItemConfiguration = {
  __typename?: 'CatalogItemConfiguration';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** the classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** the id of the configuration catalog item */
  id: Maybe<Scalars['Int']>;
  /** ship to country */
  shipToCountry: Maybe<CountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemConfigurationInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** the classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** ship to country */
  shipToCountry: CountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemConfigurationUpdateInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** the classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** The id of the hsCode item */
  id: Scalars['Int'];
  /** ship to country */
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

export type CatalogItemFilter = {
  productId?: InputMaybe<Scalars['String']>;
  shipToCountry?: InputMaybe<CountryCode>;
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemHsCode = {
  __typename?: 'CatalogItemHsCode';
  /** the classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The HsCode of the item. */
  hsCode: Maybe<Scalars['String']>;
  /** the id of the hsCode catalog item */
  id: Maybe<Scalars['Int']>;
  /** ship to country */
  shipToCountry: Maybe<CountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemHsCodeInput = {
  /** the classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** ship to country */
  shipToCountry: CountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemHsCodeUpdateInput = {
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** the classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The id of the hsCode item */
  id: Scalars['Int'];
  /** ship to country */
  shipToCountry: CountryCode;
};

/** A representation of a `CatalogItem` to be created. */
export type CatalogItemInput = {
  /** The amount of a `CatalogItem`. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** The marketing name associated with an item. */
  brand?: InputMaybe<Scalars['String']>;
  /** The `CatalogItem` page url. */
  catalogItemUrl?: InputMaybe<Scalars['String']>;
  /** the classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** Where a `CatalogItem` is created. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** The primary description of a `CatalogItem`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** the default hsCode for the product */
  hsCode?: InputMaybe<Scalars['String']>;
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
  name: Scalars['String'];
  /** Product ID of this `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `CatalogItem` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** a list of restricted country code */
  restrictedCountries?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemSource =
  | 'CLASSIFICATION'
  | 'LEGACY_MIGRATION'
  | 'USER_PROVIDED';

export type CheckoutEmails = {
  __typename?: 'CheckoutEmails';
  abandonedCart: Maybe<CheckoutSettingsAbandonedCart>;
  orderCancelled: Maybe<EmailStatus>;
  orderShipped: Maybe<EmailStatus>;
};

export type CheckoutEmailsInput = {
  abandonedCart?: InputMaybe<CheckoutSettingsAbandonedCartInput>;
  orderCancelled?: InputMaybe<EmailStatus>;
  orderShipped?: InputMaybe<EmailStatus>;
};

export type CheckoutNote = 'DISABLED' | 'ENABLED';

export type CheckoutPrivacySetting = {
  __typename?: 'CheckoutPrivacySetting';
  ageOfConsent: Scalars['Int'];
  consentLevel: ConsentLevel;
  dataRetentionLength: Scalars['Int'];
  policyUrl: Scalars['String'];
};

export type CheckoutPrivacySettingInput = {
  ageOfConsent: Scalars['Int'];
  consentLevel: ConsentLevel;
  dataRetentionLength: Scalars['Int'];
  policyUrl: Scalars['String'];
};

export type CheckoutSetting = {
  __typename?: 'CheckoutSetting';
  analytics: Maybe<Array<Maybe<CheckoutSettingsAnalytic>>>;
  checkoutNotes: Maybe<CheckoutNote>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  customCss: Maybe<Scalars['String']>;
  customJavaScript: Maybe<Scalars['String']>;
  defaultDisplayCurrencyCode: Maybe<Scalars['String']>;
  emails: Maybe<CheckoutEmails>;
  id: Scalars['String'];
  mode: Mode;
  organization: Scalars['String'];
  privacy: Maybe<CheckoutPrivacySetting>;
  subdomain: Maybe<Scalars['String']>;
  successUrl: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type CheckoutSettingsAbandonedCart = {
  __typename?: 'CheckoutSettingsAbandonedCart';
  delay: Maybe<Scalars['Int']>;
  discountPercent: Maybe<Scalars['Decimal']>;
  status: Maybe<EmailStatus>;
};

export type CheckoutSettingsAbandonedCartInput = {
  delay?: InputMaybe<Scalars['Int']>;
  discountPercent?: InputMaybe<Scalars['Decimal']>;
  status?: InputMaybe<EmailStatus>;
};

export type CheckoutSettingsAnalytic = {
  __typename?: 'CheckoutSettingsAnalytic';
  type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type CheckoutSettingsAnalyticInput = {
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type CheckoutSettingsInput = {
  analytics?: InputMaybe<Array<InputMaybe<CheckoutSettingsAnalyticInput>>>;
  checkoutNotes: CheckoutNote;
  customCss?: InputMaybe<Scalars['String']>;
  customJavaScript?: InputMaybe<Scalars['String']>;
  defaultDisplayCurrencyCode: Scalars['String'];
  emails?: InputMaybe<CheckoutEmailsInput>;
  privacy: CheckoutPrivacySettingInput;
  subdomain?: InputMaybe<Scalars['String']>;
  successUrl?: InputMaybe<Scalars['String']>;
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

export type ClearanceType = 'COMMERCIAL' | 'POSTAL';

export type ConsentLevel =
  | 'COMBINED'
  | 'MARKETING_AND_PROCESSING'
  | 'MARKETING_ONLY'
  | 'PROCESSING_ONLY';

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

export type ConstraintInput = {
  /** The exclusive maximum amount that applies to the `Constraint`. */
  max?: InputMaybe<Scalars['Decimal']>;
  /** The exclusive minimum amount that applies to the `Constraint`. */
  min?: InputMaybe<Scalars['Decimal']>;
  /** Indicates what type of value the min and max fields represent. */
  type: ConstraintType;
  /** Represents the unit based on the type that applies to the `Constraint`. */
  unitOfMeasure: ConstraintUnitCode;
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

export type CountryConstraintCreateInput = {
  /** Represents a `Constraint` around a specific attribute that applies to all countries. */
  constraints?: InputMaybe<Array<ConstraintInput>>;
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling?: InputMaybe<BillingOptionCode>;
  /** List of incoterms supported by the `CountryConstraint`. */
  incoterm?: InputMaybe<Array<IncotermCode>>;
  /** The ID of the object this `CountryConstraint` will reference. */
  referenceId: Scalars['ID'];
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<CountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<CountryCode>;
  /** `TransitTime` breakdown that applies to the `CountryConstraint`. */
  transitTime?: InputMaybe<TransitTimeInput>;
  /** The weight unit associated with the CountryConstraint. */
  weightUnit?: InputMaybe<WeightUnitCode>;
};

export type CountryConstraintUpdateInput = {
  /** Represents a `Constraint` around a specific attribute that applies to all countries. */
  constraints?: InputMaybe<Array<ConstraintInput>>;
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling?: InputMaybe<BillingOptionCode>;
  /** A unique identifier for the `CountryConstraint`. */
  id: Scalars['ID'];
  /** List of incoterms supported by the `CountryConstraint`. */
  incoterm?: InputMaybe<Array<IncotermCode>>;
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<CountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<CountryCode>;
  /** `TransitTime` breakdown that applies to the `CountryConstraint`. */
  transitTime?: InputMaybe<TransitTimeInput>;
  /** The weight unit associated with the `CountryConstraint`. */
  weightUnit?: InputMaybe<WeightUnitCode>;
};

export type CreateBrandingSettingsInput = {
  iconUrl?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  secondaryColor?: InputMaybe<Scalars['String']>;
  theme: Scalars['String'];
};

export type CreateCarrierAccountCredentialInput = {
  /** The type of credential that applies to the value. */
  type: CarrierCredentialTypeCode;
  /** The value of the credential. */
  value: Scalars['String'];
};

export type CreateCarrierAccountInput = {
  /** A monetary amount specified by the merchant as a buffer for any additional fees. */
  additionalFee?: InputMaybe<Scalars['Decimal']>;
  /** The `Carrier` associated with this `CarrierAccount`. */
  carrier: Scalars['ID'];
  /** Where the credentials are stored. */
  credentialProvider: CredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials?: InputMaybe<Array<CreateCarrierAccountCredentialInput>>;
  /** Describes the `additionalFee` as a percentage. */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** Boolean value indicating if the carrier account was registered through Zonos services */
  zonosRegistered?: InputMaybe<Scalars['Boolean']>;
};

export type CreateCarrierCredentialInput = {
  /** Specifies whether the field is visible to a merchant. */
  display: VisibilityCode;
  /** The name of the `CarrierCredential` field as denoted by the `Carrier`. */
  label: Scalars['String'];
  /** The credential type that is being used for a `Carrier`. */
  type: CarrierCredentialTypeCode;
  /** The regex syntax that is required for the `carrierCredential` field. */
  validationPattern?: InputMaybe<Scalars['String']>;
};

/**
 * ####
 *  Inputs
 * ####
 */
export type CreateCarrierInput = {
  /** A unique identifier tied to a `Carrier`. */
  code?: InputMaybe<Scalars['String']>;
  /** The `Carrier`'s API credentials. */
  credentials?: InputMaybe<Array<CreateCarrierCredentialInput>>;
  /** The humanly-memorable display name for the `Carrier`. */
  name: Scalars['String'];
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

export type CreateCountryConstraintInput = {
  /** Represents a `Constraint` around a specific attribute that applies to all countries. */
  constraints?: InputMaybe<Array<ConstraintInput>>;
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling?: InputMaybe<BillingOptionCode>;
  /** List of incoterms supported by the `CountryConstraint`. */
  incoterm?: InputMaybe<Array<IncotermCode>>;
  /** The ID of the object this `CountryConstraint` will reference. */
  referenceId: Scalars['ID'];
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<CountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<CountryCode>;
  /** `TransitTime` breakdown that applies to the `CountryConstraint`. */
  transitTime?: InputMaybe<TransitTimeInput>;
  /** The weight unit associated with the CountryConstraint. */
  weightUnit?: InputMaybe<WeightUnitCode>;
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

export type CreateFulfillmentCenterInput = {
  /** A reference name to identify the `FulfillmentCenter`. */
  name: Scalars['String'];
  /** The ID of the `Party` to use for the `FulfillmentCenter`. */
  party: Scalars['ID'];
};

export type CreateGeneralCarrierAccountInput = {
  /** The API type to apply to the credentials. */
  apiUsage: CarrierAccountApiUsage;
  /** The carrier associated with the account. */
  carrier: Scalars['ID'];
  /** The credential values to access the account. */
  credentials?: InputMaybe<
    Array<InputMaybe<CreateCarrierAccountCredentialInput>>
  >;
};

/** Input to create a new Item. */
export type CreateItemInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: CurrencyCode;
  /** Human-readable `Item` description. */
  description: Scalars['String'];
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
  /** The product ID of the parent `Item` for multi-SKU situations. */
  parentProductId?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId: Scalars['String'];
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** ID of the root with which this Item is associated. */
  rootId?: InputMaybe<Scalars['ID']>;
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

export type CreateOnlineStoreSettingsInput = {
  organization: Scalars['String'];
  platform?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  dayOfWeek: Day;
  endOfDayBehavior: EndOfDayBehavior;
  frequencyDays: Scalars['Int'];
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

export type CreateServiceLevelAreaInput = {
  /** Regular expression of administrative area codes that apply to the area. */
  administrativeAreaCodePattern?: InputMaybe<Scalars['String']>;
  /** Regular expression of country codes that apply to the area. */
  countryCodePattern?: InputMaybe<Scalars['String']>;
  /** Name of the area (ie. CA-1) */
  name: Scalars['String'];
  /** Regular expression of postal codes that apply to the area */
  postalCodePattern?: InputMaybe<Scalars['String']>;
  /** The ID of the `ServiceLevel` the `ServiceLevelArea` applies to */
  serviceLevel: Scalars['ID'];
};

/**
 * ####
 *  Inputs
 * ####
 */
export type CreateServiceLevelInput = {
  /** Enumerated value that specifies whether a service level is available to all customers or is specifically contracted */
  availability: ServiceLevelAvailability;
  /** The ID of the `Carrier` associated with the `ServiceLevel`. */
  carrier: Scalars['ID'];
  /** The code for the `ServiceLevel` as defined by the external carrier API. */
  carrierApiCode: Scalars['String'];
  /** The enumerated value of `ServiceLevel` options that can be sent in the API. */
  code: Scalars['String'];
  /** The method of delivery that indicates how the clearance is processed with this `ServiceLevel`. */
  deliveryType?: InputMaybe<DeliveryType>;
  /** The humanly-memorable display name for the `ServiceLevel`. */
  name: Scalars['String'];
  /** Transit Time breakdown that applies to the `ServiceLevel`. */
  transitTime?: InputMaybe<TransitTimeInput>;
};

/**
 * ##
 *  Inputs
 * ##
 */
export type CreateServiceLevelRateChartByAmountInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ServiceLevelRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ServiceLevelRateChart`. */
  rates: Array<CreateShippingRateInput>;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The `CurrencyCode` to be used for the supplied rates. */
  unit: CurrencyCode;
};

export type CreateServiceLevelRateChartByWeightInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ServiceLevelRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ServiceLevelRateChart`. */
  rates: Array<CreateShippingRateInput>;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The weight unit to be used for the supplied rates. */
  unit: WeightUnitCode;
};

/** Input to create a non-calculated shipmentRating. */
export type CreateShipmentRatingInput = {
  /** The amount for the `ShipmentRating`. */
  amount: Scalars['Decimal'];
  /** The currency this `ShipmentRating` price amount is in. */
  currencyCode: CurrencyCode;
  /** The customer facing display name of the `ShipmentRating`. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The `Root` resource that this `ShipmentRating` belongs to. */
  rootId: Scalars['ID'];
  /** The `ServiceLevel` code associated with the `ShipmentRating`. */
  serviceLevelCode: Scalars['String'];
};

export type CreateShippingProfileInput = {
  /** A customized carrier service level code to identify how to fulfill the shipment. */
  customServiceLevelCode?: InputMaybe<Scalars['String']>;
  /** The method to use for the landed cost calculation for the `ShippingProfile`. */
  landedCostMethod: LandedCostMethod;
  /** The humanly-memorable display name of the `ShippingProfile`. */
  name?: InputMaybe<Scalars['String']>;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The shipping value increase */
  shippingValueIncrease?: InputMaybe<Scalars['Decimal']>;
  /** `TransitTime` breakdown that applies to the `ShippingProfile`. */
  transitTime?: InputMaybe<TransitTimeInput>;
};

export type CreateShippingProfileRateChartByAmountInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ShippingProfileRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ShippingProfileRateChart`. */
  rates: Array<CreateShippingRateInput>;
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
  /** The `CurrencyCode` to be used for the supplied rates. */
  unit: CurrencyCode;
};

export type CreateShippingProfileRateChartByWeightInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ShippingProfileRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ShippingProfileRateChart`. */
  rates: Array<CreateShippingRateInput>;
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
  /** The weight unit to be used for the supplied rates. */
  unit: WeightUnitCode;
};

export type CreateShippingRateInput = {
  /** The applied rate amount. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ShippingRateCalculation;
  /** The inclusive maximum that applies to the given rate. */
  maxUnit?: InputMaybe<Scalars['Decimal']>;
  /** The exclusive minimum that applies to the given rate. */
  minUnit?: InputMaybe<Scalars['Decimal']>;
};

export type CreateShippingRateLocationInput = {
  /** Which administrative area the shipper must be located in to trigger this configuration. */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The address' two-letter country ISO code. */
  countryCode?: InputMaybe<CountryCode>;
  /** The `ServiceLevelArea` that applies to the `ShippingRateLocation` */
  serviceLevelArea?: InputMaybe<Scalars['ID']>;
};

export type CreateShippingSettingsInput = {
  defaultWeightMultiplier: Scalars['Decimal'];
};

/**
 * ####
 *  Inputs
 * ####
 */
export type CreateShippingStoreSettingsInput = {
  /** An additional fee that can be added to `ShippingRate`s */
  additionalFee?: InputMaybe<Scalars['Decimal']>;
  /** Display transit time inline */
  displayTransitTimeInline?: InputMaybe<Scalars['Boolean']>;
  /** A buffer amount to be applied to duty and tax amounts */
  dutyTaxBuffer?: InputMaybe<Scalars['Decimal']>;
  /** A buffer represented as a percentage to be applied to duty and tax amounts */
  dutyTaxBufferPercent?: InputMaybe<Scalars['Decimal']>;
  /** Fulfillment days */
  fulfillmentDays?: InputMaybe<Scalars['Int']>;
  /** Landed cost countries */
  landedCostCountries?: InputMaybe<Scalars['String']>;
  /** Landed cost prepay */
  landedCostPrepay?: InputMaybe<Scalars['String']>;
  /** Pickup time */
  pickupTime?: InputMaybe<Scalars['DateTime']>;
  /** Shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The ID of the store these settings apply to */
  storeId: Scalars['Int'];
  /** The stores Tax Payer Identification (TIN) number */
  tinNumber?: InputMaybe<Scalars['String']>;
  /** The type of TIN number ex. Business National, Personal State */
  tinType?: InputMaybe<Scalars['String']>;
};

export type CreateShippingZoneInput = {
  /** A list of two-letter ISO country codes that are supported by this `ShippingZone`. */
  countryCodes?: InputMaybe<Array<CountryCode>>;
  /** The `FulfillmentCenter` ID that services the `ShippingZone`. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration?: InputMaybe<ZoneLandedCostConfiguration>;
  /** The humanly memorable display name associated with the `ShippingZone` as prescribed by the party who created it. */
  name: Scalars['String'];
  /** A list of shipping profile IDs associated with the `ShippingZone`. */
  profiles?: InputMaybe<Array<Scalars['ID']>>;
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

export type DeliveryType = 'CONSOLIDATED' | 'COURIER' | 'POSTAL';

export type DeniedParty = {
  __typename?: 'DeniedParty';
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** Known aliases for the denied party */
  aliases: Maybe<Array<Maybe<Scalars['String']>>>;
  companyName: Maybe<Scalars['String']>;
  countryCode: CountryCode;
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

export type DimensionalUnitCode =
  | 'CENTIMETER'
  | 'DECIMETER'
  | 'FOOT'
  | 'INCH'
  | 'METER'
  | 'MILLIMETER'
  | 'YARD';

/** Represents a duty amount on a `LandedCost` quote */
export type Duty = {
  __typename?: 'Duty';
  /** `Duty` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Duty` amount is in */
  currency: CurrencyCode;
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

export type DutyTaxFeeConfiguration =
  | 'EXCLUDE_ALL'
  | 'EXCLUDE_DUTY'
  | 'EXCLUDE_FEE'
  | 'EXCLUDE_TAX'
  | 'INCLUDE_ALL'
  | 'INCLUDE_TAX';

export type EmailStatus = 'DISABLED' | 'ENABLED';

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
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['ID'];
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
  /** Average rate for that day - NOT GUARANTEED */
  'MID_MARKET';

/** Represents a fee amount on a `LandedCost` quote */
export type Fee = {
  __typename?: 'Fee';
  /** `Fee` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Fee` amount is in */
  currency: CurrencyCode;
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

export type FindShippingRateByAmountInput = {
  /** `ShippingRate` price amount. */
  amount: Scalars['Decimal'];
  /** The currency this `ShippingRate` price amount is in. */
  currencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode: CountryCode;
  /** The destination location to filter by. */
  location: RateChartLocationInput;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile?: InputMaybe<Scalars['ID']>;
};

export type FindShippingRateByWeightInput = {
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode: CountryCode;
  /** The destination location to filter by. */
  location: RateChartLocationInput;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile?: InputMaybe<Scalars['ID']>;
  /** The weight used to find the applied rate. */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `packagingOption`. */
  weightUnit: WeightUnitCode;
};

export type FindShippingRateInput = {
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** The currency of the supplied amount value. */
  currencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode: CountryCode;
  /** The destination location to filter by. */
  location: RateChartLocationInput;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile?: InputMaybe<Scalars['ID']>;
  /** The weight used to find the applied rate. */
  weight: Scalars['Decimal'];
  /** The weight unit of the supplied weight value */
  weightUnit: WeightUnitCode;
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
  party: Scalars['ID'];
  /** When this FulfillmentCenter was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the FulfillmentCenter. */
  updatedBy: Scalars['ID'];
};

export type FulfillmentCenterCreateInput = {
  /** A reference name to identify the `FulfillmentCenter`. */
  name: Scalars['String'];
  /** The ID of the `Party` to use for the `FulfillmentCenter`. */
  party: Scalars['ID'];
};

/** A shared carrier account to store credentials that can be used to access published rates for the given carrier. */
export type GeneralCarrierAccount = {
  __typename?: 'GeneralCarrierAccount';
  /** The API type to apply to the credentials. */
  apiUsage: Maybe<CarrierAccountApiUsage>;
  /** The `Carrier` associated with the account. */
  carrier: Carrier;
  /** When the GeneralCarrierAccount was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the GeneralCarrierAccount. */
  createdBy: Scalars['ID'];
  /** The API credentials for the GeneralCarrierAccount. */
  credentials: Maybe<Array<CarrierAccountCredential>>;
  /** A unique identifier for the GeneralCarrierAccount. */
  id: Scalars['ID'];
  /** Specifies whether the GeneralCarrierAccount is in live or test mode. */
  mode: Mode;
  /** When the GeneralCarrierAccount was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the GeneralCarrierAccount. */
  updatedBy: Scalars['ID'];
};

export type GeneralCarrierAccountCreateInput = {
  /** The API type to apply to the credentials. */
  apiUsage: CarrierAccountApiUsage;
  /** The carrier associated with the account. */
  carrier: Scalars['ID'];
  /** The credential values to access the account. */
  credentials?: InputMaybe<
    Array<InputMaybe<CarrierAccountCredentialCreateInput>>
  >;
};

export type HelloBehavior =
  | 'AUTO_OPEN'
  | 'COMING_SOON'
  | 'DISABLED'
  | 'NO_AUTO_OPEN'
  | 'RESTRICTED';

export type HelloCurrencyConversion = 'DISABLED' | 'ENABLED';

export type HelloPageType =
  | 'CHECKOUT_PAGE'
  | 'HOME_PAGE'
  | 'POLICY_PAGE'
  | 'PRODUCT_PAGE';

export type HelloPosition =
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'TOP_LEFT'
  | 'TOP_RIGHT';

export type HelloSetting = {
  __typename?: 'HelloSetting';
  allowedDomains: Maybe<Array<Maybe<Scalars['String']>>>;
  configurations: Maybe<Array<Maybe<HelloSettingConfiguration>>>;
  createdAt: Scalars['DateTime'];
  createdBy: Maybe<Scalars['String']>;
  customTriggerElement: Maybe<Scalars['String']>;
  embedSelector: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode: Mode;
  organization: Scalars['String'];
  position: Maybe<HelloPosition>;
  subdomain: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Maybe<Scalars['String']>;
};

export type HelloSettingConfiguration = {
  __typename?: 'HelloSettingConfiguration';
  action: Maybe<Scalars['String']>;
  administrativeAreaCode: Maybe<Scalars['String']>;
  countryCode: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: Maybe<Scalars['String']>;
  currencyConversion: Maybe<HelloCurrencyConversion>;
  embedSelector: Maybe<Scalars['String']>;
  helloSetting: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message: Maybe<Scalars['String']>;
  mode: Mode;
  showIfSelector: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  type: Maybe<HelloPageType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Maybe<Scalars['String']>;
};

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

/** Invoice Connection */
export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  /** Field edges */
  edges: Array<InvoiceEdge>;
  /** Field pageInfo */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Invoice Edge */
export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /** Field cursor */
  cursor: Scalars['String'];
  /** Field node */
  node: Invoice;
};

export type InvoiceFilter = {
  /** Represents a range of dates, before, or after the due date */
  dueDateBetween?: InputMaybe<DateTimeRange>;
  /** Represents a range of dates, before, or after the invoice date */
  invoiceDateBetween?: InputMaybe<DateTimeRange>;
  /** The status of payment for a `CarrierInvoice` */
  status?: InputMaybe<InvoiceStatus>;
};

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

/**
 * An `Item` represents the input for a shopping cart `Item` to be quoted for Landed Cost, Shipment Rating,
 * etc. `Item` is not intended to be stored and used long-term for things like the catalog; it is
 * purely a method for moving data around.
 */
export type Item = {
  __typename?: 'Item';
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
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
  pageInfo: Maybe<PageInfo>;
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
  /** Countries that implemented the control */
  controlCountries: Maybe<Array<Maybe<CountryCode>>>;
  /** Denotes if the control is EXPORT or IMPORT */
  controlType: ControlType;
  /** When this `Restriction` was created */
  createdAt: Scalars['DateTime'];
  /** When this `Restriction stops applying. */
  endsAt: Maybe<Scalars['DateTime']>;
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

export type ItemRestrictionType = 'OBSERVATION' | 'PROHIBITION' | 'RESTRICTION';

export type ItemType =
  | 'DIGITAL_GOOD'
  | 'PHYSICAL_GOOD'
  | 'SERVICE'
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
  id: Scalars['ID'];
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

export type LandedCostAmountSubtotals = {
  __typename?: 'LandedCostAmountSubtotals';
  duties: Scalars['Decimal'];
  fees: Scalars['Decimal'];
  items: Scalars['Decimal'];
  landedCostTotal: Scalars['Decimal'];
  shipping: Scalars['Decimal'];
  taxes: Scalars['Decimal'];
};

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
  | 'ADVANCEMENT'
  | 'BROKERAGE_FEE'
  | 'COD'
  | 'COUNTRY'
  | 'CURRENCY_CONVERSION_FEE'
  | 'DDP_SERVICE_FEE'
  | 'DUTY'
  | 'ITEM'
  | 'OTHER'
  | 'SHIPPING'
  | 'ZONOS_LANDED_COST_GUARANTEE';

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

export type LandedCostInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<LandedCostCalculationMethod>;
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

export type LandedCostWorkFlowInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<LandedCostCalculationMethod>;
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
  /** Creates a `Carton` from a workflow request */
  cartonizeWorkflow: Maybe<Array<Maybe<Carton>>>;
  /** Create a new `CustomsSpec` object */
  customsSpecCreate: Array<Maybe<CustomsSpec>>;
  /** Enhance existing customs data into a new `CustomsSpec` object */
  customsSpecGenerate: Array<Maybe<CustomsSpec>>;
  /** Update an existing `CustomsSpec` object */
  customsSpecUpdate: Array<Maybe<CustomsSpec>>;
  deleteClassifySetting: Result;
  exchangeRateCreate: Maybe<ExchangeRate>;
  /** Create new `Items` */
  itemCreateWorkflow: Array<Item>;
  itemRestrictionApply: ItemRestrictionResult;
  /** Create new `Items`. */
  itemsCreate: Array<Item>;
  /** Allows an API consumer to calculate a new `LandedCost` quote */
  landedCostCalculateWorkflow: Maybe<Array<Maybe<LandedCost>>>;
  orderCreate: Maybe<Order>;
  orderLink: Maybe<Array<Maybe<Order>>>;
  orderUpdateAmountSubtotals: Array<Order>;
  partyCreateWorkflow: Array<Party>;
  partyScreen: Maybe<PartyScreening>;
  /** Create and sumbit a PDDP submission. */
  pddpSubmissionCreate: PddpSubmission;
  rootCreate: Maybe<Root>;
  shipmentCreate: Maybe<Shipment>;
  /** Allows an API consumer to calculate possible `ShipmentRating`s based on the organization's configured settings. */
  shipmentRatingCalculateWorkflow: Array<ShipmentRating>;
  /** Allows an API consumer to create a `shipmentRating`. */
  shipmentRatingCreateWorkflow: Maybe<ShipmentRating>;
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

export type MutationItemCreateWorkflowArgs = {
  input: Array<ItemCreateWorkflowInput>;
};

export type MutationItemRestrictionApplyArgs = {
  input: ItemRestrictionApplyInput;
};

export type MutationItemsCreateArgs = {
  input: Array<ItemInput>;
};

export type MutationLandedCostCalculateWorkflowArgs = {
  input: LandedCostWorkFlowInput;
};

export type MutationOrderCreateArgs = {
  input: OrderCreateInput;
};

export type MutationOrderLinkArgs = {
  input: Array<OrderLinkInput>;
};

export type MutationOrderUpdateAmountSubtotalsArgs = {
  input: Array<OrderUpdateAmountSubtotalsInput>;
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

export type MutationShipmentCreateArgs = {
  input: ShipmentCreateInput;
};

export type MutationShipmentRatingCreateWorkflowArgs = {
  input: ShipmentRatingCreateWorkflowInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type OnlineStoreSettings = {
  __typename?: 'OnlineStoreSettings';
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode: Mode;
  organization: Scalars['String'];
  platform: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  /** The order number from the organizations system. */
  accountOrderNumber: Maybe<Scalars['String']>;
  /** The subtotal amounts that make up the `order` */
  amountSubtotals: AmountSubtotals;
  /** The cartons that are included in the `order`. */
  cartons: Maybe<Array<Carton>>;
  /** When this `Order` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `Order` */
  createdBy: Scalars['ID'];
  /** The currency of the amount subtotals for the `order`. */
  currencyCode: CurrencyCode;
  /** Order ID, prefixed with `order_` */
  id: Scalars['ID'];
  /** The items that are included in the `order`. */
  items: Maybe<Array<Item>>;
  /** The landedCost calculations that are included in the `order`. */
  landedCosts: Maybe<Array<LandedCost>>;
  /** Indicates whether this Order was created in live or test mode */
  mode: Mode;
  /** The `organization` associated with the `order` */
  organization: Scalars['ID'];
  /** The reference information that is included in the `order`. */
  references: Maybe<Array<OrderReference>>;
  /** List of remittances */
  remittance: Maybe<Array<Maybe<Remittance>>>;
  root: Maybe<Root>;
  /** The shipmentRatings that are included in the `order`. */
  shipmentRatings: Maybe<Array<ShipmentRating>>;
  /** The main tracking number for the `order`. */
  trackingNumbers: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `Order` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `order`. */
  updatedBy: Scalars['ID'];
};

export type OrderCompleteInput = {
  /** The order number from the `organization`. */
  accountOrderNumber: Scalars['String'];
  /** The ID of the billing `party`. */
  billTo: Scalars['ID'];
  currencyCode: CurrencyCode;
  /** The grand total of the order. It will be rounded to the nearest penny. */
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  /** The landedCost id that the order will be created from. */
  landedCostId: Scalars['ID'];
  /** The source platform of the order. */
  source?: InputMaybe<Scalars['String']>;
  /** The main tracking number for the `order`. */
  trackingNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

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
  billTo: Scalars['ID'];
  currencyCode: CurrencyCode;
  /** The grand total of the order. It will be rounded to the nearest penny. */
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  /** The landedCost id that the order will be created from. */
  landedCostId: Scalars['ID'];
  /** The source platform of the order. */
  source?: InputMaybe<Scalars['String']>;
  /** The main tracking number for the `order`. */
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
};

/** Reference information provided by Zonos about the order. */
export type OrderReference = {
  __typename?: 'OrderReference';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type OrderUpdateAmountSubtotalsInput = {
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  orderId: Scalars['ID'];
};

export type OrdersFilter = {
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<DateTimeRange>;
  storeId?: InputMaybe<Scalars['String']>;
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

export type PackagingOptionSource = 'DYNAMIC' | 'ORGANIZATION';

export type PackagingOptionsFilter = {
  source?: InputMaybe<PackagingOptionSource>;
  /** The `PackagingType` you are filtering by */
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
  countryCode: MatchType;
  deniedParty: Maybe<DeniedParty>;
  line1: Maybe<MatchType>;
  line2: Maybe<MatchType>;
  locality: Maybe<MatchType>;
  name: Maybe<MatchType>;
  postalCode: Maybe<MatchType>;
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

export type PartyType = 'DESTINATION' | 'ORIGIN' | 'PAYEE' | 'PAYOR';

export type PaymentsSettings = {
  __typename?: 'PaymentsSettings';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  dayOfWeek: Maybe<Day>;
  endOfDayBehavior: Maybe<EndOfDayBehavior>;
  frequencyDays: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  lcgBillingMethod: Maybe<LcgBillingMethod>;
  minimum: Maybe<Scalars['Int']>;
  mode: Mode;
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
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
  /** The ID of the associated order */
  orderId: Scalars['String'];
  /** The origin postal operator, UPU Code */
  originPost: Scalars['String'];
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier: Scalars['String'];
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
  /** The ID of the order for which to submit for PDDP */
  orderId: Scalars['String'];
  /** The tracking number associated with this submission */
  trackingNumber: Scalars['String'];
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
  /** A date range for when the PDDP submission was created to filter by */
  createdDate?: InputMaybe<DateTimeRange>;
  /** The destination postal operator, UPU Code */
  destinationPost?: InputMaybe<Scalars['String']>;
  /** The ID of the associated order */
  orderId?: InputMaybe<Scalars['String']>;
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier?: InputMaybe<Scalars['String']>;
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
  /** The order ID associated with the log */
  orderId: Scalars['String'];
  /** The ID of the PDDP submission associated with the log */
  pddpSubmission: Maybe<Scalars['ID']>;
  /** The request from the PDDP submission */
  request: Scalars['String'];
  /** The response from the PDDP submission */
  response: Scalars['String'];
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
  /** The ID of the associated order */
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

export type PropertyType = 'COMMERCIAL' | 'RESIDENTAL' | 'RESIDENTIAL';

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
  /** Returns a list of `Carrier` resources by ID. */
  carriers: Maybe<Array<Maybe<Carrier>>>;
  /** Returns a `Carton` resource by `ID` */
  carton: Maybe<Carton>;
  /** Returns a list of `Carton` objects that apply to a `root` */
  cartons: Maybe<Array<Maybe<Carton>>>;
  currencyFormat: Maybe<CurrencyFormat>;
  /** Retrieve a `CustomsSpec` by ID */
  customsSpec: Maybe<CustomsSpec>;
  /** Retrieve a list of `CustomsSpec` objects */
  customsSpecs: Maybe<CustomsSpecConnection>;
  exchangeRate: Maybe<ExchangeRate>;
  /** Returns a `FulfillmentCenter` object by ID. */
  fulfillmentCenter: Maybe<FulfillmentCenter>;
  /** Returns a list of `FulfillmentCenter` objects for an `Organization` */
  fulfillmentCenters: Maybe<Array<Maybe<FulfillmentCenter>>>;
  getPerson: Maybe<Person>;
  /** Retrieve an `InvoiceConnection` based on a `InvoiceFilter` criteria */
  invoices: InvoiceConnection;
  /** Returns an `Item` resource by ID. */
  item: Maybe<Item>;
  itemRestrictionResult: Maybe<ItemRestrictionResult>;
  /** Returns a list of `Item` resources. */
  items: Maybe<ItemConnection>;
  /** Returns a `LandedCost` resource by `ID` */
  landedCost: Maybe<LandedCost>;
  /** Returns a list of `LandedCost` resources */
  landedCosts: Maybe<LandedCostConnection>;
  location: Maybe<Location>;
  order: Maybe<Order>;
  orders: Maybe<OrderConnection>;
  /** Returns a `PackagingOption` resource by `ID` */
  packagingOption: Maybe<PackagingOption>;
  /** Returns a list of `PackagingOption` objects that apply to an `organization` */
  packagingOptions: Maybe<Array<Maybe<PackagingOption>>>;
  parties: Maybe<Array<Maybe<Party>>>;
  partiesFindAllById: Maybe<Array<Maybe<Party>>>;
  party: Maybe<Party>;
  /** Return a PDDP submission by an ID. */
  pddpSubmission: Maybe<PddpSubmission>;
  /** Return a PDDP submission log by an ID. */
  pddpSubmissionLog: Maybe<PddpSubmissionLog>;
  /** Returns a paginated list of PDDP submissions logs. */
  pddpSubmissionLogs: Maybe<PddpSubmissionLogConnection>;
  /** Returns a paginated list of PDDP submissions. */
  pddpSubmissions: Maybe<PddpSubmissionConnection>;
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
  /** Returns a `ShipmentRating` resource by ID. */
  shipmentRating: Maybe<ShipmentRating>;
  /** Returns a list  of `ShipmentRating` resources with the given filters. */
  shipmentRatings: Maybe<Array<Maybe<ShipmentRating>>>;
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
export type QueryCurrencyFormatArgs = {
  input: CurrencyCode;
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
export type QueryInvoicesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<InvoiceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
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
export type QueryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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
export type QueryShipmentRatingArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentRatingsArgs = {
  filter: InputMaybe<ShipmentRatingsFilter>;
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
  filter: ShippingZonesFilter;
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

export type RateChartLocationInput = {
  /** A single administrative area code if one applies to this location. */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** A single country code if one applies to this location. */
  countryCode: CountryCode;
  /** A single postal code if one applies to the location. */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The ID of the `ServiceLevelArea`. */
  serviceLevelArea?: InputMaybe<Scalars['ID']>;
};

export type Remittance = {
  __typename?: 'Remittance';
  amount: Scalars['Decimal'];
  description: Scalars['String'];
  note: Scalars['String'];
};

export type Result = 'FAILURE' | 'SUCCESS';

/** A `Root` serves as a wrapper for various resources, such as `LandedCost` and `ShipmentRating` */
export type Root = {
  __typename?: 'Root';
  cartons: Maybe<Array<Maybe<Carton>>>;
  exchangeRates: Array<ExchangeRate>;
  /** `Root` ID, prefixed with `root_`. */
  id: Scalars['ID'];
  items: Maybe<Array<Maybe<Item>>>;
  landedCosts: Maybe<Array<Maybe<LandedCost>>>;
  /** The `Order` placed between the root `parties`. */
  order: Maybe<Order>;
  parties: Maybe<Array<Maybe<Party>>>;
  shipmentRatings: Maybe<Array<Maybe<ShipmentRating>>>;
};

/** Root Connection */
export type RootConnection = {
  __typename?: 'RootConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<RootEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
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

export type ScreenExistingPartyInput = {
  partyId: Scalars['ID'];
};

export type ScreenPartyInput = {
  location?: InputMaybe<DeniedPartyLocationInput>;
  person?: InputMaybe<DeniedPartyPersonInput>;
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

export type ServiceLevelAreaCreateInput = {
  /** Regular expression of administrative area codes that apply to the area. */
  administrativeAreaCodePattern?: InputMaybe<Scalars['String']>;
  /** Regular expression of country codes that apply to the area. */
  countryCodePattern?: InputMaybe<Scalars['String']>;
  /** Name of the area (ie. CA-1) */
  name: Scalars['String'];
  /** Regular expression of postal codes that apply to the area */
  postalCodePattern?: InputMaybe<Scalars['String']>;
  /** The ID of the `ServiceLevel` the `ServiceLevelArea` applies to */
  serviceLevel: Scalars['ID'];
};

/** Update an existing ServiceLevelArea. Any fields that are null will not modify the SerivceLevelArea. */
export type ServiceLevelAreaUpdateInput = {
  /** Regular expression of administrative area codes that apply to the area */
  administrativeAreaCodePattern?: InputMaybe<Scalars['String']>;
  /** Regular expression of country codes that apply to the area */
  countryCodePattern?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the `ServiceLevelArea`. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the `ServiceLevelArea`. */
  name?: InputMaybe<Scalars['String']>;
  /** Regular expression of postal codes that apply to the area */
  postalCodePattern?: InputMaybe<Scalars['String']>;
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
  pageInfo: Maybe<PageInfo>;
};

export type ServiceLevelCreateInput = {
  /** Enumerated value that specifies whether a service level is available to all customers or is specifically contracted */
  availability: ServiceLevelAvailability;
  /** The ID of the `Carrier` associated with the `ServiceLevel`. */
  carrier: Scalars['ID'];
  /** The code for the `ServiceLevel` as defined by the external carrier API. */
  carrierApiCode: Scalars['String'];
  /** The code used to generate labels for this ServiceLevel defined by the external carrier API. */
  carrierLabelApiCode?: InputMaybe<Scalars['String']>;
  /** The enumerated value of `ServiceLevel` options that can be sent in the API. */
  code: Scalars['String'];
  /** The method of delivery that indicates how the clearance is processed with this `ServiceLevel`. */
  deliveryType?: InputMaybe<DeliveryType>;
  /** The humanly-memorable display name for the `ServiceLevel`. */
  name: Scalars['String'];
  /** Transit Time breakdown that applies to the `ServiceLevel`. */
  transitTime?: InputMaybe<TransitTimeInput>;
};

/** ServiceLevel Edge */
export type ServiceLevelEdge = {
  __typename?: 'ServiceLevelEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ServiceLevel>;
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

export type ServiceLevelRateChartByAmountCreateInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ServiceLevelRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ServiceLevelRateChart`. */
  rates: Array<ShippingRateCreateInput>;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The `CurrencyCode` to be used for the supplied rates. */
  unit: CurrencyCode;
};

export type ServiceLevelRateChartByWeightCreateInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ServiceLevelRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ServiceLevelRateChart`. */
  rates: Array<ShippingRateCreateInput>;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The weight unit to be used for the supplied rates. */
  unit: WeightUnitCode;
};

export type ServiceLevelRateChartsFilter = {
  /** The ID of the `ServiceLevel`. */
  serviceLevel: Scalars['ID'];
};

export type ServiceLevelUpdateInput = {
  /** Enumerated value that specifies whether a service level is available to all customers or is specifically contracted */
  availability: ServiceLevelAvailability;
  /** The code for the `ServiceLevel` as defined by the external carrier API. */
  carrierApiCode: Scalars['String'];
  /** The code used to generate labels for this ServiceLevel defined by the external carrier API. */
  carrierLabelApiCode?: InputMaybe<Scalars['String']>;
  /** The method of delivery that indicates how the clearance is processed with this `ServiceLevel`. */
  deliveryType?: InputMaybe<DeliveryType>;
  /** A unique identifier for the `ServiceLevel`. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the `ServiceLevel`. */
  name: Scalars['String'];
  /** `TransitTime` breakdown that applies to the `ServiceLevel`. */
  transitTime?: InputMaybe<TransitTimeInput>;
};

export type Shipment = Node & {
  __typename?: 'Shipment';
  /** The date and time this Shipment was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Shipment */
  createdBy: Scalars['ID'];
  customsSpec: Maybe<CustomsSpec>;
  /** A unique identifier for the shipment */
  id: Scalars['ID'];
  /** The `Order` associated with this Shipment */
  order: Order;
  /** All of the `Party`s involved with this Shipment */
  parties: Array<Party>;
  /** The `ServiceLevel` utilized by the `Carrier` for this Shipment */
  serviceLevel: ServiceLevel;
  /** A list of `ShipmentCarton`s related to this Shipment */
  shipmentCartons: Array<ShipmentCarton>;
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
  /** The `Carton` related to this ShipmentCarton */
  carton: Carton;
  /** A unique identifier for this ShipmentCarton */
  id: Scalars['ID'];
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
  /** The reference to the item included in this `ShipmentCarton`: SKU, Product ID, or `Item` ID */
  itemReference: Scalars['String'];
  /** The quantity of the `Item` in this `ShipmentCarton` */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ShipmentConnection = {
  __typename?: 'ShipmentConnection';
  edges: Maybe<Array<Maybe<ShipmentEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ShipmentCreateInput = {
  /** A flag to say if a `CustomSpec` should be generated from this Shipment */
  generateCustoms: Scalars['Boolean'];
  /** A flag to say if a `Label` should be generated from this Shipment */
  generateLabel: Scalars['Boolean'];
  /** The ID of the `Order` this Shipment belongs to */
  orderId: Scalars['ID'];
  /** The list of `Party`s related to this Shipment, if different than all the parties on the `Order` */
  parties?: InputMaybe<Array<Scalars['ID']>>;
  /** The `ServiceLevel` that the shipment is shipping with, if different that the service level on the `Order` */
  serviceLevel?: InputMaybe<Scalars['ID']>;
  /** A list of details about the `ShipmentCarton`s for this Shipment, if the items and packaging options are different than those on the `Order` */
  shipmentCartons?: InputMaybe<Array<ShipmentCartonInput>>;
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

/**  These partition the cartons. */
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

/** Input to create a non-calculated shipmentRating. */
export type ShipmentRatingCreateInput = {
  /** The amount for the `ShipmentRating`. */
  amount: Scalars['Decimal'];
  /** The currency this `ShipmentRating` price amount is in. */
  currencyCode: CurrencyCode;
  /** The customer facing display name of the `ShipmentRating`. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The `Root` resource that this `ShipmentRating` belongs to. */
  rootId: Scalars['ID'];
  /** The `ServiceLevel` code associated with the `ShipmentRating`. */
  serviceLevelCode: Scalars['String'];
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

/** Provides a `ShipmentRating` for an order based on values associated with the given `Root` ID. */
export type ShipmentRatingsCalculateInput = {
  /** The `Root` resource that this `ShipmentRating` belongs to. */
  rootId: Scalars['ID'];
};

export type ShipmentRatingsFilter = {
  /** A two-letter ISO country code */
  countryCode?: InputMaybe<CountryCode>;
  /** The ID of the `ServiceLevel` the `ShipmentRating` was calculated from */
  serviceLevel?: InputMaybe<Scalars['ID']>;
};

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

export type ShippingProfileCreateInput = {
  /** A customized carrier service level code to identify how to fulfill the shipment. */
  customServiceLevelCode?: InputMaybe<Scalars['String']>;
  /** The method to use for the landed cost calculation for the `ShippingProfile`. */
  landedCostMethod: LandedCostMethod;
  /** The humanly-memorable display name of the `ShippingProfile`. */
  name?: InputMaybe<Scalars['String']>;
  /** The `ServiceLevel` that should be used to check for rates. */
  serviceLevel: Scalars['ID'];
  /** The shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The shipping value increase */
  shippingValueIncrease?: InputMaybe<Scalars['Decimal']>;
  /** `TransitTime` breakdown that applies to the `ShippingProfile`. */
  transitTime?: InputMaybe<TransitTimeInput>;
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

export type ShippingProfileRateChartByAmountCreateInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ShippingProfileRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ShippingProfileRateChart`. */
  rates: Array<ShippingRateCreateInput>;
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
  /** The `CurrencyCode` to be used for the supplied rates. */
  unit: CurrencyCode;
};

export type ShippingProfileRateChartByWeightCreateInput = {
  /** The `CurrencyCode` to be used for the amounts in the supplied rates. */
  amountCurrencyCode: CurrencyCode;
  /** The `shipFrom` `CountryCode` that applies to filter by. */
  fromCountryCode?: InputMaybe<CountryCode>;
  /** The destination locations for the `ShippingProfileRateChart`. */
  locations?: InputMaybe<Array<ShippingRateLocationCreateInput>>;
  /** The rates of the `ShippingProfileRateChart`. */
  rates: Array<ShippingRateCreateInput>;
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
  /** The weight unit to be used for the supplied rates. */
  unit: WeightUnitCode;
};

export type ShippingProfileRateChartsFilter = {
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
};

export type ShippingProfileUpdateInput = {
  /** A customized carrier service level code to identify how to fulfill the shipment. */
  customServiceLevelCode?: InputMaybe<Scalars['String']>;
  /** `ShippingProfile` ID, prefixed with `shipping_profile_.` */
  id: Scalars['ID'];
  /** The method to use for the landed cost calculation for the `shippingProfile`. */
  landedCostMethod: LandedCostMethod;
  /** The humanly-memorable display name of the `ShippingProfile`. */
  name: Scalars['String'];
  /** The shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The shipping value increase */
  shippingValueIncrease?: InputMaybe<Scalars['Decimal']>;
  /** `TransitTime` breakdown that applies to the `ShippingProfile`. */
  transitTime?: InputMaybe<TransitTimeInput>;
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

export type ShippingRateCreateInput = {
  /** The applied rate amount. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ShippingRateCalculation;
  /** The inclusive maximum that applies to the given rate. */
  maxUnit?: InputMaybe<Scalars['Decimal']>;
  /** The exclusive minimum that applies to the given rate. */
  minUnit?: InputMaybe<Scalars['Decimal']>;
};

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

export type ShippingRateLocationCreateInput = {
  /** Which administrative area the shipper must be located in to trigger this configuration. */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The address' two-letter country ISO code. */
  countryCode?: InputMaybe<CountryCode>;
  /** The `ServiceLevelArea` that applies to the `ShippingRateLocation` */
  serviceLevelArea?: InputMaybe<Scalars['ID']>;
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

export type ShippingStoreSettingsCreateInput = {
  /** An additional fee that can be added to `ShippingRate`s */
  additionalFee?: InputMaybe<Scalars['Decimal']>;
  /** Display transit time inline */
  displayTransitTimeInline?: InputMaybe<Scalars['Boolean']>;
  /** A buffer amount to be applied to duty and tax amounts */
  dutyTaxBuffer?: InputMaybe<Scalars['Decimal']>;
  /** A buffer represented as a percentage to be applied to duty and tax amounts */
  dutyTaxBufferPercent?: InputMaybe<Scalars['Decimal']>;
  /** Fulfillment days */
  fulfillmentDays?: InputMaybe<Scalars['Int']>;
  /** Landed cost countries */
  landedCostCountries?: InputMaybe<Scalars['String']>;
  /** Landed cost prepay */
  landedCostPrepay?: InputMaybe<Scalars['String']>;
  /** Pickup time */
  pickupTime?: InputMaybe<Scalars['DateTime']>;
  /** Shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The ID of the store these settings apply to */
  storeId: Scalars['Int'];
  /** The stores Tax Payer Identification (TIN) number */
  tinNumber?: InputMaybe<Scalars['String']>;
  /** The type of TIN number ex. Business National, Personal State */
  tinType?: InputMaybe<Scalars['String']>;
};

export type ShippingStoreSettingsUpdateInput = {
  /** An additional fee that can be added to `ShippingRate`s */
  additionalFee?: InputMaybe<Scalars['Decimal']>;
  /** Display transit time inline */
  displayTransitTimeInline?: InputMaybe<Scalars['Boolean']>;
  /** A buffer amount to be applied to duty and tax amounts */
  dutyTaxBuffer?: InputMaybe<Scalars['Decimal']>;
  /** A buffer represented as a percentage to be applied to duty and tax amounts */
  dutyTaxBufferPercent?: InputMaybe<Scalars['Decimal']>;
  /** Fulfillment days */
  fulfillmentDays?: InputMaybe<Scalars['Int']>;
  /** A unique identifier for the ShippingStoreSettings. */
  id: Scalars['ID'];
  /** Landed cost countries */
  landedCostCountries?: InputMaybe<Scalars['String']>;
  /** Landed cost prepay */
  landedCostPrepay?: InputMaybe<Scalars['String']>;
  /** Pickup time */
  pickupTime?: InputMaybe<Scalars['DateTime']>;
  /** Shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The ID of the store these settings apply to */
  storeId?: InputMaybe<Scalars['Int']>;
  /** The stores Tax Payer Identification (TIN) number */
  tinNumber?: InputMaybe<Scalars['String']>;
  /** The type of TIN number ex. Business National, Personal State */
  tinType?: InputMaybe<Scalars['String']>;
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

export type ShippingZoneCreateInput = {
  /** A list of two-letter ISO country codes that are supported by this `ShippingZone`. */
  countryCodes?: InputMaybe<Array<CountryCode>>;
  /** The `FulfillmentCenter` ID that services the `ShippingZone`. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration?: InputMaybe<ZoneLandedCostConfiguration>;
  /** The humanly memorable display name associated with the `ShippingZone` as prescribed by the party who created it. */
  name: Scalars['String'];
  /** A list of shipping profile IDs associated with the `ShippingZone`. */
  profiles?: InputMaybe<Array<Scalars['ID']>>;
};

export type ShippingZoneUpdateInput = {
  /** A list of two-letter ISO country codes that are supported by this `ShippingZone`. */
  countryCodes?: InputMaybe<Array<CountryCode>>;
  /** The `FulfillmentCenter` ID that services the `ShippingZone`. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** A unique identifier for the ShippingZone. */
  id: Scalars['ID'];
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration?: InputMaybe<ZoneLandedCostConfiguration>;
  /** The humanly-memorable display name for the `ShippingZone`. */
  name?: InputMaybe<Scalars['String']>;
  /** A list of shipping profile IDs associated with the `ShippingZone`. */
  profiles?: InputMaybe<Array<Scalars['ID']>>;
};

export type ShippingZonesFilter = {
  /** A two-letter ISO country code. */
  countryCode: CountryCode;
};

export type StageUploadResult = {
  __typename?: 'StageUploadResult';
  /** ID of the `StagedUploadResult`. */
  id: Scalars['ID'];
  /** URL designating where to upload the resource. */
  url: Scalars['String'];
};

/** Represents a tax amount on a `LandedCost` quote */
export type Tax = {
  __typename?: 'Tax';
  /** `Tax` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Tax` amount is in */
  currency: CurrencyCode;
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

export type TaxId = {
  __typename?: 'TaxId';
  allowLowValueOrders: Maybe<Scalars['Boolean']>;
  countryCode: CountryCode;
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['DateTime']>;
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
  countryCodes?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  taxIdType?: InputMaybe<Array<InputMaybe<TaxIdType>>>;
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

export type TaxMethodType = 'CONSIGNMENT' | 'DEFAULT';

export type TokenTypeCategory = 'AUXILIARY' | 'FUNCTIONAL';

export type Tracking = Node & {
  __typename?: 'Tracking';
  /** A unique identifier for this Tracking */
  id: Scalars['ID'];
  /** The `Label` related to this Tracking */
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

export type TransitTimeInput = {
  /** ISO-8601 timestamp of when the delivery will be delivered. Only the time portion will be used. */
  guaranteedDelivery?: InputMaybe<Scalars['DateTime']>;
  /** The maximum number of transit days. */
  max?: InputMaybe<Scalars['Int']>;
  /** The minimum number of transit days. */
  min?: InputMaybe<Scalars['Int']>;
  /** Indicates what type of value the min and max fields represent. (default: days) */
  type?: InputMaybe<TransitTypeCode>;
};

export type TransitTypeCode = 'BUSINESS_DAYS' | 'DAYS' | 'WEEKS';

export type UpdateBrandingSettingsInput = {
  iconUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  logoUrl?: InputMaybe<Scalars['String']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  secondaryColor?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
};

/**
 * input CarrierAccountCreateCredentialInput {
 *     """The type of credential that applies to the value."""
 *     type: CarrierCredentialTypeCode!
 *     """The value of the credential."""
 *     value: String!
 * }
 */
export type UpdateCarrierAccountInput = {
  /** Where the credentials are stored. */
  credentialProvider: CredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials: Array<CreateCarrierAccountCredentialInput>;
  /** A unique identifier for the CarrierAccount. */
  id: Scalars['ID'];
};

export type UpdateCarrierInput = {
  /** The `Carrier`'s API credentials. */
  credentials?: InputMaybe<Array<CreateCarrierCredentialInput>>;
  /** A unique identifier for the Carrier. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the `Carrier`. */
  name: Scalars['String'];
};

export type UpdateCheckoutSettingsInput = {
  analytics?: InputMaybe<Array<InputMaybe<CheckoutSettingsAnalyticInput>>>;
  checkoutNotes?: InputMaybe<CheckoutNote>;
  customCss?: InputMaybe<Scalars['String']>;
  customJavaScript?: InputMaybe<Scalars['String']>;
  defaultDisplayCurrencyCode?: InputMaybe<Scalars['String']>;
  emails?: InputMaybe<CheckoutEmailsInput>;
  id: Scalars['String'];
  privacy?: InputMaybe<CheckoutPrivacySettingInput>;
  subdomain?: InputMaybe<Scalars['String']>;
  successUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type UpdateCountryConstraintInput = {
  /** Represents a `Constraint` around a specific attribute that applies to all countries. */
  constraints?: InputMaybe<Array<ConstraintInput>>;
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling?: InputMaybe<BillingOptionCode>;
  /** A unique identifier for the `CountryConstraint`. */
  id: Scalars['ID'];
  /** List of incoterms supported by the `CountryConstraint`. */
  incoterm?: InputMaybe<Array<IncotermCode>>;
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<CountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<CountryCode>;
  /** `TransitTime` breakdown that applies to the `CountryConstraint`. */
  transitTime?: InputMaybe<TransitTimeInput>;
  /** The weight unit associated with the `CountryConstraint`. */
  weightUnit?: InputMaybe<WeightUnitCode>;
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

export type UpdateOnlineStoreSettingsInput = {
  id: Scalars['String'];
  platform: Scalars['String'];
  url: Scalars['String'];
};

export type UpdatePaymentsSettingsInput = {
  dayOfWeek: Day;
  endOfDayBehavior: EndOfDayBehavior;
  frequencyDays: Scalars['Int'];
  id: Scalars['String'];
  minimum: Scalars['Int'];
};

/** Update an existing ServiceLevelArea. Any fields that are null will not modify the SerivceLevelArea. */
export type UpdateServiceLevelAreaInput = {
  /** Regular expression of administrative area codes that apply to the area */
  administrativeAreaCodePattern?: InputMaybe<Scalars['String']>;
  /** Regular expression of country codes that apply to the area */
  countryCodePattern?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the `ServiceLevelArea`. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the `ServiceLevelArea`. */
  name?: InputMaybe<Scalars['String']>;
  /** Regular expression of postal codes that apply to the area */
  postalCodePattern?: InputMaybe<Scalars['String']>;
};

export type UpdateServiceLevelInput = {
  /** Enumerated value that specifies whether a service level is available to all customers or is specifically contracted */
  availability: ServiceLevelAvailability;
  /** The code for the `ServiceLevel` as defined by the external carrier API. */
  carrierApiCode: Scalars['String'];
  /** The method of delivery that indicates how the clearance is processed with this `ServiceLevel`. */
  deliveryType?: InputMaybe<DeliveryType>;
  /** A unique identifier for the `ServiceLevel`. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the `ServiceLevel`. */
  name: Scalars['String'];
  /** `TransitTime` breakdown that applies to the `ServiceLevel`. */
  transitTime?: InputMaybe<TransitTimeInput>;
};

export type UpdateShippingProfileInput = {
  /** A customized carrier service level code to identify how to fulfill the shipment. */
  customServiceLevelCode?: InputMaybe<Scalars['String']>;
  /** `ShippingProfile` ID, prefixed with `shipping_profile_.` */
  id: Scalars['ID'];
  /** The method to use for the landed cost calculation for the `shippingProfile`. */
  landedCostMethod: LandedCostMethod;
  /** The humanly-memorable display name of the `ShippingProfile`. */
  name: Scalars['String'];
  /** The shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The shipping value increase */
  shippingValueIncrease?: InputMaybe<Scalars['Decimal']>;
  /** `TransitTime` breakdown that applies to the `ShippingProfile`. */
  transitTime?: InputMaybe<TransitTimeInput>;
};

export type UpdateShippingSettingsInput = {
  defaultWeightMultiplier: Scalars['Decimal'];
  id: Scalars['String'];
};

export type UpdateShippingStoreSettingsInput = {
  /** An additional fee that can be added to `ShippingRate`s */
  additionalFee?: InputMaybe<Scalars['Decimal']>;
  /** Display transit time inline */
  displayTransitTimeInline?: InputMaybe<Scalars['Boolean']>;
  /** A buffer amount to be applied to duty and tax amounts */
  dutyTaxBuffer?: InputMaybe<Scalars['Decimal']>;
  /** A buffer represented as a percentage to be applied to duty and tax amounts */
  dutyTaxBufferPercent?: InputMaybe<Scalars['Decimal']>;
  /** Fulfillment days */
  fulfillmentDays?: InputMaybe<Scalars['Int']>;
  /** A unique identifier for the ShippingStoreSettings. */
  id: Scalars['ID'];
  /** Landed cost countries */
  landedCostCountries?: InputMaybe<Scalars['String']>;
  /** Landed cost prepay */
  landedCostPrepay?: InputMaybe<Scalars['String']>;
  /** Pickup time */
  pickupTime?: InputMaybe<Scalars['DateTime']>;
  /** Shipping percent increase */
  shippingPercentIncrease?: InputMaybe<Scalars['Decimal']>;
  /** The ID of the store these settings apply to */
  storeId?: InputMaybe<Scalars['Int']>;
  /** The stores Tax Payer Identification (TIN) number */
  tinNumber?: InputMaybe<Scalars['String']>;
  /** The type of TIN number ex. Business National, Personal State */
  tinType?: InputMaybe<Scalars['String']>;
};

export type UpdateShippingZoneInput = {
  /** A list of two-letter ISO country codes that are supported by this `ShippingZone`. */
  countryCodes?: InputMaybe<Array<CountryCode>>;
  /** The `FulfillmentCenter` ID that services the `ShippingZone`. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** A unique identifier for the ShippingZone. */
  id: Scalars['ID'];
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration?: InputMaybe<ZoneLandedCostConfiguration>;
  /** The humanly-memorable display name for the `ShippingZone`. */
  name: Scalars['String'];
  /** A list of shipping profile IDs associated with the `ShippingZone`. */
  profiles?: InputMaybe<Array<Scalars['ID']>>;
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

export type WeightUnitCode = 'GRAM' | 'KILOGRAM' | 'OUNCE' | 'POUND';

export type ZoneLandedCostConfiguration =
  /** The landed cost method will be DAP. */
  | 'DAP_FORCED'
  /** The landed cost method will be determined by the `LandedCostMethod` on the `ShippingProfile` used in this zone. */
  | 'SHIPPING_PROFILE';

export type GetLandedCostQueryVariables = Exact<{
  input: Scalars['ID'];
}>;

export type GetLandedCostQuery = { __typename?: 'Query' } & {
  landedCost: Maybe<
    { __typename?: 'LandedCost' } & Pick<LandedCost, 'id' | 'rootId'>
  >;
};

export type CurrencyFormatQueryVariables = Exact<{
  input: CurrencyCode;
}>;

export type CurrencyFormatQuery = { __typename?: 'Query' } & {
  currencyFormat: Maybe<
    { __typename?: 'CurrencyFormat' } & Pick<
      CurrencyFormat,
      | 'decimalDelimiter'
      | 'thousandsDelimiter'
      | 'scale'
      | 'symbol'
      | 'symbolLocation'
    >
  >;
};

export type RootCreateMutationVariables = Exact<{ [key: string]: never }>;

export type RootCreateMutation = { __typename?: 'Mutation' } & {
  rootCreate: Maybe<{ __typename?: 'Root' } & Pick<Root, 'id'>>;
};

export const GetLandedCostDocument = gql`
  query getLandedCost($input: ID!) {
    landedCost(id: $input) {
      id
      rootId
    }
  }
`;
export const CurrencyFormatDocument = gql`
  query currencyFormat($input: CurrencyCode!) {
    currencyFormat(input: $input) {
      decimalDelimiter
      thousandsDelimiter
      scale
      symbol
      symbolLocation
    }
  }
`;
export const RootCreateDocument = gql`
  mutation rootCreate {
    rootCreate {
      id
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
    getLandedCost(
      variables: GetLandedCostQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetLandedCostQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetLandedCostQuery>(GetLandedCostDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getLandedCost',
        'query'
      );
    },
    currencyFormat(
      variables: CurrencyFormatQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CurrencyFormatQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<CurrencyFormatQuery>(
            CurrencyFormatDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'currencyFormat',
        'query'
      );
    },
    rootCreate(
      variables?: RootCreateMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RootCreateMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<RootCreateMutation>(RootCreateDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'rootCreate',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
