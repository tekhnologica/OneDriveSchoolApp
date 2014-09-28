$(document).ready(function () {
    $("#loadBtn").click(function () {
        WL.api({
            path: 'me',
            method: 'GET'
        }).then(
            function (response) {
                console.log(response);
            },
            function (badresponse) {
                console.log(badresponse);
            }
        );
    });
});