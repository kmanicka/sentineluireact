import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";


import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function CriticalApplications(props) {
  const { classes } = props;
  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Critical Applications"
            headerColor="primary"
            tabs={[
              {
                tabName: "10 min",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Name", "Country", "City", "Salary"]}
                        tableData={[
                          ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                          ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                          ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                          ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                          ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                          ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "30 min",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Name", "Country", "City", "Salary"]}
                        tableData={[
                          ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                          ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                          ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                          ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                          ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                          ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "1 hour",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Name", "Country", "City", "Salary"]}
                        tableData={[
                          ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                          ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                          ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                          ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                          ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                          ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              }
            ]}
          />
        </GridItem>


    </GridContainer>
  );
}

export default withStyles(styles)(CriticalApplications);
