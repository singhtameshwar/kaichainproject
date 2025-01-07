export const faqData = {
  intro: [
    {
      title: "Token Generator",
      content: "Create an KRC20 Token in less than a minute with the most trusted Smart Contract Generator for Kaichain Network. No login. No setup. No coding required."
    },
    {
      title: "The KRC20 Standard",
      content: "KRC20 provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party."
    }
  ],
  sections: [
    {
      title: "Token Features",
      items: [
        {
          id: "supply",
          question: "What's the difference between 10k, Fixed, Capped and Unlimited Supply?",
          answer: [
            {
              title: "10k",
              content: "Token supply will be 10,000. The entire token supply will be generated during deploy and sent to Token Owner wallet. You can't increase or reduce supply later."
            },
            {
              title: "Fixed Supply",
              content: "The entire token supply will be generated during deploy and sent to Token Owner wallet. You can't increase or reduce supply later."
            },
            {
              title: "Capped Supply",
              content: "You can define an initial supply to sent to Token Owner's wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You won't be able to generate more tokens than the defined supply cap."
            },
            {
              title: "Unlimited Supply",
              content: "You can define an initial supply to sent to Token Owner's wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You will be able to generate unlimited tokens without an upper limit."
            }
          ]
        },
        {
          id: "supply",
          question: "What's the difference between unstoppable and pausable transfer?",
          answer: [
            {
              title: "Unstoppable",
              content: "Everyone can always transfer his own tokens. Transfer can't be stopped."
            },
            {
              title: "Pausable",
              content: "Token owner can stop token transfers. Useful for scenarios such as preventing trades until the end of an evaluation period, or having an emergency switch for freezing all token transfers in the event of a large bug."
            }
          ]
        },
        {
          id: "supply",
          question: "What's the difference between None, Ownable and Role based access ?",
          answer: [
            {
              title: "None",
              content: "Token doesn't need an access type because of there are not actions that needs privileges."
            },
            {
              title: "Ownable",
              content: "Token will have an Owner. The account you use to deploy the Token will be owner by default and will be able to mint new tokens or call the finish minting function or set the burn fee. You can transfer token ownership to addresses or Smart Contract."
            },
            {
              title: "Role based",
              content: "Token will have Roles. Accounts with 'MINTER' role will be able to mint new tokens. Accounts with 'ADMIN' role will be able to add or remove roles to minters or other admins. The account you use to deploy the Token will be ADMIN and MINTER by default. In addition the Token will have the Ownable behaviour too."
            }
          ]
        },
        {
          id: "supply",
          question: "Who can mint or burn tokens?",
          answer: [
            {
              title: "Mint",
              content: "It depends on Token Access Type. If you choose Ownable Access only Token Owner will be able to mint new tokens. If you choose Role Based Access only addresses with MINTER role will be able to mint new tokens. In both cases, if you choose a Capped supply no one won't be able to mint more tokens than the defined cap. By choosing Unlimited supply instead, you will be able to generate unlimited tokens."
            },
            {
              title: "Burn",
              content: "Everyone will be able to burn tokens he held. A third party can burn tokens from other addresses only after an approval. Nobody, not even the Token Owner, will be able to burn tokens from other addresses without approval."
            }
          ]
        },
        {
          id: "supply",
          question: "Who can pause transfers?",
          answer: [
            {
              content: "If you choose a Pausable token, only token owner will be able to pause and unpause token transfers."
            }
          ]
        },
        {
          id: "supply",
          question: "What is deflationary tokens?",
          answer: [
            {
              content: "A deflationary token reduces its supply over time, resulting in a limited amount of the currency in circulation and ultimately increasing its value. This reduction of supply happens through transaction fee. For each transaction a fee will be automatically burned. owner can change the burn fee and exclude some accounts from the deflation mechanism."
            }
          ]
        },
        {
          id: "supply",
          question: "What is taxable tokens?",
          answer: [
            {
              content: "A taxable token takes a fee for each transaction and sends it to a defined wallet. The owner can change the tax fee and exclude some accounts from the taxation mechanism."
            }
          ]
        },
        {
          id: "supply",
          question: "What is ERC1363 token?",
          answer: [
            {
              content: "There is no way to execute any code on a receiver or spender contract after a KRC20 transfer, transferFrom, or approve. To perform an action, another transaction is required. This introduces complexity in UI development and friction in adoption because users must wait for the first transaction to be executed and then send the second one. They must also pay GAS twice. ERC1363 aims to make tokens capable of performing actions more easily and working without the use of any other listener. It allows making a callback on a receiver or spender contract, after a transfer or an approval, in a single transaction.\n\nThere are many proposed uses of Smart Contracts that can accept KRC20 callbacks. Examples could be to create a token payable crowdsale, selling services for tokens, paying invoices, making subscriptions. For these reasons, it was originally named 'Payable Token'. Anyway, you can use it for specific utilities or for any other purposes that require the execution of a callback after a transfer or approval is received."
            }
          ]
        },
        {
          id: "supply",
          question: "What is token recover ?",
          answer: [
            {
              content: "There are lots of tokens lost forever into Smart Contracts. Each Kaichain contract is a potential token trap for KRC20 tokens. They can't be recovered so it means money losses for end users."
            }
          ]
        },
        {
          id: "supply",
          question: "Will be having krc20  generator copywrite an issue ?",
          answer: [
            {
              content: "No. Token Generator code is released under MIT License, so using HelloKRC20 for FREE or SimpleKRC20, the token will have a view method in Smart Contract ABIs named 'generator' showing a link to this page. Token will also have a disclaimer in source code. It is not an issue because the Token will be fully compliant with KRC20 definition. Token can be used in Exchanges, or any KRC20 compatible wallet, etc. This can be removed by choosing a token type with remove Copyright feature."
            }
          ]
        }
      ]
    },
    {
      title: "Token Behaviours",
      items: [
        {
          id: "supply",
          question: "What is my token address?",
          answer: [
            {
              content: "Once the deploy transaction is sent, you will receive transaction hash (first) and Token address (when transaction is confirmed). If the transaction will take some time to be confirmed due to network status, you can monitor it on explorer and Token address will be visible in transaction page."
            }
          ]
        },
        {
          id: "supply",
          question: "Who will be the token owner?",
          answer: [
            {
              content: "Once the Token will be deployed you (your MetaMask address) will be the only owner."
            }
          ]
        },
        {
          id: "supply",
          question: "Where will token supply go after deploy?",
          answer: [
            {
              content: "The initial token supply will be held by the address used to deploy the token (your MetaMask address). This address will be Token Owner and will be able to generate new tokens (in case you selected a token type with Mintable behaviour)."
            }
          ]
        },
        {
          id: "supply",
          question: "Which wallet will the token be supported by?",
          answer: [
            {
              content: "The initial token supply will be held by the address used to deploy the token (your MetaMask address). This address will be Token Owner and will be able to generate new tokens (in case you selected a token type with Mintable behaviour)."
            }
          ]
        },
        {
          id: "supply",
          question: "how to mint new tokens?",
          answer: [
            {
              content: "To generate new tokens, you must use the 'mint' function using the token owner wallet or a permissioned account wallet. You can do this by using the Contract/Write tab on explorer.kaichain.net. You can also import ABI from the Docs page in tools like MyEtherWallet and call the 'mint' function."
            }
          ]
        },
        {
          id: "supply",
          question: "What is a deflationary token?",
          answer: [
            {
              content: "A deflationary token reduces its supply over time, resulting in a limited amount of the currency in circulation and ultimately increasing its value. This reduction of supply happens through transaction fee. For each transaction a fee will be automatically burned. owner can change the burn fee and exclude some accounts from the deflation mechanism."
            }
          ]
        },
        {
          id: "supply",
          question: "can i use the token in exchanges or with defi protocols?",
          answer: [
            {
              content: "Yes, you can use the Token in Exchanges, Dex, or DeFi protocols. It is a KRC20 compliant so you can use for any purpose where KRC20 applies."
            }
          ]
        },
        {
          id: "supply",
          question: "can i use my token for ico?",
          answer: [
            {
              content: "Yes, you can use Token for ICO or Crowdsales. Note: you need to develop an ICO or Crowdsale Smart Contract; Token address can't receive KEC."
            }
          ]
        },
        {
          id: "supply",
          question: "can my token receive KEC?",
          answer: [
            {
              content: "No, Token address can't receive KEC. If you want to create ICO, you need to develop a Smart Contract able to do that."
            }
          ]
        },
        {
          id: "supply",
          question: " Will my token soucrce code be verified?",
          answer: [
            {
              content: "Yes, Token source code will be already verified on explorer.kaichain.net."
            }
          ]
        },
        {
          id: "supply",
          question: "Can i add logo and information to my token on etherscan?",
          answer: [
            {
              content: "Once the token will be deployed you will be able to add information on Etherscan using their procedure."
            }
          ]
        },
        {
          id: "supply",
          question: " Will people mark the token as scam?",
          answer: [
            {
              content: "No, a Token deployed using Token Generator is not SCAM. Code is well tested and updated regularly, token has verified source code already used by thousands of tokens. It will be SCAM if you use as it. Token Generator is FREE to use and there are lot of tokens built on. Maybe someone used it to SCAM but it doesn't mean you will use for it too.."
            }
          ]
        },
      ]
    },
    {
      title: "Kaichain Blockchain and Ecosystem",
      items: [
        {
          id: "supply",
          question: "what is kaichain?",
          answer: [
            {
              content: "Kaichain is a decentralized platform that runs Smart Contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference."
            }
          ]
        },
        {
          id: "supply",
          question: "How to explore",
          answer: [
            {
              content: "A Block Explorer is basically a search engine that allows users to easily lookup, confirm and validate transactions that have taken place on the Kaichain Blockchain."
            }
          ]
        },
        {
          id: "supply",
          question: "What is DApp?",
          answer: [
            {
              content: "DApp is an abbreviated form for decentralized application. A DApp has its backend code running on a decentralized peer-to-peer network. Contrast this with an app where the backend code is running on centralized servers. A DApp can have frontend code and user interfaces written in any language (just like an app) that can make calls to its backend. Furthermore, its frontend can be hosted on decentralized storage such as Swarm or IPFS. For an application to be considered a Dapp (pronounced Dee-app, similar to Email) it must meet the following criteria: The application must be completely open-source, it must operate autonomously, and with no entity controlling the majority of its tokens. The application may adapt its protocol in response to proposed improvements and market feedback but all changes must be decided by consensus of its users. The application's data and records of operation must be cryptographically stored in a public, decentralized blockchain in order to avoid any central points of failure. The application must use a cryptographic token (bitcoin or a token native to its system) which is necessary for access to the application and any contribution of value from (miners / farmers) should be rewarded in the application’s tokens. The application must generate tokens according to a standard crytptographic algorithm acting as a proof of the value nodes are contributing to the application (Bitcoin uses the Proof of Work Algorithm)."
            }
          ]
        },
        {
          id: "supply",
          question: "What is a KRC20 token?",
          answer: [
            {
              content: "The Kaichain token standard (KRC20) defines a common list of rules that an Kaichain token has to implement. Giving developers the ability to program how new tokens will function within the Kaichain ecosystem. This token protocol became popular with crowdfunding companies via initial coin offering (ICO)."
            }
          ]
        },
        {
          id: "supply",
          question: "How to mint new token?",
          answer: [
            {
              content: "A Block Explorer is basically a search engine that allows users to easily lookup, confirm and validate transactions that have taken place on the Kaichain Blockchain."
            }
          ]
        },
        {
          id: "supply",
          question: "What is gas and how to set gas price?",
          answer: [
            {
              content: "Gas is the name for a special unit used in Kaichain. It measures how much work an action or set of actions takes to perform. Every operation that can be performed by a transaction or contract on the Kaichain platform costs a certain number of gas, with operations that require more computational resources costing more gas than operations that require few computational resources. The reason gas is important is that it helps to ensure an appropriate fee is being paid by transactions submitted to the network. By requiring that a transaction pay for each operation it performs (or causes a contract to perform), we ensure that network doesn't become bogged down with performing a lot of intensive work that isn't valuable to anyone. Use the links below to discover more about Gas and Gas Price"
            }
          ]
        },
        {
          id: "supply",
          question: "What is Multisig Wallet?",
          answer: [
            {
              content: "If such an account (wallet) with privileges is lost or were to fall in the hands of a malicious user, they could wreak havoc in your system. A good option for securing owner accounts is to use a special contract, such as a multisig, instead of a regular externally owned account. Multisig is a smart contract wallet running on Kaichain that requires a minimum number of people to approve a transaction before it can occur. If for example you have 3 main stakeholders in your business, you are able to set up the wallet to require approval from all 3 people before the transaction is sent. This assures that no single person could compromise the funds."
            }
          ]
        }
      ]
    }
  ],
  disclaimer: {
    title: "DISCLAIMER",
    content: "SmartContracts Tools and its company are free of any liability regarding Tokens built using Token Generator, and the use that is made of them. Tokens built on Token Generator, their projects, their teams, their use of Token (as well as anything related to Token) are in no way connected to SmartContracts Tools or its company. Token source code is provided under MIT License. Source code has been tested with 100% coverage and continuously updated to reduce risk of bugs and to introduce language optimizations. Anyway the purchase of tokens involves a high degree of risk. Before acquiring tokens, it is recommended to carefully weight all the information and risks detailed in Token owner's Conditions."
  }
}; 