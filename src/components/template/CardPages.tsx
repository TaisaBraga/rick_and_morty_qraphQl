import { makeStyles } from '@material-ui/core';
import { DotLoader } from 'react-spinners';
import { useCharactersResultContext } from '../context/CardContext';
import { CardsList } from '../organisms/CardsList';

const useStyles = makeStyles(() => ({
  loaderDiv: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
  }
}))

export const CardPages = () => {
  const classes = useStyles();
  const { charactersResultLoading } = useCharactersResultContext();

  return (
    <>
      {
        charactersResultLoading ? (
          <div className={classes.loaderDiv}>
            <DotLoader color="#32CD32" size="3em" />
          </div>
        ) : (<CardsList />)
      }
    </>
  )
}
