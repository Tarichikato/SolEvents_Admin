export const contractAddress = '0x4bb13c38f97a709cb5c4536c931c4c9a4a9ee85d'

export const SolEventsABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "debutSejour",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "finSejour",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Participants",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "pays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ville",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hebergementType",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "accompagnement",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "envies",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_idClient",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_nom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_prenom",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_testcovid",
				"type": "bool"
			}
		],
		"name": "createVoyage",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "deleteOwner",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "owners",
		"outputs": [
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "Valid",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ownersCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_nom",
				"type": "string"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "nom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "prenom",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voyages",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "debutSejour",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "finSejour",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Participants",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "pays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ville",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hebergementType",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "accompagnement",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "envies",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "editor",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "testCovid",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "fait",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "valid",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "voyagesCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export default SolEventsABI




