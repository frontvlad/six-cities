import { AppRouter } from 'app/providers/router';
import { CheckAuthorization } from 'modules/Authorization/store/const/const';
import { getIsCheckAuthorization } from 'modules/Authorization/store/selectors/getIsCheckAuthorization/getIsCheckAuthorization';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'ui/Loader';
import { fetchCheckAuth } from '../modules/Authorization/store/api/fetchCheckAuth/fetchCheckAuth';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCheckAuth());
    }, [dispatch]);

    const isCheckAuth = useSelector(getIsCheckAuthorization);

    if (isCheckAuth === CheckAuthorization.NO_CHECK) {
        return <Loader />;
    }

    return (
        <AppRouter />
    );
}

export default App;
