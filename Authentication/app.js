//Google Login
function onLoadFunction()
{
    gapi.client.setApiKey('AIzaSyBbgDet2gW6YjeOEPzwO5qien5dSZd6KFw');
    gapi.client.load('plus', 'v1', function() {});
}
