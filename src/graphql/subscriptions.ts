/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onCreateTransaction = /* GraphQL */ `subscription OnCreateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
  $owner: String
) {
  onCreateTransaction(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTransactionSubscriptionVariables,
  APITypes.OnCreateTransactionSubscription
>;
export const onUpdateTransaction = /* GraphQL */ `subscription OnUpdateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
  $owner: String
) {
  onUpdateTransaction(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionSubscriptionVariables,
  APITypes.OnUpdateTransactionSubscription
>;
export const onDeleteTransaction = /* GraphQL */ `subscription OnDeleteTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
  $owner: String
) {
  onDeleteTransaction(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionSubscriptionVariables,
  APITypes.OnDeleteTransactionSubscription
>;
export const onCreateCheckingAccount = /* GraphQL */ `subscription OnCreateCheckingAccount(
  $filter: ModelSubscriptionCheckingAccountFilterInput
  $owner: String
) {
  onCreateCheckingAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckingAccountSubscriptionVariables,
  APITypes.OnCreateCheckingAccountSubscription
>;
export const onUpdateCheckingAccount = /* GraphQL */ `subscription OnUpdateCheckingAccount(
  $filter: ModelSubscriptionCheckingAccountFilterInput
  $owner: String
) {
  onUpdateCheckingAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckingAccountSubscriptionVariables,
  APITypes.OnUpdateCheckingAccountSubscription
>;
export const onDeleteCheckingAccount = /* GraphQL */ `subscription OnDeleteCheckingAccount(
  $filter: ModelSubscriptionCheckingAccountFilterInput
  $owner: String
) {
  onDeleteCheckingAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckingAccountSubscriptionVariables,
  APITypes.OnDeleteCheckingAccountSubscription
>;
export const onCreateCampaign = /* GraphQL */ `subscription OnCreateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onCreateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampaignSubscriptionVariables,
  APITypes.OnCreateCampaignSubscription
>;
export const onUpdateCampaign = /* GraphQL */ `subscription OnUpdateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onUpdateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignSubscriptionVariables,
  APITypes.OnUpdateCampaignSubscription
>;
export const onDeleteCampaign = /* GraphQL */ `subscription OnDeleteCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onDeleteCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignSubscriptionVariables,
  APITypes.OnDeleteCampaignSubscription
>;
export const onCreateParticipation = /* GraphQL */ `subscription OnCreateParticipation(
  $filter: ModelSubscriptionParticipationFilterInput
  $owner: String
) {
  onCreateParticipation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParticipationSubscriptionVariables,
  APITypes.OnCreateParticipationSubscription
>;
export const onUpdateParticipation = /* GraphQL */ `subscription OnUpdateParticipation(
  $filter: ModelSubscriptionParticipationFilterInput
  $owner: String
) {
  onUpdateParticipation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParticipationSubscriptionVariables,
  APITypes.OnUpdateParticipationSubscription
>;
export const onDeleteParticipation = /* GraphQL */ `subscription OnDeleteParticipation(
  $filter: ModelSubscriptionParticipationFilterInput
  $owner: String
) {
  onDeleteParticipation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParticipationSubscriptionVariables,
  APITypes.OnDeleteParticipationSubscription
>;
export const onCreateMessageSource = /* GraphQL */ `subscription OnCreateMessageSource(
  $filter: ModelSubscriptionMessageSourceFilterInput
) {
  onCreateMessageSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSourceSubscriptionVariables,
  APITypes.OnCreateMessageSourceSubscription
>;
export const onUpdateMessageSource = /* GraphQL */ `subscription OnUpdateMessageSource(
  $filter: ModelSubscriptionMessageSourceFilterInput
) {
  onUpdateMessageSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSourceSubscriptionVariables,
  APITypes.OnUpdateMessageSourceSubscription
>;
export const onDeleteMessageSource = /* GraphQL */ `subscription OnDeleteMessageSource(
  $filter: ModelSubscriptionMessageSourceFilterInput
) {
  onDeleteMessageSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSourceSubscriptionVariables,
  APITypes.OnDeleteMessageSourceSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onCreateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onUpdateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onDeleteMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateTraceEvent = /* GraphQL */ `subscription OnCreateTraceEvent(
  $filter: ModelSubscriptionTraceEventFilterInput
  $owner: String
) {
  onCreateTraceEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTraceEventSubscriptionVariables,
  APITypes.OnCreateTraceEventSubscription
>;
export const onUpdateTraceEvent = /* GraphQL */ `subscription OnUpdateTraceEvent(
  $filter: ModelSubscriptionTraceEventFilterInput
  $owner: String
) {
  onUpdateTraceEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTraceEventSubscriptionVariables,
  APITypes.OnUpdateTraceEventSubscription
>;
export const onDeleteTraceEvent = /* GraphQL */ `subscription OnDeleteTraceEvent(
  $filter: ModelSubscriptionTraceEventFilterInput
  $owner: String
) {
  onDeleteTraceEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTraceEventSubscriptionVariables,
  APITypes.OnDeleteTraceEventSubscription
>;
export const onCreateVoucher = /* GraphQL */ `subscription OnCreateVoucher($filter: ModelSubscriptionVoucherFilterInput) {
  onCreateVoucher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVoucherSubscriptionVariables,
  APITypes.OnCreateVoucherSubscription
>;
export const onUpdateVoucher = /* GraphQL */ `subscription OnUpdateVoucher($filter: ModelSubscriptionVoucherFilterInput) {
  onUpdateVoucher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVoucherSubscriptionVariables,
  APITypes.OnUpdateVoucherSubscription
>;
export const onDeleteVoucher = /* GraphQL */ `subscription OnDeleteVoucher($filter: ModelSubscriptionVoucherFilterInput) {
  onDeleteVoucher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVoucherSubscriptionVariables,
  APITypes.OnDeleteVoucherSubscription
>;
