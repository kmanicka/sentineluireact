import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
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


import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function Users(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
 

          <CustomTabs
            title="Violations in last:"
            headerColor="primary"
            tabs={[
              {
                tabName: "SEC",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Name", "email", "Action"]}
                        tableData={[
                          ["secuser1", "secuser1@ebay.com", ""],
                          ["secuser2", "secuser2@ebay.com", ""]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "SCC",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Name", "email", "Action"]}
                        tableData={[
                          ["sccuser1", "sccuser1@ebay.com", ""],
                          ["sccuser2", "sccuser2@ebay.com", ""]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "GIS",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Name", "email", "Action"]}
                        tableData={[
                          ["gisuser1", "gisuser1@ebay.com", ""],
                          ["gisuser2", "gisuser2@ebay.com", ""]
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
    </div>
  );
}

export default withStyles(styles)(Users);
