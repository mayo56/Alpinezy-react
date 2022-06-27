import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LeftBar from './components/leftBar';
import ChangeProfile from './pages/ChangeProfile';

const ParamterController = () => {
    const nav = useNavigate()
    const param = useParams() as { id: string };
    const AllParamId = ["home", "profile"];
    const AllPageId = [<>hey</>, <ChangeProfile />]
    useEffect(() => {
        if (!AllParamId.includes(param.id.toLocaleLowerCase())) nav("/parametres/home");
    },[])
    return (
        <div className='grid grid-cols-[200px_auto] mt-[10px] text-white'>
            <LeftBar />
            <div className='ml-[10px]'>
                {
                    AllPageId[AllParamId.findIndex(e => e === param.id.toLocaleLowerCase())]
                }
            </div>
        </div>
    );
};

export default ParamterController;