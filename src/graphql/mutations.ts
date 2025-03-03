/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $input: CreateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  createTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $input: UpdateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  updateTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $input: DeleteTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  deleteTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const createCheckingAccount = /* GraphQL */ `mutation CreateCheckingAccount(
  $input: CreateCheckingAccountInput!
  $condition: ModelCheckingAccountConditionInput
) {
  createCheckingAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCheckingAccountMutationVariables,
  APITypes.CreateCheckingAccountMutation
>;
export const updateCheckingAccount = /* GraphQL */ `mutation UpdateCheckingAccount(
  $input: UpdateCheckingAccountInput!
  $condition: ModelCheckingAccountConditionInput
) {
  updateCheckingAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCheckingAccountMutationVariables,
  APITypes.UpdateCheckingAccountMutation
>;
export const deleteCheckingAccount = /* GraphQL */ `mutation DeleteCheckingAccount(
  $input: DeleteCheckingAccountInput!
  $condition: ModelCheckingAccountConditionInput
) {
  deleteCheckingAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCheckingAccountMutationVariables,
  APITypes.DeleteCheckingAccountMutation
>;
export const createCampaign = /* GraphQL */ `mutation CreateCampaign(
  $input: CreateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  createCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCampaignMutationVariables,
  APITypes.CreateCampaignMutation
>;
export const updateCampaign = /* GraphQL */ `mutation UpdateCampaign(
  $input: UpdateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  updateCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCampaignMutationVariables,
  APITypes.UpdateCampaignMutation
>;
export const deleteCampaign = /* GraphQL */ `mutation DeleteCampaign(
  $input: DeleteCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  deleteCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCampaignMutationVariables,
  APITypes.DeleteCampaignMutation
>;
export const createParticipation = /* GraphQL */ `mutation CreateParticipation(
  $input: CreateParticipationInput!
  $condition: ModelParticipationConditionInput
) {
  createParticipation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateParticipationMutationVariables,
  APITypes.CreateParticipationMutation
>;
export const updateParticipation = /* GraphQL */ `mutation UpdateParticipation(
  $input: UpdateParticipationInput!
  $condition: ModelParticipationConditionInput
) {
  updateParticipation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateParticipationMutationVariables,
  APITypes.UpdateParticipationMutation
>;
export const deleteParticipation = /* GraphQL */ `mutation DeleteParticipation(
  $input: DeleteParticipationInput!
  $condition: ModelParticipationConditionInput
) {
  deleteParticipation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteParticipationMutationVariables,
  APITypes.DeleteParticipationMutation
>;
export const createMessageSource = /* GraphQL */ `mutation CreateMessageSource(
  $input: CreateMessageSourceInput!
  $condition: ModelMessageSourceConditionInput
) {
  createMessageSource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageSourceMutationVariables,
  APITypes.CreateMessageSourceMutation
>;
export const updateMessageSource = /* GraphQL */ `mutation UpdateMessageSource(
  $input: UpdateMessageSourceInput!
  $condition: ModelMessageSourceConditionInput
) {
  updateMessageSource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageSourceMutationVariables,
  APITypes.UpdateMessageSourceMutation
>;
export const deleteMessageSource = /* GraphQL */ `mutation DeleteMessageSource(
  $input: DeleteMessageSourceInput!
  $condition: ModelMessageSourceConditionInput
) {
  deleteMessageSource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageSourceMutationVariables,
  APITypes.DeleteMessageSourceMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createArticle = /* GraphQL */ `mutation CreateArticle(
  $input: CreateArticleInput!
  $condition: ModelArticleConditionInput
) {
  createArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArticleMutationVariables,
  APITypes.CreateArticleMutation
>;
export const updateArticle = /* GraphQL */ `mutation UpdateArticle(
  $input: UpdateArticleInput!
  $condition: ModelArticleConditionInput
) {
  updateArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArticleMutationVariables,
  APITypes.UpdateArticleMutation
>;
export const deleteArticle = /* GraphQL */ `mutation DeleteArticle(
  $input: DeleteArticleInput!
  $condition: ModelArticleConditionInput
) {
  deleteArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArticleMutationVariables,
  APITypes.DeleteArticleMutation
>;
export const createTraceEvent = /* GraphQL */ `mutation CreateTraceEvent(
  $input: CreateTraceEventInput!
  $condition: ModelTraceEventConditionInput
) {
  createTraceEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTraceEventMutationVariables,
  APITypes.CreateTraceEventMutation
>;
export const updateTraceEvent = /* GraphQL */ `mutation UpdateTraceEvent(
  $input: UpdateTraceEventInput!
  $condition: ModelTraceEventConditionInput
) {
  updateTraceEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTraceEventMutationVariables,
  APITypes.UpdateTraceEventMutation
>;
export const deleteTraceEvent = /* GraphQL */ `mutation DeleteTraceEvent(
  $input: DeleteTraceEventInput!
  $condition: ModelTraceEventConditionInput
) {
  deleteTraceEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTraceEventMutationVariables,
  APITypes.DeleteTraceEventMutation
>;
export const createVoucher = /* GraphQL */ `mutation CreateVoucher(
  $input: CreateVoucherInput!
  $condition: ModelVoucherConditionInput
) {
  createVoucher(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateVoucherMutationVariables,
  APITypes.CreateVoucherMutation
>;
export const updateVoucher = /* GraphQL */ `mutation UpdateVoucher(
  $input: UpdateVoucherInput!
  $condition: ModelVoucherConditionInput
) {
  updateVoucher(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateVoucherMutationVariables,
  APITypes.UpdateVoucherMutation
>;
export const deleteVoucher = /* GraphQL */ `mutation DeleteVoucher(
  $input: DeleteVoucherInput!
  $condition: ModelVoucherConditionInput
) {
  deleteVoucher(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteVoucherMutationVariables,
  APITypes.DeleteVoucherMutation
>;
export const openCheckingAccount = /* GraphQL */ `mutation OpenCheckingAccount($currency: String!) {
  openCheckingAccount(currency: $currency) {
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
` as GeneratedMutation<
  APITypes.OpenCheckingAccountMutationVariables,
  APITypes.OpenCheckingAccountMutation
>;
export const depositMoney = /* GraphQL */ `mutation DepositMoney($checkingAccountId: ID!, $amount: Float!, $memo: String) {
  depositMoney(
    checkingAccountId: $checkingAccountId
    amount: $amount
    memo: $memo
  ) {
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
` as GeneratedMutation<
  APITypes.DepositMoneyMutationVariables,
  APITypes.DepositMoneyMutation
>;
export const withdrawMoney = /* GraphQL */ `mutation WithdrawMoney(
  $checkingAccountId: ID!
  $amount: Float!
  $memo: String
) {
  withdrawMoney(
    checkingAccountId: $checkingAccountId
    amount: $amount
    memo: $memo
  ) {
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
` as GeneratedMutation<
  APITypes.WithdrawMoneyMutationVariables,
  APITypes.WithdrawMoneyMutation
>;
export const participate = /* GraphQL */ `mutation Participate($campaignId: String!) {
  participate(campaignId: $campaignId) {
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
` as GeneratedMutation<
  APITypes.ParticipateMutationVariables,
  APITypes.ParticipateMutation
>;
export const redeemRewards = /* GraphQL */ `mutation RedeemRewards($participationId: String!) {
  redeemRewards(participationId: $participationId) {
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
` as GeneratedMutation<
  APITypes.RedeemRewardsMutationVariables,
  APITypes.RedeemRewardsMutation
>;
export const drawEmployeeCards = /* GraphQL */ `mutation DrawEmployeeCards(
  $version: String!
  $checkingAccountId: ID!
  $limit: Int
) {
  drawEmployeeCards(
    version: $version
    checkingAccountId: $checkingAccountId
    limit: $limit
  ) {
    name
    level
    category
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DrawEmployeeCardsMutationVariables,
  APITypes.DrawEmployeeCardsMutation
>;
export const syncMessages = /* GraphQL */ `mutation SyncMessages {
  syncMessages {
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
` as GeneratedMutation<
  APITypes.SyncMessagesMutationVariables,
  APITypes.SyncMessagesMutation
>;
export const linkProviderForUser = /* GraphQL */ `mutation LinkProviderForUser($providerName: String!, $providerUserId: String!) {
  linkProviderForUser(
    providerName: $providerName
    providerUserId: $providerUserId
  )
}
` as GeneratedMutation<
  APITypes.LinkProviderForUserMutationVariables,
  APITypes.LinkProviderForUserMutation
>;
export const logEvent = /* GraphQL */ `mutation LogEvent($eventName: String!, $eventTags: [String!]) {
  logEvent(eventName: $eventName, eventTags: $eventTags) {
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
` as GeneratedMutation<
  APITypes.LogEventMutationVariables,
  APITypes.LogEventMutation
>;
