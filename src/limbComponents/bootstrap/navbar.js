let navbar = (theme) => {
  return {
    ".navbar": {
      padding: theme("padding.2"),
      position: "relative   ",
    },
    ".navbar-container": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      ul: {
        display: "flex",
        columnGap: "15px",
      },
    },
    ".navbar-desktop": {
      width: theme("width.full"),
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      columnGap: "15px",
    },
    ".toggle-btn": {
      display: "none",
    },
    ".toggle-btn-responsive": {
      position: "absolute",
      top: "0",
      right: "10px",
      fontSize: theme("fontSize.2xl"),
    },
    ".navbar-responsive": {
      display: "none",
    },
    "#toggle-btn:checked ~ .navbar-responsive": {
      display: "block",
    },
  };
};

module.exports = navbar;
