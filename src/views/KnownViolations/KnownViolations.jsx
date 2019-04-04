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

function KnownViolations(props) {
  const { classes } = props;
  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Known Violations"
            headerColor="primary"
            tabs={[
              {
                tabName: "Top Violations",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Source", "Destination", "Violation Count", "Exception JIRA", "Action"]}
                        tableData={[
                          ["10.20.30.40", "abc.appservice_ENVabcd", "20000", "JIRA-1231", ""],
                          ["xyz.appservice_ENVabcd", "abc.appservice_ENVabcd", "2000", "JIRA-1232", ""],
                          ["xyz123.appservice_ENVabcd", "abc.appservice_ENVabcd", "200", "JIRA-1233", ""],
                          ["xyz123.appservice_ENVabcd", "abc123.appservice_ENVabcd", "20", "JIRA-1234", ""]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "Top Source",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Source", "Owner", "Violation Count", "Exception JIRA", "Action"]}
                        tableData={[
                          ["10.20.30.40", "owner1", "20000", "JIRA-1231",""],
                          ["xyz.appservice_ENVabcd", "owner2", "2000", "JIRA-1232",""],
                          ["xyz123.appservice_ENVabcd", "owner13", "200", "JIRA-1234",""],
                          ["xyz123.appservice_ENVabcd", "owner4", "20", "JIRA-1235",""]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "Top Destination",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Destination", "Owner", "Violation Count", "Exception JIRA", "Action"]}
                        tableData={[
                          ["10.20.30.40", "owner1", "20000", "JIRA-1231",""],
                          ["xyz.appservice_ENVabcd", "owner2", "2000", "JIRA-1232",""],
                          ["xyz123.appservice_ENVabcd", "owner13", "200", "JIRA-1234",""],
                          ["xyz123.appservice_ENVabcd", "owner4", "20", "JIRA-1235",""]
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

export default withStyles(styles)(KnownViolations);
