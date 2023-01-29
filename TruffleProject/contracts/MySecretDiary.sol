// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MySecretDiary {
    // user account => public key => list of articles

    // key : value

    //          vijayPK (address) : {
    //                      date1 (string) : { 
    //                              heading : heading, 
    //                              context : context 
    //                            },           
    //                      date2 : { heading : heading, context : context }, 
    //                      date3 : { heading : heading, context : context },
    //                      date4 : { heading : heading, context : context },
    //          }
    //
    // considering: in 1 day, 1 person will write only 1 article

    mapping(address => mapping(string => mapping( string => string ))) diary;

    // function to write data on the smart contract
    function writeDaySummary(string memory _date, string memory _heading, string memory _context) public returns(bool){
        // write <= msg.sender
        require(msg.sender != address(0), "Call it from a End User Account");
        diary[msg.sender][_date]["heading"] = _heading;
        diary[msg.sender][_date]["context"] = _context;
        return true;
    }

    // function to read data from the smart contract
    function readDaySummary(string memory _date) public view returns (string memory heading, string memory context){
        require(msg.sender != address(0), "Call it from a End User Account");
        return (diary[msg.sender][_date]["heading"], diary[msg.sender][_date]["context"]);
    }
}