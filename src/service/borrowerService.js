const BorrowerRepository = require('../database/repositories/borrowerRespository');

class BorrowerService{

    constructor(){
        this.repository = new BorrowerRepository();
    }

    async getAllBorrowers(){
        return this.repository.findAll();
    }

    async getBorrowerById(code){
        return this.repository.findById(code);
    }

    async getBorrowerByEmail(email){
        return this.repository.findByEmail(email);
    }

    async createBorrower(borrower){
        return this.repository.create(borrower);
    }

    async updateBorrower(code, borrower){
        return this.repository.update(code, borrower);
    }

    async deleteBorrower(code){
        return this.repository.delete(code);
    } 


}

module.exports = BorrowerService;