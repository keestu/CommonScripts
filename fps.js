/*  
    FPS calculator
    Copyright (C) 2014  Tappali Ekanathan Keestu (keestu@gmail.com)
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

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
    frameCountObject.avgFPS        = 0;
    frameCountObject.curFPS        = 0;

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
    frameCountObject.getAvgFPS = function() {
        return this.avgFPS;
        };
    frameCountObject.getCurFPS = function() {
        return this.curFPS;
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
    frameCountObject.setAvgFPS = function(avgFPS) {
        this.avgFPS = avgFPS;
        };
    frameCountObject.setCurFPS = function(curFPS) {
        this.curFPS = curFPS;
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
			this.setAvgFPS(1000*(this.getFrames()/this.getTotalTime()));
			this.setCurFPS(1000*(this.getUpdateFrames()/this.getUpdateTime()));
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
        delete this.avgFPS;
		delete this.curFPS;
        delete this;
        };

    return frameCountObject;
    }
