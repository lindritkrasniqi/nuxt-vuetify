export const state = () => ({
  message: null,
  error: []
});

export const mutations = {
  error: (state, data) => {
    state.message = data.message ?? null;
    state.error = data.errors ?? [];
  }
};
