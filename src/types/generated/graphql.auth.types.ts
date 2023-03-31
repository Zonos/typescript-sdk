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
  _FieldSet: string;
};

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

/**  input schemas */
export type CreateCredentialInput = {
  assignableRoles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiredAt?: InputMaybe<Scalars['DateTime']>;
  mode: Mode;
  name?: InputMaybe<Scalars['String']>;
  organization: Scalars['String'];
  roles?: InputMaybe<Array<Scalars['String']>>;
  type: CredentialType;
  user?: InputMaybe<Scalars['String']>;
};

/**  schemas */
export type Credential = {
  __typename?: 'Credential';
  assignableRoles: Maybe<Array<Maybe<Scalars['ID']>>>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  expiredAt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastUsedAt: Maybe<Scalars['String']>;
  mode: Mode;
  multiFactorAuthenticated: Maybe<MultiFactorAuthenticated>;
  name: Maybe<Scalars['String']>;
  organization: Scalars['ID'];
  roles: Maybe<Array<Scalars['ID']>>;
  type: Maybe<CredentialType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
  user: Maybe<User>;
};

export type CredentialConnection = {
  __typename?: 'CredentialConnection';
  edges: Maybe<Array<Maybe<CredentialEdge>>>;
  pageInfo: Maybe<PageInfo>;
};

export type CredentialEdge = {
  __typename?: 'CredentialEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Credential>;
};

export type CredentialFilter = {
  expiredAtAfter?: InputMaybe<Scalars['DateTime']>;
  expiredAtBefore?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<CredentialType>;
  user?: InputMaybe<Scalars['ID']>;
};

/**  schemas */
export type CredentialServiceToken = {
  __typename?: 'CredentialServiceToken';
  credential: Maybe<Credential>;
  id: Maybe<Scalars['ID']>;
  mode: Maybe<Mode>;
  organization: Maybe<Scalars['String']>;
  serviceToken: Maybe<Scalars['String']>;
  storeId: Maybe<Scalars['Int']>;
};

export type CredentialServiceTokenQueryInput = {
  mode: Mode;
  storeId: Scalars['Int'];
};

export type CredentialSession = {
  __typename?: 'CredentialSession';
  createdAt: Scalars['DateTime'];
  credential: Scalars['ID'];
  id: Scalars['ID'];
  mode: Mode;
  organization: Scalars['ID'];
  /**  list of permission name */
  permissions: Maybe<Array<Scalars['String']>>;
  serviceToken: Maybe<Scalars['String']>;
  store: Maybe<Scalars['Int']>;
  user: Maybe<Scalars['ID']>;
  validUntil: Maybe<Scalars['DateTime']>;
};

export type CredentialType =
  | 'API_TOKEN'
  | 'HELLO_TOKEN'
  | 'SERVICE_TOKEN'
  | 'USER_TOKEN';

export type CredentialUpdateInput = {
  assignableRoles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiredAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
};

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

/**  input schemas */
export type MigrateCredentialServiceTokenInput = {
  email?: InputMaybe<Scalars['String']>;
  organizationName: Scalars['String'];
  storeId: Scalars['Int'];
};

export type Mode = 'LIVE' | 'TEST';

export type MultiFactorAuthenticated =
  | 'IN_PROGRESS'
  | 'NOT_VERIFIED'
  | 'VERIFIED';

export type MultiFactorAuthenticationMode =
  | 'EMAIL'
  | 'EMAIL_NOT_VERIFIED'
  | 'NOT_VERIFIED'
  | 'SMS'
  | 'SMS_NOT_VERIFIED';

export type Mutation = {
  __typename?: 'Mutation';
  createCredential: Credential;
  /** When a subscription is created/turned on, we will assign all the given roles via this operation call, for all the respective organizations admin users as assignable roles */
  credentialAddSubscriptionRoles: Maybe<Result>;
  /** When a subscription is no longer valid, we will remove all the given roles via this operation call, for all the respective organizations credentials */
  credentialRemoveSubscriptionRoles: Maybe<Result>;
  credentialUpdate: Credential;
  deleteCredential: Maybe<Result>;
  login: Maybe<CredentialSession>;
  loginLegacy: Maybe<CredentialSession>;
  migrateCredentialServiceToken: Result;
  roleCreate: Maybe<Role>;
  roleDelete: Maybe<Result>;
  roleGlobalCreate: Maybe<Role>;
  roleUpdate: Maybe<Role>;
  roleValidateSlug: Maybe<Scalars['Boolean']>;
  updateCredentialSessionContext: CredentialSession;
  userCreate: User;
  /**  normal password reset. */
  userPasswordUpdate: Maybe<Result>;
  userUpdate: User;
  validateCredential: Maybe<CredentialSession>;
};

export type MutationCreateCredentialArgs = {
  createCredentialInput: CreateCredentialInput;
};

export type MutationCredentialAddSubscriptionRolesArgs = {
  organizationIds: Array<Scalars['ID']>;
  roles: Array<Scalars['ID']>;
};

export type MutationCredentialRemoveSubscriptionRolesArgs = {
  organizationIds: Array<Scalars['ID']>;
  roles: Array<Scalars['ID']>;
};

export type MutationCredentialUpdateArgs = {
  input: CredentialUpdateInput;
};

export type MutationDeleteCredentialArgs = {
  id: Scalars['ID'];
};

export type MutationLoginArgs = {
  input: InputMaybe<UserLoginInput>;
};

export type MutationLoginLegacyArgs = {
  input: InputMaybe<UserLoginLegacyInput>;
};

export type MutationMigrateCredentialServiceTokenArgs = {
  input: InputMaybe<MigrateCredentialServiceTokenInput>;
};

export type MutationRoleCreateArgs = {
  input: RoleCreateInput;
};

export type MutationRoleDeleteArgs = {
  id: InputMaybe<Scalars['String']>;
};

export type MutationRoleGlobalCreateArgs = {
  input: InputMaybe<RoleGlobalCreateInput>;
};

export type MutationRoleUpdateArgs = {
  input: RoleUpdateInput;
};

export type MutationRoleValidateSlugArgs = {
  input: Scalars['String'];
};

export type MutationUpdateCredentialSessionContextArgs = {
  updateCredentialSessionInput: UpdateCredentialSessionInput;
};

export type MutationUserCreateArgs = {
  input: UserCreateInput;
};

export type MutationUserPasswordUpdateArgs = {
  currentPassword: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  newPassword: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Maybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  edges: Maybe<Array<Maybe<PermissionEdge>>>;
  pageInfo: Maybe<PageInfo>;
};

export type PermissionEdge = {
  __typename?: 'PermissionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Permission>;
};

export type Query = {
  __typename?: 'Query';
  _service: Maybe<_Service>;
  credential: Maybe<Credential>;
  credentials: Maybe<CredentialConnection>;
  getCredentialServiceToken: Maybe<CredentialServiceToken>;
  permissions: Maybe<PermissionConnection>;
  roles: Maybe<RoleConnection>;
  user: Maybe<User>;
  users: Maybe<UserConnection>;
};

export type QueryCredentialArgs = {
  id: Scalars['ID'];
};

export type QueryCredentialsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CredentialFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryGetCredentialServiceTokenArgs = {
  input: InputMaybe<CredentialServiceTokenQueryInput>;
};

export type QueryPermissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryRolesArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  email: InputMaybe<Scalars['String']>;
};

export type QueryUsersArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type Result = 'FAILURE' | 'SUCCESS';

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  organization: Maybe<Scalars['ID']>;
  permissions: Array<Scalars['String']>;
  /**  a unique name for your role. no space  */
  slug: Scalars['String'];
  type: RoleType;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges: Maybe<Array<Maybe<RoleEdge>>>;
  pageInfo: Maybe<PageInfo>;
};

export type RoleCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
  slug: Scalars['String'];
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Role>;
};

export type RoleFilter = {
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RoleType>;
};

export type RoleGlobalCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
  slug: Scalars['String'];
  type: RoleType;
};

export type RoleType =
  | 'CUSTOM'
  | 'INTERNAL'
  | 'ORGANIZATIONAL'
  | 'PUBLIC'
  | 'SUBSCRIPTION';

export type RoleUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  dateExpired: Maybe<Scalars['DateTime']>;
  hash: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mfa: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type UpdateCredentialSessionInput = {
  organization?: InputMaybe<Scalars['String']>;
};

/**  schemas */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  email: Scalars['String'];
  id: Scalars['String'];
  lastLoginAt: Maybe<Scalars['DateTime']>;
  multiFactorAuthentication: Maybe<MultiFactorAuthenticationMode>;
  multiFactorAuthenticationPhone: Maybe<Scalars['String']>;
  organizations: Array<Scalars['ID']>;
  status: Maybe<UserStatus>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: Maybe<PageInfo>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  multiFactorAuthentication?: InputMaybe<MultiFactorAuthenticationMode>;
  multiFactorAuthenticationPhone?: InputMaybe<Scalars['String']>;
  onBoarding?: InputMaybe<Scalars['Boolean']>;
  organizationIds: Array<Scalars['ID']>;
  password: Scalars['String'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<User>;
};

export type UserFilter = {
  email?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  userId?: InputMaybe<Scalars['ID']>;
};

/**  input schemas */
export type UserLoginInput = {
  email: Scalars['String'];
  mode: Mode;
  organizationId?: InputMaybe<Scalars['ID']>;
  password: Scalars['String'];
};

export type UserLoginLegacyInput = {
  /** @deprecated */
  email?: InputMaybe<Scalars['String']>;
  storeId: Scalars['Int'];
  userToken: Scalars['String'];
};

export type UserStatus = 'ACTIVE' | 'DISABLED';

export type UserUpdateInput = {
  organizationIds: Array<Scalars['ID']>;
  status: UserStatus;
  userId: Scalars['ID'];
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String'];
};

export type GetCredentialServiceTokenQueryVariables = Exact<{
  input: CredentialServiceTokenQueryInput;
}>;

export type GetCredentialServiceTokenQuery = { __typename?: 'Query' } & {
  getCredentialServiceToken: Maybe<
    { __typename?: 'CredentialServiceToken' } & {
      credential: Maybe<{ __typename?: 'Credential' } & Pick<Credential, 'id'>>;
    }
  >;
};

export const GetCredentialServiceTokenDocument = gql`
  query getCredentialServiceToken($input: CredentialServiceTokenQueryInput!) {
    getCredentialServiceToken(input: $input) {
      credential {
        id
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
    getCredentialServiceToken(
      variables: GetCredentialServiceTokenQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetCredentialServiceTokenQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetCredentialServiceTokenQuery>(
            GetCredentialServiceTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getCredentialServiceToken',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
