/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  syncMessagesAt?: string | null,
  vehicles?: Array< VehicleInput | null > | null,
  lastLoginTime?: string | null,
  owner: string,
  id?: string | null,
};

export type VehicleInput = {
  type: VehicleType,
  phone?: string | null,
  password?: string | null,
};

export enum VehicleType {
  Mobile = "Mobile",
}


export type ModelUserProfileConditionInput = {
  syncMessagesAt?: ModelStringInput | null,
  lastLoginTime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  syncMessagesAt?: string | null,
  vehicles?:  Array<Vehicle | null > | null,
  lastLoginTime?: string | null,
  owner: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Vehicle = {
  __typename: "Vehicle",
  type: VehicleType,
  phone?: string | null,
  password?: string | null,
};

export type UpdateUserProfileInput = {
  syncMessagesAt?: string | null,
  vehicles?: Array< VehicleInput | null > | null,
  lastLoginTime?: string | null,
  owner?: string | null,
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateTransactionInput = {
  type: TransactionType,
  amount: number,
  balance: number,
  memo?: string | null,
  checkingAccountId?: string | null,
  owner: string,
  id?: string | null,
};

export enum TransactionType {
  WITHDRAWAL = "WITHDRAWAL",
  DEPOSIT = "DEPOSIT",
}


export type ModelTransactionConditionInput = {
  type?: ModelTransactionTypeInput | null,
  amount?: ModelIntInput | null,
  balance?: ModelIntInput | null,
  memo?: ModelStringInput | null,
  checkingAccountId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTransactionTypeInput = {
  eq?: TransactionType | null,
  ne?: TransactionType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Transaction = {
  __typename: "Transaction",
  type: TransactionType,
  amount: number,
  balance: number,
  memo?: string | null,
  checkingAccountId?: string | null,
  checkingAccount?: CheckingAccount | null,
  owner: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type CheckingAccount = {
  __typename: "CheckingAccount",
  balance: number,
  currency: Currency,
  status: AccountStatus,
  transactions?: ModelTransactionConnection | null,
  owner: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export enum Currency {
  GAME = "GAME",
  ISLAND = "ISLAND",
  N = "N",
  R = "R",
  SR = "SR",
  SSR = "SSR",
  UR = "UR",
}


export enum AccountStatus {
  ACTIVE = "ACTIVE",
  SUPENDED = "SUPENDED",
  CLOSED = "CLOSED",
}


export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type UpdateTransactionInput = {
  type?: TransactionType | null,
  amount?: number | null,
  balance?: number | null,
  memo?: string | null,
  checkingAccountId?: string | null,
  owner?: string | null,
  id: string,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateCheckingAccountInput = {
  balance: number,
  currency: Currency,
  status: AccountStatus,
  owner: string,
  id?: string | null,
};

export type ModelCheckingAccountConditionInput = {
  balance?: ModelFloatInput | null,
  currency?: ModelCurrencyInput | null,
  status?: ModelAccountStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCheckingAccountConditionInput | null > | null,
  or?: Array< ModelCheckingAccountConditionInput | null > | null,
  not?: ModelCheckingAccountConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelCurrencyInput = {
  eq?: Currency | null,
  ne?: Currency | null,
};

export type ModelAccountStatusInput = {
  eq?: AccountStatus | null,
  ne?: AccountStatus | null,
};

export type UpdateCheckingAccountInput = {
  balance?: number | null,
  currency?: Currency | null,
  status?: AccountStatus | null,
  owner?: string | null,
  id: string,
};

export type DeleteCheckingAccountInput = {
  id: string,
};

export type CreateCampaignInput = {
  category: CampaignCategory,
  name: string,
  estimatedSeconds: number,
  regions?: Array< string > | null,
  skills?: Array< string > | null,
  tasks?: Array< string > | null,
  charge?: number | null,
  limitsPerUser?: number | null,
  openedAt?: string | null,
  closedAt?: string | null,
  numberOfDraws?: number | null,
  awards?: Array< CampaignAwardInput > | null,
  status: CampaignStatus,
  id?: string | null,
};

export enum CampaignCategory {
  ASSIGNMENT = "ASSIGNMENT",
  EXPLORATION = "EXPLORATION",
}


export type CampaignAwardInput = {
  id: string,
  name?: string | null,
  probability: number,
};

export enum CampaignStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}


export type ModelCampaignConditionInput = {
  category?: ModelCampaignCategoryInput | null,
  name?: ModelStringInput | null,
  estimatedSeconds?: ModelIntInput | null,
  regions?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  tasks?: ModelStringInput | null,
  charge?: ModelIntInput | null,
  limitsPerUser?: ModelIntInput | null,
  openedAt?: ModelStringInput | null,
  closedAt?: ModelStringInput | null,
  numberOfDraws?: ModelIntInput | null,
  status?: ModelCampaignStatusInput | null,
  and?: Array< ModelCampaignConditionInput | null > | null,
  or?: Array< ModelCampaignConditionInput | null > | null,
  not?: ModelCampaignConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCampaignCategoryInput = {
  eq?: CampaignCategory | null,
  ne?: CampaignCategory | null,
};

export type ModelCampaignStatusInput = {
  eq?: CampaignStatus | null,
  ne?: CampaignStatus | null,
};

export type Campaign = {
  __typename: "Campaign",
  category: CampaignCategory,
  name: string,
  estimatedSeconds: number,
  regions?: Array< string > | null,
  skills?: Array< string > | null,
  tasks?: Array< string > | null,
  charge?: number | null,
  limitsPerUser?: number | null,
  openedAt?: string | null,
  closedAt?: string | null,
  numberOfDraws?: number | null,
  awards?:  Array<CampaignAward > | null,
  status: CampaignStatus,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type CampaignAward = {
  __typename: "CampaignAward",
  id: string,
  name?: string | null,
  probability: number,
};

export type UpdateCampaignInput = {
  category?: CampaignCategory | null,
  name?: string | null,
  estimatedSeconds?: number | null,
  regions?: Array< string > | null,
  skills?: Array< string > | null,
  tasks?: Array< string > | null,
  charge?: number | null,
  limitsPerUser?: number | null,
  openedAt?: string | null,
  closedAt?: string | null,
  numberOfDraws?: number | null,
  awards?: Array< CampaignAwardInput > | null,
  status?: CampaignStatus | null,
  id: string,
};

export type DeleteCampaignInput = {
  id: string,
};

export type CreateParticipationInput = {
  campaignId: string,
  campaignCategory: CampaignCategory,
  campaignSnapshot: string,
  status?: ParticipationStatus | null,
  rewards?: Array< string > | null,
  redeemed?: boolean | null,
  owner: string,
  createdAt?: string | null,
  id?: string | null,
};

export enum ParticipationStatus {
  pending = "pending",
  inProgress = "inProgress",
  finish = "finish",
}


export type ModelParticipationConditionInput = {
  campaignId?: ModelStringInput | null,
  campaignCategory?: ModelCampaignCategoryInput | null,
  campaignSnapshot?: ModelStringInput | null,
  status?: ModelParticipationStatusInput | null,
  rewards?: ModelStringInput | null,
  redeemed?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelParticipationConditionInput | null > | null,
  or?: Array< ModelParticipationConditionInput | null > | null,
  not?: ModelParticipationConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelParticipationStatusInput = {
  eq?: ParticipationStatus | null,
  ne?: ParticipationStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Participation = {
  __typename: "Participation",
  campaignId: string,
  campaignCategory: CampaignCategory,
  campaignSnapshot: string,
  status?: ParticipationStatus | null,
  rewards?: Array< string > | null,
  redeemed?: boolean | null,
  owner: string,
  createdAt?: string | null,
  id: string,
  updatedAt: string,
};

export type UpdateParticipationInput = {
  campaignId?: string | null,
  campaignCategory?: CampaignCategory | null,
  campaignSnapshot?: string | null,
  status?: ParticipationStatus | null,
  rewards?: Array< string > | null,
  redeemed?: boolean | null,
  owner?: string | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteParticipationInput = {
  id: string,
};

export type CreateMessageSourceInput = {
  title: string,
  subtitle?: string | null,
  content?: string | null,
  status: MessageSourceStatus,
  createdAt?: string | null,
  id?: string | null,
};

export enum MessageSourceStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}


export type ModelMessageSourceConditionInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelMessageSourceStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageSourceConditionInput | null > | null,
  or?: Array< ModelMessageSourceConditionInput | null > | null,
  not?: ModelMessageSourceConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelMessageSourceStatusInput = {
  eq?: MessageSourceStatus | null,
  ne?: MessageSourceStatus | null,
};

export type MessageSource = {
  __typename: "MessageSource",
  title: string,
  subtitle?: string | null,
  content?: string | null,
  status: MessageSourceStatus,
  createdAt: string,
  id: string,
  updatedAt: string,
};

export type UpdateMessageSourceInput = {
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  status?: MessageSourceStatus | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteMessageSourceInput = {
  id: string,
};

export type CreateMessageInput = {
  title: string,
  subtitle?: string | null,
  content?: string | null,
  sender: string,
  status: MessageStatus,
  owner: string,
  receivedAt: string,
  id?: string | null,
};

export enum MessageStatus {
  UNREAD = "UNREAD",
  READ = "READ",
}


export type ModelMessageConditionInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  sender?: ModelStringInput | null,
  status?: ModelMessageStatusInput | null,
  owner?: ModelStringInput | null,
  receivedAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelMessageStatusInput = {
  eq?: MessageStatus | null,
  ne?: MessageStatus | null,
};

export type Message = {
  __typename: "Message",
  title: string,
  subtitle?: string | null,
  content?: string | null,
  sender: string,
  status: MessageStatus,
  owner: string,
  receivedAt: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  sender?: string | null,
  status?: MessageStatus | null,
  owner?: string | null,
  receivedAt?: string | null,
  id: string,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateArticleInput = {
  category: ArticleCategory,
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  imagePaths?: Array< string > | null,
  tags?: Array< string > | null,
  status: ArticleStatus,
  id?: string | null,
};

export enum ArticleCategory {
  NEWS = "NEWS",
  RELEASE = "RELEASE",
  ANNOUNCEMENT = "ANNOUNCEMENT",
  BOLG = "BOLG",
}


export enum ArticleStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}


export type ModelArticleConditionInput = {
  category?: ModelArticleCategoryInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imagePaths?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  status?: ModelArticleStatusInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelArticleCategoryInput = {
  eq?: ArticleCategory | null,
  ne?: ArticleCategory | null,
};

export type ModelArticleStatusInput = {
  eq?: ArticleStatus | null,
  ne?: ArticleStatus | null,
};

export type Article = {
  __typename: "Article",
  category: ArticleCategory,
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  imagePaths?: Array< string > | null,
  tags?: Array< string > | null,
  status: ArticleStatus,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArticleInput = {
  category?: ArticleCategory | null,
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  imagePaths?: Array< string > | null,
  tags?: Array< string > | null,
  status?: ArticleStatus | null,
  id: string,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateTraceEventInput = {
  version: string,
  name: string,
  tags?: Array< string > | null,
  sourceIPAddress?: string | null,
  userAgent?: string | null,
  owner: string,
  id?: string | null,
};

export type ModelTraceEventConditionInput = {
  version?: ModelStringInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  sourceIPAddress?: ModelStringInput | null,
  userAgent?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTraceEventConditionInput | null > | null,
  or?: Array< ModelTraceEventConditionInput | null > | null,
  not?: ModelTraceEventConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type TraceEvent = {
  __typename: "TraceEvent",
  version: string,
  name: string,
  tags?: Array< string > | null,
  sourceIPAddress?: string | null,
  userAgent?: string | null,
  owner: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTraceEventInput = {
  version?: string | null,
  name?: string | null,
  tags?: Array< string > | null,
  sourceIPAddress?: string | null,
  userAgent?: string | null,
  owner?: string | null,
  id: string,
};

export type DeleteTraceEventInput = {
  id: string,
};

export type CreateVoucherInput = {
  voucherLink: string,
  voucherAmount: number,
  voucherStatus?: VoucherStatus | null,
  voucherCreationDate?: string | null,
  issuedAt?: string | null,
  receiverId?: string | null,
  id?: string | null,
};

export enum VoucherStatus {
  ISSUED = "ISSUED",
}


export type ModelVoucherConditionInput = {
  voucherLink?: ModelStringInput | null,
  voucherAmount?: ModelIntInput | null,
  voucherStatus?: ModelVoucherStatusInput | null,
  voucherCreationDate?: ModelStringInput | null,
  issuedAt?: ModelStringInput | null,
  receiverId?: ModelStringInput | null,
  and?: Array< ModelVoucherConditionInput | null > | null,
  or?: Array< ModelVoucherConditionInput | null > | null,
  not?: ModelVoucherConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelVoucherStatusInput = {
  eq?: VoucherStatus | null,
  ne?: VoucherStatus | null,
};

export type Voucher = {
  __typename: "Voucher",
  voucherLink: string,
  voucherAmount: number,
  voucherStatus?: VoucherStatus | null,
  voucherCreationDate?: string | null,
  issuedAt?: string | null,
  receiverId?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVoucherInput = {
  voucherLink?: string | null,
  voucherAmount?: number | null,
  voucherStatus?: VoucherStatus | null,
  voucherCreationDate?: string | null,
  issuedAt?: string | null,
  receiverId?: string | null,
  id: string,
};

export type DeleteVoucherInput = {
  id: string,
};

export type EmployeeCard = {
  __typename: "EmployeeCard",
  name: string,
  level?: string | null,
  category?: string | null,
};

export type ModelUserProfileFilterInput = {
  syncMessagesAt?: ModelStringInput | null,
  lastLoginTime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTransactionFilterInput = {
  type?: ModelTransactionTypeInput | null,
  amount?: ModelIntInput | null,
  balance?: ModelIntInput | null,
  memo?: ModelStringInput | null,
  checkingAccountId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelCheckingAccountFilterInput = {
  balance?: ModelFloatInput | null,
  currency?: ModelCurrencyInput | null,
  status?: ModelAccountStatusInput | null,
  owner?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCheckingAccountFilterInput | null > | null,
  or?: Array< ModelCheckingAccountFilterInput | null > | null,
  not?: ModelCheckingAccountFilterInput | null,
};

export type ModelCheckingAccountConnection = {
  __typename: "ModelCheckingAccountConnection",
  items:  Array<CheckingAccount | null >,
  nextToken?: string | null,
};

export type ModelCampaignFilterInput = {
  category?: ModelCampaignCategoryInput | null,
  name?: ModelStringInput | null,
  estimatedSeconds?: ModelIntInput | null,
  regions?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  tasks?: ModelStringInput | null,
  charge?: ModelIntInput | null,
  limitsPerUser?: ModelIntInput | null,
  openedAt?: ModelStringInput | null,
  closedAt?: ModelStringInput | null,
  numberOfDraws?: ModelIntInput | null,
  status?: ModelCampaignStatusInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCampaignFilterInput | null > | null,
  or?: Array< ModelCampaignFilterInput | null > | null,
  not?: ModelCampaignFilterInput | null,
};

export type ModelCampaignConnection = {
  __typename: "ModelCampaignConnection",
  items:  Array<Campaign | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelParticipationFilterInput = {
  campaignId?: ModelStringInput | null,
  campaignCategory?: ModelCampaignCategoryInput | null,
  campaignSnapshot?: ModelStringInput | null,
  status?: ModelParticipationStatusInput | null,
  rewards?: ModelStringInput | null,
  redeemed?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelParticipationFilterInput | null > | null,
  or?: Array< ModelParticipationFilterInput | null > | null,
  not?: ModelParticipationFilterInput | null,
};

export type ModelParticipationConnection = {
  __typename: "ModelParticipationConnection",
  items:  Array<Participation | null >,
  nextToken?: string | null,
};

export type ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyConditionInput = {
  eq?: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput | null,
  le?: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput | null,
  lt?: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput | null,
  ge?: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput | null,
  gt?: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput | null,
  between?: Array< ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput | null,
};

export type ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyInput = {
  campaignCategory?: CampaignCategory | null,
  createdAt?: string | null,
};

export type ModelMessageSourceFilterInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelMessageSourceStatusInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageSourceFilterInput | null > | null,
  or?: Array< ModelMessageSourceFilterInput | null > | null,
  not?: ModelMessageSourceFilterInput | null,
};

export type ModelMessageSourceConnection = {
  __typename: "ModelMessageSourceConnection",
  items:  Array<MessageSource | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  sender?: ModelStringInput | null,
  status?: ModelMessageStatusInput | null,
  owner?: ModelStringInput | null,
  receivedAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  category?: ModelArticleCategoryInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imagePaths?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  status?: ModelArticleStatusInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelTraceEventFilterInput = {
  version?: ModelStringInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  sourceIPAddress?: ModelStringInput | null,
  userAgent?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTraceEventFilterInput | null > | null,
  or?: Array< ModelTraceEventFilterInput | null > | null,
  not?: ModelTraceEventFilterInput | null,
};

export type ModelTraceEventConnection = {
  __typename: "ModelTraceEventConnection",
  items:  Array<TraceEvent | null >,
  nextToken?: string | null,
};

export type ModelVoucherFilterInput = {
  voucherLink?: ModelStringInput | null,
  voucherAmount?: ModelIntInput | null,
  voucherStatus?: ModelVoucherStatusInput | null,
  voucherCreationDate?: ModelStringInput | null,
  issuedAt?: ModelStringInput | null,
  receiverId?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVoucherFilterInput | null > | null,
  or?: Array< ModelVoucherFilterInput | null > | null,
  not?: ModelVoucherFilterInput | null,
};

export type ModelVoucherConnection = {
  __typename: "ModelVoucherConnection",
  items:  Array<Voucher | null >,
  nextToken?: string | null,
};

export type Configuration = {
  __typename: "Configuration",
  key: string,
  lastModified?: string | null,
  eTag?: string | null,
  size?: number | null,
  url: string,
};

export type Prop = {
  __typename: "Prop",
  id: string,
  type: string,
  currency: Currency,
  price: number,
};

export type Fragment = {
  __typename: "Fragment",
  id: string,
  type: string,
  currency: Currency,
  price: number,
};

export type ModelSubscriptionUserProfileFilterInput = {
  syncMessagesAt?: ModelSubscriptionStringInput | null,
  lastLoginTime?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  type?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionIntInput | null,
  balance?: ModelSubscriptionIntInput | null,
  memo?: ModelSubscriptionStringInput | null,
  checkingAccountId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCheckingAccountFilterInput = {
  balance?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCheckingAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionCheckingAccountFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCampaignFilterInput = {
  category?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  estimatedSeconds?: ModelSubscriptionIntInput | null,
  regions?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  tasks?: ModelSubscriptionStringInput | null,
  charge?: ModelSubscriptionIntInput | null,
  limitsPerUser?: ModelSubscriptionIntInput | null,
  openedAt?: ModelSubscriptionStringInput | null,
  closedAt?: ModelSubscriptionStringInput | null,
  numberOfDraws?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCampaignFilterInput | null > | null,
  or?: Array< ModelSubscriptionCampaignFilterInput | null > | null,
};

export type ModelSubscriptionParticipationFilterInput = {
  campaignId?: ModelSubscriptionStringInput | null,
  campaignCategory?: ModelSubscriptionStringInput | null,
  campaignSnapshot?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  rewards?: ModelSubscriptionStringInput | null,
  redeemed?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionParticipationFilterInput | null > | null,
  or?: Array< ModelSubscriptionParticipationFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionMessageSourceFilterInput = {
  title?: ModelSubscriptionStringInput | null,
  subtitle?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageSourceFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageSourceFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  title?: ModelSubscriptionStringInput | null,
  subtitle?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  sender?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  receivedAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionArticleFilterInput = {
  category?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  subtitle?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  imagePaths?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
};

export type ModelSubscriptionTraceEventFilterInput = {
  version?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  sourceIPAddress?: ModelSubscriptionStringInput | null,
  userAgent?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTraceEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionTraceEventFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionVoucherFilterInput = {
  voucherLink?: ModelSubscriptionStringInput | null,
  voucherAmount?: ModelSubscriptionIntInput | null,
  voucherStatus?: ModelSubscriptionStringInput | null,
  voucherCreationDate?: ModelSubscriptionStringInput | null,
  issuedAt?: ModelSubscriptionStringInput | null,
  receiverId?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVoucherFilterInput | null > | null,
  or?: Array< ModelSubscriptionVoucherFilterInput | null > | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    syncMessagesAt?: string | null,
    vehicles?:  Array< {
      __typename: "Vehicle",
      type: VehicleType,
      phone?: string | null,
      password?: string | null,
    } | null > | null,
    lastLoginTime?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    syncMessagesAt?: string | null,
    vehicles?:  Array< {
      __typename: "Vehicle",
      type: VehicleType,
      phone?: string | null,
      password?: string | null,
    } | null > | null,
    lastLoginTime?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    syncMessagesAt?: string | null,
    vehicles?:  Array< {
      __typename: "Vehicle",
      type: VehicleType,
      phone?: string | null,
      password?: string | null,
    } | null > | null,
    lastLoginTime?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCheckingAccountMutationVariables = {
  input: CreateCheckingAccountInput,
  condition?: ModelCheckingAccountConditionInput | null,
};

export type CreateCheckingAccountMutation = {
  createCheckingAccount?:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCheckingAccountMutationVariables = {
  input: UpdateCheckingAccountInput,
  condition?: ModelCheckingAccountConditionInput | null,
};

export type UpdateCheckingAccountMutation = {
  updateCheckingAccount?:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCheckingAccountMutationVariables = {
  input: DeleteCheckingAccountInput,
  condition?: ModelCheckingAccountConditionInput | null,
};

export type DeleteCheckingAccountMutation = {
  deleteCheckingAccount?:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type CreateCampaignMutation = {
  createCampaign?:  {
    __typename: "Campaign",
    category: CampaignCategory,
    name: string,
    estimatedSeconds: number,
    regions?: Array< string > | null,
    skills?: Array< string > | null,
    tasks?: Array< string > | null,
    charge?: number | null,
    limitsPerUser?: number | null,
    openedAt?: string | null,
    closedAt?: string | null,
    numberOfDraws?: number | null,
    awards?:  Array< {
      __typename: "CampaignAward",
      id: string,
      name?: string | null,
      probability: number,
    } > | null,
    status: CampaignStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignMutation = {
  updateCampaign?:  {
    __typename: "Campaign",
    category: CampaignCategory,
    name: string,
    estimatedSeconds: number,
    regions?: Array< string > | null,
    skills?: Array< string > | null,
    tasks?: Array< string > | null,
    charge?: number | null,
    limitsPerUser?: number | null,
    openedAt?: string | null,
    closedAt?: string | null,
    numberOfDraws?: number | null,
    awards?:  Array< {
      __typename: "CampaignAward",
      id: string,
      name?: string | null,
      probability: number,
    } > | null,
    status: CampaignStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignMutation = {
  deleteCampaign?:  {
    __typename: "Campaign",
    category: CampaignCategory,
    name: string,
    estimatedSeconds: number,
    regions?: Array< string > | null,
    skills?: Array< string > | null,
    tasks?: Array< string > | null,
    charge?: number | null,
    limitsPerUser?: number | null,
    openedAt?: string | null,
    closedAt?: string | null,
    numberOfDraws?: number | null,
    awards?:  Array< {
      __typename: "CampaignAward",
      id: string,
      name?: string | null,
      probability: number,
    } > | null,
    status: CampaignStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateParticipationMutationVariables = {
  input: CreateParticipationInput,
  condition?: ModelParticipationConditionInput | null,
};

export type CreateParticipationMutation = {
  createParticipation?:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateParticipationMutationVariables = {
  input: UpdateParticipationInput,
  condition?: ModelParticipationConditionInput | null,
};

export type UpdateParticipationMutation = {
  updateParticipation?:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteParticipationMutationVariables = {
  input: DeleteParticipationInput,
  condition?: ModelParticipationConditionInput | null,
};

export type DeleteParticipationMutation = {
  deleteParticipation?:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageSourceMutationVariables = {
  input: CreateMessageSourceInput,
  condition?: ModelMessageSourceConditionInput | null,
};

export type CreateMessageSourceMutation = {
  createMessageSource?:  {
    __typename: "MessageSource",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    status: MessageSourceStatus,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageSourceMutationVariables = {
  input: UpdateMessageSourceInput,
  condition?: ModelMessageSourceConditionInput | null,
};

export type UpdateMessageSourceMutation = {
  updateMessageSource?:  {
    __typename: "MessageSource",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    status: MessageSourceStatus,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageSourceMutationVariables = {
  input: DeleteMessageSourceInput,
  condition?: ModelMessageSourceConditionInput | null,
};

export type DeleteMessageSourceMutation = {
  deleteMessageSource?:  {
    __typename: "MessageSource",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    status: MessageSourceStatus,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    category: ArticleCategory,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imagePaths?: Array< string > | null,
    tags?: Array< string > | null,
    status: ArticleStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    category: ArticleCategory,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imagePaths?: Array< string > | null,
    tags?: Array< string > | null,
    status: ArticleStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    category: ArticleCategory,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imagePaths?: Array< string > | null,
    tags?: Array< string > | null,
    status: ArticleStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTraceEventMutationVariables = {
  input: CreateTraceEventInput,
  condition?: ModelTraceEventConditionInput | null,
};

export type CreateTraceEventMutation = {
  createTraceEvent?:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTraceEventMutationVariables = {
  input: UpdateTraceEventInput,
  condition?: ModelTraceEventConditionInput | null,
};

export type UpdateTraceEventMutation = {
  updateTraceEvent?:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTraceEventMutationVariables = {
  input: DeleteTraceEventInput,
  condition?: ModelTraceEventConditionInput | null,
};

export type DeleteTraceEventMutation = {
  deleteTraceEvent?:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVoucherMutationVariables = {
  input: CreateVoucherInput,
  condition?: ModelVoucherConditionInput | null,
};

export type CreateVoucherMutation = {
  createVoucher?:  {
    __typename: "Voucher",
    voucherLink: string,
    voucherAmount: number,
    voucherStatus?: VoucherStatus | null,
    voucherCreationDate?: string | null,
    issuedAt?: string | null,
    receiverId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoucherMutationVariables = {
  input: UpdateVoucherInput,
  condition?: ModelVoucherConditionInput | null,
};

export type UpdateVoucherMutation = {
  updateVoucher?:  {
    __typename: "Voucher",
    voucherLink: string,
    voucherAmount: number,
    voucherStatus?: VoucherStatus | null,
    voucherCreationDate?: string | null,
    issuedAt?: string | null,
    receiverId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoucherMutationVariables = {
  input: DeleteVoucherInput,
  condition?: ModelVoucherConditionInput | null,
};

export type DeleteVoucherMutation = {
  deleteVoucher?:  {
    __typename: "Voucher",
    voucherLink: string,
    voucherAmount: number,
    voucherStatus?: VoucherStatus | null,
    voucherCreationDate?: string | null,
    issuedAt?: string | null,
    receiverId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OpenCheckingAccountMutationVariables = {
  currency: string,
};

export type OpenCheckingAccountMutation = {
  openCheckingAccount:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  },
};

export type DepositMoneyMutationVariables = {
  checkingAccountId: string,
  amount: number,
  memo?: string | null,
};

export type DepositMoneyMutation = {
  depositMoney:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  },
};

export type WithdrawMoneyMutationVariables = {
  checkingAccountId: string,
  amount: number,
  memo?: string | null,
};

export type WithdrawMoneyMutation = {
  withdrawMoney:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  },
};

export type ParticipateMutationVariables = {
  campaignId: string,
};

export type ParticipateMutation = {
  participate:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  },
};

export type RedeemRewardsMutationVariables = {
  participationId: string,
};

export type RedeemRewardsMutation = {
  redeemRewards:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  },
};

export type DrawEmployeeCardsMutationVariables = {
  version: string,
  checkingAccountId: string,
  limit?: number | null,
};

export type DrawEmployeeCardsMutation = {
  drawEmployeeCards:  Array< {
    __typename: "EmployeeCard",
    name: string,
    level?: string | null,
    category?: string | null,
  } >,
};

export type SyncMessagesMutationVariables = {
};

export type SyncMessagesMutation = {
  syncMessages:  Array< {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null >,
};

export type LinkProviderForUserMutationVariables = {
  providerName: string,
  providerUserId: string,
};

export type LinkProviderForUserMutation = {
  linkProviderForUser?: string | null,
};

export type LogEventMutationVariables = {
  eventName: string,
  eventTags?: Array< string > | null,
};

export type LogEventMutation = {
  logEvent:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  },
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    syncMessagesAt?: string | null,
    vehicles?:  Array< {
      __typename: "Vehicle",
      type: VehicleType,
      phone?: string | null,
      password?: string | null,
    } | null > | null,
    lastLoginTime?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      syncMessagesAt?: string | null,
      vehicles?:  Array< {
        __typename: "Vehicle",
        type: VehicleType,
        phone?: string | null,
        password?: string | null,
      } | null > | null,
      lastLoginTime?: string | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfileByOwnerQueryVariables = {
  owner: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfileByOwnerQuery = {
  listUserProfileByOwner?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      syncMessagesAt?: string | null,
      vehicles?:  Array< {
        __typename: "Vehicle",
        type: VehicleType,
        phone?: string | null,
        password?: string | null,
      } | null > | null,
      lastLoginTime?: string | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      type: TransactionType,
      amount: number,
      balance: number,
      memo?: string | null,
      checkingAccountId?: string | null,
      checkingAccount?:  {
        __typename: "CheckingAccount",
        balance: number,
        currency: Currency,
        status: AccountStatus,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            type: TransactionType,
            amount: number,
            balance: number,
            memo?: string | null,
            checkingAccountId?: string | null,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCheckingAccountQueryVariables = {
  id: string,
};

export type GetCheckingAccountQuery = {
  getCheckingAccount?:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCheckingAccountsQueryVariables = {
  filter?: ModelCheckingAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCheckingAccountsQuery = {
  listCheckingAccounts?:  {
    __typename: "ModelCheckingAccountConnection",
    items:  Array< {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCampaignQueryVariables = {
  id: string,
};

export type GetCampaignQuery = {
  getCampaign?:  {
    __typename: "Campaign",
    category: CampaignCategory,
    name: string,
    estimatedSeconds: number,
    regions?: Array< string > | null,
    skills?: Array< string > | null,
    tasks?: Array< string > | null,
    charge?: number | null,
    limitsPerUser?: number | null,
    openedAt?: string | null,
    closedAt?: string | null,
    numberOfDraws?: number | null,
    awards?:  Array< {
      __typename: "CampaignAward",
      id: string,
      name?: string | null,
      probability: number,
    } > | null,
    status: CampaignStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCampaignsQueryVariables = {
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignsQuery = {
  listCampaigns?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      category: CampaignCategory,
      name: string,
      estimatedSeconds: number,
      regions?: Array< string > | null,
      skills?: Array< string > | null,
      tasks?: Array< string > | null,
      charge?: number | null,
      limitsPerUser?: number | null,
      openedAt?: string | null,
      closedAt?: string | null,
      numberOfDraws?: number | null,
      awards?:  Array< {
        __typename: "CampaignAward",
        id: string,
        name?: string | null,
        probability: number,
      } > | null,
      status: CampaignStatus,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCampaignByCategoryAndStatusQueryVariables = {
  category: CampaignCategory,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignByCategoryAndStatusQuery = {
  listCampaignByCategoryAndStatus?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      category: CampaignCategory,
      name: string,
      estimatedSeconds: number,
      regions?: Array< string > | null,
      skills?: Array< string > | null,
      tasks?: Array< string > | null,
      charge?: number | null,
      limitsPerUser?: number | null,
      openedAt?: string | null,
      closedAt?: string | null,
      numberOfDraws?: number | null,
      awards?:  Array< {
        __typename: "CampaignAward",
        id: string,
        name?: string | null,
        probability: number,
      } > | null,
      status: CampaignStatus,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetParticipationQueryVariables = {
  id: string,
};

export type GetParticipationQuery = {
  getParticipation?:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListParticipationsQueryVariables = {
  filter?: ModelParticipationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipationsQuery = {
  listParticipations?:  {
    __typename: "ModelParticipationConnection",
    items:  Array< {
      __typename: "Participation",
      campaignId: string,
      campaignCategory: CampaignCategory,
      campaignSnapshot: string,
      status?: ParticipationStatus | null,
      rewards?: Array< string > | null,
      redeemed?: boolean | null,
      owner: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParticipationByOwnerAndCampaignCategoryAndCreatedAtQueryVariables = {
  owner: string,
  campaignCategoryCreatedAt?: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParticipationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipationByOwnerAndCampaignCategoryAndCreatedAtQuery = {
  listParticipationByOwnerAndCampaignCategoryAndCreatedAt?:  {
    __typename: "ModelParticipationConnection",
    items:  Array< {
      __typename: "Participation",
      campaignId: string,
      campaignCategory: CampaignCategory,
      campaignSnapshot: string,
      status?: ParticipationStatus | null,
      rewards?: Array< string > | null,
      redeemed?: boolean | null,
      owner: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListByOwnerAndCampaignIdQueryVariables = {
  owner: string,
  campaignId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParticipationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListByOwnerAndCampaignIdQuery = {
  listByOwnerAndCampaignId?:  {
    __typename: "ModelParticipationConnection",
    items:  Array< {
      __typename: "Participation",
      campaignId: string,
      campaignCategory: CampaignCategory,
      campaignSnapshot: string,
      status?: ParticipationStatus | null,
      rewards?: Array< string > | null,
      redeemed?: boolean | null,
      owner: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageSourceQueryVariables = {
  id: string,
};

export type GetMessageSourceQuery = {
  getMessageSource?:  {
    __typename: "MessageSource",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    status: MessageSourceStatus,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListMessageSourcesQueryVariables = {
  filter?: ModelMessageSourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageSourcesQuery = {
  listMessageSources?:  {
    __typename: "ModelMessageSourceConnection",
    items:  Array< {
      __typename: "MessageSource",
      title: string,
      subtitle?: string | null,
      content?: string | null,
      status: MessageSourceStatus,
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessageSourceByStatusAndCreatedAtQueryVariables = {
  status: MessageSourceStatus,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageSourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageSourceByStatusAndCreatedAtQuery = {
  listMessageSourceByStatusAndCreatedAt?:  {
    __typename: "ModelMessageSourceConnection",
    items:  Array< {
      __typename: "MessageSource",
      title: string,
      subtitle?: string | null,
      content?: string | null,
      status: MessageSourceStatus,
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      title: string,
      subtitle?: string | null,
      content?: string | null,
      sender: string,
      status: MessageStatus,
      owner: string,
      receivedAt: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessageByOwnerAndReceivedAtQueryVariables = {
  owner: string,
  receivedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageByOwnerAndReceivedAtQuery = {
  listMessageByOwnerAndReceivedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      title: string,
      subtitle?: string | null,
      content?: string | null,
      sender: string,
      status: MessageStatus,
      owner: string,
      receivedAt: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    category: ArticleCategory,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imagePaths?: Array< string > | null,
    tags?: Array< string > | null,
    status: ArticleStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      category: ArticleCategory,
      title?: string | null,
      subtitle?: string | null,
      content?: string | null,
      imagePaths?: Array< string > | null,
      tags?: Array< string > | null,
      status: ArticleStatus,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListArticleByCategoryAndStatusQueryVariables = {
  category: ArticleCategory,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticleByCategoryAndStatusQuery = {
  listArticleByCategoryAndStatus?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      category: ArticleCategory,
      title?: string | null,
      subtitle?: string | null,
      content?: string | null,
      imagePaths?: Array< string > | null,
      tags?: Array< string > | null,
      status: ArticleStatus,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTraceEventQueryVariables = {
  id: string,
};

export type GetTraceEventQuery = {
  getTraceEvent?:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTraceEventsQueryVariables = {
  filter?: ModelTraceEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTraceEventsQuery = {
  listTraceEvents?:  {
    __typename: "ModelTraceEventConnection",
    items:  Array< {
      __typename: "TraceEvent",
      version: string,
      name: string,
      tags?: Array< string > | null,
      sourceIPAddress?: string | null,
      userAgent?: string | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVoucherQueryVariables = {
  id: string,
};

export type GetVoucherQuery = {
  getVoucher?:  {
    __typename: "Voucher",
    voucherLink: string,
    voucherAmount: number,
    voucherStatus?: VoucherStatus | null,
    voucherCreationDate?: string | null,
    issuedAt?: string | null,
    receiverId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVouchersQueryVariables = {
  filter?: ModelVoucherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVouchersQuery = {
  listVouchers?:  {
    __typename: "ModelVoucherConnection",
    items:  Array< {
      __typename: "Voucher",
      voucherLink: string,
      voucherAmount: number,
      voucherStatus?: VoucherStatus | null,
      voucherCreationDate?: string | null,
      issuedAt?: string | null,
      receiverId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVoucherByVoucherLinkQueryVariables = {
  voucherLink: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVoucherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVoucherByVoucherLinkQuery = {
  listVoucherByVoucherLink?:  {
    __typename: "ModelVoucherConnection",
    items:  Array< {
      __typename: "Voucher",
      voucherLink: string,
      voucherAmount: number,
      voucherStatus?: VoucherStatus | null,
      voucherCreationDate?: string | null,
      issuedAt?: string | null,
      receiverId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListConfigurationsQueryVariables = {
  version: string,
};

export type ListConfigurationsQuery = {
  listConfigurations:  Array< {
    __typename: "Configuration",
    key: string,
    lastModified?: string | null,
    eTag?: string | null,
    size?: number | null,
    url: string,
  } >,
};

export type ListPropsQueryVariables = {
  fragment?: boolean | null,
};

export type ListPropsQuery = {
  listProps:  Array< {
    __typename: "Prop",
    id: string,
    type: string,
    currency: Currency,
    price: number,
  } >,
};

export type ListFragmentsQueryVariables = {
};

export type ListFragmentsQuery = {
  listFragments:  Array< {
    __typename: "Fragment",
    id: string,
    type: string,
    currency: Currency,
    price: number,
  } >,
};

export type GetServerTimeQueryVariables = {
};

export type GetServerTimeQuery = {
  getServerTime: string,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    syncMessagesAt?: string | null,
    vehicles?:  Array< {
      __typename: "Vehicle",
      type: VehicleType,
      phone?: string | null,
      password?: string | null,
    } | null > | null,
    lastLoginTime?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    syncMessagesAt?: string | null,
    vehicles?:  Array< {
      __typename: "Vehicle",
      type: VehicleType,
      phone?: string | null,
      password?: string | null,
    } | null > | null,
    lastLoginTime?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    syncMessagesAt?: string | null,
    vehicles?:  Array< {
      __typename: "Vehicle",
      type: VehicleType,
      phone?: string | null,
      password?: string | null,
    } | null > | null,
    lastLoginTime?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    type: TransactionType,
    amount: number,
    balance: number,
    memo?: string | null,
    checkingAccountId?: string | null,
    checkingAccount?:  {
      __typename: "CheckingAccount",
      balance: number,
      currency: Currency,
      status: AccountStatus,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          type: TransactionType,
          amount: number,
          balance: number,
          memo?: string | null,
          checkingAccountId?: string | null,
          checkingAccount?:  {
            __typename: "CheckingAccount",
            balance: number,
            currency: Currency,
            status: AccountStatus,
            owner: string,
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCheckingAccountSubscriptionVariables = {
  filter?: ModelSubscriptionCheckingAccountFilterInput | null,
  owner?: string | null,
};

export type OnCreateCheckingAccountSubscription = {
  onCreateCheckingAccount?:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCheckingAccountSubscriptionVariables = {
  filter?: ModelSubscriptionCheckingAccountFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCheckingAccountSubscription = {
  onUpdateCheckingAccount?:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCheckingAccountSubscriptionVariables = {
  filter?: ModelSubscriptionCheckingAccountFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCheckingAccountSubscription = {
  onDeleteCheckingAccount?:  {
    __typename: "CheckingAccount",
    balance: number,
    currency: Currency,
    status: AccountStatus,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        type: TransactionType,
        amount: number,
        balance: number,
        memo?: string | null,
        checkingAccountId?: string | null,
        checkingAccount?:  {
          __typename: "CheckingAccount",
          balance: number,
          currency: Currency,
          status: AccountStatus,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            nextToken?: string | null,
          } | null,
          owner: string,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        owner: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign?:  {
    __typename: "Campaign",
    category: CampaignCategory,
    name: string,
    estimatedSeconds: number,
    regions?: Array< string > | null,
    skills?: Array< string > | null,
    tasks?: Array< string > | null,
    charge?: number | null,
    limitsPerUser?: number | null,
    openedAt?: string | null,
    closedAt?: string | null,
    numberOfDraws?: number | null,
    awards?:  Array< {
      __typename: "CampaignAward",
      id: string,
      name?: string | null,
      probability: number,
    } > | null,
    status: CampaignStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign?:  {
    __typename: "Campaign",
    category: CampaignCategory,
    name: string,
    estimatedSeconds: number,
    regions?: Array< string > | null,
    skills?: Array< string > | null,
    tasks?: Array< string > | null,
    charge?: number | null,
    limitsPerUser?: number | null,
    openedAt?: string | null,
    closedAt?: string | null,
    numberOfDraws?: number | null,
    awards?:  Array< {
      __typename: "CampaignAward",
      id: string,
      name?: string | null,
      probability: number,
    } > | null,
    status: CampaignStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign?:  {
    __typename: "Campaign",
    category: CampaignCategory,
    name: string,
    estimatedSeconds: number,
    regions?: Array< string > | null,
    skills?: Array< string > | null,
    tasks?: Array< string > | null,
    charge?: number | null,
    limitsPerUser?: number | null,
    openedAt?: string | null,
    closedAt?: string | null,
    numberOfDraws?: number | null,
    awards?:  Array< {
      __typename: "CampaignAward",
      id: string,
      name?: string | null,
      probability: number,
    } > | null,
    status: CampaignStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateParticipationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipationFilterInput | null,
  owner?: string | null,
};

export type OnCreateParticipationSubscription = {
  onCreateParticipation?:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateParticipationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateParticipationSubscription = {
  onUpdateParticipation?:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteParticipationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteParticipationSubscription = {
  onDeleteParticipation?:  {
    __typename: "Participation",
    campaignId: string,
    campaignCategory: CampaignCategory,
    campaignSnapshot: string,
    status?: ParticipationStatus | null,
    rewards?: Array< string > | null,
    redeemed?: boolean | null,
    owner: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSourceSubscriptionVariables = {
  filter?: ModelSubscriptionMessageSourceFilterInput | null,
};

export type OnCreateMessageSourceSubscription = {
  onCreateMessageSource?:  {
    __typename: "MessageSource",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    status: MessageSourceStatus,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSourceSubscriptionVariables = {
  filter?: ModelSubscriptionMessageSourceFilterInput | null,
};

export type OnUpdateMessageSourceSubscription = {
  onUpdateMessageSource?:  {
    __typename: "MessageSource",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    status: MessageSourceStatus,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSourceSubscriptionVariables = {
  filter?: ModelSubscriptionMessageSourceFilterInput | null,
};

export type OnDeleteMessageSourceSubscription = {
  onDeleteMessageSource?:  {
    __typename: "MessageSource",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    status: MessageSourceStatus,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    title: string,
    subtitle?: string | null,
    content?: string | null,
    sender: string,
    status: MessageStatus,
    owner: string,
    receivedAt: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    category: ArticleCategory,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imagePaths?: Array< string > | null,
    tags?: Array< string > | null,
    status: ArticleStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    category: ArticleCategory,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imagePaths?: Array< string > | null,
    tags?: Array< string > | null,
    status: ArticleStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    category: ArticleCategory,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imagePaths?: Array< string > | null,
    tags?: Array< string > | null,
    status: ArticleStatus,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTraceEventSubscriptionVariables = {
  filter?: ModelSubscriptionTraceEventFilterInput | null,
  owner?: string | null,
};

export type OnCreateTraceEventSubscription = {
  onCreateTraceEvent?:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTraceEventSubscriptionVariables = {
  filter?: ModelSubscriptionTraceEventFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTraceEventSubscription = {
  onUpdateTraceEvent?:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTraceEventSubscriptionVariables = {
  filter?: ModelSubscriptionTraceEventFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTraceEventSubscription = {
  onDeleteTraceEvent?:  {
    __typename: "TraceEvent",
    version: string,
    name: string,
    tags?: Array< string > | null,
    sourceIPAddress?: string | null,
    userAgent?: string | null,
    owner: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVoucherSubscriptionVariables = {
  filter?: ModelSubscriptionVoucherFilterInput | null,
};

export type OnCreateVoucherSubscription = {
  onCreateVoucher?:  {
    __typename: "Voucher",
    voucherLink: string,
    voucherAmount: number,
    voucherStatus?: VoucherStatus | null,
    voucherCreationDate?: string | null,
    issuedAt?: string | null,
    receiverId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoucherSubscriptionVariables = {
  filter?: ModelSubscriptionVoucherFilterInput | null,
};

export type OnUpdateVoucherSubscription = {
  onUpdateVoucher?:  {
    __typename: "Voucher",
    voucherLink: string,
    voucherAmount: number,
    voucherStatus?: VoucherStatus | null,
    voucherCreationDate?: string | null,
    issuedAt?: string | null,
    receiverId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoucherSubscriptionVariables = {
  filter?: ModelSubscriptionVoucherFilterInput | null,
};

export type OnDeleteVoucherSubscription = {
  onDeleteVoucher?:  {
    __typename: "Voucher",
    voucherLink: string,
    voucherAmount: number,
    voucherStatus?: VoucherStatus | null,
    voucherCreationDate?: string | null,
    issuedAt?: string | null,
    receiverId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
