import React, {useState} from 'react';
import './modal-login.scss'
import './../../../styles/elements/buttons.scss'
import './../../../styles/elements/inputs.scss'
import Cover from "../../cover/Cover";
import {useAppDispatch} from "../../../hooks/redux";
import {userSlice} from "../../../store/reducers/user/UserSlice";
import InitialModalLogin from "./initial-modal/InitialModalLogin";
import CodeModalLogin from "./code-modal/CodeModalLogin";
import NameModalLogin from "./name-modal/NameModalLogin";
import CreateModalLogin from "./create-modal/CreateModalLogin";
import EnterModalLogin from "./enter-modal/EnterModalLogin";

interface IModalLogin {
    observableModal?: number,
    isShelter?: boolean,
}

const ModalLogin = ({observableModal = 0, isShelter = false}: IModalLogin) => {
    const {changeIsUserModal} = userSlice.actions
    const dispatch = useAppDispatch()
    // 0 - InitialModalLogin
    // 1 - CodeModalLogin
    // 2 - NameModalLogin
    // 3 - CreateModalLogin
    // 4 - EnterModalLogin
    const [currentModal, setCurrentModal] = useState(observableModal)

    const closeUserModal = () => {
        console.log('hey')
        dispatch(changeIsUserModal(false))
    }

    return (
        <>
            <div className={'userAuthModal'}>
                {currentModal === 0 && <InitialModalLogin setCurrentModal={setCurrentModal}/>}
                {currentModal === 1 && <CodeModalLogin setCurrentModal={setCurrentModal} isShelter={isShelter}/>}
                {currentModal === 2 && <NameModalLogin setCurrentModal={setCurrentModal}/>}
                {currentModal === 3 && <CreateModalLogin closeUserModal={closeUserModal}/>}
                {currentModal === 4 && <EnterModalLogin closeUserModal={closeUserModal}/>}
            </div>
            <Cover callback={closeUserModal}/>
        </>
    );
};

export default ModalLogin;