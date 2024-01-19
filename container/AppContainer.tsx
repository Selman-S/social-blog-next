'use client'
import { selectThemeConfig, themeSlice } from '@/lib/redux/slices/themeSlice';
import { selectUser } from '@/lib/redux/slices/userSlice';
import useAuthCall from '@/service/useAuthCall';
import { PropsWithChildren, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


function AppContainer({ children }: PropsWithChildren) {

    const themeConfig = useSelector(selectThemeConfig)
    // const { userObserver } = useAuthCall();

    // const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    // const { i18n } = useTranslation();

    useEffect(() => {
        // const user = userObserver()
        // console.log(user.currentUser);

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