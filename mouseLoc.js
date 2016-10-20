/*  
    Mouse Location finder
    Copyright (C) 2016  Tappali Ekanathan Keestu (keestu@gmail.com)
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

/* The main object for mouse event location          */
function defineMouseLocationObject() {
    var globMouseObj = new Object();

    /* Constructor for the global mouse location     */
    globMouseObj.x     = 0;
    globMouseObj.y     = 0;
    globMouseObj.prevX = 0;
    globMouseObj.prevY = 0;
    globMouseObj.LR    = '';
    globMouseObj.TB    = '';
    globMouseObj.moveTime;
    globMouseObj.responseRate = 100;
    document.onmousemove = function (e) {globMouseObj.mouseMove(e);};

    /* Getter for X and Y                            */
    globMouseObj.getX = function() {
        return this.x;
        };

    globMouseObj.getY = function() {
        return this.y;
        };

    /* Getter for LRTB                               */
    globMouseObj.getLR = function() {
        return this.LR;
        };

    globMouseObj.getTB = function() {
        return this.TB;
        };

    /* Setter for X and Y                            */
    globMouseObj.setX = function(x) {
        this.prevX = this.x;
        this.x     = x;
        };

    globMouseObj.setY = function(y) {
        this.prevY = this.y
        this.y     = y;
        };

    /* Setter for LRTB                               */
    globMouseObj.setLR = function(LR) {
        this.LR     = LR;
        };

    globMouseObj.setTB = function(TB) {
        this.TB     = TB;
        };

    /* Set the mouse location                        */
    globMouseObj.setLocation = function(evt) {
        if (evt.pageX) {
            if (0 <= evt.pageX) {
                this.setX(evt.pageX);
                }
            else {
                this.setX(0);
                }
            if (0 <= evt.pageY) {
                this.setY(evt.pageY);
                }
            else {
                this.setY(0);
                }
            }
        else {
            if (0 <= evt.clientX) {
                this.setX(evt.clientX);
                }
            else {
                this.setX(0);
                }
            if (0 <= evt.clientY) {
                this.setY(evt.clientY);
                }
            else {
                this.setY(0);
                }
            }
        };

    /* Set the LRTB                                  */
    globMouseObj.setLRTB = function() {
        if (this.x > this.prevX) {
            globMouseObj.setLR("R");
            }
        else {
            globMouseObj.setLR("L");
            }

        if (this.y > this.prevY) {
            globMouseObj.setTB("B");
            }
        else {
            globMouseObj.setTB("T");
            }
        };

    /* No movement checker                           */
    globMouseObj.checkMovement = function(evt){
        globMouseObj.setLocation(evt);
        if (this.x == this.prevX && this.y == this.prevY) {
            globMouseObj.setLR("N");
            globMouseObj.setTB("N");
            }
        };

    globMouseObj.mouseMove = function(evt) {
        evt = (evt) ? evt : (window.event) ? window.event : "";

        globMouseObj.setLocation(evt);
        globMouseObj.setLRTB();

        clearTimeout(this.moveTime);
        this.moveTime = setTimeout(function(){
          globMouseObj.checkMovement(evt);
          }, this.responseRate);
        };

    /* Destructor                                    */
    globMouseObj.destroy = function() {
        printLog("    Destroy Mouse object");
        document.onmousemove = null;
        clearInterval(this.moveTime);
        delete this.x;
        delete this.prevX
        delete this.y;
        delete this.prevY;
        delete this.LR;
        delete this.TB;
        delete this.moveTime;
        delete this.responseRate;
        delete this;
        };

    return globMouseObj;
    }
