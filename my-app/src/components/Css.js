import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  questionnaireContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  question: {
    marginBottom: '20px',
  },
  answer: {
    marginBottom: '10px',
  },
  error: {
    color: 'red',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    textTransform: 'none',
  },
});
export default useStyles;