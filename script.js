function rolldice(){

    const ndice = document.getElementById("ndice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimg");
    const values = [];
    const imgs = [];

    for(let x = 0; x < ndice; x++){
        const value = Math.floor(Math.random() * 6) +1;
        values.push(value);
        imgs.push(`<img src="${value}.jpg" alt ="Dice ${value}" style="width:100px; height: 100px; object-fit: cover; border-radiusL 10px;">`);
    }
    //The developer kinda slacked off with the design

    diceresult.textContent = `dice: ${values.join(', ')}`;
    diceimg.innerHTML = imgs.join('');
}
