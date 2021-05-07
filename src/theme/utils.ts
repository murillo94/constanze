export const UTILS = {
  m: () => (value) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: () => (value) => ({
    marginTop: value,
  }),
  mr: () => (value) => ({
    marginRight: value,
  }),
  mb: () => (value) => ({
    marginBottom: value,
  }),
  ml: () => (value) => ({
    marginLeft: value,
  }),
  mx: () => (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: () => (value) => ({
    marginTop: value,
    marginBottom: value,
  })
}