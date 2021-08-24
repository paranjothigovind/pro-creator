import React, { useEffect, useState } from 'react';
import { useLocation, withRouter } from 'react-router';
import { action, cloud, cameraIcon, closeIcon, cloudActive, contact, notification, scanIcon, tabs, tabsActive, uploadIcon } from '../../assets/images';

const Tabs = ({history}) => {

    const location = useLocation();
    const [active, setActive]= useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        switch(location.pathname.replace("/","")){
            case 'home': 
                return setActive('cloud');
            case 'local-storage': 
                return setActive('tab');
            case 'notifications': 
                return setActive('notification');
        }
    })

    const handleNavigate = (value) => {
        const { name } = value.target;
        history.push(name)
    }

    return(
        <div className="footer-tabs">
            <img src={active === 'cloud' ? cloudActive : cloud } name="/home" onClick={handleNavigate} />
            <img src={active === 'tab' ? tabsActive : tabs}  name="/local-storage" onClick={handleNavigate} />
            <img src={active === 'action' ?  action : action} onClick={() => setOpen(!open)} />
            <img src={active === 'notification' ?  notification : notification} name="/notifications" onClick={handleNavigate} />
            <img src={active === 'contact' ?  contact : contact} />
            {open && <div className="action">
                <div className="action_container">
                    <div className="action_menu">
                        <img src={scanIcon} />
                        <label>Scan</label>
                    </div>
                    <div className="action_middle">
                        <div className="action_menu">
                            <img src={cameraIcon} />
                            <label>Photo</label>
                        </div>
                        <img src={closeIcon} onClick={() => setOpen(false)} />
                    </div>
                    <div className="action_menu1">
                        <img src={uploadIcon} />
                        <label>Upload</label>
                    </div>    
                </div>
            </div>}
        </div>
    )
}

export default withRouter(Tabs);