const originalScrollTo = window.scrollTo;

const install = async () => {
  window.scrollTo = () => {};
};

const uninstall = () => {
  window.scrollTo = originalScrollTo;
};

export default {
  install,
  uninstall,
};
