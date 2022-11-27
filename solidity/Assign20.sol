// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Structure {
    struct Book {
        string title;
        string author;
        uint256 bookID;
        uint256 price;
    }
    // define a struct- name of the struct variable to represent the struct
    Book book;

    function setBook() public {
        book = Book("Blokchain for beginners", "Ineuron", 4, 1000);
    }
    //get title 
    function getTitle() public view returns (string memory) {
        return book.title;
    }
    //get auther 

    function getAuthor() public view returns (string memory) {
        return book.author;
    }
    //get book id 
    function getBookId() public view returns (uint256) {
        return book.bookID;
    }
    //get price
    
    function getPrice() public view returns (uint256) {
        return book.price;
    }
}
