import Group from "../../models/index.model.js"
import User from "../../models/index.model.js";
class groupController {
    #groupModel;
    constructor() {
        this.#groupModel = Group;
    }
    createGroup = async (req, res) => {
        try {
            const { image, price, title, count } = req.body;
            const newGroup = await this.#groupModel.create({ teachers, title });
            res.status(201).send({
                message: "Group created",
                data: newGroup
            });
        } catch (error) {
            res.status(500).send({
                message: "Error creating Group",
                error: error.message
            });
        }
    };

    getAllGroups = async (req, res) => {
        try {
            const Groups = await this.#groupModel.findAll();
            res.status(200).send({
                data: Groups
            });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching Groups",
                error: error.message
            });
        }
    };

    getOneGroup = async (req, res) => {
        try {
            const Group = await this.#groupModel.findById(req.params.id);
            if (!Group) {
                return res.status(404).send({ message: "Group not found" });
            }
            res.status(200).send({ data: Group });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching Group",
                error: error.message
            });
        }
    };

    updateGroup = async (req, res) => {
        try {
            const { title, teachers } = req.body;
            const updatedGroup = await this.#groupModel.update(req.body, { where: { id: req.params.id } });
            if (!updatedGroup) {
                return res.status(404).send({ message: "Group not found" });
            }
            res.status(200).send({
                message: "Group updated",
                data: updatedGroup
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating Group",
                error: error.message
            });
        }
    };

    deleteGroup = async (req, res) => {
        try {
            const deletedGroup = await this.#groupModel.destroy({ where: { id: req.params.id } });
            if (!deletedGroup) {
                return res.status(404).send({ message: "Group not found" });
            }
            res.status(200).send({
                message: "Group deleted",
                data: deletedGroup
            });

        } catch (error) {
            res.status(500).send({
                message: "Error deleting Group",
                error: error.message
            });
        }
    }

    addStudentInGroup = async (req, res) => {
        try {
            const group = await this.#groupModel.findByPk(req.params.id);
            if (!group) return res.status(404).json({ error: "Group not found" })

            const user = User.findAll({ where: { id: req.body.userId } })
            await group.addUser([Group, User])

            res.status(201).send({
                message: "Successfully adding student to group",
                data: newGroup
            });
        } catch (error) {
            res.status(500).send({
                message: "Error adding student to group",
                error: error.message
            });
        }
    }
}


export default new groupController()