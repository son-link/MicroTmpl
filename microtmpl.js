function MicroTmpl(tmpl,data){
	var itemdata;
	function strReplace(match,itemName){
		return itemdata[itemName] || '';
	}
	if(typeof data.length === 'undefined'){
		data = [data];
	}
	
	var ret = '';
	data.forEach(function(dataItem){
		itemdata = dataItem;
		ret += tmpl.replace(/\{%(\w+)%\}/g,strReplace);
	});
	return ret;
}
