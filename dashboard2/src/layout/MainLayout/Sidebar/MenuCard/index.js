import React from "react";
import PropTypes from "prop-types";
// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
  LinearProgress,
  ListItemText,
  linearProgressClasses,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { styled, useTheme } from "@mui/material/styles";
// project imports
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import AnimateButton from "ui-component/extended/AnimateButton";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#fff",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.light,
  marginBottom: "22px",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "157px",
    height: "157px",
    background: theme.palette.primary[200],
    borderRadius: "50%",
    top: "-105px",
    right: "-96px",
  },
}));
// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.warning.light,
    marginTop: "16px",
    marginBottom: "16px",
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "19px solid ",
      borderColor: theme.palette.warning.main,
      borderRadius: "50%",
      top: "65px",
      right: "-150px",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "3px solid ",
      borderColor: theme.palette.warning.main,
      borderRadius: "50%",
      top: "145px",
      right: "-70px",
    },
  },
  tagLine: {
    color: theme.palette.grey[900],
    opacity: 0.6,
  },
  button: {
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.warning.main,
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
}));

// ===========================|| PROFILE MENU - UPGRADE PLAN CARD ||=========================== //
function LinearProgressWithLabel({ value, ...others }) {
  const theme = useTheme();

  return (
    <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" sx={{ color: theme.palette.primary[800] }}>
              Progress
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="inherit">{`${Math.round(
              value
            )}%`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <BorderLinearProgress variant="determinate" {...others} />
      </Grid>
    </Grid>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number,
};
const UpgradePlanCard = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <CardStyle>
        <CardContent sx={{ p: 2 }}>
          <List sx={{ p: 0, m: 0 }}>
            <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
              <ListItemAvatar sx={{ mt: 0 }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.largeAvatar,
                    color: theme.palette.primary.main,
                    border: "none",
                    borderColor: theme.palette.primary.main,
                    background: "#fff",
                    marginRight: "12px",
                  }}
                >
                  <TableChartOutlinedIcon fontSize="inherit" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ mt: 0 }}
                primary={
                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.palette.primary[800] }}
                  >
                    Get Extra Space
                  </Typography>
                }
                secondary={<Typography variant="caption"> 28/23 GB</Typography>}
              />
            </ListItem>
          </List>
          <LinearProgressWithLabel value={10} />
        </CardContent>
      </CardStyle>
    </>
  );
};

export default UpgradePlanCard;
