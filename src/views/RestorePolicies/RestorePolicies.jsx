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

function RestorePolicies(props) {
  const { classes } = props;
  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Restore Policies"
            headerColor="primary"
            tabs={[
              {
                tabName: "Recent",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Created", "Sentinel Policy", "RESTORE Ticket", "RCA Link", "Action"]}
                        tableData={[
                          ["01/01/2019 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627873", "Link1", ""],
                          ["01/02/2019 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627871", "Link1", ""],
                          ["01/03/2019 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627872", "Link1", ""],
                          ["01/04/2019 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627875", "Link1", ""],
                          ["01/05/2019 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627873", "Link1", ""]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "Past Due (1 week)",
                tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={["Created", "Sentinel Policy", "RESTORE Ticket", "RCA Link", "Action"]}
                        tableData={[
                          ["01/01/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627873", "Link1", ""],
                          ["01/02/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627871", "Link1", ""],
                          ["01/03/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627872", "Link1", ""],
                          ["01/04/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627875", "Link1", ""],
                          ["01/05/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627873", "Link1", ""], 
                          ["01/01/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627873", "Link1", ""],
                          ["01/02/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627871", "Link1", ""],
                          ["01/03/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627872", "Link1", ""],
                          ["01/04/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627875", "Link1", ""],
                          ["01/05/2018 ","policy-pmtbaasecdc-app-ENV6imo6zd8b1g-sasamlnfs-addresssets", "RESTR48627873", "Link1", ""]
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

export default withStyles(styles)(RestorePolicies);
