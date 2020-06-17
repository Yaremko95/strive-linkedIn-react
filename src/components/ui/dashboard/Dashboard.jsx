import React from "react";
import ContainerCard from "../cards/ContainerCard";
import { createUseStyles } from "react-jss";
import SalaryInsights from "./SalaryInsights";
import DashboardAnalytics from "./DashboardAnalytics";
import CardEExp from "./CardEExp";
import ContainerEExp from "./ContainerEExp";


function Dashboard(props) {
  const useStyles = createUseStyles((theme) => ({
    h2: {
      fontSize: theme.text.size.t20,
      color: theme.text.color.dark,
    },
    subTitle: {
      fontSize: theme.text.size.t12,
      color: theme.text.color.light,
    },
  }));
  const classes = useStyles();
  console.log("experience", props)
  return (
    <ContainerCard background={"#F3F1F3"}>
      <h2 className={classes.h2}>Your Dashboard</h2>
      <span className={classes.subTitle}>
        <i>Private to You</i>
      </span>
      <DashboardAnalytics />
      
      <SalaryInsights />
    </ContainerCard>
  );
}

export default Dashboard;
