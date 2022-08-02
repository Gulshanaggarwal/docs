import React from "react";
import StarUsButton from "../components/StarUsButton";

const StarUsMessageDialog = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("landing_docs")) {
      setTimeout(() => {
        setOpen(true);
      }, 8000);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("landing_docs", true);
  };

  const handleClickStarUsButton = () => {
    window.open("https://github.com/NucleoidJS/Nucleoid", "_blank");
  };

  if (!open) {
    return null;
  } else {
    return (
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          //  width: 450,
          maxWidth: 450,
          margin: 15,

          backgroundColor: "#f5f5f9",

          boxShadow: "1px 2px 3px 1px #aaaaaa",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            height: "44px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              paddingLeft: 2,
              fontSize: "1rem",
              fontWeight: "bold",
              minWidth: "36px",
            }}
          ></span>
          <StarUsButton onClick={handleClickStarUsButton} />
          <span
            onClick={handleClose}
            style={{
              marginRight: "15px",
              fontSize: 25,
              transform: "rotate(45deg)",
              cursor: "pointer",
            }}
          >
            +
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <span style={{ fontSize: 14 }}>
            &emsp;Thanks to declarative programming, we have a brand-new
            approach to data and logic. As we are still discovering what we can
            do with this powerful programming model, please join us with any
            types of contribution!
          </span>
          <img
            src={"https://cdn.nucleoid.com/media/nobel.png"}
            alt={"Nobel"}
            width={65}
            height={65}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "25px",
          }}
        ></div>
      </div>
    );
  }
};

export default StarUsMessageDialog;
