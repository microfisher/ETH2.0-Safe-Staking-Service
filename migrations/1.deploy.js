const Staking = artifacts.require("Staking");

module.exports = async(deployer, network, accounts) => {

    let fee = 1**17;
    let eth2 = "0x07b39F4fDE4A38bACe212b546dAc87C58DfE3fDC";
    let staking = await deployer.deploy(Staking, eth2 , fee, { from: accounts[0], overwrite: true });
    await Staking.deployed();
};

//truffle migrate --network rinkeby