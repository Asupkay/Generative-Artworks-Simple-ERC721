async function main() {
  // We get the contract to deploy
  const MainContract = await ethers.getContractFactory("GenerativeArtworksOneOffs");
  const mainContract = await MainContract.deploy("Generative Artworks One-offs", "GAO");

  console.log("Main contract deployed to: ", mainContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
