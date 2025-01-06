export const  TOKENFEATURE=()=> {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-gray-600 mb-2">
            You will be able to choose between several features.
          </p>
          <p className="text-gray-600">
            What are your Token requirements?
          </p>
        </div>
  
        <div className="space-y-6">
          {/* Standard KRC20 Card */}
          <div className="bg-black rounded-lg p-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Standard KRC20
            </h3>
            <p className="text-white">
              The Token will be fully compliant with the KRC20 definition and compatible with any KRC20 wallet all around theworld. Token will have custom name and symbol and customizable decimals amount. Token Source Code will be automatically verified on Kaichain explorer.
            </p>
          </div>
  
          {/* Burnable and Mintable Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Burnable
              </h3>
              <p className="text-white">
                The Token can be burned. It means that you can choose to reduce the circulating supply by destroying some of your tokens.
              </p>
            </div>
  
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Mintable
              </h3>
              <p className="text-white">
                Owner or accounts with minting permission will be able to generate new tokens, up to token max supply. You can also disable minting if you don't want to generate tokens anymore.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Deflationary
              </h3>
              <p className="text-white">
              Token supply will reduce over time. For each transaction a fee will be automatically burned. Owner can exclude some accounts from the deflation mechanism.
              </p>
            </div>
  
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Taxable
              </h3>
              <p className="text-white">
              A tax fee will be added to transfers. For each transaction a fee will be automatically sent to a predefined address. Owner can exclude some accounts from the taxation mechanism.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Capped
              </h3>
              <p className="text-white">
              You won't be able to generate more tokens than the defined token cap. This ensure people that you will not generate more tokens than declared.
              </p>
            </div>
  
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Pausable
              </h3>
              <p className="text-white">
              Token transfer can be paused. Useful to prevent trades until a period or freezing all token transfers.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Ownable Access
              </h3>
              <p className="text-white">
              Token will have an Owner. Token owner will be able to mint new tokens or to call the finish minting function.
              </p>
            </div>
  
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Role Based Access
              </h3>
              <p className="text-white">
              Token will have Roles. You can add or remove ADMIN or MINTER role to addresses. Token will be Ownable too.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              ERC1363 Token
              </h3>
              <p className="text-white">
              The ERC1363 Token is an extension of KRC20 that can make a callback on the receiver contract to notify token transfers or token approvals.
              </p>
            </div>
  
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Token Recover
              </h3>
              <p className="text-white">
              There are lots of tokens lost forever into Smart Contracts. It allows the contract owner to recover any KRC20 token sent into your contract for error.
              </p>
            </div>
          </div>
          <div className="bg-black rounded-lg p-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Copyright
            </h3>
            <p className="text-white">
            Deploying HelloKRC20 for FREE or SimpleKRC20, a link pointing to this page will be added to your contract. Your Token will be fully compliant with the KRC20 Standard and you can use it without issues. It is only a little credit to SmartContract Tools. You can remove it by choosing an advanced Token type.
            </p>
          </div>
          <div>
          <h3 className="text-orange-500 text-xl text-center"> Learn more inFrequently Asked Questions</h3>
          </div>
        </div>
        
      </section>
    )
  }
  export default TOKENFEATURE;
  
  