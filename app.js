
function generateMockup() {
  const canvas = document.getElementById("sockCanvas");
  const ctx = canvas.getContext("2d");

  const teamName = document.getElementById("teamName").value;
  const mascot = document.getElementById("mascot").value;
  const sockStyle = document.getElementById("sockStyle").value;
  const sockColor = document.getElementById("sockColor").value;

  const imageSrc = sockStyle === "front" ? "static/images/front_back.png" : "static/images/side_side.png";

  const baseSock = new Image();
  baseSock.src = imageSrc;

  baseSock.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseSock, 0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.4;
    ctx.fillStyle = sockColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px Arial";
    ctx.fillText(teamName, 20, 40);
    ctx.fillText(mascot, 20, 80);
  };
}

document.querySelectorAll(".color-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.getAttribute("data-color");
    document.getElementById("sockColor").value = color;
  });
});
