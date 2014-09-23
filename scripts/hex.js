function DrawPolygonRaw(ctx, sides, center, radius, color, alpha, filled)
{
    ctx.beginPath();
    var angle = (Math.PI / 2);
    var x = center.x + radius * Math.cos(angle);
    var y = center.y + radius * Math.sin(angle);
    ctx.moveTo(x, y);
    for (var i=1;i<sides+1;i++){
        x = center.x + radius * Math.cos((2 * Math.PI) * i / sides + angle);
        y = center.y + radius * Math.sin((2 * Math.PI) * i / sides + angle);
        ctx.lineTo(x, y);
    }

    ctx.globalAlpha = alpha;
    ctx.lineWidth="1";
    ctx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    ctx.stroke();

    if(filled){
        ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        ctx.fill();
    }

    ctx.globalAlpha = 1.0;
}

function DrawClawsRaw2(ctx, sides, center, color)
{
    var x, y, radius, angle, rot;
    ctx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";

    x = center.x;
    y = center.y;

    ctx.beginPath();
    ctx.moveTo(x+3, y+3);
    ctx.lineTo(x+8, y+8);
    ctx.lineWidth="1";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x+3, y);
    ctx.lineTo(x+12, y+9);
    ctx.lineWidth="1";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x+6, y);
    ctx.lineTo(x+12, y+6);
    ctx.lineWidth="1";
    ctx.stroke();

}

