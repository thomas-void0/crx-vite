/* global chrome */

export const cookies = {
	get: chrome.cookies.get,
	set: chrome.cookies.set,
	remove: chrome.cookies.remove,
	getAll: chrome.cookies.getAll,
	getAllCookieStores: chrome.cookies.getAllCookieStores
};
