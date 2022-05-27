

function getData(){
	var formatDate = document.getElementById("formatDate").value;
	var formatTime = document.getElementById("formatTime").value;
	var targetDate = document.getElementById("targetDate").value;
	var startTime = document.getElementById("startTime").value;
	var endTime = document.getElementById("endTime").value;
	return{
		"formatDate": formatDate,
		"formatTime": formatTime,
		"targetDate": targetDate,
		"startTime": startTime,
		"endTime": endTime,
	};
}

function updatedData(){
	var outputText = "";
	var addTextElement = document.getElementById("addText");
	var inputs = getData();
	if(inputs.formatDate || 
		inputs.formatTime || 
		inputs.targetDate || 
		inputs.startTime || 
		inputs.endTime){
		return;
	}
	var targetDate = new Date(inputs.targetDate);
	var month = ("0"+(targetDate.getMonth()+1)).slice(-2);
	var date = ("0"+targetDate.getDate()).slice(-2);
	var days = ["日","月","火","水","木","金","土"];
	var day = days[targetDate.getDay()];
	if(inputs.formatDate == "noneWeek"){
		outputText = month+"月"+date+"日";
	}
	else if(inputs.formatDate == "all"){
		outputText = month+"月"+date+"日("+day+")";
	}
	else if(inputs.formatDate == "slashNoneWeek"){
		outputText = month+"/"+date;
	}
	else if(inputs.formatDate == "slashAll"){
		outputText = month+"/"+date+"("+day+")";
	}
	var startTime = inputs.startTime.split(":");
	
	if(inputs.formatTime == "24hour1"){
		outputText = outputText+startTime[0]+":"+startTime[1]+"〜";
	}
	else if(inputs.formatTime == "24hour2"){
		outputText = outputText+startTime[0]+"時"+startTime[1]+"分〜";
	}
	else if(inputs.formatTime == "12hour1"){
		if(startTime[0]%12>=1){
			outputText = outputText+startTime[0]%12+":"+startTime[1]+"am〜";
		}
		else{
			outputText = outputText+startTime[0]+":"+startTime[1]+"pm〜";
		}
	}
	else if(inputs.formatTime == "12hour2"){
		if(startTime[0]%12>=1){
                        outputText = outputText+"午前"+startTime[0]%12+"時"+startTime[1]+"分〜";
                }
                else{
                        outputText = outputText+"午後"+startTime[0]+"時"+startTime[1]+"分〜";
                }
	}

	var endTime = inputs.endTime.split("-");
	if(inputs.formatTime == "24hour1"){
                outputText = outputText+endTime[0]+":"+endTime[1]+"";
        }
        else if(inputs.formatTime == "24hour2"){                                                 outputText = outputText+endTime[0]+"時"+endTime[1]+"分";
        }
        else if(inputs.formatTime == "12hour1"){
                if(endTime[0]%12>=1){                                                                  outputText = outputText+endTime[0]%12+":"+endTime[1]+"am";
                }
                else{
                        outputText = outputText+endTime[0]+":"+endTime[1]+"pm";                                                                                             }
        }
        else if(inputs.formatTime == "12hour2"){
                if(endTime[0]%12>=1){                                                                  outputText = outputText+"午前"+endTime[0]%12+"時"+endTime[1]+"分";
                }
                else{
                        outputText = outputText+"午後"+endTime[0]+"時"+endTim
e[1]+"分";
                }
        }
	addTextElement.value=outputText;
	return;
}

function addText(){
	var addTextElement = document.getElementById("addText");
	document.getElementById("output").value+=addTextElement.value+"\n";
	return;
}
