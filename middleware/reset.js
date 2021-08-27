export default ({ query, redirect }) => {
  if (!query.email || !query.token) {
    redirect({ name: "index" });
  }
};
