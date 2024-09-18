import { Group } from "../modules/group/group.model.js";
import { User } from "../modules/users/user.model.js";


// Ko'p-ko'pga bog'lanishni o'rnatish
Group.belongsToMany(User, { through: 'GroupUser' });
User.belongsToMany(Group, { through: 'GroupUser' });

export default { Group, User }