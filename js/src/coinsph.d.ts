import Exchange from './abstract/coinsph.js';
import { Int, OrderSide, OrderType } from './base/types.js';
/**
 * @class coinsph
 * @extends Exchange
 */
export default class coinsph extends Exchange {
    describe(): any;
    calculateRateLimiterCost(api: any, method: any, path: any, params: any, config?: {}): any;
    fetchStatus(params?: {}): Promise<{
        status: string;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchTime(params?: {}): Promise<number>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchTickers(symbols?: string[], params?: {}): Promise<import("./base/types.js").Dictionary<import("./base/types.js").Ticker>>;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    parseBalance(response: any): import("./base/types.js").Balances;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<import("./base/types.js").Order>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<import("./base/types.js").Order>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<import("./base/types.js").Order>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<import("./base/types.js").Order[]>;
    parseOrder(order: any, market?: any): import("./base/types.js").Order;
    parseOrderSide(status: any): string;
    encodeOrderSide(status: any): string;
    parseOrderType(status: any): string;
    encodeOrderType(status: any): string;
    parseOrderStatus(status: any): string;
    parseOrderTimeInForce(status: any): string;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    }>;
    fetchTradingFees(params?: {}): Promise<{}>;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    };
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        timestamp: any;
        datetime: string;
        network: string;
        address: string;
        addressTo: string;
        addressFrom: any;
        tag: string;
        tagTo: string;
        tagFrom: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: any;
        internal: any;
        fee: any;
    }>;
    deposit(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        timestamp: any;
        datetime: string;
        network: string;
        address: string;
        addressTo: string;
        addressFrom: any;
        tag: string;
        tagTo: string;
        tagFrom: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: any;
        internal: any;
        fee: any;
    }>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        txid: string;
        timestamp: any;
        datetime: string;
        network: string;
        address: string;
        addressTo: string;
        addressFrom: any;
        tag: string;
        tagTo: string;
        tagFrom: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: any;
        internal: any;
        fee: any;
    };
    parseTransactionStatus(status: any): string;
    urlEncodeQuery(query?: {}): string;
    parseArrayParam(array: any, key: any): string;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
