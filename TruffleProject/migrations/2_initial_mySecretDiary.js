const MySecretDiary = artifacts.require("MySecretDiary");

module.exports = function (deployer) {
  deployer.deploy(MySecretDiary);
};
