var eases = require('eases');

function noease(opts, cb) {
    if (typeof opts == 'function') {
        cb = opts;
        opts = {};
    } else if (!opts) {
        opts = {};
    }

    var duration        = opts.duration || 1000,
        startValue      = parseInt(opts.startValue, 10) || 10,
        endValue        = parseInt(opts.endValue, 10) || 1000,
        ease            = opts.ease || 'quintInOut',
        _timeout        = null,
        _currentValue   = startValue,
        _previousValue  = startValue,
        _startTime      = (new Date()).getTime();

    function updateValue() {
        var now = (new Date()).getTime(),
            elapsedTime = (now - _startTime),
            progress = eases[ease](elapsedTime / duration);

        _currentValue = Math.round((endValue - _previousValue) * progress + _previousValue);

        if (elapsedTime < duration) {
            _previousValue = _currentValue;
            _timeout = setTimeout(updateValue, 16);
        } else {
            _currentValue = endValue;
            clearTimeout(_timeout);
        }

        cb(_currentValue);
    }

    updateValue();
}

module.exports = noease;
