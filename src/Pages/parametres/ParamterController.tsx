import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ChangeProfile from './pages/ChangeProfile';

const ParamterController = () => {
    const nav = useNavigate()
    const param = useParams() as {id:string};
    const AllParamId = ["home", "profile"];
    const AllPageId = [<>hey</>, <ChangeProfile />]
    useEffect(() => {
        if (!AllParamId.includes(param.id)) nav("/parametres/home");
    })
    return (
        <div>
            {
               AllPageId[AllParamId.findIndex(e => e === param.id)]
            }
        </div>
    );
};

export default ParamterController;