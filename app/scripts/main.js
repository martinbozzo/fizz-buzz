/**
 * playSound: Plays Fizz, Buzz, FizzBuzz or Tick Sound on number change
 * @param {('fizz'|'buzz'|'fizzbuzz'|'tick')} word
 */
function playSound(word) {
    if (typeof word === 'string') {
        var snd = new Audio("/audios/" + word + ".mp3");
        snd.play();
    }
}

/**
 * isMultipleOf: will evaluate to true if num is divisible by divNum
 * @param {int} num
 * @param {int} divNum
 */
function isMultipleOf(num, divNum) {
    return num % divNum === 0;
}

/**
 * printWordOrNumberAccordingDivs: will print
 *     "Fizz" if num is multiple of div1
 *     "Buzz" if num is multiple of div2
 *     "FizzBuzz" if num is multiple of div1 and div2
 *     num else
 * @param {int} num
 * @param {int} div1
 * @param {int} div2
 */
function printWordOrNumberAccordingDivs(num, div1, div2) {
    var word = num;

    if (isMultipleOf(num, div2) && isMultipleOf(num, div1)) {
        word = 'fizzbuzz';
    } else if (isMultipleOf(num, div1)) {
        word = 'fizz';
    } else if (isMultipleOf(num, div2)) {
        word = 'buzz';
    }

    $('.number').html(word);
    playSound(word);
}

$(function() {
    $.getJSON("../configuration.json", function(config) {
        var num = config.initNum;
        var interval = setInterval(function () {
            printWordOrNumberAccordingDivs(num++, config.div1, config.div2);
            playSound('tick');
        }, config.timeout);

        setTimeout(function () {
            clearInterval(interval);
        }, ((config.endNum - config.initNum) * config.timeout) + 1);
    });
});
