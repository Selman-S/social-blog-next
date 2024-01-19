'use client'
import { selectThemeConfig, themeSlice } from '@/lib/redux/slices/themeSlice';
import useAuthCall from '@/service/useAuthCall';
import { PropsWithChildren, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


function AppContainer({ children }: PropsWithChildren) {

    const themeConfig = useSelector(selectThemeConfig)
<<<<<<< HEAD
=======
    // const { userObserver } = useAuthCall();

    // const themeConfig = useSelector((state: IRootState) => state.themeConfig);
>>>>>>> 2b10b2b7687049e2507cb232ebdaa582a90a21bd
    const dispatch = useDispatch();

    useEffect(() => {
<<<<<<< HEAD
=======
        // const user = userObserver()
        // console.log(user.currentUser);

>>>>>>> 2b10b2b7687049e2507cb232ebdaa582a90a21bd
        dispatch(themeSlice.actions.toggleTheme(localStorage.getItem('theme') || themeConfig.theme));

    }, [dispatch, themeConfig.theme]);

    return (
        <div
            className="relative  text-sm bg-loginbg"
        >
            {children}
        </div>
    );
}

export default AppContainer;