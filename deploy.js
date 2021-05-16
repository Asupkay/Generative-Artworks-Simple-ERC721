async function main() {
  // We get the contract to deploy
  const MainContract = await ethers.getContractFactory("GenerativeArtworks");
  const mainContract = await MainContract.deploy("Generative Artworks", "GA");

  console.log("Main contract deployed to: ", mainContract.address);

  const PaymentContract = await ethers.getContractFactory("GenerativeArtworksPayable");
  const paymentContract = await PaymentContract.deploy(mainContract.address);

  console.log("Payment contract deployed to: " + paymentContract.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
