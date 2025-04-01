function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index').setTitle('Conversión segundos');
}

function convertTime(inputType, timeValue, minutes, seconds, totalSeconds) {
  let result = "";

  if (inputType === 'mss') {
    if (!timeValue || !timeValue.includes(":")) return 'Formato inválido (usar m:ss)';
    let parts = timeValue.split(':');
    let mins = parseInt(parts[0], 10);
    let secs = parseInt(parts[1], 10);
    if (isNaN(mins) || isNaN(secs) || secs >= 60 || mins < 0 || secs < 0) return 'Tiempo inválido';
    result = (mins * 60 + secs) + " segundos";
  
  } else if (inputType === 'separate') {
    if (!minutes || !seconds) return 'Introducir minutos y segundos';
    let mins = parseInt(minutes, 10);
    let secs = parseInt(seconds, 10);
    if (isNaN(mins) || isNaN(secs) || secs >= 60 || mins < 0 || secs < 0) return 'Tiempo inválido';
    result = (mins * 60 + secs) + " segundos";

  } else if (inputType === 'secondsToMSS') {
    if (!totalSeconds || isNaN(totalSeconds) || totalSeconds < 0) return 'Introducir segundos válidos';
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;
    result = mins + ":" + (secs < 10 ? "0" + secs : secs);
  }

  return result;
}
