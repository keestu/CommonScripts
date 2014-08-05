/* The main object for frame per second information  */
function defineFPSObject() {
    var frameCountObject = new Object();

    /* Constructor for the global FPS variables      */
    printLog("    Initiate FPS");
    frameCountObject.lastTime      = (new Date()).getTime();
    frameCountObject.frames        = 0;
    frameCountObject.totalTime     = 0;
    frameCountObject.updateTime    = 0;
    frameCountObject.updateFrames  = 0;

    /* Getters                                       */
    frameCountObject.getLastTime = function() {
        return this.lastTime;
        };
    frameCountObject.getFrames = function() {
        return this.frames;
        };
    frameCountObject.getTotalTime = function() {
        return this.totalTime;
        };
    frameCountObject.getUpdateTime = function() {
        return this.updateTime;
        };
    frameCountObject.getUpdateFrames = function() {
        return this.updateFrames;
        };

    /* Setters                                       */
    frameCountObject.setLastTime = function(lastTime) {
        this.lastTime = lastTime;
        };
    frameCountObject.setFrames = function(frames) {
        this.frames = frames;
        };
    frameCountObject.setTotalTime = function(totalTime) {
        this.totalTime = totalTime;
        };
    frameCountObject.setUpdateTime = function(updateTime) {
        this.updateTime = updateTime;
        };
    frameCountObject.setUpdateFrames = function(updateFrames) {
        this.updateFrames = updateFrames;
        };

    /* Update the frame rate                         */
    frameCountObject.updateFPS = function() {
        var now      = (new Date()).getTime();

        var delta    = now - this.getLastTime();
        this.setLastTime(now);

        this.setTotalTime(this.getTotalTime() + delta);
        this.setUpdateTime(this.getUpdateTime() + delta);

        this.setFrames(this.getFrames() + 1);
        this.setUpdateFrames(this.getUpdateFrames() + 1);

        if (1000 < this.getUpdateTime()) {
            if (document.getElementById('fps')) {
                document.getElementById('fps').innerHTML = "FPS AVG: " + Math.floor((1000*this.getFrames()/this.getTotalTime()))
                  + " CUR: " + Math.floor((1000*this.getUpdateFrames()/this.getUpdateTime()));
                }
            this.setUpdateTime(0);
            this.setUpdateFrames(0);
            }
        };

    /* Destructor                                    */
    frameCountObject.destroy = function() {
        printLog("    Destroy FPS object");
        delete this.lastTime;
        delete this.frames;
        delete this.totalTime;
        delete this.updateTime;
        delete this.updateFrames;
        delete this;
        };

    return frameCountObject;
    }
