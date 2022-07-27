const BorrowerService = require('../service/borrowerService');

exports.get = async (req, res, next) => {
    const payload = await new BorrowerService().getAllBorrowers();
    res.status(200).send(payload);
};

exports.getById = async (req, res, next) => {
    const payload = await new BorrowerService().getBorrowerById(req.params.id);
    res.status(200).send(payload);
};

exports.getByEmail = async (req, res, next) => {
    const payload = await new BorrowerService().getBorrowerByEmail(req.params.email);
    res.status(200).send(payload);
};

exports.post = async (req, res, next) => {
    try{
        const payload = await new BorrowerService().createBorrower(req.body);
        res.status(201).send(payload);
    }catch(error){
        res.status(400).send({
            message: error.message
        });
    }
};

exports.put = async (req, res, next) => {
    try{
        const id = req.params.id;
        const body = req.body;
        
        
        const oldBorrower = await new BorrowerService().getBorrowerById(req.params.id);

        if(!oldBorrower || oldBorrower.length === 0){
            throw new Error(`Borrower with ID ${id} was not found.`);
        }
        const payload = await new BorrowerService().updateBorrower(id, body);

        res.status(201).send(payload);
    }catch(error){
        res.status(400).send({
            message: error.message
        });
    }
};
exports.delete = async (req, res, next) => {
    try{
        const id = req.params.id;
        
        
        const oldBorrower = await new BorrowerService().getBorrowerById(req.params.id);

        if(!oldBorrower || oldBorrower.length === 0){
            throw new Error(`Borrower with ID ${id} was not found.`);
        }

        const payload = await new BorrowerService().deleteBorrower(id);

        res.status(204).send(payload);
    }catch(error){
        res.status(404).send({
            message: error.message
        });
    }
};