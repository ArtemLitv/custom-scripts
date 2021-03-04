const consoleOutput = document.querySelector('.console-output');
const text = consoleOutput.innerHTML;
const link = text.match(/DP_BUILD_URL=<a href="[\w\W].+"/)[0].split('"')[1]

let header = document.querySelector('.build-caption');
const button = document.createElement('a');
button.innerHTML = 'DP_BUILD_URL →';
button.href = link;
button.target = '_blank';
button.className = 'custom-link';
header.append(button);