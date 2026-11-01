// setting up the GameObject
// set up the class GameObject 
class GameObject {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type
    }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
    constructor(x, y, type) {
        super(x, y, type);
    }


// this moveable object can be moved on the screen 
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

// specific class that extends the Movable class, so it can take advantage off all the properties that it inherits
class Hero extends Movable {
    constructor(x, y) {
        super(x, y,'Hero');
    }
}

// this class only inherits the GameObject properties
class Tree extends GameObject {
    constructor(x,y) {
        super(x,y, 'Tree');
    }
}

// set up an EventEmitter class that contains listeners

class EventEmitter {
    constructor() {
        this.listeners = {};
    }

// when a message is received, let the listener to handle its payload
    on(message, listener) {
        if (!this.listeners[message]) {
            this.listeners[message] = [];
        }
        this.listeners[message].push(listener);
    }

    // when a message is sent, send it to a listener with some paylaod
    emit(message, payload = null) {
        if (this.listeners[message]) {
            this.listeners[message].forEach((1), => 1(message, payload));
        }
    }
}

//set up a message structure
const Messages = {
    HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
};

// invoke event emitter set up abobve

const eventEmitter = new EventEmitter();

// set up a hero 
const hero = createHero(0,0);

//let the eventEmitter know to watch for messages pertaining to the hero moving left and act on it.
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
    hero.move(5,0);
});

// set up window to listen for the key up event, specifically if the left arrow key is hit, emmit a message to move the hero left 
window.addEventListener('keyup', (evt) => {
    if (evt.key === 'ArrowLeft') {
        eventEmitter.emit(Messages.HERO_MOVE_LEFT);
    }
});


//// canvas setup 

// draw a red rectangle 
// 1. canvs reference 
canvas = document.getElementById("myCanvas");

// 2. set context to 2d to draw basic shapes
ctx = canvas.getContext("2d");

// 3. fill it with the color red
ctx.fillStyle = "red";

// 4. draw a rectangle with these parameters, setting location and size 
ctx.fillRect(0, 0, 200, 200); // x, y, width, height 


// loading an asset
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
    //img loaded & ready to use 
}

// load asset pattern 
function loadAsset(path) {
    return new Promise ((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            resolve(img);
        }
    });
}
// async function 

async function run() {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
}