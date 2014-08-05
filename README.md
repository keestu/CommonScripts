CommonScripts
=============

Commonly used JavaScript functionalities

a. fps.js - Used for frames per second calculation

Benefits:

    a. Object oriented approach
    b. Recommended usage is by getters and setters
    c. Constructor initializes the calculation.
    Developer has a choice on when to call the updateFPS functionality
    d. Destroyer method provided


Usage:

    a. While starting your global script code declare the object.
        e.g. var framesPerSecObject = defineFPSObject();
    b. Good practice: If you have a code that needs to be executed while exit;
    run the desctructor.
        e.g. framesPerSecObject.destroy();
    c. Choose the recurring function where the fps needs to be calculated.
        e.g. framesPerSecObject.updateFPS();
    d. Create a field where the fps needs to be displayed. (Deprecated)
    The insertion of the fps is taken care of.
        e.g. <b id="fps"></b>
    e. Use the getters for assigning the average or current frames per second.
        e.g. Math.floor(framesPerSecObject.getAvgFPS()), Math.floor(framesPerSecObject.getCurFPS()


b. mouseLoc.js - Used for detecting mouse location

Benefits:

    Object oriented approach
    Recommended usage is by getters and setters
    Constructor initializes the calculation. Developer logically only accesses the getters.
    Destroyer method provided


Usage:

    a. While starting your global script code declare the object.
        e.g. var mouseLoc = defineMouseLocationObject();
    b. Good practice: If you have a code that needs to be executed while exit;
    run the desctructor.
        e.g. mouseLoc.destroy();
    c. Use the getters namely getX and getY to get the coordinates.
        e.g. mouseLoc.getX();
             mouseLoc.getY();
