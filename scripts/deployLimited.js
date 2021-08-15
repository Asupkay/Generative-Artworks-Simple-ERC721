async function main() {
  // We get the contract to deploy
  const MainContract = await ethers.getContractFactory("GenerativeArtworksERC721");
  const mainContract = await MainContract.deploy("Generative Artworks Limited", "GAL");

  console.log("Main contract deployed to: ", mainContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
