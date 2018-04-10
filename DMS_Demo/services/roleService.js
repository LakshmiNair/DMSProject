function create(roleRepository) {
    async function getAllRoles() {
        const roles = await roleRepository.getAll();
        return roles;
    }

    async function getRoleInfo(user) {
        const roles = await roleRepository.getRoleInfo(role);
        return roles;
    }
    return {
        getRoleInfo
        };
}

module.exports.create = create;