async function main() {
  // We get the contract to deploy
  const MainContract = await ethers.getContractFactory("ERC721");
  const mainContract = await MainContract.deploy("Generative Artworks One-offs", "GA");

  console.log("Main contract deployed to: ", mainContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
