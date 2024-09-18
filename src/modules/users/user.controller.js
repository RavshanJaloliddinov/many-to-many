import User from "../../models/index.model.js";

class UserController {
    #userModel;
    constructor() {
        this.#userModel = User;
    }

    createUser = async (req, res) => {
        try {
            console.log(req.body)
            const newUser = await this.#userModel.create(req.body);

            res.status(201).send({
                message: "Created",
                data: newUser
            });
        } catch (error) {
            res.status(500).send({
                message: "Error creating User",
                error: error.message
            });
        }
    };

    getAllUsers = async (req, res) => {
        try {
            const user = await this.#userModel.findAll();
            res.status(200).send({
                data: user
            });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching users",
                error: error.message
            });
        }
    };

    getOneUser = async (req, res) => {
        try {
            const user = await this.#userModel.findById(req.params.id);
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }
            res.status(200).send({ data: User });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching User",
                error: error.message
            });
        }
    };

    updateUser = async (req, res) => {
        try {
            const updatedUser = await this.#userModel.update(req.body,{where: {id:req.params.id}});
            if (!updatedUser) {
                return res.status(404).send({ message: "User not found" });
            }
            res.status(200).send({
                message: "User updated",
                data: updatedUser
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating User",
                error: error.message
            });
        }
    };
    

    deleteUser = async (req, res) => {
        try {
            const deletedUser = await this.#userModel.findOne({ where: { id: req.params.id } });
    
            if (!deletedUser) {
                return res.status(404).send({ message: "User not found" });
            }
    
            await deletedUser.destroy();
    
            res.status(200).send({
                message: "User deleted",
                data: deletedUser
            });
        } catch (error) {
            res.status(500).send({
                message: "Error deleting user",
                error: error.message
            });
        }
    };
    
}

export default new UserController();
