class EventHelper {
  constructor() {
  }
  // 取得列舉索引
  getEnumKey(enumType, enumValue) {
    return Object.keys(enumType)[Object.values(enumType).indexOf(enumValue)];
  }
}
var ClientType = /* @__PURE__ */ ((ClientType2) => {
  ClientType2[ClientType2["Google"] = 1] = "Google";
  ClientType2[ClientType2["Facebook"] = 2] = "Facebook";
  return ClientType2;
})(ClientType || {});
var AdLevelType = /* @__PURE__ */ ((AdLevelType2) => {
  AdLevelType2[AdLevelType2["Campaign"] = 1] = "Campaign";
  AdLevelType2[AdLevelType2["AdGroup"] = 2] = "AdGroup";
  AdLevelType2[AdLevelType2["Ad"] = 3] = "Ad";
  AdLevelType2[AdLevelType2["AdTag"] = 4] = "AdTag";
  return AdLevelType2;
})(AdLevelType || {});
var FrequencyType = /* @__PURE__ */ ((FrequencyType2) => {
  FrequencyType2[FrequencyType2["Hour"] = 1] = "Hour";
  FrequencyType2[FrequencyType2["Day"] = 2] = "Day";
  FrequencyType2[FrequencyType2["Week"] = 3] = "Week";
  FrequencyType2[FrequencyType2["Month"] = 4] = "Month";
  FrequencyType2[FrequencyType2["Annual"] = 5] = "Annual";
  FrequencyType2[FrequencyType2["Never"] = -1] = "Never";
  return FrequencyType2;
})(FrequencyType || {});
var WeekdaysType = /* @__PURE__ */ ((WeekdaysType2) => {
  WeekdaysType2[WeekdaysType2["Monday"] = 1] = "Monday";
  WeekdaysType2[WeekdaysType2["Tuesday"] = 2] = "Tuesday";
  WeekdaysType2[WeekdaysType2["Wednesday"] = 3] = "Wednesday";
  WeekdaysType2[WeekdaysType2["Thursday"] = 4] = "Thursday";
  WeekdaysType2[WeekdaysType2["Friday"] = 5] = "Friday";
  WeekdaysType2[WeekdaysType2["Saturday"] = 6] = "Saturday";
  WeekdaysType2[WeekdaysType2["Sunday"] = 7] = "Sunday";
  WeekdaysType2[WeekdaysType2["Weekday"] = -1] = "Weekday";
  WeekdaysType2[WeekdaysType2["Weekend"] = -2] = "Weekend";
  return WeekdaysType2;
})(WeekdaysType || {});
var WeekOrdinalWordsType = /* @__PURE__ */ ((WeekOrdinalWordsType2) => {
  WeekOrdinalWordsType2[WeekOrdinalWordsType2["First"] = 1] = "First";
  WeekOrdinalWordsType2[WeekOrdinalWordsType2["Second"] = 2] = "Second";
  WeekOrdinalWordsType2[WeekOrdinalWordsType2["Third"] = 3] = "Third";
  WeekOrdinalWordsType2[WeekOrdinalWordsType2["Fourth"] = 4] = "Fourth";
  WeekOrdinalWordsType2[WeekOrdinalWordsType2["Fifth"] = 5] = "Fifth";
  WeekOrdinalWordsType2[WeekOrdinalWordsType2["Last"] = -1] = "Last";
  return WeekOrdinalWordsType2;
})(WeekOrdinalWordsType || {});
var MonthType = /* @__PURE__ */ ((MonthType2) => {
  MonthType2[MonthType2["January"] = 1] = "January";
  MonthType2[MonthType2["February"] = 2] = "February";
  MonthType2[MonthType2["March"] = 3] = "March";
  MonthType2[MonthType2["April"] = 4] = "April";
  MonthType2[MonthType2["May"] = 5] = "May";
  MonthType2[MonthType2["June"] = 6] = "June";
  MonthType2[MonthType2["July"] = 7] = "July";
  MonthType2[MonthType2["August"] = 8] = "August";
  MonthType2[MonthType2["September"] = 9] = "September";
  MonthType2[MonthType2["October"] = 10] = "October";
  MonthType2[MonthType2["November"] = 11] = "November";
  MonthType2[MonthType2["December"] = 12] = "December";
  return MonthType2;
})(MonthType || {});
var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2[ActionType2["SetNewBudget"] = 1] = "SetNewBudget";
  ActionType2[ActionType2["IncreaseBudget"] = 2] = "IncreaseBudget";
  ActionType2[ActionType2["LowerBudget"] = 3] = "LowerBudget";
  ActionType2[ActionType2["OpenProject"] = 4] = "OpenProject";
  ActionType2[ActionType2["SuspendProject"] = 5] = "SuspendProject";
  ActionType2[ActionType2["None"] = -1] = "None";
  return ActionType2;
})(ActionType || {});
var BudgetType = /* @__PURE__ */ ((BudgetType2) => {
  BudgetType2["DailyBudget"] = "dailyBudget";
  BudgetType2["TotalBudget"] = "totalBudget";
  return BudgetType2;
})(BudgetType || {});
var ValueType = /* @__PURE__ */ ((ValueType2) => {
  ValueType2["Value"] = "value";
  ValueType2["Percentage"] = "percentage";
  return ValueType2;
})(ValueType || {});
var ConditionType = /* @__PURE__ */ ((ConditionType2) => {
  ConditionType2["BudgetRemaining"] = "budgetRemaining";
  ConditionType2["Impressions"] = "impressions";
  ConditionType2["Spent"] = "spent";
  ConditionType2["Conversions"] = "conversions";
  ConditionType2["ReturnOnADSpending"] = "roas";
  ConditionType2["Clicks"] = "clicks";
  return ConditionType2;
})(ConditionType || {});
var DateRangeType = /* @__PURE__ */ ((DateRangeType2) => {
  DateRangeType2[DateRangeType2["Today"] = 1] = "Today";
  DateRangeType2[DateRangeType2["Yesterday"] = 2] = "Yesterday";
  DateRangeType2[DateRangeType2["Last3Days"] = 3] = "Last3Days";
  DateRangeType2[DateRangeType2["Last7Days"] = 4] = "Last7Days";
  DateRangeType2[DateRangeType2["ThisMonth"] = 5] = "ThisMonth";
  DateRangeType2[DateRangeType2["LastMonth"] = 6] = "LastMonth";
  DateRangeType2[DateRangeType2["ThisSeason"] = 7] = "ThisSeason";
  DateRangeType2[DateRangeType2["LastSeason"] = 8] = "LastSeason";
  DateRangeType2[DateRangeType2["ThisYear"] = 9] = "ThisYear";
  DateRangeType2[DateRangeType2["LastYear"] = 10] = "LastYear";
  DateRangeType2[DateRangeType2["SpecifiedTime"] = -1] = "SpecifiedTime";
  return DateRangeType2;
})(DateRangeType || {});
var OperationType = /* @__PURE__ */ ((OperationType2) => {
  OperationType2["MoreThan"] = ">";
  OperationType2["GreaterOrEqualTo"] = ">=";
  OperationType2["Equal"] = "==";
  OperationType2["LessThan"] = "<";
  OperationType2["LessThanOrEqualTo"] = "<=";
  return OperationType2;
})(OperationType || {});

export { ActionType, AdLevelType, BudgetType, ClientType, ConditionType, DateRangeType, EventHelper, FrequencyType, MonthType, OperationType, ValueType, WeekOrdinalWordsType, WeekdaysType };
