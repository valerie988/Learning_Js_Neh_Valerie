"use strict"

//using promises
function successCallback(result) {
    console.log(`Audio file ready: ${result}`); 
}
function errorCallback(error) {
    console.error(`Error generating audio file: ${error}`);
}
createAudioFileAsync(audioSettings, successCallback, errorCallback)

createAudioFileAsync(audioSettings.then(successCallback, e))