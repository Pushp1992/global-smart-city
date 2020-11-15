import Grid from "@material-ui/core/Grid";
import TagLine from "../TagLine/tag-line";

const styles = {
  videoStyle: {
    position: "relative",
    width: "100%",
  },
  taglineParentDiv: {
    position: "absolute",
    marginTop: "20%",
    marginLeft: "15%",
  },
};

const IntroVideo = () => {
  const BASE_URL =
    "https://res.cloudinary.com/pushpcloud/video/upload/c_scale/v1604220257";

  return (
    <Grid container direction="row">
      <Grid item md>
        <video
          style={styles.videoStyle}
          controls={false}
          autoplay="true"
          loop={true}
          muted={true}
        >
          <source
            src={`${BASE_URL}/smart-city/intro-video_hwhsp3`}
            type="video/mp4"
          />
        </video>
      </Grid>
      <Grid item style={styles.taglineParentDiv}>
        <TagLine />
      </Grid>
    </Grid>
  );
};

export default IntroVideo;
