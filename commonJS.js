/*  
    Common JavaScript functionalities
    Copyright (C) 2015  Tappali Ekanathan Keestu (keestu@gmail.com)
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

/* Render the text as it is then and there C style   */
function printf(text) {
    try {
        var container = document.getElementById('uiContainer');
        if (container) {
            container.innerHTML += text;
            return;
        }
    } catch (e) {}
    document.writeln(text);
    }

/* Render the text in console log                    */
function printLog(text) {
    console.log(text);
    }

/* Degree to Radian converter                        */
function degToRad(degrees) {
    return degrees * Math.PI / 180;
    }

/* Dispose off the dangling objects                  */
function onExit(objListToDispose) {
    printLog("");
    /* RIP Objects                                   */
    var looper = 0;
    while(looper <= objListToDispose.length-1) {
        objListToDispose[looper].destroy();
        looper = looper + 1;
        }
    objListToDispose.length = 0;
    }

/* cancelRequestAnimFrame in a cross browser way     */
window.cancelRequestAnimFrame = (function() {
    return window.cancelAnimationFrame         ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame    ||
      window.oCancelRequestAnimationFrame      ||
      window.msCancelRequestAnimationFrame     ||
      function(callback) {
          window.clearTimeout(callback);
          };
    })();