import * as TCEvent from './src/index'

/**
 * 事件項目範例
 */

const example: TCEvent.EventItem = JSON.parse(`{
    "title": "每月第一個星期一Google帳戶剩餘預算小於1000元且本季花費大於上一季度，則暫停Google指定廣告活動",
    "start": "2023-07-17T11:00Z",
    "frequency": 4,
    "interval": 1,
    "weekdays": [1],
    "weekOrdinal": [1],
    "due": "2023-12-31T23:59Z",
    "action": {
        "client": 1,
        "adLevel": 2,
        "target": [
            {
                "id": "4493645",
                "name": "廣告活動A"
            },
            {
                "id": "5493789",
                "name": "廣告活動B"
            }
        ],
        "action": 5
    },
    "conditions": [
        {
            "conditionType": "budgetRemaining",
            "operation": "<",
            "valueType": "value",
            "value": 1000
        },
        {
            "conditionType": "spent",
            "dateRange": ["2023-11-16T11:00Z", "2023-11-22T11:00Z"],
            "operation": ">",
            "valueType": "value",
            "value": 0,
            "comparison": true
        }
    ]
}`)

console.log('EventItem物件:', example)

/**
 * 事件輔助類別範例
 */

const eventHelper = new TCEvent.EventHelper();
const enumKey = eventHelper.getEnumKey(TCEvent.ClientType, TCEvent.ClientType.Google); // Google
console.log('ClientType.Google Key:', enumKey)
const unknownKey = eventHelper.getEnumKey(TCEvent.ClientType, 3); // undefined
console.log('ClientType.?? Key:', unknownKey)
