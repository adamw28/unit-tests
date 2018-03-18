const formatDate = (timeInSeconds) => {
  let seconds = minutes = hours = 0;
  if (!timeInSeconds || timeInSeconds == '')
  	return `0s`;
  else {
  	if(timeInSeconds < 60)
  		return `${timeInSeconds}s`;
  	else{
  		do{
  			seconds = seconds - 60;
  			minutes++;
  		}while(seconds>=60);
  	}

  	return `${minutes}s ${seconds}s`;
  }
}

module.exports = formatDate;