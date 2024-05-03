const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("mywork", (m) => {
const student = m.contract("mywork");
  return { student };
});
