// const abi = [{"inputs":[{"internalType":"string","name":"_placeholderTokenURI","type":"string"},{"internalType":"address[]","name":"_admins","type":"address[]"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"addWhiteListAccounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"adminMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"admins","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"amountMinted","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"delWhiteListAccounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freeMints","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWL","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"mintedURItoId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"amount","type":"uint16"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_folder_uri","type":"string"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_priceInWei","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setPublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"amount","type":"uint16"}],"name":"whiteListMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const abi = [
    "function minted() public view returns (uint256)",
    "function mintPrice() public view returns (uint256)",
    "function balanceOf(address _address) public view returns (uint256)",
    "function whiteListMint(uint16 amount, bytes32[] memory _merkleProof) public payable"
]


// --------------------------------------------------------------------------- Change the look of the website -----------------------------------------------

const hide_popup = () => document.getElementById("popup").style.display = "none";
const set_error = (msg)  => document.getElementById("error-msg").innerText = msg;
const unset_error = () => document.getElementById("error-msg").innerHTML = "&nbsp;";
const show_popup = () =>
{
    document.getElementById("popup").style.display = "block";
    calc_price();
}


// --------------------------------------------------------------------------- Random calculations and helpers -----------------------------------------------

/*
 * Re-calculate the price the user has to pay for the amount of tokens
 * they want to mint at each keystroke. The price gets both displayed
 * on the popup window and returned.
 *
 * The timeout is there to wait for the .value of the DOM element
 * to actually Update
 */
const calc_price_timeout = async() => setTimeout(calc_price, 100);
const calc_price = async() =>
{
    // Get the price of one token from the contract.
    let unit_price = await window.btd_contract.mintPrice();
    unit_price = parseInt(unit_price._hex)

    // Wait for the value to Update
    setTimeout(10000);

    // Get how many tokens the user is trying to mint
    const amount = parseInt(document.getElementById("popup-input").value)

    // Show error message if the value is not a number 
    if (!isNaN(amount))
        unset_error();
    else
    {
        if (document.getElementById("popup-input").value == "")
            return

        set_error("Not a valid number!");
        return
    }

    // Get the balance of the user in NFT's
    const balance = await get_display_balance();

    // Error if the balance + the amount the user wants to mint exceeds the maximum
    if (amount + balance > 10)
        set_error("You have overstepped the maximum amount of tokens per wallet!");


    // Calculate how many more free mints the user has
    let free_mints = 2;
    if (balance > 2)
        free_mints = 0;
    else
        free = 2 - balance;

    let price;
    if (free_mints < amount)
        price = ((amount-free_mints)*unit_price);
    else
        price = 0;

    console.log('price: ',price , typeof(price));
    
    // Update the price on the popup
    document.getElementById("popup-price").innerText = `${price/1000000000000000000}`;

    return price;
}

/*
 * Calculate the merkle tree and save it as a global so it doesn't
 * need to be re-calculated.
 */
const calc_merkle_tree = async() =>
{
    const leaf_nodes = white_list.map(addr => keccak256(addr));
    window.merkle_tree = new MerkleTree(leaf_nodes, keccak256, { sortPairs: true });
}

// Update the balance counter on the popup and return the users balance
const get_display_balance = async() =>
{
    // Get how many tokens have already been minted by them
    let balance = await window.btd_contract.balanceOf(window.metamask_signer.getAddress());
    balance = parseInt(balance._hex);
    console.log('balance: ',balance._hex , typeof(balance._hex));

    // Set the users balance in NFT tokens
    document.getElementById("popup-minted").innerText = `${balance}`;

    // Return so other functions can use this
    return balance;
}




// --------------------------------------------------------------------------- Button actions -----------------------------------------------

// Mint x amount of tokens
const mint = async(e) =>
{
    // Stop the page from reloading
    e.preventDefault();

    // Check if there are any issues with the number supplied
    const errors = document.getElementById("error-msg").innerHTML;
    if (errors != "&nbsp;")
    {
        alert(errors);
        return
    }

    // Get the amount of tokens the user wants to mint
    const amount = parseInt(document.getElementById("popup-input").value)

    // Get how much it would cost
    const price = calc_price()

    // Get the merkle proof
    let address = await window.metamask_signer.getAddress();
    address = address.toLowerCase();
    merkle_proof = window.merkle_tree.getHexProof(keccak256(address));
    console.log('merkle_proof: ',merkle_proof , typeof(merkle_proof));

    // Try mint the token
    try
    {
        // If successful then just console log it
        let output = await window.btd_contract.whiteListMint(amount, merkle_proof, {value: price});
        console.log('output: ',output , typeof(output));
    }
    catch
    {
        // If not successful then alert it
        alert("Something went wrong!")
        console.log('output: ',output , typeof(output));
    }
}

// Handle the "Connect Wallet" button.
const connect_wallet = async() =>
{
    // Get the accounts from metamask
    await metamask_provider.send("eth_requestAccounts", []);
    // Get the signer address from metamask
    // NOTE: This asks for the user to approve
    window.metamask_signer = metamask_provider.getSigner();

    // Connect to the contract with metamask so its writable
    window.btd_contract = new ethers.Contract("0xDC99B8FF05579D09759ccd69cBb876796987a99B", abi, window.metamask_signer);

    // Set how many tokens the user already holds
    get_display_balance()


    // Verify if the address is on the white list.
    let address = await window.metamask_signer.getAddress();
    address = address.toLowerCase()
    if (merkle_tree.getHexProof(keccak256(address)).length == 0)
    {
        alert("Your address is not on the white list!");
        return;
    }

    // casual print
    console.log("Connected account: ", address);

    // Update the button text
    document.getElementById("main-button").innerText = "Mint";
}





window.onload = () =>
{
    // Check if metamask is installed
    if (typeof web3 !== 'undefined')
    {
        // Set metamask as a provider to connect to the ethereum network
        window.metamask_provider = new ethers.providers.Web3Provider(window.ethereum);


        // The button dispatcher
        document.getElementById("main-button").addEventListener("click", () => {
            const button_value = document.getElementById("main-button").innerText;

            if (button_value == "Connect Wallet")
                connect_wallet()
            else if (button_value == "Mint")
                show_popup()

        });
    }
    else
    {
        alert("no metamask");
    }


    // Register an event to close the popup
    document.getElementById("hero").addEventListener("click", hide_popup);

    // Handle mint button
    document.getElementById("mint-form").addEventListener("submit", mint);


    // Calculate the merkle tree using async to not freeze slower browsers
    calc_merkle_tree()
}
