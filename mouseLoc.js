/*  
    Mouse Location finder
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

/* The main object for mouse event location          */
function defineMouseLocationObject() {
    var globMouseObj = new Object();

    /* Constructor for the global mouse location     */
    globMouseObj.x = 0;
    globMouseObj.y = 0;
    document.onmousemove = function (e) {globMouseObj.mouseMove(e);};

    /* Getter for X and Y                            */
    globMouseObj.getX = function() {
        return this.x;
        };

    globMouseObj.getY = function() {
        return this.y;
        };

    /* Setter for X and Y                            */
    globMouseObj.setX = function(x) {
        this.x = x;
        };

    globMouseObj.setY = function(y) {
        this.y = y;
        };
        
    globMouseObj.mouseMove = function(evt) {
        evt = (evt) ? evt : (window.event) ? window.event : "";
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

    /* Destructor                                    */
    globMouseObj.destroy = function() {
        printLog("    Destroy Mouse object");
        document.onmousemove = function(){};
        delete this.x;
        delete this.y;
        delete this;
        };

    return globMouseObj;
    }
