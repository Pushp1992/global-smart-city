import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

let cityImg = "../images/statistics/icon_city.png";
let catalogImg = "../images/statistics/icon_catalog.png";
let resourceImg = "../images/statistics/icon_resource.png";
let apisImg = "../images/statistics/icon_apis.png";
let viewsImg = "../images/statistics/icon_views.png";
let downloadImg = "../images/statistics/icon_download.png";

const IMAG_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/w_1507,h_400,c_scale/v1604384404/smart-city";

const styles = {
  label: {
    color: "#afafaf",
  },
};
function ValueProposition() {
  return (
    <Grid item xs zeroMinWidth>
      <Paper>
        <img src={`${IMAG_URL}/unique-value_vn8vf2`} alt="value proposition" />
      </Paper>
    </Grid>
  );
};

function Statistics() {
  return (
    <>
      <Paper square={true}>
        <Grid container spacing={3}>
          <Grid item xs>
            <div>
              <img src={cityImg} alt="stat_img" />
            </div>
            <h3>100</h3>
            <label style={styles.label}>Cities</label>
          </Grid>
          <Grid item xs>
            <div>
              <img src={catalogImg} alt="stat_img" />
            </div>
            <h3>1,979</h3>
            <label style={styles.label}>Catloges</label>
          </Grid>
          <Grid item xs>
            <div>
              <img src={resourceImg} alt="stat_img" />
            </div>
            <h3>2,593</h3>
            <label style={styles.label}>Resources</label>
          </Grid>
          <Grid item xs>
            <div>
              <img src={apisImg} alt="stat_img" />
            </div>
            <h3>142</h3>
            <label style={styles.label}>APIs</label>
          </Grid>
          <Grid item xs>
            <div>
              <img src={viewsImg} alt="stat_img" />
            </div>
            <h3>190,342</h3>
            <label style={styles.label}>Views</label>
          </Grid>
          <Grid item xs>
            <div>
              <img src={downloadImg} alt="stat_img" />
            </div>
            <h3>12,343</h3>
            <label style={styles.label}>Downloads To Date</label>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export { Statistics, ValueProposition };
