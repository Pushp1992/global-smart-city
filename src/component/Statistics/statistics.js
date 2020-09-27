import Grid from '@material-ui/core/Grid';

let cityImg = '../images/statistics/icon_city.png';
let catalogImg = '../images/statistics/icon_catalog.png';
let resourceImg = '../images/statistics/icon_resource.png';
let apisImg = '../images/statistics/icon_apis.png';
let viewsImg = '../images/statistics/icon_views.png';
let downloadImg = '../images/statistics/icon_download.png';

const styles = {
    label: {
        color: '#afafaf',
    }
}
export default function Statistics() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs>
                    <div><img src={cityImg} alt='stat_img' /></div>
                    <h3>100</h3>
                    <label style={styles.label}>Cities</label>
                </Grid>
                <Grid item xs>
                    <div><img src={catalogImg} alt='stat_img' /></div>
                    <h3>1,979</h3>
                    <label style={styles.label}>Catloges</label>
                </Grid>
                <Grid item xs>
                    <div><img src={resourceImg} alt='stat_img' /></div>
                    <h3>2,593</h3>
                    <label style={styles.label}>Resources</label>
                </Grid>
                <Grid item xs>
                    <div><img src={apisImg} alt='stat_img' /></div>
                    <h3>142</h3>
                    <label style={styles.label}>APIs</label>
                </Grid>
                <Grid item xs>
                    <div><img src={viewsImg} alt='stat_img' /></div>
                    <h3>190,342</h3>
                    <label style={styles.label}>Views</label>
                </Grid>
                <Grid item xs>
                    <div><img src={downloadImg} alt='stat_img' /></div>
                    <h3>12,343</h3>
                    <label style={styles.label}>Downloads To Date</label>
                </Grid>
            </Grid>
        </>
    )
}