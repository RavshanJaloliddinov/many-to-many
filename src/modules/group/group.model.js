import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";
export const Group = sequelize.define("Group", {
    teacher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {    
        type: DataTypes.STRING,
        allowNull: false
    }
})

