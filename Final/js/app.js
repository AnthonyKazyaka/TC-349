$(document).ready(function () {

    $(document).on('click', '.askButton', function () {
        var questionInputs = $(".question");

        alert('Your question asking:\n\n"' + questionInputs[0].value + '",\nis of the type "' + questionInputs[1].value + '",\ncovers these topics: "'
            + questionInputs[2].value + '",\nand is aimed at "' + questionInputs[3].value + '"\n\n has been submitted!');

        for (var i = 0; i < questionInputs.length; i++) {
            questionInputs[i].value = "";
        }
    });

    $(document).on('click', '#nickelback', function () {
        var responses = $("#nickelbackFreeResponses > li");
        console.log(responses);
        var index = responses[responses.length - 1].textContent.substr(0, 2);

        $("#nickelbackResponses > ul").html(responses);

    });


});