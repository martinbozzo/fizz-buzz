window.Utils = function () {
    var interval,
        config = window.Configuration;

    /**
     * isMultipleOf: will evaluate to true if num is divisible by divNum
     * @param {int} num
     * @param {int} divNum
     *
     * @private
     */
    var _isMultipleOf = function (num, divNum) {
        return num % divNum === 0;
    };

    /**
     * playSound: Plays Fizz, Buzz, FizzBuzz or Tick Sound on number change
     * @param {('fizz'|'buzz'|'fizzbuzz'|'tick')} word
     *
     * @private
     */
    var _playSound = function (word) {
        if (typeof word === 'string') {
            var snd = new Audio("/audios/" + word + ".mp3");
            snd.play();
        }
    };

    /**
     * printWordOrNumberAccordingDivs: will print
     *     "Fizz" if num is multiple of div1
     *     "Buzz" if num is multiple of div2
     *     "FizzBuzz" if num is multiple of div1 and div2
     *     num else
     * @param {int} num
     * @param {int} div1
     * @param {int} div2
     *
     * @private
     */
    var _printWordOrNumberAccordingDivs = function (num, div1, div2) {
        var word = num;

        if (_isMultipleOf(num, div2) && _isMultipleOf(num, div1)) {
            word = 'fizzbuzz';
        } else if (_isMultipleOf(num, div1)) {
            word = 'fizz';
        } else if (_isMultipleOf(num, div2)) {
            word = 'buzz';
        }

        $('.number').html(word);
        _playSound(word);
    };

    /**
     * resetCounting: Reset Counting starting all over again the count with initial values
     * @param {object} newConfig
     */
    var resetCounting = function (newConfig) {
        clearInterval(interval);
        initCounting(newConfig);
    };

    /**
     * initCounting: Count numbers setting an interval
     */
    var initCounting = function (config) {
        var num = config.initNum;

        interval = setInterval(function () {
            _printWordOrNumberAccordingDivs(num++, config.div1, config.div2);
            _playSound('tick');
        }, config.timeout);
    };

    /**
     * stopCounting: Stop Counting clearing the interval
     */
    var stopCounting = function () {
        clearInterval(interval);
    };

    /**
     * toggleSettings: Toggle settings sidebar on and off
     */
    var toggleSettings = function () {
        console.log("toggleSettings");
        $(".settings").toggle("slide");
    };

    return {
        initCounting: initCounting,
        stopCounting: stopCounting,
        resetCounting: resetCounting,
        toggleSettings: toggleSettings
    }
}();
