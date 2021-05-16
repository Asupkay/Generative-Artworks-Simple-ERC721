async function main() {
  // We get the contract to deploy
  const MainContract = await ethers.getContractFactory("GenerativeArtworks");
  const mainContract = await MainContract.deploy("Generative Artworks", "GA");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
