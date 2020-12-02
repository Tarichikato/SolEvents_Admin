pragma solidity ^0.5.0;

contract SolEventsFinal{
    
    struct Voyage{
        uint debutSejour;
        uint finSejour;
        uint Participants; //nbAdultes + 1000 * nbEnfants + 1000000 * nbBébes
        string pays;
        string ville;
        string hebergementType;
        bool accompagnement;
        uint envies; //envies, groupe de voyage, critères de vol, hébergement confort,hébergement pension, transport prestation
        address editor;
        bool testCovid;
        bool fait;
        bool valid;
    }
    
    struct Client{
        uint id;
        string nom;
        string prenom;
    }
    
    struct Owner{
        address Address;
        string Name;
        bool Valid;
    }
    
    uint public ownersCount = 0;
    uint public voyagesCount = 0;
    mapping(uint => Voyage) public voyages;
	mapping(uint => Client) public  tokens;
	mapping(uint => Owner) public owners;
	
	
	
	constructor() public{
	    ownersCount ++;
	    owners[ownersCount] = Owner(msg.sender,"Contract creator",true);
    }
	
	
	
	function setOwner(address _address, string memory _nom) public payable{
	    require(isOwner(msg.sender));
	    ownersCount ++;
	    owners[ownersCount] = Owner(_address,_nom,true);
	}
	
	function isOwner(address _address) public view returns(bool){
	    for(uint i = 0; i <= ownersCount; i++){
    	    if((owners[i].Address == _address) && (owners[i].Valid == true)){
    	       return(true);
    	    }
	    }
	     return(false);
	}
	
	function deleteOwner(address _address) public payable{
	    require(msg.sender != _address);
	    require(isOwner(msg.sender));
	    for(uint i = 0; i <= ownersCount; i++){
    	    if(owners[i].Address == _address){
    	        owners[i].Valid = false;
    	    }
	    }
	}
	
	
	
	function mint( uint _id, string memory _nom, string memory _prenom) internal{
	    require(isOwner(msg.sender));
	    voyagesCount ++;
		tokens[voyagesCount] = Client(_id,_nom,_prenom);
	}
	
	
    function createVoyage(uint debutSejour,uint finSejour,uint Participants,string memory pays,string memory ville,string memory hebergementType,bool accompagnement,uint envies,uint _idClient, string memory _nom, string memory _prenom,bool _testcovid) public payable{
        require(isOwner(msg.sender));
        mint(_idClient,_nom,_prenom);
        voyages[voyagesCount] = Voyage(
        debutSejour,
        finSejour,
        Participants,
        pays,
        ville,
        hebergementType,
        accompagnement,
        envies,
        msg.sender,
        _testcovid,
        false,
        true
        );
    }
    
    function deleteVoyage(uint _id) public {
        require(isOwner(msg.sender));
        voyages[_id].valid = false;
    }
    
    function idDone(uint _id) public {
        require(isOwner(msg.sender));
        voyages[_id].fait = true;
    }
}