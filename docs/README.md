
# brightid_sdk

## Index

### Functions

* [availableSponsorships](README.md#const-availablesponsorships)
* [generateDeeplink](README.md#const-generatedeeplink)
* [putTestingBlock](README.md#const-puttestingblock)
* [removeTestingBlock](README.md#const-removetestingblock)
* [sponsor](README.md#const-sponsor)
* [verifyContextId](README.md#const-verifycontextid)

## Functions

### `Const` availableSponsorships

▸ **availableSponsorships**(`context`: string, `nodeUrl?`: undefined | string): *Promise‹number | any›*

*Defined in [appMethods.ts:135](https://github.com/acolytec3/brightIdSDK/blob/fadd589/src/appMethods.ts#L135)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | string | the application context to retrieve available sponsorships for |
`nodeUrl?` | undefined &#124; string | optional BrightID node url - of the form `http://node.brightid.org`  |

**Returns:** *Promise‹number | any›*

Returns the number of sponsorships available to the specified `context`

___

### `Const` generateDeeplink

▸ **generateDeeplink**(`context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *string*

*Defined in [appMethods.ts:20](https://github.com/acolytec3/brightIdSDK/blob/fadd589/src/appMethods.ts#L20)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | string | the application context string to create a deeplink for |
`contextId` | string | the contextId string corresponding to a specific BrightID |
`nodeUrl?` | undefined &#124; string | optional BrightID node url - of the form `http://node.brightid.org`  |

**Returns:** *string*

a deeplink of the form `brightid://link-verification/http://node.brightid.org/testContext/testContextId`

___

### `Const` putTestingBlock

▸ **putTestingBlock**(`operation`: string, `testingKey`: string, `context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *Promise‹any›*

*Defined in [testMethods.ts:18](https://github.com/acolytec3/brightIdSDK/blob/fadd589/src/testMethods.ts#L18)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operation` | string | the status type to be temporarily removed from a contextId in a given application context.  Must be `sponsorship`, `verification`, or `link` |
`testingKey` | string | the testing key corresponding to the application context being tested |
`context` | string | the application context where the contextId's status is being removed |
`contextId` | string | the contextId who's status is being temporarily removed |
`nodeUrl?` | undefined &#124; string | optional BrightID node url - of the form `http://node.brightid.org`  |

**Returns:** *Promise‹any›*

a success objected with a status code 204 and success message

___

### `Const` removeTestingBlock

▸ **removeTestingBlock**(`operation`: string, `testingKey`: string, `context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *Promise‹any›*

*Defined in [testMethods.ts:83](https://github.com/acolytec3/brightIdSDK/blob/fadd589/src/testMethods.ts#L83)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operation` | string | the status type to be restored for a contextId in a given application context.  Must be `sponsorship`, `verification`, or `link` |
`testingKey` | string | the testing key corresponding to the application context being tested |
`context` | string | the application context where the contextId's status is being removed |
`contextId` | string | the contextId who's status is being temporarily removed |
`nodeUrl?` | undefined &#124; string | optional BrightID node url - of the form `http://node.brightid.org`  |

**Returns:** *Promise‹any›*

a success objected with a status code 204 and success message if the operation was successfully submitted to the BrightID node

___

### `Const` sponsor

▸ **sponsor**(`key`: string, `context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *Promise‹any›*

*Defined in [appMethods.ts:68](https://github.com/acolytec3/brightIdSDK/blob/fadd589/src/appMethods.ts#L68)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the sponsor private key needed for sponsoring a BrightID |
`context` | string | the application context in which to sponsor a given BrightID |
`contextId` | string | the contextId linked to the BrightID being sponsored |
`nodeUrl?` | undefined &#124; string | optional BrightID node url - of the form `http://node.brightid.org`  |

**Returns:** *Promise‹any›*

A hash of the operation if successfully submitted to the BrightID node or an error

___

### `Const` verifyContextId

▸ **verifyContextId**(`context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *Promise‹any›*

*Defined in [appMethods.ts:37](https://github.com/acolytec3/brightIdSDK/blob/fadd589/src/appMethods.ts#L37)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | string | the application context in which to verify a given `contextId`'s status |
`contextId` | string | the contextId to retrieve the status of |
`nodeUrl?` | undefined &#124; string | optional BrightID node url - of the form `http://node.brightid.org`  |

**Returns:** *Promise‹any›*

An API response with a uniqueness indicator and a list of any other contextIds associated with the BrightID linked to the `contextId`
