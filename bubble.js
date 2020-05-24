var bubble;
var bubbleVel;
var bubbleSize;

function updateBub() {
    touching = false;
    for (var i = 0; i < bubble.length; i++) {
        push();

        if (dist(bubble[i].x, bubble[i].y, p.x, p.y) < bubbleSize / 2) {
            touch = true;
            console.log(touch);
        }
        
        bubble[i].add(bubbleVel[i]);

        if (bubble[i].x > width + bubbleSize / 2) {
            bubble[i].x = 0
        }
        if (bubble[i].x < -bubbleSize / 2) {
            bubble[i].x = 400
        }
        if (bubble[i].y > height + bubbleSize / 2) {
            bubble[i].y = 0
        }
        if (bubble[i].y < -bubbleSize / 2) {
            bubble[i].y = 400
        }

        fill(132, 112, 255, 45)
        stroke(255);
        ellipse(bubble[i].x, bubble[i].y, bubbleSize);
        pop();
    }
    if (touching == true) {
        playerColor = color(255, 0, 0);
        Health--;
    } else {
        playerColor = color(255);
    }

}