import { makeStyles} from "@material-ui/core";
export default makeStyles(()=>({
    income:{
        borderBottom: '10px solid rgb(102,255,102)',
    },

    expense:{
        borderBottom: '10px solid rgb(255,102,102)',
    },

    chart: {
        maxHeight: '250px',
        overflow: 'auto',
      },
}));