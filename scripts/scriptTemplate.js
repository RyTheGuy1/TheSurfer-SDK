// Script template
const { createCursor } = require("ghost-cursor");

module.exports = async function main (page, _data) {

	// Get data from API call sample
	console.log(_data["url"]);

	// Do Stuff
	await page.goto(_data["url"],{
		waitUntil: ['domcontentloaded', 'networkidle0']
	});
	await page.screenshot({ path: _data["url"].slice(8,-4)+".png" });

	// End task execution
	return;
};