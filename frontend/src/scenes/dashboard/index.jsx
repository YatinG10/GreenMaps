import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import EnvBar from "../../components/EnvBar";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const sustainabilityColors = {
    background: "#E7F9EC",  // Light green background
    primary: "#34A853",     // Standard green
    accent: "#75d1a3",      // Accent green
    textLight: "#FFFFFF",
    textDark: "#333333"
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="GreenMaps" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={'#75d1a3'}
          borderRadius="10px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={'colors.grey[100]'}
              >
                Eco History
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={'colors.greenAccent[500]'}
              >
              </Typography>
            </Box>
            <Box>

            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={'#75d1a3'}
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Sustainability Scores
            </Typography>
          </Box>
          <Box height="250px" mt="-20px -10px">
            <EnvBar isDashboard={true} />
          </Box>
          
        </Box>
    

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={'#75d1a3'}
          style={{ marginBottom: "20px" }}
          p="30px"
          borderRadius="10px"
        >
          <Typography variant="h5" fontWeight="600">
            Air Quality Index
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={"#000000"}
              sx={{ mt: "15px" }}
            >
              88
            </Typography>
            <Typography>Above Average Air Quality</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={'#75d1a3'}
          overflow="auto"
          style={{ marginBottom: "20px" }}
          borderRadius="10px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Atmospheric Concentrations
          </Typography>
          <Box height="100px" width="625px" mt="10px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;