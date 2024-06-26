import * as stylex from "@stylexjs/stylex";
import { myFontSizes, mywhiteColors } from "../../assets/styles/styles.stylex";
// import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRoles } from "../../context/RoleProvider";
import { useUsers } from "../../context/user/UserProvider";


const styles = stylex.create({
  base: () => ({
    height: "100%",
    width: "100%",
    // background: {
    //   //default: "rgba(248, 248, 255, 0.21)",
    //   default: "rgba(57, 47, 48, 0.56)",
    // },
    background: {
      //default: "rgba(27, 29, 36, 0.62)",
      default: "rgba(27, 29, 36, 0.38)",
    },
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(13px)",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    borderTopRightRadius: "16px",
    borderBottomRightRadius: "16px",

    //boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    //backdropFilter: "blur(13px)",
    //border: "1px solid rgba(248, 248, 255, 0.3)",
    //border: "1px solid rgba(57, 47, 48, 0.3)",
    padding: "1rem",
  }),
  buttonsContainer: () => ({
    // height: "10%",
    height: "7rem",
    marginBottom: "1rem",
    background: {
      //default: "rgba(27, 26, 57, 0.2)",
      //default: "rgba(255, 255, 255, 0.12)",
      default: "rgba(27, 29, 36, 0.38)",
    },
    //backdropFilter: "blur(20px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    //border: "1px solid rgba(27, 26, 57, 0.3)",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    borderTopRightRadius: "6px",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // padding: "0 1rem",
  }),
  labelButtonsField: () => ({
    color: mywhiteColors.antiflesh,
    fontSize: myFontSizes.myFontSize7,
    height: "35%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
  }),
  buttonsField: () => ({
    height: "65%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
  }),
  buttonRegisterStyle: () => ({
    color: mywhiteColors.antiflesh,
    fontSize: myFontSizes.myFontSize7,
    background: {
      default: "#429962",
      ":hover": "#2b7045",
    },
    border: "1px solid rgba(0, 0, 0, 0.3)",
    width: "15rem",
    height: "3rem",
    textAlign: "center",
    borderRadius: "0.6rem",
  }),
  workSpaceContainer: () => ({
    // height: "88.3%",
    // display: "flex",
    // flexDirection: "column",
    height: "calc(100% - 8rem)",
  }),
});
function PersonalComponent() {
  const { loadRoles } = useRoles();
  const { loadUsers } = useUsers();
  // const [currentComponent, setCurrentComponent] = useState(null);
  // const [showCards, setShowCards] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    loadUsers()
    loadRoles()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // const { roles, loadRoles } = useRoles();
  // useEffect(() => {
  //   // if (!roles) {
  //   //   loadRoles().catch((error) => console.log("Error loading roles"));
  //   // }
  //   loadRoles()
  // });
  
  // function filteredRoles() {
  //   return roles && roles.filter((role) => role.roleName !== "admin");
  // }

  // const showComponent = (component) => {
  //   if (currentComponent) {
  //     setCurrentComponent(null);
  //   }
  //   setCurrentComponent(component);
  // };
  return (
    <div {...stylex.props(styles.base())}>
      <div {...stylex.props(styles.buttonsContainer())}>
        <div {...stylex.props(styles.labelButtonsField())}>
          <label>Gestion de personal</label>
        </div>
        <div {...stylex.props(styles.buttonsField())}>
          <button
            // onClick={() => showComponent(<RegisterUserForm/>)}
            onClick={() => navigate("nuevo")}
            {...stylex.props(styles.buttonRegisterStyle())}
          >
            Registrar
          </button>
        </div>
      </div>
      <div {...stylex.props(styles.workSpaceContainer())}>
        {/* {currentComponent} */}
        {/* {showCards ? <CardsContainer /> : <Outlet />} */}
        {<Outlet/>}
      </div>
    </div>
  );
}
export default PersonalComponent;
