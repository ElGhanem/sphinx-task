$(function () {

    let userChoice;
    const correctAudio = new Audio("./assets/media/correct.mp3" );
    const inCorrectAudio = new Audio("./assets/media/incorrect.mp3" );
    let answersFilled = [false, false, false];

    $(".loader").fadeOut("slow", function() {
        $(".main_container").show(3000);
    });

    $('.resourceBtn').click(function() {
        $('.resource_modal').css("display", "block");
    });

    $('.resource_content .closeBtn').click(function() {
        $('.resource_modal').css("display", "none");
    });

    $('.infoBtn').click(function() {
        $('.info_modal').css("display", "block");
    });

    $('.info_content .closeBtn').click(function() {
        $('.info_modal').css("display", "none");
    });

    $('.choice_1').click(function() {
        $('.choice_2').removeClass("selected");
        $('.choice_1').addClass("selected");
        userChoice = 'a';
    });

    $('.choice_2').click(function() {
        $('.choice_1').removeClass("selected");
        $('.choice_2').addClass("selected");
        userChoice = 'p';
    });

    $('.question_1').click(function() {
        if(userChoice != undefined && !answersFilled[0]) {
            if ($('.question_1').attr('data-answer') == userChoice) {
                $('span.question_1').html("<div class='ansImg'><img src='./assets/img/tikMark.png'></div>" + $('.question_1').attr('data-answer'));
                $('.question_1').css("cursor", "default");
                correctAudio.currentTime = 0;
                correctAudio.play();
                answersFilled[0] = true;
                $('.choice_1').removeClass("selected");
                $('.choice_2').removeClass("selected");
                userChoice = undefined;
                allFilled();
            } else {
                $('span.question_1').html("<div class='ansImg'><img src='./assets/img/crossMark.png'></div>" + userChoice);
                $('span.question_1 > .ansImg').fadeOut(200).fadeIn(200).fadeOut(200, function () {
                    $('span.question_1').html('&nbsp;');
                });
                inCorrectAudio.play();
            }
        }
    })

    $('.question_2').click(function() {
        if(userChoice != undefined && !answersFilled[1]) {
            if ($('.question_2').attr('data-answer') == userChoice) {
                $('span.question_2').html("<div class='ansImg'><img src='./assets/img/tikMark.png'></div>" + $('.question_2').attr('data-answer'));
                $('.question_2').css("cursor", "default");
                correctAudio.currentTime = 0;
                correctAudio.play();
                answersFilled[1] = true;
                $('.choice_1').removeClass("selected");
                $('.choice_2').removeClass("selected");
                userChoice = undefined;
                allFilled();
            } else {
                $('span.question_2').html("<div class='ansImg'><img src='./assets/img/crossMark.png'></div>" + userChoice);
                $('span.question_2 > .ansImg').fadeOut(200).fadeIn(200).fadeOut(200, function () {
                    $('span.question_2').html('&nbsp;');
                });
                inCorrectAudio.play();
            }
        }
    })

    $('.question_3').click(function() {
        if(userChoice != undefined && !answersFilled[2]) {
            if ($('.question_3').attr('data-answer') == userChoice) {
                $('span.question_3').html("<div class='ansImg'><img src='./assets/img/tikMark.png'></div>" + $('.question_3').attr('data-answer'));
                $('.question_3').css("cursor", "default");
                correctAudio.currentTime = 0;
                correctAudio.play();
                answersFilled[2] = true;
                $('.choice_1').removeClass("selected");
                $('.choice_2').removeClass("selected");
                userChoice = undefined;
                allFilled();
            } else {
                $('span.question_3').html("<div class='ansImg'><img src='./assets/img/crossMark.png'></div>" + userChoice);
                $('span.question_3 > .ansImg').fadeOut(200).fadeIn(200).fadeOut(200, function () {
                    $('span.question_3').html('&nbsp;');
                });
                inCorrectAudio.play();
            }
        }
    })

    function allFilled() {
        if(answersFilled[0] && answersFilled[1] && answersFilled[2]) {
            $('.choices_container').addClass("disabledbutton");
            $('.showBtn').addClass("disabledbutton");
        }
    }

    $('.showBtn').click(function showAllAns() {
        $('span.question_1').html("<div class='ansImg'><img src='./assets/img/tikMark.png'></div>" + $('.question_1').attr('data-answer'));
        $('span.question_2').html("<div class='ansImg'><img src='./assets/img/tikMark.png'></div>" + $('.question_2').attr('data-answer'));
        $('span.question_3').html("<div class='ansImg'><img src='./assets/img/tikMark.png'></div>" + $('.question_3').attr('data-answer'));
        $('.question_1').css("cursor", "default");  $('.question_2').css("cursor", "default");  $('.question_3').css("cursor", "default");
        answersFilled[0] = true;    answersFilled[1] = true;    answersFilled[2] = true;
        $('.choice_1').removeClass("selected");     $('.choice_2').removeClass("selected");
        allFilled();
    });

    $('.reloadBtn').click(function resetQuestions() {
        $('span.question_1').html('&nbsp;');
        $('span.question_2').html('&nbsp;');
        $('span.question_3').html('&nbsp;');
        $('.question_1').css("cursor", "pointer");  $('.question_2').css("cursor", "pointer");  $('.question_3').css("cursor", "pointer");
        answersFilled[0] = false;    answersFilled[1] = false;    answersFilled[2] = false;
        userChoice = undefined;
        $('.choice_1').removeClass("selected");     $('.choice_2').removeClass("selected");
        $('.choices_container').removeClass("disabledbutton");
        $('.showBtn').removeClass("disabledbutton");
    });
});
