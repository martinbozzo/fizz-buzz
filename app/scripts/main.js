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
 *     "Fizz" if num is multiple of 3
 *     "Buzz" if num is multiple of 5
 *     "FizzBuzz" if num is multiple of 3 and 5
 *     num else
 * @param {int} num
 * @param {array} divs
 */
function printWordOrNumberAccordingDivs(num, divs) {
    var word = num;

    if (isMultipleOf(num, 5) && isMultipleOf(num, 3)) {
        word = 'fizzbuzz';
    } else if (isMultipleOf(num, 3)) {
        word = 'fizz';
    } else if (isMultipleOf(num, 5)) {
        word = 'buzz';
    }
    
    $('.number').html(word);
    playSound(word);
}

$(function() {
    var num = 1,
        divs = [3, 5],
        timeout = 1200;

    var interval = setInterval(function () {
        printWordOrNumberAccordingDivs(num++, divs);
        playSound('tick');
    }, timeout);

    setTimeout(function () {
        clearInterval(interval);
    }, 100 * timeout);
});
