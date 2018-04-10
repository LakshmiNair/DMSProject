const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ roleService }) {
    router.get('/', asyncWrapper(async (req, res) => {
        const roles = await roleService.getAllRoles();
    res.json(roles);
}));

router.post('/info', asyncWrapper(async (req, res) => {
    const role = req.body;
        const roles = await roleService.getRoleInfo(role);
res.json(roles);
}));

// TODO: Install middleware to validate the input
router.post('/', asyncWrapper(async (req, res) => {
    const role = req.body;
await roleService.createRole(role);
// TODO: Fix the response
res.json({});
}));

return router;
}

module.exports.create = create;