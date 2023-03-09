import React, {useState} from 'react';
import './modal-login.scss'
import Cover from "../../cover/Cover";
import {useAppDispatch} from "../../../hooks/redux";
import {userSlice} from "../../../store/reducers/user/UserSlice";
import InitialModalLogin from "./initial-modal/InitialModalLogin";
import CodeModalLogin from "./code-modal/CodeModalLogin";
import NameModalLogin from "./name-modal/NameModalLogin";
import CreateModalLogin from "./create-modal/CreateModalLogin";

const ModalLogin = () => {
    const {changeIsUserModal} = userSlice.actions
    const dispatch = useAppDispatch()
    // 0 - InitialModalLogin
    // 0 - CodeModalLogin
    const [currentModal, setCurrentModal] = useState(3)

    const closeUserModal = () => {
        dispatch(changeIsUserModal(false))
    }

    return (
        <>
            <div className={'userAuthModal'}>
                {/*{currentModal === 0 && <InitialModalLogin setCurrentModal={setCurrentModal}/>}*/}
                {/*{currentModal === 1 && <CodeModalLogin setCurrentModal={setCurrentModal}/>}*/}
                {/*{currentModal === 2 && <NameModalLogin setCurrentModal={setCurrentModal}/>}*/}
                {currentModal === 3 && <CreateModalLogin/>}
            </div>
            <Cover callback={closeUserModal}/>
        </>
    );
};

export default ModalLogin;