import Grid from "@material-ui/core/Grid";

const IMAG_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1604384404/smart-city";

const styles = {
  label: {
    color: "#afafaf",
  },
  display: {
    display: "contents",
  },
  maxwidth: {
    maxWidth: "80%",
  },
};
function ValueProposition() {
  return (
    <Grid item md style={styles.display}>
      <img
        src={`${IMAG_URL}/unique-value_lh4gev`}
        alt="value proposition"
        style={styles.maxwidth}
      />
    </Grid>
  );
}

export { ValueProposition };
