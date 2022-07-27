const db = require('../dbConfig.js');

class BorrowerRepository{

    async findAll(){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM borrower";

        const borrower = await conn.query(query);

        return borrower;
    }

    async findById(code){
      const conn = await db.connectToPostgres();
      const query = "SELECT * FROM borrower where id = ?";

      const [borrower] = await conn.query(query, [code]);

      return borrower;
    }

    async findByEmail(email){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM borrower where email = ?";
  
        const [borrower] = await conn.query(query, [email]);
  
        return borrower;
      }

    async create(borrowerData){
      const conn = await db.connectToPostgres();
      const query = "INSERT INTO borrower(type, tax_id, email_address, password, serasa_score, name, lastname, birthdate, phone_number, address_id) VALUES(?,?,?,?,?,?,?,?,?,?)";

      const [borrower] = await conn.query(query, [
        borrowerData.type, 
        borrowerData.tax_id, 
        borrowerData.email_address, 
        borrowerData.password, 
        borrowerData.serasa_score, 
        borrowerData.name, 
        borrowerData.lastname, 
        borrowerData.birthdate, 
        borrowerData.phone_number,
        borrowerData.address_id,
    ]);

      return borrower;
    }

    async update(code, borrowerData){
      const conn = await db.connectToPostgres();
      const query = "UPDATE borrower SET type = ?, tax_id = ?, email_address = ?, password = ?, serasa_score = ?, name = ?, lastname = ?, birthdate = ?, phone_number = ?, address_id = ? where id = ? ";

      const [borrower] = await conn.query(query, [
        borrowerData.type, 
        borrowerData.tax_id, 
        borrowerData.email_address, 
        borrowerData.password, 
        borrowerData.serasa_score, 
        borrowerData.name, 
        borrowerData.lastname, 
        borrowerData.birthdate, 
        borrowerData.phone_number,
        borrowerData.address_id,
        code
    ]);

      return borrower;
    }

    async delete(code){
      const conn = await db.connectToPostgres();
      const query = "DELETE FROM borrower where id = ?";

       await conn.query(query, [code]);
      
    }

}

module.exports = BorrowerRepository;