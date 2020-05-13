const character = 
{
    position: 0,
    north: true,

    moveForward(forward) {
        if (this.north) {
            this.position = this.position + forward;
        } else {
            this.position = this.position - forward;
        }
    } ,

    moveBackward(backward) {
        if (this.north) {
            this.position = this.position - backward;
        } else {
            this.position = this.position + backward;
        }
    } ,

    turnAround() {
        if (this.north === false) {
            this.north = true ;
        } else {this.north = false};
    } ,

    printLocation() {
        console.log(`this is the position ${this.position}`);
    }
}

character.moveForward(5); 
character.moveBackward(3);
character.printLocation();
character.turnAround();
character.moveForward(10);
character.moveBackward(5);
character.printLocation();