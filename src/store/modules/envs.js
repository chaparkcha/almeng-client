// initial state
// shape: [{ id, quantity }]
const state = () => ({
  layoutType: 'side',
  drawer: false,
});

// getters
// const getters = {
//   cartProducts: (state, getters, rootState) => {
//     return state.items.map(({ id, quantity }) => {
//       const product = rootState.products.all.find(product => product.id === id)
//       return {
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         quantity
//       }
//     })
//   },

//   cartTotalPrice: (state, getters) => {
//     return getters.cartProducts.reduce((total, product) => {
//       return total + product.price * product.quantity
//     }, 0)
//   }
// }

// actions
const actions = {
  // async checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.items]
  //   commit('setCheckoutStatus', null)
  //   // empty cart
  //   commit('setCartItems', { items: [] })
  //   try {
  //     await shop.buyProducts(products)
  //     commit('setCheckoutStatus', 'successful')
  //   } catch (e) {
  //     console.error(e)
  //     commit('setCheckoutStatus', 'failed')
  //     // rollback to the cart saved before sending the request
  //     commit('setCartItems', { items: savedCartItems })
  //   }
  // },

  changeLayoutType({ commit }, type) {
    commit('setLayoutType', type);
  },
  toggleDrawer({ commit, state }) {
    commit('setDrawer', !state.drawer);
  },
};

// mutations
const mutations = {
  setLayoutType(state, type) {
    state.layoutType = type;
  },
  setDrawer(state, show) {
    state.drawer = show;
  },
};

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations,
};
