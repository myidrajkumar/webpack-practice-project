import "./styles/index.scss";

const elvenShieldRecipie = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonStone: 4
}

const elvenGauntletsRecipie = {
    ...elvenShieldRecipie,
    leather: 1,
    refinedMoonStone: 4
}

console.log(elvenShieldRecipie);
console.log(elvenGauntletsRecipie);