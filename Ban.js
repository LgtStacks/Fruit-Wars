function ban(game, spritesheetArray) {
	this.scalingFactor = 1.1;
	this.animation = new arrAnimation(spritesheetArray, .05, true, 1.5);
    this.speed = 250;
    this.ctx = game.ctx;
	this.height = spritesheetArray[0].height;
	this.width = spritesheetArray[0].width;
    Entity.call(this, game, 0, 50);
}

ban.prototype = new Entity();
ban.prototype.constructor = ban;

ban.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

ban.prototype.draw = function () {
	this.ctx.fillStyle = 'rgba(255, 255, 255, 255)'
	this.ctx.beginPath();
	this.ctx.arc(this.x + (this.calculateBoundingCircleRadius() * this.scalingFactor), this.y + (this.calculateBoundingCircleRadius() * this.scalingFactor), this.calculateBoundingCircleRadius() * this.scalingFactor, 0, 2 * Math.PI, false);
	this.ctx.fill();
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

ban.prototype.calculateBoundingCircleRadius = function() {
	
	return Math.sqrt(((this.width/2 * this.width/2) + (this.height/2 * this.height/2)));
}