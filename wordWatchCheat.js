window.onload = function () {
    function watch(onGet, onChanged) {
        let prevoiusValue = onGet();
        const onObserve = function () {
            const value = onGet();
            if (prevoiusValue === value) {
                return;
            }
            onChanged(value);
            prevoiusValue = value;
        }
        setInterval(onObserve, 1000);
    }
    function firstTick() {
        try {
            activityTimer;
        } catch {
            setTimeout(firstTick, 100);
            return;
        }
        onGet = function () {
            activityTimer;
        }
        onChanged = function (timer) {
            clearTimeout(timer);
        }
        watch(onGet, onChanged);
    }
    firstTick();
}