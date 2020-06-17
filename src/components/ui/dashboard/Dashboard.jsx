import React from "react";
import ContainerCard from "../cards/ContainerCard";
import { createUseStyles } from "react-jss";
import SalaryInsights from "./SalaryInsights";
import DashboardAnalytics from "./DashboardAnalytics";
import CardTitle from "../titles/CardTitle";

function Dashboard(props) {
  const useStyles = createUseStyles((theme) => ({
    subTitle: {
      fontSize: theme.text.size.t12,
      color: theme.text.color.light,
    },
  }));
  const classes = useStyles();
  return (
    <ContainerCard background={"#F3F1F3"}>
      <CardTitle>Your Dashboard</CardTitle>
      <span className={classes.subTitle}>
        <i>Private to You</i>
      </span>
      <DashboardAnalytics />

      <SalaryInsights />
    </ContainerCard>
  );
}

export default Dashboard;
