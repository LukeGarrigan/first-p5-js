function Relationship(blobOne, blobTwo) {
    this.blobOne = blobOne;
    this.blobTwo = blobTwo;



    this.display = function() {
        line(this.blobOne.x, this.blobOne.y, this.blobTwo.x, this.blobTwo.y);
    }


}