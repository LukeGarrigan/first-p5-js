function Blob(x, y) {

    this.x = x;
    this.y = y;
    this.r = 50;
    this.isGrowing = false;
    this.maxSize = this.r * 1.25;


    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    this.display = function () {
        fill(255);
        if (this.isGrowing) {
            this.r = lerp(this.r, this.maxSize, 0.1 );
        }

        fill(this.red, this.green, this.blue);
        ellipse(this.x, this.y, this.r, this.r);
    };

    this.processBeingClicked = function (passedX, passedY, currentlyClicked, relationships) {
        if (dist(passedX, passedY, this.x, this.y) < this.r / 2) {
            this.isGrowing = true;
            if (currentlyClicked !== this && currentlyClicked !== undefined) {
                let relationship = new Relationship(this, currentlyClicked);
                relationships.push(relationship);
            }
            return this;
        } else {
            this.reset();
        }
    }

    this.reset = function() {
        this.r = 50;
        this.isGrowing = false;
    }

}