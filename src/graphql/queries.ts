/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    syncMessagesAt
    vehicles {
      type
      phone
      password
      __typename
    }
    lastLoginTime
    owner
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      syncMessagesAt
      vehicles {
        type
        phone
        password
        __typename
      }
      lastLoginTime
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const listUserProfileByOwner = /* GraphQL */ `query ListUserProfileByOwner(
  $owner: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfileByOwner(
    owner: $owner
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      syncMessagesAt
      vehicles {
        type
        phone
        password
        __typename
      }
      lastLoginTime
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfileByOwnerQueryVariables,
  APITypes.ListUserProfileByOwnerQuery
>;
export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
    type
    amount
    balance
    memo
    checkingAccountId
    checkingAccount {
      balance
      currency
      status
      transactions {
        items {
          type
          amount
          balance
          memo
          checkingAccountId
          checkingAccount {
            balance
            currency
            status
            owner
            id
            createdAt
            updatedAt
            __typename
          }
          owner
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    owner
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      type
      amount
      balance
      memo
      checkingAccountId
      checkingAccount {
        balance
        currency
        status
        transactions {
          items {
            type
            amount
            balance
            memo
            checkingAccountId
            owner
            id
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        id
        createdAt
        updatedAt
        __typename
      }
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const getCheckingAccount = /* GraphQL */ `query GetCheckingAccount($id: ID!) {
  getCheckingAccount(id: $id) {
    balance
    currency
    status
    transactions {
      items {
        type
        amount
        balance
        memo
        checkingAccountId
        checkingAccount {
          balance
          currency
          status
          transactions {
            nextToken
            __typename
          }
          owner
          id
          createdAt
          updatedAt
          __typename
        }
        owner
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    owner
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCheckingAccountQueryVariables,
  APITypes.GetCheckingAccountQuery
>;
export const listCheckingAccounts = /* GraphQL */ `query ListCheckingAccounts(
  $filter: ModelCheckingAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheckingAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      balance
      currency
      status
      transactions {
        items {
          type
          amount
          balance
          memo
          checkingAccountId
          checkingAccount {
            balance
            currency
            status
            owner
            id
            createdAt
            updatedAt
            __typename
          }
          owner
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckingAccountsQueryVariables,
  APITypes.ListCheckingAccountsQuery
>;
export const getCampaign = /* GraphQL */ `query GetCampaign($id: ID!) {
  getCampaign(id: $id) {
    category
    name
    estimatedSeconds
    regions
    skills
    tasks
    charge
    limitsPerUser
    openedAt
    closedAt
    numberOfDraws
    awards {
      id
      name
      probability
      __typename
    }
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCampaignQueryVariables,
  APITypes.GetCampaignQuery
>;
export const listCampaigns = /* GraphQL */ `query ListCampaigns(
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      category
      name
      estimatedSeconds
      regions
      skills
      tasks
      charge
      limitsPerUser
      openedAt
      closedAt
      numberOfDraws
      awards {
        id
        name
        probability
        __typename
      }
      status
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCampaignsQueryVariables,
  APITypes.ListCampaignsQuery
>;
export const listCampaignByCategoryAndStatus = /* GraphQL */ `query ListCampaignByCategoryAndStatus(
  $category: CampaignCategory!
  $status: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaignByCategoryAndStatus(
    category: $category
    status: $status
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      category
      name
      estimatedSeconds
      regions
      skills
      tasks
      charge
      limitsPerUser
      openedAt
      closedAt
      numberOfDraws
      awards {
        id
        name
        probability
        __typename
      }
      status
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCampaignByCategoryAndStatusQueryVariables,
  APITypes.ListCampaignByCategoryAndStatusQuery
>;
export const getParticipation = /* GraphQL */ `query GetParticipation($id: ID!) {
  getParticipation(id: $id) {
    campaignId
    campaignCategory
    campaignSnapshot
    status
    rewards
    redeemed
    owner
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetParticipationQueryVariables,
  APITypes.GetParticipationQuery
>;
export const listParticipations = /* GraphQL */ `query ListParticipations(
  $filter: ModelParticipationFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      campaignId
      campaignCategory
      campaignSnapshot
      status
      rewards
      redeemed
      owner
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParticipationsQueryVariables,
  APITypes.ListParticipationsQuery
>;
export const listParticipationByOwnerAndCampaignCategoryAndCreatedAt = /* GraphQL */ `query ListParticipationByOwnerAndCampaignCategoryAndCreatedAt(
  $owner: String!
  $campaignCategoryCreatedAt: ModelParticipationParticipationsByOwnerAndCampaignCategoryAndCreatedAtCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelParticipationFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipationByOwnerAndCampaignCategoryAndCreatedAt(
    owner: $owner
    campaignCategoryCreatedAt: $campaignCategoryCreatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      campaignId
      campaignCategory
      campaignSnapshot
      status
      rewards
      redeemed
      owner
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParticipationByOwnerAndCampaignCategoryAndCreatedAtQueryVariables,
  APITypes.ListParticipationByOwnerAndCampaignCategoryAndCreatedAtQuery
>;
export const listByOwnerAndCampaignId = /* GraphQL */ `query ListByOwnerAndCampaignId(
  $owner: String!
  $campaignId: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelParticipationFilterInput
  $limit: Int
  $nextToken: String
) {
  listByOwnerAndCampaignId(
    owner: $owner
    campaignId: $campaignId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      campaignId
      campaignCategory
      campaignSnapshot
      status
      rewards
      redeemed
      owner
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListByOwnerAndCampaignIdQueryVariables,
  APITypes.ListByOwnerAndCampaignIdQuery
>;
export const getMessageSource = /* GraphQL */ `query GetMessageSource($id: ID!) {
  getMessageSource(id: $id) {
    title
    subtitle
    content
    status
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageSourceQueryVariables,
  APITypes.GetMessageSourceQuery
>;
export const listMessageSources = /* GraphQL */ `query ListMessageSources(
  $filter: ModelMessageSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      title
      subtitle
      content
      status
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageSourcesQueryVariables,
  APITypes.ListMessageSourcesQuery
>;
export const listMessageSourceByStatusAndCreatedAt = /* GraphQL */ `query ListMessageSourceByStatusAndCreatedAt(
  $status: MessageSourceStatus!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageSourceByStatusAndCreatedAt(
    status: $status
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      title
      subtitle
      content
      status
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageSourceByStatusAndCreatedAtQueryVariables,
  APITypes.ListMessageSourceByStatusAndCreatedAtQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    title
    subtitle
    content
    sender
    status
    owner
    receivedAt
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      title
      subtitle
      content
      sender
      status
      owner
      receivedAt
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const listMessageByOwnerAndReceivedAt = /* GraphQL */ `query ListMessageByOwnerAndReceivedAt(
  $owner: String!
  $receivedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageByOwnerAndReceivedAt(
    owner: $owner
    receivedAt: $receivedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      title
      subtitle
      content
      sender
      status
      owner
      receivedAt
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageByOwnerAndReceivedAtQueryVariables,
  APITypes.ListMessageByOwnerAndReceivedAtQuery
>;
export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    category
    title
    subtitle
    content
    imagePaths
    tags
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      category
      title
      subtitle
      content
      imagePaths
      tags
      status
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const listArticleByCategoryAndStatus = /* GraphQL */ `query ListArticleByCategoryAndStatus(
  $category: ArticleCategory!
  $status: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticleByCategoryAndStatus(
    category: $category
    status: $status
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      category
      title
      subtitle
      content
      imagePaths
      tags
      status
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticleByCategoryAndStatusQueryVariables,
  APITypes.ListArticleByCategoryAndStatusQuery
>;
export const getTraceEvent = /* GraphQL */ `query GetTraceEvent($id: ID!) {
  getTraceEvent(id: $id) {
    version
    name
    tags
    sourceIPAddress
    userAgent
    owner
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTraceEventQueryVariables,
  APITypes.GetTraceEventQuery
>;
export const listTraceEvents = /* GraphQL */ `query ListTraceEvents(
  $filter: ModelTraceEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listTraceEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      version
      name
      tags
      sourceIPAddress
      userAgent
      owner
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTraceEventsQueryVariables,
  APITypes.ListTraceEventsQuery
>;
export const getVoucher = /* GraphQL */ `query GetVoucher($id: ID!) {
  getVoucher(id: $id) {
    voucherLink
    voucherAmount
    voucherStatus
    voucherCreationDate
    issuedAt
    receiverId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetVoucherQueryVariables,
  APITypes.GetVoucherQuery
>;
export const listVouchers = /* GraphQL */ `query ListVouchers(
  $filter: ModelVoucherFilterInput
  $limit: Int
  $nextToken: String
) {
  listVouchers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      voucherLink
      voucherAmount
      voucherStatus
      voucherCreationDate
      issuedAt
      receiverId
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVouchersQueryVariables,
  APITypes.ListVouchersQuery
>;
export const listVoucherByVoucherLink = /* GraphQL */ `query ListVoucherByVoucherLink(
  $voucherLink: String!
  $sortDirection: ModelSortDirection
  $filter: ModelVoucherFilterInput
  $limit: Int
  $nextToken: String
) {
  listVoucherByVoucherLink(
    voucherLink: $voucherLink
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      voucherLink
      voucherAmount
      voucherStatus
      voucherCreationDate
      issuedAt
      receiverId
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVoucherByVoucherLinkQueryVariables,
  APITypes.ListVoucherByVoucherLinkQuery
>;
export const listConfigurations = /* GraphQL */ `query ListConfigurations($version: String!) {
  listConfigurations(version: $version) {
    key
    lastModified
    eTag
    size
    url
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConfigurationsQueryVariables,
  APITypes.ListConfigurationsQuery
>;
export const listProps = /* GraphQL */ `query ListProps($fragment: Boolean) {
  listProps(fragment: $fragment) {
    id
    type
    currency
    price
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPropsQueryVariables, APITypes.ListPropsQuery>;
export const listFragments = /* GraphQL */ `query ListFragments {
  listFragments {
    id
    type
    currency
    price
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFragmentsQueryVariables,
  APITypes.ListFragmentsQuery
>;
export const getServerTime = /* GraphQL */ `query GetServerTime {
  getServerTime
}
` as GeneratedQuery<
  APITypes.GetServerTimeQueryVariables,
  APITypes.GetServerTimeQuery
>;
