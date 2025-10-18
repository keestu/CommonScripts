/*  
    WEBGL Camera functionality
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

/* Camera setup                                      */
function defineCamera() {
    printLog("      Define the WEBGL camera");
    var camera = new Object();

    /* Set defaults                                  */
    camera.pitch     = 0;
    camera.pitchRate = 0;
    camera.yaw       = 0;
    camera.yawRate   = 0;
    camera.xPos      = 0;
    camera.yPos      = 0;
    camera.zPos      = 0;
    camera.speed     = 0;

    camera.setCamera = function(mvMatrix,keyboardPress) {
        /* Left Key  or A                            */
        if (keyboardPress.getKeyStatus(37) || keyboardPress.getKeyStatus(65)) {
            camera.yawRate = 10;
            }
        /* Right Key or D                            */
        else if (keyboardPress.getKeyStatus(39) || keyboardPress.getKeyStatus(68)) {
            camera.yawRate = -10;
            }
        else {
            camera.yawRate = 0;
            }

        /* Up Key    or W                            */
        if (keyboardPress.getKeyStatus(38) || keyboardPress.getKeyStatus(87)) {
            camera.speed = 0.03;
            }
        /* Down Key  or S                            */
        else if (keyboardPress.getKeyStatus(40) || keyboardPress.getKeyStatus(83)) {
            camera.speed = -0.03;
            }
        else {
            camera.speed = 0;
            }

        /* Page Up                                   */
        if (keyboardPress.getKeyStatus(33)) {
            camera.pitchRate = 100;
            }
        /* Page Down                                 */
        else if (keyboardPress.getKeyStatus(34)) {
            camera.pitchRate = -100;
            }
        else {
            camera.pitchRate = 0;
            }


        /* Calculate yaw, pitch and roll(x,y,z) */
        if (camera.speed != 0) {
            camera.xPos -= Math.sin(degToRad(camera.yaw)) * camera.speed;
            camera.yPos = 0;
            camera.zPos -= Math.cos(degToRad(camera.yaw)) * camera.speed;
            }
        camera.yaw   += camera.yawRate   * 0.01;
        camera.pitch += camera.pitchRate * 0.001;
        //printLog("Yaw:" + camera.yaw + ":Pitch:" + camera.pitch);

        glMatrix.mat4.rotate(mvMatrix, mvMatrix, degToRad(-camera.pitch), [1, 0, 0]);
        //mat4.rotate(mvMatrix, mvMatrix, degToRad(-camera.yaw), [0, 1, 0]);
        glMatrix.mat4.translate(mvMatrix, mvMatrix, [camera.yaw, 0, 0]);
        glMatrix.mat4.translate(mvMatrix, mvMatrix, [-camera.xPos, -camera.yPos, -camera.zPos]);
        };

    /* Destructor                                    */
    camera.destroy = function() {
        camera.pitch     = null;
        camera.pitchRate = null;
        camera.yaw       = null;
        camera.yawRate   = null;
        camera.xPos      = null;
        camera.yPos      = null;
        camera.zPos      = null;
        camera.speed     = null;
        };

    return camera;
    }