var text;
var text2;
const $output1 = document.getElementById('NewMods');
const $output2 = document.getElementById('Removed');
const $output3 = document.getElementById('Added');

function doAllTheStuff() {
    const oldModpackLines = text;
    const newModpackLines = text2;
    const oldSet = oldModpackLines.split("<");
    const newSet = newModpackLines.split("<");

    const oldSetResult = oldSet.filter((element) => element.startsWith('td data-type="DisplayName">')).map((element) => element.replace('td data-type="DisplayName">', ''));
    const newSetResult = newSet.filter((element) => element.startsWith('td data-type="DisplayName">')).map((element) => element.replace('td data-type="DisplayName">', ''));

    const temp3 = oldSetResult.filter((element) => !newSetResult.includes(element));
    const temp4 = newSetResult.filter((element) => !oldSetResult.includes(element));

    // Displays to screen

    // Entire Modpack
    let newSetResultArray=Object.entries(newSetResult);  
    for (let i = 0; i < newSetResultArray.length; i++) {
        //console.log(newSetResultArray[i][1]);  
        //console.log(NewMods[line]);
        $output1.innerText += (newSetResultArray[i][1]);
        $output1.innerText += '\n';
    }
    //var NewMods = newSetResultArray[2].split(' ');
    // Added
    newSetResultArray=Object.entries(temp3);   
    for (let i = 0; i < newSetResultArray.length; i++) {
        //console.log(newSetResultArray[i][1]);  
        //console.log(NewMods[line]);
        $output2.innerText += (newSetResultArray[i][1]);
        $output2.innerText += '\n';
    }
    // Removed
    newSetResultArray=Object.entries(temp4);  
    for (let i = 0; i < newSetResultArray.length; i++) {
        //console.log(newSetResultArray[i][1]);  
        //console.log(NewMods[line]);
        $output3.innerText += (newSetResultArray[i][1]);
        $output3.innerText += '\n';
    }
}
  
let theButton = document.getElementById("button-id");
theButton.addEventListener("click", doAllTheStuff);


document.getElementById('file').onchange = function() {
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent) {
    // Entire file
    text = this.result;
    //console.log(text)
  };
  reader.readAsText(file);
};

document.getElementById('file2').onchange = function() {
    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent) {
      // Entire file
      text2 = this.result;
      //console.log(text)
    };
    reader.readAsText(file);
};