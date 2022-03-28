$(document).ready(function () {
    let score = 0;
    let myChoice;
    let compChoiceList = ['rock', 'paper', 'scissors'];
    let compChoice;

    $('.control-button-outer').on('click', function () {
        myChoice = $(this).data('control');

        compChoice = compChoiceList[Math.floor(Math.random() * compChoiceList.length)];

        play(myChoice, compChoice);
    })

    function play(myChoice, compChoice) {
        setPick(myChoice, compChoice);
        const result = getResult(myChoice, compChoice);
        if (result == 'win') {
            $('.result-text').text('You win');
        } else if (result == 'lose') {
            $('.result-text').text('You lose');
        } else if (result == 'draw') {
            $('.result-text').text('Draw');
        }
    }

    function setPick(myChoice, compChoice) {
        $('.step-one').hide();
        $('.step-two').show();

        $('.my-pick').append(
            '<div class="game-controller">' +
            '<div class="control-button-outer ' + myChoice + '" data-control="' + myChoice + '">' +
            '<div class="control-button-inner">' +
            '<img src="./images/icon-' + myChoice + '.svg" alt="">' +
            '</div>' +
            '</div>' +
            '</div>'
        );

        $('.comp-pick').append(
            '<div class="game-controller">' +
            '<div class="control-button-outer ' + compChoice + '" data-control="' + compChoice + '">' +
            '<div class="control-button-inner">' +
            '<img src="./images/icon-' + compChoice + '.svg" alt="">' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }

    function getResult(myChoice, compChoice) {
        let result;

        if (myChoice == 'rock') {
            if (compChoice == 'rock') {
                result = 'draw';
            } else if (compChoice == 'paper') {
                result = 'lose';
                score--;
            } else if (compChoice == 'scissors') {
                result = 'win';
                score++;
            }
        }

        if (myChoice == 'paper') {
            if (compChoice == 'rock') {
                result = 'win';
                score++;
            } else if (compChoice == 'paper') {
                result = 'draw';
            } else if (compChoice == 'scissors') {
                result = 'lose';
                score--;
            }
        }

        if (myChoice == 'scissors') {
            if (compChoice == 'rock') {
                result = 'lose';
                score--;
            } else if (compChoice == 'paper') {
                result = 'win';
                score++;
            } else if (compChoice == 'scissors') {
                result = 'draw';
            }
        }

        $('.score').text(score);

        return result;
    }

    $('.play-again-btn').on('click', function () {
        $('.step-one').show();
        $('.step-two').hide();
        $('.my-pick').children().last().remove();
        $('.comp-pick').children().last().remove();
    });

})