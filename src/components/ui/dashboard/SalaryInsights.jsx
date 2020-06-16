import React from "react";
import ContainerCard from "../cards/ContainerCard";
import CustomLink from "../links/CustomLink";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { createUseStyles } from "react-jss";

function SalaryInsights(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "0 15px",
      fontSize: theme.text.size.t1,
      cursor: "pointer",
    },
    title: {
      color: theme.text.color.dark,
      fontWeight: "600",
    },
    subtitle: {
      color: theme.text.color.light,
      fontWeight: "400",
    },
  }));
  const classes = useStyles();
  return (
    <ContainerCard background={"white"}>
      <CustomLink to={"/"}>
        <div className={"d-flex"}>
          <FaRegMoneyBillAlt
            style={{ fontSize: "1.5rem" }}
            className={classes.title}
          />
          <span className={classes.container}>
            <span className={classes.title}>Salary Insights</span>
            <span className={classes.subtitle}>
              See how your salary compares to others in the community
            </span>
          </span>
        </div>
      </CustomLink>
    </ContainerCard>
  );
}

export default SalaryInsights;
