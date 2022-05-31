describe('Protractor Test', function() {

  it('Test warning message of consumption calculator', function() {
	browser.get('https://www.globalsqa.com/angularJs-protractor/ConsumptionCalculator/');
	var Coffee = 12; //number of coffee
	var cigarettes = 2; //number of cigarettes
	
	//input set coffee value to 12.
	element(by.xpath('/html/body/form[1]/p/input')).sendKeys(Coffee).then(function(){
		console.log("set quantity of coffee to : " + Coffee);
	});
	
	//check coffee warning visible.
	expect(element(by.xpath('/html/body/form[1]/div/p[3]')).isDisplayed()).toBe(true).then(function(){
		console.log("check Coffee warning text Success");
	});
	
	//input set cigarettes to 2.
	element(by.xpath('/html/body/form[2]/p/input')).sendKeys(cigarettes).then(function(){
		console.log("set quantity of cigarettes to : " + cigarettes);
	});
		
	//check warning message to be visible.
	expect(element(by.xpath('/html/body/form[2]/div/p[3]')).isDisplayed()).toBe(true).then(function(){
		console.log("check Cigarettes warning text Success");
	});
	
	//check image of non-smoking warning to be visible.
	var cigaretteImg = element(by.id('cigarette'));
	expect(cigaretteImg.isDisplayed()).toBe(true).then(function(){
		console.log("check Cigarettes image visibility Success");
	});
	
  });

});
