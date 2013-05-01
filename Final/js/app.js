$(document).ready(function () {

    var index;

    $(document).on('click', '.askButton', function () {
        var questionInputs = $(".question");

        alert('Your question asking:\n\n"' + questionInputs[0].value + '",\nis of the type "' + questionInputs[1].value + '",\ncovers these topics: "'
            + questionInputs[2].value + '",\nand is aimed at "' + questionInputs[3].value + '"\n\n has been submitted!');

        for (var i = 0; i < questionInputs.length; i++) {
            questionInputs[i].value = "";
        }
    });

    $(document).on('click', '#nickelback', function () {
        var responses = $("#nickelbackFreeResponses > li").clone();
        console.log(responses);
        index = responses[responses.length - 1].textContent.substr(0, 2);
        index++;
        console.log(index);
        $("#nickelbackResponses > ul").html(responses).append('<input type="text" id="nickelbackInput" placeholder="Type your response here!"></input><button type="submit" id="responseSubmit">Submit!</button>');

    });

    $(document).on('click', '#responseSubmit', function () {
        var responseInput = $("#nickelbackInput")[0].value;
        console.log(responseInput);
        $("#nickelbackFreeResponses").append('<li>' + index + '. ' + responseInput + '</li>');
        $("#nickelbackModal").modal('hide');
    });

    $(document).on('click', '#doritosTacos', function () {
        var options = $("#tacoBellOptions > li");
        var radios = '';
        for (var i = 0; i < options.length; i++) {
            radios += '<li><input type="radio" name="doritos">' + options[i].textContent + '</input></li>';
        }
        $("#tacoOptions").html(radios);
    });

    $(document).on('click', '#saladDressings', function () {
        var options = $("#saladDressingOptions > li");
        var radios = '';
        for (var i = 0; i < options.length; i++) {
            radios += '<li><input type="radio" name="dressings">' + options[i].textContent + '</input></li>';
        }
        $("#saladOptions").html(radios);
    });

    $(document).on('click', '.vote', function () {
        $(".modal").modal('hide');
    });


});