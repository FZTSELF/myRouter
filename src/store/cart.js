const state = {
  items: [],
  checkoutStatus: null
};

// getters
const getters = {};

// actions
const actions = {
  addProductToCard({ commit }, product) {
    if (product.inventory > 0) {
      commit(
        "products/deleteProductInventory",
        { id: product.id },
        { root: true }
      );
      commit('add',product);
    }
  }
};

// mutations
const mutations = {
  add(state,product){
    state.items.push(product);
    state.checkoutStatus+=product.price;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
