let totalCheese = 0;

let clickUpgrades = {
    pickAxe: {
        price: 10,
        quantity: 0,
        multiplier: 2
    },
    cheeseKnife: {
        price: 50,
        quantity: 0,
        multiplier: 20
    },

};

let autoUpgrades = {
    rover: {
        price: 35,
        quantity: 0,
        multiplier: 8
    },
    laser: {
        price: 400,
        quantity: 0,
        multiplier: 500
    }
};

let itemClickMulti = 0;
let itemClickPrice = 0;

let itemAutoMulti = 0;
let itemAutoPrice = 0;

let totalClick = 0;
let totalAuto = 0;
let totalUpgrades = 0;


function mineRes() {
    let multiClick = totalClick * 1;
    itemClickMulti == 0 ? totalCheese++ : totalCheese += multiClick;
    update();
}

function initiateAutoUpgrades() {
    totalCheese += (totalAuto * 1);
    update();
}

function startInterval() {
    return setInterval(initiateAutoUpgrades, 3000);
}

function update() {

    document.getElementById("cheese").innerText = JSON.stringify(totalCheese);
    document.getElementById("upgrades").innerText = JSON.stringify(totalUpgrades);
    document.getElementById("total-click").innerText = JSON.stringify(totalClick);
    document.getElementById("total-auto").innerText = JSON.stringify(totalAuto);
    document.getElementById("pickaxe-price").innerText = JSON.stringify(clickUpgrades.pickAxe.price);
    document.getElementById("cheeseknife-price").innerText = JSON.stringify(clickUpgrades.cheeseKnife.price);
    document.getElementById("rover-price").innerText = JSON.stringify(autoUpgrades.rover.price);
    document.getElementById("laser-price").innerText = JSON.stringify(autoUpgrades.laser.price);
}

function buyClickItem(item) {
    let itemMulti = clickUpgrades[item].multiplier;
    itemClickPrice = clickUpgrades[item].price;
    if (totalCheese >= itemClickPrice) {
        totalCheese -= itemClickPrice;
        totalUpgrades += itemMulti;
        itemClickMulti = itemMulti;
        totalClick += itemMulti;
        clickUpgrades[item].price += 50;
        console.log(itemClickPrice, itemMulti, item);
    } else {
        alert("Insufficient Funds");
    }
    update();
}

function buyAutoItem(item) {
    let itemMulti = autoUpgrades[item].multiplier;
    itemAutoPrice = autoUpgrades[item].price;
    if (totalCheese >= itemAutoPrice) {
        totalCheese -= itemAutoPrice;
        totalUpgrades += itemMulti;
        itemAutoMulti = itemMulti;
        totalAuto += itemMulti;
        autoUpgrades[item].price += 55;
        console.log(itemAutoPrice, itemMulti, item);
        startInterval();
    } else {
        alert("Insufficient Funds");
    }
    update();
}