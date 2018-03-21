const formatDate = (timeInSeconds) => {
  let seconds = timeInSeconds;
  let minutes = hours = 0;
  let message = '';

  if (!timeInSeconds || timeInSeconds == '')
  	return `0s`;
  else {
    while(seconds >= 3600){
      seconds = seconds - 3600;
      hours++;
    }
    if(hours > 0) message = message + `${hours}h`;
  	while(seconds >= 60){
      seconds = seconds - 60;
      minutes++;
    }
    if(minutes > 0) {
    if(message)message = message + ` `;
      message = message + `${minutes}m`;
    }
    if(seconds > 0){
    if(message)message = message + ` `;
      message = message + `${seconds}s`;
    }
  }
    return message;
}

module.exports = formatDate;