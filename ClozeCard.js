function ClozeCard (text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.clozedText;

	this.removeCloze = function(text,cloze){
		var splitArr = text.split(cloze);
		this.clozedText = splitArr;
		console.log(splitArr);
		this.clozedText = splitArr[0] + "..." + splitArr[1];

	
	}
}

module.exports = ClozeCard;
