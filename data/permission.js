exports.managerPermission = {
  inventory: {
    read: true,
    crate: true,
    delete: true,
    update: true,
  },
  order: {
    read: true,
    crate: true,
    delete: true,
    update: true,
  },
  team: {
    read: true,
    crate: true,
    delete: true,
    update: true,
  },
};
exports.salesPermission = {
  inventory: {
    read: false,
    crate: false,
    delete: false,
    update: false,
  },
  order: {
    read: true,
    crate: true,
    delete: true,
    update: false,
  },
  team: {
    read: false,
    crate: false,
    delete: false,
    update: false,
  },
};
