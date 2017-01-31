function stockWidget(settings){
	var marq = $('<marquee>',{});
	var marqdiv = $('<div>',{});
	var sym = 'IRON.L';
	var behavior = 'scroll';
	var tags = [];
	if(settings == undefined){ settings = {} };
	if(settings.symbol){ sym = settings.symbol };
	if(settings.behavior){ behavior = settings.behavior };
	if(settings.tags){ if(settings.tags == 'default'){ tags = stockDefault } else { tags = settings.tags } };
	marq.className = 'marquee';
	$.ajax({
		type: 'GET',
		url: "http://query.yahooapis.com/v1/public/yql",
		data: "q=select * from yahoo.finance.quotes where symbol in ('"+sym+"')&env=http://datatables.org/alltables.env",
	   success:function(data){
		var arr = data.childNodes[0].childNodes[0].childNodes[0].childNodes;
		var elements = [];
		for(var i=0; i<arr.length; i++){ if( tags.includes(arr[i].tagName) ){ elements.push( arr[i] ) } };
		elements.forEach(function(elem, i){
			console.log(elem);
			var txt = ' | ' 
				+ elem.tagName.replace(/([a-z])([A-Z])/g, '$1 $2') 
				+ ' : ' 
				+ elem.textContent;
			var txtdiv = $('<div>',{class: elem.tagName, text: txt})
			if (elem.textContent !== undefined) {
				if (elem.textContent.substr(0,1) == '+'){
					txtdiv.toggleClass('green')
				} else if (elem.textContent.substr(0,1) == '-') {
					txtdiv.toggleClass('red')
				} else { txtdiv.toggleClass('orange') };
			} 
			marqdiv.append(txtdiv)
		})
	   }
	});
	marq.append(marqdiv);
	$('#stockWidget').append(marq);
	setTimeout(function(){ $('marquee').attr('behavior', behavior)},3000)
}
	
var stockDefault = ["Ask", "AverageDailyVolume", "Bid", "AskRealtime", "BidRealtime", "BookValue", "Change_PercentChange", "Change", "Commission", "Currency", "ChangeRealtime", "AfterHoursChangeRealtime", "DividendShare", "LastTradeDate", "TradeDate", "EarningsShare", "ErrorIndicationreturnedforsymbolchangedinvalid", "EPSEstimateCurrentYear", "EPSEstimateNextYear", "EPSEstimateNextQuarter", "DaysLow", "DaysHigh", "YearLow", "YearHigh", "HoldingsGainPercent", "AnnualizedGain", "HoldingsGain", "HoldingsGainPercentRealtime", "HoldingsGainRealtime", "MoreInfo", "OrderBookRealtime", "MarketCapitalization", "MarketCapRealtime", "EBITDA", "ChangeFromYearLow", "PercentChangeFromYearLow", "LastTradeRealtimeWithTime", "ChangePercentRealtime", "ChangeFromYearHigh", "PercebtChangeFromYearHigh", "LastTradeWithTime", "LastTradePriceOnly", "HighLimit", "LowLimit", "DaysRange", "DaysRangeRealtime", "FiftydayMovingAverage", "TwoHundreddayMovingAverage", "ChangeFromTwoHundreddayMovingAverage", "PercentChangeFromTwoHundreddayMovingAverage", "ChangeFromFiftydayMovingAverage", "PercentChangeFromFiftydayMovingAverage", "Name", "Notes", "Open", "PreviousClose", "PricePaid", "ChangeinPercent", "PriceSales", "PriceBook", "ExDividendDate", "PERatio", "DividendPayDate", "PERatioRealtime", "PEGRatio", "PriceEPSEstimateCurrentYear", "PriceEPSEstimateNextYear", "Symbol", "SharesOwned", "ShortRatio", "LastTradeTime", "TickerTrend", "OneyrTargetPrice", "Volume", "HoldingsValue", "HoldingsValueRealtime", "YearRange", "DaysValueChange", "DaysValueChangeRealtime", "StockExchange", "DividendYield", "PercentChange"];

/* DEFAULT TAG NAMES
Ask, AverageDailyVolume, Bid, AskRealtime, BidRealtime, BookValue, Change_PercentChange,
Change, Commission, Currency, ChangeRealtime, AfterHoursChangeRealtime, DividendShare,
LastTradeDate, TradeDate, EarningsShare, ErrorIndicationreturnedforsymbolchangedinvalid,
EPSEstimateCurrentYear, EPSEstimateNextYear, EPSEstimateNextQuarter, DaysLow, DaysHigh,
YearLow, YearHigh, HoldingsGainPercent, AnnualizedGain, HoldingsGain, HoldingsGainPercentRealtime,
HoldingsGainRealtime, MoreInfo, OrderBookRealtime, MarketCapitalization, MarketCapRealtime,
EBITDA, ChangeFromYearLow, PercentChangeFromYearLow, LastTradeRealtimeWithTime, ChangePercentRealtime,
ChangeFromYearHigh, PercebtChangeFromYearHigh, LastTradeWithTime, LastTradePriceOnly, HighLimit,
LowLimit, DaysRange, DaysRangeRealtime, FiftydayMovingAverage, TwoHundreddayMovingAverage,
ChangeFromTwoHundreddayMovingAverage, PercentChangeFromTwoHundreddayMovingAverage,
ChangeFromFiftydayMovingAverage, PercentChangeFromFiftydayMovingAverage, Name, Notes, Open,
PreviousClose, PricePaid, ChangeinPercent, PriceSales, PriceBook, ExDividendDate, PERatio,
DividendPayDate, PERatioRealtime, PEGRatio, PriceEPSEstimateCurrentYear, PriceEPSEstimateNextYear,
Symbol, SharesOwned, ShortRatio, LastTradeTime, TickerTrend, OneyrTargetPrice, Volume, HoldingsValue,
HoldingsValueRealtime, YearRange, DaysValueChange, DaysValueChangeRealtime, StockExchange,
DividendYield, PercentChange, AverageDailyVolume, AskRealtime, BidRealtime */

/* OTHER TAG NAMES
ErrorIndicationreturnedforsymbolchangedinvalid, AfterHoursChangeRealtime, DividendShare, 
BookValue Change, Commission, ChangeRealtime, 
LastTradeDate, TradeDate, EarningsShare, ErrorIndicationreturnedforsymbolchangedinvalid, 
EPSEstimateCurrentYear, EPSEstimateNextYear, EPSEstimateNextQuarter, HoldingsGainPercent, 
AnnualizedGain, HoldingsGain, HoldingsGainPercentRealtime, HoldingsGainRealtime, 
MoreInfo, OrderBookRealtime, MarketCapitalization, MarketCapRealtime, EBITDA, 
LastTradeRealtimeWithTime, ChangePercentRealtime, Notes, PricePaid, PriceSales, PriceSales, 
ExDividendDate, PERatio, DividendPayDate, PERatioRealtime, PEGRatio, 
PriceEPSEstimateCurrentYear, PriceEPSEstimateNextYear, SharesOwned, ShortRatio, 
LastTradeTime, TickerTrend, TickerTrend, OneyrTargetPrice, HoldingsValue, 
HoldingsValueRealtime, DaysValueChange, DaysValueChange, DividendYield, DividendYield, 
LastTradeWithTime, LastTradePriceOnly, HighLimit, LowLimit, DaysRangeRealtime, 
FiftydayMovingAverage, TwoHundreddayMovingAverage, ChangeFromTwoHundreddayMovingAverage, 
PercentChangeFromTwoHundreddayMovingAverage, ChangeFromFiftydayMovingAverage, 
PercentChangeFromFiftydayMovingAverage
*/