
export const SolEventsABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "owners",
		"outputs": [
			{
				"name": "Address",
				"type": "address"
			},
			{
				"name": "Name",
				"type": "string"
			},
			{
				"name": "Valid",
				"type": "bool"
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
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "isDone",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "deleteVoyage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isOwner",
		"outputs": [
			{
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
		"inputs": [],
		"name": "voyagesCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokens",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "nom",
				"type": "string"
			},
			{
				"name": "prenom",
				"type": "string"
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
				"name": "debutSejour",
				"type": "uint256"
			},
			{
				"name": "finSejour",
				"type": "uint256"
			},
			{
				"name": "Participants",
				"type": "uint256"
			},
			{
				"name": "pays",
				"type": "string"
			},
			{
				"name": "ville",
				"type": "string"
			},
			{
				"name": "hebergementType",
				"type": "string"
			},
			{
				"name": "accompagnement",
				"type": "bool"
			},
			{
				"name": "envies1",
				"type": "uint256"
			},
			{
				"name": "envies2",
				"type": "uint256"
			},
			{
				"name": "_idClient",
				"type": "uint256"
			},
			{
				"name": "_nom",
				"type": "string"
			},
			{
				"name": "_prenom",
				"type": "string"
			},
			{
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
		"constant": true,
		"inputs": [],
		"name": "ownersCount",
		"outputs": [
			{
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
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voyages",
		"outputs": [
			{
				"name": "debutSejour",
				"type": "uint256"
			},
			{
				"name": "finSejour",
				"type": "uint256"
			},
			{
				"name": "Participants",
				"type": "uint256"
			},
			{
				"name": "pays",
				"type": "string"
			},
			{
				"name": "ville",
				"type": "string"
			},
			{
				"name": "hebergementType",
				"type": "string"
			},
			{
				"name": "accompagnement",
				"type": "bool"
			},
			{
				"name": "envies",
				"type": "uint256"
			},
			{
				"name": "envies2",
				"type": "uint256"
			},
			{
				"name": "testCovid",
				"type": "bool"
			},
			{
				"name": "fait",
				"type": "bool"
			},
			{
				"name": "valid",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

export default SolEventsABI




