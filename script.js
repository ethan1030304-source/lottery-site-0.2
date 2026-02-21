function getNowTime(){
    const now = new Date();
    return now.toLocaleString();
}

function randomNumbers(){
    let nums = [];
    while(nums.length<5){
        let n = Math.floor(Math.random()*39)+1;
        if(!nums.includes(n)) nums.push(n);
    }
    return nums.sort((a,b)=>a-b)
        .map(n=>n.toString().padStart(2,"0"))
        .join(" ");
}

function generateTickets(isRandom){

    const ticketCount = Math.min(10, parseInt(document.getElementById("ticketCount").value));
    const groupCount = Math.min(5, parseInt(document.getElementById("groupCount").value));
    const drawDate = document.getElementById("drawDateInput").value;

    const printArea = document.getElementById("printArea");
    printArea.innerHTML = "";

    for(let t=0; t<ticketCount; t++){

        const ticket = document.createElement("div");
        ticket.className = "ticket";

        for(let g=0; g<groupCount; g++){

            const group = document.createElement("div");
            group.className = "group";
            group.style.top = (80 + g*40) + "px";

            let numbers = isRandom ? randomNumbers() : "00 00 00 00 00";
            group.innerText = (g+1) + ") " + numbers;

            ticket.appendChild(group);
        }

        const type = document.createElement("div");
        type.className="typeLabel";
        type.innerText = isRandom ? "快選" : "自選";
        ticket.appendChild(type);

        const amount = document.createElement("div");
        amount.className="amount";
        amount.innerText = "NT$ " + (groupCount*50);
        ticket.appendChild(amount);

        const saleDate = document.createElement("div");
        saleDate.className="saleDate";
        saleDate.innerText = getNowTime();
        ticket.appendChild(saleDate);

        const draw = document.createElement("div");
        draw.className="drawDate";
        draw.innerText = drawDate;
        ticket.appendChild(draw);

        printArea.appendChild(ticket);
    }
}