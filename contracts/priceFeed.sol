// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract PriceFeed {

    struct Order{
        address owner;
        string symbol;
        uint256 createdAt;
        uint256 updatedAt;
        
    }

    address public manager;

    mapping(string => string) quote;
    event newQuote(string indexed symbol, string newPrice, string oldPrice, uint256 updatedAt);

    constructor(address _manager) {
        manager = _manager;
    }

    modifier onlyOwner{
        require(msg.sender == manager, "Authorize fail");
        _;
    }

    function setPrice(string memory symbol, string memory price) public {
        string memory oldPrice = quote[symbol];
        quote[symbol] = price;
        emit newQuote(symbol, price, oldPrice, block.timestamp);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice(string memory symbol) public view returns (string memory) {
        return quote[symbol];
    }
}

