/*
    KeyBoard key events handler
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

/* The main object for Keyboard event location       */
function defineKeyBoardObject() {
    var globKeyPressObj = new Object();

    /* Constructor for the global mouse location     */
    globKeyPressObj.keyArr = new Array();

    document.onkeydown  = function (e) {globKeyPressObj.handleKeyDown(e);};
    document.onkeyup    = function (e) {globKeyPressObj.handleKeyUp(e);};

    /* Getter for a key                              */
    globKeyPressObj.getKey = function(keyCode) {
        return this.keyArr[keyCode];
        };

    /* Setter for a key                              */
    globKeyPressObj.setKey = function(keyCode,status) {
        this.keyArr[keyCode] = status;
        };

    /* Key Down and Up handlers                      */
    globKeyPressObj.handleKeyDown = function(evt) {
        evt = (evt) ? evt : (window.event) ? window.event : "";
        this.setKey(evt.keyCode,true);
        };

    globKeyPressObj.handleKeyUp = function(evt) {
        evt = (evt) ? evt : (window.event) ? window.event : "";
        this.setKey(evt.keyCode,false);
        };

    /* Destructor                                    */
    globKeyPressObj.destroy = function() {
        printLog("    Destroy Key Press object");
        document.onkeydown  = null;
        document.onkeyup    = null;
        delete this.keyArr;
        delete this;
        };

    return globKeyPressObj;
    }
