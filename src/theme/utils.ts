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
  }),

  p: () => (value) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: () => (value) => ({
    paddingTop: value,
  }),
  pr: () => (value) => ({
    paddingRight: value,
  }),
  pb: () => (value) => ({
    paddingBottom: value,
  }),
  pl: () => (value) => ({
    paddingLeft: value,
  }),
  px: () => (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: () => (value) => ({
    paddingTop: value,
    paddingBottom: value,
  })
};