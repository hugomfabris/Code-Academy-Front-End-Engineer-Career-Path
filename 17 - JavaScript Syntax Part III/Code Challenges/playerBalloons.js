class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }
  
  const balloonAttack = (p1, p2) => {
    p1BalloonCount = p1.balloonCount - p2.hitsPerMinute * 10;
    p2BalloonCount = p2.balloonCount - p1.hitsPerMinute * 10;
    if (p1BalloonCount > p2BalloonCount) {
      return p1.name
    }
    else if (p1BalloonCount < p2BalloonCount) {
      return p2.name
    }
    else {
      return 'Tie'
    }
  }
  
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
   
  console.log(balloonAttack(p1, p2));
  