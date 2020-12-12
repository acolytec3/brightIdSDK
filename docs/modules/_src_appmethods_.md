[typescript-node-lib](../README.md) › ["src/appMethods"](_src_appmethods_.md)

# Module: "src/appMethods"

## Index

### Functions

* [availableSponsorships](_src_appmethods_.md#const-availablesponsorships)
* [generateDeeplink](_src_appmethods_.md#const-generatedeeplink)
* [getMessage](_src_appmethods_.md#const-getmessage)
* [sponsor](_src_appmethods_.md#const-sponsor)
* [verifyContextId](_src_appmethods_.md#const-verifycontextid)

## Functions

### `Const` availableSponsorships

▸ **availableSponsorships**(`context`: string, `nodeUrl?`: undefined | string): *Promise‹number›*

Defined in src/appMethods.ts:83

**Parameters:**

Name | Type |
------ | ------ |
`context` | string |
`nodeUrl?` | undefined &#124; string |

**Returns:** *Promise‹number›*

___

### `Const` generateDeeplink

▸ **generateDeeplink**(`context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *string*

Defined in src/appMethods.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`context` | string |
`contextId` | string |
`nodeUrl?` | undefined &#124; string |

**Returns:** *string*

___

### `Const` getMessage

▸ **getMessage**(`op`: any): *string*

Defined in src/appMethods.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`op` | any |

**Returns:** *string*

___

### `Const` sponsor

▸ **sponsor**(`key`: string, `context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *Promise‹any›*

Defined in src/appMethods.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`context` | string |
`contextId` | string |
`nodeUrl?` | undefined &#124; string |

**Returns:** *Promise‹any›*

___

### `Const` verifyContextId

▸ **verifyContextId**(`context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *Promise‹any›*

Defined in src/appMethods.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`context` | string |
`contextId` | string |
`nodeUrl?` | undefined &#124; string |

**Returns:** *Promise‹any›*
