/**
 * API:
 * 列表 GET /heybear/api/monitor
 * 新增 POST /heybear/api/monitor
 * 修改 PUT /heybear/api/monitor/4
 *
 *
 */

/**
 * 事件輔助類別
 */
export class EventHelper {
    // 取得列舉索引
    getEnumKey(enumType: any, enumValue: any): string {
        return Object.keys(enumType)[Object.values(enumType).indexOf(enumValue)];
    }
    // 取得列舉所有索引
    getEnumKeys(enumType: any): string[] {
        return Object.keys(enumType);
    }
}

/**
 * 事件本身
 */
export interface EventItem {
    title: String // 事件名稱
    start: String // 事件開始日期
    frequency: FrequencyType // 頻率單位
    interval: Number // 頻率間隔
    weekdays?: WeekdaysType[] // 指定每週第幾星期
    weekOrdinal?: WeekOrdinalWordsType[] //指定每月第幾週
    monthDate?: Number[] // 每個月第幾天(1 - 31), -1表示最後一天
    yearMonths?: MonthType[] // 每年的第幾個月
    due?: String  // 事件結束日期
    except?: String[] // 排除指定日期
    action?: EventAction // 執行動作
    conditions?: EventCondition[] // 條件
}

/**
 * 執行動作
 */
export interface EventAction {
    client: ClientType
    adLevel: AdLevelType
    target?: EventActionTarget[]
    action: ActionType
    params?: EventActionParamBudget
}

/**
 * 執行動作目標
 */
export interface EventActionTarget {
    id: String
    name: String
}

/**
 * 執行動作參數
 */
export interface EventActionParamBudget {
    budgetType: BudgetType
    valueType: ValueType
    value: Number // 值 or 百分比
    limit?: Number // 上限 or 下限
}

/**
 * 條件
 */
export interface EventCondition {
    target?: EventActionTarget[] // 依據來源
    conditionType: ConditionType // 條件下拉
    operation: OperationType
    valueType: ValueType
    value: Number // 值 or 百分比
    dateRangeType?: DateRangeType
    dateRange?: String[]
    comparison: Boolean // 加入比較區間
}

/**
 * 平台(帳戶類型)
 */
export enum ClientType {
    Google = 1,
    Facebook = 2
}

/**
 * 層級
 */
export enum AdLevelType {
    Campaign = 1,
    AdGroup =  2,
    Ad =  3,
    AdTag =  4
}

/**
 * 頻率
 */
export enum FrequencyType {
    Hour = 1,
    Day,
    Week,
    Month,
    Annual,
    Never = -1
}

/**
 * 每週星期幾
 */
export enum WeekdaysType {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    Weekday = -1, // 平日
    Weekend = -2, // 週末
}

/**
 * 每月第幾週
 */
export enum WeekOrdinalWordsType {
    First = 1,
    Second,
    Third,
    Fourth,
    Fifth,
    Last = -1
}

/**
 * 月份
 * This code is used to define the MonthType enum. The enum contains the names of the months of the year, with January being 1, February being 2, etc.
 */
export enum MonthType {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

/**
 * 執行
 */
export enum ActionType {
    SetNewBudget = 1, // 設定新預算
    IncreaseBudget = 2, // 提高預算
    LowerBudget = 3, // 降低預算
    OpenProject = 4, // 開啟項目
    SuspendProject = 5, // 暫停項目
    None = -1 // 不執行動作
}

/**
 * 設定預算類型
 */
export enum BudgetType {
    DailyBudget = 'dailyBudget', // 每日預算
    TotalBudget = 'totalBudget', // 總預算
}

/**
 * 預算調整
 */
export enum ValueType {
    Value = 'value', // 數值
    Percentage = 'percentage', // 百分比
}

/**
 * 條件
 */
export enum ConditionType {
    BudgetRemaining = 'budgetRemaining', // 帳戶剩餘預算
    Impressions = 'impressions', // 曝光數
    Spent = 'spent', // 花費
    Conversions = 'conversions', // 轉換數
    // ConversionRates = 'conversionRates', // 轉換率: 轉換次數除以同個時間範圍內帶來轉換的廣告點擊總數。舉例來說，如果 1,000 次互動帶來了 50 次轉換，轉換率就是 5% (50 ÷ 1,000 = 5%)。
    ReturnOnADSpending = 'roas', // ROAS
    Clicks = 'clicks', // 點擊數
    // ClickThroughRate = 'clickThroughRate', // 點擊率: 計算方式為 (點擊次數 ÷ 曝光次數)。
}

/**
 * 比較區間日期範圍
 */
export enum DateRangeType {
    Today = 1, // 當天
    Yesterday, // 昨天
    Last3Days, // 近3天
    Last7Days, // 近7天
    ThisMonth, // 這個月
    LastMonth, // 上個月
    ThisSeason, // 這一季
    LastSeason, // 上一季
    ThisYear, // 今年
    LastYear, // 去年
    SpecifiedTime = -1, // 指定時間
}

/**
 * 運算
 */
export enum OperationType {
    MoreThan = '>',
    GreaterOrEqualTo = '>=',
    Equal = '==',
    LessThan = '<',
    LessThanOrEqualTo = '<=',
}
