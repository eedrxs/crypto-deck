async function main() {
  const ERC20Factory = await ethers.getContractFactory("ERC20Factory")

  const erc20_factory = await ERC20Factory.deploy()
  console.log("Contract deployed to address:", erc20_factory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
